---
title: Reguläre Ausdrücke
slug: Web/JavaScript/Guide/Regular_expressions
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Representing_dates_times", "Web/JavaScript/Guide/Indexed_collections")}}

Reguläre Ausdrücke sind Muster, die verwendet werden, um Zeichenkombinationen in Zeichenketten zu finden.
In JavaScript sind reguläre Ausdrücke auch Objekte. Diese Muster werden mit den Methoden {{jsxref("RegExp/exec", "exec()")}} und {{jsxref("RegExp/test", "test()")}} von {{jsxref("RegExp")}} verwendet, sowie mit den Methoden {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}} und {{jsxref("String/split", "split()")}} von {{jsxref("String")}}.
Dieses Kapitel beschreibt JavaScript-reguläre Ausdrücke. Es bietet einen kurzen Überblick über jedes Syntaxelement. Für eine detaillierte Erklärung der Semantik jedes einzelnen können Sie die [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)-Referenz lesen.

## Erstellen eines regulären Ausdrucks

Sie erstellen einen regulären Ausdruck auf eine von zwei Arten:

- Verwenden eines regulären Ausdrucksliterals, das aus einem zwischen Schrägstrichen eingeschlossenen Muster besteht, wie folgt:

  ```js
  const re = /ab+c/;
  ```

  Reguläre Ausdrucksliterale bieten die Kompilierung des regulären Ausdrucks, wenn das Skript geladen wird.
  Wenn der reguläre Ausdruck konstant bleibt, kann die Verwendung dieser Methode die Leistung verbessern.

- Oder durch Aufrufen der Konstruktorfunktion des {{jsxref("RegExp")}}-Objekts, wie folgt:

  ```js
  const re = new RegExp("ab+c");
  ```

  Die Verwendung der Konstruktorfunktion ermöglicht die Laufzeitkompilierung des regulären Ausdrucks.
  Verwenden Sie die Konstruktorfunktion, wenn Sie wissen, dass sich das Muster des regulären Ausdrucks ändern wird oder wenn Sie das Muster nicht kennen und es von einer anderen Quelle, wie Benutzereingaben, erhalten.

## Schreiben eines regulären Ausdrucksmusters

Ein reguläres Ausdrucksmuster setzt sich aus einfachen Zeichen zusammen, wie `/abc/`, oder einer Kombination aus einfachen und speziellen Zeichen, wie `/ab*c/` oder `/Chapter (\d+)\.\d*/`.
Das letzte Beispiel umfasst Klammern, die als Gedächtnisstütze verwendet werden.
Das mit diesem Teil des Musters gefundene Match wird zur späteren Verwendung gespeichert, wie im Abschnitt [Verwenden von Gruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups) beschrieben.

### Verwenden einfacher Muster

Einfache Muster bestehen aus Zeichen, für die Sie eine direkte Übereinstimmung finden möchten. Zum Beispiel findet das Muster `/abc/` Zeichenkombinationen in Zeichenfolgen nur, wenn die exakte Sequenz `"abc"` vorkommt (alle Zeichen zusammen und in dieser Reihenfolge).
Eine solche Übereinstimmung wäre in den Zeichenfolgen `"Hi, do you know your abc's?"` und `"The latest airplane designs evolved from slabcraft."` erfolgreich.
In beiden Fällen ist die Übereinstimmung mit dem Teilstring `"abc"`.
Es gibt keine Übereinstimmung in der Zeichenfolge `"Grab crab"`, weil sie zwar den Teilstring `"ab c"` enthält, aber nicht den exakten Teilstring `"abc"`.

### Verwenden von Sonderzeichen

Wenn die Suche nach einer Übereinstimmung mehr als eine direkte Übereinstimmung erfordert, z. B. das Finden von einem oder mehreren `b`s oder das Finden von Leerzeichen, können Sie Sonderzeichen im Muster einbeziehen.
Zum Beispiel, um _ein einzelnes `"a"`, gefolgt von null oder mehr `"b"`s, gefolgt von `"c"`_ zu finden, würden Sie das Muster `/ab*c/` verwenden: Das `*` nach `"b"` bedeutet "0 oder mehr Vorkommen des vorhergehenden Elements."
In der Zeichenfolge `"cbbabbbbcdebc"` wird dieses Muster den Teilstring `"abbbbc"` finden.

Die folgenden Seiten bieten Listen der verschiedenen Sonderzeichen, die in jede Kategorie passen, zusammen mit Beschreibungen und Beispielen.

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
  - : Assertions umfassen Grenzen, die die Anfänge und Enden von Zeilen und Wörtern anzeigen, sowie andere Muster, die auf irgendeine Weise anzeigen, dass eine Übereinstimmung möglich ist (einschließlich Look-ahead, Look-behind und bedingte Ausdrücke).
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
  - : Unterscheiden verschiedene Arten von Zeichen. Zum Beispiel Unterscheidung zwischen Buchstaben und Ziffern.
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
  - : Gruppen bündeln mehrere Muster als Ganzes, und erfassende Gruppen liefern Zusatzinformationen über Submatches, wenn ein reguläres Ausdrucksmuster mit einer Zeichenfolge verglichen wird. Rückverweise beziehen sich auf eine zuvor erfasste Gruppe im gleichen regulären Ausdruck.
- [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
  - : Geben die Anzahl der zu vergleichenden Zeichen oder Ausdrücke an.

Wenn Sie alle Sonderzeichen, die in regulären Ausdrücken verwendet werden können, in einer einzigen Tabelle anzeigen möchten, sehen Sie sich Folgendes an:

<table class="standard-table">
  <caption>
    Sonderzeichen in regulären Ausdrücken.
  </caption>
  <thead>
    <tr>
      <th scope="col">Zeichen / Konstruktionen</th>
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

> [!NOTE] > [Ein größerer Spickzettel ist ebenfalls verfügbar](/de/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet) (der nur Teile dieser Einzelartikel aggregiert).

### Escaping

Wenn Sie eines der Sonderzeichen wörtlich verwenden müssen (zum Beispiel tatsächlich nach einem `"*"` suchen), müssen Sie es durch Hinzufügen eines Backslashes davor "escapen".
Um zum Beispiel nach `"a"` gefolgt von `"*"` gefolgt von `"b"` zu suchen, würden Sie `/a\*b/` verwenden — der Backslash "escaped" das `"*"`, wodurch es wörtlich statt speziell wird.

Ähnlich, wenn Sie ein reguläres Ausdrucksliteral schreiben und einen Schrägstrich ("/") übereinstimmen müssen, müssen Sie diesen "escapen" (ansonsten endet das Muster).
Um zum Beispiel nach der Zeichenfolge "/example/" gefolgt von einem oder mehreren alphabetischen Zeichen zu suchen, würden Sie `/\/example\/[a-z]+/i` verwenden — die Backslashes vor jedem Schrägstrich machen sie wörtlich.

Um einen wörtlichen Backslash zu "matchen", müssen Sie den Backslash "escapen".
Um zum Beispiel nach der Zeichenfolge "C:\\" zu "matchen", wobei "C" ein beliebiger Buchstabe sein kann, würden Sie `/[A-Z]:\\/` verwenden — der erste Backslash "escaped" den folgenden, sodass der Ausdruck nach einem einzelnen wörtlichen Backslash sucht.

Wenn Sie den `RegExp`-Konstruktor mit einem Zeichenfolgenliteral verwenden, denken Sie daran, dass der Backslash in Zeichenfolgenliteralen ein Escapezeichen ist, sodass Sie ihn im regulären Ausdruck auf der Ebene des Zeichenfolgenliterals "escapen" müssen.
`/a\*b/` und `new RegExp("a\\*b")` erstellen denselben Ausdruck, der nach "a" gefolgt von einem wörtlichen "\*" gefolgt von "b" sucht.

Die Funktion {{jsxref("RegExp.escape()")}} gibt eine neue Zeichenfolge zurück, in der alle speziellen Zeichen der regulären Ausdruckssyntax "escaped" sind. Dies ermöglicht es Ihnen, `new RegExp(RegExp.escape("a*b"))` zu verwenden, um einen regulären Ausdruck zu erstellen, der nur die Zeichenfolge `"a*b"` "matched".

### Klammern verwenden

Klammern um einen Teil des regulären Ausdrucksmusters führen dazu, dass dieser Teil des übereinstimmenden Teilstrings gespeichert wird.
Einmal gespeichert, kann der Teilstring für andere Verwendungen abgerufen werden. Weitere Informationen finden Sie unter [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups).

## Verwenden von regulären Ausdrücken in JavaScript

Reguläre Ausdrücke werden mit den Methoden {{jsxref("RegExp")}} {{jsxref("RegExp/test", "test()")}} und {{jsxref("RegExp/exec", "exec()")}} und mit den Methoden {{jsxref("String")}} {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}} und {{jsxref("String/split", "split()")}} verwendet.

| Methode                                         | Beschreibung                                                                                                                                               |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp/exec", "exec()")}}             | Führt eine Suche nach einer Übereinstimmung in einer Zeichenkette aus. Gibt ein Array mit Informationen oder `null` bei einer Nichtübereinstimmung zurück. |
| {{jsxref("RegExp/test", "test()")}}             | Testet auf eine Übereinstimmung in einer Zeichenkette. Gibt `true` oder `false` zurück.                                                                    |
| {{jsxref("String/match", "match()")}}           | Gibt ein Array zurück, das alle Übereinstimmungen, einschließlich der erfassenden Gruppen, oder `null`, wenn keine Übereinstimmung gefunden wird, enthält. |
| {{jsxref("String/matchAll", "matchAll()")}}     | Gibt einen Iterator zurück, der alle Übereinstimmungen, einschließlich der erfassenden Gruppen, enthält.                                                   |
| {{jsxref("String/search", "search()")}}         | Testet auf eine Übereinstimmung in einer Zeichenkette. Gibt den Index der Übereinstimmung oder `-1`, wenn die Suche fehlschlägt, zurück.                   |
| {{jsxref("String/replace", "replace()")}}       | Führt eine Suche nach einer Übereinstimmung in einer Zeichenkette aus und ersetzt den übereinstimmenden Teilstring durch einen Ersetzungsteilstring.       |
| {{jsxref("String/replaceAll", "replaceAll()")}} | Führt eine Suche nach allen Übereinstimmungen in einer Zeichenkette aus und ersetzt die übereinstimmenden Teilstrings durch einen Ersetzungsteilstring.    |
| {{jsxref("String/split", "split()")}}           | Verwendet einen regulären Ausdruck oder einen festen String, um eine Zeichenkette in ein Array von Teilstrings aufzubrechen.                               |

Wenn Sie wissen möchten, ob ein Muster in einer Zeichenkette gefunden wird, verwenden Sie die `test()`- oder `search()`-Methoden; für mehr Informationen (aber langsamerer Ausführung) verwenden Sie die `exec()`- oder `match()`-Methoden.
Wenn Sie `exec()` oder `match()` verwenden und die Übereinstimmung erfolgreich ist, geben diese Methoden ein Array zurück und aktualisieren die Eigenschaften des zugehörigen regulären Ausdrucksobjekts sowie des vordefinierten regulären Ausdrucksobjekts, `RegExp`.
Wenn die Übereinstimmung fehlschlägt, gibt die `exec()`-Methode `null` (welches zu `false` wird) zurück.

Im folgenden Beispiel verwendet das Skript die `exec()`-Methode, um eine Übereinstimmung in einer Zeichenkette zu finden.

```js
const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbz");
```

Wenn Sie die Eigenschaften des regulären Ausdrucks nicht verwenden müssen, ist eine alternative Möglichkeit, `myArray` zu erstellen, mit diesem Skript:

```js
const myArray = /d(b+)d/g.exec("cdbbdbsbz");
// similar to 'cdbbdbsbz'.match(/d(b+)d/g); however,
// 'cdbbdbsbz'.match(/d(b+)d/g) outputs [ "dbbd" ]
// while /d(b+)d/g.exec('cdbbdbsbz') outputs [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ]
```

(Siehe [Verwenden der globalen Suchmarkierung mit `exec()`](#using_the_global_search_flag_with_exec) für weitere Informationen über die unterschiedlichen Verhaltensweisen.)

Wenn Sie den regulären Ausdruck aus einem String erstellen möchten, eine weitere Alternative ist dieses Skript:

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
      <td>Die gefundene Zeichenkette und alle gespeicherten Teilzeichenketten.</td>
      <td><code>['dbbd', 'bb', index: 1, input: 'cdbbdbsbz']</code></td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>Der 0-basierte Index der Übereinstimmung in der Eingabezeichenfolge.</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>Die ursprüngliche Zeichenfolge.</td>
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
        (Diese Eigenschaft wird nur gesetzt, wenn der reguläre Ausdruck die g-Option verwendet, die unter
        <a href="#advanced_searching_with_flags">Erweiterte Suche mit Flags</a> beschrieben wird.)
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

Wie in der zweiten Form dieses Beispiels gezeigt, können Sie einen regulären Ausdruck, der mit einem Objektinitialisierer erstellt wurde, verwenden, ohne ihn einer Variablen zuzuweisen.
Wenn Sie dies jedoch tun, ist jeder Vorkommnis ein neuer regulärer Ausdruck.
Aus diesem Grund, wenn Sie diese Form ohne Zuweisung zu einer Variablen verwenden, können Sie anschließend nicht auf die Eigenschaften dieses regulären Ausdrucks zugreifen.
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

Sind die Vorkommen von `/d(b+)d/g` in den beiden Anweisungen unterschiedliche reguläre Ausdrucksobjekte und haben daher unterschiedliche Werte für ihre `lastIndex`-Eigenschaft.
Wenn Sie auf die Eigenschaften eines mit einem Objektinitialisierer erstellten regulären Ausdrucks zugreifen müssen, sollten Sie ihn zuerst einer Variablen zuweisen.

### Erweiterte Suche mit Flags

Reguläre Ausdrücke haben optionale Flags, die Funktionen wie globale Suche und keine Groß-/Kleinschreibung ermöglichen.
Diese Flags können separat oder zusammen in beliebiger Reihenfolge verwendet werden und sind Teil des regulären Ausdrucks.

| Flag | Beschreibung                                                                                    | Entsprechende Eigenschaft                       |
| ---- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`  | Generiert Indizes für Teilstring-Übereinstimmungen.                                             | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`  | Globale Suche.                                                                                  | {{jsxref("RegExp/global", "global")}}           |
| `i`  | Suche ohne Groß-/Kleinschreibung.                                                               | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`  | Lässt `^` und `$` den Anfang und das Ende jeder Zeile anstelle des gesamten Strings abgleichen. | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`  | Erlaubt, dass `.` Steuerzeichen abgleichen kann.                                                | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`  | "Unicode"; behandelt ein Muster als eine Folge von Unicode-Codepunkten.                         | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`  | Eine Verbesserung des `u`-Modus mit mehr Unicode-Funktionen.                                    | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`  | Führt eine "Sticky" Suche durch, die am aktuellen Standort im Zielstring beginnt.               | {{jsxref("RegExp/sticky", "sticky")}}           |

Um ein Flag mit dem regulären Ausdruck einzuschließen, verwenden Sie diese Syntax:

```js
const re = /pattern/flags;
```

oder

```js
const re = new RegExp("pattern", "flags");
```

Beachten Sie, dass die Flags ein integraler Bestandteil eines regulären Ausdrucks sind. Sie können später nicht hinzugefügt oder entfernt werden.

Zum Beispiel erstellt `re = /\w+\s/g` einen regulären Ausdruck, der nach einem oder mehreren Zeichen gefolgt von einem Leerzeichen sucht, und er sucht nach dieser Kombination im gesamten String.

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
Wenn das `m`-Flag verwendet wird, passen `^` und `$` am Anfang oder Ende einer beliebigen Zeile innerhalb der Eingabezeichenfolge anstelle des gesamten Strings.

Die `i`, `m` und `s` Flags können für bestimmte Teile eines Regex mithilfe der [Modifier](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Syntax aktiviert oder deaktiviert werden.

#### Verwenden der globalen Suchmarkierung mit exec()

Die Methode {{jsxref("RegExp.prototype.exec()")}} mit dem `g`-Flag gibt jede Übereinstimmung und ihre Position iterativ zurück.

```js
const str = "fee fi fo fum";
const re = /\w+\s/g;

console.log(re.exec(str)); // ["fee ", index: 0, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fi ", index: 4, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fo ", index: 7, input: "fee fi fo fum"]
console.log(re.exec(str)); // null
```

Im Gegensatz dazu gibt die Methode {{jsxref("String.prototype.match()")}} alle Übereinstimmungen auf einmal zurück, jedoch ohne deren Position.

```js
console.log(str.match(re)); // ["fee ", "fi ", "fo "]
```

#### Verwenden von Unicode-regulären Ausdrücken

Das `u`-Flag wird verwendet, um "unicode" reguläre Ausdrücke zu erstellen; das bedeutet, reguläre Ausdrücke, die das Matching mit Unicode-Text unterstützen. Eine wichtige Funktion, die im Unicode-Modus aktiviert wird, ist [Unicode-Eigenschaftsentschlüsselung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape). Zum Beispiel könnte der folgende reguläre Ausdruck verwendet werden, um gegen ein beliebiges Unicode-"Wort" zu matchen:

```js
/\p{L}*/u;
```

Unicode-reguläre Ausdrücke haben auch ein unterschiedliches Ausführungsverhalten. [`RegExp.prototype.unicode`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) enthält weitere Erklärungen dazu.

## Beispiele

> [!NOTE]
> Einige Beispiele sind auch verfügbar in:
>
> - Den Referenzseiten für {{jsxref("RegExp/exec", "exec()")}}, {{jsxref("RegExp/test", "test()")}}, {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/search", "search()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/split", "split()")}}
> - Den Leitfadenartikeln: [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes), [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions), [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences), [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)

### Verwenden von Sonderzeichen zur Eingabeverifizierung

Im folgenden Beispiel wird erwartet, dass der Benutzer eine Telefonnummer eingibt.
Wenn der Benutzer die "Prüfen"-Taste drückt, überprüft das Skript die Gültigkeit der Nummer.
Wenn die Nummer gültig ist (der durch den regulären Ausdruck spezifizierten Zeichenfolge entspricht), zeigt das Skript eine Nachricht, die dem Benutzer dankt und die Nummer bestätigt.
Ist die Nummer ungültig, informiert das Skript den Benutzer, dass die Telefonnummer nicht gültig ist.

Der reguläre Ausdruck sucht nach:

1. dem Anfang der Zeilen: `^`
2. gefolgt von drei numerischen Zeichen `\d{3}` ODER `|` einer linken Klammer `\(`, gefolgt von drei Ziffern `\d{3}`, gefolgt von einer rechten Klammer `\)`, in einer nicht-erfassenden Gruppe `(?:)`
3. gefolgt von einem Bindestrich, Schrägstrich oder Dezimalpunkt in einer erfassenden Gruppe `()`
4. gefolgt von drei Ziffern `\d{3}`
5. gefolgt von der in der (ersten) erfassten Gruppe gespeicherten Übereinstimmung `\1`
6. gefolgt von vier Ziffern `\d{4}`
7. gefolgt vom Ende der Zeilen: `$`

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

## Tools

- [RegExr](https://regexr.com/)
  - : Ein Online-Tool, um Reguläre Ausdrücke zu lernen, zu erstellen und zu testen.
- [Regex tester](https://regex101.com/)
  - : Ein Online-RegEx-Builder/Debugger.
- [Regex interactive tutorial](https://regexlearn.com/)
  - : Ein Online-Interaktiv Tutorien, Spickzettel und Spielwiese.
- [Regex visualizer](https://extendsclass.com/regex-tester.html)
  - : Ein Online-VisualisierungsregEx-Tester.

{{PreviousNext("Web/JavaScript/Guide/Representing_dates_times", "Web/JavaScript/Guide/Indexed_collections")}}
