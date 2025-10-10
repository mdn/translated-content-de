---
title: <relative-size>
slug: Web/CSS/relative-size
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<relative-size>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) beschreibt relative Größen-Schlüsselwörter. Die `<relative-size>` Schlüsselwörter definieren eine Größe relativ zur berechneten Größe des Elternelements. Dieser Datentyp wird in den {{cssxref("font")}} Shorthand- und {{cssxref("font-size")}} Eigenschaften verwendet.

## Syntax

```plain
<relative-size> = smaller | larger
```

### Werte

Der `<relative-size>` Datentyp wird mit einem Schlüsselwortwert aus der unten stehenden Liste definiert.

- `smaller`
  - : Eine relative Größe, die um eine Stufe kleiner ist als die vererbte Größe.

- `larger`
  - : Eine relative Größe, die um eine Stufe größer ist als die vererbte Größe.

## Beschreibung

Die `<relative-size>` Schlüsselwörter sind relativ zur aktuellen Größe des Elements. Wenn die vererbte Größe mit einem {{cssxref("absolute-size")}} Schlüsselwort definiert wird, entspricht der `<relative-size>` Wert der angrenzenden Größe in der [`<absolute-size>` Tabelle](/de/docs/Web/CSS/absolute-size#description). Andernfalls liegt die relative Vergrößerung oder Verkleinerung der Größe zwischen 120% und 150%.

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
- [CSS Schriftarten](/de/docs/Web/CSS/CSS_fonts) Modul
