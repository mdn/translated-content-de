---
title: Funktionen
slug: Web/JavaScript/Reference/Functions
l10n:
  sourceCommit: e69618d78ec3ee346b0da618c720f477e5660c9c
---

{{jsSidebar("Functions")}}

Allgemein gesprochen ist eine Funktion ein "Unterprogramm", das von Code außerhalb der Funktion (oder innerhalb, im Fall von Rekursion) _aufgerufen_ werden kann. Wie das Programm selbst, besteht eine Funktion aus einer Folge von Anweisungen, die als _Funktionskörper_ bezeichnet werden. Werte können als Parameter an eine Funktion _übergeben_ werden, und die Funktion wird einen Wert _zurückgeben_.

In JavaScript sind Funktionen [First-Class-Objekte](/de/docs/Glossary/First-class_Function), da sie an andere Funktionen übergeben, von Funktionen zurückgegeben und Variablen und Eigenschaften zugewiesen werden können. Sie können auch Eigenschaften und Methoden wie jedes andere Objekt haben. Was sie von anderen Objekten unterscheidet, ist, dass Funktionen aufgerufen werden können.

Weitere Beispiele und Erklärungen finden Sie im [JavaScript-Leitfaden über Funktionen](/de/docs/Web/JavaScript/Guide/Functions).

## Beschreibung

Funktionswerte sind typischerweise Instanzen von [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function). Siehe {{jsxref("Function")}}, um Informationen zu Eigenschaften und Methoden von `Function`-Objekten zu erhalten. Aufrufbare Werte führen dazu, dass [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) `"function"` anstatt `"object"` zurückgibt.

> [!NOTE]
> Nicht alle aufrufbaren Werte sind `instanceof Function`. Zum Beispiel ist das `Function.prototype`-Objekt aufrufbar, aber keine Instanz von `Function`. Sie können auch die [Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) Ihrer Funktion manuell festlegen, sodass sie nicht mehr von `Function.prototype` erbt. Solche Fälle sind jedoch extrem selten.

### Rückgabewert

Standardmäßig, wenn die Ausführung einer Funktion nicht mit einer [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung endet, oder wenn das `return`-Schlüsselwort keinen Ausdruck danach hat, dann ist der Rückgabewert {{jsxref("undefined")}}. Die `return`-Anweisung ermöglicht es Ihnen, einen beliebigen Wert aus der Funktion zurückzugeben. Ein Funktionsaufruf kann nur einen Wert zurückgeben, aber Sie können den Effekt der Rückgabe mehrerer Werte simulieren, indem Sie ein Objekt oder Array zurückgeben und das Ergebnis [destruieren](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

> [!NOTE]
> Konstruktoren, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, verwenden eine andere Logik zur Bestimmung ihrer Rückgabewerte.

### Übergabe von Argumenten

[Parameter und Argumente](<https://en.wikipedia.org/wiki/Parameter_(computer_programming)#Parameters_and_arguments>) haben leicht unterschiedliche Bedeutungen, aber in den MDN-Webhelden verwenden wir sie oft austauschbar. Für eine schnelle Referenz:

```js
function formatNumber(num) {
  return num.toFixed(2);
}

formatNumber(2);
```

In diesem Beispiel wird die Variable `num` als das _Parameter_ der Funktion bezeichnet: sie wird in der in Klammern eingeschlossenen Liste der Funktionsdefinition deklariert. Die Funktion erwartet, dass der `num`-Parameter eine Zahl ist — obwohl dies in JavaScript ohne das Schreiben von Laufzeitvalidierungscode nicht durchsetzbar ist. In dem `formatNumber(2)`-Aufruf ist die Zahl `2` das _Argument_ der Funktion: es ist der Wert, der tatsächlich in dem Funktionsaufruf an die Funktion übergeben wird. Der Argumentwert kann innerhalb des Funktionskörpers durch den entsprechenden Parameternamen oder das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt zugegriffen werden.

Argumente werden immer [_by value_] übergeben und nie _by reference_. Das bedeutet, dass wenn eine Funktion einem Parameter neu zuweist, sich der Wert außerhalb der Funktion nicht ändert. Genauer gesagt, Objektargumente werden [_by sharing_] übergeben, was bedeutet, dass wenn die Eigenschaften des Objekts verändert werden, sich die Änderung außerhalb der Funktion auswirkt. Zum Beispiel:

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

Das [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Schlüsselwort bezieht sich auf das Objekt, auf dem die Funktion aufgerufen wird — es bezieht sich nicht auf die aktuell ausgeführte Funktion, daher müssen Sie den Funktionswert durch den Namen ansprechen, selbst innerhalb des Funktionskörpers.

### Definition von Funktionen

Im Allgemeinen gibt es in JavaScript vier Arten von Funktionen:

- Reguläre Funktion: kann alles zurückgeben; läuft nach dem Aufruf immer bis zum Ende durch
- Generatorfunktion: gibt ein [`Generator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator)-Objekt zurück; kann mit dem [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)-Operator pausiert und fortgesetzt werden
- Asynchrone Funktion: gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück; kann mit dem [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator pausiert und fortgesetzt werden
- Asynchrone Generatorfunktion: gibt ein [`AsyncGenerator`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)-Objekt zurück; es können sowohl `await` als auch `yield`-Operatoren verwendet werden

Für jede Art von Funktion gibt es mehrere Möglichkeiten, sie zu definieren:

- Deklaration
  - : [`function`](/de/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function), [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*)
- Ausdruck
  - : [`function`](/de/docs/Web/JavaScript/Reference/Operators/function), [`function*`](/de/docs/Web/JavaScript/Reference/Operators/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Operators/async_function), [`async function*`](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- Konstruktor
  - : [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function), [`GeneratorFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction), [`AsyncFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction), [`AsyncGeneratorFunction()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction)

Zusätzlich gibt es spezielle Syntaxen zur Definition von [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) und [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions), die präzisere Semantiken für ihre Verwendung bieten. [Klassen](/de/docs/Web/JavaScript/Reference/Classes) sind konzeptionell keine Funktionen (da sie einen Fehler auslösen, wenn sie ohne `new` aufgerufen werden), aber sie erben auch von `Function.prototype` und haben `typeof MyClass === "function"`.

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

Alle Syntaxen machen annähernd dasselbe, aber es gibt einige subtile Verhaltensunterschiede.

- Der `Function()`-Konstruktor, der `function`-Ausdruck und die `function`-Deklarationssyntaxe erzeugen vollwertige Funktionsobjekte, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden können. Pfeilfunktionen und Methoden können jedoch nicht konstruiert werden. Asynchrone Funktionen, Generatorfunktionen und asynchrone Generatorfunktionen sind unabhängig von der Syntax nicht konstruierbar.
- Die `function`-Deklaration erzeugt Funktionen, die [_gehoben_](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) werden. Andere Syntaxformen heben die Funktion nicht an und der Funktionswert ist erst nach der Definition sichtbar.
- Die Pfeilfunktion und der `Function()`-Konstruktor erzeugen immer _anonyme_ Funktionen, was bedeutet, dass sie sich nicht einfach selbst rekursiv aufrufen können. Eine Möglichkeit, eine Pfeilfunktion rekursiv aufzurufen, besteht darin, sie einer Variablen zuzuweisen.
- Die Pfeilfunktionen-Syntax hat keinen Zugriff auf `arguments` oder `this`.
- Der `Function()`-Konstruktor hat keinen Zugriff auf lokale Variablen — er hat nur Zugriff auf den globalen Gültigkeitsbereich.
- Der `Function()`-Konstruktor verursacht eine Laufzeitkompilierung und ist oft langsamer als andere Syntaxen.

Für `function`-Ausdrücke gibt es einen Unterschied zwischen dem Funktionsnamen und der Variablen, der die Funktion zugewiesen wird. Der Funktionsname kann nicht geändert werden, während die der Funktion zugewiesene Variable neu zugewiesen werden kann. Der Funktionsname kann sich von der Variable unterscheiden, der die Funktion zugewiesen wird — sie haben keine Beziehung zueinander. Der Funktionsname kann nur innerhalb des Funktionskörpers verwendet werden. Ein Versuch, ihn außerhalb des Funktionskörpers zu verwenden, führt zu einem Fehler (oder erhält einen anderen Wert, wenn der gleiche Name anderswo deklariert ist). Zum Beispiel:

```js
const y = function x() {};
console.log(x); // ReferenceError: x is not defined
```

Andererseits ist die der Funktion zugewiesene Variable nur durch ihren Gültigkeitsbereich begrenzt, der garantiert den Gültigkeitsbereich enthält, in dem die Funktion deklariert wurde.

Eine Funktionsdeklaration erzeugt auch eine Variable mit dem gleichen Namen wie der Funktionsname. So können Funktionen, die durch Funktionsdeklarationen definiert sind, im Gültigkeitsbereich, in dem sie definiert wurden, sowie in ihrem eigenen Körper über ihren Namen angesprochen werden, im Gegensatz zu denen, die durch Funktionsausdrücke definiert sind.

Eine durch `new Function` definierte Funktion wird dynamisch mit ihrem Quellcode zusammengestellt, was erkennbar ist, wenn Sie sie serialisieren. Zum Beispiel:

```js-nolint
function anonymous(
) {

}
```

Dies ist der tatsächliche Quellcode, der zur Kompilierung der Funktion verwendet wird. Der `Function()`-Konstruktor erstellt die Funktion zwar mit dem Namen `anonymous`, aber dieser Name wird nicht in den Gültigkeitsbereich des Körpers aufgenommen. Der Körper hat nur Zugriff auf globale Variablen. Zum Beispiel würde das Folgende zu einem Fehler führen:

```js
new Function("alert(anonymous);")();
```

Eine durch einen Funktionsausdruck oder eine Funktionsdeklaration definierte Funktion erbt den aktuellen Gültigkeitsbereich. Das bedeutet, die Funktion bildet eine Schließung. Andererseits erbt eine durch einen `Function`-Konstruktor definierte Funktion keinen anderen Gültigkeitsbereich als den globalen Gültigkeitsbereich (den alle Funktionen erben).

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
// 9 (für 'decl' bei Funktionsdeklaration (aktueller Gültigkeitsbereich))
// 9 (für 'expr' bei Funktionsausdruck (aktueller Gültigkeitsbereich))
// 5 (für 'cons' bei Funktionskonstruktor (globaler Gültigkeitsbereich))
```

Funktionen, die durch Funktionsausdrücke und Funktionsdeklarationen definiert sind, werden nur einmal analysiert, während eine durch den `Function`-Konstruktor definierte Funktion jedes Mal die übergebene Zeichenkette analysiert, wenn der Konstruktor aufgerufen wird. Obwohl ein Funktionsausdruck bei jeder Ausführung eine Schließung erzeugt, wird der Funktionskörper nicht erneut analysiert, sodass Funktionsausdrücke immer noch schneller sind als `new Function(...)`. Deshalb sollte der `Function`-Konstruktor nach Möglichkeit vermieden werden.

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

Andererseits kann ein Funktionsausdruck auch in eine Funktionsdeklaration konvertiert werden. Eine [Expressionsanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit den Schlüsseln `function` oder `async function` beginnen, was ein häufiger Fehler bei der Implementierung von [IIFEs](/de/docs/Glossary/IIFE) (Sofort aufgerufene Funktionsausdrücke) ist.

```js-nolint example-bad
function () { // SyntaxError: Function statements require a function name
  console.log("FOO!");
}();

function foo() {
  console.log("FOO!");
}(); // SyntaxError: Unexpected token ')'
```

Stattdessen sollte die Expressionsanweisung mit etwas anderem beginnen, sodass das `function` Schlüsselwort eine Funktionsausdruckslösung eindeutig einleitet. Gängige Optionen umfassen [Gruppierung](/de/docs/Web/JavaScript/Reference/Operators/Grouping) und die Verwendung von [`void`](/de/docs/Web/JavaScript/Reference/Operators/void).

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
  // Sie können hier auf die Werte von a, b und c zugreifen
}
```

Es gibt drei spezielle Parametersysteme:

- [_Standardparameter_](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) erlauben es, formale Parameter mit Standardwerten zu initialisieren, wenn kein Wert oder `undefined` übergeben wird.
- Der [_Restparameter_](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) erlaubt es, eine unbestimmte Anzahl von Argumenten als Array darzustellen.
- [_Destrukturierung_](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) erlaubt das Entpacken von Elementen aus Arrays oder Eigenschaften von Objekten in einzelne Variablen.

```js
function myFunc({ a, b }, c = 1, ...rest) {
  // Sie können hier auf die Werte von a, b, c und rest zugreifen
}
```

Es gibt einige Konsequenzen, wenn einer der oben genannten nicht einfachen Parametersysteme verwendet wird:

- Sie können `"use strict"` nicht auf den Funktionskörper anwenden — dies führt zu einem [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).
- Auch wenn die Funktion nicht im [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, gelten bestimmte Funktionen des strikten Modus, einschließlich, dass das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt nicht mehr mit den benannten Parametern synchronisiert wird, [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) einen Fehler auslösen, wenn aufgerufen, und doppelte Parameternamen sind nicht erlaubt.

### Das arguments-Objekt

Sie können innerhalb der Funktion auf die Argumente einer Funktion zugreifen, indem Sie das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt verwenden.

- [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)
  - : Ein array-ähnliches Objekt, das die an die momentan ausgeführte Funktion übergebenen Argumente enthält.
- [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)
  - : Die momentan ausgeführte Funktion.
- [`arguments.length`](/de/docs/Web/JavaScript/Reference/Functions/arguments/length)
  - : Die Anzahl der Argumente, die an die Funktion übergeben wurden.

### Getter- und Setter-Funktionen

Sie können Zugriffsoroperties zu jedem Standard-Built-in-Objekt oder benutzerdefiniertem Objekt hinzufügen, das die Ergänzung neuer Properties unterstützt. Innerhalb von [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Klassen](/de/docs/Web/JavaScript/Reference/Classes) können Sie spezielle Syntaxen verwenden, um den Getter und Setter einer Zugriffsoroperty zu definieren.

- [get](/de/docs/Web/JavaScript/Reference/Functions/get)
  - : Bindet eine Objektproperty an eine Funktion, die aufgerufen wird, wenn auf diese Property zugegriffen wird.
- [set](/de/docs/Web/JavaScript/Reference/Functions/set)
  - : Bindet eine Objektproperty an eine Funktion, die aufgerufen wird, wenn versucht wird, diese Property zu setzen.

Beachten Sie, dass diese Syntaxen eine _Objektproperty_ erstellen, nicht eine _Methode_. Die Getter- und Setter-Funktionen selbst können nur über reflektierende APIs wie {{jsxref("Object.getOwnPropertyDescriptor()")}} zugegriffen werden.

### Block-Level-Funktionen

Im [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) sind Funktionen innerhalb von Blöcken auf diesen Block beschränkt. Vor ES2015 waren Block-Level-Funktionen im Strikten Modus verboten.

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

// f() === 2 im nicht strikten Modus
```

### Block-Level-Funktionen im Nicht-Strikten-Code

Kurz gesagt: **Nicht tun.**

Im nicht strikten Code verhalten sich Funktionsdeklarationen innerhalb von Blöcken seltsam. Zum Beispiel:

```js
if (shouldDefineZero) {
  function zero() {
    // GEFAHR: Kompatibilitätsrisiko
    console.log("This is zero.");
  }
}
```

Die Semantiken dies im Strikten Modus sind gut spezifiziert — `zero` existiert nur innerhalb des Gültigkeitsbereichs des `if`-Blocks. Wenn `shouldDefineZero` falsch ist, sollte `zero` niemals definiert werden, da der Block nie ausgeführt wird. Historisch wurde dies jedoch nicht festgelegt, daher haben verschiedene Browser es im nicht strikten Modus unterschiedlich implementiert. Für weitere Informationen siehe die [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration)-Referenz.

Eine sicherere Methode, um Funktionen bedingt zu definieren, besteht darin, einer Funktionsexpression einer Variable zuzuweisen:

```js
// Verwendet eine var, um sie als globale Variable verfügbar zu machen,
// mit einem ähnlicheren Verhalten zu einer Funktionsdeklaration auf oberster Ebene
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
// Diese Funktion gibt eine Zeichenkette zurück, die mit führenden Nullen gefüllt ist
function padZeros(num, totalLen) {
  let numStr = num.toString(); // Initialisieren Sie den Rückgabewert als Zeichenkette
  const numZeros = totalLen - numStr.length; // Berechnen Sie die Anzahl der Nullen
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

### Ermitteln, ob eine Funktion existiert

Sie können feststellen, ob eine Funktion existiert, indem Sie den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator verwenden. Im folgenden Beispiel wird ein Test durchgeführt, um festzustellen, ob das `window`-Objekt eine Eigenschaft namens `noFunc` hat, die eine Funktion ist. Wenn ja, wird sie verwendet; andernfalls wird eine andere Aktion durchgeführt.

```js
if (typeof window.noFunc === "function") {
  // use noFunc()
} else {
  // do something else
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
