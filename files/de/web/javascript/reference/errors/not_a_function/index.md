---
title: "TypeError: \"x\" ist keine Funktion"
slug: Web/JavaScript/Reference/Errors/Not_a_function
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "is not a function" tritt auf, wenn versucht wird, einen Wert aus einer Funktion aufzurufen, aber der Wert tatsächlich keine Funktion ist.

## Meldung

```plain
TypeError: "x" ist keine Funktion. (V8-based & Firefox & Safari)
```

## Fehlerart

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Es wurde versucht, einen Wert aus einer Funktion aufzurufen, aber der Wert ist tatsächlich keine Funktion. Einige Codeabschnitte erwarten, dass Sie eine Funktion bereitstellen, aber das ist nicht geschehen.

Vielleicht gibt es einen Tippfehler im Funktionsnamen? Vielleicht hat das Objekt, auf dem Sie die Methode aufrufen, diese Funktion nicht? Zum Beispiel haben JavaScript-`Objects` keine `map`-Funktion, aber das JavaScript-`Array`-Objekt schon.

Es gibt viele eingebaute Funktionen, die eine (Callback-)Funktion benötigen. Sie müssen eine Funktion bereitstellen, damit diese Methoden ordnungsgemäß funktionieren:

- Wenn Sie mit {{jsxref("Array")}} oder {{jsxref("TypedArray")}} Objekten arbeiten:

  - {{jsxref("Array.prototype.every()")}}, {{jsxref("Array.prototype.some()")}},
    {{jsxref("Array.prototype.forEach()")}}, {{jsxref("Array.prototype.map()")}},
    {{jsxref("Array.prototype.filter()")}}, {{jsxref("Array.prototype.reduce()")}},
    {{jsxref("Array.prototype.reduceRight()")}}, {{jsxref("Array.prototype.find()")}}

- Wenn Sie mit {{jsxref("Map")}} und {{jsxref("Set")}} Objekten arbeiten:

  - {{jsxref("Map.prototype.forEach()")}} und {{jsxref("Set.prototype.forEach()")}}

## Beispiele

### Ein Tippfehler im Funktionsnamen

In diesem Fall, der leider viel zu oft auftritt, gibt es einen Tippfehler im Methodennamen:

```js example-bad
const x = document.getElementByID("foo");
// TypeError: document.getElementByID ist keine Funktion
```

Der korrekte Funktionsname ist `getElementById`:

```js example-good
const x = document.getElementById("foo");
```

### Funktion auf dem falschen Objekt aufgerufen

Für bestimmte Methoden müssen Sie eine (Callback-)Funktion bereitstellen und diese wird nur auf bestimmten Objekten funktionieren. In diesem Beispiel wird {{jsxref("Array.prototype.map()")}} verwendet, die nur mit {{jsxref("Array")}} Objekten funktioniert.

```js example-bad
const obj = { a: 13, b: 37, c: 42 };

obj.map(function (num) {
  return num * 2;
});

// TypeError: obj.map ist keine Funktion
```

Verwenden Sie stattdessen ein Array:

```js example-good
const numbers = [1, 4, 9];

numbers.map(function (num) {
  return num * 2;
}); // [2, 8, 18]
```

### Funktion teilt sich einen Namen mit einer bereits vorhandenen Eigenschaft

Manchmal kann es bei der Erstellung einer Klasse passieren, dass Sie eine Eigenschaft und eine Funktion mit demselben Namen haben. Beim Aufruf der Funktion denkt der Compiler, dass die Funktion nicht existiert.

```js example-bad
function Dog() {
  this.age = 11;
  this.color = "black";
  this.name = "Ralph";
  return this;
}

Dog.prototype.name = function (name) {
  this.name = name;
  return this;
};

const myNewDog = new Dog();
myNewDog.name("Cassidy"); //Uncaught TypeError: myNewDog.name ist keine Funktion
```

Verwenden Sie stattdessen einen anderen Eigenschaftsnamen:

```js example-good
function Dog() {
  this.age = 11;
  this.color = "black";
  this.dogName = "Ralph"; //Verwenden von this.dogName anstelle von .name
  return this;
}

Dog.prototype.name = function (name) {
  this.dogName = name;
  return this;
};

const myNewDog = new Dog();
myNewDog.name("Cassidy"); //Dog { age: 11, color: 'black', dogName: 'Cassidy' }
```

### Klammern für die Multiplikation verwenden

In der Mathematik kann man 2 × (3 + 5) als 2\*(3 + 5) oder einfach 2(3 + 5) schreiben.

Die Verwendung der letzteren Möglichkeit führt zu einem Fehler:

```js example-bad
const sixteen = 2(3 + 5);
console.log(`2 x (3 + 5) ist ${sixteen}`);
// Uncaught TypeError: 2 ist keine Funktion
```

Sie können den Code korrigieren, indem Sie einen `*`-Operator hinzufügen:

```js example-good
const sixteen = 2 * (3 + 5);
console.log(`2 x (3 + 5) ist ${sixteen}`);
// 2 x (3 + 5) ist 16
```

### Das exportierte Modul korrekt importieren

Stellen Sie sicher, dass Sie das Modul korrekt importieren.

Ein Beispiel für eine Hilfsbibliothek (`helpers.js`)

```js
const helpers = function () {};

helpers.groupBy = function (objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    acc[key] ??= [];
    acc[key].push(obj);
    return acc;
  }, {});
};

export default helpers;
```

Die korrekte Verwendung des Imports (`App.js`):

```js
import helpers from "./helpers";
```

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
