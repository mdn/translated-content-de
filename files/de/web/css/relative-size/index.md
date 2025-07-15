---
title: <relative-size>
slug: Web/CSS/relative-size
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<relative-size>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) beschreibt relative Größen-Schlüsselwörter. Die `<relative-size>`-Schlüsselwörter definieren eine Größe relativ zur berechneten Größe des Elternelements. Dieser Datentyp wird in den {{cssxref("font")}}-Shorthand- und {{cssxref("font-size")}}-Eigenschaften verwendet.

## Syntax

```plain
<relative-size> = smaller | larger
```

### Werte

Der `<relative-size>`-Datentyp wird durch die Auswahl eines Schlüsselwortes aus der unten stehenden Liste definiert.

- `smaller`
  - : Eine relative Größe, die eine Stufe kleiner als die geerbte Größe ist.

- `larger`
  - : Eine relative Größe, die eine Stufe größer als die geerbte Größe ist.

## Beschreibung

Die `<relative-size>`-Schlüsselwörter sind relativ zur aktuellen Größe des Elements. Wenn die geerbte Größe mithilfe eines {{cssxref("absolute-size")}}-Schlüsselwortes definiert ist, entspricht der `<relative-size>`-Wert der benachbarten Größe in der [`<absolute-size>`-Tabelle](/de/docs/Web/CSS/absolute-size#description). Andernfalls liegt die relative Zunahme oder Abnahme der Größe zwischen 120 % und 150 %.

## Beispiele

### Vergleich der Schlüsselwortwerte

```html
<ul>
  <li class="smaller">font-size: smaller;</li>
  <li>font-size is not specified</li>
  <li class="larger">font-size: larger;</li>
</ul>
```

```css
li {
  margin-bottom: 0.3em;
}
.smaller {
  font-size: smaller;
}
.larger {
  font-size: larger;
}
```

#### Ergebnis

{{EmbedLiveSample('Comparing the keyword values', '100%', 100)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS {{cssxref("absolute-size")}} Datentyp
- CSS {{cssxref("font")}} und {{cssxref("font-size")}} Eigenschaften
- [CSS Schriften](/de/docs/Web/CSS/CSS_fonts) Modul
