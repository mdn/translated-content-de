---
title: Reguläre Ausdrücke
slug: Web/JavaScript/Guide/Regular_expressions
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}

Reguläre Ausdrücke sind Muster, die verwendet werden, um Zeichenkombinationen in Zeichenfolgen zu finden.
In JavaScript sind reguläre Ausdrücke auch Objekte. Diese Muster werden mit den Methoden {{jsxref("RegExp/exec", "exec()")}} und {{jsxref("RegExp/test", "test()")}} von {{jsxref("RegExp")}} verwendet sowie mit den Methoden {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}} und {{jsxref("String/split", "split()")}} von {{jsxref("String")}}.
Dieses Kapitel beschreibt JavaScript-Reguläre Ausdrücke. Es bietet einen kurzen Überblick über jedes Syntaxelement. Für eine detaillierte Erklärung der Semantik jedes Elements lesen Sie die [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)-Referenz.

## Erstellung eines regulären Ausdrucks

Sie erstellen einen regulären Ausdruck auf eine von zwei Arten:

- Durch Verwendung eines regulären Ausdrucks-Literals, das aus einem zwischen Schrägstrichen eingeschlossenen Muster besteht, wie folgt:

  ```js
  const re = /ab+c/;
  ```

  Reguläre Ausdrucks-Literale bieten die Kompilierung des regulären Ausdrucks, wenn das Skript geladen wird.
  Wenn der reguläre Ausdruck konstant bleibt, kann dies die Leistung verbessern.

- Oder durch Aufruf der Konstruktor-Funktion des {{jsxref("RegExp")}}-Objekts, wie folgt:

  ```js
  const re = new RegExp("ab+c");
  ```

  Durch Verwendung der Konstruktor-Funktion wird der reguläre Ausdruck zur Laufzeit kompiliert.
  Verwenden Sie die Konstruktor-Funktion, wenn Sie wissen, dass sich das Muster des regulären Ausdrucks ändern wird, oder wenn Sie das Muster nicht kennen und es aus einer anderen Quelle erhalten, wie beispielsweise Benutzereingaben.

## Schreiben eines regulären Ausdrucksmusters

Ein reguläres Ausdrucksmuster besteht aus einfachen Zeichen wie `/abc/` oder einer Kombination aus einfachen und speziellen Zeichen wie `/ab*c/` oder `/Chapter (\d+)\.\d*/`.
Das letzte Beispiel enthält Klammern, die als Gedächtnisstütze verwendet werden.
Die mit diesem Teil des Musters erzielte Übereinstimmung wird zur späteren Verwendung gespeichert, wie in [Verwendung von Gruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups) beschrieben.

### Verwendung einfacher Muster

Einfache Muster bestehen aus Zeichen, für die Sie eine direkte Übereinstimmung finden möchten. Zum Beispiel stimmt das Muster `/abc/` nur mit Zeichenkombinationen in Zeichenfolgen überein, wenn die genaue Sequenz „abc“ vorkommt (alle Zeichen zusammen und in dieser Reihenfolge).
Eine solche Übereinstimmung wäre in den Zeichenfolgen „Hi, do you know your abc's?“ und „The latest airplane designs evolved from slabcraft.“ erfolgreich.
In beiden Fällen stimmt die Übereinstimmung mit der Teilzeichenfolge „abc“.
Es gibt keine Übereinstimmung in der Zeichenfolge „Grab crab“, da sie zwar die Teilzeichenfolge „ab c“ enthält, aber nicht die genaue Teilzeichenfolge „abc“.

### Verwendung spezieller Zeichen

Wenn die Suche nach einer Übereinstimmung mehr als eine direkte Übereinstimmung erfordert, z. B. das Finden von einem oder mehreren „b“ oder das Finden von Leerzeichen, können Sie spezielle Zeichen im Muster einschließen.
Zum Beispiel, um _ein einzelnes „a“ gefolgt von null oder mehr „b“ gefolgt von „c“_ zu finden, würden Sie das Muster `/ab*c/` verwenden: das `*` nach „b“ bedeutet „0 oder mehr Vorkommen des vorangehenden Elements.“
In der Zeichenfolge „cbbabbbbcdebc“ stimmt dieses Muster mit der Teilzeichenfolge „abbbbc“ überein.

Die folgenden Seiten bieten Listen der verschiedenen speziellen Zeichen, die in jede Kategorie passen, zusammen mit Beschreibungen und Beispielen.

- [Assertions (Behauptungen)](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
  - : Assertions schließen Grenzen ein, die Anfänge und Enden von Zeilen und Wörtern anzeigen, sowie andere Muster, die in irgendeiner Weise darauf hinweisen, dass eine Übereinstimmung möglich ist (einschließlich Voraus-, Rückschau und bedingten Ausdrücken).
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
  - : Unterscheiden verschiedene Arten von Zeichen. Zum Beispiel die Unterscheidung zwischen Buchstaben und Ziffern.
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
  - : Gruppen gruppieren mehrere Muster als Ganzes und erfassende Gruppen liefern zusätzliche Teilübereinstimmungsinformationen bei Verwendung eines regulären Ausdrucksmusters zum Vergleich mit einer Zeichenfolge. Rückverweise beziehen sich auf eine zuvor erfasste Gruppe im gleichen regulären Ausdruck.
- [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
  - : Geben an, wie viele Zeichen oder Ausdrücke abgeglichen werden sollen.

Wenn Sie alle speziellen Zeichen, die in regulären Ausdrücken verwendet werden können, in einer Tabelle ansehen möchten, siehe folgendes:

<table class="standard-table">
  <caption>
    Spezielle Zeichen in regulären Ausdrücken.
  </caption>
  <thead>
    <tr>
      <th scope="col">Zeichen / Konstrukte</th>
      <th scope="col">Entsprechender Artikel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>[xyz]</code>, <code>[^xyz]</code>, <code>.</code>,
        <code>\d</code>, <code>\D</code>, <code>\w</code>, <code>\W</code>,
        <code>\s</code>, <code>\S</code>, <code>\t</code>, <code>\r</code>,
        <code>\n</code>, <code>\v</code>, <code>\f</code>, <code>[\b]</code>,
        <code>\0</code>, <code>\c<em>X</em></code>, <code>\x<em>hh</em></code>,
        <code>\u<em>hhhh</em></code>, <code>\u<em>{hhhh}</em></code>,
        <code><em>x</em>|<em>y</em></code>
      </td>
      <td>
        <p>
          <a
            href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
            >Zeichenklassen</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>^</code>, <code>$</code>, <code>\b</code>, <code>\B</code>,
        <code>x(?=y)</code>, <code>x(?!y)</code>, <code>(?&#x3C;=y)x</code>,
        <code>(?&#x3C;!y)x</code>
      </td>
      <td>
        <p>
          <a
            href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
            >Assertions</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>(<em>x</em>)</code>, <code>(?&#x3C;Name>x)</code>, <code>(?:<em>x</em>)</code>,
        <code>\<em>n</em></code>, <code>\k&#x3C;Name></code>
      </td>
      <td>
        <p>
          <a
            href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences"
            >Gruppen und Rückverweise</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>*</code>, <code><em>x</em>+</code>, <code><em>x</em>?</code>,
        <code><em>x</em>{<em>n</em>}</code>, <code><em>x</em>{<em>n</em>,}</code>,
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <p>
          <a
            href="/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers"
            >Quantifizierer</a
          >
        </p>
      </td>
    </tr>
  </tbody>
</table>

> **Note:** [Ein größeres Cheat-Sheet ist ebenfalls verfügbar](/de/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet) (nur zusammenfassende Teile dieser einzelnen Artikel).

### Escaping (Maskierung)

Wenn Sie eines der speziellen Zeichen wörtlich verwenden müssen (tatsächlich nach einem `"*"` suchen, zum Beispiel), müssen Sie es maskieren, indem Sie einen Backslash davor setzen.
Um zum Beispiel nach „a“ gefolgt von „_“ gefolgt von „b“ zu suchen, verwenden Sie `/a\*b/` — der Backslash „maskiert“ das `"_"`, wodurch es zum Literal wird anstatt zum Sonderzeichen.

Ähnlich: Wenn Sie ein reguläres Ausdrucks-Literal schreiben und einen Schrägstrich ("/") abgleichen müssen, müssen Sie diesen maskieren (ansonsten terminiert er das Muster).
Um zum Beispiel nach dem String „/example/“ gefolgt von einem oder mehr alphabetischen Zeichen zu suchen, verwenden Sie `/\/example\/[a-z]+/i` — die Backslashes vor jedem Schrägstrich machen sie zu Literalen.

Um einen wörtlichen Backslash zu matchen, müssen Sie den Backslash maskieren.
Um zum Beispiel den string "C:\\" zu matchen, wobei "C" ein beliebiger Buchstabe sein kann, verwenden Sie `/[A-Z]:\\/` — der erste Backslash maskiert den darauf folgenden, sodass der Ausdruck nach einem einzelnen wörtlichen Backslash sucht.

Wenn Sie den `RegExp`-Konstruktor mit einem String-Literal verwenden, denken Sie daran, dass der Backslash in String-Literalen ein Escape-Zeichen ist, sodass Sie ihn im regulären Ausdruck maskieren müssen: `/a\*b/` und `new RegExp("a\\*b")` erzeugen denselben Ausdruck, der nach „a“ gefolgt von einem wörtlichen "\*" gefolgt von „b“ sucht.

Wenn Maskierungszeichen nicht bereits Teil Ihres Musters sind, können Sie sie mit {{jsxref("String.prototype.replace()")}} hinzufügen:

```js
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\![](2-50961a40.md)"); // ![](2-50961a40.md) means the whole matched string
}
```

Das "g" nach dem regulären Ausdruck ist eine Option oder ein Flag, das eine globale Suche durchführt, in der ganzen Zeichenfolge sucht und alle Übereinstimmungen zurückgibt.
Es wird im Detail unten in [Erweitertes Suchen mit Flags](#erweitertes_suchen_mit_flags) erklärt.

_Warum ist das nicht in JavaScript eingebaut?_ Es gibt einen [Vorschlag](https://github.com/tc39/proposal-regex-escaping), eine solche Funktion zu `RegExp` hinzuzufügen.

### Verwendung von Klammern

Klammern um einen beliebigen Teil des regulären Ausdrucks-Musters führen dazu, dass dieser Teil der übereinstimmenden Teilzeichenfolge gespeichert wird.
Einmal gespeichert, kann die Teilzeichenfolge für andere Verwendungen aufgerufen werden. Siehe [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups) für nähere Details.

## Verwendung von regulären Ausdrücken in JavaScript

Reguläre Ausdrücke werden mit den {{jsxref("RegExp")}}-Methoden {{jsxref("RegExp/test", "test()")}} und {{jsxref("RegExp/exec", "exec()")}} und mit den {{jsxref("String")}}-Methoden {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}} und {{jsxref("String/split", "split()")}} verwendet.

| Methode                                         | Beschreibung                                                                                                                                              |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp/exec", "exec()")}}             | Führt eine Suche nach einem Treffer in einer Zeichenfolge aus. Gibt ein Array mit Informationen oder `null` bei einem Fehlgriff zurück.                   |
| {{jsxref("RegExp/test", "test()")}}             | Prüft auf einen Treffer in einer Zeichenfolge. Gibt `true` oder `false` zurück.                                                                           |
| {{jsxref("String/match", "match()")}}           | Gibt ein Array mit allen Übereinstimmungen, einschließlich erfasster Gruppen, oder `null`, wenn keine Übereinstimmung gefunden wird, zurück.              |
| {{jsxref("String/matchAll", "matchAll()")}}     | Gibt einen Iterator mit allen Übereinstimmungen, einschließlich erfasster Gruppen, zurück.                                                                |
| {{jsxref("String/search", "search()")}}         | Prüft auf einen Treffer in einer Zeichenfolge. Gibt den Index der Übereinstimmung oder `-1`, wenn die Suche fehlschlägt, zurück.                          |
| {{jsxref("String/replace", "replace()")}}       | Führt eine Suche nach einem Treffer in einer Zeichenfolge aus und ersetzt die übereinstimmende Teilzeichenfolge durch eine Ersetzungsteilzeichenfolge.    |
| {{jsxref("String/replaceAll", "replaceAll()")}} | Führt eine Suche nach allen Treffern in einer Zeichenfolge aus und ersetzt die übereinstimmenden Teilzeichenfolgen durch eine Ersetzungsteilzeichenfolge. |
| {{jsxref("String/split", "split()")}}           | Verwendet einen regulären Ausdruck oder eine feste Zeichenfolge, um eine Zeichenfolge in ein Array von Teilzeichenfolgen zu zerlegen.                     |

Wenn Sie wissen möchten, ob ein Muster in einer Zeichenfolge gefunden wird, verwenden Sie die `test()`- oder `search()`-Methoden; für mehr Informationen (aber langsamere Ausführung) verwenden Sie die `exec()`- oder `match()`-Methoden.
Wenn Sie `exec()` oder `match()` verwenden und die Übereinstimmung erfolgreich ist, geben diese Methoden ein Array zurück und aktualisieren die Eigenschaften des zugehörigen regulären Ausdruckobjekts sowie des vordefinierten regulären Ausdrucksobjekts, `RegExp`.
Wenn die Übereinstimmung fehlschlägt, gibt die `exec()`-Methode `null` zurück (was zu `false` zwingt).

Im folgenden Beispiel verwendet das Skript die `exec()`-Methode, um eine Übereinstimmung in einer Zeichenfolge zu finden.

```js
const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbz");
```

Wenn Sie nicht auf die Eigenschaften des regulären Ausdrucks zugreifen müssen, ist eine alternative Möglichkeit, `myArray` zu erstellen, dieses Skript:

```js
const myArray = /d(b+)d/g.exec("cdbbdbsbz");
// similar to 'cdbbdbsbz'.match(/d(b+)d/g); however,
// 'cdbbdbsbz'.match(/d(b+)d/g) outputs [ "dbbd" ]
// while /d(b+)d/g.exec('cdbbdbsbz') outputs [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ]
```

(Siehe [Verwendung des globalen Such-Flags mit `exec()`](#using_the_global_search_flag_with_exec) für weitere Informationen zu den unterschiedlichen Verhaltensweisen.)

Wenn Sie den regulären Ausdruck aus einem String konstruieren möchten, ist eine weitere Alternative dieses Skript:

```js
const myRe = new RegExp("d(b+)d", "g");
const myArray = myRe.exec("cdbbdbsbz");
```

Mit diesen Skripten gelingt die Übereinstimmung und gibt das Array zurück und aktualisiert die Eigenschaften, die in der folgenden Tabelle angezeigt werden.

<table class="standard-table">
  <caption>
    Ergebnisse der Ausführung des regulären Ausdrucks.
  </caption>
  <thead>
    <tr>
      <th scope="col">Objekt</th>
      <th scope="col">Eigenschaft oder Index</th>
      <th scope="col">Beschreibung</th>
      <th scope="col">In diesem Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4"><code>myArray</code></td>
      <td></td>
      <td>Die übereinstimmende Zeichenfolge und alle gemerkten Teilzeichenfolgen.</td>
      <td><code>['dbbd', 'bb', index: 1, input: 'cdbbdbsbz']</code></td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>Der nullbasierte Index des Treffers in der Eingabezeichenfolge.</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>Die Originalzeichenfolge.</td>
      <td><code>'cdbbdbsbz'</code></td>
    </tr>
    <tr>
      <td><code>[0]</code></td>
      <td>Die zuletzt übereinstimmenden Zeichen.</td>
      <td><code>'dbbd'</code></td>
    </tr>
    <tr>
      <td rowspan="2"><code>myRe</code></td>
      <td><code>lastIndex</code></td>
      <td>Der Index, an dem die nächste Übereinstimmung beginnt.
        (Diese Eigenschaft wird nur gesetzt, wenn der reguläre Ausdruck die g-Option verwendet, die in
        <a href="#advanced_searching_with_flags">Erweitertes Suchen mit Flags</a> beschrieben wird.)
      </td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>
        Der Text des Musters. Aktualisiert zum Zeitpunkt der Erstellung des regulären Ausdrucks, nicht bei der Ausführung.
      </td>
      <td><code>'d(b+)d'</code></td>
    </tr>
  </tbody>
</table>

Wie in der zweiten Form dieses Beispiels gezeigt, können Sie einen regulären Ausdruck erstellen, der mit einem Objektinitialisierer erstellt wurde, ohne ihn einer Variablen zuzuweisen.
Wenn Sie dies jedoch tun, ist jedes Vorkommen ein neuer reguläres Ausdruck.
Deshalb können Sie, wenn Sie diese Form verwenden, ohne sie einer Variablen zuzuweisen, nicht auf die Eigenschaften dieses regulären Ausdrucks zugreifen.
Angenommen, Sie haben dieses Skript:

```js
const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbz");
console.log(`The value of lastIndex is ${myRe.lastIndex}`);

// "The value of lastIndex is 5"
```

Wenn Sie jedoch dieses Skript haben:

```js
const myArray = /d(b+)d/g.exec("cdbbdbsbz");
console.log(`The value of lastIndex is ${/d(b+)d/g.lastIndex}`);

// "The value of lastIndex is 0"
```

Die Vorkommen von `/d(b+)d/g` in beiden Anweisungen sind verschiedene reguläre Ausdrucksobjekte und haben daher unterschiedliche Werte für ihre `lastIndex`-Eigenschaft.
Wenn Sie auf die Eigenschaften eines regulären Ausdrucks zugreifen müssen, der mit einem Objektinitialisierer erstellt wurde, sollten Sie ihn zuerst einer Variablen zuweisen.

### Erweitertes Suchen mit Flags

Reguläre Ausdrücke haben optionale Flags, die Funktionen wie globale Suche und die Suche ohne Beachtung der Groß- und Kleinschreibung ermöglichen.
Diese Flags können separat oder beliebig kombiniert verwendet werden und sind Teil des regulären Ausdrucks.

| Flag | Beschreibung                                                                                          | Entsprechende Eigenschaft                       |
| ---- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`  | Erzeugt Indizes für Übereinstimmungsteilzeichenfolgen.                                                | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`  | Globale Suche.                                                                                        | {{jsxref("RegExp/global", "global")}}           |
| `i`  | Suche ohne Beachtung der Groß- und Kleinschreibung.                                                   | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`  | Erlaubt `^` und `$`, neben Zeilenumbrüchen zu übereinstimmen.                                         | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`  | Erlaubt `.` um mit Zeilenumbrüchen zu übereinstimmen.                                                 | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`  | "Unicode"; behandelt ein Muster als eine Folge von Unicode-Codepunkten.                               | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`  | Ein Upgrade für den `u`-Modus mit mehr Unicode-Funktionen.                                            | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`  | Führt eine "haftende" Suche aus, die ab der aktuellen Position in der Zielzeichenfolge übereinstimmt. | {{jsxref("RegExp/sticky", "sticky")}}           |

Um ein Flag mit dem regulären Ausdruck zu verwenden, verwenden Sie diese Syntax:

```js
const re = /pattern/flags;
```

oder

```js
const re = new RegExp("pattern", "flags");
```

Beachten Sie, dass die Flags ein integraler Bestandteil eines regulären Ausdrucks sind. Sie können nicht später hinzugefügt oder entfernt werden.

Zum Beispiel erstellt `re = /\w+\s/g` einen regulären Ausdruck, der nach einem oder mehreren Zeichen gefolgt von einem Leerzeichen sucht, und sucht nach dieser Kombination im gesamten String.

```js
const re = /\w+\s/g;
const str = "fee fi fo fum";
const myArray = str.match(re);
console.log(myArray);

// ["fee ", "fi ", "fo "]
```

Sie könnten die Zeile ersetzen:

```js
const re = /\w+\s/g;
```

mit:

```js
const re = new RegExp("\\w+\\s", "g");
```

und dasselbe Ergebnis erhalten.

Das `m`-Flag wird verwendet, um anzugeben, dass eine mehrzeilige Eingabezeichenfolge als mehrere Zeilen behandelt werden sollte.
Wenn das `m`-Flag verwendet wird, stimmen `^` und `$` am Anfang oder Ende einer jeden Zeile innerhalb der Eingabezeichenfolge anstelle des Anfangs oder Endes der gesamten Zeichenfolge überein.

Die `i`, `m` und `s`-Flags können für bestimmte Teile eines Regulären Ausdrucks mit der [Modifier](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)-Syntax aktiviert oder deaktiviert werden.

#### Verwendung des globalen Such-Flags mit exec()

Die {{jsxref("RegExp.prototype.exec()")}}-Methode mit dem `g`-Flag gibt jeden Treffer und seine Position iterativ zurück.

```js
const str = "fee fi fo fum";
const re = /\w+\s/g;

console.log(re.exec(str)); // ["fee ", index: 0, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fi ", index: 4, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fo ", index: 7, input: "fee fi fo fum"]
console.log(re.exec(str)); // null
```

Im Gegensatz dazu gibt die {{jsxref("String.prototype.match()")}}-Methode alle Treffer auf einmal zurück, jedoch ohne ihre Position.

```js
console.log(str.match(re)); // ["fee ", "fi ", "fo "]
```

#### Verwendung von Unicode-Regulären Ausdrücken

Das `u`-Flag wird verwendet, um „Unicode“-Reguläre Ausdrücke zu erstellen; das heißt, reguläre Ausdrücke, die die Übereinstimmung mit Unicode-Text unterstützen. Eine wichtige Funktion, die im Unicode-Modus aktiviert ist, sind [Unicode-Eigenschaftsescapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape). Zum Beispiel könnte der folgende reguläre Ausdruck verwendet werden, um mit einem beliebigen Unicode-"Wort" übereinzustimmen:

```js
/\p{L}*/u;
```

Unicode-Reguläre Ausdrücke haben auch ein anderes Ausführungsverhalten. Weitere Erklärungen dazu enthält [`RegExp.prototype.unicode`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode).

## Beispiele

> [!NOTE]
> Mehrere Beispiele sind auch verfügbar in:
>
> - den Referenzseiten für {{jsxref("RegExp/exec", "exec()")}}, {{jsxref("RegExp/test", "test()")}}, {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/search", "search()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/split", "split()")}}
> - den Leitfaden-Artikeln: [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes), [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions), [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences), [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)

### Verwendung spezieller Zeichen zur Eingabeverifizierung

Im folgenden Beispiel wird erwartet, dass der Benutzer eine Telefonnummer eingibt.
Wenn der Benutzer den „Prüfen“-Button drückt, überprüft das Skript die Gültigkeit der Nummer.
Wenn die Nummer gültig ist (mit der durch den regulären Ausdruck angegebenen Zeichenfolge übereinstimmt), zeigt das Skript eine Nachricht an, die dem Benutzer dankt und die Nummer bestätigt.
Wenn die Nummer ungültig ist, informiert das Skript den Benutzer, dass die Telefonnummer nicht gültig ist.

Der reguläre Ausdruck sucht nach:

1. dem Beginn der Datenzeile: `^`
2. gefolgt von drei numerischen Zeichen `\d{3}` ODER `|` einer linken Klammer `\(`, gefolgt von drei Ziffern `\d{3}`, gefolgt von einer rechten Klammer `\)`, in einer nicht-aufnehmenden Gruppe `(?:)`
3. gefolgt von einem Bindestrich, Schrägstrich oder Dezimalpunkt in einer aufnehmenden Gruppe `()`
4. gefolgt von drei Ziffern `\d{3}`
5. gefolgt von der Übereinstimmung, die in der (ersten) aufgenommenen Gruppe gespeichert ist `\1`
6. gefolgt von vier Ziffern `\d{4}`
7. gefolgt vom Ende der Datenzeile: `$`

#### HTML

```html
<p>
  Enter your phone number (with area code) and then click "Check".
  <br />
  The expected format is like ###-###-####.
</p>
<form id="form">
  <input id="phone" />
  <button type="submit">Check</button>
</form>
<p id="output"></p>
```

#### JavaScript

```js
const form = document.querySelector("#form");
const input = document.querySelector("#phone");
const output = document.querySelector("#output");

const re = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;

function testInfo(phoneInput) {
  const ok = re.exec(phoneInput.value);

  output.textContent = ok
    ? `Thanks, your phone number is ${ok[0]}`
    : `${phoneInput.value} isn't a phone number with area code!`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  testInfo(input);
});
```

#### Ergebnis

{{EmbedLiveSample("Using_special_characters_to_verify_input")}}

## Werkzeuge

- [RegExr](https://regexr.com/)
  - : Ein Online-Tool zum Lernen, Erstellen und Testen von regulären Ausdrücken.
- [Regex-Tester](https://regex101.com/)
  - : Ein Online-Regex-Builder/Debbuger
- [Regex interaktives Tutorial](https://regexlearn.com/)
  - : Ein Online-Interaktiv-Tutorial, Cheat-Sheet und Playground.
- [Regex-Visualizer](https://extendsclass.com/regex-tester.html)
  - : Ein online visueller Regex-Tester.

{{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}
