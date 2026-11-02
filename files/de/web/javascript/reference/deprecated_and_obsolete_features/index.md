---
title: Veraltete und nicht mehr verfügbare Funktionen
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
l10n:
  sourceCommit: 389605121ed8ea78cc1878f31bbca6759cc7417d
---

Diese Seite listet JavaScript-Funktionen auf, die veraltet sind (also noch verfügbar sind, aber nicht mehr verwendet werden sollten) oder nicht mehr verfügbar sind (also nicht mehr verwendet werden können).

## Veraltete Funktionen

Diese veralteten Funktionen können weiterhin verwendet werden. Dabei ist jedoch Vorsicht geboten, da nicht jede JavaScript-Engine sie implementieren muss. Sie sollten daran arbeiten, ihre Verwendung aus Ihrem Code zu entfernen.

Einige dieser veralteten Funktionen sind in [Anhang B](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) der ECMAScript-Spezifikation aufgeführt. Dieser Abschnitt wird als normativ optional bezeichnet: Browser-Hosts müssen diese Funktionen implementieren, andere Hosts dagegen nicht. Die Funktionen bleiben wahrscheinlich erhalten, da ihre Entfernung Probleme mit der Abwärtskompatibilität verursachen und ältere Websites beeinträchtigen würde. (Ein Entwurfsziel von JavaScript lautet „das Web nicht kaputtmachen“.) Dennoch sind sie nicht plattformübergreifend portabel und werden möglicherweise nicht von allen Analysewerkzeugen unterstützt. Daher sollten Sie sie nicht verwenden, wie bereits die Einleitung zu Anhang B festhält:

> … Alle in diesem Anhang spezifizierten Sprachfunktionen und Verhaltensweisen weisen eine oder mehrere unerwünschte Eigenschaften auf und würden ohne ihre Verwendung in älterem Code aus dieser Spezifikation entfernt. …
>
> … Programmierer sollten beim Schreiben neuen ECMAScript-Codes diese Funktionen und Verhaltensweisen weder verwenden noch deren Vorhandensein voraussetzen. …

Einige andere Funktionen stehen zwar im Hauptteil der Spezifikation, sind aber ebenfalls als normativ optional gekennzeichnet. Auch auf sie sollten Sie sich nicht verlassen.

### HTML-Kommentare

Wenn JavaScript-Quelltext als Skript geparst wird, sind HTML-ähnliche Kommentare zulässig – als wäre das Skript Teil eines `<script>`-Tags.

Das Folgende ist gültiges JavaScript, wenn es in einem Webbrowser ausgeführt wird (oder in Node.js, das die auch in Chrome verwendete V8-Engine nutzt):

```js
<!-- comment
console.log("a"); <!-- another comment
console.log("b");
--> More comment
// Logs "a" and "b"
```

`<!--` und `-->` verhalten sich beide wie `//`, leiten also Zeilenkommentare ein. `-->` ist nur am Anfang einer Zeile gültig (um eine Mehrdeutigkeit mit einer Postfix-Dekrementierung gefolgt von einem Größer-als-Operator zu vermeiden). `<!--` kann dagegen an beliebiger Stelle in der Zeile stehen.

### RegExp

Die folgenden Eigenschaften sind veraltet. Ihre Verwendung in [Ersetzungszeichenfolgen](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) ist davon nicht betroffen:

- [`$1–$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
  - : Übereinstimmungen mit Teilzeichenfolgen in Klammern, sofern vorhanden.
- [`input`, `$_`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
  - : Die Zeichenfolge, mit der ein regulärer Ausdruck abgeglichen wird.
- [`lastMatch`, `$&`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
  - : Die zuletzt gefundene übereinstimmende Teilzeichenfolge.
- [`lastParen`, `$+`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
  - : Die zuletzt gefundene Übereinstimmung mit einer Teilzeichenfolge in Klammern, sofern vorhanden.
- [`leftContext`, `` $` ``](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
  - : Die Teilzeichenfolge vor der jüngsten Übereinstimmung.
- [`rightContext`, `$'`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
  - : Die Teilzeichenfolge nach der jüngsten Übereinstimmung.

> [!WARNING]
> Vermeiden Sie die Verwendung dieser statischen Eigenschaften, da sie bei der [Interaktion mit externem Code Probleme verursachen können](https://github.com/tc39/proposal-regexp-legacy-features/blob/master/subclass-restriction-motivation.md#legacy-static-properties-regexp1-etc)!

Die Methode {{jsxref("RegExp/compile", "compile()")}} ist veraltet. Erstellen Sie stattdessen eine neue `RegExp`-Instanz.

Die folgenden Syntaxformen für reguläre Ausdrücke sind veraltet und nur im [Modus ohne Unicode-Unterstützung](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verfügbar. Im Unicode-bewussten Modus führen sie alle zu Syntaxfehlern:

- [Lookahead-Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) können [Quantifizierer](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) haben.
- [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference), die sich nicht auf eine vorhandene Capturing Group beziehen, werden zu [herkömmlichen oktalen Escape-Sequenzen](#escape-sequenzen).
- In [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) wird `-` als wörtliches Zeichen behandelt, wenn eine Grenze eines Zeichenbereichs eine Zeichenklasse ist.
- Eine nicht erkannte Escape-Sequenz wird zu einem [„Identity Escape“](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).
- Escape-Sequenzen innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) der Form `\cX`, bei denen `X` eine Zahl oder `_` ist, werden genauso dekodiert wie solche mit {{Glossary("ASCII", "ASCII")}}-Buchstaben: `\c0` entspricht `\cP`, wenn der Wert modulo 32 genommen wird. Tritt die Form `\cX` an einer beliebigen Stelle auf und ist `X` keines der erkannten Zeichen, wird der Backslash als wörtliches Zeichen behandelt.
- Die Sequenz `\k` wird in einem regulären Ausdruck ohne [benannte Capturing Groups](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) als Identity Escape behandelt.
- Die Syntaxzeichen `]`, `{` und `}` dürfen ohne Escape-Zeichen [wörtlich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) auftreten, wenn sie nicht als Ende einer Zeichenklasse oder als Begrenzungszeichen eines Quantifizierers interpretiert werden können.

### Function

- Die Eigenschaft {{jsxref("Function/caller", "caller")}} von Funktionen und die Eigenschaft [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) sind veraltet und im Strict Mode nicht verfügbar.
- Statt auf `arguments` als Eigenschaft einer Funktion zuzugreifen, sollten Sie das Objekt {{jsxref("Functions/arguments", "arguments")}} innerhalb von Funktions-Closures verwenden.

### Object

- Die Accessors [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) sind veraltet. Verwenden Sie stattdessen [`Object.getPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) und [`Object.setPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf). Dies gilt nicht für den wörtlichen Schlüssel `__proto__` in Objektliteralen.
- Die Methoden [`Object.prototype.__defineGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`Object.prototype.__defineSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`Object.prototype.__lookupGetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) und [`Object.prototype.__lookupSetter__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet. Verwenden Sie stattdessen [`Object.getOwnPropertyDescriptor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) und [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty).

### String

- HTML-Wrapper-Methoden wie {{jsxref("String.prototype.fontsize")}} und {{jsxref("String.prototype.big")}}.
- {{jsxref("String.prototype.substr")}} wird wahrscheinlich nicht so bald entfernt, ist aber in Anhang B definiert und daher normativ optional.
- `String.prototype.trimLeft` und `String.prototype.trimRight` sollten durch {{jsxref("String.prototype.trimStart")}} und {{jsxref("String.prototype.trimEnd")}} ersetzt werden.

### Date

- Die Methoden {{jsxref("Date/getYear", "getYear()")}} und {{jsxref("Date/setYear", "setYear()")}} sind vom Jahr-2000-Problem betroffen und wurden durch {{jsxref("Date/getFullYear", "getFullYear")}} und {{jsxref("Date/setFullYear", "setFullYear")}} abgelöst.
- Die Methode `toGMTString()` ist veraltet. Verwenden Sie stattdessen {{jsxref("Date/toUTCString", "toUTCString()")}}.

### Escape-Sequenzen

- Oktale Escape-Sequenzen (\ gefolgt von einer, zwei oder drei oktalen Ziffern) sind in Zeichenfolgenliteralen und Literalen für reguläre Ausdrücke veraltet.
- Die Funktionen {{jsxref("escape()")}} und {{jsxref("unescape()")}} sind veraltet. Verwenden Sie {{jsxref("encodeURI()")}}, {{jsxref("encodeURIComponent()")}}, {{jsxref("decodeURI()")}} oder {{jsxref("decodeURIComponent()")}}, um Escape-Sequenzen für Sonderzeichen zu kodieren und zu dekodieren.

### Anweisungen

Die Anweisung [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) ist veraltet und im Strict Mode nicht verfügbar.

Initialisierungen in `var`-Deklarationen im Kopf von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen sind veraltet und verursachen im Strict Mode [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer). Der Initialisierungsausdruck wird ausgewertet und der Variablen zugewiesen, aber der Wert würde beim ersten Schleifendurchlauf sofort neu zugewiesen.

Normalerweise darf der `catch`-Block einer [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung keine Variablendeklaration enthalten, deren Name mit dem einer in `catch()` gebundenen Variablen übereinstimmt. Eine Erweiterung der Grammatik erlaubt im `catch`-Block jedoch eine mit [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) deklarierte Variable mit demselben Namen wie der in `catch` gebundene Bezeichner – allerdings nur, wenn die `catch`-Bindung ein einfacher Bezeichner und kein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) ist. Die Initialisierung und Zuweisung dieser Variablen wirken sich jedoch nur auf den in `catch` gebundenen Bezeichner aus, nicht auf die Variable im äußeren Gültigkeitsbereich. Dieses Verhalten kann verwirrend sein.

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

Dies ist in Anhang B der Spezifikation aufgeführt und wird daher möglicherweise nicht überall implementiert. Vermeiden Sie Namenskonflikte zwischen dem in `catch` gebundenen Bezeichner und Variablen, die im `catch`-Block deklariert werden.

## Nicht mehr verfügbare Funktionen

Diese Funktionen wurden vollständig aus JavaScript entfernt und können ab der jeweils angegebenen JavaScript-Version nicht mehr verwendet werden.

### RegExp

Die folgenden Eigenschaften gehören jetzt zu `RegExp`-Instanzen und nicht mehr zum `RegExp`-Konstruktor:

| Eigenschaft                                                         | Beschreibung                                                                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("RegExp/global", "global")}}                               | Ob der reguläre Ausdruck auf alle möglichen Übereinstimmungen in einer Zeichenfolge oder nur auf die erste geprüft wird. |
| {{jsxref("RegExp/ignoreCase", "ignoreCase")}}                       | Ob beim Suchen nach einer Übereinstimmung in einer Zeichenfolge die Groß- und Kleinschreibung ignoriert wird.            |
| {{jsxref("RegExp/lastIndex", "lastIndex")}}                         | Der Index, an dem die Suche nach der nächsten Übereinstimmung beginnt.                                                   |
| {{jsxref("RegExp/multiline", "multiline")}} (auch über `RegExp.$*`) | Ob in Zeichenfolgen über mehrere Zeilen hinweg gesucht wird.                                                             |
| {{jsxref("RegExp/source", "source")}}                               | Der Text des Musters.                                                                                                    |

Die Methode `valueOf()` ist nicht mehr für `RegExp` spezialisiert. Sie verwendet {{jsxref("Object.prototype.valueOf()")}}, das das Objekt selbst zurückgibt.

### Function

- Die Eigenschaft `arity` von Funktionen ist nicht mehr verfügbar. Verwenden Sie stattdessen [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### Object

| Eigenschaft                  | Beschreibung                                                                                                             | Alternative                                                                                                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__count__`                  | Gibt die Anzahl der aufzählbaren Eigenschaften zurück, die direkt auf einem benutzerdefinierten Objekt verfügbar sind.   | [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)                                                                                                   |
| `__parent__`                 | Verweist auf den Kontext eines Objekts.                                                                                  | Kein direkter Ersatz                                                                                                                                                              |
| `__iterator__`               | Wurde mit [herkömmlichen Iteratoren](#herkömmliche_generatoren_und_iteratoren) verwendet.                                | [`Symbol.iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) und die neuen [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols) |
| `__noSuchMethod__`           | Eine Methode, die aufgerufen wird, wenn eine nicht vorhandene Eigenschaft als Methode aufgerufen wird.                   | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.prototype.eval()`    | Wertet eine Zeichenfolge mit JavaScript-Code im Kontext des angegebenen Objekts aus.                                     | Kein direkter Ersatz                                                                                                                                                              |
| `Object.observe()`           | Beobachtet Änderungen an einem Objekt asynchron.                                                                         | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.unobserve()`         | Entfernt Beobachter.                                                                                                     | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.getNotifier()`       | Erstellt ein Notifier-Objekt, mit dem sich eine durch `Object.observe()` beobachtbare Änderung künstlich auslösen lässt. | Kein direkter Ersatz                                                                                                                                                              |
| `Object.prototype.watch()`   | Fügt einer Eigenschaft eine Handler-Callback-Funktion hinzu, die bei einer Zuweisung an die Eigenschaft aufgerufen wird. | {{jsxref("Proxy")}}                                                                                                                                                               |
| `Object.prototype.unwatch()` | Entfernt Watch-Handler von einer Eigenschaft.                                                                            | {{jsxref("Proxy")}}                                                                                                                                                               |

### String

- Nicht standardisierte generische String-Methoden wie `String.slice(myStr, 0, 12)`, `String.replace(myStr, /\./g, "!")` usw. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 53 als veraltet eingestuft und in Firefox 68 entfernt. Stattdessen können Sie Methoden von {{jsxref("String", "String.prototype", "instance_methods")}} zusammen mit {{jsxref("Function.call")}} verwenden.
- `String.prototype.quote` wurde in Firefox 37 entfernt.
- Der nicht standardisierte Parameter `flags` in {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}} und {{jsxref("String.prototype.replace")}} ist nicht mehr verfügbar.

### WeakMap

- `WeakMap.prototype.clear()` wurde in Firefox 20 hinzugefügt und in Firefox 46 entfernt. Es ist nicht möglich, alle Schlüssel einer [`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) zu durchlaufen.

### Date

- `Date.prototype.toLocaleFormat()`, das eine Formatzeichenfolge im Format der C-Funktion `strftime()` verwendete, ist nicht mehr verfügbar. Verwenden Sie stattdessen [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) oder [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).

### Array

- Nicht standardisierte generische Array-Methoden wie `Array.slice(myArr, 0, 12)`, `Array.forEach(myArr, myFn)` usw. wurden in Firefox 1.5 (JavaScript 1.6) eingeführt, in Firefox 68 als veraltet eingestuft und in Firefox 71 entfernt. Stattdessen können Sie Methoden von {{jsxref("Array", "Array.prototype", "instance_methods")}} zusammen mit {{jsxref("Function.call")}} verwenden.

| Eigenschaft         | Beschreibung                               | Alternative         |
| ------------------- | ------------------------------------------ | ------------------- |
| `Array.observe()`   | Beobachtet Änderungen an Arrays asynchron. | {{jsxref("Proxy")}} |
| `Array.unobserve()` | Entfernt Beobachter.                       | {{jsxref("Proxy")}} |

### Number

- `Number.toInteger()` ist nicht mehr verfügbar. Verwenden Sie stattdessen [`Math.floor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), [`Math.round`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) oder andere Methoden.

### Proxy

- `Proxy.create` und `Proxy.createFunction` sind nicht mehr verfügbar. Verwenden Sie stattdessen den Konstruktor {{jsxref("Proxy/Proxy", "Proxy()")}}.
- Die folgenden Traps sind nicht mehr verfügbar:
  - `hasOwn` ([Bug 980565](https://bugzil.la/980565), Firefox 33).
  - `getEnumerablePropertyKeys` ([Bug 783829](https://bugzil.la/783829), Firefox 37)
  - `getOwnPropertyNames` ([Bug 1007334](https://bugzil.la/1007334), Firefox 33)
  - `keys` ([Bug 1007334](https://bugzil.la/1007334), Firefox 33)

### ParallelArray

- `ParallelArray` ist nicht mehr verfügbar.

### Anweisungen

- `for each...in` ist nicht mehr verfügbar. Verwenden Sie stattdessen {{jsxref("Statements/for...of", "for...of")}}.
- let-Blöcke und let-Ausdrücke sind nicht mehr verfügbar.
- Expression Closures (`function () 1` als Kurzform von `function () { return 1; }`) sind nicht mehr verfügbar. Verwenden Sie stattdessen reguläre {{jsxref("Operators/function", "Funktionen")}} oder {{jsxref("Functions/Arrow_functions", "Arrow-Funktionen", "", 1)}}.

### Quelltext abrufen

Die `toSource()`-Methoden von Arrays, Zahlen, Zeichenfolgen usw. sowie die globale Funktion `uneval()` sind nicht mehr verfügbar. Verwenden Sie stattdessen [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) oder schreiben Sie eine eigene Serialisierungsmethode.

### Herkömmliche Generatoren und Iteratoren

Herkömmliche Anweisungen und Ausdrücke für Generatorfunktionen wurden entfernt. Die herkömmliche Syntax für Generatorfunktionen verwendet das Schlüsselwort `function`. Die Funktion wird dabei automatisch zu einer Generatorfunktion, wenn ihr Funktionskörper einen oder mehrere `yield`-Ausdrücke enthält – dies ist jetzt ein Syntaxfehler. Verwenden Sie stattdessen [`function*`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/function*) und [`function*`-Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function*).

Array Comprehensions und Generator Comprehensions wurden entfernt.

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

Vor Version 26 implementierte Firefox ein anderes Iteratorprotokoll, das dem standardisierten [Iteratorprotokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) ähnelt. Ein Objekt ist ein herkömmlicher Iterator, wenn es eine `next()`-Methode implementiert, die bei jedem Aufruf einen Wert liefert und am Ende der Iteration ein `StopIteration`-Objekt auslöst. Dieses herkömmliche Iteratorprotokoll unterscheidet sich vom standardisierten Iteratorprotokoll:

- Der Wert wurde direkt als Rückgabewert von `next()`-Aufrufen zurückgegeben statt über die Eigenschaft `value` des `IteratorResult`-Objekts.
- Das Ende der Iteration wurde durch Auslösen eines `StopIteration`-Objekts signalisiert statt über die Eigenschaft `done` des `IteratorResult`-Objekts.

Diese Funktion wurde zusammen mit dem globalen Konstruktor `StopIteration` ab Firefox 58 entfernt. Für neuen Code sollten Sie [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen und das [Iteratorprotokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) verwenden.

### Sharp-Variablen

Sharp-Variablen sind nicht mehr verfügbar. Verwenden Sie stattdessen temporäre Variablen, um zyklische Strukturen zu erstellen.
