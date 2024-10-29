---
title: Assertions
slug: Web/JavaScript/Guide/Regular_expressions/Assertions
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("JavaScript Leitfaden")}}

Assertionen umfassen Begrenzungen, die den Anfang und das Ende von Zeilen und Wörtern anzeigen, sowie andere Muster, die auf irgendeine Weise andeuten, dass ein Treffer möglich ist (einschließlich Look-ahead, Look-behind und bedingte Ausdrücke).

{{EmbedInteractiveExample("pages/js/regexp-assertions.html", "taller")}}

## Typen

### Begrenzungs-Typ Assertionen

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Anfangs-Assertions-Grenze:</strong></a>
          Entspricht dem Anfang der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag aktiviert ist,
          entspricht es auch direkt nach einem Zeilenumbruchzeichen. Zum Beispiel
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
            >
            erscheint.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Ende-Assertions-Grenze:</strong></a>
          Entspricht dem Ende der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag aktiviert ist, entspricht es auch
          direkt vor einem Zeilenumbruchzeichen. Zum Beispiel
          passt <code>/t$/</code> nicht zum "t" in "eater", aber es passt in "eat".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Wort-Grenzen-Assertion:</strong></a>
          Entspricht einer Wortgrenze. Dies ist die Position, an der ein Wortzeichen
          nicht von einem anderen Wortzeichen gefolgt oder vorhergegangen wird, wie z.B. zwischen
          einem Buchstaben und einem Leerzeichen. Beachten Sie, dass eine gefundene Wortgrenze nicht
          im Treffer enthalten ist. Mit anderen Worten, die Länge einer gefundenen Wortgrenze ist null.
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
            das Ende der Zeichenkette ist und somit nicht von einem Wortzeichen gefolgt wird.
          </li>
          <li>
            <code>/\w\b\w/</code> wird nie etwas finden, da ein Wortzeichen
            nie sowohl von einem Nicht-Wort- als auch einem Wortzeichen gefolgt werden kann.
          </li>
        </ul>
        <p>
          Um ein Rückschrittzeichen (<code>[\b]</code>) zu finden, lesen Sie
          die <a
            href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
            >Zeichenklassen</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\B</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Nicht-Wort-Grenzen-Assertion:</strong></a>
          Entspricht einer Nicht-Wortgrenze. Dies ist eine Position, an der das vorherige und
          das nächste Zeichen vom gleichen Typ sind: Entweder müssen beide Wörter sein, oder
          beide müssen Nicht-Wörter sein, z.B. zwischen zwei Buchstaben oder zwei
          Leerzeichen. Der Anfang und das Ende einer Zeichenkette werden als Nicht-Wörter angesehen.
          Genauso wie die gefundene Wortgrenze ist die gefundene Nicht-Wortgrenze
          auch nicht im Treffer enthalten. Zum Beispiel
          <code>/\Bon/</code> passt zu "on" in "at noon", und
          <code>/ye\B/</code> passt zu "ye" in "possibly yesterday".
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Andere Assertionen

> [!NOTE]
> Das Zeichen `?` kann auch als Quantor verwendet werden.

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
          Entspricht "x" nur, wenn "x"
          von "y" gefolgt wird. Zum Beispiel passt <code>/Jack(?=Sprat)/</code> nur zu
          "Jack", wenn es von "Sprat" gefolgt wird.<br /><code
            >/Jack(?=Sprat|Frost)/</code
          >
          passt zu "Jack", nur wenn es von "Sprat" oder "Frost" gefolgt wird. Weder
          "Sprat" noch "Frost" sind Teil des Treffer-Ergebnisses.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Negative Lookahead-Assertion:</strong></a>
          Entspricht "x" nur, wenn "x"
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
          Entspricht "x" nur, wenn "x"
          von "y" vorhergegangen wird. Zum Beispiel passt
          <code>/(?&#x3C;=Jack)Sprat/</code> zu "Sprat" nur, wenn es
          von "Jack" vorhergegangen wird. <code>/(?&#x3C;=Jack|Tom)Sprat/</code> passt
          zu "Sprat" nur, wenn es von "Jack" oder "Tom" vorhergegangen wird. Weder
          "Jack" noch "Tom" sind Teil des Treffer-Ergebnisses.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Negative Lookbehind-Assertion:</strong></a>
          Entspricht "x" nur, wenn
          "x" nicht von "y" vorhergegangen wird. Zum Beispiel passt
          <code>/(?&#x3C;!-)\d+/</code> zu einer Zahl nur, wenn sie nicht
          von einem Minuszeichen vorhergegangen wird. <code>/(?&#x3C;!-)\d+/.exec('3')</code>
          passt zu "3". <code>/(?&#x3C;!-)\d+/.exec('-3')</code> findet keinen Treffer, weil die Zahl von einem Minuszeichen vorhergegangen wird.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Allgemeine Überblicksbeispiele zu Begrenzungen

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

### Das Anfang der Eingabe mit einem ^ Steuerzeichen abgleichen

Verwenden Sie `^`, um am Anfang der Eingabe abzugleichen. In diesem Beispiel können wir die Früchte erhalten, die mit 'A' beginnen, indem wir einen `/^A/` Regex verwenden. Zum Auswählen der passenden Früchte können wir die [`filter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) Methode mit einer [Pfeil-](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) Funktion nutzen.

```js
const fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// Select fruits started with 'A' by /^A/ Regex.
// Here '^' control symbol used only in one role: Matching beginning of an input.

const fruitsStartsWithA = fruits.filter((fruit) => /^A/.test(fruit));
console.log(fruitsStartsWithA); // [ 'Apple', 'Avocado' ]
```

Im zweiten Beispiel wird `^` sowohl zum Abgleichen am Anfang der Eingabe verwendet als auch zum Erstellen einer negierten oder ergänzenden Zeichenklasse, wenn es innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) eingesetzt wird.

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

Siehe weitere Beispiele in der Referenz zur [Eingabe-Grenz-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion).

### Eine Wortgrenze abgleichen

In diesem Beispiel gleichen wir Fruchtnamen ab, die ein Wort enthalten, das in "en" oder "ed" endet.

```js
const fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// Select descriptions that contains 'en' or 'ed' words endings:
const enEdSelection = fruitsWithDescription.filter((descr) =>
  /(en|ed)\b/.test(descr),
);

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]
```

Siehe weitere Beispiele in der Referenz zur [Wort-Grenzen-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion).

### Lookahead-Assertion

In diesem Beispiel gleichen wir das Wort "First" nur ab, wenn es von dem Wort "test" gefolgt wird, aber wir schließen "test" nicht in die Treffer-Ergebnisse ein.

```js
const regex = /First(?= test)/g;

console.log("First test".match(regex)); // [ 'First' ]
console.log("First peach".match(regex)); // null
console.log("This is a First test in a year.".match(regex)); // [ 'First' ]
console.log("This is a First peach in a month.".match(regex)); // null
```

Siehe weitere Beispiele in der Referenz zur [Lookahead-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion).

### Grundlegende negative Lookahead-Assertion

Zum Beispiel passt `/\d+(?!\.)/` zu einer Zahl nur, wenn sie nicht von einem Dezimalpunkt gefolgt wird. `/\d+(?!\.)/.exec('3.141')` passt zu "141", aber nicht zu "3".

```js
console.log(/\d+(?!\.)/g.exec("3.141")); // [ '141', index: 2, input: '3.141' ]
```

Siehe weitere Beispiele in der Referenz zur [Lookahead-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion).

### Unterschiedliche Bedeutung der '?!' Kombination bei der Verwendung in Assertionen und Zeichenklassen

Die `?!` Kombination hat unterschiedliche Bedeutungen in Assertionen wie `/x(?!y)/` und [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) wie `[^?!]`.

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

In diesem Beispiel ersetzen wir das Wort "orange" durch "apple" nur, wenn es von dem Wort "ripe" vorhergegangen wird.

```js
const oranges = ["ripe orange A", "green orange B", "ripe orange C"];

const newFruits = oranges.map((fruit) =>
  fruit.replace(/(?<=ripe )orange/, "apple"),
);
console.log(newFruits); // ['ripe apple A', 'green orange B', 'ripe apple C']
```

Siehe weitere Beispiele in der Referenz zur [Lookbehind-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion).

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Quantoren](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Referenz
- [Eingabe-Grenz-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Wort-Grenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
