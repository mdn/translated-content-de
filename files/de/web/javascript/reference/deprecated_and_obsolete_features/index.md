---
title: Veraltete und obsolete Funktionen
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Diese Seite listet Funktionen von JavaScript auf, die veraltet (d.h. noch verfügbar, aber zur Entfernung vorgesehen) und obsolet sind (d.h. nicht mehr verwendbar).

## Veraltete Funktionen

Diese veralteten Funktionen können noch verwendet werden, sollten jedoch mit Vorsicht genossen werden, da sie nicht von jedem JavaScript-Engine implementiert werden müssen. Sie sollten daran arbeiten, ihre Verwendung aus Ihrem Code zu entfernen.

Einige dieser veralteten Funktionen sind im [Anhang B](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) der ECMAScript-Spezifikation aufgeführt. Dieser Abschnitt wird als normativ optional beschrieben — das heißt, Hosts von Webbrowsern müssen diese Funktionen implementieren, während Nicht-Web-Hosts dies möglicherweise nicht tun. Diese Funktionen sind wahrscheinlich stabil, da ihre Entfernung Rückwärtskompatibilitätsprobleme verursachen und alte Websites beschädigen würde. (JavaScript hat das Designziel "Das Web nicht zerstören".) Trotzdem sind sie nicht plattformübergreifend portabel und werden möglicherweise nicht von allen Analysetools unterstützt, daher wird Ihnen geraten, sie nicht zu verwenden, wie die Einführung von Anhang B besagt:

> … Alle in diesem Anhang spezifizierten Sprachfunktionen und Verhaltensweisen weisen eine oder mehrere unerwünschte Eigenschaften auf und würden ohne die Existenz von Altnutzung aus dieser Spezifikation entfernt werden. …
>
> … Programmierer sollten diese Funktionen und Verhaltensweisen nicht verwenden oder deren Existenz beim Schreiben von neuem ECMAScript-Code annehmen. …

Einige andere, die im Hauptteil der Spezifikation stehen, sind ebenfalls als normativ optional gekennzeichnet und sollten nicht als gegeben vorausgesetzt werden.

### HTML-Kommentare

JavaScript-Quellcode, sofern er als Skripte geparst wird, erlaubt HTML-ähnliche Kommentare, als ob das Skript Teil eines `<script>`-Tags ist.

Das folgende ist gültiges JavaScript, wenn es in einem Webbrowser (oder Node.js, das die V8-Engine von Chrome verwendet) ausgeführt wird:

```js
<!-- comment
console.log("a"); <!-- another comment
console.log("b");
--> More comment
// Logs "a" and "b"
```

`<!--` und `-->` wirken beide wie `//`, d.h. als Beginn von Zeilenkommentaren. `-->` ist nur am Beginn einer Zeile gültig (um Mehrdeutigkeiten mit einem nachfolgenden größer-als-Operator zu vermeiden), während `<!--` überall in der Zeile vorkommen kann.

### RegExp

Die folgenden Eigenschaften sind veraltet. Dies beeinflusst nicht ihre Verwendung in [Ersetzungs-Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace):

- [`$1–$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
  - : Klammerausdrücke, wenn vorhanden.
- [`input`, `$_`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
  - : Der String, gegen den ein regulärer Ausdruck abgeglichen wird.
- [`lastMatch`, `$&`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
  - : Der zuletzt gefundene Teilstring.
- [`lastParen`, `$+`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
  - : Der letzte Klammerausdruck, falls vorhanden.
- [`leftContext`, `` $` ``](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
  - : Der Teilstring, der dem jüngsten Match voransteht.
- [`rightContext`, `$'`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
  - : Der Teilstring, der dem jüngsten Match folgt.

> [!WARNING]
> Vermeiden Sie die Verwendung dieser statischen Eigenschaften, da sie [Probleme bei der Interaktion mit externem Code verursachen können](https://github.com/tc39/proposal-regexp-legacy-features/blob/master/subclass-restriction-motivation.md#legacy-static-properties-regexp1-etc)!

Die Methode {{jsxref("RegExp/compile", "compile()")}} ist veraltet. Konstruieren Sie stattdessen eine neue `RegExp`-Instanz.

Die folgenden Regex-Syntaxen sind veraltet und nur im [Unicode-unaware Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verfügbar. Im Unicode-bewussten Modus sind sie alle Syntaxfehler:

- [Lookahead-Bedingungen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) können [Quantoren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) haben.
- [Backreferences](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference), die sich nicht auf eine bestehende Fängergruppe beziehen, werden zu [veralteten Oktal-Escapes](#escape-sequenzen).
- In [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) werden Zeichenbereiche, bei denen eine Grenze eine Zeichenklasse ist, das `-` zu einem literalen Zeichen.
- Eine nicht erkannte Escape-Sequenz wird zu einem ["Identitäts-Escape"](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).
- Escape-Sequenzen innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) der Form `\cX`, bei denen `X` eine Zahl oder `_` ist, werden auf dieselbe Weise dekodiert wie bei {{Glossary("ASCII", "ASCII")}}-Buchstaben: `\c0` ist dasselbe wie `\cP`, wenn es modulo 32 betrachtet wird. Außerdem wird, wenn ein `\cX` auftritt, bei dem `X` nicht zu den anerkannten Zeichen gehört, der Backslash als literal angesehen.
- Die Sequenz `\k` innerhalb eines Regex, das keine [benannten Fängergruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) hat, wird als Identitäts-Escape behandelt.
- Die Syntaxzeichen `]`, `{` und `}` können [wörtlich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) ohne Escape erscheinen, wenn sie nicht als Ende von Zeichenklassen- oder Quantifizierungsbegrenzer interpretiert werden können.

### Function

- Die {{jsxref("Function/caller", "caller")}}-Eigenschaft von Funktionen und die [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)-Eigenschaft sind veraltet und im strengen Modus nicht verfügbar.
- Anstatt `arguments` als Eigenschaft einer Funktion zuzugreifen, sollten Sie das {{jsxref("Functions/arguments", "arguments")}}-Objekt innerhalb von Funktionsschließungen verwenden.

### Object

- Die [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Zugriffsmethoden sind veraltet. Verwenden Sie stattdessen [`Object.getPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) und [`Object.setPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf). Dies gilt nicht für den `__proto__` literalen Schlüssel in Objektdarstellungen.
- Die Methoden [`Object.prototype.__defineGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`Object.prototype.__defineSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`Object.prototype.__lookupGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) und [`Object.prototype.__lookupSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet. Verwenden Sie stattdessen [`Object.getOwnPropertyDescriptor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) und [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty).

### String

- HTML-Wrapper-Methoden wie {{jsxref("String.prototype.fontsize")}} und {{jsxref("String.prototype.big")}}.
- {{jsxref("String.prototype.substr")}} wird wahrscheinlich nicht bald entfernt, aber sie ist in Anhang B definiert und daher normativ optional.
- `String.prototype.trimLeft` und `String.prototype.trimRight` sollten durch {{jsxref("String.prototype.trimStart")}} und {{jsxref("String.prototype.trimEnd")}} ersetzt werden.

### Date

- Die Methoden {{jsxref("Date/getYear", "getYear()")}} und {{jsxref("Date/setYear", "setYear()")}} sind vom Jahr-2000-Problem betroffen und wurden durch {{jsxref("Date/getFullYear", "getFullYear")}} und {{jsxref("Date/setFullYear", "setFullYear")}} ersetzt.
- Die Methode `toGMTString()` ist veraltet. Verwenden Sie stattdessen {{jsxref("Date/toUTCString", "toUTCString()")}}.

### Escape-Sequenzen

- Oktale Escape-Sequenzen (\ gefolgt von einer, zwei oder drei Oktalziffern) sind in String- und regulären Ausdruckliteralen veraltet.
- Die Funktionen {{jsxref("escape()")}} und {{jsxref("unescape()")}} sind veraltet. Verwenden Sie {{jsxref("encodeURI()")}}, {{jsxref("encodeURIComponent()")}}, {{jsxref("decodeURI()")}} oder {{jsxref("decodeURIComponent()")}}, um Escape-Sequenzen für Sonderzeichen zu kodieren und zu dekodieren.

### Anweisungen

Die [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung ist veraltet und im strengen Modus nicht verfügbar.

Initialisierer in den `var`-Deklarationen von Schleifen-Headern [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) sind veraltet und erzeugen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) im strengen Modus. Der Initialisierungs-Ausdruck wird ausgewertet und der Variable zugewiesen, aber der Wert würde bei der ersten Iteration der Schleife sofort erneut zugewiesen werden.

Normalerweise kann der `catch`-Block einer [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung keine Variablendeklaration mit demselben Namen wie die an `catch()` gebundenen Variablen enthalten. Eine erweiterte Grammatik ermöglicht es dem `catch`-Block, eine mit [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) deklarierte Variable mit demselben Namen wie der `catch`-gebundene Bezeichner zu enthalten, jedoch nur, wenn die `catch`-Bindung ein einfacher Bezeichner ist, kein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring). Die Initialisierung und Zuweisung dieser Variablen würde jedoch nur auf den `catch`-gebundenen Bezeichner wirken, anstelle der übergeordneten Variablen, was verwirrend sein könnte.

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

Dies ist im Anhang B der Spezifikation aufgeführt und daher möglicherweise nicht überall implementiert. Vermeiden Sie Namenskonflikte zwischen dem `catch`-gebundenen Bezeichner und Variablen, die im `catch`-Block deklariert sind.

## Obsolete Funktionen

Diese obsoleten Funktionen wurden vollständig aus JavaScript entfernt und können nicht mehr in der angegebenen JavaScript-Version verwendet werden.

### RegExp

Die folgenden sind nun Eigenschaften von `RegExp`-Instanzen, nicht länger des `RegExp`-Konstruktors:

| Eigenschaft                                                         | Beschreibung                                                                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp/global", "global")}}                               | Ob der reguläre Ausdruck auf alle möglichen Übereinstimmungen in einem String getestet wird oder nur auf die erste. |
| {{jsxref("RegExp/ignoreCase", "ignoreCase")}}                       | Ob Groß- und Kleinschreibung bei einem Match in einem String ignoriert wird.                                        |
| {{jsxref("RegExp/lastIndex", "lastIndex")}}                         | Der Index, bei dem das nächste Match startet.                                                                       |
| {{jsxref("RegExp/multiline", "multiline")}} (auch über `RegExp.$*`) | Ob in Strings über mehrere Zeilen hinweg gesucht wird.                                                              |
| {{jsxref("RegExp/source", "source")}}                               | Der Text des Musters.                                                                                               |

Die `valueOf()`-Methode ist nicht mehr speziell für `RegExp`. Sie verwendet {{jsxref("Object.prototype.valueOf()")}}, welche das Objekt selbst zurückgibt.

### Function

- Die `arity`-Eigenschaft von Funktionen ist obsolet. Verwenden Sie stattdessen [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### Object

| Eigenschaft                  | Beschreibung                                                                                                                        | Alternative                                                                                                                                                                      |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__count__`                  | Gibt die Anzahl der aufzählbaren Eigenschaften eines benutzerdefinierten Objekts zurück.                                            | [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)                                                                                                  |
| `__parent__`                 | Verweist auf den Kontext eines Objekts.                                                                                             | Kein direkter Ersatz                                                                                                                                                             |
| `__iterator__`               | Wird mit [veralteten Iteratoren](#legacy-generator_und_-iterator) verwendet.                                                        | [`Symbol.iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) und die neuen [Iteration-Standards](/de/docs/Web/JavaScript/Reference/Iteration_protocols) |
| `__noSuchMethod__`           | Eine Methode, die aufgerufen wird, wenn eine nicht existente Eigenschaft als Methode aufgerufen wird.                               | {{jsxref("Proxy")}}                                                                                                                                                              |
| `Object.prototype.eval()`    | Bewertet einen String mit JavaScript-Code im Kontext des spezifizierten Objekts.                                                    | Kein direkter Ersatz                                                                                                                                                             |
| `Object.observe()`           | Asynchrones Beobachten von Änderungen an einem Objekt.                                                                              | {{jsxref("Proxy")}}                                                                                                                                                              |
| `Object.unobserve()`         | Entfernt Beobachter.                                                                                                                | {{jsxref("Proxy")}}                                                                                                                                                              |
| `Object.getNotifier()`       | Erstellt ein Benachrichtigungsobjekt, das ermöglicht, eine Änderungsbenachrichtigung mit `Object.observe()` synthetisch auszulösen. | Kein direkter Ersatz                                                                                                                                                             |
| `Object.prototype.watch()`   | Fügt eine Handler-Funktion an eine Eigenschaft an, die aufgerufen wird, wenn der Eigenschaft ein Wert zugewiesen wird.              | {{jsxref("Proxy")}}                                                                                                                                                              |
| `Object.prototype.unwatch()` | Entfernt Überwachungs-Handler von einer Eigenschaft.                                                                                | {{jsxref("Proxy")}}                                                                                                                                                              |

### String

- Nicht standardisierte, generische Methoden für Strings wie `String.slice(myStr, 0, 12)`, `String.replace(myStr, /\./g, "!")`, usw. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 53 als veraltet markiert und in Firefox 68 entfernt. Sie können Methoden auf {{jsxref("String", "String.prototype", "instance_methods")}} zusammen mit {{jsxref("Function.call")}} verwenden.
- `String.prototype.quote` wurde in Firefox 37 entfernt.
- Nicht standardisierter `flags`-Parameter in {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}}, und {{jsxref("String.prototype.replace")}} sind obsolet.

### WeakMap

- `WeakMap.prototype.clear()` wurde in Firefox 20 hinzugefügt und in Firefox 46 entfernt. Es ist nicht möglich, alle Schlüssel in einer [`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) zu durchlaufen.

### Date

- `Date.prototype.toLocaleFormat()`, welches ein Format-String verwendete, der im gleichen Format wie die `strftime()`-Funktion in C erwartet wurde, ist obsolet. Verwenden Sie [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) oder [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).

### Array

- Nicht standardisierte, generische Methoden für Arrays wie `Array.slice(myArr, 0, 12)`, `Array.forEach(myArr, myFn)`, usw. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 68 als veraltet markiert und in Firefox 71 entfernt. Sie können Methoden auf {{jsxref("Array", "Array.prototype", "instance_methods")}} zusammen mit {{jsxref("Function.call")}} verwenden.

| Eigenschaft         | Beschreibung                                     | Alternative         |
| ------------------- | ------------------------------------------------ | ------------------- |
| `Array.observe()`   | Asynchrones Beobachten von Änderungen an Arrays. | {{jsxref("Proxy")}} |
| `Array.unobserve()` | Entfernt Beobachter.                             | {{jsxref("Proxy")}} |

### Number

- `Number.toInteger()` ist obsolet. Verwenden Sie [`Math.floor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), [`Math.round`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) oder andere Methoden.

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

- `for each...in` ist obsolet. Verwenden Sie {{jsxref("Statements/for...of", "for...of")}} stattdessen.
- Let-Blöcke und Let-Ausdrücke sind obsolet.
- Ausdrucksabschlüsse (`function () 1` als Abkürzung für `function () { return 1; }`) sind obsolet. Verwenden Sie reguläre {{jsxref("Operators/function", "functions")}} oder {{jsxref("Functions/Arrow_functions", "arrow functions", "", 1)}} stattdessen.

### Erwerb von Quelltext

Die `toSource()`-Methoden von Arrays, Zahlen, Strings usw. und die `uneval()`-globale Funktion sind obsolet. Verwenden Sie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) oder schreiben Sie Ihre eigene Serialisierungsmethode.

### Legacy-Generator und -Iterator

Legacy-Generator-Funktionsanweisungen und -Ausdrücke wurden entfernt. Die Syntax der alten Generatorfunktionen nutzt das `function`-Schlüsselwort, welches automatisch zu einer Generatorfunktion wird, wenn es ein oder mehrere `yield`-Ausdrücke im Körper gibt — dies ist jetzt ein Syntaxfehler. Verwenden Sie [`function*`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/function*) und [`function*`-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function*) stattdessen.

Array-Komprehensionen und Generator-Komprehensionen sind entfernt.

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

Firefox, vor Version 26, implementierte ein weiteres Iterato-Protokoll, das dem Standard [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) ähnlich ist. Ein Objekt ist ein veralteter Iterator, wenn es eine `next()`-Methode implementiert, die bei jedem Aufruf einen Wert erzeugt und am Ende der Iteration ein `StopIteration`-Objekt auslöst. Dieses veraltete Iterator-Protokoll unterscheidet sich vom Standard-Iterator-Protokoll:

- Der Wert wurde direkt als Rückgabewert von Aufrufen an `next()` zurückgegeben, anstatt der `value`-Eigenschaft des `IteratorResult`-Objekts.
- Die Terminierung der Iteration wurde durch das Werfen eines `StopIteration`-Objekts ausgedrückt, anstelle durch die `done`-Eigenschaft des `IteratorResult`-Objekts.

Diese Funktion wurde zusammen mit dem `StopIteration`-globale Konstruktor in Firefox 58+ entfernt. Für zukunftsgerichtete Verwendungen erwägen Sie, [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen und das [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zu verwenden.

### Sharp-Variablen

Sharp-Variablen sind obsolet. Um zirkuläre Strukturen zu erstellen, verwenden Sie stattdessen temporäre Variablen.
