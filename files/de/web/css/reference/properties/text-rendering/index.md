---
title: "`text-rendering` CSS property"
short-title: text-rendering
slug: Web/CSS/Reference/Properties/text-rendering
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`text-rendering`** [CSS](/de/docs/Web/CSS) Eigenschaft liefert dem Rendering-Engine Informationen darüber, worauf beim Rendern von Text optimiert werden soll.

Der Browser nutzt Kompromisse zwischen Geschwindigkeit, Lesbarkeit und geometrischer Präzision.

> [!NOTE]
> Die `text-rendering` Eigenschaft ist eine SVG-Eigenschaft, die in keinem CSS-Standard definiert ist. Allerdings erlauben Gecko- und WebKit-Browser, diese Eigenschaft auf HTML- und XML-Inhalte unter Windows, macOS und Linux anzuwenden.

Ein sehr sichtbarer Effekt ist `optimizeLegibility`, welches Ligaturen (ff, fi, fl, etc.) bei Text unter 20px für einige Schriftarten aktiviert (zum Beispiel Microsofts _Calibri_, _Candara_, _Constantia_ und _Corbel_ oder die _DejaVu_-Schriftfamilie).

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
  - : Der Browser trifft fundierte Annahmen darüber, wann Text für Geschwindigkeit, Lesbarkeit und geometrische Präzision optimiert werden sollte. Für Unterschiede, wie dieser Wert vom Browser interpretiert wird, siehe die Kompatibilitätstabelle.

    Der `auto` Wert ist eine gute Standardauswahl, um Qualität und Leistung auszugleichen, besonders für längere Texte.

- `optimizeSpeed`
  - : Der Browser betont die Rendering-Geschwindigkeit über Lesbarkeit und geometrische Präzision bei der Textdarstellung. Es deaktiviert Kerning und Ligaturen.

    Der `optimizeSpeed` Wert ist vorzuziehen in ressourcenbeschränkten Rendering-Szenarien, wie zum Beispiel bei langsamen Prozessoren oder geringer Akkuleistung.

- `optimizeLegibility`
  - : Der Browser betont die Lesbarkeit über die Rendering-Geschwindigkeit und geometrische Präzision. Dies ermöglicht Kerning und optionale Ligaturen.

    Der `optimizeLegibility` Wert ist vorzuziehen für Texte, die großformatig, aber inhaltsarm sind, wie zum Beispiel Überschriften oder Banner, um ihre Lesbarkeit zu verbessern. Er könnte auch für hochwertige professionelle Typografie verwendet werden, wie veröffentlichte Artikel. Es wird nicht für typische Artikel empfohlen aufgrund potenzieller Leistungseinbußen.

- `geometricPrecision`
  - : Der Browser betont die geometrische Präzision über Rendering-Geschwindigkeit und Lesbarkeit. Bestimmte Aspekte von Schriften – wie Kerning – skalieren nicht linear. Daher kann dieser Wert Text, der diese Schriften verwendet, gut aussehen lassen.

    In SVG, wenn Text vergrößert oder verkleinert wird, berechnen Browser die endgültige Größe des Textes (die durch die angegebene Schriftgröße und den angewendeten Maßstab bestimmt wird) und verlangen eine Schriftart dieser berechneten Größe vom Schriftsystem der Plattform. Aber wenn Sie eine Schriftgröße von sagen wir 9 mit einem Maßstab von 140% anfordern, existiert die resultierende Schriftgröße von 12,6 im Schriftsystem nicht explizit, sodass der Browser die Schriftgröße auf 12 rundet. Dies führt zu einer Treppenstufen-Skalierung von Text.

    Aber die `geometricPrecision` Eigenschaft – wenn sie vollständig vom Rendering-Engine unterstützt wird – lässt Sie Ihren Text fließend skalieren. Bei großen Skalierungsfaktoren sehen Sie möglicherweise weniger schöne Textrenderings, aber die Größe ist, wie Sie sie erwarten würden – weder hoch- noch heruntergerundet zur nächstunterstützten Schriftgröße von Windows oder Linux.

    Der `geometricPrecision` Wert optimiert weder Lesbarkeit noch Leistung. Er macht meist in SVG Sinn, wo Sie möchten, dass Ihre Grafik getreu skaliert, ohne die Textdimensionen zu verzerren.

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

- [Text auf einem `<canvas>` zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [CSS Textdekoration](/de/docs/Web/CSS/Guides/Text_decoration) CSS-Modul
- Verwandte CSS-Eigenschaften
  - {{cssxref("text-decoration")}} (und ihre Langformen, wie {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, und {{cssxref("text-decoration-thickness")}})
  - {{cssxref("text-emphasis")}} (und ihre Langformen, inklusive {{cssxref("text-emphasis-color")}}, {{cssxref("text-emphasis-position")}}, und {{cssxref("text-emphasis-style")}})
  - {{cssxref("text-shadow")}}
  - {{cssxref("text-transform")}}

- Das [SVG](/de/docs/Web/SVG) {{SVGAttr("text-rendering")}} Attribut
- [SVG und CSS](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS)
