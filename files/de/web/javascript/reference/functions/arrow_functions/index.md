---
title: Pfeilfunktionen (Arrow Function Expressions)
slug: Web/JavaScript/Reference/Functions/Arrow_functions
l10n:
  sourceCommit: 5c8d0ac21db572edebbd4ad428efca0af3ec1734
---

Ein **Arrow Function Expression** ist eine kompakte Alternative zu einem traditionellen [Function Expression](/de/docs/Web/JavaScript/Reference/Operators/function), mit einigen semantischen Unterschieden und bewussten Einschränkungen in der Verwendung:

- Arrow-Funktionen haben keine eigenen {{Glossary("binding", "Bindings")}} zu [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) oder [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) und sollten nicht als {{Glossary("Method", "Methoden")}} verwendet werden.
- Arrow-Funktionen können nicht als {{Glossary("Constructor", "Konstruktoren")}} verwendet werden. Ein Aufruf mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) führt zu einem {{jsxref("TypeError")}}. Sie haben auch keinen Zugriff auf das Schlüsselwort [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target).
- Arrow-Funktionen können innerhalb ihres Körpers kein [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) verwenden und können nicht als Generatorfunktionen erstellt werden.

{{InteractiveExample("JavaScript Demo: Arrow function expressions")}}

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

[Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) und [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) innerhalb von Parametern werden unterstützt und erfordern immer Klammern:

```js-nolint
(a, b, ...r) => expression
(a = 400, b = 20, c) => expression
([a, b] = [10, 20]) => expression
({ a, b } = { a: 10, b: 20 }) => expression
```

Arrow-Funktionen können [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) sein, indem sie mit dem Schlüsselwort `async` versehen werden.

```js-nolint
async param => expression
async (param1, param2, ...paramN) => {
  statements
}
```

## Beschreibung

Lassen Sie uns eine traditionelle anonyme Funktion Schritt für Schritt auf die einfachste Arrow-Funktion reduzieren. Jeder Schritt ist eine gültige Arrow-Funktion.

> [!NOTE]
> Traditionelle Function Expressions und Arrow-Funktionen unterscheiden sich nicht nur in ihrer Syntax. Wir werden die Unterschiede in ihrem Verhalten in den nächsten Abschnitten ausführlicher vorstellen.

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

Im obigen Beispiel können sowohl die Klammern um den Parameter als auch die geschweiften Klammern um den Funktionskörper weggelassen werden. Allerdings können sie nur in bestimmten Fällen weggelassen werden.

Die Klammern können nur weggelassen werden, wenn die Funktion einen einzigen einfachen Parameter hat. Wenn sie mehrere Parameter, keine Parameter oder Standard-, destrukturierte oder Restparameter hat, sind die Klammern um die Parameterliste erforderlich.

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

Die geschweiften Klammern können nur weggelassen werden, wenn die Funktion direkt einen Ausdruck zurückgibt. Wenn der Körper Anweisungen enthält, sind die Klammern erforderlich. In diesem Fall müssen Rückgabewerte explizit mit dem Schlüsselwort `return` angegeben werden. Arrow-Funktionen können nicht erraten, was oder wann Sie etwas zurückgeben möchten.

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

Arrow-Funktionen sind nicht von Haus aus mit einem Namen verbunden. Wenn die Arrow-Funktion sich selbst aufrufen muss, verwenden Sie stattdessen ein benanntes Function Expression. Sie können die Arrow-Funktion auch einer Variablen zuweisen, sodass Sie sie über diese Variable referenzieren können.

```js
// Traditional Function
function bob(a) {
  return a + 100;
}

// Arrow Function
const bob2 = (a) => a + 100;
```

### Funktionskörper

Arrow-Funktionen können entweder einen _Ausdruckskörper_ oder den üblichen _Blockkörper_ haben.

In einem Ausdruckskörper wird nur ein einzelner Ausdruck angegeben, der zum impliziten Rückgabewert wird. Der Blockkörper ist analog zu traditionellen Funktionskörpern, bei denen Rückgabewerte explizit mit dem Schlüsselwort `return` angegeben werden müssen. Arrow-Funktionen sind nicht verpflichtet, einen Wert zurückzugeben. Wenn die Ausführung des Blockkörpers bis zum Ende ohne einen `return`-Befehl erreicht, gibt die Funktion wie andere Funktionen `undefined` zurück.

```js
// Expression body
const add = (a, b) => a + b; // Implicitly returns a + b

// Block body
const add2 = (a, b) => {
  console.log(a, b);
  return a + b; // Must explicitly return a value
};

// No return value
const add3 = (b) => {
  a += b;
  // No return statement, so returns undefined
};
```

Die Rückgabe von Objektliteralen unter Verwendung der Ausdruckskörpersyntax `(params) => { object: literal }` funktioniert nicht wie erwartet.

```js-nolint example-bad
const func = () => { foo: 1 };
// Calling func() returns undefined!

const func2 = () => { foo: function () {} };
// SyntaxError: function statement requires a name

const func3 = () => { foo() {} };
// SyntaxError: Unexpected token '{'
```

Dies liegt daran, dass JavaScript die Arrow-Funktion nur dann als einen Ausdruckskörper ansieht, wenn das Token, das dem Pfeil folgt, keine linke geschweifte Klammer ist, sodass der Code innerhalb der geschweiften Klammern ({}) als eine Folge von Anweisungen geparst wird, wobei `foo` ein [Label](/de/docs/Web/JavaScript/Reference/Statements/label) ist, kein Schlüssel in einem Objektliteral.

Um dies zu beheben, umgeben Sie das Objektliteral mit Klammern:

```js example-good
const func = () => ({ foo: 1 });
```

### Kann nicht als Methoden verwendet werden

Arrow Function Expressions sollten nur für Nicht-Methodenfunktionen verwendet werden, da sie kein eigenes `this` haben. Sehen wir uns an, was passiert, wenn wir versuchen, sie als Methoden zu verwenden:

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

Da der Körper einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) einen `this`-Kontext hat, schließen Arrow-Funktionen als [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) den `this`-Kontext der Klasse ein, und das `this` innerhalb des Körpers der Arrow-Funktion verweist korrekt auf die Instanz (oder die Klasse selbst für [statische Felder](/de/docs/Web/JavaScript/Reference/Classes/static)). Da es sich jedoch um ein [Closure](/de/docs/Web/JavaScript/Guide/Closures) handelt, nicht um das eigene Binding der Funktion, wird sich der Wert von `this` nicht ändern, basierend auf dem Ausführungskontext.

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

Arrow-Funktionen werden oft als "automatisch gebundene Methoden" bezeichnet, da das Äquivalent bei normalen Methoden wie folgt ist:

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
> Klassenfelder werden auf der _Instanz_ definiert, nicht auf dem _Prototyp_, sodass bei jeder Instanzerstellung eine neue Funktionsreferenz erstellt und ein neues Closure zugewiesen wird, was potenziell zu einem höheren Speicherverbrauch führen kann als bei einer normalen ungebundenen Methode.

Aus ähnlichen Gründen sind die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) und [`bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) nicht nützlich, wenn sie auf Arrow-Funktionen angewendet werden, da Arrow-Funktionen `this` basierend auf dem Scope festlegen, in dem die Arrow-Funktion definiert ist, und sich der Wert von `this` nicht ändert, basierend darauf, wie die Funktion aufgerufen wird.

### Kein Binding von Arguments

Arrow-Funktionen haben kein eigenes [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt. Daher referenziert `arguments` in diesem Beispiel die Argumente des umschließenden Scopes:

```js
function foo(n) {
  const f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

foo(3); // 3 + 3 = 6
```

In den meisten Fällen ist die Verwendung von [Rest-Parametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
eine gute Alternative zur Verwendung eines `arguments`-Objekts.

```js
function foo(n) {
  const f = (...args) => args[0] + n;
  return f(10);
}

foo(1); // 11
```

### Kann nicht als Konstruktoren verwendet werden

Arrow-Funktionen können nicht als Konstruktoren verwendet werden und erzeugen einen Fehler, wenn sie mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Sie haben auch keine [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft.

```js
const Foo = () => {};
const foo = new Foo(); // TypeError: Foo is not a constructor
console.log("prototype" in Foo); // false
```

### Kann nicht als Generatoren verwendet werden

Das Schlüsselwort [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) kann in einem Arrow-Funktionskörper nicht verwendet werden (außer wenn es innerhalb von Generatorfunktionen eingesetzt wird, die weiter in der Arrow-Funktion verschachtelt sind). Infolgedessen können Arrow-Funktionen nicht als Generatoren verwendet werden.

### Zeilenumbruch vor dem Pfeil

Eine Arrow-Funktion kann keinen Zeilenumbruch zwischen ihren Parametern und ihrem Pfeil enthalten.

```js-nolint example-bad
const func = (a, b, c)
  => 1;
// SyntaxError: Unexpected token '=>'
```

Für Formatierungszwecke können Sie den Zeilenumbruch nach dem Pfeil setzen oder Klammern/geschweifte Klammern um den Funktionskörper verwenden, wie unten gezeigt. Sie können auch Zeilenumbrüche zwischen den Parametern einfügen.

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

### Präzedenz des Pfeils

Obwohl der Pfeil in einer Arrow-Funktion [kein Operator](/de/docs/Web/JavaScript/Reference/Operators#what_are_operators) ist, haben Arrow-Funktionen spezielle Parsing-Regeln, die anders mit der [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) interagieren als reguläre Funktionen.

```js-nolint example-bad
let callback;

callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments
```

Da `=>` eine niedrigere Präzedenz als die meisten Operatoren hat, sind Klammern erforderlich, um zu vermeiden, dass `callback || ()` als Argumentliste der Arrow-Funktion geparst wird.

```js example-good
callback = callback || (() => {});
```

## Beispiele

### Verwendung von Arrow-Funktionen

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

// Arrow functions without parameters
setTimeout(() => {
  console.log("I happen sooner");
  setTimeout(() => {
    // deeper code
    console.log("I happen later");
  }, 1);
}, 1);
```

### Verwendung von call, bind und apply

Die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) und [`bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) funktionieren mit traditionellen Funktionen wie erwartet, da wir den Scope für jede dieser Methoden festlegen:

```js
const obj = {
  num: 100,
};

// Setting "num" on globalThis to show how it is NOT used.
globalThis.num = 42;

// A traditional function to operate on "this"
function add(a, b, c) {
  return this.num + a + b + c;
}

console.log(add.call(obj, 1, 2, 3)); // 106
console.log(add.apply(obj, [1, 2, 3])); // 106
const boundAdd = add.bind(obj);
console.log(boundAdd(1, 2, 3)); // 106
```

Bei Arrow-Funktionen wird unsere `add`-Funktion im Wesentlichen im `globalThis` (globalen) Scope erstellt, wodurch `this` `globalThis` entspricht.

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

Vielleicht der größte Vorteil der Verwendung von Arrow-Funktionen ist ihre Verwendung mit Methoden wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`EventTarget.prototype.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), die normalerweise eine Art von Closure, `call()`, `apply()` oder `bind()` erfordern, um sicherzustellen, dass die Funktion im richtigen Scope ausgeführt wird.

Bei traditionellen Function Expressions funktioniert Code wie dieser nicht wie erwartet:

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

Mit Arrow-Funktionen wird der `this`-Scope leichter erhalten:

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

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/function", "function")}}
- [`function` expression](/de/docs/Web/JavaScript/Reference/Operators/function)
- [ES6 In Depth: Arrow functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/) auf hacks.mozilla.org (2015)
