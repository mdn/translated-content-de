---
title: Cheatsheet der regulären Ausdruckssyntax
slug: Web/JavaScript/Guide/Regular_expressions/Cheatsheet
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}}

Diese Seite bietet einen Gesamtüberblick über alle Möglichkeiten der `RegExp`-Syntax, indem sie den Inhalt der Artikel im `RegExp`-Leitfaden zusammenfasst. Wenn Sie mehr Informationen zu einem bestimmten Thema benötigen, folgen Sie bitte dem Link in der entsprechenden Überschrift, um den vollständigen Artikel zu lesen, oder gehen Sie direkt zu [dem Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions).

## Zeichenklassen

[Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) unterscheiden Arten von Zeichen, wie zum Beispiel Buchstaben und Ziffern.

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
          Passt zu jedem der eingeschlossenen Zeichen. Sie können
          einen Bereich von Zeichen mit einem Bindestrich angeben, aber wenn der Bindestrich als erstes oder letztes Zeichen in den eckigen Klammern erscheint,
          wird er als literaler Bindestrich betrachtet und als normales Zeichen in die Zeichenklasse aufgenommen.
        </p>
        <p>
          Zum Beispiel ist <code>[abcd]</code> dasselbe wie <code>[a-d]</code>.
          Sie passen zum "b" in "Brisket" und zum "c" in "Chop".
        </p>
        <p>
          Zum Beispiel passen <code>[abcd-]</code> und <code>[-abcd]</code> zum
          "b" in "Brisket", zum "c" in "Chop" und zum "-" (Bindestrich) in
          "non-profit".
        </p>
        <p>
          Zum Beispiel ist <code>[\w-]</code> dasselbe wie
          <code>[A-Za-z0-9_-]</code>. Beide passen zum "b" in "Brisket", zum
          "c" in "Chop" und zum "n" in "non-profit".
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
          Passt zu allem, was nicht in den eckigen Klammern enthalten ist. Sie können einen
          Bereich von Zeichen mit einem Bindestrich angeben, aber wenn der Bindestrich als
          erstes Zeichen nach dem <code>^</code> oder als letztes Zeichen in den eckigen Klammern erscheint, wird er als
          literaler Bindestrich betrachtet und als normales Zeichen in die Zeichenklasse aufgenommen. Zum Beispiel ist <code>[^abc]</code> dasselbe wie
          <code>[^a-c]</code>. Sie passen zu Beginn zu "o" in "bacon" und "h" in
          "chop".
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
          Passt zu jedem einzelnen Zeichen <em>außer</em> Zeilenumbrüchen:
          <code>\n</code>, <code>\r</code>, <code>\u2028</code> oder
          <code>\u2029</code>. Zum Beispiel passt <code>/.y/</code> zu "my" und
          "ay", aber nicht zu "yes" in "yes make my day", da es kein Zeichen vor "y" in "yes" gibt. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> (s) Flag eingestellt ist, werden auch Zeilenumbrüche erfasst.
          Innerhalb einer Zeichenklasse verliert der Punkt seine spezielle Bedeutung und
          passt zu einem literalen Punkt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Ziffern-Zeichenklasse Flucht:</strong></a>
          Passt zu jeder Ziffer (arabische Zahl). Entspricht <code>[0-9]</code>.
          Zum Beispiel passt <code>/\d/</code> oder <code>/[0-9]/</code> zu "2" in
          "B2 ist die Suitennummer".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Ziffern-Zeichenklasse Flucht:</strong></a>
          Passt zu jedem Zeichen, das keine Ziffer (arabische Zahl) ist. Entspricht
          <code>[^0-9]</code>. Zum Beispiel passt <code>/\D/</code> oder
          <code>/[^0-9]/</code> zu "B" in "B2 ist die Suitennummer".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Wortzeichen-Zeichenklasse Flucht:</strong></a>
          Passt zu jedem alphanumerischen Zeichen aus dem lateinischen Alphabet,
          einschließlich des Unterstrichs. Entspricht <code>[A-Za-z0-9_]</code>. Zum
          Beispiel passt <code>/\w/</code> zu "a" in "apple", "5" in "$5.28", "3"
          in "3D" und "m" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Wortzeichen-Zeichenklasse Flucht:</strong></a>
          Passt zu jedem Zeichen, das kein Wortzeichen aus dem lateinischen
          Alphabet ist. Entspricht <code>[^A-Za-z0-9_]</code>. Zum Beispiel,
          <code>/\W/</code> oder <code>/[^A-Za-z0-9_]/</code> passt zu "%" in "50%"
          und "É" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Leerzeichen-Zeichenklasse Flucht:</strong></a>
          Passt zu einem einzelnen Leerzeichen, einschließlich
          Leerzeichen, Tabulator, Formularvorschub, Zeilenumbruch und anderen Unicode-Leerräumen. Entspricht
          <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel, passt <code>/\s\w*/</code> zu " bar" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Leerzeichen-Zeichenklasse Flucht:</strong></a>
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
      <td>Passt zu einem Formularvorschub.</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Passt zu einem Rückschritt. Wenn Sie nach der Wortgrenzen-Bestätigung
        (<code>\b</code>) suchen, siehe
        <a
          href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
          >Aussagen</a
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
          Passt zu einem Steuerzeichen mit Hilfe der
          <a href="https://en.wikipedia.org/wiki/Caret_notation"
            >Caret-Notation</a
          >, wobei "X" ein Buchstabe von A–Z ist (entspricht den Codepunkten
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
        Passt zu dem Zeichen mit dem Code <code><em>hh</em></code> (zwei
        hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        Passt zu einer UTF-16-Code-Einheit mit dem Wert
        <code><em>hhhh</em></code> (vier hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>{hhhh}</em> or <em>\u{hhhhh}</em></code>
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape"><strong>Unicode-Zeichenklasse Flucht:</strong></a>
          Passt zu einem Zeichen basierend auf seinen Unicode-Zeicheneigenschaften: zum Beispiel Emoji-Zeichen oder japanische
          <em>katakana</em>-Zeichen oder chinesische/japanische Han/Kanji-Zeichen,
          usw.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Gibt an, dass das folgende Zeichen speziell behandelt oder
          "escaped" werden soll. Es verhält sich auf eine von zwei Arten.
        </p>
        <ul>
          <li>
            Für Zeichen, die normalerweise wörtlich behandelt werden, gibt an, dass
            das nächste Zeichen speziell ist und nicht wörtlich interpretiert werden soll.
            Zum Beispiel passt <code>/b/</code> zu dem Zeichen "b". Durch Setzen eines
            umgekehrten Schrägstrichs vor "b", also durch Verwendung von <code>/\b/</code>, wird das
            Zeichen zu einem speziellen Zeichen für eine Wortgrenze.
          </li>
          <li>
            Für Zeichen, die normalerweise speziell behandelt werden, gibt an, dass
            das nächste Zeichen nicht speziell ist und wörtlich interpretiert werden soll. Zum Beispiel ist "*" ein spezielles Zeichen, das bedeutet, dass 0 oder
            mehr Vorkommen des vorhergehenden Zeichens passen sollten; zum
            Beispiel bedeutet <code>/a*/</code>, dass 0 oder mehr "a"s passen sollen. Um
            <code>*</code> wörtlich zu nehmen, setzen Sie einen umgekehrten Schrägstrich davor; zum Beispiel,
            <code>/a\*/</code> passt zu "a*".
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Um dieses Zeichen wörtlich zu erfassen, entfliehen Sie es
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction"><strong>Oder-Verknüpfung:</strong></a>
          Passt entweder "x" oder "y". Jede Komponente, getrennt durch eine Pipe (<code>|</code>), wird als <em>Alternative</em> bezeichnet. Zum Beispiel,
          <code>/green|red/</code> passt zu "green" in "green apple" und "red" in
          "red apple".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Eine Oder-Verknüpfung ist eine andere Möglichkeit, "eine Menge an Optionen" anzugeben, jedoch ist sie keine Zeichenklasse. Oder-Verknüpfungen sind keine Atome — Sie
            müssen eine <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">Gruppe</a> verwenden, um sie Teil eines größeren Musters zu machen. <code>[abc]</code> ist funktional
            gleichwertig zu <code>(?:a|b|c)</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Assertions

[Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) umfassen Grenzen, die den Anfang und das Ende von Zeilen und Wörtern sowie andere Muster anzeigen, die auf irgendeine Weise anzeigen, dass ein Match möglich ist (einschließlich Look-Ahead, Look-Behind und bedingte Ausdrücke).

### Grenztyp Assertions

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Anfang der Eingabe Assertion:</strong></a>
          Passt zum Anfang der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag aktiviert ist,
          passt auch unmittelbar nach einem Zeilenumbruch-Zeichen. Zum Beispiel,
          <code>/^A/</code> passt nicht zum "A" in "an A", aber es passt zum
          ersten "A" in "An A".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dieses Zeichen hat eine andere Bedeutung, wenn
            es am Beginn einer
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Ende der Eingabe Assertion:</strong></a>
          Passt zum Ende der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag aktiviert ist, passt
          auch unmittelbar vor einem Zeilenumbruch-Zeichen. Zum Beispiel,
          <code>/t$/</code> passt nicht zur "t" in "eater", aber es passt in "eat".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Wortgrenze Assertion:</strong></a>
          Passt zu einer Wortgrenze. Dies ist die Stelle, an der ein Wortzeichen
          nicht von einem anderen Wortzeichen gefolgt oder vorangestellt wird, wie zwischen
          einem Buchstaben und einem Leerzeichen. Beachten Sie, dass eine erkannte Wortgrenze nicht
          im Match enthalten ist. Mit anderen Worten, die Länge einer erkannten Wortgrenze ist null.
        </p>
        <p>Beispiele:</p>
        <ul>
          <li><code>/\bm/</code> passt zum "m" in "moon".</li>
          <li>
            <code>/oo\b/</code> passt nicht zum "oo" in "moon", da "oo"
            von "n" gefolgt wird, das ein Wortzeichen ist.
          </li>
          <li>
            <code>/oon\b/</code> passt zum "oon" in "moon", da "oon" das
            Ende des Strings ist und daher nicht von einem Wortzeichen gefolgt wird.
          </li>
          <li>
            <code>/\w\b\w/</code> wird nie etwas matchen, da ein
            Wortzeichen nie sowohl von einem Nicht-Wortzeichen als auch von einem Wortzeichen gefolgt sein kann.
          </li>
        </ul>
        <p>
          Um ein Rückschrittzeichen (<code>[\b]</code>) zu erfassen, siehe
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Nicht-Wortgrenze Assertion:</strong></a>
          Passt zu einer Nicht-Wortgrenze. Dies ist eine Position, an der das vorherige und
          das nächste Zeichen vom gleichen Typ sind: Entweder müssen beide Wortzeichen oder
          beide Nicht-Wortzeichen sein, zum Beispiel zwischen zwei Buchstaben oder zwischen zwei
          Leerzeichen. Der Anfang und das Ende eines Strings werden als Nicht-Wortzeichen betrachtet.
          Genau wie bei der erkannten Wortgrenze ist auch die erkannte Nicht-Wortgrenze
          nicht im Match enthalten. Zum Beispiel,
          <code>/\Bon/</code> passt zu "on" in "at noon", und
          <code>/ye\B/</code> passt zu "ye" in "possibly yesterday".
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Andere Assertions

> [!NOTE]
> Das `?`-Zeichen kann auch als Quantor verwendet werden.

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Lookahead Assertion:</strong></a>
          Passt zu "x" nur, wenn "x"
          von "y" gefolgt ist. Zum Beispiel passt <code>/Jack(?=Sprat)/</code> zu
          "Jack" nur, wenn es von "Sprat" gefolgt wird.<br /><code
            >/Jack(?=Sprat|Frost)/</code
          >
          passt zu "Jack" nur, wenn es von "Sprat" oder "Frost" gefolgt wird. Weder
          "Sprat" noch "Frost" sind jedoch Teil der Matchergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Negative Lookahead Assertion:</strong></a>
          Passt zu "x" nur, wenn "x"
          nicht von "y" gefolgt wird. Zum Beispiel passt <code>/\d+(?!\.)/</code>
          nur zu einer Zahl, wenn sie nicht von einem Dezimalpunkt gefolgt wird. <code
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Lookbehind Assertion:</strong></a>
          Passt zu "x" nur, wenn "x"
          von "y" vorausgeht. Zum Beispiel,
          <code>/(?&#x3C;=Jack)Sprat/</code> passt zu "Sprat" nur, wenn es von
          "Jack" vorausgeht. <code>/(?&#x3C;=Jack|Tom)Sprat/</code> passt zu
          "Sprat" nur, wenn es von "Jack" oder "Tom" vorausgeht. Weder
          "Jack" noch "Tom" sind jedoch Teil der Matchergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Negative Lookbehind Assertion:</strong></a>
          Passt zu "x" nur, wenn "x" nicht von "y" vorausgeht. Zum Beispiel,
          <code>/(?&#x3C;!-)\d+/</code> passt zu einer Zahl nur, wenn sie nicht von einem Minuszeichen vorausgeht. <code>/(?&#x3C;!-)\d+/.exec('3')</code>
          passt zu "3". <code>/(?&#x3C;!-)\d+/.exec('-3')</code> findet kein
          Match, da die Zahl von einem Minuszeichen vorausgeht.
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
          Passt zu <code><em>x</em></code> und
          merkt sich das Match. Zum Beispiel passt <code>/(foo)/</code> zu und
          merkt sich "foo" in "foo bar".
        </p>
        <p>
          Ein regulärer Ausdruck kann mehrere erfassende Gruppen haben. In den Ergebnissen
          befinden sich die Matches für die erfassenden Gruppen normalerweise in einem Array, dessen Mitglieder in der
          gleichen Reihenfolge wie die in der erfassenden Gruppe vorhandenen linken Klammern stehen. Dies ist
          in der Regel einfach die Reihenfolge der erfassenden Gruppen selbst. Das
          wird wichtig, wenn erfassende Gruppen verschachtelt werden. Matches werden
          unter Verwendung des Index der Elemente des Ergebnisses (<code
            >[1], …, [n]</code
          >) oder aus den vordefinierten <code>RegExp</code>-Objekt-Eigenschaften
          (<code>$1, …, $9</code>) zugegriffen.
        </p>
        <p>
          Erfassende Gruppen haben einen Leistungseinbruch. Wenn Sie die
          erfasste Teilkette nicht zurückrufen müssen, ziehen Sie nicht
          erfassende Klammern vor (siehe unten).
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
          verwenden, um alle Treffer zu erhalten.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;Name>x)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group"><strong>Benannte Erfassungsgruppe:</strong></a>
          Passt zu "x" und speichert es in
          der Gruppen-Eigenschaft der zurückgegebenen Übereinstimmungen unter dem
          angegebenen Namen <code>&#x3C;Name></code>. Die spitzen Klammern (<code>&#x3C;</code>
          und <code>></code>) sind für den Gruppennamen erforderlich.
        </p>
        <p>
          Zum Beispiel, um die US-Vorwahl von einer Telefonnummer zu
          extrahieren, könnten wir <code>/\((?&#x3C;area>\d\d\d)\)/</code> verwenden. Die
          resultierende Zahl würde unter <code>matches.groups.area</code> erscheinen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>Nicht erfassende Gruppe:</strong></a>
          Passt zu "x" speichert aber das Match nicht. Der gepasste Teilstring kann nicht
          über die Elemente des resultierenden Arrays (<code>[1], …, [n]</code>) oder über die vordefinierten
          <code>RegExp</code>-Objekt-Eigenschaften (<code>$1, …, $9</code>)
          zurückgerufen werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?:<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier"><strong>Modifier:</strong></a>
          Aktiviert oder deaktiviert die angegebenen Flags nur für das eingeschlossene Muster. Nur die Flags <code>i</code>, <code>m</code> und <code>s</code> können in einem Modifier verwendet werden.
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
          Wo "n" eine positive Ganzzahl ist. Passt zu dem gleichen Teilstring, zu dem die
          n-te erfassende Gruppe im regulären Ausdruck
          (von der linken Klammer aus gezählt) passt. Zum Beispiel,
          <code>/apple(,)\sorange\1/</code> passt zu "apple, orange," in "apple,
          orange, cherry, peach".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>Benannter Rückverweis:</strong></a>
          Ein Rückverweis auf den letzten Teilstring, der mit der
          <strong>Benannten Erfassungsgruppe</strong> übereinstimmt, die durch
          <code>&#x3C;Name></code> spezifiziert ist.
        </p>
        <p>
          Zum Beispiel,
          <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> passt zu "Sir,
          yes Sir" in "Do you copy? Sir, yes Sir!".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>\k</code> wird hier wörtlich verwendet, um den Beginn eines Rückverweises auf eine Benannte Erfassungsgruppe anzugeben.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Quantoren

[Quantoren](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) geben an, wie viele Zeichen oder Ausdrücke gematcht werden sollen.

> [!NOTE]
> Im Folgenden bezieht sich _item_ nicht nur auf einzelne Zeichen, sondern auch auf [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) und [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).

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
        <code>*</code>
      </td>
      <td>
        <p>
          Passt zu dem vorangehenden Element "x" 0 oder mehrmals. Zum Beispiel,
          <code>/bo*/</code> passt zu "boooo" in "A ghost booooed" und "b" in "A
          bird warbled", aber zu nichts in "A goat grunted".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>+</code>
      </td>
      <td>
        <p>
          Passt zu dem vorangehenden Element "x" 1 oder mehrmals. Entspricht
          <code>{1,}</code>. Zum Beispiel, <code>/a+/</code> passt zum "a" in
          "candy" und zu allen "a"'s in "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>?</code>
      </td>
      <td>
        <p>
          Passt zu dem vorangehenden Element "x" 0 oder 1 Mal. Zum Beispiel,
          <code>/e?le?/</code> passt zum "el" in "angel" und zum "le" in
          "angle."
        </p>
        <p>
          Wird unmittelbar nach einem der Quantoren <code>*</code>,
          <code>+</code>, <code>?</code> oder <code>{}</code> verwendet, wird der
          Quantor nicht-gierig (es wird die minimale Anzahl von Malen gematcht), im
          Gegensatz zum Standard, der gierig ist (es wird die maximale Anzahl
          von Malen gematcht).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative Ganzzahl ist, passt exakt "n" Vorkommen des
          vorangehenden Elements "x". Zum Beispiel passt <code>/a{2}/</code> nicht
          zum "a" in "candy", aber es passt zu allen "a"'s in "caandy" und
          den ersten beiden "a"'s in "caaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative Ganzzahl ist, passt zu mindestens "n" Vorkommen des
          vorangehenden Elements "x". Zum Beispiel, <code>/a{2,}/</code> passt nicht
          zum "a" in "candy", aber es passt zu allen a's in "caandy" und
          in "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <p>
          Wo "n" und "m" nicht-negative Ganzzahlen sind und <code>m >= n</code>,
          passt zu mindestens "n" und höchstens "m" Vorkommen des vorangehenden
          Elements "x". Zum Beispiel passt <code>/a{1,3}/</code> zu nichts in
          "cndy", zum "a" in "candy", zu den zwei "a"'s in "caandy", und zu den ersten
          drei "a"'s in "caaaaaaandy". Beachten Sie, dass beim Matchen von "caaaaaaandy",
          das Match "aaa" ist, obwohl der ursprüngliche String mehr "a"s enthält.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>*?</code><br /><code>+?</code><br /><code
            >??</code
          ><br /><code>{n}?</code><br /><code>{n,}?</code
          ><br /><code>{n,m}?</code>
        </p>
      </td>
      <td>
        <p>
          Standardmäßig sind Quantoren wie <code>*</code> und <code>+</code>
          "gierig", was bedeutet, dass sie versuchen, möglichst viel aus dem String zu
          matchen. Der <code>?</code>-Charakter nach dem Quantor macht den
          Quantor "nicht-gierig": Das heißt, er stoppt, sobald er ein
          Match findet. Zum Beispiel für einen String wie "some &#x3C;foo> &#x3C;bar>
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
