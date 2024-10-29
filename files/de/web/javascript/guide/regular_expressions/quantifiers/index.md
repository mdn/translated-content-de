---
title: Quantifiers
slug: Web/JavaScript/Guide/Regular_expressions/Quantifiers
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("JavaScript Leitfaden")}}

Quantoren geben die Anzahl von Zeichen oder Ausdrücken an, die übereinstimmen sollen.

{{EmbedInteractiveExample("pages/js/regexp-quantifiers.html", "taller")}}

## Typen

> [!NOTE]
> Im Folgenden bezieht sich _item_ nicht nur auf einzelne Zeichen, sondern umfasst auch [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) und [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).

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
          Passt den vorherigen Artikel "x" 0 oder mehrmals an. Zum Beispiel,
          <code>/bo*/</code> passt "boooo" in "A ghost booooed" und "b" in "A
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
          Passt den vorherigen Artikel "x" 1 oder mehrmals an. Entspricht
          <code>{1,}</code>. Zum Beispiel, <code>/a+/</code> passt das "a" in
          "candy" und alle "a"'s in "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          Passt den vorherigen Artikel "x" 0 oder 1 Mal an. Zum Beispiel,
          <code>/e?le?/</code> passt das "el" in "angel" und das "le" in
          "angle."
        </p>
        <p>
          Wenn unmittelbar nach einem beliebigen der Quantifizierer <code>*</code>,
          <code>+</code>, <code>?</code> oder <code>{}</code> verwendet, macht
          es den Quantifizierer nicht-gierig (das Minimum an Malen passend), im
          Gegensatz zur Standardeinstellung, die gierig ist (das Maximum an
          Malen passend).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative ganze Zahl ist, passt genau "n" Vorkommen
          des vorherigen Artikels "x". Zum Beispiel, <code>/a{2}/</code> passt
          nicht das "a" in "candy", aber alle "a"'s in "caandy", und die ersten
          zwei "a"'s in "caaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative ganze Zahl ist, passt mindestens "n"
          Vorkommen des vorherigen Artikels "x". Zum Beispiel, <code>/a{2,}/</code>
          passt nicht das "a" in "candy", passt aber alle "a"'s in "caandy" und
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
          passt mindestens "n" und höchstens "m" Vorkommen des vorherigen
          Artikels "x". Zum Beispiel, <code>/a{1,3}/</code> passt nichts in
          "cndy", das "a" in "candy", die zwei "a"'s in "caandy", und die ersten
          drei "a"'s in "caaaaaaandy". Beachten Sie, dass beim Abgleichen von
          "caaaaaaandy", das Übereinstimmungsergebnis "aaa" ist, auch wenn die
          ursprüngliche Zeichenkette mehr "a"s enthielt.
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
          "gierig", das bedeutet, dass sie versuchen, so viel von der Zeichenkette
          wie möglich zu passen. Das <code>?</code>-Zeichen nach dem Quantifizierer
          macht den Quantifizierer "nicht-gierig": Das bedeutet, dass er aufhört,
          sobald er eine Übereinstimmung findet. Zum Beispiel, bei einer Zeichenkette
          wie "some &#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo> thing":
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> wird "&#x3C;foo> &#x3C;bar> new
            &#x3C;/bar> &#x3C;/foo>" passen
          </li>
          <li><code>/&#x3C;.*?>/</code> wird "&#x3C;foo>" passen</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Wiederholtes Muster

In diesem Beispiel passen wir ein oder mehr Wortzeichen mit `\w+`, dann ein oder mehr Zeichen "a" mit `a+`, und schließlich enden wir an einer Wortgrenze mit `\b`.

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

In diesem Beispiel passen wir ein oder mehr Wortzeichen oder Leerzeichen mit `[\w ]+` und `[\w ]+?`. Das erste ist gierig und das zweite ist nicht-gierig. Beachten Sie, wie das zweite aufhört, sobald es die minimalen Anforderungen erfüllt.

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
- [Quantifier: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
