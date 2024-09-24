---
title: Number.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Number/valueOf
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`valueOf()`** Methode von {{jsxref("Number")}} Werten gibt den Wert dieser Zahl zurück.

{{EmbedInteractiveExample("pages/js/number-valueof.html")}}

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die den primitiven Wert des angegebenen {{jsxref("Number")}} Objekts darstellt.

## Beschreibung

Diese Methode wird in der Regel intern von JavaScript aufgerufen und nicht explizit im Webcode.

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
