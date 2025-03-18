---
title: text-rendering
slug: Web/CSS/text-rendering
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{CSSRef}}

Die **`text-rendering`** [CSS](/de/docs/Web/CSS) Eigenschaft liefert der Rendering-Engine Informationen darüber, was beim Rendern von Text optimiert werden soll.

Der Browser trifft Entscheidungen über die Balance zwischen Geschwindigkeit, Lesbarkeit und geometrischer Präzision.

> [!NOTE]
> Die `text-rendering` Eigenschaft ist eine SVG-Eigenschaft, die in keinem CSS-Standard definiert ist. Allerdings erlauben Gecko- und WebKit-Browser die Anwendung dieser Eigenschaft auf HTML- und XML-Inhalte unter Windows, macOS und Linux.

Ein sehr sichtbarer Effekt ist `optimizeLegibility`, welches Ligaturen (ff, fi, fl, etc.) in Texten mit einer Größe unter 20px für einige Schriftarten aktiviert (zum Beispiel Microsofts _Calibri_, _Candara_, _Constantia_ und _Corbel_ oder die _DejaVu_ Schriftfamilie).

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

  - : Der Browser trifft fundierte Entscheidungen darüber, wann er Geschwindigkeit, Lesbarkeit und geometrische Präzision beim Zeichnen von Text optimieren soll. Für Unterschiede, wie dieser Wert vom Browser interpretiert wird, siehe die Kompatibilitätstabelle.

    Der `auto` Wert ist eine gute Standardeinstellung für die Balance zwischen Qualität und Leistung, insbesondere für längere Absätze von einfachem Text.

- `optimizeSpeed`

  - : Der Browser betont die Rendering-Geschwindigkeit über die Lesbarkeit und geometrische Präzision beim Zeichnen von Text. Es werden Kerning und Ligaturen deaktiviert.

    Der `optimizeSpeed` Wert ist in ressourcenbeschränkten Rendering-Szenarien vorzuziehen, wie z.B. langsame Prozessoren oder schwache Batterien.

- `optimizeLegibility`

  - : Der Browser betont die Lesbarkeit über die Rendering-Geschwindigkeit und geometrische Präzision. Dies aktiviert Kerning und optionale Ligaturen.

    Der `optimizeLegibility` Wert ist vorzuziehen für Texte, die groß in der Größe aber kurz im Inhalt sind, wie Überschriften oder Banner, um deren Lesbarkeit zu verbessern. Er könnte auch für hochwertige professionelle Typografie wie veröffentlichte Artikel verwendet werden. Für typische Artikel wird er wegen möglicher Leistungseinbußen nicht empfohlen.

- `geometricPrecision`

  - : Der Browser betont die geometrische Präzision über die Rendering-Geschwindigkeit und Lesbarkeit. Bestimmte Aspekte von Schriftarten – wie Kerning – skalieren nicht linear, daher kann dieser Wert Texte, die diese Schriftarten verwenden, gut aussehen lassen.

    In SVG, wenn Text vergrößert oder verkleinert wird, berechnen Browser die endgültige Größe des Textes (bestimmt durch die angegebene Schriftgröße und den angewendeten Maßstab) und fordern eine Schrift dieser berechneten Größe vom Schriftsystem der Plattform an. Aber wenn Sie eine Schriftgröße von z.B. 9 mit einem Maßstab von 140% anfordern, existiert die resultierende Schriftgröße von 12,6 nicht explizit im Schriftsystem, daher rundet der Browser die Schriftgröße auf 12 ab. Dies führt zu einer treppenstufenartigen Skalierung von Text.

    Aber die `geometricPrecision` Eigenschaft – wenn vollständig von der Rendering-Engine unterstützt – erlaubt es, Text stufenlos zu skalieren. Bei großen Skalierungsfaktoren können Sie eine weniger schöne Textrenderung sehen, aber die Größe ist wie erwartet – weder auf- noch abgerundet zu der nächstgelegenen Schriftgröße, die von Windows oder Linux unterstützt wird.

    Der `geometricPrecision` Wert optimiert weder Lesbarkeit noch Leistung. Er ergibt meist Sinn in SVG, wo Sie möchten, dass Ihre Grafik maßstabsgetreu skaliert, ohne die Textdimensionen zu verzerren.

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

- [Text in ein `<canvas>` zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [CSS Textdekoration](/de/docs/Web/CSS/CSS_text_decoration) CSS-Modul
- Verwandte CSS-Eigenschaften

  - [`text-decoration`](/de/docs/Web/CSS/text-decoration) (und seine Langform-Eigenschaften, wie [`text-decoration-line`](/de/docs/Web/CSS/text-decoration-line), [`text-decoration-style`](/de/docs/Web/CSS/text-decoration-style), und [`text-decoration-thickness`](/de/docs/Web/CSS/text-decoration-thickness))
  - [`text-emphasis`](/de/docs/Web/CSS/text-emphasis) (und seine Langform-Eigenschaften, einschließlich [`text-emphasis-color`](/de/docs/Web/CSS/text-emphasis-color), [`text-emphasis-position`](/de/docs/Web/CSS/text-emphasis-position), und [`text-emphasis-style`](/de/docs/Web/CSS/text-emphasis-style))
  - [`text-shadow`](/de/docs/Web/CSS/text-shadow)
  - [`text-transform`](/de/docs/Web/CSS/text-transform)

- Das [SVG](/de/docs/Web/SVG) {{SVGAttr("text-rendering")}} Attribut
- [SVG und CSS](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS)
