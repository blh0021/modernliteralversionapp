import * as React from "react";
import { Text, ScrollView, useColorScheme, Button } from "react-native";
import Theme from "./Theme";

export default function Preface() {
  const colorScheme = useColorScheme();
  const theme = new Theme(colorScheme);
  const mainTheme = theme.main();

  function PText({ children }) {
    return (
      <Text
        style={[
          mainTheme.text,
          { textAlign: "justify", fontSize: 18, paddingBottom: 10 },
        ]}
      >
        {children}
      </Text>
    );
  }

  return (
    <ScrollView style={[{ flex: 1, padding: 10 }, mainTheme.container]}>
      <Text style={[{ fontSize: 25, paddingBottom: 10 }, mainTheme.text]}>
        History
      </Text>
      <PText>
        God wrote His New Covenant with man in a language called Koine Greek.
        The Modern Literal Version uses the Majority Greek Text (The New
        Testament in the Original Greek, Byzantine Textform 2018, Compiled and
        Arranged by Maurice A. Robinson and William Pierpont).
      </PText>
      <PText>
        Only three primarymethods exist to translate a foreign language. The
        first is to translate each word, in a literal word for word fashion,
        keeping the original word order (ISBN: 978-1973921967). This, when
        combined with the Greek Bible is called a ‘Greek interlinear’ even
        though most ofthemattempt to be a ‘translation’ especially the pathetic
        ‘reverse interlinear’ ofrecent times. This will be our, not yet
        published, ‘New Koine Greek Textbook VI.’
      </PText>
      <PText>
        The Modern Literal Version is the second type of ‘literal’ translation
        also called a ‘word-for-word’ translation (descriptions ‘coined’
        centuries ago). This sounds like an interlinear, but is not the same and
        the two should not be confused with each other. (This difference is
        where all those who talk about translations, who have never worked on a
        published translation, are misled and mislead others.) In a literal
        translation each word and phrase is uniformly rendered, Greek idioms
        (all languages have them, Greek has plenty of them) are carefully
        translated uniformly. The Greek parts of speech are rearranged as they
        would be in typical English: subject, verb, object, indirect object, and
        punctuation is added. Greek is extremely choppy and supplied words are
        needed to have an ‘English like flow’ to them. (In particular, the word
        “the” often needs to be added.) Supplied words should always be
        identified in all literal translations. This way the reader can always
        omit them if desired. Now for the extremely rare places (the unskilled
        think idioms are such places) where literal is too choppy for most
        English readers, two sub-methods exist, which are either paraphrasing or
        adding supplied words. The MLV uses the latter. Supplied words are
        written in italicsin the MLV text. No truly literal translation can be
        ‘English teachers approved’ without paraphrasing!
      </PText>
      <PText>
        The third translation method, and the most common one especially in the
        past 30 years, is to paraphrase the Greek into English. These are easy
        to spot because they read like a newspaper or a story book and have no
        supplied words marked in them. They are ‘English teacher’ approved
        wording and sentence structure. English teachers are more the
        translators of these translations than Greek scholars. This type of
        translation is known by various names, such as dynamic equivalence,
        essentially literal, free style, thoughtfor-thought, better than a
        word-for-word, and so on. The paraphrased versions actually account for
        more than 95% of all Bible translations ever made. We understand the
        value of a paraphrase for those looking for a Bible that reads as easily
        as a newspaper, and want the translators to interpret the Bible for
        them. But this type should never be used as a study tool. A sad
        commentary is paraphrased foreign language documents are acceptable only
        in fiction, story telling and churches.
      </PText>
      <PText>
        However, we feel strongly that thought-for-thought introduces way too
        many editorial opinions. They are sometimes better described as ‘opinion
        for opinion’ because each time they are proofread by another person(s)
        or English teacher, more personal beliefs are exchanged for the Word of
        God. We desire to see a Bible that reproduces the original Greek Bible
        into modern English as faithfully as possible with as little editorial
        bias as possible. One way to look at it is like this: If there was a
        court case with a key document as evidence, and this document was in a
        foreign language, would a ‘essential literal’ translation be acceptable?
        No! The document we are talking about here is the ‘Last Will and
        Testament’ of our Lord Jesus. Did you know that paraphrased bible
        versions are generally 10% smaller than literal ones in the number of
        words they contain? They are often watered down and those places that
        are disputed by the various religious groups will always match the
        beliefs oftheir translators, or those controlling the money behind the
        translation. The goal of everyone who has worked on the Modern Literal
        Version has been to keep any form of commentary or paraphrasing out of
        the translation as much as is humanly possible.
      </PText>
      <PText>
        The MLV stays free from theological concerns and traditions by
        translating the text as literally as possible while retaining modern
        language and readability. The ‘Open Source’ approach (discussed more
        later) is a far superior ‘checks and balance’ system. In roughly 30
        years only one person recommended an ‘indoctrination.’ People don’t even
        try because the next person would just remove it.
      </PText>
      <PText>
        The MLV is NOT under the control of any: denomination, publishing
        company, government, college or software vendor and is not the current
        work of any either; that is why it can be sold for no profit. The Open
        Source method takes the control from those who love money and power and
        gives the power back to ALL Christians who want to have the ‘purest’
        Word of God available. The only uninspired traditions kept in the MLV
        are punctuation and capitalization, chapter and verse numbers, and the
        not God breathed non-chronological book order.
      </PText>
    </ScrollView>
  );
}
