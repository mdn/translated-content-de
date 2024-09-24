---
title: BigInt.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/valueOf
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die **`valueOf()`** Methode der {{jsxref("BigInt")}} Werte gibt den eingeschlossenen primitiven Wert
eines {{jsxref("BigInt")}} Objekts zurück.

{{EmbedInteractiveExample("pages/js/bigint-valueof.html", "shorter")}}

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Ein BigInt, das den primitiven Wert des angegebenen {{jsxref("BigInt")}} Objekts darstellt.

## Beispiele

### Verwendung von `valueOf`

```js
typeof Object(1n); // object
typeof Object(1n).valueOf(); // bigint
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("BigInt.prototype.toString()")}}
