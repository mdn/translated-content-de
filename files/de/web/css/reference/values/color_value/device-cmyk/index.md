---
title: device-cmyk()
slug: Web/CSS/Reference/Values/color_value/device-cmyk
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`device-cmyk()`** Funktionalnotation wird verwendet, um CMYK-Farben geräteabhängig auszudrücken, indem die Komponenten Cyan, Magenta, Gelb und Schwarz spezifiziert werden.

Dieser Ansatz für Farben ist nützlich, wenn Material erstellt wird, das für einen bestimmten Drucker ausgegeben werden soll, und wenn das Ergebnis für bestimmte Tintenkombinationen bekannt ist. CSS-Prozessoren könnten versuchen, die Farbe zu approximieren, jedoch wird das Endergebnis wahrscheinlich anders ausfallen als das gedruckte Ergebnis.

## Syntax

```css
device-cmyk(0 81% 81% 30%);
device-cmyk(0 81% 81% 30% / .5);
device-cmyk(0 81% 81% 30% / .5, rgb(178 34 34));
```

### Werte

Funktionalnotation: `device-cmyk(C M Y K[ / A][, color])`

- `C`, `M`, `Y`, `K`
  - : {{CSSXref("number")}} oder {{CSSXref("percentage")}} Werte, die die Cyan-, Magenta-, Gelb- und Schwarzkomponenten der CMYK-Farbe angeben.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, wobei die Zahl `1` `100%` (volle Deckkraft) entspricht.

- `color` {{optional_inline}}
  - : Eine optionale Ersatz-{{CSSXref("&lt;color&gt;")}}, die verwendet wird, wenn der Benutzeragent nicht weiß, wie die CMYK-Farbe in RGB übersetzt werden soll.

## Formale Syntax

{{CSSSyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützen keine Browser diese Funktion.

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- {{cssxref("@page")}}
