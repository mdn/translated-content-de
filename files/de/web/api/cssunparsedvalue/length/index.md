---
title: "CSSUnparsedValue: length-Eigenschaft"
short-title: length
slug: Web/API/CSSUnparsedValue/length
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSS Typed OM")}}

Die **`length`**-Schreibgeschützte Eigenschaft des
[`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)-Interfaces gibt die Anzahl der Elemente im Objekt zurück.

## Wert

Eine ganze Zahl.

## Beispiele

In diesem Beispiel verwenden wir den [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)
Konstruktor und fragen dann die Länge ab:

```js
const values = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

console.log(values.length); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)
- [`CSSUnparsedValue.entries`](/de/docs/Web/API/CSSUnparsedValue/entries)
- [`CSSUnparsedValue.forEach`](/de/docs/Web/API/CSSUnparsedValue/forEach)
- [`CSSUnparsedValue.keys`](/de/docs/Web/API/CSSUnparsedValue/keys)
- [`CSSUnparsedValue.values`](/de/docs/Web/API/CSSUnparsedValue/values)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
