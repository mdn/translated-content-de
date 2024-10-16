---
title: "Document: mozSetImageElement() Methode"
short-title: mozSetImageElement()
slug: Web/API/Document/mozSetImageElement
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{ ApiRef("DOM") }}{{ non-standard_header() }}

Die **`Document.mozSetImageElement()`** Methode ändert das Element, das als CSS-Hintergrund für einen Hintergrund mit einer bestimmten Hintergrundelement-ID verwendet wird.

## Syntax

```js-nolint
mozSetImageElement(imageElementId, imageElement)
```

### Parameter

- `imageElementId`
  - : Ein String, der den Namen eines Elements angibt, das als Hintergrundbild mittels der {{ cssxref("element", "-moz-element") }} CSS-Funktion festgelegt wurde.
- `imageElement`
  - : Das neue Element, das als Hintergrund entsprechend diesem Bild-Element-String verwendet werden soll. Geben Sie `null` an, um das Hintergrundelement zu entfernen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel ändert den Hintergrund eines {{ HTMLElement("div") }}-Blocks jedes Mal, wenn der Block von der Nutzerin / dem Nutzer angeklickt wird.

[Sehen Sie dieses Beispiel live](https://mdn.dev/archives/media/samples/domref/mozSetImageElement.html).

```html
<style>
  #my-box {
    background-image: -moz-element(#canvas-bg);
    text-align: center;
    width: 400px;
    height: 400px;
    cursor: pointer;
  }
</style>
```

Das im obigen {{ HTMLElement("style") }}-Block definierte CSS wird von unserem {{ HTMLElement("div") }} verwendet, um ein Element mit der ID "canvas-bg" als Hintergrund zu verwenden.

```js
let c = 0x00;
function clicked() {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("width", 100);
  canvas.setAttribute("height", 100);

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = `#${c.toString(16)}0000`;
  ctx.fillRect(25, 25, 75, 75);

  c += 0x11;
  if (c > 0xff) {
    c = 0x00;
  }

  document.mozSetImageElement("canvas-bg", canvas);
}
```

Der Code hier wird jedes Mal aufgerufen, wenn die Nutzerin / der Nutzer das {{ HTMLElement("div") }}-Element anklickt. Es wird ein neues {{ HTMLElement("canvas") }} erstellt, dessen Breite und Höhe auf 100 Pixel gesetzt sind, und es wird ein Quadrat von 50 mal 50 Pixeln darin gezeichnet. Jedes Mal, wenn die Funktion aufgerufen wird, hat das Quadrat eine andere Farbe (seine rote Komponente wird jedes Mal erhöht), sodass bei jedem Klick der Nutzerin / des Nutzers auf das Element der Hintergrund mit einem immer leuchtenderen Muster aus roten Kacheln gefüllt ist.

Sobald das Canvas gezeichnet ist, wird `document.mozSetImageElement()` aufgerufen, um den Hintergrund für jedes CSS, das die ID "canvas-bg" als Hintergrundelement-ID verwendet, auf unser neues Canvas zu setzen.

## Spezifikationen

Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ cssxref("element", "-moz-element") }}
