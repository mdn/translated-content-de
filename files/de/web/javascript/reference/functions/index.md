---
title: Funktionen
slug: Web/JavaScript/Reference/Functions
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Allgemein gesprochen ist eine Funktion ein "Unterprogramm", das von externem Code (oder internem Code im Fall von Rekursion) aufgerufen werden kann. Wie das Programm selbst besteht eine Funktion aus einer Abfolge von Anweisungen, die als _Funktionskörper_ bezeichnet werden. Werte können als Parameter an eine Funktion _übergeben_ werden, und die Funktion wird einen Wert _zurückgeben_.

In JavaScript sind Funktionen {{Glossary("First-class_Function", "first-class objects")}}, da sie an andere Funktionen übergeben, von Funktionen zurückgegeben und Variablen und Eigenschaften zugewiesen werden können. Sie können auch Eigenschaften und Methoden wie jedes andere Objekt haben. Was sie von anderen Objekten unterscheidet, ist, dass Funktionen aufgerufen werden können.

Für weitere Beispiele und Erklärungen siehe den [JavaScript-Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions).

## Beschreibung

Funktionswerte sind typischerweise Instanzen von [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function). Siehe {{jsxref("Function")}} für Informationen zu Eigenschaften und Methoden von `Function`-Objekten. Aufrufbare Werte veranlassen [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof), `"function"` anstelle von `"object"` zurückzugeben.

> [!NOTE]
> Nicht alle aufrufbaren Werte sind `instanceof Function`. Zum Beispiel ist das `Function.prototype`-Objekt aufrufbar, aber keine Instanz von `Function`. Sie können auch manuell die [Prototype-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) Ihrer Funktion so einstellen, dass sie nicht mehr von `Function.prototype` erbt. Solche Fälle sind jedoch äußerst selten.

### Rückgabewert

Standardmäßig ist der Rückgabewert {{jsxref("undefined")}}, wenn die Ausführung einer Funktion nicht mit einer [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung endet oder wenn das `return`-Schlüsselwort keinen Ausdruck danach hat. Die `return`-Anweisung ermöglicht es Ihnen, einen beliebigen Wert aus der Funktion zurückzugeben. Ein Funktionsaufruf kann nur einen Wert zurückgeben, aber man kann den Effekt des Zurückgebens mehrerer Werte simulieren, indem man ein Objekt oder Array zurückgibt und das Ergebnis [destrukturiert](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

> [!NOTE]
> Konstruktoren, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, haben eine andere Logik, um ihre Rückgabewerte zu bestimmen.

### Übergabe von Argumenten

[Parameter und Argumente](<https://de.wikipedia.org/wiki/Parameter_(Informatik)#Parameter_und_Argumente>) haben leicht unterschiedliche Bedeutungen, aber in den MDN-Web-Dokumentationen verwenden wir sie oft austauschbar. Für einen schnellen Überblick:

```js
function formatNumber(num) {
  return num.toFixed(2);
}

formatNumber(2);
```

In diesem Beispiel wird die Variable `num` als _Parameter_ der Funktion bezeichnet: Sie wird in der durch Klammern eingeschlossenen Liste der Funktionsdefinition deklariert. Die Funktion erwartet, dass der `num`-Parameter eine Zahl ist – obwohl dies in JavaScript nicht ohne Laufzeitüberprüfung erzwungen werden kann. Im `formatNumber(2)`-Aufruf ist die Zahl `2` das _Argument_ der Funktion: Es ist der Wert, der bei dem Funktionsaufruf tatsächlich an die Funktion übergeben wird. Der Argumentwert kann im Funktionskörper über den entsprechenden Parameternamen oder das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt zugegriffen werden.

Argumente werden immer [_per Wert_](https://de.wikipedia.org/wiki/Auswertungsstrategie#Aufruftypen) und nie _per Referenz_ übergeben. Das bedeutet, dass, wenn eine Funktion einen Parameter neu zuweist, sich der Wert außerhalb der Funktion nicht ändert. Genauer gesagt werden Objektargumente [_per Sharing_](https://de.wikipedia.org/wiki/Auswertungsstrategie#Call_by_sharing) übergeben, was bedeutet, dass, wenn die Eigenschaften des Objekts mutiert werden, die Änderung sich außerhalb der Funktion auswirkt. Zum Beispiel:

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

Das [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Schlüsselwort bezieht sich auf das Objekt, auf dem die Funktion aufgerufen wird — es bezieht sich nicht auf die aktuell ausgeführte Funktion, daher müssen Sie innerhalb des Funktionskörpers den Funktionswert mit seinem Namen referenzieren.

### Definition von Funktionen

Im Großen und Ganzen hat JavaScript vier Arten von Funktionen:

- Reguläre Funktion: kann alles zurückgeben; wird nach dem Aufruf immer bis zum Ende ausgeführt
- Generatorfunktion: gibt ein [`Generator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator)-Objekt zurück; kann mit dem [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)-Operator pausiert und fortgesetzt werden
- Async-Funktion: gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück; kann mit dem [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator pausiert und fortgesetzt werden
- Async-Generatorfunktion: gibt ein [`AsyncGenerator`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)-Objekt zurück; es können sowohl die `await`- als auch die `yield`-Operatoren verwendet werden

Für jede Art von Funktion gibt es mehrere Möglichkeiten, sie zu definieren:

- Deklaration
  - : [`function`](/de/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function), [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*)
- Ausdruck
  - : [`function`](/de/docs/Web/JavaScript/Reference/Operators/function), [`function*`](/de/docs/Web/JavaScript/Reference/Operators/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Operators/async_function), [`async function*`](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- Konstruktor
  - : [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function), [`GeneratorFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction), [`AsyncFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction), [`AsyncGeneratorFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction)

Zusätzlich gibt es spezielle Syntaxen zur Definition von [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) und [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions), die präzisere Semantiken für ihre Nutzung bieten. [Klassen](/de/docs/Web/JavaScript/Reference/Classes) sind konzeptuell keine Funktionen (da sie einen Fehler werfen, wenn sie ohne `new` aufgerufen werden), erben aber auch von `Function.prototype` und haben `typeof MyClass === "function"`.

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

Alle Syntaxen tun ungefähr dasselbe, aber es gibt einige subtile Verhaltensunterschiede.

- Der `Function()`-Konstruktor, der `function`-Ausdruck und die `function`-Deklaration erstellen vollwertige Funktionsobjekte, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden können. Allerdings können Pfeilfunktionen und Methoden nicht konstruiert werden. Asynchrone Funktionen, Generatorfunktionen und asynchrone Generatorfunktionen sind unabhängig von der Syntax nicht konstruierbar.
- Die `function`-Deklaration erstellt Funktionen, die [_gehoistet_](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) werden. Andere Syntaxen hoisten die Funktion nicht und der Funktionswert ist erst nach der Definition sichtbar.
- Die Pfeilfunktion und der `Function()`-Konstruktor erstellen immer _anonyme_ Funktionen, was bedeutet, dass sie sich nicht leicht selbst rekursiv aufrufen können. Eine Möglichkeit, eine Pfeilfunktion rekursiv aufzurufen, besteht darin, sie einer Variablen zuzuweisen.
- Die Pfeilfunktion-Syntax hat keinen Zugriff auf `arguments` oder `this`.
- Der `Function()`-Konstruktor kann auf keine lokalen Variablen zugreifen – er hat nur Zugriff auf den globalen Bereich.
- Der `Function()`-Konstruktor führt zur Laufzeitkompilierung und ist oft langsamer als andere Syntaxen.

Für `function`-Ausdrücke gibt es einen Unterschied zwischen dem Funktionsnamen und der Variablen, der die Funktion zugewiesen wird. Der Funktionsname kann nicht geändert werden, während die Variable, der die Funktion zugewiesen ist, neu zugewiesen werden kann. Der Funktionsname kann sich von der Variablen unterscheiden, der die Funktion zugewiesen ist — sie haben keine Beziehung zueinander. Der Funktionsname kann nur innerhalb des Funktionskörpers verwendet werden. Ein Versuch, ihn außerhalb des Funktionskörpers zu verwenden, führt zu einem Fehler (oder gibt einen anderen Wert zurück, wenn derselbe Name an anderer Stelle deklariert ist). Zum Beispiel:

```js
const y = function x() {};
console.log(x); // ReferenceError: x is not defined
```

Auf der anderen Seite ist die Variable, der die Funktion zugewiesen wird, nur durch ihren Bereich begrenzt, der garantiert den Bereich umfasst, in dem die Funktion deklariert wurde.

Eine Funktionsdeklaration erstellt auch eine Variable mit demselben Namen wie der Funktionsname. Daher können, im Gegensatz zu denen durch Funktionsausdrücke definierten, Funktionen, die durch Funktionsdeklarationen definiert sind, sowohl in dem Bereich, in dem sie definiert wurden, als auch in ihrem eigenen Körper über ihren Namen zugegriffen werden.

Eine Funktion, die durch `new Function` definiert wird, wird dynamisch zusammengestellt, was sichtbar ist, wenn man sie serialisiert. Zum Beispiel gibt `console.log(new Function().toString())`:

```js-nolint
function anonymous(
) {

}
```

Dies ist der tatsächliche Quelltext, der zur Kompilierung der Funktion verwendet wird. Obwohl der `Function()`-Konstruktor die Funktion mit dem Namen `anonymous` erstellt, wird dieser Name nicht in den Umfang des Körpers hinzugefügt. Der Körper hat nur Zugriff auf globale Variablen. Zum Beispiel würde Folgendes zu einem Fehler führen:

```js
new Function("alert(anonymous);")();
```

Eine Funktion, die durch einen Funktionsausdruck oder eine Funktionsdeklaration definiert ist, erbt den aktuellen Umfang. Das heißt, die Funktion bildet einen Abschluss. Andererseits erbt eine durch einen `Function`-Konstruktor definierte Funktion keinen anderen Bereich als den globalen Bereich (den alle Funktionen erben).

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

Funktionen, die durch Funktionsausdrücke und Funktionsdeklarationen definiert sind, werden nur einmal analysiert, während eine durch den `Function`-Konstruktor definierte Funktion den übergebenen String jedes Mal neu analysiert, wenn der Konstruktor aufgerufen wird. Obwohl ein Funktionsausdruck jedes Mal einen Abschluss erstellt, wird der Funktionskörper nicht erneut analysiert, sodass Funktionsausdrücke immer noch schneller sind als `new Function(...)`. Daher sollte der `Function`-Konstruktor generell vermieden werden, wann immer dies möglich ist.

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

Auf der anderen Seite kann ein Funktionsausdruck auch in eine Funktionsdeklaration verwandelt werden. Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit den Schlüsselwörtern `function` oder `async function` beginnen, was ein häufiger Fehler ist, wenn {{Glossary("IIFE", "IIFEs")}} (Immediately Invoked Function Expressions) implementiert werden.

```js-nolint example-bad
function () { // SyntaxError: Function statements require a function name
  console.log("FOO!");
}();

function foo() {
  console.log("FOO!");
}(); // SyntaxError: Unexpected token ')'
```

Stattdessen beginnen Sie die Ausdrucksanweisung mit etwas anderem, sodass das `function`-Schlüsselwort eindeutig einen Funktionsausdruck startet. Häufige Optionen sind [Gruppierung](/de/docs/Web/JavaScript/Reference/Operators/Grouping) und die Verwendung von [`void`](/de/docs/Web/JavaScript/Reference/Operators/void).

```js-nolint example-good
(function () {
  console.log("FOO!");
})();

void function () {
  console.log("FOO!");
}();
```

### Funktionsparameter

Jeder Funktionsparameter ist ein einfacher Bezeichner, auf den Sie im lokalen Bereich zugreifen können.

```js
function myFunc(a, b, c) {
  // You can access the values of a, b, and c here
}
```

Es gibt drei spezielle Parametersyntaxen:

- [_Standardparameter_](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) ermöglichen es, formale Parameter mit Standardwerten zu initialisieren, wenn kein Wert oder `undefined` übergeben wird.
- Der [_Rest-Parameter_](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) ermöglicht es, eine unbestimmte Anzahl von Argumenten als Array darzustellen.
- [_Destrukturierung_](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) ermöglicht das Entpacken von Elementen aus Arrays oder Eigenschaften aus Objekten in separate Variablen.

```js
function myFunc({ a, b }, c = 1, ...rest) {
  // You can access the values of a, b, c, and rest here
}
```

Es gibt einige Folgen, wenn eine der oben genannten nicht einfachen Parametersyntaxen verwendet wird:

- Sie können `"use strict"` nicht auf den Funktionskörper anwenden — dies führt zu einem [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).
- Auch wenn die Funktion nicht im [strikte Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, gelten bestimmte Funktionen im strikten Modus, einschließlich, dass das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt nicht mehr mit den benannten Parametern synchronisiert wird, [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) beim Zugriff einen Fehler auslöst und doppelte Parameternamen nicht erlaubt sind.

### Das arguments-Objekt

Sie können auf die Argumente einer Funktion innerhalb der Funktion über das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt referenzieren.

- [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)
  - : Ein array-ähnliches Objekt, das die an die aktuell ausgeführte Funktion übergebenen Argumente enthält.
- [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)
  - : Die aktuell ausgeführte Funktion.
- [`arguments.length`](/de/docs/Web/JavaScript/Reference/Functions/arguments/length)
  - : Die Anzahl der an die Funktion übergebenen Argumente.

### Getter- und Setter-Funktionen

Sie können Zugriffs-Eigenschaften auf jedem standardmäßig eingebauten Objekt oder benutzerdefinierten Objekt definieren, das die Hinzufügung neuer Eigenschaften unterstützt. Innerhalb von [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Klassen](/de/docs/Web/JavaScript/Reference/Classes), können Sie spezielle Syntaxen verwenden, um den Getter und Setter einer Zugriffs-Eigenschaft zu definieren.

- [get](/de/docs/Web/JavaScript/Reference/Functions/get)
  - : Bindet eine Objekteigenschaft an eine Funktion, die aufgerufen wird, wenn diese Eigenschaft nachgeschlagen wird.
- [set](/de/docs/Web/JavaScript/Reference/Functions/set)
  - : Bindet eine Objekteigenschaft an eine Funktion, die aufgerufen wird, wenn versucht wird, diese Eigenschaft zu setzen.

Beachten Sie, dass diese Syntaxen eine _Objekteigenschaft_ und keine _Methode_ erstellen. Die Getter- und Setterfunktionen selbst können nur mit reflektierenden APIs wie {{jsxref("Object.getOwnPropertyDescriptor()")}} aufgerufen werden.

### Block-level Funktionen

Im [strikte Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) sind Funktionen innerhalb von Blöcken auf diesen Block begrenzt. Vor ES2015 waren block-level Funktionen im strikten Modus verboten.

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

### Block-level Funktionen in nicht-striktem Code

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

Die Semantik hiervon im strikten Modus ist gut spezifiziert — `zero` existiert nur innerhalb des Scopes des `if`-Blocks. Wenn `shouldDefineZero` falsch ist, sollte `zero` niemals definiert werden, da der Block nie ausgeführt wird. Historisch gesehen war dies jedoch nicht spezifiziert, sodass verschiedene Browser es in nicht-striktem Modus unterschiedlich implementierten. Für weitere Informationen siehe die Referenz zu [`Funktion`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration).

Eine sicherere Methode, Funktionen bedingt zu definieren, besteht darin, einen Funktionsausdruck einer Variablen zuzuweisen:

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

Die folgende Funktion gibt eine Zeichenkette zurück, die die formatierte Darstellung einer Zahl mit führenden Nullen enthält.

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

Beachten Sie, dass im `if`-Test eine Referenz auf `noFunc` verwendet wird — es gibt keine Klammern `()` nach dem Funktionsnamen, damit die eigentliche Funktion nicht aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Statements/function", "function")}}
- [`Function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Function")}}
