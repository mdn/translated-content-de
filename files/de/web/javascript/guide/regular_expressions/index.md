---
title: Reguläre Ausdrücke
slug: Web/JavaScript/Guide/Regular_expressions
l10n:
  sourceCommit: a7acf4c7a38f1df8f5d0dee1f17672968ac979d5
---

{{PreviousNext("Web/JavaScript/Guide/Representing_dates_times", "Web/JavaScript/Guide/Indexed_collections")}}

Reguläre Ausdrücke sind Muster, die verwendet werden, um Zeichenkombinationen in Zeichenfolgen zu finden.
In JavaScript sind reguläre Ausdrücke auch Objekte. Diese Muster werden mit den Methoden {{jsxref("RegExp/exec", "exec()")}} und {{jsxref("RegExp/test", "test()")}} von {{jsxref("RegExp")}}, und mit den Methoden {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}}, und {{jsxref("String/split", "split()")}} von {{jsxref("String")}} verwendet.
Dieses Kapitel beschreibt JavaScript-Reguläre Ausdrücke. Es bietet einen kurzen Überblick über jedes Syntaxelement. Für eine detaillierte Erklärung der Semantik lesen Sie die [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)-Referenz.

## Erstellen eines regulären Ausdrucks

Sie erstellen einen regulären Ausdruck auf zwei Arten:

- Verwenden eines regulären Ausdrucksliterals, das aus einem Muster besteht, das zwischen Schrägstrichen eingeschlossen ist, wie folgt:

  ```js
  const re = /ab+c/;
  ```

  Reguläre Ausdrucksliterale bieten eine Kompilierung des regulären Ausdrucks, wenn das Skript geladen wird.
  Wenn der reguläre Ausdruck konstant bleibt, kann dies die Leistung verbessern.

- Oder durch Aufrufen der Konstruktorfunktion des {{jsxref("RegExp")}} Objekts, wie folgt:

  ```js
  const re = new RegExp("ab+c");
  ```

  Die Verwendung der Konstruktorfunktion bietet eine Laufzeitkompilierung des regulären Ausdrucks.
  Verwenden Sie die Konstruktorfunktion, wenn Sie wissen, dass sich das Muster des regulären Ausdrucks ändern wird, oder wenn Sie das Muster nicht kennen und es aus einer anderen Quelle, wie z.B. Benutzereingaben, beziehen.

## Schreiben eines regulären Ausdrucksmusters

Ein reguläres Ausdrucksmuster besteht aus einfachen Zeichen, wie z.B. `/abc/`, oder einer Kombination aus einfachen und speziellen Zeichen, wie z.B. `/ab*c/` oder `/Chapter (\d+)\.\d*/`.
Das letzte Beispiel enthält Klammern, die als Gedächtnisstütze verwendet werden.
Das mit diesem Teil des Musters gefundene Match wird für die spätere Verwendung gespeichert, wie im [Verwenden von Gruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups) beschrieben.

### Verwenden einfacher Muster

Einfache Muster bestehen aus Zeichen, für die Sie eine direkte Übereinstimmung finden möchten. Zum Beispiel stimmt das Muster `/abc/` nur dann mit Zeichenkombinationen in Zeichenfolgen überein, wenn die exakte Sequenz `"abc"` auftritt (alle Zeichen zusammen und in dieser Reihenfolge).
Ein solches Match wäre in den Zeichenfolgen `"Hi, do you know your abc's?"` und `"The latest airplane designs evolved from slabcraft."` erfolgreich.
In beiden Fällen liegt das Match mit dem Teilstring `"abc"` vor.
In der Zeichenfolge `"Grab crab"` gibt es keinen Match, da sie zwar den Teilstring `"ab c"` enthält, nicht aber den genauen Teilstring `"abc"`.

### Verwenden von Sonderzeichen

Wenn die Suche nach einem Match mehr als eine direkte Übereinstimmung erfordert, z.B. das Finden von einem oder mehreren `b`s oder das Finden von Leerzeichen, können Sie Sonderzeichen im Muster verwenden.
Zum Beispiel, um _ein einzelnes `"a"` gefolgt von null oder mehr `"b"`s gefolgt von `"c"`_ zu finden, würden Sie das Muster `/ab*c/` verwenden: Das `*` nach `"b"` bedeutet "0 oder mehr Vorkommen des vorhergehenden Elements."
In der Zeichenfolge `"cbbabbbbcdebc"` würde dieses Muster mit dem Teilstring `"abbbbc"` übereinstimmen.

Die folgenden Seiten bieten Listen der verschiedenen Sonderzeichen, die in jede Kategorie passen, zusammen mit Beschreibungen und Beispielen.

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
  - : Assertions umfassen Grenzen, die die Anfänge und Enden von Zeilen und Wörtern anzeigen, und andere Muster, die auf irgendeine Weise angeben, dass ein Match möglich ist (einschließlich Look-ahead, Look-behind und bedingter Ausdrücke).
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
  - : Unterscheiden verschiedene Arten von Zeichen. Zum Beispiel, Unterscheidung zwischen Buchstaben und Ziffern.
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
  - : Gruppen fassen mehrere Muster als Ganzes zusammen, und erfassende Gruppen bieten zusätzliche Submatch-Informationen, wenn ein reguläres Ausdrucksmuster zur Übereinstimmung mit einer Zeichenkette verwendet wird. Rückverweise beziehen sich auf eine zuvor erfasste Gruppe im gleichen regulären Ausdruck.
- [Quantoren](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
  - : Geben die Anzahl von Zeichen oder Ausdrücken an, die übereinstimmen sollen.

Wenn Sie alle Sonderzeichen, die in regulären Ausdrücken verwendet werden können, in einer einzigen Tabelle ansehen möchten, klicken Sie auf folgendes:

<table class="standard-table">
  <caption>
    Sonderzeichen in regulären Ausdrücken.
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
        <code>\0</code>, <code>\c<em>X</em></code>, <code>\x<em>HH</em></code>,
        <code>\u<em>HHHH</em></code>, <code>\u<em>{H…H}</em></code>,
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
            >Quantoren</a
          >
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> [Ein größeres Spickzettel ist ebenfalls verfügbar](/de/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet) (nur Zusammenstellung von Teilen dieser Einzelartikel).

### Escaping

Wenn Sie eines der Sonderzeichen wörtlich benutzen müssen (tatsächlich nach einem `"*"` suchen, zum Beispiel), sollten Sie es durch einen Backslash davor schützen. Zum Beispiel, um nach `"a"` gefolgt von `"*"` gefolgt von `"b"` zu suchen, würden Sie `/a\*b/` verwenden — der Backslash "escaped" das `"*"`, macht es wörtlich statt speziell.

> [!NOTE]
> In vielen Fällen, wenn Sie versuchen ein Sonderzeichen zu matchen, können Sie es in einer [Zeichenklasse](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) einschließen als Alternative zum Escapen, zum Beispiel `/a[*]b/`.

Ähnlich, wenn Sie einen regulären Ausdrucksliteral schreiben und einen Schrägstrich ("/") matchen müssen, müssen Sie diesen escapen (sonst beendet er das Muster).
Zum Beispiel, um nach der Zeichenfolge "/example/" gefolgt von einem oder mehreren alphabetischen Zeichen zu suchen, verwenden Sie `/\/example\/[a-z]+/i` — die Backslashes vor jedem Schrägstrich machen sie wörtlich.

Um einen wörtlichen Rückschrägstrich zu matchen, müssen Sie den Rückschrägstrich escapen.
Zum Beispiel, um die Zeichenfolge "C:\\" zu matchen, wobei "C" ein beliebiger Buchstabe sein kann, verwenden Sie `/[A-Z]:\\/` — der erste Backslash escapt den nachfolgenden, so dass der Ausdruck nach einem einzigen wörtlichen Backslash sucht.

Wenn Sie den `RegExp`-Konstruktor mit einem Stringliteral verwenden, denken Sie daran, dass der Backslash ein Escapezeichen in Stringliteralen ist, also müssen Sie ihn auf der Stringliteralebene escapen, um ihn im regulären Ausdruck zu verwenden.
`/a\*b/` und `new RegExp("a\\*b")` erstellen denselben Ausdruck, der nach "a" gefolgt von einem wörtlichen "\*" gefolgt von "b" sucht.

Die Funktion {{jsxref("RegExp.escape()")}} gibt einen neuen String zurück, in dem alle Sonderzeichen in der Regex-Syntax escapt sind. Dies ermöglicht Ihnen, `new RegExp(RegExp.escape("a*b"))` zu verwenden, um einen regulären Ausdruck zu erstellen, der nur die Zeichenfolge `"a*b"` matched.

### Verwenden von Klammern

Klammern um einen beliebigen Teil des regulären Ausdrucksmusters führen dazu, dass dieser Teil des übereinstimmenden Teilstrings gespeichert wird.
Einmal gespeichert, kann der Teilstring für andere Zwecke abgerufen werden. Siehe [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups) für mehr Details.

## Verwendung regulärer Ausdrücke in JavaScript

Reguläre Ausdrücke werden mit den {{jsxref("RegExp")}}-Methoden {{jsxref("RegExp/test", "test()")}} und {{jsxref("RegExp/exec", "exec()")}} sowie mit den {{jsxref("String")}}-Methoden {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}}, und {{jsxref("String/split", "split()")}} verwendet.

| Methode                                         | Beschreibung                                                                                                                                  |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp/exec", "exec()")}}             | Führt eine Suche nach einem Match in einer Zeichenkette aus. Sie gibt ein Array mit Informationen oder `null` bei Fehlanpassung zurück.       |
| {{jsxref("RegExp/test", "test()")}}             | Prüft auf einen Match in einer Zeichenkette. Sie gibt `true` oder `false` zurück.                                                             |
| {{jsxref("String/match", "match()")}}           | Gibt ein Array zurück, das alle Matches, einschließlich erfassender Gruppen, enthält, oder `null`, wenn kein Match gefunden wird.             |
| {{jsxref("String/matchAll", "matchAll()")}}     | Gibt einen Iterator zurück, der alle Matches einschließlich erfassender Gruppen enthält.                                                      |
| {{jsxref("String/search", "search()")}}         | Prüft auf einen Match in einer Zeichenkette. Sie gibt den Index des Matches zurück, oder `-1`, wenn die Suche fehlschlägt.                    |
| {{jsxref("String/replace", "replace()")}}       | Führt eine Suche nach einem Match in einer Zeichenkette aus und ersetzt den übereinstimmenden Teilstring durch einen Ersetzungsteilstring.    |
| {{jsxref("String/replaceAll", "replaceAll()")}} | Führt eine Suche nach allen Matches in einer Zeichenkette aus und ersetzt die übereinstimmenden Teilstrings durch einen Ersetzungsteilstring. |
| {{jsxref("String/split", "split()")}}           | Verwendet einen regulären Ausdruck oder einen festen String, um eine Zeichenkette in ein Array von Teilstrings zu zerlegen.                   |

Wenn Sie wissen möchten, ob ein Muster in einer Zeichenkette gefunden wird, verwenden Sie die Methoden `test()` oder `search()`; für mehr Informationen (aber langsamere Ausführung) verwenden Sie die Methoden `exec()` oder `match()`.
Wenn Sie `exec()` oder `match()` verwenden und der Match erfolgreich ist, geben diese Methoden ein Array zurück und aktualisieren die Eigenschaften des zugehörigen regulären Ausdrucksobjekts und auch des vordefinierten regulären Ausdrucksobjekts `RegExp`.
Wenn der Match fehlschlägt, gibt die Methode `exec()` `null` zurück (was zu `false` führt).

Im folgenden Beispiel verwendet das Skript die Methode `exec()`, um einen Match in einer Zeichenkette zu finden.

```js
const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbz");
```

Wenn Sie nicht auf die Eigenschaften des regulären Ausdrucks zugreifen müssen, ist eine alternative Möglichkeit, `myArray` zu erstellen, mit diesem Skript:

```js
const myArray = /d(b+)d/g.exec("cdbbdbsbz");
// similar to 'cdbbdbsbz'.match(/d(b+)d/g); however,
// 'cdbbdbsbz'.match(/d(b+)d/g) outputs [ "dbbd" ]
// while /d(b+)d/g.exec('cdbbdbsbz') outputs [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ]
```

(Siehe [Verwenden des globalen Suchflags mit `exec()`](#using_the_global_search_flag_with_exec) für weitere Informationen über die unterschiedlichen Verhaltensweisen.)

Wenn Sie den regulären Ausdruck aus einem String konstruieren möchten, ist eine weitere Alternative dieses Skript:

```js
const myRe = new RegExp("d(b+)d", "g");
const myArray = myRe.exec("cdbbdbsbz");
```

Mit diesen Skripten ist der Match erfolgreich und gibt das Array zurück und aktualisiert die in der folgenden Tabelle gezeigten Eigenschaften.

<table class="standard-table">
  <caption>
    Ergebnisse der Ausführung eines regulären Ausdrucks.
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
      <td>Der 0-basierte Index des Matches in der Eingabezeichenfolge.</td>
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
      <td>Der Index, an dem der nächste Match beginnen soll.
        (Diese Eigenschaft wird nur gesetzt, wenn der reguläre Ausdruck die g-Option verwendet, die in
        <a href="#advanced_searching_with_flags">Erweitertes Suchen mit Flags</a> beschrieben wird.)
      </td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>
        Der Text des Musters. Wird zum Zeitpunkt der Erstellung des regulären Ausdrucks aktualisiert, nicht bei der Ausführung.
      </td>
      <td><code>'d(b+)d'</code></td>
    </tr>
  </tbody>
</table>

Wie in der zweiten Form dieses Beispiels gezeigt, können Sie einen regulären Ausdruck, der mit einem Objektinitialisierer erstellt wurde, ohne ihn einer Variablen zuzuweisen, verwenden.
Wenn Sie dies jedoch tun, ist jedes Vorkommen ein neuer regulärer Ausdruck.
Aus diesem Grund können Sie, wenn Sie diese Form ohne Zuordnung zu einer Variablen verwenden, die Eigenschaften dieses regulären Ausdrucks später nicht mehr zugreifen.
Zum Beispiel, nehmen wir an, Sie haben dieses Skript:

```js
const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbz");
console.log(`The value of lastIndex is ${myRe.lastIndex}`);

// "The value of lastIndex is 5"
```

Haben Sie jedoch dieses Skript:

```js
const myArray = /d(b+)d/g.exec("cdbbdbsbz");
console.log(`The value of lastIndex is ${/d(b+)d/g.lastIndex}`);

// "The value of lastIndex is 0"
```

Die Vorkommen von `/d(b+)d/g` in den beiden Anweisungen sind unterschiedliche reguläre Ausdrucksobjekte und haben daher unterschiedliche Werte für ihre `lastIndex`-Eigenschaft.
Wenn Sie die Eigenschaften eines regulären Ausdrucks zugreifen müssen, der mit einem Objektinitialisierer erstellt wurde, sollten Sie ihn zuerst einer Variablen zuweisen.

### Erweitertes Suchen mit Flags

Reguläre Ausdrücke haben optionale Flags, die Funktionen wie globale Suchvorgänge und die Suche ohne Berücksichtigung der Groß-/Kleinschreibung ermöglichen.
Diese Flags können einzeln oder zusammen in beliebiger Reihenfolge verwendet werden und sind Teil des regulären Ausdrucks.

| Flag | Beschreibung                                                                                  | Entsprechende Eigenschaft                       |
| ---- | --------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`  | Erzeugt Indizes für Teilstring-Matches.                                                       | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`  | Globale Suche.                                                                                | {{jsxref("RegExp/global", "global")}}           |
| `i`  | Suche ohne Berücksichtigung der Groß-/Kleinschreibung.                                        | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`  | Lässt `^` und `$` den Anfang und das Ende jeder Zeile matchen statt die des gesamten Strings. | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`  | Erlaubt `.` das Matchen von Zeilenumbrüchen.                                                  | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`  | "Unicode"; behandelt ein Muster als eine Folge von Unicode-Codepunkten.                       | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`  | Eine Erweiterung des `u`-Modus mit mehr Unicode-Funktionen.                                   | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`  | Führt eine "sticky" Suche durch, die am aktuellen Standpunkt in der Zielzeichenfolge beginnt. | {{jsxref("RegExp/sticky", "sticky")}}           |

Um ein Flag mit dem regulären Ausdruck einzuschließen, verwenden Sie diese Syntax:

```js
const re = /pattern/flags;
```

oder

```js
const re = new RegExp("pattern", "flags");
```

Beachten Sie, dass die Flags ein integraler Bestandteil eines regulären Ausdrucks sind. Sie können später nicht hinzugefügt oder entfernt werden.

Zum Beispiel erstellt `re = /\w+\s/g` einen regulären Ausdruck, der nach einem oder mehreren Zeichen gefolgt von einem Leerzeichen sucht, und sucht diese Kombination im gesamten String.

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

Das `m`-Flag wird verwendet, um anzugeben, dass eine mehrzeilige Eingabezeichenfolge als mehrere Zeilen behandelt werden soll.
Wenn das `m`-Flag verwendet wird, matchen `^` und `$` am Anfang oder Ende jeder Zeile innerhalb der Eingabezeichenfolge statt am Anfang oder Ende des gesamten Strings.

Die Flags `i`, `m` und `s` können für bestimmte Teile einer Regex mithilfe der [Modifier](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)-Syntax aktiviert oder deaktiviert werden.

#### Verwenden des globalen Suchflags mit exec()

Die Methode {{jsxref("RegExp.prototype.exec()")}} mit dem `g`-Flag gibt jedes Match und seine Position iterativ zurück.

```js
const str = "fee fi fo fum";
const re = /\w+\s/g;

console.log(re.exec(str)); // ["fee ", index: 0, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fi ", index: 4, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fo ", index: 7, input: "fee fi fo fum"]
console.log(re.exec(str)); // null
```

Im Gegensatz dazu gibt die Methode {{jsxref("String.prototype.match()")}} alle Matches auf einmal zurück, jedoch ohne ihre Position.

```js
console.log(str.match(re)); // ["fee ", "fi ", "fo "]
```

#### Verwenden von Unicode-Regulären Ausdrücken

Das `u`-Flag wird verwendet, um "unicode" reguläre Ausdrücke zu erstellen; das heißt, reguläre Ausdrücke, die das Matchen gegen Unicode-Text unterstützen. Ein wichtiges Merkmal, das im unicode-Modus aktiviert ist, sind [Unicode Property Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape). Zum Beispiel könnte der folgende reguläre Ausdruck verwendet werden, um gegen ein beliebiges Unicode-"Wort" zu matchen:

```js
/\p{L}*/u;
```

Unicode-Reguläre Ausdrücke haben auch ein anderes Ausführungsverhalten. [`RegExp.prototype.unicode`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) enthält mehr Erklärungen dazu.

## Beispiele

> [!NOTE]
> Mehrere Beispiele sind auch verfügbar in:
>
> - Den Referenzseiten für {{jsxref("RegExp/exec", "exec()")}}, {{jsxref("RegExp/test", "test()")}}, {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/search", "search()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/split", "split()")}}
> - Den Leitfaden-Artikeln: [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes), [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions), [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences), [Quantoren](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)

### Verwenden von Sonderzeichen zur Eingabenüberprüfung

Im folgenden Beispiel wird vom Benutzer erwartet, dass er eine Telefonnummer eingibt.
Wenn der Benutzer die Taste "Überprüfen" drückt, überprüft das Skript die Gültigkeit der Nummer.
Wenn die Nummer gültig ist (die Zeichenfolge, die durch den regulären Ausdruck festgelegt ist, übereinstimmt), zeigt das Skript eine Nachricht an, die dem Benutzer dankt und die Nummer bestätigt.
Wenn die Nummer ungültig ist, informiert das Skript den Benutzer, dass die Telefonnummer ungültig ist.

Der reguläre Ausdruck sucht nach:

1. dem Anfang der Datenzeile: `^`
2. gefolgt von drei numerischen Zeichen `\d{3}` ODER `|` einer öffnenden Klammer `\(`, gefolgt von drei Ziffern `\d{3}`, gefolgt von einer schließenden Klammer `\)`, in einer nicht-erfassenden Gruppe `(?:)`
3. gefolgt von einem Bindestrich, Schrägstrich oder Dezimalpunkt in einer erfassenden Gruppe `()`
4. gefolgt von drei Ziffern `\d{3}`
5. gefolgt von der gematchten Gruppe `\1`, die gespeichert wurde
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
  - : Ein Online-Tool, um reguläre Ausdrücke zu lernen, zu erstellen und zu testen.
- [Regex tester](https://regex101.com/)
  - : Ein Online-Regex-Builder/Debugger
- [Regex interactive tutorial](https://regexlearn.com/)
  - : Eine Online-interaktive Tutorials, Spickzettel und Playground.
- [Regex visualizer](https://extendsclass.com/regex-tester.html)
  - : Ein Online-Visueller-Regex-Tester.

{{PreviousNext("Web/JavaScript/Guide/Representing_dates_times", "Web/JavaScript/Guide/Indexed_collections")}}
