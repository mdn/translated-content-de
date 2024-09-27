---
title: Zeichenklassen
slug: Web/JavaScript/Guide/Regular_expressions/Character_classes
l10n:
  sourceCommit: 012e9b4babec62ca26e87550a2e43e1eedad8f06
---

{{jsSidebar("JavaScript Guide")}}

Zeichenklassen unterscheiden Arten von Zeichen, wie zum Beispiel die Unterscheidung zwischen Buchstaben und Ziffern.

{{EmbedInteractiveExample("pages/js/regexp-character-classes.html")}}

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
          Passt zu einem beliebigen der eingeschlossenen Zeichen. Sie können
          einen Bereich von Zeichen mit einem Bindestrich angeben, aber wenn der Bindestrich
          als erstes oder letztes Zeichen innerhalb der eckigen Klammern erscheint,
          wird er als literaler Bindestrich betrachtet, um in die Zeichenklasse
          als normales Zeichen aufgenommen zu werden.
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
          <code>[A-Za-z0-9_-]</code>. Sie passen beide zum "b" in "brisket", zum
          "c" in "chop" und zum "n" in "non-profit".
        </p>
        <p>
          Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets"><code>unicodeSets</code></a> (<code>v</code>) Flag aktiviert ist, hat die Zeichenklasse einige zusätzliche Funktionen. Weitere Informationen finden Sie in der <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class">Zeichenklassen</a> -Referenz.
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
          Passt zu allem, was nicht in den eckigen Klammern eingeschlossen ist. Sie können einen Bereich
          von Zeichen mit einem Bindestrich angeben, aber wenn der Bindestrich als
          erstes Zeichen nach dem <code>^</code> oder als letztes Zeichen innerhalb der eckigen Klammern erscheint, wird er als
          literaler Bindestrich betrachtet, um in die Zeichenklasse als normales
          Zeichen aufgenommen zu werden. Zum Beispiel ist <code>[^abc]</code> dasselbe wie
          <code>[^a-c]</code>. Sie passen anfänglich zum "o" in "bacon" und "h" in
          "chop".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Das ^ Zeichen kann auch den
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard"><strong>Wildcard:</strong></a>
          Passt zu jedem einzelnen Zeichen <em>außer</em> Zeilenendzeichen:
          <code>\n</code>, <code>\r</code>, <code>\u2028</code> oder
          <code>\u2029</code>. Zum Beispiel passt <code>/.y/</code> zu "my" und
          "ay", aber nicht zu "yes" in "yes make my day", da vor "y" in "yes" kein Zeichen ist. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> (s) Flag aktiviert ist, werden auch Zeilenendzeichen erfasst.
          Innerhalb einer Zeichenklasse verliert der Punkt seine besondere Bedeutung und
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
          Zum Beispiel passt <code>/\d/</code> oder <code>/[0-9]/</code> zur "2" in
          "B2 is the suite number".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Ziffernzeichenklassen-Escape:</strong></a>
          Passt zu jedem Zeichen, das keine Ziffer (arabische Ziffer) ist. Entspricht
          <code>[^0-9]</code>. Zum Beispiel passt <code>/\D/</code> oder
          <code>/[^0-9]/</code> zum "B" in "B2 is the suite number".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Wortzeichenklassen-Escape:</strong></a>
          Passt zu jedem alphanumerischen Zeichen aus dem grundlegenden lateinischen Alphabet,
          einschließlich des Unterstrichs. Entspricht <code>[A-Za-z0-9_]</code>. Zum
          Beispiel passt <code>/\w/</code> zum "a" in "apple", "5" in "$5.28", "3"
          in "3D" und "m" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Wortzeichenklassen-Escape:</strong></a>
          Passt zu jedem Zeichen, das kein Wortzeichen aus dem grundlegenden
          lateinischen Alphabet ist. Entspricht <code>[^A-Za-z0-9_]</code>. Zum Beispiel,
          passt <code>/\W/</code> oder <code>/[^A-Za-z0-9_]/</code> zum "%" in "50%"
          und "É" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Leerzeichenzeichenklassen-Escape:</strong></a>
          Passt zu einem einzelnen Leerzeichenzeichen, einschließlich Leertaste, Tabulator, Formularschub, Zeilenumbruch und anderen Unicode-Leerzeichen. Entspricht
          <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel, passt <code>/\s\w*/</code> zu " bar" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Leerzeichenzeichenklassen-Escape:</strong></a>
          Passt zu einem einzelnen Zeichen, das kein Leerzeichen ist. Entspricht
          <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel, passt <code>/\S\w*/</code> zu "foo" in "foo bar".
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
      <td>Passt zu einem Formularschub.</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Passt zu einem Backspace. Wenn Sie nach der Wortgrenzen-Behauptung
        (<code>\b</code>) suchen, siehe
        <a
          href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
          >Assertions</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>\0</code></td>
      <td>Passt zu einem NUL-Zeichen. Folgen Sie dem nicht mit einer weiteren Ziffer.</td>
    </tr>
    <tr>
      <td>
        <code>\c<em>X</em></code>
      </td>
      <td>
        <p>
          Passt zu einem Steuerzeichen unter Verwendung der
          <a href="https://de.wikipedia.org/wiki/Caret-Notation"
            >Caret-Notation</a
          >, wobei "X" ein Buchstabe von A–Z ist (entsprechend den Codepunkten
          <code>U+0001</code><em>–</em><code>U+001A</code>). Zum Beispiel,
          passt <code>/\cM\cJ/</code> zu "\r\n".
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
        Passt zu einem UTF-16-Codebaustein mit dem Wert
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
          Passt zu einem Zeichen basierend auf seinen Unicode-Zeichen-Eigenschaften: zum Beispiel Emoji-Zeichen oder japanische
          <em>Katakana</em>-Zeichen oder chinesische/japanische Han/Kanji-Zeichen,
          etc.).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Gibt an, dass das folgende Zeichen speziell behandelt oder
          "escaped" werden sollte. Es verhält sich auf zwei Arten.
        </p>
        <ul>
          <li>
            Für Zeichen, die normalerweise wörtlich behandelt werden, weist es darauf hin, dass
            das nächste Zeichen speziell ist und nicht wörtlich interpretiert werden soll.
            Zum Beispiel passt <code>/b/</code> zum Zeichen "b". Indem Sie
            einen Backslash vor "b" setzen, also durch die Verwendung von <code>/\b/</code>, wird das
            Zeichen besonders, um eine Wortgrenze zu bedeuten.
          </li>
          <li>
            Für Zeichen, die normalerweise speziell behandelt werden, weist es darauf hin,
            dass das nächste Zeichen nicht speziell ist und wörtlich interpretiert werden soll.
            Zum Beispiel ist "*" ein spezielles Zeichen, das bedeutet, dass 0 oder
            mehr Vorkommen des vorhergehenden Zeichens übereinstimmen sollen; zum
            Beispiel bedeutet <code>/a*/</code> übereinstimmen mit 0 oder mehr "a"s. Um
            <code>*</code> wörtlich zu erfassen, setzen Sie einen Backslash davor; zum Beispiel,
            passt <code>/a\*/</code> zu "a*".
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Um dieses Zeichen wörtlich zu erfassen, escapen Sie es
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
          Passt entweder zu "x" oder "y". Jede Komponente, getrennt durch ein Pipe-Symbol (<code>|</code>), wird als <em>Alternative</em> bezeichnet. Zum Beispiel,
          passt <code>/green|red/</code> zu "green" in "green apple" und zu "red" in
          "red apple".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Eine Disjunktion ist eine andere Möglichkeit, "eine Reihe von Auswahlmöglichkeiten" anzugeben, aber sie ist keine Zeichenklasse. Disjunktionen sind keine Atome — Sie müssen eine <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">Gruppe</a> verwenden, um sie Teil eines größeren Musters zu machen. <code>[abc]</code> ist funktional äquivalent zu <code>(?:a|b|c)</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Suche nach einer Reihe von Ziffern

In diesem Beispiel verwenden wir `\d{4}`, um eine Folge von 4 Ziffern zu erfassen. `\b` gibt eine [Wortgrenze](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) an (d.h. nicht im mittleren Teil einer Zahlenreihe beginnen oder enden).

```js
const randomData = "015 354 8787 687351 3512 8735";
const regexpFourDigits = /\b\d{4}\b/g;

console.table(randomData.match(regexpFourDigits));
// ['8787', '3512', '8735']
```

Weitere Beispiele finden Sie in der [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) Referenz.

### Suche nach einem Wort (aus dem lateinischen Alphabet), das mit A beginnt

In diesem Beispiel erfassen wir ein Wort, das mit dem Buchstaben A beginnt. `\b` gibt eine [Wortgrenze](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) an (d.h. nicht in der Mitte eines Wortes beginnen). `[aA]` gibt den Buchstaben "a" oder "A" an. `\w+` steht für beliebige Zeichen _aus dem lateinischen Alphabet_, mehrfach (`+` ist ein [Quantifier](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)). Beachten Sie, dass, da wir bereits so lange passen, bis keine Wortzeichen mehr vorhanden sind, eine abschließende `\b`-Grenze nicht notwendig ist.

```js
const aliceExcerpt =
  "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";
const regexpWordStartingWithA = /\b[aA]\w+/g;

console.table(aliceExcerpt.match(regexpWordStartingWithA));
// ['Ada', 'and', 'at', 'all']
```

Weitere Beispiele finden Sie in der [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) Referenz.

### Suche nach einem Wort (aus Unicode-Zeichen)

Statt des lateinischen Alphabets können wir einen Bereich von Unicode-Zeichen verwenden, um ein Wort zu identifizieren (daher in der Lage, mit Text in anderen Sprachen wie Russisch oder Arabisch umzugehen). Die "Basic Multilingual Plane" von Unicode enthält die meisten der weltweit verwendeten Zeichen und wir können Zeichenklassen und Bereiche verwenden, um Wörter zu erfassen, die mit diesen Zeichen geschrieben sind.

```js
const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP goes through U+0000 to U+FFFF but space is U+0020

console.table(nonEnglishText.match(regexpBMPWord));
["Приключения", "Алисы", "в", "Стране", "чудес"];
```

Weitere Beispiele finden Sie in der [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) Referenz.

### Zählen der Vokale

In diesem Beispiel zählen wir die Anzahl der Vokale (A, E, I, O, U, Y) in einem Text. Das `g`-Flag wird verwendet, um alle Vorkommen des Musters im Text zu erfassen. Das `i`-Flag wird verwendet, um das Muster nicht kleinschreibungsempfindlich zu machen, sodass sowohl Groß- als auch Kleinbuchstaben-Vokale erfasst werden.

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
- [Quantifier](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Referenz
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Zeichenklassen-Escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Unicode-Zeichenklassen-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Wildcard: `.`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
