---
title: "`<relative-size>` CSS-Typ"
short-title: <relative-size>
slug: Web/CSS/Reference/Values/relative-size
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<relative-size>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) beschreibt relative Größen-Schlüsselwörter. Die `<relative-size>`-Schlüsselwörter definieren eine Größe relativ zur berechneten Größe des Elternelements. Dieser Datentyp wird in den Eigenschaften {{cssxref("font")}} und {{cssxref("font-size")}} verwendet.

## Syntax

```plain
<relative-size> = smaller | larger
```

### Werte

Der `<relative-size>`-Datentyp wird mit einem Schlüsselwortwert definiert, der aus der folgenden Liste ausgewählt wird.

- `smaller`
  - : Eine relative Größe, die eine Größe kleiner als die geerbte Größe ist.

- `larger`
  - : Eine relative Größe, die eine Größe größer als die geerbte Größe ist.

## Beschreibung

Die `<relative-size>`-Schlüsselwörter sind relativ zur aktuellen Größe des Elements. Wenn die geerbte Größe unter Verwendung eines {{cssxref("absolute-size")}}-Schlüsselworts definiert ist, entspricht der `<relative-size>`-Wert der angrenzenden Größe in der [`<absolute-size>`-Tabelle](/de/docs/Web/CSS/Reference/Values/absolute-size#description). Andernfalls liegt die relative Vergrößerung oder Verkleinerung der Größe zwischen 120 % und 150 %.

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

- CSS-Datentyp {{cssxref("absolute-size")}}
- CSS-{{cssxref("font")}}- und {{cssxref("font-size")}}-Eigenschaften
- [CSS-Schriftarten](/de/docs/Web/CSS/Guides/Fonts)-Modul
