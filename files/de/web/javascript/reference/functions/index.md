---
title: Funktionen
slug: Web/JavaScript/Reference/Functions
l10n:
  sourceCommit: 211aa95bf8a77218591c3bf0a171ca90a53190fd
---

Allgemein gesprochen ist eine Funktion ein „Unterprogramm“, das von Code außerhalb (oder im Fall von Rekursion innerhalb) der Funktion _aufgerufen_ werden kann. Wie das Programm selbst besteht eine Funktion aus einer Folge von Anweisungen, die als _Funktionsrumpf_ bezeichnet wird. Werte können einer Funktion als Parameter _übergeben_ werden, und die Funktion wird einen Wert _zurückgeben_.

In JavaScript sind Funktionen {{Glossary("First-Class_Function", "First-Class-Objekte")}}, da sie an andere Funktionen übergeben, von Funktionen zurückgegeben und Variablen und Eigenschaften zugewiesen werden können. Sie können auch Eigenschaften und Methoden wie jedes andere Objekt haben. Was sie von anderen Objekten unterscheidet, ist, dass Funktionen aufgerufen werden können.

Weitere Beispiele und Erklärungen finden Sie im [JavaScript-Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions).

## Beschreibung

Funktionswerte sind typischerweise Instanzen von [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function). Informationen zu Eigenschaften und Methoden von `Function`-Objekten finden Sie unter {{jsxref("Function")}}. Aufrufbare Werte führen dazu, dass [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) statt `"object"` den Wert `"function"` zurückgibt.

> [!NOTE]
> Nicht alle aufrufbaren Werte sind `instanceof Function`. Beispielsweise ist das Objekt `Function.prototype` aufrufbar, aber keine Instanz von `Function`. Sie können die [Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) Ihrer Funktion auch manuell so festlegen, dass sie nicht mehr von `Function.prototype` erbt. Solche Fälle sind jedoch äußerst selten.

### Rückgabewert

Wenn die Ausführung einer Funktion nicht bei einer [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung endet oder wenn auf das Schlüsselwort `return` kein Ausdruck folgt, ist der Rückgabewert standardmäßig {{jsxref("undefined")}}. Die `return`-Anweisung ermöglicht es Ihnen, einen beliebigen Wert aus der Funktion zurückzugeben. Ein Funktionsaufruf kann nur einen Wert zurückgeben, aber Sie können den Effekt der Rückgabe mehrerer Werte simulieren, indem Sie ein Objekt oder Array zurückgeben und das Ergebnis [destrukturieren](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

> [!NOTE]
> Konstruktoren, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, verwenden eine andere Logik zur Bestimmung ihrer Rückgabewerte.

### Übergabe von Argumenten

[Parameter und Argumente](<https://en.wikipedia.org/wiki/Parameter_(computer_programming)#Parameters_and_arguments>) haben leicht unterschiedliche Bedeutungen, aber in der MDN-Webdokumentation verwenden wir sie häufig austauschbar. Als Kurzreferenz:

```js
function formatNumber(num) {
  return num.toFixed(2);
}

formatNumber(2);
```

In diesem Beispiel wird die Variable `num` als _Parameter_ der Funktion bezeichnet: Sie wird in der von Klammern eingeschlossenen Liste der Funktionsdefinition deklariert. Die Funktion erwartet, dass der Parameter `num` eine Zahl ist — obwohl dies in JavaScript ohne das Schreiben von Laufzeitvalidierungscode nicht durchsetzbar ist. Im Aufruf `formatNumber(2)` ist die Zahl `2` das _Argument_ der Funktion: Sie ist der Wert, der beim Funktionsaufruf tatsächlich an die Funktion übergeben wird. Auf den Argumentwert kann innerhalb des Funktionsrumpfs über den entsprechenden Parameternamen oder das Objekt [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) zugegriffen werden.

Argumente werden immer [_per Wert übergeben_](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_value) und niemals [_per Referenz übergeben_](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_reference). Das bedeutet, dass sich der Wert außerhalb der Funktion nicht ändert, wenn eine Funktion einen Parameter neu zuweist. Genauer gesagt werden Objektargumente [_per Sharing übergeben_](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_sharing), was bedeutet, dass sich Änderungen an den Eigenschaften des Objekts auf den Bereich außerhalb der Funktion auswirken. Zum Beispiel:

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

Das Schlüsselwort [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) verweist auf das Objekt, über das auf die Funktion zugegriffen wird — es verweist nicht auf die aktuell ausgeführte Funktion. Daher müssen Sie selbst innerhalb des Funktionsrumpfs über den Namen auf den Funktionswert verweisen.

### Definieren von Funktionen

Allgemein gesprochen gibt es in JavaScript vier Arten von Funktionen:

- Reguläre Funktion: kann beliebige Werte zurückgeben; wird nach dem Aufruf immer vollständig ausgeführt.
- Generatorfunktion: gibt ein [`Generator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator)-Objekt zurück; kann mit dem Operator [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) angehalten und fortgesetzt werden.
- Asynchrone Funktion: gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück; kann mit dem Operator [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) angehalten und fortgesetzt werden.
- Asynchrone Generatorfunktion: gibt ein [`AsyncGenerator`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)-Objekt zurück; sowohl die Operatoren `await` als auch `yield` können verwendet werden.

Für jede Art von Funktion gibt es mehrere Möglichkeiten, sie zu definieren:

- Deklaration
  - : [`function`](/de/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function), [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*)
- Ausdruck
  - : [`function`](/de/docs/Web/JavaScript/Reference/Operators/function), [`function*`](/de/docs/Web/JavaScript/Reference/Operators/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Operators/async_function), [`async function*`](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- Konstruktor
  - : [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function), [`GeneratorFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction), [`AsyncFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction), [`AsyncGeneratorFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction)

Zusätzlich gibt es spezielle Syntaxen zum Definieren von [Arrow Functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) und [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions), die präzisere Semantik für ihre Verwendung bereitstellen. [Klassen](/de/docs/Web/JavaScript/Reference/Classes) sind konzeptionell keine Funktionen (weil sie einen Fehler auslösen, wenn sie ohne `new` aufgerufen werden), aber sie erben ebenfalls von `Function.prototype` und haben `typeof MyClass === "function"`.

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

Alle Syntaxen bewirken ungefähr dasselbe, es gibt jedoch einige feine Unterschiede im Verhalten.

- Die Syntaxen für den `Function()`-Konstruktor, den `function`-Ausdruck und die `function`-Deklaration erzeugen vollwertige Funktionsobjekte, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden können. Arrow Functions und Methoden können jedoch nicht konstruiert werden. Asynchrone Funktionen, Generatorfunktionen und asynchrone Generatorfunktionen sind unabhängig von der Syntax nicht konstruierbar.
- Die `function`-Deklaration erzeugt Funktionen, die [_gehoistet_](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) werden. Andere Syntaxen hoisten die Funktion nicht, und der Funktionswert ist erst nach der Definition sichtbar.
- Die Arrow-Function-Syntax und der `Function()`-Konstruktor erzeugen immer _anonyme_ Funktionen, was bedeutet, dass sie sich nicht einfach selbst rekursiv aufrufen können. Eine Möglichkeit, eine Arrow Function rekursiv aufzurufen, besteht darin, sie einer Variablen zuzuweisen.
- Die Arrow-Function-Syntax hat keinen Zugriff auf `arguments` oder `this`.
- Der `Function()`-Konstruktor kann auf keine lokalen Variablen zugreifen — er hat nur Zugriff auf den globalen Gültigkeitsbereich.
- Der `Function()`-Konstruktor verursacht eine Kompilierung zur Laufzeit und ist häufig langsamer als andere Syntaxen.

Bei `function`-Ausdrücken wird zwischen dem Funktionsnamen und der Variablen unterschieden, der die Funktion zugewiesen ist. Der Funktionsname kann nicht geändert werden, während die Variable, der die Funktion zugewiesen ist, neu zugewiesen werden kann. Der Funktionsname kann sich von der Variablen unterscheiden, der die Funktion zugewiesen ist — sie stehen in keiner Beziehung zueinander. Der Funktionsname kann nur innerhalb des Funktionsrumpfs verwendet werden. Der Versuch, ihn außerhalb des Funktionsrumpfs zu verwenden, führt zu einem Fehler (oder ergibt einen anderen Wert, wenn derselbe Name an anderer Stelle deklariert ist). Zum Beispiel:

```js
const y = function x() {};
console.log(x); // ReferenceError: x is not defined
```

Andererseits ist die Variable, der die Funktion zugewiesen ist, nur durch ihren Gültigkeitsbereich eingeschränkt, der garantiert den Bereich einschließt, in dem die Funktion deklariert wird.

Eine Funktionsdeklaration erstellt auch eine Variable mit demselben Namen wie der Funktionsname. Daher kann auf Funktionen, die durch Funktionsdeklarationen definiert werden, im Gegensatz zu solchen, die durch Funktionsausdrücke definiert werden, über ihren Namen sowohl im Gültigkeitsbereich, in dem sie definiert wurden, als auch in ihrem eigenen Rumpf zugegriffen werden.

Bei einer durch `new Function` definierten Funktion wird ihr Quelltext dynamisch zusammengesetzt, was beim Serialisieren beobachtbar ist. Beispielsweise ergibt `console.log(new Function().toString())`:

```js-nolint
function anonymous(
) {

}
```

Dies ist der tatsächliche Quelltext, der zum Kompilieren der Funktion verwendet wird. Obwohl der `Function()`-Konstruktor die Funktion mit dem Namen `anonymous` erstellt, wird dieser Name jedoch nicht zum Gültigkeitsbereich des Rumpfs hinzugefügt. Der Rumpf hat ausschließlich Zugriff auf globale Variablen. Das Folgende würde beispielsweise zu einem Fehler führen:

```js
new Function("alert(anonymous);")();
```

Eine durch einen Funktionsausdruck oder eine Funktionsdeklaration definierte Funktion erbt den aktuellen Gültigkeitsbereich. Das heißt, die Funktion bildet einen Closure. Andererseits erbt eine durch einen `Function`-Konstruktor definierte Funktion keinen anderen Gültigkeitsbereich als den globalen Gültigkeitsbereich, den alle Funktionen erben.

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

Durch Funktionsausdrücke und Funktionsdeklarationen definierte Funktionen werden nur einmal geparst, während eine durch den `Function`-Konstruktor definierte Funktion den ihr übergebenen String bei jedem Aufruf des Konstruktors erneut parst. Obwohl ein Funktionsausdruck jedes Mal einen Closure erstellt, wird der Funktionsrumpf nicht erneut geparst, sodass Funktionsausdrücke dennoch schneller sind als `new Function(...)`. Daher sollte der `Function`-Konstruktor grundsätzlich nach Möglichkeit vermieden werden.

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

Andererseits kann ein Funktionsausdruck auch in eine Funktionsdeklaration umgewandelt werden. Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit den Schlüsselwörtern `function` oder `async function` beginnen, was ein häufiger Fehler bei der Implementierung von {{Glossary("IIFE", "IIFEs")}} (sofort aufgerufenen Funktionsausdrücken) ist.

```js-nolint example-bad
function () { // SyntaxError: Function statements require a function name
  console.log("FOO!");
}();

function foo() {
  console.log("FOO!");
}(); // SyntaxError: Unexpected token ')'
```

Beginnen Sie die Ausdrucksanweisung stattdessen mit etwas anderem, sodass das Schlüsselwort `function` eindeutig einen Funktionsausdruck einleitet. Häufige Optionen sind [Gruppierung](/de/docs/Web/JavaScript/Reference/Operators/Grouping) und die Verwendung von [`void`](/de/docs/Web/JavaScript/Reference/Operators/void).

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

- [_Standardparameter_](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) ermöglichen die Initialisierung formaler Parameter mit Standardwerten, wenn kein Wert oder `undefined` übergeben wird.
- Der [_Rest-Parameter_](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) ermöglicht es, eine unbestimmte Anzahl von Argumenten als Array darzustellen.
- [_Destrukturierung_](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) ermöglicht das Entpacken von Elementen aus Arrays oder Eigenschaften aus Objekten in einzelne Variablen.

```js
function myFunc({ a, b }, c = 1, ...rest) {
  // You can access the values of a, b, c, and rest here
}
```

Wenn eine der oben genannten nicht einfachen Parametersyntaxen verwendet wird, hat dies einige Folgen:

- Sie können `"use strict"` nicht auf den Funktionskörper anwenden — dies führt zu einem [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).
- Auch wenn die Funktion nicht im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, gelten bestimmte Funktionen im strikten Modus, einschließlich, dass das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt nicht mehr mit den benannten Parametern synchronisiert wird, [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) beim Zugriff einen Fehler auslöst und doppelte Parameternamen nicht erlaubt sind.

### Das arguments-Objekt

Sie können innerhalb einer Funktion mithilfe des Objekts [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) auf die Argumente der Funktion verweisen.

- [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)
  - : Ein Array-ähnliches Objekt, das die an die aktuell ausgeführte Funktion übergebenen Argumente enthält.
- [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)
  - : Die aktuell ausgeführte Funktion.
- [`arguments.length`](/de/docs/Web/JavaScript/Reference/Functions/arguments/length)
  - : Die Anzahl der an die Funktion übergebenen Argumente.

### Getter- und Setter-Funktionen

Sie können Zugriffs-Eigenschaften auf jedem standardmäßig eingebauten Objekt oder benutzerdefinierten Objekt definieren, das die Hinzufügung neuer Eigenschaften unterstützt. Innerhalb von [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Klassen](/de/docs/Web/JavaScript/Reference/Classes) können Sie spezielle Syntaxen verwenden, um den Getter und Setter einer Zugriffs-Eigenschaft zu definieren.

- [get](/de/docs/Web/JavaScript/Reference/Functions/get)
  - : Bindet eine Objekteigenschaft an eine Funktion, die aufgerufen wird, wenn diese Eigenschaft abgefragt wird.
- [set](/de/docs/Web/JavaScript/Reference/Functions/set)
  - : Bindet eine Objekteigenschaft an eine Funktion, die aufgerufen wird, wenn versucht wird, diese Eigenschaft festzulegen.

Beachten Sie, dass diese Syntaxen eine _Objekteigenschaft_ und keine _Methode_ erstellen. Auf die Getter- und Setter-Funktionen selbst kann nur über reflektierende APIs wie {{jsxref("Object.getOwnPropertyDescriptor()")}} zugegriffen werden.

### Block-Level Funktionen

Im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) sind Funktionen innerhalb von Blöcken auf diesen Block begrenzt. Vor ES2015 waren Block-Level Funktionen im strikten Modus verboten.

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

### Block-Level Funktionen in nicht-striktem Code

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

Die Semantik hierfür ist im Strict Mode eindeutig spezifiziert — `zero` existiert ausschließlich innerhalb dieses Gültigkeitsbereichs des `if`-Blocks. Wenn `shouldDefineZero` false ist, sollte `zero` niemals definiert werden, da der Block nie ausgeführt wird. Historisch war dies jedoch nicht spezifiziert, sodass verschiedene Browser es im nicht-strikten Modus unterschiedlich implementierten. Weitere Informationen finden Sie in der Referenz zur [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration).

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

### Eine formatierte Zahl zurückgeben

Die folgende Funktion gibt einen String zurück, der die formatierte Darstellung einer mit führenden Nullen aufgefüllten Zahl enthält.

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

Sie können mithilfe des Operators [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) bestimmen, ob eine Funktion existiert. Im folgenden Beispiel wird geprüft, ob das Objekt `window` eine Eigenschaft namens `noFunc` besitzt, die eine Funktion ist. Falls ja, wird sie verwendet; andernfalls wird eine andere Aktion ausgeführt.

```js
if (typeof window.noFunc === "function") {
  // use noFunc()
} else {
  // do something else
}
```

Beachten Sie, dass im `if`-Test ein Verweis auf `noFunc` verwendet wird — nach dem Funktionsnamen stehen keine Klammern `()`, sodass die eigentliche Funktion nicht aufgerufen wird.

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
