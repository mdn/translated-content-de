---
title: <filter-function>
slug: Web/CSS/Reference/Values/filter-function
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<filter-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert einen grafischen Effekt, der das Erscheinungsbild eines Eingabebildes verändern kann. Er wird in den Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet.

## Syntax

Der `<filter-function>` Datentyp wird unter Verwendung einer der unten aufgeführten Filterfunktionen angegeben. Jede Funktion erfordert ein Argument, das, falls ungültig, dazu führt, dass kein Filter angewendet wird.

- {{cssxref("filter-function/blur", "blur()")}}
  - : Weichzeichnet das Bild.
- {{cssxref("filter-function/brightness", "brightness()")}}
  - : Macht das Bild heller oder dunkler.
- {{cssxref("filter-function/contrast", "contrast()")}}
  - : Erhöht oder verringert den Kontrast des Bildes.
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - : Wendet einen Schlagschatten hinter dem Bild an.
- {{cssxref("filter-function/grayscale", "grayscale()")}}
  - : Konvertiert das Bild in Graustufen.
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ändert den gesamten Farbton des Bildes.
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

Dieses Beispiel bietet eine Grafik, ein Auswahlmenü, mit dem Sie zwischen den verschiedenen Arten von Filterfunktionen wählen können, und einen Schieberegler, mit dem Sie die innerhalb der Filterfunktion verwendeten Werte variieren können. Die Aktualisierung der Steuerelemente aktualisiert den Filtereffekt in Echtzeit, sodass Sie die Effekte verschiedener Filter untersuchen können.

Das Dropdown-Menü wählt den Funktionsnamen aus, und der Schieberegler setzt den Parameterwert für diese Funktion. Für `drop-shadow` wird der Wert sowohl für die horizontalen als auch vertikalen Versätze verwendet, und der Radius wird auf die Hälfte des Wertes gesetzt.

```html hidden live-sample___filter-functions
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

```css hidden live-sample___filter-functions
div {
  width: 100%;
  height: 512px;
  background-image: url("https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png");
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
