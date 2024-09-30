---
title: Assertions
slug: Web/JavaScript/Guide/Regular_expressions/Assertions
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}}

Assertions umfassen Grenzen, die Anfänge und Enden von Zeilen und Wörtern anzeigen, sowie andere Muster, die in irgendeiner Weise darauf hinweisen, dass ein Treffer möglich ist (einschließlich Vorausblick, Rückblick und bedingte Ausdrücke).

{{EmbedInteractiveExample("pages/js/regexp-assertions.html", "taller")}}

## Typen

### Grenztypen-Assertions

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Eingabegrenze Anfangs-Assertion:</strong></a>
          Passt am Anfang der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag aktiviert ist, passt es auch direkt nach einem Zeilenumbruch.
          Zum Beispiel passt <code>/^A/</code> nicht auf das "A" in "an A", aber es passt auf das erste "A" in "An A".
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Eingabegrenze End-Assertion:</strong></a>
          Passt am Ende der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag aktiviert ist, passt es auch direkt vor einem Zeilenumbruch. Zum Beispiel
          passt <code>/t$/</code> nicht auf das "t" in "eater", aber es passt in "eat".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Wortgrenze-Assertion:</strong></a>
          Passt auf eine Wortgrenze. Dies ist die Position, an der ein Wortzeichen nicht von einem anderen Wortzeichen gefolgt oder vorangegangen wird, wie etwa zwischen einem Buchstaben und einem Leerzeichen. Beachten Sie, dass eine gefundene Wortgrenze nicht in das Match eingeschlossen wird. Anders ausgedrückt ist die Länge einer gefundenen Wortgrenze null.
        </p>
        <p>Beispiele:</p>
        <ul>
          <li><code>/\bm/</code> passt auf das "m" in "moon".</li>
          <li>
            <code>/oo\b/</code> passt nicht auf das "oo" in "moon", weil "oo"
            von "n" gefolgt wird, das ein Wortzeichen ist.
          </li>
          <li>
            <code>/oon\b/</code> passt auf das "oon" in "moon", weil "oon" das
            Ende des Strings ist und daher nicht von einem Wortzeichen gefolgt wird.
          </li>
          <li>
            <code>/\w\b\w/</code> wird nie etwas finden, weil ein Wortzeichen
            niemals sowohl von einem Nicht-Wort- als auch einem Wortzeichen gefolgt werden kann.
          </li>
        </ul>
        <p>
          Um ein Rückschrittszeichen (<code>[\b]</code>) zu finden, sehen Sie
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Nicht-Wort-Grenze-Assertion:</strong></a>
          Passt auf eine Nicht-Wort-Grenze. Dies ist eine Position, an der das vorherige und das nächste Zeichen vom selben Typ sind: Entweder müssen beide Worte oder beide Nicht-Worte sein, zum Beispiel zwischen zwei Buchstaben oder zwischen zwei Leerzeichen. Der Anfang und das Ende eines Strings werden als Nicht-Worte betrachtet. Genauso wie die gefundene Wortgrenze wird auch die gefundene Nicht-Wort-Grenze nicht in das Match eingeschlossen. Zum Beispiel
          passt <code>/\Bon/</code> auf "on" in "at noon", und
          <code>/ye\B/</code> passt auf "ye" in "possibly yesterday".
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Lookahead-Assertion:</strong></a>
          Passt "x" nur wenn "x" von "y" gefolgt wird. Zum Beispiel
          passt <code>/Jack(?=Sprat)/</code> auf "Jack" nur wenn es von "Sprat" gefolgt wird.<br /><code
            >/Jack(?=Sprat|Frost)/</code
          >
          passt "Jack" nur wenn es entweder von "Sprat" oder "Frost" gefolgt wird. "Sprat" und "Frost" sind jedoch nicht Bestandteil der Match-Ergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Negative Lookahead-Assertion:</strong></a>
          Passt "x" nur wenn "x"
          nicht von "y" gefolgt wird. Zum Beispiel passt <code>/\d+(?!\.)/</code> auf eine Zahl nur wenn sie nicht von einem Dezimalpunkt gefolgt wird. <code
            >/\d+(?!\.)/.exec('3.141')</code
          >
          passt "141" aber nicht "3".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Lookbehind-Assertion:</strong></a>
          Passt "x" nur wenn "x" von "y" vorangegangen wird. Zum Beispiel,
          <code>/(?&#x3C;=Jack)Sprat/</code> passt "Sprat" nur wenn es
          von "Jack" vorangegangen wird. <code>/(?&#x3C;=Jack|Tom)Sprat/</code> passt
          "Sprat" nur wenn es entweder von "Jack" oder "Tom" vorangegangen wird. "Jack" und "Tom" sind jedoch nicht Bestandteil der Match-Ergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Negative Lookbehind-Assertion:</strong></a>
          Passt "x" nur wenn
          "x" nicht von "y" vorangegangen wird. Zum Beispiel,
          <code>/(?&#x3C;!-)\d+/</code> passt auf eine Zahl nur wenn sie nicht
          von einem Minuszeichen vorangegangen wird. <code>/(?&#x3C;!-)\d+/.exec('3')</code>
          passt "3". <code>/(?&#x3C;!-)\d+/.exec('-3')</code> - kein Match gefunden, da die Zahl von einem Minuszeichen vorangegangen wird.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Allgemeines Übersicht der Grenztypen-Assertions

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

### Übereinstimmung des Eingabebeginns mit einem ^ Kontrollzeichen

Verwenden Sie `^`, um am Anfang der Eingabe zu matchen. In diesem Beispiel können wir die Früchte erhalten, die mit 'A' beginnen, indem wir ein `/^A/` Regex verwenden. Um geeignete Früchte auszuwählen, können wir die [`filter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) Methode mit einer [Pfeil](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) Funktion verwenden.

```js
const fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// Select fruits started with 'A' by /^A/ Regex.
// Here '^' control symbol used only in one role: Matching beginning of an input.

const fruitsStartsWithA = fruits.filter((fruit) => /^A/.test(fruit));
console.log(fruitsStartsWithA); // [ 'Apple', 'Avocado' ]
```

Im zweiten Beispiel wird `^` sowohl für das Matchen am Anfang der Eingabe als auch für das Erstellen einer negierten oder ergänzten Zeichenklasse verwendet, wenn es innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) eingesetzt wird.

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

Weitere Beispiele finden Sie in der [Eingabegrenze-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion) Referenz.

### Matchen einer Wortgrenze

In diesem Beispiel matchen wir Fruchtnamen, die ein Wort enthalten, das auf "en" oder "ed" endet.

```js
const fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// Select descriptions that contains 'en' or 'ed' words endings:
const enEdSelection = fruitsWithDescription.filter((descr) =>
  /(en|ed)\b/.test(descr),
);

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]
```

Weitere Beispiele finden Sie in der [Wortgrenze-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion) Referenz.

### Lookahead-Assertion

In diesem Beispiel matchen wir das Wort "First" nur, wenn es vom Wort "test" gefolgt wird, aber wir schließen "test" nicht in die Match-Ergebnisse ein.

```js
const regex = /First(?= test)/g;

console.log("First test".match(regex)); // [ 'First' ]
console.log("First peach".match(regex)); // null
console.log("This is a First test in a year.".match(regex)); // [ 'First' ]
console.log("This is a First peach in a month.".match(regex)); // null
```

Weitere Beispiele finden Sie in der [Lookahead-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) Referenz.

### Grundlegende negative Lookahead-Assertion

Zum Beispiel passt `/\d+(?!\.)/` auf eine Zahl nur, wenn sie nicht von einem Dezimalpunkt gefolgt wird. `/\d+(?!\.)/.exec('3.141')` passt "141", aber nicht "3".

```js
console.log(/\d+(?!\.)/g.exec("3.141")); // [ '141', index: 2, input: '3.141' ]
```

Weitere Beispiele finden Sie in der [Lookahead-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) Referenz.

### Unterschiedliche Bedeutung der '?!'-Kombination in Assertions und Zeichenklassen

Die `?!` Kombination hat unterschiedliche Bedeutungen in Assertions wie `/x(?!y)/` und [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) wie `[^?!]`.

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

In diesem Beispiel ersetzen wir das Wort "orange" mit "apple", nur wenn es vom Wort "ripe" vorangegangen wird.

```js
const oranges = ["ripe orange A", "green orange B", "ripe orange C"];

const newFruits = oranges.map((fruit) =>
  fruit.replace(/(?<=ripe )orange/, "apple"),
);
console.log(newFruits); // ['ripe apple A', 'green orange B', 'ripe apple C']
```

Weitere Beispiele finden Sie in der [Lookbehind-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) Referenz.

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Referenz
- [Eingabegrenze-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Wortgrenze-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
