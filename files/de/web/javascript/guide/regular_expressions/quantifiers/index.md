---
title: Quantifiers
slug: Web/JavaScript/Guide/Regular_expressions/Quantifiers
l10n:
  sourceCommit: 0f6daa30cf89c66d37700c51b8a12e660fee29d9
---

Quantifizierer geben die Anzahl der Zeichen oder Ausdrücke an, die übereinstimmen sollen.

{{InteractiveExample("JavaScript Demo: RegExp quantifiers", "taller")}}

```js interactive-example
const ghostSpeak = "booh boooooooh";
const regexpSpooky = /bo{3,}h/;
console.log(ghostSpeak.match(regexpSpooky));
// Expected output: Array ["boooooooh"]

const modifiedQuote = "[He] ha[s] to go read this novel [Alice in Wonderland].";
const regexpModifications = /\[.*?\]/g;
console.log(modifiedQuote.match(regexpModifications));
// Expected output: Array ["[He]", "[s]", "[Alice in Wonderland]"]

const regexpTooGreedy = /\[.*\]/g;
console.log(modifiedQuote.match(regexpTooGreedy));
// Expected output: Array ["[He] ha[s] to go read this novel [Alice in Wonderland]"]
```

## Typen

> [!NOTE]
> Im Folgenden bezieht sich _item_ nicht nur auf einzelne Zeichen, sondern schließt auch [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) sowie [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) ein.

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
          Passt zum vorhergehenden Element "x" 0 oder mehr Mal. Zum Beispiel,
          <code>/bo*/</code> passt zu "boooo" in "Ein Geist booooed" und "b" in "Ein
          Vogel zwitscherte", aber zu nichts in "Eine Ziege grunzte".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          Passt zum vorhergehenden Element "x" 1 oder mehr Mal. Entspricht
          <code>{1,}</code>. Zum Beispiel, <code>/a+/</code> passt zum "a" in
          "Candy" und zu allen "a"s in "Caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          Passt zum vorhergehenden Element "x" 0 oder 1 Mal. Zum Beispiel,
          <code>/e?le?/</code> passt zum "el" in "angel" und zum "le" in
          "angle."
        </p>
        <p>
          Wenn direkt nach einem der Quantifizierer <code>*</code>,
          <code>+</code>, <code>?</code> oder <code>{}</code> verwendet wird, macht es den
          Quantifizierer nicht-gierig (passend zur minimalen Anzahl), im Gegensatz zum Standardverhalten, das gierig ist (passend zur maximalen Anzahl).
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
          vorhergehenden Elements "x". Zum Beispiel, <code>/a{2}/</code> passt nicht
          zum "a" in "Candy", aber es passt zu allen "a"s in "Caandy" und
          den ersten beiden "a"s in "Caaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative Ganzzahl ist, passt zu mindestens "n" Vorkommen des
          vorhergehenden Elements "x". Zum Beispiel, <code>/a{2,}/</code> passt nicht
          zum "a" in "Candy", aber passt zu allen "a"s in "Caandy" und
          in "Caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <!-- cSpell:ignore cndy -->
        <p>
          Wo "n" und "m" nicht-negative Ganzzahlen sind und <code>m >= n</code>,
          passt zu mindestens "n" und höchstens "m" Vorkommen des vorhergehenden
          Elements "x". Zum Beispiel, <code>/a{1,3}/</code> passt zu nichts in
          "Cndy", zum "a" in "Candy", zu den beiden "a"s in "Caandy" und zu den ersten
          drei "a"s in "Caaaaaaandy". Beachten Sie, dass beim Abgleichen von "Caaaaaaandy",
          das Match "aaa" ist, obwohl die ursprüngliche Zeichenkette mehr "a"s enthielt.
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
          "gierig", was bedeutet, dass sie versuchen, so oft wie möglich zu
          passen. Das <code>?</code>-Zeichen nach dem Quantifizierer macht den
          Quantifizierer "nicht-gierig": das bedeutet, dass er aufhört, sobald er die minimale Anzahl von Übereinstimmungen gefunden hat. Zum Beispiel, gegeben einer Zeichenkette wie "some &#x3C;foo> &#x3C;bar>
          new &#x3C;/bar> &#x3C;/foo> thing":
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> wird "&#x3C;foo> &#x3C;bar> new
            &#x3C;/bar> &#x3C;/foo>" abgleichen
          </li>
          <li><code>/&#x3C;.*?>/</code> wird "&#x3C;foo>" abgleichen</li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Das Hinzufügen von <code>?</code> nach <code>{n}</code> ist syntaktisch gültig, aber praktisch nutzlos.
            Da <code>{n}</code> immer genau n Mal passt, verhält sich <code>x{n}?</code> wie <code>x{n}</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Wiederholtes Muster

In diesem Beispiel passen wir ein oder mehrere Wortzeichen mit `\w+`, dann ein oder mehrere Zeichen "a" mit `a+`, und enden schließlich an einer Wortgrenze mit `\b`.

```js
const wordEndingWithAs = /\w+a+\b/;
const delicateMessage = "This is Spartaaaaaaa";

console.table(delicateMessage.match(wordEndingWithAs)); // [ "Spartaaaaaaa" ]
```

### Zeichen zählen

In diesem Beispiel passen wir Wörter, die einen einzigen Buchstaben haben, Wörter, die zwischen 2 und 6 Buchstaben haben, und Wörter, die 13 oder mehr Buchstaben haben.

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

In diesem Beispiel passen wir Wörter, die entweder mit "our" oder "or" enden.

<!-- cSpell:ignore neighbour -->

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

In diesem Beispiel passen wir ein oder mehrere Wortzeichen oder Leerzeichen mit `[\w ]+` und `[\w ]+?`. Das erste ist gierig und das zweite ist nicht-gierig. Beachten Sie, wie das zweite sofort aufhört, sobald es die Mindestanforderung erfüllt.

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

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Referenz
- [Quantifizierer: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
