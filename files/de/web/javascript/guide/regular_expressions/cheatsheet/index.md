---
title: Kurzübersicht der regulären Ausdrucks-Syntax
slug: Web/JavaScript/Guide/Regular_expressions/Cheatsheet
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("JavaScript Guide")}}

Diese Seite bietet eine allgemeine Übersicht über alle Funktionen der `RegExp`-Syntax, indem sie die Inhalte der Artikel im `RegExp`-Leitfaden zusammenführt. Wenn Sie weitere Informationen zu einem bestimmten Thema benötigen, folgen Sie bitte dem Link in der entsprechenden Überschrift, um auf den vollständigen Artikel zuzugreifen, oder gehen Sie zu [dem Leitfaden](/de-DE/docs/Web/JavaScript/Guide/Regular_expressions).

## Zeichenklassen

[Zeichenklassen](/de-DE/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) unterscheiden Arten von Zeichen, zum Beispiel die Unterscheidung zwischen Buchstaben und Ziffern.

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
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Character_class"><strong>Zeichenklasse:</strong></a>
          Passt zu einem der eingeschlossenen Zeichen. Sie können eine Zeichenfolge durch ein Minus angeben, aber wenn das Minus als erstes oder letztes Zeichen innerhalb der eckigen Klammern erscheint, wird es als wörtliches Minus betrachtet und in die Zeichenklasse als normales Zeichen aufgenommen.
        </p>
        <p>
          Zum Beispiel ist <code>[abcd]</code> gleich <code>[a-d]</code>.
          Sie passen zur "b" in "brisket" und zur "c" in "chop".
        </p>
        <p>
          Zum Beispiel passen <code>[abcd-]</code> und <code>[-abcd]</code> zur
          "b" in "brisket", zur "c" in "chop" und zum "-" (Minus) in
          "non-profit".
        </p>
        <p>
          Zum Beispiel ist <code>[\w-]</code> gleich
          <code>[A-Za-z0-9_-]</code>. Beide passen zur "b" in "brisket", zur
          "c" in "chop" und zur "n" in "non-profit".
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
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Character_class"><strong>Negierte Zeichenklasse:</strong></a>
          Passt zu allem, was nicht in den eckigen Klammern enthalten ist. Sie können eine Zeichenreihe durch ein Minus angeben, aber wenn das Minus als erstes Zeichen nach dem <code>^</code> oder als letztes Zeichen innerhalb der eckigen Klammern erscheint, wird es als wörtliches Minus betrachtet und in die Zeichenklasse als normales Zeichen aufgenommen. Zum Beispiel ist <code>[^abc]</code> gleich <code>[^a-c]</code>. Sie passen initial zur "o" in "bacon" und zur "h" in "chop".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Das ^ Zeichen kann auch den
            <a
              href="/de-DE/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
              >Anfang des Eingabebereichs</a
            > kennzeichnen.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>.</code></td>
      <td>
        <p>
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard"><strong>Wildcard:</strong></a>
          Passt zu jedem einzelnen Zeichen, mit Ausnahme von Zeilenbegrenzern:
          <code>\n</code>, <code>\r</code>, <code>\u2028</code> oder
          <code>\u2029</code>. Zum Beispiel passt <code>/.y/</code> zu "my" und
          "ay", aber nicht zu "yes", in "yes make my day", da in "yes" kein Zeichen vor "y" steht. Wenn das <a href="/de-DE/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> (s) Flag aktiviert ist, passt es auch zu Zeilenbegrenzern.
          Innerhalb einer Zeichenklasse verliert der Punkt seine spezielle Bedeutung und passt zu einem wörtlichen Punkt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Ziffernzeichenklassenflucht:</strong></a>
          Passt zu jeder Ziffer (arabische Zahl). Entspricht <code>[0-9]</code>.
          Zum Beispiel passen <code>/\d/</code> oder <code>/[0-9]/</code> zur "2" in
          "B2 is the suite number".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Ziffern-Zeichenklassenflucht:</strong></a>
          Passt zu jedem Zeichen, das keine Ziffer (arabische Zahl) ist. Entspricht
          <code>[^0-9]</code>. Zum Beispiel passen <code>/\D/</code> oder
          <code>/[^0-9]/</code> zur "B" in "B2 is the suite number".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Wörter-Zeichenklassenflucht:</strong></a>
          Passt zu jedem alphanumerischen Zeichen des Basislateinalphabets,
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
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Wörter-Zeichenklassenflucht:</strong></a>
          Passt zu jedem Zeichen, das kein Wortzeichen aus dem Basislateinalphabet ist. Entspricht
          <code>[^A-Za-z0-9_]</code>. Zum Beispiel passen <code>/\W/</code> oder <code>/[^A-Za-z0-9_]/</code> zum "%" in "50%"
          und zur "É" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Leerraum-Zeichenklassenflucht:</strong></a>
          Passt zu einem einzelnen Leerzeichen, einschließlich Leerzeichen, Tabulator, Form-Feed, Zeilenvorschub und anderen Unicode-Leerräumen. Entspricht
          <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel passt <code>/\s\w*/</code> zu " bar" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Leerraum-Zeichenklassenflucht:</strong></a>
          Passt zu einem einzelnen Zeichen, das kein Leerraum ist. Entspricht
          <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel passt <code>/\S\w*/</code> zu "foo" in "foo bar".
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
      <td>Passt zu einem Form-Feed.</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Passt zu einem Rückschritt. Wenn Sie nach der Wortgrenzen-Assertion (<code>\b</code>) suchen, siehe
        <a
          href="/de-DE/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
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
          Passt zu einem Steuerzeichen unter Verwendung der
          <a href="https://de.wikipedia.org/wiki/Notationszeichen">Caret-Notation</a>, wobei "X" ein Buchstabe von A–Z ist (entsprechend den Codepunkten <code>U+0001</code><em>–</em><code>U+001A</code>). Zum Beispiel passt <code>/\cM\cJ/</code> zu "\r\n".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        Passt zu dem Zeichen mit dem Code <code><em>hh</em></code> (zwei hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        Passt zu einer UTF-16-Codeeinheit mit dem Wert
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
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape"><strong>Unicode-Zeichenklassenflucht:</strong></a>
          Passt zu einem Zeichen basierend auf seinen Unicode-Zeichen-Eigenschaften: zum Beispiel Emoji-Zeichen, oder japanische <em>Katakana</em>-Zeichen, oder chinesische/japanische Han/Kanji-Zeichen, etc.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Gibt an, dass das folgende Zeichen speziell behandelt oder
          "entkommen" soll. Es kann auf zwei Arten funktionieren.
        </p>
        <ul>
          <li>
            Bei Zeichen, die normalerweise wörtlich behandelt werden, zeigt es an, dass das nächste Zeichen speziell ist und nicht wörtlich interpretiert werden soll.
            Zum Beispiel passt <code>/b/</code> zum Zeichen "b". Indem ein Rückstrich vor "b" gesetzt wird, also durch Verwendung von <code>/\b/</code>, wird das Zeichen speziell und bedeutet "Pass auf eine Wortgrenze".
          </li>
          <li>
            Bei Zeichen, die normalerweise speziell behandelt werden, zeigt es an, dass das nächste Zeichen nicht speziell ist und wörtlich interpretiert werden soll. Zum Beispiel ist "*" ein spezielles Zeichen, das bedeutet, dass 0 oder mehr Vorkommen des vorhergehenden Zeichens übereinstimmen sollten; zum Beispiel bedeutet <code>/a*/</code> 0 oder mehr "a"s zu finden. Um <code>*</code> wörtlich zu finden, setzen Sie einen Rückstrich davor; zum Beispiel passt <code>/a\*/</code> zu "a*".
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Um dieses Zeichen wörtlich zu finden, entkommen Sie es mit sich selbst. Mit anderen Worten: um nach <code>\</code> zu suchen, verwenden Sie <code>/\\/</code>.
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
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction"><strong>Disjunktion:</strong></a>
          Passt entweder zu "x" oder "y". Jede Komponente, die durch eine Pipe (<code>|</code>) getrennt ist, wird als <em>Alternative</em> bezeichnet. Zum Beispiel,
          <code>/green|red/</code> passt zu "green" in "green apple" und zu "red" in
          "red apple".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Eine Disjunktion ist eine andere Möglichkeit, "eine Auswahlmenge" anzugeben, ist jedoch keine Zeichenklasse. Disjunktionen sind keine Atome — Sie müssen eine <a href="/de-DE/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">Gruppe</a> verwenden, um sie Teil eines größeren Musters zu machen. <code>[abc]</code> ist funktionell gleichwertig mit <code>(?:a|b|c)</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Assertions

[Assertions](/de-DE/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) enthalten Grenzen, die die Anfänge und Enden von Zeilen und Wörtern anzeigen, und andere Muster, die auf irgendeine Weise anzeigen, dass ein Treffer möglich ist (einschließlich Look-ahead, Look-behind und bedingte Ausdrücke).

### Boundary-type Assertions

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
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Eingabebereich-Anfangs-Assertion:</strong></a>
          Passt zum Anfang der Eingabe. Wenn das <a href="/de-DE/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag aktiviert ist, passt es auch unmittelbar nach einem Zeilenumbruchzeichen. Zum Beispiel,
          <code>/^A/</code> passt nicht zu der "A" in "an A", aber passt zur
          ersten "A" in "An A".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dieses Zeichen hat eine andere Bedeutung, wenn
            es zu Beginn einer
            <a
              href="/de-DE/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
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
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Eingabebereich-Ende-Assertion:</strong></a>
          Passt zum Ende der Eingabe. Wenn das <a href="/de-DE/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag aktiviert ist, passt es auch unmittelbar vor einem Zeilenumbruchzeichen. Zum Beispiel,
          <code>/t$/</code> passt nicht zur "t" in "eater", aber passt dazu
          in "eat".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Wortgrenzen-Assertion:</strong></a>
          Passt zu einer Wortgrenze. Dies ist die Position, an der ein Wortzeichen
          nicht von einem anderen Wortzeichen gefolgt oder vorangestellt wird, wie zum Beispiel zwischen
          einem Buchstaben und einem Leerzeichen. Beachten Sie, dass eine gefundene Wortgrenze nicht
          im Treffer enthalten ist. Mit anderen Worten, die Länge einer gefundenen Wortgrenze beträgt null.
        </p>
        <p>Beispiele:</p>
        <ul>
          <li><code>/\bm/</code> passt zu "m" in "moon".</li>
          <li>
            <code>/oo\b/</code> passt nicht zu "oo" in "moon", da "oo"
            von "n" gefolgt wird, das ein Wortzeichen ist.
          </li>
          <li>
            <code>/oon\b/</code> passt zu "oon" in "moon", da "oon" das
            Ende der Zeichenkette ist und somit nicht von einem Wortzeichen gefolgt wird.
          </li>
          <li>
            <code>/\w\b\w/</code> wird niemals irgendetwas passen, da ein Wortzeichen niemals sowohl von einem Nicht-Wort als auch von einem Wortzeichen gefolgt werden kann.
          </li>
        </ul>
        <p>
          Um ein Rückschrittzeichen (<code>[\b]</code>) zu treffen, siehe
          <a
            href="/de-DE/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
            >Zeichenklassen</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\B</code></td>
      <td>
        <p>
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Nicht-Wortgrenzen-Assertion:</strong></a>
          Passt zu einer Nicht-Wortgrenze. Dies ist eine Position, an der das vorherige und
          das nächste Zeichen vom gleichen Typ sind: Entweder müssen beide Wörter sein, oder
          beide müssen Nicht-Wörter sein, zum Beispiel zwischen zwei Buchstaben oder zwischen zwei
          Leerzeichen. Der Anfang und das Ende einer Zeichenfolge werden als Nicht-Wörter betrachtet.
          Ebenso wie die gefundene Wortgrenze wird auch die gefundene Nicht-Wortgrenze
          nicht im Treffer enthalten. Zum Beispiel,
          <code>/\Bon/</code> passt zu "on" in "at noon", und
          <code>/ye\B/</code> passt zu "ye" in "possibly yesterday".
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Andere Assertions

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
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Lookahead Assertion:</strong></a>
          Passt zu "x" nur, wenn "x"
          von "y" gefolgt wird. Zum Beispiel, <code>/Jack(?=Sprat)/</code> passt
          zu "Jack" nur, wenn es von "Sprat" gefolgt wird.<br /><code
            >/Jack(?=Sprat|Frost)/</code
          >
          passt zu "Jack" nur, wenn es von "Sprat" oder "Frost" gefolgt wird. Weder
          "Sprat" noch "Frost" sind jedoch Teil der Trefferresultate.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Negative Lookahead Assertion:</strong></a>
          Passt zu "x" nur, wenn "x"
          nicht von "y" gefolgt wird. Zum Beispiel, <code>/\d+(?!\.)/</code> passt
          zu einer Zahl nur, wenn diese nicht von einem Dezimalpunkt gefolgt wird. <code
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
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Lookbehind Assertion:</strong></a>
          Passt zu "x" nur, wenn "x"
          von "y" vorausgegangen wird. Zum Beispiel,
          <code>/(?&#x3C;=Jack)Sprat/</code> passt zu "Sprat" nur, wenn es
          von "Jack" vorausgegangen wird. <code>/(?&#x3C;=Jack|Tom)Sprat/</code> passt
          zu "Sprat" nur, wenn es von "Jack" oder "Tom" vorausgegangen wird. Weder
          "Jack" noch "Tom" sind jedoch Teil der Trefferresultate.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Negative Lookbehind Assertion:</strong></a>
          Passt zu "x" nur, wenn
          "x" nicht von "y" vorausgegangen wird. Zum Beispiel,
          <code>/(?&#x3C;!-)\d+/</code> passt zu einer Zahl nur, wenn diese nicht
          von einem Minuszeichen vorausgegangen wird. <code>/(?&#x3C;!-)\d+/.exec('3')</code>
          passt zu "3". <code>/(?&#x3C;!-)\d+/.exec('-3')</code> tritt kein
          Treffer auf, weil die Zahl von einem Minuszeichen vorausgegangen wird.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Gruppen und Rückverweise

[Gruppen und Rückverweise](/de-DE/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) kennzeichnen Gruppen von Ausdruckszeichen.

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
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group"><strong>Sammelgruppe:</strong></a>
          Passt zu <code><em>x</em></code> und
          merkt sich den Treffer. Zum Beispiel passt <code>/(foo)/</code> zu und
          merkt sich "foo" in "foo bar".
        </p>
        <p>
          Ein regulärer Ausdruck kann mehrere Sammelgruppen enthalten. In den Ergebnissen
          stehen die Treffer oft in einem Array, dessen Mitglieder in derselben Reihenfolge wie
          die linken Klammern in der Sammelgruppe sind. Das ist
          in der Regel einfach die Reihenfolge der Sammelgruppen selbst. Dies
          wird wichtig, wenn Sammelgruppen verschachtelt sind. Treffer können
          mit dem Index der Elemente des Ergebnis-Arrays (<code
            >[1], …, [n]</code
          >) oder von den vordefinierten <code>RegExp</code>-Eigenschaften
          (<code>$1, …, $9</code>) zugegriffen werden.
        </p>
        <p>
          Sammelgruppen haben einen Leistungseinbruch. Wenn Sie das
          gefundene Teilzeichen nicht abrufen müssen, bevorzugen Sie nicht-sammelnde
          Klammern (siehe unten).
        </p>
        <p>
          <code
            ><a
              href="/de-DE/docs/Web/JavaScript/Reference/Global_Objects/String/match"
              >String.prototype.match()</a
            ></code
          >
          gibt keine Gruppen zurück, wenn das <code>/.../g</code>-Flag gesetzt ist. Sie können jedoch
          weiterhin
          <code
            ><a
              href="/de-DE/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll"
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
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group"><strong>Benannte Sammelgruppe:</strong></a>
          Passt zu "x" und speichert es bei den
          Gruppen-Eigenschaften der zurückgegebenen Treffer unter dem Namen, der
          durch <code>&#x3C;Name></code> angegeben ist. Die spitzen Klammern (<code>&#x3C;</code>
          und <code>></code>) sind für den Gruppennamen erforderlich.
        </p>
        <p>
          Um zum Beispiel die US-amerikanische Vorwahl aus einer Telefonnummer
          zu extrahieren, könnten wir <code>/\((?&#x3C;area>\d\d\d)\)/</code> verwenden. Die
          resultierende Nummer würde unter <code>matches.groups.area</code> angezeigt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>Nicht-Sammelgruppe:</strong></a>
          Passt zu "x" aber merkt sich
          den Treffer nicht. Das gefundene Teilzeichen kann nicht aus den
          Ergebniselementen des Arrays (<code>[1], …, [n]</code>) oder aus den vordefinierten
          <code>RegExp</code>-Eigenschaften (<code>$1, …, $9</code>) abgerufen werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?:<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Modifier"><strong>Modifier:</strong></a>
          Aktiviert oder deaktiviert die angegebenen Flags nur für das eingeschlossene Muster. Nur die <code>i</code>, <code>m</code> und <code>s</code> Flags können in einem Modifier verwendet werden.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\<em>n</em></code>
      </td>
      <td>
        <p>
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Backreference"><strong>Rückverweis:</strong></a>
          Dabei ist "n" eine positive Ganzzahl. Passt zu demselben Teilzeichen, das
          von der n-ten Sammelgruppe im regulären Ausdruck
          (zählt linke Klammern) getroffen wurde. Zum Beispiel,
          <code>/apple(,)\sorange\1/</code> passt zu "apple, orange," in "apple,
          orange, cherry, peach".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          <a href="/de-DE/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>Benannter Rückverweis:</strong></a>
          Ein Rückverweis auf das letzte Teilzeichen, das zur Benannten Sammelgruppe passt, die von
          <code>&#x3C;Name></code> angegeben ist.
        </p>
        <p>
          Zum Beispiel,
          <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> passt zu "Sir,
          yes Sir" in "Do you copy? Sir, yes Sir!".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>\k</code> wird hier wörtlich verwendet, um
            den Anfang eines Rückverweises auf eine Benannte Sammelgruppe anzuzeigen.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Quantoren

[Quantoren](/de-DE/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) geben die Anzahl der zu treffenden Zeichen oder Ausdrücke an.

> [!NOTE]
> Im Folgenden bezieht sich _item_ nicht nur auf einzelne Zeichen, sondern enthält auch [Zeichenklassen](/de-DE/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) und [Gruppen und Rückverweise](/de-DE/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).

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
          Passt das vorhergehende Element "x" 0 oder mehrmals. Zum Beispiel,
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
          Passt das vorhergehende Element "x" 1 oder mehrmals. Entspricht
          <code>{1,}</code>. Zum Beispiel passt <code>/a+/</code> zu der "a" in
          "candy" und zu allen "a"s in "caaaaaaandy".
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
          <code>/e?le?/</code> passt zu "el" in "angel" und zu "le" in
          "angle."
        </p>
        <p>
          Wenn unmittelbar nach einem der Quantoren <code>*</code>,
          <code>+</code>, <code>?</code> oder <code>{}</code> verwendet, macht es den
          Quantor nicht-gierig (d.h. es wird die Mindestanzahl von Treffern gesucht), im Gegensatz zur Standardeinstellung, die gierig ist (d.h. es werden die Maximalanzahl von Treffern gesucht).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          Dabei ist "n" eine nicht-negative Ganzzahl. Passt genau "n" Vorkommen des
          vorhergehenden Elements "x". Zum Beispiel passt <code>/a{2}/</code> nicht
          zur "a" in "candy", aber es passt zu allen "a"s in "caandy" und
          zu den ersten beiden "a"s in "caaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          Dabei ist "n" eine nicht-negative Ganzzahl. Passt zu mindestens "n" Vorkommen des
          vorhergehenden Elements "x". Zum Beispiel passt <code>/a{2,}/</code> nicht
          zur "a" in "candy", aber es passt zu allen "a"s in "caandy" und
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
          Dabei sind "n" und "m" nicht-negative Ganzzahlen und <code>m >= n</code>,
          passt zu mindestens "n" und höchstens "m" Vorkommen des vorhergehenden
          Elements "x". Zum Beispiel passt <code>/a{1,3}/</code> zu nichts in
          "cndy", zu der "a" in "candy", zu den beiden "a"s in "caandy" und zu den ersten
          drei "a"s in "caaaaaaandy". Beachten Sie, dass beim Abgleich von "caaaaaaandy",
          der Treffer "aaa" ist, obwohl der ursprüngliche String mehr "a"s hatte.
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
          "gierig", was bedeutet, dass sie versuchen, so viel wie möglich von der Zeichenfolge zu
          finden. Das <code>?</code> Zeichen nach dem Quantor macht den
          Quantor "nicht-gierig", was bedeutet, dass er so bald wie möglich aufhört, sobald er einen Treffer findet. Zum Beispiel, bei einer Zeichenfolge wie "some &#x3C;foo> &#x3C;bar>
          new &#x3C;/bar> &#x3C;/foo> thing":
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> passt zu "&#x3C;foo> &#x3C;bar> new
            &#x3C;/bar> &#x3C;/foo>"
          </li>
          <li><code>/&#x3C;.*?>/</code> passt zu "&#x3C;foo>"</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
