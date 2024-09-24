---
title: "CSSUnparsedValue: entries()-Methode"
short-title: entries()
slug: Web/API/CSSUnparsedValue/entries
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("CSS Typed OM")}}

Die **`CSSUnparsedValue.entries()`**-Methode
gibt ein Array der eigenen aufzählbaren Eigenschaften `[key, value]`-Paare eines Objekts in der selben Reihenfolge zurück, wie sie von einer {{jsxref("Statements/for...in", "for...in")}}-Schleife bereitgestellt wird (der Unterschied ist, dass eine for-in-Schleife auch Eigenschaften in der Prototypenkette aufzählt).

## Syntax

```js-nolint
entries(obj)
```

### Parameter

- `obj`
  - : Der {{domxref('CSSUnparsedValue')}}, dessen aufzählbare eigene
    Eigenschaften `[key, value]`-Paare zurückgegeben werden sollen.

### Rückgabewert

Ein Array der eigenen aufzählbaren Eigenschaften `[key, value]`-Paare des gegebenen `CSSUnparsedValue`-Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}}
- {{domxref("CSSUnparsedValue.forEach")}}
- {{domxref("CSSUnparsedValue.keys")}}
- {{domxref("CSSUnparsedValue.length")}}
- {{domxref("CSSUnparsedValue.values")}}
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
