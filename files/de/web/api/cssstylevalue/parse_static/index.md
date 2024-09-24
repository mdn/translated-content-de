---
title: "CSSStyleValue: parse() statische Methode"
short-title: parse()
slug: Web/API/CSSStyleValue/parse_static
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("CSS Typed Object Model API")}}

Die **`parse()`** statische Methode der {{domxref("CSSStyleValue")}}-Schnittstelle setzt eine spezifische CSS-Eigenschaft auf die angegebenen Werte und gibt den ersten Wert als ein {{domxref('CSSStyleValue')}}-Objekt zurück.

## Syntax

```js-nolint
CSSStyleValue.parse(property, cssText)
```

### Parameter

- `property`
  - : Eine festzulegende CSS-Eigenschaft.
- `cssText`
  - : Eine durch Kommata getrennte Zeichenkette, die einen oder mehrere Werte enthält, die auf die angegebene Eigenschaft angewendet werden sollen.

### Rückgabewert

Ein `CSSStyleValue`-Objekt, das den ersten übergebenen Wert enthält.

## Beispiele

Der untenstehende Code analysiert eine Reihe von Deklarationen für die `transform`-Eigenschaft. Der zweite Codeblock zeigt die Struktur des zurückgegebenen Objekts, wie es in der Konsole von Entwicklerwerkzeugen gerendert würde.

```js
const css = CSSStyleValue.parse(
  "transform",
  "translate3d(10px,10px,0) scale(0.5)",
);
```

```css
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
