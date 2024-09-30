---
title: "CSSStyleValue: parseAll() statische Methode"
short-title: parseAll()
slug: Web/API/CSSStyleValue/parseAll_static
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("CSS Typed Object Model API")}}

Die **`parseAll()`** statische Methode der [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)
Schnittstelle setzt alle Vorkommen einer bestimmten CSS-Eigenschaft auf den angegebenen Wert und gibt ein Array von [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Objekten zurück, die jeweils eine der angegebenen Werte enthalten.

## Syntax

```js-nolint
CSSStyleValue.parseAll(property, value)
```

### Parameter

- `property`
  - : Eine zu setzende CSS-Eigenschaft.
- `value`
  - : Ein durch Kommas getrennte Zeichenkette, die einen oder mehrere Werte enthält, die auf die angegebene Eigenschaft zutreffen.

### Rückgabewert

Ein Array von `CSSStyleValue`-Objekten, die jeweils einen der angegebenen Werte enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
