---
title: <filter-function>
slug: Web/CSS/filter-function
l10n:
  sourceCommit: e9206dfb180daef7922487a99706b6ca82e4e34d
---

{{CSSRef}}

Der **`<filter-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen grafischen Effekt, der das Erscheinungsbild eines Eingabebildes verändern kann. Er wird in den Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet.

## Syntax

Der `<filter-function>`-Datentyp wird durch eine der unten aufgelisteten Filterfunktionen angegeben. Jede Funktion erfordert ein Argument, das, wenn es ungültig ist, dazu führt, dass kein Filter angewendet wird.

- {{cssxref("filter-function/blur", "blur()")}}
  - : Weichzeichnet das Bild.
- {{cssxref("filter-function/brightness", "brightness()")}}
  - : Hellt das Bild auf oder verdunkelt es.
- {{cssxref("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Kontrast des Bildes.
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - : Fügt einen Schatten hinter dem Bild hinzu.
- {{cssxref("filter-function/grayscale", "grayscale()")}}
  - : Konvertiert das Bild in Graustufen.
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert den Gesamthue des Bildes.
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

### Vergleich von Filterfunktionen

Dieses Beispiel zeigt eine einfache Grafik zusammen mit einem Auswahlmenü, das es Ihnen ermöglicht, zwischen den verschiedenen Arten von Filterfunktionen zu wählen, und einem Schieberegler, mit dem Sie die Werte innerhalb der Filterfunktion variieren können. Wenn Sie die Steuerungen aktualisieren, wird der Filtereffekt in Echtzeit aktualisiert, was es Ihnen ermöglicht, die Effekte verschiedener Filter zu untersuchen.

```css
div {
  width: 300px;
  height: 300px;
  background: url(firefox.png) no-repeat center;
  filter: <filter-function>(<value>);
}
```

Wo der `<filter-function>` der Filter ist, den Sie aus dem Drop-Down-Menü auswählen, und der `<value>` die Werte sind, die Sie mit dem Schieberegler einstellen:
'
{{EmbedGHLiveSample("css-examples/types/filterfunctions.html", '100%', '500')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("filter")}} und {{cssxref("backdrop-filter")}}
