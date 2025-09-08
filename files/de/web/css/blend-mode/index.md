---
title: <blend-mode>
slug: Web/CSS/blend-mode
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
---

Der **`<blend-mode>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) beschreibt, wie Farben erscheinen sollen, wenn sich Elemente überlappen. Er wird in den Eigenschaften {{cssxref("background-blend-mode")}} und {{cssxref("mix-blend-mode")}} verwendet.

## Syntax

Der `<blend-mode>` Datentyp wird mit einem Schlüsselwortwert definiert, der aus der nachstehenden Liste ausgewählt wird.

### Werte

- `normal`
  - : Die endgültige Farbe ist die obere Farbe, unabhängig von der unteren Farbe.
    Der Effekt ähnelt zwei undurchsichtigen Papierstücken, die sich überlappen.
- `multiply`
  - : Die endgültige Farbe ist das Ergebnis der Multiplikation der oberen und unteren Farben.
    Eine schwarze Ebene führt zu einer schwarzen Endebene, und eine weiße Ebene führt zu keiner Änderung.
    Der Effekt ähnelt zwei Bildern, die auf transparentem Film überlappen.
- `screen`
  - : Die endgültige Farbe ist das Ergebnis der Invertierung der Farben, deren Multiplikation und der Invertierung des Wertes.
    Eine schwarze Ebene führt zu keiner Änderung, und eine weiße Ebene führt zu einer weißen Endebene.
    Der Effekt ähnelt zwei Bildern, die auf eine Leinwand projiziert werden.
- `overlay`
  - : Die endgültige Farbe ist das Ergebnis von `multiply`, wenn die untere Farbe dunkler ist, oder `screen`, wenn die untere Farbe heller ist.
    Dieser Mischmodus ist gleichbedeutend mit `hard-light`, jedoch mit vertauschten Ebenen.
- `darken`
  - : Die endgültige Farbe besteht aus den dunkelsten Werten jedes Farbkanals.
- `lighten`
  - : Die endgültige Farbe besteht aus den hellsten Werten jedes Farbkanals.
- `color-dodge`
  - : Die endgültige Farbe ist das Ergebnis der Division der unteren Farbe durch die Inverse der oberen Farbe.
    Eine schwarze Vordergrundfarbe führt zu keiner Änderung. Eine Vordergrundfarbe mit der Inverse der Hintergrundfarbe führt zu einer vollständig beleuchteten Farbe.
    Dieser Mischmodus ähnelt `screen`, jedoch muss der Vordergrund nur so hell sein wie die Inverse der Hintergrundfarbe, um eine vollständig beleuchtete Farbe zu erzeugen.
- `color-burn`
  - : Die endgültige Farbe ist das Ergebnis der Invertierung der unteren Farbe, der Division des Wertes durch die obere Farbe und der Invertierung dieses Wertes.
    Ein weißer Vordergrund führt zu keiner Änderung. Eine Vordergrundfarbe mit der Inverse der Hintergrundfarbe führt zu einem schwarzen Endbild.
    Dieser Mischmodus ähnelt `multiply`, jedoch muss der Vordergrund nur so dunkel sein wie die Inverse der Hintergrundfarbe, um das Endbild schwarz zu machen.
- `hard-light`
  - : Die endgültige Farbe ist das Ergebnis von `multiply`, wenn die obere Farbe dunkler ist, oder `screen`, wenn die obere Farbe heller ist.
    Dieser Mischmodus ist gleichbedeutend mit `overlay`, jedoch mit vertauschten Ebenen.
    Der Effekt ähnelt einem _harten_ Scheinwerferlicht auf den Hintergrund.
- `soft-light`
  - : Die endgültige Farbe ist ähnlich wie `hard-light`, jedoch weicher.
    Dieser Mischmodus verhält sich ähnlich wie `hard-light`.
    Der Effekt ähnelt einem _diffusen_ Scheinwerferlicht auf den Hintergrund.
- `difference`
  - : Die endgültige Farbe ist das Ergebnis der Subtraktion der dunkleren von den beiden Farben von der helleren.
    Eine schwarze Ebene hat keinen Effekt, während eine weiße Ebene die Farbe der anderen Ebene invertiert.
- `exclusion`
  - : Die endgültige Farbe ist ähnlich wie `difference`, jedoch mit weniger Kontrast.
    Wie bei `difference` hat eine schwarze Ebene keinen Effekt, während eine weiße Ebene die Farbe der anderen Ebene invertiert.
- `hue`
  - : Die endgültige Farbe hat den _Farbton_ der oberen Farbe, während die _Sättigung_ und _Helligkeit_ der unteren Farbe verwendet wird.
- `saturation`
  - : Die endgültige Farbe hat die _Sättigung_ der oberen Farbe, während der _Farbton_ und die _Helligkeit_ der unteren Farbe verwendet wird.
    Ein reiner grauer Hintergrund, der keine Sättigung hat, wird keinen Effekt haben.
- `color`
  - : Die endgültige Farbe hat den _Farbton_ und die _Sättigung_ der oberen Farbe, während die _Helligkeit_ der unteren Farbe verwendet wird.
    Der Effekt bewahrt Graustufen und kann verwendet werden, um den Vordergrund einzufärben.
- `luminosity`
  - : Die endgültige Farbe hat die _Helligkeit_ der oberen Farbe, während der _Farbton_ und die _Sättigung_ der unteren Farbe verwendet wird.
    Dieser Mischmodus ist gleichbedeutend mit `color`, jedoch mit vertauschten Ebenen.

## Beschreibung

Für jedes Pixel zwischen den angewendeten Ebenen nimmt ein Mischmodus die Farben des Vordergrunds und des Hintergrunds, führt eine Berechnung durch und gibt einen neuen Farbwert zurück.

Änderungen zwischen Mischmodi werden nicht interpoliert. Jede Änderung erfolgt unmittelbar.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel mit "normal"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 150px;
  height: 150px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: normal;
}
```

Setzen Sie andere Werte für `background-blend-mode`, Sie erhalten unterschiedliche Ergebnisse.

{{ EmbedLiveSample('Example using "normal"', "100%", "300") }}

### Vergleich zwischen verschiedenen Werten mit `background-blend-mode`

```html hidden
<div class="container"></div>
```

```css
.container {
  width: 720px;
  height: 760px;
  display: grid;
  grid: auto-flow 190px / repeat(4, 180px);
  border-top: 1px solid #d8d8d8;
  border-left: 1px solid #d8d8d8;
}

.container > div {
  border-right: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
}

.container div div {
  margin-left: 15px;
  width: 150px;
  height: 150px;
  background: url("br.png"), url("tr.png");
}

.container div p {
  line-height: 30px;
  margin: 0;
  color: #a33333;
  text-align: center;
}
```

```js
const list = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
];

const containerElem = document.querySelector(".container");

list.forEach((item) => {
  const innerElem = document.createElement("div");
  innerElem.style.backgroundBlendMode = item;

  const textElem = document.createElement("p");
  textElem.innerText = item;

  const outerElem = document.createElement("div");
  outerElem.appendChild(textElem);
  outerElem.appendChild(innerElem);

  containerElem.appendChild(outerElem);
});
```

Erstellen Sie mehrere `div`-Elemente, indem Sie eine Liste durchsuchen und für jedes einen unterschiedlichen `backgroundBlendMode`-Wert setzen.

{{ EmbedLiveSample('Comparison between different values with `background-blend-mode`', "100%", "780") }}

### Vergleich zwischen verschiedenen Werten mit `mix-blend-mode`

```html hidden
<div class="container"></div>
```

```css hidden
.container {
  width: 640px;
  height: 800px;
  display: grid;
  grid: auto-flow 160px / repeat(4, 160px);
  border-top: 1px solid #d8d8d8;
  border-left: 1px solid #d8d8d8;
}

.container > div {
  border-right: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
}

.container > div > div {
  position: relative;
  margin-left: 20px;
  width: 120px;
  height: 120px;
}

.container div p {
  margin: 0;
  line-height: 30px;
  color: #a33333;
  text-align: center;
}
.circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  mix-blend-mode: screen;
  position: absolute;
}

.circle-1 {
  background: red;
}

.circle-2 {
  background: lightgreen;
  left: 40px;
}

.circle-3 {
  background: blue;
  left: 20px;
  top: 40px;
}

.isolate {
  isolation: isolate; /* Without isolation, the background color will be taken into account */
  position: relative;
}
```

```js hidden
const list = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
  "plus-darker",
  "plus-lighter",
];

const containerElem = document.querySelector(".container");

list.forEach((item) => {
  const innerElem = document.createElement("div");
  innerElem.innerHTML = `
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle circle-3"></div>
  `;

  innerElem.querySelectorAll(".circle").forEach((circle) => {
    circle.style.mixBlendMode = item;
  });

  const textElem = document.createElement("p");
  textElem.innerText = item;

  const outerElem = document.createElement("div");
  outerElem.appendChild(textElem);
  outerElem.appendChild(innerElem);

  containerElem.appendChild(outerElem);
});
```

Im folgenden Beispiel erstellen wir mehrere `<div>`-Elemente, indem wir eine Liste durchsuchen und für jedes unterschiedliche `mixBlendMode`-Werte setzen.

{{ EmbedLiveSample('Comparison between different values with `mix-blend-mode`', "100%", "820") }}

### Vergleich der Mischmodi

Im folgenden Beispiel haben wir ein `<div>` mit zwei darauf gesetzten Hintergrundbildern – ein Firefox-Logo über einem linearen Verlauf. Darunter haben wir ein `<select>`-Menü bereitgestellt, mit dem Sie den auf das `<div>` angewendeten `background-blend-mode` ändern können, damit Sie die verschiedenen Effekte der Mischmodi vergleichen können.

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

- Das [CSS Compositing and Blending](/de/docs/Web/CSS/CSS_compositing_and_blending) Modul, das die `<blend-mode>` Werte definiert.
- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}

Beschreibung zu verschiedenen Mischmodi auf anderen Websites:

- [Blend modes](https://en.wikipedia.org/wiki/Blend_modes) auf Wikipedia
- [Blending modes in Adobe Photoshop](https://helpx.adobe.com/photoshop/using/blending-modes.html) von Adobe
