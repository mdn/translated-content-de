---
title: device-cmyk()
slug: Web/CSS/color_value/device-cmyk
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{CSSRef}}

Die funktionale Notation **`device-cmyk()`** wird verwendet, um CMYK-Farben auf geräteabhängige Weise auszudrücken, indem die Komponenten Cyan, Magenta, Gelb und Schwarz angegeben werden.

Dieser Ansatz für Farben ist nützlich, wenn Material erstellt wird, das auf einem bestimmten Drucker ausgegeben werden soll, wenn die Ausgabe für bestimmte Tinten-Kombinationen bekannt ist. CSS-Prozessoren können versuchen, die Farbe zu approximieren, jedoch wird das Endergebnis wahrscheinlich anders sein als das gedruckte Ergebnis.

## Syntax

```css
device-cmyk(0 81% 81% 30%);
device-cmyk(0 81% 81% 30% / .5);
device-cmyk(0 81% 81% 30% / .5, rgb(178 34 34));
```

### Werte

Funktionale Notation: `device-cmyk(C M Y K[ / A][, color])`

- `C`, `M`, `Y`, `K`

  - : {{CSSXref("number")}}- oder {{CSSXref("percentage")}}-Werte, die die Cyan-, Magenta-, Gelb- und Schwarzwertkomponenten der CMYK-Farbe bereitstellen.

- `A` {{optional_inline}}

  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, wobei die Zahl `1` `100%` (volle Deckkraft) entspricht.

- `color` {{optional_inline}}

  - : Eine optionale Rückfall{{CSSXref("&lt;color&gt;")}}, die verwendet wird, wenn der User-Agent nicht weiß, wie die CMYK-Farbe in RGB übersetzt werden soll.

### Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Es gibt keinen Browser, der diese Funktion implementiert.

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{cssxref("@page")}}
