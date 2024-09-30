---
title: "TypeError: \"x\" ist kein Konstruktor"
slug: Web/JavaScript/Reference/Errors/Not_a_constructor
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "ist kein Konstruktor" tritt auf, wenn versucht wurde, ein Objekt oder eine Variable als Konstruktor zu verwenden, aber dieses Objekt oder diese Variable kein Konstruktor ist.

## Nachricht

```plain
TypeError: x is not a constructor (V8-based & Firefox & Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Es wurde versucht, ein Objekt oder eine Variable als Konstruktor zu verwenden, aber dieses Objekt oder diese Variable ist kein Konstruktor. Siehe [Konstruktor](/de/docs/Glossary/Constructor) oder den [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) für weitere Informationen darüber, was ein Konstruktor ist.

Es gibt viele globale Objekte, wie {{jsxref("String")}} oder {{jsxref("Array")}}, die über `new` konstruierbar sind. Einige globale Objekte sind dies jedoch nicht und deren Eigenschaften und Methoden sind statisch. Die folgenden JavaScript-Standard eingebauten Objekte sind kein Konstruktor: {{jsxref("Math")}}, {{jsxref("JSON")}}, {{jsxref("Symbol")}}, {{jsxref("Reflect")}}, {{jsxref("Intl")}}, {{jsxref("Atomics")}}.

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

Nehmen wir an, Sie möchten einen Objekttyp für Autos erstellen. Sie möchten, dass dieser Objekttyp `Car` genannt wird und dass er Eigenschaften für Marke, Modell und Baujahr hat. Um dies zu tun, würden Sie die folgende Funktion schreiben:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Nun können Sie ein Objekt namens `mycar` wie folgt erstellen:

```js
const mycar = new Car("Eagle", "Talon TSi", 1993);
```

### In Promises

Wenn Sie ein sofort aufgelöstes oder sofort abgelehntes Promise zurückgeben, müssen Sie kein `new Promise(...)` erstellen und darauf handeln. Stattdessen verwenden Sie die statischen Methoden [`Promise.resolve()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) oder [`Promise.reject()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject).

Dies ist illegal (der [`Promise`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) wird nicht korrekt aufgerufen) und wird eine `TypeError: this is not a constructor` Ausnahme werfen:

```js example-bad
const fn = () => {
  return new Promise.resolve(true);
};
```

Dies ist legal, aber unnötig lang:

```js
const fn = () => {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
};
```

Stattdessen geben Sie die statische Methode zurück:

```js example-good
const resolveAlways = () => {
  return Promise.resolve(true);
};

const rejectAlways = () => {
  return Promise.reject(false);
};
```

## Siehe auch

- [Konstruktor](/de/docs/Glossary/Constructor)
- [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)
