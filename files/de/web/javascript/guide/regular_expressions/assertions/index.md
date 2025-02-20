---
title: Assertions
slug: Web/JavaScript/Guide/Regular_expressions/Assertions
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("JavaScript-Leitfaden")}}

Zu den Assertions gehören Grenzen, die den Anfang und das Ende von Zeilen und Wörtern anzeigen, sowie andere Muster, die anzeigen, dass eine Übereinstimmung möglich ist (einschließlich Lookahead, Lookbehind und bedingte Ausdrücke).

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

### Assertions vom Typ Grenze

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Input-Grenze Anfangs-Assertion:</strong></a>
          Passt am Anfang des Eingabewerts. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m)-Flag aktiviert ist, passt es auch unmittelbar nach einem Zeilenumbruch-Zeichen. Zum Beispiel passt <code>/^A/</code> nicht auf das "A" in "an A", jedoch auf das erste "A" in "An A".
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Input-Grenze End-Assertion:</strong></a>
          Passt am Ende des Eingabewerts. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m)-Flag aktiviert ist, passt es auch unmittelbar vor einem Zeilenumbruch-Zeichen. Zum Beispiel passt <code>/t$/</code> nicht auf das "t" in "eater", jedoch auf das "t" in "eat".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Wortgrenzen-Assertion:</strong></a>
          Passt an einer Wortgrenze. Dies ist die Position, an der ein Wortzeichen nicht von einem anderen Wortzeichen gefolgt oder vor einem solchen steht, wie z. B. zwischen einem Buchstaben und einem Leerzeichen. Beachten Sie, dass eine erkannte Wortgrenze nicht Teil der Übereinstimmung ist. Mit anderen Worten: Die Länge einer passenden Wortgrenze ist null.
        </p>
        <p>Beispiele:</p>
        <ul>
          <li><code>/\bm/</code> passt auf das "m" in "moon".</li>
          <li>
            <code>/oo\b/</code> passt nicht auf das "oo" in "moon", da "oo" von "n" gefolgt wird, welches ein Wortzeichen ist.
          </li>
          <li>
            <code>/oon\b/</code> passt auf das "oon" in "moon", da "oon" das Ende des Strings ist und somit nicht von einem Wortzeichen gefolgt wird.
          </li>
          <li>
            <code>/\w\b\w/</code> wird nie passen, da ein Wortzeichen niemals gleichzeitig von einem Nicht-Wortzeichen und einem Wortzeichen gefolgt sein kann.
          </li>
        </ul>
        <p>
          Um ein Rückschrittzeichen (<code>[\b]</code>) zu matchen, siehe
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Keine-Wortgrenze-Assertion:</strong></a>
          Passt an einer Nicht-Wortgrenze. Dies ist eine Position, an der das vorherige und das nächste Zeichen vom gleichen Typ sind: Entweder müssen beide Wörter oder beide Nicht-Wörter sein, z. B. zwischen zwei Buchstaben oder zwischen zwei Leerzeichen. Der Anfang und das Ende eines Strings werden als Nicht-Wörter betrachtet. Genau wie die erkannte Wortgrenze ist die erkannte Nicht-Wortgrenze ebenfalls nicht Teil der Übereinstimmung. Zum Beispiel passt <code>/\Bon/</code> auf "on" in "at noon", und <code>/ye\B/</code> passt auf "ye" in "possibly yesterday".
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Andere Assertions

> [!NOTE]
> Das Zeichen `?` kann auch als Quantifier verwendet werden.

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
          Passt "x" nur, wenn "x"
          von "y" gefolgt wird. Zum Beispiel passt <code>/Jack(?=Sprat)/</code> auf "Jack" nur, wenn es von "Sprat" gefolgt wird.<br /><code
            >/Jack(?=Sprat|Frost)/</code
          >
          passt auf "Jack" nur, wenn es von "Sprat" oder "Frost" gefolgt wird. Weder "Sprat" noch "Frost" sind jedoch Teil der Übereinstimmungsergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Negative Lookahead-Assertion:</strong></a>
          Passt "x" nur, wenn "x" nicht von "y" gefolgt wird. Zum Beispiel passt <code>/\d+(?!\.)/</code> auf eine Zahl, nur wenn sie nicht von einem Dezimalpunkt gefolgt wird. <code
            >/\d+(?!\.)/.exec('3.141')</code
          >
          passt auf "141", jedoch nicht auf "3".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Lookbehind-Assertion:</strong></a>
          Passt "x" nur, wenn "x" von "y" vorangestellt ist. Zum Beispiel passt <code>/(?&#x3C;=Jack)Sprat/</code> auf "Sprat", nur wenn es von "Jack" vorangestellt ist. <code>/(?&#x3C;=Jack|Tom)Sprat/</code> passt auf "Sprat", nur wenn es von "Jack" oder "Tom" vorangestellt ist. Weder "Jack" noch "Tom" sind jedoch Teil der Übereinstimmungsergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Negative Lookbehind-Assertion:</strong></a>
          Passt "x" nur, wenn "x" nicht von "y" vorangestellt ist. Zum Beispiel passt <code>/(?&#x3C;!-)\d+/</code> auf eine Zahl, nur wenn sie nicht von einem Minuszeichen vorangestellt ist. <code>/(?&#x3C;!-)\d+/.exec('3')</code> passt auf "3". <code>/(?&#x3C;!-)\d+/.exec('-3')</code> findet keine Übereinstimmung, da die Zahl von einem Minuszeichen vorangestellt ist.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Allgemeines Beispiel für Grenz-Typen

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

### Den Anfang des Eingabewerts mit einem ^-Steuerzeichen abgleichen

Verwenden Sie `^`, um am Anfang des Eingabewerts abzugleichen. In diesem Beispiel können wir die Früchte finden, die mit 'A' beginnen, indem wir einen `/^A/` Regex verwenden. Um die passenden Früchte auszuwählen, können wir die [`filter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)-Methode mit einer [arrow](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions)-Funktion verwenden.

```js
const fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// Select fruits started with 'A' by /^A/ Regex.
// Here '^' control symbol used only in one role: Matching beginning of an input.

const fruitsStartsWithA = fruits.filter((fruit) => /^A/.test(fruit));
console.log(fruitsStartsWithA); // [ 'Apple', 'Avocado' ]
```

Im zweiten Beispiel wird `^` sowohl verwendet, um am Anfang des Eingabewerts abzugleichen, als auch, um eine negierte oder komplementierte Zeichenklasse innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) zu erstellen.

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

Weitere Beispiele finden Sie in der Referenz zu [Input-Grenz-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion).

### Eine Wortgrenze abgleichen

In diesem Beispiel gleichen wir Obstnamen ab, die ein Wort enthalten, das mit "en" oder "ed" endet.

```js
const fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// Select descriptions that contains 'en' or 'ed' words endings:
const enEdSelection = fruitsWithDescription.filter((descr) =>
  /(en|ed)\b/.test(descr),
);

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]
```

Weitere Beispiele finden Sie in der Referenz zu [Wortgrenzen-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion).

### Lookahead-Assertion

In diesem Beispiel gleichen wir das Wort "First" nur ab, wenn es von dem Wort "test" gefolgt wird, jedoch wird "test" nicht in die Übereinstimmungsergebnisse aufgenommen.

```js
const regex = /First(?= test)/g;

console.log("First test".match(regex)); // [ 'First' ]
console.log("First peach".match(regex)); // null
console.log("This is a First test in a year.".match(regex)); // [ 'First' ]
console.log("This is a First peach in a month.".match(regex)); // null
```

Weitere Beispiele finden Sie in der Referenz zu [Lookahead-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion).

### Grundlegende Negative Lookahead-Assertion

Beispielsweise passt `/\d+(?!\.)/` auf eine Zahl nur, wenn sie nicht von einem Dezimalpunkt gefolgt wird. `/\d+(?!\.)/.exec('3.141')` passt auf "141", jedoch nicht auf "3".

```js
console.log(/\d+(?!\.)/g.exec("3.141")); // [ '141', index: 2, input: '3.141' ]
```

Weitere Beispiele finden Sie in der Referenz zu [Lookahead-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion).

### Verschiedene Bedeutungen der Kombination '?!' in Assertions und Zeichenklassen

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

### Lookbehind-Assertion

In diesem Beispiel ersetzen wir das Wort "orange" durch "apple", nur wenn es von dem Wort "ripe" vorangestellt ist.

```js
const oranges = ["ripe orange A", "green orange B", "ripe orange C"];

const newFruits = oranges.map((fruit) =>
  fruit.replace(/(?<=ripe )orange/, "apple"),
);
console.log(newFruits); // ['ripe apple A', 'green orange B', 'ripe apple C']
```

Weitere Beispiele finden Sie in der Referenz zu [Lookbehind-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion).

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Quantifiers](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Referenz
- [Input-Grenz-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
