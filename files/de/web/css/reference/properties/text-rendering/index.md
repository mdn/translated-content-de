---
title: text-rendering
slug: Web/CSS/Reference/Properties/text-rendering
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`text-rendering`** [CSS](/de/docs/Web/CSS)-Eigenschaft liefert der Rendering-Engine Informationen darüber, worauf beim Rendern von Text optimiert werden soll.

Der Browser trifft Abwägungen zwischen Geschwindigkeit, Lesbarkeit und geometrischer Präzision.

> [!NOTE]
> Die `text-rendering`-Eigenschaft ist eine SVG-Eigenschaft, die in keinem CSS-Standard definiert ist. Dennoch erlauben Gecko- und WebKit-Browser, diese Eigenschaft auf HTML- und XML-Inhalte in Windows, macOS und Linux anzuwenden.

Ein sehr sichtbarer Effekt ist `optimizeLegibility`, das Ligaturen (ff, fi, fl, etc.) in Texten aktiviert, die kleiner als 20px sind, für einige Schriftarten (zum Beispiel Microsofts _Calibri_, _Candara_, _Constantia_ und _Corbel_ oder die _DejaVu_-Schriftfamilie).

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
  - : Der Browser trifft fundierte Entscheidungen darüber, wann er beim Zeichnen von Text auf Geschwindigkeit, Lesbarkeit und geometrische Präzision optimieren soll. Für Unterschiede, wie dieser Wert vom Browser interpretiert wird, siehe die Kompatibilitätstabelle.

    Der Wert `auto` ist ein guter Standard für die Balance zwischen Qualität und Leistung, insbesondere für längere Absätze von einfachem Text.

- `optimizeSpeed`
  - : Der Browser legt den Schwerpunkt auf die Rendergeschwindigkeit und nicht auf Lesbarkeit oder geometrische Präzision beim Zeichnen von Text. Es deaktiviert Kerning und Ligaturen.

    Der Wert `optimizeSpeed` ist in ressourcenbeschränkten Rendering-Szenarien vorzuziehen, wie bei langsamen Prozessoren oder schwacher Batterie.

- `optimizeLegibility`
  - : Der Browser legt den Schwerpunkt auf Lesbarkeit und nicht auf Rendergeschwindigkeit oder geometrische Präzision. Dies aktiviert Kerning und optionale Ligaturen.

    Der Wert `optimizeLegibility` ist vorzuziehen für Texte, die groß sind, aber wenig Inhalt haben, wie Überschriften oder Banner, um deren Lesbarkeit zu verbessern. Er könnte auch für qualitativ hochwertige professionelle Typografie verwendet werden, wie veröffentlichte Artikel. Für typische Artikel wird es aufgrund möglicher Leistungseinbußen nicht empfohlen.

- `geometricPrecision`
  - : Der Browser legt den Schwerpunkt auf geometrische Präzision und nicht auf Rendergeschwindigkeit oder Lesbarkeit. Bestimmte Aspekte von Schriften, wie Kerning, skalieren nicht linear. Dieser Wert kann also Text bei Verwendung dieser Schriften gut aussehen lassen.

    In SVG, wenn Text vergrößert oder verkleinert wird, berechnen Browser die endgültige Größe des Textes (die durch die festgelegte Schriftgröße und die angewandte Skalierung bestimmt wird) und fordern eine Schriftart dieser berechneten Größe vom Schriftsystem der Plattform an. Aber wenn Sie eine Schriftgröße von z. B. 9 bei einer Skalierung von 140 % anfordern, existiert die resultierende Schriftgröße von 12,6 nicht explizit im Schriftsystem, und so rundet der Browser die Schriftgröße auf 12. Dies führt zu einer stufenweisen Skalierung des Textes.

    Aber die `geometricPrecision`-Eigenschaft — wenn vollständig von der Rendering-Engine unterstützt — lässt Sie Ihren Text flüssig skalieren. Bei großen Skalierungsfaktoren könnten Sie weniger schöne Textdarstellungen sehen, aber die Größe ist, wie Sie es erwarten würden — weder auf- noch abgerundet auf die nächstgelegene Schriftgröße, die von Windows oder Linux unterstützt wird.

    Der Wert `geometricPrecision` optimiert weder die Lesbarkeit noch die Leistung. Es ist meist sinnvoll in SVG, wo Sie möchten, dass Ihre Grafik getreu skaliert wird, ohne die Textdimensionen zu verzerren.

    > [!NOTE]
    > WebKit wendet den angegebenen Wert präzise an, aber Gecko behandelt den Wert genauso wie `optimizeLegibility`.

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

- [Text in einem `<canvas>` zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [CSS Textdekoration](/de/docs/Web/CSS/Guides/Text_decoration) CSS-Modul
- Verwandte CSS-Eigenschaften
  - {{cssxref("text-decoration")}} (und deren Langformen, wie {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, und {{cssxref("text-decoration-thickness")}})
  - {{cssxref("text-emphasis")}} (und deren Langformen, einschließlich {{cssxref("text-emphasis-color")}}, {{cssxref("text-emphasis-position")}}, und {{cssxref("text-emphasis-style")}})
  - {{cssxref("text-shadow")}}
  - {{cssxref("text-transform")}}

- Das [SVG](/de/docs/Web/SVG) {{SVGAttr("text-rendering")}} Attribut
- [SVG und CSS](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS)
