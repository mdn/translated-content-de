---
title: "SVGStyleElement: media-Eigenschaft"
short-title: media
slug: Web/API/SVGStyleElement/media
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("SVG")}}

Die **`SVGStyleElement.media`**-Eigenschaft ist ein Media-Query-String, der dem [`media`](/de/docs/Web/SVG/Reference/Element/style#media)-Attribut des angegebenen SVG-Stilelements entspricht.

Die Abfrage muss übereinstimmen, damit der Stil angewendet wird.

## Wert

Ein String, der eine gültige Media-Query-Liste mit einem oder mehreren kommagetrennten Werten definiert.
Zum Beispiel `"screen, print"` oder `"all"` (der Standardwert).

Der Wert wird mit dem im entsprechenden Stil angegebenen String im [`media`](/de/docs/Web/SVG/Reference/Element/style#media)-Attribut initialisiert.

## Beispiele

Dieses Beispiel demonstriert, wie die media-Eigenschaft eines in einer SVG-Definition definierten Stils programmgesteuert abgerufen und gesetzt wird.

### HTML

Das HTML enthält eine SVG-Definition für einen [`<circle>`](/de/docs/Web/SVG/Reference/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Reference/Element/style)-Element, das bedingt durch die Media-Query `"(width >= 600px)"` ist. Wir definieren auch einen `button`, der verwendet wird, um den aktuellen Stil anzuzeigen und den Stil zu ändern.

```html
<button>Media unknown</button>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle cx="60" cy="60" r="50" />
</svg>
```

### JavaScript

Der folgende Code holt das `style`-Element (ein `SVGStyleElement`) mit seiner ID.

```js
const svg = document.querySelector("svg");
// Create the `style` element in the SVG namespace
const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
const node = document.createTextNode("circle { fill: red; }");
svg.appendChild(style);
style.appendChild(node);
```

Wir fügen dann eine Funktion hinzu, um den Text des Buttons so einzustellen, dass der aktuelle Wert der `media`-Eigenschaft des Stils zusammen mit der aktuellen Fensterbreite angezeigt wird. Diese Funktion wird aufgerufen, um den initialen Button-Text festzulegen, und auch, wenn das Fenster in der Größe verändert wird oder der Button gedrückt wird. Der Button-Ereignishandler setzt auch den Wert der `media`-Eigenschaft des Stils.

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
  style.media = "(width >= 700px)";
  setButtonText();
});
```

### Ergebnis

Das Ergebnis wird unten angezeigt.
Der Button-Text zeigt den ursprünglich auf den SVG-Stil angewendeten Wert des media-Attributs zusammen mit der Breite des aktuellen Rahmens (da der Code in einem Rahmen ausgeführt wird). Verringern Sie die Breite des Rahmens auf die im Button angezeigte Media-Query-Breite, um den Stil angewendet zu sehen. Drücken Sie den Button, um den Wert der `media`-Eigenschaft im Stil zu ändern (dies wird auf dem Button reflektiert).

{{EmbedLiveSample("Examples")}}

> [!NOTE]
> Die `media`-Eigenschaft kann auf jeden beliebigen String gesetzt werden, wird jedoch ignoriert, wenn der String keine gültige Media-Query ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLStyleElement.media`](/de/docs/Web/API/HTMLStyleElement/media)
