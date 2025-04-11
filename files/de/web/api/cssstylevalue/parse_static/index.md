---
title: "CSSStyleValue: `parse()` statische Methode"
short-title: parse()
slug: Web/API/CSSStyleValue/parse_static
l10n:
  sourceCommit: 5a195171d06aee3d9c1c78d71c7f0c3a060f5263
---

{{APIRef("CSS Typed Object Model API")}}

Die statische Methode **`parse()`** der [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Schnittstelle setzt eine bestimmte CSS-Eigenschaft auf die angegebenen Werte und gibt den ersten Wert als [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Objekt zurück.

## Syntax

```js-nolint
CSSStyleValue.parse(property, cssText)
```

### Parameter

- `property`
  - : Eine zu setzende CSS-Eigenschaft.
- `cssText`
  - : Ein durch Kommas getrennter String, der einen oder mehrere Werte enthält, die auf die angegebene Eigenschaft angewendet werden sollen.

### Rückgabewert

Ein `CSSStyleValue`-Objekt, das den ersten angegebenen Wert enthält.

## Beispiele

Der folgende Code analysiert eine Gruppe von Deklarationen für die `transform`-Eigenschaft. Der zweite Codeblock zeigt die Struktur des zurückgegebenen Objekts, wie es in der Entwicklertools-Konsole dargestellt würde.

```js
const css = CSSStyleValue.parse(
  "transform",
  "translate3d(10px,10px,0) scale(0.5)",
);
```

```plain
CSSTransformValue {0: CSSTranslate, 1: CSSScale, length: 2, is2D: false}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)

- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
