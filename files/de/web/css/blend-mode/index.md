---
title: <blend-mode>
slug: Web/CSS/blend-mode
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{CSSRef}}

Der **`<blend-mode>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) beschreibt, wie Farben erscheinen sollen, wenn Elemente sich überlappen. Er wird in den Eigenschaften {{cssxref("background-blend-mode")}} und {{cssxref("mix-blend-mode")}} verwendet.

## Syntax

Der `<blend-mode>` Datentyp wird mit einem Schlüsselwortwert definiert, der aus der untenstehenden Liste ausgewählt wird.

### Werte

- `normal`
  - : Die endgültige Farbe ist die obere Farbe, unabhängig davon, welche Farbe die untere hat.
    Der Effekt ist wie bei zwei undurchsichtigen Papierstücken, die sich überlappen.
- `multiply`
  - : Die endgültige Farbe ergibt sich aus der Multiplikation der oberen und unteren Farben.
    Eine schwarze Schicht führt zu einer schwarzen Endschicht, und eine weiße Schicht führt zu keiner Veränderung.
    Der Effekt ist wie bei zwei Bildern, die auf transparentem Film übereinanderliegen.
- `screen`
  - : Die endgültige Farbe ergibt sich aus der Invertierung der Farben, deren Multiplikation und der erneuten Invertierung dieses Wertes.
    Eine schwarze Schicht führt zu keiner Veränderung, und eine weiße Schicht führt zu einer weißen Endschicht.
    Der Effekt ist wie bei zwei Bildern, die auf eine Projektionsleinwand projiziert werden.
- `overlay`
  - : Die endgültige Farbe ergibt sich aus `multiply`, wenn die untere Farbe dunkler ist, oder `screen`, wenn die untere Farbe heller ist.
    Dieser Mischmodus ist gleichwertig mit `hard-light`, jedoch mit vertauschten Schichten.
- `darken`
  - : Die endgültige Farbe setzt sich aus den dunkelsten Werten jedes Farbkanals zusammen.
- `lighten`
  - : Die endgültige Farbe setzt sich aus den hellsten Werten jedes Farbkanals zusammen.
- `color-dodge`
  - : Die endgültige Farbe ist das Ergebnis der Division der unteren Farbe durch das Inverse der oberen Farbe.
    Eine schwarze Vordergrundfarbe führt zu keiner Veränderung. Ein Vordergrund mit der inversen Farbe des Hintergrunds führt zu einer voll beleuchteten Farbe.
    Dieser Mischmodus ist ähnlich wie `screen`, aber der Vordergrund muss nur so hell wie das Inverse des Hintergrunds sein, um eine voll beleuchtete Farbe zu erzeugen.
- `color-burn`
  - : Die endgültige Farbe ist das Ergebnis der Invertierung der unteren Farbe, der Division des Wertes durch die obere Farbe und der erneuten Invertierung dieses Wertes.
    Ein weißer Vordergrund führt zu keiner Veränderung. Ein Vordergrund mit der inversen Farbe des Hintergrunds führt zu einem schwarzen Endbild.
    Dieser Mischmodus ist ähnlich wie `multiply`, aber der Vordergrund muss nur so dunkel wie das Inverse des Hintergrunds sein, um das Endbild schwarz zu machen.
- `hard-light`
  - : Die endgültige Farbe ergibt sich aus `multiply`, wenn die obere Farbe dunkler ist, oder `screen`, wenn die obere Farbe heller ist.
    Dieser Mischmodus ist gleichwertig mit `overlay`, jedoch mit vertauschten Schichten.
    Der Effekt ist ähnlich wie das Anstrahlen des Hintergrunds mit einem _harten_ Scheinwerfer.
- `soft-light`
  - : Die endgültige Farbe ist ähnlich wie `hard-light`, jedoch weicher.
    Dieser Mischmodus verhält sich ähnlich wie `hard-light`.
    Der Effekt ist ähnlich wie das Anstrahlen des Hintergrunds mit einem _diffusen_ Scheinwerfer.
- `difference`
  - : Die endgültige Farbe ist das Ergebnis des Abziehens der dunkleren der beiden Farben von der helleren.
    Eine schwarze Schicht hat keinen Effekt, während eine weiße Schicht die Farbe der anderen Schicht invertiert.
- `exclusion`
  - : Die endgültige Farbe ist ähnlich wie `difference`, jedoch mit weniger Kontrast.
    Wie bei `difference` hat eine schwarze Schicht keinen Effekt, während eine weiße Schicht die Farbe der anderen Schicht invertiert.
- `hue`
  - : Die endgültige Farbe hat den _Farbton_ der oberen Farbe, während sie die _Sättigung_ und _Helligkeit_ der unteren Farbe verwendet.
- `saturation`
  - : Die endgültige Farbe hat die _Sättigung_ der oberen Farbe, während sie den _Farbton_ und die _Helligkeit_ der unteren Farbe verwendet.
    Ein reingrauer Hintergrund, der keine Sättigung hat, wird keine Wirkung haben.
- `color`
  - : Die endgültige Farbe hat den _Farbton_ und die _Sättigung_ der oberen Farbe, während sie die _Helligkeit_ der unteren Farbe verwendet.
    Der Effekt bewahrt Graustufen und kann verwendet werden, um den Vordergrund einzufärben.
- `luminosity`
  - : Die endgültige Farbe hat die _Helligkeit_ der oberen Farbe, während sie den _Farbton_ und die _Sättigung_ der unteren Farbe verwendet.
    Dieser Mischmodus ist gleichwertig mit `color`, jedoch mit vertauschten Schichten.

## Beschreibung

Für jedes Pixel unter den Schichten, auf die es angewendet wird, nimmt ein Mischmodus die Farben des Vordergrunds und des Hintergrunds, führt eine Berechnung an ihnen durch und gibt einen neuen Farbwert zurück.

Änderungen zwischen Mischmodi werden nicht interpoliert. Jede Veränderung erfolgt sofort.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel für "normal"

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

### Beispiel für "multiply"

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

### Beispiel für "screen"

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

### Beispiel für "overlay"

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

### Beispiel für "darken"

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

### Beispiel für "lighten"

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

### Beispiel für "color-dodge"

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

### Beispiel für "color-burn"

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

### Beispiel für "hard-light"

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

### Beispiel für "soft-light"

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

### Beispiel für "difference"

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

### Beispiel für "exclusion"

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

### Beispiel für "hue"

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

### Beispiel für "saturation"

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

### Beispiel für "color"

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

### Beispiel für "luminosity"

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

### Vergleich von Mischmodi

Im folgenden Beispiel haben wir ein `<div>` mit zwei Hintergrundbildern — einem Firefox-Logo über einem linearen Verlauf. Darunter befindet sich ein `<select>`-Menü, das es Ihnen ermöglicht, den `background-blend-mode` des `<div>` zu ändern und die verschiedenen Effekte der Mischmodi zu vergleichen.

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

Beschreibung zu verschiedenen Mischmodi auf anderen Websites:

- [Blend modes](https://en.wikipedia.org/wiki/Blend_modes) auf Wikipedia
- [Mischmodi in Adobe Photoshop](https://helpx.adobe.com/photoshop/using/blending-modes.html) von Adobe
