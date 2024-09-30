---
title: Regular expression syntax cheat sheet
slug: Web/JavaScript/Guide/Regular_expressions/Cheatsheet
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}}

Diese Seite bietet ein umfassendes Cheat-Sheet für alle Möglichkeiten der `RegExp`-Syntax, indem der Inhalt der Artikel im `RegExp`-Leitfaden zusammengefasst wird. Wenn Sie mehr Informationen zu einem bestimmten Thema benötigen, folgen Sie dem Link in der entsprechenden Überschrift, um den vollständigen Artikel zu lesen, oder besuchen Sie [den Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions).

## Zeichenklassen

[Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) unterscheiden Arten von Zeichen, zum Beispiel zwischen Buchstaben und Ziffern.

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
          Passt auf eines der eingeschlossenen Zeichen. Sie können durch einen Bindestrich einen Bereich von Zeichen angeben, allerdings wird der Bindestrich als erstes oder letztes Zeichen in den eckigen Klammern als literaler Bindestrich betrachtet, um in die Zeichenklasse als normales Zeichen einbezogen zu werden.
        </p>
        <p>
          Zum Beispiel ist <code>[abcd]</code> dasselbe wie <code>[a-d]</code>. Diese passen auf das "b" in "brisket" und das "c" in "chop".
        </p>
        <p>
          Zum Beispiel passen <code>[abcd-]</code> und <code>[-abcd]</code> auf das "b" in "brisket", das "c" in "chop" und das "-" (Bindestrich) in "non-profit".
        </p>
        <p>
          Zum Beispiel ist <code>[\w-]</code> dasselbe wie <code>[A-Za-z0-9_-]</code>. Beide passen auf das "b" in "brisket", das "c" in "chop" und das "n" in "non-profit".
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
          Passt auf alles, was nicht in den eckigen Klammern eingeschlossen ist. Sie können durch einen Bindestrich einen Bereich von Zeichen angeben, aber wenn der Bindestrich als erstes Zeichen nach dem <code>^</code> oder als letztes Zeichen in den eckigen Klammern steht, wird er als literaler Bindestrich betrachtet, um in die Zeichenklasse als normales Zeichen einbezogen zu werden. Zum Beispiel ist <code>[^abc]</code> dasselbe wie <code>[^a-c]</code>. Diese passen anfangs auf "o" in "bacon" und "h" in "chop".
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard"><strong>Wildcard:</strong></a>
          Passt auf jedes einzelne Zeichen <em>außer</em> Zeilenendzeichen: <code>\n</code>, <code>\r</code>, <code>\u2028</code> oder <code>\u2029</code>. Zum Beispiel passt <code>/.y/</code> auf "my" und "ay", aber nicht auf "yes" in "yes make my day", da es kein Zeichen vor "y" in "yes" gibt. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> (s) Flag aktiviert ist, passen auch Zeilenendzeichen. Innerhalb einer Zeichenklasse verliert der Punkt seine spezielle Bedeutung und passt auf einen literalen Punkt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Ziffern-Zeichenklassen-Fluchtzeichen:</strong></a>
          Passt auf jede Ziffer (arabische Zahl). Entspricht <code>[0-9]</code>. Zum Beispiel passt <code>/\d/</code> oder <code>/[0-9]/</code> auf "2" in "B2 ist die Suite-Nummer".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Ziffern-Zeichenklassen-Fluchtzeichen:</strong></a>
          Passt auf jedes Zeichen, das keine Ziffer ist (arabische Zahl). Entspricht <code>[^0-9]</code>. Zum Beispiel passt <code>/\D/</code> oder <code>/[^0-9]/</code> auf "B" in "B2 ist die Suite-Nummer".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Wort-Zeichenklassen-Fluchtzeichen:</strong></a>
          Passt auf jedes alphanumerische Zeichen aus dem lateinischen Alphabet, einschließlich des Unterstrichs. Entspricht <code>[A-Za-z0-9_]</code>. Zum Beispiel passt <code>/\w/</code> auf "a" in "apple", "5" in "$5.28", "3" in "3D" und "m" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Wort-Zeichenklassen-Fluchtzeichen:</strong></a>
          Passt auf jedes Zeichen, das kein Wortzeichen aus dem lateinischen Alphabet ist. Entspricht <code>[^A-Za-z0-9_]</code>. Zum Beispiel passt <code>/\W/</code> oder <code>/[^A-Za-z0-9_]/</code> auf "%" in "50%" und "É" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Leerraum-Zeichenklassen-Fluchtzeichen:</strong></a>
          Passt auf ein einzelnes Leerzeichenzeichen, einschließlich Leerzeichen, Tabulator, Formularvorschub, Zeilenumbruch und andere Unicode-Leerzeichen. Entspricht <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel passt <code>/\s\w*/</code> auf " bar" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Leerraum-Zeichenklassen-Fluchtzeichen:</strong></a>
          Passt auf ein einzelnes Zeichen, das kein Leerzeichen ist. Entspricht <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel passt <code>/\S\w*/</code> auf "foo" in "foo bar".
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
      <td>Passt auf einen Formularvorschub.</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Passt auf eine Rücktaste. Wenn Sie nach dem Wortgrenzen-Assertion suchen
        (<code>\b</code>), siehe
        <a
          href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
          >Assertions</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>\0</code></td>
      <td>Passt auf ein NUL-Zeichen. Folgen Sie diesem nicht mit einer weiteren Ziffer.</td>
    </tr>
    <tr>
      <td>
        <code>\c<em>X</em></code>
      </td>
      <td>
        <p>
          Passt auf ein Steuerzeichen unter Verwendung von
          <a href="https://de.wikipedia.org/wiki/Caret-Notation"
            >Caret-Notation</a
          >, wobei "X" ein Buchstabe von A–Z ist (entsprechend den Codepunkten
          <code>U+0001</code>–<code>U+001A</code>). Zum Beispiel passt
          <code>/\cM\cJ/</code> auf "\r\n".
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
        Passt auf eine UTF-16-Codeeinheit mit dem Wert
        <code><em>hhhh</em></code> (vier hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>{hhhh}</em> oder <em>\u{hhhhh}</em></code>
      </td>
      <td>
        (Nur wenn das <code>u</code>-Flag gesetzt ist.) Passt auf das Zeichen
        mit dem Unicode-Wert <code>U+<em>hhhh</em></code> oder <code
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape"><strong>Unicode-Zeichenklassen-Fluchtzeichen:</strong></a>
          Passt auf ein Zeichen basierend auf seinen Unicode-Zeicheneigenschaften: zum Beispiel Emoji-Zeichen oder japanische <em>Katakana</em>-Zeichen oder chinesische/japanische Han/Kanji-Zeichen, etc.).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Gibt an, dass das folgende Zeichen speziell behandelt oder
          "escapet" werden sollte. Es verhält sich auf eine von zwei Arten.
        </p>
        <ul>
          <li>
            Bei Zeichen, die normalerweise wörtlich behandelt werden, gibt an,
            dass das nächste Zeichen speziell ist und nicht wörtlich interpretiert werden soll.
            Zum Beispiel passt <code>/b/</code> auf das Zeichen "b". Durch
            Voranstellen eines Backslashes vor "b", also durch Verwendung von <code>/\b/</code>, wird
            das Zeichen speziell, um eine Wortgrenze zu bedeuten.
          </li>
          <li>
            Bei Zeichen, die normalerweise speziell behandelt werden, gibt an,
            dass das nächste Zeichen nicht speziell ist und wörtlich interpretiert
            werden soll. Zum Beispiel ist "*" ein spezielles Zeichen, das bedeutet, dass 0 oder mehr
            Vorkommen des vorhergehenden Zeichens übereinstimmen sollten; z.B. bedeutet <code>/a*/</code>, dass 0 oder mehr "a"s passen.
            Um auf <code>*</code> wörtlich zu passen, stellen Sie es mit einem Backslash vor; zum Beispiel passt
            <code>/a\*/</code> auf "a*".
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Um dieses Zeichen wörtlich zu treffen, escapen Sie es
            mit sich selbst. Um nach <code>\</code> zu suchen, verwenden Sie
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
          Passt entweder auf "x" oder "y". Jede Komponente, getrennt durch ein Pipe (<code>|</code>), wird als <em>Alternative</em> bezeichnet. Zum Beispiel,
          <code>/green|red/</code> passt auf "green" in "green apple" und auf "red" in "red apple".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Eine Disjunktion ist eine weitere Möglichkeit, "eine Menge von Auswahlmöglichkeiten" anzugeben, aber sie ist keine Zeichenklasse. Disjunktionen sind keine Atome — Sie müssen eine <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">Gruppe</a> verwenden, um sie Teil eines größeren Musters zu machen. <code>[abc]</code> ist funktional äquivalent zu <code>(?:a|b|c)</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Assertions

[Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) beinhalten Grenzen, die die Anfänge und Enden von Zeilen und Wörtern anzeigen, sowie andere Muster, die auf irgendeine Weise anzeigen, dass ein Treffer möglich ist (einschließlich Look-ahead, Look-behind und bedingter Ausdrücke).

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Input-Grenze-Anfang-Assertion:</strong></a>
          Passt auf den Anfang der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a>-Flag (m) aktiviert ist,
          passt es auch direkt nach einem Zeilenumbruch-Zeichen. Zum Beispiel,
          <code>/^A/</code> passt nicht auf das "A" in "an A", aber passt auf das
          erste "A" in "An A".
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Input-Grenze-Ende-Assertion:</strong></a>
          Passt auf das Ende der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a>-Flag (m) aktiviert ist, passt es auch direkt vor einem Zeilenumbruch-Zeichen. Zum Beispiel,
          <code>/t$/</code> passt nicht auf das "t" in "eater", aber passt darauf
          in "eat".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Wort-Grenze-Assertion:</strong></a>
          Passt auf eine Wortgrenze. Dies ist die Position, an der ein Wortzeichen
          nicht von einem weiteren Wortzeichen gefolgt oder vorausgeht, wie zwischen
          einem Buchstaben und einem Leerzeichen. Beachten Sie, dass eine übereinstimmende Wortgrenze nicht
          in die Übereinstimmung einbezogen wird. Mit anderen Worten, die Länge einer übereinstimmten Wortgrenze ist null.
        </p>
        <p>Beispiele:</p>
        <ul>
          <li><code>/\bm/</code> passt auf das "m" in "moon".</li>
          <li>
            <code>/oo\b/</code> passt nicht auf das "oo" in "moon", weil "oo"
            von "n" gefolgt wird, das ein Wortzeichen ist.
          </li>
          <li>
            <code>/oon\b/</code> passt auf das "oon" in "moon", weil "oon" das
            Ende des Strings ist und somit nicht von einem Wortzeichen gefolgt wird.
          </li>
          <li>
            <code>/\w\b\w/</code> wird niemals etwas passen, weil ein Wortzeichen niemals sowohl von einem Nicht-Wort- als auch einem Wortzeichen gefolgt sein kann.
          </li>
        </ul>
        <p>
          Um auf ein Rücktastezeichen (<code>[\b]</code>) zu passen, siehe
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Nicht-Wort-Grenze-Assertion:</strong></a>
          Passt auf eine Nicht-Wortgrenze. Dies ist eine Position, an der das vorherige und
          nächste Zeichen vom gleichen Typ sind: Entweder müssen beide Wörter sein oder
          beide Nicht-Wörter, zum Beispiel zwischen zwei Buchstaben oder zwischen zwei
          Leerzeichen. Der Anfang und das Ende eines Strings werden als Nicht-Wörter angesehen.
          Genau wie bei der übereinstimmenden Wortgrenze wird auch die übereinstimmende Nicht-Wortgrenze nicht
          in die Übereinstimmung einbezogen. Zum Beispiel passt <code>/\Bon/</code> auf "on" in "at noon", und
          <code>/ye\B/</code> passt auf "ye" in "possibly yesterday".
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Andere Assertions

> [!NOTE]
> Das `?`-Zeichen kann auch als Quantifizierer verwendet werden.

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
          Passt auf "x" nur, wenn es
          von "y" gefolgt wird. Zum Beispiel passt <code>/Jack(?=Sprat)/</code> auf
          "Jack" nur, wenn es von "Sprat" gefolgt wird.<br /><code
            >/Jack(?=Sprat|Frost)/</code
          >
          passt auf "Jack" nur, wenn es von "Sprat" oder "Frost" gefolgt wird. Weder
          "Sprat" noch "Frost" sind jedoch Teil der Übereinstimmungsergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Negative Lookahead-Assertion:</strong></a>
          Nur passend "x", wenn es nicht von "y" gefolgt wird. Zum Beispiel passt <code>/\d+(?!\.)/</code> auf
          eine Zahl nur, wenn sie nicht von einem Dezimalpunkt gefolgt wird. <code
            >/\d+(?!\.)/.exec('3.141')</code
          >
          passt auf "141", jedoch nicht auf "3".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Lookbehind-Assertion:</strong></a>
          Passt auf "x" nur, wenn es
          von "y" vorangestellt wird. Zum Beispiel passt
          <code>/(?&#x3C;=Jack)Sprat/</code> auf "Sprat" nur, wenn es
          von "Jack" vorangestellt wird. <code>/(?&#x3C;=Jack|Tom)Sprat/</code> passt
          auf "Sprat" nur, wenn es von "Jack" oder "Tom" vorangestellt wird. Weder
          "Jack" noch "Tom" ist jedoch Teil der Übereinstimmungsergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Negative Lookbehind-Assertion:</strong></a>
          Passt auf "x" nur, wenn
          "x" nicht von "y" vorangestellt wird. Zum Beispiel passt
          <code>/(?&#x3C;!-)\d+/</code> auf eine Zahl nur, wenn sie nicht
          von einem Minuszeichen vorangestellt wird. <code>/(?&#x3C;!-)\d+/.exec('3')</code>
          passt auf "3". <code>/(?&#x3C;!-)\d+/.exec('-3')</code> wird kein
          Match gefunden, da die Zahl durch das Minuszeichen vorangestellt ist.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Gruppen und Rückverweise

[Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) kennzeichnen Gruppen von Ausdruckszeichen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Zeichen</th>
      <th scope="col">Bedeutung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>(<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group"><strong>Erfassungsgruppe:</strong></a>
          Passt auf <code><em>x</em></code> und
          merkt sich das Ergebnis. Zum Beispiel passt <code>/(foo)/</code> auf und
          merkt sich "foo" in "foo bar".
        </p>
        <p>
          Ein regulärer Ausdruck kann mehrere Erfassungsgruppen haben. In Ergebnissen
          sind die Übereinstimmungen mit Erfassungsgruppen typischerweise in einem Array, dessen Mitglieder in
          derselben Reihenfolge wie die linken Klammern in der Erfassungsgruppe sind. Dies ist
          in der Regel nur die Reihenfolge der Erfassungsgruppen selbst. Dies ist
          wichtig, wenn Erfassungsgruppen verschachtelt sind. Übereinstimmungen werden
          über den Index der Elemente des Ergebnisses referiert (<code
            >[1], …, [n]</code
          >) oder über die vordefinierten <code>RegExp</code>-Objekteigenschaften
          (<code>$1, …, $9</code>).
        </p>
        <p>
          Erfassungsgruppen haben eine Leistungsstrafe. Wenn Sie den
          übereinstimmenden Substring nicht benötigen, um ihn zu überprüfen, bevorzugen Sie nicht-erfassende
          Klammern (siehe unten).
        </p>
        <p>
          <code
            ><a
              href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/match"
              >String.prototype.match()</a
            ></code
          >
          gibt keine Gruppen zurück, wenn das <code>/.../g</code>-Flag gesetzt ist. Sie können jedoch weiterhin
          <code
            ><a
              href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll"
              >String.prototype.matchAll()</a
            ></code
          >
          verwenden, um alle Übereinstimmungen zu erhalten.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;Name>x)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group"><strong>Benannte Erfassungsgruppe:</strong></a>
          Passt auf "x" und speichert es in
          der Gruppen-Eigenschaft der zurückgegebenen Übereinstimmungen unter dem Namen, der durch <code>&#x3C;Name></code>
          angegeben ist. Die spitzen Klammern (<code>&#x3C;</code>
          und <code>></code>) sind für den Gruppennamen erforderlich.
        </p>
        <p>
          Um beispielsweise die US-Vorwahl aus einer Telefonnummer zu extrahieren,
          könnten wir <code>/\((?&#x3C;area>\d\d\d)\)/</code> verwenden. Die
          resultierende Zahl erscheint unter <code>matches.groups.area</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>Nicht-erfassende Gruppe:</strong></a>
          Passt auf "x", merkt sich aber nicht
          das Ergebnis. Der übereinstimmende Substring kann nicht über die Elemente des zurückgegebenen
          Arrays (<code>[1], …, [n]</code>) oder über die vordefinierten
          <code>RegExp</code>-Objekteigenschaften (<code>$1, …, $9</code>) zurückgerufen werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?:<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier"><strong>Modifikator:</strong></a>
          Aktiviert oder deaktiviert die angegebenen Flags nur für das eingeschlossene Muster. Nur die <code>i</code>, <code>m</code> und <code>s</code>-Flags können in einem Modifikator verwendet werden.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\<em>n</em></code>
      </td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference"><strong>Rückverweis:</strong></a>
          Wo "n" eine positive ganze Zahl ist. Passt auf den gleichen Substring, der von
          der n-ten Erfassungsgruppe im regulären Ausdruck (zählen der linken Klammern) übereinstimmt.
          Zum Beispiel passt <code>/apple(,)\sorange\1/</code> auf "apple, orange," in "apple,
          orange, cherry, peach".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>Benannter Rückverweis:</strong></a>
          Ein Rückverweis auf den letzten Substring, der mit der
          <strong>benannten Erfassungsgruppe</strong> übereinstimmt, die durch
          <code>&#x3C;Name></code> angegeben ist.
        </p>
        <p>
          Zum Beispiel passt
          <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> auf "Sir,
          yes Sir" in "Do you copy? Sir, yes Sir!".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>\k</code> wird hier wörtlich verwendet, um
            den Beginn eines Rückverweises auf eine benannte Erfassungsgruppe anzuzeigen.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Quantifizierer

[Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) geben die Anzahl von Zeichen oder Ausdrücken an, die übereinstimmen sollen.

> [!NOTE]
> Im Folgenden bezieht sich _Element_ nicht nur auf einzelne Zeichen, sondern umfasst auch [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) und [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).

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
        <code><em>x</em>*</code>
      </td>
      <td>
        <p>
          Passt auf das vorangehende Element "x" 0 oder mehr Mal. Zum Beispiel
          passt <code>/bo*/</code> auf "boooo" in "A ghost booooed" und "b" in "A
          bird warbled", jedoch auf nichts in "A goat grunted".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          Passt auf das vorangehende Element "x" 1 oder mehr Mal. Entspricht
          <code>{1,}</code>. Zum Beispiel passt <code>/a+/</code> auf das "a" in
          "candy" und auf alle "a"s in "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          Passt auf das vorangehende Element "x" 0 oder 1 Mal. Zum Beispiel
          passt <code>/e?le?/</code> auf das "el" in "angel" und das "le" in
          "angle."
        </p>
        <p>
          Wenn direkt nach einem der Quantifizierer <code>*</code>,
          <code>+</code>, <code>?</code> oder <code>{}</code> verwendet, macht es den
          Quantifizierer nicht gierig (matching die minimale Anzahl von Malen), im Gegensatz zur
          Voreinstellung, die gierig ist (matching die maximale Anzahl von Malen).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative ganze Zahl ist, passt es genau auf "n" Vorkommen des
          vorangehenden Elements "x". Zum Beispiel passt <code>/a{2}/</code> nicht auf
          das "a" in "candy", aber es passt auf alle "a"s in "caandy" und
          die beiden ersten "a"s in "caaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative ganze Zahl ist, passt es auf mindestens "n" Vorkommen des
          vorangehenden Elements "x". Zum Beispiel passt <code>/a{2,}/</code> nicht
          auf das "a" in "candy", aber passt auf alle "a"s in "caandy" und
          in "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <p>
          Wo "n" und "m" nicht-negative ganze Zahlen sind und <code>m >= n</code>,
          passt auf mindestens "n" und höchstens "m" Vorkommen des vorangehenden
          Elements "x". Zum Beispiel passt <code>/a{1,3}/</code> auf nichts in
          "cndy", das "a" in "candy", die beiden "a"s in "caandy", und die ersten
          drei "a"s in "caaaaaaandy". Beachten Sie, dass beim Matching von "caaaaaaandy",
          das Match "aaa" ist, auch wenn der ursprüngliche String mehr "a"s in
          sich hatte.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code><em>x</em>*?</code><br /><code><em>x</em>+?</code><br /><code
            ><em>x</em>??</code
          ><br /><code><em>x</em>{n}?</code><br /><code><em>x</em>{n,}?</code
          ><br /><code><em>x</em>{n,m}?</code>
        </p>
      </td>
      <td>
        <p>
          Standardmäßig sind Quantifizierer wie <code>*</code> und <code>+</code>
          "gierig", was bedeutet, dass sie versuchen, so viel von der Zeichenkette wie
          möglich zu matchen. Das <code>?</code>-Zeichen nach dem Quantifizierer macht den
          Quantifizierer "nicht gierig": das heißt, er wird aufhören, sobald er ein Match findet.
          Zum Beispiel, bei einer Zeichenkette wie "some &#x3C;foo> &#x3C;bar>
          new &#x3C;/bar> &#x3C;/foo> thing":
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> wird "&#x3C;foo> &#x3C;bar> new
            &#x3C;/bar> &#x3C;/foo>" matchen
          </li>
          <li><code>/&#x3C;.*?>/</code> wird "&#x3C;foo>" matchen</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
