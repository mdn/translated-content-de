---
title: <relative-size>
slug: Web/CSS/Reference/Values/relative-size
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<relative-size>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) beschreibt relative Größen-Keywords. Die `<relative-size>`-Keywords definieren eine Größe relativ zur berechneten Größe des Elternelements. Dieser Datentyp wird in den {{cssxref("font")}}-Shorthand- und {{cssxref("font-size")}}-Eigenschaften verwendet.

## Syntax

```plain
<relative-size> = smaller | larger
```

### Werte

Der `<relative-size>`-Datentyp wird durch einen ausgewählten Keyword-Wert aus der untenstehenden Liste definiert.

- `smaller`
  - : Eine relative Größe, die eine Stufe kleiner als die geerbte Größe ist.

- `larger`
  - : Eine relative Größe, die eine Stufe größer als die geerbte Größe ist.

## Beschreibung

Die `<relative-size>`-Keywords sind relativ zur aktuellen Größe des Elements. Wenn die geerbte Größe mit einem {{cssxref("absolute-size")}}-Keyword definiert ist, entspricht der `<relative-size>`-Wert der benachbarten Größe in der [`<absolute-size>`-Tabelle](/de/docs/Web/CSS/Reference/Values/absolute-size#description). Andernfalls liegt die relative Vergrößerung oder Verkleinerung zwischen 120% und 150%.

## Beispiele

### Vergleich der Keyword-Werte

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
- [CSS fonts](/de/docs/Web/CSS/CSS_fonts)-Modul
