---
title: "CSSStyleValue: parseAll() statische Methode"
short-title: parseAll()
slug: Web/API/CSSStyleValue/parseAll_static
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die **`parseAll()`** statische Methode des [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) Interfaces setzt alle Vorkommen einer spezifischen CSS-Eigenschaft auf den angegebenen Wert und gibt ein Array von [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) Objekten zurück, die jeweils einen der bereitgestellten Werte enthalten.

## Syntax

```js-nolint
CSSStyleValue.parseAll(property, value)
```

### Parameter

- `property`
  - : Eine zu setzende CSS-Eigenschaft.
- `value`
  - : Ein kommagetrennter String, der einen oder mehrere Werte enthält, die auf die angegebene Eigenschaft angewendet werden.

### Rückgabewert

Ein Array von `CSSStyleValue` Objekten, die jeweils einen der bereitgestellten Werte enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
