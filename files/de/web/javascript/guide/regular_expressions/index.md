---
title: Reguläre Ausdrücke
slug: Web/JavaScript/Guide/Regular_expressions
l10n:
  sourceCommit: d45eb906aeda78dfc2677471d8e58f72ecae8d65
---

{{PreviousNext("Web/JavaScript/Guide/Representing_dates_times", "Web/JavaScript/Guide/Indexed_collections")}}

Reguläre Ausdrücke sind Muster, die verwendet werden, um Zeichenkombinationen in Zeichenketten zu finden.
In JavaScript sind reguläre Ausdrücke auch Objekte. Diese Muster werden mit den Methoden {{jsxref("RegExp/exec", "exec()")}} und {{jsxref("RegExp/test", "test()")}} von {{jsxref("RegExp")}} sowie mit den Methoden {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}} und {{jsxref("String/split", "split()")}} von {{jsxref("String")}} verwendet.
Dieses Kapitel beschreibt JavaScript-reguläre Ausdrücke. Es bietet einen kurzen Überblick über jedes Syntaxelement. Für eine ausführliche Erklärung der Semantik der einzelnen Elemente lesen Sie bitte die [Referenz zu regulären Ausdrücken](/de/docs/Web/JavaScript/Reference/Regular_expressions).

## Erstellen eines regulären Ausdrucks

Sie können einen regulären Ausdruck auf zwei Arten erstellen:

- Mit einem regulären Ausdrucksliteral, das aus einem Muster besteht, das zwischen Schrägstrichen eingeschlossen ist, wie folgt:

  ```js
  const re = /ab+c/;
  ```

  Reguläre Ausdrucksliterale ermöglichen die Kompilierung des regulären Ausdrucks, wenn das Skript geladen wird.
  Wenn der reguläre Ausdruck konstant bleibt, kann dies die Leistung verbessern.

- Oder durch Aufrufen der Konstruktorfunktion des {{jsxref("RegExp")}}-Objekts, wie folgt:

  ```js
  const re = new RegExp("ab+c");
  ```

  Die Verwendung der Konstruktorfunktion ermöglicht die Laufzeitkompilierung des regulären Ausdrucks.
  Verwenden Sie die Konstruktorfunktion, wenn Sie wissen, dass sich das Muster des regulären Ausdrucks ändern wird, oder wenn Sie das Muster nicht kennen und es aus einer anderen Quelle, wie z.B. Benutzereingaben, erhalten.

## Schreiben eines regulären Ausdrucksmusters

Ein reguläres Ausdrucksmuster besteht aus einfachen Zeichen, wie `/abc/`, oder aus einer Kombination von einfachen und Sonderzeichen, wie `/ab*c/` oder `/Chapter (\d+)\.\d*/`.
Das letzte Beispiel enthält Klammern, die als Erinnerungsvorrichtung verwendet werden.
Das Muster, das mit diesem Teil des Musters übereinstimmt, wird für die spätere Verwendung gespeichert, wie im Abschnitt [Verwendung von Gruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups) beschrieben.

### Verwendung einfacher Muster

Einfache Muster bestehen aus Zeichen, für die Sie eine direkte Übereinstimmung finden möchten. Zum Beispiel stimmt das Muster `/abc/` nur dann mit Zeichenkombinationen in Zeichenketten überein, wenn die genaue Folge `"abc"` vorkommt (alle Zeichen zusammen und in dieser Reihenfolge).
Eine solche Übereinstimmung würde in den Zeichenketten `"Hi, do you know your abc's?"` und `"The latest airplane designs evolved from slabcraft."` erfolgreich sein.
In beiden Fällen erfolgt die Übereinstimmung mit der Teilzeichenkette `"abc"`.
Es gibt keine Übereinstimmung in der Zeichenkette `"Grab crab"`, da sie zwar die Teilzeichenkette `"ab c"` enthält, jedoch nicht die exakte Teilzeichenkette `"abc"`.

### Verwendung besonderer Zeichen

Wenn die Suche nach einer Übereinstimmung mehr als eine direkte Übereinstimmung erfordert, wie z.B. das Finden von einem oder mehreren `b`s oder das Finden von Leerzeichen, können Sie Sonderzeichen im Muster einfügen.
Um beispielsweise _ein einzelnes `"a"` gefolgt von null oder mehr `"b"`s gefolgt von `"c"`_ zu finden, würden Sie das Muster `/ab*c/` verwenden: Das `*` nach `"b"` bedeutet "0 oder mehr Vorkommen des vorherigen Elements".
In der Zeichenkette `"cbbabbbbcdebc"` wird dieses Muster mit der Teilzeichenkette `"abbbbc"` übereinstimmen.

Die folgenden Seiten bieten Listen der verschiedenen Sonderzeichen, die in jede Kategorie passen, zusammen mit Beschreibungen und Beispielen.

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
  - : Assertions beinhalten Grenzen, die den Anfang und das Ende von Zeilen und Wörtern angeben, und andere Muster, die auf irgendeine Weise anzeigen, dass eine Übereinstimmung möglich ist (einschließlich Look-Ahead, Look-Behind und konditionalen Ausdrücken).
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
  - : Unterscheidet verschiedene Arten von Zeichen. Beispielsweise die Unterscheidung zwischen Buchstaben und Ziffern.
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
  - : Gruppen fassen mehrere Muster als Ganzes zusammen, und erfassende Gruppen liefern zusätzliche Teilübereinstimmungsinformationen, wenn ein regulärer Ausdruck verwendet wird, um gegen eine Zeichenkette abzugleichen. Rückverweise beziehen sich auf eine zuvor erfasste Gruppe im selben regulären Ausdruck.
- [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
  - : Geben die Anzahl der zu vergleichenden Zeichen oder Ausdrücke an.

Wenn Sie alle Sonderzeichen, die in regulären Ausdrücken verwendet werden können, in einer einzigen Tabelle betrachten möchten, sehen Sie sich Folgendes an:

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

> [!NOTE]
> [Ein größeres Spickzettel ist ebenfalls verfügbar](/de/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet) (nur sammeln von Teilen dieser einzelnen Artikel).

### Maskieren

Wenn Sie eines der Sonderzeichen wörtlich verwenden müssen (zum Beispiel tatsächlich nach einem `"*"` suchen), sollten Sie es maskieren, indem Sie einen Backslash davor setzen. Zum Beispiel, um nach `"a"` gefolgt von `"*"` gefolgt von `"b"` zu suchen, würden Sie `/a\*b/` verwenden — der Backslash "maskiert" das `"*"`, wodurch es wörtlich statt speziell wird.

> [!NOTE]
> In vielen Fällen, wenn Sie versuchen, ein Sonderzeichen zu finden, können Sie es in eine [Zeichenklasse](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) einschließen, als Alternative zum Maskieren, zum Beispiel `/a[*]b/`.

Ähnlich, wenn Sie ein reguläres Ausdrucksliteral schreiben und einen Schrägstrich ("/") abgleichen müssen, müssen Sie diesen maskieren (ansonsten beendet er das Muster).
Zum Beispiel, um nach dem Zeichenfolgen "/example/" gefolgt von einem oder mehreren alphabetischen Zeichen zu suchen, würden Sie `/\/example\/[a-z]+/i` verwenden—die Backslashes vor jedem Schrägstrich machen sie wörtlich.

Um einen wörtlichen Backslash abzugleichen, müssen Sie den Backslash maskieren.
Zum Beispiel, um nach der Zeichenkette "C:\\" zu suchen, wobei "C" ein beliebiger Buchstabe sein kann, würden Sie `/[A-Z]:\\/` verwenden — der erste Backslash maskiert den, der danach kommt, sodass der Ausdruck nach einem einzelnen wörtlichen Backslash sucht.

Wenn Sie den `RegExp`-Konstruktor mit einem Zeichenfolgenliteral verwenden, denken Sie daran, dass der Backslash ein Fluchtsymbol in Zeichenfolgenliteralen ist, also müssen Sie ihn im regulären Ausdruck auf der Ebene des Zeichenfolgenliterals maskieren.
`/a\*b/` und `new RegExp("a\\*b")` erstellen denselben Ausdruck, der nach "a" gefolgt von einem wörtlichen "\*" gefolgt von "b" sucht.

Die Funktion {{jsxref("RegExp.escape()")}} gibt eine neue Zeichenfolge zurück, bei der alle Sonderzeichen in der Regex-Syntax maskiert sind. Damit können Sie `new RegExp(RegExp.escape("a*b"))` verwenden, um einen regulären Ausdruck zu erstellen, der nur die Zeichenfolge `"a*b"` abgleicht.

### Verwendung von Klammern

Klammern um einen beliebigen Teil des Musters des regulären Ausdrucks bewirken, dass dieser Teil des übereinstimmenden Substrings gespeichert wird.
Einmal gespeichert, kann der Substring für andere Verwendungen abgerufen werden. Weitere Details finden Sie unter [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups).

## Verwendung von regulären Ausdrücken in JavaScript

Reguläre Ausdrücke werden mit den {{jsxref("RegExp")}}-Methoden {{jsxref("RegExp/test", "test()")}} und {{jsxref("RegExp/exec", "exec()")}} sowie mit den {{jsxref("String")}}-Methoden {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}} und {{jsxref("String/split", "split()")}} verwendet.

| Methode                                         | Beschreibung                                                                                                                                           |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("RegExp/exec", "exec()")}}             | Führt eine Suche nach einer Übereinstimmung in einer Zeichenkette aus. Gibt ein Array mit Informationen oder `null` bei keiner Übereinstimmung zurück. |
| {{jsxref("RegExp/test", "test()")}}             | Testet auf eine Übereinstimmung in einer Zeichenkette. Gibt `true` oder `false` zurück.                                                                |
| {{jsxref("String/match", "match()")}}           | Gibt ein Array mit allen Übereinstimmungen, einschließlich erfassender Gruppen, oder `null` zurück, wenn keine Übereinstimmung gefunden wird.          |
| {{jsxref("String/matchAll", "matchAll()")}}     | Gibt einen Iterator zurück, der alle Übereinstimmungen, einschließlich erfassender Gruppen, enthält.                                                   |
| {{jsxref("String/search", "search()")}}         | Testet auf eine Übereinstimmung in einer Zeichenkette. Gibt den Index der Übereinstimmung oder `-1` zurück, wenn die Suche fehlschlägt.                |
| {{jsxref("String/replace", "replace()")}}       | Führt eine Suche nach einer Übereinstimmung in einer Zeichenkette aus und ersetzt den übereinstimmenden Substring durch einen Ersatzsubstring.         |
| {{jsxref("String/replaceAll", "replaceAll()")}} | Führt eine Suche nach allen Übereinstimmungen in einer Zeichenkette aus und ersetzt die übereinstimmenden Substrings durch einen Ersatzsubstring.      |
| {{jsxref("String/split", "split()")}}           | Verwendet einen regulären Ausdruck oder eine feste Zeichenfolge, um eine Zeichenkette in ein Array von Substrings zu zerlegen.                         |

Wenn Sie wissen möchten, ob ein Muster in einer Zeichenkette gefunden wird, verwenden Sie die `test()`- oder `search()`-Methoden; für mehr Informationen (aber langsamere Ausführung) verwenden Sie die `exec()`- oder `match()`-Methoden.
Wenn Sie `exec()` oder `match()` verwenden und wenn die Übereinstimmung erfolgreich ist, geben diese Methoden ein Array zurück und aktualisieren die Eigenschaften des zugehörigen regulären Ausdrucksobjekts sowie des vordefinierten regulären Ausdrucksobjekts `RegExp`.
Wenn die Übereinstimmung fehlschlägt, gibt die `exec()`- Methode `null` zurück (was zu `false` wird).

Im folgenden Beispiel verwendet das Skript die `exec()`-Methode, um eine Übereinstimmung in einer Zeichenkette zu finden.

```js
const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbz");
```

Wenn Sie nicht auf die Eigenschaften des regulären Ausdrucks zugreifen müssen, ist eine alternative Möglichkeit, `myArray` mit diesem Skript zu erstellen:

```js
const myArray = /d(b+)d/g.exec("cdbbdbsbz");
// similar to 'cdbbdbsbz'.match(/d(b+)d/g); however,
// 'cdbbdbsbz'.match(/d(b+)d/g) outputs [ "dbbd" ]
// while /d(b+)d/g.exec('cdbbdbsbz') outputs [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ]
```

(Siehe [Verwendung des globalen Suchflags mit `exec()`](#using_the_global_search_flag_with_exec) für weitere Informationen zu den unterschiedlichen Verhaltensweisen.)

Wenn Sie den regulären Ausdruck aus einer Zeichenkette erstellen möchten, ist eine weitere Alternative dieses Skript:

```js
const myRe = new RegExp("d(b+)d", "g");
const myArray = myRe.exec("cdbbdbsbz");
```

Mit diesen Skripten ist die Übereinstimmung erfolgreich und gibt das Array zurück und aktualisiert die in der folgenden Tabelle gezeigten Eigenschaften.

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
      <td>Der übereinstimmende Teilstring und alle gespeicherten Teilstrings.</td>
      <td><code>['dbbd', 'bb', index: 1, input: 'cdbbdbsbz']</code></td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>Der 0-basierte Index der Übereinstimmung in der Eingabe-Zeichenkette.</td>
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
      <td>Der Index, ab dem die nächste Übereinstimmung beginnen soll.
        (Diese Eigenschaft wird nur gesetzt, wenn der reguläre Ausdruck das g-Option, beschrieben in
        <a href="#advanced_searching_with_flags">Erweiterte Suche mit Flags</a>, verwendet.)
      </td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>
        Der Text des Musters. Wird zur Zeit erstellt, wenn der reguläre Ausdruck erstellt wird, und nicht bei der Ausführung.
      </td>
      <td><code>'d(b+)d'</code></td>
    </tr>
  </tbody>
</table>

Wie im zweiten Form dieses Beispiels gezeigt, können Sie einen regulären Ausdruck, der mit einem Objektinitialisierer erstellt wurde, ohne Zuweisung zu einer Variablen verwenden.
Wenn Sie dies jedoch tun, ist jede Vorkommen ein neuer regulärer Ausdruck.
Deshalb, wenn Sie diese Form ohne Zuweisung zu einer Variablen verwenden, können Sie die Eigenschaften dieses regulären Ausdrucks nicht nachträglich zugreifen.
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

Die Vorkommen von `/d(b+)d/g` in den beiden Anweisungen sind unterschiedliche reguläre Ausdrucksobjekte und haben daher unterschiedliche Werte für ihre `lastIndex`-Eigenschaft.
Wenn Sie auf die Eigenschaften eines regulären Ausdrucks zugreifen müssen, der mit einem Objektinitialisierer erstellt wurde, sollten Sie ihn zuerst einer Variablen zuweisen.

### Erweiterte Suche mit Flags

Reguläre Ausdrücke haben optionale Flags, die Funktionalität wie globale Suche und suche ohne Berücksichtigung der Groß- und Kleinschreibung ermöglichen.
Diese Flags können getrennt oder zusammen in beliebiger Reihenfolge verwendet werden und sind als Teil des regulären Ausdrucks enthalten.

| Flag | Beschreibung                                                                                        | Entsprechende Eigenschaft                       |
| ---- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`  | Generiert Indizes für Teilstring-Übereinstimmungen.                                                 | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`  | Globale Suche.                                                                                      | {{jsxref("RegExp/global", "global")}}           |
| `i`  | Suche ohne Berücksichtigung der Groß- und Kleinschreibung.                                          | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`  | Macht `^` und `$` passend zum Anfang und Ende jeder Zeile anstelle des ganzen Strings.              | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`  | Erlaubt es, dass `.` Zeilenumbrüche abgleicht.                                                      | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`  | "Unicode"; behandelt ein Muster als eine Folge von Unicode-Codepunkten.                             | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`  | Ein Upgrade des `u`-Modus mit mehr Unicode-Features.                                                | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`  | Führt eine "sticky" Suche aus, die ab der aktuellen Position in der Zielzeichenkette übereinstimmt. | {{jsxref("RegExp/sticky", "sticky")}}           |

Um ein Flag in den regulären Ausdruck aufzunehmen, verwenden Sie diese Syntax:

```js
const re = /pattern/flags;
```

oder

```js
const re = new RegExp("pattern", "flags");
```

Beachten Sie, dass die Flags ein integraler Bestandteil eines regulären Ausdrucks sind. Sie können nicht später hinzugefügt oder entfernt werden.

Zum Beispiel, `re = /\w+\s/g` erstellt einen regulären Ausdruck, der nach einem oder mehreren Zeichen gefolgt von einem Leerzeichen sucht und diese Kombination im gesamten String sucht.

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

Das `m`-Flag wird verwendet, um anzugeben, dass eine mehrzeilige Eingabezeichenfolge als mehrere Zeilen betrachtet werden soll.
Wenn das `m`-Flag verwendet wird, stimmen `^` und `$` am Anfang oder Ende einer beliebigen Zeile innerhalb der Eingabezeichenfolge überein, anstatt am Anfang oder Ende des gesamten Strings.

Die Flags `i`, `m` und `s` können für bestimmte Teile eines Regex mit der [Modifiersyntax](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) aktiviert oder deaktiviert werden.

#### Verwendung des globalen Suchflags mit exec()

{{jsxref("RegExp.prototype.exec()")}}-Methode mit dem `g`-Flag gibt jede Übereinstimmung und deren Position iterativ zurück.

```js
const str = "fee fi fo fum";
const re = /\w+\s/g;

console.log(re.exec(str)); // ["fee ", index: 0, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fi ", index: 4, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fo ", index: 7, input: "fee fi fo fum"]
console.log(re.exec(str)); // null
```

Im Gegensatz dazu gibt die {{jsxref("String.prototype.match()")}}-Methode alle Übereinstimmungen auf einmal zurück, jedoch ohne deren Position.

```js
console.log(str.match(re)); // ["fee ", "fi ", "fo "]
```

#### Verwendung von Unicode-regulären Ausdrücken

Das `u`-Flag wird verwendet, um "Unicode"-reguläre Ausdrücke zu erstellen, d.h. reguläre Ausdrücke, die das Abgleichen mit Unicode-Text unterstützen. Eine wichtige Funktion, die im Unicode-Modus aktiviert ist, sind [Unicode-Eigenschaftsfluchten](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape). Zum Beispiel könnte der folgende reguläre Ausdruck verwendet werden, um gegen ein beliebiges Unicode-"Wort" abzugleichen:

```js
/\p{L}*/u;
```

Unicode-reguläre Ausdrücke haben auch anderes Ausführungsverhalten. [`RegExp.prototype.unicode`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) enthält mehr Erklärungen dazu.

## Beispiele

> [!NOTE]
> Mehrere Beispiele sind auch verfügbar in:
>
> - Die Referenzseiten für {{jsxref("RegExp/exec", "exec()")}}, {{jsxref("RegExp/test", "test()")}}, {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/search", "search()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/split", "split()")}}
> - Die Leitfadenartikel: [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes), [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions), [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences), [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)

### Verwendung von Sonderzeichen zur Überprüfung von Eingaben

Im folgenden Beispiel wird vom Benutzer erwartet, eine Telefonnummer einzugeben.
Wenn der Benutzer die Schaltfläche "Prüfen" drückt, überprüft das Skript die Gültigkeit der Nummer.
Wenn die Nummer gültig ist (die Zeichenfolge, die durch den regulären Ausdruck angegeben wird, übereinstimmt), zeigt das Skript eine Nachricht an, in der dem Benutzer gedankt und die Nummer bestätigt wird.
Wenn die Nummer ungültig ist, teilt das Skript dem Benutzer mit, dass die Telefonnummer nicht gültig ist.

Der reguläre Ausdruck sucht nach:

1. dem Anfang der Datenzeile: `^`
2. gefolgt von drei numerischen Zeichen `\d{3}` ODER `|` einer linken Klammer `\(`, gefolgt von drei Ziffern `\d{3}`, gefolgt von einer schließenden Klammer `\)`, in einer nicht-erfassenden Gruppe `(?:)`
3. gefolgt von einem Bindestrich, Schrägstrich oder Dezimalpunkt in einer erfassenden Gruppe `()`
4. gefolgt von drei Ziffern `\d{3}`
5. gefolgt von der Übereinstimmung der (ersten) eingefangenen Gruppe `\1`
6. gefolgt von vier Ziffern `\d{4}`
7. gefolgt von dem Ende der Datenzeile: `$`

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
- [Regex tester](https://regex101.com/)
  - : Ein Online-Regex-Ersteller/Debug-Tool
- [Regex interaktives Tutorial](https://regexlearn.com/)
  - : Ein Online-interaktives Tutorial, Spickzettel und Spielplatz.
- [Regex-Visualizer](https://extendsclass.com/regex-tester.html)
  - : Ein Online-Visual-Regex-Tester.

{{PreviousNext("Web/JavaScript/Guide/Representing_dates_times", "Web/JavaScript/Guide/Indexed_collections")}}
