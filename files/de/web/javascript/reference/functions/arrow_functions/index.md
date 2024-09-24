---
title: Pfeilfunktionen
slug: Web/JavaScript/Reference/Functions/Arrow_functions
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Functions")}}

Ein **Pfeilfunktion-Ausdruck** ist eine kompakte Alternative zu einem traditionellen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function), mit einigen semantischen Unterschieden und bewussten Einschränkungen in der Nutzung:

- Pfeilfunktionen haben keine eigenen {{Glossary("binding", "Bindings")}} zu [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) oder [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) und sollten nicht als [Methoden](/de/docs/Glossary/Method) verwendet werden.
- Pfeilfunktionen können nicht als [Konstruktoren](/de/docs/Glossary/Constructor) verwendet werden. Ein Aufruf mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) löst einen {{jsxref("TypeError")}} aus. Sie haben auch keinen Zugriff auf das [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) Schlüsselwort.
- In Pfeilfunktionen kann innerhalb ihres Funktionskörpers kein [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) verwendet werden, und sie können nicht als Generatorfunktionen erstellt werden.

{{EmbedInteractiveExample("pages/js/functions-arrow.html")}}

## Syntax

```js-nolint
() => Ausdruck

param => Ausdruck

(param) => Ausdruck

(param1, paramN) => Ausdruck

() => {
  Anweisungen
}

param => {
  Anweisungen
}

(param1, paramN) => {
  Anweisungen
}
```

[Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) und [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) innerhalb von Parametern werden unterstützt und erfordern immer Klammern:

```js-nolint
(a, b, ...r) => Ausdruck
(a = 400, b = 20, c) => Ausdruck
([a, b] = [10, 20]) => Ausdruck
({ a, b } = { a: 10, b: 20 }) => Ausdruck
```

Pfeilfunktionen können [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) sein, indem dem Ausdruck das Schlüsselwort `async` vorangestellt wird.

```js-nolint
async param => Ausdruck
async (param1, param2, ...paramN) => {
  Anweisungen
}
```

## Beschreibung

Lassen Sie uns eine traditionelle anonyme Funktion Schritt für Schritt bis zur einfachsten Pfeilfunktion zerlegen. Jeder Schritt auf dem Weg ist eine gültige Pfeilfunktion.

> [!NOTE]
> Traditionelle Funktionsausdrücke und Pfeilfunktionen haben mehr Unterschiede als nur ihre Syntax. Wir werden ihre Verhaltensunterschiede in den nächsten Unterabschnitten genauer vorstellen.

```js-nolint
// Traditionelle anonyme Funktion
(function (a) {
  return a + 100;
});

// 1. Entfernen Sie das Wort "function" und platzieren Sie einen Pfeil zwischen dem Argument und der öffnenden Körperklammer
(a) => {
  return a + 100;
};

// 2. Entfernen Sie die Körperklammern und das Wort "return" — die Rückgabe ist impliziert.
(a) => a + 100;

// 3. Entfernen Sie die Parameterklammern
a => a + 100;
```

In dem obigen Beispiel dürfen sowohl die Klammern um den Parameter als auch die geschweiften Klammern um den Funktionskörper weggelassen werden. Sie können jedoch nur in bestimmten Fällen weggelassen werden.

Die Klammern können nur weggelassen werden, wenn die Funktion einen einzigen einfachen Parameter hat. Wenn es mehrere Parameter, keine Parameter oder Standard-, destrukturierte oder Restparameter gibt, sind die Klammern um die Parameterliste erforderlich.

```js
// Traditionelle anonyme Funktion
(function (a, b) {
  return a + b + 100;
});

// Pfeilfunktion
(a, b) => a + b + 100;

const a = 4;
const b = 2;

// Traditionelle anonyme Funktion (keine Parameter)
(function () {
  return a + b + 100;
});

// Pfeilfunktion (keine Parameter)
() => a + b + 100;
```

Die geschweiften Klammern können nur weggelassen werden, wenn die Funktion direkt einen Ausdruck zurückgibt. Wenn der Körper Anweisungen enthält, sind die geschweiften Klammern erforderlich — ebenso wie das Schlüsselwort `return`. Pfeilfunktionen können nicht erraten, was oder wann Sie zurückgeben möchten.

```js
// Traditionelle anonyme Funktion
(function (a, b) {
  const chuck = 42;
  return a + b + chuck;
});

// Pfeilfunktion
(a, b) => {
  const chuck = 42;
  return a + b + chuck;
};
```

Pfeilfunktionen sind nicht von Natur aus mit einem Namen verbunden. Wenn die Pfeilfunktion sich selbst aufrufen muss, verwenden Sie stattdessen einen benannten Funktionsausdruck. Sie können die Pfeilfunktion auch einer Variablen zuweisen, sodass Sie über diese Variable darauf verweisen können.

```js
// Traditionelle Funktion
function bob(a) {
  return a + 100;
}

// Pfeilfunktion
const bob2 = (a) => a + 100;
```

### Funktionskörper

Pfeilfunktionen können entweder einen _Ausdruckskörper_ oder den üblichen _Blockkörper_ haben.

In einem Ausdruckskörper wird nur ein einzelner Ausdruck angegeben, der der implizite Rückgabewert wird. In einem Blockkörper müssen Sie eine explizite `return`-Anweisung verwenden.

```js
const func = (x) => x * x;
// Ausdruckskörpersyntax, impliziertes "return"

const func2 = (x, y) => {
  return x + y;
};
// mit Blockkörper, explizites "return" erforderlich
```

Das Zurückgeben von Objektliteralen unter Verwendung der Ausdruckskörpersyntax `(params) => { object: literal }` funktioniert nicht wie erwartet.

```js-nolint example-bad
const func = () => { foo: 1 };
// Der Aufruf von func() gibt undefiniert zurück!

const func2 = () => { foo: function () {} };
// SyntaxError: function statement requires a name

const func3 = () => { foo() {} };
// SyntaxError: Unexpected token '{'
```

Dies liegt daran, dass JavaScript die Pfeilfunktion nur dann als Ausdruckskörper sieht, wenn das Token nach dem Pfeil keine linke geschweifte Klammer ist, sodass der Code innerhalb der geschweiften Klammern ({}) als die Folge von Anweisungen interpretiert wird, wobei `foo` ein [Label](/de/docs/Web/JavaScript/Reference/Statements/label) ist und kein Schlüssel eines Objektliterale.

Um dies zu beheben, umschließen Sie das Objektliteral in Klammern:

```js example-good
const func = () => ({ foo: 1 });
```

### Kann nicht als Methoden verwendet werden

Pfeilfunktion Ausdrücke sollten nur für Nicht-Methoden-Funktionen verwendet werden, da sie kein eigenes `this` haben. Lassen Sie uns sehen, was passiert, wenn wir versuchen, sie als Methoden zu verwenden:

```js
"use strict";

const obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  },
};

obj.b(); // gibt undefined, Window { /* … */ } (oder das globale Objekt) aus
obj.c(); // gibt 10, Object { /* … */ } aus
```

Ein weiteres Beispiel unter Verwendung von {{jsxref("Object.defineProperty()")}}:

```js
"use strict";

const obj = {
  a: 10,
};

Object.defineProperty(obj, "b", {
  get: () => {
    console.log(this.a, typeof this.a, this); // undefined 'undefined' Window { /* … */ } (oder das globale Objekt)
    return this.a + 10; // repräsentiert das globale Objekt 'Window', daher gibt 'this.a' 'undefined' zurück
  },
});
```

Da der Körper einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) einen `this`-Kontext hat, schließen Pfeilfunktionen als [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) über den `this`-Kontext der Klasse, und das `this` innerhalb des Funktionskörpers der Pfeilfunktion zeigt korrekt auf die Instanz (oder die Klasse selbst, bei [statischen Feldern](/de/docs/Web/JavaScript/Reference/Classes/static)). Da es sich jedoch um eine [closure](/de/docs/Web/JavaScript/Closures) handelt und nicht um das eigene Binding der Funktion, ändert der Wert von `this` sich nicht basierend auf dem Ausführungskontext.

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
// Wäre es eine normale Methode, wäre sie in diesem Fall undefined
```

Pfeilfunktionseigenschaften werden oft als "automatisch gebundene Methoden" bezeichnet, da das Äquivalent mit normalen Methoden ist:

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
> Klassenfelder sind auf der _Instanz_ definiert, nicht auf dem _Prototyp_, daher würde jede Instanzerstellung eine neue Funktionsreferenz erstellen und eine neue Closure zuweisen, was potenziell zu höherem Speicherbedarf als eine normale ungebundene Methode führen könnte.

Aus ähnlichen Gründen sind die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) und [`bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) nicht nützlich, wenn sie mit Pfeilfunktionen aufgerufen werden, da Pfeilfunktionen `this` basierend auf dem Kontext binden, in dem die Pfeilfunktion definiert ist, und der Wert von `this` sich nicht basierend darauf ändert, wie die Funktion aufgerufen wird.

### Kein Binding von arguments

Pfeilfunktionen haben kein eigenes [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt. In diesem Beispiel ist `arguments` somit ein Verweis auf die Argumente des umgebenden Umfangs:

```js
function foo(n) {
  const f = () => arguments[0] + n; // implizites Binding von foo's arguments. arguments[0] ist n
  return f();
}

foo(3); // 3 + 3 = 6
```

> [!NOTE]
> Sie können keine Variable namens `arguments` im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode#making_eval_and_arguments_simpler) deklarieren, daher wäre der obige Code ein Syntaxfehler. Dies macht den Scoping-Effekt von `arguments` deutlich einfacher verständlich.

In den meisten Fällen ist die Verwendung von [Restparametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) eine gute Alternative zur Verwendung eines `arguments`-Objekts.

```js
function foo(n) {
  const f = (...args) => args[0] + n;
  return f(10);
}

foo(1); // 11
```

### Kann nicht als Konstruktoren verwendet werden

Pfeilfunktionen können nicht als Konstruktoren verwendet werden und werfen einen Fehler, wenn sie mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Sie haben auch keine [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft.

```js
const Foo = () => {};
const foo = new Foo(); // TypeError: Foo is not a constructor
console.log("prototype" in Foo); // false
```

### Kann nicht als Generatoren verwendet werden

Das [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)-Schlüsselwort kann im Körper einer Pfeilfunktion nicht verwendet werden (außer wenn es innerhalb von Generatorfunktionen verwendet wird, die weiter innerhalb der Pfeilfunktion geschachtelt sind). Daher können Pfeilfunktionen nicht als Generatoren verwendet werden.

### Zeilenumbruch vor dem Pfeil

Eine Pfeilfunktion kann keinen Zeilenumbruch zwischen ihren Parametern und ihrem Pfeil enthalten.

```js-nolint example-bad
const func = (a, b, c)
  => 1;
// SyntaxError: Unexpected token '=>'
```

Zum Zweck der Formatierung können Sie den Zeilenumbruch nach dem Pfeil setzen oder Klammern/geschweifte Klammern um den Funktionskörper verwenden, wie unten gezeigt. Sie können auch Zeilenumbrüche zwischen den Parametern verwenden.

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

### Vorrang von Pfeil

Obwohl der Pfeil in einer Pfeilfunktion kein Operator ist, haben Pfeilfunktionen spezielle Parsing-Regeln, die anders mit [Operatorvorrang](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) interagieren als reguläre Funktionen.

```js-nolint example-bad
let callback;

callback = callback || () => {};
// SyntaxError: Ungültige Arrow-Function Argumente
```

Da `=>` eine geringere Priorität hat als die meisten Operatoren, sind Klammern notwendig, um zu verhindern, dass `callback || ()` als Argumentenliste der Pfeilfunktion interpretiert wird.

```js example-good
callback = callback || (() => {});
```

## Beispiele

### Verwendung von Pfeilfunktionen

```js
// Eine leere Pfeilfunktion gibt undefined zurück
const empty = () => {};

(() => "foobar")();
// Gibt "foobar" zurück
// (das ist ein Immediately Invoked Function Expression)

const simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

const max = (a, b) => (a > b ? a : b);

// Einfache Array-Filterung, -Mapping usw.
const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// Kürzere Promise-Ketten
promise
  .then((a) => {
    // …
  })
  .then((b) => {
    // …
  });

// Parameterlose Pfeilfunktionen, die optisch leichter zu verstehen sind
setTimeout(() => {
  console.log("Ich geschehe früher");
  setTimeout(() => {
    // tieferer Code
    console.log("Ich geschehe später");
  }, 1);
}, 1);
```

### Verwendung von call, bind und apply

Die Methoden [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) und [`bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) funktionieren wie erwartet mit traditionellen Funktionen, da wir den Kontext für jede der Methoden festlegen:

```js
const obj = {
  num: 100,
};

// Setzt "num" auf globalThis, um zu zeigen, wie es NICHT verwendet wird.
globalThis.num = 42;

// Eine einfache traditionelle Funktion, um auf "this" zu operieren
const add = function (a, b, c) {
  return this.num + a + b + c;
};

console.log(add.call(obj, 1, 2, 3)); // 106
console.log(add.apply(obj, [1, 2, 3])); // 106
const boundAdd = add.bind(obj);
console.log(boundAdd(1, 2, 3)); // 106
```

Mit Pfeilfunktionen, da unsere `add`-Funktion im Wesentlichen im `globalThis` (globalen) Kontext erstellt wird, nimmt sie an, dass `this` das `globalThis` ist.

```js
const obj = {
  num: 100,
};

// Setzt "num" auf globalThis, um zu zeigen, wie es aufgenommen wird.
globalThis.num = 42;

// Pfeilfunktion
const add = (a, b, c) => this.num + a + b + c;

console.log(add.call(obj, 1, 2, 3)); // 48
console.log(add.apply(obj, [1, 2, 3])); // 48
const boundAdd = add.bind(obj);
console.log(boundAdd(1, 2, 3)); // 48
```

Vielleicht ist der größte Vorteil der Verwendung von Pfeilfunktionen mit Methoden wie {{domxref("setTimeout()")}} und {{domxref("EventTarget/addEventListener()", "EventTarget.prototype.addEventListener()")}}, die normalerweise irgendeine Art von Closure, `call()`, `apply()` oder `bind()` erfordern, um sicherzustellen, dass die Funktion im richtigen Kontext ausgeführt wird.

Mit traditionellen Funktionsausdrücken funktioniert Code wie dieser nicht wie erwartet:

```js
const obj = {
  count: 10,
  doSomethingLater() {
    setTimeout(function () {
      // die Funktion wird im Fensterscope ausgeführt
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); // gibt "NaN" aus, weil die Eigenschaft "count" nicht im Fensterscope ist.
```

Mit Pfeilfunktionen wird der `this`-Kontext leichter erhalten:

```js
const obj = {
  count: 10,
  doSomethingLater() {
    // Die Methodensyntax bindet "this" an den "obj"-Kontext.
    setTimeout(() => {
      // Da die Pfeilfunktion keine eigene Bindung und
      // setTimeout (als Funktionsaufruf) selbst keine Bindung erstellt,
      // wird der "obj"-Kontext der äußeren Methode verwendet.
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); // gibt 11 aus
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Anleitung
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/function", "function")}}
- [`function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- [ES6 In Depth: Arrow functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/) auf hacks.mozilla.org (2015)
