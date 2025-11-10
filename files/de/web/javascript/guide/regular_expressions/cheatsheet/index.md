---
title: Syntax-Übersicht von Regulären Ausdrücken
slug: Web/JavaScript/Guide/Regular_expressions/Cheatsheet
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Diese Seite bietet eine allgemeine Übersicht über alle Funktionen der `RegExp`-Syntax, indem der Inhalt der Artikel im `RegExp`-Leitfaden zusammengefasst wird. Wenn Sie mehr Informationen zu einem bestimmten Thema benötigen, folgen Sie bitte dem Link in der entsprechenden Überschrift, um den vollständigen Artikel aufzurufen, oder gehen Sie zum [Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions).

## Zeichenklassen

[Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) unterscheiden Arten von Zeichen, wie zum Beispiel die Unterscheidung zwischen Buchstaben und Ziffern.

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
          Passt zu einem der eingeschlossenen Zeichen. Sie können einen Bereich von Zeichen angeben, indem Sie einen Bindestrich verwenden, aber wenn der Bindestrich als erstes oder letztes Zeichen in den eckigen Klammern erscheint, wird er als normaler Bindestrich betrachtet, der in die Zeichenklasse als normales Zeichen aufgenommen wird.
        </p>
        <p>
          Zum Beispiel, <code>[abcd]</code> ist das gleiche wie <code>[a-d]</code>.
          Sie passen zum "b" in "Brisket" und zum "c" in "Chop".
        </p>
        <p>
          Zum Beispiel, <code>[abcd-]</code> und <code>[-abcd]</code> passen zum
          "b" in "Brisket", dem "c" in "Chop" und dem "-" (Bindestrich) in
          "non-profit".
        </p>
        <p>
          Zum Beispiel, <code>[\w-]</code> ist das gleiche wie
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
          Passt zu allem, was nicht in den eckigen Klammern enthalten ist. Sie können einen Bereich von Zeichen angeben, indem Sie einen Bindestrich verwenden, aber wenn der Bindestrich als erstes Zeichen nach dem <code>^</code> oder als letztes Zeichen in den eckigen Klammern erscheint, wird er als normaler Bindestrich betrachtet, der in die Zeichenklasse als normales Zeichen aufgenommen wird. Zum Beispiel, <code>[^abc]</code> ist das gleiche wie <code>[^a-c]</code>. Sie passen anfangs zum "o" in "Bacon" und zum "h" in "Chop".
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard"><strong>Platzhalter:</strong></a>
          Passt zu jedem einzelnen Zeichen <em>außer</em> Zeilenendzeichen:
          <code>\n</code>, <code>\r</code>, <code>\u2028</code> oder <code>\u2029</code>. Zum Beispiel, <code>/.y/</code> passt zu "my" und "ay", aber nicht zu "yes" in "yes make my day", da vor dem "y" in "yes" kein Zeichen steht. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> (s)-Flag aktiviert ist, passt es auch zu Zeilenendzeichen. Innerhalb einer Zeichenklasse verliert der Punkt seine Sonderbedeutung und passt zu einem Punkt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Ziffernzeichenklassen-Escape:</strong></a>
          Passt zu jeder Ziffer (arabische Ziffer). Entspricht <code>[0-9]</code>. Zum Beispiel, <code>/\d/</code> oder <code>/[0-9]/</code> passt zu "2" in "B2 is the suite number".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Ziffernzeichenklassen-Escape:</strong></a>
          Passt zu jedem Zeichen, das keine Ziffer (arabische Ziffer) ist. Entspricht zu <code>[^0-9]</code>. Zum Beispiel, <code>/\D/</code> oder <code>/[^0-9]/</code> passt zu "B" in "B2 is the suite number".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Wortzeichenklassen-Escape:</strong></a>
          Passt zu jedem alphanumerischen Zeichen aus dem Grundalphabet, einschließlich des Unterstrichs. Entspricht <code>[A-Za-z0-9_]</code>. Zum Beispiel, <code>/\w/</code> passt zu "a" in "apple", "5" in "$5.28", "3" in "3D" und "m" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Wortzeichenklassen-Escape:</strong></a>
          Passt zu jedem Zeichen, das kein Wortzeichen aus dem Grundalphabet ist. Entspricht <code>[^A-Za-z0-9_]</code>. Zum Beispiel, <code>/\W/</code> oder <code>/[^A-Za-z0-9_]/</code> passt zu "%" in "50%" und "É" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Leerstelle-Zeichenklassen-Escape:</strong></a>
          Passt zu einem einzelnen Leerzeichen, einschließlich Leerzeichen, Tabulator, Formularvorschub, Zeilenumbruch und anderen Unicode-Leerzeichen. Entspricht <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel, <code>/\s\w*/</code> passt zu " bar" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Nicht-Leerstelle-Zeichenklassen-Escape:</strong></a>
          Passt zu einem einzelnen Zeichen außer einem Leerzeichen. Entspricht <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Zum Beispiel, <code>/\S\w*/</code> passt zu "foo" in "foo bar".
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
        Passt zu einem Rückschritt. Wenn Sie die Wortgrenzen-Behauptung
        (<code>\b</code>) suchen, siehe
        <a
          href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
          >Behauptungen</a
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
          Passt zu einem Steuerzeichen, das das
          <a href="https://de.wikipedia.org/wiki/Caret-Notation"
            >Caret-Notation</a
          > verwendet, wobei "X" ein Buchstabe von A bis Z ist (entsprechend den Codepunkten
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
        Passt zu einer UTF-16 Code-Einheit mit dem Wert
        <code><em>hhhh</em></code> (vier hexadezimale Ziffern).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>{hhhh}</em> oder <em>\u{hhhhh}</em></code>
      </td>
      <td>
        (Nur wenn das <code>u</code>-Flag gesetzt ist.) Passt zu dem Zeichen mit dem Unicode-Wert <code>U+<em>hhhh</em></code> oder <code
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
          Passt zu einem Zeichen basierend auf seinen Unicode-Zeicheneigenschaften: zum Beispiel, Emoji-Zeichen oder japanische
          <em>Katakana</em>-Zeichen oder chinesische/japanische Han/Kanji-Zeichen usw.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Gibt an, dass das folgende Zeichen speziell behandelt oder
          "escaped" werden sollte. Es verhält sich auf eine von zwei Arten.
        </p>
        <ul>
          <li>
            Für Zeichen, die normalerweise wörtlich behandelt werden, zeigt an, dass das nächste Zeichen speziell ist und nicht wörtlich interpretiert werden soll. Zum Beispiel, <code>/b/</code> passt zu dem Zeichen "b". Durch das Voranstellen eines Backslashes vor "b", also mit <code>/\b/</code>, wird das Zeichen speziell, um eine Wortgrenze anzuzeigen.
          </li>
          <li>
            Für Zeichen, die normalerweise speziell behandelt werden, zeigt an, dass das nächste Zeichen nicht speziell ist und wörtlich interpretiert werden soll. Zum Beispiel, "*" ist ein spezielles Zeichen, das 0 oder mehr Vorkommen des vorhergehenden Zeichens bedeutet; zum Beispiel, <code>/a*/</code> bedeutet, dass 0 oder mehr "a"s übereinstimmen sollen. Um <code>*</code> wörtlich zu übereinstimmen, stellen Sie einen Backslash voran; zum Beispiel, <code>/a\*/</code> passt zu "a*".
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Um dieses Zeichen wörtlich zu suchen, escapen Sie es mit sich selbst. Mit anderen Worten, um nach <code>\</code> zu suchen, verwenden Sie <code>/\\/</code>.
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction"><strong>Alternative:</strong></a>
          Passt zu "x" oder zu "y". Jede Komponente, getrennt durch eine Pipe (<code>|</code>), wird als <em>Alternative</em> bezeichnet. Zum Beispiel,
          <code>/green|red/</code> passt zu "green" in "green apple" und "red" in "red apple".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Eine Alternative ist eine andere Möglichkeit, "eine Auswahl von Optionen" anzugeben, aber sie ist keine Zeichenklasse. Alternativen sind keine Atome — Sie müssen ein <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">Gruppe</a> verwenden, um sie Teil eines größeren Musters zu machen. <code>[abc]</code> ist funktional äquivalent zu <code>(?:a|b|c)</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Behauptungen

[Behauptungen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) umfassen Grenzen, die die Anfänge und Enden von Zeilen und Wörtern anzeigen, sowie andere Muster, die auf irgendeine Weise anzeigen, dass eine Übereinstimmung möglich ist (einschließlich Look-ahead, Look-behind und konditionale Ausdrücke).

### Grenztyp-Behauptungen

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Eingabe-Grenzanfang-Behauptung:</strong></a>
          Passt zu Beginn der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m)-Flag aktiviert ist, passt es auch unmittelbar nach einem Zeilenumbruchzeichen. Zum Beispiel, <code>/^A/</code> passt nicht zum "A" in "an A", aber es passt zum ersten "A" in "An A".
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Eingabe-Grenzende-Behauptung:</strong></a>
          Passt zu Ende der Eingabe. Wenn das <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m)-Flag aktiviert ist, passt es auch unmittelbar vor einem Zeilenumbruchzeichen. Zum Beispiel, <code>/t$/</code> passt nicht zum "t" in "eater", aber es passt dazu in "eat".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Wort-Grenzbehauptung:</strong></a>
          Passt zu einer Wortgrenze. Dies ist die Position, an der ein Wortzeichen nicht von einem anderen Wortzeichen gefolgt oder vorhergegangen wird, wie zwischen einem Buchstaben und einem Leerzeichen. Beachten Sie, dass eine übereinstimmende Wortgrenze nicht in die Übereinstimmung einbezogen ist. Mit anderen Worten, die Länge einer übereinstimmenden Wortgrenze ist null.
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
            Ende der Zeichenkette ist und daher nicht von einem Wortzeichen gefolgt wird.
          </li>
          <li>
            <code>/\w\b\w/</code> wird niemals etwas treffen, weil ein Wortzeichen nie von einem Nicht-Wort und einem Wortzeichen gefolgt werden kann.
          </li>
        </ul>
        <p>
          Um ein Rückschrittzeichen (<code>[\b]</code>) zu suchen, siehe
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Nicht-Wort-Grenzbehauptung:</strong></a>
          Passt zu einer Nicht-Wort-Grenze. Dies ist eine Position, an der das vorherige und das nächste Zeichen vom gleichen Typ sind: Entweder müssen beide Worte sein oder beide müssen Nicht-Wörter sein, zum Beispiel zwischen zwei Buchstaben oder zwischen zwei Leerzeichen. Der Anfang und das Ende einer Zeichenkette werden als Nicht-Wörter betrachtet. Wie die übereinstimmende Wortgrenze wird die übereinstimmende Nicht-Wort-Grenze ebenfalls nicht in die Übereinstimmung einbezogen. Zum Beispiel, <code>/\Bon/</code> passt zu "on" in "at noon", und <code>/ye\B/</code> passt zu "ye" in "possibly yesterday".
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Andere Behauptungen

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Lookahead-Behauptung:</strong></a>
          Passt zu "x" nur, wenn "x" durch "y" gefolgt wird. Zum Beispiel, <code>/Jack(?=Sprat)/</code> passt zu "Jack" nur, wenn es durch "Sprat" gefolgt wird.<br /><code
            >/Jack(?=Sprat|Frost)/</code
          >
          passt zu "Jack" nur, wenn es durch "Sprat" oder "Frost" gefolgt wird. Weder "Sprat" noch "Frost" sind jedoch Teil der Übereinstimmungsergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Negative Lookahead-Behauptung:</strong></a>
          Passt zu "x" nur, wenn "x" nicht durch "y" gefolgt wird. Zum Beispiel, <code>/\d+(?!\.)/</code> passt zu einer Zahl nur, wenn sie nicht durch einen Dezimalpunkt gefolgt wird. <code
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Lookbehind-Behauptung:</strong></a>
          Passt zu "x" nur, wenn "x" durch "y" vorangegangen wird. Zum Beispiel,
          <code>/(?&#x3C;=Jack)Sprat/</code> passt zu "Sprat" nur, wenn es durch "Jack" vorangegangen wird. <code>/(?&#x3C;=Jack|Tom)Sprat/</code> passt zu
          "Sprat" nur, wenn es durch "Jack" oder "Tom" vorangegangen wird. Weder "Jack" noch "Tom" sind jedoch Teil der Übereinstimmungsergebnisse.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Negative Lookbehind-Behauptung:</strong></a>
          Passt zu "x" nur, wenn
          "x" nicht durch "y" vorangegangen wird. Zum Beispiel,
          <code>/(?&#x3C;!-)\d+/</code> passt zu einer Zahl nur, wenn sie nicht
          durch ein Minuszeichen vorangegangen wird. <code>/(?&#x3C;!-)\d+/.exec('3')</code>
          passt zu "3". <code>/(?&#x3C;!-)\d+/.exec('-3')</code> findet keine
          Übereinstimmung, weil die Zahl durch das Minuszeichen vorangegangen wird.
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
          merkt sich die Übereinstimmung. Zum Beispiel, <code>/(foo)/</code> passt und merkt sich "foo" in "foo bar".
        </p>
        <p>
          Ein regulärer Ausdruck kann mehrere erfassende Gruppen enthalten. In den Ergebnissen sind Übereinstimmungen mit erfassenden Gruppen typischerweise in einem Array, dessen Mitglieder in der gleichen Reihenfolge sind wie die linken Klammern in der erfassenden Gruppe. Das ist üblicherweise einfach nur die Reihenfolge der erfassenden Gruppen selbst. Dies wird wichtig, wenn erfassende Gruppen verschachtelt sind. Matches werden über den Index der Elemente des Ergebnisses (<code
            >[1], …, [n]</code
          >) oder aus den vordefinierten Eigenschaften des <code>RegExp</code>-Objekts
          (<code>$1, …, $9</code>) zugegriffen.
        </p>
        <p>
          Erfassende Gruppen haben einen Performance-Nachteil. Wenn Sie keine Notwendigkeit haben, die übereinstimmende Teilzeichenfolge abzurufen, bevorzugen Sie nicht-erfassende Klammern (siehe unten).
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
          verwenden, um alle Übereinstimmungen zu erhalten.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;Name>x)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group"><strong>Benannte erfassende Gruppe:</strong></a>
          Passt zu "x" und speichert es im
          Gruppen-Attribut der zurückgegebenen Übereinstimmungen unter dem Namen, der von <code>&#x3C;Name></code> angegeben wird. Die spitzen Klammern (<code>&#x3C;</code> und <code>></code>) sind für den Gruppennamen erforderlich.
        </p>
        <p>
          Um zum Beispiel den US-amerikanischen Vorwahlcode aus einer Telefonnummer zu extrahieren, könnten wir <code>/\((?&#x3C;area>\d\d\d)\)/</code> verwenden. Die resultierende Nummer würde unter <code>matches.groups.area</code> erscheinen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>Nicht-erfassende Gruppe:</strong></a>
          Passt zu "x", merkt sich aber nicht
          die Übereinstimmung. Die übereinstimmende Teilzeichenfolge kann nicht aus den Elementen des resultierenden Arrays (<code>[1], …, [n]</code>) oder aus den vordefinierten Eigenschaften des <code>RegExp</code>-Objekts (<code>$1, …, $9</code>) abgerufen werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?:<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier"><strong>Modifier:</strong></a>
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference"><strong>Zurückverweis:</strong></a>
          Wo "n" eine positive ganze Zahl ist. Passt zu der gleichen Teilzeichenfolge, die von der n-ten erfassenden Gruppe im regulären Ausdruck (zählt linke Klammern) erfasst wurde. Zum Beispiel, <code>/apple(,)\sorange\1/</code> passt zu "apple, orange,", in "apple, orange, cherry, peach".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>Benannter Zurückverweis:</strong></a>
          Ein Rückverweis auf die letzte Teilzeichenfolge, die mit der <strong>benannten erfassenden Gruppe</strong> übereinstimmt, die durch <code>&#x3C;Name></code> angegeben ist.
        </p>
        <p>
          Zum Beispiel, <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> passt zu "Sir, yes Sir" in "Do you copy? Sir, yes Sir!".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>\k</code> wird hier wörtlich verwendet, um den Anfang eines Rückverweises auf eine benannte erfassende Gruppe anzugeben.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Quantifizierer

[Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) geben an, wie viele Zeichen oder Ausdrücke übereinstimmen sollen.

> [!NOTE]
> Im Folgenden bezieht sich _Item_ nicht nur auf einzelne Zeichen, sondern umfasst auch [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) und [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).

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
          Passt zum vorangehenden Element "x" 0 oder mehrmals. Zum Beispiel, <code>/bo*/</code> passt zu "boooo" in "A ghost booooed" und "b" in "A bird warbled", aber zu nichts in "A goat grunted".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          Passt zum vorangehenden Element "x" 1 oder mehrmals. Entspricht <code>{1,}</code>. Zum Beispiel, <code>/a+/</code> passt zum "a" in "candy" und zu allen "a"s in "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          Passt zum vorangehenden Element "x" 0 oder 1 Mal. Zum Beispiel, <code>/e?le?/</code> stimmt mit dem "el" in "angel" und dem "le" in "angle" überein.
        </p>
        <p>
          Wenn unmittelbar nach einem der Quantifizierer <code>*</code>, <code>+</code>, <code>?</code> oder <code>{}</code> verwendet, macht den Quantifizierer nicht-gierig (minimal übereinstimmen), im Gegensatz zum Standard, der gierig ist (maximal übereinstimmen).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative ganze Zahl ist, passt genau "n" Vorkommen des vorangehenden Elements "x". Zum Beispiel, <code>/a{2}/</code> passt nicht zum "a" in "candy", aber es passt zu allen "a"s in "caandy" und zu den ersten beiden "a"s in "caaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          Wo "n" eine nicht-negative ganze Zahl ist, passt mindestens "n" Vorkommen des vorangehenden Elements "x". Zum Beispiel, <code>/a{2,}/</code> passt nicht zum "a" in "candy", aber es passt zu allen a's in "caandy" und "caaaaaaandy".
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
          Wo "n" und "m" nicht-negative ganze Zahlen sind und <code>m >= n</code>, passt mindestens "n" und höchstens "m" Vorkommen des vorangehenden Elements "x". Zum Beispiel, <code>/a{1,3}/</code> passt zu nichts in "cndy", zum "a" in "candy", zu den zwei "a"s in "caandy" und zu den ersten drei "a"s in "caaaaaaandy". Beachten Sie, dass, wenn Sie "caaaaaaandy" anpassen, die Übereinstimmung "aaa" ist, obwohl die ursprüngliche Zeichenkette mehr "a"s enthalten hat.
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
          Standardmäßig sind Quantifizierer wie <code>*</code> und <code>+</code> "gierig", das heißt, sie versuchen, so viel von der Zeichenkette wie möglich zu erfassen. Das <code>?</code>-Zeichen nach dem Quantifizierer macht den Quantifizierer "nicht-gierig": das bedeutet, dass er aufhört, sobald er eine Übereinstimmung gefunden hat. Zum Beispiel, bei einem Zeichenkettenabschnitt wie "some &#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo> thing":
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> passt zu "&#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo>"
          </li>
          <li><code>/&#x3C;.*?>/</code> passt zu "&#x3C;foo>"</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
