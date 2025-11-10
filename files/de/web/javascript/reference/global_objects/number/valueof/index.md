---
title: Number.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Number/valueOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`valueOf()`**-Methode von {{jsxref("Number")}}-Werten gibt den Wert dieser Zahl zurück.

{{InteractiveExample("JavaScript Demo: Number.prototype.valueOf()")}}

```js interactive-example
const numObj = new Number(42);
console.log(typeof numObj);
// Expected output: "object"

const num = numObj.valueOf();
console.log(num);
// Expected output: 42

console.log(typeof num);
// Expected output: "number"
```

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die den primitiven Wert des angegebenen {{jsxref("Number")}}-Objekts darstellt.

## Beschreibung

Diese Methode wird normalerweise intern von JavaScript aufgerufen und nicht explizit im Webcode.

## Beispiele

### Verwendung von valueOf

```js
const numObj = new Number(10);
console.log(typeof numObj); // object

const num = numObj.valueOf();
console.log(num); // 10
console.log(typeof num); // number
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.prototype.valueOf()")}}
