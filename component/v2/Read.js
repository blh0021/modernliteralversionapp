//import * as React from "react";
import React, { useState } from "react";
import Theme from "./Theme";
import { Text, View, FlatList, useColorScheme } from "react-native";
import VerseMap from "./VerseMap";
import books from "../../books.json";
import chapters from "../../chapter.json";
import bible from "../../bible.json";

import { Play, Stop, Forward, Backward } from "./Icons";
import { SpeakWords } from "./Speech";

import * as Speech from "expo-speech";
import { TouchableOpacity } from "react-native-gesture-handler";

const Item = ({ title, onPress }) => {
  const colorScheme = useColorScheme();
  const theme = new Theme(colorScheme);
  const mainTheme = theme.main();
  return (
    <TouchableOpacity
      style={{ flex: 1, margin: 5, padding: 5 }}
      onPress={() => onPress(title)}
    >
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={[{ flex: 1, fontSize: 20 }, mainTheme.text]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

function getVerses(book, chapter) {
  let verses = [];
  let vn = 1;
  bible[book][chapter].forEach((v) => {
    verses.push({ id: vn, verse: v });
    vn++;
  });
  return verses;
}

function MenuList({ navigation, onPress, data }) {
  const renderItem = ({ item }) => <Item title={item} onPress={onPress} />;
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

function BottomBar({ navigation, forward, backward, theme }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Backward theme={theme} onPress={backward} />
      <Forward theme={theme} onPress={forward} />
    </View>
  );
}

function BookMenu({ book, onPress }) {
  if (!book) {
    return <MenuList onPress={onPress} data={books} />;
  } else {
    return <></>;
  }
}

function ChapterMenu({ book, chapter, onPress }) {
  let menu = book
    ? [...Array(chapters[book]).keys()].map((i) => i.toString())
    : [];
  menu.shift();
  if (book && !chapter) {
    return <MenuList onPress={onPress} data={menu} />;
  } else {
    return <></>;
  }
}

function Read({ navigation }) {
  const colorScheme = useColorScheme();
  const theme = new Theme(colorScheme);
  const mainTheme = theme.main();

  const [book, setBook] = useState(null);
  const [chapter, setChapter] = useState(null);
  const [audioOn, setAudioOn] = useState(false);

  let verses = book && chapter ? getVerses(book, chapter) : [];

  function moveForward() {
    let tc = chapter;
    if (tc >= chapters[book]) {
      if (book < 66) {
        setChapter(1);
        setBook(book + 1);
      }
    } else {
      setChapter(chapter + 1);
    }
    Speech.stop();
    setAudioOn(false);
  }

  function moveBackward() {
    let tc = chapter;
    if (tc == 1) {
      if (book > 1) {
        setBook(book - 1);
        setChapter(chapters[book - 1]);
      }
    } else {
      setChapter(tc - 1);
    }
    Speech.stop();
    setAudioOn(false);
  }

  return (
    <View
      style={[
        {
          flex: 1,
          //alignItems: "center",
          //justifyContent: "center",
          padding: 10,
        },
        mainTheme.container,
      ]}
    >
      <BookMenu
        book={book}
        onPress={(v) => {
          setBook(books.indexOf(v) + 1);
        }}
      />
      <ChapterMenu
        book={book}
        chapter={chapter}
        onPress={(v) => {
          setChapter(Number(v));
        }}
      />

      {book != null && chapter != null && (
        <View style={{ flex: 1 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={[{ fontSize: 25, paddingBottom: 10 }, mainTheme.text]}
              onPress={() => {
                setBook(null);
                setChapter(null);
              }}
            >
              {books[book - 1]} {chapter}
            </Text>
            {!audioOn && (
              <Play
                theme={mainTheme}
                onPress={() => {
                  SpeakWords(bible, book, chapter, () => {
                    setAudioOn(false);
                  });
                  setAudioOn(true);
                }}
              />
            )}
            {audioOn && (
              <Stop
                theme={mainTheme}
                onPress={() => {
                  Speech.stop();
                  setAudioOn(false);
                }}
              />
            )}
          </View>

          <VerseMap verses={verses} book={book} chapter={chapter} />
          <BottomBar
            navigation={navigation}
            forward={moveForward}
            backward={moveBackward}
            theme={mainTheme}
          />
        </View>
      )}
    </View>
  );
}

export default Read;
