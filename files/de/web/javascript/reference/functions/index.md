---
title: Funktionen
slug: Web/JavaScript/Reference/Functions
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("Functions")}}

Im Allgemeinen ist eine Funktion ein "Unterprogramm", das von Code außerhalb (oder innerhalb, im Fall von Rekursion) der Funktion _aufgerufen_ werden kann. Wie das Programm selbst besteht eine Funktion aus einer Abfolge von Anweisungen, die als _Funktionskörper_ bezeichnet werden. Werte können als Parameter an eine Funktion _übergeben_ werden, und die Funktion wird einen Wert _zurückgeben_.

In JavaScript sind Funktionen {{Glossary("First-class_Function", "Objekte erster Klasse")}}, da sie an andere Funktionen übergeben, von Funktionen zurückgegeben und Variablen und Eigenschaften zugewiesen werden können. Sie können auch Eigenschaften und Methoden wie jedes andere Objekt haben. Was sie von anderen Objekten unterscheidet, ist, dass Funktionen aufgerufen werden können.

Für weitere Beispiele und Erklärungen siehe den [JavaScript-Leitfaden über Funktionen](/de/docs/Web/JavaScript/Guide/Functions).

## Beschreibung

Funktionswerte sind typischerweise Instanzen von [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function). Siehe {{jsxref("Function")}} für Informationen zu Eigenschaften und Methoden von `Function`-Objekten. Aufrufbare Werte bewirken, dass [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) den Wert `"function"` anstelle von `"object"` ausgibt.

> [!NOTE]
> Nicht alle aufrufbaren Werte sind `instanceof Function`. Zum Beispiel ist das `Function.prototype`-Objekt aufrufbar, aber keine Instanz von `Function`. Sie können auch manuell die [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) Ihrer Funktion setzen, sodass sie nicht mehr von `Function.prototype` erbt. Solche Fälle sind jedoch extrem selten.

### Rückgabewert

Standardmäßig, wenn die Ausführung einer Funktion nicht mit einer [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung endet oder wenn das `return`-Schlüsselwort keinen Ausdruck danach hat, ist der Rückgabewert {{jsxref("undefined")}}. Die `return`-Anweisung ermöglicht es Ihnen, einen beliebigen Wert aus der Funktion zurückzugeben. Ein Funktionsaufruf kann nur einen Wert zurückgeben, aber Sie können den Effekt der Rückgabe mehrerer Werte simulieren, indem Sie ein Objekt oder Array zurückgeben und das Ergebnis [destruieren](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

> [!NOTE]
> Konstruktoren, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, haben eine andere Logik zur Bestimmung ihrer Rückgabewerte.

### Argumente übergeben

[Parameter und Argumente](<https://en.wikipedia.org/wiki/Parameter_(computer_programming)#Parameters_and_arguments>) haben leicht unterschiedliche Bedeutungen, aber in den MDN-Web-Dokumenten verwenden wir sie oft synonym. Für eine schnelle Referenz:

```js
function formatNumber(num) {
  return num.toFixed(2);
}

formatNumber(2);
```

In diesem Beispiel wird die Variable `num` als _Parameter_ der Funktion bezeichnet: Sie wird in der von Klammern umschlossenen Liste der Funktionsdefinition deklariert. Die Funktion erwartet, dass der `num`-Parameter eine Zahl ist — obwohl dies in JavaScript nicht ohne Runtime-Validierungscode durchsetzbar ist. Im Aufruf `formatNumber(2)` ist die Zahl `2` das _Argument_ der Funktion: Es ist der Wert, der tatsächlich beim Funktionsaufruf an die Funktion übergeben wird. Der Argumentwert kann innerhalb des Funktionskörpers über den entsprechenden Parameternamen oder das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt aufgerufen werden.

Argumente werden immer [_by value übergeben_](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_reference) und nie _by reference_. Das bedeutet, dass, wenn eine Funktion einen Parameter neu zuordnet, sich der Wert außerhalb der Funktion nicht ändert. Genauer gesagt, Objektargumente werden [_by sharing übergeben_](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_sharing), was bedeutet, dass, wenn die Eigenschaften des Objekts verändert werden, die Änderung Auswirkungen außerhalb der Funktion haben wird. Zum Beispiel:

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

Das Schlüsselwort [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) bezieht sich auf das Objekt, auf dem die Funktion aufgerufen wird — es bezieht sich nicht auf die aktuell ausgeführte Funktion, daher muss der Funktionswert auch innerhalb des Funktionskörpers namentlich referenziert werden.

### Funktionen definieren

Allgemein gesagt, hat JavaScript vier Arten von Funktionen:

- Reguläre Funktion: kann alles zurückgeben; wird immer nach dem Aufruf vollständig ausgeführt
- Generatorfunktion: gibt ein [`Generator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator)-Objekt zurück; kann mit dem [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)-Operator pausiert und wieder aufgenommen werden
- Asynchrone Funktion: gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück; kann mit dem [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator pausiert und wieder aufgenommen werden
- Asynchrone Generatorfunktion: gibt ein [`AsyncGenerator`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)-Objekt zurück; sowohl die `await`- als auch `yield`-Operatoren können verwendet werden

Für jede Art von Funktion gibt es mehrere Möglichkeiten, sie zu definieren:

- Deklaration
  - : [`function`](/de/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function), [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*)
- Ausdruck
  - : [`function`](/de/docs/Web/JavaScript/Reference/Operators/function), [`function*`](/de/docs/Web/JavaScript/Reference/Operators/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Operators/async_function), [`async function*`](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- Konstruktor
  - : [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function), [`GeneratorFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction), [`AsyncFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction), [`AsyncGeneratorFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction)

Darüber hinaus gibt es spezielle Syntaxen zum Definieren von [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) und [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions), die genauere Semantiken für ihre Verwendung bieten. [Klassen](/de/docs/Web/JavaScript/Reference/Classes) sind konzeptionell keine Funktionen (da sie einen Fehler werfen, wenn sie ohne `new` aufgerufen werden), aber sie erben auch von `Function.prototype` und haben `typeof MyClass === "function"`.

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

- Die `Function()`-Konstruktor-, `function`-Ausdrucks- und `function`-Deklarations-Syntaxen erstellen vollwertige Funktionsobjekte, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden können. Allerdings können Pfeilfunktionen und Methoden nicht konstruiert werden. Asynchrone Funktionen, Generatorfunktionen und asynchrone Generatorfunktionen sind unabhängig von der Syntax nicht konstruierbar.
- Die `function`-Deklaration erstellt Funktionen, die [_gehoistet_](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) werden. Andere Syntaxen hoisten die Funktion nicht und der Funktionswert ist erst nach der Definition sichtbar.
- Die Pfeilfunktions- und `Function()`-Konstruktor-Syntax erstellt immer _anonyme_ Funktionen, was bedeutet, dass sie sich nicht leicht rekursiv aufrufen können. Eine Möglichkeit, eine Pfeilfunktion rekursiv aufzurufen, besteht darin, sie einer Variablen zuzuweisen.
- Die Pfeilfunktions-Syntax hat keinen Zugriff auf `arguments` oder `this`.
- Der `Function()`-Konstruktor kann auf keine lokalen Variablen zugreifen — er hat nur Zugriff auf den globalen Umfang.
- Der `Function()`-Konstruktor verursacht eine Laufzeitkompilierung und ist oft langsamer als andere Syntaxen.

Bei `function`-Ausdrücken gibt es einen Unterschied zwischen dem Funktionsnamen und der Variablen, der die Funktion zugewiesen ist. Der Funktionsname kann nicht geändert werden, während die Variable, der die Funktion zugewiesen ist, neu zugewiesen werden kann. Der Funktionsname kann vom Namen der Variablen, der die Funktion zugewiesen ist, abweichen — sie haben keine Beziehung zueinander. Der Funktionsname kann nur innerhalb des Funktionskörpers verwendet werden. Der Versuch, ihn außerhalb des Funktionskörpers zu verwenden, führt zu einem Fehler (oder erhält einen anderen Wert, wenn derselbe Name anderswo deklariert wurde). Zum Beispiel:

```js
const y = function x() {};
console.log(x); // ReferenceError: x is not defined
```

Andererseits ist die Variable, der die Funktion zugewiesen ist, nur durch ihren Gültigkeitsbereich begrenzt, der garantiert den Gültigkeitsbereich einschließt, in dem die Funktion deklariert wurde.

Eine Funktionsdeklaration erstellt auch eine Variable mit demselben Namen wie der Funktionsname. Daher können Funktionen, die durch Funktionsdeklarationen definiert wurden, im Gültigkeitsbereich, in dem sie definiert wurden, sowie in ihrem eigenen Körper durch ihren Namen aufgerufen werden, im Gegensatz zu jenen, die durch Funktionsausdrücke definiert sind.

Eine Funktion, die durch `new Function` definiert wurde, wird dynamisch mit ihrer Quelle zusammengebaut, was beobachtbar ist, wenn Sie sie serialisieren. Zum Beispiel gibt `console.log(new Function().toString())` aus:

```js-nolint
function anonymous(
) {

}
```

Dies ist die tatsächliche Quelle, die zum Kompilieren der Funktion verwendet wird. Allerdings wird, obwohl der `Function()`-Konstruktor die Funktion mit dem Namen `anonymous` erstellt, dieser Name nicht zum Gültigkeitsbereich des Körpers hinzugefügt. Der Körper hat nur jemals Zugriff auf globale Variablen. Zum Beispiel würde das Folgende zu einem Fehler führen:

```js
new Function("alert(anonymous);")();
```

Eine Funktion, die durch einen Funktionsausdruck oder durch eine Funktionsdeklaration definiert wird, erbt den aktuellen Gültigkeitsbereich. Das heißt, die Funktion bildet einen Abschluss. Auf der anderen Seite erbt eine Funktion, die durch einen `Function`-Konstruktor definiert wird, keinen Gültigkeitsbereich außer dem globalen Gültigkeitsbereich (den alle Funktionen erben).

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

Funktionen, die durch Funktionsausdrücke und Funktionsdeklarationen definiert werden, werden nur einmal geparst, während eine Funktion, die durch den `Function`-Konstruktor definiert wird, den übergebenen String jedes Mal, wenn der Konstruktor aufgerufen wird, neu parst. Auch wenn ein Funktionsausdruck jedes Mal einen Abschluss erstellt, wird der Funktionskörper nicht neu geparst, sodass Funktionsausdrücke immer noch schneller sind als `new Function(...)`. Daher sollte der `Function`-Konstruktor nach Möglichkeit vermieden werden.

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

Auf der anderen Seite kann ein Funktionsausdruck auch in eine Funktionsdeklaration umgewandelt werden. Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit den Schlüsselwörtern `function` oder `async function` beginnen, was ein häufiger Fehler beim Implementieren von {{Glossary("IIFE", "IIFEs")}} (Sofort Ausgeführte Funktionsausdrücke) ist.

```js-nolint example-bad
function () { // SyntaxError: Function statements require a function name
  console.log("FOO!");
}();

function foo() {
  console.log("FOO!");
}(); // SyntaxError: Unexpected token ')'
```

Stattdessen sollten Sie die Ausdrucksanweisung mit etwas anderem beginnen, sodass das Schlüsselwort `function` eindeutig einen Funktionsausdruck startet. Häufige Optionen sind [Gruppierung](/de/docs/Web/JavaScript/Reference/Operators/Grouping) und die Verwendung von [`void`](/de/docs/Web/JavaScript/Reference/Operators/void).

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

- [_Standardparameter_](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) erlauben es, formale Parameter mit Standardwerten zu initialisieren, wenn kein Wert oder `undefined` übergeben wird.
- Der [_Restparameter_](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) erlaubt die Darstellung einer unbegrenzten Anzahl von Argumenten als Array.
- [_Destrukturierung_](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) ermöglicht das Aufteilen von Elementen aus Arrays oder Eigenschaften aus Objekten in separate Variablen.

```js
function myFunc({ a, b }, c = 1, ...rest) {
  // You can access the values of a, b, c, and rest here
}
```

Es gibt einige Konsequenzen, wenn eine der oben genannten nicht einfachen Parametersyntaxen verwendet wird:

- Sie können `"use strict"` nicht auf den Funktionskörper anwenden — dies führt zu einem [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).
- Selbst wenn die Funktion nicht im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, gelten bestimmte Funktionen des Strict-Modus für Funktionen, einschließlich dass das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt nicht mehr mit den benannten Parametern synchronisiert wird, [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) beim Zugriff einen Fehler wirft und doppelte Parameternamen nicht erlaubt sind.

### Das Arguments-Objekt

Sie können auf die Argumente einer Funktion innerhalb der Funktion durch das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt zugreifen.

- [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)
  - : Ein array-ähnliches Objekt, das die an die derzeit ausgeführte Funktion übergebenen Argumente enthält.
- [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)
  - : Die derzeit ausgeführte Funktion.
- [`arguments.length`](/de/docs/Web/JavaScript/Reference/Functions/arguments/length)
  - : Die Anzahl der an die Funktion übergebenen Argumente.

### Getter- und Setter-Funktionen

Sie können Zugriffsorperties auf jedem Standard- oder benutzerdefinierten Objekt definieren, das die Hinzufügung neuer Eigenschaften unterstützt. Innerhalb von [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Klassen](/de/docs/Web/JavaScript/Reference/Classes) können Sie spezielle Syntaxen verwenden, um den Getter und Setter einer Zugriffsproperty zu definieren.

- [get](/de/docs/Web/JavaScript/Reference/Functions/get)
  - : Verknüpft eine Objekteigenschaft mit einer Funktion, die aufgerufen wird, wenn auf diese Eigenschaft zugegriffen wird.
- [set](/de/docs/Web/JavaScript/Reference/Functions/set)
  - : Verknüpft eine Objekteigenschaft mit einer Funktion, die aufgerufen wird, wenn versucht wird, diese Eigenschaft festzulegen.

Beachten Sie, dass diese Syntaxen eine _Objekteigenschaft_ erstellen, nicht eine _Methode_. Die Getter- und Setter-Funktionen selbst können nur mit reflektierenden APIs wie {{jsxref("Object.getOwnPropertyDescriptor()")}} aufgerufen werden.

### Block-Level Funktionen

Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) sind Funktionen innerhalb von Blöcken auf diesen Block beschränkt. Vor ES2015 waren Block-Level-Funktionen im Strict-Modus verboten.

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

Kurz gesagt: **Tun Sie es nicht.**

In nicht-striktem Code verhalten sich Funktionsdeklarationen innerhalb von Blöcken merkwürdig. Zum Beispiel:

```js
if (shouldDefineZero) {
  function zero() {
    // DANGER: compatibility risk
    console.log("This is zero.");
  }
}
```

Die Semantik davon im Strict-Modus ist gut spezifiziert — `zero` existiert nur innerhalb des Geltungsbereichs des `if`-Blocks. Wenn `shouldDefineZero` false ist, sollte `zero` nie definiert werden, da der Block nie ausgeführt wird. Historisch gesehen war dies jedoch nicht spezifiziert, sodass verschiedene Browser es in nicht-striktem Modus unterschiedlich implementierten. Weitere Informationen finden Sie im Verweis zur [`function` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration).

Eine sicherere Methode zum bedingten Definieren von Funktionen besteht darin, einen Funktionsausdruck einer Variablen zuzuweisen:

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

Die folgenden Anweisungen rufen die `padZeros`-Funktion auf.

```js
let result;
result = padZeros(42, 4); // returns "0042"
result = padZeros(42, 2); // returns "42"
result = padZeros(5, 4); // returns "0005"
```

### Bestimmen, ob eine Funktion existiert

Sie können feststellen, ob eine Funktion existiert, indem Sie den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator verwenden. Im folgenden Beispiel wird ein Test durchgeführt, um zu ermitteln, ob das `window`-Objekt eine Eigenschaft namens `noFunc` hat, die eine Funktion ist. Wenn ja, wird sie verwendet; andernfalls wird eine andere Aktion ausgeführt.

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

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Statements/function", "function")}}
- [`function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Function")}}
