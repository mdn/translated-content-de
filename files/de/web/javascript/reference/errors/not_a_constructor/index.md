---
title: 'TypeError: "x" ist kein Konstruktor'
slug: Web/JavaScript/Reference/Errors/Not_a_constructor
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "is not a constructor" tritt auf, wenn versucht wird, ein Objekt oder eine Variable als Konstruktor zu verwenden, obwohl dieses Objekt oder diese Variable kein Konstruktor ist.

## Nachricht

```plain
TypeError: x is not a constructor (V8-based & Firefox & Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Es wurde versucht, ein Objekt oder eine Variable als Konstruktor zu verwenden, aber dieses Objekt oder diese Variable ist kein Konstruktor. Weitere Informationen darüber, was ein Konstruktor ist, finden Sie unter {{Glossary("Constructor", "constructor")}} oder beim [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new).

Es gibt viele globale Objekte, wie {{jsxref("String")}} oder {{jsxref("Array")}}, die mit `new` konstruiert werden können. Einige globale Objekte sind jedoch nicht konstruktierbar, und ihre Eigenschaften und Methoden sind statisch. Die folgenden JavaScript-Standardobjekte sind keine Konstruktoren: {{jsxref("Math")}}, {{jsxref("JSON")}}, {{jsxref("Symbol")}}, {{jsxref("Reflect")}}, {{jsxref("Intl")}}, {{jsxref("Atomics")}}.

[Generatordefinitionen](/de/docs/Web/JavaScript/Reference/Statements/function*) können ebenfalls nicht als Konstruktoren verwendet werden.

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

Angenommen, Sie möchten einen Objekttyp für Autos erstellen. Sie möchten, dass dieser Objekttyp `Car` genannt wird und Eigenschaften für Fabrikat, Modell und Baujahr besitzt. Hierfür würden Sie die folgende Funktion schreiben:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Nun können Sie ein Objekt namens `myCar` wie folgt erstellen:

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

### In Promises

Wenn Sie ein sofort aufgelöstes oder sofort abgelehntes Promise zurückgeben, müssen Sie kein `new Promise(...)` erstellen und darauf wirken. Verwenden Sie stattdessen die [statischen Methoden](<https://en.wikipedia.org/wiki/Method_(computer_programming)#Static_methods>) [`Promise.resolve()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) oder [`Promise.reject()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject).

Dies ist nicht zulässig (der [`Promise`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) wird nicht korrekt aufgerufen) und wird eine `TypeError: this is not a constructor`-Ausnahme auslösen:

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

Stattdessen sollte die statische Methode zurückgegeben werden:

```js example-good
const resolveAlways = () => {
  return Promise.resolve(true);
};

const rejectAlways = () => {
  return Promise.reject(new Error());
};
```

## Siehe auch

- {{Glossary("Constructor", "constructor")}}
- [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)
