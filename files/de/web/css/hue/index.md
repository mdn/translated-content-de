---
title: <hue>
slug: Web/CSS/hue
l10n:
  sourceCommit: 99f984ff73e5b80f45078ae22cec87399690aaca
---

{{CSSRef}}

Der **`<hue>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert den Farbtonwinkel einer Farbe. Er wird in den Farbfunktionswerten verwendet, die den Farbton als Einzelwert akzeptieren, insbesondere in den Funktionsnotationen [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`oklch()`](/de/docs/Web/CSS/color_value/oklch).

## Syntax

Ein `<hue>` kann entweder ein `<angle>` oder ein `<number>` sein.

### Werte

- {{CSSXref("&lt;angle&gt;")}}
  - : Ein Winkel, der in Grad, Gon, Radianten oder Umdrehungen ausgedrückt wird, wobei `deg`, `grad`, `rad` oder `turn` verwendet wird.
- `<number>`
  - : Eine reelle Zahl, die Grad des Farbtons anzeigt.

Da ein `<angle>` periodisch ist, wird `<hue>` auf den Bereich `[0deg, 360deg)` normalisiert. Es wandert automatisch, so dass `480deg` dasselbe ist wie `120deg`, `-120deg` dasselbe wie `240deg`, `-1turn` dasselbe wie `1turn` und so weiter.

## Beschreibung

![Ein sRGB-Farbrad](color_wheel.svg)

Das obige Farbrad zeigt die Farbtöne in allen Winkeln im [sRGB](https://en.wikipedia.org/wiki/SRGB) [Farbraum](/de/docs/Glossary/color_space). Insbesondere _Rot_ ist bei `0deg`, _Gelb_ bei `60deg`, _Lime_ bei `120deg`, _Cyan_ bei `180deg`, _Blau_ bei `240deg` und _Magenta_ bei `300deg`.

Die Winkeln, die bestimmten Farbtönen entsprechen, unterscheiden sich je nach Farbraum. Zum Beispiel ist der Farbtonwinkel von sRGB-Grün `120deg` im sRGB-Farbraum, aber `134.39deg` im CIELAB-Farbraum.

Die folgende Tabelle listet typische Farben bei verschiedenen Winkeln im sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}) Farbräumen auf:

<table>
  <colgroup>
    <col />
    <col span="6" width="15%" />
  </colgroup>
  <thead>
    <tr>
      <th></th>
      <th scope="col">0°</th>
      <th scope="col">60°</th>
      <th scope="col">120°</th>
      <th scope="col">180°</th>
      <th scope="col">240°</th>
      <th scope="col">300°</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">sRGB</th>
      <td
        style="background: hsl(0 100% 50%);"
        title="hsl(0 100% 50%)"></td>
      <td
        style="background: hsl(60 100% 50%);"
        title="hsl(60 100% 50%)"></td>
      <td
        style="background: hsl(120 100% 50%);"
        title="hsl(120 100% 50%)"></td>
      <td
        style="background: hsl(180 100% 50%);"
        title="hsl(180 100% 50%)"></td>
      <td
        style="background: hsl(240 100% 50%);"
        title="hsl(240 100% 50%)"></td>
      <td
        style="background: hsl(300 100% 50%);"
        title="hsl(300 100% 50%)"></td>
    </tr>
    <tr>
      <th scope="row">CIELAB</th>
      <td
        style="background: lch(50% 50% 0);"
        title="lch(50% 50% 0)"></td>
      <td
        style="background: lch(65% 55% 60);"
        title="lch(65% 55% 60)"></td>
      <td
        style="background: lch(90% 65% 120);"
        title="lch(90% 65% 120)"></td>
      <td
        style="background: lch(90% 35% 180);"
        title="lch(90% 35% 180)"></td>
      <td
        style="background: lch(75% 25% 240);"
        title="lch(75% 25% 240)"></td>
      <td
        style="background: lch(40% 70% 300);"
        title="lch(40% 70% 300)"></td>
    </tr>
    <tr>
      <th scope="row">Oklab</th>
      <td
        style="background: oklch(65% 65% 0);"
        title="oklch(65% 65% 0)"></td>
      <td
        style="background: oklch(75% 40% 60);"
        title="oklch(75% 40% 60)"></td>
      <td
        style="background: oklch(90% 50% 120);"
        title="oklch(90% 50% 120)"></td>
      <td
        style="background: oklch(90% 35% 180);"
        title="oklch(90% 35% 180)"></td>
      <td
        style="background: oklch(70% 40% 240);"
        title="oklch(70% 40% 240)"></td>
      <td
        style="background: oklch(55% 70% 300);"
        title="oklch(55% 70% 300)"></td>
    </tr>
  </tbody>
</table>

## Interpolation von `<hue>` Werten

`<hue>` Werte werden als {{CSSXref("&lt;angle&gt;")}} Werte interpoliert, und der Standardinterpolationsalgorithmus ist [`shorter`](/de/docs/Web/CSS/hue-interpolation-method#values). In einigen farbbezogenen CSS-Funktionen kann dies durch die Komponente {{CSSXref("&lt;hue-interpolation-method&gt;")}} überschrieben werden.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Veränderung des Farbtons einer Farbe mit einem Schieberegler

Das folgende Beispiel zeigt die Wirkung der Änderung des `hue`-Werts der [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktionsnotation auf eine Farbe.

#### HTML

```html
<input type="range" min="0" max="360" value="0" id="hue-slider" />
<p>Hue: <span id="hue-value">0deg</span></p>
<div id="box"></div>
```

#### CSS

```css hidden
div {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 1px solid black;
}
p {
  font-family: sans-serif;
}
span {
  font-family: monospace;
  background: rgb(0 0 0 / 10%);
  padding: 3px;
}
#hue-slider {
  width: 90%;
}
```

```css
#box {
  background-color: hsl(0 100% 50%);
}
```

#### JavaScript

```js
const hue = document.querySelector("#hue-slider");
const box = document.querySelector("#box");
hue.addEventListener("input", () => {
  box.style.backgroundColor = `hsl(${hue.value} 100% 50%)`;
  document.querySelector("#hue-value").textContent = `${hue.value}deg`;
});
```

#### Ergebnis

{{EmbedLiveSample("changing_the_hue_of_a_color_using_a_slider", "100%", "200")}}

### Annäherung von Rottönen in verschiedenen Farbräumen

Das folgende Beispiel zeigt eine ähnliche rote Farbe in verschiedenen Farbräumen. Die Werte in den `lch()` und `oklch()` Funktionen sind zur besseren Lesbarkeit gerundet.

#### HTML

```html
<div data-color="hsl-red">hsl()</div>
<div data-color="hwb-red">hwb()</div>
<div data-color="lch-red">lch()</div>
<div data-color="oklch-red">oklch()</div>
```

#### CSS

```css
[data-color="hsl-red"] {
  /* hsl(<hue> <saturation> <lightness>) */
  background-color: hsl(0 100% 50%);
}
[data-color="hwb-red"] {
  /* hwb(<hue> <whiteness> <blackness>) */
  background-color: hwb(0 0% 0%);
}
[data-color="lch-red"] {
  /* lch(<lightness> <chroma> <hue>) */
  background-color: lch(50 150 40);
}
[data-color="oklch-red"] {
  /* oklch(<lightness> <chroma> <hue>) */
  background-color: oklch(0.6 0.4 20);
}
```

```css hidden
div {
  font-family: monospace;
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 1px solid black;
  display: inline-block;
}
```

#### Ergebnis

{{EmbedLiveSample("approximating_red_hues_in_different_color_spaces", "100%", "150")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/color_value)
- {{CSSXref("&lt;hue-interpolation-method&gt;")}}
