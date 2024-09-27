---
title: <relative-size>
slug: Web/CSS/relative-size
l10n:
  sourceCommit: e97c79b17d685c08bef41ffc0b6c2f9e5ddc42f4
---

{{CSSRef}}

Der **`<relative-size>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) beschreibt relative Größen-Schlüsselwörter. Die `<relative-size>` Schlüsselwörter definieren eine Größe relativ zur berechneten Größe des übergeordneten Elements. Dieser Datentyp wird in den {{cssxref("font")}}-Zusammenfassungs- und {{cssxref("font-size")}}-Eigenschaften verwendet.

## Syntax

```plain
<relative-size> = smaller | larger
```

### Werte

Der `<relative-size>` Datentyp wird durch ein Schlüsselwort aus der folgenden Liste definiert.

- `smaller`

  - : Eine relative Größe, die eine Nummer kleiner als die geerbte Größe ist.

- `larger`

  - : Eine relative Größe, die eine Nummer größer als die geerbte Größe ist.

## Beschreibung

Die `<relative-size>` Schlüsselwörter beziehen sich auf die aktuelle Größe des Elements. Wenn die geerbte Größe mit einem {{cssxref("absolute-size")}} Schlüsselwort definiert ist, entspricht der `<relative-size>` Wert der angrenzenden Größe in der [`<absolute-size>` Tabelle](/de/docs/Web/CSS/absolute-size#description). Andernfalls liegt die relative Vergrößerung oder Verkleinerung der Größe zwischen 120% und 150%.

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
