---
title: 'TypeError: "x" ist keine Funktion'
slug: Web/JavaScript/Reference/Errors/Not_a_function
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "is not a function" tritt auf, wenn versucht wird, einen Wert aus einer Funktion aufzurufen, der Wert jedoch tatsächlich keine Funktion ist.

## Meldung

```plain
TypeError: "x" is not a function. (V8-based & Firefox & Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Es wurde versucht, einen Wert aus einer Funktion aufzurufen, der Wert ist jedoch tatsächlich keine Funktion. Einige Codeabschnitte erwarten, dass Sie eine Funktion bereitstellen, was in diesem Fall nicht geschehen ist.

Vielleicht gibt es einen Tippfehler im Funktionsnamen? Vielleicht hat das Objekt, auf dem Sie die Methode aufrufen, diese Funktion nicht? Zum Beispiel haben JavaScript-`Objects` keine `map`-Funktion, aber das JavaScript-`Array`-Objekt hat eine.

Es gibt viele eingebaute Funktionen, die eine (Callback-)Funktion benötigen. Sie müssen eine Funktion zur Verfügung stellen, damit diese Methoden ordnungsgemäß funktionieren:

- Bei der Arbeit mit {{jsxref("Array")}} oder {{jsxref("TypedArray")}} Objekten:

  - {{jsxref("Array.prototype.every()")}}, {{jsxref("Array.prototype.some()")}},
    {{jsxref("Array.prototype.forEach()")}}, {{jsxref("Array.prototype.map()")}},
    {{jsxref("Array.prototype.filter()")}}, {{jsxref("Array.prototype.reduce()")}},
    {{jsxref("Array.prototype.reduceRight()")}}, {{jsxref("Array.prototype.find()")}}

- Bei der Arbeit mit {{jsxref("Map")}} und {{jsxref("Set")}} Objekten:

  - {{jsxref("Map.prototype.forEach()")}} und {{jsxref("Set.prototype.forEach()")}}

## Beispiele

### Ein Tippfehler im Funktionsnamen

In diesem Fall, der viel zu oft passiert, gibt es einen Tippfehler im Methodennamen:

```js example-bad
const x = document.getElementByID("foo");
// TypeError: document.getElementByID is not a function
```

Der korrekte Funktionsname ist `getElementById`:

```js example-good
const x = document.getElementById("foo");
```

### Funktion auf dem falschen Objekt aufgerufen

Für bestimmte Methoden müssen Sie eine (Callback-)Funktion bereitstellen, und sie werden nur auf bestimmten Objekten funktionieren. In diesem Beispiel wird {{jsxref("Array.prototype.map()")}} verwendet, das nur mit {{jsxref("Array")}}-Objekten funktioniert.

```js example-bad
const obj = { a: 13, b: 37, c: 42 };

obj.map(function (num) {
  return num * 2;
});

// TypeError: obj.map is not a function
```

Verwenden Sie stattdessen ein Array:

```js example-good
const numbers = [1, 4, 9];

numbers.map(function (num) {
  return num * 2;
}); // [2, 8, 18]
```

### Funktion teilt einen Namen mit einer vorhandenen Eigenschaft

Manchmal, wenn Sie eine Klasse erstellen, kann es vorkommen, dass Sie eine Eigenschaft und eine Funktion mit demselben Namen haben. Beim Aufruf der Funktion denkt der Compiler, dass die Funktion nicht mehr existiert.

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
myNewDog.name("Cassidy"); // TypeError: myNewDog.name is not a function
```

Verwenden Sie stattdessen einen anderen Eigenschaftsnamen:

```js example-good
function Dog() {
  this.age = 11;
  this.color = "black";
  this.dogName = "Ralph"; // Using this.dogName instead of .name
  return this;
}

Dog.prototype.name = function (name) {
  this.dogName = name;
  return this;
};

const myNewDog = new Dog();
myNewDog.name("Cassidy"); // Dog { age: 11, color: 'black', dogName: 'Cassidy' }
```

### Klammern zur Multiplikation verwenden

In der Mathematik können Sie 2 × (3 + 5) als 2\*(3 + 5) oder einfach als 2(3 + 5) schreiben.

Die letztere Schreibweise wird einen Fehler auslösen:

```js example-bad
const sixteen = 2(3 + 5);
console.log(`2 x (3 + 5) is ${sixteen}`);
// Uncaught TypeError: 2 is not a function
```

Sie können den Code korrigieren, indem Sie einen `*`-Operator hinzufügen:

```js example-good
const sixteen = 2 * (3 + 5);
console.log(`2 x (3 + 5) is ${sixteen}`);
// 2 x (3 + 5) is 16
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

Die korrekte Importnutzung (`App.js`):

```js
import helpers from "./helpers";
```

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
