---
title: Veraltete und obsolet gewordene Funktionen
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Diese Seite listet JavaScript-Funktionen auf, die als veraltet (d.h. noch verfügbar, aber für die Entfernung geplant) und obsolet (d.h. nicht mehr nutzbar) gelten.

## Veraltete Funktionen

Diese veralteten Funktionen können noch verwendet werden, sollten jedoch mit Vorsicht verwendet werden, da sie nicht in allen JavaScript-Engines implementiert sein müssen. Sie sollten daran arbeiten, deren Verwendung aus Ihrem Code zu entfernen.

Einige dieser veralteten Funktionen sind im Abschnitt [Anhang B](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) der ECMAScript-Spezifikation aufgeführt. Dieser Abschnitt wird als normativ optional beschrieben — das heißt, Webbrowser-Hosts müssen diese Funktionen implementieren, während Nicht-Web-Hosts dies möglicherweise nicht tun. Diese Funktionen sind wahrscheinlich stabil, da deren Entfernung Rückwärtskompatibilitätsprobleme verursachen und ältere Websites beeinträchtigen würde. (JavaScript hat das Designziel "das Web nicht kaputt machen".) Dennoch sind sie nicht plattformübergreifend tragbar und werden möglicherweise nicht von allen Analysetools unterstützt, daher wird geraten, sie nicht zu verwenden, wie die Einführung von Anhang B bemerkt:

> … Alle in diesem Anhang spezifizierten Sprachmerkmale und Verhaltensweisen weisen eine oder mehrere unerwünschte Eigenschaften auf und würden ohne die Existenz von Altnutzungen aus dieser Spezifikation entfernt werden. …
>
> … Programmierer sollten diese Merkmale und Verhaltensweisen beim Schreiben neuen ECMAScript-Codes nicht verwenden oder deren Existenz voraussetzen. …

Einige andere, obwohl sie sich im Hauptteil der Spezifikation befinden, sind ebenfalls als normativ optional gekennzeichnet und sollten nicht als gegeben vorausgesetzt werden.

### HTML-Kommentare

JavaScript-Quellcode, wenn er als Skripte geparst wird, erlaubt HTML-ähnliche Kommentare, als ob das Skript Teil eines `<script>` Tags wäre.

Folgendes ist gültiges JavaScript, wenn es in einem Webbrowser (oder Node.js, das die V8-Engine von Chrome nutzt) ausgeführt wird:

```js
<!-- comment
console.log("a"); <!-- another comment
console.log("b");
--> More comment
// Logs "a" and "b"
```

`<!--` und `-->` verhalten sich beide wie `//`, d.h. sie starten Zeilenkommentare. `-->` ist nur am Anfang einer Zeile gültig (um Verwirrung mit einem Postfix-Abzugsoperator gefolgt von einem Größer-als-Operator zu vermeiden), während `<!--` überall in der Zeile vorkommen kann.

### RegExp

Die folgenden Eigenschaften sind veraltet. Dies beeinflusst nicht ihre Verwendung in [Ersatz-Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace):

- [`$1–$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
  - : Eingeschlossene Substring-Übereinstimmungen, falls vorhanden.
- [`input`, `$_`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
  - : Der String, gegen den ein regulärer Ausdruck abgeglichen wird.
- [`lastMatch`, `$&`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
  - : Der zuletzt abgeglichene Substring.
- [`lastParen`, `$+`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
  - : Die zuletzt eingeschlossene Substring-Übereinstimmung, falls vorhanden.
- [`leftContext`, `` $` ``](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
  - : Der Substring, der der letzten Übereinstimmung vorausgeht.
- [`rightContext`, `$'`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
  - : Der Substring, der der letzten Übereinstimmung folgt.

> [!WARNING]
> Vermeiden Sie die Verwendung dieser statischen Eigenschaften, da sie [Probleme im Umgang mit externem Code verursachen können](https://github.com/tc39/proposal-regexp-legacy-features/blob/master/subclass-restriction-motivation.md#legacy-static-properties-regexp1-etc)!

Die Methode {{jsxref("RegExp/compile", "compile()")}} ist veraltet. Erstellen Sie stattdessen eine neue `RegExp`-Instanz.

Die folgenden Regex-Syntaxen sind veraltet und nur im [Unicode-unaware Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verfügbar. Im Unicode-aware Modus sind sie alle Syntaxfehler:

- [Lookahead assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) können [Quantifier](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) haben.
- [Backreferences](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference), die sich nicht auf eine existierende Erfassungsgruppe beziehen, werden zu [Legacy-Oktalescape-sequenzen](#escape-sequenzen).
- In [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class), Zeichenbereiche, bei denen eine Grenze eine Zeichenklasse ist, machen das `-` zu einem literalen Zeichen.
- Eine Escape-Sequenz, die nicht erkannt wird, wird zu einem ["Identitäts-Escape"](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).
- Escape-Sequenzen innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) der Form `\cX`, wobei `X` eine Zahl oder `_` ist, werden auf die gleiche Weise decodiert wie diejenigen mit {{Glossary("ASCII", "ASCII")}}-Buchstaben: `\c0` ist genauso wie `\cP`, wenn mod 32 genommen wird. Außerdem, wenn die Form `\cX` irgendwo auftritt, wo `X` nicht eines der erkannten Zeichen ist, wird der Backslash als ein literales Zeichen behandelt.
- Die Sequenz `\k` innerhalb eines Regexes, der keine [benannten Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) hat, wird als ein Identitäts-Escape betrachtet.
- Die Syntaxzeichen `]`, `{`, und `}` können [literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) unescaped erscheinen, wenn sie nicht als Ende einer Zeichenklasse oder als Quantifizierer-Delimitatoren interpretiert werden können.

### Function

- Die {{jsxref("Function/caller", "caller")}}-Eigenschaft von Funktionen und die [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)-Eigenschaft sind veraltet und in strengem Modus nicht verfügbar.
- Anstelle des Zugriffs auf `arguments` als Eigenschaft einer Funktion sollten Sie das {{jsxref("Functions/arguments", "arguments")}}-Objekt innerhalb von Funktionsabschlüssen verwenden.

### Object

- Die [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Zugriffsmethoden sind veraltet. Verwenden Sie stattdessen [`Object.getPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) und [`Object.setPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf). Dies gilt nicht für den `__proto__` literal key in Objektliteralen.
- Die Methoden [`Object.prototype.__defineGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`Object.prototype.__defineSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`Object.prototype.__lookupGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), und [`Object.prototype.__lookupSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet. Verwenden Sie stattdessen [`Object.getOwnPropertyDescriptor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) und [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty).

### String

- HTML-Hüllmethoden wie {{jsxref("String.prototype.fontsize")}} und {{jsxref("String.prototype.big")}}.
- {{jsxref("String.prototype.substr")}} wird wahrscheinlich nicht in absehbarer Zeit entfernt, aber es ist in Anhang B definiert und daher normativ optional.
- `String.prototype.trimLeft` und `String.prototype.trimRight` sollten durch {{jsxref("String.prototype.trimStart")}} und {{jsxref("String.prototype.trimEnd")}} ersetzt werden.

### Date

- Die Methoden {{jsxref("Date/getYear", "getYear()")}} und {{jsxref("Date/setYear", "setYear()")}} sind vom Jahr-2000-Problem betroffen und wurden durch {{jsxref("Date/getFullYear", "getFullYear")}} und {{jsxref("Date/setFullYear", "setFullYear")}} ersetzt.
- Die Methode `toGMTString()` ist veraltet. Verwenden Sie stattdessen {{jsxref("Date/toUTCString", "toUTCString()")}}.

### Escape-Sequenzen

- Oktalescape-Sequenzen (\ gefolgt von einer, zwei oder drei oktalen Ziffern) sind in string und regulären Ausdrucks-Literalen veraltet.
- Die Funktionen {{jsxref("escape()")}} und {{jsxref("unescape()")}} sind veraltet. Verwenden Sie {{jsxref("encodeURI()")}}, {{jsxref("encodeURIComponent()")}}, {{jsxref("decodeURI()")}}, oder {{jsxref("decodeURIComponent()")}}, um Escape-Sequenzen für Sonderzeichen zu kodieren und zu dekodieren.

### Anweisungen

Die [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung ist veraltet und im strengen Modus nicht verfügbar.

Initialisierer in `var`-Deklarationen von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen sind veraltet und erzeugen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) im strengen Modus. Die Initialisiererausdrücke werden ausgewertet und der Variablen zugeordnet, aber der Wert würde bei der ersten Schleifeniteration sofort neu zugeordnet werden.

Normalerweise kann der `catch`-Block einer [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung keine Variablendeklaration mit dem gleichen Namen enthalten wie die im `catch()` gebundenen Variablen. Eine erweiterte Grammatik erlaubt es dem `catch`-Block, eine mit [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) deklarierte Variable mit dem gleichen Namen wie der im `catch` gebundene Bezeichner zu enthalten, aber nur, wenn die `catch`-Bindung ein einfacher Bezeichner ist und kein [Destructuring-Muster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring). Diese Variable wird jedoch nur auf den im `catch` gebundenen Bezeichner initialisiert und zugewiesen, anstatt auf die oberste Gültigkeitsbereichsvariable, und das Verhalten könnte verwirrend sein.

```js
var a = 2;
try {
  throw new Error();
} catch (a) {
  var a = 1; // This 1 is assigned to the caught `a`, not the outer `a`.
}
console.log(a); // 2

try {
  throw new Error();
  // Note: identifier changed to `err` to avoid conflict with
  // the inner declaration of `a`.
} catch (err) {
  var a = 1; // This 1 is assigned to the upper-scope `a`.
}
console.log(a); // 1
```

Dies ist im Anhang B der Spezifikation aufgeführt und daher möglicherweise nicht überall implementiert. Vermeiden Sie Namenskonflikte zwischen dem im `catch` gebundenen Bezeichner und Variablen, die im `catch`-Block deklariert sind.

## Obsolete Funktionen

Diese obsoleten Funktionen wurden vollständig aus JavaScript entfernt und können ab der angegebenen Version von JavaScript nicht mehr verwendet werden.

### RegExp

Die folgenden sind jetzt Eigenschaften von `RegExp`-Instanzen, nicht mehr des `RegExp`-Konstruktors:

| Eigenschaft                                                         | Beschreibung                                                                                                            |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp/global", "global")}}                               | Ob der reguläre Ausdruck gegen alle möglichen Übereinstimmungen in einem String getestet wird oder nur gegen die erste. |
| {{jsxref("RegExp/ignoreCase", "ignoreCase")}}                       | Ob beim Versuch einer Übereinstimmung in einem String die Groß-/Kleinschreibung ignoriert wird.                         |
| {{jsxref("RegExp/lastIndex", "lastIndex")}}                         | Der Index, bei dem mit dem nächsten Abgleich begonnen werden soll.                                                      |
| {{jsxref("RegExp/multiline", "multiline")}} (auch über `RegExp.$*`) | Ob in String-Übereinstimmungen über mehrere Zeilen hinweg gesucht werden soll.                                          |
| {{jsxref("RegExp/source", "source")}}                               | Der Text des Musters.                                                                                                   |

Die Methode `valueOf()` ist nicht mehr speziell für `RegExp`. Sie nutzt {{jsxref("Object.prototype.valueOf()")}}, das sich selbst zurückgibt.

### Function

- Die `arity`-Eigenschaft von Funktionen ist obsolet. Verwenden Sie stattdessen [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### Object

| Eigenschaft                  | Beschreibung                                                                                                             | Alternative                                                                                                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__count__`                  | Gibt die Anzahl der direkt verfügbaren aufzählbaren Eigenschaften auf einem benutzerdefinierten Objekt zurück.           | [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)                                                                                                   |
| `__parent__`                 | Verweist auf den Kontext eines Objekts.                                                                                  | Keine direkte Ersatzmethode                                                                                                                                                       |
| `__iterator__`               | Wurde mit [Legacy-Iteratoren](#legacy-generator_und_-iterator) verwendet.                                                | [`Symbol.iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) und die neuen [Iteration-Protokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols) |
| `__noSuchMethod__`           | Eine Methode, die aufgerufen wird, wenn eine nicht vorhandene Eigenschaft als Methode aufgerufen wird.                   | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.prototype.eval()`    | Wertet einen JavaScript-Code-String im Kontext des angegebenen Objekts aus.                                              | Keine direkte Ersatzmethode                                                                                                                                                       |
| `Object.observe()`           | Asynchrones Beobachten von Änderungen an einem Objekt.                                                                   | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.unobserve()`         | Entfernt Beobachter.                                                                                                     | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.getNotifier()`       | Erzeugt ein Notifier-Objekt, das es ermöglicht, eine Änderungsbeobachtung mit `Object.observe()` synthetisch auszulösen. | Keine direkte Ersatzmethode                                                                                                                                                       |
| `Object.prototype.watch()`   | Hängt einen Callback-Handler an eine Eigenschaft, der aufgerufen wird, wenn der Eigenschaft zugewiesen wird.             | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.prototype.unwatch()` | Entfernt Watch-Handler von einer Eigenschaft.                                                                            | {{jsxref("Proxy")}}                                                                                                                                                               |

### String

- Nicht standardisierte String-generische Methoden wie `String.slice(myStr, 0, 12)`, `String.replace(myStr, /\./g, "!")` usw. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 53 als veraltet erklärt und in Firefox 68 entfernt. Sie können Methoden auf {{jsxref("String", "String.prototype", "Instanzmethoden")}} zusammen mit {{jsxref("Function.call")}} verwenden.
- `String.prototype.quote` wurde in Firefox 37 entfernt.
- Nicht standardisierte `flags`-Parameter in {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}}, und {{jsxref("String.prototype.replace")}} sind obsolet.

### WeakMap

- `WeakMap.prototype.clear()` wurde in Firefox 20 hinzugefügt und in Firefox 46 entfernt. Es ist nicht möglich, alle Schlüssel in einem [`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) zu durchlaufen.

### Date

- `Date.prototype.toLocaleFormat()`, das ein Formatstring im gleichen Format verwendete, das von der Funktion `strftime()` in C erwartet wird, ist obsolet. Verwenden Sie [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) oder [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).

### Array

- Nicht standardisierte Array-generische Methoden wie `Array.slice(myArr, 0, 12)`, `Array.forEach(myArr, myFn)` usw. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 68 als veraltet erklärt und in Firefox 71 entfernt. Sie können Methoden auf {{jsxref("Array", "Array.prototype", "Instanzmethoden")}} zusammen mit {{jsxref("Function.call")}} verwenden.

| Eigenschaft         | Beschreibung                                     | Alternative         |
| ------------------- | ------------------------------------------------ | ------------------- |
| `Array.observe()`   | Asynchrones Beobachten von Änderungen an Arrays. | {{jsxref("Proxy")}} |
| `Array.unobserve()` | Entfernt Beobachter.                             | {{jsxref("Proxy")}} |

### Number

- `Number.toInteger()` ist obsolet. Verwenden Sie statt dessen [`Math.floor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), [`Math.round`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) oder andere Methoden.

### Proxy

- `Proxy.create` und `Proxy.createFunction` sind obsolet. Verwenden Sie den {{jsxref("Proxy/Proxy", "Proxy()")}}-Konstruktor.
- Die folgenden Traps sind obsolet:
  - `hasOwn` ([bug 980565](https://bugzil.la/980565), Firefox 33).
  - `getEnumerablePropertyKeys` ([bug 783829](https://bugzil.la/783829), Firefox 37)
  - `getOwnPropertyNames` ([bug 1007334](https://bugzil.la/1007334), Firefox 33)
  - `keys` ([bug 1007334](https://bugzil.la/1007334), Firefox 33)

### ParallelArray

- `ParallelArray` ist obsolet.

### Anweisungen

- `for each...in` ist obsolet. Verwenden Sie {{jsxref("Statements/for...of", "for...of")}}.
- Let-Blöcke und Let-Ausdrücke sind obsolet.
- Ausdrückungsabschlüsse (`function () 1` als Kurzform von `function () { return 1; }`) sind obsolet. Verwenden Sie reguläre {{jsxref("Operators/function", "Funktionen")}} oder {{jsxref("Functions/Arrow_functions", "Pfeilfunktionen", "", 1)}}.

### Abrufen des Quelltexts

Die `toSource()`-Methoden von Arrays, Zahlen, Strings usw. und die globale Funktion `uneval()` sind obsolet. Verwenden Sie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString), oder schreiben Sie Ihre eigene Serialisierungsmethode.

### Legacy-Generator und -Iterator

Legacy-Generator-Funktionsanweisungen und Legacy-Generator-Funktionsausdrücke sind entfernt. Die Syntax der Legacy-Generator-Funktion verwendet das `function`-Schlüsselwort, das automatisch zu einer Generator-Funktion wird, wenn es eine oder mehrere `yield`-Ausdrücke im Körper gibt — dies ist jetzt ein Syntaxfehler. Verwenden Sie [`function*`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/function*) und [`function*`-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function*) anstelle dessen.

Array-Konstruktionen und Generator-Konstruktionen sind entfernt.

```js-nolint
// Legacy array comprehensions
[for (x of iterable) x]
[for (x of iterable) if (condition) x]
[for (x of iterable) for (y of iterable) x + y]

// Legacy generator comprehensions
(for (x of iterable) x)
(for (x of iterable) if (condition) x)
(for (x of iterable) for (y of iterable) x + y)
```

Firefox implementierte vor Version 26 ein weiteres Iterationsprotokoll, das dem Standard [Iterators-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) ähnelt. Ein Objekt ist ein Legacy-Iterator, wenn es eine `next()`-Methode implementiert, die bei jedem Aufruf einen Wert geliefert und ein `StopIteration`-Objekt am Ende der Iteration ausgelöst hat. Dieses Legacy-Iterator-Protokoll unterscheidet sich vom Standard-Iterator-Protokoll:

- Der Wert wurde direkt als Rückgabewert der `next()`-Aufrufe zurückgegeben, anstatt der `value`-Eigenschaft des `IteratorResult`-Objekts.
- Die Beendigung der Iteration wurde durch das Auswerfen eines `StopIteration`-Objekts erreicht, anstatt durch die `done`-Eigenschaft des `IteratorResult`-Objekts.

Diese Funktion, zusammen mit dem `StopIteration` globalen Konstruktor, wurde in Firefox 58+ entfernt. Für zukunftsorientierte Verwendungen sollten Sie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen und das [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) nutzen.

### Sharp-Variablen

Sharp-Variablen sind obsolet. Verwenden Sie stattdessen temporäre Variablen, um zirkuläre Strukturen zu erstellen.
