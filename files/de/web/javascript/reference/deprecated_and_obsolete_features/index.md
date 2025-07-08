---
title: Veraltete und obsolet gewordene Funktionen
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Diese Seite listet Funktionen von JavaScript auf, die veraltet (d.h. noch vorhanden, aber zur Entfernung vorgesehen) und obsolet (d.h. nicht mehr nutzbar) sind.

## Veraltete Funktionen

Diese veralteten Funktionen können noch verwendet werden, sollten jedoch mit Vorsicht eingesetzt werden, da sie nicht von jedem JavaScript-Motor implementiert werden müssen. Sie sollten daran arbeiten, deren Verwendung aus Ihrem Code zu entfernen.

Einige dieser veralteten Funktionen sind im Abschnitt [Anhang B](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) der ECMAScript-Spezifikation aufgeführt. Dieser Abschnitt wird als normative optional beschrieben — das heißt, Webbrowser-Hosts müssen diese Funktionen implementieren, während nicht-webbasierte Hosts dies möglicherweise nicht tun. Diese Funktionen sind wahrscheinlich stabil, da ihre Entfernung Rückwärtskompatibilitätsprobleme verursachen und alte Websites beeinträchtigen würde. (JavaScript hat das Designziel „das Web nicht brechen“.) Dennoch sind sie nicht plattformübergreifend portabel und möglicherweise nicht von allen Analysetools unterstützt, daher wird empfohlen, sie nicht zu verwenden, wie die Einleitung von Anhang B besagt:

> … Alle in diesem Anhang spezifizierten Sprachfunktionen und Verhaltensweisen haben eine oder mehrere unerwünschte Eigenschaften und würden in Ermangelung von Altverwendungen aus dieser Spezifikation entfernt werden. ...
>
> … Programmierer sollten diese Funktionen und Verhaltensweisen nicht verwenden oder ihre Existenz annehmen, wenn sie neuen ECMAScript-Code schreiben. ...

Einige andere, obwohl im Hauptkörper der Spezifikation, sind ebenfalls als normative optional markiert und sollten nicht verwendet werden.

### HTML-Kommentare

JavaScript-Quellcode, wenn als Skripte geparst, erlaubt HTML-ähnliche Kommentare, als ob das Skript Teil eines `<script>`-Tags wäre.

Das Folgende ist gültiges JavaScript, wenn es in einem Webbrowser (oder Node.js, das die V8-Engine von Chrome nutzt) ausgeführt wird:

```js
<!-- comment
console.log("a"); <!-- another comment
console.log("b");
--> More comment
// Logs "a" and "b"
```

`<!--` und `-->` wirken beide wie `//`, d.h. sie beginnen Zeilenkommentare. `-->` ist nur am Anfang einer Zeile gültig (um Mehrdeutigkeiten mit einem Postfix-Decrement gefolgt von einem Größer-als-Operator zu vermeiden), während `<!--` überall in der Zeile auftreten kann.

### RegExp

Die folgenden Eigenschaften sind veraltet. Dies beeinträchtigt nicht ihre Verwendung in [Ersatz-Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace):

- [`$1–$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
  - : Klammerausdrücke-Übereinstimmungen, falls vorhanden.
- [`input`, `$_`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
  - : Der String, gegen den ein regulärer Ausdruck abgeglichen wird.
- [`lastMatch`, `$&`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
  - : Der zuletzt abgeglichene Teilstring.
- [`lastParen`, `$+`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
  - : Der letzte klammernde Teilstring-Abgleich, falls vorhanden.
- [`leftContext`, `` $` ``](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
  - : Der Teilstring, der dem neuesten Abgleich vorausgeht.
- [`rightContext`, `$'`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
  - : Der Teilstring, der dem neuesten Abgleich folgt.

> [!WARNING]
> Vermeiden Sie die Verwendung dieser statischen Eigenschaften, da sie [Probleme beim Interagieren mit externem Code verursachen können](https://github.com/tc39/proposal-regexp-legacy-features/blob/master/subclass-restriction-motivation.md#legacy-static-properties-regexp1-etc)!

Die Methode {{jsxref("RegExp/compile", "compile()")}} ist veraltet. Erstellen Sie stattdessen eine neue Instanz von `RegExp`.

Die folgenden Regex-Syntaxen sind veraltet und nur im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verfügbar. Im Unicode-bewussten Modus sind sie alle Syntaxfehler:

- [Lookahead-Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) können [Quantoren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) haben.
- [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference), die sich nicht auf eine bestehende Klammergruppe beziehen, werden zu [alten oktalen Escapezeichen](#escape-sequenzen).
- In [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) wird ein Zeichenbereich, bei dem eine Grenze eine Zeichenklasse ist, das `-` zu einem literalen Zeichen.
- Eine nicht erkannte Escape-Sequenz wird zu einem ["Identitäts-Escape"](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).
- Escape-Sequenzen innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) der Form `\cX`, bei denen `X` eine Zahl oder `_` ist, werden auf die gleiche Weise dekodiert wie solche mit {{Glossary("ASCII", "ASCII")}}-Buchstaben: `\c0` ist dasselbe wie `\cP`, wenn es modulo 32 genommen wird. Wenn die Form `\cX` jedoch irgendwo auftritt, wo `X` nicht zu den anerkannten Zeichen gehört, wird der Backslash als literales Zeichen behandelt.
- Die Sequenz `\k` innerhalb eines Regex, das keine [benannten Klammergruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) hat, wird als Identitäts-Escape behandelt.
- Die Syntaxzeichen `]`, `{` und `}` können [buchstäblich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) erscheinen, ohne dass sie maskiert werden müssen, wenn sie nicht als Ende einer Zeichenklasse oder Quantifizierer-Grenze interpretiert werden können.

### Function

- Die {{jsxref("Function/caller", "caller")}}-Eigenschaft von Funktionen und die [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)-Eigenschaft sind veraltet und im Strikten Modus nicht verfügbar.
- Anstatt auf `arguments` als Eigenschaft einer Funktion zuzugreifen, sollten Sie das {{jsxref("Functions/arguments", "arguments")}}-Objekt innerhalb von Funktionskapselungen verwenden.

### Object

- Die [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Zugriffsmethoden sind veraltet. Verwenden Sie stattdessen [`Object.getPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) und [`Object.setPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf). Dies gilt nicht für den `__proto__`-Literal-Schlüssel in Objekt-Literalen.
- Die Methoden [`Object.prototype.__defineGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`Object.prototype.__defineSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`Object.prototype.__lookupGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), und [`Object.prototype.__lookupSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet. Verwenden Sie stattdessen [`Object.getOwnPropertyDescriptor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) und [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty).

### String

- HTML-Wrapper-Methoden wie {{jsxref("String.prototype.fontsize")}} und {{jsxref("String.prototype.big")}}.
- {{jsxref("String.prototype.substr")}} wird wahrscheinlich nicht bald entfernt, aber es ist in Anhang B definiert und daher normativ optional.
- `String.prototype.trimLeft` und `String.prototype.trimRight` sollten durch {{jsxref("String.prototype.trimStart")}} und {{jsxref("String.prototype.trimEnd")}} ersetzt werden.

### Date

- Die Methoden {{jsxref("Date/getYear", "getYear()")}} und {{jsxref("Date/setYear", "setYear()")}} sind vom Jahr-2000-Problem betroffen und wurden von {{jsxref("Date/getFullYear", "getFullYear")}} und {{jsxref("Date/setFullYear", "setFullYear")}} abgelöst.
- Die Methode `toGMTString()` ist veraltet. Verwenden Sie stattdessen {{jsxref("Date/toUTCString", "toUTCString()")}}.

### Escape-Sequenzen

- Oktale Escape-Sequenzen (\ gefolgt von einer, zwei oder drei oktalen Ziffern) sind in String- und regulären Ausdrucksliteralen veraltet.
- Die Funktionen {{jsxref("escape()")}} und {{jsxref("unescape()")}} sind veraltet. Verwenden Sie {{jsxref("encodeURI()")}}, {{jsxref("encodeURIComponent()")}}, {{jsxref("decodeURI()")}}, oder {{jsxref("decodeURIComponent()")}}, um Escape-Sequenzen für Sonderzeichen zu kodieren und zu dekodieren.

### Anweisungen

Die [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung ist veraltet und im Strikten Modus nicht verfügbar.

Initialisierungen in `var`-Deklarationen von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen-Headern sind veraltet und erzeugen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) im Strikten Modus. Der Initialisierungsausdruck wird evaluiert und der Variablen zugewiesen, aber der Wert würde sofort bei der ersten Schleifeniteration wieder zugewiesen.

Normalerweise kann der `catch`-Block einer [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung keine Variablendeklaration mit demselben Namen enthalten wie die im `catch()` gebundenen Variablen. Eine Erweiterungsgrammatik erlaubt dem `catch`-Block, eine [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-deklarierte Variable mit demselben Namen wie den `catch`-gebundenen Bezeichner zu enthalten, aber nur, wenn die `catch`-Bindung ein einfacher Bezeichner ist, kein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring). Allerdings würde die Initialisierung und Zuweisung dieser Variablen nur auf den `catch`-gebundenen Bezeichner wirken, anstatt auf die oberhalb befindliche Variablen, und das Verhalten könnte verwirrend sein.

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

Dies ist im Anhang B der Spezifikation aufgeführt und daher möglicherweise nicht überall implementiert. Vermeiden Sie jegliche Namenskonflikte zwischen dem `catch`-gebundenen Bezeichner und innerhalb des `catch`-Blocks deklarierten Variablen.

## Obsolete Funktionen

Diese obsoleten Funktionen wurden komplett aus JavaScript entfernt und können ab der angegebenen Version von JavaScript nicht mehr verwendet werden.

### RegExp

Die folgenden sind jetzt Eigenschaften von `RegExp`-Instanzen, nicht mehr des `RegExp`-Konstruktors:

| Eigenschaft                                                         | Beschreibung                                                                                                            |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp/global", "global")}}                               | Ob der reguläre Ausdruck gegen alle möglichen Übereinstimmungen in einem String getestet wird oder nur gegen die erste. |
| {{jsxref("RegExp/ignoreCase", "ignoreCase")}}                       | Ob Groß-/Kleinschreibung ignoriert werden soll, während eine Übereinstimmung in einem String versucht wird.             |
| {{jsxref("RegExp/lastIndex", "lastIndex")}}                         | Der Index, an dem der nächste Abgleich gestartet werden soll.                                                           |
| {{jsxref("RegExp/multiline", "multiline")}} (auch über `RegExp.$*`) | Ob in Strings zeilenübergreifend gesucht werden soll.                                                                   |
| {{jsxref("RegExp/source", "source")}}                               | Der Text des Musters.                                                                                                   |

Die Methode `valueOf()` ist nicht mehr speziell für `RegExp`. Sie verwendet {{jsxref("Object.prototype.valueOf()")}}, die sich selbst zurückgibt.

### Function

- Die Eigenschaft `arity` von Funktionen ist obsolet. Verwenden Sie stattdessen [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### Object

| Eigenschaft                  | Beschreibung                                                                                                       | Alternative                                                                                                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__count__`                  | Gibt die Anzahl der direkt auf einem benutzerdefinierten Objekt aufgezählten Eigenschaften zurück.                 | [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)                                                                                                   |
| `__parent__`                 | Verweist auf den Kontext eines Objekts.                                                                            | Keine direkte Ersetzung                                                                                                                                                           |
| `__iterator__`               | Wird mit [veralteten Iteratoren](#veralteter_generator_und_iterator) verwendet.                                    | [`Symbol.iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) und die neuen [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols) |
| `__noSuchMethod__`           | Eine Methode, die aufgerufen wird, wenn eine nicht existierende Eigenschaft als Methode aufgerufen wird.           | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.prototype.eval()`    | Bewertet einen JavaScript-String im Kontext des angegebenen Objekts.                                               | Keine direkte Ersetzung                                                                                                                                                           |
| `Object.observe()`           | Asynchrones Überwachen der Änderungen an einem Objekt.                                                             | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.unobserve()`         | Entfernt Überwacher.                                                                                               | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.getNotifier()`       | Erstellt ein Notifier-Objekt, das eine beobachtbare Änderung synthetisch mit `Object.observe()` auslösen kann.     | Keine direkte Ersetzung                                                                                                                                                           |
| `Object.prototype.watch()`   | Verknüpft einen Handler-Callback mit einer Eigenschaft, der aufgerufen wird, wenn die Eigenschaft zugewiesen wird. | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.prototype.unwatch()` | Entfernt Watch-Handler für eine Eigenschaft.                                                                       | {{jsxref("Proxy")}}                                                                                                                                                               |

### String

- Nicht-standardisierte generische String-Methoden wie `String.slice(myStr, 0, 12)`, `String.replace(myStr, /\./g, "!")`, usw. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 53 für veraltet erklärt und in Firefox 68 entfernt. Sie können Methoden auf {{jsxref("String", "String.prototype", "instance_methods")}} zusammen mit {{jsxref("Function.call")}} verwenden.
- `String.prototype.quote` wurde in Firefox 37 entfernt.
- Nicht-standardisierte `flags`-Parameter in {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}}, und {{jsxref("String.prototype.replace")}} sind obsolet.

### WeakMap

- `WeakMap.prototype.clear()` wurde in Firefox 20 hinzugefügt und in Firefox 46 entfernt. Es ist nicht möglich, alle Schlüssel in einer [`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) zu durchlaufen.

### Date

- `Date.prototype.toLocaleFormat()`, das ein Formatstring im gleichen Format wie die von der C-Funktion `strftime()` erwarteten verwendete, ist obsolet. Verwenden Sie [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) oder [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) stattdessen.

### Array

- Nicht-standardisierte generische Array-Methoden wie `Array.slice(myArr, 0, 12)`, `Array.forEach(myArr, myFn)`, usw. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 68 für veraltet erklärt und in Firefox 71 entfernt. Sie können Methoden auf {{jsxref("Array", "Array.prototype", "instance_methods")}} zusammen mit {{jsxref("Function.call")}} verwenden.

| Eigenschaft         | Beschreibung                                     | Alternative         |
| ------------------- | ------------------------------------------------ | ------------------- |
| `Array.observe()`   | Asynchrones Überwachen von Änderungen an Arrays. | {{jsxref("Proxy")}} |
| `Array.unobserve()` | Entfernt Überwacher.                             | {{jsxref("Proxy")}} |

### Number

- `Number.toInteger()` ist obsolet. Verwenden Sie stattdessen [`Math.floor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), [`Math.round`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) oder andere Methoden.

### Proxy

- `Proxy.create` und `Proxy.createFunction` sind obsolet. Verwenden Sie den {{jsxref("Proxy/Proxy", "Proxy()")}}-Konstruktor stattdessen.
- Die folgenden Traps sind obsolet:
  - `hasOwn` ([Bug 980565](https://bugzil.la/980565), Firefox 33).
  - `getEnumerablePropertyKeys` ([Bug 783829](https://bugzil.la/783829), Firefox 37)
  - `getOwnPropertyNames` ([Bug 1007334](https://bugzil.la/1007334), Firefox 33)
  - `keys` ([Bug 1007334](https://bugzil.la/1007334), Firefox 33)

### ParallelArray

- `ParallelArray` ist obsolet.

### Anweisungen

- `for each...in` ist obsolet. Verwenden Sie {{jsxref("Statements/for...of", "for...of")}} stattdessen.
- `let`-Blöcke und `let`-Ausdrücke sind obsolet.
- Ausdrucksverschlüsse (`function () 1` als Kurzform für `function () { return 1; }`) sind obsolet. Verwenden Sie reguläre {{jsxref("Operators/function", "Funktionen")}} oder {{jsxref("Functions/Arrow_functions", "Pfeilfunktionen", "", 1)}} stattdessen.

### Erwerb von Quelltext

Die `toSource()`-Methoden von Arrays, Zahlen, Strings, etc. und die globale Funktion `uneval()` sind obsolet. Verwenden Sie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString), oder schreiben Sie Ihre eigene Serialisierungs-Methode.

### Veralteter Generator und Iterator

Veraltete Generatorfunktionsdeklarationen und veraltete Generatorfunktionsausdrücke sind entfernt. Die veraltete Generatorfunktionssyntax verwendet das Schlüsselwort `function`, das automatisch zu einer Generatorfunktion wird, wenn es ein oder mehrere `yield`-Ausdrücke im Körper gibt — dies ist jetzt ein Syntaxfehler. Verwenden Sie [`function*`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/function*) und [`function*`-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function*) stattdessen.

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

Firefox, vor Version 26, implementiert ein weiteres Iterationsprotokoll, das dem Standard-|iterator-Protokoll ähnlich ist. Ein Objekt ist ein veralteter Iterator, wenn es eine `next()`-Methode implementiert, die bei jedem Aufruf einen Wert produziert und bei Beendigung der Iteration ein `StopIteration`-Objekt wirft. Dieses veraltete Iteratorprotokoll unterscheidet sich vom Standard-Iteratorprotokoll:

- Der Wert wurde direkt als Rückgabewert von Aufrufen an `next()` zurückgegeben, anstatt als `value`-Eigenschaft des `IteratorResult`-Objekts.
- Iterationsbeendigung wurde durch das Werfen eines `StopIteration`-Objekts ausgedrückt, anstatt durch die `done`-Eigenschaft des `IteratorResult`-Objekts.

Diese Funktion, zusammen mit dem globalen Konstruktor `StopIteration`, wurde in Firefox 58+ entfernt. Für zukunftsgewandte Anwendungen ziehen Sie in Betracht, Schleifen mit [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) und das [Iteratorprotokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zu verwenden.

### Scharfe Variablen

Scharfe Variablen sind obsolet. Um zirkuläre Strukturen zu erstellen, verwenden Sie stattdessen temporäre Variablen.
