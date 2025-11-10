---
title: Error.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toString()`** Methode von {{jsxref("Error")}}-Instanzen gibt einen String zurück, der diesen Fehler darstellt.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das angegebene {{jsxref("Error")}}-Objekt darstellt.

## Beschreibung

Das {{jsxref("Error")}}-Objekt überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode, die von allen Objekten geerbt wird. Seine Semantik ist wie folgt:

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

- [Polyfill von `Error.prototype.toString` mit vielen Fehlerkorrekturen in `core-js`](https://github.com/zloirock/core-js#ecmascript-error)
