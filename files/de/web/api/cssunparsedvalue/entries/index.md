---
title: "CSSUnparsedValue: entries() Methode"
short-title: entries()
slug: Web/API/CSSUnparsedValue/entries
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("CSS Typed OM")}}

Die **`CSSUnparsedValue.entries()`**-Methode
gibt ein Array der eigenen aufzählbaren `[key, value]`-Paare eines gegebenen Objekts in derselben Reihenfolge zurück, wie sie von einer {{jsxref("Statements/for...in", "for...in")}}-Schleife bereitgestellt wird (mit dem Unterschied, dass eine for-in Schleife auch Eigenschaften in der Prototyp-Kette aufzählt).

## Syntax

```js-nolint
entries(obj)
```

### Parameter

- `obj`
  - : Der [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue), dessen eigene aufzählbare
    `[key, value]`-Paare zurückgegeben werden sollen.

### Rückgabewert

Ein Array der eigenen aufzählbaren `[key, value]`-Paare des gegebenen `CSSUnparsedValue`-Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)
- [`CSSUnparsedValue.forEach`](/de/docs/Web/API/CSSUnparsedValue/forEach)
- [`CSSUnparsedValue.keys`](/de/docs/Web/API/CSSUnparsedValue/keys)
- [`CSSUnparsedValue.length`](/de/docs/Web/API/CSSUnparsedValue/length)
- [`CSSUnparsedValue.values`](/de/docs/Web/API/CSSUnparsedValue/values)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
