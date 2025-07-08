---
title: Zeichenklassen
slug: Web/JavaScript/Guide/Regular_expressions/Character_classes
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Zeichenklassen unterscheiden unterschiedliche Arten von Zeichen, wie zum Beispiel die Unterscheidung zwischen Buchstaben und Ziffern.

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

## Typen

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class"><strong>Zeichenklasse:</strong></a>
          Passt zu einem der eingeschlossenen Zeichen. Sie können einen Bereich von Zeichen durch die Verwendung eines Bindestrichs angeben, aber wenn der Bindestrich als erstes oder letztes Zeichen in den eckigen Klammern erscheint, wird er als literaler Bindestrich betrachtet, der in die Zeichenklasse als normales Zeichen aufgenommen wird.
        </p>
        <p>
          Zum Beispiel ist <code>[abcd]</code> dasselbe wie <code>[a-d]</code>.
          Sie stimmen mit dem "b" in "brisket" und dem "c" in "chop" überein.
        </p>
        <p>
          Zum Beispiel stimmen <code>[abcd-]</code> und <code>[-abcd]</code> mit
          dem "b" in "brisket", dem "c" in "chop" und dem "-" (Bindestrich) in
          "non-profit" überein.
        </p>
        <p>
          Zum Beispiel ist <code>[\w-]</code> dasselbe wie
          <code>[A-Za-z0-9_-]</code>. Beide stimmen mit dem "b" in "brisket", dem
          "c" in "chop" und dem "n" in "non-profit" überein.
        </p>
        <p>
          Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets"><code>unicodeSets</code></a> (<code>v</code>)-Flag aktiviert ist, bietet die Zeichenklasse einige zusätzliche Funktionen. Weitere Informationen finden Sie in der <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class">Zeichenklasse</a>-Referenz.
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class"><strong>Negierte Zeichenklasse:</strong></a>
          Passt zu allem, was nicht in den eckigen Klammern eingeschlossen ist. Sie können einen Bereich von Zeichen durch die Verwendung eines Bindestrichs angeben, aber wenn der Bindestrich als erstes Zeichen nach dem <code>^</code> oder als letztes Zeichen in den eckigen Klammern erscheint, wird er als literaler Bindestrich betrachtet, der in die Zeichenklasse als normales Zeichen aufgenommen wird. Zum Beispiel ist <code>[^abc]</code> dasselbe wie
          <code>[^a-c]</code>. Sie stimmen mit "o" in "bacon" und "h" in "chop" überein.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Das ^ Zeichen kann auch den
            <a
              href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
              >Beginn der Eingabe</a
            > anzeigen.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>.</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard"><strong>Wildcard:</strong></a>
          Passt zu jedem einzelnen Zeichen <em>außer</em> Zeilenumbrüchen:
          <code>\n</code>, <code>\r</code>, <code>\u2028</code> oder
          <code>\u2029</code>. Zum Beispiel stimmt <code>/.y/</code> mit "my" und
          "ay", aber nicht mit "yes" in "yes make my day" überein, da es kein Zeichen vor "y" in "yes" gibt. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> (s) Flag aktiviert ist, wird auch mit Zeilenumbrüchen übereingestimmt.
          In einer Zeichenklasse verliert der Punkt seine spezielle Bedeutung und
          passt zu einem literalen Punkt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Ziffernzeichenklassen-Escape:</strong></a>
          Passt zu jeder Ziffer (arabische Ziffer). Entspricht <code>[0-9]</code>.
          Zum Beispiel stimmt <code>/\d/</code> oder <code>/[0-9]/</code> mit "2" in
          "B2 ist die Suite-Nummer" überein.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Ziffernzeichenklassen-Escape:</strong></a>
          Passt zu jedem Zeichen, das keine Ziffer (arabische Ziffer) ist. Entspricht
          <code>[^0-9]</code>. Zum Beispiel stimmt <code>/\D/</code> oder
          <code>/[^0-9]/</code> mit "B" in "B2 ist die Suite-Nummer" überein.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Wortzeichenklassen-Escape:</strong></a>
          Passt zu jedem alphanumerischen Zeichen aus dem lateinischen Alphabet,
          einschließlich des Unterstrichs. Entspricht <code>[A-Za-z0-9_]</code>. Zum
          Beispiel stimmt <code>/\w/</code> mit "a" in "apple", "5" in "$5.28", "3"
          in "3D" und "m" in "Émanuel" überein.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Wortzeichenklassen-Escape:</strong></a>
          Passt zu jedem Zeichen, das kein Wortzeichen aus dem lateinischen
          Alphabet ist. Entspricht <code>[^A-Za-z0-9_]</code>. Zum Beispiel stimmt
          <code>/\W/</code> oder <code>/[^A-Za-z0-9_]/</code> mit "%" in "50%"
          und "É" in "Émanuel" überein.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Leerzeichen-Zeichenklassen-Escape:</strong></a>
          Passt zu einem einzigen Leerzeichen, einschließlich Leerzeichen, Tabulator, Formularvorschub, Zeilenumbruch und anderen Unicode-Leerzeichen. Entspricht
          <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel stimmt <code>/\s\w*/</code> mit " bar" in "foo bar" überein.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Leerzeichen-Zeichenklassen-Escape:</strong></a>
          Passt zu einem einzelnen Zeichen, das kein Leerzeichen ist. Entspricht
          <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel stimmt <code>/\S\w*/</code> mit "foo" in "foo bar" überein.
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
      <td>Passt zu einem Formularvorschub.</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Passt zu einem Rückschritt. Wenn Sie nach der Wortgrenzen-Assertion
        (<code>\b</code>) suchen, siehe
        <a
          href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
          >Assertionen</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>\0</code></td>
      <td>Passt zu einem NUL-Zeichen. Folgen Sie diesem nicht mit einer anderen Ziffer.</td>
    </tr>
    <tr>
      <td>
        <code>\c<em>X</em></code>
      </td>
      <td>
        <p>
          Passt zu einem Steuerzeichen, das mit
          <a href="https://en.wikipedia.org/wiki/Caret_notation"
            >Caret-Notation</a
          > dargestellt wird, wobei "X" ein Buchstabe von A–Z ist (entsprechend den Codepunkten
          <code>U+0001</code><em>–</em><code>U+001A</code>). Zum Beispiel stimmt
          <code>/\cM\cJ/</code> mit "\r\n" überein.
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
        Passt zu einer UTF-16 Code-Einheit mit dem Wert
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape"><strong>Unicode-Zeichenklassen-Escape:</strong></a>
          Passt zu einem Zeichen basierend auf seinen Unicode-Zeicheneigenschaften: zum Beispiel Emoji-Zeichen oder japanische
          <em>Katakana</em>-Zeichen oder chinesische/japanische Han/Kanji-Zeichen,
          usw.).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Zeigt an, dass das folgende Zeichen speziell behandelt oder
          "escaped" werden soll. Es verhält sich auf zwei Arten.
        </p>
        <ul>
          <li>
            Für Zeichen, die normalerweise wörtlich behandelt werden, zeigt an, dass
            das nächste Zeichen speziell und nicht wörtlich interpretiert werden sollte.
            Zum Beispiel stimmt <code>/b/</code> mit dem Zeichen "b". Indem
            ein Backslash vor "b" gesetzt wird, also durch die Verwendung von <code>/\b/</code>, wird
            das Zeichen speziell zur Bedeutung der Übereinstimmung mit einer Wortgrenze.
          </li>
          <li>
            Für Zeichen, die normalerweise speziell behandelt werden, zeigt an, dass
            das nächste Zeichen nicht speziell und wörtlich interpretiert werden sollte.
            Zum Beispiel ist "*" ein spezielles Zeichen, das bedeutet, dass 0 oder
            mehr Vorkommen des vorhergehenden Zeichens übereinstimmen; zum
            Beispiel bedeutet <code>/a*/</code> 0 oder mehr "a"s zu finden. Um
            <code>*</code> wörtlich zu finden, lassen Sie ihm einen Backslash vorausgehen; zum Beispiel,
            <code>/a\*/</code> stimmt mit "a*" überein.
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Um dieses Zeichen wörtlich zu finden, escapen Sie es
            mit sich selbst. Mit anderen Worten, um nach <code>\</code> zu suchen, verwenden Sie
            <code>/\\/</code>.
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
          Passt entweder zu "x" oder "y". Jede Komponente, getrennt durch ein Pipe-Zeichen (<code>|</code>), wird als <em>Alternative</em> bezeichnet. Zum Beispiel,
          stimmt <code>/green|red/</code> mit "green" in "green apple" und "red" in
          "red apple" überein.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Eine Disjunktion ist eine andere Methode, um "eine Auswahl von Optionen" anzugeben, aber sie ist keine Zeichenklasse. Disjunktionen sind keine Atome — Sie müssen eine <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">Gruppe</a> verwenden, um Teil eines größeren Musters zu sein. <code>[abc]</code> ist funktional äquivalent zu <code>(?:a|b|c)</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Nach einer Serie von Ziffern suchen

In diesem Beispiel stimmen wir eine Folge von 4 Ziffern mit `\d{4}` ab. `\b` zeigt eine [Wortgrenze](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) an (d.h. die Übereinstimmung wird nicht in der Mitte einer Ziffernfolge begonnen oder beendet).

```js
const randomData = "015 354 8787 687351 3512 8735";
const regexpFourDigits = /\b\d{4}\b/g;

console.table(randomData.match(regexpFourDigits));
// ['8787', '3512', '8735']
```

Weitere Beispiele finden Sie in der [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) Referenz.

### Nach einem Wort (aus dem lateinischen Alphabet), das mit A beginnt, suchen

In diesem Beispiel stimmen wir ein Wort ab, das mit dem Buchstaben A beginnt. `\b` zeigt eine [Wortgrenze](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) an (d.h. die Übereinstimmung wird nicht in der Mitte eines Wortes begonnen). `[aA]` zeigt den Buchstaben "a" oder "A" an. `\w+` zeigt beliebige Zeichen _aus dem lateinischen Alphabet_, mehrfach ( `+` ist ein [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)). Beachten Sie, dass ein abschließendes `\b` nicht erforderlich ist, da wir bereits bis keine Wortzeichen mehr vorhanden sind, übereinstimmen.

```js
const aliceExcerpt =
  "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";
const regexpWordStartingWithA = /\b[aA]\w+/g;

console.table(aliceExcerpt.match(regexpWordStartingWithA));
// ['Ada', 'and', 'at', 'all']
```

Weitere Beispiele finden Sie in der [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) Referenz.

### Nach einem Wort (aus Unicode-Zeichen) suchen

Anstelle des lateinischen Alphabets können wir einen Bereich von Unicode-Zeichen verwenden, um ein Wort zu identifizieren (und damit mit Texten in anderen Sprachen wie Russisch oder Arabisch umgehen). Die "Basic Multilingual Plane" von Unicode enthält die meisten der weltweit verwendeten Zeichen, und wir können Zeichenklassen und Bereiche verwenden, um Wörter zu finden, die mit diesen Zeichen geschrieben sind.

```js
const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP goes through U+0000 to U+FFFF but space is U+0020

console.table(nonEnglishText.match(regexpBMPWord));
["Приключения", "Алисы", "в", "Стране", "чудес"];
```

Weitere Beispiele finden Sie in der [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) Referenz.

### Vokale zählen

In diesem Beispiel zählen wir die Anzahl der Vokale (A, E, I, O, U, Y) in einem Text. Das `g`-Flag wird verwendet, um alle Vorkommen des Musters im Text zu finden. Das `i`-Flag wird verwendet, um das Muster case-insensitive zu machen, so dass es sowohl Groß- als auch Kleinbuchstaben-Vokale übereinstimmt.

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
- [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Referenz
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Zeichenklassen-Escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Unicode-Zeichenklassen-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Wildcard: `.`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
