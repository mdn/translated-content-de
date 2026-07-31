---
title: "CSSUnparsedValue: entries() Methode"
short-title: entries()
slug: Web/API/CSSUnparsedValue/entries
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSUnparsedValue.entries()`** Methode gibt ein Array von `[key, value]` Paaren eines gegebenen Objekts zurück, das seine eigenen aufzählbaren Eigenschaften in derselben Reihenfolge enthält, wie sie von einer {{jsxref("Statements/for...in", "for...in")}} Schleife bereitgestellt wird (mit dem Unterschied, dass eine for-in-Schleife auch Eigenschaften in der Prototypkette aufzählt).

## Syntax

```js-nolint
entries(obj)
```

### Parameter

- `obj`
  - : Der [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue), dessen aufzählbare eigene Eigenschaftspaare `[key, value]` zurückgegeben werden sollen.

### Rückgabewert

Ein Array der eigenen aufzählbaren Eigenschaftspaare `[key, value]` des gegebenen `CSSUnparsedValue` Objekts.

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
- [Verwendung der CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
