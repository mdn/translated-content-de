---
title: Quantifiers
slug: Web/JavaScript/Guide/Regular_expressions/Quantifiers
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}}

Quantifizierer geben die Anzahl von Zeichen oder Ausdrücken an, die übereinstimmen sollen.

{{EmbedInteractiveExample("pages/js/regexp-quantifiers.html", "taller")}}

## Typen

> [!NOTE]
> Im Folgenden bezieht sich _item_ nicht nur auf einzelne Zeichen, sondern schließt auch [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) und [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) ein.

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
          Passt zu dem vorhergehenden Element "x" 0 oder mehrmals. Zum Beispiel
          passt <code>/bo*/</code> zu "boooo" in "A ghost booooed" und "b" in "A
          bird warbled", aber nichts in "A goat grunted".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          Passt zu dem vorhergehenden Element "x" 1 oder mehrmals. Entspricht
          <code>{1,}</code>. Zum Beispiel passt <code>/a+/</code> zum "a" in
          "candy" und allen "a"'s in "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          Passt zu dem vorhergehenden Element "x" 0 oder 1 Mal. Zum Beispiel
          passt <code>/e?le?/</code> zum "el" in "angel" und zum "le" in
          "angle".
        </p>
        <p>
          Wird es unmittelbar nach einem der Quantifizierer <code>*</code>,
          <code>+</code>, <code>?</code> oder <code>{}</code> verwendet, macht
          es den Quantifizierer nicht-gierig (passend zur minimalen Anzahl von
          Malen), im Gegensatz zur Standardeinstellung, die gierig ist (passend
          zur maximalen Anzahl von Malen).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative ganze Zahl ist, passt es exakt zu "n"
          Vorkommen des vorhergehenden Elements "x". Zum Beispiel passt
          <code>/a{2}/</code> nicht zum "a" in "candy", sondern zu allen "a"s in
          "caandy" und den ersten beiden "a"s in "caaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative ganze Zahl ist, passt es zu mindestens "n"
          Vorkommen des vorhergehenden Elements "x". Zum Beispiel passt
          <code>/a{2,}/</code> nicht zum "a" in "candy", aber zu allen "a"s in
          "caandy" und in "caaaaaaandy".
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
          passt es zu mindestens "n" und höchstens "m" Vorkommen des
          vorhergehenden Elements "x". Zum Beispiel passt <code>/a{1,3}/</code>
          zu nichts in "cndy", dem "a" in "candy", den beiden "a"s in "caandy"
          und den ersten drei "a"s in "caaaaaaandy". Beachten Sie, dass bei der
          Übereinstimmung von "caaaaaaandy" die Übereinstimmung "aaa" ist, obwohl
          die ursprüngliche Zeichenfolge mehr "a"s hatte.
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
          Standardmäßig sind Quantifizierer wie <code>*</code> und
          <code>+</code> "gierig", was bedeutet, dass sie versuchen, so viel wie
          möglich von der Zeichenfolge zu erfassen. Das <code>?</code>-Zeichen
          nach dem Quantifizierer macht den Quantifizierer "nicht-gierig", was
          bedeutet, dass er stoppt, sobald er eine Übereinstimmung findet. Zum
          Beispiel, bei einer Zeichenfolge wie "some &#x3C;foo> &#x3C;bar> new
          &#x3C;/bar> &#x3C;/foo> thing":
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> wird "&#x3C;foo> &#x3C;bar> new
            &#x3C;/bar> &#x3C;/foo>" erfassen
          </li>
          <li><code>/&#x3C;.*?>/</code> wird "&#x3C;foo>" erfassen</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Wiederholtes Muster

In diesem Beispiel passen wir auf ein oder mehr Wortzeichen mit `\w+`, dann auf ein oder mehr Zeichen "a" mit `a+` und enden schließlich an einer Wortgrenze mit `\b`.

```js
const wordEndingWithAs = /\w+a+\b/;
const delicateMessage = "This is Spartaaaaaaa";

console.table(delicateMessage.match(wordEndingWithAs)); // [ "Spartaaaaaaa" ]
```

### Zeichen zählen

In diesem Beispiel passen wir auf Wörter, die einen einzelnen Buchstaben, zwischen 2 und 6 Buchstaben, und 13 oder mehr Buchstaben haben.

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

In diesem Beispiel passen wir auf Wörter, die entweder mit "our" oder "or" enden.

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

In diesem Beispiel passen wir auf ein oder mehr Wortzeichen oder Leerzeichen mit `[\w ]+` und `[\w ]+?`. Das erste ist gierig und das zweite ist nicht-gierig. Beachten Sie, wie das zweite stoppt, sobald es die minimalen Anforderungen erfüllt.

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
- [Referenz zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Quantifizierer: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
