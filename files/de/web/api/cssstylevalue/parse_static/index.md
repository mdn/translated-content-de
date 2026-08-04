---
title: "CSSStyleValue: parse() statische Methode"
short-title: parse()
slug: Web/API/CSSStyleValue/parse_static
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}}

Die **`parse()`** statische Methode der [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) Schnittstelle setzt eine spezifische CSS-Eigenschaft auf die angegebenen Werte und gibt den ersten Wert als ein [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) Objekt zurück.

> [!NOTE]
> Diese Methode kann nicht in [`Worker`](/de/docs/Web/API/Worker) oder [`Worklet`](/de/docs/Web/API/Worklet) Kontexten aufgerufen werden.
> Der Rest der `CSSStyleValue` Schnittstelle bleibt in Workern und Worklets verfügbar.

## Syntax

```js-nolint
CSSStyleValue.parse(property, cssText)
```

### Parameter

- `property`
  - : Eine CSS-Eigenschaft, die gesetzt werden soll.
- `cssText`
  - : Eine durch Kommas getrennte Zeichenkette, die einen oder mehrere Werte enthält, die auf die angegebene Eigenschaft angewendet werden sollen.

### Rückgabewert

Ein `CSSStyleValue` Objekt, das den ersten angegebenen Wert enthält.

## Beispiele

### Grundlegende Verwendung

Der untenstehende Code analysiert eine Reihe von Deklarationen für die `transform` Eigenschaft.
Der zweite Codeblock zeigt die Struktur des zurückgegebenen Objekts, wie es in einer Entwicklertools-Konsole angezeigt würde.

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
