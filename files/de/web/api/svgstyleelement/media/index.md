---
title: "SVGStyleElement: media-Eigenschaft"
short-title: media
slug: Web/API/SVGStyleElement/media
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`SVGStyleElement.media`**-Eigenschaft ist ein Media-Query-String, der dem [`media`](/de/docs/Web/SVG/Reference/Element/style#media)-Attribut des angegebenen SVG-Stilelements entspricht.

Die Abfrage muss übereinstimmen, damit der Stil angewendet wird.

## Wert

Ein String, der eine gültige Medialiste mit einem oder mehreren kommagetrennten Werten definiert.
Zum Beispiel `"screen, print"` oder `"all"` (der Standardwert).

Der Wert wird mit dem im entsprechenden Stil angegebenen String des [`media`](/de/docs/Web/SVG/Reference/Element/style#media)-Attributs initialisiert.

## Beispiele

Dieses Beispiel zeigt, wie die Media-Eigenschaft eines Stils, der in einer SVG-Definition definiert wurde, programmgesteuert abgerufen und festgelegt wird.

### HTML

Das HTML enthält eine SVG-Definition für ein [`<circle>`](/de/docs/Web/SVG/Reference/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Reference/Element/style)-Element, das bedingt auf die Media-Query `"all and (min-width: 600px)"` angewendet wird.
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

Der folgende Code ruft das `style`-Element (ein `SVGStyleElement`) mit seiner ID ab.

```js
const svg = document.querySelector("svg");
// Create the `style` element in the SVG namespace
const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
const node = document.createTextNode("circle { fill: red; }");
svg.appendChild(style);
style.appendChild(node);
```

Anschließend fügen wir eine Funktion hinzu, die den Text des Buttons darauf einstellt, den aktuellen Wert der `media`-Eigenschaft des Stils zusammen mit der aktuellen Fensterbreite anzuzeigen.
Diese Funktion wird aufgerufen, um den Initialtext des Buttons einzustellen und auch, wenn das Fenster in der Größe verändert wird oder der Button gedrückt wird.
Der Button-Ereignishandler setzt auch den Wert der `media`-Eigenschaft des Stils.

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
Der Button-Text zeigt den Wert des ursprünglich auf den SVG-Stil angewendeten Media-Attributs zusammen mit der Breite des aktuellen Rahmens (da der Code in einem Rahmen ausgeführt wird).
Verkleinern Sie die Breite des Rahmens auf die im Button angezeigte Media-Query-Breite, um zu sehen, wie der Stil angewendet wird.
Drücken Sie den Button, um den Wert der `media`-Eigenschaft auf dem Stil umzuschalten (was auf dem Button reflektiert wird).

{{EmbedLiveSample("Examples")}}

> [!NOTE]
> Die `media`-Eigenschaft kann auf jeden beliebigen String gesetzt werden, wird jedoch ignoriert, wenn der String keine gültige Media-Query ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLStyleElement.media`](/de/docs/Web/API/HTMLStyleElement/media)
