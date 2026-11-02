---
title: Funktionen
slug: Web/JavaScript/Reference/Functions
l10n:
  sourceCommit: 389605121ed8ea78cc1878f31bbca6759cc7417d
---

Allgemein ist eine Funktion ein „Unterprogramm“, das von Code außerhalb der Funktion (oder im Fall von Rekursion innerhalb der Funktion) _aufgerufen_ werden kann. Wie das Programm selbst besteht eine Funktion aus einer Folge von Anweisungen, dem _Funktionskörper_. Werte können als Parameter an eine Funktion _übergeben_ werden, und die Funktion _gibt_ einen Wert _zurück_.

In JavaScript sind Funktionen {{Glossary("First-class_Function", "First-Class-Objekte")}}, da sie an andere Funktionen übergeben, von Funktionen zurückgegeben sowie Variablen und Eigenschaften zugewiesen werden können. Wie jedes andere Objekt können sie außerdem Eigenschaften und Methoden haben. Von anderen Objekten unterscheiden sie sich dadurch, dass Funktionen aufgerufen werden können.

Weitere Beispiele und Erläuterungen finden Sie im [JavaScript-Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions).

## Beschreibung

Funktionswerte sind normalerweise Instanzen von [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function). Informationen zu Eigenschaften und Methoden von `Function`-Objekten finden Sie unter {{jsxref("Function")}}. Bei aufrufbaren Werten gibt [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) `"function"` statt `"object"` zurück.

> [!NOTE]
> Nicht alle aufrufbaren Werte sind `instanceof Function`. Beispielsweise ist das Objekt `Function.prototype` aufrufbar, aber keine Instanz von `Function`. Sie können auch die [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) Ihrer Funktion manuell so ändern, dass sie nicht mehr von `Function.prototype` erbt. Solche Fälle sind jedoch äußerst selten.

### Rückgabewert

Wenn die Ausführung einer Funktion nicht mit einer [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung endet oder wenn auf das Schlüsselwort `return` kein Ausdruck folgt, ist der Rückgabewert standardmäßig {{jsxref("undefined")}}. Mit der `return`-Anweisung können Sie einen beliebigen Wert aus der Funktion zurückgeben. Ein Funktionsaufruf kann nur einen Wert zurückgeben. Sie können jedoch die Rückgabe mehrerer Werte simulieren, indem Sie ein Objekt oder Array zurückgeben und das Ergebnis [destrukturieren](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

> [!NOTE]
> Für Konstruktoren, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, gelten andere Regeln zur Bestimmung ihres Rückgabewerts.

### Argumente übergeben

[Parameter und Argumente](<https://en.wikipedia.org/wiki/Parameter_(computer_programming)#Parameters_and_arguments>) haben leicht unterschiedliche Bedeutungen, werden in den MDN Web Docs aber häufig synonym verwendet. Als kurze Orientierung:

```js
function formatNumber(num) {
  return num.toFixed(2);
}

formatNumber(2);
```

In diesem Beispiel heißt die Variable `num` _Parameter_ der Funktion: Sie wird in der von Klammern umschlossenen Liste der Funktionsdefinition deklariert. Die Funktion erwartet für den Parameter `num` eine Zahl – in JavaScript lässt sich das allerdings nur durch Code zur Laufzeitvalidierung erzwingen. Beim Aufruf `formatNumber(2)` ist die Zahl `2` das _Argument_ der Funktion: Sie ist der Wert, der beim Funktionsaufruf tatsächlich an die Funktion übergeben wird. Innerhalb des Funktionskörpers kann über den entsprechenden Parameternamen oder das Objekt [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) auf den Argumentwert zugegriffen werden.

Argumente werden immer [_als Wert übergeben_](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_value) und nie [_als Referenz übergeben_](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_reference). Das bedeutet: Wenn eine Funktion einem Parameter einen neuen Wert zuweist, ändert sich der Wert außerhalb der Funktion nicht. Genauer gesagt werden Objektargumente [_durch Teilen übergeben_](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_sharing). Werden Eigenschaften des Objekts verändert, wirkt sich diese Änderung also auch außerhalb der Funktion aus. Zum Beispiel:

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

Das Schlüsselwort [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) bezieht sich auf das Objekt, über das auf die Funktion zugegriffen wird – nicht auf die gerade ausgeführte Funktion. Daher müssen Sie auch innerhalb des Funktionskörpers über ihren Namen auf den Funktionswert verweisen.

### Funktionen definieren

Grundsätzlich gibt es in JavaScript vier Arten von Funktionen:

- Reguläre Funktion: Kann einen beliebigen Wert zurückgeben; wird nach dem Aufruf immer vollständig ausgeführt.
- Generatorfunktion: Gibt ein [`Generator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator)-Objekt zurück; kann mit dem Operator [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) angehalten und fortgesetzt werden.
- Asynchrone Funktion: Gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück; kann mit dem Operator [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) angehalten und fortgesetzt werden.
- Asynchrone Generatorfunktion: Gibt ein [`AsyncGenerator`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)-Objekt zurück; sowohl der Operator `await` als auch der Operator `yield` können verwendet werden.

Für jede Art von Funktion gibt es mehrere Möglichkeiten der Definition:

- Deklaration
  - : [`function`](/de/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function), [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*)
- Ausdruck
  - : [`function`](/de/docs/Web/JavaScript/Reference/Operators/function), [`function*`](/de/docs/Web/JavaScript/Reference/Operators/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Operators/async_function), [`async function*`](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- Konstruktor
  - : [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function), [`GeneratorFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction), [`AsyncFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction), [`AsyncGeneratorFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction)

Darüber hinaus gibt es spezielle Syntax für die Definition von [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) und [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions), die eine genauere Semantik für deren Verwendung bietet. [Klassen](/de/docs/Web/JavaScript/Reference/Classes) sind konzeptionell keine Funktionen (weil ihr Aufruf ohne `new` einen Fehler auslöst). Sie erben jedoch ebenfalls von `Function.prototype`, und für sie gilt `typeof MyClass === "function"`.

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

Alle Syntaxvarianten bewirken ungefähr dasselbe, weisen aber einige feine Unterschiede im Verhalten auf.

- Der Konstruktor `Function()` sowie `function`-Ausdrücke und `function`-Deklarationen erzeugen vollwertige Funktionsobjekte, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) als Konstruktor aufgerufen werden können. Pfeilfunktionen und Methoden können dagegen nicht als Konstruktor aufgerufen werden. Asynchrone Funktionen, Generatorfunktionen und asynchrone Generatorfunktionen sind unabhängig von der Syntax nicht als Konstruktor aufrufbar.
- Die `function`-Deklaration erzeugt Funktionen, die durch [_Hoisting_](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) vorgezogen werden. Bei den anderen Syntaxvarianten findet kein Hoisting der Funktion statt; der Funktionswert ist erst nach seiner Definition verfügbar.
- Pfeilfunktionen und der Konstruktor `Function()` erzeugen immer _anonyme_ Funktionen, die sich nicht ohne Weiteres rekursiv selbst aufrufen können. Eine Möglichkeit, eine Pfeilfunktion rekursiv aufzurufen, besteht darin, sie einer Variablen zuzuweisen.
- Die Syntax für Pfeilfunktionen erzeugt keine eigenen Bindungen für `arguments` oder `this`.
- Der Konstruktor `Function()` kann auf keine lokalen Variablen zugreifen – er hat nur Zugriff auf den globalen Gültigkeitsbereich.
- Der Konstruktor `Function()` bewirkt eine Kompilierung zur Laufzeit und ist häufig langsamer als andere Syntaxvarianten.

Bei `function`-Ausdrücken besteht ein Unterschied zwischen dem Funktionsnamen und der Variablen, der die Funktion zugewiesen wird. Der Funktionsname kann nicht geändert werden; der Variablen kann dagegen ein neuer Wert zugewiesen werden. Der Funktionsname kann sich vom Namen der Variablen unterscheiden, der die Funktion zugewiesen wird – zwischen beiden besteht keine Beziehung. Der Funktionsname kann nur innerhalb des Funktionskörpers verwendet werden. Ein Versuch, ihn außerhalb des Funktionskörpers zu verwenden, führt zu einem Fehler (oder liefert einen anderen Wert, falls derselbe Name an anderer Stelle deklariert wurde). Zum Beispiel:

```js
const y = function x() {};
console.log(x); // ReferenceError: x is not defined
```

Für die Variable, der die Funktion zugewiesen wird, gilt dagegen nur die Einschränkung ihres Gültigkeitsbereichs. Dieser umfasst garantiert den Gültigkeitsbereich, in dem die Funktion deklariert wird.

Eine Funktionsdeklaration erzeugt außerdem eine Variable mit demselben Namen wie die Funktion. Anders als bei Funktionen, die durch Funktionsausdrücke definiert werden, kann auf Funktionen aus Funktionsdeklarationen daher sowohl in ihrem eigenen Funktionskörper als auch über ihren Namen in dem Gültigkeitsbereich zugegriffen werden, in dem sie definiert wurden.

Bei einer mit `new Function` definierten Funktion wird der Quelltext dynamisch zusammengesetzt. Das ist bei der Serialisierung der Funktion sichtbar. Beispielsweise ergibt `console.log(new Function().toString())`:

```js-nolint
function anonymous(
) {

}
```

Dies ist der tatsächliche Quelltext, der zum Kompilieren der Funktion verwendet wird. Obwohl der Konstruktor `Function()` eine Funktion mit dem Namen `anonymous` erzeugt, wird dieser Name nicht zum Gültigkeitsbereich des Funktionskörpers hinzugefügt. Der Funktionskörper hat nur Zugriff auf globale Variablen. Das Folgende würde beispielsweise zu einem Fehler führen:

```js
new Function("alert(anonymous);")();
```

Eine durch einen Funktionsausdruck oder eine Funktionsdeklaration definierte Funktion übernimmt den aktuellen Gültigkeitsbereich. Die Funktion bildet also eine Closure. Eine durch den Konstruktor `Function` definierte Funktion übernimmt dagegen außer dem globalen Gültigkeitsbereich (den alle Funktionen übernehmen) keinen weiteren Gültigkeitsbereich.

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

Funktionen aus Funktionsausdrücken und Funktionsdeklarationen werden nur einmal geparst. Bei einer durch den Konstruktor `Function` definierten Funktion wird die übergebene Zeichenfolge hingegen bei jedem Aufruf des Konstruktors erneut geparst. Obwohl ein Funktionsausdruck jedes Mal eine Closure erzeugt, wird der Funktionskörper nicht erneut geparst. Funktionsausdrücke sind daher immer noch schneller als `new Function(...)`. Deshalb sollte der Konstruktor `Function` nach Möglichkeit generell vermieden werden.

Eine Funktionsdeklaration kann unbeabsichtigt zu einem Funktionsausdruck werden, wenn sie in einem Ausdruckskontext steht.

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

Umgekehrt kann auch ein Funktionsausdruck zu einer Funktionsdeklaration werden. Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) darf nicht mit den Schlüsselwörtern `function` oder `async function` beginnen. Das ist ein häufiger Fehler bei der Implementierung von {{Glossary("IIFE", "IIFEs")}} (sofort aufgerufenen Funktionsausdrücken).

```js-nolint example-bad
function () { // SyntaxError: Function statements require a function name
  console.log("FOO!");
}();

function foo() {
  console.log("FOO!");
}(); // SyntaxError: Unexpected token ')'
```

Beginnen Sie die Ausdrucksanweisung stattdessen mit etwas anderem, sodass das Schlüsselwort `function` eindeutig einen Funktionsausdruck einleitet. Übliche Möglichkeiten sind die [Gruppierung](/de/docs/Web/JavaScript/Reference/Operators/Grouping) und die Verwendung von [`void`](/de/docs/Web/JavaScript/Reference/Operators/void).

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
- Durch [_Destrukturierung_](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) lassen sich Elemente aus Arrays oder Eigenschaften aus Objekten in einzelne Variablen entpacken.

```js
function myFunc({ a, b }, c = 1, ...rest) {
  // You can access the values of a, b, c, and rest here
}
```

Die Verwendung einer der oben genannten nicht einfachen Parametersyntaxen hat einige Folgen:

- Sie können `"use strict"` nicht im Funktionskörper verwenden – dies führt zu einem [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).
- Auch wenn sich die Funktion nicht im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) befindet, gelten bestimmte Regeln des Strict Mode für Funktionen: Das Objekt [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) wird nicht mehr mit den benannten Parametern synchronisiert, der Zugriff auf [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) löst einen Fehler aus, und doppelte Parameternamen sind nicht zulässig.

### Das arguments-Objekt

Innerhalb einer Funktion können Sie über das Objekt [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) auf ihre Argumente zugreifen.

- [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)
  - : Ein arrayähnliches Objekt, das die an die gerade ausgeführte Funktion übergebenen Argumente enthält.
- [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)
  - : Die gerade ausgeführte Funktion.
- [`arguments.length`](/de/docs/Web/JavaScript/Reference/Functions/arguments/length)
  - : Die Anzahl der an die Funktion übergebenen Argumente.

### Getter- und Setter-Funktionen

Sie können Zugriffseigenschaften für jedes standardmäßig integrierte oder benutzerdefinierte Objekt definieren, das das Hinzufügen neuer Eigenschaften unterstützt. Innerhalb von [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Klassen](/de/docs/Web/JavaScript/Reference/Classes) können Sie spezielle Syntax verwenden, um Getter und Setter einer Zugriffseigenschaft zu definieren.

- [get](/de/docs/Web/JavaScript/Reference/Functions/get)
  - : Verknüpft eine Objekteigenschaft mit einer Funktion, die aufgerufen wird, wenn die Eigenschaft abgefragt wird.
- [set](/de/docs/Web/JavaScript/Reference/Functions/set)
  - : Verknüpft eine Objekteigenschaft mit einer Funktion, die aufgerufen wird, wenn versucht wird, die Eigenschaft zu setzen.

Beachten Sie, dass diese Syntaxvarianten eine _Objekteigenschaft_ und keine _Methode_ erzeugen. Auf die Getter- und Setter-Funktionen selbst kann nur über reflektierende APIs wie {{jsxref("Object.getOwnPropertyDescriptor()")}} zugegriffen werden.

### Funktionen auf Blockebene

Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ist der Gültigkeitsbereich von Funktionen innerhalb eines Blocks auf diesen Block beschränkt. Vor ES2015 waren Funktionen auf Blockebene im Strict Mode nicht zulässig.

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

### Funktionen auf Blockebene außerhalb des Strict Mode

Kurz gesagt: **Tun Sie es nicht.**

Außerhalb des Strict Mode verhalten sich Funktionsdeklarationen innerhalb von Blöcken ungewöhnlich. Zum Beispiel:

```js
if (shouldDefineZero) {
  function zero() {
    // DANGER: compatibility risk
    console.log("This is zero.");
  }
}
```

Im Strict Mode ist die Semantik hierfür genau festgelegt: `zero` existiert nur innerhalb des Gültigkeitsbereichs des `if`-Blocks. Wenn `shouldDefineZero` falsch ist, sollte `zero` niemals definiert werden, da der Block nie ausgeführt wird. Historisch war dieses Verhalten jedoch nicht festgelegt, sodass verschiedene Browser es außerhalb des Strict Mode unterschiedlich implementierten. Weitere Informationen finden Sie in der Referenz zur [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration).

Eine sicherere Möglichkeit, Funktionen bedingt zu definieren, besteht darin, einer Variablen einen Funktionsausdruck zuzuweisen:

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

### Eine formatierte Zahl zurückgeben

Die folgende Funktion gibt eine Zeichenfolge zurück, die eine mit führenden Nullen aufgefüllte Zahl in formatierter Darstellung enthält.

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

### Prüfen, ob eine Funktion existiert

Mit dem Operator [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) können Sie feststellen, ob eine Funktion existiert. Im folgenden Beispiel wird geprüft, ob das Objekt `window` eine Eigenschaft namens `noFunc` besitzt, die eine Funktion ist. Wenn ja, wird sie verwendet; andernfalls wird eine andere Aktion ausgeführt.

```js
if (typeof window.noFunc === "function") {
  // use noFunc()
} else {
  // do something else
}
```

Beachten Sie, dass bei der `if`-Prüfung eine Referenz auf `noFunc` verwendet wird: Auf den Funktionsnamen folgen keine Klammern `()`, sodass die Funktion selbst nicht aufgerufen wird.

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
