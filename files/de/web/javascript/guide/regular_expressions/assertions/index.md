---
title: Assertions
slug: Web/JavaScript/Guide/Regular_expressions/Assertions
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{jsSidebar("JavaScript Leitfaden")}}

Assertions umfassen Grenzen, die Anfänge und Enden von Zeilen und Wörtern anzeigen sowie andere Muster, die darauf hinweisen, dass ein Treffer möglich ist (einschließlich Look-ahead, Look-behind und bedingten Ausdrücken).

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Eingangsgrenze-Anfangs-Assertion:</strong></a>
          Passt zum Anfang der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m)-Flag aktiviert ist,
          passt es auch unmittelbar nach einem Zeilenumbruchszeichen. Zum Beispiel
          passt <code>/^A/</code> nicht zum "A" in "an A", aber es passt zum
          ersten "A" in "An A".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dieses Zeichen hat eine andere Bedeutung, wenn
            es am Anfang einer
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Eingangsgrenze-Ende-Assertion:</strong></a>
          Passt zum Ende der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m)-Flag aktiviert ist, passt es auch
          unmittelbar vor einem Zeilenumbruchszeichen. Zum Beispiel
          passt <code>/t$/</code> nicht zum "t" in "eater", aber es passt in "eat".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Wortgrenzen-Assertion:</strong></a>
          Passt zu einer Wortgrenze. Dies ist die Position, an der ein Wortzeichen
          nicht von einem anderen Wortzeichen gefolgt oder davor ist, z. B. zwischen
          einem Buchstaben und einem Leerzeichen. Beachten Sie, dass eine erkannte Wortgrenze
          nicht in das Ergebnis eingeschlossen ist. Mit anderen Worten, die Länge
          einer erkannten Wortgrenze ist null.
        </p>
        <p>Beispiele:</p>
        <ul>
          <li><code>/\bm/</code> passt zum "m" in "moon".</li>
          <li>
            <code>/oo\b/</code> passt nicht zum "oo" in "moon", weil "oo"
            von "n" gefolgt wird, das ein Wortzeichen ist.
          </li>
          <li>
            <code>/oon\b/</code> passt zum "oon" in "moon", weil "oon"
            das Ende des Strings ist und somit nicht von einem Wortzeichen gefolgt wird.
          </li>
          <li>
            <code>/\w\b\w/</code> wird nie etwas passen, weil ein Wortzeichen
            nie gleichzeitig von einem Nicht-Wort- und einem Wortzeichen gefolgt werden kann.
          </li>
        </ul>
        <p>
          Um ein Rückschrittzeichen (<code>[\b]</code>) zu passen, siehe
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Nicht-Wort-Grenz-Assertion:</strong></a>
          Passt zu einer Nicht-Wort-Grenze. Dies ist eine Position, an der das vorhergehende und
          nächste Zeichen vom selben Typ sind: Entweder müssen beide Wörter sein oder
          beide Nicht-Wörter, z. B. zwischen zwei Buchstaben oder zwischen zwei
          Leerzeichen. Der Anfang und das Ende eines Strings werden als Nicht-Wörter angesehen.
          Wie bei einer erkannten Wortgrenze ist eine erkannte Nicht-Wort-Grenze
          ebenfalls nicht im Treffer enthalten. Zum Beispiel
          passt <code>/\Bon/</code> zu "on" in "at noon", und
          <code>/ye\B/</code> passt zu "ye" in "possibly yesterday".
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Andere Assertions

> [!NOTE]
> Das `?`-Zeichen kann auch als Quantor verwendet werden.

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Lookahead-Assertion:</strong></a>
          Passt zu "x" nur, wenn "x" von "y" gefolgt wird. Zum Beispiel passt <code>/Jack(?=Sprat)/</code> zu
          "Jack" nur, wenn es von "Sprat" gefolgt wird.<br /><code
            >/Jack(?=Sprat|Frost)/</code
          >
          passt zu "Jack" nur, wenn es von "Sprat" oder "Frost" gefolgt wird. Allerdings
          sind weder "Sprat" noch "Frost" Teil der Trefferergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Negative Lookahead-Assertion:</strong></a>
          Passt zu "x" nur, wenn "x"
          nicht von "y" gefolgt wird. Zum Beispiel passt <code>/\d+(?!\.)/</code> zu
          einer Zahl nur, wenn sie nicht von einem Dezimalpunkt gefolgt wird. <code
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Lookbehind-Assertion:</strong></a>
          Passt zu "x" nur, wenn es von "y"
          vorangegangen wird. Zum Beispiel passt
          <code>/(?&#x3C;=Jack)Sprat/</code> zu "Sprat" nur, wenn es
          von "Jack" vorangegangen wird. <code>/(?&#x3C;=Jack|Tom)Sprat/</code> passt
          zu "Sprat" nur, wenn es von "Jack" oder "Tom" vorangegangen wird. Allerdings sind
          weder "Jack" noch "Tom" Teil der Trefferergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Negative Lookbehind-Assertion:</strong></a>
          Passt zu "x" nur, wenn
          "x" nicht von "y" vorangegangen wird. Zum Beispiel,
          <code>/(?&#x3C;!-)\d+/</code> passt zu einer Zahl nur, wenn sie nicht
          von einem Minuszeichen vorangegangen wird. <code>/(?&#x3C;!-)\d+/.exec('3')</code>
          passt zu "3". <code>/(?&#x3C;!-)\d+/.exec('-3')</code> befindet sich kein
          Treffer, weil die Zahl von einem Minuszeichen vorangegangen wird.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Allgemeines Beispiel zur Grenzübersicht

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

### Das Anfangen von Eingaben mit einem ^-Steuerzeichen abstimmen

Verwenden Sie `^`, um den Anfang der Eingabe abzustimmen. In diesem Beispiel können wir die Früchte, die mit 'A' beginnen, durch einen `/^A/`-Regex erhalten. Zum Auswählen geeigneter Früchte können wir die [`filter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)-Methode mit einer [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) nutzen.

```js
const fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// Select fruits started with 'A' by /^A/ Regex.
// Here '^' control symbol used only in one role: Matching beginning of an input.

const fruitsStartsWithA = fruits.filter((fruit) => /^A/.test(fruit));
console.log(fruitsStartsWithA); // [ 'Apple', 'Avocado' ]
```

Im zweiten Beispiel wird `^` sowohl für das Abstimmen am Anfang der Eingabe als auch für die Erstellung einer negierten oder ergänzten Zeichenklasse in [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) verwendet.

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

Weitere Beispiele finden Sie in der Referenz zur [Eingangsgrenze-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion).

### Eine Wortgrenze abstimmen

In diesem Beispiel passen wir Obsnamen an, die ein Wort enthalten, das mit "en" oder "ed" endet.

```js
const fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// Select descriptions that contains 'en' or 'ed' words endings:
const enEdSelection = fruitsWithDescription.filter((description) =>
  /(en|ed)\b/.test(description),
);

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]
```

Weitere Beispiele finden Sie in der Referenz zur [Wortgrenze-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion).

### Lookahead-Assertion

In diesem Beispiel stimmen wir das Wort "First" nur ab, wenn es vom Wort "test" gefolgt wird, wobei "test" nicht in die Trefferergebnisse einbezogen wird.

```js
const regex = /First(?= test)/g;

console.log("First test".match(regex)); // [ 'First' ]
console.log("First peach".match(regex)); // null
console.log("This is a First test in a year.".match(regex)); // [ 'First' ]
console.log("This is a First peach in a month.".match(regex)); // null
```

Weitere Beispiele finden Sie in der Referenz zur [Lookahead-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion).

### Grundlegende negative Lookahead-Assertion

Zum Beispiel stimmt `/\d+(?!\.)/` eine Zahl nur ab, wenn sie nicht von einem Dezimalpunkt gefolgt wird. `/\d+(?!\.)/.exec('3.141')` passt zu "141", aber nicht zu "3".

```js
console.log(/\d+(?!\.)/g.exec("3.141")); // [ '141', index: 2, input: '3.141' ]
```

Weitere Beispiele finden Sie in der Referenz zur [Lookahead-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion).

### Unterschiedliche Bedeutung der '?!'-Kombination in Assertions und Zeichenklassen

Die `?!`-Kombination hat unterschiedliche Bedeutungen in Assertions wie `/x(?!y)/` und [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) wie `[^?!]`.

```js
const orangeNotLemon =
  "Do you want to have an orange? Yes, I do not want to have a lemon!";

// Different meaning of '?!' combination usage in Assertions /x(?!y)/ and Ranges /[^?!]/
const selectNotLemonRegex = /[^?!]+have(?! a lemon)[^?!]+[?!]/gi;
console.log(orangeNotLemon.match(selectNotLemonRegex)); // [ 'Do you want to have an orange?' ]

const selectNotOrangeRegex = /[^?!]+have(?! an orange)[^?!]+[?!]/gi;
console.log(orangeNotLemon.match(selectNotOrangeRegex)); // [ ' Yes, I do not want to have a lemon!' ]
```

### Lookbehind-Assertion

In diesem Beispiel ersetzen wir das Wort "orange" mit "apple" nur, wenn es vom Wort "ripe" vorangegangen wird.

```js
const oranges = ["ripe orange A", "green orange B", "ripe orange C"];

const newFruits = oranges.map((fruit) =>
  fruit.replace(/(?<=ripe )orange/, "apple"),
);
console.log(newFruits); // ['ripe apple A', 'green orange B', 'ripe apple C']
```

Weitere Beispiele finden Sie in der Referenz zur [Lookbehind-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion).

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Quantoren](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Referenz
- [Eingangsgrenze-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Wortgrenze-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
