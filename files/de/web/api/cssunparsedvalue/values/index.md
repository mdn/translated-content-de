---
title: "CSSUnparsedValue: values() Methode"
short-title: values()
slug: Web/API/CSSUnparsedValue/values
l10n:
  sourceCommit: e03cdadd99259770aefef875de5a988aeda6aff0
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`values()`** Methode der [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) Schnittstelle gibt einen neuen _Array-Iterator_ zurück, der jedes Element im Objekt liefert.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein neuer [iterierbarer Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols).

## Beispiele

### Über Werte iterieren

```js
const value = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

for (const fragment of value.values()) {
  console.log(fragment);
}
// "1em"
// "#445566"
// "-45px"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)
- [`CSSUnparsedValue.entries()`](/de/docs/Web/API/CSSUnparsedValue/entries)
- [`CSSUnparsedValue.forEach()`](/de/docs/Web/API/CSSUnparsedValue/forEach)
- [`CSSUnparsedValue.keys()`](/de/docs/Web/API/CSSUnparsedValue/keys)
- [`CSSUnparsedValue.length`](/de/docs/Web/API/CSSUnparsedValue/length)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
