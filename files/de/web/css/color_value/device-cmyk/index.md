---
title: device-cmyk()
slug: Web/CSS/color_value/device-cmyk
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{CSSRef}}

Die **`device-cmyk()`** Funktionsschreibweise wird verwendet, um CMYK-Farben auf eine geräteabhängige Weise auszudrücken, indem die Komponenten Cyan, Magenta, Gelb und Schwarz angegeben werden.

Dieser Ansatz für Farben ist nützlich, wenn Material erstellt wird, das auf einem bestimmten Drucker ausgegeben werden soll, und das Ergebnis für bestimmte Tintenmischungen bekannt ist. CSS-Prozessoren können versuchen, die Farbe zu approximieren, jedoch wird das Endergebnis wahrscheinlich vom gedruckten Ergebnis abweichen.

## Syntax

```css
device-cmyk(0 81% 81% 30%);
device-cmyk(0 81% 81% 30% / .5);
device-cmyk(0 81% 81% 30% / .5, rgb(178 34 34));
```

### Werte

Funktionsschreibweise: `device-cmyk(C M Y K[ / A][, color])`

- `C`, `M`, `Y`, `K`

  - : {{CSSXref("number")}} oder {{CSSXref("percentage")}} Werte, die die Cyan-, Magenta-, Gelb- und Schwarzkomponenten der CMYK-Farbe angeben.

- `A` {{optional_inline}}

  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, wobei die Zahl `1` `100%` (volle Deckkraft) entspricht.

- `color` {{optional_inline}}

  - : Eine optionale Fallback-{{CSSXref("&lt;color&gt;")}}, die verwendet wird, wenn der Benutzeragent nicht weiß, wie die CMYK-Farbe in RGB umgewandelt werden kann.

### Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Es gibt keinen Browser, der dieses Feature implementiert.

## Siehe auch

- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{cssxref("@page")}}
