---
title: text-rendering
slug: Web/CSS/Reference/Properties/text-rendering
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`text-rendering`** [CSS](/de/docs/Web/CSS)-Eigenschaft liefert der Rendering-Engine Informationen darüber, worauf beim Rendern von Text optimiert werden soll.

Der Browser trifft Entscheidungen hinsichtlich Geschwindigkeit, Lesbarkeit und geometrischer Präzision.

> [!NOTE]
> Die `text-rendering`-Eigenschaft ist eine SVG-Eigenschaft, die in keinem CSS-Standard definiert ist. Dennoch ermöglichen es Gecko- und WebKit-Browser, diese Eigenschaft auf HTML- und XML-Inhalte unter Windows, macOS und Linux anzuwenden.

Ein sehr sichtbarer Effekt ist `optimizeLegibility`, das Ligaturen (ff, fi, fl, usw.) bei Texten unter 20px für einige Schriftarten aktiviert (zum Beispiel Microsofts _Calibri_, _Candara_, _Constantia_ und _Corbel_ oder die _DejaVu_-Schriftfamilie).

## Syntax

```css
/* Keyword values */
text-rendering: auto;
text-rendering: optimizeSpeed;
text-rendering: optimizeLegibility;
text-rendering: geometricPrecision;

/* Global values */
text-rendering: inherit;
text-rendering: initial;
text-rendering: revert;
text-rendering: revert-layer;
text-rendering: unset;
```

### Werte

- `auto`
  - : Der Browser trifft fundierte Vermutungen darüber, wann auf Geschwindigkeit, Lesbarkeit und geometrische Präzision beim Zeichnen von Text optimiert werden soll. Für Unterschiede, wie dieser Wert vom Browser interpretiert wird, siehe die Kompatibilitätstabelle.

    Der `auto`-Wert ist eine gute Standardeinstellung für die Balance zwischen Qualität und Leistung, insbesondere für längere Textabschnitte in normalem Text.

- `optimizeSpeed`
  - : Der Browser legt beim Zeichnen von Text mehr Wert auf Rendergeschwindigkeit als auf Lesbarkeit und geometrische Präzision. Es deaktiviert Kerning und Ligaturen.

    Der `optimizeSpeed`-Wert ist in ressourcenbeschränkten Rendering-Szenarien vorzuziehen, wie langsamen Prozessoren oder bei niedriger Batterieleistung.

- `optimizeLegibility`
  - : Der Browser legt beim Rendern mehr Wert auf Lesbarkeit als auf Geschwindigkeit und geometrische Präzision. Dies aktiviert Kerning und optionale Ligaturen.

    Der `optimizeLegibility`-Wert ist vorzuziehen für Texte, die groß sind, aber inhaltlich kurz, wie Überschriften oder Banner, um deren Lesbarkeit zu verbessern. Er könnte auch für hochwertige professionelle Typografie wie veröffentlichte Artikel verwendet werden. Für typische Artikel wird er aufgrund möglicher Leistungseinbußen nicht empfohlen.

- `geometricPrecision`
  - : Der Browser betont geometrische Präzision gegenüber Rendergeschwindigkeit und Lesbarkeit. Bestimmte Aspekte von Schriftarten – wie Kerning – skalieren nicht linear. Daher kann dieser Wert Text, der diese Schriftarten verwendet, gut aussehen lassen.

    In SVG wird bei einer Skalierung von Texten die endgültige Größe des Textes (die durch die angegebene Schriftgröße und die angewandte Skalierung bestimmt wird) berechnet, und es wird eine Schrift der errechneten Größe vom Font-System der Plattform angefragt. Wenn jedoch eine Schriftgröße von 9 mit einer Skalierung von 140% angefordert wird, existiert die resultierende Schriftgröße von 12,6 im Font-System nicht explizit, sodass der Browser die Schriftgröße auf 12 abrundet. Dies führt zu einer stufenweisen Skalierung des Textes.

    Aber die `geometricPrecision`-Eigenschaft – wenn sie vollständig von der Rendering-Engine unterstützt wird – ermöglicht es Ihnen, Ihren Text fließend zu skalieren. Bei großen Skalierungsfaktoren könnten Sie weniger schöne Textdarstellungen sehen, aber die Größe ist so, wie Sie es erwarten würden – weder abgerundet noch auf die nächste von Windows oder Linux unterstützte Schriftgröße aufgerundet.

    Der `geometricPrecision`-Wert optimiert weder Lesbarkeit noch Performance. Er macht in der Regel in SVG Sinn, wo Sie möchten, dass Ihre Grafik originalgetreu skaliert wird, ohne die Textdimensionen zu verzerren.

    > [!NOTE]
    > WebKit wendet den angegebenen Wert präzise an, aber Gecko behandelt den Wert genauso wie `optimizeLegibility`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Automatische Anwendung von optimizeLegibility

Dies zeigt, wie `optimizeLegibility` von Browsern automatisch verwendet wird, wenn die `font-size` kleiner als `20px` ist.

#### HTML

```html
<p class="small">LYoWAT - ff fi fl ffl</p>
<p class="big">LYoWAT - ff fi fl ffl</p>
```

#### CSS

```css
.small {
  font:
    19.9px "Constantia",
    "Times New Roman",
    "Georgia",
    "Palatino",
    serif;
}
.big {
  font:
    20px "Constantia",
    "Times New Roman",
    "Georgia",
    "Palatino",
    serif;
}
```

#### Ergebnis

{{ EmbedLiveSample('Automatic_application_of_optimizeLegibility') }}

### optimizeSpeed vs. optimizeLegibility

Dieses Beispiel zeigt den Unterschied zwischen der Darstellung von `optimizeSpeed` und `optimizeLegibility` (in Ihrem Browser; andere Browser können abweichen).

#### HTML

```html
<p class="speed">LYoWAT - ff fi fl ffl</p>
<p class="legibility">LYoWAT - ff fi fl ffl</p>
```

#### CSS

```css
p {
  font:
    1.5em "Constantia",
    "Times New Roman",
    "Georgia",
    "Palatino",
    serif;
}

.speed {
  text-rendering: optimizeSpeed;
}
.legibility {
  text-rendering: optimizeLegibility;
}
```

#### Ergebnis

{{ EmbedLiveSample('optimizeSpeed_vs_optimizeLegibility') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Text in einem `<canvas>` zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [CSS Text Decoration](/de/docs/Web/CSS/CSS_text_decoration) CSS-Modul
- Verwandte CSS-Eigenschaften
  - [`text-decoration`](/de/docs/Web/CSS/Reference/Properties/text-decoration) (und seine Langform-Eigenschaften, wie [`text-decoration-line`](/de/docs/Web/CSS/Reference/Properties/text-decoration-line), [`text-decoration-style`](/de/docs/Web/CSS/Reference/Properties/text-decoration-style), und [`text-decoration-thickness`](/de/docs/Web/CSS/Reference/Properties/text-decoration-thickness))
  - [`text-emphasis`](/de/docs/Web/CSS/Reference/Properties/text-emphasis) (und seine Langform-Eigenschaften, einschließlich [`text-emphasis-color`](/de/docs/Web/CSS/Reference/Properties/text-emphasis-color), [`text-emphasis-position`](/de/docs/Web/CSS/Reference/Properties/text-emphasis-position), und [`text-emphasis-style`](/de/docs/Web/CSS/Reference/Properties/text-emphasis-style))
  - [`text-shadow`](/de/docs/Web/CSS/Reference/Properties/text-shadow)
  - [`text-transform`](/de/docs/Web/CSS/Reference/Properties/text-transform)

- Der [SVG](/de/docs/Web/SVG) {{SVGAttr("text-rendering")}}-Attribut
- [SVG und CSS](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS)
