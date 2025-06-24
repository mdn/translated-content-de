---
title: <color-interpolation-method>
slug: Web/CSS/color-interpolation-method
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Der **`<color-interpolation-method>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert den {{Glossary("Color_space", "Farbraum")}}, der für die Interpolation zwischen {{CSSXref("&lt;color&gt;")}} Werten verwendet wird. Er kann verwendet werden, um den Standard-Farbraum für die Interpolation bei farbbezogenen funktionalen Notationen wie {{CSSXref("color_value/color-mix", "color-mix()")}} und {{CSSXref("gradient/linear-gradient", "linear-gradient()")}} zu überschreiben.

Bei der Interpolation von `<color>` Werten ist der Standard-Farbraum für die Interpolation Oklab.

## Syntax

Der `<color-interpolation-method>` gibt an, ob die Interpolation einen rechteckigen Farbraum oder einen polaren Farbraum mit einer optionalen Methode zur Farbtoninterpolation verwenden soll:

```plain
in <rectangular-color-space>
// or
in <polar-color-space>[ <hue-interpolation method>]
```

### Werte

- `<rectangular-color-space>`

  - : Eines der Schlüsselwörter `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz`, `xyz-d50` oder `xyz-d65`.

- `<polar-color-space>`

  - : Eines der Schlüsselwörter `hsl`, `hwb`, `lch` oder `oklch`.

- {{CSSXref("&lt;hue-interpolation-method&gt;")}} {{optional_inline}}

  - : Der Algorithmus für die Farbtoninterpolation. Es wird standardmäßig `shorter hue` verwendet.

- `<custom-color-space>`
  - : Ein [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident#using_with_color-profile), der auf ein benutzerdefiniertes [@color profile](/de/docs/Web/CSS/@color-profile) verweist.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich von Interpolationsfarbräumen mit Verläufen

Das folgende Beispiel zeigt die Wirkung der Verwendung verschiedener Interpolationsfarbräume für {{CSSXref("gradient/linear-gradient", "linear-gradient()")}}.

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

### Farbinterpolation in wiederholten Verläufen

Das folgende Beispiel zeigt, wie ein Farbraum für die Interpolation von Farben in wiederholten Verläufen angegeben wird.
Drei Boxen zeigen verschiedene Arten von wiederholten Verläufen unter Verwendung der Funktionen [`repeating-conic-gradient()`](/de/docs/Web/CSS/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) und [`repeating-radial-gradient()`](/de/docs/Web/CSS/gradient/repeating-radial-gradient).
Die erste Box verwendet den Lab-Farbraum, um zwischen zwei Farbwerten zu interpolieren.
Die zweite und dritte Box verwenden Oklch und geben zusätzlich eine [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method) an, um zu spezifizieren, wie zwischen Farbtonwerten interpoliert werden soll.

#### HTML

```html
<div class="gradient conic">conic</div>
<div class="gradient linear">linear</div>
<div class="gradient radial">radial</div>
```

#### CSS

Wir haben in jedem Verlauf dieselben zwei Farben verwendet, um die unterschiedlichen Effekte der [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method) und des {{Glossary("color_space", "Farbraums")}} auf die Farbinterpolation in Verläufen zu demonstrieren.

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

Der Vergleich der ersten und zweiten Box zeigt den Unterschied der Interpolation zwischen zwei Farben in verschiedenen Farbräumen.
Der Vergleich der zweiten und dritten Box zeigt den Unterschied zwischen [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)s, wobei der lineare Verlauf die kürzere Methode (Standard) und der radiale Verlauf die längere Methode verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}, {{CSSXref("&lt;gradient&gt;")}}
- {{CSSXref("&lt;hue-interpolation-method&gt;")}}
