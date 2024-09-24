---
title: Übersicht der Syntax für reguläre Ausdrücke
slug: Web/JavaScript/Guide/Regular_expressions/Cheatsheet
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}}

Diese Seite bietet eine umfassende Übersicht über alle Möglichkeiten der `RegExp`-Syntax, indem sie den Inhalt der Artikel im `RegExp`-Leitfaden zusammenfasst. Wenn Sie mehr Informationen zu einem bestimmten Thema benötigen, folgen Sie bitte dem Link in der entsprechenden Überschrift, um den vollständigen Artikel zu lesen, oder gehen Sie zum [Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions).

## Zeichengruppen

[Zeichengruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) unterscheiden zwischen verschiedenen Arten von Zeichen, wie z.B. zwischen Buchstaben und Ziffern.

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class"><strong>Zeichengruppe:</strong></a>
          Übereinstimmung mit einem der eingeschlossenen Zeichen. Sie können einen Bereich von Zeichen durch einen Bindestrich angeben. Wenn der Bindestrich jedoch als erstes oder letztes Zeichen innerhalb der eckigen Klammern erscheint, wird er als literaler Bindestrich behandelt, der in die Zeichengruppe als normales Zeichen aufgenommen wird.
        </p>
        <p>
          Zum Beispiel ist <code>[abcd]</code> dasselbe wie <code>[a-d]</code>.
          Sie stimmen mit dem "b" in "brisket" und dem "c" in "chop" überein.
        </p>
        <p>
          Zum Beispiel, <code>[abcd-]</code> und <code>[-abcd]</code> stimmen mit
          dem "b" in "brisket", dem "c" in "chop" und dem "-" (Bindestrich) in
          "non-profit" überein.
        </p>
        <p>
          Zum Beispiel ist <code>[\w-]</code> dasselbe wie
          <code>[A-Za-z0-9_-]</code>. Beide stimmen überein mit dem "b" in "brisket",
          dem "c" in "chop" und dem "n" in "non-profit".
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class"><strong>Negierte Zeichengruppe:</strong></a>
          Übereinstimmung mit allem, was nicht in den eckigen Klammern eingeschlossen ist. Sie können einen Bereich von Zeichen durch einen Bindestrich angeben, aber wenn der Bindestrich als erstes Zeichen nach dem <code>^</code> oder als letztes Zeichen in den eckigen Klammern erscheint, wird er als ein literaler Bindestrich behandelt, der in die Zeichengruppe als normales Zeichen aufgenommen wird. Zum Beispiel, <code>[^abc]</code> ist dasselbe wie
          <code>[^a-c]</code>. Sie stimmen anfangs mit dem "o" in "bacon" und "h" in
          "chop" überein.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Das ^ Zeichen kann auch den
            <a
              href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
              >Anfang der Eingabe</a
            > angeben.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>.</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard"><strong>Wildcard (Platzhalter):</strong></a>
          Übereinstimmung mit jedem einzelnen Zeichen, <em>außer</em> Zeilenumbrüchen:
          <code>\n</code>, <code>\r</code>, <code>\u2028</code> oder
          <code>\u2029</code>. Zum Beispiel, <code>/.y/</code> stimmt mit "my" und
          "ay" überein, aber nicht mit "yes" in "yes make my day", da vor "y" in "yes" kein Zeichen steht. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> (s) Flag aktiviert ist, werden auch Zeilenumbrüche erfasst.
          Innerhalb einer Zeichengruppe verliert der Punkt seine besondere Bedeutung und
          entspricht einem literal Punkt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Ziffern-Zeichengruppe:</strong></a>
          Übereinstimmung mit jeder Ziffer (arabische Zahl). Entspricht <code>[0-9]</code>.
          Zum Beispiel, <code>/\d/</code> oder <code>/[0-9]/</code> stimmt mit "2" in
          "B2 is the suite number" überein.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Ziffern-Zeichengruppe:</strong></a>
          Übereinstimmung mit jedem Zeichen, das keine Ziffer (arabische Zahl) ist. Entspricht
          <code>[^0-9]</code>. Zum Beispiel, <code>/\D/</code> oder
          <code>/[^0-9]/</code> stimmt mit "B" in "B2 is the suite number" überein.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Wort-Zeichengruppe:</strong></a>
          Übereinstimmung mit jedem alphanumerischen Zeichen aus dem lateinischen Alphabet,
          einschließlich des Unterstrichs. Entspricht <code>[A-Za-z0-9_]</code>. Zum
          Beispiel, <code>/\w/</code> stimmt mit "a" in "apple", "5" in "$5.28", "3"
          in "3D" und "m" in "Émanuel" überein.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Wort-Zeichengruppe:</strong></a>
          Übereinstimmung mit jedem Zeichen, das kein Wortzeichen aus dem lateinischen Alphabet ist. Entspricht <code>[^A-Za-z0-9_]</code>. Zum Beispiel,
          <code>/\W/</code> oder <code>/[^A-Za-z0-9_]/</code> stimmt mit "%" in "50%"
          und "É" in "Émanuel" überein.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Weißraum-Zeichengruppe:</strong></a>
          Übereinstimmung mit einem einzelnen Leerzeichen, einschließlich Leerraum, Tabulator, Formularvorschub, Zeilenumbruch und anderen Unicode-Leerzeichen. Entspricht
          <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel, <code>/\s\w*/</code> stimmt mit " bar" in "foo bar" überein.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Weißraum-Zeichengruppe:</strong></a>
          Übereinstimmung mit einem einzigen Zeichen, das kein Leerzeichen ist. Entspricht
          <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel, <code>/\S\w*/</code> stimmt mit "foo" in "foo bar" überein.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\t</code></td>
      <td>Übereinstimmung mit einem horizontalen Tabulator.</td>
    </tr>
    <tr>
      <td><code>\r</code></td>
      <td>Übereinstimmung mit einem Wagenrücklauf.</td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>Übereinstimmung mit einem Zeilenumbruch.</td>
    </tr>
    <tr>
      <td><code>\v</code></td>
      <td>Übereinstimmung mit einem vertikalen Tabulator.</td>
    </tr>
    <tr>
      <td><code>\f</code></td>
      <td>Übereinstimmung mit einem Form Feed.</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Übereinstimmung mit einem Rückschritt. Wenn Sie eine Wortgrenzen-Aussage
        (<code>\b</code>) suchen, siehe
        <a
          href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
          >Aussagen</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>\0</code></td>
      <td>Übereinstimmung mit einem NUL-Zeichen. Folgen Sie dies nicht unmittelbar mit einer weiteren Ziffer.</td>
    </tr>
    <tr>
      <td>
        <code>\c<em>X</em></code>
      </td>
      <td>
        <p>
          Übereinstimmung mit einem Steuerzeichen unter Verwendung der
          <a href="https://en.wikipedia.org/wiki/Caret_notation"
            >Caret-Notation</a
          >, bei der "X" ein Buchstabe von A–Z ist (entsprechend den Codepunkten
          <code>U+0001</code> bis <code>U+001A</code>). Zum Beispiel,
          <code>/\cM\cJ/</code> stimmt mit "\r\n" überein.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        Übereinstimmung mit dem Zeichen mit dem Code <code><em>hh</em></code> (zwei
        hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        Übereinstimmung mit einer UTF-16-Codeeinheit mit dem Wert
        <code><em>hhhh</em></code> (vier hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>{hhhh}</em> oder <em>\u{hhhhh}</em></code>
      </td>
      <td>
        (Nur wenn das <code>u</code>-Flag gesetzt ist.) Übereinstimmung mit dem Zeichen mit
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape"><strong>Unicode-Zeichengruppe:</strong></a>
          Übereinstimmung mit einem Zeichen basierend auf seinen Unicode-Zeicheneigenschaften: zum Beispiel Emoji-Zeichen, japanische
          <em>Katakana</em>-Zeichen, chinesische/japanische Han/Kanji-Zeichen,
          usw.).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Zeigt an, dass das folgende Zeichen speziell behandelt oder
          "escapet" werden soll. Es verhält sich auf eine von zwei Arten.
        </p>
        <ul>
          <li>
            Für Zeichen, die normalerweise wörtlich behandelt werden, zeigt es an, dass
            das nächste Zeichen speziell ist und nicht wörtlich interpretiert werden soll.
            Zum Beispiel, <code>/b/</code> stimmt mit dem Zeichen "b" überein. Wenn Sie einen
            Rückschritt in "b" setzen, indem Sie <code>/\b/</code> verwenden, wird das
            Zeichen speziell, um eine Wortgrenze zu bedeuten.
          </li>
          <li>
            Für Zeichen, die normalerweise speziell behandelt werden, zeigt es an, dass
            das nächste Zeichen nicht speziell ist und wörtlich interpretiert werden soll.
            Zum Beispiel ist "*" ein besonderes Zeichen, das bedeutet, dass 0 oder
            mehr Vorkommen des vorangehenden Zeichens übereinstimmen sollen; zum
            Beispiel, <code>/a*/</code> bedeutet, 0 oder mehr "a"s zu finden. Um
            <code>*</code> wörtlich zu erfassen, setzen Sie einen Rückschritt davor; zum
            Beispiel, <code>/a\*/</code> stimmt mit "a*" überein.
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Um dieses Zeichen wörtlich zu erfassen, escapen Sie es
            mit sich selbst. Anders ausgedrückt, um <code>\</code> zu suchen, verwenden Sie
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
          Übereinstimmung mit entweder "x" oder "y". Jede Komponente, getrennt von einem Pipe-Zeichen (<code>|</code>), wird Alternative genannt. Zum Beispiel,
          <code>/green|red/</code> stimmt mit "green" in "green apple" und "red" in
          "red apple" überein.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Eine Disjunktion ist eine andere Möglichkeit, "eine Menge von Auswahlmöglichkeiten" anzugeben, aber sie ist keine Zeichengruppe. Disjunktionen sind keine Atome — Sie müssen eine <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">Gruppe</a> verwenden, um dies zu einem Teil eines größeren Musters zu machen. <code>[abc]</code> ist funktional äquivalent zu <code>(?:a|b|c)</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Aussagen

[Aussagen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) beinhalten Grenzen, die die Anfänge und Enden von Zeilen und Wörtern anzeigen, sowie andere Muster, die in gewisser Weise anzeigen, dass eine Übereinstimmung möglich ist (einschließlich Look-ahead, Look-behind und bedingten Ausdrücken).

### Grenztypen von Aussagen

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Anfangsgrenze der Eingabe-Aussage:</strong></a>
          Übereinstimmung mit dem Anfang der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag aktiviert ist,
          stimmt auch unmittelbar nach einem Zeilenumbruch-Zeichen überein. Zum Beispiel,
          <code>/^A/</code> stimmt nicht mit dem "A" in "an A", aber es stimmt mit dem
          ersten "A" in "An A" überein.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dieses Zeichen hat eine andere Bedeutung, wenn
            es am Anfang einer
            <a
              href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
              >Zeichengruppe</a
            > auftaucht.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Endgrenze der Eingabe-Aussage:</strong></a>
          Übereinstimmung mit dem Ende der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag aktiviert ist, stimmt auch
          unmittelbar vor einem Zeilenumbruch-Zeichen überein. Zum Beispiel,
          <code>/t$/</code> stimmt nicht mit dem "t" in "eater", aber es stimmt in "eat"
          überein.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Wortgrenzen-Aussage:</strong></a>
          Übereinstimmung mit einer Wortgrenze. Dies ist die Position, an der ein Wortzeichen
          nicht von einem anderen Wortzeichen gefolgt oder vorausgegangen wird, z.B. zwischen
          einem Buchstaben und einem Leerzeichen. Beachten Sie, dass eine übereinstimmende Wortgrenze nicht
          in der Übereinstimmung enthalten ist. Mit anderen Worten, die Länge einer übereinstimmenden Wortgrenze ist null.
        </p>
        <p>Beispiele:</p>
        <ul>
          <li><code>/\bm/</code> stimmt mit dem "m" in "moon".</li>
          <li>
            <code>/oo\b/</code> stimmt nicht mit dem "oo" in "moon" überein, weil "oo"
            von "n" gefolgt ist, das ein Wortzeichen ist.
          </li>
          <li>
            <code>/oon\b/</code> stimmt mit dem "oon" in "moon" überein, weil "oon" das
            Ende des Strings ist und somit nicht von einem Wortzeichen gefolgt wird.
          </li>
          <li>
            <code>/\w\b\w/</code> stimmt niemals mit irgendetwas überein, weil ein Wortzeichen niemals sowohl von einem Nicht-Wort als auch von einem Wortzeichen gefolgt sein kann.
          </li>
        </ul>
        <p>
          Um ein Rückschritt-Zeichen (<code>[\b]</code>) zu erfassen, siehe
          <a
            href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
            >Zeichengruppen</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\B</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Nicht-Wortgrenzen-Aussage:</strong></a>
          Übereinstimmung mit einer Nicht-Wortgrenze. Dies ist eine Position, an der das vorherige und das
          nächste Zeichen vom gleichen Typ sind: Entweder müssen beide Wörter oder beide Nicht-Wörter sein, zum Beispiel zwischen zwei Buchstaben oder zwischen zwei
          Leerzeichen. Der Anfang und das Ende eines Strings werden als Nicht-Wörter betrachtet.
          Ebenso wie die übereinstimmende Wortgrenze, die übereinstimmende Nicht-Wortgrenze auch nicht in der Übereinstimmung enthalten. Zum Beispiel,
          <code>/\Bon/</code> stimmt mit "on" in "at noon", und
          <code>/ye\B/</code> stimmt mit "ye" in "possibly yesterday".
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Andere Aussagen

> [!NOTE]
> Das `?` Zeichen kann auch als Quantor verwendet werden.

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Lookahead-Aussage:</strong></a>
          Übereinstimmung mit "x" nur, wenn "x"
          von "y" gefolgt wird. Zum Beispiel, <code>/Jack(?=Sprat)/</code> stimmt
          mit "Jack" nur dann überein, wenn es von "Sprat" gefolgt wird.<br /><code
            >/Jack(?=Sprat|Frost)/</code
          >
          stimmt mit "Jack" nur dann überein, wenn es von "Sprat" oder "Frost" gefolgt wird. Jedoch sind
          weder "Sprat" noch "Frost" Teil der Übereinmachung.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Negative Lookahead-Aussage:</strong></a>
          Übereinstimmung mit "x" nur, wenn
          "x" nicht von "y" gefolgt wird. Zum Beispiel, <code>/\d+(?!\.)/</code> stimmt
          mit einer Zahl nur dann überein, wenn sie nicht von einem Dezimalpunkt gefolgt wird. <code
            >/\d+(?!\.)/.exec('3.141')</code
          >
          stimmt mit "141" überein, aber nicht mit "3".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Lookbehind-Aussage:</strong></a>
          Übereinstimmung mit "x" nur, wenn "x"
          von "y" vorangegangen wird. Zum Beispiel,
          <code>/(?&#x3C;=Jack)Sprat/</code> stimmt mit "Sprat" nur dann überein, wenn es
          von "Jack" vorangegangen wird. <code>/(?&#x3C;=Jack|Tom)Sprat/</code> stimmt
          mit "Sprat" nur dann überein, wenn es von "Jack" oder "Tom" vorangegangen wird. Jedoch
          sind weder "Jack" noch "Tom" Teil der Übereinmachung.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Negative Lookbehind-Aussage:</strong></a>
          Übereinstimmung mit "x" nur, wenn
          "x" nicht von "y" vorangegangen wird. Zum Beispiel,
          <code>/(?&#x3C;!-)\d+/</code> stimmt mit einer Zahl nur dann überein, wenn sie nicht
          von einem Minuszeichen vorangegangen wird. <code>/(?&#x3C;!-)\d+/.exec('3')</code>
          stimmt mit "3" überein. <code>/(?&#x3C;!-)\d+/.exec('-3')</code> findet keine
          Übereinmachung, weil die Zahl von dem Minuszeichen vorangegangen wird.
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group"><strong>Erfassende Gruppe:</strong></a>
          Übereinstimmung mit <code><em>x</em></code> und
          merkt sich die Übereinstimmung. Zum Beispiel, <code>/(foo)/</code> stimmt mit
          und merkt sich "foo" in "foo bar".
        </p>
        <p>
          Ein regulärer Ausdruck kann mehrere erfassende Gruppen haben. In Ergebnisse,
          Übereinstimmungen mit erfassenden Gruppen sind typischerweise in einem Array, dessen Mitglieder
          in derselben Reihenfolge wie die linken Klammern in der erfassenden Gruppe sind. Dies ist
          normalerweise einfach die Reihenfolge der erfassenden Gruppen selbst. Dies
          wird wichtig, wenn erfassende Gruppen geschachtelt sind. Übereinstimmungen werden
          mit dem Index der Elemente des Ergebnisses (<code
            >[1], …, [n]</code
          >) oder den vordefinierten <code>RegExp</code>-Objekteigenschaften
          (<code>$1, …, $9</code>) abgerufen.
        </p>
        <p>
          Erfassende Gruppen haben einen Leistungseinbußen. Wenn Sie den
          erfassten Teilstring nicht benötigen, um abgerufen zu werden, sollten Sie nicht-erfassende Klammern
          bevorzugen (siehe unten).
        </p>
        <p>
          <code
            ><a
              href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/match"
              >String.prototype.match()</a
            ></code
          >
          wird keine Gruppen zurückgeben, wenn das <code>/.../g</code>-Flag gesetzt ist. Sie können jedoch
          immer noch
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group"><strong>Erfassende Gruppe mit Namen:</strong></a>
          Übereinstimmung mit "x" und speichert es
          in der Groups-Eigenschaft der zurückgegebenen Übereinstimmungen unter dem durch <code>&#x3C;Name></code> angegebenen Namen. Die
          spitzen Klammern (<code>&#x3C;</code> und <code>></code>) sind für den Gruppennamen erforderlich.
        </p>
        <p>
          Zum Beispiel könnten wir, um die Vorwahl der Vereinigten Staaten aus einer Telefonnummer
          zu extrahieren, <code>/\((?&#x3C;area>\d\d\d)\)/</code> verwenden. Die
          resultierende Zahl würde unter <code>matches.groups.area</code> erscheinen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>Nicht-erfassende Gruppe:</strong></a>
          Übereinstimmung mit "x", merkt sich jedoch
          nicht die Übereinstimmung. Der übereinstimmende Teilstring kann nicht aus dem resultierenden
          Array's Elementen abgerufen werden (<code>[1], …, [n]</code>) oder aus den vordefinierten
          <code>RegExp</code>-Objekteigenschaften (<code>$1, …, $9</code>) abgerufen werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?:<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier"><strong>Modifikator:</strong></a>
          Aktiviert oder deaktiviert die angegebenen Flags nur für das eingeschlossene Muster. Nur die <code>i</code>, <code>m</code> und <code>s</code> Flags können in einem Modifikator verwendet werden.
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
          Wo "n" eine positive Ganzzahl ist. Übereinstimmung mit dem gleichen Teilstring, der von der n-ten erfassenden Gruppe im regulären Ausdruck
          übereinstimmt (zählend linke Klammern). Zum Beispiel,
          <code>/apple(,)\sorange\1/</code> stimmt mit "apple, orange," in "apple,
          orange, cherry, peach" überein.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>Rückverweis auf eine Benannte Gruppe:</strong></a>
          Ein Rückverweis auf den letzten Teilstring, der mit der
          <strong>benannten erfassenden Gruppe</strong> übereinstimmt, die durch
          <code>&#x3C;Name></code> angegeben wurde.
        </p>
        <p>
          Zum Beispiel,
          <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> stimmt mit "Sir,
          yes Sir" in "Do you copy? Sir, yes Sir!" überein.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>\k</code> wird hier wörtlich verwendet, um
            den Beginn eines Rückverweises auf eine Benannte Gruppe anzuzeigen.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Quantoren

[Quantoren](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) geben die Anzahl von Zeichen oder Ausdrücken an, die übereinstimmen sollen.

> [!NOTE]
> Im Folgenden bezieht sich _item_ nicht nur auf einzelne Zeichen, sondern umfasst auch [Zeichengruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) und [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).

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
          Übereinstimmung mit dem vorangehenden Element "x" nullmal oder mehr. Zum Beispiel,
          <code>/bo*/</code> stimmt mit "boooo" in "A ghost booooed" und "b" in "A
          bird warbled" überein, aber nichts in "A goat grunted".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          Übereinstimmung mit dem vorangehenden Element "x" einmal oder mehr. Entspricht
          <code>{1,}</code>. Zum Beispiel, <code>/a+/</code> stimmt mit dem "a" in
          "candy" und allen "a"s in "caaaaaaandy" überein.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          Übereinstimmung mit dem vorangehenden Element "x" nullmal oder einmal. Zum Beispiel,
          <code>/e?le?/</code> stimmt mit dem "el" in "angel" und dem "le" in
          "angle." überein.
        </p>
        <p>
          Wenn es unmittelbar nach einem der Quantoren <code>*</code>,
          <code>+</code>, <code>?</code> oder <code>{}</code> verwendet wird, macht es den
          Quantor nicht-gierig (die minimale Anzahl Male erfassend), im Gegensatz zu dem Standard,
          der gierig ist (die maximale Anzahl Male erfassend).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative Ganzzahl ist, stimmt mit genau "n" Vorkommen des
          vorangehenden Elements "x". Zum Beispiel, <code>/a{2}/</code> stimmt nicht mit
          dem "a" in "candy", aber es stimmt mit allen "a"s in "caandy" und
          den ersten zwei "a"s in "caaandy" überein.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative Ganzzahl ist, stimmt mit mindestens "n" Vorkommen des
          vorangehenden Elements "x". Zum Beispiel, <code>/a{2,}/</code> stimmt nicht
          mit dem "a" in "candy", aber es stimmt mit allen a's in "caandy" und
          in "caaaaaaandy" überein.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <p>
          Wo "n" und "m" nicht-negative Ganzzahlen sind und <code>m >= n</code>,
          stimmt mit mindestens "n" und höchstens "m" Vorkommen des vorangehenden
          Elements "x". Zum Beispiel, <code>/a{1,3}/</code> stimmt mit nichts in
          "cndy" überein, mit dem "a" in "candy", den zwei "a"s in "caandy" und den ersten
          drei "a"s in "caaaaaaandy". Beachten Sie, dass beim Übereinstimmen mit "caaaaaaandy",
          die Übereinstimmung "aaa" ist, obwohl der ursprüngliche String mehr "a"s hatte.
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
          Standardmäßig sind Quantoren wie <code>*</code> und <code>+</code>
          "gierig", das heißt, sie versuchen, so viel von dem String wie möglich zu erfassen. Das <code>?</code> Zeichen nach dem Quantor macht den
          Quantor "nicht-gierig": das bedeutet, dass er aufhört, sobald er eine Übereinstimmung findet. Zum Beispiel, gegeben einen String wie "some &#x3C;foo> &#x3C;bar>
          new &#x3C;/bar> &#x3C;/foo> thing":
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> stimmt mit "&#x3C;foo> &#x3C;bar> new
            &#x3C;/bar> &#x3C;/foo>"
          </li>
          <li><code>/&#x3C;.*?>/</code> stimmt mit "&#x3C;foo>"</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
