---
title: Kurzübersicht der regulären Ausdrücke
slug: Web/JavaScript/Guide/Regular_expressions/Cheatsheet
l10n:
  sourceCommit: 8f53af45fae665627a95ac50e177b15d0228b920
---

Diese Seite bietet eine umfassende Kurzübersicht über alle Möglichkeiten der `RegExp`-Syntax, indem die Inhalte der Artikel im `RegExp`-Leitfaden zusammengefasst werden. Wenn Sie mehr Informationen zu einem bestimmten Thema benötigen, folgen Sie bitte dem Link in der entsprechenden Überschrift, um den vollständigen Artikel zu lesen, oder besuchen Sie [den Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions).

## Zeichenklassen

[Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) unterscheiden Arten von Zeichen, beispielsweise die Unterscheidung zwischen Buchstaben und Ziffern.

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
          Passt auf eines der eingeschlossenen Zeichen. Sie können einen Bereich von Zeichen angeben, indem Sie einen Bindestrich verwenden, aber wenn der Bindestrich als erstes oder letztes Zeichen in den eckigen Klammern erscheint, wird er als literale Zeichen angesehen, das in die Zeichenklasse als normales Zeichen aufgenommen wird.
        </p>
        <p>
          Zum Beispiel ist <code>[abcd]</code> das gleiche wie <code>[a-d]</code>.
          Sie passen auf das "b" in "brisket" und das "c" in "chop".
        </p>
        <p>
          Zum Beispiel, <code>[abcd-]</code> und <code>[-abcd]</code> passen auf
          das "b" in "brisket", das "c" in "chop", und das "-" (Bindestrich) in
          "non-profit".
        </p>
        <p>
          Zum Beispiel, <code>[\w-]</code> ist das gleiche wie
          <code>[A-Za-z0-9_-]</code>. Sie passen beide auf das "b" in "brisket", das
          "c" in "chop", und das "n" in "non-profit".
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
          Passt auf alles, was nicht in den eckigen Klammern eingeschlossen ist. Sie können einen Bereich von Zeichen angeben, indem Sie einen Bindestrich verwenden, aber wenn der Bindestrich als
          erstes Zeichen nach dem <code>^</code> oder als letztes Zeichen in den eckigen Klammern erscheint, wird er als
          literale Zeichen angesehen, das in die Zeichenklasse als normales Zeichen aufgenommen wird. Zum Beispiel, <code>[^abc]</code> ist das gleiche wie
          <code>[^a-c]</code>. Sie passen auf "o" in "bacon" und "h" in
          "chop".
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
          Passt auf jedes einzelne Zeichen <em>außer</em> Zeilenendzeichen:
          <code>\n</code>, <code>\r</code>, <code>\u2028</code> oder
          <code>\u2029</code>. Zum Beispiel passt <code>/.y/</code> auf "my" und
          "ay", aber nicht auf "yes", in "yes make my day", da es kein Zeichen vor "y" in "yes" gibt. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> (s)-Flag aktiviert ist, passt es auch auf Zeilenendzeichen.
          Innerhalb einer Zeichenklasse verliert der Punkt seine spezielle Bedeutung und
          passt auf einen literalen Punkt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Ziffernzeichenklassen-Escape:</strong></a>
          Passt auf jede Ziffer (arabische Zahl). Entspricht <code>[0-9]</code>.
          Zum Beispiel passt <code>/\d/</code> oder <code>/[0-9]/</code> auf "2" in
          "B2 ist die Suite-Nummer".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Ziffernzeichenklassen-Escape:</strong></a>
          Passt auf jedes Zeichen, das keine Ziffer (arabische Zahl) ist. Entspricht
          <code>[^0-9]</code>. Zum Beispiel passt <code>/\D/</code> oder
          <code>/[^0-9]/</code> auf "B" in "B2 ist die Suite-Nummer".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Wortzeichenklassen-Escape:</strong></a>
          Passt auf jedes alphanumerische Zeichen des grundlegenden lateinischen Alphabets,
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Wortzeichenklassen-Escape:</strong></a>
          Passt auf jedes Zeichen, das kein Wortzeichen des grundlegenden
          lateinischen Alphabets ist. Entspricht <code>[^A-Za-z0-9_]</code>. Zum Beispiel,
          passt <code>/\W/</code> oder <code>/[^A-Za-z0-9_]/</code> auf "%" in "50%"
          und "É" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Whitespace-Zeichenklassen-Escape:</strong></a>
          Passt auf ein einzelnes Leerzeichen, einschließlich Leerraum, Tabulator, Formularvorschub, Zeilenumbruch und andere Unicode-Leerzeichen. Entspricht
          <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel, <code>/\s\w*/</code> passt auf " bar" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Whitespace-Zeichenklassen-Escape:</strong></a>
          Passt auf ein einzelnes Zeichen außer Leerzeichen. Entspricht
          <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel, <code>/\S\w*/</code> passt auf "foo" in "foo bar".
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
        Passt auf einen Rückschritt. Wenn Sie nach dem Wortgrenzen-Assertion
        (<code>\b</code>) suchen, siehe
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
          Passt auf ein Steuerzeichen mit Hilfe der
          <a href="https://en.wikipedia.org/wiki/Caret_notation"
            >Caret-Notation</a
          >, wobei "X" ein Buchstabe von A bis Z oder a bis z ist (entspricht den Codepunkten
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
        <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape"><strong>Hex-Escape:</strong></a>
        Passt auf das Zeichen mit dem Code <code><em>hh</em></code> (zwei
        hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>HHHH</em></code>
      </td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape"><strong>Unicode-Escape:</strong></a>
        Passt auf eine UTF-16 Code-Einheit mit dem Wert <code><em>HHHH</em></code> (vier hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u{<em>H…H</em>}</code>
      </td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape"><strong>Unicode-Codepunkt-Escape:</strong></a>
        Passt auf das Zeichen mit dem Unicode-Wert <code>U+<em>H…H</em></code> (1 bis 6 hexadezimale Ziffern).
        Nur gültig im <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode">unicode-bewussten Modus</a>.
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
          Passt auf ein Zeichen basierend auf seinen Unicode-Zeicheneigenschaften: zum Beispiel, Emoji-Zeichen oder japanische
          <em>Katakana</em>-Zeichen, oder chinesische/japanische Han/Kanji-Zeichen,
          usw.).
          Nur gültig im <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode">unicode-bewussten Modus</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Zeigt an, dass das folgende Zeichen speziell behandelt werden soll, oder
          "escaped" wird. Es verhält sich auf zwei Arten.
        </p>
        <ul>
          <li>
            Für Zeichen, die normalerweise wörtlich behandelt werden, zeigt an, dass
            das nächste Zeichen speziell ist und nicht wörtlich interpretiert werden soll.
            Zum Beispiel passt <code>/b/</code> auf das Zeichen "b". Indem
            ein Backslash vor "b" gesetzt wird, wird <code>/\b/</code>,
            das Zeichen wird speziell, um eine Wortgrenze zu bedeuten.
          </li>
          <li>
            Für Zeichen, die normalerweise speziell behandelt werden, zeigt an, dass
            das nächste Zeichen nicht speziell ist und wörtlich interpretiert werden soll.
            Zum Beispiel, "*" ist ein spezielles Zeichen, das bedeutet, dass 0 oder
            mehr Vorkommen des vorhergehenden Zeichens passen sollen; zum Beispiel
            bedeutet <code>/a*/</code>, dass 0 oder mehr "a's" passen. Um
            <code>*</code> wörtlich zu matchen, stellen Sie einen Backslash voran; zum Beispiel,
            <code>/a\*/</code> passt auf "a*".
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Um dieses Zeichen wörtlich zu matchen, escapen Sie es
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
          Passt auf entweder "x" oder "y". Jedes Element, das von einer Pipe (<code>|</code>) getrennt wird, wird als <em>Alternative</em> bezeichnet. Zum Beispiel,
          <code>/green|red/</code> passt auf "green" in "green apple" und "red" in
          "red apple".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Eine Disjunktion ist eine andere Möglichkeit, "eine Auswahlmenge" zu spezifizieren, aber es ist keine Zeichenklasse. Disjunktionen sind keine Atome — Sie müssen eine <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">Gruppe</a> verwenden, um sie Teil eines größeren Musters zu machen. <code>[abc]</code> ist funktional äquivalent zu <code>(?:a|b|c)</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Assertions

[Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) umfassen Grenzen, die den Anfang und das Ende von Zeilen und Wörtern anzeigen, und andere Muster, die auf irgendeine Weise anzeigen, dass ein Match möglich ist (einschließlich Look-Ahead, Look-Behind und bedingten Ausdrücken).

### Grenzen-basierte Assertions

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Eingabebeginn Assertion:</strong></a>
          Passt auf den Beginn der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m)-Flag aktiviert ist,
          passt es auch unmittelbar nach einem Zeilenumbruch. Zum Beispiel,
          <code>/^A/</code> passt nicht auf das "A" in "an A", aber es passt auf das
          erste "A" in "An A".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dieses Zeichen hat eine andere Bedeutung, wenn
            es am Anfang einer
            <a
              href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
              >Zeichenklasse</a
            >
            erscheint.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Eingabeende Assertion:</strong></a>
          Passt auf das Ende der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m)-Flag aktiviert ist, passt es auch
          unmittelbar vor einem Zeilenumbruch. Zum Beispiel,
          <code>/t$/</code> passt nicht auf das "t" in "eater", aber es passt auf
          das "t" in "eat".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\A</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion"><strong>Pufferbeginn Assertion:</strong></a> Passt auf den Beginn des gesamten Strings, unabhängig von der Anwesenheit des <code>m</code>-Flags.
          Nur gültig im <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode">unicode-bewussten Modus</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\z</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion"><strong>Pufferende Assertion:</strong></a> Passt auf das Ende des gesamten Strings, unabhängig von der Anwesenheit des <code>m</code>-Flags.
          Nur gültig im <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode">unicode-bewussten Modus</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\Z</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion"><strong>Pufferende Assertion mit optionalem Zeilenumbruch:</strong></a> Passt auf das Ende des gesamten Strings, erlaubt aber eine optionale abschließende Zeilenumbruchzeichenfolge (entweder ein <a href="/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators">Zeilenumbruch</a> oder ein <code>\r\n</code>-Sequenz).
          Nur gültig im <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode">unicode-bewussten Modus</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Wortgrenzen-Assertion:</strong></a>
          Passt auf eine Wortgrenze. Dies ist die Position, an der ein Wortzeichen
          nicht von einem anderen Wortzeichen gefolgt oder vorangegangen wird, wie zum Beispiel zwischen
          einem Buchstaben und einem Leerzeichen. Beachten Sie, dass eine gematchte Wortgrenze nicht
          Teil des Matches ist. Mit anderen Worten, die Länge einer gematchten Wortgrenze beträgt null.
        </p>
        <p>Beispiele:</p>
        <ul>
          <li><code>/\bm/</code> passt auf das "m" in "moon".</li>
          <li>
            <code>/oo\b/</code> passt nicht auf das "oo" in "moon", weil "oo"
            von "n" gefolgt wird, welches ein Wortzeichen ist.
          </li>
          <li>
            <code>/oon\b/</code> passt auf das "oon" in "moon", weil "oon" das
            Ende des Strings ist und somit nicht von einem Wortzeichen gefolgt wird.
          </li>
          <li>
            <code>/\w\b\w/</code> wird nie etwas matchen, da ein Wortzeichen
            nie sowohl von einem Nicht-Wort- als auch von einem Wortzeichen
            gefolgt sein kann.
          </li>
        </ul>
        <p>
          Um auf ein Rückschritt-Zeichen (<code>[\b]</code>) zu matchen, siehe
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
          Passt auf eine Nicht-Wortgrenze. Dies ist eine Position, an der das vorherige und
          nächste Zeichen den gleichen Typ haben: Entweder müssen beide Wörter sein, oder
          beide müssen Nicht-Wörter sein, zum Beispiel zwischen zwei Buchstaben oder zwischen zwei
          Leerzeichen. Der Anfang und das Ende eines Strings werden als Nicht-Wörter betrachtet.
          Genauso wie die gematchte Wortgrenze wird auch die gematchte Nicht-Wortgrenze
          nicht in das Match einbezogen. Zum Beispiel,
          <code>/\Bon/</code> passt auf "on" in "at noon", und
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
          Passt auf "x" nur, wenn "x"
          von "y" gefolgt wird. Zum Beispiel, <code>/Jack(?=Sprat)/</code> passt
          nur auf "Jack", wenn es von "Sprat" gefolgt wird.<br /><code
            >/Jack(?=Sprat|Frost)/</code
          >
          passt nur auf "Jack", wenn es von "Sprat" oder "Frost" gefolgt wird. Allerdings ist
          weder "Sprat" noch "Frost" Teil der Matchergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Negative Lookahead-Assertion:</strong></a>
          Passt auf "x" nur, wenn "x"
          nicht von "y" gefolgt wird. Zum Beispiel, <code>/\d+(?!\.)/</code> passt
          nur auf eine Zahl, wenn sie nicht von einem Dezimalpunkt gefolgt wird. <code
            >/\d+(?!\.)/.exec('3.141')</code
          >
          passt auf "141" aber nicht auf "3".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Lookbehind-Assertion:</strong></a>
          Passt auf "x" nur, wenn "x"
          von "y" vorausgegangen wird. Zum Beispiel,
          <code>/(?&#x3C;=Jack)Sprat/</code> passt nur auf "Sprat", wenn es von
          "Jack" vorausgegangen wird. <code>/(?&#x3C;=Jack|Tom)Sprat/</code> passt
          nur auf "Sprat", wenn es von "Jack" oder "Tom" vorausgegangen wird. Allerdings ist
          weder "Jack" noch "Tom" Teil der Matchergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Negative Lookbehind-Assertion:</strong></a>
          Passt auf "x" nur, wenn
          "x" nicht von "y" vorausgegangen wird. Zum Beispiel,
          <code>/(?&#x3C;!-)\d+/</code> passt nur auf eine Zahl, wenn sie nicht
          von einem Minuszeichen vorausgegangen wird. <code>/(?&#x3C;!-)\d+/.exec('3')</code>
          passt auf "3". <code>/(?&#x3C;!-)\d+/.exec('-3')</code> findet kein
          Match, weil die Zahl von dem Minuszeichen vorausgegangen wird.
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group"><strong>Capturing-Gruppe:</strong></a>
          Passt auf <code><em>x</em></code> und
          merkt sich das Match. Zum Beispiel passt <code>/(foo)/</code> und
          merkt sich "foo" in "foo bar".
        </p>
        <p>
          Ein regulärer Ausdruck kann mehrere Capturing-Gruppen haben. In den Ergebnissen,
          Matches zu Capturing-Gruppen befinden sich typischerweise in einem Array, dessen Mitglieder in
          derselben Reihenfolge sind wie die linken Klammern in der Capturing-Gruppe. Dies ist
          normalerweise genau die Reihenfolge der Capturing-Gruppen selbst. Dies
          wird wichtig, wenn Capturing-Gruppen verschachtelt sind. Auf die Matches wird
          durch den Index der Elemente des Ergebnisses (<code
            >[1], …, [n]</code
          >) oder durch die vordefinierten <code>RegExp</code>-Objekt-Eigenschaften
          (<code>$1, …, $9</code>) zugegriffen.
        </p>
        <p>
          Capturing-Gruppen haben einen Leistungsverlust. Wenn Sie die
          gematchte Zeichenfolge nicht wieder abrufen müssen, bevorzugen Sie nicht-capturing Klammern
          (siehe unten).
        </p>
        <p>
          <code
            ><a
              href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/match"
              >String.prototype.match()</a
            ></code
          >
          gibt keine Gruppen zurück, wenn das <code>/.../g</code>-Flag gesetzt ist. Sie können jedoch immer noch
          <code
            ><a
              href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll"
              >String.prototype.matchAll()</a
            ></code
          >
          verwenden, um alle Matches zu erhalten.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;Name>x)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group"><strong>Benannte Capturing-Gruppe:</strong></a>
          Passt auf "x" und speichert es in
          der Gruppeigenschaft der zurückgegebenen Matches unter dem Namen, der durch <code>&#x3C;Name></code> angegeben ist. Die spitzen Klammern (<code>&#x3C;</code>
          und <code>></code>) sind für den Gruppennamen erforderlich.
        </p>
        <p>
          Zum Beispiel, um den US-Vorwahlbereich aus einer Telefonnummer zu extrahieren,
          könnten wir <code>/\((?&#x3C;area>\d\d\d)\)/</code> verwenden. Die
          resultierende Nummer würde unter <code>matches.groups.area</code> erscheinen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>Nicht-Capturing-Gruppe:</strong></a>
          Passt auf "x", merkt sich aber nicht
          das Match. Die gematchte Zeichenfolge kann nicht aus den Elementen des resultierenden
          Arrays (<code>[1], …, [n]</code>) oder den vordefinierten
          <code>RegExp</code>-Objekt-Eigenschaften (<code>$1, …, $9</code>)
          abgerufen werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier"><strong>Modifikator:</strong></a>
          Aktiviert oder deaktiviert die angegebenen Flags nur für das umschlossene Muster. Nur die <code>i</code>, <code>m</code>, und <code>s</code> Flags können in einem Modifikator verwendet werden.
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
          Wo "n" eine positive Ganzzahl ist. Passt auf die gleiche Zeichenfolge, die durch
          die n-te Capturing-Gruppe im regulären Ausdruck gematcht wurde
          (zählend die linken Klammern). Zum Beispiel,
          <code>/apple(,)\sorange\1/</code> passt auf "apple, orange," in "apple,
          orange, cherry, peach".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>Benannter Rückverweis:</strong></a>
          Ein Rückverweis auf die zuletzt gematchte Zeichenfolge der
          <strong>benannten Capturing-Gruppe</strong>, die durch
          <code>&#x3C;Name></code> angegeben ist.
        </p>
        <p>
          Zum Beispiel,
          <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> passt auf "Sir,
          yes Sir" in "Do you copy? Sir, yes Sir!".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>\k</code> wird hier wörtlich verwendet, um den Beginn eines Rückverweises auf eine benannte Capturing-Gruppe anzuzeigen.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Quantifizierer

[Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) geben an, wie viele Zeichen oder Ausdrücke gematcht werden sollen.

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
          Passt auf das vorherige Element "x" 0 oder mehr Mal. Zum Beispiel,
          <code>/bo*/</code> passt auf "boooo" in "A ghost booooed" und "b" in "A
          bird warbled", aber nichts in "A goat grunted".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          Passt auf das vorherige Element "x" 1 oder mehr Mal. Entspricht
          <code>{1,}</code>. Zum Beispiel, <code>/a+/</code> passt auf das "a" in
          "candy" und alle "a"'s in "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          Passt auf das vorherige Element "x" 0 oder 1 Mal. Zum Beispiel,
          <code>/e?le?/</code> passt auf das "el" in "angel" und das "le" in
          "angle."
        </p>
        <p>
          Wenn es unmittelbar nach einem der Quantifizierer <code>*</code>,
          <code>+</code>, <code>?</code>, oder <code>{}</code> verwendet wird, macht es den
          Quantifizierer nicht-gierig (das Minimum an Malen matchend), im Gegensatz zum Standard, der gierig ist (das Maximum an Malen matchend).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative Ganzzahl ist, passt exakt "n" Vorkommen des
          vorherigen Elements "x". Zum Beispiel passt <code>/a{2}/</code> nicht
          auf das "a" in "candy", aber es passt auf alle "a"'s in "caandy", und
          die ersten beiden "a"'s in "caaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative Ganzzahl ist, passt auf mindestens "n" Vorkommen des
          vorherigen Elements "x". Zum Beispiel, <code>/a{2,}/</code> passt nicht
          auf das "a" in "candy", aber es passt auf alle "a"'s in "caandy" und
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
          passt auf mindestens "n" und höchstens "m" Vorkommen des vorherigen
          Elements "x". Zum Beispiel passt <code>/a{1,3}/</code> auf nichts in
          "cndy", das "a" in "candy", die zwei "a"'s in "caandy", und die ersten
          drei "a"'s in "caaaaaaandy". Beachten Sie, dass beim Matchen von "caaaaaaandy",
          das Match "aaa" ist, obwohl der ursprüngliche String mehr "a"'s enthält.
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
          "gierig", was bedeutet, dass sie versuchen, so oft wie
          möglich zu passen. Das <code>?</code>-Zeichen nach dem Quantifizierer macht den
          Quantifizierer "nicht-gierig": das bedeutet, dass er aufhört, sobald er die minimale Anzahl von Matches findet. Zum Beispiel, bei einem String wie "some &#x3C;foo> &#x3C;bar>
          new &#x3C;/bar> &#x3C;/foo> thing":
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> wird auf "&#x3C;foo> &#x3C;bar> new
            &#x3C;/bar> &#x3C;/foo>" passen
          </li>
          <li><code>/&#x3C;.*?>/</code> wird auf "&#x3C;foo>" passen</li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Das Hinzufügen von <code>?</code> nach <code>{n}</code> ist syntaktisch gültig, aber praktisch nutzlos.
            Da <code>{n}</code> immer genau n mal passt, verhält sich <code>x{n}?</code> genauso wie <code>x{n}</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>
