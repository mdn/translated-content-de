---
title: Zeichenklassen
slug: Web/JavaScript/Guide/Regular_expressions/Character_classes
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("JavaScript Guide")}}

Zeichenklassen unterscheiden Arten von Zeichen, wie z. B. die Unterscheidung zwischen Buchstaben und Ziffern.

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
          Passt jedes der eingeschlossenen Zeichen. Sie können durch die Verwendung eines Bindestrichs einen Bereich von Zeichen angeben. Erscheint der Bindestrich jedoch als erstes oder letztes Zeichen in den eckigen Klammern, wird er als ein normaler Bindestrich interpretiert und in die Zeichenklasse aufgenommen.
        </p>
        <p>
          Zum Beispiel ist <code>[abcd]</code> dasselbe wie <code>[a-d]</code>.
          Sie passen das "b" in "brisket" und das "c" in "chop".
        </p>
        <p>
          Zum Beispiel passen <code>[abcd-]</code> und <code>[-abcd]</code> das
          "b" in "brisket", das "c" in "chop" und den "-" (Bindestrich) in
          "non-profit".
        </p>
        <p>
          Zum Beispiel ist <code>[\w-]</code> dasselbe wie
          <code>[A-Za-z0-9_-]</code>. Beide passen das "b" in "brisket", das
          "c" in "chop", und das "n" in "non-profit".
        </p>
        <p>
          Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets"><code>unicodeSets</code></a> (<code>v</code>)-Flag aktiviert ist, hat die Zeichenklasse einige zusätzliche Eigenschaften. Weitere Informationen finden Sie im <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class">Zeichenklassen</a>-Referenz.
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
          Passt alles, was nicht in den eckigen Klammern enthalten ist. Sie können einen Bereich von Zeichen durch die Verwendung eines Bindestrichs angeben. Wenn der Bindestrich jedoch das erste Zeichen nach dem <code>^</code> oder das letzte Zeichen in den eckigen Klammern ist, wird er als ein normaler Bindestrich interpretiert und in die Zeichenklasse aufgenommen. Zum Beispiel ist <code>[^abc]</code> dasselbe wie <code>[^a-c]</code>. Sie passen zuerst "o" in "bacon" und "h" in "chop".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Das Zeichen ^ kann auch den
            <a
              href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
              >Anfang der Eingabe</a
            > kennzeichnen.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>.</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard"><strong>Wildcard:</strong></a>
          Passt jedes einzelne Zeichen, <em>außer</em> Zeilenumbrüchen:
          <code>\n</code>, <code>\r</code>, <code>\u2028</code> oder
          <code>\u2029</code>. Zum Beispiel passt <code>/.y/</code> "my" und
          "ay", aber nicht "yes", in "yes make my day", da kein Zeichen vor "y" in "yes" steht. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> (s)-Flag aktiviert ist, passt es auch Zeilenumbrüche.
          Innerhalb einer Zeichenklasse verliert der Punkt seine besondere Bedeutung und
          passt einen Literalpunkt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Ziffernzeichenklasse:</strong></a>
          Passt jede Ziffer (arabische Zahl). Entspricht <code>[0-9]</code>.
          Zum Beispiel passt <code>/\d/</code> oder <code>/[0-9]/</code> "2" in
          "B2 is the suite number".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Ziffern-Zeichenklasse:</strong></a>
          Passt jedes Zeichen, das keine Ziffer (arabische Zahl) ist. Entspricht
          <code>[^0-9]</code>. Zum Beispiel passt <code>/\D/</code> oder
          <code>/[^0-9]/</code> "B" in "B2 is the suite number".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Wort-Zeichenklasse:</strong></a>
          Passt jedes alphanumerische Zeichen aus dem Basis-Latein-Alphabet,
          einschließlich des Unterstrichs. Entspricht <code>[A-Za-z0-9_]</code>. Zum
          Beispiel passt <code>/\w/</code> "a" in "apple", "5" in "$5.28", "3"
          in "3D" und "m" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Wort-Zeichenklasse:</strong></a>
          Passt jedes Zeichen, das kein Wortzeichen aus dem Basis-Latein-Alphabet ist. Entspricht <code>[^A-Za-z0-9_]</code>. Zum Beispiel
          passt <code>/\W/</code> oder <code>/[^A-Za-z0-9_]/</code> "%" in "50%"
          und "É" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Leerzeichen-Zeichenklasse:</strong></a>
          Passt ein Einzelzeichen für Leerraum, einschließlich Leerzeichen, Tabulator, Formfeed, Zeilenumbruch und andere Unicode-Leerzeichen. Entspricht
          <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel passt <code>/\s\w*/</code> " bar" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Leerzeichen-Zeichenklasse:</strong></a>
          Passt ein einzelnes Zeichen, das kein Leerzeichen ist. Entspricht
          <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel passt <code>/\S\w*/</code> "foo" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\t</code></td>
      <td>Passt einen horizontalen Tabulator.</td>
    </tr>
    <tr>
      <td><code>\r</code></td>
      <td>Passt einen Wagenrücklauf.</td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>Passt einen Zeilenumbruch.</td>
    </tr>
    <tr>
      <td><code>\v</code></td>
      <td>Passt einen vertikalen Tabulator.</td>
    </tr>
    <tr>
      <td><code>\f</code></td>
      <td>Passt einen Seitenvorschub.</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Passt einen Rückschritt. Wenn Sie die Wortgrenzen-Assertion
        (<code>\b</code>) suchen, siehe
        <a
          href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
          >Assertions</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>\0</code></td>
      <td>Passt ein NUL-Zeichen. Dieses darf nicht durch eine andere Ziffer gefolgt werden.</td>
    </tr>
    <tr>
      <td>
        <code>\c<em>X</em></code>
      </td>
      <td>
        <p>
          Passt ein Steuerzeichen mittels
          <a href="https://en.wikipedia.org/wiki/Caret_notation"
            >Caretschreibweise</a
          >, wobei "X" ein Buchstabe von A–Z ist (entsprechend den Codepunkten
          <code>U+0001</code><em>–</em><code>U+001A</code>). Zum Beispiel
          passt <code>/\cM\cJ/</code> "\r\n".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        Passt das Zeichen mit dem Code <code><em>hh</em></code> (zwei
        hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        Passt eine UTF-16-Code-Einheit mit dem Wert
        <code><em>hhhh</em></code> (vier hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>{hhhh}</em> oder <em>\u{hhhhh}</em></code>
      </td>
      <td>
        (Nur wenn das <code>u</code>-Flag gesetzt ist.) Passt das Zeichen mit dem
        Unicode-Wert <code>U+<em>hhhh</em></code> oder <code
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
          Passt ein Zeichen basierend auf dessen Unicode-Zeicheneigenschaften: z. B. Emoji-Zeichen, japanische
          <em>Katakana</em>-Zeichen, oder chinesische/japanische Han/Kanji-Zeichen,
          usw.).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Zeigt an, dass das folgende Zeichen speziell behandelt oder
          "escaped" werden soll. Es verhält sich auf zwei Arten:
        </p>
        <ul>
          <li>
            Für Zeichen, die normalerweise wörtlich behandelt werden, zeigt es an,
            dass das nächste Zeichen besonders ist und nicht wörtlich angesehen
            werden soll. Zum Beispiel passt <code>/b/</code> das Zeichen "b". Durch das Setzen eines Backslashes vor "b", d.h. mit <code>/\b/</code>, wird das Zeichen speziell, um eine Wortgrenze zu markieren.
          </li>
          <li>
            Für Zeichen, die normalerweise besonders behandelt werden, zeigt es an,
            dass das nächste Zeichen nicht besonders ist und wörtlich behandelt
            werden soll. Zum Beispiel ist "*" ein besonderes Zeichen, das 0 oder
            mehr Vorkommen des vorherigen Zeichens bedeutet; zum Beispiel bedeutet <code>/a*/</code>, dass 0 oder mehr "a"s übereinstimmen. Um <code>*</code> wörtlich zu machen, setzen Sie einen Backslash davor; zum Beispiel passt <code>/a\*/</code> "a*".
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Um dieses Zeichen wörtlich zu matchen,
            escapen Sie es mit sich selbst. Mit anderen Worten: Um nach <code>\</code> zu suchen, verwenden Sie <code>/\\/</code>.
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction"><strong>Alternativen:</strong></a>
          Passt entweder "x" oder "y". Jeder Bestandteil, getrennt durch einen Pipe (<code>|</code>), wird als <em>Alternative</em> bezeichnet. Zum Beispiel
          passt <code>/green|red/</code> "green" in "green apple" und "red" in
          "red apple".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Eine Alternative ist eine andere Methode, um "eine Auswahl von Möglichkeiten" anzugeben, aber es ist keine Zeichenklasse. Alternativen sind keine Atome — Sie müssen eine <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">Gruppe</a> verwenden, um sie Teil eines größeren Musters zu machen. <code>[abc]</code> ist funktional äquivalent zu <code>(?:a|b|c)</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Eine Zahlenreihe suchen

In diesem Beispiel suchen wir eine Sequenz aus 4 Ziffern mit `\d{4}`. `\b` zeigt eine [Wortgrenze](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) an (d.h. nicht innerhalb einer Zahlenreihe zu starten oder zu beenden).

```js
const randomData = "015 354 8787 687351 3512 8735";
const regexpFourDigits = /\b\d{4}\b/g;

console.table(randomData.match(regexpFourDigits));
// ['8787', '3512', '8735']
```

Weitere Beispiele finden Sie in der [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)-Referenz.

### Ein Wort (aus dem lateinischen Alphabet) suchen, das mit A beginnt

In diesem Beispiel suchen wir ein Wort, das mit dem Buchstaben A beginnt. `\b` zeigt eine [Wortgrenze](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) an (d.h. nicht in der Mitte eines Wortes zu starten). `[aA]` zeigt den Buchstaben "a" oder "A" an. `\w+` zeigt ein beliebiges Zeichen _aus dem lateinischen Alphabet_ mehrere Male an (`+` ist ein [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)). Beachten Sie, dass, da wir bereits bis zu keinen weiteren Wortzeichen passen, eine abschließende `\b`-Grenze nicht erforderlich ist.

```js
const aliceExcerpt =
  "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";
const regexpWordStartingWithA = /\b[aA]\w+/g;

console.table(aliceExcerpt.match(regexpWordStartingWithA));
// ['Ada', 'and', 'at', 'all']
```

Weitere Beispiele finden Sie in der [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)-Referenz.

### Ein Wort (aus Unicode-Zeichen) suchen

Statt des lateinischen Alphabets können wir eine Vielzahl von Unicode-Zeichen verwenden, um ein Wort zu identifizieren (und somit Text in anderen Sprachen wie Russisch oder Arabisch zu verarbeiten). Die "Grundlegende Mehrsprachige Ebene" von Unicode enthält die meisten Zeichen, die weltweit verwendet werden, und wir können Zeichenklassen und Bereiche verwenden, um Wörter zu finden, die mit diesen Zeichen geschrieben wurden.

```js
const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP goes through U+0000 to U+FFFF but space is U+0020

console.table(nonEnglishText.match(regexpBMPWord));
["Приключения", "Алисы", "в", "Стране", "чудес"];
```

Weitere Beispiele finden Sie in der [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)-Referenz.

### Vokale zählen

In diesem Beispiel zählen wir die Anzahl der Vokale (A, E, I, O, U, Y) in einem Text. Das `g`-Flag wird verwendet, um alle Vorkommen des Musters im Text zu finden. Das `i`-Flag wird verwendet, um das Muster nicht zwischen Groß- und Kleinschreibung zu unterscheiden, damit es sowohl Groß- als auch Kleinbuchstaben-Vokale findet.

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
- [Alternativen: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Unicode-Zeichenklassen-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Wildcard: `.`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
