---
title: Zeichenklassen
slug: Web/JavaScript/Guide/Regular_expressions/Character_classes
l10n:
  sourceCommit: 8f53af45fae665627a95ac50e177b15d0228b920
---

Zeichenklassen unterscheiden Arten von Zeichen, wie zum Beispiel die Unterscheidung zwischen Buchstaben und Ziffern.

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
          Passt auf eines der eingeschlossenen Zeichen. Sie können eine Zeichenreihe durch einen Bindestrich angeben, aber wenn der Bindestrich als erstes oder letztes Zeichen innerhalb der eckigen Klammern erscheint, wird er als wörtlicher Bindestrich betrachtet, der in die Zeichenklasse als normales Zeichen aufgenommen wird.
        </p>
        <p>
          Zum Beispiel ist <code>[abcd]</code> dasselbe wie <code>[a-d]</code>.
          Sie passen auf das "b" in "Brisket" und das "c" in "Chop".
        </p>
        <p>
          Zum Beispiel passen <code>[abcd-]</code> und <code>[-abcd]</code> auf das
          "b" in "Brisket", das "c" in "Chop" und den "-" (Bindestrich) in
          "non-profit".
        </p>
        <p>
          Zum Beispiel ist <code>[\w-]</code> dasselbe wie
          <code>[A-Za-z0-9_-]</code>. Beide passen auf das "b" in "Brisket", das
          "c" in "Chop" und das "n" in "non-profit".
        </p>
        <p>
          Wenn der <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets"><code>unicodeSets</code></a> (<code>v</code>)-Schalter aktiviert ist, hat die Zeichenklasse einige zusätzliche Funktionen. Weitere Informationen finden Sie in der <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class">Zeichenklasse</a>-Referenz.
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
          Passt auf alles, was nicht in den eckigen Klammern eingeschlossen ist. Sie können eine Reihe von Zeichen durch einen Bindestrich angeben, aber wenn der Bindestrich als erstes Zeichen nach dem <code>^</code> oder als letztes Zeichen innerhalb der eckigen Klammern erscheint, wird er als wörtlicher Bindestrich betrachtet, der in die Zeichenklasse als normales Zeichen aufgenommen wird. Zum Beispiel ist <code>[^abc]</code> dasselbe wie <code>[^a-c]</code>. Sie passen initial auf "o" in "Bacon" und "h" in "Chop".
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
          Passt auf jedes einzelne Zeichen <em>außer</em> Zeilenumbruchzeichen:
          <code>\n</code>, <code>\r</code>, <code>\u2028</code> oder
          <code>\u2029</code>. Zum Beispiel passt <code>/.y/</code> auf "my" und
          "ay", aber nicht "yes", in "yes make my day", da es kein Zeichen vor "y" in "yes" gibt. Wenn der <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> (s) Schalter aktiviert ist, passt es auch auf Zeilenumbruchzeichen. Innerhalb einer Zeichenklasse verliert der Punkt seine spezielle Bedeutung und passt auf einen wörtlichen Punkt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Ziffern-Zeichenklasse-Flucht:</strong></a>
          Passt auf jede Ziffer (arabische Zahl). Entspricht <code>[0-9]</code>.
          Zum Beispiel passt <code>/\d/</code> oder <code>/[0-9]/</code> auf "2" in
          "B2 ist die Suitenummer".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Ziffern-Zeichenklasse-Flucht:</strong></a>
          Passt auf jedes Zeichen, das keine Ziffer (arabische Zahl) ist. Entspricht
          <code>[^0-9]</code>. Zum Beispiel passt <code>/\D/</code> oder
          <code>/[^0-9]/</code> auf "B" in "B2 ist die Suitenummer".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Wortzeichen-Klasse-Flucht:</strong></a>
          Passt auf jedes alphanumerische Zeichen aus dem grundlegenden lateinischen Alphabet,
          einschließlich des Unterstrichs. Entspricht <code>[A-Za-z0-9_]</code>. Zum
          Beispiel passt <code>/\w/</code> auf "a" in "apple", "5" in "$5.28", "3"
          in "3D" und "m" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Wortzeichen-Klasse-Flucht:</strong></a>
          Passt auf jedes Zeichen, das kein Wortzeichen aus dem grundlegenden
          lateinischen Alphabet ist. Entspricht <code>[^A-Za-z0-9_]</code>. Zum Beispiel,
          <code>/\W/</code> oder <code>/[^A-Za-z0-9_]/</code> passt auf "%" in "50%"
          und "É" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Leerzeichen-Zeichenklasse-Flucht:</strong></a>
          Passt auf ein einzelnes Leerzeichen, einschließlich Leerzeichen, Tabulator, Formularvorschub, Zeilenumbruch und andere Unicode-Leerzeichen. Entspricht
          <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel, <code>/\s\w*/</code> passt auf " bar" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Leerzeichen-Zeichenklasse-Flucht:</strong></a>
          Passt auf ein einzelnes Zeichen, das kein Leerzeichen ist. Entspricht
          <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel, <code>/\S\w*/</code> passt auf "foo" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\t</code></td>
      <td>Passt auf einen Horizontal-Tabulator.</td>
    </tr>
    <tr>
      <td><code>\r</code></td>
      <td>Passt auf einen Wagenrücklauf.</td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>Passt auf einen Zeilenumbruch.</td>
    </tr>
    <tr>
      <td><code>\v</code></td>
      <td>Passt auf einen Vertikal-Tabulator.</td>
    </tr>
    <tr>
      <td><code>\f</code></td>
      <td>Passt auf einen Formularvorschub.</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Passt auf ein Rückschritt-Zeichen. Wenn Sie die Wortgrenz-Assertion
        (<code>\b</code>) suchen, siehe
        <a
          href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
          >Assertionen</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>\0</code></td>
      <td>Passt auf ein NUL-Zeichen. Folgen Sie diesem nicht mit einer anderen Ziffer.</td>
    </tr>
    <tr>
      <td>
        <code>\c<em>X</em></code>
      </td>
      <td>
        <p>
          Passt auf ein Steuerzeichen unter Verwendung der
          <a href="https://en.wikipedia.org/wiki/Caret_notation"
            >Caret-Notation</a
          >, wobei "X" ein Buchstabe von A–Z oder a–z ist (entsprechend den Codepunkten
          <code>U+0001</code><em>–</em><code>U+001A</code>). Zum Beispiel,
          <code>/\cM\cJ/</code> passt auf "\r\n".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape"><strong>Hexadezimal-Flucht:</strong></a>
        Passt auf das Zeichen mit dem Code <code><em>hh</em></code> (zwei
        hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>HHHH</em></code>
      </td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape"><strong>Unicode-Flucht:</strong></a>
        Passt auf eine UTF-16 Code-Einheit mit dem Wert <code><em>HHHH</em></code> (vier hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u{<em>H…H</em>}</code>
      </td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape"><strong>Unicode-Codepunkt-Flucht:</strong></a>
        Passt auf das Zeichen mit dem Unicode-Wert <code>U+<em>H…H</em></code> (1 bis 6 hexadezimale Ziffern).
        Nur gültig im <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode">Unicode-bewussten Modus</a>.
      </td>
    </tr>
    <tr>
      <td>
        <code>\p{<em>UnicodeProperty</em>}</code>,
        <code>\P{<em>UnicodeProperty</em>}</code>
      </td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape"><strong>Unicode-Zeichenklasse-Flucht:</strong></a>
          Passt auf ein Zeichen basierend auf seinen Unicode-Zeichen-Eigenschaften: beispielsweise Emoji-Zeichen oder japanische
          <em>Katakana</em>-Zeichen oder chinesische/japanische Han/Kanji-Zeichen,
          usw.).
          Nur gültig im <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode">Unicode-bewussten Modus</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Gibt an, dass das folgende Zeichen speziell behandelt oder
          "entschärft" werden sollte. Es verhält sich auf eine von zwei Arten.
        </p>
        <ul>
          <li>
            Für Zeichen, die normalerweise wörtlich behandelt werden, zeigt es an, dass
            das nächste Zeichen speziell ist und nicht wörtlich interpretiert werden soll.
            Beispielsweise passt <code>/b/</code> auf das Zeichen "b". Indem ein
            Rückstrich vor "b" gesetzt wird, also durch Verwendung von <code>/\b/</code>, wird das
            Zeichen speziell, um eine Wortgrenze zu bedeuten.
          </li>
          <li>
            Für Zeichen, die normalerweise speziell behandelt werden, zeigt es an, dass
            das nächste Zeichen nicht speziell ist und wörtlich interpretiert werden
            sollte. Beispielsweise ist "*" ein spezielles Zeichen, das bedeutet, dass 0 oder
            mehr Vorkommen des vorangegangenen Zeichens gematcht werden sollen; zum
            Beispiel bedeutet <code>/a*/</code>, dass 0 oder mehr "a"s passen. Um
            <code>*</code> wörtlich zu matchen, setzen Sie einen Rückstrich davor; zum Beispiel,
            <code>/a\*/</code> passt auf "a*".
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Um dieses Zeichen wörtlich zu matchen, entsichern Sie es
            mit sich selbst. Mit anderen Worten suchen Sie nach <code>\</code> verwenden Sie
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
          Passt auf "x" oder "y". Jede Komponente, getrennt durch ein Pipe-Zeichen (<code>|</code>), wird als <em>Alternative</em> bezeichnet. Zum Beispiel,
          <code>/green|red/</code> passt auf "green" in "green apple" und "red" in
          "red apple".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Eine Disjunktion ist eine andere Möglichkeit, "eine Auswahl von Optionen" anzugeben, aber es ist keine Zeichenklasse. Disjunktionen sind keine Atome — Sie müssen eine <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">Gruppe</a> verwenden, um es Teil eines größeren Musters zu machen. <code>[abc]</code> ist funktional äquivalent zu <code>(?:a|b|c)</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Nach einer Reihe von Ziffern suchen

In diesem Beispiel passen wir auf eine Folge von 4 Ziffern mit `\d{4}`. `\b` zeigt eine [Wortgrenze](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) an (d.h. nicht am Anfang oder Ende einer Zahlenfolge matchen).

```js
const randomData = "015 354 8787 687351 3512 8735";
const regexpFourDigits = /\b\d{4}\b/g;

console.table(randomData.match(regexpFourDigits));
// ['8787', '3512', '8735']
```

Siehe weitere Beispiele in der [Zeichenklasse-Flucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) Referenz.

### Nach einem Wort (aus dem lateinischen Alphabet) suchen, das mit A beginnt

In diesem Beispiel passen wir auf ein Wort, das mit dem Buchstaben A beginnt. `\b` zeigt eine [Wortgrenze](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) an (d.h. nicht mitten in einem Wort anfangen zu matchen). `[aA]` zeigt den Buchstaben "a" oder "A" an. `\w+` zeigt jedes Zeichen _aus dem lateinischen Alphabet_, mehrmals (_+_ ist ein [Quantor](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)). Beachten Sie, dass, da wir bereits matchen, bis keine Wortzeichen mehr vorhanden sind, keine abschließende `\b`-Grenze notwendig ist.

```js
const aliceExcerpt =
  "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";
const regexpWordStartingWithA = /\b[aA]\w+/g;

console.table(aliceExcerpt.match(regexpWordStartingWithA));
// ['Ada', 'and', 'at', 'all']
```

Siehe weitere Beispiele in der [Zeichenklasse-Flucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) Referenz.

### Nach einem Wort (aus Unicode-Zeichen) suchen

Anstelle des lateinischen Alphabets können wir eine Reihe von Unicode-Zeichen verwenden, um ein Wort zu identifizieren (und so mit Texten in anderen Sprachen wie Russisch oder Arabisch arbeiten). Die "Basic Multilingual Plane" von Unicode enthält die meisten der weltweit verwendeten Zeichen, und wir können Zeichenklassen und Bereiche verwenden, um Wörter zu finden, die mit diesen Zeichen geschrieben sind.

```js
const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP goes through U+0000 to U+FFFF but space is U+0020

console.table(nonEnglishText.match(regexpBMPWord));
["Приключения", "Алисы", "в", "Стране", "чудес"];
```

Siehe weitere Beispiele in der [Unicode-Zeichenklasse-Flucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) Referenz.

### Vokale zählen

In diesem Beispiel zählen wir die Anzahl der Vokale (A, E, I, O, U, Y) in einem Text. Das `g`-Flag wird verwendet, um alle Vorkommen des Musters im Text zu matchen. Das `i`-Flag macht das Muster nicht zwischen Groß- und Kleinschreibung unterscheidend, so dass es sowohl Groß- als auch Kleinbuchstaben-Vokale matched.

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
- [Quantoren](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Referenz
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Zeichenklasse-Flucht: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Zeichenflucht: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Unicode-Zeichenklasse-Flucht: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Platzhalter: `.`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
