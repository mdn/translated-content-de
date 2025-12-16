---
title: <color-interpolation-method>
slug: Web/CSS/Reference/Values/color-interpolation-method
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **`<color-interpolation-method>`** [CSS](/de-DE/docs/Web/CSS) [Datentyp](/de-DE/docs/Web/CSS/Reference/Values/Data_types) repräsentiert den {{Glossary("Color_space", "Farbraum")}} für die Interpolation zwischen {{CSSXref("&lt;color&gt;")}}-Werten. Er kann verwendet werden, um den Standard-Interpolationsfarbraum für farbbezogene funktionale Notationen wie {{CSSXref("color_value/color-mix", "color-mix()")}} und {{CSSXref("gradient/linear-gradient", "linear-gradient()")}} zu überschreiben.

Bei der Interpolation von `<color>`-Werten ist der Standardfarbraum für die Interpolation Oklab.

## Syntax

Der `<color-interpolation-method>` gibt an, ob die Interpolation einen rechteckigen Farbraum oder einen polaren Farbraum mit einer optionalen Farbton-Interpolation verwenden soll:

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
  - : Der Algorithmus für die Farbton-Interpolation. Standardmäßig wird der `shorter hue` verwendet.

- `<custom-color-space>`
  - : Ein [`<dashed-ident>`](/de-DE/docs/Web/CSS/Reference/Values/dashed-ident#using_with_color-profile), der auf ein benutzerdefiniertes [@color profile](/de-DE/docs/Web/CSS/Reference/At-rules/@color-profile) verweist.

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

### Farbinterpolation in sich wiederholenden Verläufen

Das folgende Beispiel zeigt, wie ein Farbraum bei der Interpolation von Farben in sich wiederholenden Verläufen angegeben wird. Drei Boxen zeigen verschiedene Arten von sich wiederholenden Verläufen mithilfe der Funktionen [`repeating-conic-gradient()`](/de-DE/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/de-DE/docs/Web/CSS/Reference/Values/gradient/repeating-linear-gradient) und [`repeating-radial-gradient()`](/de-DE/docs/Web/CSS/Reference/Values/gradient/repeating-radial-gradient).
Die erste Box verwendet den Lab-Farbraum, um zwischen zwei Farbwerten zu interpolieren.
Die zweite und dritte Box verwenden OkLCh und geben zusätzlich eine {{CSSXref("hue-interpolation-method")}} an, um zu spezifizieren, wie die Farbtonwerte interpoliert werden sollen.

#### HTML

```html
<div class="gradient conic">conic</div>
<div class="gradient linear">linear</div>
<div class="gradient radial">radial</div>
```

#### CSS

Wir haben in jedem Verlauf dieselben zwei Farben verwendet, um die unterschiedlichen Effekte der {{CSSXref("hue-interpolation-method")}} und des {{Glossary("color_space", "Farbraums")}} auf die Farbinterpolation in Verläufen zu demonstrieren.

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

Der Vergleich der ersten und zweiten Box zeigt den Unterschied zwischen der Interpolation von zwei Farben in unterschiedlichen Farbräumen. Der Vergleich der zweiten und dritten Box zeigt den Unterschied zwischen {{CSSXref("hue-interpolation-method")}}s, wobei der lineare Verlauf die kürzere Methode (Standard) und der radiale Verlauf die längere Methode verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}, {{CSSXref("gradient")}}
- {{CSSXref("&lt;hue-interpolation-method&gt;")}}
