---
title: Reguläre Ausdrücke
slug: Web/JavaScript/Guide/Regular_expressions
l10n:
  sourceCommit: ed8ab20ada0827a6acc80e4870861dac5b9f87eb
---

{{jsSidebar("JavaScript Leitfaden")}} {{PreviousNext("Web/JavaScript/Guide/Representing_dates_times", "Web/JavaScript/Guide/Indexed_collections")}}

Reguläre Ausdrücke sind Muster, die verwendet werden, um Zeichenkombinationen in Zeichenketten zu finden.
In JavaScript sind reguläre Ausdrücke ebenfalls Objekte. Diese Muster werden mit den Methoden {{jsxref("RegExp/exec", "exec()")}} und {{jsxref("RegExp/test", "test()")}} von {{jsxref("RegExp")}} und mit den Methoden {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}}, und {{jsxref("String/split", "split()")}} von {{jsxref("String")}} verwendet.
Dieses Kapitel beschreibt JavaScript-Reguläre Ausdrücke. Es bietet einen kurzen Überblick über jedes Syntaxelement. Für eine detaillierte Erklärung der Semantik jedes Elements lesen Sie die [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions) Referenz.

## Erstellen eines regulären Ausdrucks

Sie erstellen einen regulären Ausdruck auf zwei Arten:

- Mit einem regulären Ausdrucks-Literal, das aus einem zwischen Schrägstrichen eingeschlossenen Muster besteht, wie folgt:

  ```js
  const re = /ab+c/;
  ```

  Reguläre Ausdrucks-Literale bieten die Kompilierung des regulären Ausdrucks, wenn das Skript geladen wird.
  Wenn der reguläre Ausdruck konstant bleibt, kann dies die Leistung verbessern.

- Oder indem Sie die Konstruktorfunktion des {{jsxref("RegExp")}} Objekts aufrufen, wie folgt:

  ```js
  const re = new RegExp("ab+c");
  ```

  Die Verwendung der Konstruktorfunktion bietet die Kompilierung des regulären Ausdrucks zur Laufzeit.
  Verwenden Sie die Konstruktorfunktion, wenn Sie wissen, dass sich das Muster des regulären Ausdrucks ändern wird, oder wenn Sie das Muster nicht kennen und es aus einer anderen Quelle erhalten, wie zum Beispiel Nutzereingaben.

## Schreiben eines regulären Ausdrucksmusters

Ein reguläres Ausdrucksmuster besteht aus einfachen Zeichen, wie `/abc/`, oder einer Kombination aus einfachen und speziellen Zeichen, wie `/ab*c/` oder `/Chapter (\d+)\.\d*/`.
Das letzte Beispiel enthält Klammern, die als Gedächtnisstütze verwendet werden.
Das mit diesem Teil des Musters gefundene Match wird für späteren Gebrauch gespeichert, wie im Abschnitt [Verwendung von Gruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups) beschrieben.

### Verwendung einfacher Muster

Einfache Muster bestehen aus Zeichen, für die Sie eine direkte Übereinstimmung finden möchten. Zum Beispiel stimmt das Muster `/abc/` mit Zeichenkombinationen in Zeichenketten nur überein, wenn die genaue Sequenz `"abc"` vorkommt (alle Zeichen zusammen und in dieser Reihenfolge).
Eine solche Übereinstimmung würde in den Zeichenketten `"Hi, do you know your abc's?"` und `"The latest airplane designs evolved from slabcraft."` erfolgreich sein.
In beiden Fällen ist die Übereinstimmung mit dem Unterstring `"abc"`.
Es gibt keine Übereinstimmung in der Zeichenkette `"Grab crab"`, denn obwohl sie den Unterstring `"ab c"` enthält, enthält sie nicht den exakten Unterstring `"abc"`.

### Verwendung spezieller Zeichen

Wenn die Suche nach einer Übereinstimmung mehr erfordert als eine direkte Übereinstimmung, z. B. das Finden von einem oder mehreren Buchstaben "b" oder das Finden von Leerzeichen, können Sie spezielle Zeichen im Muster verwenden.
Zum Beispiel, um eine _einzelne `"a"` gefolgt von null oder mehr `"b"`s gefolgt von `"c"`_ zu finden, würden Sie das Muster `/ab*c/` verwenden: das `*` nach `"b"` bedeutet "0 oder mehr Vorkommen des vorhergehenden Elements."
In der Zeichenkette `"cbbabbbbcdebc"` wird dieses Muster den Unterstring `"abbbbc"` finden.

Die folgenden Seiten bieten Listen der verschiedenen speziellen Zeichen, die in jede Kategorie passen, zusammen mit Beschreibungen und Beispielen.

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
  - : Assertions enthalten Grenzen, die auf den Beginn und das Ende von Zeilen und Wörtern hinweisen, und andere Muster, die in irgendeiner Weise angeben, dass eine Übereinstimmung möglich ist (einschließlich Look-Ahead, Look-Behind und bedingte Ausdrücke).
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
  - : Unterscheiden verschiedene Arten von Zeichen. Beispielsweise Unterscheidung zwischen Buchstaben und Ziffern.
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
  - : Gruppen verbinden mehrere Muster als Ganzes, und erfassende Gruppen liefern zusätzliche Informationen über den Teilabgleich, wenn ein reguläres Ausdrucksmuster mit einer Zeichenkette abgeglichen wird. Rückverweise beziehen sich auf eine zuvor erfasste Gruppe im selben regulären Ausdruck.
- [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
  - : Geben die Anzahl der Zeichen oder Ausdrücke an, die abgeglichen werden sollen.

Wenn Sie alle speziellen Zeichen, die in regulären Ausdrücken verwendet werden können, in einer einzigen Tabelle sehen möchten, schauen Sie sich folgendes an:

<table class="standard-table">
  <caption>
    Spezielle Zeichen in regulären Ausdrücken.
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

> **Note:** [Ein größeres Spickzettel ist ebenfalls verfügbar](/de/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet) (das nur Teile dieser einzelnen Artikel zusammenfasst).

### Escaping

Wenn Sie eines der speziellen Zeichen wörtlich verwenden müssen (tatsächlich nach einem `"*"` suchen, zum Beispiel), müssen Sie es durch ein Voranstellen eines Backslashs escapen.
Zum Beispiel, um nach `"a"` gefolgt von `"*"` gefolgt von `"b"` zu suchen, würden Sie `/a\*b/` verwenden — der Backslash "escapt" das `"*"`, sodass es wörtlich anstelle von speziell ist.

Ebenso, wenn Sie ein reguläres Ausdrucks-Literal schreiben und einen Schrägstrich ("/") abgleichen müssen, müssen Sie diesen escapen (andernfalls beendet er das Muster).
Um beispielsweise nach der Zeichenkette "/example/" gefolgt von einem oder mehreren alphabetischen Zeichen zu suchen, würden Sie `/\/example\/[a-z]+/i` verwenden — die Backslashes vor jedem Schrägstrich machen sie wörtlich.

Um einen wörtlichen Backslash abzugleichen, müssen Sie den Backslash escapen.
Zum Beispiel, um die Zeichenkette "C:\\" zu finden, wobei "C" ein beliebiger Buchstabe sein kann, würden Sie `/[A-Z]:\\/` verwenden — der erste Backslash escapt den danach, sodass der Ausdruck nach einem einzelnen wörtlichen Backslash sucht.

Wenn Sie den `RegExp` Konstruktor mit einem Zeichenkettenliteral verwenden, denken Sie daran, dass der Backslash in Zeichenkettenliteralen ein Escapezeichen ist, daher müssen Sie ihn auf Zeichenkettenliteralebene escapen, um ihn im regulären Ausdruck zu verwenden.
`/a\*b/` und `new RegExp("a\\*b")` erzeugen denselben Ausdruck, der nach "a" gefolgt von einem wörtlichen "\*" gefolgt von "b" sucht.

Die {{jsxref("RegExp.escape()")}} Funktion gibt eine neue Zeichenkette zurück, bei der alle speziellen Zeichen der RegEx-Syntax escapt sind. Dies ermöglicht Ihnen `new RegExp(RegExp.escape("a*b"))`, um einen regulären Ausdruck zu erstellen, der nur die Zeichenkette `"a*b"` abgleicht.

### Verwendung von Klammern

Klammern um einen beliebigen Teil des regulären Ausdrucksmusters bewirken, dass dieser Teil der gefundenen Teilzeichenkette gespeichert wird.
Einmal gespeichert, kann die Teilzeichenkette für andere Zwecke erneut aufgerufen werden. Weitere Einzelheiten finden Sie unter [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups).

## Verwendung von regulären Ausdrücken in JavaScript

Reguläre Ausdrücke werden mit den Methoden {{jsxref("RegExp")}} {{jsxref("RegExp/test", "test()")}} und {{jsxref("RegExp/exec", "exec()")}} und mit den Methoden {{jsxref("String")}} {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}}, und {{jsxref("String/split", "split()")}} verwendet.

| Methode                                         | Beschreibung                                                                                                                                                |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp/exec", "exec()")}}             | Führt eine Suche nach einem Match in einer Zeichenkette aus. Es gibt ein Array mit Informationen oder `null` im Fall einer Nichtübereinstimmung zurück.     |
| {{jsxref("RegExp/test", "test()")}}             | Testet auf ein Match in einer Zeichenkette. Es gibt `true` oder `false` zurück.                                                                             |
| {{jsxref("String/match", "match()")}}           | Gibt ein Array mit allen Übereinstimmungen zurück, einschließlich erfassender Gruppen, oder `null`, wenn kein Match gefunden wird.                          |
| {{jsxref("String/matchAll", "matchAll()")}}     | Gibt einen Iterator mit allen Übereinstimmungen zurück, einschließlich erfassender Gruppen.                                                                 |
| {{jsxref("String/search", "search()")}}         | Testet auf ein Match in einer Zeichenkette. Es gibt den Index des Matchs oder `-1` zurück, wenn die Suche fehlschlägt.                                      |
| {{jsxref("String/replace", "replace()")}}       | Führt eine Suche nach einem Match in einer Zeichenkette aus und ersetzt die gefundene Teilzeichenkette durch eine Ersetzungsteilzeichenkette.               |
| {{jsxref("String/replaceAll", "replaceAll()")}} | Führt eine Suche nach allen Übereinstimmungen in einer Zeichenkette aus und ersetzt die gefundenen Teilzeichenketten durch eine Ersetzungsteilzeichenkette. |
| {{jsxref("String/split", "split()")}}           | Verwendet einen regulären Ausdruck oder eine feste Zeichenkette, um eine Zeichenkette in ein Array von Teilzeichenketten zu zerlegen.                       |

Wenn Sie wissen möchten, ob ein Muster in einer Zeichenkette gefunden wird, verwenden Sie die `test()` oder `search()` Methoden; für mehr Informationen (jedoch langsamere Ausführung) verwenden Sie die `exec()` oder `match()` Methoden.
Wenn Sie `exec()` oder `match()` verwenden und das Match erfolgreich ist, geben diese Methoden ein Array zurück und aktualisieren Eigenschaften des zugehörigen regulären Ausdrucksobjekts sowie des vordefinierten regulären Ausdrucksobjekts, `RegExp`.
Wenn das Match fehlschlägt, gibt die `exec()` Methode `null` zurück (was zu `false` führt).

Im folgenden Beispiel verwendet das Skript die `exec()` Methode, um ein Match in einer Zeichenkette zu finden.

```js
const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbz");
```

Wenn Sie nicht auf die Eigenschaften des regulären Ausdrucks zugreifen müssen, können Sie `myArray` auch mit diesem Skript erstellen:

```js
const myArray = /d(b+)d/g.exec("cdbbdbsbz");
// similar to 'cdbbdbsbz'.match(/d(b+)d/g); however,
// 'cdbbdbsbz'.match(/d(b+)d/g) outputs [ "dbbd" ]
// while /d(b+)d/g.exec('cdbbdbsbz') outputs [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ]
```

(Siehe [Verwendung der globalen Suchmarkierung mit `exec()`](#using_the_global_search_flag_with_exec) für weitere Informationen über die unterschiedlichen Verhaltensweisen.)

Wenn Sie den regulären Ausdruck aus einer Zeichenkette konstruieren möchten, ist eine weitere Alternative dieses Skript:

```js
const myRe = new RegExp("d(b+)d", "g");
const myArray = myRe.exec("cdbbdbsbz");
```

Mit diesen Skripten ist der Match erfolgreich und gibt das Array zurück und aktualisiert die in der folgenden Tabelle gezeigten Eigenschaften.

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
      <td>Die übereinstimmende Zeichenkette und alle gespeicherten Teilstrings.</td>
      <td><code>['dbbd', 'bb', index: 1, input: 'cdbbdbsbz']</code></td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>Der auf 0 basierende Index des Matchs in der Eingabezeichenkette.</td>
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
      <td>Der Index, an dem das nächste Match beginnen soll.
        (Diese Eigenschaft wird nur gesetzt, wenn der reguläre Ausdruck die g-Option verwendet, die in
        <a href="#advanced_searching_with_flags">Erweitertes Suchen mit Markierungen</a> beschrieben wird.)
      </td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>
        Der Text des Musters. Wird zum Zeitpunkt erstellt, wenn der reguläre Ausdruck erstellt wird, nicht bei der Ausführung.
      </td>
      <td><code>'d(b+)d'</code></td>
    </tr>
  </tbody>
</table>

Wie in der zweiten Form dieses Beispiels gezeigt, können Sie einen regulären Ausdruck mit einer Objektinitialisierung erstellen, ohne ihn einer Variablen zuzuweisen.
Wenn Sie dies jedoch tun, ist jede Vorkommen ein neuer regulärer Ausdruck.
Aus diesem Grund, wenn Sie diese Form ohne Zuordnung zu einer Variablen verwenden, können Sie anschließend nicht auf die Eigenschaften dieses regulären Ausdrucks zugreifen.
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

Die Vorkommen von `/d(b+)d/g` in den beiden Anweisungen sind verschiedene reguläre Ausdrucksobjekte und haben daher unterschiedliche Werte für ihre `lastIndex`-Eigenschaft.
Wenn Sie auf die Eigenschaften eines regulären Ausdrucks zugreifen müssen, der mit einem Objektinitialisierer erstellt wurde, sollten Sie ihn zuerst einer Variablen zuweisen.

### Erweitertes Suchen mit Markierungen

Reguläre Ausdrücke haben optionale Markierungen, die Funktionen wie globales Suchen und Groß-/Kleinschreibung ignorierendes Suchen ermöglichen.
Diese Markierungen können separat oder zusammen in beliebiger Reihenfolge verwendet werden und sind ein Teil des regulären Ausdrucks.

| Markierung | Beschreibung                                                                                        | Entsprechende Eigenschaft                       |
| ---------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`        | Generiert Indizes für Unterstring-Matches.                                                          | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`        | Globales Suchen.                                                                                    | {{jsxref("RegExp/global", "global")}}           |
| `i`        | Groß-/Kleinschreibung ignorierendes Suchen.                                                         | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`        | Lässt `^` und `$` den Anfang und das Ende jeder Zeile anstatt der gesamten Zeichenkette abgleichen. | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`        | Erlaubt `.` das Abgleichen von Newline-Zeichen.                                                     | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`        | "Unicode"; behandelt ein Muster als eine Sequenz von Unicode-Codepunkten.                           | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`        | Ein Upgrade zum `u` Modus mit mehr Unicode-Funktionen.                                              | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`        | Durchführt eine "sticky" Suche, die ab der aktuellen Position in der Zielzeichenkette abgleicht.    | {{jsxref("RegExp/sticky", "sticky")}}           |

Um eine Markierung mit dem regulären Ausdruck einzuschließen, verwenden Sie diese Syntax:

```js
const re = /pattern/flags;
```

oder

```js
const re = new RegExp("pattern", "flags");
```

Beachten Sie, dass die Markierungen ein integraler Bestandteil eines regulären Ausdrucks sind. Sie können nicht später hinzugefügt oder entfernt werden.

Zum Beispiel, `re = /\w+\s/g` erstellt einen regulären Ausdruck, der nach einem oder mehreren Zeichen gefolgt von einem Leerzeichen sucht und diese Kombination in der gesamten Zeichenkette sucht.

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

Die `m` Markierung wird verwendet, um anzugeben, dass eine mehrzeilige Eingabezeichenkette als mehrere Zeilen behandelt werden sollte.
Wenn die `m` Markierung verwendet wird, stimmen `^` und `$` am Anfang oder Ende einer beliebigen Zeile innerhalb der Eingabezeichenkette überein, anstatt am Anfang oder Ende der gesamten Zeichenkette.

Die `i`, `m`, und `s` Markierungen können für spezifische Teile einer Regex mithilfe der [Modifier-Syntax](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) aktiviert oder deaktiviert werden.

#### Verwendung der globalen Suchmarkierung mit exec()

{{jsxref("RegExp.prototype.exec()")}} Methode mit der `g` Markierung gibt jedes Match und dessen Position iterativ zurück.

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

#### Verwendung von Unicode-regulären Ausdrücken

Die `u` Markierung wird verwendet, um "Unicode"-reguläre Ausdrücke zu erstellen; das heißt, reguläre Ausdrücke, die das Abgleichen gegen Unicode-Text unterstützen. Ein wichtiges Feature, das im Unicode-Modus aktiviert wird, sind [Unicode-Eigenschaftsentsprechungen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape). Zum Beispiel könnte der folgende reguläre Ausdruck verwendet werden, um gegen ein beliebiges Unicode-"Wort" zu matchen:

```js
/\p{L}*/u;
```

Unicode-reguläre Ausdrücke haben auch unterschiedliches Verhalten bei der Ausführung. [`RegExp.prototype.unicode`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) enthält weitere Erklärungen dazu.

## Beispiele

> [!NOTE]
> Mehrere Beispiele sind ebenfalls verfügbar in:
>
> - Den Referenzseiten für {{jsxref("RegExp/exec", "exec()")}}, {{jsxref("RegExp/test", "test()")}}, {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/search", "search()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/split", "split()")}}
> - Den Leitfadenartikeln: [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes), [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions), [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences), [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)

### Verwendung besonderer Zeichen zur Überprüfung von Eingaben

Im folgenden Beispiel soll der Benutzer eine Telefonnummer eingeben.
Wenn der Benutzer die Schaltfläche "Prüfen" drückt, überprüft das Skript die Gültigkeit der Nummer.
Wenn die Nummer gültig ist (der Zeichenfolge entspricht, die im regulären Ausdruck angegeben ist), zeigt das Skript eine Nachricht, die dem Benutzer dankt und die Nummer bestätigt.
Wenn die Nummer ungültig ist, informiert das Skript den Benutzer, dass die Telefonnummer ungültig ist.

Der reguläre Ausdruck sucht nach:

1. dem Anfang der Zeile der Daten: `^`
2. gefolgt von drei numerischen Zeichen `\d{3}` ODER `|` einer linken Klammer `\(`, gefolgt von drei Ziffern `\d{3}`, gefolgt von einer rechten Klammer `\)`, in einer nicht-erfassenden Gruppe `(?:)`
3. gefolgt von einem Bindestrich, Schrägstrich oder Dezimalpunkt in einer erfassenden Gruppe `()`
4. gefolgt von drei Ziffern `\d{3}`
5. gefolgt von dem Match, das in der (ersten) erfassten Gruppe gespeichert ist `\1`
6. gefolgt von vier Ziffern `\d{4}`
7. gefolgt vom Ende der Zeile der Daten: `$`

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
  - : Ein Online-Tool zum Lernen, Erstellen und Testen von Regulären Ausdrücken.
- [Regex Tester](https://regex101.com/)
  - : Ein Online-Builder/Debugger für Regex
- [Regex interaktives Tutorial](https://regexlearn.com/)
  - : Ein Online-Interaktives Tutorial, Spickzettel, & Spielwiese.
- [Regex-Visualizer](https://extendsclass.com/regex-tester.html)
  - : Ein Online-Visual-Tester für Regex.

{{PreviousNext("Web/JavaScript/Guide/Representing_dates_times", "Web/JavaScript/Guide/Indexed_collections")}}
