import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Button,
  ScrollView,
  Text,
  useColorScheme,
  TouchableOpacity,
  Share,
} from "react-native";
import Theme from "./Theme";
import cheerio from "react-native-cheerio";
import books from "../../books.json";
import { combine, copyParser } from "./TextUtil";
import { CloseButton } from "./Icons";

function VerseExploder({ verse, color }) {
  const colorScheme = useColorScheme();
  const theme = new Theme(colorScheme);
  const mainTheme = theme.main();

  let children;
  try {
    children = verse.children;
  } catch (e) {
    children = [];
  }

  return (
    <Text>
      {children.map((child, i) => {
        if (child.type == "tag") {
          let vStyle;
          if (!child.attribs.class && color) {
            vStyle = color;
          } else {
            vStyle = child?.attribs?.class ? child.attribs.class : "text";
          }
          return <VerseExploder key={i} verse={child} color={vStyle} />;
        } else {
          return (
            <Text key={i} style={mainTheme[color]}>
              {child.data}
            </Text>
          );
        }
      })}
    </Text>
  );
}

function SelectMenu({ selectedList, book, chapter, share, exit }) {
  const colorScheme = useColorScheme();
  const theme = new Theme(colorScheme);
  const mainTheme = theme.main();
  return (
    <View
      style={{
        flex: 0.2,
        flexDirection: "column",
        padding: 10,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={[{ fontSize: 18 }, mainTheme.text]}>
          {books[book]} {chapter}: {combine(selectedList)}
        </Text>
        <CloseButton onPress={exit} theme={mainTheme} />
      </View>

      <Button title="Share" onPress={share} />
    </View>
  );
}

export default function VerseMap({ verses, book, chapter }) {
  const [selected, setSelected] = useState([]);

  const colorScheme = useColorScheme();
  const theme = new Theme(colorScheme);
  const mainTheme = theme.main();
  const scrollRef = useRef();

  useEffect(() => {
    //Reset selectd value only if verses change.
    setSelected([]);

    //Move to start of the chapter on next or prev chapter button
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }, [verses]);

  const onShare = async (message) => {
    try {
      const result = await Share.share({
        message: message,
        title: "MLV Verses",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 0.8 }} ref={scrollRef}>
        {verses.map((v) => {
          let $ = cheerio.load(v.verse);
          let v1 = $("body")[0];

          let selectDecoration = selected.includes(v.id) ? "underline" : "none";

          return (
            <TouchableOpacity
              key={v.id}
              onPress={() => {
                let s;
                if (selected.includes(v.id)) {
                  s = selected.filter((val, ix, arr) => {
                    return val != v.id;
                  });
                } else {
                  s = JSON.parse(JSON.stringify(selected));
                  s.push(Number(v.id));
                }

                setSelected(
                  s.sort(function (a, b) {
                    return a - b;
                  })
                );
              }}
            >
              <Text
                style={[
                  {
                    fontSize: 18,
                    paddingTop: 10,
                    textDecorationLine: selectDecoration,
                  },
                  mainTheme.text,
                ]}
              >
                <Text>{v.id}. </Text>
                <VerseExploder verse={v1} color="text" />
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {selected.length > 0 && (
        <SelectMenu
          selectedList={selected}
          book={book}
          chapter={chapter}
          share={() => {
            let cp = copyParser(verses, selected, book, chapter);
            onShare(cp);
            //Clipboard.setString(copyParser(verses, selected, book, chapter));
          }}
          exit={() => {
            setSelected([]);
          }}
        />
      )}
    </View>
  );
}
