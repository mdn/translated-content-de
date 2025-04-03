---
title: Veraltete und obsolete Funktionen
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Mehr")}}

Diese Seite listet Funktionen von JavaScript auf, die veraltet (d.h. noch verfügbar, aber zur Entfernung vorgesehen) und obsolet sind (d.h. nicht mehr nutzbar).

## Veraltete Funktionen

Diese veralteten Funktionen können noch verwendet werden, sollten jedoch mit Vorsicht eingesetzt werden, da deren Implementierung in keinem JavaScript-Engine garantiert ist. Sie sollten daran arbeiten, deren Nutzung aus Ihrem Code zu entfernen.

Einige dieser veralteten Funktionen sind in Abschnitt [Annex B](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) der ECMAScript-Spezifikation aufgeführt. Dieser Abschnitt ist als normativ optional beschrieben — Web-Browser-Hosts müssen diese Funktionen implementieren, während Nicht-Web-Hosts dies möglicherweise nicht tun. Diese Funktionen sind wahrscheinlich stabil, da ihre Entfernung Rückwärtskompatibilitätsprobleme verursachen und ältere Websites unbrauchbar machen würde. (JavaScript hat das Designziel "Don't break the web".) Sie sind jedoch nicht plattformübergreifend portabel und werden möglicherweise nicht von allen Analysewerkzeugen unterstützt, daher wird empfohlen, sie nicht zu verwenden, wie in der Einleitung von Annex B angegeben:

> … Alle in diesem Anhang beschriebenen Sprachfunktionen und Verhaltensweisen haben ein oder mehrere unerwünschte Merkmale und würden in Abwesenheit von Legacy-Nutzung aus dieser Spezifikation entfernt werden. …
>
> … Programmierer sollten diese Funktionen und Verhaltensweisen nicht verwenden oder deren Existenz voraussetzen, wenn sie neuen ECMAScript-Code schreiben. …

Einige andere, obwohl sie sich im Hauptteil der Spezifikation befinden, sind ebenfalls als normativ optional markiert und sollten nicht angenommen werden.

### HTML-Kommentare

JavaScript-Source, wenn als Skripte geparst, erlaubt HTML-ähnliche Kommentare, als ob das Skript Teil eines `<script>`-Tags wäre.

Das Folgende ist gültiges JavaScript beim Ausführen in einem Web-Browser (oder Node.js, der die V8-Engine verwendet, die Chrome antreibt):

```js
<!-- comment
console.log("a"); <!-- another comment
console.log("b");
--> More comment
// Logs "a" and "b"
```

`<!--` und `-->` beide verhalten sich wie `//`, d.h. sie beginnen Zeilenkommentare. `-->` ist nur am Anfang einer Zeile gültig (um Mehrdeutigkeiten mit einem postfix-Decrement gefolgt von einem Größer-als-Operator zu vermeiden), während `<!--` überall in der Zeile vorkommen kann.

### RegExp

Die folgenden Eigenschaften sind veraltet. Dies beeinflusst nicht ihre Nutzung in [Ersetzungsstrings](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace):

- [`$1–$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
  - : Parenthesierte Teilzeichenfolgen, wenn vorhanden.
- [`input`, `$_`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
  - : Die Zeichenfolge, gegen die ein regulärer Ausdruck gematcht wird.
- [`lastMatch`, `$&`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
  - : Die zuletzt gematchte Teilzeichenfolge.
- [`lastParen`, `$+`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
  - : Der letzte geparenthesierten Teilzeichenfolgentreffer, wenn vorhanden.
- [`leftContext`, `` $` ``](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
  - : Die Teilzeichenfolge vor dem jüngsten Treffer.
- [`rightContext`, `$'`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
  - : Die Teilzeichenfolge nach dem jüngsten Treffer.

> [!WARNING]
> Vermeiden Sie die Verwendung dieser statischen Eigenschaften, da sie [Probleme beim Umgang mit externem Code](https://github.com/tc39/proposal-regexp-legacy-features/blob/master/subclass-restriction-motivation.md#legacy-static-properties-regexp1-etc) verursachen können!

Die Methode {{jsxref("RegExp/compile", "compile()")}} ist veraltet. Konstruieren Sie stattdessen eine neue `RegExp`-Instanz.

Die folgenden regulären Ausdrücke-Syntaxen sind veraltet und nur im [Unicode-unaware mode](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verfügbar. Im Unicode-aware mode sind sie alle Syntaxfehler:

- [Lookahead Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) können [Quantoren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) haben.
- [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference), die sich nicht auf eine vorhandene Erfassen-Gruppe beziehen, werden zu [alten Oktalauswertungen](#escape-sequenzen).
- In [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) ist ein Zeichenbereich, bei dem eine Grenze eine Zeichenklasse ist, das `-` als ein literales Zeichen.
- Eine nicht erkannte Escape-Sequenz wird zu einer ["Identitäts-Escape"](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).
- Escape-Sequenzen innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) der Form `\cX`, wobei `X` eine Zahl oder `_` ist, werden auf die gleiche Weise dekodiert wie diejenigen mit {{Glossary("ASCII", "ASCII")}}-Buchstaben: `\c0` ist dasselbe wie `\cP`, wenn modulo 32 betrachtet. Außerdem, wenn die Form `\cX` irgendwo auftritt, wo `X` nicht zu den anerkannten Zeichen gehört, wird der Backslash als literales Zeichen behandelt.
- Die Sequenz `\k` innerhalb eines Regex, das keine [benannten Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) hat, wird als Identitäts-Escape behandelt.
- Die Syntaxzeichen `]`, `{`, und `}` dürfen [wörtlich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) erscheinen, ohne dass sie maskiert werden, wenn sie nicht als Ende einer Zeichenklasse oder Quantifizierer-Delimiter interpretiert werden können.

### Funktion

- Die {{jsxref("Function/caller", "caller")}}-Eigenschaft von Funktionen und die [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)-Eigenschaft sind veraltet und im Strict-Modus nicht verfügbar.
- Anstelle des Zugriffs auf `arguments` als Eigenschaft einer Funktion sollten Sie das {{jsxref("Functions/arguments", "arguments")}}-Objekt innerhalb von Funktionsabschlüssen verwenden.

### Objekt

- Die [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Accessoren sind veraltet. Verwenden Sie stattdessen [`Object.getPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) und [`Object.setPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf). Dies gilt nicht für den `__proto__`-Schlüssel in objektliteralen.
- Die Methoden [`Object.prototype.__defineGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`Object.prototype.__defineSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`Object.prototype.__lookupGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), und [`Object.prototype.__lookupSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet. Verwenden Sie stattdessen [`Object.getOwnPropertyDescriptor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) und [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty).

### String

- HTML-Wrapper-Methoden wie {{jsxref("String.prototype.fontsize")}} und {{jsxref("String.prototype.big")}}.
- {{jsxref("String.prototype.substr")}} wird wahrscheinlich nicht so bald entfernt, aber es ist in Annex B definiert und daher normativ optional.
- `String.prototype.trimLeft` und `String.prototype.trimRight` sollten durch {{jsxref("String.prototype.trimStart")}} und {{jsxref("String.prototype.trimEnd")}} ersetzt werden.

### Datum

- Die Methoden {{jsxref("Date/getYear", "getYear()")}} und {{jsxref("Date/setYear", "setYear()")}} sind vom Jahr-2000-Problem betroffen und wurden durch {{jsxref("Date/getFullYear", "getFullYear")}} und {{jsxref("Date/setFullYear", "setFullYear")}} ersetzt.
- Die `toGMTString()`-Methode ist veraltet. Verwenden Sie stattdessen {{jsxref("Date/toUTCString", "toUTCString()")}}.

### Escape-Sequenzen

- Oktale Escape-Sequenzen (\ gefolgt von einer, zwei oder drei Oktalziffern) sind in String- und regulären Ausdruck-Literalen veraltet.
- Die Funktionen {{jsxref("escape()")}} und {{jsxref("unescape()")}} sind veraltet. Verwenden Sie {{jsxref("encodeURI()")}}, {{jsxref("encodeURIComponent()")}}, {{jsxref("decodeURI()")}}, oder {{jsxref("decodeURIComponent()")}}, um Escape-Sequenzen für Sonderzeichen zu kodieren und zu dekodieren.

### Anweisungen

Die [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung ist veraltet und im Strict-Modus nicht verfügbar.

Initialisierer in `var`-Deklarationen von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen-Headern sind veraltet und führen im Strict-Modus zu [Syntaxfehlern](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer). Der Initialisierer-Ausdruck wird ausgewertet und der Variable zugewiesen, aber der Wert wird sofort bei der ersten Iteration der Schleife neu zugewiesen.

Normalerweise kann der `catch`-Abschnitt einer [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung keine Variablendeklarationen mit demselben Namen wie die im `catch()` gebundenen Variablen enthalten. Eine Erweiterungsgrammatik ermöglicht es dem `catch`-Abschnitt, eine [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) deklarierte Variable mit demselben Namen wie dem `catch`-gebundenen Identifikator zu enthalten, aber nur, wenn die `catch`-Bindung ein einfacher Identifikator und kein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) ist. Allerdings würde die Initialisierung und Zuweisung dieser Variablen nur auf den `catch`-gebundenen Identifikator wirken, anstatt auf die obere Variablenebene, und das Verhalten könnte verwirrend sein.

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

Dies ist in Annex B der Spezifikation aufgeführt und kann daher nicht überall implementiert sein. Vermeiden Sie jegliche Namenskonflikte zwischen dem `catch`-gebundenen Identifikator und in dem `catch`-Block deklarierten Variablen.

## Obsolete Funktionen

Diese obsoleten Funktionen wurden vollständig aus JavaScript entfernt und können ab der angegebenen JavaScript-Version nicht mehr verwendet werden.

### RegExp

Die folgenden sind jetzt Eigenschaften von `RegExp`-Instanzen, nicht mehr des `RegExp`-Konstruktors:

| Eigenschaft                                                         | Beschreibung                                                                                                            |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp/global", "global")}}                               | Ob der reguläre Ausdruck gegen alle möglichen Übereinstimmungen in einem String getestet wird oder nur gegen die erste. |
| {{jsxref("RegExp/ignoreCase", "ignoreCase")}}                       | Ob die Groß- und Kleinschreibung während eines Suchvorgangs ignoriert wird.                                             |
| {{jsxref("RegExp/lastIndex", "lastIndex")}}                         | Der Index, an dem der nächste Suchvorgang beginnen soll.                                                                |
| {{jsxref("RegExp/multiline", "multiline")}} (auch über `RegExp.$*`) | Ob in Strings über mehrere Zeilen hinweg gesucht werden soll.                                                           |
| {{jsxref("RegExp/source", "source")}}                               | Der Text des Musters.                                                                                                   |

Die Methode `valueOf()` ist nicht mehr speziell für `RegExp`. Sie verwendet {{jsxref("Object.prototype.valueOf()")}}, die sich selbst zurückgibt.

### Funktion

- Die `arity`-Eigenschaft von Funktionen ist obsolet. Verwenden Sie stattdessen [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### Objekt

| Eigenschaft                  | Beschreibung                                                                                                                   | Alternative                                                                                                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__count__`                  | Gibt die Anzahl der direkt auf einem benutzerdefinierten Objekt vorhandenen aufzählbaren Eigenschaften zurück.                 | [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)                                                                                                   |
| `__parent__`                 | Zeigt auf den Kontext eines Objekts.                                                                                           | Keine direkte Ersatzlösung                                                                                                                                                        |
| `__iterator__`               | Wird mit [Legacy-Iteratoren](#legacy-generator_und_iterator) verwendet.                                                        | [`Symbol.iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) und die neuen [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols) |
| `__noSuchMethod__`           | Eine Methode, die aufgerufen wird, wenn eine nicht vorhandene Eigenschaft als Methode aufgerufen wird.                         | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.prototype.eval()`    | Führt einen String aus JavaScript-Code im Kontext des angegebenen Objekts aus.                                                 | Keine direkte Ersatzlösung                                                                                                                                                        |
| `Object.observe()`           | Asynchrones Beobachten von Änderungen an einem Objekt.                                                                         | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.unobserve()`         | Entfernt Beobachter.                                                                                                           | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.getNotifier()`       | Erstellt ein Notifizierungsobjekt, das es ermöglicht, beobachtbare Änderungen mit `Object.observe()` synthetisch auszulösen.   | Keine direkte Ersatzlösung                                                                                                                                                        |
| `Object.prototype.watch()`   | Eine Handler-Rückruffunktion an eine Eigenschaft anhängen, die aufgerufen wird, wenn der Eigenschaft ein Wert zugewiesen wird. | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.prototype.unwatch()` | Entfernt `watch`-Handler bei einer Eigenschaft.                                                                                | {{jsxref("Proxy")}}                                                                                                                                                               |

### String

- Nicht-standardisierte generische String-Methoden wie `String.slice(myStr, 0, 12)`, `String.replace(myStr, /\./g, "!")` etc. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 53 veraltet und in Firefox 68 entfernt. Sie können Methoden auf {{jsxref("String", "String.prototype", "instanz_methoden")}} zusammen mit {{jsxref("Function.call")}} verwenden.
- `String.prototype.quote` wurde in Firefox 37 entfernt.
- Nicht-standardisierter `flags`-Parameter in {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}}, und {{jsxref("String.prototype.replace")}} sind obsolet.

### WeakMap

- `WeakMap.prototype.clear()` wurde in Firefox 20 hinzugefügt und in Firefox 46 entfernt. Es ist nicht möglich, alle Schlüssel in einem [`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) zu durchsuchen.

### Datum

- `Date.prototype.toLocaleFormat()`, das eine Formatzeichenkette im selben Format wie die `strftime()`-Funktion in C verwendete, ist obsolet. Verwenden Sie [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) oder [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) stattdessen.

### Array

- Nicht-standardisierte generische Array-Methoden wie `Array.slice(myArr, 0, 12)`, `Array.forEach(myArr, myFn)` etc. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 68 veraltet und in Firefox 71 entfernt. Sie können Methoden auf {{jsxref("Array", "Array.prototype", "instanz_methoden")}} zusammen mit {{jsxref("Function.call")}} verwenden.

| Eigenschaft         | Beschreibung                                     | Alternative         |
| ------------------- | ------------------------------------------------ | ------------------- |
| `Array.observe()`   | Asynchrones Beobachten von Änderungen an Arrays. | {{jsxref("Proxy")}} |
| `Array.unobserve()` | Entfernt Beobachter.                             | {{jsxref("Proxy")}} |

### Number

- `Number.toInteger()` ist obsolet. Verwenden Sie stattdessen [`Math.floor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), [`Math.round`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round), oder andere Methoden.

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
- Ausdrucksabschlüsse (`function () 1` als Abkürzung für `function () { return 1; }`) sind obsolet. Verwenden Sie reguläre {{jsxref("Operators/function", "Funktionen")}} oder {{jsxref("Functions/Arrow_functions", "Pfeilfunktionen", "", 1)}} stattdessen.

### Erhalt von Quelltext

Die `toSource()`-Methoden für Arrays, Zahlen, Strings usw. und die globale Funktion `uneval()` sind obsolet. Verwenden Sie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString), oder schreiben Sie Ihre eigene Serialisierungsmethode.

### Legacy-Generator und Iterator

Legacy-Generator-Funktionsanweisungen und Legacy-Generator-Funktionsausdrücke wurden entfernt. Die Legacy-Generator-Funktionssyntax nutzt das `function`-Schlüsselwort, das automatisch zu einer Generator-Funktion wird, wenn es eine oder mehrere `yield`-Ausdrücke im Körper gibt — das ist jetzt ein Syntaxfehler. Verwenden Sie [`function*`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/function*) und [`function*`-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function*) stattdessen.

Array-Kompromisse und Generator-Kompromisse sind entfernt.

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

Firefox implementierte vor Version 26 ein anderes Iterator-Protokoll, das dem Standard-Protokoll [Iterator protocol](/de/docs/Web/JavaScript/Reference/Iteration_protocols) ähnlich ist. Ein Objekt ist ein Legacy-Iterator, wenn es eine Methode `next()` implementiert, die bei jedem Aufruf einen Wert erzeugt und am Ende der Iteration ein `StopIteration`-Objekt wirft. Dieses Legacy-Iterator-Protokoll unterscheidet sich vom Standard-Iterator-Protokoll:

- Der Wert wurde direkt als Rückgabewert von Aufrufen an `next()` zurückgegeben, anstatt die `value`-Eigenschaft des `IteratorResult`-Objekts.
- Der Abschluss der Iteration wurde durch das Werfen eines `StopIteration`-Objekts ausgedrückt, anstatt durch die `done`-Eigenschaft des `IteratorResult`-Objekts.

Dieses Feature, zusammen mit dem globalen Konstruktor `StopIteration`, wurde in Firefox 58+ entfernt. Für zukunftsorientierte Anwendungen ziehen Sie in Betracht, [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen und das [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zu verwenden.

### Scharfe Variablen

Scharfe Variablen sind veraltet. Um zirkuläre Strukturen zu erstellen, verwenden Sie stattdessen temporäre Variablen.
