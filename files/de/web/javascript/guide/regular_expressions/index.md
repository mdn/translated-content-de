---
title: Reguläre Ausdrücke
slug: Web/JavaScript/Guide/Regular_expressions
l10n:
  sourceCommit: c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Representing_dates_times", "Web/JavaScript/Guide/Indexed_collections")}}

Reguläre Ausdrücke sind Muster, die verwendet werden, um Zeichenkombinationen in Zeichenfolgen zu erkennen.
In JavaScript sind reguläre Ausdrücke auch Objekte. Diese Muster werden mit den Methoden {{jsxref("RegExp/exec", "exec()")}} und {{jsxref("RegExp/test", "test()")}} von {{jsxref("RegExp")}} sowie mit den Methoden {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}} und {{jsxref("String/split", "split()")}} von {{jsxref("String")}} verwendet.
Dieses Kapitel beschreibt reguläre Ausdrücke in JavaScript. Es bietet einen kurzen Überblick über jedes Syntaxelement. Für eine detaillierte Erklärung der Semantik jedes Elements lesen Sie die [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions) Referenz.

## Erstellen eines regulären Ausdrucks

Sie können einen regulären Ausdruck auf zwei Arten erstellen:

- Verwenden eines regulären Ausdrucksliterals, das aus einem Muster besteht, das zwischen Schrägstrichen eingeschlossen ist, wie folgt:

  ```js
  const re = /ab+c/;
  ```

  Reguläre Ausdrucksliterale ermöglichen die Kompilierung des regulären Ausdrucks, wenn das Skript geladen wird.
  Bleibt der reguläre Ausdruck konstant, kann dies die Leistung verbessern.

- Oder indem Sie die Konstruktorfunktion des {{jsxref("RegExp")}} Objekts aufrufen, wie folgt:

  ```js
  const re = new RegExp("ab+c");
  ```

  Die Verwendung der Konstruktorfunktion ermöglicht die Laufzeitkompilierung des regulären Ausdrucks.
  Verwenden Sie die Konstruktorfunktion, wenn Sie wissen, dass sich das Muster des regulären Ausdrucks ändert, oder wenn Sie das Muster aus einer anderen Quelle erhalten, zum Beispiel aus Benutzereingaben.

## Schreiben eines regulären Ausdrucksmusters

Ein reguläres Ausdrucksmuster besteht aus einfachen Zeichen, wie `/abc/`, oder einer Kombination aus einfachen und speziellen Zeichen, wie `/ab*c/` oder `/Chapter (\d+)\.\d*/`.
Das letzte Beispiel enthält Klammern, die als Gedächtnisstütze verwendet werden.
Der mit diesem Teil des Musters gemachte Treffer wird für eine spätere Verwendung gespeichert, wie in [Verwendung von Gruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups) beschrieben.

### Verwendung einfacher Muster

Einfache Muster bestehen aus Zeichen, für die Sie eine direkte Übereinstimmung finden möchten. Zum Beispiel stimmt das Muster `/abc/` nur dann mit Zeichenkombinationen in Zeichenfolgen überein, wenn die genaue Sequenz `"abc"` vorkommt (alle Zeichen zusammen und in dieser Reihenfolge).
Eine solche Übereinstimmung würde in den Zeichenfolgen `"Hi, do you know your abc's?"` und `"The latest airplane designs evolved from slabcraft."` erfolgreich sein.
In beiden Fällen stimmt die Übereinstimmung mit dem Teilstring `"abc"` überein.
Keine Übereinstimmung gibt es in der Zeichenfolge `"Grab crab"`, da sie zwar den Teilstring `"ab c"` enthält, aber nicht den genauen Teilstring `"abc"`.

### Verwendung spezieller Zeichen

Wenn die Suche nach einer Übereinstimmung mehr als eine direkte Übereinstimmung erfordert, wie z.B. das Finden eines oder mehrerer `"b"` oder das Finden von Leerzeichen, können Sie spezielle Zeichen im Muster einfügen.
Um _ein einziges `"a"` gefolgt von null oder mehr `"b"`s gefolgt von `"c"`_ zu finden, würden Sie das Muster `/ab*c/` verwenden: Das `*` nach `"b"` bedeutet "0 oder mehr Vorkommen des vorhergehenden Elements."
In der Zeichenfolge `"cbbabbbbcdebc"` wird dieses Muster den Teilstring `"abbbbc"` finden.

Die folgenden Seiten bieten Listen der verschiedenen speziellen Zeichen, die in jede Kategorie passen, zusammen mit Beschreibungen und Beispielen.

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
  - : Assertions umfassen Grenzen, die den Beginn und das Ende von Zeilen und Wörtern anzeigen, sowie andere Muster, die auf irgendeine Weise anzeigen, dass eine Übereinstimmung möglich ist (einschließlich Look-Ahead, Look-Behind und bedingten Ausdrücken).
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
  - : Unterscheiden zwischen verschiedenen Arten von Zeichen. Zum Beispiel zwischen Buchstaben und Ziffern unterscheiden.
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
  - : Gruppen fassen mehrere Muster als Ganzes zusammen, und Capturing-Gruppen bieten zusätzliche Unterübereinstimmungsinformationen, wenn ein reguläres Ausdrucksmuster verwendet wird, um mit einer Zeichenfolge zu übereinstimmen. Rückverweise beziehen sich auf eine zuvor erfasste Gruppe im selben regulären Ausdruck.
- [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
  - : Gibt die Anzahl der zu suchenden Zeichen oder Ausdrücke an.

Wenn Sie alle speziellen Zeichen, die in regulären Ausdrücken verwendet werden können, in einer einzigen Tabelle sehen möchten, siehe folgendes:

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

> **Note:** [Ein größeres Spickzettel ist ebenfalls verfügbar](/de/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet) (nur Teile der einzelnen Artikel aggregierend).

### Escaping

Wenn Sie eines der speziellen Zeichen wörtlich verwenden müssen (tatsächlich nach einem `*` suchen, zum Beispiel), müssen Sie es mit einem Backslash davor maskieren.
Um z.B. nach `"a"` gefolgt von `"*"` gefolgt von `"b"` zu suchen, würden Sie `/a\*b/` verwenden – der Backslash „maskiert“ das `*`, wodurch es wörtlich anstelle von speziell wird.

Ähnlich, wenn Sie ein reguläres Ausdrucksliteral schreiben und einen Schrägstrich ("`/`") abgleichen müssen, müssen Sie diesen maskieren (ansonsten beendet er das Muster).
Um z.B. nach der Zeichenfolge "/example/" gefolgt von einem oder mehreren alphabetischen Zeichen zu suchen, würden Sie `/\/example\/[a-z]+/i` verwenden—die Backslashes vor jedem Schrägstrich machen sie wörtlich.

Um einen wörtlichen Backslash abzugleichen, müssen Sie den Backslash maskieren.
Um z.B. die Zeichenfolge "C:\\" abzugleichen, wobei "C" ein beliebiger Buchstabe sein kann, würden Sie `/[A-Z]:\\/` verwenden — der erste Backslash maskiert den danach, sodass der Ausdruck nach einem einzelnen wörtlichen Backslash sucht.

Wenn Sie den `RegExp`-Konstruktor mit einem Zeichenfolgenliteral verwenden, denken Sie daran, dass der Backslash in Zeichenfolgenliteralen als Escapezeichen dient. Um ihn daher im regulären Ausdruck zu verwenden, müssen Sie ihn auf der Ebene des Zeichenfolgenliterals maskieren.
`/a\*b/` und `new RegExp("a\\*b")` erstellen den gleichen Ausdruck, der nach „a“ gefolgt von einem wörtlichen `\*` gefolgt von „b“ sucht.

Die Funktion {{jsxref("RegExp.escape()")}} gibt einen neuen Zeichenfolgenwert zurück, bei dem alle speziellen Zeichen in der Regex-Syntax maskiert sind. Mit dieser Funktion können Sie z.B. `new RegExp(RegExp.escape("a*b"))` verwenden, um einen regulären Ausdruck zu erstellen, der nur die Zeichenfolge `"a*b"` abgleicht.

### Verwendung von Klammern

Klammern um einen beliebigen Teil des regulären Ausdrucksmusters bewirken, dass dieser Teil des übereinstimmenden Teilstrings gespeichert wird.
Sobald gespeichert, kann der Teilstring für andere Verwendungen abgerufen werden. Siehe [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups) für weitere Details.

## Verwendung von regulären Ausdrücken in JavaScript

Reguläre Ausdrücke werden mit den {{jsxref("RegExp")}}-Methoden {{jsxref("RegExp/test", "test()")}} und {{jsxref("RegExp/exec", "exec()")}} sowie den {{jsxref("String")}}-Methoden {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}}, {{jsxref("String/search", "search()")}} und {{jsxref("String/split", "split()")}} verwendet.

| Methode                                         | Beschreibung                                                                                                                                              |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp/exec", "exec()")}}             | Führt eine Suche nach einer Übereinstimmung in einer Zeichenfolge durch. Es gibt ein Array von Informationen oder `null` bei Nichtübereinstimmung zurück. |
| {{jsxref("RegExp/test", "test()")}}             | Testet auf eine Übereinstimmung in einer Zeichenfolge. Es gibt `true` oder `false` zurück.                                                                |
| {{jsxref("String/match", "match()")}}           | Gibt ein Array zurück, das alle Übereinstimmungen, einschließlich Capturing-Gruppen, enthält, oder `null`, wenn keine Übereinstimmung gefunden wird.      |
| {{jsxref("String/matchAll", "matchAll()")}}     | Gibt einen Iterator zurück, der alle Übereinstimmungen, einschließlich Capturing-Gruppen, enthält.                                                        |
| {{jsxref("String/search", "search()")}}         | Testet auf eine Übereinstimmung in einer Zeichenfolge. Es gibt den Index der Übereinstimmung oder `-1`, wenn die Suche fehlschlägt, zurück.               |
| {{jsxref("String/replace", "replace()")}}       | Führt eine Suche nach einer Übereinstimmung in einer Zeichenfolge durch und ersetzt den übereinstimmenden Teilstring mit einem Ersatzteilstring.          |
| {{jsxref("String/replaceAll", "replaceAll()")}} | Führt eine Suche nach allen Übereinstimmungen in einer Zeichenfolge durch und ersetzt die übereinstimmenden Teilstrings mit einem Ersatzteilstring.       |
| {{jsxref("String/split", "split()")}}           | Verwendet einen regulären Ausdruck oder eine feste Zeichenfolge, um eine Zeichenfolge in ein Array von Teilstrings zu unterteilen.                        |

Wenn Sie wissen möchten, ob ein Muster in einer Zeichenfolge gefunden wird, verwenden Sie die Methoden `test()` oder `search()`; für mehr Informationen (aber langsamer in der Ausführung) verwenden Sie die Methoden `exec()` oder `match()`.
Wenn Sie `exec()` oder `match()` verwenden und die Übereinstimmung erfolgreich ist, geben diese Methoden ein Array zurück und aktualisieren die Eigenschaften des zugehörigen regulären Ausdrucksobjekts sowie des vordefinierten regulären Ausdrucksobjekts, `RegExp`.
Wenn die Übereinstimmung fehlschlägt, gibt die `exec()`-Methode `null` zurück (was sich zu `false` auswertet).

Im folgenden Beispiel verwendet das Skript die `exec()`-Methode, um eine Übereinstimmung in einer Zeichenfolge zu finden.

```js
const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbz");
```

Wenn Sie nicht auf die Eigenschaften des regulären Ausdrucks zugreifen müssen, ist eine alternative Möglichkeit zur Erstellung von `myArray` dieses Skript:

```js
const myArray = /d(b+)d/g.exec("cdbbdbsbz");
// similar to 'cdbbdbsbz'.match(/d(b+)d/g); however,
// 'cdbbdbsbz'.match(/d(b+)d/g) outputs [ "dbbd" ]
// while /d(b+)d/g.exec('cdbbdbsbz') outputs [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ]
```

(Siehe [Verwendung des globalen Suchflags mit `exec()`](#using_the_global_search_flag_with_exec) für weitere Informationen über die verschiedenen Verhaltensweisen.)

Wenn Sie den regulären Ausdruck aus einer Zeichenfolge konstruieren möchten, ist eine weitere Alternative dieses Skript:

```js
const myRe = new RegExp("d(b+)d", "g");
const myArray = myRe.exec("cdbbdbsbz");
```

Mit diesen Skripten gelingt die Übereinstimmung und gibt das Array zurück und aktualisiert die in der folgenden Tabelle gezeigten Eigenschaften.

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
      <td>Die übereinstimmende Zeichenfolge und alle gespeicherten Teilstrings.</td>
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
      <td>Die letzten übereinstimmenden Zeichen.</td>
      <td><code>'dbbd'</code></td>
    </tr>
    <tr>
      <td rowspan="2"><code>myRe</code></td>
      <td><code>lastIndex</code></td>
      <td>Der Index, an dem die nächste Übereinstimmung beginnen soll.
        (Diese Eigenschaft wird nur gesetzt, wenn der reguläre Ausdruck die Option g verwendet, die in
        <a href="#advanced_searching_with_flags">Erweiterte Suche mit Flags</a> beschrieben wird.)
      </td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>
        Der Text des Musters. Aktualisiert zu dem Zeitpunkt, zu dem der reguläre Ausdruck erstellt wird, nicht ausgeführt.
      </td>
      <td><code>'d(b+)d'</code></td>
    </tr>
  </tbody>
</table>

Wie in der zweiten Form dieses Beispiels gezeigt, können Sie einen regulären Ausdruck, der mit einem Objektinitialisierer erstellt wurde, verwenden, ohne ihn einer Variablen zuzuweisen.
Wenn Sie dies jedoch tun, ist jedes Vorkommen ein neuer regulärer Ausdruck.
Aus diesem Grund können Sie auf die Eigenschaften dieses regulären Ausdrucks nicht zugreifen, wenn Sie diese Form ohne Zuweisung zu einer Variablen verwenden.
Nehmen wir an, Sie haben dieses Skript:

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

Sind die Vorkommen von `/d(b+)d/g` in den beiden Anweisungen verschiedene reguläre Ausdrucksobjekte und haben daher unterschiedliche Werte für ihre `lastIndex`-Eigenschaft.
Wenn Sie auf die Eigenschaften eines regulären Ausdrucks zugreifen müssen, der mit einem Objektinitialisierer erstellt wurde, sollten Sie ihn zuerst einer Variablen zuweisen.

### Erweiterte Suche mit Flags

Reguläre Ausdrücke haben optionale Flags, die eine Funktionalität wie globale Suche und nichtgeschäftsabhängige Suche ermöglichen.
Diese Flags können separat oder zusammen in beliebiger Reihenfolge verwendet werden und sind Teil des regulären Ausdrucks.

| Flag | Beschreibung                                                                              | Zugehörige Eigenschaft                          |
| ---- | ----------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`  | Generiert Indizes für Teilübereinstimmungen.                                              | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`  | Globale Suche.                                                                            | {{jsxref("RegExp/global", "global")}}           |
| `i`  | Nicht geschäftsabhängige Suche.                                                           | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`  | Ermöglicht `^` und `$`, neben Zeilenumbruchzeichen zu passen.                             | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`  | Ermöglicht `.` zum Übereinstimmen mit Zeilenumbruchzeichen.                               | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`  | "Unicode"; behandelt ein Muster als eine Folge von Unicode-Codepunkten.                   | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`  | Ein Upgrade des `u`-Modus mit mehr Unicode-Funktionen.                                    | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`  | Führt eine "sticky" Suche aus, die am aktuellen Standort in der Zielzeichenfolge beginnt. | {{jsxref("RegExp/sticky", "sticky")}}           |

Um ein Flag in den regulären Ausdruck aufzunehmen, verwenden Sie diese Syntax:

```js
const re = /pattern/flags;
```

oder

```js
const re = new RegExp("pattern", "flags");
```

Beachten Sie, dass die Flags ein integraler Bestandteil eines regulären Ausdrucks sind. Sie können später nicht hinzugefügt oder entfernt werden.

Zum Beispiel erstellt `re = /\w+\s/g` einen regulären Ausdruck, der nach einem oder mehreren Zeichen gefolgt von einem Leerzeichen sucht, und sucht diese Kombination in der gesamten Zeichenfolge.

```js
const re = /\w+\s/g;
const str = "fee fi fo fum";
const myArray = str.match(re);
console.log(myArray);

// ["fee ", "fi ", "fo "]
```

Sie könnten die Zeile:

```js
const re = /\w+\s/g;
```

ersetzen mit:

```js
const re = new RegExp("\\w+\\s", "g");
```

und dasselbe Ergebnis erzielen.

Das `m`-Flag wird verwendet, um anzugeben, dass eine mehrzeilige Eingabezeichenfolge als mehrere Zeilen behandelt werden sollte.
Wenn das `m`-Flag verwendet wird, stimmt `^` und `$` beim Start oder Ende einer Zeile innerhalb der Eingabezeichenfolge überein, anstatt am Start oder Ende der gesamten Zeichenfolge.

Die `i`, `m` und `s` Flags können für bestimmte Teile eines regulären Ausdrucks mit der [Modifier](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Syntax ein- oder ausgeschaltet werden.

#### Verwendung des globalen Suchflags mit exec()

{{jsxref("RegExp.prototype.exec()")}}-Methode mit dem `g`-Flag gibt jede Übereinstimmung und ihre Position iterativ zurück.

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

Das `u`-Flag wird verwendet, um "unicode" reguläre Ausdrücke zu erstellen, d.h. reguläre Ausdrücke, die die Übereinstimmung mit Unicode-Text unterstützen. Eine wichtige Funktion, die im Unicode-Modus aktiviert ist, sind [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape). Zum Beispiel könnte der folgende reguläre Ausdruck verwendet werden, um ein beliebiges Unicode-"Wort" abzugleichen:

```js
/\p{L}*/u;
```

Unicode-Regulärausdrücke haben ebenfalls ein anderes Ausführungsverhalten. [`RegExp.prototype.unicode`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) enthält weitere Erklärungen dazu.

## Beispiele

> [!NOTE]
> Mehrere Beispiele finden Sie auch in:
>
> - Den Referenzseiten für {{jsxref("RegExp/exec", "exec()")}}, {{jsxref("RegExp/test", "test()")}}, {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, {{jsxref("String/search", "search()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/split", "split()")}}
> - Den Leitfadenartikeln: [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes), [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions), [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences), [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)

### Verwendung von speziellen Zeichen zur Überprüfung der Eingabe

Im folgenden Beispiel wird vom Benutzer erwartet, eine Telefonnummer einzugeben.
Wenn der Benutzer auf die Schaltfläche "Prüfen" klickt, überprüft das Skript die Gültigkeit der Nummer.
Wenn die Nummer gültig ist (mit der von der regulären Ausdruck bestimmten Zeichenfolge übereinstimmt), zeigt das Skript eine Nachricht an, in der sich der Benutzer bedankt und die Nummer bestätigt.
Wenn die Nummer ungültig ist, informiert das Skript den Benutzer, dass die Telefonnummer ungültig ist.

Der reguläre Ausdruck sucht nach:

1. dem Anfang der Datenzeile: `^`
2. gefolgt von drei numerischen Zeichen `\d{3}` ODER `|` eine öffnende Klammer `\(`, gefolgt von drei Ziffern `\d{3}`, gefolgt von einer schließenden Klammer `\)`, in einer nicht erfassten Gruppe `(?:)`
3. gefolgt von einem Strich, Schrägstrich oder Dezimalpunkt in einer erfassten Gruppe `()`
4. gefolgt von drei Ziffern `\d{3}`
5. gefolgt von dem in der (ersten) erfassten Gruppe gespeicherten Treffer `\1`
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
  - : Ein Online-Regex-Builder/Debugger.
- [Regex interaktives Tutorial](https://regexlearn.com/)
  - : Ein Online-interaktives Tutorial, Spickzettel und Playground.
- [Regex-Visualizer](https://extendsclass.com/regex-tester.html)
  - : Ein Online-Visualizer für reguläre Ausdrücke.

{{PreviousNext("Web/JavaScript/Guide/Representing_dates_times", "Web/JavaScript/Guide/Indexed_collections")}}
