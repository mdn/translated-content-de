---
title: Error.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`toString()`** von {{jsxref("Error")}}-Instanzen gibt einen String zurück, der diesen Fehler darstellt.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das angegebene {{jsxref("Error")}}-Objekt darstellt.

## Beschreibung

Das {{jsxref("Error")}}-Objekt überschreibt die von allen Objekten geerbte Methode {{jsxref("Object.prototype.toString()")}}. Ihre Semantik ist wie folgt:

```js
Error.prototype.toString = function () {
  if (
    this === null ||
    (typeof this !== "object" && typeof this !== "function")
  ) {
    throw new TypeError();
  }
  let name = this.name;
  name = name === undefined ? "Error" : `${name}`;
  let msg = this.message;
  msg = msg === undefined ? "" : `${msg}`;
  if (name === "") {
    return msg;
  }
  if (msg === "") {
    return name;
  }
  return `${name}: ${msg}`;
};
```

## Beispiele

### Verwendung von toString()

```js
const e1 = new Error("fatal error");
console.log(e1.toString()); // "Error: fatal error"

const e2 = new Error("fatal error");
e2.name = undefined;
console.log(e2.toString()); // "Error: fatal error"

const e3 = new Error("fatal error");
e3.name = "";
console.log(e3.toString()); // "fatal error"

const e4 = new Error("fatal error");
e4.name = "";
e4.message = undefined;
console.log(e4.toString()); // ""

const e5 = new Error("fatal error");
e5.name = "hello";
e5.message = undefined;
console.log(e5.toString()); // "hello"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Error.prototype.toString` mit zahlreichen Fehlerkorrekturen in `core-js`](https://core-js.io/docs/features/ecmascript/error)
