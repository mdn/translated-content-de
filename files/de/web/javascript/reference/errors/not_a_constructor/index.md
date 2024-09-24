---
title: "TypeError: \"x\" ist kein Konstruktor"
slug: Web/JavaScript/Reference/Errors/Not_a_constructor
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "is not a constructor" tritt auf, wenn versucht wurde, ein Objekt oder eine Variable als Konstruktor zu verwenden, jedoch dieses Objekt oder diese Variable kein Konstruktor ist.

## Meldung

```plain
TypeError: x ist kein Konstruktor (V8-basiert & Firefox & Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Es wurde versucht, ein Objekt oder eine Variable als Konstruktor zu verwenden, aber dieses Objekt oder diese Variable ist kein Konstruktor. Siehe [Konstruktor](/de/docs/Glossary/Constructor) oder den [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) für weitere Informationen darüber, was ein Konstruktor ist.

Es gibt viele globale Objekte, wie {{jsxref("String")}} oder {{jsxref("Array")}}, die mit `new` konstruiert werden können. Einige globale Objekte sind jedoch nicht konstruktionsfähig, und ihre Eigenschaften und Methoden sind statisch. Die folgenden JavaScript Standard-Built-in-Objekte sind kein Konstruktor: {{jsxref("Math")}}, {{jsxref("JSON")}}, {{jsxref("Symbol")}}, {{jsxref("Reflect")}}, {{jsxref("Intl")}}, {{jsxref("Atomics")}}.

[Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) können ebenfalls nicht als Konstruktoren verwendet werden.

## Beispiele

### Ungültige Fälle

```js example-bad
const Car = 1;
new Car();
// TypeError: Car ist kein Konstruktor

new Math();
// TypeError: Math ist kein Konstruktor

new Symbol();
// TypeError: Symbol ist kein Konstruktor

function* f() {}
const obj = new f();
// TypeError: f ist kein Konstruktor
```

### Ein Autokonstruktor

Angenommen, Sie möchten einen Objekttyp für Autos erstellen. Sie möchten, dass dieser Objekttyp `Car` genannt wird und Eigenschaften für Marke, Modell und Baujahr hat. Dazu würden Sie die folgende Funktion schreiben:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Jetzt können Sie ein Objekt namens `mycar` wie folgt erstellen:

```js
const mycar = new Car("Eagle", "Talon TSi", 1993);
```

### In Promises

Beim Zurückgeben eines sofort erfüllten oder sofort abgelehnten Promise müssen Sie nicht ein `new Promise(...)` erstellen und darauf reagieren. Verwenden Sie stattdessen die [statischen Methoden](<https://en.wikipedia.org/wiki/Method_(computer_programming)#Static_methods>) [`Promise.resolve()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) oder [`Promise.reject()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject).

Dies ist nicht zulässig (der [`Promise` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) wird nicht korrekt aufgerufen) und führt zu einer `TypeError: this is not a constructor` Ausnahme:

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

Stattdessen die statische Methode zurückgeben:

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
