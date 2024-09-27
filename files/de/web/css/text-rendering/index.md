---
title: text-rendering
slug: Web/CSS/text-rendering
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`text-rendering`** [CSS](/de/docs/Web/CSS) Eigenschaft liefert der Rendering-Engine Informationen darüber, was beim Rendern von Text optimiert werden soll.

Der Browser trifft Abwägungen zwischen Geschwindigkeit, Lesbarkeit und geometrischer Präzision.

> [!NOTE]
> Die `text-rendering`-Eigenschaft ist eine SVG-Eigenschaft, die in keinem CSS-Standard definiert ist. Gecko- und WebKit-Browser erlauben es jedoch, diese Eigenschaft auf HTML- und XML-Inhalte unter Windows, macOS und Linux anzuwenden.

Ein sehr sichtbarer Effekt ist `optimizeLegibility`, das Ligaturen (ff, fi, fl usw.) in Text unter 20px für einige Schriftarten ermöglicht (zum Beispiel Microsofts _Calibri_, _Candara_, _Constantia_ und _Corbel_ oder die _DejaVu_-Schriftfamilie).

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
  - : Der Browser trifft fundierte Entscheidungen darüber, wann bei der Darstellung von Text die Optimierung für Geschwindigkeit, Lesbarkeit und geometrische Präzision erfolgen soll. Für Unterschiede in der Interpretation dieses Wertes durch den Browser siehe die Kompatibilitätstabelle.
- `optimizeSpeed`
  - : Der Browser betont die Rendering-Geschwindigkeit mehr als Lesbarkeit und geometrische Präzision bei der Textdarstellung. Es deaktiviert Kerning und Ligaturen.
- `optimizeLegibility`
  - : Der Browser betont die Lesbarkeit mehr als die Rendering-Geschwindigkeit und die geometrische Präzision. Dies ermöglicht Kerning und optionale Ligaturen.
- `geometricPrecision`

  - : Der Browser betont die geometrische Präzision mehr als die Rendering-Geschwindigkeit und die Lesbarkeit. Bestimmte Aspekte von Schriftarten — wie Kerning — skalieren nicht linear. Daher kann dieser Wert den Text, der diese Schriftarten verwendet, gut aussehen lassen.

    In SVG, wenn Text hoch- oder herunterskaliert wird, berechnen Browser die endgültige Größe des Textes (die durch die angegebene Schriftgröße und die angewendete Skala bestimmt wird) und fordern von der Schriftplattform eine Schriftgröße dieser berechneten Größe an. Wenn Sie jedoch beispielsweise eine Schriftgröße von 9 mit einer Skalierung von 140% anfordern, existiert die resultierende Schriftgröße von 12,6 nicht explizit im Schriftsystem, sodass der Browser die Schriftgröße stattdessen auf 12 rundet. Dies führt zu einer treppenartigen Skalierung von Text.

    Aber die `geometricPrecision`-Eigenschaft — wenn sie von der Rendering-Engine vollständig unterstützt wird — lässt Ihren Text fließend skalieren. Bei großen Skalierungsfaktoren könnten Sie eine weniger schöne Textrendering erleben, aber die Größe ist, was Sie erwarten würden — weder aufgerundet noch abgerundet zur nächsten Schriftgröße, die von Windows oder Linux unterstützt wird.

    > [!NOTE]
    > WebKit wendet den angegebenen Wert präzise an, aber Gecko behandelt den Wert genauso wie `optimizeLegibility`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Automatische Anwendung von optimizeLegibility

Dies demonstriert, wie `optimizeLegibility` von Browsern automatisch verwendet wird, wenn die `font-size` kleiner als `20px` ist.

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

Dieses Beispiel zeigt den Unterschied zwischen dem Erscheinungsbild von `optimizeSpeed` und `optimizeLegibility` (in Ihrem Browser; andere Browser können abweichen).

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
- [CSS Textdekoration](/de/docs/Web/CSS/CSS_text_decoration) CSS-Modul
- Verwandte CSS-Eigenschaften

  - [`text-decoration`](/de/docs/Web/CSS/text-decoration) (und seine Langform-Eigenschaften wie [`text-decoration-line`](/de/docs/Web/CSS/text-decoration-line), [`text-decoration-style`](/de/docs/Web/CSS/text-decoration-style) und [`text-decoration-thickness`](/de/docs/Web/CSS/text-decoration-thickness))
  - [`text-emphasis`](/de/docs/Web/CSS/text-emphasis) (und seine Langform-Eigenschaften, einschließlich [`text-emphasis-color`](/de/docs/Web/CSS/text-emphasis-color), [`text-emphasis-position`](/de/docs/Web/CSS/text-emphasis-position) und [`text-emphasis-style`](/de/docs/Web/CSS/text-emphasis-style))
  - [`text-shadow`](/de/docs/Web/CSS/text-shadow)
  - [`text-transform`](/de/docs/Web/CSS/text-transform)

- Das [SVG](/de/docs/Web/SVG) {{SVGAttr("text-rendering")}} Attribut
- [SVG und CSS](/de/docs/Web/SVG/Tutorial/SVG_and_CSS)
