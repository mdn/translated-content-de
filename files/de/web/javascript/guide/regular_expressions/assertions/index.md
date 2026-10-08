---
title: Assertions
slug: Web/JavaScript/Guide/Regular_expressions/Assertions
l10n:
  sourceCommit: f4174abd45aefde55b6d45144c57ec3c2dc037a1
---

Assertions umfassen Grenzen, die den Anfang und das Ende von Zeilen und Wörtern kennzeichnen, sowie andere Muster, die auf bestimmte Weise angeben, ob eine Übereinstimmung möglich ist. Dazu gehören Lookahead-, Lookbehind- und bedingte Ausdrücke.

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

### Assertions für Grenzen

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Assertion für den Anfang der Eingabe:</strong></a>
          Entspricht dem Anfang der Eingabe. Wenn das Flag <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) aktiviert ist,
          entspricht es auch der Position unmittelbar nach einem Zeilenumbruchzeichen. Beispielsweise
          entspricht <code>/^A/</code> nicht dem „A“ in „an A“, aber dem
          ersten „A“ in „An A“.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dieses Zeichen hat eine andere Bedeutung, wenn
            es am Anfang einer
            <a
              href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
              >Zeichenklasse</a
            > steht.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Assertion für das Ende der Eingabe:</strong></a>
          Entspricht dem Ende der Eingabe. Wenn das Flag <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) aktiviert ist, entspricht es auch
          der Position unmittelbar vor einem Zeilenumbruchzeichen. Beispielsweise
          entspricht <code>/t$/</code> nicht dem „t“ in „eater“, aber dem „t“
          in „eat“.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\A</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion"><strong>Assertion für den Anfang des Buffers:</strong></a> Entspricht dem Anfang der gesamten Zeichenfolge, unabhängig davon, ob das Flag <code>m</code> gesetzt ist.
          Nur im <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode">Unicode-bewussten Modus</a> gültig.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\z</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion"><strong>Assertion für das Ende des Buffers:</strong></a> Entspricht dem Ende der gesamten Zeichenfolge, unabhängig davon, ob das Flag <code>m</code> gesetzt ist.
          Nur im <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode">Unicode-bewussten Modus</a> gültig.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\Z</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion"><strong>Assertion für das Ende des Buffers mit optionalem Zeilenumbruch:</strong></a> Entspricht dem Ende der gesamten Zeichenfolge, erlaubt aber eine optionale abschließende Zeilenumbruchsequenz (entweder ein <a href="/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators">Zeilenabschlusszeichen</a> oder eine <code>\r\n</code>-Sequenz).
          Nur im <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode">Unicode-bewussten Modus</a> gültig.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Assertion für eine Wortgrenze:</strong></a>
          Entspricht einer Wortgrenze. Das ist eine Position, an der vor oder nach
          einem Wortzeichen kein weiteres Wortzeichen steht, beispielsweise
          zwischen einem Buchstaben und einem Leerzeichen. Beachten Sie, dass
          die gefundene Wortgrenze nicht Teil der Übereinstimmung ist. Mit anderen
          Worten: Die Länge einer gefundenen Wortgrenze beträgt null.
        </p>
        <p>Beispiele:</p>
        <ul>
          <li><code>/\bm/</code> entspricht dem „m“ in „moon“.</li>
          <li>
            <code>/oo\b/</code> entspricht nicht dem „oo“ in „moon“, weil auf
            „oo“ mit „n“ ein Wortzeichen folgt.
          </li>
          <li>
            <code>/oon\b/</code> entspricht dem „oon“ in „moon“, weil „oon“
            am Ende der Zeichenfolge steht und somit kein Wortzeichen darauf folgt.
          </li>
          <li>
            <code>/\w\b\w/</code> findet niemals eine Übereinstimmung, da auf ein
            Wortzeichen nicht zugleich ein Nicht-Wortzeichen und ein Wortzeichen
            folgen können.
          </li>
        </ul>
        <p>
          Wie Sie ein Rückschrittzeichen (<code>[\b]</code>) finden, erfahren Sie unter
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Assertion für eine Nicht-Wortgrenze:</strong></a>
          Entspricht einer Position, die keine Wortgrenze ist. An dieser Position
          sind das vorherige und das nächste Zeichen vom gleichen Typ: Entweder
          sind beide Wortzeichen oder beide Nicht-Wortzeichen, beispielsweise
          zwischen zwei Buchstaben oder zwischen zwei Leerzeichen. Anfang und
          Ende einer Zeichenfolge gelten als Nicht-Wortzeichen. Wie eine gefundene
          Wortgrenze ist auch eine gefundene Nicht-Wortgrenze nicht Teil der
          Übereinstimmung. Beispielsweise entspricht <code>/\Bon/</code> dem
          „on“ in „at noon“ und <code>/ye\B/</code> dem „ye“ in
          „possibly yesterday“.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Andere Assertions

> [!NOTE]
> Das Zeichen `?` kann auch als Quantifizierer verwendet werden.

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
          Entspricht „x“ nur, wenn darauf „y“ folgt. Beispielsweise entspricht
          <code>/Jack(?=Sprat)/</code> „Jack“ nur, wenn darauf „Sprat“ folgt.<br /><code
            >/Jack(?=Sprat|Frost)/</code
          >
          entspricht „Jack“ nur, wenn darauf „Sprat“ oder „Frost“ folgt. Weder
          „Sprat“ noch „Frost“ ist jedoch Teil des Übereinstimmungsergebnisses.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Negative Lookahead-Assertion:</strong></a>
          Entspricht „x“ nur, wenn darauf nicht „y“ folgt. Beispielsweise
          entspricht <code>/\d+(?!\.)/</code> einer Zahl nur, wenn darauf kein
          Dezimalpunkt folgt. <code
            >/\d+(?!\.)/.exec('3.141')</code
          >
          entspricht „141“, aber nicht „3“.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Lookbehind-Assertion:</strong></a>
          Entspricht „x“ nur, wenn davor „y“ steht. Beispielsweise entspricht
          <code>/(?&#x3C;=Jack)Sprat/</code> „Sprat“ nur, wenn davor „Jack“
          steht. <code>/(?&#x3C;=Jack|Tom)Sprat/</code> entspricht „Sprat“
          nur, wenn davor „Jack“ oder „Tom“ steht. Weder „Jack“ noch „Tom“
          ist jedoch Teil des Übereinstimmungsergebnisses.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Negative Lookbehind-Assertion:</strong></a>
          Entspricht „x“ nur, wenn davor nicht „y“ steht. Beispielsweise
          entspricht <code>/(?&#x3C;!-)\d+/</code> einer Zahl nur, wenn davor
          kein Minuszeichen steht. <code>/(?&#x3C;!-)\d+/.exec('3')</code>
          entspricht „3“. Bei <code>/(?&#x3C;!-)\d+/.exec('-3')</code> wird
          keine Übereinstimmung gefunden, da vor der Zahl ein Minuszeichen steht.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Allgemeines Beispiel für Assertions für Grenzen

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

### Den Anfang der Eingabe mit dem Steuerzeichen ^ finden

Verwenden Sie `^`, um eine Übereinstimmung am Anfang der Eingabe zu finden. In diesem Beispiel können wir mit dem regulären Ausdruck `/^A/` die Früchte ermitteln, deren Namen mit „A“ beginnen. Um die passenden Früchte auszuwählen, können wir die Methode [`filter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) mit einer [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwenden.

```js
const fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// Select fruits started with 'A' by /^A/ Regex.
// Here '^' control symbol used only in one role: Matching beginning of an input.

const fruitsStartsWithA = fruits.filter((fruit) => /^A/.test(fruit));
console.log(fruitsStartsWithA); // [ 'Apple', 'Avocado' ]
```

Im zweiten Beispiel wird `^` sowohl verwendet, um eine Übereinstimmung am Anfang der Eingabe zu finden, als auch, um innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) eine negierte oder komplementäre Zeichenklasse zu erstellen.

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

Weitere Beispiele finden Sie in der Referenz zur [Assertion für Eingabegrenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion).

### Eine Wortgrenze finden

In diesem Beispiel suchen wir nach Fruchtnamen, die ein Wort enthalten, das auf „en“ oder „ed“ endet.

```js
const fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// Select descriptions that contains 'en' or 'ed' words endings:
const enEdSelection = fruitsWithDescription.filter((description) =>
  /(?:en|ed)\b/.test(description),
);

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]
```

Weitere Beispiele finden Sie in der Referenz zur [Assertion für Wortgrenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion).

### Lookahead-Assertion

In diesem Beispiel suchen wir nach dem Wort „First“, aber nur, wenn darauf das Wort „test“ folgt. „test“ wird dabei nicht in das Übereinstimmungsergebnis aufgenommen.

```js
const regex = /First(?= test)/g;

console.log("First test".match(regex)); // [ 'First' ]
console.log("First peach".match(regex)); // null
console.log("This is a First test in a year.".match(regex)); // [ 'First' ]
console.log("This is a First peach in a month.".match(regex)); // null
```

Weitere Beispiele finden Sie in der Referenz zur [Lookahead-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion).

### Einfache negative Lookahead-Assertion

Beispielsweise entspricht `/\d+(?!\.)/` einer Zahl nur, wenn darauf kein Dezimalpunkt folgt. `/\d+(?!\.)/.exec('3.141')` entspricht „141“, aber nicht „3“.

```js
console.log(/\d+(?!\.)/g.exec("3.141")); // [ '141', index: 2, input: '3.141' ]
```

Weitere Beispiele finden Sie in der Referenz zur [Lookahead-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion).

### Unterschiedliche Bedeutung der Kombination '?!' in Assertions und Zeichenklassen

Die Kombination `?!` hat in Assertions wie `/x(?!y)/` eine andere Bedeutung als in [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) wie `[^?!]`.

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

In diesem Beispiel ersetzen wir das Wort „orange“ nur dann durch „apple“, wenn davor das Wort „ripe“ steht.

```js
const oranges = ["ripe orange A", "green orange B", "ripe orange C"];

const newFruits = oranges.map((fruit) =>
  fruit.replace(/(?<=ripe )orange/, "apple"),
);
console.log(newFruits); // ['ripe apple A', 'green orange B', 'ripe apple C']
```

Weitere Beispiele finden Sie in der Referenz zur [Lookbehind-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion).

## Siehe auch

- Leitfaden zu [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- Leitfaden zu [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- Leitfaden zu [Quantifizierern](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)
- Leitfaden zu [Gruppen und Rückverweisen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- Referenz zu [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Assertion für Eingabegrenzen: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Assertion für Wortgrenzen: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
