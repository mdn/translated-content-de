---
title: <filter-function>
slug: Web/CSS/filter-function
l10n:
  sourceCommit: e9206dfb180daef7922487a99706b6ca82e4e34d
---

{{CSSRef}}

Der **`<filter-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen grafischen Effekt, der das Erscheinungsbild eines Eingabebildes verändern kann. Er wird in den Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet.

## Syntax

Der `<filter-function>`-Datentyp wird unter Verwendung einer der unten aufgeführten Filterfunktionen angegeben. Jede Funktion erfordert ein Argument, das, wenn es ungültig ist, dazu führt, dass kein Filter angewendet wird.

- {{cssxref("filter-function/blur", "blur()")}}
  - : Weichzeichnet das Bild.
- {{cssxref("filter-function/brightness", "brightness()")}}
  - : Macht das Bild heller oder dunkler.
- {{cssxref("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Kontrast des Bildes.
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - : Wendet einen Schlagschatten hinter dem Bild an.
- {{cssxref("filter-function/grayscale", "grayscale()")}}
  - : Konvertiert das Bild in Graustufen.
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert die Gesamtfarbton des Bildes.
- {{cssxref("filter-function/invert", "invert()")}}
  - : Invertiert die Farben des Bildes.
- {{cssxref("filter-function/opacity", "opacity()")}}
  - : Macht das Bild transparent.
- {{cssxref("filter-function/saturate", "saturate()")}}
  - : Übersättigt oder entsättigt das Eingabebild.
- {{cssxref("filter-function/sepia", "sepia()")}}
  - : Konvertiert das Bild in Sepia.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der Filterfunktionen

Dieses Beispiel bietet eine einfache Grafik sowie ein Auswahlmenü, mit dem Sie zwischen den verschiedenen Filterfunktionstypen wählen können, und einen Schieberegler, mit dem Sie die in der Filterfunktion verwendeten Werte variieren können. Durch das Aktualisieren der Bedienelemente wird der Filtereffekt in Echtzeit aktualisiert, sodass Sie die Effekte verschiedener Filter untersuchen können.

```css
div {
  width: 300px;
  height: 300px;
  background: url(firefox.png) no-repeat center;
  filter: <filter-function>(<value>);
}
```

Wobei die `<filter-function>` der Filter ist, den Sie aus dem Dropdown auswählen, und der `<value>` die Werte sind, die Sie mit dem Schieberegler einstellen:
'
{{EmbedGHLiveSample("css-examples/types/filterfunctions.html", '100%', '500')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("filter")}} und {{cssxref("backdrop-filter")}}
