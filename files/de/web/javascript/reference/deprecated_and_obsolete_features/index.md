---
title: Veraltete und überholte Funktionen
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{jsSidebar("Mehr")}}

Diese Seite listet JavaScript-Funktionen auf, die veraltet sind (d.h. noch verfügbar, aber zur Entfernung vorgesehen) und überholt (d.h. nicht mehr nutzbar).

## Veraltete Funktionen

Diese veralteten Funktionen können noch verwendet werden, sollten jedoch mit Vorsicht eingesetzt werden, da sie nicht von jeder JavaScript-Engine implementiert werden müssen. Sie sollten daran arbeiten, deren Verwendung aus Ihrem Code zu entfernen.

Einige dieser veralteten Funktionen sind im [Anhang B](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) der ECMAScript-Spezifikation aufgelistet. Dieser Abschnitt wird als normativ optional beschrieben — das heißt, Webbrowser-Hosts müssen diese Funktionen implementieren, während Nicht-Web-Hosts dies möglicherweise nicht tun. Diese Funktionen sind wahrscheinlich stabil, da ihre Entfernung Rückwärtskompatibilitätsprobleme verursachen und ältere Websites beschädigen würde. (JavaScript hat das Designziel "Das Web nicht zerstören".) Dennoch sind sie nicht plattformübergreifend portabel und werden möglicherweise nicht von allen Analysetools unterstützt, daher wird empfohlen, sie nicht zu verwenden, wie in der Einleitung zu Anhang B angegeben:

> … Alle in diesem Anhang spezifizierten Sprachfeatures und Verhaltensweisen haben eine oder mehrere unerwünschte Eigenschaften und würden ohne die Existenz älterer Nutzungen aus dieser Spezifikation entfernt werden. …
>
> … Programmierer sollten diese Features und Verhaltensweisen bei der Erstellung neuen ECMAScript-Codes weder verwenden noch deren Existenz annehmen. …

Einige andere, obwohl im Hauptteil der Spezifikation, sind ebenfalls als normativ optional gekennzeichnet und sollten nicht darauf aufgebaut werden.

### HTML-Kommentare

JavaScript-Quellcode, wenn er als Skripte geparst wird, erlaubt HTML-ähnliche Kommentare, als ob das Skript Teil eines `<script>`-Tags wäre.

Der folgende Code ist gültiges JavaScript, wenn es in einem Webbrowser (oder Node.js, das die V8-Engine von Chrome nutzt) ausgeführt wird:

```js
<!-- comment
console.log("a"); <!-- another comment
console.log("b");
--> More comment
// Logs "a" and "b"
```

`<!--` und `-->` verhalten sich beide wie `//`, d.h. sie starten Zeilenkommentare. `-->` ist nur am Zeilenanfang gültig (um Mehrdeutigkeit mit einem Postfix-Dekrement, gefolgt von einem Größer-als-Operator zu vermeiden), während `<!--` überall in der Zeile vorkommen kann.

### RegExp

Die folgenden Eigenschaften sind veraltet. Dies beeinflusst nicht ihre Verwendung in [Ersetzungs-Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace):

- [`$1–$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
  - : Parenthesierte Substring-Übereinstimmungen, falls vorhanden.
- [`input`, `$_`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
  - : Der String, gegen den ein regulärer Ausdruck abgeglichen wird.
- [`lastMatch`, `$&`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
  - : Der zuletzt abgeglichene Substring.
- [`lastParen`, `$+`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
  - : Die letzte parenthesierte Substring-Übereinstimmung, falls vorhanden.
- [`leftContext`, `` $` ``](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
  - : Der Substring vor der letzten Übereinstimmung.
- [`rightContext`, `$'`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
  - : Der Substring nach der letzten Übereinstimmung.

> [!WARNING]
> Vermeiden Sie die Verwendung dieser statischen Eigenschaften, da sie [Probleme bei der Interaktion mit externem Code verursachen können](https://github.com/tc39/proposal-regexp-legacy-features/blob/master/subclass-restriction-motivation.md#legacy-static-properties-regexp1-etc)!

Die {{jsxref("RegExp/compile", "compile()")}}-Methode ist veraltet. Erstellen Sie stattdessen eine neue `RegExp`-Instanz.

Die folgenden regulären Ausdrucks-Syntaxen sind veraltet und nur im [Unicode-unuptächtigen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verfügbar. Im Unicode-bewussten Modus sind sie alle Syntaxfehler:

- [Lookahead-Behauptungen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) können [Quantoren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) haben.
- [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference), die sich nicht auf eine bestehende erfasste Gruppe beziehen, werden zu [Legacy-Oktal-Escapes](#escape-sequenzen).
- In [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class), bei denen eine Grenze eine Zeichenklasse ist, wird das `-` zu einem literalen Charakter.
- Eine nicht erkannte Escape-Sequenz wird zu einem ["Identity Escape"](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).
- Escape-Sequenzen innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) der Form `\cX`, wobei `X` eine Zahl oder `_` ist, werden auf die gleiche Weise wie diejenigen mit {{Glossary("ASCII", "ASCII")}}-Buchstaben dekodiert: `\c0` ist dasselbe wie `\cP`, wenn modulo 32 berechnet wird. Außerdem wird, wenn die Form `\cX` angetroffen wird, wo `X` nicht zu den anerkannten Zeichen gehört, das Backslash als ein literales Zeichen behandelt.
- Die Sequenz `\k` innerhalb eines regulären Ausdrucks, der keine [benannten erfassten Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) hat, wird als Identity Escape behandelt.
- Die Syntaxzeichen `]`, `{`, und `}` können [buchstäblich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) erscheinen, ohne dass sie entkommen müssen, wenn sie nicht als Ende einer Zeichenklasse oder Quantifizierer-Delimiter interpretiert werden können.

### Funktion

- Die {{jsxref("Function/caller", "caller")}}-Eigenschaft von Funktionen und die [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)-Eigenschaft sind veraltet und im Strict-Modus nicht verfügbar.
- Anstelle von `arguments` als Eigenschaft einer Funktion zuzugreifen, sollten Sie das {{jsxref("Functions/arguments", "arguments")}}-Objekt innerhalb von Funktionsclosure verwenden.

### Objekt

- Die Accessoren [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) sind veraltet. Verwenden Sie stattdessen [`Object.getPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) und [`Object.setPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf). Dies gilt nicht für den `__proto__`-Literal-Schlüssel in Objektliteralen.
- Die Methoden [`Object.prototype.__defineGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`Object.prototype.__defineSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`Object.prototype.__lookupGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), und [`Object.prototype.__lookupSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet. Verwenden Sie stattdessen [`Object.getOwnPropertyDescriptor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) und [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty).

### String

- HTML-Wrapper-Methoden wie {{jsxref("String.prototype.fontsize")}} und {{jsxref("String.prototype.big")}}.
- {{jsxref("String.prototype.substr")}} wird wahrscheinlich nicht so bald entfernt, ist aber in Anhang B definiert und daher normativ optional.
- `String.prototype.trimLeft` und `String.prototype.trimRight` sollten durch {{jsxref("String.prototype.trimStart")}} und {{jsxref("String.prototype.trimEnd")}} ersetzt werden.

### Datum

- Die Methoden {{jsxref("Date/getYear", "getYear()")}} und {{jsxref("Date/setYear", "setYear()")}} sind vom Jahr-2000-Problem betroffen und wurden durch {{jsxref("Date/getFullYear", "getFullYear")}} und {{jsxref("Date/setFullYear", "setFullYear")}} ersetzt.
- Die `toGMTString()`-Methode ist veraltet. Verwenden Sie stattdessen {{jsxref("Date/toUTCString", "toUTCString()")}}.

### Escape-Sequenzen

- Oktale Escape-Sequenzen (\ gefolgt von ein, zwei oder drei Oktalzahlen) sind im String- und regulären Ausdruck-Literalen veraltet.
- Die Funktionen {{jsxref("escape()")}} und {{jsxref("unescape()")}} sind veraltet. Verwenden Sie {{jsxref("encodeURI()")}}, {{jsxref("encodeURIComponent()")}}, {{jsxref("decodeURI()")}} oder {{jsxref("decodeURIComponent()")}}, um Escape-Sequenzen für Sonderzeichen zu enkodieren und zu dekodieren.

### Anweisungen

Die [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung ist veraltet und im Strict-Modus nicht verfügbar.

Initialisierer in `var`-Deklarationen von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifenheadern sind veraltet und erzeugen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) im Strict-Modus. Der Initialisierungsausdruck wird ausgewertet und der Variable zugewiesen, aber der Wert würde sofort bei der ersten Iteration der Schleife erneut zugewiesen.

Normalerweise kann der `catch`-Block einer [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung keine Variablendeklaration enthalten, die denselben Namen wie die im `catch()` gebundenen Variablen hat. Eine Erweiterungsgrammatik erlaubt, dass der `catch`-Block eine [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-deklarierte Variable mit demselben Namen wie der im `catch` gebundene Bezeichner enthält, aber nur, wenn die `catch`-Bindung ein einfacher Bezeichner und kein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) ist. Diese Variableninitialisierung und -zuweisung würde jedoch nur auf den im `catch` gebundenen Bezeichner wirken, statt auf die Variable des oberen Scopes, und das Verhalten könnte verwirrend sein.

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

Dies ist im Anhang B der Spezifikation aufgeführt und kann daher nicht überall implementiert werden. Vermeiden Sie Namenskonflikte zwischen dem im `catch` gebundenen Bezeichner und den im `catch`-Block deklarierten Variablen.

## Überholte Funktionen

Diese überholten Funktionen wurden vollständig aus JavaScript entfernt und können ab der angegebenen Version von JavaScript nicht mehr verwendet werden.

### RegExp

Die folgenden sind jetzt Eigenschaften von `RegExp`-Instanzen und nicht mehr des `RegExp`-Konstruktors:

| Eigenschaft                                                         | Beschreibung                                                                                                                   |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("RegExp/global", "global")}}                               | Ob der reguläre Ausdruck gegen alle möglichen Übereinstimmungen in einem String getestet werden soll oder nur gegen die erste. |
| {{jsxref("RegExp/ignoreCase", "ignoreCase")}}                       | Ob bei dem Versuch, eine Übereinstimmung in einem String zu finden, die Groß- und Kleinschreibung ignoriert werden soll.       |
| {{jsxref("RegExp/lastIndex", "lastIndex")}}                         | Der Index, an dem die nächste Übereinstimmung begonnen wird.                                                                   |
| {{jsxref("RegExp/multiline", "multiline")}} (auch über `RegExp.$*`) | Ob nach Übereinstimmungen in Strings über mehrere Zeilen hinweg gesucht werden soll.                                           |
| {{jsxref("RegExp/source", "source")}}                               | Der Text des Musters.                                                                                                          |

Die `valueOf()`-Methode ist nicht mehr speziell für `RegExp`. Sie verwendet {{jsxref("Object.prototype.valueOf()")}}, die sich selbst zurückgibt.

### Funktion

- Die `arity`-Eigenschaft von Funktionen ist überholt. Verwenden Sie stattdessen [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### Objekt

| Eigenschaft                  | Beschreibung                                                                                                                                 | Alternative                                                                                                                                                                       |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__count__`                  | Gibt die Anzahl der aufzählbaren Eigenschaften direkt auf einem benutzerdefinierten Objekt zurück.                                           | [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)                                                                                                   |
| `__parent__`                 | Zeigt auf den Kontext eines Objekts.                                                                                                         | Keine direkte Ersatz                                                                                                                                                              |
| `__iterator__`               | Wird mit [Legacy-Iteratoren](#legacy-generator_und_-iterator) verwendet.                                                                     | [`Symbol.iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) und die neuen [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols) |
| `__noSuchMethod__`           | Eine Methode, die aufgerufen wird, wenn eine nicht existierende Eigenschaft als Methode aufgerufen wird.                                     | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.prototype.eval()`    | Führt einen JavaScript-Code-String im Kontext des spezifizierten Objekts aus.                                                                | Keine direkte Ersatz                                                                                                                                                              |
| `Object.observe()`           | Asynchrones Beobachten der Änderungen an einem Objekt.                                                                                       | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.unobserve()`         | Entfernt Beobachter.                                                                                                                         | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.getNotifier()`       | Erstellt ein Benachrichtigungsobjekt, das es ermöglicht, eine synthetische Änderung zu erzeugen, die mit `Object.observe()` beobachtbar ist. | Keine direkte Ersatz                                                                                                                                                              |
| `Object.prototype.watch()`   | Hängt einen Callback-Handler an eine Eigenschaft an, der aufgerufen wird, wenn die Eigenschaft zugewiesen wird.                              | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.prototype.unwatch()` | Entfernt Watch-Handler von einer Eigenschaft.                                                                                                | {{jsxref("Proxy")}}                                                                                                                                                               |

### String

- Nicht-standardisierte generische String-Methoden wie `String.slice(myStr, 0, 12)`, `String.replace(myStr, /\./g, "!")`, etc. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 53 als veraltet deklariert und in Firefox 68 entfernt. Sie können Methoden auf {{jsxref("String", "String.prototype", "instance_methods")}} in Verbindung mit {{jsxref("Function.call")}} verwenden.
- `String.prototype.quote` wurde aus Firefox 37 entfernt.
- Nicht-standardisierte `flags`-Parameter in {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}}, und {{jsxref("String.prototype.replace")}} sind überholt.

### WeakMap

- `WeakMap.prototype.clear()` wurde in Firefox 20 hinzugefügt und in Firefox 46 entfernt. Es ist nicht möglich, alle Schlüssel in einer [`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) zu durchlaufen.

### Datum

- `Date.prototype.toLocaleFormat()`, das eine Formatzeichenkette im gleichen Format wie die von der `strftime()`-Funktion in C erwartete verwendete, ist überholt. Verwenden Sie [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) oder [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) stattdessen.

### Array

- Nicht-standardisierte generische Array-Methoden wie `Array.slice(myArr, 0, 12)`, `Array.forEach(myArr, myFn)`, etc. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 68 als veraltet deklariert und in Firefox 71 entfernt. Sie können Methoden auf {{jsxref("Array", "Array.prototype", "instance_methods")}} in Verbindung mit {{jsxref("Function.call")}} verwenden.

| Eigenschaft         | Beschreibung                                     | Alternative         |
| ------------------- | ------------------------------------------------ | ------------------- |
| `Array.observe()`   | Asynchrones Beobachten von Änderungen an Arrays. | {{jsxref("Proxy")}} |
| `Array.unobserve()` | Entfernt Beobachter.                             | {{jsxref("Proxy")}} |

### Number

- `Number.toInteger()` ist überholt. Verwenden Sie [`Math.floor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), [`Math.round`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) oder andere Methoden stattdessen.

### Proxy

- `Proxy.create` und `Proxy.createFunction` sind überholt. Verwenden Sie den {{jsxref("Proxy/Proxy", "Proxy()")}}-Konstruktor stattdessen.
- Die folgenden Fallen sind überholt:
  - `hasOwn` ([Bug 980565](https://bugzil.la/980565), Firefox 33).
  - `getEnumerablePropertyKeys` ([Bug 783829](https://bugzil.la/783829), Firefox 37)
  - `getOwnPropertyNames` ([Bug 1007334](https://bugzil.la/1007334), Firefox 33)
  - `keys` ([Bug 1007334](https://bugzil.la/1007334), Firefox 33)

### ParallelArray

- `ParallelArray` ist überholt.

### Anweisungen

- `for each...in` ist überholt. Verwenden Sie {{jsxref("Statements/for...of", "for...of")}} stattdessen.
- Let-Blocks und Let-Ausdrücke sind überholt.
- Ausdrucksschließungen (`function () 1` als Kurzform für `function () { return 1; }`) sind überholt. Verwenden Sie reguläre {{jsxref("Operators/function", "Funktionen")}} oder {{jsxref("Functions/Arrow_functions", "Pfeilfunktionen", "", 1)}} stattdessen.

### Erwerb von Quelltext

Die `toSource()`-Methoden von Arrays, Zahlen, Strings, etc. und die globale `uneval()`-Funktion sind überholt. Verwenden Sie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) oder schreiben Sie Ihre eigene Serialisierungsmethode stattdessen.

### Legacy-Generator und -Iterator

Legacy-Generator-Funktionsanweisungen und Legacy-Generator-Funktionsausdrücke sind entfernt. Die Legacy-Generator-Funktionssyntax verwendet das Schlüsselwort `function`, das automatisch zu einer Generator-Funktion wird, wenn es im Körper eine oder mehrere `yield`-Ausdrücke gibt — dies ist jetzt ein Syntaxfehler. Verwenden Sie stattdessen [`function*`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/function*) und [`function*`-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function*).

Array-Comprehensions und Generator-Comprehensions sind entfernt.

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

Firefox implementierte vor Version 26 ein anderes Iterator-Protokoll, das dem standardmäßigen [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) ähnlich ist. Ein Objekt ist ein Legacy-Iterator, wenn es eine `next()`-Methode implementiert, die bei jedem Aufruf einen Wert erzeugt und ein `StopIteration`-Objekt am Ende der Iteration wirft. Dieses Legacy-Iterator-Protokoll unterscheidet sich vom standardmäßigen Iterator-Protokoll:

- Der Wert wurde direkt als Rückgabewert von Aufrufen an `next()` zurückgegeben, anstatt der `value`-Eigenschaft des `IteratorResult`-Objekts.
- Die Beendigung der Iteration wurde durch das Werfen eines `StopIteration`-Objekts ausgedrückt, anstelle der `done`-Eigenschaft des `IteratorResult`-Objekts.

Dieses Feature, zusammen mit der globalen `StopIteration`-Funktion, wurde in Firefox 58+ entfernt. Für zukünftige Verwendungszwecke sollten Sie die Verwendung von [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleifen und dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) in Betracht ziehen.

### Scharfe Variablen

Scharfe Variablen sind überholt. Um zirkuläre Strukturen zu schaffen, verwenden Sie stattdessen temporäre Variablen.
