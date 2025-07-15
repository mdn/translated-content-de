---
title: device-cmyk()
slug: Web/CSS/color_value/device-cmyk
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die funktionale Notation **`device-cmyk()`** wird verwendet, um CMYK-Farben geräteabhängig auszudrücken, indem die Komponenten Cyan, Magenta, Gelb und Schwarz angegeben werden.

Dieser Ansatz zur Farbgebung ist nützlich, wenn Materialien erstellt werden, die auf einem bestimmten Drucker ausgegeben werden sollen, wenn das Ergebnis für bestimmte Farbkombinationen bekannt ist. CSS-Prozessoren können versuchen, die Farbe zu approximieren, jedoch wird das Endergebnis wahrscheinlich vom gedruckten Ergebnis abweichen.

## Syntax

```css
device-cmyk(0 81% 81% 30%);
device-cmyk(0 81% 81% 30% / .5);
device-cmyk(0 81% 81% 30% / .5, rgb(178 34 34));
```

### Werte

Funktionale Notation: `device-cmyk(C M Y K[ / A][, color])`

- `C`, `M`, `Y`, `K`
  - : {{CSSXref("number")}} oder {{CSSXref("percentage")}} Werte, die die Komponenten Cyan, Magenta, Gelb und Schwarz der CMYK-Farbe angeben.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, wobei die Zahl `1` `100%` (volle Deckkraft) entspricht.

- `color` {{optional_inline}}
  - : Eine optionale Ersatz-{{CSSXref("&lt;color&gt;")}}, die verwendet wird, wenn der User-Agent nicht weiß, wie er die CMYK-Farbe zu RGB übersetzen soll.

## Formale Syntax

{{CSSSyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Es gibt keinen Browser, der diese Funktion implementiert.

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{cssxref("@page")}}
