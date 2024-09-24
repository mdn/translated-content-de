---
title: Zusicherungen
slug: Web/JavaScript/Guide/Regular_expressions/Assertions
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}}

Zusicherungen umfassen Grenzen, die die Anfänge und Enden von Zeilen und Wörtern anzeigen, sowie andere Muster, die auf irgendeine Weise anzeigen, dass ein Treffer möglich ist (einschließlich Vorausblick, Rückblick und bedingte Ausdrücke).

{{EmbedInteractiveExample("pages/js/regexp-assertions.html", "taller")}}

## Typen

### Grenztyp-Zusicherungen

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Eingangsgrenzenanfang-Zusicherung:</strong></a>
          Passt zum Anfang der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag aktiviert ist,
          passt es auch direkt nach einem Zeilenumbruch-Zeichen. Zum Beispiel,
          <code>/^A/</code> passt nicht zum "A" in "an A", aber passt zum
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Eingangsgrenzenende-Zusicherung:</strong></a>
          Passt zum Ende der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag aktiviert ist, passt es auch
          direkt vor einem Zeilenumbruch-Zeichen. Zum Beispiel,
          <code>/t$/</code> passt nicht zum "t" in "eater", aber passt dazu
          in "eat".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Wortgrenzen-Zusicherung:</strong></a>
          Passt zu einer Wortgrenze. Dies ist die Position, an der ein Wortzeichen
          nicht von einem anderen Wortzeichen gefolgt oder vorangegangen wird, wie zwischen
          einem Buchstaben und einem Leerzeichen. Beachten Sie, dass eine abgeglichene Wortgrenze nicht
          im Treffer enthalten ist. Mit anderen Worten, die Länge einer abgeglichenen Wortgrenze ist Null.
        </p>
        <p>Beispiele:</p>
        <ul>
          <li><code>/\bm/</code> passt zum "m" in "moon".</li>
          <li>
            <code>/oo\b/</code> passt nicht zum "oo" in "moon", da "oo"
            von "n" gefolgt wird, das ein Wortzeichen ist.
          </li>
          <li>
            <code>/oon\b/</code> passt zum "oon" in "moon", da "oon"
            das Ende der Zeichenkette ist und somit nicht von einem Wortzeichen gefolgt wird.
          </li>
          <li>
            <code>/\w\b\w/</code> wird niemals etwas treffen, da ein Wortzeichen
            niemals von sowohl einem Nicht-Wortzeichen als auch einem Wortzeichen gefolgt werden kann.
          </li>
        </ul>
        <p>
          Um ein Rückschrittzeichen (<code>[\b]</code>) zu treffen, siehe
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Nicht-Wortgrenzen-Zusicherung:</strong></a>
          Passt zu einer Nicht-Wortgrenze. Dies ist eine Position, an der das vorherige und
          nächste Zeichen vom gleichen Typ sind: Entweder müssen beide Wörter sein, oder
          beide müssen Nicht-Wörter sein, zum Beispiel zwischen zwei Buchstaben oder zwischen zwei
          Leerzeichen. Der Anfang und das Ende einer Zeichenkette werden als Nicht-Wörter angesehen.
          Genauso wie die abgeglichene Wortgrenze wird auch die abgeglichene Nicht-Wortgrenze
          nicht in den Treffer einbezogen. Zum Beispiel,
          <code>/\Bon/</code> trifft auf "on" in "at noon", und
          <code>/ye\B/</code> trifft auf "ye" in "possibly yesterday".
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Andere Zusicherungen

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Vorausschauen-Zusicherung:</strong></a>
          Passt "x" nur, wenn "x"
          von "y" gefolgt wird. Zum Beispiel, <code>/Jack(?=Sprat)/</code> passt
          zu "Jack" nur, wenn es von "Sprat" gefolgt wird.<br /><code
            >/Jack(?=Sprat|Frost)/</code
          >
          passt zu "Jack" nur, wenn es von "Sprat" oder "Frost" gefolgt wird. Allerdings
          ist weder "Sprat" noch "Frost" Teil der Treffergenisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Negative Vorausschauen-Zusicherung:</strong></a>
          Passt "x" nur, wenn "x"
          nicht von "y" gefolgt wird. Zum Beispiel, <code>/\d+(?!\.)/</code> passt
          zu einer Zahl nur, wenn sie nicht von einem Dezimalpunkt gefolgt wird. <code
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Rückwärts-Ausblick-Zusicherung:</strong></a>
          Passt "x" nur, wenn "x"
          von "y" vorangestellt wird. Zum Beispiel,
          <code>/(?&#x3C;=Jack)Sprat/</code> passt "Sprat" nur, wenn es
          von "Jack" vorangestellt wird. <code>/(?&#x3C;=Jack|Tom)Sprat/</code> passt
          "Sprat" nur, wenn es von "Jack" oder "Tom" vorangestellt wird. Allerdings
          ist weder "Jack" noch "Tom" Teil der Treffergenisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Negative Rückwärts-Ausblick-Zusicherung:</strong></a>
          Passt "x" nur, wenn
          "x" nicht von "y" vorangestellt wird. Zum Beispiel,
          <code>/(?&#x3C;!-)\d+/</code> passt eine Zahl nur, wenn sie nicht
          von einem Minuszeichen vorangestellt wird. <code>/(?&#x3C;!-)\d+/.exec('3')</code>
          passt "3". <code>/(?&#x3C;!-)\d+/.exec('-3')</code> kein Treffer,
          da die Zahl von einem Minuszeichen vorangestellt wird.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Allgemeines Übersicht-Beispiel für Grenztypen

```js
// Verwendung von Regex-Grenzen zur Behebung eines fehlerhaften Strings.
buggyMultiline = `tey, ihe light-greon apple
tangs on ihe greon traa`;

// 1) Verwenden Sie ^, um das Matching am Anfang der Zeichenkette und direkt nach einem Zeilenumbruch zu korrigieren.
buggyMultiline = buggyMultiline.replace(/^t/gim, "h");
console.log(1, buggyMultiline); // behebt 'tey' => 'hey' und 'tangs' => 'hangs', berührt jedoch nicht 'traa'.

// 2) Verwenden Sie $, um das Matching am Ende des Textes zu korrigieren.
buggyMultiline = buggyMultiline.replace(/aa$/gim, "ee.");
console.log(2, buggyMultiline); // behebt 'traa' => 'tree.'.

// 3) Verwenden Sie \b, um Zeichen direkt an der Grenze zwischen einem Wort und einem Leerzeichen zu treffen.
buggyMultiline = buggyMultiline.replace(/\bi/gim, "t");
console.log(3, buggyMultiline); // behebt 'ihe' => 'the', berührt jedoch nicht 'light'.

// 4) Verwenden Sie \B, um Zeichen innerhalb der Grenzen einer Einheit zu treffen.
fixedMultiline = buggyMultiline.replace(/\Bo/gim, "e");
console.log(4, fixedMultiline); // behebt 'greon' => 'green', berührt jedoch nicht 'on'.
```

### Das Anfang der Eingabe mit einem ^ Steuerzeichen treffen

Verwenden Sie `^` für das Matching am Anfang der Eingabe. In diesem Beispiel können wir die Früchte erhalten, die mit 'A' beginnen, durch ein `/^A/` Regex. Zum Auswählen geeigneter Früchte können wir die [`filter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) Methode mit einer [Pfeil](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) Funktion verwenden.

```js
const fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// Wählen Sie Früchte, die mit 'A' beginnen, mit /^A/ Regex.
// Hier wird das '^'-Steuerzeichen nur in einer Rolle verwendet: am Anfang einer Eingabe anpassen.

const fruitsStartsWithA = fruits.filter((fruit) => /^A/.test(fruit));
console.log(fruitsStartsWithA); // [ 'Apple', 'Avocado' ]
```

Im zweiten Beispiel wird `^` sowohl für das Matching am Anfang der Eingabe als auch zum Erstellen einer negierten oder ergänzten Zeichenklasse verwendet, wenn es innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) verwendet wird.

```js
const fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// Auswahl von Früchten, die nicht mit 'A' beginnen, mit einem /^[^A]/ regex.
// In diesem Beispiel werden zwei Bedeutungen des '^'-Steuerzeichens dargestellt:
// 1) Am Anfang der Eingabe anpassen
// 2) Eine negierte oder ergänzte Zeichenklasse: [^A]
// Das heißt, es passt zu allem, was nicht in den eckigen Klammern eingeschlossen ist.

const fruitsStartsWithNotA = fruits.filter((fruit) => /^[^A]/.test(fruit));

console.log(fruitsStartsWithNotA); // [ 'Watermelon', 'Orange', 'Strawberry' ]
```

Sehen Sie mehr Beispiele in der [Eingangsgrenzen-Zusicherung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion) Referenz.

### Eine Wortgrenze treffen

In diesem Beispiel passen wir zu Früchtenamen, die ein Wort enthalten, das auf "en" oder "ed" endet.

```js
const fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// Wählen Sie Beschreibungen, die auf 'en' oder 'ed' endende Wörter enthalten:
const enEdSelection = fruitsWithDescription.filter((descr) =>
  /(en|ed)\b/.test(descr),
);

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]
```

Sehen Sie mehr Beispiele in der [Wortgrenzen-Zusicherung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion) Referenz.

### Vorausblick-Zusicherung

In diesem Beispiel passen wir das Wort "First" nur, wenn es von dem Wort "test" gefolgt wird, aber wir schließen "test" nicht in die Treffergenisse ein.

```js
const regex = /First(?= test)/g;

console.log("First test".match(regex)); // [ 'First' ]
console.log("First peach".match(regex)); // null
console.log("This is a First test in a year.".match(regex)); // [ 'First' ]
console.log("This is a First peach in a month.".match(regex)); // null
```

Sehen Sie mehr Beispiele in der [Vorausblick-Zusicherung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) Referenz.

### Grundlegende negative Vorausblick-Zusicherung

Zum Beispiel, `/\d+(?!\.)/` passt eine Zahl nur, wenn sie nicht von einem Dezimalpunkt gefolgt wird. `/\d+(?!\.)/.exec('3.141')` passt "141", aber nicht "3".

```js
console.log(/\d+(?!\.)/g.exec("3.141")); // [ '141', index: 2, input: '3.141' ]
```

Sehen Sie mehr Beispiele in der [Vorausblick-Zusicherung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) Referenz.

### Verschiedene Bedeutungen der '?!' Kombination in Zusicherungen und Zeichenklassen

Die `?!` Kombination hat unterschiedliche Bedeutungen in Zusicherungen wie `/x(?!y)/` und [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) wie `[^?!]`.

```js
const orangeNotLemon =
  "Do you want to have an orange? Yes, I do not want to have a lemon!";

// Unterschiedliche Bedeutungen der '?!' Kombination in Zusicherungen /x(?!y)/ und Bereich /[^?!]/
const selectNotLemonRegex = /[^?!]+have(?! a lemon)[^?!]+[?!]/gi;
console.log(orangeNotLemon.match(selectNotLemonRegex)); // [ 'Do you want to have an orange?' ]

const selectNotOrangeRegex = /[^?!]+have(?! an orange)[^?!]+[?!]/gi;
console.log(orangeNotLemon.match(selectNotOrangeRegex)); // [ ' Yes, I do not want to have a lemon!' ]
```

### Rückwärts-Ausblick-Zusicherung

In diesem Beispiel ersetzen wir das Wort "orange" durch "apple" nur, wenn es von dem Wort "ripe" vorangestellt wird.

```js
const oranges = ["ripe orange A", "green orange B", "ripe orange C"];

const newFruits = oranges.map((fruit) =>
  fruit.replace(/(?<=ripe )orange/, "apple"),
);
console.log(newFruits); // ['ripe apple A', 'green orange B', 'ripe apple C']
```

Sehen Sie mehr Beispiele in der [Rückwärts-Ausblick-Zusicherung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) Referenz.

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Anleitung
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Anleitung
- [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Anleitung
- [Gruppen und Backreferences](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Anleitung
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Referenz
- [Eingangsgrenzen-Zusicherung: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Vorausblick-Zusicherung: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Rückwärts-Ausblick-Zusicherung: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Wortgrenzen-Zusicherung: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
