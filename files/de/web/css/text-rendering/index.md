---
title: text-rendering
slug: Web/CSS/text-rendering
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`text-rendering`** [CSS](/de/docs/Web/CSS) Eigenschaft stellt der Rendering-Engine Informationen darüber bereit, worauf beim Rendern von Text optimiert werden soll.

Der Browser trifft Abwägungen zwischen Geschwindigkeit, Lesbarkeit und geometrischer Präzision.

> [!NOTE]
> Die Eigenschaft `text-rendering` ist eine SVG-Eigenschaft, die in keinem CSS-Standard definiert ist. Allerdings erlauben Gecko- und WebKit-Browser die Anwendung dieser Eigenschaft auf HTML- und XML-Inhalte unter Windows, macOS und Linux.

Ein sehr sichtbarer Effekt ist `optimizeLegibility`, das Ligaturen (ff, fi, fl, usw.) in Texten kleiner als 20px für einige Schriftarten aktiviert (zum Beispiel Microsofts _Calibri_, _Candara_, _Constantia_, und _Corbel_, oder die _DejaVu_ Schriftfamilie).

## Syntax

```css
/* Schlüsselwort-Werte */
text-rendering: auto;
text-rendering: optimizeSpeed;
text-rendering: optimizeLegibility;
text-rendering: geometricPrecision;

/* Globale Werte */
text-rendering: inherit;
text-rendering: initial;
text-rendering: revert;
text-rendering: revert-layer;
text-rendering: unset;
```

### Werte

- `auto`
  - : Der Browser trifft fundierte Entscheidungen darüber, wann er beim Zeichnen von Text auf Geschwindigkeit, Lesbarkeit und geometrische Präzision optimieren soll. Unterschiede, wie dieser Wert vom Browser interpretiert wird, finden Sie in der Kompatibilitätstabelle.
- `optimizeSpeed`
  - : Der Browser legt den Schwerpunkt auf die Rendergeschwindigkeit vor Lesbarkeit und geometrischer Präzision beim Zeichnen von Text. Es deaktiviert Kerning und Ligaturen.
- `optimizeLegibility`
  - : Der Browser legt den Schwerpunkt auf Lesbarkeit vor Rendergeschwindigkeit und geometrischer Präzision. Dies aktiviert Kerning und optionale Ligaturen.
- `geometricPrecision`

  - : Der Browser legt den Schwerpunkt auf geometrische Präzision vor Rendergeschwindigkeit und Lesbarkeit. Bestimmte Aspekte von Schriftarten — wie Kerning — skalieren nicht linear. Daher kann dieser Wert Text unter Verwendung dieser Schriftarten gut aussehen lassen.

    In SVG, wenn Text vergrößert oder verkleinert wird, berechnen Browser die endgültige Größe des Textes (welche durch die angegebene Schriftgröße und den angewendeten Maßstab bestimmt wird) und fordern eine Schrift der berechneten Größe vom Schriftsystem der Plattform an. Aber wenn Sie eine Schriftgröße von beispielsweise 9 mit einem Maßstab von 140% anfordern, existiert die resultierende Schriftgröße von 12.6 nicht explizit im Schriftsystem, also rundet der Browser die Schriftgröße auf 12 auf. Dies führt zu einer treppenartigen Skalierung von Text.

    Aber die `geometricPrecision`-Eigenschaft — wenn vollständig von der Rendering-Engine unterstützt — ermöglicht Ihnen, Ihren Text flüssig zu skalieren. Bei großen Skalierungsfaktoren könnten Sie eine weniger schöne Textrendering sehen, aber die Größe ist wie erwartet — weder nach oben noch unten zur nächsten vom Betriebssystem unterstützten Schriftgröße gerundet.

    > [!NOTE]
    > WebKit wendet den spezifizierten Wert genau an, aber Gecko behandelt den Wert genauso wie `optimizeLegibility`.

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

- [Text auf einem `<canvas>` zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [CSS Textdekoration](/de/docs/Web/CSS/CSS_text_decoration) CSS Modul
- Verwandte CSS-Eigenschaften

  - [`text-decoration`](/de/docs/Web/CSS/text-decoration) (und dessen überschriebene Eigenschaften wie [`text-decoration-line`](/de/docs/Web/CSS/text-decoration-line), [`text-decoration-style`](/de/docs/Web/CSS/text-decoration-style), und [`text-decoration-thickness`](/de/docs/Web/CSS/text-decoration-thickness))
  - [`text-emphasis`](/de/docs/Web/CSS/text-emphasis) (und dessen überschriebene Eigenschaften, einschließlich [`text-emphasis-color`](/de/docs/Web/CSS/text-emphasis-color), [`text-emphasis-position`](/de/docs/Web/CSS/text-emphasis-position), und [`text-emphasis-style`](/de/docs/Web/CSS/text-emphasis-style))
  - [`text-shadow`](/de/docs/Web/CSS/text-shadow)
  - [`text-transform`](/de/docs/Web/CSS/text-transform)

- Das [SVG](/de/docs/Web/SVG) {{SVGAttr("text-rendering")}} Attribut
- [SVG und CSS](/de/docs/Web/SVG/Tutorial/SVG_and_CSS)
