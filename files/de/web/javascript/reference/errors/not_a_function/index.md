---
title: 'TypeError: "x" ist keine Funktion'
slug: Web/JavaScript/Reference/Errors/Not_a_function
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "ist keine Funktion" tritt auf, wenn versucht wurde, einen Wert von einer Funktion aufzurufen, dieser Wert jedoch tatsächlich keine Funktion ist.

## Nachricht

```plain
TypeError: "x" is not a function. (V8-based & Firefox & Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Es wurde versucht, einen Wert von einer Funktion aufzurufen, aber der Wert ist tatsächlich keine Funktion. Einige Codeabschnitte erwarten, dass Sie eine Funktion bereitstellen, aber das ist nicht geschehen.

Vielleicht gibt es einen Tippfehler im Funktionsnamen? Vielleicht besitzt das Objekt, auf das Sie die Methode aufrufen, diese Funktion nicht? Zum Beispiel haben JavaScript-`Objects` keine `map`-Funktion, während das JavaScript-`Array`-Objekt dies tut.

Es gibt viele integrierte Funktionen, die eine (Callback-)Funktion benötigen. Sie müssen eine Funktion bereitstellen, damit diese Methoden ordnungsgemäß funktionieren:

- Beim Arbeiten mit {{jsxref("Array")}} oder {{jsxref("TypedArray")}} Objekten:

  - {{jsxref("Array.prototype.every()")}}, {{jsxref("Array.prototype.some()")}},
    {{jsxref("Array.prototype.forEach()")}}, {{jsxref("Array.prototype.map()")}},
    {{jsxref("Array.prototype.filter()")}}, {{jsxref("Array.prototype.reduce()")}},
    {{jsxref("Array.prototype.reduceRight()")}}, {{jsxref("Array.prototype.find()")}}

- Beim Arbeiten mit {{jsxref("Map")}} und {{jsxref("Set")}} Objekten:

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

### Funktion am falschen Objekt aufgerufen

Für bestimmte Methoden müssen Sie eine (Callback-)Funktion bereitstellen, und sie funktionieren nur auf bestimmten Objekten. In diesem Beispiel wird {{jsxref("Array.prototype.map()")}} verwendet, das nur mit {{jsxref("Array")}} Objekten funktioniert.

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

### Funktion teilt sich einen Namen mit einer bereits vorhandenen Eigenschaft

Manchmal kann es beim Erstellen einer Klasse vorkommen, dass Sie eine Eigenschaft und eine Funktion mit demselben Namen haben. Beim Aufrufen der Funktion denkt der Compiler, dass die Funktion nicht mehr existiert.

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
myNewDog.name("Cassidy"); //Uncaught TypeError: myNewDog.name is not a function
```

Verwenden Sie stattdessen einen anderen Eigenschaftsnamen:

```js example-good
function Dog() {
  this.age = 11;
  this.color = "black";
  this.dogName = "Ralph"; //Using this.dogName instead of .name
  return this;
}

Dog.prototype.name = function (name) {
  this.dogName = name;
  return this;
};

const myNewDog = new Dog();
myNewDog.name("Cassidy"); //Dog { age: 11, color: 'black', dogName: 'Cassidy' }
```

### Klammern für Multiplikation verwenden

In der Mathematik können Sie 2 × (3 + 5) als 2\*(3 + 5) oder einfach als 2(3 + 5) schreiben.

Die Verwendung der letzteren Schreibweise führt zu einem Fehler:

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

### Importieren des exportierten Moduls richtig

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
