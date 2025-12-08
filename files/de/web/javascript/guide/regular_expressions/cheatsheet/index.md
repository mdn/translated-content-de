---
title: Spickzettel zur Syntax von regulären Ausdrücken
slug: Web/JavaScript/Guide/Regular_expressions/Cheatsheet
l10n:
  sourceCommit: 0f6daa30cf89c66d37700c51b8a12e660fee29d9
---

Diese Seite bietet einen allgemeinen Spickzettel zu allen Möglichkeiten der `RegExp`-Syntax, indem der Inhalt der Artikel im `RegExp`-Leitfaden zusammengefasst wird. Wenn Sie mehr Informationen zu einem bestimmten Thema benötigen, bitte folgen Sie dem Link der entsprechenden Überschrift, um auf den vollständigen Artikel zuzugreifen, oder gehen Sie zum [Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions).

## Zeichensatzklassen

[Zeichensatzklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) unterscheiden Arten von Zeichen, wie zum Beispiel Buchstaben und Ziffern.

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
          Passt zu einem der eingeschlossenen Zeichen. Sie können einen Bereich von Zeichen angeben, indem Sie einen Bindestrich verwenden. Wenn der Bindestrich jedoch als erstes oder letztes Zeichen in den eckigen Klammern erscheint, wird er als buchstäblicher Bindestrich interpretiert, der in die Zeichenklasse als normales Zeichen aufgenommen wird.
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
          Passt zu allem, was nicht in den eckigen Klammern eingeschlossen ist. Sie können einen Bereich von Zeichen angeben, indem Sie einen Bindestrich verwenden, aber wenn der Bindestrich als erstes Zeichen nach dem <code>^</code> oder als letztes Zeichen in den eckigen Klammern erscheint, wird er als buchstäblicher Bindestrich aufgenommen eine normale Zeichenklasse. Zum Beispiel ist <code>[^abc]</code> dasselbe wie <code>[^a-c]</code>. Sie passen zuerst auf "o" in "bacon" und "h" in "chop".
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
          Passt auf jedes einzelne Zeichen <em>außer</em> Zeilenabschlusszeichen:
          <code>\n</code>, <code>\r</code>, <code>\u2028</code> oder
          <code>\u2029</code>. Zum Beispiel passt <code>/.y/</code> zu "my" und
          "ay", aber nicht zu "yes" in "yes make my day", da vor "y" in "yes" kein Zeichen vorhanden ist. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> (s) Flag gesetzt ist, passt es auch auf Zeilenabschlusszeichen.
          Innerhalb einer Zeichenklasse verliert der Punkt seine spezielle Bedeutung und
          passt auf einen buchstäblichen Punkt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Ziffern-Zeichenklassen-Escape:</strong></a>
          Passt auf jede Ziffer (arabische Zahl). Entspricht <code>[0-9]</code>.
          Zum Beispiel passt <code>/\d/</code> oder <code>/[0-9]/</code> zum "2" in
          "B2 is the suite number".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Ziffern-Zeichenklassen-Escape:</strong></a>
          Passt zu jedem Zeichen, das keine Ziffer (arabische Zahl) ist. Entspricht
          <code>[^0-9]</code>. Zum Beispiel passt <code>/\D/</code> oder
          <code>/[^0-9]/</code> zum "B" in "B2 is the suite number".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Wort-Zeichenklassen-Escape:</strong></a>
          Passt auf jedes alphanumerische Zeichen aus dem Basis-Latein-Alphabet,
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
          Passt zu jedem Zeichen, das kein Wortzeichen aus dem Basis-Latein-Alphabet ist. Entspricht <code>[^A-Za-z0-9_]</code>. Zum Beispiel passt <code>/\W/</code> oder <code>/[^A-Za-z0-9_]/</code> auf "%" in "50%" und "É" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Leerzeichen-Zeichenklassen-Escape:</strong></a>
          Passt auf ein einzelnes Leerzeichen-Zeichen, einschließlich Leerzeichen, Tabulator, Form Feed, Zeilenumbruch und andere Unicode-Leerzeichen. Entspricht <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel passt <code>/\s\w*/</code> auf " bar" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Leerzeichen-Zeichenklassen-Escape:</strong></a>
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
      <td>Passt auf einen Zeilenumbruch.</td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>Passt auf einen Zeilenumbruch.</td>
    </tr>
    <tr>
      <td><code>\v</code></td>
      <td>Passt auf eine vertikale Tabulator.</td>
    </tr>
    <tr>
      <td><code>\f</code></td>
      <td>Passt auf ein Form Feed.</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Passt auf ein Backspace. Wenn Sie nach der Wortgrenzen-Assertion
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
          Passt auf ein Steuerzeichen unter Verwendung der
          <a href="https://de.wikipedia.org/wiki/Caret-Notation"
            >Caret-Notation</a
          >, wobei "X" ein Buchstabe von A–Z oder a–z ist (entsprechend den Codepunkten <code>U+0001</code><em>–</em><code>U+001A</code>). Zum Beispiel passt <code>/\cM\cJ/</code> auf "\r\n".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        Passt auf das Zeichen mit dem Code <code><em>hh</em></code> (zwei hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        Passt auf eine UTF-16 Code-Einheit mit dem Wert
        <code><em>hhhh</em></code> (vier hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>{hhhh}</em> oder <em>\u{hhhhh}</em></code>
      </td>
      <td>
        (Nur wenn das <code>u</code>-Flag gesetzt ist.) Passt auf das Zeichen mit dem Unicode-Wert <code>U+<em>hhhh</em></code> oder <code>U+<em>hhhhh</em></code> (hexadezimale Ziffern).
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
          Passt auf ein Zeichen basierend auf seinen Unicode-Zeichen-Eigenschaften: zum Beispiel, Emoji-Zeichen, oder japanische <em>katakana</em> Zeichen, oder chinesische/japanische Han/Kanji-Zeichen, usw.).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Gibt an, dass das folgende Zeichen speziell behandelt oder "escaped" werden sollte. Es verhält sich auf eine von zwei Arten.
        </p>
        <ul>
          <li>
            Für Zeichen, die normalerweise wörtlich behandelt werden, gibt es an, dass das nächste Zeichen speziell ist und nicht wörtlich interpretiert werden sollte. Zum Beispiel passt <code>/b/</code> zum Zeichen "b". Durch das Setzen eines Backslashes vor "b", dh durch die Verwendung von <code>/\b/</code>, wird das Zeichen speziell, um eine Wortgrenze zu bedeuten.
          </li>
          <li>
            Für Zeichen, die normalerweise speziell behandelt werden, gibt es an, dass das nächste Zeichen nicht speziell ist und wörtlich interpretiert werden sollte. Zum Beispiel ist "*" ein spezielles Zeichen, das bedeutet, dass 0 oder mehr Vorkommen des vorhergehenden Zeichens übereinstimmen sollten; zum Beispiel bedeutet <code>/a*/</code> 0 oder mehr "a"s zu finden. Um <code>*</code> wörtlich zu passen, setzen Sie einen Backslash davor; zum Beispiel passt <code>/a\*/</code> auf "a*".
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Um dieses Zeichen wörtlich zu passen, escape it mit sich selbst. Mit anderen Worten, um nach <code>\</code> zu suchen, verwenden Sie <code>/\\/</code>.
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
          Passt zu "x" oder "y". Jedes Element, getrennt durch ein Pipe-Symbol (<code>|</code>), wird als <em>Alternative</em> bezeichnet. Zum Beispiel passt <code>/green|red/</code> auf "green" in "green apple" und auf "red" in "red apple".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Eine Disjunktion ist ein weiterer Weg, ein "Set von Wahlmöglichkeiten" anzugeben, ist aber keine Zeichenklasse. Disjunktionen sind keine Atome — Sie müssen eine <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">Gruppe</a> verwenden, um sie Teil eines größeren Musters zu machen. <code>[abc]</code> ist funktionell gleichwertig zu <code>(?:a|b|c)</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Assertions

[Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) beinhalten Grenzmarkierungen, die Anfänge und Enden von Zeilen und Wörtern anzeigen, sowie andere Muster, die auf irgendeine Weise anzeigen, dass eine Übereinstimmung möglich ist (einschließlich Look-ahead, Look-behind und bedingten Ausdrücken).

### Grenzmarkierungs-Assertions

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Anfangsmarkierung-Assertion:</strong></a>
          Passt zum Anfang der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag gesetzt ist, passt es auch direkt nach einem Zeilenumbruchzeichen. Zum Beispiel passt <code>/^A/</code> nicht zum "A" in "an A", aber es passt zum ersten "A" in "An A".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dieses Zeichen hat eine andere Bedeutung, wenn es am Anfang einer <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes">Zeichenklasse</a> erscheint.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Endmarkierung-Assertion:</strong></a>
          Passt zum Ende der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag gesetzt ist, passt es auch direkt vor einem Zeilenumbruchzeichen. Zum Beispiel passt <code>/t$/</code> nicht zum "t" in "eater", aber es passt zum "t" in "eat".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Wortgrenze-Assertion:</strong></a>
          Passt zu einer Wortgrenze. Dies ist die Position, an der ein Wortzeichen nicht von einem anderen Wortzeichen gefolgt oder vorhergegangen wird, zum Beispiel zwischen einem Buchstaben und einem Leerzeichen. Beachten Sie, dass eine übereinstimmende Wortgrenze nicht in der Übereinstimmung enthalten ist. Mit anderen Worten, die Länge einer übereinstimmenden Wortgrenze ist null.
        </p>
        <p>Beispiele:</p>
        <ul>
          <li><code>/\bm/</code> passt zum "m" in "moon".</li>
          <li>
            <code>/oo\b/</code> passt nicht zum "oo" in "moon", da "oo"
            von "n", einem Wortzeichen, gefolgt wird.
          </li>
          <li>
            <code>/oon\b/</code> passt zum "oon" in "moon", da "oon" das
            Ende der Zeichenfolge ist und somit nicht von einem Wortzeichen gefolgt wird.
          </li>
          <li>
            <code>/\w\b\w/</code> wird niemals etwas passen, da ein Wortzeichen niemals sowohl von einem Nicht-Wort- als auch von einem Wortzeichen gefolgt werden kann.
          </li>
        </ul>
        <p>
          Um ein Backspace-Zeichen (<code>[\b]</code>) zu matchen, siehe
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Nicht-Wortgrenze-Assertion:</strong></a>
          Passt zu einer Nicht-Wortgrenze. Dies ist eine Position, an der das vorherige und das nächste Zeichen vom gleichen Typ sind: Beide müssen entweder Wörter oder beide müssen Nicht-Wörter sein, zum Beispiel zwischen zwei Buchstaben oder zwischen zwei Leerzeichen. Der Beginn und das Ende einer Zeichenfolge werden als Nicht-Wörter angesehen. Ebenso wie die übereinstimmende Wortgrenze ist auch die übereinstimmende Nicht-Wortgrenze nicht in der Übereinstimmung enthalten. Zum Beispiel passt <code>/\Bon/</code> auf "on" in "at noon", und <code>/ye\B/</code> passt auf "ye" in "possibly yesterday".
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Andere Assertions

> [!NOTE]
> Das `?` Zeichen kann auch als Quantifizierer verwendet werden.

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
          Passt zu "x" nur dann, wenn "x" von "y" gefolgt wird. Zum Beispiel passt <code>/Jack(?=Sprat)/</code> zu "Jack" nur dann, wenn es von "Sprat" gefolgt wird.<br /><code
            >/Jack(?=Sprat|Frost)/</code
          >
          passt zu "Jack" nur dann, wenn es von "Sprat" oder "Frost" gefolgt wird. Jedoch sind weder "Sprat" noch "Frost" Teil der Übereinstimmungs-Ergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Negative Lookahead-Assertion:</strong></a>
          Passt zu "x" nur dann, wenn "x" nicht von "y" gefolgt wird. Zum Beispiel passt <code>/\d+(?!\.)/</code> zu einer Zahl nur dann, wenn sie nicht von einem Dezimalpunkt gefolgt wird. <code
            >/\d+(?!\.)/.exec('3.141')</code
          >
          passt zu "141" aber nicht zu "3".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Lookbehind-Assertion:</strong></a>
          Passt zu "x" nur dann, wenn "x" von "y" vorhergegangen wird. Zum Beispiel, <code>/(?&#x3C;=Jack)Sprat/</code> passt zu "Sprat" nur dann, wenn es von "Jack" vorhergegangen wird. <code>/(?&#x3C;=Jack|Tom)Sprat/</code> passt zu "Sprat" nur dann, wenn es von "Jack" oder "Tom" vorhergegangen wird. Jedoch sind weder "Jack" noch "Tom" Teil der Übereinstimmungs-Ergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Negative Lookbehind-Assertion:</strong></a>
          Passt zu "x" nur dann, wenn "x" nicht von "y" vorhergegangen wird. Zum Beispiel, <code>/(?&#x3C;!-)\d+/</code> passt zu einer Zahl nur dann, wenn sie nicht von einem Minuszeichen vorhergegangen wird. <code>/(?&#x3C;!-)\d+/.exec('3')</code>
          passt zu "3". <code>/(?&#x3C;!-)\d+/.exec('-3')</code> findet keine Übereinstimmung, da die Zahl von dem Minuszeichen vorhergegangen wird.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Gruppen und Rückverweise

[Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) zeigen Gruppen von Ausdruckszeichen an.

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
          Passt zu <code><em>x</em></code> und merkt sich die Übereinstimmung. Zum Beispiel passt <code>/(foo)/</code> zu "foo" in "foo bar" und merkt sich diesen.
        </p>
        <p>
          Ein regulärer Ausdruck kann mehrere Erfassungsgruppen haben. In den Ergebnissen werden Übereinstimmungen zu Erfassungsgruppen typischerweise in einem Array gespeichert, dessen Mitglieder in der gleichen Reihenfolge wie die linken Klammern in der Erfassungsgruppe sind. Dies ist normalerweise einfach die Reihenfolge der Erfassungsgruppen selbst. Dies wird wichtig, wenn Erfassungsgruppen geschachtelt sind. Übereinstimmungen werden mit dem Index der Elemente der Ergebnisse (<code>[1], …, [n]</code>) oder von den vordefinierten Eigenschaften des <code>RegExp</code>-Objekts (<code>$1, …, $9</code>) abgerufen.
        </p>
        <p>
          Erfassungsgruppen haben einen Leistungseinbruch. Wenn Sie den übereinstimmenden Teilstring nicht abrufen müssen, bevorzugen Sie nicht-erfassende Klammern (siehe unten).
        </p>
        <p>
          <code
            ><a
              href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/match"
              >String.prototype.match()</a
            ></code
          >
          gibt keine Gruppen zurück, wenn das <code>/.../g</code> Flag gesetzt ist. Sie können jedoch weiterhin
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
          Passt zu "x" und speichert es unter dem Namen, der von <code>&#x3C;Name></code> angegeben wird, in der Gruppen-Eigenschaft der zurückgegebenen Übereinstimmungen. Die spitzen Klammern (<code>&#x3C;</code> und <code>></code>) sind für den Gruppennamen erforderlich.
        </p>
        <p>
          Zum Beispiel, um die Vorwahl der USA aus einer Telefonnummer zu extrahieren, könnten wir <code>/\((?&#x3C;area>\d\d\d)\)/</code> verwenden. Die resultierende Nummer würde unter <code>matches.groups.area</code> erscheinen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>Nicht-erfassende Gruppe:</strong></a>
          Passt zu "x", merkt sich die Übereinstimmung jedoch nicht. Der übereinstimmende Teilstring kann nicht von den Elementen des resultierenden Arrays (<code>[1], …, [n]</code>) oder von den vordefinierten Eigenschaften des <code>RegExp</code>-Objekts (<code>$1, …, $9</code>) abgerufen werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?:<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier"><strong>Modifier:</strong></a>
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference"><strong>Rückverweis:</strong></a>
          Wo "n" eine positive ganze Zahl ist. Passt zu demselben Teilstring, der von der n-ten erfassten Gruppe im regulären Ausdruck (Start mit den linken Klammern) übereinstimmt. Zum Beispiel, <code>/apple(,)\sorange\1/</code> passt zu "apple, orange," in "apple, orange, cherry, peach".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>Benannter Rückverweis:</strong></a>
          Ein Rückverweis auf den letzten Teilstring, der mit der <strong>benannten Erfassungsgruppe</strong> übereinstimmt, die durch <code>&#x3C;Name></code> angegeben wird.
        </p>
        <p>
          Zum Beispiel,
          <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> passt zu "Sir, yes Sir" in "Do you copy? Sir, yes Sir!".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>\k</code> wird hier wörtlich verwendet, um den Beginn eines Rückverweises auf eine benannte Erfassungsgruppe anzugeben.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Quantifizierer

[Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) geben die Anzahl der Zeichen oder Ausdrücke an, die übereinstimmen sollen.

> [!NOTE]
> Im Folgenden bezieht sich _item_ nicht nur auf einzelne Zeichen, sondern umfasst auch [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) und [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).

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
          Passt auf das vorangehende Element "x" 0 oder mehrmals. Zum Beispiel passt <code>/bo*/</code> zu "boooo" in "A ghost booooed" und zu "b" in "A bird warbled", aber auf nichts in "A goat grunted".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          Passt auf das vorangehende Element "x" 1 oder mehrmals. Entspricht <code>{1,}</code>. Zum Beispiel passt <code>/a+/</code> zum "a" in "candy" und zu allen "a"s in "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          Passt auf das vorangehende Element "x" 0 oder 1 Mal. Zum Beispiel passt <code>/e?le?/</code> zum "el" in "angel" und zum "le" in "angle."
        </p>
        <p>
          Wenn es unmittelbar nach einem der Quantifizierer <code>*</code>, <code>+</code>, <code>?</code> oder <code>{}</code> verwendet wird, macht es den Quantifizierer nicht-gierig (d.h. er passt auf die minimale Anzahl der Male), im Gegensatz zum Standard, der gierig ist (d.h. die maximale Anzahl der Male passt).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative ganze Zahl ist, passt genau "n" Vorkommen des vorangehenden Elements "x". Zum Beispiel passt <code>/a{2}/</code> nicht zum "a" in "candy", aber es passt zu allen "a"s in "caandy" und zu den ersten beiden "a"s in "caaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative ganze Zahl ist, passt auf mindestens "n" Vorkommen des vorangehenden Elements "x". Zum Beispiel passt <code>/a{2,}/</code> nicht zum "a" in "candy", passt aber zu allen "a"s in "caandy" und "caaaaaaandy".
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
          Wo "n" und "m" nicht-negative ganze Zahlen sind und <code>m >= n</code>, passt auf mindestens "n" und höchstens "m" Vorkommen des vorangehenden Elements "x". Zum Beispiel passt <code>/a{1,3}/</code> auf nichts in "cndy", auf das "a" in "candy", auf die zwei "a"s in "caandy" und auf die ersten drei "a"s in "caaaaaaandy". Beachten Sie, dass, wenn Sie "caaaaaaandy" abgleichen, die Übereinstimmung "aaa" ist, obwohl die ursprüngliche Zeichenfolge mehr "a"s in sich hatte.
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
          Standardmäßig sind Quantifizierer wie <code>*</code> und <code>+</code> "gierig", das heißt, sie versuchen, so oft wie möglich übereinzustimmen. Das <code>?</code> Zeichen nach dem Quantifizierer macht den Quantifizierer "nicht-gierig": Das bedeutet, dass er aufhört, sobald er die minimale Anzahl von Übereinstimmungen gefunden hat. Zum Beispiel, bei einem Text wie "some &#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo> thing":
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> wird "&#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo>" übereinstimmen.
          </li>
          <li><code>/&#x3C;.*?>/</code> wird "&#x3C;foo>" übereinstimmen.</li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Das Hinzufügen von <code>?</code> nach <code>{n}</code> ist syntaktisch gültig, aber praktisch nutzlos.
            Da <code>{n}</code> immer genau n-mal übereinstimmt, verhält sich <code>x{n}?</code> genauso wie <code>x{n}</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>
