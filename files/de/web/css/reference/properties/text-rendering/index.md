---
title: text-rendering
slug: Web/CSS/Reference/Properties/text-rendering
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`text-rendering`**-Eigenschaft von [CSS](/de/docs/Web/CSS) bietet der Rendering-Engine Informationen darüber, worauf beim Rendern von Text optimiert werden soll.

Der Browser trifft Kompromisse zwischen Geschwindigkeit, Lesbarkeit und geometrischer Präzision.

> [!NOTE]
> Die `text-rendering` Eigenschaft ist eine SVG-Eigenschaft, die in keinem CSS-Standard definiert ist. Dennoch erlauben es Gecko- und WebKit-Browser, diese Eigenschaft auf HTML- und XML-Inhalte unter Windows, macOS und Linux anzuwenden.

Ein sehr sichtbarer Effekt ist `optimizeLegibility`, das Ligaturen (ff, fi, fl, etc.) in Texten unter 20px bei einigen Schriften aktiviert (zum Beispiel Microsofts _Calibri_, _Candara_, _Constantia_ und _Corbel_ oder die _DejaVu_ Schriftfamilie).

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
  - : Der Browser trifft fundierte Entscheidungen darüber, wann Text für Geschwindigkeit, Lesbarkeit und geometrische Präzision optimiert werden soll. Unterschiede in der Interpretation dieses Werts durch den Browser finden Sie in der Kompatibilitätstabelle.

    Der `auto` Wert ist eine gute Standardeinstellung, um Qualität und Leistung auszugleichen, insbesondere für längere, einfache Texte.

- `optimizeSpeed`
  - : Der Browser betont Rendering-Geschwindigkeit über Lesbarkeit und geometrische Präzision beim Zeichnen von Text und deaktiviert Kerning und Ligaturen.

    Der `optimizeSpeed` Wert ist vorzuziehen in ressourcenbeschränkten Rendering-Szenarien, wie langsame Prozessoren oder geringe Batterieleistung.

- `optimizeLegibility`
  - : Der Browser betont Lesbarkeit über Rendering-Geschwindigkeit und geometrische Präzision. Dies aktiviert Kerning und optionale Ligaturen.

    Der `optimizeLegibility` Wert ist vorzuziehen für Texte, die groß sind, aber kurz im Inhalt, wie Überschriften oder Banner, um deren Lesbarkeit zu verbessern. Es könnte auch für hochwertige professionelle Typografie, wie veröffentlichte Artikel, verwendet werden. Für normale Artikel ist es nicht empfohlen, da es zu Leistungseinbußen führen kann.

- `geometricPrecision`
  - : Der Browser betont geometrische Präzision über Rendering-Geschwindigkeit und Lesbarkeit. Bei bestimmten Schriftarten — wie Kerning — skaliert dies nicht linear. So kann dieser Wert Text, der diese Schriften nutzt, gut aussehen lassen.

    In SVG, wenn Text vergrößert oder verkleinert wird, berechnen Browser die endgültige Größe des Textes (die durch die angegebene Schriftgröße und den angewendeten Maßstab bestimmt wird) und fordern eine Schrift dieser berechneten Größe aus dem Schriftsystem der Plattform an. Wenn Sie jedoch zum Beispiel eine Schriftgröße von 9 mit einem Maßstab von 140% anfordern, existiert die resultierende Schriftgröße von 12,6 explizit nicht im Schriftsystem, und der Browser rundet die Schriftgröße stattdessen auf 12. Dies führt zu einer treppenstufenartigen Skalierung von Text.

    Aber die `geometricPrecision`-Eigenschaft — wenn sie von der Rendering-Engine vollständig unterstützt wird — ermöglicht es, Ihren Text flüssig zu skalieren. Bei großen Skalierungsfaktoren könnten Sie weniger schöne Textdarstellungen sehen, aber die Größe ist wie erwartet — weder auf- noch abgerundet auf die nächste von Windows oder Linux unterstützte Schriftgröße.

    Der `geometricPrecision` Wert optimiert weder Lesbarkeit noch Leistung. Er macht meist Sinn in SVG, wo Sie Ihr Grafikmotiv treu skalieren möchten, ohne die Textdimensionen zu verzerren.

    > [!NOTE]
    > WebKit wendet den angegebenen Wert präzise an, aber Gecko behandelt den Wert gleich wie `optimizeLegibility`.

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

Dieses Beispiel zeigt den Unterschied zwischen dem Erscheinungsbild von `optimizeSpeed` und `optimizeLegibility` (in Ihrem Browser; andere Browser können unterschiedlich sein).

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
- [CSS Textdekoration](/de/docs/Web/CSS/Guides/Text_decoration) CSS-Modul
- Verwandte CSS-Eigenschaften
  - [`text-decoration`](/de/docs/Web/CSS/Reference/Properties/text-decoration) (und dessen Einzelwerteigenschaften, wie [`text-decoration-line`](/de/docs/Web/CSS/Reference/Properties/text-decoration-line), [`text-decoration-style`](/de/docs/Web/CSS/Reference/Properties/text-decoration-style), und [`text-decoration-thickness`](/de/docs/Web/CSS/Reference/Properties/text-decoration-thickness))
  - [`text-emphasis`](/de/docs/Web/CSS/Reference/Properties/text-emphasis) (und dessen Einzelwerteigenschaften, einschließlich [`text-emphasis-color`](/de/docs/Web/CSS/Reference/Properties/text-emphasis-color), [`text-emphasis-position`](/de/docs/Web/CSS/Reference/Properties/text-emphasis-position), und [`text-emphasis-style`](/de/docs/Web/CSS/Reference/Properties/text-emphasis-style))
  - [`text-shadow`](/de/docs/Web/CSS/Reference/Properties/text-shadow)
  - [`text-transform`](/de/docs/Web/CSS/Reference/Properties/text-transform)

- Das [SVG](/de/docs/Web/SVG) {{SVGAttr("text-rendering")}} Attribut
- [SVG und CSS](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS)
