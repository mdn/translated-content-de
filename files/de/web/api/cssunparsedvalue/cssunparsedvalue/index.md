---
title: "CSSUnparsedValue: CSSUnparsedValue() Konstruktor"
short-title: CSSUnparsedValue()
slug: Web/API/CSSUnparsedValue/CSSUnparsedValue
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSS Typed OM")}}

Der **`CSSUnparsedValue()`** Konstruktor erstellt ein neues [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) Objekt, das Eigenschaftswerte darstellt, die auf benutzerdefinierte Eigenschaften verweisen.

## Syntax

```js-nolint
new CSSUnparsedValue(members)
```

### Parameter

- `members`
  - : Ein Array, dessen Werte entweder ein String oder ein
    [`CSSVariableReferenceValue`](/de/docs/Web/API/CSSVariableReferenceValue) sein müssen.

## Beispiele

```js
const value = new CSSUnparsedValue(["4deg"]);
const values = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

console.log(value); // CSSUnparsedValue {0: "4deg", length: 1}
console.log(values); // CSSUnparsedValue {0: "1em", 1: "#445566", 2: "-45px", length: 3}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSUnparsedValue.entries`](/de/docs/Web/API/CSSUnparsedValue/entries)
- [`CSSUnparsedValue.forEach`](/de/docs/Web/API/CSSUnparsedValue/forEach)
- [`CSSUnparsedValue.keys`](/de/docs/Web/API/CSSUnparsedValue/keys)
- [`CSSUnparsedValue.length`](/de/docs/Web/API/CSSUnparsedValue/length)
- [`CSSUnparsedValue.values`](/de/docs/Web/API/CSSUnparsedValue/values)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
