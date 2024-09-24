---
title: <relative-size>
slug: Web/CSS/relative-size
l10n:
  sourceCommit: e97c79b17d685c08bef41ffc0b6c2f9e5ddc42f4
---

{{CSSRef}}

Der **`<relative-size>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) beschreibt relative Größen-Stichwörter. Die Stichwörter `<relative-size>` definieren eine Größe relativ zur berechneten Größe des Elternelements. Dieser Datentyp wird in den Eigenschaften {{cssxref("font")}} und {{cssxref("font-size")}} verwendet.

## Syntax

```plain
<relative-size> = smaller | larger
```

### Werte

Der `<relative-size>` Datentyp wird unter Verwendung eines Stichwortwertes definiert, der aus der unten stehenden Liste ausgewählt wird.

- `smaller`

  - : Eine relative Größe, die eine Größe kleiner als die geerbte Größe ist.

- `larger`

  - : Eine relative Größe, die eine Größe größer als die geerbte Größe ist.

## Beschreibung

Die `<relative-size>` Stichwörter sind relativ zur aktuellen Größe des Elements. Wenn die geerbte Größe mit einem {{cssxref("absolute-size")}} Stichwort definiert ist, entspricht der `<relative-size>` Wert der angrenzenden Größe in der [`<absolute-size>` Tabelle](/de/docs/Web/CSS/absolute-size#description). Andernfalls liegt die relative Zunahme oder Abnahme der Größe zwischen 120% und 150%.

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
- [CSS Fonts](/de/docs/Web/CSS/CSS_fonts) Modul
