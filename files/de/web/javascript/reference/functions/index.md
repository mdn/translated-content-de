---
title: Functions
slug: Web/JavaScript/Reference/Functions
l10n:
  sourceCommit: e69618d78ec3ee346b0da618c720f477e5660c9c
---

{{jsSidebar("Functions")}}

Im Allgemeinen ist eine Funktion ein "Unterprogramm", das von einem externen (oder internen, im Fall von Rekursion) Code der Funktion _aufgerufen_ werden kann. Wie das Programm selbst, besteht eine Funktion aus einer Abfolge von Anweisungen, die als _Funktionskörper_ bezeichnet werden. Werte können als Parameter an eine Funktion _übergeben_ werden und die Funktion wird einen Wert _zurückgeben_.

In JavaScript sind Funktionen [Objekte erster Klasse](/de/docs/Glossary/First-class_Function), da sie an andere Funktionen übergeben, von Funktionen zurückgegeben und Variablen sowie Eigenschaften zugewiesen werden können. Sie können auch Eigenschaften und Methoden haben wie jedes andere Objekt. Was sie von anderen Objekten unterscheidet, ist, dass Funktionen aufgerufen werden können.

Weitere Beispiele und Erklärungen finden Sie im [JavaScript-Leitfaden über Funktionen](/de/docs/Web/JavaScript/Guide/Functions).

## Beschreibung

Funktionswerte sind typischerweise Instanzen von [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function). Siehe {{jsxref("Function")}} für Informationen zu Eigenschaften und Methoden von `Function`-Objekten. Aufrufbare Werte führen dazu, dass [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) `"function"` anstelle von `"object"` zurückgibt.

> [!NOTE]
> Nicht alle aufrufbaren Werte sind `instanceof Function`. Zum Beispiel ist das `Function.prototype`-Objekt aufrufbar, aber keine Instanz von `Function`. Sie können auch manuell die [Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) Ihrer Funktion so einstellen, dass sie nicht mehr von `Function.prototype` erbt. Solche Fälle sind jedoch extrem selten.

### Rückgabewert

Standardmäßig, wenn eine Funktion nicht mit einer [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung endet oder wenn das `return`-Schlüsselwort keinen Ausdruck hinter sich hat, ist der Rückgabewert {{jsxref("undefined")}}. Die `return`-Anweisung erlaubt es Ihnen, einen beliebigen Wert von der Funktion zurückzugeben. Ein Funktionsaufruf kann nur einen Wert zurückgeben, aber Sie können den Effekt der Rückgabe mehrerer Werte simulieren, indem Sie ein Objekt oder Array zurückgeben und das Ergebnis [destrukturieren](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

> [!NOTE]
> Konstruktoren, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, haben eine andere Logik zur Bestimmung ihrer Rückgabewerte.

### Übergabe von Argumenten

[Parameter und Argumente](https://de.wikipedia.org/wiki/Parameter_(Informatik)#Parameter_und_Argumente) haben leicht unterschiedliche Bedeutungen, aber in den MDN Web Docs verwenden wir sie oft austauschbar. Für eine schnelle Referenz:

```js
function formatNumber(num) {
  return num.toFixed(2);
}

formatNumber(2);
```

In diesem Beispiel wird die Variable `num` als _Parameter_ der Funktion bezeichnet: sie wird in der durch Klammern eingeschlossenen Liste der Definition der Funktion deklariert. Die Funktion erwartet, dass der `num`-Parameter eine Zahl ist — obwohl dies in JavaScript ohne das Schreiben von Laufzeitvalidierungscode nicht durchsetzbar ist. Im `formatNumber(2)`-Aufruf ist die Zahl `2` das _Argument_ der Funktion: Es ist der Wert, der tatsächlich an die Funktion im Funktionsaufruf übergeben wird. Der Argumentwert kann innerhalb des Funktionskörpers über den entsprechenden Parameternamen oder das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt zugegriffen werden.

Argumente werden immer [_by value_](https://de.wikipedia.org/wiki/Auswertungsstrategie#Call_by_value) und nie _by reference_ übergeben. Das bedeutet, dass wenn eine Funktion einen Parameter neu zuweist, der Wert außerhalb der Funktion nicht geändert wird. Genauer gesagt, werden Objektargumente [_by sharing_](https://de.wikipedia.org/wiki/Auswertungsstrategie#Call_by_sharing) übergeben, was bedeutet, dass wenn die Eigenschaften des Objekts verändert werden, sich die Änderung auf das Äußere der Funktion auswirkt. Zum Beispiel:

```js
function updateBrand(obj) {
  // Mutating the object is visible outside the function
  obj.brand = "Toyota";
  // Try to reassign the parameter, but this won't affect
  // the variable's value outside the function
  obj = null;
}

const car = {
  brand: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(car.brand); // Honda

// Pass object reference to the function
updateBrand(car);

// updateBrand mutates car
console.log(car.brand); // Toyota
```

Das Schlüsselwort [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) bezieht sich auf das Objekt, auf das die Funktion angewendet wird — es bezieht sich nicht auf die aktuell ausgeführte Funktion, daher müssen Sie den Funktionswert namentlich referenzieren, selbst innerhalb des Funktionskörpers.

### Definition von Funktionen

Im Allgemeinen hat JavaScript vier Arten von Funktionen:

- Normale Funktion: kann alles zurückgeben; läuft nach dem Aufruf immer zur Vollendung
- Generatormethode: gibt ein [`Generator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator)-Objekt zurück; kann mit dem [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)-Operator pausiert und fortgesetzt werden
- Asynchrone Funktion: gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück; kann mit dem [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator pausiert und fortgesetzt werden
- Asynchrone Generatormethode: gibt ein [`AsyncGenerator`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)-Objekt zurück; sowohl die Operatoren `await` als auch `yield` können verwendet werden

Für jede Art von Funktion gibt es mehrere Möglichkeiten, sie zu definieren:

- Deklaration
  - : [`function`](/de/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function), [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*)
- Ausdruck
  - : [`function`](/de/docs/Web/JavaScript/Reference/Operators/function), [`function*`](/de/docs/Web/JavaScript/Reference/Operators/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Operators/async_function), [`async function*`](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- Konstruktor
  - : [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function), [`GeneratorFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction), [`AsyncFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction), [`AsyncGeneratorFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction)

Außerdem gibt es spezielle Syntaxen zur Definition von [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) und [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions), die präziseren Semantiken für ihre Verwendung bieten. [Klassen](/de/docs/Web/JavaScript/Reference/Classes) sind konzeptionell keine Funktionen (da sie einen Fehler auslösen, wenn sie ohne `new` aufgerufen werden), aber sie erben ebenfalls von `Function.prototype` und haben `typeof MyClass === "function"`.

```js
// Constructor
const multiply = new Function("x", "y", "return x * y");

// Declaration
function multiply(x, y) {
  return x * y;
} // No need for semicolon here

// Expression; the function is anonymous but assigned to a variable
const multiply = function (x, y) {
  return x * y;
};
// Expression; the function has its own name
const multiply = function funcName(x, y) {
  return x * y;
};

// Arrow function
const multiply = (x, y) => x * y;

// Method
const obj = {
  multiply(x, y) {
    return x * y;
  },
};
```

Alle Syntaxen tun im Wesentlichen dasselbe, aber es gibt einige subtile Verhaltensunterschiede.

- Die `Function()`-Konstruktor-, `function`-Ausdrucks- und `function`-Deklarations-Syntaxen erzeugen vollwertige Funktionsobjekte, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden können. Pfeilfunktionen und Methoden können jedoch nicht konstruiert werden. Asynchrone Funktionen, Generatorfunktionen und asynchrone Generatorfunktionen sind unabhängig von der Syntax nicht konstruierbar.
- Die `function`-Deklaration erstellt Funktionen, die [_gehoben_](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) werden. Andere Syntaxen heben die Funktion nicht an und der Funktionswert ist erst nach der Definition sichtbar.
- Die Pfeilfunktions- und `Function()`-Konstruktorsyntax erzeugen immer _anonyme_ Funktionen, was bedeutet, dass sie sich nicht einfach rekursiv aufrufen können. Eine Möglichkeit, eine Pfeilfunktion rekursiv aufzurufen, besteht darin, sie einer Variable zuzuweisen.
- Die Pfeilfunktionssyntax hat keinen Zugriff auf `arguments` oder `this`.
- Der `Function()`-Konstruktor hat keinen Zugriff auf lokale Variablen — er hat nur Zugriff auf den globalen Bereich.
- Der `Function()`-Konstruktor verursacht eine Laufzeitkompilierung und ist oft langsamer als andere Syntaxen.

Bei `function`-Ausdrücken gibt es einen Unterschied zwischen dem Funktionsnamen und der Variablen, der die Funktion zugewiesen ist. Der Funktionsname kann nicht geändert werden, während die Variable, der die Funktion zugewiesen ist, neu zugewiesen werden kann. Der Funktionsname kann sich von der Variablen unterscheiden, der die Funktion zugewiesen ist — sie haben keine Beziehung zueinander. Der Funktionsname kann nur innerhalb des Funktionskörpers verwendet werden. Der Versuch, ihn außerhalb des Funktionskörpers zu verwenden, führt zu einem Fehler (oder erhält einen anderen Wert, wenn derselbe Name anderswo deklariert ist). Zum Beispiel:

```js
const y = function x() {};
console.log(x); // ReferenceError: x is not defined
```

Andererseits ist die Variable, der die Funktion zugewiesen ist, nur durch ihren Gültigkeitsbereich beschränkt, der garantiert den Bereich einschließt, in dem die Funktion deklariert wurde.

Eine Funktionsdeklaration erstellt auch eine Variable mit demselben Namen wie der Funktionsname. Dies bedeutet, dass im Gegensatz zu denen, die durch Funktionsausdrücke definiert sind, Funktionen, die durch Funktionsdeklarationen definiert sind, durch ihren Namen im Bereich, in dem sie definiert wurden, sowie in ihrem eigenen Körper aufgerufen werden können.

Eine Funktion, die durch `new Function` definiert ist, wird dynamisch aus ihrer Quelltextkette zusammengesetzt, was beobachtbar ist, wenn Sie sie serialisieren. Zum Beispiel gibt `console.log(new Function().toString())`:

```js-nolint
function anonymous(
) {

}
```

Dies ist der tatsächliche Quellcode, der zur Kompilierung der Funktion verwendet wird. Obwohl der `Function()`-Konstruktor die Funktion mit dem Namen `anonymous` erstellt, wird dieser Name nicht dem Bereich des Körpers hinzugefügt. Der Körper hat nur Zugriff auf globale Variablen. Zum Beispiel würde das folgende zu einem Fehler führen:

```js
new Function("alert(anonymous);")();
```

Eine Funktion, die durch einen Funktionsausdruck oder eine Funktionsdeklaration definiert ist, erbt den aktuellen Bereich. Das bedeutet, die Funktion bildet eine Closure. Andernfalls erben durch einen `Function`-Konstruktor definierte Funktionen keinen Bereich außer den globalen Bereich (den alle Funktionen erben).

```js
// p is a global variable
globalThis.p = 5;
function myFunc() {
  // p is a local variable
  const p = 9;

  function decl() {
    console.log(p);
  }
  const expr = function () {
    console.log(p);
  };
  const cons = new Function("\tconsole.log(p);");

  decl();
  expr();
  cons();
}
myFunc();

// Logs:
// 9 (for 'decl' by function declaration (current scope))
// 9 (for 'expr' by function expression (current scope))
// 5 (for 'cons' by Function constructor (global scope))
```

Durch Funktionsausdrücke und Funktionsdeklarationen definierte Funktionen werden nur einmal analysiert, während eine Funktion, die durch den `Function`-Konstruktor definiert ist, den an sie übergebenen String jedes Mal analysiert, wenn der Konstruktor aufgerufen wird. Obwohl ein Funktionsausdruck jedes Mal eine Closure erzeugt, wird der Funktionskörper nicht erneut analysiert, sodass Funktionsausdrücke immer noch schneller sind als `new Function(...)`. Daher sollte der `Function`-Konstruktor generell vermieden werden, wann immer es möglich ist.

Eine Funktionsdeklaration kann unbeabsichtigt in einen Funktionsausdruck umgewandelt werden, wenn sie in einem Ausdruckskontext vorkommt.

```js
// A function declaration
function foo() {
  console.log("FOO!");
}

doSomething(
  // A function expression passed as an argument
  function foo() {
    console.log("FOO!");
  },
);
```

Andererseits kann ein Funktionsausdruck auch in eine Funktionsdeklaration umgewandelt werden. Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit den Schlüsselwörtern `function` oder `async function` beginnen, was ein häufiger Fehler bei der Implementierung von [sofort ausgeführten Funktionsausdrücken (IIFEs)](/de/docs/Glossary/IIFE) ist.

```js-nolint example-bad
function () { // SyntaxError: Function statements require a function name
  console.log("FOO!");
}();

function foo() {
  console.log("FOO!");
}(); // SyntaxError: Unexpected token ')'
```

Stattdessen sollten Sie die Ausdrucksanweisung mit etwas anderem beginnen, sodass das Schlüsselwort `function` unmissverständlich einen Funktionsausdruck beginnt. Gängige Optionen sind [Gruppierung](/de/docs/Web/JavaScript/Reference/Operators/Grouping) und die Verwendung von [`void`](/de/docs/Web/JavaScript/Reference/Operators/void).

```js-nolint example-good
(function () {
  console.log("FOO!");
})();

void function () {
  console.log("FOO!");
}();
```

### Funktionsparameter

Jeder Funktionsparameter ist ein einfacher Bezeichner, auf den Sie im lokalen Gültigkeitsbereich zugreifen können.

```js
function myFunc(a, b, c) {
  // You can access the values of a, b, and c here
}
```

Es gibt drei spezielle Parametersyntaxen:

- [_Standardparameter_](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) ermöglichen es, formale Parameter mit Standardwerten zu initialisieren, wenn kein Wert oder `undefined` übergeben wird.
- Der [_Rest-Parameter_](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) ermöglicht es, eine unbestimmte Anzahl von Argumenten als Array darzustellen.
- [_Destrukturierung_](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) ermöglicht es, Elemente aus Arrays oder Eigenschaften aus Objekten in einzelne Variablen zu entpacken.

```js
function myFunc({ a, b }, c = 1, ...rest) {
  // You can access the values of a, b, c, and rest here
}
```

Es gibt einige Konsequenzen, wenn eine der oben genannten nicht-einfachen Parametersyntaxen verwendet wird:

- Sie können `"use strict"` nicht auf den Funktionskörper anwenden — dies verursacht einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).
- Selbst wenn die Funktion nicht im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, gelten bestimmte strikte Modus-Funktionseigenschaften, einschließlich, dass das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt nicht mehr mit den benannten Parametern synchronisiert wird, [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) einen Fehler wirft, wenn darauf zugegriffen wird, und doppelte Parameternamen nicht erlaubt sind.

### Das arguments-Objekt

Sie können auf die Argumente einer Funktion innerhalb der Funktion durch das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt zugreifen.

- [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)
  - : Ein Array-ähnliches Objekt, das die an die aktuell ausgeführte Funktion übergebenen Argumente enthält.
- [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)
  - : Die aktuell ausgeführte Funktion.
- [`arguments.length`](/de/docs/Web/JavaScript/Reference/Functions/arguments/length)
  - : Die Anzahl der an die Funktion übergebenen Argumente.

### Getter- und Setter-Funktionen

Sie können Accessor-Eigenschaften auf jedem Standardobjekt oder benutzerdefinierten Objekt definieren, das die Hinzufügung neuer Eigenschaften unterstützt. Innerhalb von [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Klassen](/de/docs/Web/JavaScript/Reference/Classes) können Sie spezielle Syntaxen verwenden, um den Getter und Setter einer Accessor-Eigenschaft zu definieren.

- [get](/de/docs/Web/JavaScript/Reference/Functions/get)
  - : Bindet eine Objekteigenschaft an eine Funktion, die aufgerufen wird, wenn diese Eigenschaft abgerufen wird.
- [set](/de/docs/Web/JavaScript/Reference/Functions/set)
  - : Bindet eine Objekteigenschaft an eine Funktion, die aufgerufen wird, wenn versucht wird, diese Eigenschaft zu setzen.

Beachten Sie, dass diese Syntaxen eine _Objekteigenschaft_ und keine _Methode_ erstellen. Die Getter- und Setter-Funktionen selbst können nur mit reflektierenden APIs wie {{jsxref("Object.getOwnPropertyDescriptor()")}} abgerufen werden.

### Blockbasierte Funktionen

Im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) sind Funktionen innerhalb von Blöcken auf diesen Block beschränkt. Vor ES2015 waren blockbasierte Funktionen im strikten Modus verboten.

```js
"use strict";

function f() {
  return 1;
}

{
  function f() {
    return 2;
  }
}

f() === 1; // true

// f() === 2 in non-strict mode
```

### Blockbasierte Funktionen in nicht-striktem Code

In einem Wort: **Nicht tun.**

In nicht-striktem Code verhalten sich Funktionsdeklarationen innerhalb von Blöcken seltsam. Zum Beispiel:

```js
if (shouldDefineZero) {
  function zero() {
    // DANGER: compatibility risk
    console.log("This is zero.");
  }
}
```

Die Semantik dessen im strikten Modus ist wohldefiniert — `zero` existiert nur innerhalb dieses Scopes des `if`-Blocks. Wenn `shouldDefineZero` false ist, sollte `zero` niemals definiert sein, da der Block nie ausgeführt wird. Historisch war dies jedoch nicht spezifiziert, sodass dies in nicht-striktem Modus in verschiedenen Browsern unterschiedlich implementiert wurde. Für weitere Informationen siehe die Referenz zur [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration).

Ein sichererer Weg, Funktionen bedingt zu definieren, besteht darin, einen Funktionsausdruck einer Variablen zuzuweisen:

```js
// Using a var makes it available as a global variable,
// with closer behavior to a top-level function declaration
var zero;
if (shouldDefineZero) {
  zero = function () {
    console.log("This is zero.");
  };
}
```

## Beispiele

### Rückgabe einer formatierten Zahl

Die folgende Funktion gibt einen String zurück, der die formatierte Darstellung einer Zahl enthält, die mit führenden Nullen aufgefüllt ist.

```js
// This function returns a string padded with leading zeros
function padZeros(num, totalLen) {
  let numStr = num.toString(); // Initialize return value as string
  const numZeros = totalLen - numStr.length; // Calculate no. of zeros
  for (let i = 1; i <= numZeros; i++) {
    numStr = `0${numStr}`;
  }
  return numStr;
}
```

Die folgenden Anweisungen rufen die Funktion `padZeros` auf.

```js
let result;
result = padZeros(42, 4); // returns "0042"
result = padZeros(42, 2); // returns "42"
result = padZeros(5, 4); // returns "0005"
```

### Überprüfen, ob eine Funktion existiert

Sie können überprüfen, ob eine Funktion existiert, indem Sie den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator verwenden. Im folgenden Beispiel wird überprüft, ob das `window`-Objekt eine Eigenschaft namens `noFunc` hat, die eine Funktion ist. Wenn ja, wird sie verwendet; andernfalls wird eine andere Aktion ausgeführt.

```js
if (typeof window.noFunc === "function") {
  // use noFunc()
} else {
  // do something else
}
```

Beachten Sie, dass im `if`-Test auf `noFunc` nur verwiesen wird — es gibt keine Klammern `()` nach dem Funktionsnamen, sodass die eigentliche Funktion nicht aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Statements/function", "function")}}
- [`function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Function")}}
