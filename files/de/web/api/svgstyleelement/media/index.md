---
title: "SVGStyleElement: media-Eigenschaft"
short-title: media
slug: Web/API/SVGStyleElement/media
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("SVG")}}

Die **`SVGStyleElement.media`**-Eigenschaft ist eine Media Query-Zeichenkette, die dem [`media`](/de/docs/Web/SVG/Reference/Element/style#media)-Attribut des gegebenen SVG-Style-Elements entspricht.

Die Abfrage muss übereinstimmen, damit der Stil angewendet wird.

## Wert

Eine Zeichenkette, die eine gültige Liste von Media Queries mit einem oder mehreren durch Kommas getrennten Werten definiert. Zum Beispiel `"screen, print"` oder `"all"` (der Standardwert).

Der Wert wird mit der im entsprechenden Stil angegebenen Zeichenkette im [`media`](/de/docs/Web/SVG/Reference/Element/style#media)-Attribut initialisiert.

## Beispiele

Dieses Beispiel demonstriert das programmgesteuerte Abrufen und Setzen der media-Eigenschaft bei einem Stil, der in einer SVG-Definition definiert wurde.

### HTML

Das HTML enthält eine SVG-Definition für einen [`<circle>`](/de/docs/Web/SVG/Reference/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Reference/Element/style)-Element, das von der Media Query `"(width >= 600px)"` bedingt ist. Wir definieren auch einen `button`, der verwendet wird, um den aktuellen Stil anzuzeigen und den Stil zu ändern.

```html
<button></button>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle cx="60" cy="60" r="50" />
</svg>
```

### JavaScript

Der folgende Code ruft das `style`-Element (ein `SVGStyleElement`) mithilfe seiner ID ab.

```js
const svg = document.querySelector("svg");
// Create the `style` element in the SVG namespace
const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
const node = document.createTextNode("circle { fill: red; }");
svg.appendChild(style);
style.appendChild(node);
```

Wir fügen dann eine Funktion hinzu, um den Button-Text so zu setzen, dass der aktuelle Wert der `media`-Eigenschaft des Stils zusammen mit der aktuellen Fensterbreite angezeigt wird. Diese Funktion wird aufgerufen, um den initialen Button-Text zu setzen, und auch wenn das Fenster verändert oder der Button gedrückt wird. Der Button-Event-Handler setzt auch den Wert der `media`-Eigenschaft des Stils.

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

Das Ergebnis wird unten gezeigt. Der Button-Text zeigt den Wert des ursprünglich auf den SVG-Stil angewendeten `media`-Attributs zusammen mit der Breite des aktuellen Rahmens (da der Code in einem Rahmen ausgeführt wird). Verringern Sie die Breite des Rahmens auf die im Button angezeigte Media Query-Breite, um zu beobachten, wie der Stil angewendet wird. Drücken Sie den Button, um den Wert der `media`-Eigenschaft im Stil umzuschalten (dies wird im Button reflektiert).

{{EmbedLiveSample("Examples")}}

> [!NOTE]
> Die `media`-Eigenschaft kann auf jede Zeichenkette gesetzt werden, wird aber ignoriert, wenn die Zeichenkette keine gültige Media Query ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLStyleElement.media`](/de/docs/Web/API/HTMLStyleElement/media)
