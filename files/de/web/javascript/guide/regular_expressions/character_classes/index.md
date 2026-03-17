---
title: Zeichenklassen
slug: Web/JavaScript/Guide/Regular_expressions/Character_classes
l10n:
  sourceCommit: a7acf4c7a38f1df8f5d0dee1f17672968ac979d5
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
          Entspricht einem der eingeschlossenen Zeichen. Sie können einen Zeichenbereich
          mit einem Bindestrich angeben, aber wenn der Bindestrich als erstes oder letztes Zeichen in den eckigen Klammern erscheint, wird er als wörtlicher Bindestrich angesehen, der in die Zeichenklasse aufgenommen werden soll, als normales Zeichen.
        </p>
        <p>
          Zum Beispiel ist <code>[abcd]</code> das gleiche wie <code>[a-d]</code>.
          Beide finden das „b“ in „brisket“ und das „c“ in „chop“.
        </p>
        <p>
          Zum Beispiel finden <code>[abcd-]</code> und <code>[-abcd]</code>
          das „b“ in „brisket“, das „c“ in „chop“ und das „-“ (Bindestrich) in „non-profit“.
        </p>
        <p>
          Ein weiteres Beispiel: <code>[\w-]</code> ist das gleiche wie
          <code>[A-Za-z0-9_-]</code>. Beide finden das „b“ in „brisket“, das
          „c“ in „chop“ und das „n“ in „non-profit“.
        </p>
        <p>
          Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets"><code>unicodeSets</code></a> (<code>v</code>) Flag aktiviert ist, hat die Zeichenklasse zusätzliche Eigenschaften. Weitere Informationen finden Sie im <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class">Zeichenklassen</a>-Referenz.
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
          Entspricht allem, was nicht in den eckigen Klammern eingeschlossen ist. Sie können einen Zeichenbereich
          mit einem Bindestrich angeben, aber wenn der Bindestrich als erstes Zeichen nach dem <code>^</code> oder als letztes Zeichen in den eckigen Klammern erscheint, wird er als wörtlicher Bindestrich angesehen, der in die Zeichenklasse als normales
          Zeichen aufgenommen werden soll. Zum Beispiel ist <code>[^abc]</code> das gleiche wie
          <code>[^a-c]</code>. Sie finden "o" in "bacon" und "h" in "chop".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Das ^ Zeichen kann auch den
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
          Entspricht jedem einzelnen Zeichen <em>außer</em> Zeilenendzeichen:
          <code>\n</code>, <code>\r</code>, <code>\u2028</code> oder
          <code>\u2029</code>. Zum Beispiel entspricht <code>/.y/</code> „my“ und
          „ay“, aber nicht „yes“, in „yes make my day“, da es kein Zeichen vor "y" in "yes" gibt. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> (s) Flag aktiviert ist, werden auch Zeilenendzeichen einbezogen.
          Innerhalb einer Zeichenklasse verliert der Punkt seine spezielle Bedeutung und
          entspricht einem wörtlichen Punkt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Zifferzeichenklassen-Escape:</strong></a>
          Entspricht jeder Ziffer (arabische Zahl). Äquivalent zu <code>[0-9]</code>.
          Zum Beispiel entspricht <code>/\d/</code> oder <code>/[0-9]/</code> „2“ in
          „B2 ist die Suitennummer“.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Ziffer-Zeichenklassen-Escape:</strong></a>
          Entspricht jedem Zeichen, das keine Ziffer ist (arabische Zahl). Äquivalent
          zu <code>[^0-9]</code>. Zum Beispiel entspricht <code>/\D/</code> oder
          <code>/[^0-9]/</code> „B“ in „B2 ist die Suitennummer“.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Wortzeichenklassen-Escape:</strong></a>
          Entspricht jedem alphanumerischen Zeichen aus dem lateinischen Alphabet,
          einschließlich des Unterstrichs. Äquivalent zu <code>[A-Za-z0-9_]</code>. Zum
          Beispiel entspricht <code>/\w/</code> „a“ in „apple“, „5“ in „$5.28“, „3“
          in „3D“ und „m“ in „Émanuel“.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Wortzeichenklassen-Escape:</strong></a>
          Entspricht jedem Zeichen, das kein Wortzeichen aus dem lateinischen
          Alphabet ist. Äquivalent zu <code>[^A-Za-z0-9_]</code>. Zum Beispiel,
          <code>/\W/</code> oder <code>/[^A-Za-z0-9_]/</code> entspricht „%“ in „50%“
          und „É“ in „Émanuel“.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Leerzeichen-Zeichenklassen-Escape:</strong></a>
          Entspricht einem einzelnen Leerzeichenzeichen, einschließlich Leerzeichen, Tabulator, Formfeed, Zeilenumbruch und andere Unicode-Leerzeichen. Äquivalent zu
          <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel entspricht <code>/\s\w*/</code> „ bar“ in „foo bar“.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Leerzeichen-Zeichenklassen-Escape:</strong></a>
          Entspricht einem einzelnen Zeichen, das kein Leerzeichen ist. Äquivalent zu
          <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel entspricht <code>/\S\w*/</code> „foo“ in „foo bar“.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\t</code></td>
      <td>Entspricht einem horizontalen Tabulator.</td>
    </tr>
    <tr>
      <td><code>\r</code></td>
      <td>Entspricht einem Wagenrücklauf.</td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>Entspricht einem Zeilenumbruch.</td>
    </tr>
    <tr>
      <td><code>\v</code></td>
      <td>Entspricht einem vertikalen Tabulator.</td>
    </tr>
    <tr>
      <td><code>\f</code></td>
      <td>Entspricht einem Papier-Vormal.</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Entspricht einem Rückschritt. Wenn Sie nach der Wortgrenzenbestätigung
        (<code>\b</code>) suchen, sehen Sie
        <a
          href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
          >Bestätigungen</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>\0</code></td>
      <td>Entspricht einem NUL-Zeichen. Folgen Sie nicht mit einer weiteren Ziffer darauf.</td>
    </tr>
    <tr>
      <td>
        <code>\c<em>X</em></code>
      </td>
      <td>
        <p>
          Entspricht einem Steuerzeichen unter Verwendung
          <a href="https://en.wikipedia.org/wiki/Caret_notation"
            >Caret-Notation</a
          >, wobei „X“ ein Buchstabe von A–Z oder a–z ist (entsprechend den Codepunkten
          <code>U+0001</code><em>–</em><code>U+001A</code>). Zum Beispiel,
          <code>/\cM\cJ/</code> entspricht „\r\n“.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape"><strong>Hex-Escape:</strong></a>
        Entspricht dem Zeichen mit dem Code <code><em>hh</em></code> (zwei
        hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>HHHH</em></code>
      </td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape"><strong>Unicode-Escape:</strong></a>
        Entspricht einer UTF-16-Codeeinheit mit dem Wert
        <code><em>HHHH</em></code> (vier hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u{<em>H…H</em>}</code>
      </td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape"><strong>Unicode-Codepunkt-Escape:</strong></a>
        (Nur wenn das <code>u</code>-Flag gesetzt ist.) Entspricht dem Zeichen mit
        dem Unicode-Wert <code>U+<em>H…H</em></code> (1 bis 6 hexadezimale Ziffern).
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
          Entspricht einem Zeichen basierend auf seinen Unicode-Zeichen-Eigenschaften: zum Beispiel Emoji-Zeichen, oder japanische <em>Katakana</em>-Zeichen, oder chinesische/japanische Han/Kanji-Zeichen, usw.).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Deutet an, dass das folgende Zeichen speziell behandelt oder "escaped" werden soll. Es verhält sich auf eine von zwei Arten.
        </p>
        <ul>
          <li>
            Für Zeichen, die normalerweise wörtlich behandelt werden, zeigt dies an, dass
            das nächste Zeichen speziell ist und nicht wörtlich interpretiert werden soll.
            Zum Beispiel entspricht <code>/b/</code> dem Zeichen „b“. Wenn Sie
            einen Backslash vor „b“ setzen, also mit <code>/\b/</code>, wird
            das Zeichen speziell, um eine Wortgrenze zu bedeuten.
          </li>
          <li>
            Für Zeichen, die normalerweise speziell behandelt werden, zeigt es an, dass
            das nächste Zeichen nicht speziell ist und wörtlich interpretiert werden soll. Zum Beispiel ist „*“ ein spezielles Zeichen, das bedeutet, dass 0 oder mehr Vorkommen des vorhergehenden Zeichens passen sollen; zum
            Beispiel bedeutet <code>/a*/</code>, dass 0 oder mehr „a“s übereinstimmen sollen. Um
            <code>*</code> wörtlich zu erfassen, setzen Sie einen Backslash davor; zum Beispiel,
            <code>/a\*/</code> entspricht „a*“.
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Um dieses Zeichen wörtlich zu erfassen, "escapen" Sie es mit sich selbst. Um nach <code>\</code> zu suchen, verwenden Sie
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
          Entspricht entweder „x“ oder „y“. Jede Komponente, getrennt durch eine Pipe (<code>|</code>), wird als <em>Alternative</em> bezeichnet. Zum Beispiel,
          <code>/green|red/</code> entspricht "green" in "green apple" und "red" in
          "red apple".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Eine Disjunktion ist eine andere Möglichkeit, "eine Menge von Auswahlmöglichkeiten" zu spezifizieren, aber es ist keine Zeichenklasse. Disjunktionen sind keine Atome — Sie müssen eine <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">Gruppe</a> verwenden, um sie zu einem größeren Muster zu machen. <code>[abc]</code> ist funktional gleichwertig mit <code>(?:a|b|c)</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Nach einer Serie von Ziffern suchen

In diesem Beispiel suchen wir nach einer Sequenz von 4 Ziffern mit `\d{4}`. `\b` steht für eine [Wortgrenze](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) (d.h. fangen Sie nicht in der Mitte einer Zahlenreihe an oder hören Sie dort auf zu passen).

```js
const randomData = "015 354 8787 687351 3512 8735";
const regexpFourDigits = /\b\d{4}\b/g;

console.table(randomData.match(regexpFourDigits));
// ['8787', '3512', '8735']
```

Weitere Beispiele finden Sie in der [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) Referenz.

### Nach einem Wort (aus dem lateinischen Alphabet) suchen, das mit A beginnt

In diesem Beispiel suchen wir ein Wort, das mit dem Buchstaben A beginnt. `\b` steht für eine [Wortgrenze](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) (d.h. fangen Sie nicht in der Mitte eines Wortes an zu passen). `[aA]` steht für den Buchstaben „a“ oder „A“. `\w+` steht für jedes Zeichen _aus dem lateinischen Alphabet_, mehrere Male (+ ist ein [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)). Da wir bereits so lange übereinstimmen, bis keine weiteren Wortzeichen mehr vorhanden sind, ist keine abschließende `\b`-Grenze erforderlich.

```js
const aliceExcerpt =
  "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";
const regexpWordStartingWithA = /\b[aA]\w+/g;

console.table(aliceExcerpt.match(regexpWordStartingWithA));
// ['Ada', 'and', 'at', 'all']
```

Weitere Beispiele finden Sie in der [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) Referenz.

### Nach einem Wort suchen (aus Unicode-Zeichen)

Statt des lateinischen Alphabets können wir einen Bereich von Unicode-Zeichen verwenden, um ein Wort zu identifizieren (und so mit Texten in anderen Sprachen wie Russisch oder Arabisch umgehen können). Die „Basic Multilingual Plane“ von Unicode enthält die meisten der weltweit verwendeten Zeichen und wir können Zeichenklassen und -bereiche verwenden, um Wörter zu finden, die mit diesen Zeichen geschrieben sind.

```js
const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP goes through U+0000 to U+FFFF but space is U+0020

console.table(nonEnglishText.match(regexpBMPWord));
["Приключения", "Алисы", "в", "Стране", "чудес"];
```

Weitere Beispiele finden Sie in der [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) Referenz.

### Vokale zählen

In diesem Beispiel zählen wir die Anzahl der Vokale (A, E, I, O, U, Y) in einem Text. Das `g`-Flag wird verwendet, um alle Vorkommen des Musters im Text zu finden. Das `i`-Flag wird verwendet, um das Muster nicht zu beachten und so sowohl Groß- als auch Kleinbuchstaben der Vokale zu finden.

```js
const aliceExcerpt =
  "There was a long silence after this, and Alice could only hear whispers now and then.";
const regexpVowels = /[aeiouy]/gi;

console.log("Number of vowels:", aliceExcerpt.match(regexpVowels).length);
// Number of vowels: 26
```

## Siehe auch

- [Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions) zu regulären Ausdrücken
- [Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) zu Bestätigungen
- [Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) zu Quantifizierern
- [Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) zu Gruppen und Rückverweisen
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Referenz](/de/docs/Web/JavaScript/Guide/Regular_expressions) zu regulären Ausdrücken
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Zeichenklassen-Escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Unicode-Zeichenklassen-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Wildcard: `.`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
