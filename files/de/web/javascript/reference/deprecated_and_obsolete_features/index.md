---
title: Veraltete und obsolet gewordene Funktionen
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
l10n:
  sourceCommit: 758299969f63c13d235212f1adff79a649702adf
---

{{jsSidebar("More")}}

Diese Seite listet Funktionen von JavaScript auf, die veraltet sind (d. h. noch verfügbar, aber zur Entfernung geplant) und obsolet sind (d. h. nicht mehr verwendbar).

## Veraltete Funktionen

Diese veralteten Funktionen können noch verwendet werden, aber sie sollten mit Vorsicht eingesetzt werden, da nicht garantiert ist, dass sie von jeder JavaScript-Engine implementiert werden. Sie sollten daran arbeiten, deren Nutzung aus Ihrem Code zu entfernen.

Einige dieser veralteten Funktionen sind im [Anhang B](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) der ECMAScript-Spezifikation aufgeführt. Dieser Abschnitt wird als normativ optional beschrieben – das heißt, Webbrowser-Hosts müssen diese Funktionen implementieren, während Nicht-Web-Hosts dies möglicherweise nicht tun. Diese Funktionen sind wahrscheinlich stabil, da ihre Entfernung zu Kompatibilitätsproblemen und zu der Störung von Legacy-Webseiten führen würde. (JavaScript hat das Designziel "das Web nicht unterbrechen".) Trotzdem sind sie nicht plattformübergreifend portabel und werden möglicherweise nicht von allen Analysetools unterstützt, daher wird geraten, sie nicht zu verwenden, wie die Einführung von Anhang B besagt:

> ... Alle in diesem Anhang spezifizierten Sprachmerkmale haben eine oder mehrere unerwünschte Eigenschaften und würden in Ermangelung von Legacy-Verwendungen aus dieser Spezifikation entfernt. ...
>
> ... Programmierer sollten diese Funktionen und Verhaltensweisen nicht verwenden oder von ihrer Existenz ausgehen, wenn sie neuen ECMAScript-Code schreiben. ...

Einige weitere, obwohl im Hauptteil der Spezifikation aufgeführt, sind ebenfalls als normativ optional markiert und sollten nicht verwendet werden.

### HTML-Kommentare

JavaScript-Quellcode, der als Skripte geparst wird, erlaubt HTML-ähnliche Kommentare, als ob das Skript Teil eines `<script>`-Tags wäre.

Folgendes ist gültiges JavaScript, wenn es in einem Webbrowser (oder Node.js, das die V8-Engine von Chrome verwendet) ausgeführt wird:

```js
<!-- Kommentar
console.log("a"); <!-- ein weiterer Kommentar
console.log("b");
--> Mehr Kommentar
// Gibt "a" und "b" aus
```

`<!--` und `-->` wirken beide wie `//`, d. h. sie beginnen Zeilenkommentare. `-->` ist nur am Anfang einer Zeile gültig (um Mehrdeutigkeiten mit einem Postfix-Decrement gefolgt von einem Größer-als-Operator zu vermeiden), während `<!--` überall in der Zeile auftreten kann.

### RegExp

Die folgenden Eigenschaften sind veraltet. Dies hat keinen Einfluss auf ihre Verwendung in [Ersetzungs-Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace):

- [`$1–$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
  - : Parenthesierte Teilstring-Übereinstimmungen, falls vorhanden.
- [`input`, `$_`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
  - : Der String, gegen den ein regulärer Ausdruck abgeglichen wird.
- [`lastMatch`, `$&`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
  - : Der letzte übereinstimmende Teilstring.
- [`lastParen`, `$+`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
  - : Die letzte parenthesierte Teilstring-Übereinstimmung, falls vorhanden.
- [`leftContext`, `` $` ``](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
  - : Der Teilstring, der der letzten Übereinstimmung vorausgeht.
- [`rightContext`, `$'`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
  - : Der Teilstring, der der letzten Übereinstimmung folgt.

> [!WARNING]
> Vermeiden Sie die Verwendung dieser statischen Eigenschaften, da sie [Probleme bei der Interaktion mit externem Code](https://github.com/tc39/proposal-regexp-legacy-features/blob/master/subclass-restriction-motivation.md#legacy-static-properties-regexp1-etc) verursachen können!

Die {{jsxref("RegExp/compile", "compile()")}}-Methode ist veraltet. Erstellen Sie stattdessen eine neue `RegExp`-Instanz.

Die folgenden regulären Ausdrucksschreibweisen sind veraltet und nur im [Unicode-unaware Mode](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verfügbar. Im Unicode-aware Mode sind sie alle Syntaxfehler:

- [Lookahead Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) können [Quantoren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) haben.
- [Backreferences](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference), die sich nicht auf eine bestehende erfasste Gruppe beziehen, werden zu [Legacy Octal Escapes](#escape_sequenzen).
- In [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) machen Zeichenbereiche, bei denen eine Grenze eine Zeichenklasse ist, das `-` zu einem Literalzeichen.
- Eine nicht erkannte Escape-Sequenz wird zu einem ["Identity Escape"](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).
- Escape-Sequenzen innerhalb [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) der Form `\cX`, wobei `X` eine Zahl oder `_` ist, werden auf die gleiche Weise decodiert wie solche mit {{Glossary("ASCII")}}-Buchstaben: `\c0` ist dasselbe wie `\cP`, modulo 32. Wenn die Form `\cX` jedoch irgendwo auftritt, wo `X` nicht eines der anerkannten Zeichen ist, wird der Backslash als Literalzeichen behandelt.
- Die Sequenz `\k` innerhalb eines regulären Ausdrucks, der keine [benannten erfassten Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) hat, wird als Identity Escape behandelt.
- Die Syntaxzeichen `]`, `{` und `}` können [wörtlich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) erscheinen, ohne dass sie maskiert werden müssen, wenn sie nicht als Ende einer Zeichenklasse oder Quantifiziererinterpretiert werden können.

### Function

- Die {{jsxref("Function/caller", "caller")}}-Eigenschaft von Funktionen und die [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)-Eigenschaft sind veraltet und im Strict-Modus nicht verfügbar.
- Anstatt `arguments` als Eigenschaft einer Funktion zu verwenden, sollten Sie das {{jsxref("Functions/arguments", "arguments")}}-Objekt innerhalb von Funktionsclosures verwenden.

### Object

- Die [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Zugriffsmethoden sind veraltet. Verwenden Sie stattdessen [`Object.getPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) und [`Object.setPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf). Dies gilt nicht für den `__proto__`-Literal-Schlüssel in Objektliteralen.
- Die Methoden [`Object.prototype.__defineGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`Object.prototype.__defineSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`Object.prototype.__lookupGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) und [`Object.prototype.__lookupSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet. Verwenden Sie stattdessen [`Object.getOwnPropertyDescriptor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) und [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty).

### String

- HTML-Wrapper-Methoden wie {{jsxref("String.prototype.fontsize")}} und {{jsxref("String.prototype.big")}}.
- {{jsxref("String.prototype.substr")}} wird wahrscheinlich nicht so bald entfernt, ist jedoch im Anhang B definiert und daher normativ optional.
- `String.prototype.trimLeft` und `String.prototype.trimRight` sollten durch {{jsxref("String.prototype.trimStart")}} und {{jsxref("String.prototype.trimEnd")}} ersetzt werden.

### Date

- Die Methoden {{jsxref("Date/getYear", "getYear()")}} und {{jsxref("Date/setYear", "setYear()")}} sind betroffen vom Jahr-2000-Problem und wurden durch {{jsxref("Date/getFullYear", "getFullYear")}} und {{jsxref("Date/setFullYear", "setFullYear")}} ersetzt.
- Die Methode `toGMTString()` ist veraltet. Verwenden Sie stattdessen {{jsxref("Date/toUTCString", "toUTCString()")}}.

### Escape Sequenzen

- Oktale Escape-Sequenzen (\ gefolgt von einer, zwei oder drei oktalen Ziffern) sind in String- und regulären Ausdrucksliteralen veraltet.
- Die Funktionen {{jsxref("escape()")}} und {{jsxref("unescape()")}} sind veraltet. Verwenden Sie {{jsxref("encodeURI()")}}, {{jsxref("encodeURIComponent()")}}, {{jsxref("decodeURI()")}} oder {{jsxref("decodeURIComponent()")}}, um Escape-Sequenzen für Sonderzeichen zu codieren und zu dekodieren.

### Anweisungen

Die [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung ist veraltet und steht im Strict-Modus nicht zur Verfügung.

Initialisierer in `var`-Deklarationen von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifenköpfen sind veraltet und erzeugen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) im Strict-Modus. Der Initialisierungsausdruck wird ausgewertet und der Variablen zugewiesen, aber der Wert würde sofort bei der ersten Iteration der Schleife erneut zugewiesen werden.

Normalerweise kann der `catch`-Block einer [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung keine Variable mit demselben Namen wie die im `catch()` gebundenen Variablen enthalten. Eine Erweiterungsgrammatik erlaubt es, dass der `catch`-Block eine mit [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) deklarierte Variable mit demselben Namen wie der `catch`-gebundene Bezeichner enthält, aber nur, wenn die `catch`-Bindung ein einfacher Bezeichner und kein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) ist. Allerdings würde die Initialisierung und Zuweisung dieser Variablen nur den `catch`-gebundenen Bezeichner betreffen und nicht die Variable im oberen Gültigkeitsbereich, und das Verhalten könnte verwirrend sein.

```js
var a = 2;
try {
  throw 42;
} catch (a) {
  var a = 1; // Diese 1 wird dem gefangenen `a` zugewiesen, nicht dem äußeren `a`.
}
console.log(a); // 2

try {
  throw 42;
  // Hinweis: Bezeichner zu `err` geändert, um Konflikte mit
  // der inneren Deklaration von `a` zu vermeiden.
} catch (err) {
  var a = 1; // Diese 1 wird dem oberen Bereich `a` zugewiesen.
}
console.log(a); // 1
```

Dies ist im Anhang B der Spezifikation aufgeführt und daher möglicherweise nicht überall implementiert. Vermeiden Sie jegliche Namenskonflikte zwischen dem `catch`-gebundenen Bezeichner und den im `catch`-Block deklarierten Variablen.

## Obsolete Funktionen

Diese obsoleten Funktionen wurden vollständig aus JavaScript entfernt und können ab der angegebenen JavaScript-Version nicht mehr verwendet werden.

### RegExp

Die folgenden sind jetzt Eigenschaften von `RegExp`-Instanzen, nicht mehr des `RegExp`-Konstruktors:

| Eigenschaft                                                         | Beschreibung                                                                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("RegExp/global", "global")}}                              | Ob der reguläre Ausdruck auf alle möglichen Übereinstimmungen in einem String getestet werden soll oder nur auf die erste. |
| {{jsxref("RegExp/ignoreCase", "ignoreCase")}}                      | Ob Groß-/Kleinschreibung ignoriert werden soll, während ein Übereinstimmungsversuch in einem String unternommen wird. |
| {{jsxref("RegExp/lastIndex", "lastIndex")}}                        | Der Index, an dem der nächste Abgleich beginnen soll.                                                                        |
| {{jsxref("RegExp/multiline", "multiline")}} (auch über `RegExp.$*`) | Ob in Strings über mehrere Zeilen hinweg gesucht werden soll.                                                         |
| {{jsxref("RegExp/source", "source")}}                              | Der Text des Musters.                                                                                           |

Die `valueOf()`-Methode ist nicht mehr auf `RegExp` spezialisiert. Sie verwendet {{jsxref("Object.prototype.valueOf()")}}, die sich selbst zurückgibt.

### Function

- Die `arity`-Eigenschaft von Funktionen ist obsolet. Verwenden Sie stattdessen [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### Object

| Eigenschaft                 | Beschreibung                                                                                                | Alternative                                                                                                                                                                          |
| --------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `__count__`                 | Gibt die Anzahl der aufzählbaren Eigenschaften direkt auf einem benutzerdefinierten Objekt zurück.           | [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)                                                                                                   |
| `__parent__`                | Zeigt auf den Kontext eines Objekts.                                                                        | Keine direkte Alternative                                                                                                                                                            |
| `__iterator__`              | Verwendet mit [Legacy-Iterators](#legacy-generator_und_-iterator).                                           | [`Symbol.iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) und die neuen [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols) |
| `__noSuchMethod__`          | Eine Methode, die aufgerufen wird, wenn eine nicht vorhandene Eigenschaft als Methode aufgerufen wird.       | {{jsxref("Proxy")}}                                                                                                                                                                  |
| `Object.prototype.eval()`   | Bewertet einen String von JavaScript-Code im Kontext des angegebenen Objekts.                                | Keine direkte Alternative                                                                                                                                                            |
| `Object.observe()`          | Asynchrones Beobachten der Änderungen an einem Objekt.                                                      | {{jsxref("Proxy")}}                                                                                                                                                                  |
| `Object.unobserve()`        | Beobachter entfernen.                                                                                       | {{jsxref("Proxy")}}                                                                                                                                                                  |
| `Object.getNotifier()`      | Erstellt ein Benachrichtigungsobjekt, das es ermöglicht, eine mit `Object.observe()` beobachtbare Änderung synthetisch auszulösen. | Keine direkte Alternative                                                                                                                                                            |
| `Object.prototype.watch()`  | Einen Handler-Callback an eine Eigenschaft anhängen, der aufgerufen wird, wenn die Eigenschaft zugewiesen wird. | {{jsxref("Proxy")}}                                                                                                                                                                  |
| `Object.prototype.unwatch()`| Beobachtungs-Handler an einer Eigenschaft entfernen.                                                               | {{jsxref("Proxy")}}                                                                                                                                                                  |

### String

- Nichtstandardisierte generische String-Methoden wie `String.slice(myStr, 0, 12)`, `String.replace(myStr, /\./g, "!")`, usw. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 53 veraltet und in Firefox 68 entfernt. Sie können Methoden an {{jsxref("String", "String.prototype", "instance_methods")}} zusammen mit {{jsxref("Function.call")}} verwenden.
- `String.prototype.quote` wurde aus Firefox 37 entfernt.
- Der nichtstandardmäßige `flags`-Parameter in {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}}, und {{jsxref("String.prototype.replace")}} ist obsolet.

### WeakMap

- `WeakMap.prototype.clear()` wurde in Firefox 20 hinzugefügt und in Firefox 46 entfernt. Es ist nicht möglich, alle Schlüssel in einer [`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) zu durchlaufen.

### Date

- `Date.prototype.toLocaleFormat()`, das einen Format-String im gleichen Format wie die `strftime()`-Funktion in C verwendete, ist obsolet. Verwenden Sie [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) oder [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) stattdessen.

### Array

- Nichtstandardisierte generische Array-Methoden wie `Array.slice(myArr, 0, 12)`, `Array.forEach(myArr, myFn)`, usw. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 68 veraltet und in Firefox 71 entfernt. Sie können Methoden an {{jsxref("Array", "Array.prototype", "instance_methods")}} zusammen mit {{jsxref("Function.call")}} verwenden.

| Eigenschaft           | Beschreibung                                  | Alternative         |
| --------------------- | --------------------------------------------- | ------------------- |
| `Array.observe()`     | Asynchrones Beobachten von Änderungen an Arrays. | {{jsxref("Proxy")}} |
| `Array.unobserve()`   | Beobachter entfernen.                         | {{jsxref("Proxy")}} |

### Number

- `Number.toInteger()` ist obsolet. Verwenden Sie [`Math.floor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), [`Math.round`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) oder andere Methoden.

### Proxy

- `Proxy.create` und `Proxy.createFunction` sind obsolet. Verwenden Sie den {{jsxref("Proxy/Proxy", "Proxy()")}}-Konstruktor stattdessen.
- Die folgenden Traps sind obsolet:
  - `hasOwn` ([bug 980565](https://bugzil.la/980565), Firefox 33).
  - `getEnumerablePropertyKeys` ([bug 783829](https://bugzil.la/783829), Firefox 37)
  - `getOwnPropertyNames` ([bug 1007334](https://bugzil.la/1007334), Firefox 33)
  - `keys` ([bug 1007334](https://bugzil.la/1007334), Firefox 33)

### ParallelArray

- `ParallelArray` ist obsolet.

### Anweisungen

- `for each...in` ist obsolet. Verwenden Sie {{jsxref("Statements/for...of", "for...of")}} stattdessen.
- Let-Blöcke und Let-Ausdrücke sind obsolet.
- Ausdrucksclosures (`function () 1` als Kurzschreibweise für `function () { return 1; }`) sind obsolet. Verwenden Sie stattdessen reguläre {{jsxref("Operators/function", "Funktionen")}} oder {{jsxref("Functions/Arrow_functions", "Arrow-Funktionen", "", 1)}}.

### Abrufen von Quelltext

Die `toSource()`-Methoden von Arrays, Zahlen, Strings usw. und die globale Funktion `uneval()` sind obsolet. Verwenden Sie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString), oder schreiben Sie Ihre eigene Serialisierungsmethode.

### Legacy-Generator und -Iterator

Legacy-Generator-Funktionsanweisungen und -Funktionsausdrücke sind entfernt. Die Legacy-Generator-Funktionssyntax wiederverwendet das Schlüsselwort `function`, das automatisch zu einer Generator-Funktion wird, wenn es eine oder mehrere `yield`-Ausdrücke im Rumpf gibt – dies ist jetzt ein Syntaxfehler. Verwenden Sie stattdessen [`function*`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/function*) und [`function*`-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function*).

Array-Comprehensions und Generator-Comprehensions sind entfernt.

```js-nolint
// Legacy-Array-Comprehensions
[for (x of iterable) x]
[for (x of iterable) if (condition) x]
[for (x of iterable) for (y of iterable) x + y]

// Legacy-Generator-Comprehensions
(for (x of iterable) x)
(for (x of iterable) if (condition) x)
(for (x of iterable) for (y of iterable) x + y)
```

Firefox, vor Version 26, implementierte ein anderes Iterator-Protokoll, das dem Standard-[Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) ähnlich ist. Ein Objekt ist ein Legacy-Iterator, wenn es eine `next()`-Methode implementiert, die bei jedem Aufruf einen Wert produziert und am Ende der Iteration ein `StopIteration`-Objekt wirft. Dieses Legacy-Iterator-Protokoll unterscheidet sich vom Standard-Iterator-Protokoll:

- Der Wert wurde direkt als Rückgabewert von Aufrufen an `next()` zurückgegeben, anstatt als die `value`-Eigenschaft des `IteratorResult`-Objekts.
- Das Ende der Iteration wurde durch das Werfen eines `StopIteration`-Objekts ausgedrückt, anstatt durch die `done`-Eigenschaft des `IteratorResult`-Objekts.

Diese Funktion und der globale Konstruktor `StopIteration` wurden in Firefox 58+ entfernt. Für zukunftsweisende Anwendungen sollten Sie `for...of`-Schleifen und das [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) in Betracht ziehen.

### Sharp-Variablen

Sharp-Variablen sind obsolet. Verwenden Sie stattdessen temporäre Variablen, um zirkuläre Strukturen zu erstellen.
