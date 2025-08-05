---
title: <blend-mode>
slug: Web/CSS/blend-mode
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Der **`<blend-mode>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) beschreibt, wie Farben erscheinen sollen, wenn Elemente sich überlappen. Er wird in den Eigenschaften {{cssxref("background-blend-mode")}} und {{cssxref("mix-blend-mode")}} verwendet.

## Syntax

Der `<blend-mode>` Datentyp wird durch einen aus der untenstehenden Liste gewählten Schlüsselwortwert definiert.

### Werte

- `normal`
  - : Die endgültige Farbe ist die obere Farbe, unabhängig von der unteren Farbe. Der Effekt ähnelt zwei undurchsichtigen Papierstücken, die sich überlappen.
- `multiply`
  - : Die endgültige Farbe ist das Ergebnis der Multiplikation der oberen und unteren Farben. Eine schwarze Schicht führt zu einer schwarzen Endschicht, und eine weiße Schicht führt zu keiner Veränderung. Der Effekt ähnelt zwei Bildern, die auf transparentem Film überlappen.
- `screen`
  - : Die endgültige Farbe ist das Ergebnis der Invertierung der Farben, ihrer Multiplikation und der erneuten Invertierung des Wertes. Eine schwarze Schicht führt zu keiner Veränderung, und eine weiße Schicht führt zu einer weißen Endschicht. Der Effekt ähnelt zwei Bildern, die auf eine Projektionsfläche projiziert werden.
- `overlay`
  - : Die endgültige Farbe ist das Resultat von `multiply`, wenn die untere Farbe dunkler ist, oder `screen`, wenn die untere Farbe heller ist. Dieser Mischmodus entspricht `hard-light`, aber mit vertauschten Schichten.
- `darken`
  - : Die endgültige Farbe setzt sich aus den dunkelsten Werten jedes Farbkanals zusammen.
- `lighten`
  - : Die endgültige Farbe setzt sich aus den hellsten Werten jedes Farbkanals zusammen.
- `color-dodge`
  - : Die endgültige Farbe ist das Ergebnis der Division der unteren Farbe durch das Inverse der oberen Farbe. Ein schwarzer Vordergrund führt zu keiner Veränderung. Ein Vordergrund mit der inversen Farbe des Hintergrunds führt zu einer vollständig beleuchteten Farbe. Dieser Mischmodus ähnelt `screen`, aber der Vordergrund muss nur so hell wie das Inverse des Hintergrunds sein, um eine vollständig beleuchtete Farbe zu erzeugen.
- `color-burn`
  - : Die endgültige Farbe ist das Ergebnis der Invertierung der unteren Farbe, der Division des Wertes durch die obere Farbe und der erneuten Invertierung dieses Wertes. Ein weißer Vordergrund führt zu keiner Veränderung. Ein Vordergrund mit der inversen Farbe des Hintergrunds führt zu einem schwarzen Endbild. Dieser Mischmodus ähnelt `multiply`, aber der Vordergrund muss nur so dunkel wie das Inverse des Hintergrunds sein, um das Endbild schwarz zu machen.
- `hard-light`
  - : Die endgültige Farbe ist das Ergebnis von `multiply`, wenn die obere Farbe dunkler ist, oder `screen`, wenn die obere Farbe heller ist. Dieser Mischmodus entspricht `overlay`, aber mit vertauschten Schichten. Der Effekt ähnelt dem Bestrahlen des Hintergrunds mit einem _harten_ Scheinwerfer.
- `soft-light`
  - : Die endgültige Farbe ist ähnlich wie bei `hard-light`, aber weicher. Dieser Mischmodus verhält sich ähnlich wie `hard-light`. Der Effekt ähnelt dem Bestrahlen des Hintergrunds mit einem _diffusen_ Scheinwerfer.
- `difference`
  - : Die endgültige Farbe ist das Ergebnis der Subtraktion der dunkleren Farbe von der helleren Farbe. Eine schwarze Schicht hat keinen Effekt, während eine weiße Schicht die Farbe der anderen Schicht invertiert.
- `exclusion`
  - : Die endgültige Farbe ist ähnlich wie `difference`, aber mit weniger Kontrast. Wie bei `difference` hat eine schwarze Schicht keinen Effekt, während eine weiße Schicht die Farbe der anderen Schicht invertiert.
- `hue`
  - : Die endgültige Farbe hat den _Farbton_ der oberen Farbe, während die _Sättigung_ und _Helligkeit_ der unteren Farbe genutzt werden.
- `saturation`
  - : Die endgültige Farbe hat die _Sättigung_ der oberen Farbe, während der _Farbton_ und die _Helligkeit_ der unteren Farbe genutzt werden. Ein rein grauer Hintergrund, der keine Sättigung hat, hat keinen Effekt.
- `color`
  - : Die endgültige Farbe hat den _Farbton_ und die _Sättigung_ der oberen Farbe, während die _Helligkeit_ der unteren Farbe genutzt wird. Der Effekt bewahrt Graustufen und kann verwendet werden, um den Vordergrund einzufärben.
- `luminosity`
  - : Die endgültige Farbe hat die _Helligkeit_ der oberen Farbe, während der _Farbton_ und die _Sättigung_ der unteren Farbe genutzt werden. Dieser Mischmodus entspricht `color`, aber mit vertauschten Schichten.

## Beschreibung

Für jedes Pixel unter den Schichten, auf die er angewendet wird, nimmt ein Mischmodus die Farben des Vordergrunds und des Hintergrunds, führt eine Berechnung an ihnen durch und gibt einen neuen Farbwert zurück.

Änderungen zwischen Mischmodi werden nicht interpoliert. Jede Änderung erfolgt sofort.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel mit "normal"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: normal;
}
```

{{ EmbedLiveSample('Example using "normal"', "300", "350") }}

### Beispiel mit "multiply"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: multiply;
}
```

{{ EmbedLiveSample('Example using "multiply"', "300", "350") }}

### Beispiel mit "screen"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: screen;
}
```

{{ EmbedLiveSample('Example using "screen"', "300", "350") }}

### Beispiel mit "overlay"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: overlay;
}
```

{{ EmbedLiveSample('Example using "overlay"', "300", "350") }}

### Beispiel mit "darken"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: darken;
}
```

{{ EmbedLiveSample('Example using "darken"', "300", "350") }}

### Beispiel mit "lighten"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: lighten;
}
```

{{ EmbedLiveSample('Example using "lighten"', "300", "350") }}

### Beispiel mit "color-dodge"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: color-dodge;
}
```

{{ EmbedLiveSample('Example using "color-dodge"', "300", "350") }}

### Beispiel mit "color-burn"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: color-burn;
}
```

{{ EmbedLiveSample('Example using "color-burn"', "300", "350") }}

### Beispiel mit "hard-light"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: hard-light;
}
```

{{ EmbedLiveSample('Example using "hard-light"', "300", "350") }}

### Beispiel mit "soft-light"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: soft-light;
}
```

{{ EmbedLiveSample('Example using "soft-light"', "300", "350") }}

### Beispiel mit "difference"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: difference;
}
```

{{ EmbedLiveSample('Example using "difference"', "300", "350") }}

### Beispiel mit "exclusion"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: exclusion;
}
```

{{ EmbedLiveSample('Example using "exclusion"', "300", "350") }}

### Beispiel mit "hue"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: hue;
}
```

{{ EmbedLiveSample('Example using "hue"', "300", "350") }}

### Beispiel mit "saturation"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: saturation;
}
```

{{ EmbedLiveSample('Example using "saturation"', "300", "350") }}

### Beispiel mit "color"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: color;
}
```

{{ EmbedLiveSample('Example using "color"', "300", "350") }}

### Beispiel mit "luminosity"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: luminosity;
}
```

{{ EmbedLiveSample('Example using "luminosity"', "300", "350") }}

### Vergleich der Mischmodi

Im folgenden Beispiel haben wir ein `<div>` mit zwei darauf gesetzten Hintergrundbildern – einem Firefox-Logo über einem linearen Farbverlauf. Darunter haben wir ein `<select>`-Menü bereitgestellt, das es Ihnen ermöglicht, den `background-blend-mode`, der auf das `<div>` angewendet wird, zu ändern, um die verschiedenen Effekte der Mischmodi zu vergleichen.

#### HTML

```html
<div></div>
<p>Choose a blend-mode:</p>
<select>
  <option selected>normal</option>
  <option>multiply</option>
  <option>screen</option>
  <option>overlay</option>
  <option>darken</option>
  <option>lighten</option>
  <option>color-dodge</option>
  <option>color-burn</option>
  <option>hard-light</option>
  <option>soft-light</option>
  <option>difference</option>
  <option>exclusion</option>
  <option>hue</option>
  <option>saturation</option>
  <option>color</option>
  <option>luminosity</option>
</select>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background:
    url("https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png")
      no-repeat center,
    linear-gradient(to bottom, blue, orange);
}
```

#### JavaScript

```js
const selectElem = document.querySelector("select");
const divElem = document.querySelector("div");

selectElem.addEventListener("change", () => {
  divElem.style.backgroundBlendMode = selectElem.value;
});
```

#### Ergebnis

{{EmbedLiveSample('Blend_mode_comparison', '100%', 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [CSS compositing and blending](/de/docs/Web/CSS/CSS_compositing_and_blending) Modul, das die `<blend-mode>` Werte definiert.
- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}

Beschreibung zu verschiedenen Mischmodi auf anderen Websites:

- [Blend modes](https://en.wikipedia.org/wiki/Blend_modes) auf Wikipedia
- [Blending modes in Adobe Photoshop](https://helpx.adobe.com/photoshop/using/blending-modes.html) von Adobe
