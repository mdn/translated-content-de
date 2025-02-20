---
title: <filter-function>
slug: Web/CSS/filter-function
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<filter-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen grafischen Effekt, der das Aussehen eines Eingabebildes verändern kann. Er wird in den Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet.

## Syntax

Der `<filter-function>`-Datentyp wird mittels einer der unten aufgelisteten Filterfunktionen angegeben. Jede Funktion benötigt ein Argument, welches, falls es ungültig ist, dazu führt, dass kein Filter angewendet wird.

- {{cssxref("filter-function/blur", "blur()")}}
  - : Macht das Bild unscharf.
- {{cssxref("filter-function/brightness", "brightness()")}}
  - : Macht das Bild heller oder dunkler.
- {{cssxref("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Kontrast des Bildes.
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - : Wendet einen Schlagschatten hinter dem Bild an.
- {{cssxref("filter-function/grayscale", "grayscale()")}}
  - : Konvertiert das Bild in Graustufen.
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert den Gesamteindruck der Farbtöne des Bildes.
- {{cssxref("filter-function/invert", "invert()")}}
  - : Kehrt die Farben des Bildes um.
- {{cssxref("filter-function/opacity", "opacity()")}}
  - : Macht das Bild transparent.
- {{cssxref("filter-function/saturate", "saturate()")}}
  - : Über-sättigt oder entsättigt das Eingabebild.
- {{cssxref("filter-function/sepia", "sepia()")}}
  - : Konvertiert das Bild in Sepia.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von Filterfunktionen

Dieses Beispiel zeigt eine einfache Grafik zusammen mit einem Auswahlmenü, mit dem Sie zwischen den verschiedenen Arten von Filterfunktionen wählen können, und einem Schieberegler, mit dem Sie die Werte innerhalb der Filterfunktion variieren können. Durch Ändern der Steuerelemente wird der Filtereffekt in Echtzeit aktualisiert, sodass Sie die Auswirkungen der verschiedenen Filter untersuchen können.

```css
div {
  width: 100%;
  height: 512px;
  background: url(fx-nightly-512.png);
  background-repeat: no-repeat;
  background-position: center center;
  filter: <filter-function>(<value>);
}
```

Hierbei ist `<filter-function>` der Filter, den Sie aus dem Dropdown-Menü auswählen, und `<value>` die Werte, die Sie mit dem Schieberegler einstellen:

```html live-sample___filter-functions
<div></div>
<ul>
  <li>
    <label for="filter-select">Choose a filter function:</label>
    <select id="filter-select">
      <option selected>blur</option>
      <option>brightness</option>
      <option>contrast</option>
      <option>drop-shadow</option>
      <option>grayscale</option>
      <option>hue-rotate</option>
      <option>invert</option>
      <option>opacity</option>
      <option>saturate</option>
      <option>sepia</option>
    </select>
  </li>
  <li><input type="range" /><output></output></li>
  <li>
    <p>Current value: <code></code></p>
  </li>
</ul>
```

```css live-sample___filter-functions
div {
  width: 100%;
  height: 512px;
  background-image: url(https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png);
  background-repeat: no-repeat;
  background-position: center center;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

input {
  width: 60%;
}

output {
  width: 5%;
  text-align: center;
}

select {
  width: 40%;
  margin-left: 2px;
}
```

```js hidden live-sample___filter-functions
const selectElem = document.querySelector("select");
const divElem = document.querySelector("div");
const slider = document.querySelector("input");
const output = document.querySelector("output");
const curValue = document.querySelector("p code");

selectElem.addEventListener("change", () => {
  setSlider(selectElem.value);
  setDiv(selectElem.value);
});

slider.addEventListener("input", () => {
  setDiv(selectElem.value);
});

function setSlider(filter) {
  switch (filter) {
    case "blur":
      slider.value = 0;
      slider.min = 0;
      slider.max = 30;
      slider.step = 1;
      slider.setAttribute("data-unit", "px");
      break;
    case "brightness":
    case "contrast":
    case "saturate":
      slider.value = 1;
      slider.min = 0;
      slider.max = 4;
      slider.step = 0.05;
      slider.setAttribute("data-unit", "");
      break;
    case "drop-shadow":
      slider.value = 0;
      slider.min = -20;
      slider.max = 40;
      slider.step = 1;
      slider.setAttribute("data-unit", "px");
      break;
    case "opacity":
      slider.value = 1;
      slider.min = 0;
      slider.max = 1;
      slider.step = 0.01;
      slider.setAttribute("data-unit", "");
      break;
    case "grayscale":
    case "invert":
    case "sepia":
      slider.value = 0;
      slider.min = 0;
      slider.max = 1;
      slider.step = 0.01;
      slider.setAttribute("data-unit", "");
      break;
    case "hue-rotate":
      slider.value = 0;
      slider.min = 0;
      slider.max = 360;
      slider.step = 1;
      slider.setAttribute("data-unit", "deg");
      break;
    default:
      console.error("Unknown filter set");
  }
}

function setDiv(filter) {
  const unit = slider.getAttribute("data-unit");
  const offset = `${Math.round(slider.value)}${unit}`;
  const radius = `${Math.round(Math.abs(slider.value / 2))}${unit}`;
  divElem.style.filter =
    filter === "drop-shadow"
      ? `${selectElem.value}(${offset} ${offset} ${radius})`
      : `${selectElem.value}(${slider.value}${unit})`;

  updateOutput();
  updateCurValue();
}

function updateOutput() {
  output.textContent = slider.value;
}

function updateCurValue() {
  curValue.textContent = `filter: ${divElem.style.filter}`;
}

setSlider(selectElem.value);
setDiv(selectElem.value);
```

{{EmbedLiveSample("filter-functions", "", "700px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("filter")}} und {{cssxref("backdrop-filter")}}
