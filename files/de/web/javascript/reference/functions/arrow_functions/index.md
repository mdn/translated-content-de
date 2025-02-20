---
title: Pfeilfunktionen (Arrow Function Expressions)
slug: Web/JavaScript/Reference/Functions/Arrow_functions
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Functions")}}

Ein **Arrow Function Expression** ist eine kompakte Alternative zu einer traditionellen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function), mit einigen semantischen Unterschieden und bewussten Einschränkungen in der Nutzung:

- Pfeilfunktionen haben keine eigenen {{Glossary("binding", "Bindungen")}} für [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) oder [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) und sollten nicht als {{Glossary("Method", "Methoden")}} verwendet werden.
- Pfeilfunktionen können nicht als {{Glossary("Constructor", "Konstruktoren")}} genutzt werden. Ihr Aufruf mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) löst einen {{jsxref("TypeError")}} aus. Sie haben außerdem keinen Zugriff auf das Schlüsselwort [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target).
- Pfeilfunktionen können [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) nicht in ihrem Körper verwenden und können nicht als Generatorfunktionen erstellt werden.

{{InteractiveExample("JavaScript Demo: Functions =>")}}

```js interactive-example
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]
```

## Syntax

```js-nolint
() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}
```

[Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Standard-Parameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) und [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) innerhalb von Parametern werden unterstützt und erfordern immer Klammern:

```js-nolint
(a, b, ...r) => expression
(a = 400, b = 20, c) => expression
([a, b] = [10, 20]) => expression
({ a, b } = { a: 10, b: 20 }) => expression
```

Pfeilfunktionen können durch das Präfix `async` als [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) deklariert werden.

```js-nolint
async param => expression
async (param1, param2, ...paramN) => {
  statements
}
```

## Beschreibung

Lassen Sie uns eine traditionelle anonyme Funktion Schritt für Schritt in die einfachste Pfeilfunktion zerlegen. Jeder Schritt ist eine gültige Pfeilfunktion.

> [!NOTE]
> Traditionelle Funktionsausdrücke und Pfeilfunktionen unterscheiden sich nicht nur in ihrer Syntax. Wir werden ihre Verhaltensunterschiede ausführlicher in den nächsten Abschnitten behandeln.

```js-nolint
// Traditional anonymous function
(function (a) {
  return a + 100;
});

// 1. Remove the word "function" and place arrow between the argument and opening body brace
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the parameter parentheses
a => a + 100;
```

Im obigen Beispiel können sowohl die Klammern um den Parameter als auch die geschweiften Klammern um den Funktionskörper weggelassen werden. Dies ist jedoch nur unter bestimmten Voraussetzungen möglich.

Die Klammern können nur weggelassen werden, wenn die Funktion genau einen einfachen Parameter hat. Hat sie mehrere Parameter, keine Parameter oder Standard-, destrukturierte oder Rest-Parameter, sind die Klammern um die Parameterliste erforderlich.

```js
// Traditional anonymous function
(function (a, b) {
  return a + b + 100;
});

// Arrow function
(a, b) => a + b + 100;

const a = 4;
const b = 2;

// Traditional anonymous function (no parameters)
(function () {
  return a + b + 100;
});

// Arrow function (no parameters)
() => a + b + 100;
```

Die geschweiften Klammern können nur weggelassen werden, wenn die Funktion direkt einen Ausdruck zurückgibt. Enthält der Körper Anweisungen, sind die geschweiften Klammern erforderlich — und auch das Schlüsselwort `return`. Pfeilfunktionen können nicht automatisch bestimmen, was oder wann Sie etwas zurückgeben möchten.

```js
// Traditional anonymous function
(function (a, b) {
  const chuck = 42;
  return a + b + chuck;
});

// Arrow function
(a, b) => {
  const chuck = 42;
  return a + b + chuck;
};
```

Pfeilfunktionen sind nicht von Natur aus mit einem Namen verknüpft. Wenn die Pfeilfunktion sich selbst aufrufen muss, verwenden Sie einen benannten Funktionsausdruck. Sie können die Pfeilfunktion auch einer Variablen zuweisen, wodurch Sie über diese Variable auf sie zugreifen können.

```js
// Traditional Function
function bob(a) {
  return a + 100;
}

// Arrow Function
const bob2 = (a) => a + 100;
```

### Funktionskörper

Pfeilfunktionen können entweder einen _Ausdrucks-Körper_ oder den üblichen _Blockkörper_ haben.

In einem Ausdruckskörper wird nur ein einzelner Ausdruck angegeben, der der implizite Rückgabewert wird. In einem Blockkörper müssen Sie eine explizite `return`-Anweisung verwenden.

```js
const func = (x) => x * x;
// expression body syntax, implied "return"

const func2 = (x, y) => {
  return x + y;
};
// with block body, explicit "return" needed
```

Die Verwendung von Objektliteralen mit der Ausdruckskörpersyntax `(params) => { object: literal }` funktioniert nicht wie erwartet.

```js-nolint example-bad
const func = () => { foo: 1 };
// Calling func() returns undefined!

const func2 = () => { foo: function () {} };
// SyntaxError: function statement requires a name

const func3 = () => { foo() {} };
// SyntaxError: Unexpected token '{'
```

Das liegt daran, dass JavaScript den Pfeilfunktionskörper nur dann als Ausdruckskörper erkennt, wenn das Token nach dem Pfeil kein geschweifter Klammeröffner ist; der Code innerhalb der geschweiften Klammern (`{}`) wird deshalb als Folge von Anweisungen interpretiert, bei der `foo` ein [Label](/de/docs/Web/JavaScript/Reference/Statements/label) ist und kein Schlüssel in einem Objektliteral.

Um dies zu korrigieren, umschließen Sie das Objektliteral in Klammern:

```js example-good
const func = () => ({ foo: 1 });
```

### Können nicht als Methoden verwendet werden

Pfeilfunktion-Ausdrücke sollten nur für Nicht-Methodenfunktionen verwendet werden, da sie kein eigenes `this` haben. Sehen wir uns an, was passiert, wenn Sie versuchen, sie als Methoden zu verwenden:

```js
"use strict";

const obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  },
};

obj.b(); // logs undefined, Window { /* … */ } (or the global object)
obj.c(); // logs 10, Object { /* … */ }
```

Ein weiteres Beispiel mit {{jsxref("Object.defineProperty()")}}:

```js
"use strict";

const obj = {
  a: 10,
};

Object.defineProperty(obj, "b", {
  get: () => {
    console.log(this.a, typeof this.a, this); // undefined 'undefined' Window { /* … */ } (or the global object)
    return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
  },
});
```

Da der Körper einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) einen `this`-Kontext besitzt, erfassen Pfeilfunktionen als [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) den `this`-Kontext der Klasse. Das `this` innerhalb des Körpers der Pfeilfunktion verweist korrekt auf die Instanz (oder auf die Klasse selbst für [statische Felder](/de/docs/Web/JavaScript/Reference/Classes/static)). Da es sich jedoch um eine [Closure](/de/docs/Web/JavaScript/Closures) und keine eigene Bindung der Funktion handelt, ändert sich der Wert von `this` nicht auf Basis des Ausführungskontexts.

```js
class C {
  a = 1;
  autoBoundMethod = () => {
    console.log(this.a);
  };
}

const c = new C();
c.autoBoundMethod(); // 1
const { autoBoundMethod } = c;
autoBoundMethod(); // 1
// If it were a normal method, it should be undefined in this case
```

Pfeilfunktions-Eigenschaften werden oft als „automatische Methodenbindung“ bezeichnet, da das Äquivalent bei normalen Methoden so aussieht:

```js
class C {
  a = 1;
  constructor() {
    this.method = this.method.bind(this);
  }
  method() {
    console.log(this.a);
  }
}
```

> [!NOTE]
> Klassenfelder werden auf der _Instanz_ definiert, nicht auf dem _Prototypen_, sodass bei jeder Instanzerstellung ein neuer Funktionsverweis erstellt und eine neue Closure zugewiesen wird. Dies könnte zu einem höheren Speicherverbrauch führen als bei einer normalen ungebundenen Methode.

Aus ähnlichen Gründen sind die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) und [`bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) nicht nützlich, wenn sie auf Pfeilfunktionen aufgerufen werden, da Pfeilfunktionen `this` basierend auf dem Scope der Definition der Pfeilfunktion festlegen und sich der Wert von `this` nicht ändert, je nachdem wie die Funktion aufgerufen wird.

### Keine Bindung von arguments

Pfeilfunktionen besitzen kein eigenes [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt. Im folgenden Beispiel ist `arguments` ein Verweis auf die Argumente des umschließenden Scopes:

```js
function foo(n) {
  const f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

foo(3); // 3 + 3 = 6
```

> [!NOTE]
> Sie können keine Variable mit dem Namen `arguments` im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#making_eval_and_arguments_simpler) deklarieren, da der obige Code sonst einen Syntaxfehler verursacht. Dies erleichtert das Verständnis der Reichweite von `arguments`.

In den meisten Fällen ist die Verwendung von [Rest-Parametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) eine gute Alternative zur Nutzung eines `arguments`-Objekts.

```js
function foo(n) {
  const f = (...args) => args[0] + n;
  return f(10);
}

foo(1); // 11
```

### Können nicht als Konstruktoren verwendet werden

Pfeilfunktionen können nicht als Konstruktoren verwendet werden und erzeugen einen Fehler, wenn sie mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Sie besitzen auch keine [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft.

```js
const Foo = () => {};
const foo = new Foo(); // TypeError: Foo is not a constructor
console.log("prototype" in Foo); // false
```

### Können nicht als Generatoren verwendet werden

Das Schlüsselwort [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) kann nicht im Körper einer Pfeilfunktion verwendet werden (außer in eingebetteten Generatorfunktionen innerhalb der Pfeilfunktion). Daher können Pfeilfunktionen nicht als Generatoren verwendet werden.

### Zeilenumbruch vor Pfeil

Eine Pfeilfunktion kann keinen Zeilenumbruch zwischen ihren Parametern und ihrem Pfeil enthalten.

```js-nolint example-bad
const func = (a, b, c)
  => 1;
// SyntaxError: Unexpected token '=>'
```

Zur Formatierung können Sie den Zeilenumbruch nach dem Pfeil oder mit Klammern/geschweiften Klammern um den Funktionskörper setzen, wie unten gezeigt. Sie können auch Zeilenumbrüche zwischen Parametern setzen.

```js-nolint
const func = (a, b, c) =>
  1;

const func2 = (a, b, c) => (
  1
);

const func3 = (a, b, c) => {
  return 1;
};

const func4 = (
  a,
  b,
  c,
) => 1;
```

### Vorrang des Pfeils

Obwohl der Pfeil in einer Pfeilfunktion kein Operator ist, haben Pfeilfunktionen spezielle Parsingregeln, die im Vergleich zu normalen Funktionen anders mit der [Operatorenpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) interagieren.

```js-nolint example-bad
let callback;

callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments
```

Da `=>` eine niedrigere Priorität als die meisten Operatoren hat, sind Klammern erforderlich, um sicherzustellen, dass `callback || ()` nicht als Argumentenliste der Pfeilfunktion interpretiert wird.

```js example-good
callback = callback || (() => {});
```

## Beispiele

### Verwendung von Pfeilfunktionen

```js
// An empty arrow function returns undefined
const empty = () => {};

(() => "foobar")();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

const simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

const max = (a, b) => (a > b ? a : b);

// Easy array filtering, mapping, etc.
const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise
  .then((a) => {
    // …
  })
  .then((b) => {
    // …
  });

// Parameterless arrow functions that are visually easier to parse
setTimeout(() => {
  console.log("I happen sooner");
  setTimeout(() => {
    // deeper code
    console.log("I happen later");
  }, 1);
}, 1);
```

### Nutzung von call, bind, und apply

Die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) und [`bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) funktionieren wie erwartet bei traditionellen Funktionen, da wir den Scope für jede Methode festlegen:

```js
const obj = {
  num: 100,
};

// Setting "num" on globalThis to show how it is NOT used.
globalThis.num = 42;

// A traditional function to operate on "this"
const add = function (a, b, c) {
  return this.num + a + b + c;
};

console.log(add.call(obj, 1, 2, 3)); // 106
console.log(add.apply(obj, [1, 2, 3])); // 106
const boundAdd = add.bind(obj);
console.log(boundAdd(1, 2, 3)); // 106
```

Mit Pfeilfunktionen, da unsere `add`-Funktion im Wesentlichen im `globalThis`-Scope (global) erstellt wird, nimmt sie `this` als `globalThis`.

```js
const obj = {
  num: 100,
};

// Setting "num" on globalThis to show how it gets picked up.
globalThis.num = 42;

// Arrow function
const add = (a, b, c) => this.num + a + b + c;

console.log(add.call(obj, 1, 2, 3)); // 48
console.log(add.apply(obj, [1, 2, 3])); // 48
const boundAdd = add.bind(obj);
console.log(boundAdd(1, 2, 3)); // 48
```

Der wohl größte Vorteil der Verwendung von Pfeilfunktionen liegt bei Methoden wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`EventTarget.prototype.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), die normalerweise eine Art Closure, `call()`, `apply()` oder `bind()` erfordern, um sicherzustellen, dass die Funktion im richtigen Scope ausgeführt wird.

Mit traditionellen Funktionsausdrücken funktioniert ein solcher Code nicht wie erwartet:

```js
const obj = {
  count: 10,
  doSomethingLater() {
    setTimeout(function () {
      // the function executes on the window scope
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); // logs "NaN", because the property "count" is not in the window scope.
```

Mit Pfeilfunktionen ist der `this`-Scope leichter beizubehalten:

```js
const obj = {
  count: 10,
  doSomethingLater() {
    // The method syntax binds "this" to the "obj" context.
    setTimeout(() => {
      // Since the arrow function doesn't have its own binding and
      // setTimeout (as a function call) doesn't create a binding
      // itself, the "obj" context of the outer method is used.
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); // logs 11
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/function", "function")}}
- [`function` expression](/de/docs/Web/JavaScript/Reference/Operators/function)
- [ES6 In Depth: Arrow functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/) auf hacks.mozilla.org (2015)
