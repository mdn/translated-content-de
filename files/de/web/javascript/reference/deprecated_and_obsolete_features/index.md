---
title: Veraltete und obsolet gewordene Funktionen
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
l10n:
  sourceCommit: 758299969f63c13d235212f1adff79a649702adf
---

{{jsSidebar("More")}}

Diese Seite listet Funktionen von JavaScript auf, die veraltet sind (d.h. noch verfügbar, aber zur Entfernung vorgesehen) und obsolet (d.h. nicht mehr nutzbar).

## Veraltete Funktionen

Diese veralteten Funktionen können noch verwendet werden, sollten jedoch mit Vorsicht eingesetzt werden, da sie nicht von jeder JavaScript-Engine implementiert werden müssen. Sie sollten darauf hinarbeiten, deren Verwendung aus Ihrem Code zu entfernen.

Einige dieser veralteten Funktionen sind im [Anhang B](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) der ECMAScript-Spezifikation aufgeführt. Dieser Abschnitt wird als normativ optional beschrieben — das heißt, Webbrowser müssen diese Funktionen implementieren, während andere Umgebungen dies nicht müssen. Diese Funktionen sind wahrscheinlich stabil, da ihre Entfernung Kompatibilitätsprobleme verursachen und ältere Websites beeinträchtigen würde. (JavaScript hat das Designziel "break the web nicht".) Dennoch sind sie nicht plattformübergreifend portierbar und werden möglicherweise nicht von allen Analysewerkzeugen unterstützt. Daher wird empfohlen, sie nicht zu verwenden, wie die Einleitung zu Anhang B erklärt:

> … All of the language features and behaviors specified in this annex have one or more undesirable characteristics and in the absence of legacy usage would be removed from this specification. …
>
> ... Programmers should not use or assume the existence of these features and behaviors when writing new ECMAScript code. ...

Einige andere, obwohl im Hauptteil der Spezifikation, sind ebenfalls als normativ optional gekennzeichnet und sollten nicht darauf verlassen werden.

### HTML-Kommentare

JavaScript-Quellcode, wenn er als Skripte geparst wird, erlaubt HTML-ähnliche Kommentare, als ob das Skript Teil eines `<script>`-Tags wäre.

Das Folgende ist gültiges JavaScript, wenn es in einem Webbrowser (oder Node.js, das die V8-Engine nutzt, die Chrome antreibt) ausgeführt wird:

```js
<!-- comment
console.log("a"); <!-- another comment
console.log("b");
--> More comment
// Logs "a" and "b"
```

`<!--` und `-->` agieren beide wie `//`, d.h. sie beginnen Zeilenkommentare. `-->` ist nur zu Beginn einer Zeile gültig (um Mehrdeutigkeiten mit einem Postfix-Decrement gefolgt von einem Größer-als-Operator zu vermeiden), während `<!--` überall in der Zeile auftreten kann.

### RegExp

Die folgenden Eigenschaften sind veraltet. Dies beeinflusst nicht ihre Verwendung in [Ersetzungsstrings](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace):

- [`$1–$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
  - : Klammernde Teilzeichenfolgenübereinstimmungen, falls vorhanden.
- [`input`, `$_`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
  - : Die Zeichenfolge, mit der ein regulärer Ausdruck abgeglichen wird.
- [`lastMatch`, `$&`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
  - : Die zuletzt übereinstimmende Teilzeichenfolge.
- [`lastParen`, `$+`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
  - : Die letzte klammernde Teilzeichenfolgenübereinstimmung, falls vorhanden.
- [`leftContext`, `` $` ``](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
  - : Die Teilzeichenfolge, die dem jüngsten Match vorausgeht.
- [`rightContext`, `$'`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
  - : Die Teilzeichenfolge, die dem jüngsten Match folgt.

> [!WARNING]
> Vermeiden Sie die Verwendung dieser statischen Eigenschaften, da sie [Probleme beim Interagieren mit externem Code verursachen können](https://github.com/tc39/proposal-regexp-legacy-features/blob/master/subclass-restriction-motivation.md#legacy-static-properties-regexp1-etc)!

Die {{jsxref("RegExp/compile", "compile()")}}-Methode ist veraltet. Erstellen Sie stattdessen eine neue `RegExp`-Instanz.

Die folgenden regulären Ausdrücke sind veraltet und nur im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verfügbar. Im Unicode-bewussten Modus führen sie alle zu Syntaxfehlern:

- [Schau-ahead Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) können [Quantoren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) haben.
- [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference), die nicht auf eine bestehende Fanggruppe verweisen, werden zu [Legacy-Oktalen-Esacpes](#escape-sequenzen).
- In [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) werden Zeichenbereiche, bei denen eine Grenze eine Zeichenklasse ist, das `-` zu einem literalen Zeichen.
- Eine nicht erkannte Escape-Sequenz wird zu einem [Identitäts-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).
- Escape-Sequenzen innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) in der Form `\cX`, wobei `X` eine Zahl oder `_` ist, werden in der gleichen Weise decodiert wie diejenigen mit [ASCII](/de/docs/Glossary/ASCII)-Buchstaben: `\c0` ist dasselbe wie `\cP`, wenn man es modulo 32 betrachtet. Zusätzlich wird, wenn die Form `\cX` irgendwo auftritt, wobei `X` nicht eines der anerkannten Zeichen ist, das Backslash als literales Zeichen behandelt.
- Die Sequenz `\k` innerhalb eines regulären Ausdrucks, der keine [benannten Fanggruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) hat, wird als Identitäts-Escape behandelt.
- Die Syntaxzeichen `]`, `{` und `}` können [literally](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) ohne Escaping erscheinen, wenn sie nicht als das Ende einer Zeichenklasse oder Quantifizierer-Delimiter interpretiert werden können.

### Function

- Die {{jsxref("Function/caller", "caller")}}-Eigenschaft von Funktionen und die [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)-Eigenschaft sind veraltet und im strikten Modus nicht verfügbar.
- Statt die `arguments`-Eigenschaft einer Funktion zuzugreifen, sollten Sie das {{jsxref("Functions/arguments", "arguments")}}-Objekt innerhalb von Funktionsschlüssen verwenden.

### Object

- Die Zugriffsmethoden [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) sind veraltet. Verwenden Sie [`Object.getPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) und [`Object.setPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) stattdessen. Dies gilt nicht für den Schlüsselliteral `__proto__` in Objektliteralen.
- Die Methoden [`Object.prototype.__defineGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`Object.prototype.__defineSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`Object.prototype.__lookupGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), und [`Object.prototype.__lookupSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet. Verwenden Sie [`Object.getOwnPropertyDescriptor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) und [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) stattdessen.

### String

- HTML-Umschlagmethoden wie {{jsxref("String.prototype.fontsize")}} und {{jsxref("String.prototype.big")}}.
- {{jsxref("String.prototype.substr")}} wird wahrscheinlich nicht in naher Zukunft entfernt, aber es ist in Anhang B definiert und daher normativ optional.
- `String.prototype.trimLeft` und `String.prototype.trimRight` sollten durch {{jsxref("String.prototype.trimStart")}} und {{jsxref("String.prototype.trimEnd")}} ersetzt werden.

### Date

- Die {{jsxref("Date/getYear", "getYear()")}} und {{jsxref("Date/setYear", "setYear()")}}-Methoden sind vom Jahr-2000-Problem betroffen und wurden durch {{jsxref("Date/getFullYear", "getFullYear")}} und {{jsxref("Date/setFullYear", "setFullYear")}} ersetzt.
- Die `toGMTString()`-Methode ist veraltet. Verwenden Sie stattdessen {{jsxref("Date/toUTCString", "toUTCString()")}}.

### Escape-Sequenzen

- Oktale Escape-Sequenzen (\ gefolgt von einer, zwei oder drei Oktalziffern) sind in String- und regulären Ausdrucksliteralen veraltet.
- Die Funktionen {{jsxref("escape()")}} und {{jsxref("unescape()")}} sind veraltet. Verwenden Sie {{jsxref("encodeURI()")}}, {{jsxref("encodeURIComponent()")}}, {{jsxref("decodeURI()")}}, oder {{jsxref("decodeURIComponent()")}}, um Escape-Sequenzen für Sonderzeichen zu kodieren und zu dekodieren.

### Statements

Der [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Befehl ist veraltet und im strikten Modus nicht verfügbar.

Initialisierer in `var`-Deklarationen von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen-Heads sind veraltet und führen zu [Syntaxfehlern](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) im strikten Modus. Der Initialisierungsausdruck wird ausgewertet und der Variable zugewiesen, aber der Wert würde sofort bei der ersten Iteration der Schleife neu zugewiesen werden.

Normalerweise kann der `catch`-Block eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung keine Variablen enthalten, die denselben Namen wie die im `catch()` gebundenen Variablen haben. Eine Erweiterungsgrammatik erlaubt es jedoch, dass der `catch`-Block eine [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) deklarierte Variable mit demselben Namen wie der `catch`-gebundene Bezeichner enthält, jedoch nur, wenn die `catch`-Bindung ein einfacher Bezeichner und kein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) ist. Diese Variable würde jedoch nur den `catch`-gebundenen Bezeichner initialisieren und zuweisen, anstatt die Variable des übergeordneten Scopes zu beeinflussen, und das Verhalten könnte verwirrend sein.

```js
var a = 2;
try {
  throw 42;
} catch (a) {
  var a = 1; // This 1 is assigned to the caught `a`, not the outer `a`.
}
console.log(a); // 2

try {
  throw 42;
  // Note: identifier changed to `err` to avoid conflict with
  // the inner declaration of `a`.
} catch (err) {
  var a = 1; // This 1 is assigned to the upper-scope `a`.
}
console.log(a); // 1
```

Dies ist im Anhang B der Spezifikation aufgeführt und wird daher möglicherweise nicht überall implementiert. Vermeiden Sie jegliche Namenskonflikte zwischen dem `catch`-gebundenen Bezeichner und in dem `catch`-Block deklarierten Variablen.

## Obsolete Funktionen

Diese obsoleten Funktionen wurden vollständig aus JavaScript entfernt und können nicht mehr verwendet werden ab der angegebenen JavaScript-Version.

### RegExp

Die folgenden sind jetzt Eigenschaften von `RegExp`-Instanzen und nicht mehr des `RegExp`-Konstruktors:

| Property                                                            | Beschreibung                                                                                                                   |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("RegExp/global", "global")}}                               | Ob der reguläre Ausdruck gegen alle möglichen Übereinstimmungen in einer Zeichenfolge getestet wird, oder nur gegen die erste. |
| {{jsxref("RegExp/ignoreCase", "ignoreCase")}}                       | Ob Groß- und Kleinschreibung beim Versuch, eine Übereinstimmung in einer Zeichenfolge zu finden, ignoriert wird.               |
| {{jsxref("RegExp/lastIndex", "lastIndex")}}                         | Der Index, an dem der nächste Abgleich gestartet wird.                                                                         |
| {{jsxref("RegExp/multiline", "multiline")}} (auch über `RegExp.$*`) | Ob in Zeichenketten über mehrere Zeilen gesucht wird.                                                                          |
| {{jsxref("RegExp/source", "source")}}                               | Der Text des Musters.                                                                                                          |

Die `valueOf()`-Methode ist nicht mehr spezialsiert für `RegExp`. Sie nutzt {{jsxref("Object.prototype.valueOf()")}}, was das Objekt selbst zurückgibt.

### Function

- Die `arity`-Eigenschaft von Funktionen ist obsolet. Verwenden Sie stattdessen [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### Object

| Property                     | Beschreibung                                                                                                           | Alternative                                                                                                                                                                       |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__count__`                  | Gibt die Anzahl der auf den Benutzer definierten Objekt direkt zugänglichen aufzählbaren Eigenschaften zurück.         | [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)                                                                                                   |
| `__parent__`                 | Zeigt auf den Kontext eines Objekts.                                                                                   | Keine direkte Entsprechung                                                                                                                                                        |
| `__iterator__`               | Wurde mit [veralteten Iteratoren](#veralteter_generator_und_iterator) verwendet.                                       | [`Symbol.iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) und die neuen [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols) |
| `__noSuchMethod__`           | Eine Methode, die aufgerufen wird, wenn eine nicht existierende Methode als Methode aufgerufen wird.                   | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.prototype.eval()`    | Bewertet einen JavaScript-Code-String im Kontext des angegebenen Objekts.                                              | Keine direkte Entsprechung                                                                                                                                                        |
| `Object.observe()`           | Asynchrones Beobachten der Änderungen an einem Objekt.                                                                 | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.unobserve()`         | Entfernt Beobachter.                                                                                                   | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.getNotifier()`       | Erstellt ein Benachrichtigungsobjekt, das es erlaubt, eine Änderbarkeit synthetisch mit `Object.observe()` auszulösen. | Keine direkte Entsprechung                                                                                                                                                        |
| `Object.prototype.watch()`   | Fügt einem Property einen Handler-Callback hinzu, der aufgerufen wird, wenn das Property zugewiesen wird.              | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.prototype.unwatch()` | Entfernt Beobachtungshandler für ein Property.                                                                         | {{jsxref("Proxy")}}                                                                                                                                                               |

### String

- Nicht standardisierte Methode der String-Generika wie `String.slice(myStr, 0, 12)`, `String.replace(myStr, /\./g, "!")`, usw. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 53 veraltet und in Firefox 68 entfernt. Sie können Methoden auf {{jsxref("String", "String.prototype", "instance_methods")}} zusammen mit {{jsxref("Function.call")}} stattdessen verwenden.
- `String.prototype.quote` wurde aus Firefox 37 entfernt.
- Nicht standardisierte `flags`-Parameter in {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}}, und {{jsxref("String.prototype.replace")}} sind obsolet.

### WeakMap

- `WeakMap.prototype.clear()` wurde in Firefox 20 hinzugefügt und in Firefox 46 entfernt. Es ist nicht möglich, alle Schlüssel in einem [`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) zu traversieren.

### Date

- `Date.prototype.toLocaleFormat()`, das einen Format-String im gleichen Format erwartet, wie es von der Funktion `strftime()` in C erwartet wird, ist obsolet. Verwenden Sie [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) oder [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) stattdessen.

### Array

- Nicht standardisierte Array-Generika-Methoden wie `Array.slice(myArr, 0, 12)`, `Array.forEach(myArr, myFn)`, etc. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 68 veraltet und in Firefox 71 entfernt. Sie können stattdessen Methoden auf {{jsxref("Array", "Array.prototype", "instance_methods")}} zusammen mit {{jsxref("Function.call")}} verwenden.

| Property            | Beschreibung                                     | Alternative         |
| ------------------- | ------------------------------------------------ | ------------------- |
| `Array.observe()`   | Asynchrones Beobachten von Änderungen an Arrays. | {{jsxref("Proxy")}} |
| `Array.unobserve()` | Entfernt Beobachter.                             | {{jsxref("Proxy")}} |

### Number

- `Number.toInteger()` ist obsolet. Verwenden Sie stattdessen [`Math.floor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), [`Math.round`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) oder andere Methoden.

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
- Ausdrucksschließungen (`function () 1` als Kurzform für `function () { return 1; }`) sind obsolet. Verwenden Sie reguläre {{jsxref("Operators/function", "Funktionen")}} oder {{jsxref("Functions/Arrow_functions", "Pfeilfunktionen", "", 1)}} stattdessen.

### Erwerben von Quelltext

Die `toSource()`-Methoden von Arrays, Zahlen, Zeichenketten, usw. und die `uneval()` globale Funktion sind obsolet. Verwenden Sie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) oder schreiben Sie Ihre eigene Serialisierungsmethode.

### Veralteter Generator und Iterator

Veraltete Generatorfunktion-Anweisungen und veraltete Generatorfunktion-Ausdrücke wurden entfernt. Die veraltete Generatorfunktion-Syntax recycelt das `function`-Schlüsselwort, das automatisch zu einer Generatorfunktion wird, wenn es ein oder mehr `yield`-Ausdrücke im Körper gibt - dies ist jetzt ein Syntaxfehler. Verwenden Sie [`function*`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/function*) und [`function*`-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function*) stattdessen.

Array-Kombinationen und Generator-Kombinationen wurden entfernt.

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

Firefox, vor Version 26, implementierte ein anderes Iteratorprotokoll, das dem standardisierten [Iteratorprotokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) ähnlich ist. Ein Objekt ist ein veralteter Iterator, wenn es eine `next()`-Methode implementeiert, die bei jedem Aufruf einen Wert liefert und ein `StopIteration`-Objekt am Ende der Iteration wirft. Dieses veraltete Iteratorprotokoll unterscheidet sich vom standardisierten Iteratorprotokoll:

- Der Wert wurde direkt als Rückgabewert von Aufrufen an `next()` zurückgegeben, anstatt über die `value`-Eigenschaft des `IteratorResult`-Objekts.
- Die Iterationsbeendigung wurde durch das Werfen eines `StopIteration`-Objekts ausgedrückt, anstatt über die `done`-Eigenschaft des `IteratorResult`-Objekts.

Diese Funktion, zusammen mit dem `StopIteration`-globalen Konstruktor, wurde in Firefox 58+ entfernt. Für zukunftsweisende Verwendungen sollten Sie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen und das [Iteratorprotokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) in Betracht ziehen.

### Sharp-Variablen

Sharp-Variablen sind obsolet. Verwenden Sie stattdessen temporäre Variablen, um zirkuläre Strukturen zu erstellen.
