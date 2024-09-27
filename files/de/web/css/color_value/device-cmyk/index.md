---
title: device-cmyk()
slug: Web/CSS/color_value/device-cmyk
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{CSSRef}}

Die **`device-cmyk()`** Funktionsnotation wird verwendet, um CMYK-Farben auf eine geräteabhängige Weise auszudrücken, indem die Komponenten Cyan, Magenta, Gelb und Schwarz spezifiziert werden.

Dieser Ansatz für Farben ist nützlich, wenn Material erstellt wird, das auf einem bestimmten Drucker ausgegeben werden soll, wenn die Ausgabe für bestimmte Tintenkombinationen bekannt ist. CSS-Prozessoren können versuchen, die Farbe zu approximieren. Das Endergebnis ist jedoch wahrscheinlich anders als das gedruckte Ergebnis.

## Syntax

```css
device-cmyk(0 81% 81% 30%);
device-cmyk(0 81% 81% 30% / .5);
device-cmyk(0 81% 81% 30% / .5, rgb(178 34 34));
```

### Werte

Funktionsnotation: `device-cmyk(C M Y K[ / A][, color])`

- `C`, `M`, `Y`, `K`

  - : {{CSSXref("number")}} oder {{CSSXref("percentage")}} Werte, die die Komponenten Cyan, Magenta, Gelb und Schwarz der CMYK-Farbe bereitstellen.

- `A` {{optional_inline}}

  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, wobei die Zahl `1` `100%` (volle Deckkraft) entspricht.

- `color` {{optional_inline}}

  - : Ein optionales Fallback-{{CSSXref("&lt;color&gt;")}}, das verwendet wird, wenn der Benutzeragent nicht weiß, wie die Umwandlung der CMYK-Farbe in RGB zu übersetzen ist.

### Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Es gibt keinen Browser, der dieses Feature implementiert.

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{cssxref("@page")}}
