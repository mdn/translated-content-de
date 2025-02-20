---
title: Quantifizierer
slug: Web/JavaScript/Guide/Regular_expressions/Quantifiers
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("JavaScript Guide")}}

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
> Im Folgenden bezieht sich _Item_ nicht nur auf einzelne Zeichen, sondern umfasst auch [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) sowie [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).

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
          Passt zum vorangehenden Element "x" 0- oder mehrmals. Zum Beispiel
          passt <code>/bo*/</code> in "A ghost booooed" zu "boooo" und in "A
          bird warbled" zu "b", aber zu nichts in "A goat grunted".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          Passt zum vorangehenden Element "x" 1- oder mehrmals. Entspricht
          <code>{1,}</code>. Zum Beispiel passt <code>/a+/</code> zur "a" in
          "candy" und allen "a"s in "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          Passt zum vorangehenden Element "x" 0- oder 1-mal. Zum Beispiel passt
          <code>/e?le?/</code> zur "el" in "angel" und zur "le" in
          "angle".
        </p>
        <p>
          Wenn unmittelbar nach einem der Quantifizierer <code>*</code>,
          <code>+</code>, <code>?</code> oder <code>{}</code> verwendet,
          macht es den Quantifizierer nicht-gierig (er sucht die minimale Anzahl
          an Passungen), im Gegensatz zur Standardeinstellung, bei der er gierig
          ist (die maximale Anzahl an Passungen).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative ganze Zahl ist, entspricht dies genau "n"
          Vorkommen des vorangehenden Elements "x". Zum Beispiel passt
          <code>/a{2}/</code> nicht zur "a" in "candy", aber zu allen "a"s in
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
          Vorkommen des vorangehenden Elements "x". Zum Beispiel passt
          <code>/a{2,}/</code> nicht zur "a" in "candy", aber zu allen "a"s in
          "caandy" und in "caaaaaaandy".
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
          passt es zu mindestens "n" und höchstens "m" Vorkommen des vorangehenden
          Elements "x". Zum Beispiel passt <code>/a{1,3}/</code> zu nichts in
          "cndy", zur "a" in "candy", zu den zwei "a"s in "caandy" und zu den ersten
          drei "a"s in "caaaaaaandy". Beachten Sie, dass bei der Übereinstimmung mit
          "caaaaaaandy" das Ergebnis "aaa" ist, obwohl die ursprüngliche Zeichenkette
          mehr "a"s enthält.
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
          "gierig", das heißt, sie versuchen, so viel von der Zeichenkette wie möglich
          abzugleichen. Das Zeichen <code>?</code> nach dem Quantifizierer macht
          den Quantifizierer "nicht-gierig": Das bedeutet, dass er aufhört, sobald
          er eine Übereinstimmung findet. Zum Beispiel wird bei einer Zeichenkette
          wie "some &#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo> thing":
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> "&#x3C;foo> &#x3C;bar> new &#x3C;/bar>
            &#x3C;/foo>" abgleichen
          </li>
          <li><code>/&#x3C;.*?>/</code> "&#x3C;foo>" abgleichen</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Wiederholtes Muster

In diesem Beispiel gleichen wir ein oder mehrere Zeichen eines Wortes mit `\w+` ab, dann ein oder mehrere Zeichen "a" mit `a+` und enden schließlich an einer Wortgrenze mit `\b`.

```js
const wordEndingWithAs = /\w+a+\b/;
const delicateMessage = "This is Spartaaaaaaa";

console.table(delicateMessage.match(wordEndingWithAs)); // [ "Spartaaaaaaa" ]
```

### Zählen von Zeichen

In diesem Beispiel gleichen wir Wörter ab, die einen Buchstaben haben, Wörter, die zwischen 2 und 6 Buchstaben haben, und Wörter, die 13 oder mehr Buchstaben haben.

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

In diesem Beispiel gleichen wir Wörter ab, die entweder mit "our" oder "or" enden.

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

In diesem Beispiel gleichen wir ein oder mehrere Zeichen eines Wortes oder Leerzeichen mit `[\w ]+` und `[\w ]+?` ab. Das erste ist gierig, das zweite nicht-gierig. Beachten Sie, wie der zweite bereits stoppt, sobald die minimale Anforderung erfüllt ist.

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

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)-Leitfaden
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)-Leitfaden
- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)-Leitfaden
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)-Leitfaden
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)-Referenz
- [Quantifizierer: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
