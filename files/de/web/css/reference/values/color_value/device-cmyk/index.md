---
title: device-cmyk()
slug: Web/CSS/Reference/Values/color_value/device-cmyk
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`device-cmyk()`** Funktionsnotation wird verwendet, um CMYK-Farben geräteabhängig auszudrücken, indem die Cyan-, Magenta-, Gelb- und Schwarzkomponenten spezifiziert werden.

Dieser Ansatz zur Farbbestimmung ist nützlich, wenn Material für einen bestimmten Drucker erstellt wird, bei dem das Ergebnis bestimmter Farbkombinationen bekannt ist. CSS-Prozessoren können versuchen, die Farbe zu approximieren. Das Endergebnis wird jedoch wahrscheinlich vom gedruckten Ergebnis abweichen.

## Syntax

```css
device-cmyk(0 81% 81% 30%);
device-cmyk(0 81% 81% 30% / .5);
device-cmyk(0 81% 81% 30% / .5, rgb(178 34 34));
```

### Werte

Funktionsnotation: `device-cmyk(C M Y K[ / A][, color])`

- `C`, `M`, `Y`, `K`
  - : {{CSSXref("number")}} oder {{CSSXref("percentage")}} Werte, die die Cyan-, Magenta-, Gelb- und Schwarzkomponenten der CMYK-Farbe angeben.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, wobei die Zahl `1` `100%` (volle Deckkraft) entspricht.

- `color` {{optional_inline}}
  - : Eine optionale Ersatz-{{CSSXref("&lt;color&gt;")}}, die verwendet wird, wenn der User Agent nicht weiß, wie die CMYK-Farbe in RGB umgerechnet werden kann.

## Formale Syntax

{{CSSSyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützen keine Browser dieses Feature.

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{cssxref("@page")}}
