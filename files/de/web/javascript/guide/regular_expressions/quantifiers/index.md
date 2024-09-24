---
title: Quantoren
slug: Web/JavaScript/Guide/Regular_expressions/Quantifiers
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}}

Quantoren geben die Anzahl der Zeichen oder Ausdrücke an, die übereinstimmen sollen.

{{EmbedInteractiveExample("pages/js/regexp-quantifiers.html", "taller")}}

## Typen

> [!NOTE]
> Im Folgenden bezieht sich _Element_ nicht nur auf einzelne Zeichen, sondern umfasst auch [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) und [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Zeichen</th>
      <th scope="col">Bedeutung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><em>x</em>*</code>
      </td>
      <td>
        <p>
          Passt zum vorherigen Element "x" 0 oder mehr Mal. Zum Beispiel,
          <code>/bo*/</code> passt auf "boooo" in "Ein Geist booooed" und "b" in "Ein
          Vogel zwitscherte", aber nichts in "Eine Ziege grunzte".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          Passt zum vorherigen Element "x" 1 oder mehr Mal. Entspricht
          <code>{1,}</code>. Zum Beispiel, <code>/a+/</code> passt auf das "a" in
          "Süßigkeiten" und alle "a"'s in "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          Passt zum vorherigen Element "x" 0 oder 1 Mal. Zum Beispiel,
          <code>/e?le?/</code> passt auf das "el" in "Engel" und das "le" in
          "Winkel."
        </p>
        <p>
          Wenn es direkt nach einem der Quantoren <code>*</code>,
          <code>+</code>, <code>?</code> oder <code>{}</code> verwendet wird, macht es den
          Quantor nicht-gierig (passt die minimale Anzahl an Malen), im Gegensatz zum Standard, der gierig ist (passt die maximale Anzahl an Malen).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative Ganzzahl ist, passt genau "n" Vorkommen des
          vorherigen Elements "x". Zum Beispiel, <code>/a{2}/</code> passt nicht
          auf das "a" in "Zucker", aber es passt auf alle "a"'s in "caandy" und
          die ersten zwei "a"'s in "caaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative Ganzzahl ist, passt mindestens "n" Vorkommen des
          vorherigen Elements "x". Zum Beispiel, <code>/a{2,}/</code> passt nicht
          auf das "a" in "Zucker", aber passt auf alle "a"'s in "caandy" und
          in "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <p>
          Wo "n" und "m" nicht-negative Ganzzahlen sind und <code>m >= n</code>,
          passt mindestens "n" und höchstens "m" Vorkommen des vorherigen
          Elements "x". Zum Beispiel, <code>/a{1,3}/</code> passt auf nichts in
          "cndy", das "a" in "Zucker", die zwei "a"'s in "caandy" und die ersten
          drei "a"'s in "caaaaaaandy". Beachten Sie, dass beim Abgleichen von "caaaaaaandy",
          das Übereinstimmungsergebnis "aaa" ist, obwohl die Originalzeichenfolge mehr "a"s enthält.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code><em>x</em>*?</code><br /><code><em>x</em>+?</code><br /><code
            ><em>x</em>??</code
          ><br /><code><em>x</em>{n}?</code><br /><code><em>x</em>{n,}?</code
          ><br /><code><em>x</em>{n,m}?</code>
        </p>
      </td>
      <td>
        <p>
          Standardmäßig sind Quantoren wie <code>*</code> und <code>+</code>
          "gierig", was bedeutet, dass sie versuchen, so viel wie möglich von der Zeichenfolge zu passen. Das <code>?</code>-Zeichen nach dem Quantor macht den
          Quantor "nicht-gierig": Das bedeutet, dass er aufhört, sobald er eine
          Übereinstimmung findet. Zum Beispiel, bei einer Zeichenfolge wie "some &#x3C;foo> &#x3C;bar>
          new &#x3C;/bar> &#x3C;/foo> thing":
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> passt auf "&#x3C;foo> &#x3C;bar> neu
            &#x3C;/bar> &#x3C;/foo>"
          </li>
          <li><code>/&#x3C;.*?>/</code> passt auf "&#x3C;foo>"</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Wiederholtes Muster

In diesem Beispiel vergleichen wir ein oder mehrere Wortzeichen mit `\w+`, dann ein oder mehrere Buchstaben "a" mit `a+`, und enden schließlich an einer Wortgrenze mit `\b`.

```js
const wordEndingWithAs = /\w+a+\b/;
const delicateMessage = "This is Spartaaaaaaa";

console.table(delicateMessage.match(wordEndingWithAs)); // [ "Spartaaaaaaa" ]
```

### Zeichen zählen

In diesem Beispiel vergleichen wir Wörter, die einen Buchstaben haben, Wörter, die zwischen 2 und 6 Buchstaben haben, und Wörter, die 13 oder mehr Buchstaben haben.

```js
const singleLetterWord = /\b\w\b/g;
const notSoLongWord = /\b\w{2,6}\b/g;
const longWord = /\b\w{13,}\b/g;

const sentence = "Why do I have to learn multiplication table?";

console.table(sentence.match(singleLetterWord)); // ["I"]
console.table(sentence.match(notSoLongWord)); // [ "Why", "do", "have", "to", "learn", "table" ]
console.table(sentence.match(longWord)); // ["multiplication"]
```

### Optionale Zeichen

In diesem Beispiel passen wir Wörter, die entweder mit "our" oder "or" enden.

```js
const britishText = "He asked his neighbour a favour.";
const americanText = "He asked his neighbor a favor.";

const regexpEnding = /\w+ou?r/g;
// \w+ Ein oder mehrere Buchstaben
// o   gefolgt von einem "o",
// u?  optional gefolgt von einem "u"
// r   gefolgt von einem "r"

console.table(britishText.match(regexpEnding));
// ["neighbour", "favour"]

console.table(americanText.match(regexpEnding));
// ["neighbor", "favor"]
```

### Gierig versus nicht-gierig

In diesem Beispiel vergleichen wir ein oder mehrere Wortzeichen oder Leerzeichen mit `[\w ]+` und `[\w ]+?`. Das erste ist gierig und das zweite ist nicht-gierig. Beachten Sie, wie das zweite aufhört, sobald es die minimalen Anforderungen erfüllt.

```js
const text = "I must be getting somewhere near the center of the earth.";
const greedyRegexp = /[\w ]+/;

console.log(text.match(greedyRegexp)[0]);
// "I must be getting somewhere near the center of the earth"
// fast der gesamte Text passt (lässt das Punktzeichen aus)

const nonGreedyRegexp = /[\w ]+?/; // Beachten Sie das Fragezeichen
console.log(text.match(nonGreedyRegexp));
// "I"
// Die Übereinstimmung ist die kleinste mögliche
```

## Siehe auch

- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Leitfaden zu Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Leitfaden zu Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
- [Leitfaden zu Gruppen und Rückverweisen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Referenz für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Quantoren: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
