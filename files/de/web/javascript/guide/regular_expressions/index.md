---
title: Reguläre Ausdrücke
slug: Web/JavaScript/Guide/Regular_expressions
l10n:
  sourceCommit: a73295d4344aeab38c67262717d0dda8b3b9f0c5
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}

Reguläre Ausdrücke sind Muster, die verwendet werden, um Zeichenkombinationen in Zeichenketten zu finden. In JavaScript sind reguläre Ausdrücke auch Objekte. Diese Muster werden mit den Methoden {{jsxref("RegExp/exec", "exec()")}} und {{jsxref("RegExp/test", "test()")}} von {{jsxref("RegExp")}} und mit den Methoden {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}} und {{jsxref("String/split", "split()")}} von {{jsxref("String")}} verwendet. Dieses Kapitel beschreibt reguläre JavaScript-Ausdrücke. Es bietet einen kurzen Überblick über jedes Syntaxelement. Für eine detaillierte Erklärung der Semantik jedes Elements lesen Sie die Referenz zu [regulären Ausdrücken](/de/docs/Web/JavaScript/Reference/Regular_expressions).

## Einen regulären Ausdruck erstellen

Sie erstellen einen regulären Ausdruck auf eine von zwei Arten:

- Mit einem regulären Ausdruck-Literal, das aus einem Muster besteht, das zwischen Schrägstrichen eingeschlossen ist, wie folgt:

  ```js
  const re = /ab+c/;
  ```

  Reguläre Ausdruck-Literale bieten die Kompilierung des regulären Ausdrucks, wenn das Skript geladen wird. Wenn der reguläre Ausdruck konstant bleibt, kann dies die Leistung verbessern.

- Oder durch Aufrufen der Konstruktorfunktion des {{jsxref("RegExp")}}-Objekts, wie folgt:

  ```js
  const re = new RegExp("ab+c");
  ```

  Die Verwendung der Konstruktorfunktion bietet die Laufzeitkompilierung des regulären Ausdrucks. Verwenden Sie die Konstruktorfunktion, wenn Sie wissen, dass sich das Muster des regulären Ausdrucks ändern wird oder wenn Sie das Muster nicht kennen und es aus einer anderen Quelle, wie Benutzereingaben, erhalten.

## Ein Muster für reguläre Ausdrücke schreiben

Ein regulärer Ausdruck besteht aus einfachen Zeichen, wie `/abc/`, oder einer Kombination aus einfachen und speziellen Zeichen, wie `/ab*c/` oder `/Chapter (\d+)\.\d*/`. Das letzte Beispiel enthält Klammern, die als Gedächtnisstütze verwendet werden. Die Übereinstimmung mit diesem Teil des Musters wird für die spätere Verwendung gespeichert, wie im Abschnitt [Gruppen verwenden](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups) beschrieben.

### Einfache Muster verwenden

Einfache Muster bestehen aus Zeichen, für die Sie eine direkte Übereinstimmung finden möchten. Zum Beispiel passt das Muster `/abc/` in Zeichenfolgen nur dann, wenn die genaue Sequenz `"abc"` vorkommt (alle Zeichen zusammen und in dieser Reihenfolge). Eine solche Übereinstimmung wäre in den Zeichenfolgen `"Hi, do you know your abc's?"` und `"The latest airplane designs evolved from slabcraft."` erfolgreich. In beiden Fällen erfolgt die Übereinstimmung mit der Teilzeichenfolge `"abc"`. In der Zeichenkette `"Grab crab"` gibt es keine Übereinstimmung, denn obwohl sie die Teilzeichenfolge `"ab c"` enthält, enthält sie nicht die exakte Teilzeichenfolge `"abc"`.

### Sonderzeichen verwenden

Wenn die Suche nach einer Übereinstimmung mehr als eine direkte Übereinstimmung erfordert, wie das Finden von einem oder mehreren 'b's oder das Finden von Leerzeichen, können Sie spezielle Zeichen im Muster verwenden. Zum Beispiel, um _ein einzelnes `"a"` gefolgt von null oder mehr `"b"`s gefolgt von `"c"`_ zu finden, würden Sie das Muster `/ab*c/` verwenden: Das `*` nach `"b"` bedeutet „0 oder mehr Vorkommen des vorhergehenden Elements“. In der Zeichenkette `"cbbabbbbcdebc"` passt dieses Muster mit der Teilzeichenfolge `"abbbbc"`.

Die folgenden Seiten bieten Listen der verschiedenen Sonderzeichen, die in jede Kategorie passen, zusammen mit Beschreibungen und Beispielen.

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
  - : Assertions beinhalten Grenzen, die Anfänge und Enden von Zeilen und Wörtern anzeigen, sowie andere Muster, die auf irgendeine Weise anzeigen, dass eine Übereinstimmung möglich ist (einschließlich Look-Ahead, Look-Behind und bedingten Ausdrücken).
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
  - : Unterscheidung verschiedener Zeichentypen. Zum Beispiel die Unterscheidung zwischen Buchstaben und Ziffern.
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
  - : Gruppen gruppieren mehrere Muster als Ganzes, und Erfassungsgruppen liefern zusätzliche Informationen zum Teilabgleich, wenn ein reguläres Ausdrucksmuster zum Abgleich mit einer Zeichenkette verwendet wird. Rückverweise beziehen sich auf eine zuvor erfaßte Gruppe im gleichen regulären Ausdruck.
- [Quantoren](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
  - : Geben die Anzahl der Zeichen oder Ausdrücke an, die abgeglichen werden sollen.

Wenn Sie alle speziellen Zeichen, die in regulären Ausdrücken verwendet werden können, in einer Tabelle sehen möchten, siehe folgendes:

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
            >Quantoren</a
          >
        </p>
      </td>
    </tr>
  </tbody>
</table>

> **Note:** [Ein ausführlicheres Cheat Sheet steht ebenfalls zur Verfügung](/de/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet) (das nur Teile dieser einzelnen Artikel zusammenfasst).

### Escaping

Wenn Sie eines der Sonderzeichen im wörtlichen Sinne verwenden müssen (tatsächlich nach einem `"*"` suchen, zum Beispiel), müssen Sie es mit einem Backslash davor maskieren. Um beispielsweise nach `"a"` gefolgt von `"*"` gefolgt von `"b"` zu suchen, würden Sie `/a\*b/` verwenden — der Backslash "maskiert" das `"*"`, was es wörtlich anstatt speziell macht.

Ähnlich, wenn Sie ein reguläres Ausdruck-Literal schreiben und einen Schrägstrich ("/") abgleichen müssen, müssen Sie diesen maskieren (sonst beendet er das Muster). Um beispielsweise nach der Zeichenfolge "/example/" gefolgt von einem oder mehreren alphabetischen Zeichen zu suchen, würden Sie `/\/example\/[a-z]+/i` verwenden — die Backslashes vor jedem Schrägstrich machen sie wörtlich.

Um einen wörtlichen Backslash zu markieren, müssen Sie den Backslash maskieren. Zum Beispiel, um die Zeichenkette "C:\\" zu markieren, wo "C" beliebig sein kann, würden Sie `/[A-Z]:\\/` verwenden — der erste Backslash maskiert den, der ihm folgt, sodass der Ausdruck nach einem einzigen wörtlichen Backslash sucht.

Wenn Sie den `RegExp`-Konstruktor mit einem Zeichenfolgenliteral verwenden, denken Sie daran, dass der Backslash eine Escape-Sequenz in Zeichenfolgenliteralen darstellt. Um ihn im regulären Ausdruck zu verwenden, müssen Sie ihn auf der Ebene des Zeichenfolgenliterals maskieren. `/a\*b/` und `new RegExp("a\\*b")` erstellen denselben Ausdruck, der nach "a" gefolgt von einem wörtlichen "\*" gefolgt von "b" sucht.

Die Funktion {{jsxref("RegExp.escape()")}} gibt eine neue Zeichenkette zurück, in der alle Sonderzeichen in der Regex-Syntax maskiert sind. Dies ermöglicht Ihnen, `new RegExp(RegExp.escape("a*b"))` zu verwenden, um einen regulären Ausdruck zu erstellen, der nur die Zeichenkette `"a*b"` markiert.

### Die Verwendung von Klammern

Klammern um einen beliebigen Teil des regulären Ausdrucksmusters bewirken, dass dieser Teil der übereinstimmenden Teilzeichenfolge gemerkt wird. Sobald gemerkt, kann die Teilzeichenfolge für andere Zwecke wiederverwendet werden. Weitere Details finden Sie unter [Gruppen und Rückverweise verwenden](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups).

## Die Nutzung von regulären Ausdrücken in JavaScript

Reguläre Ausdrücke werden mit den {{jsxref("RegExp")}}-Methoden {{jsxref("RegExp/test", "test()")}} und {{jsxref("RegExp/exec", "exec()")}} sowie mit den {{jsxref("String")}}-Methoden {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}} und {{jsxref("String/split", "split()")}} verwendet.

| Methode                                         | Beschreibung                                                                                                                                                         |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp/exec", "exec()")}}             | Führt eine Suche nach einer Übereinstimmung in einer Zeichenkette durch. Es gibt ein Informations-Array oder `null` bei keiner Übereinstimmung zurück.               |
| {{jsxref("RegExp/test", "test()")}}             | Prüft auf eine Übereinstimmung in einer Zeichenkette. Es gibt `true` oder `false` zurück.                                                                            |
| {{jsxref("String/match", "match()")}}           | Gibt ein Array mit allen Übereinstimmungen, einschließlich Erfassungsgruppen, oder `null` zurück, wenn keine Übereinstimmung gefunden wird.                          |
| {{jsxref("String/matchAll", "matchAll()")}}     | Gibt einen Iterator mit allen Übereinstimmungen, einschließlich Erfassungsgruppen.                                                                                   |
| {{jsxref("String/search", "search()")}}         | Prüft auf eine Übereinstimmung in einer Zeichenkette. Es gibt den Index der Übereinstimmung oder `-1` zurück, wenn die Suche fehlschlägt.                            |
| {{jsxref("String/replace", "replace()")}}       | Führt eine Suche nach einer Übereinstimmung in einer Zeichenkette durch und ersetzt die übereinstimmende Teilzeichenfolge durch eine Ersetzungsteilzeichenfolge.     |
| {{jsxref("String/replaceAll", "replaceAll()")}} | Führt eine Suche nach allen Übereinstimmungen in einer Zeichenkette durch und ersetzt die übereinstimmenden Teilzeichenfolgen durch eine Ersetzungsteilzeichenfolge. |
| {{jsxref("String/split", "split()")}}           | Verwendet einen regulären Ausdruck oder eine feste Zeichenkette, um eine Zeichenkette in ein Array von Teilzeichenfolgen zu zerlegen.                                |

Wenn Sie wissen möchten, ob ein Muster in einer Zeichenkette gefunden wird, verwenden Sie die Methoden `test()` oder `search()`; für mehr Informationen (aber langsamerer Ausführung) verwenden Sie die Methoden `exec()` oder `match()`. Wenn Sie `exec()` oder `match()` verwenden und die Übereinstimmung erfolgreich ist, geben diese Methoden ein Array zurück und aktualisieren die Eigenschaften des zugehörigen regulären Ausdrucksobjekts sowie des vordefinierten regulären Ausdrucksobjekts `RegExp`. Wenn die Übereinstimmung fehlschlägt, gibt die Methode `exec()` `null` zurück (was zu `false` wird).

Im folgenden Beispiel verwendet das Skript die Methode `exec()`, um eine Übereinstimmung in einer Zeichenkette zu finden.

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

(Siehe [Globale Suchflagge mit `exec()` verwenden](#using_the_global_search_flag_with_exec) für weitere Informationen zu den unterschiedlichen Verhaltensweisen.)

Wenn Sie den regulären Ausdruck aus einer Zeichenkette konstruieren möchten, ist eine weitere Alternative dieses Skript:

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
      <td>Die übereinstimmende Zeichenkette und alle gemerkten Teilzeichenfolgen.</td>
      <td><code>['dbbd', 'bb', index: 1, input: 'cdbbdbsbz']</code></td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>Der 0-basierte Index der Übereinstimmung in der Eingangszeichenkette.</td>
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
      <td>Der Index, an dem die nächste Übereinstimmung beginnen soll. (Diese Eigenschaft wird nur gesetzt, wenn der reguläre Ausdruck die g-Option verwendet, wie in <a href="#advanced_searching_with_flags">Erweitertes Suchen mit Flags</a> beschrieben.) </td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>
        Der Text des Musters. Aktualisiert zu dem Zeitpunkt, an dem der reguläre Ausdruck erstellt, nicht ausgeführt, wird.
      </td>
      <td><code>'d(b+)d'</code></td>
    </tr>
  </tbody>
</table>

Wie im zweiten Formular dieses Beispiels gezeigt, können Sie einen regulären Ausdruck, der mit einem Objektinitialisierer erstellt wurde, ohne ihn einer Variablen zuzuweisen, verwenden. Wenn Sie dies jedoch tun, ist jedes Vorkommen ein neuer regulärer Ausdruck. Aus diesem Grund können Sie, wenn Sie diese Form verwenden, ohne sie einer Variablen zuzuweisen, nicht mehr auf die Eigenschaften dieses regulären Ausdrucks zugreifen. Angenommen, Sie haben dieses Skript:

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

Die Vorkommen von `/d(b+)d/g` in den beiden Anweisungen sind unterschiedliche reguläre Ausdrucksobjekte und haben daher unterschiedliche Werte für ihre `lastIndex`-Eigenschaft. Wenn Sie auf die Eigenschaften eines regulären Ausdrucks zugreifen müssen, das mit einem Objektinitialisierer erstellt wurde, sollten Sie es zuerst einer Variablen zuweisen.

### Erweitertes Suchen mit Flags

Reguläre Ausdrücke haben optionale Flags, mit denen Funktionen wie globales Suchen und fallunabhängiges Suchen möglich sind. Diese Flags können einzeln oder zusammen in beliebiger Reihenfolge verwendet werden und sind Teil des regulären Ausdrucks.

| Flag | Beschreibung                                                                                | Entsprechende Eigenschaft                       |
| ---- | ------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`  | Generiert Indizes für Teilübereinstimmungen.                                                | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`  | Globale Suche.                                                                              | {{jsxref("RegExp/global", "global")}}           |
| `i`  | Fallunabhängige Suche.                                                                      | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`  | Ermöglicht `^` und `$`, neben Zeilenumbrüchen zu übereinstimmen.                            | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`  | Ermöglicht `.` das Übereinstimmen mit Zeilenumbrüchen.                                      | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`  | "Unicode"; behandelt ein Muster als Folge von Unicode-Codepunkten.                          | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`  | Ein Upgrade zum `u`-Modus mit mehr Unicode-Funktionen.                                      | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`  | Führt eine „sticky“ Suche durch, die ab der aktuellen Position im Zielstring übereinstimmt. | {{jsxref("RegExp/sticky", "sticky")}}           |

Um ein Flag mit dem regulären Ausdruck einzuschließen, verwenden Sie diese Syntax:

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

mit:

```js
const re = new RegExp("\\w+\\s", "g");
```

und das gleiche Ergebnis erhalten.

Das `m`-Flag wird verwendet, um anzugeben, dass eine mehrzeilige Eingabezeichenkette als mehrere Zeilen behandelt werden soll. Wenn das `m`-Flag verwendet wird, stimmen `^` und `$` am Beginn oder Ende einer beliebigen Zeile innerhalb der Eingabezeichenkette anstelle des Beginns oder Endes der gesamten Zeichenkette überein.

Die Flags `i`, `m` und `s` können für bestimmte Teile eines Regex mit der [modifier](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)-Syntax aktiviert oder deaktiviert werden.

#### Verwendung des globalen Suchflags mit exec()

Die {{jsxref("RegExp.prototype.exec()")}}-Methode mit dem `g`-Flag gibt jede Übereinstimmung und ihre Position iterativ zurück.

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

Das `u`-Flag wird verwendet, um "Unicode"-reguläre Ausdrücke zu erstellen; das heißt, reguläre Ausdrücke, die das Übereinstimmen mit Unicode-Text unterstützen. Ein wichtiges Feature, das im Unicode-Modus aktiviert ist, sind [Unicode-Eigenschafts-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape). Zum Beispiel könnte der folgende reguläre Ausdruck verwendet werden, um gegen ein beliebiges Unicode-"Wort" zu prüfen:

```js
/\p{L}*/u;
```

Unicode-reguläre Ausdrücke haben auch unterschiedliches Ausführungsverhalten. Die [`RegExp.prototype.unicode`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) enthält mehr Erklärungen dazu.

## Beispiele

> [!NOTE]
> Mehrere Beispiele sind auch verfügbar in:
>
> - Den Referenzseiten für {{jsxref("RegExp/exec", "exec()")}}, {{jsxref("RegExp/test", "test()")}}, {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/search", "search()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/split", "split()")}}
> - Die Leitfaden-Artikel: [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes), [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions), [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences), [Quantoren](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)

### Mit Sonderzeichen Eingaben verifizieren

Im folgenden Beispiel wird vom Benutzer erwartet, eine Telefonnummer einzugeben. Wenn der Benutzer auf die Schaltfläche "Prüfen" drückt, überprüft das Skript die Gültigkeit der Nummer. Wenn die Nummer gültig ist (mit der durch den regulären Ausdruck angegebenen Zeichenfolge übereinstimmt), zeigt das Skript eine Nachricht an, die dem Benutzer dankt und die Nummer bestätigt. Wenn die Nummer ungültig ist, informiert das Skript den Benutzer darüber, dass die Telefonnummer nicht gültig ist.

Der reguläre Ausdruck sucht nach:

1. dem Beginn der Datenzeile: `^`
2. gefolgt von drei numerischen Zeichen `\d{3}` ODER `|` einer linken Klammer `\(`, gefolgt von drei Ziffern `\d{3}`, gefolgt von einer rechten Klammer `\)`, in einer nicht erfassenden Gruppe `(?:)`
3. gefolgt von einem Strich, Schrägstrich oder Dezimalpunkt in einer erfassenden Gruppe `()`
4. gefolgt von drei Ziffern `\d{3}`
5. gefolgt von der in der (ersten) Gruppe erfassten Übereinstimmung `\1`
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
- [Regex tester](https://regex101.com/)
  - : Ein Online-RegEx-Builder/Debugger
- [Regex interaktives Tutorial](https://regexlearn.com/)
  - : Ein Online-Interaktives Tutorial, Cheat Sheet und Playground.
- [Regex-Visualizer](https://extendsclass.com/regex-tester.html)
  - : Ein Online-Visual-RegEx-Tester.

{{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}
