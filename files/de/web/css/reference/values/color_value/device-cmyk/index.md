---
title: "`device-cmyk()` CSS-Funktion"
short-title: device-cmyk()
slug: Web/CSS/Reference/Values/color_value/device-cmyk
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`device-cmyk()`** Funktionsnotation wird verwendet, um CMYK-Farben in einer geräteabhängigen Weise auszudrücken, indem die Cyan-, Magenta-, Gelb- und Schwarzwertkomponenten spezifiziert werden.

Dieser Ansatz für Farben ist nützlich, wenn Material erstellt wird, das auf einem bestimmten Drucker ausgegeben werden soll, wenn die Ausgabe für bestimmte Tinten­kombinationen bekannt ist. CSS-Prozessoren können versuchen, die Farbe für andere Medien zu approximieren; das Endergebnis kann jedoch ohne Kenntnis der genauen Ausgabefarben­metrik von dem gedruckten Ergebnis abweichen. Eine {{cssxref("@color-profile")}}-Deklaration für `device-cmyk` kann das genaue Farbprofil für die Umwandlung spezifizieren.

## Syntax

```css
device-cmyk(0 81% 81% 30%);
device-cmyk(none 0.81 0.81 0.3);
device-cmyk(0 81% 81% 30% / .5);
```

### Werte

Funktionsnotation: `device-cmyk(C M Y K[ / A])`

- `C`, `M`, `Y`, `K`
  - : Jeder ein {{CSSXref("number")}} zwischen `0` und `1`, ein {{CSSXref("percentage")}} zwischen `0%` und `100%` oder das Schlüsselwort `none`, welches die Cyan-, Magenta-, Gelb- und Schwarzwertkomponenten der CMYK-Farbe bereitstellt.
    > [!NOTE]
    > Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components) für weitere Informationen über die Auswirkungen von `none`.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben.

## Formale Syntax

{{CSSSyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützen keine Browser diese Funktion.

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- {{cssxref("@page")}}
