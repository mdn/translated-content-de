---
title: Veraltete und obsoleszente Funktionen
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
l10n:
  sourceCommit: 758299969f63c13d235212f1adff79a649702adf
---

{{jsSidebar("More")}}

Diese Seite listet Funktionen von JavaScript auf, die veraltet sind (d.h. noch verfügbar, aber zur Entfernung geplant) und obsolet sind (d.h. nicht mehr nutzbar).

## Veraltete Funktionen

Diese veralteten Funktionen können noch verwendet werden, sollten jedoch mit Vorsicht eingesetzt werden, da sie nicht von jeder JavaScript-Engine implementiert werden müssen. Sie sollten daran arbeiten, deren Verwendung aus Ihrem Code zu entfernen.

Einige dieser veralteten Funktionen sind im [Anhang B](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) der ECMAScript-Spezifikation aufgeführt. Dieser Abschnitt wird als normativ optional beschrieben - d.h. Webbrowser-Hosts müssen diese Funktionen implementieren, während Nicht-Web-Hosts dies möglicherweise nicht tun. Diese Funktionen sind wahrscheinlich stabil, da ihre Entfernung Rückwärtskompatibilitätsprobleme verursachen und alte Webseiten beeinträchtigen würde. (JavaScript hat das Designziel "bruch der Web-Kompatibilität vermeiden".) Dennoch sind sie nicht plattformübergreifend portabel und werden möglicherweise nicht von allen Analysetools unterstützt, daher wird Ihnen geraten, sie nicht zu verwenden, wie die Einführung von Anhang B besagt:

> … Alle in diesem Anhang spezifizierten Sprachfunktionen und Verhaltensweisen haben ein oder mehrere unerwünschte Merkmale und würden in Abwesenheit von Legacy-Nutzung aus dieser Spezifikation entfernt werden. …
>
> … Programmierer sollten diese Funktionen und Verhaltensweisen beim Schreiben neuer ECMAScript-Codes nicht verwenden oder deren Existenz annehmen. …

Einige andere, obwohl im Hauptkorpus der Spezifikation, sind ebenfalls als normativ optional markiert und sollten nicht verwendet werden.

### HTML-Kommentare

JavaScript-Quellcode, wenn er als Skripte geparst wird, erlaubt HTML-ähnliche Kommentare, als ob das Skript Teil eines `<script>`-Tags wäre.

Folgendes ist gültiges JavaScript, wenn es in einem Webbrowser (oder Node.js, das die V8-Engine von Chrome nutzt) ausgeführt wird:

```js
<!-- comment
console.log("a"); <!-- another comment
console.log("b");
--> More comment
// Logs "a" and "b"
```

`<!--` und `-->` verhalten sich beide wie `//`, d.h. sie beginnen Zeilenkommentare. `-->` ist nur am Anfang einer Zeile gültig (um Mehrdeutigkeiten mit einem Postfix-Decrement gefolgt von einem Größer-als-Operator zu vermeiden), während `<!--` überall in der Zeile auftreten kann.

### RegExp

Die folgenden Eigenschaften sind veraltet. Dies beeinflusst nicht ihre Verwendung in [Ersetzungsstrings](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace):

- [`$1–$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
  - : Klammerbegrenzte Teilzeichenfolgenübereinstimmungen, falls vorhanden.
- [`input`, `$_`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
  - : Die Zeichenfolge, gegen die ein regulärer Ausdruck gematcht wird.
- [`lastMatch`, `$&`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
  - : Die zuletzt gematchte Teilzeichenfolge.
- [`lastParen`, `$+`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
  - : Die zuletzt geklammerte Teilzeichenfolge, falls vorhanden.
- [`leftContext`, `` $` ``](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
  - : Die Teilzeichenfolge vor dem neusten Match.
- [`rightContext`, `$'`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
  - : Die Teilzeichenfolge nach dem neusten Match.

> [!WARNING]
> Vermeiden Sie die Verwendung dieser statischen Eigenschaften, da sie [Probleme bei der Interaktion mit externem Code](https://github.com/tc39/proposal-regexp-legacy-features/blob/master/subclass-restriction-motivation.md#legacy-static-properties-regexp1-etc) verursachen können!

Die {{jsxref("RegExp/compile", "compile()")}}-Methode ist veraltet. Erstellen Sie stattdessen eine neue `RegExp`-Instanz.

Die folgenden Regex-Syntaxen sind veraltet und nur im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verfügbar. Im Unicode-bewussten Modus sind sie alle Syntaxfehler:

- [Lookahead-Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) können [Quantifizierer](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) haben.
- [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference), die sich nicht auf eine bestehende fangende Gruppe beziehen, werden zu [alten oktalen Escapes](#escape-sequenzen).
- In [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) wird die Zeichenspanne, bei der eine Grenze eine Zeichenklasse ist, der `-` zu einem wörtlichen Zeichen.
- Eine Escape-Sequenz, die nicht erkannt wird, wird zu einem ["Identitäts-Escape"](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).
- Escape-Sequenzen innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) in der Form `\cX`, bei der `X` eine Zahl oder `_` ist, werden in der gleichen Weise dekodiert wie solche mit {{Glossary("ASCII", "ASCII")}}-Buchstaben: `\c0` ist dasselbe wie `\cP`, wenn man es modulo 32 nimmt. Zusätzlich, wenn die Form `\cX` angetroffen wird, wo `X` nicht einer der anerkannten Zeichen ist, dann wird der Backslash als wörtliches Zeichen behandelt.
- Die Sequenz `\k` innerhalb eines Regex, das keine [benannten fangenden Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) hat, wird als Identitäts-Escape behandelt.
- Die Syntaxzeichen `]`, `{`, und `}` können [wörtlich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) ohne Escape erscheinen, wenn sie nicht als Ende einer Zeichenklasse oder Quantifizierergrenzen interpretiert werden können.

### Funktion

- Die {{jsxref("Function/caller", "caller")}}-Eigenschaft von Funktionen und die [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)-Eigenschaft sind veraltet und im Strict-Modus nicht verfügbar.
- Anstatt auf `arguments` als Eigenschaft einer Funktion zuzugreifen, sollten Sie das {{jsxref("Functions/arguments", "arguments")}}-Objekt innerhalb von Funktionsclosure verwenden.

### Objekt

- Die [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Zugreifer sind veraltet. Verwenden Sie [`Object.getPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) und [`Object.setPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) stattdessen. Dies gilt nicht für den `__proto__`-Literal-Schlüssel in Objektliteralen.
- Die Methoden [`Object.prototype.__defineGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`Object.prototype.__defineSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`Object.prototype.__lookupGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), und [`Object.prototype.__lookupSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet. Verwenden Sie stattdessen [`Object.getOwnPropertyDescriptor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) und [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty).

### String

- HTML-Wrapper-Methoden wie {{jsxref("String.prototype.fontsize")}} und {{jsxref("String.prototype.big")}}.
- {{jsxref("String.prototype.substr")}} wird wahrscheinlich nicht so bald entfernt, aber es ist in Anhang B definiert und somit normativ optional.
- `String.prototype.trimLeft` und `String.prototype.trimRight` sollten durch {{jsxref("String.prototype.trimStart")}} und {{jsxref("String.prototype.trimEnd")}} ersetzt werden.

### Datum

- Die Methoden {{jsxref("Date/getYear", "getYear()")}} und {{jsxref("Date/setYear", "setYear()")}} sind vom Jahr-2000-Problem betroffen und wurden durch {{jsxref("Date/getFullYear", "getFullYear")}} und {{jsxref("Date/setFullYear", "setFullYear")}} ersetzt.
- Die Methode `toGMTString()` ist veraltet. Verwenden Sie stattdessen {{jsxref("Date/toUTCString", "toUTCString()")}}.

### Escape-Sequenzen

- Oktal-Escape-Sequenzen (\ gefolgt von einer, zwei oder drei oktalen Ziffern) sind in Zeichenketten- und regulären Ausdruck-Literalen veraltet.
- Die Funktionen {{jsxref("escape()")}} und {{jsxref("unescape()")}} sind veraltet. Verwenden Sie {{jsxref("encodeURI()")}}, {{jsxref("encodeURIComponent()")}}, {{jsxref("decodeURI()")}}, oder {{jsxref("decodeURIComponent()")}}, um Escape-Sequenzen für Sonderzeichen zu kodieren und zu dekodieren.

### Anweisungen

Die [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung ist veraltet und im Strict-Modus nicht verfügbar.

Initialisierer in `var`-Deklarationen von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifenheadern sind veraltet und produzieren [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) im Strict-Modus. Der Initialisierungsausdruck wird ausgewertet und der Variablen zugewiesen, aber der Wert wird bei der ersten Iteration der Schleife sofort neu zugewiesen.

Normalerweise darf der `catch`-Block einer [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung keine Variablenerklärung mit demselben Namen wie die im `catch()` gebundenen Variablen enthalten. Eine Erweiterungsgrammatik erlaubt dem `catch`-Block, eine [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-deklarierte Variable mit demselben Namen wie der im `catch` gebundenen Identifikator zu enthalten, aber nur, wenn die `catch`-Bindung ein einfacher Identifikator ist, kein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). Diese Variableinitialisierung und -zuweisung würde jedoch nur auf den im `catch` gebundenen Identifikator wirken, anstatt auf die übergeordnete Scope-Variable, und das Verhalten könnte verwirrend sein.

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

Dies ist im Anhang B der Spezifikation aufgeführt und daher möglicherweise nicht überall implementiert. Vermeiden Sie Namenskonflikte zwischen dem im `catch` gebundenen Identifikator und Variablen, die im `catch`-Block deklariert sind.

## Obsolet gewordene Funktionen

Diese obsolet gewordenen Funktionen wurden vollständig aus JavaScript entfernt und können nicht mehr ab der angegebenen Version von JavaScript verwendet werden.

### RegExp

Die folgenden Eigenschaften sind nun Eigenschaften von `RegExp`-Instanzen, nicht länger des `RegExp`-Konstruktors:

| Eigenschaft                                                         | Beschreibung                                                                                                            |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp/global", "global")}}                               | Ob der reguläre Ausdruck gegen alle möglichen Übereinstimmungen in einem String getestet wird oder nur gegen die erste. |
| {{jsxref("RegExp/ignoreCase", "ignoreCase")}}                       | Ob die Groß-/Kleinschreibung beim Versuch eines Matches in einem String ignoriert wird.                                 |
| {{jsxref("RegExp/lastIndex", "lastIndex")}}                         | Der Index, an dem der nächste Match beginnt.                                                                            |
| {{jsxref("RegExp/multiline", "multiline")}} (auch über `RegExp.$*`) | Ob in Strings über mehrere Zeilen hinweg gesucht wird.                                                                  |
| {{jsxref("RegExp/source", "source")}}                               | Der Text des Musters.                                                                                                   |

Die `valueOf()`-Methode ist nicht länger für `RegExp` spezifiziert. Sie verwendet {{jsxref("Object.prototype.valueOf()")}}, was sich selbst zurückgibt.

### Funktion

- Funktionen `arity`-Eigenschaft ist obsolet. Verwenden Sie stattdessen [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### Objekt

| Eigenschaft                  | Beschreibung                                                                                                                       | Alternative                                                                                                                                                                       |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__count__`                  | Gibt die Anzahl der direkt auf einem benutzerdefinierten Objekt vorhandenen aufzählbaren Eigenschaften zurück.                     | [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)                                                                                                   |
| `__parent__`                 | Zeigt auf den Kontext eines Objekts.                                                                                               | Keine direkte Alternative                                                                                                                                                         |
| `__iterator__`               | Wird mit [Legacy-Iteratoren](#legacy-generator_und_-iterator) verwendet.                                                           | [`Symbol.iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) und die neuen [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols) |
| `__noSuchMethod__`           | Eine Methode, die aufgerufen wird, wenn eine nicht existierende Eigenschaft als Methode aufgerufen wird.                           | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.prototype.eval()`    | Ausführt einen JavaScript-String im Kontext des angegebenen Objekts.                                                               | Keine direkte Alternative                                                                                                                                                         |
| `Object.observe()`           | Asynchrones Beobachten der Änderungen an einem Objekt.                                                                             | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.unobserve()`         | Entfernt Beobachter.                                                                                                               | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.getNotifier()`       | Erstellt ein Benachrichtigungsobjekt, das es ermöglicht, eine synthetische Änderungsbeobachtung mit `Object.observe()` auszulösen. | Keine direkte Alternative                                                                                                                                                         |
| `Object.prototype.watch()`   | Hängt einen Handler-Callback an eine Eigenschaft an, der aufgerufen wird, wenn die Eigenschaft zugewiesen wird.                    | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.prototype.unwatch()` | Entfernt Überwachungs-Handler für eine Eigenschaft.                                                                                | {{jsxref("Proxy")}}                                                                                                                                                               |

### String

- Nicht standardisierte String-generische Methoden wie `String.slice(myStr, 0, 12)`, `String.replace(myStr, /\./g, "!")`, usw. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 53 veraltet und in Firefox 68 entfernt. Sie können Methoden auf {{jsxref("String", "String.prototype", "instance_methods")}} zusammen mit {{jsxref("Function.call")}} verwenden.
- `String.prototype.quote` wurde aus Firefox 37 entfernt.
- Nicht standardisierte `flags`-Parameter in {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}}, und {{jsxref("String.prototype.replace")}} sind obsolet.

### WeakMap

- `WeakMap.prototype.clear()` wurde in Firefox 20 hinzugefügt und in Firefox 46 entfernt. Es ist nicht möglich, alle Schlüssel in einem [`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) zu durchlaufen.

### Datum

- `Date.prototype.toLocaleFormat()`, das einen Formatstring im gleichen Format erwartete wie die `strftime()`-Funktion in C, ist obsolet. Verwenden Sie [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) oder [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) stattdessen.

### Array

- Nicht standardisierte Array-generische Methoden wie `Array.slice(myArr, 0, 12)`, `Array.forEach(myArr, myFn)`, usw. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 68 veraltet und in Firefox 71 entfernt. Sie können Methoden auf {{jsxref("Array", "Array.prototype", "instance_methods")}} zusammen mit {{jsxref("Function.call")}} verwenden.

| Eigenschaft         | Beschreibung                                     | Alternative         |
| ------------------- | ------------------------------------------------ | ------------------- |
| `Array.observe()`   | Asynchrones Beobachten von Änderungen an Arrays. | {{jsxref("Proxy")}} |
| `Array.unobserve()` | Entfernt Beobachter.                             | {{jsxref("Proxy")}} |

### Number

- `Number.toInteger()` ist obsolet. Verwenden Sie [`Math.floor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), [`Math.round`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) oder andere Methoden stattdessen.

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
- Ausdrucksschlüsse (`function () 1` als Kurzform von `function () { return 1; }`) sind obsolet. Verwenden Sie reguläre {{jsxref("Operators/function", "Funktionen")}} oder {{jsxref("Functions/Arrow_functions", "Pfeilfunktionen", "", 1)}} stattdessen.

### Ermittlung von Quelltext

Die `toSource()`-Methoden von Arrays, Zahlen, Strings usw. und die globale `uneval()`-Funktion sind obsolet. Verwenden Sie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString), oder schreiben Sie Ihre eigene Serialisierungsmethode stattdessen.

### Legacy-Generator und -Iterator

Alte Generatorfunktion-Anweisungen und alte Generatorfunktion-Ausdrücke wurden entfernt. Die alte Generatorfunktionssyntax wiederverwendet das Schlüsselwort `function`, das automatisch zu einer Generatorfunktion wird, wenn sich im Körper eine oder mehrere `yield`-Ausdrücke befinden – dies ist jetzt ein Syntaxfehler. Verwenden Sie stattdessen [`function*`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/function*) und [`function*`-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function*).

Array-Komprehensionen und Generator-Komprehensionen wurden entfernt.

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

Firefox, vor Version 26, implementierte ein weiteres Iteratorprotokoll, das dem Standard-Iteratorprotokoll ähnlich ist. Ein Objekt ist ein alter Iterator, wenn es eine `next()`-Methode implementiert, die bei jedem Aufruf einen Wert produziert und am Ende der Iteration ein `StopIteration`-Objekt wirft. Dieses alte Iteratorprotokoll unterscheidet sich vom Standard-Iteratorprotokoll:

- Der Wert wurde direkt als Rückgabewert von Aufrufen an `next()` zurückgegeben, anstatt in der `value`-Eigenschaft des `IteratorResult`-Objekts.
- Die Terminierung der Iteration wurde ausgedrückt, indem ein `StopIteration`-Objekt geworfen wurde, anstatt durch die `done`-Eigenschaft des `IteratorResult`-Objekts.

Dieses Feature, zusammen mit dem globalen `StopIteration`-Konstruktor, wurde in Firefox 58 + entfernt. Für zukunftsorientierte Anwendungen sollten Sie in Erwägung ziehen, [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen und das [Iteratorprotokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zu verwenden.

### Scharfe Variablen

Scharfe Variablen sind obsolet. Um kreisförmige Strukturen zu erstellen, verwenden Sie stattdessen temporäre Variablen.
