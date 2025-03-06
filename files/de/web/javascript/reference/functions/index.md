---
title: Funktionen
slug: Web/JavaScript/Reference/Functions
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Functions")}}

Im Allgemeinen ist eine Funktion ein "Unterprogramm", das durch externen (oder internen, im Falle von Rekursion) Code der Funktion _aufgerufen_ werden kann. Wie das Programm selbst besteht auch eine Funktion aus einer Abfolge von Anweisungen, die als _Funktionskörper_ bezeichnet werden. Werte können als Parameter an eine Funktion _übergeben_ werden, und die Funktion wird einen Wert _zurückgeben_.

In JavaScript sind Funktionen {{Glossary("First-class_Function", "erstklassige Objekte")}}, da sie an andere Funktionen übergeben, von Funktionen zurückgegeben und Variablen und Eigenschaften zugewiesen werden können. Sie können auch Eigenschaften und Methoden haben, genau wie jedes andere Objekt. Was sie von anderen Objekten unterscheidet, ist, dass Funktionen aufgerufen werden können.

Weitere Beispiele und Erklärungen finden Sie im [JavaScript-Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions).

## Beschreibung

Funktionswerte sind typischerweise Instanzen von [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function). Siehe {{jsxref("Function")}} für Informationen zu den Eigenschaften und Methoden von `Function`-Objekten. Aufrufbare Werte führen dazu, dass [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) `"function"` statt `"object"` zurückgibt.

> [!NOTE]
> Nicht alle aufrufbaren Werte sind `instanceof Function`. Zum Beispiel ist das `Function.prototype`-Objekt aufrufbar, aber keine Instanz von `Function`. Es ist auch möglich, die [Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) Ihrer Funktion manuell so einzustellen, dass sie nicht mehr von `Function.prototype` erbt. Solche Fälle sind jedoch äußerst selten.

### Rückgabewert

Standardmäßig, wenn die Ausführung einer Funktion nicht mit einer [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung endet oder wenn das `return`-Schlüsselwort keinen Ausdruck danach hat, dann ist der Rückgabewert {{jsxref("undefined")}}. Die `return`-Anweisung ermöglicht es, einen beliebigen Wert aus der Funktion zurückzugeben. Ein Funktionsaufruf kann nur einen Wert zurückgeben, aber Sie können den Effekt des Zurückgebens mehrerer Werte simulieren, indem Sie ein Objekt oder Array zurückgeben und das Ergebnis [destructuren](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

> [!NOTE]
> Konstruktoren, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, haben eine andere Logik zur Bestimmung ihrer Rückgabewerte.

### Übergabe von Argumenten

[Parameter und Argumente](<https://de.wikipedia.org/wiki/Parameter_(Programmierung)#Parameters_and_arguments>) haben leicht unterschiedliche Bedeutungen, aber in den MDN Web Docs verwenden wir sie oft austauschbar. Für eine kurze Referenz:

```js
function formatNumber(num) {
  return num.toFixed(2);
}

formatNumber(2);
```

In diesem Beispiel wird die Variable `num` als _Parameter_ der Funktion bezeichnet: Sie wird in der klammerumschlossenen Liste der Funktionsdefinition deklariert. Die Funktion erwartet, dass der `num`-Parameter eine Zahl ist — obwohl dies in JavaScript ohne Laufzeitvalidierungscode nicht durchsetzbar ist. Im `formatNumber(2)`-Aufruf ist die Zahl `2` das _Argument_ der Funktion: Es ist der Wert, der tatsächlich bei dem Funktionsaufruf an die Funktion übergeben wird. Der Argumentwert kann im Funktionskörper über den entsprechenden Parameternamen oder das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt zugänglich gemacht werden.

Argumente werden immer [_by Value_](https://de.wikipedia.org/wiki/By_Value) übergeben und niemals _by Reference_. Das bedeutet, dass wenn eine Funktion einen Parameter neu zuweist, sich der Wert außerhalb der Funktion nicht ändert. Genauer gesagt werden Objektargumente [_by Sharing_](https://de.wikipedia.org/wiki/By_Sharing) übergeben, was bedeutet, dass wenn die Eigenschaften des Objekts verändert werden, die Änderung auch außerhalb der Funktion Auswirkungen hat. Zum Beispiel:

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

Das Schlüsselwort [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) bezieht sich auf das Objekt, auf das die Funktion zugegriffen wird — es bezieht sich nicht auf die aktuell ausgeführte Funktion, daher müssen Sie auf den Funktionswert über dessen Namen, sogar im Funktionskörper, verweisen.

### Definition von Funktionen

Im Großen und Ganzen gibt es in JavaScript vier Arten von Funktionen:

- Reguläre Funktion: kann irgendetwas zurückgeben; läuft immer bis zur Fertigstellung nach dem Aufruf
- Generatorfunktion: gibt ein [`Generator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator)-Objekt zurück; kann mit dem [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)-Operator pausiert und fortgesetzt werden
- Asynchrone Funktion: gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück; kann mit dem [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator pausiert und fortgesetzt werden
- Asynchrone Generatorfunktion: gibt ein [`AsyncGenerator`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)-Objekt zurück; sowohl die Operatoren `await` als auch `yield` können verwendet werden

Für jede Art von Funktion gibt es mehrere Möglichkeiten, sie zu definieren:

- Deklaration
  - : [`function`](/de/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function), [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*)
- Ausdruck
  - : [`function`](/de/docs/Web/JavaScript/Reference/Operators/function), [`function*`](/de/docs/Web/JavaScript/Reference/Operators/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Operators/async_function), [`async function*`](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- Konstruktor
  - : [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function), [`GeneratorFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction), [`AsyncFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction), [`AsyncGeneratorFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction)

Darüber hinaus gibt es spezielle Syntaxen zur Definition von [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) und [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions), die präzisere Semantiken für ihre Verwendung bieten. [Klassen](/de/docs/Web/JavaScript/Reference/Classes) sind konzeptionell keine Funktionen (weil sie einen Fehler werfen, wenn sie ohne `new` aufgerufen werden), aber sie erben auch von `Function.prototype` und haben `typeof MyClass === "function"`.

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

Alle Syntaxen machen in etwa dasselbe, aber es gibt einige subtile Verhaltensunterschiede.

- Der `Function()`-Konstruktor, der `function`-Ausdruck und die `function`-Deklarations-Syntaxen erzeugen vollwertige Funktionsobjekte, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden können. Pfeilfunktionen und Methoden können jedoch nicht konstruiert werden. Asynchrone Funktionen, Generatorfunktionen und asynchrone Generatorfunktionen sind unabhängig von der Syntax nicht konstruierbar.
- Die `function`-Deklaration erstellt Funktionen, die [_gehoistet_](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) sind. Andere Syntaxen hoist die Funktion nicht und der Funktionswert ist erst nach der Definition sichtbar.
- Die Pfeilfunktion und der `Function()`-Konstruktor erstellen immer _anonyme_ Funktionen, was bedeutet, dass sie sich nicht leicht rekursiv aufrufen können. Eine Möglichkeit, eine Pfeilfunktion rekursiv aufzurufen, besteht darin, sie einer Variablen zuzuweisen.
- Die Pfeilfunktion-Syntax hat keinen Zugriff auf `arguments` oder `this`.
- Der `Function()`-Konstruktor kann auf keine lokalen Variablen zugreifen – er hat nur Zugriff auf den globalen Gültigkeitsbereich.
- Der `Function()`-Konstruktor verursacht eine Laufzeitkompilierung und ist oft langsamer als andere Syntaxen.

Für `function`-Ausdrücke gibt es einen Unterschied zwischen dem Funktionsnamen und der Variablen, der die Funktion zugewiesen ist. Der Funktionsname kann nicht geändert werden, während die Variable, der die Funktion zugewiesen ist, neu zugewiesen werden kann. Der Funktionsname kann sich von der Variable unterscheiden, der die Funktion zugewiesen ist – sie haben keine Beziehung zueinander. Der Funktionsname kann nur innerhalb des Funktionskörpers verwendet werden. Der Versuch, ihn außerhalb des Funktionskörpers zu verwenden, führt zu einem Fehler (oder erhält einen anderen Wert, wenn derselbe Name anderswo deklariert ist). Zum Beispiel:

```js
const y = function x() {};
console.log(x); // ReferenceError: x is not defined
```

Andererseits ist die Variable, der die Funktion zugewiesen ist, nur durch ihren Gültigkeitsbereich begrenzt, der garantiert den Bereich umfasst, in dem die Funktion deklariert wurde.

Eine Funktionsdeklaration erstellt auch eine Variable mit demselben Namen wie der Funktionsname. Daher können Funktionen, die durch Funktionsdeklarationen definiert sind, anders als diejenigen, die durch Funktionsexpressionen definiert sind, innerhalb des Bereichs, in dem sie definiert wurden, sowie in ihrem eigenen Körper über ihren Namen aufgerufen werden.

Eine Funktion, die durch `new Function` definiert wird, hat ihren Quellcode dynamisch zusammengesetzt, was beobachtbar ist, wenn Sie sie serialisieren. Zum Beispiel gibt `console.log(new Function().toString())`:

```js-nolint
function anonymous(
) {

}
```

Dies ist der tatsächliche Quellcode, der verwendet wird, um die Funktion zu kompilieren. Obwohl der `Function()`-Konstruktor die Funktion mit dem Namen `anonymous` erstellt, wird dieser Name nicht dem Gültigkeitsbereich des Körpers hinzugefügt. Der Körper hat nur Zugriff auf globale Variablen. Zum Beispiel würde Folgendes zu einem Fehler führen:

```js
new Function("alert(anonymous);")();
```

Eine Funktion, die durch einen Funktionsausdruck oder eine Funktionsdeklaration definiert wird, erbt den aktuellen Gültigkeitsbereich. Das bedeutet, dass die Funktion eine Closure bildet. Andererseits erbt eine Funktion, die durch einen `Function`-Konstruktor definiert wird, keinen anderen Gültigkeitsbereich als den globalen (den alle Funktionen erben).

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

Funktionen, die durch Funktionsexpressionen und Funktionsdeklarationen definiert werden, werden nur einmal geparst, während eine Funktion, die durch den `Function`-Konstruktor definiert wird, den String bei jedem Aufruf des Konstruktors neu parst. Obwohl ein Funktionsexpression bei jeder Ausführung eine neue Closure erstellt, wird der Funktionskörper nicht neu geparst, sodass Funktionsexpressionen trotzdem schneller sind als `new Function(...)`. Daher sollte der `Function`-Konstruktor nach Möglichkeit vermieden werden.

Eine Funktionsdeklaration kann unbeabsichtigt in eine Funktionsexpression umgewandelt werden, wenn sie in einem Ausdruckskontext erscheint.

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

Andererseits kann eine Funktionsexpression auch in eine Funktionsdeklaration umgewandelt werden. Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit den Schlüsselwörtern `function` oder `async function` beginnen, was ein häufiger Fehler bei der Implementierung von {{Glossary("IIFE", "IIFEs")}} (Immediately Invoked Function Expressions) ist.

```js-nolint example-bad
function () { // SyntaxError: Function statements require a function name
  console.log("FOO!");
}();

function foo() {
  console.log("FOO!");
}(); // SyntaxError: Unexpected token ')'
```

Stattdessen starten Sie die Ausdrucksanweisung mit etwas anderem, sodass das `function`-Schlüsselwort eindeutig einen Funktionsausdruck startet. Übliche Optionen sind [Gruppierung](/de/docs/Web/JavaScript/Reference/Operators/Grouping) und die Verwendung von [`void`](/de/docs/Web/JavaScript/Reference/Operators/void).

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
- Der [_Restparameter_](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) ermöglicht die Darstellung einer unbestimmten Anzahl von Argumenten als Array.
- [_Destructuring_](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) ermöglicht das Entpacken von Elementen aus Arrays oder Eigenschaften von Objekten in separate Variablen.

```js
function myFunc({ a, b }, c = 1, ...rest) {
  // You can access the values of a, b, c, and rest here
}
```

Es gibt einige Konsequenzen, wenn eine der obigen nicht einfachen Parametersyntaxen verwendet wird:

- Sie können nicht `"use strict"` auf den Funktionskörper anwenden – dies verursacht einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).
- Auch wenn die Funktion nicht im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, gelten bestimmte Funktionen des Strict Mode, einschließlich dass das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt nicht mit den benannten Parametern synchronisiert wird, dass [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) einen Fehler auslöst, wenn darauf zugegriffen wird, und dass doppelte Parameternamen nicht erlaubt sind.

### Das arguments-Objekt

Sie können auf die Argumente einer Funktion innerhalb der Funktion mit dem [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt zugreifen.

- [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)
  - : Ein arrayähnliches Objekt, das die an die aktuell ausgeführte Funktion übergebenen Argumente enthält.
- [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)
  - : Die aktuell ausgeführte Funktion.
- [`arguments.length`](/de/docs/Web/JavaScript/Reference/Functions/arguments/length)
  - : Die Anzahl der an die Funktion übergebenen Argumente.

### Getter- und Setterfunktionen

Sie können Zugriffsereigenschaften auf jedem Standard-Built-in-Objekt oder benutzerdefiniertem Objekt definieren, das die Hinzufügung neuer Eigenschaften unterstützt. Innerhalb von [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Klassen](/de/docs/Web/JavaScript/Reference/Classes) können Sie spezielle Syntaxen verwenden, um den Getter und Setter einer Zugriffseigenschaft zu definieren.

- [get](/de/docs/Web/JavaScript/Reference/Functions/get)
  - : Bindet eine Objekteigenschaft an eine Funktion, die aufgerufen wird, wenn auf diese Eigenschaft zugegriffen wird.
- [set](/de/docs/Web/JavaScript/Reference/Functions/set)
  - : Bindet eine Objekteigenschaft an eine Funktion, die aufgerufen wird, wenn versucht wird, diese Eigenschaft zu setzen.

Beachten Sie, dass diese Syntaxen eine _Objekteigenschaft_ und keine _Methode_ erstellen. Die Getter- und Setterfunktionen selbst können nur mit reflektierenden APIs wie {{jsxref("Object.getOwnPropertyDescriptor()")}} aufgerufen werden.

### Funktionen auf Blockebene

Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) sind Funktionen innerhalb von Blöcken auf diesen Block beschränkt. Vor ES2015 waren Funktionen auf Blockebene im Strict Mode verboten.

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

### Funktionen auf Blockebene in nicht-strikten Code

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

Die Semantik davon im Strict Mode ist gut spezifiziert — `zero` existiert nur innerhalb des `if`-Blocks. Wenn `shouldDefineZero` false ist, sollte `zero` niemals definiert werden, da der Block nie ausgeführt wird. Historisch gesehen war dies jedoch nicht spezifiziert, sodass verschiedene Browser dies unterschiedlich im nicht-strikten Modus implementierten. Weitere Informationen finden Sie im [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration)-Referenz.

Eine sicherere Methode, um Funktionen bedingt zu definieren, besteht darin, eine Funktionsexpression einer Variablen zuzuweisen:

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

Die folgende Funktion gibt einen String zurück, der die formatierte Darstellung einer Zahl mit führenden Nullen enthält.

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

Die folgenden Anweisungen rufen die `padZeros`-Funktion auf.

```js
let result;
result = padZeros(42, 4); // returns "0042"
result = padZeros(42, 2); // returns "42"
result = padZeros(5, 4); // returns "0005"
```

### Bestimmen, ob eine Funktion existiert

Sie können bestimmen, ob eine Funktion existiert, indem Sie den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator verwenden. Im folgenden Beispiel wird ein Test durchgeführt, um festzustellen, ob das `window`-Objekt eine Eigenschaft namens `noFunc` hat, die eine Funktion ist. Falls ja, wird sie verwendet; andernfalls wird eine andere Aktion durchgeführt.

```js
if (typeof window.noFunc === "function") {
  // use noFunc()
} else {
  // do something else
}
```

Beachten Sie, dass im `if`-Test ein Verweis auf `noFunc` verwendet wird — es gibt keine Klammern `()` nach dem Funktionsnamen, sodass die eigentliche Funktion nicht aufgerufen wird.

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
