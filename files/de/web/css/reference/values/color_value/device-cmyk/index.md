---
title: device-cmyk()
slug: Web/CSS/Reference/Values/color_value/device-cmyk
l10n:
  sourceCommit: 7d0031545bb606d2ff7fb033180f9cec451a6f8d
---

Die funktionale Notation **`device-cmyk()`** wird verwendet, um CMYK-Farben auf eine geräteabhängige Weise auszudrücken, indem die Cyan-, Magenta-, Gelb- und Schwarzkomponenten spezifiziert werden.

Dieser Ansatz zur Farbdarstellung ist nützlich, wenn Material erstellt wird, das auf einem bestimmten Drucker ausgegeben werden soll, wenn die Ausgabe für bestimmte Tintenkombinationen bekannt ist. CSS-Prozessoren können versuchen, die Farbe für andere Medien zu approximieren; jedoch wird das Endergebnis wahrscheinlich von dem gedruckten Ergebnis abweichen, wenn die genaue Farbausgabe nicht bekannt ist. Eine {{cssxref("@color-profile")}}-Deklaration für `device-cmyk` kann das genaue Farbprofil zur Umwandlung spezifizieren.

## Syntax

```css
device-cmyk(0 81% 81% 30%);
device-cmyk(none 0.81 0.81 0.3);
device-cmyk(0 81% 81% 30% / .5);
```

### Werte

Funktionale Notation: `device-cmyk(C M Y K[ / A])`

- `C`, `M`, `Y`, `K`
  - : Jeder ein {{CSSXref("number")}} zwischen `0` und `1`, ein {{CSSXref("percentage")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none`, das die Cyan-, Magenta-, Gelb- und Schwarzkomponenten der CMYK-Farbe bereitstellt.
    > [!NOTE]
    > Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components) für weitere Informationen über die Auswirkungen von `none`.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben.

## Formale Syntax

{{CSSSyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Aktuell unterstützen keine Browser dieses Feature.

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- {{cssxref("@page")}}
