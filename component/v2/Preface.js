import * as React from "react";
import { Text, ScrollView, useColorScheme } from "react-native";
import Theme from "./Theme";

export default function History() {
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
        Preface
      </Text>
      <PText>
        The MLV was the first translation to use the power of the computer (an
        8086), and absolutely would have been impossible before the computer age
        and WordPerfect and its macro abilities (special thanks to Corel
        Corporation).
      </PText>
      <PText>
        The ‘Modern Literal Version New Testament’ came about in 1987 due to a
        young Christian’s goal to find an accurate Modern English translation
        from which to study. The New American Standard contradicted itselfin
        Matthew5:17 and Ephesians 2:15 for example. Almost all other Modern
        English translations do not claim to be literal or word-for-word and
        most that make such a claim are factually not! Concordance look-ups in
        all existing translations present non-uniform Greek word renderings and
        this too was an issue of concern.
      </PText>
      <PText>
        A Bible Study Group, of which this new Christian was a part, was
        actively doing topical, English and Greek word studies with their Bibles
        and ‘Englishman’s Greek Concordances.’ They discovered that the ASV was
        the most accurate translation, and initially started a study Bible cross
        reference section for it. Then an idea developed to do a slight revision
        of the 1901 American Standard Version for the public domain, code named
        ‘ASV3'. Eventually, these ideas were dropped due to too many problems:
        the underlying Greek text, massive footnoting, archaic words,
        inconsistent Greek word translations, poor verb tensing, etc.
      </PText>
      <PText>
        Then a better idea grew, let computers and programing do the work, then
        let humans proofread and edit the result, so the creation of a modern
        (English) literal version (which later became its name) was born. A
        group of workers, teachers, scholars, computer owners and programmers,
        who believe in the total authority and inspiration of the Bible, have
        devoted time, advice, software, money and work to the project. Now, over
        30 years later, at least 66 experts in the original language have
        contributed work needed to make this translation a reality. Many others,
        about 430, 9 computer technicians, 40+ programmers, and another 6500 or
        so in all the MLV, Greek and other discussion groups on Facebook and
        various Christian forums have also helped with large amounts of
        proofreading, improvements to English comprehension, double-checking
        Greek definitions, compounds, synonyms, Greek concordance look-ups,
        accuracy checks and/or other menial (but extremely essential) tasks.
        Many thousands of corrections have been received via FTP, snail mail,
        telephone, chat, and e-mail, over the years. 99% of us have never met in
        person and know each other only by a nickname from email or chat. We
        will never be able to express our gratitude enough to all of these
        people, living and deceased.
      </PText>
      <PText>
        There has been nothing traditional about the MLV and our unorthodox
        methods are what produced the ‘world’s most accurate’ English New
        Testament. A side note, as the MLV went thru stages of growth an English
        Concordance, Greek Lexicon and Greek Concordance, Analytical Greek
        Lexicon and Greek Word Concordance were also created for tracking
        purposes, nowcalled the ‘New Koine Greek Textbook Series’ and also
        available in print and electronic formats.
      </PText>
    </ScrollView>
  );
}
