---
title: 'TypeError: "x" ist kein Konstruktor'
slug: Web/JavaScript/Reference/Errors/Not_a_constructor
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "ist kein Konstruktor" tritt auf, wenn versucht wurde, ein Objekt oder eine Variable als Konstruktor zu verwenden, aber dieses Objekt oder diese Variable ist kein Konstruktor.

## Nachricht

```plain
TypeError: x is not a constructor (V8-based & Firefox & Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Es wurde versucht, ein Objekt oder eine Variable als Konstruktor zu verwenden, aber dieses Objekt oder diese Variable ist kein Konstruktor. Weitere Informationen darüber, was ein Konstruktor ist, finden Sie unter {{Glossary("Constructor", "constructor")}} oder dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new).

Es gibt viele globale Objekte, wie zum Beispiel {{jsxref("String")}} oder {{jsxref("Array")}}, die mit `new` konstruiert werden können. Einige globale Objekte sind dies jedoch nicht, und ihre Eigenschaften und Methoden sind statisch. Die folgenden in JavaScript standardmäßig integrierten Objekte sind keine Konstruktoren: {{jsxref("Math")}}, {{jsxref("JSON")}}, {{jsxref("Symbol")}}, {{jsxref("Reflect")}}, {{jsxref("Intl")}}, {{jsxref("Atomics")}}.

[Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) können ebenfalls nicht als Konstruktoren verwendet werden.

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

### Ein Auto-Konstruktor

Angenommen, Sie möchten einen Objekttyp für Autos erstellen. Sie möchten, dass dieser Objekttyp `Car` genannt wird und er soll Eigenschaften für Marke, Modell und Baujahr haben. Dazu würden Sie die folgende Funktion schreiben:

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

Wenn Sie ein sofort aufgelöstes oder sofort abgelehntes Promise zurückgeben, müssen Sie kein `new Promise(...)` erstellen und darauf reagieren. Stattdessen verwenden Sie die [statischen Methoden](<https://en.wikipedia.org/wiki/Method_(computer_programming)#Static_methods>) [`Promise.resolve()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) oder [`Promise.reject()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject).

Dies ist nicht legal (der [`Promise` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) wird nicht korrekt aufgerufen) und wird eine `TypeError: this is not a constructor`-Ausnahme werfen:

```js example-bad
function fn() {
  return new Promise.resolve(true);
}
```

Dies ist legal, aber unnötig lang:

```js
function fn() {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
}
```

Stattdessen geben Sie die statische Methode zurück:

```js example-good
function resolveAlways() {
  return Promise.resolve(true);
}

function rejectAlways() {
  return Promise.reject(new Error());
}
```

## Siehe auch

- {{Glossary("Constructor", "constructor")}}
- [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)
