---
title: "CSSUnparsedValue: keys()-Methode"
short-title: keys()
slug: Web/API/CSSUnparsedValue/keys
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`keys()`**-Methode des [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)-Interfaces gibt einen neuen _Array-Iterator_ zurück, der den Index jedes Elements im Objekt liefert.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

### Über Indizes iterieren

```js
const value = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

for (const index of value.keys()) {
  console.log(index);
}
// 0
// 1
// 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)
- [`CSSUnparsedValue.entries()`](/de/docs/Web/API/CSSUnparsedValue/entries)
- [`CSSUnparsedValue.forEach()`](/de/docs/Web/API/CSSUnparsedValue/forEach)
- [`CSSUnparsedValue.length`](/de/docs/Web/API/CSSUnparsedValue/length)
- [`CSSUnparsedValue.values()`](/de/docs/Web/API/CSSUnparsedValue/values)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
