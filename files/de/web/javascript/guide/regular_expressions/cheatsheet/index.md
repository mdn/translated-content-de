---
title: Regular Expression Syntax Cheat Sheet
slug: Web/JavaScript/Guide/Regular_expressions/Cheatsheet
l10n:
  sourceCommit: a7acf4c7a38f1df8f5d0dee1f17672968ac979d5
---

Diese Seite bietet eine umfassende Übersicht über alle Möglichkeiten der `RegExp`-Syntax, indem der Inhalt der Artikel im `RegExp`-Leitfaden zusammengefasst wird. Wenn Sie mehr Informationen zu einem bestimmten Thema benötigen, folgen Sie bitte dem Link in der entsprechenden Überschrift, um den vollständigen Artikel zu lesen, oder besuchen Sie [den Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions).

## Zeichenklassen

[Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) unterscheiden Arten von Zeichen, wie zum Beispiel das Unterscheiden zwischen Buchstaben und Ziffern.

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
          Passt zu einem der eingeschlossenen Zeichen. Sie können einen Bereich von Zeichen angeben, indem Sie einen Bindestrich verwenden, aber wenn der Bindestrich als erstes oder letztes Zeichen in den eckigen Klammern erscheint, wird er als ein literaler Bindestrich betrachtet, der in die Zeichenklasse als normales Zeichen aufgenommen wird.
        </p>
        <p>
          Zum Beispiel ist <code>[abcd]</code> dasselbe wie <code>[a-d]</code>.
          Beide passen zum "b" in "brisket" und zum "c" in "chop".
        </p>
        <p>
          Zum Beispiel passen <code>[abcd-]</code> und <code>[-abcd]</code> zum
          "b" in "brisket", zum "c" in "chop" und zum "-" (Bindestrich) in "non-profit".
        </p>
        <p>
          Zum Beispiel ist <code>[\w-]</code> dasselbe wie
          <code>[A-Za-z0-9_-]</code>. Beide passen zum "b" in "brisket", zum
          "c" in "chop" und zum "n" in "non-profit".
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
          Passt auf alles, was nicht in den eckigen Klammern enthalten ist. Sie können einen Bereich von Zeichen angeben, indem Sie einen Bindestrich verwenden, aber wenn der Bindestrich als erstes Zeichen nach dem <code>^</code> oder als letztes Zeichen in den eckigen Klammern erscheint, wird er als ein literaler Bindestrich betrachtet, der in die Zeichenklasse als normales Zeichen aufgenommen wird. Zum Beispiel ist <code>[^abc]</code> dasselbe wie <code>[^a-c]</code>. Beide passen anfangs zum "o" in "bacon" und zum "h" in "chop".
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
          Passt auf jedes einzelne Zeichen <em>außer</em> Zeilenbeendigungszeichen:
          <code>\n</code>, <code>\r</code>, <code>\u2028</code> oder
          <code>\u2029</code>. Zum Beispiel passt <code>/.y/</code> zu "my" und
          "ay", aber nicht zu "yes" in "yes make my day", da kein Zeichen vor dem "y" in "yes" steht. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> (s) Flag gesetzt ist, passen auch Zeilenbeendigungszeichen.
          Innerhalb einer Zeichenklasse verliert der Punkt seine besondere Bedeutung und
          passt auf einen buchstäblichen Punkt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Ziffern-Zeichenklasse Escape:</strong></a>
          Passt zu jeder Ziffer (Arabische Ziffer). Entspricht <code>[0-9]</code>.
          Zum Beispiel passt <code>/\d/</code> oder <code>/[0-9]/</code> zur "2" in
          "B2 ist die Suite-Nummer".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Ziffer-Zeichenklasse Escape:</strong></a>
          Passt zu jedem Zeichen, das keine Ziffer (Arabische Ziffer) ist. Entspricht
          <code>[^0-9]</code>. Zum Beispiel passt <code>/\D/</code> oder
          <code>/[^0-9]/</code> zur "B" in "B2 ist die Suite-Nummer".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Wort-Zeichenklasse Escape:</strong></a>
          Passt zu jedem alphanumerischen Zeichen des Grund-Alphabets (Latein),
          einschließlich des Unterstrichs. Entspricht <code>[A-Za-z0-9_]</code>. Zum
          Beispiel passt <code>/\w/</code> zur "a" in "apple", "5" in "$5.28", "3"
          in "3D" und "m" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Wort-Zeichenklasse Escape:</strong></a>
          Passt zu jedem Zeichen, das kein Wort-Zeichen des grundlegenden
          Lateinalphabets ist. Entspricht <code>[^A-Za-z0-9_]</code>. Zum Beispiel
          passt <code>/\W/</code> oder <code>/[^A-Za-z0-9_]/</code> zum "%" in "50%"
          und "É" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Whitespace-Zeichenklasse Escape:</strong></a>
          Passt zu einem einzelnen Whitespace-Zeichen, einschließlich Leerzeichen, Tab, Form
          Feed, Zeilenumbruch und anderen Unicode-Leerzeichen. Entspricht
          <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel passt <code>/\s\w*/</code> zum " bar" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Whitespace-Zeichenklasse Escape:</strong></a>
          Passt zu einem einzelnen Zeichen, das kein Leerzeichen ist. Entspricht
          <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel passt <code>/\S\w*/</code> zum "foo" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\t</code></td>
      <td>Passt zu einem horizontalen Tabulator.</td>
    </tr>
    <tr>
      <td><code>\r</code></td>
      <td>Passt zu einem Wagenrücklauf (Carriage Return).</td>
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
      <td>Passt zu einem Form-Feed.</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Passt zu einem Backspace. Wenn Sie nach der Wortgrenzen-Bestätigung
        (<code>\b</code>) suchen, siehe
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
          Passt zu einem Steuerzeichen unter Verwendung von
          <a href="https://en.wikipedia.org/wiki/Caret_notation"
            >Caret-Notation</a
          >, wobei "X" ein Buchstabe von A–Z oder a–z ist (entspricht Codepunkten
          <code>U+0001</code><em>–</em><code>U+001A</code>). Zum Beispiel,
          <code>/\cM\cJ/</code> passt zu "\r\n".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape"><strong>Hex Escape:</strong></a>
        Passt zum Zeichen mit dem Code <code><em>hh</em></code> (zwei
        hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>HHHH</em></code>
      </td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape"><strong>Unicode Escape:</strong></a>
        Passt zu einer UTF-16 Code-Einheit mit dem Wert
        <code><em>HHHH</em></code> (vier hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u{<em>H…H</em>}</code>
      </td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape"><strong>Unicode Code Point Escape:</strong></a>
        (Nur wenn das <code>u</code> Flag gesetzt ist.) Passt zum Zeichen mit
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape"><strong>Unicode-Zeichenklasse Escape:</strong></a>
          Passt zu einem Zeichen basierend auf seinen Unicode-Zeicheneigenschaften: zum Beispiel Emoji-Zeichen, japanische
          <em>Katakana</em>-Zeichen oder chinesische/japanische Han/Kanji-Zeichen,
          usw.
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
            Für Zeichen, die normalerweise wörtlich behandelt werden, gibt an, dass
            das nächste Zeichen speziell ist und nicht wörtlich interpretiert werden soll.
            Zum Beispiel passt <code>/b/</code> zum Charakter "b". Durch Einfügen
            eines Backslashs vor "b", also durch Verwenden von <code>/\b/</code>, wird das
            Zeichen speziell, um eine Wortgrenze anzuzeigen.
          </li>
          <li>
            Für Zeichen, die normalerweise speziell behandelt werden, gibt an, dass
            das nächste Zeichen nicht besonders ist und wörtlich interpretiert werden soll.
            Zum Beispiel ist "*" ein spezielles Zeichen, das bedeutet, dass 0 oder
            mehr Vorkommen des vorhergehenden Zeichens abgeglichen werden sollten; zum
            Beispiel bedeutet <code>/a*/</code>, dass 0 oder mehr "a"s abgeglichen werden.
            Um <code>*</code> wörtlich abzugleichen, gehen Sie ihm einen Rückschrägstrich
            voran; zum Beispiel passt <code>/a\*/</code> zu "a*".
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Um dieses Zeichen wörtlich abzugleichen, escapen Sie es mit sich selbst. Mit anderen Worten: Um nach <code>\</code> zu suchen, verwenden Sie
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
          Passt entweder zu "x" oder zu "y". Jede Komponente, die durch ein Pipe-Zeichen (<code>|</code>) getrennt ist, wird als <em>Alternative</em> bezeichnet. Zum Beispiel,
          <code>/green|red/</code> passt zu "green" in "green apple" und "red" in
          "red apple".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Eine Disjunktion ist eine andere Möglichkeit, "eine Reihe von Auswahlmöglichkeiten" zu spezifizieren, ist aber keine Zeichenklasse. Disjunktionen sind keine Atome — Sie müssen eine <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">Gruppe</a> verwenden, um sie Teil eines größeren Musters zu machen. <code>[abc]</code> ist funktional gleichwertig mit <code>(?:a|b|c)</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Assertions

[Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) umfassen Grenzen, die den Anfang und das Ende von Zeilen und Wörtern anzeigen, und andere Muster, die auf irgendeine Weise angeben, dass ein Abgleich möglich ist (einschließlich Look-Ahead, Look-Behind und bedingter Ausdrücke).

### Grenztyp-Assertions

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Eingabebegrenzung Start-Assertion:</strong></a>
          Passt zum Anfang der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag gesetzt ist,
          passt auch direkt nach einem Zeilenumbruchzeichen. Zum Beispiel,
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
            > vorkommt.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Eingabebegrenzung Ende-Assertion:</strong></a>
          Passt zum Ende der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag gesetzt ist, passt es auch
          direkt vor einem Zeilenumbruchzeichen. Zum Beispiel,
          <code>/t$/</code> passt nicht zum "t" in "eater", aber passt im
          "eat".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Wortgrenzen-Assertion:</strong></a>
          Passt zu einer Wortgrenze. Dies ist die Position, an der ein Wortzeichen
          nicht von einem anderen Wortzeichen gefolgt oder vorangegangen wird, wie zwischen
          einem Buchstaben und einem Leerzeichen. Beachten Sie, dass eine übereinstimmende Wortgrenze nicht
          im Match enthalten ist. Anders ausgedrückt, die Länge einer übereinstimmenden Wortgrenze ist Null.
        </p>
        <p>Beispiele:</p>
        <ul>
          <li><code>/\bm/</code> passt zum "m" in "moon".</li>
          <li>
            <code>/oo\b/</code> passt nicht zum "oo" in "moon", weil "oo"
            von "n" gefolgt wird, das ein Wortzeichen ist.
          </li>
          <li>
            <code>/oon\b/</code> passt zum "oon" in "moon", weil "oon" das
            Ende der Zeichenfolge ist und daher nicht von einem Wortzeichen gefolgt wird.
          </li>
          <li>
            <code>/\w\b\w/</code> wird nie etwas passen, weil ein Wortzeichen
            nicht sowohl von einem Nicht-Wort als auch einem Wortzeichen gefolgt werden kann.
          </li>
        </ul>
        <p>
          Um ein Rückschrittzeichen (<code>[\b]</code>) zu betrachten, siehe
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Nicht-Wortgrenzen-Assertion:</strong></a>
          Passt zu einer Nicht-Wortgrenze. Dies ist eine Position, an der das vorherige und
          nächste Zeichen vom gleichen Typ sind: Entweder müssen beide Worte sein, oder
          beide müssen Nicht-Worte sein, zum Beispiel zwischen zwei Buchstaben oder zwischen zwei
          Leerzeichen. Der Anfang und das Ende einer Zeichenfolge werden als Nicht-Wörter betrachtet.
          Genauso wie die übereinstimmende Wortgrenze ist die übereinstimmende Nicht-Wortgrenze
          auch nicht im Match enthalten. Zum Beispiel,
          <code>/\Bon/</code> passt zu "on" in "at noon", und
          <code>/ye\B/</code> passt zu "ye" in "possibly yesterday".
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Andere Assertions

> [!NOTE]
> Das `?` Zeichen kann auch als Quantifikator verwendet werden.

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
          Passt zu "x", nur wenn "x" von "y"
          gefolgt wird. Zum Beispiel passt <code>/Jack(?=Sprat)/</code>
          zu "Jack", nur wenn es von "Sprat" gefolgt wird.<br /><code
            >/Jack(?=Sprat|Frost)/</code
          >
          passt zu "Jack", nur wenn es von "Sprat" oder "Frost" gefolgt wird. Allerdings sind
          weder "Sprat" noch "Frost" Teil des Matchergebnisses.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Negative Lookahead-Assertion:</strong></a>
          Passt zu "x", nur wenn "x"
          nicht von "y" gefolgt wird. Zum Beispiel passt <code>/\d+(?!\.)/</code>
          zu einer Zahl, nur wenn sie nicht von einem Dezimalpunkt gefolgt wird. <code
            >/\d+(?!\.)/.exec('3.141')</code
          >
          passt zu "141", aber nicht zu "3".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Lookbehind-Assertion:</strong></a>
          Passt zu "x", nur wenn "x" von "y"
          vorausgeht. Zum Beispiel,
          <code>/(?&#x3C;=Jack)Sprat/</code> passt zu "Sprat", nur wenn es von "Jack"
          vorausgeht. <code>/(?&#x3C;=Jack|Tom)Sprat/</code> passt zu
          "Sprat", nur wenn es von "Jack" oder "Tom" vorausgeht. Allerdings sind
          weder "Jack" noch "Tom" Teil des Matchergebnisses.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Negative Lookbehind-Assertion:</strong></a>
          Passt zu "x", nur wenn
          "x" nicht von "y" vorausgeht. Zum Beispiel,
          <code>/(?&#x3C;!-)\d+/</code> passt zu einer Zahl, nur wenn sie nicht
          von einem Minuszeichen vorausgeht. <code>/(?&#x3C;!-)\d+/.exec('3')</code>
          passt zu "3". <code>/(?&#x3C;!-)\d+/.exec('-3')</code> wird
          nicht gefunden, weil die Zahl von einem Minuszeichen vorausgeht.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Gruppen und Rückbezüge

[Gruppen und Rückbezüge](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) kennzeichnen Gruppen von Ausdruckszeichen.

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group"><strong>Gruppe erkennbar aufnehmen:</strong></a>
          Passt zu <code><em>x</em></code> und
          merkt sich den Match. Zum Beispiel passt <code>/(foo)/</code> und
          merkt sich "foo" in "foo bar".
        </p>
        <p>
          Ein regulärer Ausdruck kann mehrere erfassende Gruppen haben. In Ergebnissen,
          werden Übereinstimmungen mit erfassenden Gruppen typischerweise in einem Array angezeigt, dessen Mitglieder in
          der gleichen Reihenfolge sind wie die linken Klammern in der erfassenden Gruppe. Dies ist
          normalerweise einfach die Reihenfolge der erfassenden Gruppen selbst. Dies
          wird wichtig, wenn erfassende Gruppen verschachtelt sind. Übereinstimmungen werden
          über den Index der Elemente des Ergebnisses zugegriffen (<code
            >[1], …, [n]</code
          >) oder über die vordefinierten Eigenschaften des <code>RegExp</code>-Objekts
          (<code>$1, …, $9</code>).
        </p>
        <p>
          Erfassen von Gruppen hat eine Leistungseinbuße. Wenn Sie den
          erfassten Unterstring nicht erneut abrufen müssen, bevorzugen Sie nicht-erfassende Klammern
          (siehe unten).
        </p>
        <p>
          <code
            ><a
              href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/match"
              >String.prototype.match()</a
            ></code
          >
          wird Gruppen nicht zurückgeben, wenn das <code>/.../g</code> Flag gesetzt ist. Sie können jedoch
          trotzdem
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group"><strong>Benannte erfassende Gruppe:</strong></a>
          Passt zu "x" und speichert es in der
          "groups"-Eigenschaft der zurückgegebenen Übereinstimmungen unter dem angegebenen Namen
          durch <code>&#x3C;Name></code>. Die spitzen Klammern (<code>&#x3C;</code>
          und <code>></code>) sind für die Gruppennamen erforderlich.
        </p>
        <p>
          Zum Beispiel, um die US-Vorwahl aus einer Telefonnummer
          zu extrahieren, könnten wir <code>/\((?&#x3C;area>\d\d\d)\)/</code> verwenden. Die
          resultierende Zahl würde unter <code>matches.groups.area</code> erscheinen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>Nicht-erfassende Gruppe:</strong></a>
          Passt zu "x", merkt sich aber den
          Match nicht. Die übereinstimmende Teilzeichenfolge kann nicht aus dem resultierenden
          Array der Elemente zurückgerufen werden (<code>[1], …, [n]</code>) oder aus den vordefinierten
          Eigenschaften des <code>RegExp</code>-Objekts (<code>$1, …, $9</code>).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier"><strong>Modifier:</strong></a>
          Aktiviert oder deaktiviert die angegebenen Flags nur für das eingeschlossene Muster. Nur die <code>i</code>, <code>m</code>, und <code>s</code> Flags können in einem Modifier verwendet werden.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\<em>n</em></code>
      </td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference"><strong>Rückbezug:</strong></a>
          Wo "n" eine positive Ganzzahl ist. Passt dieselbe Teilzeichenfolge, die von
          der n-ten erfassenden Gruppe im regulären Ausdruck
          (zählend von links nach rechts) erfasst wurde. Zum Beispiel,
          <code>/apple(,)\sorange\1/</code> passt zu "apple, orange," in "apple,
          orange, cherry, peach".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>Benannter Rückbezug:</strong></a>
          Ein Rückbezug auf die letzte übereinstimmende Teilzeichenfolge der
          <strong>Benannten erfassenden Gruppe</strong> festgelegt durch
          <code>&#x3C;Name></code>.
        </p>
        <p>
          Zum Beispiel,
          <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> passt zu "Sir,
          yes Sir" in "Do you copy? Sir, yes Sir!".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>\k</code> wird hier wörtlich verwendet, um
            den Beginn eines Rückbezugs auf eine benannte erfassende Gruppe anzuzeigen.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Quantifizierer

[Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) geben die Anzahl von Zeichen oder Ausdrücken an, die abgeglichen werden sollen.

> [!NOTE]
> Im Folgenden bezieht sich _Item_ nicht nur auf einzelne Zeichen, sondern umfasst auch [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) und [Gruppen und Rückbezüge](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).

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
          Passt das vorhergehende Element "x" 0 oder mehr Mal. Zum Beispiel,
          <code>/bo*/</code> passt zu "boooo" in "A ghost booooed" und "b" in "A
          bird warbled", aber zu nichts in "A goat grunted".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          Passt das vorhergehende Element "x" 1 oder mehr Mal. Entspricht
          <code>{1,}</code>. Zum Beispiel passt <code>/a+/</code> zu der "a" in
          "candy" und allen "a"'s in "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          Passt das vorhergehende Element "x" 0 oder 1 Mal. Zum Beispiel,
          <code>/e?le?/</code> passt zu "el" in "angel" und "le" in
          "angle."
        </p>
        <p>
          Wenn direkt nach einem der Quantifizierer <code>*</code>,
          <code>+</code>, <code>?</code>, oder <code>{}</code> verwendet, macht es den
          Quantifizierer nicht-gierig (passt die minimale Anzahl von Malen), im Gegensatz zu dem Standard, der gierig ist (passt die maximale Anzahl von Malen).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative Ganzzahl ist, passt genau zu "n" Vorkommen des
          vorhergehenden Elements "x". Zum Beispiel passt <code>/a{2}/</code> nicht
          zur "a" in "candy", aber passt zu allen "a"'s in "caandy", und
          passt zu den ersten beiden "a"'s in "caaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative Ganzzahl ist, passt zu mindestens "n" Vorkommen des
          vorhergehenden Elements "x". Zum Beispiel passt <code>/a{2,}/</code> nicht
          zur "a" in "candy", aber passt zu allen "a"s in "caandy" und
          in "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <!-- cSpell:ignore cndy -->
        <p>
          Wo "n" und "m" nicht-negative Ganzzahlen sind und <code>m >= n</code>,
          passt zu mindestens "n" und höchstens "m" Vorkommen des vorhergehenden
          Elements "x". Zum Beispiel passt <code>/a{1,3}/</code> zu nichts in
          "cndy", zu der "a" in "candy", zu den beiden "a"'s in "caandy", und zu den ersten
          drei "a"'s in "caaaaaaandy". Beachten Sie, dass beim Anpassen von "caaaaaaandy",
          das Match "aaa" ist, obwohl die ursprüngliche Zeichenfolge mehr "a"s darin hatte.
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
          "gierig", was bedeutet, dass sie versuchen, so oft wie möglich
          zu passen. Das <code>?</code> Zeichen nach dem Quantifizierer macht den
          Quantifizierer "nicht-gierig": was bedeutet, dass es stoppt, sobald es die minimale Anzahl von Übereinstimmungen findet. Zum Beispiel, bei einer Zeichenfolge wie "some &#x3C;foo> &#x3C;bar>
          new &#x3C;/bar> &#x3C;/foo> thing":
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> passt zu "&#x3C;foo> &#x3C;bar> new
            &#x3C;/bar> &#x3C;/foo>"
          </li>
          <li><code>/&#x3C;.*?>/</code> passt zu "&#x3C;foo>"</li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Das Hinzufügen von <code>?</code> nach <code>{n}</code> ist syntaktisch gültig, aber praktisch nutzlos.
            Da <code>{n}</code> immer genau n Mal passt, verhält sich <code>x{n}?</code> genauso wie <code>x{n}</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>
