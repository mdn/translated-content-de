---
title: "SVGStyleElement: media-Eigenschaft"
short-title: media
slug: Web/API/SVGStyleElement/media
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Die **`SVGStyleElement.media`**-Eigenschaft ist ein Media-Query-String, der dem [`media`](/de/docs/Web/SVG/Element/style#media)-Attribut des angegebenen SVG-Stilelements entspricht.

Die Abfrage muss übereinstimmen, damit der Stil angewendet wird.

## Wert

Ein String, der eine gültige Liste von Media-Queries mit einem oder mehreren durch Kommas getrennten Werten definiert.
Zum Beispiel `"screen, print"` oder `"all"` (die Standardeinstellung).

Der Wert wird mit dem String initialisiert, der im entsprechenden Stil-Attribut [`media`](/de/docs/Web/SVG/Element/style#media) angegeben ist.

## Beispiele

Dieses Beispiel zeigt, wie man die media-Eigenschaft eines Stils, der in einer SVG-Definition definiert wurde, programmatisch abrufen und setzen kann.

### HTML

Das HTML enthält eine SVG-Definition für einen [`<circle>`](/de/docs/Web/SVG/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Element/style)-Element, das an die Media-Query `"all and (min-width: 600px)"` gebunden ist.
Wir definieren auch einen `button`, der verwendet wird, um den aktuellen Stil anzuzeigen und zu ändern.

```html
<button></button>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle cx="60" cy="60" r="50" />
</svg>
```

### JavaScript

Der folgende Code erhält das `style`-Element (ein `SVGStyleElement`) mit seiner ID.

```js
const svg = document.querySelector("svg");
// Erstellen Sie das `style`-Element im SVG-Namespace
const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
const node = document.createTextNode("circle { fill: red; }");
svg.appendChild(style);
style.appendChild(node);
```

Wir fügen dann eine Funktion hinzu, die den Button-Text so setzt, dass er den aktuellen Wert der `media`-Eigenschaft des Stils zusammen mit der aktuellen Fensterbreite anzeigt.
Diese Funktion wird aufgerufen, um den anfänglichen Button-Text zu setzen, und auch, wenn das Fenster neu dimensioniert oder der Button gedrückt wird.
Der Button-Event-Handler setzt auch den Wert der `media`-Eigenschaft des Stils.

```js
const button = document.querySelector("button");

function setButtonText() {
  button.textContent = `Media: ${style.media} (Width: ${window.innerWidth})`;
}
setButtonText();

addEventListener("resize", () => {
  setButtonText();
});

button.addEventListener("click", () => {
  style.media = "all and (min-width: 700px)";
  setButtonText();
});
```

### Ergebnis

Das Ergebnis wird unten gezeigt.
Der Button-Text zeigt den Wert des ursprünglich auf den SVG-Stil angewendeten Medienattributs zusammen mit der Breite des aktuellen Frames an (da der Code in einem Frame ausgeführt wird).
Verkleinern Sie die Breite des Frames auf die im Button angezeigte Media-Query-Breite, um den Stil angewendet zu sehen.
Drücken Sie den Button, um den Wert der `media`-Eigenschaft im Stil umzuschalten (was sich auf dem Button widerspiegelt).

{{EmbedLiveSample("Examples")}}

> [!NOTE]
> Die `media`-Eigenschaft kann auf jeden beliebigen String gesetzt werden, wird jedoch ignoriert, wenn der String keine gültige Media-Query ist.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLStyleElement.media")}}
