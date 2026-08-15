---
title: "CSSUnparsedValue: entries()-Methode"
short-title: entries()
slug: Web/API/CSSUnparsedValue/entries
l10n:
  sourceCommit: e03cdadd99259770aefef875de5a988aeda6aff0
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`entries()`**-Methode der [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)-Schnittstelle gibt einen neuen _Array-Iterator_ zurück, der `[index, value]`-Paare für jedes Element im Objekt ausgibt.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein neuer [iterierbarer Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols).

## Beispiele

### Iteration über Index/Werte-Paare

```js
const value = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

for (const [index, fragment] of value.entries()) {
  console.log(index, fragment);
}
// 0 "1em"
// 1 "#445566"
// 2 "-45px"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)
- [`CSSUnparsedValue.forEach()`](/de/docs/Web/API/CSSUnparsedValue/forEach)
- [`CSSUnparsedValue.keys()`](/de/docs/Web/API/CSSUnparsedValue/keys)
- [`CSSUnparsedValue.length`](/de/docs/Web/API/CSSUnparsedValue/length)
- [`CSSUnparsedValue.values()`](/de/docs/Web/API/CSSUnparsedValue/values)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
