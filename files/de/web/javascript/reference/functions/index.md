---
title: Funktionen
slug: Web/JavaScript/Reference/Functions
l10n:
  sourceCommit: e69618d78ec3ee346b0da618c720f477e5660c9c
---

{{jsSidebar("Functions")}}

Allgemein gesprochen ist eine Funktion ein "Unterprogramm", das von Code außerhalb (oder innerhalb, im Fall der Rekursion) der Funktion _aufgerufen_ werden kann. Wie das Programm selbst besteht eine Funktion aus einer Folge von Anweisungen, die als _Funktionskörper_ bezeichnet werden. Werte können einer Funktion als Parameter _übergeben_ werden, und die Funktion wird einen Wert _zurückgeben_.

In JavaScript sind Funktionen [Erstklassige Objekte](/de/docs/Glossary/First-class_Function), da sie an andere Funktionen übergeben, von Funktionen zurückgegeben und Variablen sowie Eigenschaften zugewiesen werden können. Sie können auch Eigenschaften und Methoden haben, genau wie jedes andere Objekt. Was sie von anderen Objekten unterscheidet, ist, dass Funktionen aufgerufen werden können.

Für weitere Beispiele und Erklärungen siehe den [JavaScript-Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions).

## Beschreibung

Funktionswerte sind typischerweise Instanzen von [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function). Siehe {{jsxref("Function")}} für Informationen zu Eigenschaften und Methoden von `Function`-Objekten. Aufrufbare Werte bewirken, dass [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) `"function"` statt `"object"` zurückgibt.

> [!NOTE]
> Nicht alle aufrufbaren Werte sind `instanceof Function`. Zum Beispiel ist das `Function.prototype`-Objekt aufrufbar, aber keine Instanz von `Function`. Sie können auch die [Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) Ihrer Funktion manuell setzen, sodass sie nicht mehr von `Function.prototype` erbt. Solche Fälle sind jedoch extrem selten.

### Rückgabewert

Standardmäßig, wenn die Ausführung einer Funktion nicht mit einer [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung endet, oder wenn das `return`-Schlüsselwort keinen Ausdruck hinter sich hat, ist der Rückgabewert {{jsxref("undefined")}}. Die `return`-Anweisung erlaubt Ihnen, einen beliebigen Wert von der Funktion zurückzugeben. Ein Funktionsaufruf kann nur einen Wert zurückgeben, aber Sie können den Effekt des Zurückgebens mehrerer Werte simulieren, indem Sie ein Objekt oder ein Array zurückgeben und das Ergebnis [destrukturieren](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

> [!NOTE]
> Konstruktoren, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, verwenden eine andere Logik zur Bestimmung ihrer Rückgabewerte.

### Übergabe von Argumenten

[Parameter und Argumente](<https://en.wikipedia.org/wiki/Parameter_(computer_programming)#Parameters_and_arguments>) haben leicht unterschiedliche Bedeutungen, aber in den MDN-Webdokumenten verwenden wir sie oft austauschbar. Für eine schnelle Referenz:

```js
function formatNumber(num) {
  return num.toFixed(2);
}

formatNumber(2);
```

In diesem Beispiel wird die Variable `num` als Parameter der Funktion bezeichnet: Sie wird in der klammergeschlossenen Liste der Funktionsdefinition deklariert. Die Funktion erwartet, dass der Parameter `num` eine Zahl ist — obwohl dies in JavaScript ohne das Schreiben von Laufzeit-Validierungscode nicht durchsetzbar ist. Im Aufruf `formatNumber(2)` ist die Zahl `2` das Argument der Funktion: Es ist der Wert, der tatsächlich im Funktionsaufruf an die Funktion übergeben wird. Der Argumentwert kann innerhalb des Funktionskörpers über den entsprechenden Parameternamen oder das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt zugegriffen werden.

Argumente werden immer [_per Wert übergeben_](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_reference) und nie _per Referenz_. Das bedeutet, dass, wenn eine Funktion einen Parameter neu zuweist, sich der Wert außerhalb der Funktion nicht ändert. Genauer gesagt, werden Objektargumente [_per Teilen übergeben_](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_sharing), was bedeutet, dass wenn die Eigenschaften des Objekts verändert werden, sich die Änderung außerhalb der Funktion auswirkt. Zum Beispiel:

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

Das Schlüsselwort [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) bezieht sich auf das Objekt, auf dem die Funktion aufgerufen wird — es bezieht sich nicht auf die aktuell ausgeführte Funktion, sodass Sie im Funktionskörper auf den Funktionswert namentlich verweisen müssen.

### Definition von Funktionen

Allgemein gesprochen hat JavaScript vier Arten von Funktionen:

- Reguläre Funktion: kann alles zurückgeben; läuft nach Aufruf immer bis zum Ende
- Generatorfunktion: gibt ein [`Generator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator)-Objekt zurück; kann mit dem [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)-Operator pausiert und fortgesetzt werden
- Asynchrone Funktion: gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück; kann mit dem [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator pausiert und fortgesetzt werden
- Asynchrone Generatorfunktion: gibt ein [`AsyncGenerator`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)-Objekt zurück; sowohl die Operatoren `await` als auch `yield` können verwendet werden

Für jede Art von Funktion gibt es mehrere Möglichkeiten zur Definition:

- Deklaration
  - : [`function`](/de/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function), [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*)
- Ausdruck
  - : [`function`](/de/docs/Web/JavaScript/Reference/Operators/function), [`function*`](/de/docs/Web/JavaScript/Reference/Operators/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Operators/async_function), [`async function*`](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- Konstruktor
  - : [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function), [`GeneratorFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction), [`AsyncFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction), [`AsyncGeneratorFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction)

Darüber hinaus gibt es spezielle Syntaxen zur Definition von [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) und [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions), die genauere Semantiken für ihre Verwendung bieten. [Klassen](/de/docs/Web/JavaScript/Reference/Classes) sind konzeptionell keine Funktionen (da sie beim Aufruf ohne `new` einen Fehler werfen), aber sie erben auch von `Function.prototype` und haben `typeof MyClass === "function"`.

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

Alle Syntaxen tun ungefähr das Gleiche, aber es gibt einige subtile Verhaltensunterschiede.

- Der `Function()`-Konstruktor, der `function`-Ausdruck und die `function`-Deklarationssyntax erstellen vollwertige Funktionsobjekte, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden können. Pfeilfunktionen und Methoden können jedoch nicht konstruiert werden. Asynchrone Funktionen, Generatorfunktionen und asynchrone Generatorfunktionen sind unabhängig von der Syntax nicht konstruierbar.
- Die `function`-Deklaration erstellt Funktionen, die [_gehoben_](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) werden. Andere Syntaxen heben die Funktion nicht, und der Funktionswert ist erst nach der Definition sichtbar.
- Die Pfeilfunktion und der `Function()`-Konstruktor erstellen immer _anonyme_ Funktionen, was bedeutet, dass sie sich nicht so leicht rekursiv aufrufen können. Eine Möglichkeit, eine Pfeilfunktion rekursiv aufzurufen, besteht darin, sie einer Variablen zuzuweisen.
- Die Pfeilfunktionssyntax hat keinen Zugriff auf `arguments` oder `this`.
- Der `Function()`-Konstruktor kann auf keine lokalen Variablen zugreifen — er hat nur Zugriff auf den globalen Gültigkeitsbereich.
- Der `Function()`-Konstruktor verursacht eine Laufzeitkompilierung und ist oft langsamer als andere Syntaxen.

Bei `function`-Ausdrücken gibt es eine Unterscheidung zwischen dem Funktionsnamen und der Variablen, der die Funktion zugewiesen ist. Der Funktionsname kann nicht geändert werden, während die Variable, der die Funktion zugewiesen ist, neu zugewiesen werden kann. Der Funktionsname kann sich von der Variablen unterscheiden, der die Funktion zugewiesen ist — sie haben keine Beziehung zueinander. Der Funktionsname kann nur innerhalb des Funktionskörpers verwendet werden. Versuche, ihn außerhalb des Funktionskörpers zu verwenden, führen zu einem Fehler (oder erhalten einen anderen Wert, wenn der gleiche Name anderswo deklariert ist). Zum Beispiel:

```js
const y = function x() {};
console.log(x); // ReferenceError: x is not defined
```

Andererseits ist die Variable, der die Funktion zugewiesen wird, nur durch ihren Gültigkeitsbereich begrenzt, der garantiert den Gültigkeitsbereich umfasst, in dem die Funktion deklariert wurde.

Eine Funktionsdeklaration erstellt auch eine Variable mit dem gleichen Namen wie der Funktionsname. Daher können Funktionen, die durch Funktionsdeklarationen definiert sind, anders als durch Funktionsausdrücke definierte, in dem Gültigkeitsbereich, in dem sie definiert wurden, sowie in ihrem eigenen Körper durch ihren Namen aufgerufen werden.

Eine Funktion, die durch `new Function` definiert wird, wird dynamisch mit ihrem Quellcode zusammengesetzt, was beobachtbar ist, wenn Sie sie serialisieren. Zum Beispiel ergibt `console.log(new Function().toString())`:

```js-nolint
function anonymous(
) {

}
```

Dies ist der tatsächliche Quellcode, der zur Kompilierung der Funktion verwendet wird. Allerdings, auch wenn der `Function()`-Konstruktor die Funktion mit dem Namen `anonymous` erstellt, wird dieser Name nicht in den Gültigkeitsbereich des Körpers eingefügt. Der Körper hat nur Zugriff auf globale Variablen. Zum Beispiel würde das Folgende zu einem Fehler führen:

```js
new Function("alert(anonymous);")();
```

Eine Funktion, die durch einen Funktionsausdruck oder durch eine Funktionsdeklaration definiert wird, erbt den aktuellen Gültigkeitsbereich. Das heißt, die Funktion bildet eine Schließung. Andererseits erbt eine Funktion, die durch einen `Function`-Konstruktor definiert ist, keinen anderen Gültigkeitsbereich als den globalen Gültigkeitsbereich (den alle Funktionen erben).

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

Funktionen, die durch Funktionsausdrücke und Funktionsdeklarationen definiert werden, werden nur einmalig geparst, während eine Funktion, die durch den `Function`-Konstruktor definiert wird, den an sie übergebenen Ausdruck jedes Mal parst, wenn der Konstruktor aufgerufen wird. Obwohl ein Funktionsausdruck jedes Mal eine Schließung erstellt, wird der Funktionskörper nicht neu geparst, sodass Funktionsausdrücke immer noch schneller als `new Function(...)` sind. Daher sollte der `Function`-Konstruktor nach Möglichkeit vermieden werden.

Eine Funktionsdeklaration kann unbeabsichtigt in einen Funktionsausdruck umgewandelt werden, wenn sie in einem Ausdruckskontext erscheint.

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

Andererseits kann ein Funktionsausdruck auch in eine Funktionsdeklaration umgewandelt werden. Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) darf nicht mit den Schlüsselwörtern `function` oder `async function` beginnen, was ein häufiger Fehler bei der Implementierung von [IIFEs](/de/docs/Glossary/IIFE) (Immediately Invoked Function Expressions) ist.

```js-nolint example-bad
function () { // SyntaxError: Function statements require a function name
  console.log("FOO!");
}();

function foo() {
  console.log("FOO!");
}(); // SyntaxError: Unexpected token ')'
```

Stattdessen beginnen Sie die Ausdrucksanweisung mit etwas anderem, sodass das `function`-Schlüsselwort eindeutig einen Funktionsausdruck beginnt. Übliche Optionen sind [Gruppierung](/de/docs/Web/JavaScript/Reference/Operators/Grouping) und Verwendung von [`void`](/de/docs/Web/JavaScript/Reference/Operators/void).

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

- [_Standardparameter_](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) ermöglichen es, formale Parameter mit Standardwerten zu initialisieren, falls kein Wert oder `undefined` übergeben wird.
- Der [_Restparameter_](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) erlaubt es, eine unbestimmte Anzahl von Argumenten als Array darzustellen.
- [_Destrukturierung_](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) erlaubt es, Elemente aus Arrays oder Eigenschaften aus Objekten in einzelne Variablen zu entpacken.

```js
function myFunc({ a, b }, c = 1, ...rest) {
  // You can access the values of a, b, c, and rest here
}
```

Es gibt einige Konsequenzen, wenn eine der oben genannten nicht einfachen Parametersyntaxen verwendet wird:

- Sie können `"use strict"` nicht auf den Funktionskörper anwenden — dies führt zu einem [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).
- Auch wenn die Funktion nicht im [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, gelten bestimmte strikte Funktionenmodusfunktionen, einschließlich dass das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt nicht mehr mit den benannten Parametern synchronisiert wird, [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) einen Fehler wirft, wenn darauf zugegriffen wird, und doppelte Parameternamen nicht erlaubt sind.

### Das arguments-Objekt

Sie können innerhalb der Funktion auf die Argumente einer Funktion zugreifen, indem Sie das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt verwenden.

- [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)
  - : Ein arrayähnliches Objekt, das die an die aktuell ausgeführte Funktion übergebenen Argumente enthält.
- [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)
  - : Die aktuell ausgeführte Funktion.
- [`arguments.length`](/de/docs/Web/JavaScript/Reference/Functions/arguments/length)
  - : Die Anzahl der an die Funktion übergebenen Argumente.

### Getter- und Setterfunktionen

Sie können Zugriffsoroperties an jedem standardmäßig eingebauten oder benutzerdefinierten Objekt definieren, das das Hinzufügen neuer Eigenschaften unterstützt. Innerhalb von [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Klassen](/de/docs/Web/JavaScript/Reference/Classes) können Sie spezielle Syntaxen verwenden, um den Getter und Setter einer Zugriffsproperty zu definieren.

- [get](/de/docs/Web/JavaScript/Reference/Functions/get)
  - : Verbindet eine Objektproperty mit einer Funktion, die aufgerufen wird, wenn auf diese Property zugegriffen wird.
- [set](/de/docs/Web/JavaScript/Reference/Functions/set)
  - : Verbindet eine Objektproperty mit einer Funktion, die aufgerufen wird, wenn versucht wird, diese Property zu setzen.

Beachten Sie, dass diese Syntaxen eine _Objektproperty_ erstellen, keine _Methode_. Die Getter- und Setterfunktionen selbst können nur über reflektierende APIs wie {{jsxref("Object.getOwnPropertyDescriptor()")}} zugegriffen werden.

### Blocklevel-Funktionen

Im [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) sind Funktionen innerhalb von Blöcken nur in diesem Block sichtbar. Vor ES2015 waren Blocklevel-Funktionen im Strikten Modus verboten.

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

### Blocklevel-Funktionen in nicht-striktem Code

Mit einem Wort: **Nicht.**

In nicht-striktem Code verhalten sich Funktionsdeklarationen innerhalb von Blöcken seltsam. Zum Beispiel:

```js
if (shouldDefineZero) {
  function zero() {
    // DANGER: compatibility risk
    console.log("This is zero.");
  }
}
```

Die Semantik hiervon im Strikten Modus ist gut spezifiziert — `zero` existiert nur innerhalb des Gültigkeitsbereichs des `if`-Blocks. Wenn `shouldDefineZero` false ist, sollte `zero` nie definiert werden, da der Block nie ausgeführt wird. Historisch wurde dies jedoch nicht spezifiziert, sodass verschiedene Browser es in nicht-striktem Modus unterschiedlich implementierten. Für weitere Informationen siehe den Verweis auf die [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration).

Eine sicherere Möglichkeit, Funktionen konditional zu definieren, besteht darin, einen Funktionsausdruck einer Variablen zuzuweisen:

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

### Zurückgeben einer formatierten Zahl

Die folgende Funktion gibt eine Zeichenkette zurück, die die formatierte Darstellung einer Zahl enthält, die mit führenden Nullen aufgefüllt ist.

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

### Bestimmen, ob eine Funktion existiert

Sie können bestimmen, ob eine Funktion existiert, indem Sie den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator verwenden. Im folgenden Beispiel wird ein Test durchgeführt, um festzustellen, ob das `window`-Objekt eine Eigenschaft namens `noFunc` hat, die eine Funktion ist. Wenn ja, wird sie verwendet; andernfalls wird eine andere Aktion ausgeführt.

```js
if (typeof window.noFunc === "function") {
  // use noFunc()
} else {
  // do something else
}
```

Beachten Sie, dass im `if`-Test ein Verweis auf `noFunc` verwendet wird — es gibt keine Klammern `()` nach dem Funktionsnamen, sodass die tatsächliche Funktion nicht aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Statements/function", "function")}}
- [`function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Function")}}
