---
title: "`<color-interpolation-method>` CSS-Typ"
short-title: <color-interpolation-method>
slug: Web/CSS/Reference/Values/color-interpolation-method
l10n:
  sourceCommit: 42994d9657fd9771d5c45579521d947ba5babc05
---

Der **`<color-interpolation-method>`**-[CSS](/de/docs/Web/CSS)-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) beschreibt den {{Glossary("Color_space", "Farbraum")}}, der für die Interpolation zwischen {{CSSXref("&lt;color&gt;")}}-Werten verwendet wird.

## Zugehörige Eigenschaften und Funktionen

Dieser Datentyp wird als Wert der folgenden CSS-Eigenschaft akzeptiert:

- {{cssxref("color-interpolation")}}

Dieser Datentyp wird auch als Parameter der folgenden CSS-Funktionen akzeptiert:

- {{cssxref("color-mix()")}}
- {{cssxref("conic-gradient()")}}
- {{cssxref("linear-gradient()")}}
- {{cssxref("font-palette/palette-mix","palette-mix()")}}
- {{cssxref("radial-gradient()")}}
- {{cssxref("repeating-conic-gradient()")}}
- {{cssxref("repeating-linear-gradient()")}}
- {{cssxref("repeating-radial-gradient()")}}

## Syntax

`<color-interpolation-method>` gibt an, ob für die Interpolation ein rechteckiger Farbraum oder ein polarer Farbraum mit einem optionalen Verfahren zur Interpolation des Farbtons verwendet werden soll:

```plain
/* in <rectangular-color-space> */
in srgb
in oklab

/* in <polar-color-space> */
in hsl
in oklch

/* in <polar-color-space> (with <hue-interpolation-method>) */
in lch shorter hue
in oklch increasing hue

/* in <custom-color-space> */
in --myColorSpace
```

### Werte

- `<rectangular-color-space>`
  - : Eines der Schlüsselwörter `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz`, `xyz-d50` oder `xyz-d65`.

- `<polar-color-space>`
  - : Eines der Schlüsselwörter `hsl`, `hwb`, `lch` oder `oklch`.

- {{CSSXref("&lt;hue-interpolation-method&gt;")}} {{optional_inline}}
  - : Das Verfahren zur Interpolation des Farbtons. Der Standardwert ist `shorter hue`.

- `<custom-color-space>`
  - : Ein [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident#using_with_color-profile), das auf ein benutzerdefiniertes [@color-Profil](/de/docs/Web/CSS/Reference/At-rules/@color-profile) verweist.

## Beschreibung

Der Datentyp `<color-interpolation-method>` legt den {{Glossary("Color_space", "Farbraum")}} fest, der für die Interpolation zwischen {{CSSXref("&lt;color&gt;")}}-Werten verwendet wird. Er gibt an, ob ein rechteckiger oder ein polarer Farbraum verwendet werden soll, und erlaubt optional die Angabe einer {{cssxref("hue-interpolation-method")}}. Am Beispiel der Funktion {{cssxref("color-mix()")}}:

```plain
/* in <rectangular-color-space> */
color-mix(in srgb, plum, #123456)
color-mix(in lab, plum 60%, #123456 50%)

/* in <polar-color-space>[ <hue-interpolation-method>] */
color-mix(in hsl, hsl(200 50 80), coral)
color-mix(in hsl longer hue, hsl(200 50 80) 20%, coral 80%)
```

Mit diesem Datentyp lässt sich der standardmäßige Interpolationsfarbraum für farbbezogene funktionale Notationen wie {{CSSXref("color_value/color-mix", "color-mix()")}} und {{CSSXref("gradient/linear-gradient", "linear-gradient()")}} überschreiben.

Bei der Interpolation von `<color>`-Werten ist der Interpolationsfarbraum standardmäßig `Oklab`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Interpolationsfarbräume anhand von Farbverläufen vergleichen

Das folgende Beispiel zeigt, wie sich unterschiedliche Interpolationsfarbräume bei {{CSSXref("gradient/linear-gradient", "linear-gradient()")}} auswirken.

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

### Farbinterpolation in sich wiederholenden Farbverläufen

Das folgende Beispiel zeigt, wie Sie einen Farbraum für die Interpolation von Farben in sich wiederholenden Farbverläufen angeben.
Drei Felder zeigen unterschiedliche Arten sich wiederholender Farbverläufe, die mit den Funktionen [`repeating-conic-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/repeating-linear-gradient) und [`repeating-radial-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/repeating-radial-gradient) erzeugt werden.
Das erste Feld verwendet den Lab-Farbraum, um zwischen zwei Farbwerten zu interpolieren.
Das zweite und dritte Feld verwenden OkLCh und geben zusätzlich eine {{cssxref("hue-interpolation-method")}} an, um festzulegen, wie zwischen Farbtonwerten interpoliert wird.

#### HTML

```html
<div class="gradient conic">conic</div>
<div class="gradient linear">linear</div>
<div class="gradient radial">radial</div>
```

#### CSS

Wir haben in jedem Farbverlauf dieselben zwei Farben verwendet, um die unterschiedlichen Auswirkungen von {{cssxref("hue-interpolation-method")}} und {{Glossary("color_space", "Farbraum")}} auf die Farbinterpolation in Farbverläufen zu veranschaulichen.

```css hidden
body {
  display: flex;
}
.gradient {
  height: 200px;
  width: 100%;
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

{{EmbedLiveSample("color_interpolation_in_repeating_gradients", "100%", 250)}}

Ein Vergleich des ersten und zweiten Felds zeigt, wie sich die Interpolation zwischen zwei Farben in unterschiedlichen Farbräumen unterscheidet.
Ein Vergleich des zweiten und dritten Felds zeigt den Unterschied zwischen den {{cssxref("hue-interpolation-method")}}-Verfahren: Der lineare Farbverlauf verwendet das kürzere Verfahren (Standard), der radiale Farbverlauf das längere Verfahren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}, {{cssxref("gradient")}}
- {{CSSXref("&lt;hue-interpolation-method&gt;")}}
