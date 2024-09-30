---
title: text-rendering
slug: Web/CSS/text-rendering
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`text-rendering`** [CSS](/de/docs/Web/CSS) Eigenschaft liefert dem Rendering-Engine Informationen darüber, worauf bei der Wiedergabe von Text optimiert werden soll.

Der Browser geht Kompromisse zwischen Geschwindigkeit, Lesbarkeit und geometrischer Präzision ein.

> [!NOTE]
> Die `text-rendering` Eigenschaft ist eine SVG-Eigenschaft, die in keinem CSS-Standard definiert ist. Gecko- und WebKit-Browser erlauben jedoch die Anwendung dieser Eigenschaft auf HTML- und XML-Inhalte unter Windows, macOS und Linux.

Ein sehr sichtbarer Effekt ist `optimizeLegibility`, was Ligaturen (ff, fi, fl usw.) in Text unter 20px für einige Schriftarten aktiviert (z. B. Microsofts _Calibri_, _Candara_, _Constantia_ und _Corbel_ oder die _DejaVu_ Schriftfamilie).

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
  - : Der Browser trifft fundierte Annahmen darüber, wann Geschwindigkeit, Lesbarkeit und geometrische Präzision beim Zeichnen von Text optimiert werden sollten. Für Unterschiede in der Interpretation dieses Wertes durch den Browser, siehe die Kompatibilitätstabelle.
- `optimizeSpeed`
  - : Der Browser betont die Darstellungsgeschwindigkeit über Lesbarkeit und geometrische Präzision beim Zeichnen von Text. Es werden Kerning und Ligaturen deaktiviert.
- `optimizeLegibility`
  - : Der Browser betont die Lesbarkeit über Darstellungsgeschwindigkeit und geometrische Präzision. Dies aktiviert Kerning und optionale Ligaturen.
- `geometricPrecision`

  - : Der Browser betont die geometrische Präzision über Darstellungsgeschwindigkeit und Lesbarkeit. Bestimmte Aspekte von Schriften — wie Kerning — skalieren nicht linear. Dieser Wert kann den Text jedoch mit diesen Schriften gut aussehen lassen.

    In SVG kalkulieren Browser beim Hoch- oder Runterskalieren von Text die endgültige Größe des Textes (die durch die angegebene Schriftgröße und die angewandte Skalierung bestimmt wird) und fordern eine Schrift dieser berechneten Größe aus dem Schriftsystem der Plattform an. Wenn Sie jedoch eine Schriftgröße von, sagen wir, 9 mit einer Skalierung von 140% anfordern, existiert die resultierende Schriftgröße von 12,6 nicht explizit im Schriftsystem, sodass der Browser die Schriftgröße stattdessen auf 12 rundet. Dies führt zu treppenförmiger Skalierung des Textes.

    Aber die `geometricPrecision` Eigenschaft — wenn sie vom Rendering-Engine vollständig unterstützt wird — ermöglicht ein fließendes Skalieren Ihres Textes. Für große Skalierungsfaktoren kann es zu weniger schönen Textwiedergaben kommen, aber die Größe entspricht dem, was Sie erwarten würden — weder auf- noch abgerundet auf die nächstgelegene Schriftgröße, die Windows oder Linux unterstützt.

    > [!NOTE]
    > WebKit wendet den angegebenen Wert präzise an, aber Gecko behandelt den Wert wie `optimizeLegibility`.

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

Dieses Beispiel zeigt den Unterschied zwischen der Darstellung von `optimizeSpeed` und `optimizeLegibility` (in Ihrem Browser; andere Browser können variieren).

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

  - [`text-decoration`](/de/docs/Web/CSS/text-decoration) (und dessen Langform-Eigenschaften, wie [`text-decoration-line`](/de/docs/Web/CSS/text-decoration-line), [`text-decoration-style`](/de/docs/Web/CSS/text-decoration-style), und [`text-decoration-thickness`](/de/docs/Web/CSS/text-decoration-thickness))
  - [`text-emphasis`](/de/docs/Web/CSS/text-emphasis) (und dessen Langform-Eigenschaften, einschließlich [`text-emphasis-color`](/de/docs/Web/CSS/text-emphasis-color), [`text-emphasis-position`](/de/docs/Web/CSS/text-emphasis-position), und [`text-emphasis-style`](/de/docs/Web/CSS/text-emphasis-style))
  - [`text-shadow`](/de/docs/Web/CSS/text-shadow)
  - [`text-transform`](/de/docs/Web/CSS/text-transform)

- Das [SVG](/de/docs/Web/SVG) {{SVGAttr("text-rendering")}} Attribut
- [SVG und CSS](/de/docs/Web/SVG/Tutorial/SVG_and_CSS)
