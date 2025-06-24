---
title: <relative-size>
slug: Web/CSS/relative-size
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Der **`<relative-size>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) beschreibt relative Größenstichwörter. Die `<relative-size>`-Stichwörter definieren eine Größe relativ zur berechneten Größe des Elternelements. Dieser Datentyp wird in der {{cssxref("font")}}-Kurzform und den {{cssxref("font-size")}}-Eigenschaften verwendet.

## Syntax

```plain
<relative-size> = smaller | larger
```

### Werte

Der `<relative-size>`-Datentyp wird durch einen aus der folgenden Liste ausgewählten Stichwortwert definiert.

- `smaller`

  - : Eine relative Größe, die eine Stufe kleiner als die geerbte Größe ist.

- `larger`
  - : Eine relative Größe, die eine Stufe größer als die geerbte Größe ist.

## Beschreibung

Die `<relative-size>`-Stichwörter beziehen sich auf die aktuelle Größe des Elements. Wenn die geerbte Größe mit einem {{cssxref("absolute-size")}}-Stichwort definiert ist, entspricht der `<relative-size>`-Wert der angrenzenden Größe in der [`<absolute-size>`-Tabelle](/de/docs/Web/CSS/absolute-size#description). Andernfalls liegt die relative Vergrößerung oder Verkleinerung der Größe zwischen 120 % und 150 %.

## Beispiele

### Vergleich der Stichwortwerte

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
- [CSS fonts](/de/docs/Web/CSS/CSS_fonts) Modul
