---
title: <relative-size>
slug: Web/CSS/relative-size
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<relative-size>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) beschreibt Schlüsselwörter für relative Größen. Die `<relative-size>`-Schlüsselwörter definieren eine Größe relativ zur berechneten Größe des übergeordneten Elements. Dieser Datentyp wird in der {{cssxref("font")}}-Kurzform und den {{cssxref("font-size")}}-Eigenschaften verwendet.

## Syntax

```plain
<relative-size> = smaller | larger
```

### Werte

Der `<relative-size>`-Datentyp wird mit einem Schlüsselwortwert definiert, der aus der unten stehenden Liste ausgewählt wird.

- `smaller`

  - : Eine relative Größe, eine Größe kleiner als die vererbte Größe.

- `larger`

  - : Eine relative Größe, eine Größe größer als die vererbte Größe.

## Beschreibung

Die `<relative-size>`-Schlüsselwörter sind relativ zur aktuellen Größe des Elements. Wenn die vererbte Größe mit einem {{cssxref("absolute-size")}}-Schlüsselwort definiert ist, entspricht der `<relative-size>`-Wert der angrenzenden Größe in der [`<absolute-size>`-Tabelle](/de/docs/Web/CSS/absolute-size#description). Andernfalls liegt die relative Vergrößerung oder Verkleinerung der Größe zwischen 120 % und 150 %.

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
- [CSS-Schriften](/de/docs/Web/CSS/CSS_fonts) Modul
