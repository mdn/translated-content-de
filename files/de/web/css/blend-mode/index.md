---
title: <blend-mode>
slug: Web/CSS/blend-mode
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<blend-mode>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) beschreibt, wie Farben erscheinen sollen, wenn sich Elemente überlappen. Er wird in den Eigenschaften {{cssxref("background-blend-mode")}} und {{cssxref("mix-blend-mode")}} verwendet.

## Syntax

Der `<blend-mode>` Datentyp wird durch einen Schlüsselwortwert definiert, der aus der unten stehenden Liste ausgewählt wird.

### Werte

- `normal`
  - : Die endgültige Farbe ist die Farbe der oberen Ebene, unabhängig davon, welche Farbe die untere Ebene hat.
    Der Effekt ähnelt dem Überlappen von zwei undurchsichtigen Papierstücken.
- `multiply`
  - : Die endgültige Farbe ergibt sich aus der Multiplikation der oberen und unteren Farben.
    Eine schwarze Ebene führt zu einer schwarzen Endfarbe, und eine weiße Ebene führt zu keiner Veränderung.
    Der Effekt ähnelt dem Überlappen von zwei auf transparentem Film gedruckten Bildern.
- `screen`
  - : Die endgültige Farbe ergibt sich aus dem Invertieren der Farben, ihrer Multiplikation und einer erneuten Invertierung.
    Eine schwarze Ebene führt zu keiner Veränderung, und eine weiße Ebene ergibt eine vollständig weiße Endfarbe.
    Der Effekt ähnelt zwei Bildern, die auf eine Projektionsfläche gestrahlt werden.
- `overlay`
  - : Die endgültige Farbe verwendet `multiply`, wenn die untere Farbe dunkler ist, oder `screen`, wenn die untere Farbe heller ist.
    Dieser Mischmodus ist äquivalent zu `hard-light`, jedoch mit vertauschten Ebenen.
- `darken`
  - : Die endgültige Farbe setzt sich aus den dunkelsten Werten jedes Farbkanals zusammen.
- `lighten`
  - : Die endgültige Farbe setzt sich aus den hellsten Werten jedes Farbkanals zusammen.
- `color-dodge`
  - : Die endgültige Farbe ergibt sich aus der Division der unteren Farbe durch die Inverse der oberen Farbe.
    Eine schwarze Vordergrundfarbe führt zu keiner Änderung. Eine Vordergrundfarbe, die der Inversen der Hintergrundfarbe entspricht, führt zu einer vollständig aufgehellten Farbe.
    Dieser Mischmodus ähnelt `screen`, aber der Vordergrund muss nur so hell wie die Inverse des Hintergrunds sein, um eine vollständig aufgehellte Farbe zu erzeugen.
- `color-burn`
  - : Die endgültige Farbe ergibt sich aus der Invertierung der unteren Farbe, deren Division durch die obere Farbe und der erneuten Invertierung.
    Eine weiße Vordergrundfarbe führt zu keiner Änderung. Eine Vordergrundfarbe, die der Inversen der Hintergrundfarbe entspricht, ergibt eine vollständig schwarze Endfarbe.
    Dieser Mischmodus ähnelt `multiply`, jedoch muss der Vordergrund nur so dunkel wie die Inverse des Hintergrunds sein, um das Endbild schwarz zu machen.
- `hard-light`
  - : Die endgültige Farbe verwendet `multiply`, wenn die obere Farbe dunkler ist, oder `screen`, wenn die obere Farbe heller ist.
    Dieser Mischmodus ist äquivalent zu `overlay`, jedoch mit vertauschten Ebenen.
    Der Effekt ähnelt einem _harten_ Spotlight auf den Hintergrund.
- `soft-light`
  - : Die endgültige Farbe ist ähnlich wie `hard-light`, aber sanfter.
    Dieser Mischmodus verhält sich ähnlich wie `hard-light`.
    Der Effekt ähnelt einem _diffusen_ Spotlight auf den Hintergrund.
- `difference`
  - : Die endgültige Farbe ergibt sich aus der Subtraktion der dunkleren von den helleren der beiden Farben.
    Eine schwarze Ebene hat keinen Effekt, während eine weiße Ebene die Farbe der anderen Ebene invertiert.
- `exclusion`
  - : Die endgültige Farbe ist ähnlich wie `difference`, jedoch mit weniger Kontrast.
    Wie bei `difference` hat eine schwarze Ebene keinen Effekt, während eine weiße Ebene die Farbe der anderen Ebene invertiert.
- `hue`
  - : Die endgültige Farbe verwendet den _Farbton_ der oberen Farbe und die _Sättigung_ und _Helligkeit_ der unteren Farbe.
- `saturation`
  - : Die endgültige Farbe verwendet die _Sättigung_ der oberen Farbe und den _Farbton_ und die _Helligkeit_ der unteren Farbe.
    Ein rein grauer Hintergrund, der keine Sättigung aufweist, hat keinen Effekt.
- `color`
  - : Die endgültige Farbe verwendet den _Farbton_ und die _Sättigung_ der oberen Farbe und die _Helligkeit_ der unteren Farbe.
    Der Effekt bewahrt Graustufen und kann verwendet werden, um den Vordergrund einzufärben.
- `luminosity`
  - : Die endgültige Farbe verwendet die _Helligkeit_ der oberen Farbe und den _Farbton_ und die _Sättigung_ der unteren Farbe.
    Dieser Mischmodus ist äquivalent zu `color`, jedoch mit vertauschten Ebenen.

## Beschreibung

Für jedes Pixel unter den Ebenen, auf die es angewendet wird, nimmt ein Mischmodus die Farben des Vorder- und Hintergrunds, berechnet sie und gibt einen neuen Farbwert zurück.

Änderungen zwischen Mischmodi werden nicht interpoliert. Jede Änderung tritt sofort ein.

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

Im folgenden Beispiel haben wir ein `<div>` mit zwei Hintergrundbildern — ein Firefox-Logo auf einem Farbverlauf. Darunter gibt es ein `<select>` Dropdown-Menü, mit dem Sie den `background-blend-mode` des `<div>` ändern und die unterschiedlichen Mischmodus-Effekte vergleichen können.

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

- Das [CSS compositing and blending](/de/docs/Web/CSS/CSS_compositing_and_blending) Modul, das die `<blend-mode>` Werte definiert.
- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}

Beschreibung der verschiedenen Mischmodi auf anderen Websites:

- [Blend modes](https://en.wikipedia.org/wiki/Blend_modes) auf Wikipedia
- [Blending modes in Adobe Photoshop](https://helpx.adobe.com/photoshop/using/blending-modes.html) von Adobe
