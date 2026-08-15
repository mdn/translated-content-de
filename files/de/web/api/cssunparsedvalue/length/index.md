---
title: "CSSUnparsedValue: length-Eigenschaft"
short-title: length
slug: Web/API/CSSUnparsedValue/length
l10n:
  sourceCommit: e03cdadd99259770aefef875de5a988aeda6aff0
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`length`**-Eigenschaft der [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)-Schnittstelle gibt die Anzahl der Elemente im Objekt zurück.

## Wert

Ein Integer.

## Beispiele

### Grundlegende Nutzung

In diesem Beispiel verwenden wir den [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)-Konstruktor und fragen dann die Länge ab:

```js
const value = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

console.log(value.length); // 3
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
- [`CSSUnparsedValue.values()`](/de/docs/Web/API/CSSUnparsedValue/values)
- [Verwendung des CSS-Typed-OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
