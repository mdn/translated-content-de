---
title: "SVGStyleElement: media-Eigenschaft"
short-title: media
slug: Web/API/SVGStyleElement/media
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Die **`SVGStyleElement.media`**-Eigenschaft ist eine Media-Query-Zeichenkette, die dem [`media`](/de/docs/Web/SVG/Element/style#media)-Attribut des angegebenen SVG-Stilelements entspricht.

Die Query muss zutreffen, damit der Stil angewendet wird.

## Wert

Ein String, der eine gültige Liste von Media-Queries mit einem oder mehreren durch Kommata getrennten Werten definiert.
Zum Beispiel `"screen, print"` oder `"all"` (der Standardwert).

Der Wert wird mit dem String initialisiert, der im entsprechenden [`media`](/de/docs/Web/SVG/Element/style#media)-Attribut des Stils angegeben ist.

## Beispiele

Dieses Beispiel zeigt, wie die `media`-Eigenschaft eines Stils, der in einer SVG-Definition definiert wurde, programmgesteuert abgerufen und gesetzt werden kann.

### HTML

Das HTML enthält eine SVG-Definition für einen [`<circle>`](/de/docs/Web/SVG/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Element/style)-Element, das von der Media-Query `"all and (min-width: 600px)"` abhängig ist.
Wir definieren auch einen `button`, der verwendet wird, um den aktuellen Stil anzuzeigen und den Stil zu ändern.

```html
<button></button>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle cx="60" cy="60" r="50" />
</svg>
```

### JavaScript

Der untenstehende Code holt das `style`-Element (ein `SVGStyleElement`) mittels seiner ID.

```js
const svg = document.querySelector("svg");
// Create the `style` element in the SVG namespace
const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
const node = document.createTextNode("circle { fill: red; }");
svg.appendChild(style);
style.appendChild(node);
```

Wir fügen dann eine Funktion hinzu, um den Text des Buttons so zu setzen, dass er den aktuellen Wert der `media`-Eigenschaft des Stils zusammen mit der aktuellen Fensterbreite zeigt.
Diese Funktion wird aufgerufen, um den initialen Buttontext zu setzen und auch, wenn das Fenster neu dimensioniert wird oder der Button gedrückt wird.
Der Button-Event-Handler setzt ebenfalls den Wert der `media`-Eigenschaft des Stils.

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
Der Buttontext zeigt den ursprünglich auf den SVG-Stil angewendeten Wert des Media-Attributs zusammen mit der Breite des aktuellen Fensters (da der Code in einem Frame ausgeführt wird).
Verkleinern Sie die Breite des Frames auf die im Button angezeigte Media-Query-Breite, um zu beobachten, wie der Stil angewendet wird.
Drücken Sie den Button, um den Wert der `media`-Eigenschaft des Stils zu ändern (was sich im Button widerspiegeln wird).

{{EmbedLiveSample("Examples")}}

> [!NOTE]
> Die `media`-Eigenschaft kann auf jeden String gesetzt werden, wird jedoch ignoriert, wenn der String keine gültige Media-Query ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLStyleElement.media`](/de/docs/Web/API/HTMLStyleElement/media)
