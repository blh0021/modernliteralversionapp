import striptags from "striptags";
import books from "../../books.json";

export function combine(a) {
  let result = [];
  let last = a[0];
  result.push(last);
  for (let i = 1; i < a.length; i++) {
    if (a[i] == last + 1) {
      if (result[result.length - 1] != "-") {
        result.push("-");
      }
    } else if (result[result.length - 1] == "-") {
      result.push(`${last},${a[i]}`);
    } else {
      result.push(`,${a[i]}`);
    }
    last = a[i];
  }
  if (result[result.length - 1] == "-") {
    result.push(last);
  }

  return result.join("");
}

export function copyParser(verses, list, book, chapter) {
  let result = [];
  result.push(`(MLV) ${books[book]} ${chapter}: ${combine(list)}\n`);
  list.forEach((item) => {
    result.push(striptags(`${verses[item].id}. ${verses[item].verse}`));
  });
  return result.join(" ");
}
