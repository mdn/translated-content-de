---
title: device-cmyk()
slug: Web/CSS/color_value/device-cmyk
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`device-cmyk()`** Funktionsnotation wird verwendet, um CMYK-Farben auf eine geräteabhängige Weise auszudrücken, indem die Komponenten Cyan, Magenta, Gelb und Schwarz angegeben werden.

Dieser Ansatz zur Farbgestaltung ist nützlich, wenn Material für einen bestimmten Drucker ausgegeben werden soll, und das Ausgabeergebnis für bestimmte Tinten-Kombinationen bekannt ist. CSS-Prozessoren können versuchen, die Farbe zu approximieren, jedoch wird das Endergebnis wahrscheinlich vom gedruckten Ergebnis abweichen.

## Syntax

```css
device-cmyk(0 81% 81% 30%);
device-cmyk(0 81% 81% 30% / .5);
device-cmyk(0 81% 81% 30% / .5, rgb(178 34 34));
```

### Werte

Funktionale Notation: `device-cmyk(C M Y K[ / A][, color])`

- `C`, `M`, `Y`, `K`

  - : {{CSSXref("number")}} oder {{CSSXref("percentage")}} Werte, die die Komponenten Cyan, Magenta, Gelb und Schwarz der CMYK-Farbe bereitstellen.

- `A` {{optional_inline}}

  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, wobei die Zahl `1` `100%` (volle Deckkraft) entspricht.

- `color` {{optional_inline}}
  - : Ein optionales Fallback-{{CSSXref("&lt;color&gt;")}}, das verwendet wird, falls der Benutzeragent nicht weiß, wie er die CMYK-Farbe in RGB umwandeln soll.

## Formale Syntax

{{CSSSyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Es gibt keinen Browser, der diese Funktion implementiert.

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{cssxref("@page")}}
