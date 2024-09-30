---
title: Zeichenklassen
slug: Web/JavaScript/Guide/Regular_expressions/Character_classes
l10n:
  sourceCommit: 012e9b4babec62ca26e87550a2e43e1eedad8f06
---

{{jsSidebar("JavaScript Guide")}}

Zeichenklassen unterscheiden Arten von Zeichen, zum Beispiel zur Unterscheidung zwischen Buchstaben und Ziffern.

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
          Passt auf eines der eingeschlossenen Zeichen. Sie können einen Bereich von Zeichen angeben, indem Sie einen Bindestrich verwenden, aber wenn der Bindestrich als erstes oder letztes Zeichen in den eckigen Klammern erscheint, wird er als literaler Bindestrich betrachtet, der in die Zeichenklasse als normales Zeichen aufgenommen wird.
        </p>
        <p>
          Zum Beispiel ist <code>[abcd]</code> dasselbe wie <code>[a-d]</code>.
          Sie passen auf das "b" in "brisket" und das "c" in "chop".
        </p>
        <p>
          Zum Beispiel passen <code>[abcd-]</code> und <code>[-abcd]</code> auf das
          "b" in "brisket", das "c" in "chop" und den "-" (Bindestrich) in
          "non-profit".
        </p>
        <p>
          Zum Beispiel ist <code>[\w-]</code> dasselbe wie
          <code>[A-Za-z0-9_-]</code>. Beide passen auf das "b" in "brisket", das
          "c" in "chop" und das "n" in "non-profit".
        </p>
        <p>
          Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets"><code>unicodeSets</code></a> (<code>v</code>) Flag aktiviert ist, hat die Zeichenklasse einige zusätzliche Funktionen. Siehe die <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class">Zeichenklasse</a> Referenz für weitere Informationen.
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
          Passt auf alles, was nicht in den eckigen Klammern eingeschlossen ist. Sie können einen Bereich von Zeichen angeben, indem Sie einen Bindestrich verwenden, aber wenn der Bindestrich als erstes Zeichen nach dem <code>^</code> oder als letztes Zeichen in den eckigen Klammern erscheint, wird er als literaler Bindestrich betrachtet, der in die Zeichenklasse als normales Zeichen aufgenommen wird. Zum Beispiel ist <code>[^abc]</code> dasselbe wie <code>[^a-c]</code>. Sie passen auf "o" in "bacon" und "h" in "chop".
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
          Passt auf jedes einzelne Zeichen <em>außer</em> Zeilenendzeichen:
          <code>\n</code>, <code>\r</code>, <code>\u2028</code> oder
          <code>\u2029</code>. Zum Beispiel passt <code>/.y/</code> auf "my" und
          "ay", aber nicht "yes", in "yes make my day", da es kein Zeichen vor "y" in "yes" gibt. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> (s) Flag aktiviert ist, passen auch Zeilenendzeichen.
          Innerhalb einer Zeichenklasse verliert der Punkt seine spezielle Bedeutung und passt auf einen literalen Punkt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Ziffern-Zeichenklassen-Escape:</strong></a>
          Passt auf jede Ziffer (arabische Ziffer). Entspricht <code>[0-9]</code>.
          Zum Beispiel passt <code>/\d/</code> oder <code>/[0-9]/</code> auf "2" in
          "B2 ist die Suite-Nummer".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Ziffern-Zeichenklassen-Escape:</strong></a>
          Passt auf jedes Zeichen, das keine Ziffer (arabische Ziffer) ist. Entspricht
          <code>[^0-9]</code>. Zum Beispiel passt <code>/\D/</code> oder
          <code>/[^0-9]/</code> auf "B" in "B2 ist die Suite-Nummer".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Wort-Zeichenklassen-Escape:</strong></a>
          Passt auf jedes alphanumerische Zeichen aus dem lateinischen Grundalphabet,
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Wort-Zeichenklassen-Escape:</strong></a>
          Passt auf jedes Zeichen, das kein Wortzeichen aus dem lateinischen
          Grundalphabet ist. Entspricht <code>[^A-Za-z0-9_]</code>. Zum Beispiel
          passt <code>/\W/</code> oder <code>/[^A-Za-z0-9_]/</code> auf "%" in "50%"
          und "É" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Leerzeichen-Zeichenklassen-Escape:</strong></a>
          Passt auf ein einzelnes Leerzeichen, einschließlich Leerzeichen, Tabulator, Seitenumbruch, Zeilenumbruch und anderer Unicode-Leerzeichen. Entspricht <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel passt <code>/\s\w*/</code> auf " bar" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Leerzeichen-Zeichenklassen-Escape:</strong></a>
          Passt auf ein einzelnes Zeichen außer Leerzeichen. Entspricht <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel passt <code>/\S\w*/</code> auf "foo" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\t</code></td>
      <td>Passt auf einen horizontalen Tabulator.</td>
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
      <td>Passt auf einen vertikalen Tabulator.</td>
    </tr>
    <tr>
      <td><code>\f</code></td>
      <td>Passt auf einen Seitenvorschub.</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Passt auf einen Rückschritt. Wenn Sie nach der Wortgrenzen-Bestätigung
        (<code>\b</code>) suchen, siehe
        <a
          href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
          >Bestätigungen</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>\0</code></td>
      <td>Passt auf ein NUL-Zeichen. Folgen Sie dies nicht mit einer weiteren Ziffer.</td>
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
          >, wobei "X" ein Buchstabe von A–Z ist (entsprechend den Codepunkten
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
        Passt auf das Zeichen mit dem Code <code><em>hh</em></code> (zwei
        hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        Passt auf eine UTF-16-Codierungseinheit mit dem Wert
        <code><em>hhhh</em></code> (vier hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>{hhhh}</em> oder <em>\u{hhhhh}</em></code>
      </td>
      <td>
        (Nur wenn das <code>u</code> Flag gesetzt ist.) Passt auf das Zeichen mit
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
          Passt auf ein Zeichen basierend auf seinen Unicode-Zeicheneigenschaften: zum Beispiel Emoji-Zeichen oder japanische
          <em>Katakana</em>-Zeichen oder chinesische/japanische Han/Kanji-Zeichen,
          usw.).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Gibt an, dass das folgende Zeichen speziell behandelt oder
          "escaped" werden soll. Es verhält sich auf zwei Arten.
        </p>
        <ul>
          <li>
            Für Zeichen, die normalerweise buchstäblich behandelt werden, gibt es an, dass das nächste Zeichen speziell ist und nicht buchstäblich interpretiert werden soll. Zum Beispiel passt <code>/b/</code> auf das Zeichen "b". Durch Platzieren eines Rückwärtsschrägstrichs vor "b", das heißt durch Verwendung von <code>/\b/</code>, wird das Zeichen speziell, um auf eine Wortgrenze zu passen.
          </li>
          <li>
            Für Zeichen, die normalerweise speziell behandelt werden, gibt es an, dass das nächste Zeichen nicht speziell ist und buchstäblich interpretiert werden soll. Zum Beispiel ist "*" ein spezielles Zeichen, das bedeutet, dass 0 oder mehr Vorkommen des vorhergehenden Zeichens übereinstimmen sollen; zum Beispiel bedeutet <code>/a*/</code> 0 oder mehr "a"s sollen passen. Um <code>*</code> buchstäblich zu erkennen, versehen Sie es mit einem Rückwärtsschrägstrich; zum Beispiel passt <code>/a\*/</code> auf "a*".
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Um dieses Zeichen buchstäblich zu suchen, escapen Sie es mit sich selbst. Mit anderen Worten, um nach <code>\</code> zu suchen, verwenden Sie <code>/\\/</code>.
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
          Passt entweder auf "x" oder "y". Jedes Element, getrennt durch eine Pipe (<code>|</code>), wird <em>Alternative</em> genannt. Zum Beispiel,
          <code>/green|red/</code> passt auf "green" in "green apple" und "red" in
          "red apple".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Eine Disjunktion ist eine weitere Möglichkeit, "eine Reihe von Optionen" anzugeben, aber es ist keine Zeichenklasse. Disjunktionen sind keine Atome — Sie müssen eine <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">Gruppe</a> verwenden, um sie Teil eines größeren Musters zu machen. <code>[abc]</code> ist funktional äquivalent zu <code>(?:a|b|c)</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Auf der Suche nach einer Reihe von Ziffern

In diesem Beispiel suchen wir eine Folge von 4 Ziffern mit `\d{4}`. `\b` zeigt eine [Wortgrenze](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) an (d.h. nicht in der Mitte einer Ziffernfolge beginnen oder enden).

```js
const randomData = "015 354 8787 687351 3512 8735";
const regexpFourDigits = /\b\d{4}\b/g;

console.table(randomData.match(regexpFourDigits));
// ['8787', '3512', '8735']
```

Weitere Beispiele finden Sie in der [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) Referenz.

### Auf der Suche nach einem Wort (aus dem lateinischen Alphabet) beginnend mit A

In diesem Beispiel suchen wir ein Wort, das mit dem Buchstaben A beginnt. `\b` zeigt eine [Wortgrenze](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) an (d.h. nicht in der Mitte eines Wortes beginnen). `[aA]` zeigt den Buchstaben "a" oder "A" an. `\w+` zeigt beliebige Zeichen _aus dem lateinischen Alphabet_ mehrmals an (`+` ist ein [Quantifikator](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)). Da wir bereits bis zum Ende der Wortzeichen übereinstimmen, ist eine abschließende `\b`-Grenze nicht notwendig.

```js
const aliceExcerpt =
  "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";
const regexpWordStartingWithA = /\b[aA]\w+/g;

console.table(aliceExcerpt.match(regexpWordStartingWithA));
// ['Ada', 'and', 'at', 'all']
```

Weitere Beispiele finden Sie in der [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) Referenz.

### Auf der Suche nach einem Wort (aus Unicode Zeichen)

Anstelle des lateinischen Alphabets können wir einen Bereich von Unicode-Zeichen verwenden, um ein Wort zu identifizieren (somit in der Lage, mit Text in anderen Sprachen wie Russisch oder Arabisch umzugehen). Die "Basic Multilingual Plane" von Unicode enthält die meisten der weltweit benutzten Zeichen und wir können Zeichenklassen und Bereiche verwenden, um Wörter zu erkennen, die mit diesen Zeichen geschrieben sind.

```js
const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP goes through U+0000 to U+FFFF but space is U+0020

console.table(nonEnglishText.match(regexpBMPWord));
["Приключения", "Алисы", "в", "Стране", "чудес"];
```

Weitere Beispiele finden Sie in der [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) Referenz.

### Zählen von Vokalen

In diesem Beispiel zählen wir die Anzahl der Vokale (A, E, I, O, U, Y) in einem Text. Das `g`-Flag wird verwendet, um alle Vorkommen des Musters im Text zu finden. Das `i`-Flag wird verwendet, um das Muster case-insensitive zu machen, so dass es sowohl Groß- als auch Kleinbuchstaben-Vokale erfasst.

```js
const aliceExcerpt =
  "There was a long silence after this, and Alice could only hear whispers now and then.";
const regexpVowels = /[aeiouy]/gi;

console.log("Number of vowels:", aliceExcerpt.match(regexpVowels).length);
// Number of vowels: 26
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- [Bestätigungen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
- [Quantifikatoren](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [Gruppen und Rückreferenzen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Referenz
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Zeichenklassen-Escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Unicode-Zeichenklassen-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Wildcard: `.`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
