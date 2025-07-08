---
title: Reguläre Ausdrücke
slug: Web/JavaScript/Guide/Regular_expressions
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{PreviousNext("Web/JavaScript/Guide/Representing_dates_times", "Web/JavaScript/Guide/Indexed_collections")}}

Reguläre Ausdrücke sind Muster, die verwendet werden, um Zeichenkombinationen in Zeichenfolgen zu finden.
In JavaScript sind reguläre Ausdrücke auch Objekte. Diese Muster werden mit den Methoden {{jsxref("RegExp/exec", "exec()")}} und {{jsxref("RegExp/test", "test()")}} von {{jsxref("RegExp")}} sowie mit den Methoden {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}} und {{jsxref("String/split", "split()")}} von {{jsxref("String")}} verwendet.
Dieses Kapitel beschreibt JavaScript-Reguläre Ausdrücke. Es bietet einen kurzen Überblick über jedes Syntaxelement. Für eine detaillierte Erklärung der Semantik lesen Sie die [Referenz der regulären Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions).

## Erstellen eines regulären Ausdrucks

Sie können einen regulären Ausdruck auf zwei Arten erstellen:

- Durch Verwenden eines regulären Ausdrucksliterals, das aus einem Muster besteht, das zwischen Schrägstrichen eingeschlossen ist, wie folgt:

  ```js
  const re = /ab+c/;
  ```

  Reguläre Ausdrucksliterale bieten die Kompilierung des regulären Ausdrucks, wenn das Skript geladen wird.
  Wenn der reguläre Ausdruck konstant bleibt, kann dies die Leistung verbessern.

- Oder durch Aufruf der Konstrukturfunktion des {{jsxref("RegExp")}}-Objekts, wie folgt:

  ```js
  const re = new RegExp("ab+c");
  ```

  Die Verwendung der Konstrukturfunktion bietet die Kompilierung des regulären Ausdrucks zur Laufzeit.
  Verwenden Sie die Konstrukturfunktion, wenn Sie wissen, dass sich das Muster des regulären Ausdrucks ändern wird, oder Sie kennen das Muster nicht und erhalten es aus einer anderen Quelle, wie z.B. Benutzereingaben.

## Schreiben eines regulären Ausdrucksmusters

Ein reguläres Ausdrucksmuster besteht aus einfachen Zeichen, wie `/abc/`, oder einer Kombination aus einfachen und Sonderzeichen, wie `/ab*c/` oder `/Chapter (\d+)\.\d*/`.
Das letzte Beispiel enthält Klammern, die als Merkhilfe verwendet werden.
Das mit diesem Teil des Musters gefundene Übereinstimmungsergebnis wird für die spätere Verwendung gespeichert, wie in [Gruppen verwenden](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups) beschrieben.

### Verwenden einfacher Muster

Einfache Muster bestehen aus Zeichen, für die Sie eine direkte Übereinstimmung finden möchten. Zum Beispiel das Muster `/abc/`, das nur dann Zeichenkombinationen in Zeichenfolgen abgleicht, wenn die genaue Sequenz `"abc"` auftritt (alle Zeichen zusammen und in dieser Reihenfolge).
Eine solche Übereinstimmung würde in den Zeichenfolgen `"Hi, do you know your abc's?"` und `"The latest airplane designs evolved from slabcraft."` erfolgreich sein.
In beiden Fällen wird mit der Teilzeichenfolge `"abc"` abgeglichen.
Es gibt keine Übereinstimmung in der Zeichenfolge `"Grab crab"`, da sie zwar die Teilzeichenfolge `"ab c"` enthält, jedoch nicht die exakte Teilzeichenfolge `"abc"`.

### Verwenden spezieller Zeichen

Wenn die Suche nach einer Übereinstimmung mehr als eine direkte Übereinstimmung erfordert, wie beispielsweise das Finden eines oder mehrerer b's oder das Finden von Leerzeichen, können Sie spezielle Zeichen im Muster einschließen.
Zum Beispiel, um _ein einzelnes `"a"` gefolgt von null oder mehr `"b"`s gefolgt von `"c"`_ zu finden, würden Sie das Muster `/ab*c/` verwenden: das `*` nach `"b"` bedeutet "0 oder mehr Vorkommen des vorhergehenden Elements."
In der Zeichenfolge `"cbbabbbbcdebc"` wird dieses Muster die Teilzeichenfolge `"abbbbc"` abgleichen.

Die folgenden Seiten bieten Listen der verschiedenen Sonderzeichen, die in jede Kategorie passen, zusammen mit Beschreibungen und Beispielen.

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
  - : Assertions beinhalten Grenzen, die den Anfang und das Ende von Zeilen und Wörtern anzeigen, und andere Muster, die auf irgendeine Weise angeben, dass eine Übereinstimmung möglich ist (einschließlich Look-Ahead, Look-Behind und bedingter Ausdrücke).
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
  - : Unterscheidung zwischen verschiedenen Arten von Zeichen. Zum Beispiel die Unterscheidung zwischen Buchstaben und Ziffern.
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
  - : Gruppen fassen mehrere Muster zusammen, und erfasste Gruppen bieten zusätzliche Unterübereinstimmungsinformationen, wenn ein reguläres Ausdrucksmuster mit einer Zeichenfolge abgeglichen wird. Rückverweise beziehen sich auf eine zuvor erfasste Gruppe im gleichen regulären Ausdruck.
- [Quantifikatoren](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
  - : Geben Sie die Anzahl der Zeichen oder Ausdrücke an, die übereinstimmen sollen.

Wenn Sie alle Sonderzeichen, die in regulären Ausdrücken verwendet werden können, in einer einzigen Tabelle betrachten möchten, sehen Sie sich Folgendes an:

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
            >Quantifikatoren</a
          >
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> [Ein größeres Spickzettel ist ebenfalls verfügbar](/de/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet) (nur Teile dieser einzelnen Artikel zusammenfassend).

### Maskierung

Wenn Sie eines der Sonderzeichen wörtlich verwenden müssen (tatsächlich nach einem `"*"` suchen möchten), müssen Sie es maskieren, indem Sie einen Backslash davor setzen.
Um beispielsweise nach `"a"` gefolgt von `"*"` gefolgt von `"b"` zu suchen, verwenden Sie `/a\*b/` — der Backslash "maskiert" das `"*"`, wodurch es wörtlich statt speziell wird.

Ebenso, wenn Sie ein Literal eines regulären Ausdrucks schreiben und einen Schrägstrich ("/") abgleichen müssen, müssen Sie diesen maskieren (andernfalls beendet er das Muster).
Um beispielsweise nach der Zeichenfolge "/example/" gefolgt von einem oder mehreren alphabetischen Zeichen zu suchen, verwenden Sie `/\/example\/[a-z]+/i`—die Backslashes vor jedem Schrägstrich machen sie wörtlich.

Um einen wörtlichen Backslash zu finden, müssen Sie den Backslash maskieren.
Um beispielsweise die Zeichenfolge "C:\" zu finden, wobei "C" ein beliebiger Buchstabe sein kann, verwenden Sie `/[A-Z]:\\/` — der erste Backslash maskiert den darauf folgenden, sodass der Ausdruck nach einem einzelnen wörtlichen Backslash sucht.

Wenn Sie den `RegExp`-Konstruktor mit einem Zeichenfolgenliteral verwenden, denken Sie daran, dass der Backslash in Zeichenfolgenliteralen ein Escape ist, sodass Sie ihn auf Zeichenfolgenliteral-Ebene maskieren müssen, um ihn im regulären Ausdruck zu verwenden.
`/a\*b/` und `new RegExp("a\\*b")` erzeugen denselben Ausdruck, der nach "a" gefolgt von einem wörtlichen "\*" gefolgt von "b" sucht.

Die Funktion {{jsxref("RegExp.escape()")}} gibt eine neue Zeichenfolge zurück, bei der alle Sonderzeichen in der Regex-Syntax maskiert sind. Dies ermöglicht es Ihnen, `new RegExp(RegExp.escape("a*b"))` zu verwenden, um einen regulären Ausdruck zu erstellen, der nur die Zeichenfolge `"a*b"` findet.

### Verwenden von Klammern

Klammern um jeden Teil des regulären Ausdrucksmusters sorgen dafür, dass dieser Teil der übereinstimmenden Teilzeichenfolge gespeichert wird.
Sobald gespeichert, kann die Teilzeichenfolge für andere Verwendungen abgerufen werden. Weitere Einzelheiten finden Sie unter [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups).

## Verwendung regulärer Ausdrücke in JavaScript

Reguläre Ausdrücke werden mit den Methoden {{jsxref("RegExp")}} {{jsxref("RegExp/test", "test()")}} und {{jsxref("RegExp/exec", "exec()")}} und mit den Methoden {{jsxref("String")}} {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}} und {{jsxref("String/split", "split()")}} verwendet.

| Methode                                         | Beschreibung                                                                                                                                                         |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp/exec", "exec()")}}             | Führt eine Suche nach einer Übereinstimmung in einer Zeichenfolge durch. Gibt ein Informationsarray oder `null` bei einer Nichtübereinstimmung zurück.               |
| {{jsxref("RegExp/test", "test()")}}             | Prüft auf eine Übereinstimmung in einer Zeichenfolge. Gibt `true` oder `false` zurück.                                                                               |
| {{jsxref("String/match", "match()")}}           | Gibt ein Array mit allen Übereinstimmungen, einschließlich erfasster Gruppen, oder `null` zurück, wenn keine Übereinstimmung gefunden wird.                          |
| {{jsxref("String/matchAll", "matchAll()")}}     | Gibt einen Iterator zurück, der alle Übereinstimmungen, einschließlich erfasster Gruppen, enthält.                                                                   |
| {{jsxref("String/search", "search()")}}         | Prüft auf eine Übereinstimmung in einer Zeichenfolge. Gibt den Index der Übereinstimmung oder `-1` zurück, wenn die Suche fehlschlägt.                               |
| {{jsxref("String/replace", "replace()")}}       | Führt eine Suche nach einer Übereinstimmung in einer Zeichenfolge durch und ersetzt die übereinstimmende Teilzeichenfolge durch eine Ersetzungsteilzeichenfolge.     |
| {{jsxref("String/replaceAll", "replaceAll()")}} | Führt eine Suche nach allen Übereinstimmungen in einer Zeichenfolge durch und ersetzt die übereinstimmenden Teilzeichenfolgen durch eine Ersetzungsteilzeichenfolge. |
| {{jsxref("String/split", "split()")}}           | Verwendet einen regulären Ausdruck oder eine feste Zeichenfolge, um eine Zeichenfolge in ein Array von Teilzeichenfolgen zu zerlegen.                                |

Wenn Sie wissen möchten, ob ein Muster in einer Zeichenfolge gefunden wird, verwenden Sie die Methoden `test()` oder `search()`; Für mehr Informationen (aber langsamere Ausführung) verwenden Sie `exec()` oder `match()`.
Wenn Sie `exec()` oder `match()` verwenden und die Übereinstimmung erfolgreich ist, geben diese Methoden ein Array zurück und aktualisieren die Eigenschaften des zugehörigen regulären Ausdrucksobjekts sowie des vordefinierten regulären Ausdrucksobjekts `RegExp`.
Wenn die Übereinstimmung fehlschlägt, gibt die Methode `exec()` `null` zurück (was zu `false` führt).

Im folgenden Beispiel verwendet das Skript die Methode `exec()`, um eine Übereinstimmung in einer Zeichenfolge zu finden.

```js
const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbz");
```

Wenn Sie nicht auf die Eigenschaften des regulären Ausdrucks zugreifen müssen, ist eine alternative Methode zur Erstellung von `myArray` mit diesem Skript:

```js
const myArray = /d(b+)d/g.exec("cdbbdbsbz");
// similar to 'cdbbdbsbz'.match(/d(b+)d/g); however,
// 'cdbbdbsbz'.match(/d(b+)d/g) outputs [ "dbbd" ]
// while /d(b+)d/g.exec('cdbbdbsbz') outputs [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ]
```

(Siehe [Verwendung des globalen Suchflags mit `exec()`](#using_the_global_search_flag_with_exec) für weitere Informationen zu den unterschiedlichen Verhaltensweisen.)

Wenn Sie den regulären Ausdruck aus einer Zeichenfolge konstruieren möchten, ist eine weitere Alternative dieses Skript:

```js
const myRe = new RegExp("d(b+)d", "g");
const myArray = myRe.exec("cdbbdbsbz");
```

Mit diesen Skripten ist die Übereinstimmung erfolgreich und gibt das Array zurück und aktualisiert die in der folgenden Tabelle gezeigten Eigenschaften.

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
      <td>Die gefundene Zeichenfolge und alle gespeicherten Teilzeichenfolgen.</td>
      <td><code>['dbbd', 'bb', index: 1, input: 'cdbbdbsbz']</code></td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>Der nullbasierte Index der Übereinstimmung in der Eingabezeichenfolge.</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>Die ursprüngliche Zeichenfolge.</td>
      <td><code>'cdbbdbsbz'</code></td>
    </tr>
    <tr>
      <td><code>[0]</code></td>
      <td>Die zuletzt gefundenen Zeichen.</td>
      <td><code>'dbbd'</code></td>
    </tr>
    <tr>
      <td rowspan="2"><code>myRe</code></td>
      <td><code>lastIndex</code></td>
      <td>Der Index, an dem der nächste Suchvorgang gestartet werden soll.
        (Diese Eigenschaft wird nur gesetzt, wenn der reguläre Ausdruck die g-Option verwendet, die beschrieben wird in
        <a href="#advanced_searching_with_flags">Erweitertes Suchen mit Flags</a>.)
      </td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>
        Der Text des Musters. Wird aktualisiert, wenn der reguläre Ausdruck erstellt, nicht ausgeführt wird.
      </td>
      <td><code>'d(b+)d'</code></td>
    </tr>
  </tbody>
</table>

Wie im zweiten Formular dieses Beispiels gezeigt, können Sie einen regulären Ausdruck, der mit einem Objektinitialisierer erstellt wurde, verwenden, ohne ihn einer Variablen zuzuweisen.
Wenn Sie dies jedoch tun, ist jeder Vorkommen ein neuer regulärer Ausdruck.
Aus diesem Grund können Sie, wenn Sie dieses Formular ohne Zuweisung zu einer Variablen verwenden, anschließend nicht auf die Eigenschaften dieses regulären Ausdrucks zugreifen.
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

sind die Vorkommen von `/d(b+)d/g` in den beiden Anweisungen verschiedene reguläre Ausdrucksobjekte und haben daher unterschiedliche Werte für ihre Eigenschaft `lastIndex`.
Wenn Sie auf die Eigenschaften eines regulären Ausdrucks, der mit einem Objektinitialisierer erstellt wurde, zugreifen müssen, sollten Sie ihn zuerst einer Variablen zuweisen.

### Erweitertes Suchen mit Flags

Reguläre Ausdrücke haben optionale Flags, die Funktionalitäten wie globale Suche und Groß-/Kleinschreibung unabhängigem Suchen ermöglichen.
Diese Flags können separat oder zusammen in beliebiger Reihenfolge verwendet werden und sind als Teil des regulären Ausdrucks enthalten.

| Flag | Beschreibung                                                                                                     | Entsprechende Eigenschaft                       |
| ---- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`  | Generiert Indizes für Teilübereinstimmungen.                                                                     | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`  | Globale Suche.                                                                                                   | {{jsxref("RegExp/global", "global")}}           |
| `i`  | Groß-/Kleinschreibung unabhängige Suche.                                                                         | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`  | Sorgt dafür, dass `^` und `$` den Anfang und das Ende jeder Zeile anstelle der gesamten Zeichenfolge abgleichen. | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`  | Erlaubt `.` das Abgleichen von Zeilenumbruchszeichen.                                                            | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`  | "Unicode"; behandelt ein Muster als Sequenz von Unicode-Codepunkten.                                             | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`  | Ein Upgrade zum `u`-Modus mit mehr Unicode-Funktionen.                                                           | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`  | Führt eine "sticky" Suche durch, die ab der aktuellen Position in der Zielzeichenfolge übereinstimmt.            | {{jsxref("RegExp/sticky", "sticky")}}           |

Um ein Flag zum regulären Ausdruck hinzuzufügen, verwenden Sie diese Syntax:

```js
const re = /pattern/flags;
```

oder

```js
const re = new RegExp("pattern", "flags");
```

Beachten Sie, dass die Flags ein integraler Bestandteil eines regulären Ausdrucks sind. Sie können später nicht hinzugefügt oder entfernt werden.

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

durch:

```js
const re = new RegExp("\\w+\\s", "g");
```

und dasselbe Ergebnis erzielen.

Das `m`-Flag wird verwendet, um anzugeben, dass eine mehrzeilige Eingabezeichenfolge als mehrere Zeilen behandelt werden soll.
Wenn das `m`-Flag verwendet wird, stimmen `^` und `$` mit dem Anfang oder Ende einer beliebigen Zeile innerhalb der Eingabezeichenfolge überein, anstelle des Anfangs oder Endes der gesamten Zeichenfolge.

Die Flags `i`, `m` und `s` können für bestimmte Teile eines Regex mit der [Modifier-Syntax](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) aktiviert oder deaktiviert werden.

#### Verwendung des globalen Suchflags mit exec()

Die {{jsxref("RegExp.prototype.exec()")}}-Methode mit dem `g`-Flag gibt jede Übereinstimmung und deren Position iterativ zurück.

```js
const str = "fee fi fo fum";
const re = /\w+\s/g;

console.log(re.exec(str)); // ["fee ", index: 0, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fi ", index: 4, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fo ", index: 7, input: "fee fi fo fum"]
console.log(re.exec(str)); // null
```

Im Gegensatz dazu gibt die {{jsxref("String.prototype.match()")}}-Methode alle Übereinstimmungen gleichzeitig zurück, jedoch ohne deren Position.

```js
console.log(str.match(re)); // ["fee ", "fi ", "fo "]
```

#### Verwendung von Unicode-Regulärausdrücken

Der `u`-Flag wird verwendet, um "Unicode"-Regulärausdrücke zu erstellen; das heißt, reguläre Ausdrücke, die das Abgleichen gegen Unicode-Text unterstützen. Ein wichtiges Merkmal, das im Unicode-Modus aktiviert ist, sind [Unicode-Eigenschaften-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape). Zum Beispiel könnte der folgende reguläre Ausdruck verwendet werden, um gegen ein beliebiges Unicode-"Wort" zu finden:

```js
/\p{L}*/u;
```

Unicode-Regulärausdrücke haben auch ein anderes Ausführungsverhalten. [`RegExp.prototype.unicode`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) enthält weitere Erklärungen dazu.

## Beispiele

> [!NOTE]
> Mehrere Beispiele sind ebenfalls verfügbar unter:
>
> - Den Referenzseiten für {{jsxref("RegExp/exec", "exec()")}}, {{jsxref("RegExp/test", "test()")}}, {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/search", "search()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/split", "split()")}}
> - Den Leitfadenartikeln: [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes), [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions), [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences), [Quantifikatoren](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)

### Verwenden spezieller Zeichen zur Überprüfung der Eingabe

Im folgenden Beispiel wird vom Benutzer erwartet, dass er eine Telefonnummer eingibt.
Wenn der Benutzer die "Prüfen"-Schaltfläche drückt, überprüft das Skript die Gültigkeit der Nummer.
Wenn die Nummer gültig ist (die Zeichenfolge, die durch den regulären Ausdruck spezifiziert ist, übereinstimmt), zeigt das Skript eine Nachricht an, die dem Benutzer dankt und die Nummer bestätigt.
Wenn die Nummer ungültig ist, informiert das Skript den Benutzer, dass die Telefonnummer ungültig ist.

Der reguläre Ausdruck sucht nach:

1. dem Anfang der Datenzeile: `^`
2. gefolgt von drei numerischen Zeichen `\d{3}` ODER `|` einer linken Klammer `\(`, gefolgt von drei Ziffern `\d{3}`, gefolgt von einer rechten Klammer `\)`, in einer nicht erfassenden Gruppe `(?:)`
3. gefolgt von einem Bindestrich, Schrägstrich oder Dezimalpunkt in einer erfassenden Gruppe `()`
4. gefolgt von drei Ziffern `\d{3}`
5. gefolgt von der übereinstimmenden (ersten) erfassten Gruppe `\1`
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
  - : Ein Online-Regex-Builder / Debugger
- [Regex-Interaktive Lernhilfe](https://regexlearn.com/)
  - : Interaktive Online-Tutorials, Spickzettel und Spielplatz.
- [Regex-Visualizer](https://extendsclass.com/regex-tester.html)
  - : Ein Online-Visueller Regex-Tester.

{{PreviousNext("Web/JavaScript/Guide/Representing_dates_times", "Web/JavaScript/Guide/Indexed_collections")}}
