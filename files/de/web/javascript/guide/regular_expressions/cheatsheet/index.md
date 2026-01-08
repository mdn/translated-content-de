---
title: Syntax-Schummelzettel für reguläre Ausdrücke
slug: Web/JavaScript/Guide/Regular_expressions/Cheatsheet
l10n:
  sourceCommit: e166afc6dccac8ac4810a443c069cdb876cc4b5c
---

Diese Seite bietet einen umfassenden Schummelzettel zu allen Fähigkeiten der `RegExp`-Syntax, indem sie den Inhalt der Artikel im `RegExp`-Leitfaden zusammenfasst. Falls Sie mehr Informationen zu einem bestimmten Thema benötigen, folgen Sie bitte dem Link in der entsprechenden Überschrift, um den vollständigen Artikel zu erreichen oder besuchen Sie [den Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions).

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
          Passt zu einem der eingeschlossenen Zeichen. Sie können einen Bereich von Zeichen mit einem Bindestrich angeben, aber wenn der Bindestrich als erstes oder letztes Zeichen in den eckigen Klammern erscheint, wird er als literaler Bindestrich verstanden, der in die Zeichenklasse als normales Zeichen aufgenommen wird.
        </p>
        <p>
          Zum Beispiel ist <code>[abcd]</code> dasselbe wie <code>[a-d]</code>. Sie passen zu "b" in "brisket" und "c" in "chop".
        </p>
        <p>
          Zum Beispiel passen <code>[abcd-]</code> und <code>[-abcd]</code> zu "b" in "brisket", "c" in "chop" und dem "-" (Bindestrich) in "non-profit".
        </p>
        <p>
          Zum Beispiel entspricht <code>[\w-]</code> dem gleichen wie <code>[A-Za-z0-9_-]</code>. Beide passen zu "b" in "brisket", "c" in "chop" und "n" in "non-profit".
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
          Passt zu allem, was nicht in den eckigen Klammern eingeschlossen ist. Sie können einen Bereich von Zeichen mit einem Bindestrich angeben, aber wenn der Bindestrich als erstes Zeichen nach dem <code>^</code> oder als letztes Zeichen in den eckigen Klammern erscheint, wird er als literaler Bindestrich verstanden, der in die Zeichenklasse als normales Zeichen aufgenommen wird. Zum Beispiel ist <code>[^abc]</code> dasselbe wie <code>[^a-c]</code>. Sie passen zunächst zu "o" in "bacon" und "h" in "chop".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Das ^-Zeichen kann auch für den
            <a
              href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
              >Anfang der Eingabe</a
            > stehen.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>.</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard"><strong>Wildcard:</strong></a>
          Passt zu jedem einzelnen Zeichen <em>außer</em> Zeilenendzeichen: <code>\n</code>, <code>\r</code>, <code>\u2028</code> oder <code>\u2029</code>. Zum Beispiel passt <code>/.y/</code> zu "my" und "ay", aber nicht "yes", in "yes make my day", da es kein Zeichen vor "y" in "yes" gibt. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> (s) Flag gesetzt ist, werden auch Zeilenendzeichen einbezogen. Innerhalb einer Zeichenklasse verliert der Punkt seine besondere Bedeutung und passt zu einem literalen Punkt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Ziffern-Zeichenklasse-Escape:</strong></a>
          Passt zu jeder Ziffer (arabische Ziffern). Entspricht <code>[0-9]</code>. Zum Beispiel passt <code>/\d/</code> oder <code>/[0-9]/</code> zu "2" in "B2 ist die Suite-Nummer".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Ziffern-Zeichenklasse-Escape:</strong></a>
          Passt zu jedem Zeichen, das keine Ziffer (arabische Ziffern) ist. Entspricht <code>[^0-9]</code>. Zum Beispiel passt <code>/\D/</code> oder <code>/[^0-9]/</code> zu "B" in "B2 ist die Suite-Nummer".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Wort-Zeichenklasse-Escape:</strong></a>
          Passt zu jedem alphanumerischen Zeichen aus dem lateinischen Alphabet, einschließlich des Unterstrichs. Entspricht <code>[A-Za-z0-9_]</code>. Zum Beispiel passt <code>/\w/</code> zu "a" in "apple", "5" in "$5.28", "3" in "3D" und "m" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Wort-Zeichenklasse-Escape:</strong></a>
          Passt zu jedem Zeichen, das kein Wortzeichen aus dem lateinischen Alphabet ist. Entspricht <code>[^A-Za-z0-9_]</code>. Zum Beispiel passt <code>/\W/</code> oder <code>/[^A-Za-z0-9_]/</code> zu "%" in "50%" und "É" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Leerzeichen-Zeichenklasse-Escape:</strong></a>
          Passt zu einem einzelnen Leerzeichenzeichen, einschließlich Leerzeichen, Tabulator, Form Feed, Zeilen Feed und anderen Unicode-Leerzeichen. Entspricht <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel passt <code>/\s\w*/</code> zu " bar" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Leerzeichen-Zeichenklasse-Escape:</strong></a>
          Passt zu einem einzelnen Zeichen, das kein Leerzeichen ist. Entspricht <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel passt <code>/\S\w*/</code> zu "foo" in "foo bar".
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
      <td>Entspricht einem Form Feed.</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Entspricht einem Rückschritt. Wenn Sie nach der Wortgrenzenbehauptung (<code>\b</code>) suchen, siehe
        <a
          href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
          >Behauptungen</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>\0</code></td>
      <td>Entspricht einem NUL-Zeichen. Folgen Sie diesem nicht mit einer weiteren Ziffer.</td>
    </tr>
    <tr>
      <td>
        <code>\c<em>X</em></code>
      </td>
      <td>
        <p>
          Entspricht einem Steuerzeichen unter Verwendung der
          <a href="https://en.wikipedia.org/wiki/Caret_notation"
            >Caret-Notation</a
          >, wobei "X" ein Buchstabe von A–Z oder a–z ist (entsprechend den Codepunkten <code>U+0001</code><em>–</em><code>U+001A</code>). Zum Beispiel entspricht <code>/\cM\cJ/</code> einem "\r\n".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        Entspricht dem Zeichen mit dem Code <code><em>hh</em></code> (zwei hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        Entspricht einer UTF-16-Code-Einheit mit dem Wert
        <code><em>hhhh</em></code> (vier hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>{hhhh}</em> oder <em>\u{hhhhh}</em></code>
      </td>
      <td>
        (Nur wenn das <code>u</code>-Flag gesetzt ist.) Entspricht dem Zeichen mit dem Unicode-Wert <code>U+<em>hhhh</em></code> oder <code>U+<em>hhhhh</em></code>
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape"><strong>Unicode-Zeichenklasse-Escape:</strong></a>
          Passt zu einem Zeichen basierend auf seinen Unicode-Zeicheneigenschaften: zum Beispiel Emoji-Zeichen oder japanische <em>Katakana</em>-Zeichen oder chinesische/japanische Han/Kanji-Zeichen, etc.).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Gibt an, dass das folgende Zeichen besonders behandelt oder "escaped" werden soll. Es verhält sich auf zwei Arten.
        </p>
        <ul>
          <li>
            Für Zeichen, die normalerweise wörtlich genommen werden, gibt an, dass das nächste Zeichen besonders ist und nicht wörtlich interpretiert werden soll. Zum Beispiel passt <code>/b/</code> zu dem Zeichen "b". Indem ein Backslash vor "b" gesetzt wird, das heißt durch Verwendung von <code>/\b/</code>, wird das Zeichen speziell, um eine Wortgrenze zu bedeuten.
          </li>
          <li>
            Für Zeichen, die normalerweise besonders behandelt werden, gibt an, dass das nächste Zeichen nicht speziell ist und wörtlich interpretiert werden soll. Zum Beispiel ist "*" ein spezielles Zeichen, das bedeutet, dass 0 oder mehr Vorkommen des vorherigen Zeichens übereinstimmen sollen; zum Beispiel bedeutet <code>/a*/</code>, dass 0 oder mehr "a"s übereinstimmen. Um <code>*</code> wörtlich zu erfassen, setzen Sie einen Backslash davor; zum Beispiel passt <code>/a\*/</code> zu "a*".
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Um dieses Zeichen wörtlich zu erfassen, escapen Sie es mit sich selbst. Mit anderen Worten, um nach <code>\</code> zu suchen, verwenden Sie <code>/\\/</code>.
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
          Passt entweder zu "x" oder "y". Jede Komponente, die durch einen Pipe (<code>|</code>) getrennt ist, wird als <em>Alternative</em> bezeichnet. Zum Beispiel,
          <code>/green|red/</code> passt zu "green" in "green apple" und "red" in "red apple".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Eine Disjunktion ist eine andere Möglichkeit, "eine Reihe von Optionen" anzugeben, aber es ist keine Zeichenklasse. Disjunktionen sind keine Atome — Sie müssen eine <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">Gruppe</a> verwenden, um sie zu einem größeren Muster zu machen. <code>[abc]</code> ist funktional äquivalent zu <code>(?:a|b|c)</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Behauptungen

[Behauptungen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) umfassen Grenzen, die die Anfänge und Enden von Zeilen und Wörtern anzeigen, sowie andere Muster, die auf irgendeine Weise anzeigen, dass eine Übereinstimmung möglich ist (einschließlich Look-Ahead, Look-Behind und bedingten Ausdrücken).

### Grenzbezogene Behauptungen

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Eingangsgrenze-Anfangsbehauptung:</strong></a>
          Passt zum Beginn der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag gesetzt ist, passt es auch direkt nach einem Zeilenumbruchzeichen. Zum Beispiel passt <code>/^A/</code> nicht zum "A" in "an A", aber es passt zum ersten "A" in "An A".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dieses Zeichen hat eine andere Bedeutung, wenn es am Anfang einer
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Eingangsgrenze-Endebehauptung:</strong></a>
          Passt zum Ende der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) Flag gesetzt ist, passt es auch direkt vor einem Zeilenumbruchzeichen. Zum Beispiel passt <code>/t$/</code> nicht zum "t" in "eater", aber es passt in "eat".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Wortgrenzenbehauptung:</strong></a>
          Passt zu einer Wortgrenze. Dies ist die Position, an der ein Wortzeichen nicht von einem anderen Wortzeichen gefolgt oder davor steht, wie zwischen einem Buchstaben und einem Leerzeichen. Beachten Sie, dass eine passende Wortgrenze nicht im Match enthalten ist. Mit anderen Worten, die Länge einer passenden Wortgrenze ist null.
        </p>
        <p>Beispiele:</p>
        <ul>
          <li><code>/\bm/</code> passt zum "m" in "moon".</li>
          <li>
            <code>/oo\b/</code> passt nicht zum "oo" in "moon", da "oo" von "n" gefolgt wird, was ein Wortzeichen ist.
          </li>
          <li>
            <code>/oon\b/</code> passt zum "oon" in "moon", da "oon" das Ende des Strings ist, also nicht von einem Wortzeichen gefolgt wird.
          </li>
          <li>
            <code>/\w\b\w/</code> wird niemals zu etwas passen, da ein Wortzeichen niemals sowohl von einem Nicht-Wort als auch einem Wortzeichen gefolgt sein kann.
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Nicht-Wortgrenzenbehauptung:</strong></a>
          Passt zu einer Nicht-Wortgrenze. Dies ist eine Position, bei der das vorherige und das nächste Zeichen vom gleichen Typ sind: Entweder müssen beide Wörter sein oder beide müssen Nicht-Wörter sein, zum Beispiel zwischen zwei Buchstaben oder zwischen zwei Leerzeichen. Der Anfang und das Ende eines Strings werden als Nicht-Wörter betrachtet. Ebenso wird die passende Nicht-Wortgrenze nicht im Match enthalten sein. Zum Beispiel passt <code>/\Bon/</code> zu "on" in "at noon", und <code>/ye\B/</code> passt zu "ye" in "possibly yesterday".
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Andere Behauptungen

> [!NOTE]
> Das Zeichen `?` kann auch als Quantifizierer verwendet werden.

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Lookahead-Behauptung:</strong></a>
          Passt zu "x", nur wenn "x" von "y" gefolgt wird. Zum Beispiel passt <code>/Jack(?=Sprat)/</code> zu "Jack", nur wenn es von "Sprat" gefolgt wird. <br /><code>/Jack(?=Sprat|Frost)/</code> passt zu "Jack", nur wenn es von "Sprat" oder "Frost" gefolgt wird. Allerdings sind weder "Sprat" noch "Frost" Teil der Matchergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Negative Lookahead-Behauptung:</strong></a>
          Passt zu "x", nur wenn "x" nicht von "y" gefolgt wird. Zum Beispiel passt <code>/\d+(?!\.)/</code> zu einer Zahl, nur wenn sie nicht von einem Dezimalpunkt gefolgt wird. <code>/\d+(?!\.)/.exec('3.141')</code> passt zu "141", aber nicht zu "3".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Lookbehind-Behauptung:</strong></a>
          Passt zu "x", nur wenn "x" von "y" vorausgegangen wird. Zum Beispiel passt <code>/(?&#x3C;=Jack)Sprat/</code> zu "Sprat", nur wenn es von "Jack" vorausgegangen wird. <code>/(?&#x3C;=Jack|Tom)Sprat/</code> passt zu "Sprat", nur wenn es von "Jack" oder "Tom" vorausgegangen wird. Allerdings sind weder "Jack" noch "Tom" Teil der Matchergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Negative Lookbehind-Behauptung:</strong></a>
          Passt zu "x", nur wenn "x" nicht von "y" vorausgegangen wird. Zum Beispiel passt <code>/(?&#x3C;!-)\d+/</code> zu einer Zahl, nur wenn sie nicht von einem Minuszeichen vorausgegangen wird. <code>/(?&#x3C;!-)\d+/.exec('3')</code> passt zu "3". <code>/(?&#x3C;!-)\d+/.exec('-3')</code> es wird kein Treffer gefunden, da die Zahl von einem Minuszeichen vorausgegangen wird.
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group"><strong>Capturing-Group:</strong></a>
          Passt zu <code><em>x</em></code> und merkt sich das Match. Zum Beispiel passt <code>/(foo)/</code> zu "foo" in "foo bar".
        </p>
        <p>
          Ein regulärer Ausdruck kann mehrere Capturing-Groups enthalten. In Ergebnissen erscheinen Übereinstimmungen zu den Capturing-Groups typischerweise in einem Array, dessen Mitglieder in derselben Reihenfolge sind wie die linken Klammern in der Capturing-Group. Dies ist normalerweise einfach die Reihenfolge der Capturing-Groups selbst. Dies wird wichtig, wenn Capturing-Groups geschachtelt sind. Matches werden mit dem Index der Elemente des Ergebnisses abgerufen (<code>[1], …, [n]</code>) oder von den vordefinierten Eigenschaften des <code>RegExp</code>-Objekts (<code>$1, …, $9</code>).
        </p>
        <p>
          Capturing-Groups haben einen Leistungseinbruch. Wenn Sie den gematchten Unterstring nicht abrufen müssen, verwenden Sie lieber nicht-erfassende Klammern (siehe unten).
        </p>
        <p>
          <code><a href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/match">String.prototype.match()</a></code> gibt keine Gruppen zurück, wenn das <code>/.../g</code> Flag gesetzt ist. Sie können jedoch weiterhin <code><a href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll">String.prototype.matchAll()</a></code> verwenden, um alle Übereinstimmungen zu erhalten.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;Name>x)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group"><strong>Named Capturing-Group:</strong></a>
          Passt zu "x" und speichert es im Gruppen-Eigenschaft der zurückgegebenen Matches unter dem angegebenen Namen <code>&#x3C;Name></code>. Die spitzen Klammern (<code>&#x3C;</code> und <code>></code>) sind für den Gruppennamen erforderlich.
        </p>
        <p>
          Zum Beispiel, um den Gebietscode der Vereinigten Staaten aus einer Telefonnummer zu extrahieren, könnten wir <code>/\((?&#x3C;area>\d\d\d)\)/</code> verwenden. Die resultierende Nummer würde unter <code>matches.groups.area</code> erscheinen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>Nicht-erfassende Gruppe:</strong></a>
          Passt zu "x" merkt sich aber nicht das Match. Der gematchte Unterstring kann nicht von den Elementen des resultierenden Arrays (<code>[1], …, [n]</code>) oder von den vordefinierten Eigenschaften des <code>RegExp</code>-Objekts (<code>$1, …, $9</code>) abgerufen werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
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
          Wobei "n" eine positive ganze Zahl ist. Passt zu demselben Unterstring, der von der nth-Capturing-Group im regulären Ausdruck gematched wurde (Anzahl der linken Klammern). Zum Beispiel, <code>/apple(,)\sorange\1/</code> passt zu "apple, orange," in "apple, orange, cherry, peach".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>Named Rückverweis:</strong></a>
          Ein Rückverweis auf den letzten Unterstring, der von der <strong>Named Capturing-Group</strong> mit <code>&#x3C;Name></code> spezifiziert wurde.
        </p>
        <p>
          Zum Beispiel <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> passt zu "Sir, yes Sir" in "Do you copy? Sir, yes Sir!".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>\k</code> wird hier wörtlich verwendet, um den Anfang eines Rückverweises auf eine Named Capturing-Group anzuzeigen.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Quantifizierer

[Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) geben die Anzahl der Zeichen oder Ausdrücke an, die übereinstimmen sollen.

> [!NOTE]
> Im Folgenden bezieht sich _Element_ nicht nur auf einzelne Zeichen, sondern schließt auch [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) sowie [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) ein.

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
          Passt das vorhergehende Element "x" 0 oder mehrmals. Zum Beispiel, <code>/bo*/</code> passt zu "boooo" in "A ghost booooed" und "b" in "A bird warbled", aber zu nichts in "A goat grunted".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          Passt das vorhergehende Element "x" 1 oder mehrmals. Entspricht <code>{1,}</code>. Zum Beispiel passt <code>/a+/</code> zum "a" in "candy" und zu allen "a"s in "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          Passt das vorhergehende Element "x" 0 oder 1 Mal. Zum Beispiel passt <code>/e?le?/</code> zu "el" in "angel" und zu "le" in "angle."
        </p>
        <p>
          Wenn es unmittelbar nach einem der Quantifizierer <code>*</code>, <code>+</code>, <code>?</code> oder <code>{}</code> verwendet wird, macht es den Quantifizierer nicht-gierig (entsprechend der minimalen Anzahl von Malen), im Gegensatz zum Standard, der gierig ist (entsprechend der maximalen Anzahl von Malen).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          Wobei "n" eine nicht-negative ganze Zahl ist, passt genau "n" Vorkommen des vorhergehenden Elements "x". Zum Beispiel passt <code>/a{2}/</code> nicht zum "a" in "candy", aber es passt zu allen "a"s in "caandy", und den ersten zwei "a"s in "caaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          Wobei "n" eine nicht-negative ganze Zahl ist, passt mindestens "n" Vorkommen des vorhergehenden Elements "x". Zum Beispiel passt <code>/a{2,}/</code> nicht zum "a" in "candy", aber es passt zu allen "a"s in "caandy" und in "caaaaaaandy".
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
          Wobei "n" und "m" nicht-negative ganze Zahlen und <code>m >= n</code> sind, passt mindestens "n" und höchstens "m" Vorkommen des vorhergehenden Elements "x". Zum Beispiel passt <code>/a{1,3}/</code> zu nichts in "cndy", zum "a" in "candy", zu den zwei "a"s in "caandy", und zu den ersten drei "a"s in "caaaaaaandy". Beachten Sie, dass beim Matchen "caaaaaaandy" das Match "aaa" ist, obwohl der ursprüngliche String mehr "a"s enthält.
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
          Standardmäßig sind Quantifizierer wie <code>*</code> und <code>+</code> "gierig", was bedeutet, dass sie versuchen, so oft wie möglich zu matchen. Das <code>?</code> Zeichen nach dem Quantifizierer macht den Quantifizierer "nicht-gierig": Das bedeutet, dass es so schnell wie möglich aufhört, wenn es die minimale Anzahl von Matches gefunden hat. Zum Beispiel, bei einem String wie "some &#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo> thing":
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> wird "&#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo>" matchen
          </li>
          <li><code>/&#x3C;.*?>/</code> wird "&#x3C;foo>" matchen</li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Das Hinzufügen von <code>?</code> nach <code>{n}</code> ist syntaktisch gültig, aber praktisch nutzlos. Da <code>{n}</code> immer genau n Mal matcht, verhält sich <code>x{n}?</code> genauso wie <code>x{n}</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>
