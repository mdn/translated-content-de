---
title: Reguläre Ausdrücke
slug: Web/JavaScript/Guide/Regular_expressions
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}

Reguläre Ausdrücke sind Muster, die verwendet werden, um Zeichenkombinationen in Zeichenfolgen zu finden. In JavaScript sind reguläre Ausdrücke auch Objekte. Diese Muster werden mit den Methoden {{jsxref("RegExp/exec", "exec()")}} und {{jsxref("RegExp/test", "test()")}} von {{jsxref("RegExp")}} und mit den Methoden {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}} und {{jsxref("String/split", "split()")}} von {{jsxref("String")}} verwendet. Dieses Kapitel beschreibt JavaScript-Reguläre Ausdrücke. Es bietet einen kurzen Überblick über jedes Syntaxelement. Für eine detaillierte Erklärung der Semantik jedes Elements lesen Sie die [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions) Referenz.

## Erstellen eines regulären Ausdrucks

Sie konstruieren einen regulären Ausdruck auf eine von zwei Arten:

- Verwendung eines regulären Ausdrucks-Literals, das aus einem Muster besteht, das zwischen Schrägstrichen eingeschlossen ist, wie folgt:

  ```js
  const re = /ab+c/;
  ```

  Reguläre Ausdrücke-Literals bieten die Kompilierung des regulären Ausdrucks, wenn das Skript geladen wird. Wenn der reguläre Ausdruck konstant bleibt, kann dies die Leistung verbessern.

- Oder durch Aufrufen der Konstruktorfunktion des {{jsxref("RegExp")}} Objekts, wie folgt:

  ```js
  const re = new RegExp("ab+c");
  ```

  Die Verwendung der Konstruktorfunktion bietet die Kompilierung des regulären Ausdrucks zur Laufzeit. Verwenden Sie die Konstruktorfunktion, wenn sie wissen, dass sich das Muster des regulären Ausdrucks ändern wird, oder Sie das Muster nicht kennen und es aus einer anderen Quelle, z. B. Benutzereingaben, beziehen.

## Schreiben eines regulären Ausdrucksmusters

Ein reguläres Ausdrucksmuster besteht aus einfachen Zeichen, wie `/abc/`, oder einer Kombination aus einfachen und speziellen Zeichen, wie `/ab*c/` oder `/Chapter (\d+)\.\d*/`. Das letzte Beispiel enthält Klammern, die als Gedächtnishilfe verwendet werden. Das mit diesem Teil des Musters gefundene Übereinstimmung wird für die spätere Verwendung gespeichert, wie im Abschnitt [Verwendung von Gruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups) beschrieben.

### Verwendung einfacher Muster

Einfache Muster bestehen aus Zeichen, für die Sie eine direkte Übereinstimmung finden möchten. Zum Beispiel stimmt das Muster `/abc/` mit Zeichenkombinationen in Zeichenfolgen nur dann überein, wenn die genaue Sequenz `"abc"` auftritt (alle Zeichen zusammen und in dieser Reihenfolge). Eine solche Übereinstimmung würde in den Zeichenfolgen `"Hi, do you know your abc's?"` und `"The latest airplane designs evolved from slabcraft."` erfolgreich sein. In beiden Fällen erfolgt die Übereinstimmung mit der Teilzeichenfolge `"abc"`. Es gibt keine Übereinstimmung in der Zeichenfolge `"Grab crab"`, da zwar die Teilzeichenfolge `"ab c"` enthalten ist, jedoch nicht die genaue Teilzeichenfolge `"abc"`.

### Verwendung von Sonderzeichen

Wenn die Suche nach einer Übereinstimmung mehr als eine direkte Übereinstimmung erfordert, wie das Finden von einem oder mehreren b's oder das Finden von Leerzeichen, können Sie Sonderzeichen im Muster einbeziehen. Zum Beispiel, um _ein einzelnes `"a"` gefolgt von null oder mehr `"b"`s gefolgt von `"c"`_ zu finden, würden Sie das Muster `/ab*c/` verwenden: das `*` nach `"b"` bedeutet "0 oder mehr Vorkommen des vorhergehenden Elements". In der Zeichenfolge `"cbbabbbbcdebc"` stimmt dieses Muster mit der Teilzeichenfolge `"abbbbc"` überein.

Die folgenden Seiten bieten Listen der verschiedenen Sonderzeichen, die in jede Kategorie passen, zusammen mit Beschreibungen und Beispielen.

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Anleitung
  - : Assertions beinhalten Grenzen, die den Anfang und das Ende von Zeilen und Wörtern anzeigen, und andere Muster, die auf irgendeine Weise anzeigen, dass eine Übereinstimmung möglich ist (einschließlich Look-ahead, Look-behind und bedingte Ausdrücke).
- [Character classes](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Anleitung
  - : Unterscheiden verschiedene Arten von Zeichen. Zum Beispiel, Unterscheidung zwischen Buchstaben und Ziffern.
- [Groups and backreferences](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Anleitung
  - : Gruppen gruppieren mehrere Muster als Ganzes, und erfassende Gruppen bieten zusätzliche Teilübereinstimmungsinformationen, wenn ein regulärer Ausdruck mit einer Zeichenfolge übereinstimmt. Rückverweise beziehen sich auf eine zuvor erfasste Gruppe im selben regulären Ausdruck.
- [Quantifiers](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Anleitung
  - : Geben die Anzahl der zu übereinstimmenden Zeichen oder Ausdrücke an.

Wenn Sie alle Sonderzeichen, die in regulären Ausdrücken verwendet werden können, in einer einzigen Tabelle ansehen möchten, siehe das Folgende:

<table class="standard-table">
  <caption>
    Sonderzeichen in regulären Ausdrücken.
  </caption>
  <thead>
    <tr>
      <th scope="col">Zeichen / Konstrukte</th>
      <th scope="col">Zugehöriger Artikel</th>
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
            >Character classes</a
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
            >Groups and backreferences</a
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
            >Quantifiers</a
          >
        </p>
      </td>
    </tr>
  </tbody>
</table>

> **Note:** [Ein größerer Spickzettel ist ebenfalls verfügbar](/de/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet) (nur Teile dieser einzelnen Artikel zusammengetragen).

### Maskierung

Wenn Sie eines der Sonderzeichen wörtlich verwenden müssen (z.B. tatsächlich nach einem `"*"` suchen), müssen Sie es maskieren, indem Sie einen Backslash davor setzen. Zum Beispiel, um nach `"a"` gefolgt von `"*"` gefolgt von `"b"` zu suchen, würden Sie `/a\*b/` verwenden — der Backslash „maskiert“ das `"*"`, wodurch es wörtlich wird, anstatt speziell.

Ebenso, wenn Sie ein reguläres Ausdrucksliteral schreiben und einen Schrägstrich ("/") übereinstimmen müssen, müssen Sie diesen maskieren (sonst beendet er das Muster). Zum Beispiel, um nach dem String "/example/" gefolgt von einem oder mehreren alphabetischen Zeichen zu suchen, verwenden Sie `/\/example\/[a-z]+/i`—die Backslashes vor jedem Schrägstrich machen diese wörtlich.

Um einen wörtlichen Backslash zu übereinstimmen, müssen Sie den Backslash maskieren. Zum Beispiel, um den String "C:\\" zu übereinstimmen, wobei "C" jeder Buchstabe sein kann, würden Sie `/[A-Z]:\\/` verwenden — der erste Backslash maskiert den danach, sodass der Ausdruck nach einem einzigen wörtlichen Backslash sucht.

Wenn Sie den `RegExp` Konstruktor mit einem Stringliteral verwenden, denken Sie daran, dass der Backslash ein Escape-Zeichen in Stringliteralen ist, sodass Sie ihn im regulären Ausdruck auch im Stringliteral maskieren müssen. `/a\*b/` und `new RegExp("a\\*b")` erstellen denselben Ausdruck, der nach "a" gefolgt von einem wörtlichen "\*" gefolgt von "b" sucht.

Wenn Escape-Zeichen noch nicht Teil Ihres Musters sind, können Sie sie mit {{jsxref("String.prototype.replace()")}} hinzufügen:

```js
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& bedeutet die gesamte übereinstimmende Zeichenfolge
}
```

Das „g“ nach dem regulären Ausdruck ist eine Option oder ein Flag, das eine globale Suche durchführt, im gesamten String sucht und alle Übereinstimmungen zurückgibt. Es wird detailliert weiter unten in [Erweiterte Suche mit Flags](#erweiterte_suche_mit_flags) erklärt.

_Warum ist das nicht in JavaScript eingebaut?_ Es gibt einen [Vorschlag](https://github.com/tc39/proposal-regex-escaping), eine solche Funktion zu `RegExp` hinzuzufügen.

### Verwendung von Klammern

Klammern um jeden Teil des regulären Ausdrucksmusters bewirken, dass dieser Teil der übereinstimmenden Teilzeichenfolge gemerkt wird. Sobald es gemerkt ist, kann die Teilzeichenfolge für einen anderen Gebrauch abgerufen werden. Siehe [Groups and backreferences](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups) für weitere Details.

## Verwendung von regulären Ausdrücken in JavaScript

Reguläre Ausdrücke werden mit den {{jsxref("RegExp")}} Methoden {{jsxref("RegExp/test", "test()")}} und {{jsxref("RegExp/exec", "exec()")}} sowie mit den {{jsxref("String")}} Methoden {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}} und {{jsxref("String/split", "split()")}} verwendet.

| Methode                                         | Beschreibung                                                                                                       |
| ------------------------------------------------| ------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("RegExp/exec", "exec()")}}             | Führt eine Suche nach einer Übereinstimmung in einer Zeichenfolge aus. Gibt ein Array von Informationen oder `null` bei einer Fehlanpassung zurück. |
| {{jsxref("RegExp/test", "test()")}}             | Testet auf eine Übereinstimmung in einer Zeichenfolge. Gibt `true` oder `false` zurück.                             |
| {{jsxref("String/match", "match()")}}           | Gibt ein Array zurück, das alle Übereinstimmungen einschließlich erfassender Gruppen enthält, oder `null`, wenn keine Übereinstimmung gefunden wird. |
| {{jsxref("String/matchAll", "matchAll()")}}     | Gibt einen Iterator zurück, der alle Übereinstimmungen einschließlich erfassender Gruppen enthält.                  |
| {{jsxref("String/search", "search()")}}         | Testet auf eine Übereinstimmung in einer Zeichenfolge. Gibt den Index der Übereinstimmung oder `-1` zurück, wenn die Suche fehlschlägt. |
| {{jsxref("String/replace", "replace()")}}       | Führt eine Suche nach einer Übereinstimmung in einer Zeichenfolge durch und ersetzt die übereinstimmende Teilzeichenfolge durch eine Ersetzungsteilzeichenfolge. |
| {{jsxref("String/replaceAll", "replaceAll()")}} | Führt eine Suche nach allen Übereinstimmungen in einer Zeichenfolge durch und ersetzt die übereinstimmenden Teilzeichenfolgen durch eine Ersetzungsteilzeichenfolge. |
| {{jsxref("String/split", "split()")}}           | Verwendet einen regulären Ausdruck oder einen festen String, um eine Zeichenfolge in ein Array von Teilzeichenfolgen zu zerlegen. |

Wenn Sie wissen möchten, ob ein Muster in einer Zeichenfolge gefunden wird, verwenden Sie die Methoden `test()` oder `search()`; für mehr Informationen (aber langsamere Ausführung) verwenden Sie die Methoden `exec()` oder `match()`. Wenn Sie `exec()` oder `match()` verwenden und die Übereinstimmung erfolgreich ist, geben diese Methoden ein Array zurück und aktualisieren die Eigenschaften des zugehörigen regulären Ausdrucksobjekts und auch des vordefinierten regulären Ausdrucksobjekts `RegExp`. Wenn die Übereinstimmung fehlschlägt, gibt die Methode `exec()` `null` zurück (was sich in `false` umwandeln lässt).

Im folgenden Beispiel verwendet das Skript die Methode `exec()`, um eine Übereinstimmung in einer Zeichenfolge zu finden.

```js
const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbz");
```

Wenn Sie nicht die Eigenschaften des regulären Ausdrucks zugreifen müssen, ist eine alternative Möglichkeit, `myArray` zu erstellen, dieses Skript:

```js
const myArray = /d(b+)d/g.exec("cdbbdbsbz");
// ähnlich zu 'cdbbdbsbz'.match(/d(b+)d/g); jedoch,
// 'cdbbdbsbz'.match(/d(b+)d/g) gibt [ "dbbd" ] aus
// während /d(b+)d/g.exec('cdbbdbsbz') [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ] ausgibt
```

(Siehe [Verwendung des globalen Suchflags mit `exec()`](#using_the_global_search_flag_with_exec) für weitere Informationen zu den unterschiedlichen Verhaltensweisen.)

Wenn Sie den regulären Ausdruck aus einem String konstruieren möchten, besteht eine weitere Alternative darin, dieses Skript zu verwenden:

```js
const myRe = new RegExp("d(b+)d", "g");
const myArray = myRe.exec("cdbbdbsbz");
```

Mit diesen Skripten ist die Übereinstimmung erfolgreich und gibt das Array zurück und aktualisiert die in der folgenden Tabelle gezeigten Eigenschaften.

<table class="standard-table">
  <caption>
    Ergebnisse der Ausführung regulärer Ausdrücke.
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
      <td>Der nullbasierte Index der Übereinstimmung in der Eingabezeichenfolge.</td>
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
      <td>Der Index, an dem die nächste Übereinstimmung begonnen werden soll.
        (Diese Eigenschaft wird nur gesetzt, wenn der reguläre Ausdruck die g-Option verwendet, beschrieben in
        <a href="#advanced_searching_with_flags">Erweiterte Suche mit Flags</a>.)
      </td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>
        Der Text des Musters. Aktualisiert zum Zeitpunkt der Erstellung des regulären Ausdrucks, nicht der Ausführung.
      </td>
      <td><code>'d(b+)d'</code></td>
    </tr>
  </tbody>
</table>

Wie im zweiten Beispiel dieser Art gezeigt, können Sie einen regulären Ausdruck mit einem Objektinitialisierer verwenden, ohne ihn einer Variablen zuzuweisen. Wenn Sie dies jedoch tun, ist jeder Vorkommnis ein neuer regulärer Ausdruck. Aus diesem Grund, wenn Sie diese Form verwenden, ohne sie einer Variablen zuzuweisen, können Sie anschließend nicht auf die Eigenschaften dieses regulären Ausdrucks zugreifen. Nehmen Sie zum Beispiel an, Sie haben dieses Skript:

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

Die Vorkommen von `/d(b+)d/g` in den beiden Anweisungen sind unterschiedliche reguläre Ausdrucksobjekte und haben daher unterschiedliche Werte für ihre `lastIndex` Eigenschaft. Wenn Sie auf die Eigenschaften eines regulären Ausdrucks zugreifen müssen, der mit einem Objektinitialisierer erstellt wurde, sollten Sie ihn zuerst einer Variablen zuweisen.

### Erweiterte Suche mit Flags

Reguläre Ausdrücke haben optionale Flags, die Funktionalitäten wie globales Suchen und fallunempfindliches Suchen ermöglichen. Diese Flags können separat oder zusammen in beliebiger Reihenfolge verwendet werden und sind ein integraler Bestandteil des regulären Ausdrucks.

| Flag | Beschreibung                                                                                   | Zugehörige Eigenschaft                            |
| ---- | --------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`  | Generieren von Indizes für Teilzeichenfolgenübereinstimmungen.                                  | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`  | Globale Suche.                                                                                | {{jsxref("RegExp/global", "global")}}           |
| `i`  | Fallunempfindliche Suche.                                                                     | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`  | Ermöglicht `^` und `$`, neben Zeilenumbruchzeichen zu passen.                                 | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`  | Ermöglicht `.` neben Zeilenumbruchzeichen zu passen.                                          | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`  | "Unicode"; behandelt ein Muster als Abfolge von Unicode-Codepunkten.                         | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`  | Ein Upgrade des `u`-Modus mit mehr Unicode-Funktionen.                                        | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`  | Führt eine „anhaltende“ Suche durch, die am aktuellen Position in der Zielzeichenfolge beginnt.| {{jsxref("RegExp/sticky", "sticky")}}           |

Um ein Flag in den regulären Ausdruck einzuschließen, verwenden Sie diese Syntax:

```js
const re = /pattern/flags;
```

oder

```js
const re = new RegExp("pattern", "flags");
```

Beachten Sie, dass die Flags ein integraler Bestandteil eines regulären Ausdrucks sind. Sie können nicht später hinzugefügt oder entfernt werden.

Zum Beispiel erstellt `re = /\w+\s/g` einen regulären Ausdruck, der nach einem oder mehreren Zeichen gefolgt von einem Leerzeichen sucht, und er durchsucht die ganze Zeichenfolge nach dieser Kombination.

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

und dasselbe Ergebnis erzielen.

Das `m`-Flag wird verwendet, um anzugeben, dass eine mehrzeilige Eingabezeichenfolge als mehrere Zeilen behandelt werden soll. Wenn das `m`-Flag verwendet wird, stimmen `^` und `$` am Anfang oder Ende jeder Zeile innerhalb der Eingabezeichenfolge überein, anstatt am Anfang oder Ende der gesamten Zeichenfolge.

Die `i`, `m` und `s` Flags können für bestimmte Teile eines Regex mit der [Modifier](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Syntax aktiviert oder deaktiviert werden.

#### Verwendung des globalen Suchflags mit exec()

Die {{jsxref("RegExp.prototype.exec()")}} Methode mit dem `g`-Flag gibt jede Übereinstimmung und ihre Position iterativ zurück.

```js
const str = "fee fi fo fum";
const re = /\w+\s/g;

console.log(re.exec(str)); // ["fee ", index: 0, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fi ", index: 4, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fo ", index: 7, input: "fee fi fo fum"]
console.log(re.exec(str)); // null
```

Im Gegensatz dazu gibt die {{jsxref("String.prototype.match()")}} Methode alle Übereinstimmungen auf einmal zurück, jedoch ohne deren Position.

```js
console.log(str.match(re)); // ["fee ", "fi ", "fo "]
```

#### Verwendung von Unicode-Regulärausdrücken

Das `u`-Flag wird verwendet, um "Unicode"-Regulärausdrücke zu erstellen; das heißt, reguläre Ausdrücke, die die Übereinstimmung mit Unicode-Text unterstützen. Eine wichtige Funktion, die im Unicode-Modus aktiviert ist, sind [Unicode property escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape). Zum Beispiel könnte der folgende reguläre Ausdruck verwendet werden, um gegen ein beliebiges Unicode-"Wort" zu prüfen:

```js
/\p{L}*/u;
```

Unicode-Regulärausdrücke haben auch ein anderes Ausführungsverhalten. [`RegExp.prototype.unicode`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) enthält weitere Erklärungen dazu.

## Beispiele

> [!NOTE]
> Weitere Beispiele sind auch verfügbar in:
>
> - Den Referenzseiten für {{jsxref("RegExp/exec", "exec()")}}, {{jsxref("RegExp/test", "test()")}}, {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/search", "search()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/split", "split()")}}
> - Den Anleitungsartikeln: [Character classes](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes), [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions), [Groups and backreferences](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences), [Quantifiers](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)

### Verwendung von Sonderzeichen zur Überprüfung von Eingaben

Im folgenden Beispiel wird vom Benutzer erwartet, eine Telefonnummer einzugeben. Wenn der Benutzer die "Prüfen" Taste drückt, überprüft das Skript die Gültigkeit der Nummer. Wenn die Nummer gültig ist (mit der durch den regulären Ausdruck spezifizierten Zeichenfolge übereinstimmt), zeigt das Skript eine Nachricht an, die dem Benutzer dankt und die Nummer bestätigt. Wenn die Nummer ungültig ist, informiert das Skript den Benutzer, dass die Telefonnummer nicht gültig ist.

Der reguläre Ausdruck sucht nach:

1. dem Anfang der Datenzeile: `^`
2. gefolgt von drei numerischen Zeichen `\d{3}` ODER `|` einer linken Klammer `\(`, gefolgt von drei Ziffern `\d{3}`, gefolgt von einer schließenden Klammer `\)`, in einer nicht-erfassenden Gruppe `(?:)`
3. gefolgt von einem Bindestrich, Schrägstrich oder Punkt in einer erfassenden Gruppe `()`
4. gefolgt von drei Ziffern `\d{3}`
5. gefolgt von der in der (ersten) erfassten Gruppe gemerkten Übereinstimmung `\1`
6. gefolgt von vier Ziffern `\d{4}`
7. gefolgt vom Ende der Datenzeile: `$`

#### HTML

```html
<p>
  Geben Sie Ihre Telefonnummer (mit Vorwahl) ein und klicken Sie auf "Prüfen".
  <br />
  Das erwartete Format ist wie ###-###-####.
</p>
<form id="form">
  <input id="phone" />
  <button type="submit">Prüfen</button>
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
    ? `Danke, Ihre Telefonnummer lautet ${ok[0]}`
    : `${phoneInput.value} ist keine Telefonnummer mit Vorwahl!`;
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
- [Regex Tester](https://regex101.com/)
  - : Ein Online-RegEx-Generator/Debugger
- [Regex Interactive Tutorial](https://regexlearn.com/)
  - : Ein Online-Interaktives Tutorial, Spickzettel und Spielplatz.
- [Regex Visualizer](https://extendsclass.com/regex-tester.html)
  - : Ein Online-Visual-RegEx-Tester.

{{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}
