---
title: palette-mix()
slug: Web/CSS/font-palette/palette-mix
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Die **`palette-mix()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann verwendet werden, um einen neuen {{cssxref("font-palette")}} Wert zu erstellen, indem zwei `font-palette` Werte nach angegebenen Prozentanteilen und Farbinterpolationsmethoden gemischt werden.

## Syntax

```css
/* Blending font-defined palettes */
font-palette: palette-mix(in lch, normal, dark)

/* Blending author-defined palettes */
font-palette: palette-mix(in lch, --blues, --yellows)

/* Varying percentage of each palette mixed */
font-palette: palette-mix(in lch, --blues 50%, --yellows 50%)
font-palette: palette-mix(in lch, --blues 70%, --yellows 30%)

/* Varying color interpolation method */
font-palette: palette-mix(in srgb, --blues, --yellows)
font-palette: palette-mix(in hsl, --blues, --yellows)
font-palette: palette-mix(in hsl shorter hue, --blues, --yellows)

```

### Werte

Funktionale Notation:

```plain
palette-mix(method, palette1 [p1], palette2 [p2])
```

- `method`
  - : Eine {{cssxref("&lt;color-interpolation-method&gt;")}}, die den Interpolationsfarbraum spezifiziert.
- `palette1`, `palette2`
  - : Die zu mischenden {{cssxref("font-palette")}} Werte. Diese können _beliebige_ `font-palette` Werte sein, einschließlich `palette-mix()` Funktionen, `normal`, `dark` und `light`.
- `p1`, `p2` {{optional_inline}}
  - : {{cssxref("&lt;percentage&gt;")}} Werte zwischen `0%` und `100%`, die die Mischmenge jeder Palette angeben. Sie werden wie folgt normalisiert:
    - Wenn sowohl `p1` als auch `p2` weggelassen werden, dann gilt `p1 = p2 = 50%`.
    - Wenn `p1` weggelassen wird, gilt `p1 = 100% - p2`.
    - Wenn `p2` weggelassen wird, gilt `p2 = 100% - p1`.
    - Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
    - Wenn `p1 + p2 ≠ 100%`, dann gilt `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsergebnisse sind.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von `palette-mix()` zum Mischen von zwei Paletten

Dieses Beispiel zeigt, wie die Funktion `palette-mix()` verwendet wird, um eine neue Palette zu erstellen, indem zwei andere gemischt werden.

#### HTML

Das HTML enthält drei Absätze, auf die unsere Schriftinformationen angewendet werden sollen:

```html
<p class="yellowPalette">Yellow palette</p>
<p class="bluePalette">Blue palette</p>
<p class="mixedPalette">Mixed palette</p>
```

#### CSS

Im CSS importieren wir eine Farbschriftart von Google Fonts und definieren zwei benutzerdefinierte `font-palette` Werte mit der {{cssxref("@font-palette-values")}} At-Regel. Wir wenden dann drei verschiedene `font-palette` Werte auf die Absätze an — `--yellow`, `--blue` und eine neue grüne Palette, die mit `palette-mix()` erstellt wird, um die blauen und gelben Paletten miteinander zu mischen.

```css
@import url("https://fonts.googleapis.com/css2?family=Nabla&display=swap");

@font-palette-values --blueNabla {
  font-family: Nabla;
  base-palette: 2; /* this is Nabla's blue palette */
}

@font-palette-values --yellowNabla {
  font-family: Nabla;
  base-palette: 7; /* this is Nabla's yellow palette */
}

p {
  font-family: "Nabla", fantasy;
  font-size: 4rem;
  text-align: center;
  margin: 0;
}

.yellowPalette {
  font-palette: --yellowNabla;
}

.bluePalette {
  font-palette: --blueNabla;
}

.mixedPalette {
  font-palette: palette-mix(in lch, --blueNabla 55%, --yellowNabla 45%);
}
```

#### Ergebnis

Die Ausgabe sieht wie folgt aus:

{{EmbedLiveSample("Verwendung von `palette-mix()` zum Mischen von zwei Paletten", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-palette")}}
- {{cssxref("@font-palette-values", "@font-palette-values")}}
- {{cssxref("color_value/color-mix", "color-mix()")}}
- [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values)
- {{Glossary("Color_space", "Farbraum")}}
