---
title: Assertions
slug: Web/JavaScript/Guide/Regular_expressions/Assertions
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Assertions umfassen Grenzen, die Anfänge und Enden von Zeilen und Wörtern markieren, sowie andere Muster, die auf irgendeine Weise anzeigen, dass ein Treffer möglich ist (einschließlich Look-Ahead-, Look-Behind- und bedingter Ausdrücke).

{{InteractiveExample("JavaScript Demo: RegExp Assertions", "taller")}}

```js interactive-example
const text = "A quick fox";

const regexpLastWord = /\w+$/;
console.log(text.match(regexpLastWord));
// Expected output: Array ["fox"]

const regexpWords = /\b\w+\b/g;
console.log(text.match(regexpWords));
// Expected output: Array ["A", "quick", "fox"]

const regexpFoxQuality = /\w+(?= fox)/;
console.log(text.match(regexpFoxQuality));
// Expected output: Array ["quick"]
```

## Typen

### Grenztyp-Assertions

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Zeichen</th>
      <th scope="col">Bedeutung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>^</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Anfangs-Grenze des Eingabe-Assertions:</strong></a>
          Passt zum Anfang der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag aktiviert ist, passt auch direkt nach einem Zeilenumbruch-Zeichen. Zum Beispiel passt <code>/^A/</code> nicht zum "A" in "an A", aber es passt zum ersten "A" in "An A".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dieses Zeichen hat eine andere Bedeutung, wenn es am Anfang einer
            <a
              href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
              >Zeichenklasse</a
            > erscheint.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Ende-Grenze des Eingabe-Assertions:</strong></a>
          Passt zum Ende der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag aktiviert ist,
          passt auch direkt vor einem Zeilenumbruch-Zeichen. Zum Beispiel passt <code>/t$/</code> nicht zum "t" in "eater", passt aber im "eat".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Wort-Grenze Assertion:</strong></a>
          Passt zu einer Wortgrenze. Dies ist die Position, an der ein Wortzeichen nicht von einem anderen Wortzeichen gefolgt oder davor ist, wie zwischen einem Buchstaben und einem Leerzeichen. Beachten Sie, dass eine übereinstimmende Wortgrenze nicht in der Übereinstimmung enthalten ist. Mit anderen Worten, die Länge einer übereinstimmenden Wortgrenze ist null.
        </p>
        <p>Beispiele:</p>
        <ul>
          <li><code>/\bm/</code> passt zum "m" in "moon".</li>
          <li>
            <code>/oo\b/</code> passt nicht zum "oo" in "moon", da "oo"
            von "n" gefolgt wird, welches ein Wortzeichen ist.
          </li>
          <li>
            <code>/oon\b/</code> passt zum "oon" in "moon", da "oon"
            das Ende des Strings ist, somit von keinem Wortzeichen gefolgt wird.
          </li>
          <li>
            <code>/\w\b\w/</code> wird nie etwas finden, da ein Wortzeichen niemals sowohl von einem Nicht-Wort als auch von einem Wortzeichen gefolgt werden kann.
          </li>
        </ul>
        <p>
          Um ein Rückschritt-Zeichen (<code>[\b]</code>) zu finden, siehe
          <a
            href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
            >Zeichenklassen</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\B</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Nicht-Wort-Grenze Assertion:</strong></a>
          Passt zu einer Nicht-Wortgrenze. Dies ist eine Position, an der das vorherige und das nächste Zeichen vom gleichen Typ sind: Entweder müssen beide Wörter oder beide Nicht-Wörter sein, zum Beispiel zwischen zwei Buchstaben oder zwischen zwei Leerzeichen. Der Anfang und das Ende eines Strings werden als Nicht-Wörter betrachtet. Genau wie die übereinstimmende Wortgrenze wird auch die übereinstimmende Nicht-Wortgrenze nicht in der Übereinstimmung enthalten. Zum Beispiel passt <code>/\Bon/</code> zu "on" in "at noon", und <code>/ye\B/</code> passt zu "ye" in "possibly yesterday".
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Andere Assertions

> [!NOTE]
> Das `?` Zeichen kann auch als Quantifizierer verwendet werden.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Zeichen</th>
      <th scope="col">Bedeutung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>x(?=y)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Lookahead Assertion:</strong></a>
          Passt zu "x" nur wenn "x"
          von "y" gefolgt wird. Zum Beispiel passt <code>/Jack(?=Sprat)/</code>
          zu "Jack" nur wenn es von "Sprat" gefolgt wird.<br /><code
            >/Jack(?=Sprat|Frost)/</code
          >
          passt zu "Jack" nur wenn es von "Sprat" oder "Frost" gefolgt wird. Allerdings sind weder "Sprat" noch "Frost" Teil der Übereinstimmungsergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Negative Lookahead Assertion:</strong></a>
          Passt zu "x" nur wenn "x"
          nicht von "y" gefolgt wird. Zum Beispiel passt <code>/\d+(?!\.)/</code>
          zu einer Zahl nur wenn sie nicht von einem Dezimalpunkt gefolgt wird. <code
            >/\d+(?!\.)/.exec('3.141')</code
          >
          passt zu "141", aber nicht zu "3".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Lookbehind Assertion:</strong></a>
          Passt zu "x" nur wenn "x"
          von "y" vorangegangen wird. Zum Beispiel passt
          <code>/(?&#x3C;=Jack)Sprat/</code> zu "Sprat" nur wenn es
          von "Jack" vorangegangen wird. <code>/(?&#x3C;=Jack|Tom)Sprat/</code> passt
          zu "Sprat" nur wenn es von "Jack" oder "Tom" vorangegangen wird. Allerdings sind weder
          "Jack" noch "Tom" Teil der Übereinstimmungsergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Negative Lookbehind Assertion:</strong></a>
          Passt zu "x" nur wenn
          "x" nicht von "y" vorangegangen wird. Zum Beispiel passt
          <code>/(?&#x3C;!-)\d+/</code> zu einer Zahl nur wenn sie nicht
          von einem Minuszeichen vorangegangen wird. <code>/(?&#x3C;!-)\d+/.exec('3')</code>
          passt zu "3". <code>/(?&#x3C;!-)\d+/.exec('-3')</code> passt nicht,
          da die Zahl von einem Minuszeichen vorangegangen wird.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Allgemeines Übersicht-Beispiel von Grenztypen

<!-- cSpell:ignore greon -->

```js
// Using Regex boundaries to fix buggy string.
buggyMultiline = `tey, ihe light-greon apple
tangs on ihe greon traa`;

// 1) Use ^ to fix the matching at the beginning of the string, and right after newline.
buggyMultiline = buggyMultiline.replace(/^t/gim, "h");
console.log(1, buggyMultiline); // fix 'tey' => 'hey' and 'tangs' => 'hangs' but do not touch 'traa'.

// 2) Use $ to fix matching at the end of the text.
buggyMultiline = buggyMultiline.replace(/aa$/gim, "ee.");
console.log(2, buggyMultiline); // fix 'traa' => 'tree.'.

// 3) Use \b to match characters right on border between a word and a space.
buggyMultiline = buggyMultiline.replace(/\bi/gim, "t");
console.log(3, buggyMultiline); // fix 'ihe' => 'the' but do not touch 'light'.

// 4) Use \B to match characters inside borders of an entity.
fixedMultiline = buggyMultiline.replace(/\Bo/gim, "e");
console.log(4, fixedMultiline); // fix 'greon' => 'green' but do not touch 'on'.
```

### Übereinstimmung des Anfangs der Eingabe mit einem ^ Steuerzeichen

Verwenden Sie `^`, um auf den Anfang der Eingabe zu passen. In diesem Beispiel können wir die Früchte erhalten, die mit 'A' beginnen, indem wir einen `/^A/` Regex verwenden. Zum Auswählen geeigneter Früchte können wir die Methode [`filter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) mit einer [arrow](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) Funktion verwenden.

```js
const fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// Select fruits started with 'A' by /^A/ Regex.
// Here '^' control symbol used only in one role: Matching beginning of an input.

const fruitsStartsWithA = fruits.filter((fruit) => /^A/.test(fruit));
console.log(fruitsStartsWithA); // [ 'Apple', 'Avocado' ]
```

Im zweiten Beispiel wird `^` sowohl zum Anpassen an den Anfang der Eingabe als auch zur Erstellung einer negierten oder ergänzten Zeichenklasse verwendet, wenn es innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) verwendet wird.

```js
const fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// Selecting fruits that do not start by 'A' with a /^[^A]/ regex.
// In this example, two meanings of '^' control symbol are represented:
// 1) Matching beginning of the input
// 2) A negated or complemented character class: [^A]
// That is, it matches anything that is not enclosed in the square brackets.

const fruitsStartsWithNotA = fruits.filter((fruit) => /^[^A]/.test(fruit));

console.log(fruitsStartsWithNotA); // [ 'Watermelon', 'Orange', 'Strawberry' ]
```

Sehen Sie mehr Beispiele in der [Eingabe-Grenz-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion) Referenz.

### Übereinstimmung einer Wortgrenze

In diesem Beispiel passen wir auf Fruchtnamen, die ein Wort enthalten, das auf "en" oder "ed" endet.

```js
const fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// Select descriptions that contains 'en' or 'ed' words endings:
const enEdSelection = fruitsWithDescription.filter((description) =>
  /(?:en|ed)\b/.test(description),
);

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]
```

Sehen Sie mehr Beispiele in der [Wort-Grenz-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion) Referenz.

### Lookahead Assertion

In diesem Beispiel passen wir nur dann auf das Wort "First", wenn es von dem Wort "test" gefolgt wird, aber wir schließen "test" nicht in die Übereinstimmungsergebnisse ein.

```js
const regex = /First(?= test)/g;

console.log("First test".match(regex)); // [ 'First' ]
console.log("First peach".match(regex)); // null
console.log("This is a First test in a year.".match(regex)); // [ 'First' ]
console.log("This is a First peach in a month.".match(regex)); // null
```

Sehen Sie mehr Beispiele in der [Lookahead Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) Referenz.

### Grundlegendes Beispiel für negative Lookahead-Assertion

Zum Beispiel passt `/\d+(?!\.)/` zu einer Zahl nur wenn sie nicht von einem Dezimalpunkt gefolgt wird. `/\d+(?!\.)/.exec('3.141')` passt zu "141", aber nicht zu "3".

```js
console.log(/\d+(?!\.)/g.exec("3.141")); // [ '141', index: 2, input: '3.141' ]
```

Sehen Sie mehr Beispiele in der [Lookahead Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) Referenz.

### Unterschiedliche Bedeutungen der '?!' Kombination in Assertions und Zeichenklassen

Die Kombination `?!` hat unterschiedliche Bedeutungen in Assertions wie `/x(?!y)/` und [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) wie `[^?!]`.

```js
const orangeNotLemon =
  "Do you want to have an orange? Yes, I do not want to have a lemon!";

// Different meaning of '?!' combination usage in Assertions /x(?!y)/ and Ranges /[^?!]/
const selectNotLemonRegex = /[^?!]+have(?! a lemon)[^?!]+[?!]/gi;
console.log(orangeNotLemon.match(selectNotLemonRegex)); // [ 'Do you want to have an orange?' ]

const selectNotOrangeRegex = /[^?!]+have(?! an orange)[^?!]+[?!]/gi;
console.log(orangeNotLemon.match(selectNotOrangeRegex)); // [ ' Yes, I do not want to have a lemon!' ]
```

### Lookbehind Assertion

In diesem Beispiel ersetzen wir das Wort "orange" durch "apple", nur wenn es vom Wort "ripe" vorangegangen wird.

```js
const oranges = ["ripe orange A", "green orange B", "ripe orange C"];

const newFruits = oranges.map((fruit) =>
  fruit.replace(/(?<=ripe )orange/, "apple"),
);
console.log(newFruits); // ['ripe apple A', 'green orange B', 'ripe apple C']
```

Sehen Sie mehr Beispiele in der [Lookbehind Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) Referenz.

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Referenz
- [Eingabe-Grenz-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Lookahead Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Wort-Grenz-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
