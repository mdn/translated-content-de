---
title: <relative-size>
slug: Web/CSS/Reference/Values/relative-size
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<relative-size>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) beschreibt relative Größen-Schlüsselwörter. Die `<relative-size>` Schlüsselwörter definieren eine Größe relativ zur berechneten Größe des Elternelements. Dieser Datentyp wird in den {{cssxref("font")}} und {{cssxref("font-size")}} Eigenschaften verwendet.

## Syntax

```plain
<relative-size> = smaller | larger
```

### Werte

Der `<relative-size>` Datentyp wird durch ein Schlüsselwort aus der folgenden Liste definiert.

- `smaller`

  - : Eine relative Größe, eine Größe kleiner als die geerbte Größe.

- `larger`
  - : Eine relative Größe, eine Größe größer als die geerbte Größe.

## Beschreibung

Die `<relative-size>` Schlüsselwörter sind relativ zur aktuellen Größe des Elements. Wenn die geerbte Größe mithilfe eines {{cssxref("absolute-size")}} Schlüsselworts definiert ist, entspricht der `<relative-size>` Wert der angrenzenden Größe in der [`<absolute-size>` Tabelle](/de/docs/Web/CSS/Reference/Values/absolute-size#description). Andernfalls liegt die relative Vergrößerung oder Verkleinerung der Größe zwischen 120% und 150%.

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
- [CSS Schriftarten](/de/docs/Web/CSS/Guides/Fonts) Modul
