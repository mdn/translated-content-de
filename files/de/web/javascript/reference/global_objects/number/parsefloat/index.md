---
title: Number.parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`Number.parseFloat()`**-statische Methode analysiert ein Argument und gibt eine Fließkommazahl zurück. Wenn keine Zahl aus dem Argument analysiert werden kann, gibt sie {{jsxref("NaN")}} zurück.

{{EmbedInteractiveExample("pages/js/number-parsefloat.html")}}

## Syntax

```js-nolint
Number.parseFloat(string)
```

### Parameter

- `string`
  - : Der zu analysierende Wert, der [in einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) wird. Führende {{Glossary("whitespace")}} in diesem Argument werden ignoriert.

### Rückgabewert

Eine aus dem gegebenen `string` analysierte Fließkommazahl.

Oder {{jsxref("NaN")}}, wenn das erste Nicht-Leerzeichenzeichen nicht in eine Zahl konvertiert werden kann.

## Beispiele

### Number.parseFloat vs. parseFloat

Diese Methode hat die gleiche Funktionalität wie die globale {{jsxref("parseFloat()")}}-Funktion:

```js
Number.parseFloat === parseFloat; // true
```

Ihr Zweck ist die Modularisierung von globalen Funktionen.

Siehe {{jsxref("parseFloat()")}} für mehr Details und Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.parseFloat` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("parseFloat()")}}
