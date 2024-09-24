---
title: "CSSUnparsedValue: length-Eigenschaft"
short-title: length
slug: Web/API/CSSUnparsedValue/length
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSS Typed OM")}}

Die **`length`** schreibgeschützte Eigenschaft der
{{domxref("CSSUnparsedValue")}}-Schnittstelle gibt die Anzahl der Elemente im Objekt zurück.

## Wert

Ein Integer.

## Beispiele

In diesem Beispiel verwenden wir den {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}}
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

- {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}}
- {{domxref("CSSUnparsedValue.entries")}}
- {{domxref("CSSUnparsedValue.forEach")}}
- {{domxref("CSSUnparsedValue.keys")}}
- {{domxref("CSSUnparsedValue.values")}}
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
