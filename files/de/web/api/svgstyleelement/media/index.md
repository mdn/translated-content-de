---
title: "SVGStyleElement: media-Eigenschaft"
short-title: media
slug: Web/API/SVGStyleElement/media
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Die **`SVGStyleElement.media`**-Eigenschaft ist ein Medienabfrage-String, der dem [`media`](/de/docs/Web/SVG/Element/style#media)-Attribut des gegebenen SVG-Stilelements entspricht.

Die Abfrage muss übereinstimmen, damit der Stil angewendet wird.

## Wert

Ein String, der eine gültige Medienabfrageliste mit einem oder mehreren kommagetrennten Werten definiert. Zum Beispiel `"screen, print"` oder `"all"` (der Standardwert).

Der Wert wird mit dem im entsprechenden Stil angegebenen String des [`media`](/de/docs/Web/SVG/Element/style#media)-Attributs initialisiert.

## Beispiele

Dieses Beispiel zeigt, wie die `media`-Eigenschaft eines in einer SVG-Definition definierten Stils programmatisch abgerufen und gesetzt werden kann.

### HTML

Das HTML enthält eine SVG-Definition für ein [`<circle>`](/de/docs/Web/SVG/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Element/style)-Element, das abhängig von der Medienabfrage `"all and (min-width: 600px)"` ist.
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

Der folgende Code ruft das `style`-Element (ein `SVGStyleElement`) über seine ID ab.

```js
const svg = document.querySelector("svg");
// Create the `style` element in the SVG namespace
const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
const node = document.createTextNode("circle { fill: red; }");
svg.appendChild(style);
style.appendChild(node);
```

Anschließend fügen wir eine Funktion hinzu, die den Text des Buttons so setzt, dass der aktuelle Wert der `media`-Eigenschaft des Stils zusammen mit der aktuellen Fensterbreite angezeigt wird.
Diese Funktion wird aufgerufen, um den anfänglichen Button-Text festzulegen, sowie wenn das Fenster in der Größe verändert oder der Button gedrückt wird.
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

Das Ergebnis wird unten gezeigt. Der Button-Text zeigt den Wert des ursprünglich auf das SVG-Stil angewendeten media-Attributs zusammen mit der Breite des aktuellen Rahmens (da der Code in einem Rahmen ausgeführt wird).
Verkleinern Sie die Breite des Rahmens auf die im Button angezeigte Medienabfragebreite, um zu beobachten, wie der Stil angewendet wird.
Drücken Sie den Button, um den Wert der `media`-Eigenschaft auf dem Stil zu ändern (was im Button angezeigt wird).

{{EmbedLiveSample("Examples")}}

> [!NOTE]
> Die `media`-Eigenschaft kann auf einen beliebigen String gesetzt werden, wird jedoch ignoriert, wenn der String keine gültige Medienabfrage ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLStyleElement.media`](/de/docs/Web/API/HTMLStyleElement/media)
