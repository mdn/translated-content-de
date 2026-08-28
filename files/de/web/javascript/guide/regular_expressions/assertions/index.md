---
title: Assertions
slug: Web/JavaScript/Guide/Regular_expressions/Assertions
l10n:
  sourceCommit: 8f53af45fae665627a95ac50e177b15d0228b920
---

Assertions umfassen Grenzen, die Anfänge und Enden von Zeilen und Wörtern kennzeichnen, sowie andere Muster, die auf irgendeine Weise anzeigen, dass ein Treffer möglich ist (einschließlich Vorwärtssuche, Rückwärtssuche und bedingten Ausdrücken).

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

### Grenztypen von Assertions

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Start-Grenzassertion:</strong></a>
          Passt am Anfang der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag aktiviert ist,
          passt es auch unmittelbar nach einem Zeilenumbruch. Zum Beispiel,
          <code>/^A/</code> passt nicht auf das "A" in "an A", aber es passt auf
          das erste "A" in "An A".
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>End-Grenzassertion:</strong></a>
          Passt am Ende der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag aktiviert ist, passt es auch
          unmittelbar vor einem Zeilenumbruch. Zum Beispiel,
          <code>/t$/</code> passt nicht auf das "t" in "eater", wohl aber auf
          das in "eat".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\A</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion"><strong>Pufferanfang-Grenzassertion:</strong></a> Passt am Anfang des gesamten Strings unabhängig von der Anwesenheit des <code>m</code> Flags.
          Nur gültig im <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode">Unicode-Modus</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\z</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion"><strong>Pufferend-Grenzassertion:</strong></a> Passt am Ende des gesamten Strings unabhängig von der Anwesenheit des <code>m</code> Flags.
          Nur gültig im <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode">Unicode-Modus</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\Z</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion"><strong>Pufferend-Grenzassertion mit optionalem Zeilenumbruch:</strong></a> Passt am Ende des gesamten Strings, erlaubt jedoch ein optionales nachgestelltes Zeilenumbruchzeichen (entweder ein <a href="/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators">Zeilenendezeichen</a> oder eine <code>\r\n</code> Sequenz).
          Nur gültig im <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode">Unicode-Modus</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Wortgrenz-Assertion:</strong></a>
          Passt an eine Wortgrenze. Das ist die Position, an der ein Wortzeichen
          nicht von einem anderen Wortzeichen gefolgt oder vorangegangen wird, beispielsweise zwischen
          einem Buchstaben und einem Leerzeichen. Beachten Sie, dass eine übereinstimmende Wortgrenze nicht
          in der Übereinstimmung enthalten ist. Mit anderen Worten, die Länge einer übereinstimmenden Wortgrenze ist null.
        </p>
        <p>Beispiele:</p>
        <ul>
          <li><code>/\bm/</code> passt auf das "m" in "moon".</li>
          <li>
            <code>/oo\b/</code> passt nicht auf das "oo" in "moon", weil "oo"
            von "n" gefolgt wird, was ein Wortzeichen ist.
          </li>
          <li>
            <code>/oon\b/</code> passt auf das "oon" in "moon", weil "oon"
            das Ende des Strings ist, also nicht von einem Wortzeichen gefolgt wird.
          </li>
          <li>
            <code>/\w\b\w/</code> wird nie etwas treffen, weil ein Wortzeichen
            nie von einem Nicht-Wort- und einem Wortzeichen gefolgt sein kann.
          </li>
        </ul>
        <p>
          Um ein Rücktastenzeichen (<code>[\b]</code>) zu treffen, siehe
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Nicht-Wortgrenz-Assertion:</strong></a>
          Passt an eine Nicht-Wortgrenze. Dies ist eine Position, an der das vorherige und das nächste Zeichen vom gleichen Typ sind: Entweder beide müssen Wörter sein, oder beide müssen keine Wörter sein, wie zum Beispiel zwischen zwei Buchstaben oder zwischen zwei Leerzeichen. Der Anfang und das Ende eines Strings werden als Nicht-Wörter betrachtet. Genau wie die übereinstimmende Wortgrenze ist auch die übereinstimmende Nicht-Wortgrenze nicht im Treffer enthalten. Zum Beispiel,
          <code>/\Bon/</code> passt auf "on" in "at noon", und
          <code>/ye\B/</code> passt auf "ye" in "possibly yesterday".
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Andere Assertions

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Vorwärtssuche-Assertion:</strong></a>
          Passt "x" nur, wenn "x" von "y" gefolgt wird. Zum Beispiel, <code>/Jack(?=Sprat)/</code> passt
          auf "Jack" nur, wenn es von "Sprat" gefolgt wird.<br /><code
            >/Jack(?=Sprat|Frost)/</code
          >
          passt auf "Jack" nur, wenn es von "Sprat" oder "Frost" gefolgt wird. Allerdings ist weder "Sprat" noch "Frost" Teil der Treffenergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Negative Vorwärtssuche-Assertion:</strong></a>
          Passt "x" nur, wenn "x" nicht von "y" gefolgt wird. Zum Beispiel, <code>/\d+(?!\.)/</code> passt
          eine Zahl nur, wenn sie nicht von einem Dezimalpunkt gefolgt wird. <code
            >/\d+(?!\.)/.exec('3.141')</code
          >
          passt auf "141" aber nicht auf "3".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Rückwärtssuche-Assertion:</strong></a>
          Passt "x" nur, wenn "x" von "y" vorausgegangen wird. Zum Beispiel,
          <code>/(?&#x3C;=Jack)Sprat/</code> passt auf "Sprat" nur, wenn es
          von "Jack" vorausgegangen wird. <code>/(?&#x3C;=Jack|Tom)Sprat/</code> passt
          auf "Sprat" nur, wenn es von "Jack" oder "Tom" vorausgegangen wird. Allerdings ist weder
          "Jack" noch "Tom" Teil der Treffenergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Negative Rückwärtssuche-Assertion:</strong></a>
          Passt "x" nur, wenn
          "x" nicht von "y" vorausgegangen wird. Zum Beispiel,
          <code>/(?&#x3C;!-)\d+/</code> passt eine Zahl nur, wenn sie nicht
          von einem Minuszeichen vorausgegangen wird. <code>/(?&#x3C;!-)\d+/.exec('3')</code>
          passt auf "3". <code>/(?&#x3C;!-)\d+/.exec('-3')</code> findet keinen
          Treffer, weil die Zahl von einem Minuszeichen vorausgegangen wird.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Allgemeines Übersicht-Beispiel für Grenztypen

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

### Passend zum Anfang der Eingabe mit einem ^ Steuerzeichen

Verwenden Sie `^`, um am Anfang der Eingabe zu passen. In diesem Beispiel können wir die Früchte, die mit 'A' beginnen, durch einen `/^A/` Regex bekommen. Für die Auswahl der passenden Früchte können wir die [`filter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) Methode mit einer [Arrow-Funktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) nutzen.

```js
const fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// Select fruits started with 'A' by /^A/ Regex.
// Here '^' control symbol used only in one role: Matching beginning of an input.

const fruitsStartsWithA = fruits.filter((fruit) => /^A/.test(fruit));
console.log(fruitsStartsWithA); // [ 'Apple', 'Avocado' ]
```

Im zweiten Beispiel wird `^` sowohl verwendet, um am Anfang der Eingabe zu passen, als auch um eine negierte oder komplementierte Zeichenklasse zu erstellen, wenn es innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) verwendet wird.

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

Weitere Beispiele finden Sie im [Start-Grenzassertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion) Referenz.

### Passend zu einer Wortgrenze

In diesem Beispiel passen wir Fruchtnamen, die ein Wort enthalten, das auf "en" oder "ed" endet.

```js
const fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// Select descriptions that contains 'en' or 'ed' words endings:
const enEdSelection = fruitsWithDescription.filter((description) =>
  /(?:en|ed)\b/.test(description),
);

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]
```

Weitere Beispiele finden Sie im [Wortgrenz-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion) Referenz.

### Vorwärtssuche-Assertion

In diesem Beispiel passen wir das Wort "First" nur, wenn es von dem Wort "test" gefolgt wird, jedoch schließen wir "test" nicht in die Treffenergebnisse ein.

```js
const regex = /First(?= test)/g;

console.log("First test".match(regex)); // [ 'First' ]
console.log("First peach".match(regex)); // null
console.log("This is a First test in a year.".match(regex)); // [ 'First' ]
console.log("This is a First peach in a month.".match(regex)); // null
```

Weitere Beispiele finden Sie im [Vorwärtssuche-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) Referenz.

### Grundlegende negative Vorwärtssuche-Assertion

Zum Beispiel, `/\d+(?!\.)/` passt eine Zahl nur, wenn sie nicht von einem Dezimalpunkt gefolgt wird. `/\d+(?!\.)/.exec('3.141')` passt auf "141", aber nicht auf "3".

```js
console.log(/\d+(?!\.)/g.exec("3.141")); // [ '141', index: 2, input: '3.141' ]
```

Weitere Beispiele finden Sie im [Vorwärtssuche-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) Referenz.

### Unterschiedliche Bedeutung der '?!' Kombination in Assertions und Zeichenklassen

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

### Rückwärtssuche-Assertion

In diesem Beispiel ersetzen wir das Wort "orange" durch "apple" nur, wenn es von dem Wort "ripe" vorausgegangen wird.

```js
const oranges = ["ripe orange A", "green orange B", "ripe orange C"];

const newFruits = oranges.map((fruit) =>
  fruit.replace(/(?<=ripe )orange/, "apple"),
);
console.log(newFruits); // ['ripe apple A', 'green orange B', 'ripe apple C']
```

Weitere Beispiele finden Sie im [Rückwärtssuche-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) Referenz.

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Quantoren](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Referenz
- [Start-Grenzassertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Vorwärtssuche-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Rückwärtssuche-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Wortgrenz-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
