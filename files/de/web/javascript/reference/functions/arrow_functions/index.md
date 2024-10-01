---
title: Arrow function expressions
slug: Web/JavaScript/Reference/Functions/Arrow_functions
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Functions")}}

Ein **Pfeilfunktionsausdruck** ist eine kompakte Alternative zu einem traditionellen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) mit einigen semantischen Unterschieden und bewussten Einschränkungen bei der Verwendung:

- Pfeilfunktionen haben keine eigenen {{Glossary("binding", "Bindungen")}} an [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) oder [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) und sollten nicht als {{Glossary("Method", "Methoden")}} verwendet werden.
- Pfeilfunktionen können nicht als {{Glossary("Constructor", "Konstruktoren")}} verwendet werden. Ein Aufruf mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) löst einen {{jsxref("TypeError")}} aus. Sie haben auch keinen Zugriff auf das Schlüsselwort [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target).
- Pfeilfunktionen können innerhalb ihres Funktionskörpers kein [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) verwenden und können nicht als Generatorfunktionen erstellt werden.

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

[Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) und [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) innerhalb von Parametern werden unterstützt und erfordern immer Klammern:

```js-nolint
(a, b, ...r) => expression
(a = 400, b = 20, c) => expression
([a, b] = [10, 20]) => expression
({ a, b } = { a: 10, b: 20 }) => expression
```

Pfeilfunktionen können durch Voranstellen des `async`-Schlüsselworts [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) sein.

```js-nolint
async param => expression
async (param1, param2, ...paramN) => {
  statements
}
```

## Beschreibung

Zerlegen wir eine traditionelle anonyme Funktion Schritt für Schritt bis hin zur einfachsten Pfeilfunktion. Jeder Schritt auf dem Weg ist eine gültige Pfeilfunktion.

> [!NOTE]
> Traditionelle Funktionsausdrücke und Pfeilfunktionen haben mehr Unterschiede als nur ihre Syntax. Wir werden ihre Verhaltensunterschiede in den folgenden Unterabschnitten näher erläutern.

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

Im obigen Beispiel können sowohl die Klammern um den Parameter als auch die geschweiften Klammern um den Funktionskörper weggelassen werden. Sie können jedoch nur in bestimmten Fällen weggelassen werden.

Die Klammern können nur weggelassen werden, wenn die Funktion einen einzigen einfachen Parameter hat. Wenn sie mehrere Parameter, keine Parameter oder Standard-, destrukturierte oder Rest-Parameter hat, sind die Klammern um die Parameterliste erforderlich.

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

Die geschweiften Klammern können nur weggelassen werden, wenn die Funktion direkt einen Ausdruck zurückgibt. Wenn der Körper Anweisungen enthält, sind die geschweiften Klammern erforderlich - ebenso wie das `return`-Schlüsselwort. Pfeilfunktionen können nicht erraten, was oder wann Sie etwas zurückgeben möchten.

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

Pfeilfunktionen sind nicht von Natur aus mit einem Namen verbunden. Wenn die Pfeilfunktion sich selbst aufrufen muss, verwenden Sie stattdessen einen benannten Funktionsausdruck. Sie können die Pfeilfunktion auch einer Variablen zuweisen, sodass Sie über diese Variable darauf verweisen können.

```js
// Traditional Function
function bob(a) {
  return a + 100;
}

// Arrow Function
const bob2 = (a) => a + 100;
```

### Funktionskörper

Pfeilfunktionen können entweder einen _Ausdruckskörper_ oder den üblichen _Blockkörper_ haben.

In einem Ausdruckskörper wird nur ein einzelner Ausdruck angegeben, der zum impliziten Rückgabewert wird. In einem Blockkörper müssen Sie eine explizite `return`-Anweisung verwenden.

```js
const func = (x) => x * x;
// expression body syntax, implied "return"

const func2 = (x, y) => {
  return x + y;
};
// with block body, explicit "return" needed
```

Das Zurückgeben von Objektliteralen mit der Ausdruckskörpersyntax `(params) => { object: literal }` funktioniert nicht wie erwartet.

```js-nolint example-bad
const func = () => { foo: 1 };
// Calling func() returns undefined!

const func2 = () => { foo: function () {} };
// SyntaxError: function statement requires a name

const func3 = () => { foo() {} };
// SyntaxError: Unexpected token '{'
```

Dies liegt daran, dass JavaScript die Pfeilfunktion nur dann als Ausdruckskörper betrachtet, wenn das nach dem Pfeil folgende Token keine linke geschweifte Klammer ist, sodass der Code in geschweiften Klammern ({}) als Anweisungsfolge analysiert wird, wobei `foo` ein [Label](/de/docs/Web/JavaScript/Reference/Statements/label) ist, nicht ein Schlüssel in einem Objektliteral.

Um dies zu beheben, umschließen Sie das Objektliteral in Klammern:

```js example-good
const func = () => ({ foo: 1 });
```

### Können nicht als Methoden verwendet werden

Pfeilfunktionsausdrücke sollten nur für Nicht-Methodenfunktionen verwendet werden, da sie kein eigenes `this` haben. Schauen wir uns an, was passiert, wenn wir versuchen, sie als Methoden zu verwenden:

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

Ein weiteres Beispiel unter Verwendung von {{jsxref("Object.defineProperty()")}}:

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

Da der Körper einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) einen `this`-Kontext hat, schließen Pfeilfunktionen als [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) über den `this`-Kontext der Klasse, und `this` im Körper der Pfeilfunktion zeigt korrekt auf die Instanz (oder die Klasse selbst für [statische Felder](/de/docs/Web/JavaScript/Reference/Classes/static)). Da es sich jedoch um eine [Schließung](/de/docs/Web/JavaScript/Closures) und nicht um die eigene Bindung der Funktion handelt, ändert sich der Wert von `this` nicht basierend auf dem Ausführungskontext.

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

Pfeilfunktions-Eigenschaften werden oft als "automatisch gebundene Methoden" bezeichnet, da das Äquivalent mit normalen Methoden so aussieht:

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
> Klassenfelder werden auf der _Instanz_ definiert, nicht auf dem _Prototyp_, sodass bei jeder Instanzerstellung ein neuer Funktionsverweis erstellt und eine neue Schließung zugewiesen wird, was potenziell zu einem höheren Speicherbedarf als eine normale nicht gebundene Methode führen kann.

Aus ähnlichen Gründen sind die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) und [`bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) bei Aufruf von Pfeilfunktionen nicht nützlich, da Pfeilfunktionen `this` basierend auf dem Bereich festlegen, in dem die Pfeilfunktion definiert ist, und der `this`-Wert sich nicht ändert, basierend darauf, wie die Funktion aufgerufen wird.

### Keine Bindung von Argumenten

Pfeilfunktionen haben kein eigenes [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt. Somit ist in diesem Beispiel `arguments` ein Verweis auf die Argumente des umgebenden Bereichs:

```js
function foo(n) {
  const f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

foo(3); // 3 + 3 = 6
```

> [!NOTE]
> Sie können im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#making_eval_and_arguments_simpler) keine Variable namens `arguments` deklarieren, daher wäre der obige Code ein Syntaxfehler. Dies macht den Begrenzungseffekt von `arguments` viel einfacher zu verstehen.

In den meisten Fällen ist die Verwendung von [Rest-Parametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
eine gute Alternative zur Verwendung eines `arguments`-Objekts.

```js
function foo(n) {
  const f = (...args) => args[0] + n;
  return f(10);
}

foo(1); // 11
```

### Können nicht als Konstruktoren verwendet werden

Pfeilfunktionen können nicht als Konstruktoren verwendet werden und lösen einen Fehler aus, wenn sie mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Sie haben auch keine [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft.

```js
const Foo = () => {};
const foo = new Foo(); // TypeError: Foo is not a constructor
console.log("prototype" in Foo); // false
```

### Können nicht als Generatoren verwendet werden

Das [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)-Schlüsselwort kann im Körper einer Pfeilfunktion nicht verwendet werden (außer wenn es innerhalb von Generatorfunktionen weiter innerhalb der Pfeilfunktion verwendet wird). Folglich können Pfeilfunktionen nicht als Generatoren verwendet werden.

### Zeilenumbruch vor Pfeil

Eine Pfeilfunktion kann keinen Zeilenumbruch zwischen ihren Parametern und ihrem Pfeil enthalten.

```js-nolint example-bad
const func = (a, b, c)
  => 1;
// SyntaxError: Unexpected token '=>'
```

Zum Zweck der Formatierung können Sie den Zeilenumbruch nach dem Pfeil setzen oder Klammern/geschweifte Klammern um den Funktionskörper verwenden, wie unten gezeigt. Sie können auch Zeilenumbrüche zwischen den Parametern setzen.

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

### Vorrang von Pfeilen

Obwohl der Pfeil in einer Pfeilfunktion kein Operator ist, haben Pfeilfunktionen spezielle Parsing-Regeln, die anders mit der [Operatorrangfolge](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) interagieren als reguläre Funktionen.

```js-nolint example-bad
let callback;

callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments
```

Da `=>` einen geringeren Vorrang als die meisten Operatoren hat, sind Klammern erforderlich, um zu verhindern, dass `callback || ()` als Argumentliste der Pfeilfunktion analysiert wird.

```js example-good
callback = callback || (() => {});
```

## Beispiele

### Verwenden von Pfeilfunktionen

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

### Verwenden von call, bind und apply

Die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) und [`bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) funktionieren wie erwartet mit traditionellen Funktionen, da wir den Bereich für jede der Methoden festlegen:

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

Bei Pfeilfunktionen, da unsere `add`-Funktion im Wesentlichen im `globalThis` (globalen) Bereich erstellt wird, nimmt sie an, dass `this` das `globalThis` ist.

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

Vielleicht der größte Vorteil der Verwendung von Pfeilfunktionen ist bei Methoden wie [`setTimeout()`](/de/docs/Web/API/SetTimeout) und [`EventTarget.prototype.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), die normalerweise eine Art von Schließung, `call()`, `apply()` oder `bind()` erfordern, um sicherzustellen, dass die Funktion im richtigen Bereich ausgeführt wird.

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

Mit Pfeilfunktionen bleibt der `this`-Bereich leichter erhalten:

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
