---
title: Regular expressions
slug: Web/JavaScript/Guide/Regular_expressions
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}

Reguläre Ausdrücke sind Muster, die verwendet werden, um Zeichenkombinationen in Zeichenketten zu finden.
In JavaScript sind reguläre Ausdrücke auch Objekte. Diese Muster werden mit den {{jsxref("RegExp/exec", "exec()")}}- und {{jsxref("RegExp/test", "test()")}}-Methoden von {{jsxref("RegExp")}} und mit den {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}} und {{jsxref("String/split", "split()")}}-Methoden von {{jsxref("String")}} verwendet.
Dieses Kapitel beschreibt JavaScript-Reguläre Ausdrücke. Es bietet einen kurzen Überblick über jedes Syntaxelement. Für eine detaillierte Erklärung der Semantik lesen Sie die [Referenz der regulären Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions).

## Erstellen eines regulären Ausdrucks

Sie können einen regulären Ausdruck auf zwei Arten konstruieren:

- Mit einem regulären Ausdrucksliteral, das aus einem Muster besteht, das zwischen Schrägstrichen eingeschlossen ist, wie folgt:

  ```js
  const re = /ab+c/;
  ```

  Reguläre Ausdrucksliterale ermöglichen die Kompilierung des regulären Ausdrucks, wenn das Skript geladen wird.
  Wenn der reguläre Ausdruck konstant bleibt, kann die Verwendung dessen die Leistung verbessern.

- Oder indem Sie die Konstruktorfunktion des {{jsxref("RegExp")}}-Objekts aufrufen, wie folgt:

  ```js
  const re = new RegExp("ab+c");
  ```

  Die Verwendung der Konstruktorfunktion ermöglicht die Kompilierung des regulären Ausdrucks zur Laufzeit.
  Verwenden Sie die Konstruktorfunktion, wenn Sie wissen, dass sich das Muster des regulären Ausdrucks ändern wird oder wenn Sie das Muster nicht kennen und es aus einer anderen Quelle beziehen, wie z.B. Benutzereingaben.

## Schreiben eines regulären Ausdrucksmusters

Ein reguläres Ausdrucksmuster besteht aus einfachen Zeichen, wie `/abc/`, oder einer Kombination aus einfachen und speziellen Zeichen, wie `/ab*c/` oder `/Chapter (\d+)\.\d*/`.
Das letzte Beispiel enthält Klammern, die als Gedächtnisstütze verwendet werden.
Das mit diesem Teil des Musters gefundene Übereinstimmung wird wie im Artikel [Verwendung von Gruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups) beschrieben für die spätere Verwendung gespeichert.

### Verwenden einfacher Muster

Einfache Muster bestehen aus Zeichen, für die eine direkte Übereinstimmung gefunden werden soll. Beispielsweise stimmt das Muster `/abc/` nur mit Zeichenkombinationen in Zeichenketten überein, wenn die exakte Folge `"abc"` auftritt (alle Zeichen zusammen und in dieser Reihenfolge).
Eine solche Übereinstimmung würde in den Zeichenketten `"Hi, do you know your abc's?"` und `"The latest airplane designs evolved from slabcraft."` erfolgreich sein.
In beiden Fällen ist die Übereinstimmung mit dem Teilstring `"abc"`.
Es gibt keine Übereinstimmung in der Zeichenkette `"Grab crab"`, da sie zwar den Teilstring `"ab c"` enthält, jedoch nicht den exakten Teilstring `"abc"`.

### Verwenden spezieller Zeichen

Wenn die Suche nach einer Übereinstimmung mehr als eine direkte Übereinstimmung erfordert, wie z.B. das Finden eines oder mehrerer `b`s oder das Finden von Leerzeichen, können spezielle Zeichen in das Muster aufgenommen werden.
Zum Beispiel, um eine einzelne `"a"` gefolgt von null oder mehr `"b"`s gefolgt von `"c"` zu finden, würden Sie das Muster `/ab*c/` verwenden: das `*` nach `"b"` bedeutet "0 oder mehr Vorkommen des vorhergehenden Elements."
In der Zeichenkette `"cbbabbbbcdebc"` würde dieses Muster den Teilstring `"abbbbc"` finden.

Die folgenden Seiten bieten Listen der verschiedenen speziellen Zeichen, die in jede Kategorie passen, zusammen mit Beschreibungen und Beispielen.

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)-Leitfaden
  - : Assertions umfassen Begrenzungen, die den Beginn und das Ende von Zeilen und Wörtern anzeigen, sowie andere Muster, die auf irgendeine Weise anzeigen, dass eine Übereinstimmung möglich ist (einschließlich Look-Ahead, Look-Behind und bedingte Ausdrücke).
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)-Leitfaden
  - : Unterscheiden verschiedene Arten von Zeichen. Zum Beispiel wird zwischen Buchstaben und Ziffern unterschieden.
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)-Leitfaden
  - : Gruppen gruppieren mehrere Muster als Ganzes, und erfassende Gruppen liefern zusätzliche Submatch-Informationen, wenn ein reguläres Ausdrucksmuster mit einer Zeichenkette verglichen wird. Rückverweise beziehen sich auf eine zuvor erfasste Gruppe im gleichen regulären Ausdruck.
- [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)-Leitfaden
  - : Geben die Anzahl von Zeichen oder Ausdrücken an, die übereinstimmen sollen.

Wenn Sie alle speziellen Zeichen sehen möchten, die in regulären Ausdrücken in einer einzigen Tabelle verwendet werden können, siehe folgendes:

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

> **Hinweis:** [Ein größeres Spickzettel ist ebenfalls verfügbar](/de/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet) (es aggregiert nur Teile dieser einzelnen Artikel).

### Escape-Zeichen

Wenn Sie eines der speziellen Zeichen wörtlich verwenden müssen (tatsächlich nach einem `"*"` suchen, zum Beispiel), müssen Sie es durch ein Backslash davor maskieren.
Zum Beispiel, um nach `"a"` gefolgt von `"*"` gefolgt von `"b"` zu suchen, würden Sie `/a\*b/` verwenden — der Backslash "maskiert" das `"*"`, macht es wörtlich anstatt speziell.

Ebenso, wenn Sie ein reguläres Ausdrucksliteral schreiben und einen Schrägstrich ("/") übereinstimmen müssen, müssen Sie diesen maskieren (ansonsten beendet er das Muster).
Zum Beispiel, um nach dem String "/example/" gefolgt von einem oder mehreren alphabetischen Zeichen zu suchen, würden Sie `/\/example\/[a-z]+/i` verwenden — die Backslashes vor jedem Schrägstrich machen diese wörtlich.

Um ein wörtliches Backslash zu maskieren, müssen Sie das Backslash maskieren.
Zum Beispiel, um den String "C:\\" zu maskieren, bei dem "C" jeder Buchstabe sein kann, würden Sie `/[A-Z]:\\/` verwenden — der erste Backslash maskiert den nachfolgenden, sodass der Ausdruck nach einem einzigen wörtlichen Backslash sucht.

Wenn Sie den `RegExp`-Konstruktor mit einem Zeichenkettliteral verwenden, bedenken Sie, dass das Backslash ein Maskierungselement in Zeichenkettenliteralen ist. Um es im regulären Ausdruck zu verwenden, müssen Sie es auf der Ebene des Zeichenkettenliterals maskieren.
`/a\*b/` und `new RegExp("a\\*b")` erstellen denselben Ausdruck, der nach "a" gefolgt von einem wörtlichen "\*" gefolgt von "b" sucht.

Wenn Escape-Zeichen nicht bereits Teil Ihres Musters sind, können Sie sie mit {{jsxref("String.prototype.replace()")}} hinzufügen:

```js
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
```

Das "g" nach dem regulären Ausdruck ist eine Option oder Flag, die eine globale Suche durchführt, die in der gesamten Zeichenkette sucht und alle Übereinstimmungen zurückgibt.
Es wird im Folgenden detailliert in [Erweiterte Suche mit Flags](#erweiterte_suche_mit_flags) erläutert.

_Warum ist dies nicht in JavaScript eingebaut?_ Es gibt einen [Vorschlag](https://github.com/tc39/proposal-regex-escaping), eine solche Funktion zu `RegExp` hinzuzufügen.

### Verwenden von Klammern

Klammern um einen beliebigen Teil des regulären Ausdrucksmusters verursachen, dass dieser Teil des übereinstimmenden Teilstrings gespeichert wird.
Sobald es gespeichert ist, kann der Teilstring zu einem späteren Zeitpunkt wiederverwendet werden. Siehe [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups) für mehr Details.

## Verwendung regulärer Ausdrücke in JavaScript

Reguläre Ausdrücke werden mit den {{jsxref("RegExp")}}-Methoden {{jsxref("RegExp/test", "test()")}} und {{jsxref("RegExp/exec", "exec()")}} und mit den {{jsxref("String")}}-Methoden {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}} und {{jsxref("String/split", "split()")}} verwendet.

| Methode                                         | Beschreibung                                                                                                      |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp/exec", "exec()")}}             | Führt eine Suche nach einem Treffer in einer Zeichenkette durch. Sie gibt ein Array von Informationen oder `null` bei einer Nichtübereinstimmung zurück.           |
| {{jsxref("RegExp/test", "test()")}}             | Testet auf eine Übereinstimmung in einer Zeichenkette. Sie gibt `true` oder `false` zurück.                                                     |
| {{jsxref("String/match", "match()")}}           | Gibt ein Array mit allen Übereinstimmungen, einschließlich erfasster Gruppen, oder `null` zurück, wenn keine Übereinstimmung gefunden wird.      |
| {{jsxref("String/matchAll", "matchAll()")}}     | Gibt einen Iterator zurück, der alle Übereinstimmungen einschließlich erfasster Gruppen enthält.                                   |
| {{jsxref("String/search", "search()")}}         | Testet auf eine Übereinstimmung in einer Zeichenkette. Sie gibt den Index der Übereinstimmung oder `-1` zurück, wenn die Suche fehlschlägt.                   |
| {{jsxref("String/replace", "replace()")}}       | Führt eine Suche nach einem Treffer in einer Zeichenkette durch und ersetzt den übereinstimmenden Teilstring durch einen Ersetzungsteilstring.      |
| {{jsxref("String/replaceAll", "replaceAll()")}} | Führt eine Suche nach allen Treffern in einer Zeichenkette durch und ersetzt die übereinstimmenden Teilstrings durch einen Ersetzungsteilstring. |
| {{jsxref("String/split", "split()")}}           | Verwendet einen regulären Ausdruck oder einen festen String, um eine Zeichenkette in ein Array von Teilstrings zu unterteilen.                       |

Wenn Sie wissen möchten, ob ein Muster in einer Zeichenkette gefunden wird, verwenden Sie die `test()`- oder `search()`-Methoden; für mehr Informationen (aber langsamere Ausführung) verwenden Sie die `exec()`- oder `match()`-Methoden.
Wenn Sie `exec()` oder `match()` verwenden und die Übereinstimmung erfolgreich ist, geben diese Methoden ein Array zurück und aktualisieren die Eigenschaften des zugehörigen regulären Ausdrucksobjekts und auch des vordefinierten regulären Ausdrucksobjekts `RegExp`.
Wenn die Übereinstimmung fehlschlägt, gibt die `exec()`-Methode `null` zurück (was in `false` umgewandelt wird).

Im folgenden Beispiel verwendet das Skript die `exec()`-Methode, um eine Übereinstimmung in einer Zeichenkette zu finden.

```js
const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbz");
```

Wenn Sie die Eigenschaften des regulären Ausdrucks nicht benötigen, ist eine alternative Möglichkeit zur Erstellung von `myArray` dieses Skript:

```js
const myArray = /d(b+)d/g.exec("cdbbdbsbz");
// similar to 'cdbbdbsbz'.match(/d(b+)d/g); however,
// 'cdbbdbsbz'.match(/d(b+)d/g) outputs [ "dbbd" ]
// while /d(b+)d/g.exec('cdbbdbsbz') outputs [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ]
```

(Siehe [Verwendung des globalen Such-Flags mit `exec()`](#using_the_global_search_flag_with_exec) für weitere Informationen über die unterschiedlichen Verhaltensweisen.)

Wenn Sie den regulären Ausdruck aus einer Zeichenkette erstellen möchten, ist eine weitere Alternative dieses Skript:

```js
const myRe = new RegExp("d(b+)d", "g");
const myArray = myRe.exec("cdbbdbsbz");
```

Mit diesen Skripten ist die Übereinstimmung erfolgreich und gibt das Array zurück und aktualisiert die Eigenschaften, die in der folgenden Tabelle gezeigt werden.

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
      <td>Der übereinstimmende String und alle gespeicherten Teilstrings.</td>
      <td><code>['dbbd', 'bb', index: 1, input: 'cdbbdbsbz']</code></td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>Der auf 0 basierende Index der Übereinstimmung in der Eingabezeichenkette.</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>Die ursprüngliche Zeichenkette.</td>
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
      <td>Der Index, an dem die nächste Übereinstimmung starten soll.
        (Diese Eigenschaft wird nur festgelegt, wenn der reguläre Ausdruck die g-Option verwendet, die in
        <a href="#advanced_searching_with_flags">Erweiterte Suche mit Flags</a> beschrieben wird.)
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

Wie im zweiten Teil dieses Beispiels gezeigt, können Sie einen regulären Ausdruck mit einem Objektinitialisierer erstellen, ohne ihn einer Variablen zuzuweisen.
Wenn Sie dies tun, jedoch, ist jede Vorkommen ein neuer regulärer Ausdruck.
Aus diesem Grund, wenn Sie diese Form verwenden, ohne sie einer Variablen zuzuweisen, können Sie nicht anschließend auf die Eigenschaften dieses regulären Ausdrucks zugreifen.
Zum Beispiel, nehmen Sie an, Sie haben dieses Skript:

```js
const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbz");
console.log(`The value of lastIndex is ${myRe.lastIndex}`);

// "The value of lastIndex is 5"
```

Jedoch, wenn Sie dieses Skript haben:

```js
const myArray = /d(b+)d/g.exec("cdbbdbsbz");
console.log(`The value of lastIndex is ${/d(b+)d/g.lastIndex}`);

// "The value of lastIndex is 0"
```

Sind die Vorkommen von `/d(b+)d/g` in den beiden Anweisungen verschiedene reguläre Ausdrucksobjekte und haben daher unterschiedliche Werte für ihre `lastIndex`-Eigenschaft.
Wenn Sie auf die Eigenschaften eines mit einem Objektinitialisierer erstellten regulären Ausdrucks zugreifen müssen, sollten Sie ihn zuerst einer Variablen zuweisen.

### Erweiterte Suche mit Flags

Reguläre Ausdrücke haben optionale Flags, die Funktionalitäten wie globale Suche und Groß-/Kleinschreibung ermöglichen.
Diese Flags können separat oder zusammen in beliebiger Reihenfolge verwendet werden und sind Teil des regulären Ausdrucks.

| Flag | Beschreibung                                                                                   | Entsprechende Eigenschaft                         |
| ---- | --------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`  | Erzeugt Indizes für Teilstring-Übereinstimmungen.                                              | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`  | Globale Suche.                                                                                | {{jsxref("RegExp/global", "global")}}           |
| `i`  | Fallunempfindliche Suche.                                                                     | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`  | Ermöglicht `^` und `$` neben Zeilenzeichen zu maskieren.                                      | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`  | Ermöglicht `.` Zeilenumbrüche zu maskieren.                                                   | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`  | "Unicode"; behandelt ein Muster als eine Folge von Unicode-Codepunkten.                        | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`  | Ein Upgrade zum `u`-Modus mit mehr Unicode-Funktionen.                                        | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`  | Führen Sie eine "sticky" Suche aus, die ab der aktuellen Position in der Zielzeichenkette passt. | {{jsxref("RegExp/sticky", "sticky")}}           |

Um ein Flag mit dem regulären Ausdruck einzuschließen, verwenden Sie diese Syntax:

```js
const re = /pattern/flags;
```

oder

```js
const re = new RegExp("pattern", "flags");
```

Beachten Sie, dass die Flags ein integraler Bestandteil eines regulären Ausdrucks sind. Sie können nicht später hinzugefügt oder entfernt werden.

Zum Beispiel, `re = /\w+\s/g` erstellt einen regulären Ausdruck, der nach einem oder mehreren Zeichen gefolgt von einem Leerzeichen sucht, und es sucht diese Kombination im gesamten String.

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

und das gleiche Ergebnis erhalten.

Das `m`-Flag wird verwendet, um anzugeben, dass eine mehrzeilige Eingabezeichenkette als mehrere Zeilen behandelt werden sollte.
Wenn das `m`-Flag verwendet wird, passen `^` und `$` am Anfang oder Ende jeder Zeile innerhalb der Eingabezeichenkette anstatt am Anfang oder Ende der gesamten Zeichenkette.

Die `i`-, `m`- und `s`-Flags können für bestimmte Teile eines Regex mithilfe der [Modifier-Syntax](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) aktiviert oder deaktiviert werden.

#### Verwendung des globalen Such-Flags mit exec()

{{jsxref("RegExp.prototype.exec()")}}-Methode mit dem `g`-Flag gibt jede Übereinstimmung und deren Position iterativ zurück.

```js
const str = "fee fi fo fum";
const re = /\w+\s/g;

console.log(re.exec(str)); // ["fee ", index: 0, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fi ", index: 4, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fo ", index: 7, input: "fee fi fo fum"]
console.log(re.exec(str)); // null
```

Im Gegensatz dazu gibt die {{jsxref("String.prototype.match()")}}-Methode alle Übereinstimmungen auf einmal zurück, jedoch ohne ihre Position.

```js
console.log(str.match(re)); // ["fee ", "fi ", "fo "]
```

#### Verwendung von Unicode-Regulärausdrücken

Das `u`-Flag wird verwendet, um "unicode" reguläre Ausdrücke zu erstellen; das bedeutet, reguläre Ausdrücke, die das Abgleichen mit Unicode-Text unterstützen. Eine wichtige Funktion, die im Unicode-Modus aktiviert ist, sind [Unicode-Eigenschaften-Auszugszeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape). Zum Beispiel könnte der folgende reguläre Ausdruck verwendet werden, um gegen ein beliebiges Unicode-"Wort" abzugleichen:

```js
/\p{L}*/u;
```

Unicode-Regulärausdrücke haben auch ein anderes Ausführungsverhalten. [`RegExp.prototype.unicode`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) enthält mehr Erklärung dazu.

## Beispiele

> [!NOTE]
> Mehrere Beispiele sind auch verfügbar in:
>
> - Den Referenzseiten für {{jsxref("RegExp/exec", "exec()")}}, {{jsxref("RegExp/test", "test()")}}, {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/search", "search()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/split", "split()")}}
> - Den Leitfadenartikeln: [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes), [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions), [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences), [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)

### Verwenden spezieller Zeichen zur Überprüfung von Eingaben

Im folgenden Beispiel wird vom Benutzer erwartet, dass er eine Telefonnummer eingibt.
Wenn der Benutzer auf die Schaltfläche "Überprüfen" drückt, überprüft das Skript die Gültigkeit der Nummer.
Wenn die Nummer gültig ist (mit der durch den regulären Ausdruck angegebenen Zeichenfolge übereinstimmt), zeigt das Skript eine Nachricht an, die dem Benutzer dankt und die Nummer bestätigt.
Wenn die Nummer ungültig ist, informiert das Skript den Benutzer, dass die Telefonnummer ungültig ist.

Der reguläre Ausdruck sucht nach:

1. dem Beginn der Datenzeile: `^`
2. gefolgt von drei numerischen Zeichen `\d{3}` ODER `|` einer linken Klammer `\(`, gefolgt von drei Ziffern `\d{3}`, gefolgt von einer schließenden Klammer `\)`, in einer nicht-erfassenden Gruppe `(?:)`
3. gefolgt von einem Bindestrich, Schrägstrich oder Punkt in einer erfassenden Gruppe `()`
4. gefolgt von drei Ziffern `\d{3}`
5. gefolgt von der übereinstimmenden in der (ersten) erfassten Gruppe `\1`
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
- [Regex Tester](https://regex101.com/)
  - : Ein Online-RegEx-Builder / Debugger
- [Regex interaktives Tutorial](https://regexlearn.com/)
  - : Ein Online-Interaktives Tutorial, Spickzettel, & Playground.
- [Regex Visualizer](https://extendsclass.com/regex-tester.html)
  - : Ein Online-Unittest für reguläre Ausdrücke.

{{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}
