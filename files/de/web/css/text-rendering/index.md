---
title: text-rendering
slug: Web/CSS/text-rendering
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`text-rendering`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt der Rendering-Engine Informationen darüber, was beim Rendern von Text optimiert werden soll.

Der Browser trifft Entscheidungen zwischen Geschwindigkeit, Lesbarkeit und geometrischer Präzision.

> [!NOTE]
> Die `text-rendering`-Eigenschaft ist eine SVG-Eigenschaft, die in keinem CSS-Standard definiert ist. Trotzdem erlauben Gecko- und WebKit-Browser, diese Eigenschaft auf HTML- und XML-Inhalte unter Windows, macOS und Linux anzuwenden.

Ein sehr sichtbarer Effekt ist `optimizeLegibility`, das Ligaturen (ff, fi, fl etc.) bei Texten kleiner als 20px für einige Schriften aktiviert (zum Beispiel Microsofts _Calibri_, _Candara_, _Constantia_ und _Corbel_, oder die _DejaVu_-Schriftfamilie).

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
  - : Der Browser trifft fundierte Entscheidungen darüber, wann Optimierungen für Geschwindigkeit, Lesbarkeit und geometrische Präzision beim Zeichnen von Text vorgenommen werden sollen. Für Unterschiede in der Art und Weise, wie dieser Wert vom Browser interpretiert wird, siehe die Kompatibilitätstabelle.

    Der `auto`-Wert ist ein guter Standard, um Qualität und Leistung auszugleichen, insbesondere für längere Textpassagen.

- `optimizeSpeed`
  - : Der Browser betont die Rendering-Geschwindigkeit über Lesbarkeit und geometrische Präzision beim Zeichnen von Text. Es deaktiviert Kerning und Ligaturen.

    Der `optimizeSpeed`-Wert ist vorzuziehen in ressourcenbeschränkten Rendering-Szenarien, wie bei langsamen Prozessoren oder schwacher Batterie.

- `optimizeLegibility`
  - : Der Browser betont die Lesbarkeit über die Rendering-Geschwindigkeit und geometrische Präzision. Dies ermöglicht Kerning und optionale Ligaturen.

    Der `optimizeLegibility`-Wert ist vorzuziehen für Texte, die groß in der Größe, aber kurz im Inhalt sind, wie Überschriften oder Banner, um deren Lesbarkeit zu verbessern. Es könnte auch für hochwertige professionelle Typografie wie veröffentlichte Artikel verwendet werden. Es wird nicht für typische Artikel empfohlen, da es die Leistung beeinträchtigen könnte.

- `geometricPrecision`
  - : Der Browser betont die geometrische Präzision über die Rendering-Geschwindigkeit und Lesbarkeit. Bestimmte Aspekte von Schriften – wie Kerning – skalieren nicht linear. Daher kann dieser Wert Text mit diesen Schriften gut aussehen lassen.

    In SVG, wenn Text hoch- oder herunterskaliert wird, berechnen Browser die endgültige Größe des Textes (die durch die angegebene Schriftgröße und die angewendete Skalierung bestimmt wird) und fordern eine Schrift dieser berechneten Größe vom Schriftsystem der Plattform an. Aber wenn Sie eine Schriftgröße von sagen wir 9 mit einer Skalierung von 140% anfordern, existiert die resultierende Schriftgröße von 12,6 nicht explizit im Schriftsystem, sodass der Browser die Schriftgröße stattdessen auf 12 rundet. Das führt zu einer stufenartigen Skalierung des Textes.

    Aber die `geometricPrecision`-Eigenschaft – wenn sie vollständig von der Rendering-Engine unterstützt wird – ermöglicht fließende Skalierung Ihres Textes. Bei großen Skalierungsfaktoren könnte das Text-Rendering weniger schön sein, aber die Größe entspricht dem, was Sie erwarten würden – weder hoch- noch herunterskaliert auf die nächste unterstützte Schriftgröße von Windows oder Linux.

    Der `geometricPrecision`-Wert optimiert weder Lesbarkeit noch Leistung. Es macht normalerweise in SVG Sinn, wo Sie wollen, dass Ihre Grafik ohne Verzerrung der Textdimensionen skaliert wird.

    > [!NOTE]
    > WebKit wendet den angegebenen Wert präzise an, aber Gecko behandelt den Wert wie `optimizeLegibility`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Automatische Anwendung von optimizeLegibility

Dies zeigt, wie `optimizeLegibility` von Browsern automatisch angewendet wird, wenn die `font-size` kleiner als `20px` ist.

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

Dieses Beispiel zeigt den Unterschied zwischen dem Erscheinungsbild von `optimizeSpeed` und `optimizeLegibility` (in Ihrem Browser; andere Browser können variieren).

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

- [Text auf einem `<canvas>` Zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [CSS Textdekoration](/de/docs/Web/CSS/CSS_text_decoration) CSS-Modul
- Verwandte CSS-Eigenschaften
  - [`text-decoration`](/de/docs/Web/CSS/text-decoration) (und ihre Langform-Eigenschaften, wie [`text-decoration-line`](/de/docs/Web/CSS/text-decoration-line), [`text-decoration-style`](/de/docs/Web/CSS/text-decoration-style) und [`text-decoration-thickness`](/de/docs/Web/CSS/text-decoration-thickness))
  - [`text-emphasis`](/de/docs/Web/CSS/text-emphasis) (und ihre Langform-Eigenschaften, einschließlich [`text-emphasis-color`](/de/docs/Web/CSS/text-emphasis-color), [`text-emphasis-position`](/de/docs/Web/CSS/text-emphasis-position) und [`text-emphasis-style`](/de/docs/Web/CSS/text-emphasis-style))
  - [`text-shadow`](/de/docs/Web/CSS/text-shadow)
  - [`text-transform`](/de/docs/Web/CSS/text-transform)

- Das [SVG](/de/docs/Web/SVG) {{SVGAttr("text-rendering")}} Attribut
- [SVG und CSS](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS)
