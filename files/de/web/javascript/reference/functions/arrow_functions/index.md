---
title: Arrow function expressions
slug: Web/JavaScript/Reference/Functions/Arrow_functions
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{jsSidebar("Functions")}}

Ein **Arrow Function Ausdruck** ist eine kompakte Alternative zu einem traditionellen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function), mit einigen semantischen Unterschieden und bewussten Nutzungseinschränkungen:

- Arrow Functions haben keine eigenen {{Glossary("binding", "Bindings")}} für [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) oder [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) und sollten nicht als {{Glossary("Method", "Methoden")}} verwendet werden.
- Arrow Functions können nicht als {{Glossary("Constructor", "Konstruktoren")}} verwendet werden. Ein Aufruf mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) führt zu einem {{jsxref("TypeError")}}. Sie haben auch keinen Zugriff auf das [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) Schlüsselwort.
- Arrow Functions können innerhalb ihres Rumpfes kein [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) verwenden und können nicht als Generatorfunktionen erstellt werden.

{{EmbedInteractiveExample("pages/js/functions-arrow.html")}}

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

[Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) und [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) innerhalb von Parametern werden unterstützt und erfordern immer Klammern:

```js-nolint
(a, b, ...r) => expression
(a = 400, b = 20, c) => expression
([a, b] = [10, 20]) => expression
({ a, b } = { a: 10, b: 20 }) => expression
```

Arrow Functions können [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) sein, indem der Ausdruck mit dem `async` Schlüsselwort vorangestellt wird.

```js-nolint
async param => expression
async (param1, param2, ...paramN) => {
  statements
}
```

## Beschreibung

Lassen Sie uns eine traditionelle anonyme Funktion Schritt für Schritt zu einer einfachen Arrow Function herunterbrechen. Jeder Schritt auf dem Weg ist eine gültige Arrow Function.

> [!NOTE]
> Traditionelle Funktionsausdrücke und Arrow Functions haben mehr Unterschiede als nur ihre Syntax. Wir werden die Verhaltensunterschiede in den nächsten Unterabschnitten ausführlicher vorstellen.

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

Im obigen Beispiel können sowohl die Klammern um den Parameter als auch die geschweiften Klammern um den Funktionskörper weggelassen werden. Dies ist jedoch nur in bestimmten Fällen möglich.

Die Klammern können nur weggelassen werden, wenn die Funktion einen einzigen einfachen Parameter hat. Bei mehreren Parametern, keinen Parametern oder Standard-, destrukturierten oder Restparametern sind die Klammern um die Parameterliste erforderlich.

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

Die geschweiften Klammern können nur weggelassen werden, wenn die Funktion direkt einen Ausdruck zurückgibt. Wenn der Rumpf Anweisungen enthält, sind die geschweiften Klammern erforderlich – ebenso das `return` Schlüsselwort. Arrow Functions können nicht erraten, was oder wann Sie etwas zurückgeben möchten.

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

Arrow Functions sind nicht von Natur aus mit einem Namen verbunden. Wenn die Arrow Function sich selbst aufrufen muss, verwenden Sie stattdessen einen benannten Funktionsausdruck. Sie können die Arrow Function auch einer Variablen zuweisen, sodass Sie sie über diese Variable aufrufen können.

```js
// Traditional Function
function bob(a) {
  return a + 100;
}

// Arrow Function
const bob2 = (a) => a + 100;
```

### Funktionskörper

Arrow Functions können entweder einen _Ausdruckskörper_ oder den üblichen _Blockkörper_ haben.

In einem Ausdruckskörper wird nur ein einzelner Ausdruck angegeben, der zum impliziten Rückgabewert wird. In einem Blockkörper müssen Sie eine explizite `return` Anweisung verwenden.

```js
const func = (x) => x * x;
// expression body syntax, implied "return"

const func2 = (x, y) => {
  return x + y;
};
// with block body, explicit "return" needed
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

Dies liegt daran, dass JavaScript den Arrow Function Ausdruck nur als Ausdruckskörper betrachtet, wenn das Token nach dem Pfeil keine geschweifte Klammer ist, sodass der Code innerhalb der Klammern ({}) als Folge von Anweisungen geparst wird, wobei `foo` ein [Label](/de/docs/Web/JavaScript/Reference/Statements/label) ist, kein Schlüssel in einem Objektliteral.

Um dies zu korrigieren, schließen Sie das Objektliteral in Klammern ein:

```js example-good
const func = () => ({ foo: 1 });
```

### Können nicht als Methoden verwendet werden

Arrow Function Ausdrücke sollten nur für nicht-methodische Funktionen verwendet werden, da sie kein eigenes `this` haben. Schauen wir uns an, was passiert, wenn wir versuchen, sie als Methoden zu verwenden:

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

Da der Körper einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) einen `this` Kontext hat, schließen Arrow Functions als [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) den `this` Kontext der Klasse ein, und das `this` innerhalb des Körpers der Arrow Function zeigt korrekt auf die Instanz (oder die Klasse selbst, für [statische Felder](/de/docs/Web/JavaScript/Reference/Classes/static)). Jedoch, da es sich um eine [Closure](/de/docs/Web/JavaScript/Closures) handelt, nicht um das eigene Binding der Funktion, ändert sich der Wert von `this` nicht basierend auf dem Ausführungskontext.

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

Arrow Function Eigenschaften werden oft als "automatisch gebundene Methoden" bezeichnet, weil das Äquivalent mit normalen Methoden so ist:

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
> Klassenfelder sind auf der _Instanz_ definiert, nicht auf dem _Prototyp_, sodass jeder Instanz-Erstellung eine neue Funktionsreferenz erstellt und eine neue Closure zugewiesen wird, was potenziell zu einem höheren Speicherverbrauch führt als eine normale nicht gebundene Methode.

Aus ähnlichen Gründen sind die [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) und [`bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) Methoden nicht nützlich, wenn sie auf Arrow Functions aufgerufen werden, da Arrow Functions `this` basierend auf dem Scope einstellen, in dem die Arrow Function definiert ist, und der `this` Wert sich nicht ändert, basierend darauf, wie die Funktion aufgerufen wird.

### Keine Bindung von Arguments

Arrow Functions haben kein eigenes [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) Objekt. Daher ist in diesem Beispiel `arguments` eine Referenz auf die Arguments des umgebenden Scopes:

```js
function foo(n) {
  const f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

foo(3); // 3 + 3 = 6
```

> [!NOTE]
> Sie können keine Variable mit dem Namen `arguments` im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#making_eval_and_arguments_simpler) deklarieren, daher wäre der obige Code ein Syntaxfehler. Dies erleichtert das Verständnis des Scoping-Effekts von `arguments`.

In den meisten Fällen ist die Verwendung von [Restparametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) eine gute Alternative zur Verwendung eines `arguments` Objekts.

```js
function foo(n) {
  const f = (...args) => args[0] + n;
  return f(10);
}

foo(1); // 11
```

### Können nicht als Konstruktoren verwendet werden

Arrow Functions können nicht als Konstruktoren verwendet werden und werfen einen Fehler, wenn sie mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Sie haben auch keine [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) Eigenschaft.

```js
const Foo = () => {};
const foo = new Foo(); // TypeError: Foo is not a constructor
console.log("prototype" in Foo); // false
```

### Können nicht als Generatoren verwendet werden

Das [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) Schlüsselwort kann nicht im Körper einer Arrow Function verwendet werden (es sei denn, es wird innerhalb von weiteren, in der Arrow Function eingebetteten Generatorfunktionen verwendet). Als Konsequenz können Arrow Functions nicht als Generatoren verwendet werden.

### Zeilenumbruch vor dem Pfeil

Eine Arrow Function kann keinen Zeilenumbruch zwischen ihren Parametern und ihrem Pfeil enthalten.

```js-nolint example-bad
const func = (a, b, c)
  => 1;
// SyntaxError: Unexpected token '=>'
```

Zum Zweck der Formatierung können Sie den Zeilenumbruch nach dem Pfeil setzen oder Klammern/geschweifte Klammern um den Funktionskörper setzen, wie unten gezeigt. Sie können auch Zeilenumbrüche zwischen den Parametern setzen.

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

Obwohl der Pfeil in einer Arrow Function kein Operator ist, haben Arrow Functions spezielle Parsing-Regeln, die anders mit der [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) interagieren als normale Funktionen.

```js-nolint example-bad
let callback;

callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments
```

Da `=>` eine niedrigere Priorität als die meisten Operatoren hat, sind Klammern erforderlich, um zu verhindern, dass `callback || ()` als Argumentenliste der Arrow Function geparst wird.

```js example-good
callback = callback || (() => {});
```

## Beispiele

### Verwendung von Arrow Functions

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

### Verwendung von call, bind und apply

Die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) und [`bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) funktionieren wie erwartet mit traditionellen Funktionen, da wir den Scope für jede der Methoden festlegen:

```js
const obj = {
  num: 100,
};

// Setting "num" on globalThis to show how it is NOT used.
globalThis.num = 42;

// A simple traditional function to operate on "this"
const add = function (a, b, c) {
  return this.num + a + b + c;
};

console.log(add.call(obj, 1, 2, 3)); // 106
console.log(add.apply(obj, [1, 2, 3])); // 106
const boundAdd = add.bind(obj);
console.log(boundAdd(1, 2, 3)); // 106
```

Bei Arrow Functions, da unsere `add` Funktion im Wesentlichen im `globalThis` (global) Scope erstellt wird, nimmt sie an, dass `this` das `globalThis` ist.

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

Der vielleicht größte Vorteil der Verwendung von Arrow Functions liegt bei Methoden wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`EventTarget.prototype.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), die normalerweise eine Art von Closure, `call()`, `apply()`, oder `bind()` erfordern, um sicherzustellen, dass die Funktion im richtigen Scope ausgeführt wird.

Mit traditionellen Funktionsausdrücken funktioniert Code wie dieser nicht wie erwartet:

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

Mit Arrow Functions wird der `this` Scope leichter bewahrt:

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
- [`function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- [ES6 In Depth: Arrow functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/) auf hacks.mozilla.org (2015)
