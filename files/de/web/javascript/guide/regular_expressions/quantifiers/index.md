---
title: Quantifiers
slug: Web/JavaScript/Guide/Regular_expressions/Quantifiers
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{jsSidebar("JavaScript Leitfaden")}}

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
          Entspricht dem vorhergehenden Element "x" 0 oder mehrmals. Zum Beispiel
          passt <code>/bo*/</code> auf "boooo" in "A ghost booooed" und "b" in "A
          bird warbled", jedoch nicht in "A goat grunted".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          Entspricht dem vorhergehenden Element "x" 1 oder mehrmals. Entspricht
          <code>{1,}</code>. Zum Beispiel passt <code>/a+/</code> auf das "a" in
          "candy" und auf alle "a"'s in "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          Entspricht dem vorhergehenden Element "x" 0 oder 1 Mal. Zum Beispiel
          passt <code>/e?le?/</code> auf das "el" in "angel" und das "le" in
          "angle."
        </p>
        <p>
          Wenn es direkt nach einem der Quantifizierer <code>*</code>,
          <code>+</code>, <code>?</code>, oder <code>{}</code> verwendet wird,
          macht es den Quantifizierer "non-greedy" (übereinstimmend mit der
          minimalen Anzahl), im Gegensatz zur Voreinstellung, die "greedy" ist
          (übereinstimmend mit der maximalen Anzahl).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative ganze Zahl ist, entspricht genau "n"
          Vorkommen des vorhergehenden Elements "x". Zum Beispiel passt
          <code>/a{2}/</code> nicht auf das "a" in "candy", aber es passt auf
          alle "a"'s in "caandy" und die ersten beiden "a"'s in "caaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative ganze Zahl ist, entspricht mindestens "n"
          Vorkommen des vorhergehenden Elements "x". Zum Beispiel passt
          <code>/a{2,}/</code> nicht auf das "a" in "candy", aber es passt auf
          alle "a"'s in "caandy" und in "caaaaaaandy".
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
          Wo "n" und "m" nicht-negative ganze Zahlen sind und <code>m >= n</code>,
          entspricht mindestens "n" und höchstens "m" Vorkommen des vorhergehenden
          Elements "x". Zum Beispiel passt <code>/a{1,3}/</code> auf nichts in
          "cndy", das "a" in "candy", die zwei "a"'s in "caandy", und die ersten
          drei "a"'s in "caaaaaaandy". Beachten Sie, dass beim Abgleich von
          "caaaaaaandy" das Ergebnis "aaa" ist, obwohl der ursprüngliche String
          mehr "a"s hatte.
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
          "greedy", was bedeutet, dass sie versuchen, so viel wie möglich aus dem
          String zu matchen. Das <code>?</code>-Zeichen nach dem Quantifizierer
          macht den Quantifizierer "non-greedy": Das bedeutet, es stoppt, sobald
          es eine Übereinstimmung findet. Zum Beispiel, bei einem String wie
          "some &#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo> thing":
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> wird "&#x3C;foo> &#x3C;bar> new
            &#x3C;/bar> &#x3C;/foo>" matchen
          </li>
          <li><code>/&#x3C;.*?>/</code> wird "&#x3C;foo>" matchen</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Wiederholtes Muster

In diesem Beispiel matchen wir ein oder mehr Wortzeichen mit `\w+`, dann ein oder mehr Zeichen "a" mit `a+` und enden schließlich an einer Wortgrenze mit `\b`.

```js
const wordEndingWithAs = /\w+a+\b/;
const delicateMessage = "This is Spartaaaaaaa";

console.table(delicateMessage.match(wordEndingWithAs)); // [ "Spartaaaaaaa" ]
```

### Zählen von Zeichen

In diesem Beispiel matchen wir Wörter, die einen einzelnen Buchstaben haben, Wörter, die zwischen 2 und 6 Buchstaben haben, und Wörter, die 13 oder mehr Buchstaben haben.

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

In diesem Beispiel matchen wir Wörter, die entweder mit "our" oder "or" enden.

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

### Greedy versus Non-greedy

In diesem Beispiel matchen wir ein oder mehr Wortzeichen oder Leerzeichen mit `[\w ]+` und `[\w ]+?`. Der erste ist greedy und der zweite ist non-greedy. Beachten Sie, wie der zweite sofort stoppt, sobald er die minimale Anforderung erfüllt.

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
