---
title: device-cmyk()
slug: Web/CSS/color_value/device-cmyk
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

Die funktionale Notation **`device-cmyk()`** wird verwendet, um CMYK-Farben auf geräteabhängige Weise auszudrücken, indem die Komponenten Cyan, Magenta, Gelb und Schwarz spezifiziert werden.

Dieser Ansatz zur Farbangabe ist nützlich, wenn Material erzeugt wird, das auf einen bestimmten Drucker ausgegeben werden soll, wenn das Ergebnis für bestimmte Tintenkombinationen bekannt ist. CSS-Verarbeiter können versuchen, die Farbe zu approximieren, jedoch wird das Endergebnis wahrscheinlich von dem Druckergebnis abweichen.

## Syntax

```css
device-cmyk(0 81% 81% 30%);
device-cmyk(0 81% 81% 30% / .5);
device-cmyk(0 81% 81% 30% / .5, rgb(178 34 34));
```

### Werte

Funktionale Notation: `device-cmyk(C M Y K[ / A][, color])`

- `C`, `M`, `Y`, `K`

  - : {{CSSXref("number")}} oder {{CSSXref("percentage")}} Werte, die die Cyan-, Magenta-, Gelb- und Schwarzkomponenten der CMYK-Farbe angeben.

- `A` {{optional_inline}}

  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, wobei die Zahl `1` `100%` (volle Deckkraft) entspricht.

- `color` {{optional_inline}}

  - : Eine optionale Fallback-{{CSSXref("&lt;color&gt;")}}, die verwendet wird, falls der User-Agent nicht weiß, wie die CMYK-Farbe in RGB übersetzt werden kann.

## Formale Syntax

{{CSSSyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Es gibt keinen Browser, der diese Funktion implementiert.

## Siehe auch

- [CSS colors](/de/docs/Web/CSS/CSS_colors) Modul
- {{cssxref("@page")}}
