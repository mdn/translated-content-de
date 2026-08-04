---
title: "CSSUnparsedValue: entries()-Methode"
short-title: entries()
slug: Web/API/CSSUnparsedValue/entries
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`CSSUnparsedValue.entries()`**-Methode gibt ein Array von `[key, value]`-Paaren der eigenen aufzählbaren Eigenschaften eines gegebenen Objekts zurück, und zwar in derselben Reihenfolge, wie sie eine {{jsxref("Statements/for...in", "for...in")}} Schleife bereitstellt (der Unterschied besteht darin, dass eine for-in-Schleife auch Eigenschaften in der Prototypkette auflistet).

## Syntax

```js-nolint
entries(obj)
```

### Parameter

- `obj`
  - : Das [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue), dessen aufzählbare eigene `[key, value]`-Paare zurückgegeben werden sollen.

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
