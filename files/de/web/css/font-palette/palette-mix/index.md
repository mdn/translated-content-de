---
title: palette-mix()
slug: Web/CSS/font-palette/palette-mix
l10n:
  sourceCommit: 879e0a9c9d60831afcc7f66ea1b5f43ea0cd4361
---

{{CSSRef}}{{SeeCompatTable}}

Die **`palette-mix()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) kann verwendet werden, um einen neuen {{cssxref("font-palette")}}-Wert zu erstellen, indem zwei `font-palette`-Werte durch angegebene Prozentsätze und Farbinterpolationsmethoden miteinander gemischt werden.

## Syntax

```css
/* Mischen von schriftdefinierten Paletten */
font-palette: palette-mix(in lch, normal, dark)

/* Mischen von benutzerdefinierten Paletten */
font-palette: palette-mix(in lch, --blues, --yellows)

/* Unterschiedliche Prozentsätze jeder gemischten Palette */
font-palette: palette-mix(in lch, --blues 50%, --yellows 50%)
font-palette: palette-mix(in lch, --blues 70%, --yellows 30%)

/* Unterschiedliche Farbinterpolationsmethoden */
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
  - : Ein {{cssxref("&lt;color-interpolation-method&gt;")}} der den Interpolationsfarbraum spezifiziert.
- `palette1`, `palette2`
  - : Die {{cssxref("font-palette")}}-Werte, die gemischt werden sollen. Diese können _beliebige_ `font-palette`-Werte sein, einschließlich `palette-mix()`-Funktionen, `normal`, `dark` und `light`.
- `p1`, `p2` {{optional_inline}}

  - : {{cssxref("&lt;percentage&gt;")}}-Werte zwischen `0%` und `100%`, die die Menge jeder zu mischenden Palette spezifizieren. Sie werden wie folgt normalisiert:

    - Wenn sowohl `p1` als auch `p2` weggelassen werden, dann `p1 = p2 = 50%`.
    - Wenn `p1` weggelassen wird, dann `p1 = 100% - p2`.
    - Wenn `p2` weggelassen wird, dann `p2 = 100% - p1`.
    - Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
    - Wenn `p1 + p2 ≠ 100%`, dann `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Ergebnisse der Normalisierung sind.

## Beispiele

### Verwenden von `palette-mix()` zum Mischen zweier Paletten

Dieses Beispiel zeigt, wie die `palette-mix()`-Funktion verwendet wird, um durch Mischen zweier anderer eine neue Palette zu erstellen.

#### HTML

Das HTML enthält drei Absätze, auf die wir unsere Schriftinformationen anwenden:

```html
<p class="yellowPalette">Gelbe Palette</p>
<p class="bluePalette">Blaue Palette</p>
<p class="mixedPalette">Gemischte Palette</p>
```

#### CSS

Im CSS importieren wir eine Farbschriftart von Google Fonts und definieren zwei benutzerdefinierte `font-palette`-Werte mit der {{cssxref("@font-palette-values")}} at-rule. Wir wenden dann drei verschiedene `font-palette`-Werte auf die Absätze an — `--yellow`, `--blue` und eine neue grüne Palette, die mit `palette-mix()` durch Mischen der blauen und gelben Paletten erstellt wurde.

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
  font-family: "Nabla";
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

Die Ausgabe sieht folgendermaßen aus:

{{EmbedLiveSample("Using `palette-mix()` to blend two palettes", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-palette")}}
- {{cssxref("@font-palette-values", "@font-palette-values")}}
- {{cssxref("color_value/color-mix", "color-mix()")}}
- [CSS Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values) Leitfaden
- {{glossary("Color space")}}
