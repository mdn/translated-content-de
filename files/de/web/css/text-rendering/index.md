---
title: text-rendering
slug: Web/CSS/text-rendering
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`text-rendering`** [CSS](/de/docs/Web/CSS) Eigenschaft liefert dem Rendering-Engine Informationen darüber, was beim Rendern von Text optimiert werden soll.

Der Browser trifft Abwägungen zwischen Geschwindigkeit, Lesbarkeit und geometrischer Präzision.

> [!NOTE]
> Die `text-rendering` Eigenschaft ist eine SVG-Eigenschaft, die in keinem CSS-Standard definiert ist. Gecko- und WebKit-Browser ermöglichen es jedoch, diese Eigenschaft auf HTML- und XML-Inhalte unter Windows, macOS und Linux anzuwenden.

Ein sehr sichtbarer Effekt ist `optimizeLegibility`, das Ligaturen (ff, fi, fl, etc.) in Texten kleiner als 20px für einige Schriftarten aktiviert (zum Beispiel Microsofts _Calibri_, _Candara_, _Constantia_ und _Corbel_ oder die _DejaVu_-Schriftfamilie).

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

  - : Der Browser trifft fundierte Vermutungen darüber, wann er beim Zeichnen von Texten Geschwindigkeit, Lesbarkeit und geometrische Präzision optimieren soll. Für Unterschiede, wie dieser Wert vom Browser interpretiert wird, siehe die Kompatibilitätstabelle.

    Der `auto`-Wert ist eine gute Standardeinstellung für die Balance zwischen Qualität und Leistung, insbesondere für längere einfache Texte.

- `optimizeSpeed`

  - : Der Browser legt den Schwerpunkt auf Rendering-Geschwindigkeit gegenüber Lesbarkeit und geometrischer Präzision beim Zeichnen von Text. Es deaktiviert Kerning und Ligaturen.

    Der `optimizeSpeed`-Wert ist in situationsbezogenen Rendering-Szenarien mit begrenzten Ressourcen wie langsamen Prozessoren oder geringem Akkustand vorzuziehen.

- `optimizeLegibility`

  - : Der Browser legt den Schwerpunkt auf Lesbarkeit gegenüber Rendering-Geschwindigkeit und geometrischer Präzision. Dies aktiviert Kerning und optionale Ligaturen.

    Der `optimizeLegibility`-Wert ist vorzuziehen für Texte, die groß sind, aber einen kurzen Inhalt haben, wie z.B. Überschriften oder Banner, um deren Lesbarkeit zu verbessern. Er könnte auch für hochwertige professionelle Typographie wie veröffentlichte Artikel verwendet werden. Er wird nicht für typische Artikel empfohlen, da er potenzielle Leistungseinbußen verursachen könnte.

- `geometricPrecision`

  - : Der Browser legt den Schwerpunkt auf geometrische Präzision gegenüber Rendering-Geschwindigkeit und Lesbarkeit. Bestimmte Aspekte von Schriftarten — wie das Kerning — skalieren nicht linear. So kann dieser Wert den Text dieser Schriftarten gut aussehen lassen.

    In SVG, wenn Text skaliert wird, berechnen Browser die endgültige Größe des Textes (die durch die angegebene Schriftgröße und den angewendeten Maßstab bestimmt wird) und fordern eine Schriftart dieser berechneten Größe vom Fontsystem der Plattform an. Aber wenn Sie eine Schriftgröße von beispielsweise 9 mit einem Maßstab von 140% anfordern, existiert die resultierende Schriftgröße von 12,6 nicht explizit im Fontsystem, sodass der Browser die Schriftgröße stattdessen auf 12 rundet. Dies führt zu einer Treppenskalenwirkung des Textes.

    Aber die `geometricPrecision`-Eigenschaft — wenn sie vom Rendering-Engine vollständig unterstützt wird — ermöglicht es Ihnen, Ihren Text flüssig zu skalieren. Für große Skalierungsfaktoren sehen Sie möglicherweise eine weniger schöne Textrendering, aber die Größe wird erwartungsgemäß weder nach oben noch nach unten auf die nächste vom Windows oder Linux unterstützte Schriftgröße gerundet.

    Der `geometricPrecision`-Wert optimiert weder die Lesbarkeit noch die Leistung. Er macht meist in SVG Sinn, wo Sie möchten, dass Ihre Grafik treu skaliert wird, ohne die Textdimensionen zu verzerren.

    > [!NOTE]
    > WebKit wendet den angegebenen Wert genau an, aber Gecko behandelt den Wert wie `optimizeLegibility`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Automatische Anwendung von optimizeLegibility

Dies demonstriert, wie `optimizeLegibility` automatisch von Browsern verwendet wird, wenn die `font-size` kleiner als `20px` ist.

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

Dieses Beispiel zeigt den Unterschied zwischen dem Aussehen von `optimizeSpeed` und `optimizeLegibility` (in Ihrem Browser; andere Browser können variieren).

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

- [Zeichnen von Text in einem `<canvas>`](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [CSS Text Decoration](/de/docs/Web/CSS/CSS_text_decoration) CSS-Modul
- Verwandte CSS-Eigenschaften

  - [`text-decoration`](/de/docs/Web/CSS/text-decoration) (und seine Langform-Eigenschaften, wie [`text-decoration-line`](/de/docs/Web/CSS/text-decoration-line), [`text-decoration-style`](/de/docs/Web/CSS/text-decoration-style) und [`text-decoration-thickness`](/de/docs/Web/CSS/text-decoration-thickness))
  - [`text-emphasis`](/de/docs/Web/CSS/text-emphasis) (und seine Langform-Eigenschaften, einschließlich [`text-emphasis-color`](/de/docs/Web/CSS/text-emphasis-color), [`text-emphasis-position`](/de/docs/Web/CSS/text-emphasis-position) und [`text-emphasis-style`](/de/docs/Web/CSS/text-emphasis-style))
  - [`text-shadow`](/de/docs/Web/CSS/text-shadow)
  - [`text-transform`](/de/docs/Web/CSS/text-transform)

- Das [SVG](/de/docs/Web/SVG) {{SVGAttr("text-rendering")}} Attribut
- [SVG und CSS](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS)
