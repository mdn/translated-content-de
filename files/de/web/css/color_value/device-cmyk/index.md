---
title: device-cmyk()
slug: Web/CSS/color_value/device-cmyk
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

Die **`device-cmyk()`** Funktionsnotation wird verwendet, um CMYK-Farben in geräteabhängiger Weise auszudrücken, indem die Komponenten Cyan, Magenta, Gelb und Schwarz angegeben werden.

Dieser Ansatz zur Farbwahl ist nützlich, wenn Materialien erstellt werden, die auf einen bestimmten Drucker ausgegeben werden sollen, und wenn das Ergebnis bestimmter Tintenkompositionen bekannt ist. CSS-Prozessoren können versuchen, die Farbe zu approximieren, jedoch wird das Endergebnis wahrscheinlich vom gedruckten Ergebnis abweichen.

## Syntax

```css
device-cmyk(0 81% 81% 30%);
device-cmyk(0 81% 81% 30% / .5);
device-cmyk(0 81% 81% 30% / .5, rgb(178 34 34));
```

### Werte

Funktionsnotation: `device-cmyk(C M Y K[ / A][, color])`

- `C`, `M`, `Y`, `K`
  - : {{CSSXref("number")}} oder {{CSSXref("percentage")}} Werte, die die Cyan-, Magenta-, Gelb- und Schwarz-Komponenten einer CMYK-Farbe angeben.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, wobei die Zahl `1` `100%` (volle Deckkraft) entspricht.

- `color` {{optional_inline}}
  - : Eine optionale Ersatz-{{CSSXref("&lt;color&gt;")}}, die verwendet wird, falls der User-Agent nicht weiß, wie die CMYK-Farbe in RGB übersetzt werden soll.

## Formale Syntax

{{CSSSyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützt kein Browser dieses Feature.

## Siehe auch

- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{cssxref("@page")}}
