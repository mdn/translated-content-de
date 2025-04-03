---
title: Zeichensatzklassen
slug: Web/JavaScript/Guide/Regular_expressions/Character_classes
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("JavaScript Leitfaden")}}

Zeichensatzklassen unterscheiden zwischen Arten von Zeichen, wie zum Beispiel zwischen Buchstaben und Ziffern.

{{InteractiveExample("JavaScript Demo: RegExp Character classes")}}

```js interactive-example
const chessStory = "He played the King in a8 and she moved her Queen in c2.";
const regexpCoordinates = /\w\d/g;
console.log(chessStory.match(regexpCoordinates));
// Expected output: Array [ 'a8', 'c2']

const moods = "happy 🙂, confused 😕, sad 😢";
const regexpEmoticons = /[\u{1F600}-\u{1F64F}]/gu;
console.log(moods.match(regexpEmoticons));
// Expected output: Array ['🙂', '😕', '😢']
```

## Arten

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
        <code>[xyz]<br />[a-c]</code>
      </td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class"><strong>Zeichensatzklasse:</strong></a>
          Passt zu jedem der eingeschlossenen Zeichen. Sie können einen Bereich von Zeichen durch die Verwendung eines Bindestrichs angeben, aber wenn der Bindestrich als erstes oder letztes Zeichen innerhalb der eckigen Klammern erscheint, wird er als normaler Bindestrich interpretiert und als normales Zeichen in die Zeichensatzklasse aufgenommen.
        </p>
        <p>
          Zum Beispiel ist <code>[abcd]</code> dasselbe wie <code>[a-d]</code>.
          Sie passen zum "b" in "brisket" und zum "c" in "chop".
        </p>
        <p>
          Zum Beispiel passen <code>[abcd-]</code> und <code>[-abcd]</code> zum
          "b" in "brisket", zum "c" in "chop" und zum "-" (Bindestrich) in
          "non-profit".
        </p>
        <p>
          Zum Beispiel ist <code>[\w-]</code> dasselbe wie
          <code>[A-Za-z0-9_-]</code>. Beide passen zum "b" in "brisket", zum
          "c" in "chop" und zum "n" in "non-profit".
        </p>
        <p>
          Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets"><code>unicodeSets</code></a> (<code>v</code>)-Flag aktiviert ist, bietet die Zeichensatzklasse einige zusätzliche Funktionen. Weitere Informationen finden Sie in der <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class">Zeichensatzklasse</a> Referenz.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>[^xyz]<br />[^a-c]</code>
        </p>
      </td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class"><strong>Negierte Zeichensatzklasse:</strong></a>
          Passt auf alles, was nicht in den eckigen Klammern enthalten ist. Sie können einen Bereich von Zeichen durch die Verwendung eines Bindestrichs angeben, aber wenn der Bindestrich als erstens Zeichen nach dem <code>^</code> oder das letzte Zeichen innerhalb der eckigen Klammern erscheint, wird er als normaler Bindestrich interpretiert und als normales Zeichen in die Zeichensatzklasse aufgenommen. Zum Beispiel ist <code>[^abc]</code> dasselbe wie <code>[^a-c]</code>. Sie passen zunächst zum "o" in "bacon" und zum "h" in "chop".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Das ^-Zeichen kann auch den
            <a
              href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
              >Anfang der Eingabe</a
            > anzeigen.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>.</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard"><strong>Platzhalter:</strong></a>
          Passt zu jedem einzelnen Zeichen <em>außer</em> Zeilenbeendungszeichen:
          <code>\n</code>, <code>\r</code>, <code>\u2028</code> oder
          <code>\u2029</code>. Zum Beispiel passt <code>/.y/</code> zu "my" und
          "ay", aber nicht zu "yes", in "yes make my day", da es kein Zeichen vor dem "y" in "yes" gibt. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> (s)-Flag aktiviert ist, passen auch Zeilenbeendungszeichen. Innerhalb einer Zeichensatzklasse verliert der Punkt seine spezielle Bedeutung und passt zu einem normalen Punkt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Ziffern-Zeichensatzklasse:</strong></a>
          Passt zu jeder Ziffer (arabische Zahl). Entspricht <code>[0-9]</code>. Zum Beispiel passt <code>/\d/</code> oder <code>/[0-9]/</code> zu "2" in "B2 ist die Raumnummer".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Ziffern-Zeichensatzklasse:</strong></a>
          Passt zu jedem Zeichen, das keine Ziffer (arabische Zahl) ist. Entspricht <code>[^0-9]</code>. Zum Beispiel passt <code>/\D/</code> oder <code>/[^0-9]/</code> zu "B" in "B2 ist die Raumnummer".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Wort-Zeichensatzklasse:</strong></a>
          Passt zu jedem alphanumerischen Zeichen des einfachen lateinischen Alphabets, einschließlich des Unterstrichs. Entspricht <code>[A-Za-z0-9_]</code>. Zum Beispiel passt <code>/\w/</code> zu "a" in "Apfel", "5" in "$5.28", "3" in "3D" und "m" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Wort-Zeichensatzklasse:</strong></a>
          Passt zu jedem Zeichen, das kein Wortzeichen des einfachen lateinischen Alphabets ist. Entspricht <code>[^A-Za-z0-9_]</code>. Zum Beispiel passt <code>/\W/</code> oder <code>/[^A-Za-z0-9_]/</code> zu "%" in "50%" und "É" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Leerzeichen-Zeichensatzklasse:</strong></a>
          Passt zu einem einzelnen Leerzeichenzeichen, einschließlich Leerzeichen, Tabulator, Formatumbruch, Zeilenumbruch und andere Unicode-Leerzeichen. Entspricht <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel passt <code>/\s\w*/</code> zu " bar" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Leerzeichen-Zeichensatzklasse:</strong></a>
          Passt zu einem einzelnen Zeichen, das kein Leerzeichen ist. Entspricht <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel passt <code>/\S\w*/</code> zu "foo" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\t</code></td>
      <td>Passt zu einem horizontalen Tabulator.</td>
    </tr>
    <tr>
      <td><code>\r</code></td>
      <td>Passt zu einem Wagenrücklauf.</td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>Passt zu einem Zeilenumbruch.</td>
    </tr>
    <tr>
      <td><code>\v</code></td>
      <td>Passt zu einem vertikalen Tabulator.</td>
    </tr>
    <tr>
      <td><code>\f</code></td>
      <td>Passt zu einem Seitenvorschub.</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Passt zu einem Rückschritt. Wenn Sie nach der Wortgrenze-Versicherung (<code>\b</code>) suchen, siehe
        <a
          href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
          >Assertions</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>\0</code></td>
      <td>Passt zu einem NUL-Zeichen. Folgen Sie diesem nicht mit einer weiteren Ziffer.</td>
    </tr>
    <tr>
      <td>
        <code>\c<em>X</em></code>
      </td>
      <td>
        <p>
          Passt zu einem Steuerzeichen unter Verwendung der
          <a href="https://en.wikipedia.org/wiki/Caret_notation"
            >Caret-Notation</a
          >, wobei "X" ein Buchstabe von A–Z ist (entsprechend den Codepunkten
          <code>U+0001</code><em>–</em><code>U+001A</code>). Zum Beispiel passt
          <code>/\cM\cJ/</code> zu "\r\n".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        Passt zu dem Zeichen mit dem Code <code><em>hh</em></code> (zwei
        hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        Passt zu einem UTF-16-Code-Einheit mit dem Wert
        <code><em>hhhh</em></code> (vier hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>{hhhh}</em> oder <em>\u{hhhhh}</em></code>
      </td>
      <td>
        (Nur wenn das <code>u</code>-Flag gesetzt ist.) Passt zu dem Zeichen mit
        dem Unicode-Wert <code>U+<em>hhhh</em></code> oder <code
          >U+<em>hhhhh</em></code
        >
        (hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\p{<em>UnicodeProperty</em>}</code>,
        <code>\P{<em>UnicodeProperty</em>}</code>
      </td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape"><strong>Unicode-Zeichensatzklasse:</strong></a>
          Passt zu einem Zeichen basierend auf seinen Unicode-Zeichen-Eigenschaften: zum Beispiel Emoji-Zeichen, oder japanische <em>Katakana</em>-Zeichen, oder chinesische/japanische Han/Kanji-Zeichen usw.).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Gibt an, dass das folgende Zeichen speziell behandelt oder "escaped" werden soll. Es verhält sich auf zwei Arten.
        </p>
        <ul>
          <li>
            Für Zeichen, die normalerweise wörtlich behandelt werden, gibt an, dass das nächste Zeichen speziell und nicht wörtlich zu interpretieren ist. Zum Beispiel passt <code>/b/</code> zum Zeichen "b". Durch das Platzieren eines Backslashes vor "b", also durch die Verwendung von <code>/\b/</code>, wird das Zeichen speziell und bedeutet, eine Wortgrenze zu finden.
          </li>
          <li>
            Für Zeichen, die normalerweise speziell behandelt werden, gibt an, dass das nächste Zeichen nicht speziell sein soll und wörtlich interpretiert werden sollte. Zum Beispiel ist "*" ein Sonderzeichen, das 0 oder mehr Vorkommen des vorhergehenden Zeichens bedeutet; zum Beispiel bedeutet <code>/a*/</code>, dass 0 oder mehr "a"s gefunden werden sollen. Um <code>*</code> wörtlich zu finden, stellen Sie ihm einen Backslash voran; zum Beispiel passt <code>/a\*/</code> zu "a*".
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Um dieses Zeichen wörtlich zu finden, escapen Sie es mit sich selbst. Mit anderen Worten, um nach <code>\</code> zu suchen, verwenden Sie <code>/\\/</code>.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>|<em>y</em></code>
      </td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction"><strong>Disjunktion:</strong></a>
          Passt entweder zu "x" oder "y". Jede Komponente, getrennt durch einen Pipe (<code>|</code>), wird als <em>Alternative</em> bezeichnet. Zum Beispiel passt <code>/green|red/</code> zu "green" in "green apple" und zu "red" in "red apple".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Eine Disjunktion ist eine andere Möglichkeit, "eine Menge von Optionen" anzugeben, aber sie ist keine Zeichensatzklasse. Disjunktionen sind keine Atome — Sie müssen eine <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">Gruppe</a> verwenden, um sie Teil eines größeren Musters zu machen. <code>[abc]</code> ist funktional gleichwertig mit <code>(?:a|b|c)</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Suche nach einer Serie von Ziffern

In diesem Beispiel suchen wir mit `\d{4}` nach einer Folge von 4 Ziffern. `\b` gibt eine [Wortgrenze](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) an (d.h. beginnen oder beenden Sie das Match nicht in der Mitte einer Zahlenfolge).

```js
const randomData = "015 354 8787 687351 3512 8735";
const regexpFourDigits = /\b\d{4}\b/g;

console.table(randomData.match(regexpFourDigits));
// ['8787', '3512', '8735']
```

Weitere Beispiele finden Sie in der [Zeichensatzklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) Referenz.

### Suche nach einem Wort (aus dem lateinischen Alphabet), das mit A beginnt

In diesem Beispiel suchen wir nach einem Wort, das mit dem Buchstaben A beginnt. `\b` gibt eine [Wortgrenze](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) an (d.h. beginnen Sie das Match nicht in der Mitte eines Wortes). `[aA]` gibt den Buchstaben "a" oder "A" an. `\w+` gibt jedes Zeichen _aus dem lateinischen Alphabet_ an, mehrfach (`+` ist ein [Quantor](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)). Beachten Sie, dass es nicht notwendig ist, eine abschließende `\b`-Grenze zu haben, da wir bereits so lange matchen, bis keine Wortzeichen mehr vorhanden sind.

```js
const aliceExcerpt =
  "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";
const regexpWordStartingWithA = /\b[aA]\w+/g;

console.table(aliceExcerpt.match(regexpWordStartingWithA));
// ['Ada', 'and', 'at', 'all']
```

Weitere Beispiele finden Sie in der [Zeichensatzklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) Referenz.

### Suche nach einem Wort (aus Unicode-Zeichen)

Statt des lateinischen Alphabets können wir eine Reihe von Unicode-Zeichen verwenden, um ein Wort zu identifizieren (wodurch wir in der Lage sind, mit Texten in anderen Sprachen wie Russisch oder Arabisch umzugehen). Die "Basis-Multilingual-Ebene" von Unicode enthält die meisten weltweit verwendeten Zeichen und wir können Zeichensatzklassen und Bereiche verwenden, um Wörter zu finden, die mit diesen Zeichen geschrieben sind.

```js
const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP goes through U+0000 to U+FFFF but space is U+0020

console.table(nonEnglishText.match(regexpBMPWord));
["Приключения", "Алисы", "в", "Стране", "чудес"];
```

Weitere Beispiele finden Sie in der [Unicode-Zeichensatzklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) Referenz.

### Zählen von Vokalen

In diesem Beispiel zählen wir die Anzahl der Vokale (A, E, I, O, U, Y) in einem Text. Das `g`-Flag wird verwendet, um alle Vorkommen des Musters im Text zu finden. Das `i`-Flag wird verwendet, um das Muster ohne Groß-/Kleinschreibung übereinstimmen zu lassen, sodass sowohl Groß- als auch Kleinbuchstaben-Vokale gefunden werden.

```js
const aliceExcerpt =
  "There was a long silence after this, and Alice could only hear whispers now and then.";
const regexpVowels = /[aeiouy]/gi;

console.log("Number of vowels:", aliceExcerpt.match(regexpVowels).length);
// Number of vowels: 26
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
- [Quantifiers](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Regular Expressions](/de/docs/Web/JavaScript/Guide/Regular_expressions) Referenz
- [Zeichensatzklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Zeichensatzklasse-Escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Unicode-Zeichensatzklasse-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Platzhalter: `.`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
