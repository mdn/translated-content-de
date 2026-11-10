---
title: "`text-rendering` CSS property"
short-title: text-rendering
slug: Web/CSS/Reference/Properties/text-rendering
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-rendering`** gibt der Rendering-Engine Hinweise darauf, worauf sie beim Rendern von Text optimieren soll.

Der Browser wägt dabei Geschwindigkeit, Lesbarkeit und geometrische Präzision gegeneinander ab.

> [!NOTE]
> Die Eigenschaft `text-rendering` stammt aus SVG und ist in keinem CSS-Standard definiert. Gecko- und WebKit-Browser ermöglichen jedoch, diese Eigenschaft unter Windows, macOS und Linux auf HTML- und XML-Inhalte anzuwenden.

Ein besonders sichtbarer Effekt ist `optimizeLegibility`: Bei einigen Schriftarten werden dadurch Ligaturen (ff, fi, fl usw.) für Text aktiviert, der kleiner als 20px ist. Dazu gehören beispielsweise Microsofts _Calibri_, _Candara_, _Constantia_ und _Corbel_ sowie die Schriftfamilie _DejaVu_.

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
  - : Der Browser entscheidet beim Zeichnen von Text anhand von Heuristiken, wann er auf Geschwindigkeit, Lesbarkeit oder geometrische Präzision optimiert. Unterschiede bei der Interpretation dieses Werts durch Browser finden Sie in der Kompatibilitätstabelle.

    Der Wert `auto` ist eine gute Standardeinstellung, um Qualität und Leistung in Einklang zu bringen, insbesondere bei längeren Fließtexten.

- `optimizeSpeed`
  - : Der Browser gibt beim Zeichnen von Text der Rendering-Geschwindigkeit Vorrang vor Lesbarkeit und geometrischer Präzision. Kerning und Ligaturen werden deaktiviert.

    Der Wert `optimizeSpeed` ist bei begrenzten Ressourcen vorzuziehen, etwa bei langsamen Prozessoren oder niedrigem Akkustand.

- `optimizeLegibility`
  - : Der Browser gibt der Lesbarkeit Vorrang vor Rendering-Geschwindigkeit und geometrischer Präzision. Dadurch werden Kerning und optionale Ligaturen aktiviert.

    Der Wert `optimizeLegibility` eignet sich für groß dargestellte Texte mit wenig Inhalt, etwa Überschriften oder Banner, um deren Lesbarkeit zu verbessern. Er kann auch für hochwertige professionelle Typografie verwendet werden, beispielsweise für veröffentlichte Artikel. Für gewöhnliche Artikel wird er wegen möglicher Leistungseinbußen nicht empfohlen.

- `geometricPrecision`
  - : Der Browser gibt der geometrischen Präzision Vorrang vor Rendering-Geschwindigkeit und Lesbarkeit. Bestimmte Eigenschaften von Schriftarten – etwa Kerning – skalieren nicht linear. Dieser Wert kann daher dafür sorgen, dass Text in solchen Schriftarten gut aussieht.

    Wenn Text in SVG vergrößert oder verkleinert wird, berechnen Browser seine endgültige Größe (aus der angegebenen Schriftgröße und dem angewendeten Skalierungsfaktor) und fordern beim Schriftsystem der Plattform eine Schrift in dieser berechneten Größe an. Wenn Sie jedoch beispielsweise eine Schriftgröße von 9 mit einer Skalierung von 140 % anfordern, ist die resultierende Schriftgröße von 12,6 im Schriftsystem nicht ausdrücklich vorhanden. Der Browser rundet die Schriftgröße daher stattdessen auf 12 ab. Dadurch wird Text stufenweise skaliert.

    Die Eigenschaft `geometricPrecision` ermöglicht es Ihnen dagegen, Text stufenlos zu skalieren – sofern die Rendering-Engine sie vollständig unterstützt. Bei großen Skalierungsfaktoren sieht das Textrendering möglicherweise weniger ansprechend aus, aber die Größe entspricht dem erwarteten Wert: Sie wird weder auf die nächstgrößere noch auf die nächstkleinere von Windows oder Linux unterstützte Schriftgröße gerundet.

    Der Wert `geometricPrecision` optimiert weder die Lesbarkeit noch die Leistung. Er ist vor allem in SVG sinnvoll, wenn eine Grafik maßstabsgetreu skaliert werden soll, ohne die Textabmessungen zu verzerren.

    > [!NOTE]
    > WebKit wendet den angegebenen Wert präzise an, Gecko behandelt ihn jedoch genauso wie `optimizeLegibility`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Automatische Anwendung von optimizeLegibility

Dieses Beispiel zeigt, wie Browser `optimizeLegibility` automatisch verwenden, wenn `font-size` kleiner als `20px` ist.

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

### optimizeSpeed im Vergleich zu optimizeLegibility

Dieses Beispiel zeigt den Unterschied im Erscheinungsbild zwischen `optimizeSpeed` und `optimizeLegibility` (in Ihrem Browser; andere Browser können abweichen).

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

{{ EmbedLiveSample('optimizespeed_vs._optimizelegibility') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Text in einem `<canvas>` zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- CSS-Modul [CSS Text Decoration](/de/docs/Web/CSS/Guides/Text_decoration)
- Verwandte CSS-Eigenschaften
  - {{cssxref("text-decoration")}} (und die zugehörigen Einzel-Eigenschaften, etwa {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-thickness")}})
  - {{cssxref("text-emphasis")}} (und die zugehörigen Einzel-Eigenschaften, darunter {{cssxref("text-emphasis-color")}}, {{cssxref("text-emphasis-position")}} und {{cssxref("text-emphasis-style")}})
  - {{cssxref("text-shadow")}}
  - {{cssxref("text-transform")}}

- Das {{SVGAttr("text-rendering")}}-Attribut von [SVG](/de/docs/Web/SVG)
- [SVG und CSS](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS)
