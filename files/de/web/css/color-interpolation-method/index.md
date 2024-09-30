---
title: <color-interpolation-method>
slug: Web/CSS/color-interpolation-method
l10n:
  sourceCommit: 707a895d09555c873e5e7dbd28135381fde6d01e
---

{{CSSRef}}

Der **`<color-interpolation-method>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert den [Farbraum](/de/docs/Glossary/Color_space), der zur Interpolation zwischen {{CSSXref("&lt;color&gt;")}} Werten verwendet wird. Er kann genutzt werden, um den Standard-Interpolationsfarbraum für farbbezogene Funktionsnotationen wie {{CSSXref("color_value/color-mix", "color-mix()")}} und {{CSSXref("gradient/linear-gradient", "linear-gradient()")}} zu überschreiben.

Bei der Interpolation von `<color>` Werten ist der Standard-Interpolationsfarbraum Oklab.

## Syntax

Der `<color-interpolation-method>` gibt an, ob die Interpolation einen rechteckigen Farbraum oder einen polaren Farbraum mit einer optionalen Farbton-Interpolationsmethode verwenden soll:

```plain
in <rectangular-color-space>
// or
in <polar-color-space>[ <hue-interpolation method>]
```

### Werte

- `<rectangular-color-space>`

  - : Eines der Schlüsselwörter `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz`, `xyz-d50`, oder `xyz-d65`.

- `<polar-color-space>`

  - : Eines der Schlüsselwörter `hsl`, `hwb`, `lch`, oder `oklch`.

- {{CSSXref("&lt;hue-interpolation-method&gt;")}} {{optional_inline}}

  - : Der Algorithmus für die Farbtoninterpolation. Standardmäßig ist dies `shorter hue`.

- `<custom-color-space>`
  - : Ein [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident#using_with_color-profile), das auf ein benutzerdefiniertes [@color profile](/de/docs/Web/CSS/@color-profile) verweist.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich von Interpolationsfarbräumen mit Verläufen

Das folgende Beispiel zeigt die Wirkung der Nutzung unterschiedlicher Interpolationsfarbräume für {{CSSXref("gradient/linear-gradient", "linear-gradient()")}}.

#### HTML

```html
<div>sRGB:</div>
<div class="gradient srgb"></div>
<div>Oklab:</div>
<div class="gradient oklab"></div>
<div>Oklch (with <code>longer hue</code>):</div>
<div class="gradient oklch-longer"></div>
```

#### CSS

```css
.gradient {
  height: 50px;
  width: 100%;
}
.srgb {
  background-image: linear-gradient(in srgb to right, blue, red);
}
.oklab {
  background-image: linear-gradient(in oklab to right, blue, red);
}
.oklch-longer {
  background-image: linear-gradient(in oklch longer hue to right, blue, red);
}
```

#### Ergebnis

{{EmbedLiveSample("comparing_interpolation_color_spaces_using_gradients", "100%", 250)}}

### Farbinterpolation in sich wiederholenden Verläufen

Das folgende Beispiel zeigt, wie man einen Farbraum angibt, wenn man Farben in sich wiederholenden Verläufen interpoliert.
Drei Kästen zeigen verschiedene Typen von sich wiederholenden Verläufen mit den Funktionen [`repeating-conic-gradient()`](/de/docs/Web/CSS/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient), und [`repeating-radial-gradient()`](/de/docs/Web/CSS/gradient/repeating-radial-gradient).
Der erste Kasten verwendet den Lab-Farbraum, um zwischen zwei Farbwerten zu interpolieren.
Die zweiten und dritten Kästen verwenden Oklch und geben zusätzlich eine [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method) an, um zu spezifizieren, wie zwischen Farbtonwerten interpoliert werden soll.

#### HTML

```html
<div class="gradient conic">conic</div>
<div class="gradient linear">linear</div>
<div class="gradient radial">radial</div>
```

#### CSS

Wir haben in jedem Verlauf die gleichen zwei Farben verwendet, um die unterschiedlichen Effekte von [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method) und [Farbraum](/de/docs/Glossary/color_space) auf die Farbinterpolation in Verläufen zu demonstrieren.

```css hidden
.gradient {
  height: 200px;
  width: 200px;
  display: inline-block;
  font-family: monospace;
  margin: 10px;
  font-size: 16px;
}
```

```css
.conic {
  background-image: repeating-conic-gradient(
    in lab,
    burlywood,
    blueviolet 120deg
  );
}

.linear {
  background-image: repeating-linear-gradient(
    in oklch,
    burlywood,
    blueviolet 75px
  );
}

.radial {
  background-image: repeating-radial-gradient(
    in oklch longer hue,
    blueviolet 50px,
    burlywood 100px
  );
}
```

#### Ergebnis

{{EmbedLiveSample("hue_interpolation_in_repeating_gradients", "100%", 250)}}

Der Vergleich des ersten und zweiten Kastens zeigt den Unterschied bei der Interpolation zwischen zwei Farben in unterschiedlichen Farbräumen.
Der Vergleich des zweiten und dritten Kastens zeigt den Unterschied zwischen [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)s, wobei der lineare Verlauf die kürzere Methode (Standard) und der radiale Verlauf die längere Methode verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}, {{CSSXref("&lt;gradient&gt;")}}
- {{CSSXref("&lt;hue-interpolation-method&gt;")}}
