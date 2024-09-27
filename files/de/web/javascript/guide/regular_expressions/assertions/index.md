---
title: Assertions
slug: Web/JavaScript/Guide/Regular_expressions/Assertions
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}}

Assertions umfassen Grenzen, die Anfänge und Enden von Zeilen und Wörtern kennzeichnen, sowie andere Muster, die in gewisser Weise anzeigen, dass ein Match möglich ist (einschließlich Look-ahead, Look-behind und bedingte Ausdrücke).

{{EmbedInteractiveExample("pages/js/regexp-assertions.html", "taller")}}

## Typen

### Grenze-Typ-Assertions

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Anfangs-Assertion der Eingabegrenze:</strong></a>
          Passt zum Anfang der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag aktiviert ist,
          passt dies auch direkt nach einem Zeilenumbruch-Zeichen. Zum Beispiel,
          <code>/^A/</code> entspricht nicht dem "A" in "an A", aber passt zum
          ersten "A" in "An A".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dieses Zeichen hat eine andere Bedeutung,
            wenn es am Anfang einer
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Ende-Assertion der Eingabegrenze:</strong></a>
          Passt zum Ende der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag aktiviert ist,
          passt dies auch direkt vor einem Zeilenumbruch-Zeichen. Zum Beispiel,
          <code>/t$/</code> entspricht nicht dem "t" in "eater", aber passt zum
          "t" in "eat".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Wortgrenzen-Assertion:</strong></a>
          Passt zu einer Wortgrenze. Dies ist die Position, an der ein Wortzeichen
          nicht von einem anderen Wortzeichen gefolgt oder vorausgegangen wird, wie beispielsweise
          zwischen einem Buchstaben und einem Leerzeichen. Beachten Sie, dass eine übereinstimmende Wortgrenze
          nicht in das Match einbezogen wird. Mit anderen Worten, die Länge
          einer übereinstimmenden Wortgrenze ist null.
        </p>
        <p>Beispiele:</p>
        <ul>
          <li><code>/\bm/</code> stimmt mit dem "m" in "moon" überein.</li>
          <li>
            <code>/oo\b/</code> stimmt nicht mit dem "oo" in "moon" überein, weil "oo"
            von "n" gefolgt wird, einem Wortzeichen.
          </li>
          <li>
            <code>/oon\b/</code> stimmt mit "oon" in "moon" überein, da "oon"
            das Ende des Strings ist und somit nicht von einem Wortzeichen gefolgt wird.
          </li>
          <li>
            <code>/\w\b\w/</code> wird niemals etwas matchen, weil ein
            Wortzeichen nie sowohl von einem Nicht-Wort- als auch einem Wortzeichen gefolgt
            werden kann.
          </li>
        </ul>
        <p>
          Um ein Rücktast-Zeichen (<code>[\b]</code>) zu matchen, siehe
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Nicht-Wortgrenzen-Assertion:</strong></a>
          Passt zu einer Nicht-Wortgrenze. Dies ist eine Position, an der das
          vorherige und nächste Zeichen vom gleichen Typ sind: Beide müssen entweder
          Wörter oder beide müssen Nicht-Wörter sein, beispielsweise zwischen zwei Buchstaben oder
          zwischen zwei Leerzeichen. Der Anfang und das Ende eines Strings werden als Nicht-Wörter
          betrachtet. Genauso wie die übereinstimmende Wortgrenze wird die übereinstimmende
          Nicht-Wortgrenze auch nicht in das Match einbezogen. Zum Beispiel,
          <code>/\Bon/</code> stimmt mit "on" in "at noon" überein, und
          <code>/ye\B/</code> stimmt mit "ye" in "possibly yesterday" überein.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Andere Assertions

> [!NOTE]
> Das `?` Zeichen kann auch als Quantor verwendet werden.

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
          Passt zu "x" nur wenn "x" von "y"
          gefolgt wird. Zum Beispiel, <code>/Jack(?=Sprat)/</code> passt zu
          "Jack" nur wenn es von "Sprat" gefolgt wird.<br /><code
            >/Jack(?=Sprat|Frost)/</code
          >
          passt zu "Jack" nur wenn es entweder von "Sprat" oder "Frost" gefolgt wird. Weder
          "Sprat" noch "Frost" sind jedoch Teil der Match-Ergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Negative Lookahead-Assertion:</strong></a>
          Passt zu "x" nur wenn "x"
          nicht von "y" gefolgt wird. Zum Beispiel, <code>/\d+(?!\.)/</code> passt
          zu einer Zahl nur wenn sie nicht von einem Dezimalpunkt gefolgt wird. <code
            >/\d+(?!\.)/.exec('3.141')</code
          >
          stimmt mit "141" überein, aber nicht mit "3".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Lookbehind-Assertion:</strong></a>
          Passt zu "x" nur wenn "x" von
          "y" vorausgegangen wird. Zum Beispiel,
          <code>/(?&#x3C;=Jack)Sprat/</code> passt zu "Sprat" nur wenn es von
          "Jack" vorausgegangen wird. <code>/(?&#x3C;=Jack|Tom)Sprat/</code>
          passt zu "Sprat" nur wenn es entweder von "Jack" oder "Tom"
          vorausgegangen wird. Weder "Jack" noch "Tom" sind jedoch Teil der
          Match-Ergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Negative Lookbehind-Assertion:</strong></a>
          Passt zu "x" nur
          wenn "x" nicht von "y" vorausgegangen wird. Zum Beispiel,
          <code>/(?&#x3C;!-)\d+/</code> passt zu einer Zahl nur wenn sie nicht
          von einem Minuszeichen vorausgegangen wird. <code>/(?&#x3C;!-)\d+/.exec('3')</code>
          stimmt mit "3" überein. <code>/(?&#x3C;!-)\d+/.exec('-3')</code>
          Match wurde nicht gefunden, weil die Zahl von einem Minuszeichen
          vorausgegangen wird.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Allgemeines Überblicksbeispiel für die Grenze-Typen

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

### Das Matchen des Anfangs der Eingabe mit einem ^ Kontrollzeichen

Verwenden Sie `^`, um am Anfang der Eingabe zu matchen. In diesem Beispiel können wir die Früchte erhalten, die mit 'A' beginnen, indem wir ein `/^A/` RegEx verwenden. Zum Auswählen geeigneter Früchte können wir die [`filter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) Methode mit einer [arrow](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) Funktion verwenden.

```js
const fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// Select fruits started with 'A' by /^A/ Regex.
// Here '^' control symbol used only in one role: Matching beginning of an input.

const fruitsStartsWithA = fruits.filter((fruit) => /^A/.test(fruit));
console.log(fruitsStartsWithA); // [ 'Apple', 'Avocado' ]
```

Im zweiten Beispiel wird `^` sowohl verwendet, um am Anfang der Eingabe als auch für das Erstellen von negierten oder ergänzten Zeichenklassen zu matchen, wenn es innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) verwendet wird.

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

Sehen Sie mehr Beispiele in der [Eingangsgrenzen-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion) Referenz.

### Matchen einer Wortgrenze

In diesem Beispiel gleichen wir Fruchtnamen ab, die ein Wort enthalten, das mit "en" oder "ed" endet.

```js
const fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// Select descriptions that contains 'en' or 'ed' words endings:
const enEdSelection = fruitsWithDescription.filter((descr) =>
  /(en|ed)\b/.test(descr),
);

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]
```

Sehen Sie mehr Beispiele in der [Wortgrenzen-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion) Referenz.

### Lookahead-Assertion

In diesem Beispiel matchen wir das Wort "First" nur wenn es von dem Wort "test" gefolgt wird, aber wir schließen "test" nicht in die Match-Ergebnisse ein.

```js
const regex = /First(?= test)/g;

console.log("First test".match(regex)); // [ 'First' ]
console.log("First peach".match(regex)); // null
console.log("This is a First test in a year.".match(regex)); // [ 'First' ]
console.log("This is a First peach in a month.".match(regex)); // null
```

Sehen Sie mehr Beispiele in der [Lookahead-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) Referenz.

### Einfache negative Lookahead-Assertion

Zum Beispiel, `/\d+(?!\.)/` passt zu einer Zahl nur wenn sie nicht von einem Dezimalpunkt gefolgt wird. `/\d+(?!\.)/.exec('3.141')` stimmt mit "141" überein, aber nicht mit "3".

```js
console.log(/\d+(?!\.)/g.exec("3.141")); // [ '141', index: 2, input: '3.141' ]
```

Sehen Sie mehr Beispiele in der [Lookahead-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) Referenz.

### Unterschiedliche Bedeutung der '?!' Kombination bei der Verwendung in Assertions und Zeichenklassen

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

In diesem Beispiel ersetzen wir das Wort "orange" mit "apple" nur wenn es von dem Wort "ripe" vorausgegangen wird.

```js
const oranges = ["ripe orange A", "green orange B", "ripe orange C"];

const newFruits = oranges.map((fruit) =>
  fruit.replace(/(?<=ripe )orange/, "apple"),
);
console.log(newFruits); // ['ripe apple A', 'green orange B', 'ripe apple C']
```

Sehen Sie mehr Beispiele in der [Lookbehind-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) Referenz.

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Referenz
- [Eingangsgrenzen-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
