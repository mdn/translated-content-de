---
title: Veraltete und obsolet Funktionen
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("Mehr")}}

Diese Seite listet Funktionen von JavaScript auf, die veraltet sind (d.h. noch verfügbar, aber zur Entfernung geplant) und obsolet sind (d.h. nicht mehr verwendbar).

## Veraltete Funktionen

Diese veralteten Funktionen können noch genutzt werden, sollten jedoch mit Vorsicht verwendet werden, da sie nicht zwingend von jedem JavaScript-Interpreter implementiert werden müssen. Sie sollten daran arbeiten, ihre Verwendung aus Ihrem Code zu entfernen.

Einige dieser veralteten Funktionen sind im [Annex B](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) der ECMAScript-Spezifikation aufgeführt. Dieser Abschnitt wird als normativ optional beschrieben – das heißt, Web-Browser müssen diese Funktionen implementieren, während Nicht-Web-Hosts dies nicht tun müssen. Diese Funktionen sind wahrscheinlich stabil, da ihre Entfernung zu Rückwärtskompatibilitätsproblemen führen und alte Websites brechen würde. (JavaScript hat das Designziel "das Netz nicht zu brechen".) Dennoch sind sie nicht plattformübergreifend tragbar und werden möglicherweise nicht von allen Analysewerkzeugen unterstützt. Daher wird empfohlen, sie nicht zu verwenden, wie die Einleitung von Annex B besagt:

> … Alle im Anhang spezifizierten Sprachfunktionen und Verhaltensweisen haben ein oder mehrere unerwünschte Merkmale und würden ohne Anwesenheit eines Erbespektrums aus dieser Spezifikation entfernt werden. …
>
> … Programmierer sollten diese Funktionen und Verhaltensweisen nicht nutzen oder deren Existenz beim Schreiben von ECMAScript-Code annehmen. …

Einige andere, obwohl sie im Hauptteil der Spezifikation stehen, sind ebenfalls als normativ optional markiert und sollten nicht vorausgesetzt werden.

### HTML Kommentare

JavaScript-Quelltext, wenn als Skripte geparst, erlaubt HTML-ähnliche Kommentare, als ob das Skript Teil eines `<script>`-Tags wäre.

Das Folgende ist gültiges JavaScript, wenn es in einem Webbrowser (oder Node.js, welches die V8 Engine von Chrome nutzt) ausgeführt wird:

```js
<!-- comment
console.log("a"); <!-- another comment
console.log("b");
--> More comment
// Logs "a" and "b"
```

`<!--` und `-->` wirken beide wie `//`, d.h. sie starten Zeilenkommentare. `-->` ist nur am Zeilenanfang gültig (um Mehrdeutigkeiten mit einem postfaktischen Dekrement gefolgt von einem Größer-als-Operator zu vermeiden), während `<!--` überall in der Zeile vorkommen kann.

### RegExp

Die folgenden Eigenschaften sind veraltet. Dies betrifft nicht ihre Verwendung in [Ersetzungsstrings](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace):

- [`$1–$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
  - : Klammerausdrücke, falls vorhanden.
- [`input`, `$_`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
  - : Der String, gegen den ein regulärer Ausdruck abgeglichen wird.
- [`lastMatch`, `$&`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
  - : Der zuletzt gefundene Teilstring.
- [`lastParen`, `$+`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
  - : Der letzte Klammerausdruck, falls vorhanden.
- [`leftContext`, `` $` ``](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
  - : Der Teilstring vor dem aktuellsten Treffer.
- [`rightContext`, `$'`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
  - : Der Teilstring nach dem aktuellsten Treffer.

> [!WARNING]
> Vermeiden Sie die Verwendung dieser statischen Eigenschaften, da sie [Probleme bei der Interaktion mit externem Code verursachen können](https://github.com/tc39/proposal-regexp-legacy-features/blob/master/subclass-restriction-motivation.md#legacy-static-properties-regexp1-etc)!

Die {{jsxref("RegExp/compile", "compile()")}}-Methode ist veraltet. Erstellen Sie stattdessen eine neue Instanz von `RegExp`.

Folgende Regex-Syntaxen sind veraltet und nur im [Unicode-unabhängigen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verfügbar. Im Unicode-bewussten Modus sind sie alle Syntaxfehler:

- [Lookahead-Aussagen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) können [Quantifizierer](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) haben.
- [Backreferences](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference), die sich nicht auf eine existierende Fanggruppe beziehen, werden zu [veralteten Oktal-Escape-Sequenzen](#escape-sequenzen).
- In [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) wird das `-`, wenn ein Grenzwert eine Zeichenklasse ist, zu einem literalen Zeichen.
- Eine nicht erkannte Escape-Sequenz wird zu einem ["Identity-Escape"](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).
- Escape-Sequenzen innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) der Form `\cX`, wobei `X` eine Zahl oder `_` ist, werden auf die gleiche Weise dekodiert wie die mit {{Glossary("ASCII", "ASCII")}}-Buchstaben: `\c0` ist das gleiche wie `\cP` bei modulo 32. Darüber hinaus, wenn das Format `\cX` angetroffen wird, wo `X` keiner der anerkannten Zeichen ist, wird der Backslash als literales Zeichen behandelt.
- Die Sequenz `\k` innerhalb eines Regex, das keine [benannten Fanggruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) hat, wird als Identity-Escape behandelt.
- Die Syntaxzeichen `]`, `{` und `}` können [buchstäblich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) ohne Escape erscheinen, wenn sie nicht als Ende einer Zeichenklasse oder Quantifizierer-Begrenzer interpretiert werden können.

### Funktion

- Die {{jsxref("Function/caller", "caller")}}-Eigenschaft von Funktionen und die [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)-Eigenschaft sind veraltet und im strikten Modus nicht verfügbar.
- Statt `arguments` als Eigenschaft einer Funktion zuzugreifen, sollten Sie das {{jsxref("Functions/arguments", "arguments")}}-Objekt innerhalb von Funktionsabschlüssen verwenden.

### Objekt

- Die [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Zugriffe sind veraltet. Verwenden Sie stattdessen [`Object.getPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) und [`Object.setPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf). Dies gilt nicht für den literalen Schlüssel `__proto__` in objektliteralen.
- Die Methoden [`Object.prototype.__defineGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`Object.prototype.__defineSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`Object.prototype.__lookupGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) und [`Object.prototype.__lookupSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet. Verwenden Sie stattdessen [`Object.getOwnPropertyDescriptor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) und [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty).

### String

- HTML-Wrapper-Methoden wie {{jsxref("String.prototype.fontsize")}} und {{jsxref("String.prototype.big")}}.
- {{jsxref("String.prototype.substr")}} wird wahrscheinlich nicht bald entfernt, aber es ist in Annex B definiert und daher normativ optional.
- `String.prototype.trimLeft` und `String.prototype.trimRight` sollten durch {{jsxref("String.prototype.trimStart")}} und {{jsxref("String.prototype.trimEnd")}} ersetzt werden.

### Datum

- Die Methoden {{jsxref("Date/getYear", "getYear()")}} und {{jsxref("Date/setYear", "setYear()")}} sind vom Jahr-2000-Problem betroffen und wurden durch {{jsxref("Date/getFullYear", "getFullYear")}} und {{jsxref("Date/setFullYear", "setFullYear")}} ersetzt.
- Die Methode `toGMTString()` ist veraltet. Verwenden Sie stattdessen {{jsxref("Date/toUTCString", "toUTCString()")}}.

### Escape-Sequenzen

- Oktal-Escape-Sequenzen (\ gefolgt von einer, zwei oder drei oktalen Ziffern) sind in Zeichen- und regulären Ausdrucksliteralen veraltet.
- Die Funktionen {{jsxref("escape()")}} und {{jsxref("unescape()")}} sind veraltet. Verwenden Sie {{jsxref("encodeURI()")}}, {{jsxref("encodeURIComponent()")}}, {{jsxref("decodeURI()")}} oder {{jsxref("decodeURIComponent()")}}, um Escape-Sequenzen für Sonderzeichen zu kodieren und dekodieren.

### Anweisungen

Die [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung ist veraltet und im strikten Modus nicht verfügbar.

Initialisierer in `var`-Deklarationen von Kopfzeilen der [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen sind veraltet und erzeugen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) im strikten Modus. Der Initialisierungsausdruck wird ausgewertet und der Variable zugewiesen, aber der Wert würde unmittelbar bei der ersten Iteration der Schleife neuzugewiesen.

Normalerweise kann der `catch`-Block einer [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung keine Variablendeklaration mit demselben Namen enthalten wie die im `catch()` gebundenen Variablen. Eine Erweiterungsgrammatik erlaubt, dass der `catch`-Block eine [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-deklarierte Variable mit dem gleichen Namen wie die `catch`-gebundene Bezeichnung enthält, aber nur, wenn die `catch`-Bindung eine einfache Bezeichnung ist, kein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring). Trotzdem würde die Initialisierung und Zuweisung dieser Variablen nur auf die `catch`-gebundene Bezeichnung wirken, anstatt auf die Variable der übergeordneten Ebene, was verwirrend sein könnte.

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

Dies ist in Annex B der Spezifikation aufgeführt und daher möglicherweise nicht überall implementiert. Vermeiden Sie jegliche Namenskonflikte zwischen der `catch`-gebundenen Bezeichnung und Variablen, die im `catch`-Block deklariert sind.

## Obsolete Funktionen

Diese obsoleten Funktionen wurden vollständig aus JavaScript entfernt und können ab der angegebenen Version von JavaScript nicht mehr verwendet werden.

### RegExp

Die folgenden sind nun Eigenschaften von `RegExp`-Instanzen und nicht länger des `RegExp`-Konstruktors:

| Eigenschaft                                                         | Beschreibung                                                                                                   |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp/global", "global")}}                               | Ob der reguläre Ausdruck gegen alle möglichen Treffer in einem String getestet wird oder nur gegen den ersten. |
| {{jsxref("RegExp/ignoreCase", "ignoreCase")}}                       | Ob beim Versuch des Abgleichs in einem String die Groß- und Kleinschreibung ignoriert wird.                    |
| {{jsxref("RegExp/lastIndex", "lastIndex")}}                         | Der Index, an dem der nächste Abgleich begonnen wird.                                                          |
| {{jsxref("RegExp/multiline", "multiline")}} (auch über `RegExp.$*`) | Ob auch in mehreren Zeilen nach Übereinstimmungen gesucht wird.                                                |
| {{jsxref("RegExp/source", "source")}}                               | Der Text des Musters.                                                                                          |

Die `valueOf()`-Methode ist nicht mehr für `RegExp` spezialisiert. Sie verwendet {{jsxref("Object.prototype.valueOf()")}}, was zu sich selbst zurückkehrt.

### Funktion

- Die `arity`-Eigenschaft von Funktionen ist obsolet. Verwenden Sie stattdessen [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### Objekt

| Eigenschaft                  | Beschreibung                                                                                                     | Alternative                                                                                                                                                                       |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__count__`                  | Gibt die Anzahl der direkt auf einem benutzerdefinierten Objekt vorhandenen aufzählbaren Eigenschaften zurück.   | [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)                                                                                                   |
| `__parent__`                 | Verweist auf den Kontext eines Objekts.                                                                          | Keine direkte Alternative                                                                                                                                                         |
| `__iterator__`               | Wird mit [veralteten Iteratoren](#veraltete_generator-_und_iteratorprotokolle) verwendet.                        | [`Symbol.iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) und die neuen [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols) |
| `__noSuchMethod__`           | Eine Methode, die aufgerufen wird, wenn eine nicht existierende Eigenschaft als Methode aufgerufen wird.         | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.prototype.eval()`    | Wertet einen JavaScript-Code-String im Kontext des angegebenen Objekts aus.                                      | Keine direkte Alternative                                                                                                                                                         |
| `Object.observe()`           | Asynchrones Beobachten von Änderungen an einem Objekt.                                                           | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.unobserve()`         | Entfernt Beobachter.                                                                                             | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.getNotifier()`       | Erzeugt ein Notifikator-Objekt, das ermöglicht, eine Änderung mit `Object.observe()` synthetisch auszulösen.     | Keine direkte Alternative                                                                                                                                                         |
| `Object.prototype.watch()`   | Befestigt einen Callback-Handler an eine Eigenschaft, der aufgerufen wird, wenn die Eigenschaft zugewiesen wird. | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.prototype.unwatch()` | Entfernt Überwachungs-Handler an einer Eigenschaft.                                                              | {{jsxref("Proxy")}}                                                                                                                                                               |

### String

- Nicht-standardisierte generische String-Methoden wie `String.slice(myStr, 0, 12)`, `String.replace(myStr, /\./g, "!")` usw. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 53 veraltet und in Firefox 68 entfernt. Sie können Methoden an {{jsxref("String", "String.prototype", "instance_methods")}} zusammen mit {{jsxref("Function.call")}} verwenden.
- `String.prototype.quote` wurde aus Firefox 37 entfernt.
- Nicht-standardisierter `flags`-Parameter in {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}} und {{jsxref("String.prototype.replace")}} sind obsolet.

### WeakMap

- `WeakMap.prototype.clear()` wurde in Firefox 20 hinzugefügt und in Firefox 46 entfernt. Es ist nicht möglich, alle Schlüssel in einer [`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) zu durchlaufen.

### Datum

- `Date.prototype.toLocaleFormat()`, welches einen Formatstring im gleichen Format wie die `strftime()`-Funktion in C verwendete, ist obsolet. Verwenden Sie [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) oder [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) stattdessen.

### Array

- Nicht standardmäßige generische Array-Methoden wie `Array.slice(myArr, 0, 12)`, `Array.forEach(myArr, myFn)` usw. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 68 veraltet und in Firefox 71 entfernt. Sie können Methoden an {{jsxref("Array", "Array.prototype", "instance_methods")}} zusammen mit {{jsxref("Function.call")}} verwenden.

| Eigenschaft         | Beschreibung                                 | Alternative         |
| ------------------- | -------------------------------------------- | ------------------- |
| `Array.observe()`   | Asynchrones Beobachten von Array-Änderungen. | {{jsxref("Proxy")}} |
| `Array.unobserve()` | Entfernt Beobachter.                         | {{jsxref("Proxy")}} |

### Nummer

- `Number.toInteger()` ist obsolet. Verwenden Sie stattdessen [`Math.floor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), [`Math.round`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) oder andere Methoden.

### Proxy

- `Proxy.create` und `Proxy.createFunction` sind obsolet. Verwenden Sie den {{jsxref("Proxy/Proxy", "Proxy()")}}-Konstruktor statt.
- Die folgenden "traps" sind obsolet:
  - `hasOwn` ([bug 980565](https://bugzil.la/980565), Firefox 33).
  - `getEnumerablePropertyKeys` ([bug 783829](https://bugzil.la/783829), Firefox 37)
  - `getOwnPropertyNames` ([bug 1007334](https://bugzil.la/1007334), Firefox 33)
  - `keys` ([bug 1007334](https://bugzil.la/1007334), Firefox 33)

### ParallelArray

- `ParallelArray` ist obsolet.

### Anweisungen

- `for each...in` ist obsolet. Verwenden Sie {{jsxref("Statements/for...of", "for...of")}}.
- Let-Blöcke und Let-Ausdrücke sind obsolet.
- Ausdrucksclosures (`function () 1` als Abkürzung für `function () { return 1; }`) sind obsolet. Verwenden Sie reguläre {{jsxref("Operators/function", "Funktionen")}} oder {{jsxref("Functions/Arrow_functions", "Pfeilfunktionen", "", 1)}}.

### Erwerb von Quelltext

Die `toSource()`-Methoden von Arrays, Nummern, Zeichenfolgen usw. und die globale Funktion `uneval()` sind obsolet. Verwenden Sie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString), oder schreiben Sie Ihre eigene Serialisierungsmethode.

### Veraltete Generator- und Iteratorprotokolle

Veraltete Generatorfunktionsanweisungen und veraltete Generatorfunktionsausdrücke sind entfernt. Die alte Generatorfunktion-Syntax wiederverwendet das `function`-Schlüsselwort, welches automatisch zu einer Generatorfunktion wird, wenn es ein oder mehrere `yield`-Ausdrücke im Body gibt – dies ist nun ein Syntaxfehler. Verwenden Sie [`function*`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/function*) und [`function*`-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function*).

Array-Komprimitierungen und Generator-Komprimitierungen sind entfernt.

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

Firefox hat vor Version 26 ein weiteres Iteratorprotokoll implementiert, das dem Standard-[Iteratorprotokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) ähnlich ist. Ein Objekt ist ein veralteter Iterator, wenn es eine `next()`-Methoden implementiert, die bei jedem Aufruf einen Wert erzeugt und am Ende der Iteration ein `StopIteration`-Objekt wirft. Dieses veraltete Iteratorprotokoll unterscheidet sich vom Standard-Iteratorprotokoll:

- Der Wert wurde direkt als Rückgabewert der Aufrufe von `next()` zurückgegeben, anstatt der `value`-Eigenschaft des `IteratorResult`-Objekts.
- Die Iterationsbeendigung wurde durch Werfen eines `StopIteration`-Objekts ausgedrückt, statt durch die `done`-Eigenschaft des `IteratorResult`-Objekts.

Diese Funktion, zusammen mit dem globalen Konstruktor `StopIteration`, wurde in Firefox 58+ entfernt. Für zukunftsorientierte Verwendungen sollten Sie `for...of`-Schleifen und das [Iteratorprotokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) in Betracht ziehen.

### Scharfe Variablen

Scharfe Variablen sind obsolet. Um zirkuläre Strukturen zu erstellen, verwenden Sie stattdessen temporäre Variablen.
