---
title: <blend-mode>
slug: Web/CSS/blend-mode
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<blend-mode>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) beschreibt, wie Farben erscheinen sollen, wenn Elemente überlappen. Er wird in den Eigenschaften {{cssxref("background-blend-mode")}} und {{cssxref("mix-blend-mode")}} verwendet.

## Syntax

Der `<blend-mode>` Datentyp wird durch einen Schlüsselwortwert definiert, der aus der untenstehenden Liste gewählt wird.

### Werte

- `normal`
  - : Die endgültige Farbe ist die obere Farbe, unabhängig davon, welche Farbe darunter liegt.
    Der Effekt ist wie bei zwei undurchsichtigen sich überlappenden Papierschichten.
- `multiply`
  - : Die endgültige Farbe ist das Ergebnis der Multiplikation der oberen und unteren Farben.
    Eine schwarze Schicht führt zu einer schwarzen endgültigen Schicht, und eine weiße Schicht führt zu keiner Veränderung.
    Der Effekt ist wie bei zwei auf transparenter Folie gedruckten Bildern, die sich überlappen.
- `screen`
  - : Die endgültige Farbe ist das Ergebnis der Invertierung der Farben, deren Multiplikation und der erneuten Invertierung dieses Wertes.
    Eine schwarze Schicht führt zu keiner Veränderung, und eine weiße Schicht führt zu einer weißen endgültigen Schicht.
    Der Effekt ist wie bei zwei Bildern, die auf eine Projektionsleinwand geworfen werden.
- `overlay`
  - : Die endgültige Farbe ist das Ergebnis von `multiply`, wenn die untere Farbe dunkler ist, oder `screen`, wenn die untere Farbe heller ist.
    Dieser Mischmodus entspricht `hard-light`, jedoch mit vertauschten Schichten.
- `darken`
  - : Die endgültige Farbe besteht aus den dunkelsten Werten jedes Farbkanals.
- `lighten`
  - : Die endgültige Farbe besteht aus den hellsten Werten jedes Farbkanals.
- `color-dodge`
  - : Die endgültige Farbe ist das Ergebnis der Division der unteren Farbe durch das Inverse der oberen Farbe.
    Eine schwarze Vordergrundfarbe führt zu keiner Veränderung. Ein Vordergrund mit der Inverse-Farbe des Hintergrunds führt zu einer vollständig beleuchteten Farbe.
    Dieser Mischmodus ist ähnlich wie `screen`, aber der Vordergrund muss nur so hell wie das Inverse des Hintergrunds sein, um eine vollständig beleuchtete Farbe zu erzeugen.
- `color-burn`
  - : Die endgültige Farbe ist das Ergebnis der Invertierung der unteren Farbe, Division des Wertes durch die obere Farbe und erneute Invertierung dieses Wertes.
    Eine weiße Vordergrundfarbe führt zu keiner Veränderung. Ein Vordergrund mit der Inverse-Farbe des Hintergrunds führt zu einem schwarzen Endbild.
    Dieser Mischmodus ist ähnlich wie `multiply`, aber der Vordergrund muss nur so dunkel wie das Inverse des Hintergrunds sein, um das Endbild schwarz zu machen.
- `hard-light`
  - : Die endgültige Farbe ist das Ergebnis von `multiply`, wenn die obere Farbe dunkler ist, oder `screen`, wenn die obere Farbe heller ist.
    Dieser Mischmodus entspricht `overlay`, jedoch mit vertauschten Schichten.
    Der Effekt ist ähnlich dem, als würde ein _starkes_ Spotlight auf den Hintergrund gerichtet.
- `soft-light`
  - : Die endgültige Farbe ist ähnlich wie `hard-light`, jedoch weicher.
    Dieser Mischmodus verhält sich ähnlich wie `hard-light`.
    Der Effekt ist ähnlich dem, als würde ein _diffuses_ Spotlight auf den Hintergrund gerichtet.
- `difference`
  - : Die endgültige Farbe ist das Ergebnis der Subtraktion der dunkleren der beiden Farben von der helleren.
    Eine schwarze Schicht hat keinen Effekt, während eine weiße Schicht die Farbe der anderen Schicht invertiert.
- `exclusion`
  - : Die endgültige Farbe ist ähnlich wie `difference`, jedoch mit weniger Kontrast.
    Wie bei `difference` hat eine schwarze Schicht keinen Effekt, während eine weiße Schicht die Farbe der anderen Schicht invertiert.
- `hue`
  - : Die endgültige Farbe hat den _Farbton_ der oberen Farbe, verwendet jedoch die _Sättigung_ und _Helligkeit_ der unteren Farbe.
- `saturation`
  - : Die endgültige Farbe hat die _Sättigung_ der oberen Farbe, verwendet jedoch den _Farbton_ und die _Helligkeit_ der unteren Farbe.
    Ein reiner grauer Hintergrund, der keine Sättigung aufweist, hat keinen Effekt.
- `color`
  - : Die endgültige Farbe hat den _Farbton_ und die _Sättigung_ der oberen Farbe, verwendet jedoch die _Helligkeit_ der unteren Farbe.
    Der Effekt bewahrt Graustufen und kann verwendet werden, um den Vordergrund zu kolorieren.
- `luminosity`
  - : Die endgültige Farbe hat die _Helligkeit_ der oberen Farbe, verwendet jedoch den _Farbton_ und die _Sättigung_ der unteren Farbe.
    Dieser Mischmodus entspricht `color`, jedoch mit vertauschten Schichten.

## Beschreibung

Für jedes Pixel, auf das ein Mischmodus angewendet wird, nimmt er die Farben des Vordergrunds und des Hintergrunds, führt eine Berechnung durch und liefert einen neuen Farbwert zurück.

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

{{EmbedLiveSample('Beispiel mit "normal"', "300", "350") }}

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

{{EmbedLiveSample('Beispiel mit "multiply"', "300", "350") }}

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

{{EmbedLiveSample('Beispiel mit "screen"', "300", "350") }}

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

{{EmbedLiveSample('Beispiel mit "overlay"', "300", "350") }}

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

{{EmbedLiveSample('Beispiel mit "darken"', "300", "350") }}

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

{{EmbedLiveSample('Beispiel mit "lighten"', "300", "350") }}

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

{{EmbedLiveSample('Beispiel mit "color-dodge"', "300", "350") }}

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

{{EmbedLiveSample('Beispiel mit "color-burn"', "300", "350") }}

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

{{EmbedLiveSample('Beispiel mit "hard-light"', "300", "350") }}

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

{{EmbedLiveSample('Beispiel mit "soft-light"', "300", "350") }}

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

{{EmbedLiveSample('Beispiel mit "difference"', "300", "350") }}

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

{{EmbedLiveSample('Beispiel mit "exclusion"', "300", "350") }}

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

{{EmbedLiveSample('Beispiel mit "hue"', "300", "350") }}

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

{{EmbedLiveSample('Beispiel mit "saturation"', "300", "350") }}

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

{{EmbedLiveSample('Beispiel mit "color"', "300", "350") }}

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

{{EmbedLiveSample('Beispiel mit "luminosity"', "300", "350") }}

### Vergleich der Mischmodi

Im folgenden Beispiel haben wir ein `<div>` mit zwei darauf gesetzten Hintergrundbildern – ein Firefox-Logo über einem linearen Verlauf. Darunter haben wir ein bereitgestelltes `<select>`-Menü, das es Ihnen ermöglicht, den `background-blend-mode` auf das `<div>` anzuwenden, damit Sie die verschiedenen Effekte der Mischmodi vergleichen können.

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
    url(https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png)
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

- Das [CSS Compositing und Blending](/de/docs/Web/CSS/CSS_compositing_and_blending) Modul, das die `<blend-mode>` Werte definiert.
- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}

Beschreibungen zu verschiedenen Mischmodi auf anderen Webseiten:

- [Blend modes](https://en.wikipedia.org/wiki/Blend_modes) auf Wikipedia
- [Blending modes in Adobe Photoshop](https://helpx.adobe.com/photoshop/using/blending-modes.html) von Adobe
