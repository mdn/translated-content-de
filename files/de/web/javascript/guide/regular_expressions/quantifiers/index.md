---
title: Quantifiers
slug: Web/JavaScript/Guide/Regular_expressions/Quantifiers
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}}

Quantifiers geben die Anzahl der Zeichen oder Ausdrücke an, die übereinstimmen sollen.

{{EmbedInteractiveExample("pages/js/regexp-quantifiers.html", "taller")}}

## Typen

> [!NOTE]
> Im Folgenden bezieht sich _Element_ nicht nur auf einzelne Zeichen, sondern schließt auch [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) und [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) ein.

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
          Vergleicht das vorhergehende Element "x" 0 oder mehr Mal. Zum Beispiel
          ergibt <code>/bo*/</code> eine Übereinstimmung mit "boooo" in "Ein Geist buhte" und "b" in "Ein
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
          Vergleicht das vorhergehende Element "x" 1 oder mehr Mal. Entspricht
          <code>{1,}</code>. Zum Beispiel ergibt <code>/a+/</code> eine Übereinstimmung mit dem "a" in
          "Brause" und allen "a"'s in "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          Vergleicht das vorhergehende Element "x" 0 oder 1 Mal. Zum Beispiel ergibt
          <code>/e?le?/</code> eine Übereinstimmung mit "el" in "Engel" und "le" in
          "Winkel."
        </p>
        <p>
          Wenn direkt nach einem der Quantifizierer <code>*</code>,
          <code>+</code>, <code>?</code> oder <code>{}</code> verwendet, macht es den
          Quantifizierer nicht-gierig (Übereinstimmung mit der minimalen Anzahl), im
          Gegensatz zur Standardeinstellung, die gierig ist (Übereinstimmung mit der maximalen Anzahl).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative ganze Zahl ist, wird genau "n" Vorkommen des
          vorhergehenden Elements "x" übereinstimmend. Zum Beispiel ergibt <code>/a{2}/</code> keine Übereinstimmung
          mit dem "a" in "Brause", aber es passt auf alle "a"'s in "caandy", und
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
          Wo "n" eine nicht-negative ganze Zahl ist, stimmt es mit mindestens "n" Vorkommen des
          vorhergehenden Elements "x" überein. Zum Beispiel ergibt <code>/a{2,}/</code> keine Übereinstimmung
          mit dem "a" in "Brause", aber passt auf alle "a"'s in "caandy" und
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
          Wo "n" und "m" nicht-negative ganze Zahlen sind und <code>m >= n</code>,
          stimmt es mit mindestens "n" und höchstens "m" Vorkommen des vorhergehenden
          Elements "x" überein. Zum Beispiel ergibt <code>/a{1,3}/</code> keine Übereinstimmung
          in "cndy", das "a" in "Brause", die zwei "a"'s in "caandy" und die ersten
          drei "a"'s in "caaaaaaandy". Beachten Sie, dass beim Abgleich mit "caaaaaaandy",
          die Übereinstimmung "aaa" ist, obwohl die ursprüngliche Zeichenkette mehr "a"'s enthielt.
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
          Standardmäßig sind Quantifizierer wie <code>*</code> und <code>+</code>
          "gierig", was bedeutet, dass sie versuchen, so viel wie möglich von der
          Zeichenfolge abzugleichen. Der <code>?</code>-Charakter nach dem Quantifizierer macht den
          Quantifizierer "nicht-gierig": das bedeutet, dass er aufhört, sobald er eine
          Übereinstimmung findet. Zum Beispiel, bei einer Zeichenkette wie "some &#x3C;foo> &#x3C;bar>
          new &#x3C;/bar> &#x3C;/foo> thing":
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> ergibt "&#x3C;foo> &#x3C;bar> new
            &#x3C;/bar> &#x3C;/foo>"
          </li>
          <li><code>/&#x3C;.*?>/</code> ergibt "&#x3C;foo>"</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Wiederholtes Muster

In diesem Beispiel vergleichen wir ein oder mehr Wortzeichen mit `\w+`, dann ein oder mehr Zeichen "a" mit `a+` und enden schließlich an einer Wortgrenze mit `\b`.

```js
const wordEndingWithAs = /\w+a+\b/;
const delicateMessage = "This is Spartaaaaaaa";

console.table(delicateMessage.match(wordEndingWithAs)); // [ "Spartaaaaaaa" ]
```

### Zeichen zählen

In diesem Beispiel vergleichen wir Wörter, die einen einzelnen Buchstaben enthalten, Wörter, die zwischen 2 und 6 Buchstaben enthalten, und Wörter, die 13 oder mehr Buchstaben enthalten.

```js
const singleLetterWord = /\b\w\b/g;
const notSoLongWord = /\b\w{2,6}\b/g;
const longWord = /\b\w{13,}\b/g;

const sentence = "Why do I have to learn multiplication table?";

console.table(sentence.match(singleLetterWord)); // ["I"]
console.table(sentence.match(notSoLongWord)); // [ "Why", "do", "have", "to", "learn", "table" ]
console.table(sentence.match(longWord)); // ["multiplication"]
```

### Optionales Zeichen

In diesem Beispiel vergleichen wir Wörter, die entweder auf "our" oder "or" enden.

```js
const britishText = "He asked his neighbour a favour.";
const americanText = "He asked his neighbor a favor.";

const regexpEnding = /\w+ou?r/g;
// \w+ One or several letters
// o   followed by an "o",
// u?  optionally followed by a "u"
// r   followed by an "r"

console.table(britishText.match(regexpEnding));
// ["neighbour", "favour"]

console.table(americanText.match(regexpEnding));
// ["neighbor", "favor"]
```

### Gierig versus nicht-gierig

In diesem Beispiel vergleichen wir ein oder mehr Wortzeichen oder Leerzeichen mit `[\w ]+` und `[\w ]+?`. Der erste ist gierig und der zweite ist nicht-gierig. Beachten Sie, wie der zweite aufhört, sobald er die minimalen Anforderungen erfüllt.

```js
const text = "I must be getting somewhere near the center of the earth.";
const greedyRegexp = /[\w ]+/;

console.log(text.match(greedyRegexp)[0]);
// "I must be getting somewhere near the center of the earth"
// almost all of the text matches (leaves out the dot character)

const nonGreedyRegexp = /[\w ]+?/; // Notice the question mark
console.log(text.match(nonGreedyRegexp));
// "I"
// The match is the smallest one possible
```

## Siehe auch

- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Leitfaden zu Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Leitfaden zu Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
- [Leitfaden zu Gruppen und Rückverweisen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Nachschlagewerk zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Quantifizierer: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
