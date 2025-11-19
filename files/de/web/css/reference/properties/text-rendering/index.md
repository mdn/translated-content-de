---
title: text-rendering
slug: Web/CSS/Reference/Properties/text-rendering
l10n:
  sourceCommit: e316a03cc74a78004dbba837c9d5df297e2eb0aa
---

Die **`text-rendering`** [CSS](/de/docs/Web/CSS) Eigenschaft liefert der Rendering-Engine Informationen darüber, worauf beim Rendern von Text optimiert werden soll.

Der Browser geht Kompromisse zwischen Geschwindigkeit, Lesbarkeit und geometrischer Präzision ein.

> [!NOTE]
> Die `text-rendering` Eigenschaft ist eine SVG-Eigenschaft, die in keinem CSS-Standard definiert ist. Allerdings erlauben Gecko- und WebKit-Browser, diese Eigenschaft auf HTML- und XML-Inhalte unter Windows, macOS und Linux anzuwenden.

Ein sehr sichtbarer Effekt ist `optimizeLegibility`, das Ligaturen (ff, fi, fl, etc.) bei Texten kleiner als 20px für einige Schriftarten ermöglicht (zum Beispiel Microsofts _Calibri_, _Candara_, _Constantia_ und _Corbel_ oder die _DejaVu_ Schriftfamilie).

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
  - : Der Browser trifft fundierte Entscheidungen darüber, wann bei der Darstellung von Texten auf Geschwindigkeit, Lesbarkeit und geometrische Präzision optimiert werden soll. Für Unterschiede in der Interpretation dieses Wertes durch den Browser, siehe die Kompatibilitätstabelle.

    Der `auto` Wert ist eine gute Standardeinstellung, um Qualität und Leistung, insbesondere bei umfangreichen Textkörpern, auszubalancieren.

- `optimizeSpeed`
  - : Der Browser betont die Rendering-Geschwindigkeit gegenüber Lesbarkeit und geometrischer Präzision beim Zeichnen von Text. Es werden Kerning und Ligaturen deaktiviert.

    Der `optimizeSpeed` Wert ist in ressourcenbeschränkten Rendering-Szenarien, wie langsamen Prozessoren oder niedriger Batterieleistung, vorzuziehen.

- `optimizeLegibility`
  - : Der Browser betont die Lesbarkeit gegenüber der Rendering-Geschwindigkeit und geometrischer Präzision. Dies ermöglicht Kerning und optionale Ligaturen.

    Der `optimizeLegibility` Wert ist für Texte vorzuziehen, die in der Größe groß, aber im Inhalt kurz sind, wie Überschriften oder Banner, um deren Lesbarkeit zu verbessern. Er könnte auch für hochwertige professionelle Typografie, wie veröffentlichte Artikel, genutzt werden. Es wird nicht für typische Artikel empfohlen, aufgrund möglicher Auswirkungen auf die Leistung.

- `geometricPrecision`
  - : Der Browser betont die geometrische Präzision über die Rendering-Geschwindigkeit und Lesbarkeit. Bestimmte Aspekte von Schriftarten — wie beispielsweise Kerning — skalieren nicht linear. Daher kann dieser Wert bei der Verwendung solcher Schriftarten gut aussehen lassen.

    In SVG, wenn Text vergrößert oder verkleinert wird, berechnen Browser die endgültige Größe des Textes (die durch die angegebene Schriftgröße und die angewandte Skalierung bestimmt wird) und fordern eine Schriftart dieser berechneten Größe aus dem Schriftartensystem der Plattform an. Doch wenn Sie eine Schriftgröße von beispielsweise 9 mit einer Skalierung von 140 % anfordern, existiert die resultierende Schriftgröße von 12,6 nicht explizit im Schriftartensystem, sodass der Browser die Schriftgröße stattdessen auf 12 rundet. Dies führt zu treppenstufenartigem Skalieren von Text.

    Aber die `geometricPrecision` Eigenschaft — wenn sie von der Rendering-Engine vollständig unterstützt wird — ermöglicht es Ihnen, Ihren Text flüssig zu skalieren. Bei großen Skalierungsfaktoren könnten Sie weniger als schöne Textdarstellung sehen, aber die Größe ist wie erwartet — weder auf- noch abgerundet zur nächstunterstützten Schriftgröße auf Windows oder Linux.

    Der `geometricPrecision` Wert optimiert weder Lesbarkeit noch Leistung. Es ergibt normalerweise Sinn in SVG, wo Sie möchten, dass Ihre Grafik sich originalgetreu skaliert, ohne die Textdimensionen zu verzerren.

    > [!NOTE]
    > WebKit wendet den angegebenen Wert präzise an, aber Gecko behandelt den Wert identisch wie `optimizeLegibility`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Automatische Anwendung von optimizeLegibility

Diese Demonstration zeigt, wie `optimizeLegibility` von Browsern automatisch verwendet wird, wenn die `Schriftgröße` kleiner als `20px` ist.

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

- [Text in ein `<canvas>` zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [CSS Text Decoration](/de/docs/Web/CSS/Guides/Text_decoration) CSS-Modul
- Verwandte CSS-Eigenschaften
  - [`text-decoration`](/de/docs/Web/CSS/Reference/Properties/text-decoration) (und dessen Langform-Eigenschaften, wie z.B. [`text-decoration-line`](/de/docs/Web/CSS/Reference/Properties/text-decoration-line), [`text-decoration-style`](/de/docs/Web/CSS/Reference/Properties/text-decoration-style) und [`text-decoration-thickness`](/de/docs/Web/CSS/Reference/Properties/text-decoration-thickness))
  - [`text-emphasis`](/de/docs/Web/CSS/Reference/Properties/text-emphasis) (und dessen Langform-Eigenschaften, einschließlich [`text-emphasis-color`](/de/docs/Web/CSS/Reference/Properties/text-emphasis-color), [`text-emphasis-position`](/de/docs/Web/CSS/Reference/Properties/text-emphasis-position) und [`text-emphasis-style`](/de/docs/Web/CSS/Reference/Properties/text-emphasis-style))
  - [`text-shadow`](/de/docs/Web/CSS/Reference/Properties/text-shadow)
  - [`text-transform`](/de/docs/Web/CSS/Reference/Properties/text-transform)

- Das [SVG](/de/docs/Web/SVG) {{SVGAttr("text-rendering")}} Attribut
- [SVG und CSS](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS)
