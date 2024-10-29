---
title: 'TypeError: "x" ist kein Konstruktor'
slug: Web/JavaScript/Reference/Errors/Not_a_constructor
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "is not a constructor" tritt auf, wenn versucht wurde, ein Objekt oder eine Variable als Konstruktor zu verwenden, aber dieses Objekt oder diese Variable ist kein Konstruktor.

## Meldung

```plain
TypeError: x is not a constructor (V8-based & Firefox & Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Es wurde versucht, ein Objekt oder eine Variable als Konstruktor zu verwenden, aber dieses Objekt oder diese Variable ist kein Konstruktor. Weitere Informationen darüber, was ein Konstruktor ist, finden Sie unter {{Glossary("Constructor", "constructor")}} oder dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new).

Es gibt viele globale Objekte, wie {{jsxref("String")}} oder {{jsxref("Array")}}, die mit `new` konstruiert werden können. Einige globale Objekte sind jedoch nicht konstruiert und ihre Eigenschaften und Methoden sind statisch. Die folgenden JavaScript-Standard-Built-in-Objekte sind kein Konstruktor: {{jsxref("Math")}}, {{jsxref("JSON")}}, {{jsxref("Symbol")}}, {{jsxref("Reflect")}}, {{jsxref("Intl")}}, {{jsxref("Atomics")}}.

[Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) können ebenfalls nicht als Konstruktoren verwendet werden.

## Beispiele

### Ungültige Fälle

```js example-bad
const Car = 1;
new Car();
// TypeError: Car is not a constructor

new Math();
// TypeError: Math is not a constructor

new Symbol();
// TypeError: Symbol is not a constructor

function* f() {}
const obj = new f();
// TypeError: f is not a constructor
```

### Ein Autokonstruktor

Angenommen, Sie möchten einen Objekttyp für Autos erstellen. Sie möchten, dass dieser Objekttyp `Car` genannt wird, und Sie möchten, dass er Eigenschaften für Marke, Modell und Baujahr hat. Dazu würden Sie die folgende Funktion schreiben:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Jetzt können Sie ein Objekt namens `myCar` wie folgt erstellen:

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

### In Promises

Wenn Sie ein sofort aufgelöstes oder sofort abgelehntes Promise zurückgeben, müssen Sie kein `new Promise(...)` erstellen und darauf agieren. Stattdessen verwenden Sie die [`Promise.resolve()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) oder [`Promise.reject()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject) [statischen Methoden](<https://en.wikipedia.org/wiki/Method_(computer_programming)#Static_methods>).

Dies ist nicht zulässig (der [`Promise` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) wird nicht korrekt aufgerufen) und wird eine `TypeError: this is not a constructor` Ausnahme auslösen:

```js example-bad
const fn = () => {
  return new Promise.resolve(true);
};
```

Dies ist zulässig, aber unnötig lang:

```js
const fn = () => {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
};
```

Stattdessen sollten Sie die statische Methode zurückgeben:

```js example-good
const resolveAlways = () => {
  return Promise.resolve(true);
};

const rejectAlways = () => {
  return Promise.reject(false);
};
```

## Siehe auch

- {{Glossary("Constructor", "constructor")}}
- [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)
