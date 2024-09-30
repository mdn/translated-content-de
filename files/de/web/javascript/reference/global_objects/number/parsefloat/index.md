---
title: Number.parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die statische Methode **`Number.parseFloat()`** analysiert ein Argument und gibt eine Gleitkommazahl zurück. Kann keine Nummer aus dem Argument analysiert werden, gibt sie {{jsxref("NaN")}} zurück.

{{EmbedInteractiveExample("pages/js/number-parsefloat.html")}}

## Syntax

```js-nolint
Number.parseFloat(string)
```

### Parameter

- `string`
  - : Der zu analysierende Wert, [in einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Führende [Leerzeichen](/de/docs/Glossary/whitespace) in diesem Argument werden ignoriert.

### Rückgabewert

Eine Gleitkommazahl, die aus dem übergebenen `string` analysiert wurde.

Oder {{jsxref("NaN")}}, wenn das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann.

## Beispiele

### Number.parseFloat vs. parseFloat

Diese Methode hat die gleiche Funktionalität wie die globale Funktion {{jsxref("parseFloat()")}}:

```js
Number.parseFloat === parseFloat; // true
```

Ihr Zweck ist die Modularisierung von globalen Objekten.

Weitere Details und Beispiele finden Sie unter {{jsxref("parseFloat()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.parseFloat` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("parseFloat()")}}
