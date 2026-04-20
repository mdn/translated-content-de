---
title: "`<blend-mode>` CSS-Typ"
short-title: <blend-mode>
slug: Web/CSS/Reference/Values/blend-mode
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<blend-mode>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) beschreibt, wie Farben erscheinen sollten, wenn sich Elemente überlappen. Er wird in den Eigenschaften {{cssxref("background-blend-mode")}} und {{cssxref("mix-blend-mode")}} verwendet.

## Syntax

Der `<blend-mode>` Datentyp wird durch einen Schlüsselwortwert aus der unten stehenden Liste definiert.

### Werte

- `normal`
  - : Die endgültige Farbe ist die obere Farbe, unabhängig davon, was die untere Farbe ist.
    Der Effekt ist wie bei zwei undurchsichtigen Blatt Papier, die sich überlappen.
- `multiply`
  - : Die endgültige Farbe ist das Ergebnis der Multiplikation der oberen und unteren Farben.
    Eine schwarze Schicht führt zu einer schwarzen Endschicht, und eine weiße Schicht führt zu keiner Veränderung.
    Der Effekt ist wie bei zwei Bildern, die auf transparentem Film überlappen.
- `screen`
  - : Die endgültige Farbe ist das Ergebnis der Umkehrung der Farben, ihrer Multiplikation und der Umkehrung dieses Wertes.
    Eine schwarze Schicht führt zu keiner Veränderung, und eine weiße Schicht führt zu einer weißen Endschicht.
    Der Effekt ist wie bei zwei Bildern, die auf einen Projektionsschirm strahlen.
- `overlay`
  - : Die Endfarbe ergibt sich aus `multiply`, wenn die untere Farbe dunkler ist, oder `screen`, wenn die untere Farbe heller ist.
    Dieser Mischmodus ist äquivalent zu `hard-light`, jedoch mit vertauschten Schichten.
- `darken`
  - : Die endgültige Farbe besteht aus den dunkelsten Werten jedes Farbkanals.
- `lighten`
  - : Die endgültige Farbe besteht aus den hellsten Werten jedes Farbkanals.
- `color-dodge`
  - : Die endgültige Farbe ist das Ergebnis der Division der unteren Farbe durch das Inverse der oberen Farbe.
    Ein schwarzer Vordergrund führt zu keiner Veränderung. Ein Vordergrund mit der inversen Farbe des Hintergrunds führt zu einer vollständig erleuchteten Farbe.
    Dieser Mischmodus ist ähnlich wie `screen`, jedoch muss der Vordergrund nur so hell sein wie das Inverse des Hintergrunds, um eine vollständig erleuchtete Farbe zu erzeugen.
- `color-burn`
  - : Die endgültige Farbe ist das Ergebnis der Inversion der unteren Farbe, der Division dieses Wertes durch die obere Farbe und der Umkehrung dieses Wertes.
    Ein weißer Vordergrund führt zu keiner Veränderung. Ein Vordergrund mit der inversen Farbe des Hintergrunds führt zu einem schwarzen Endbild.
    Dieser Mischmodus ist ähnlich wie `multiply`, jedoch muss der Vordergrund nur so dunkel sein wie das Inverse des Hintergrunds, um das Endbild schwarz zu machen.
- `hard-light`
  - : Die endgültige Farbe ist das Ergebnis von `multiply`, wenn die obere Farbe dunkler ist, oder `screen`, wenn die obere Farbe heller ist.
    Dieser Mischmodus ist äquivalent zu `overlay`, jedoch mit vertauschten Schichten.
    Der Effekt ist ähnlich wie ein _starker_ Scheinwerfer auf den Hintergrund.
- `soft-light`
  - : Die endgültige Farbe ähnelt `hard-light`, ist jedoch weicher.
    Dieser Mischmodus verhält sich ähnlich wie `hard-light`.
    Der Effekt ist ähnlich wie ein _diffuser_ Scheinwerfer auf den Hintergrund.
- `difference`
  - : Die endgültige Farbe ist das Ergebnis der Subtraktion der dunkleren der beiden Farben von der helleren.
    Eine schwarze Schicht hat keinen Effekt, während eine weiße Schicht die Farbe der anderen Schicht invertiert.
- `exclusion`
  - : Die endgültige Farbe ähnelt `difference`, jedoch mit weniger Kontrast.
    Wie bei `difference` hat eine schwarze Schicht keinen Effekt, während eine weiße Schicht die Farbe der anderen Schicht invertiert.
- `hue`
  - : Die Endfarbe hat den _Farbton_ der oberen Farbe, während die _Sättigung_ und _Helligkeit_ der unteren Farbe verwendet wird.
- `saturation`
  - : Die Endfarbe hat die _Sättigung_ der oberen Farbe, während der _Farbton_ und die _Helligkeit_ der unteren Farbe verwendet werden.
    Ein reiner grauer Hintergrund, der keine Sättigung hat, wird keinen Effekt haben.
- `color`
  - : Die Endfarbe hat den _Farbton_ und die _Sättigung_ der oberen Farbe, während die _Helligkeit_ der unteren Farbe verwendet wird.
    Der Effekt bewahrt die Graustufen und kann verwendet werden, um den Vordergrund zu kolorieren.
- `luminosity`
  - : Die Endfarbe hat die _Helligkeit_ der oberen Farbe, während der _Farbton_ und die _Sättigung_ der unteren Farbe verwendet werden.
    Dieser Mischmodus ist äquivalent zu `color`, jedoch mit vertauschten Schichten.

## Beschreibung

Für jedes Pixel unter den angewendeten Schichten nimmt ein Mischmodus die Farben des Vorder- und Hintergrunds, führt eine Berechnung durch und liefert einen neuen Farbwert.

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
  width: 150px;
  height: 150px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: normal;
}
```

Setzen Sie andere Werte für `background-blend-mode` und Sie werden unterschiedliche Ergebnisse erhalten.

{{ EmbedLiveSample('Example using "normal"', "100 %", "300") }}

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

Erstellen Sie mehrere `div`-Elemente, indem Sie eine Liste durchlaufen und setzen Sie für jedes Element einen anderen `backgroundBlendMode`-Wert.

{{ EmbedLiveSample('Vergeich zwischen verschiedenen Werten mit `background-blend-mode`', "100%", "780") }}

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

Im folgenden Beispiel erstellen wir mehrere `<div>`-Elemente, indem wir eine Liste durchlaufen und für jedes einen anderen `mixBlendMode`-Wert setzen.

{{ EmbedLiveSample('Vergleich zwischen verschiedenen Werten mit `mix-blend-mode`', "100%", "820") }}

### Vergleich der Mischmodi

Im folgenden Beispiel haben wir ein `<div>`, auf dem zwei Hintergrundbilder gesetzt sind — ein Firefox-Logo oben auf einem linearen Farbverlauf. Darunter haben wir ein `<select>`-Menü bereitgestellt, das es Ihnen ermöglicht, den `background-blend-mode` auf das `<div>` anzuwenden, sodass Sie die verschiedenen Effekte der Mischmodi vergleichen können.

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

- Das [CSS-Kombinierungs- und Mischungsmodul](/de/docs/Web/CSS/Guides/Compositing_and_blending), das die `<blend-mode>`-Werte definiert.
- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}

Beschreibung zu verschiedenen Mischmodi auf anderen Websites:

- [Mischmodi](https://en.wikipedia.org/wiki/Blend_modes) auf Wikipedia
- [Mischmodi in Adobe Photoshop](https://helpx.adobe.com/photoshop/desktop/repair-retouch/adjust-light-tone/blending-mode-descriptions.html) von Adobe
