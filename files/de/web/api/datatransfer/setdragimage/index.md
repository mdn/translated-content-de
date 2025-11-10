---
title: "DataTransfer: setDragImage() Methode"
short-title: setDragImage()
slug: Web/API/DataTransfer/setDragImage
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML Drag and Drop API")}}

Wenn ein Ziehvorgang stattfindet, wird ein durchscheinendes Bild vom Ziehziel (dem Element, bei dem das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis ausgelöst wird) generiert, das während des Ziehens dem Mauszeiger folgt. Dieses Bild wird automatisch erstellt, sodass Sie es nicht selbst erstellen müssen. Falls jedoch ein benutzerdefiniertes Bild gewünscht wird, kann die **`DataTransfer.setDragImage()`** Methode verwendet werden, um das benutzerdefinierte Bild festzulegen. Das Bild wird typischerweise ein {{HTMLElement("img")}} Element sein, es kann jedoch auch ein {{HTMLElement("canvas")}} oder ein anderes sichtbares Element sein.

Die `x`- und `y`-Koordinaten der Methode definieren, wie das Bild relativ zum Mauszeiger erscheinen soll. Diese Koordinaten definieren den Versatz im Bild, an dem sich der Mauszeiger befinden soll. Um zum Beispiel das Bild so darzustellen, dass der Zeiger in der Mitte liegt, verwenden Sie Werte, die der halben Breite und Höhe des Bildes entsprechen.

Diese Methode muss im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignishandler aufgerufen werden.

## Syntax

```js-nolint
setDragImage(imgElement, xOffset, yOffset)
```

### Parameter

- `imgElement`
  - : Ein Bild [`Element`](/de/docs/Web/API/Element) Element, das für das Ziehfeedbackbild verwendet werden soll.

    Wenn [`Element`](/de/docs/Web/API/Element) ein img-Element ist, dann setzen Sie den Drag-Daten-Store-Bitmap auf das Bild des Elements (in seiner intrinsischen Größe); andernfalls setzen Sie den Drag-Daten-Store-Bitmap auf ein Bild, das aus dem angegebenen Element generiert wird (der genaue Mechanismus dafür ist derzeit nicht spezifiziert).

    Hinweis: Wenn das [`Element`](/de/docs/Web/API/Element) ein bestehendes [`HTMLElement`](/de/docs/Web/API/HTMLElement) ist, muss es im Viewport sichtbar sein, um als Ziehfeedbackbild angezeigt zu werden. Alternativ können Sie ein neues DOM-Element erstellen, das speziell für diesen Zweck außerhalb des Bildschirms liegt.

- `xOffset`
  - : Ein `long`, das den horizontalen Versatz innerhalb des Bildes angibt.
- `yOffset`
  - : Ein `long`, das den vertikalen Versatz innerhalb des Bildes angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von setDragImage()

```html
<div>
  <p id="source" draggable="true">
    Select this element, drag it to the Drop Zone and then release the selection
    to move the element.
  </p>
</div>
<div id="target">Drop Zone</div>
```

```css
div {
  margin: 0em;
  padding: 2em;
}
#source {
  color: blue;
  border: 1px solid black;
}
#target {
  border: 1px solid black;
}
```

```js
const source = document.getElementById("source");
const target = document.getElementById("target");

// Create an image and use it for the drag image
// Use the image URL that you desire
const img = new Image();
img.src = "/shared-assets/images/examples/favicon32.png";

source.addEventListener("dragstart", (ev) => {
  // Set the drag's format and data. Use the event target's id for the data
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dataTransfer.setDragImage(img, 10, 10);
});

target.addEventListener("dragover", (ev) => {
  ev.preventDefault();
});

target.addEventListener("drop", (ev) => {
  ev.preventDefault();
  // Get the data, which is the id of the drop target
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
});
```

{{EmbedLiveSample("Using setDragImage", "", 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Vorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit dem Drag-Daten-Store](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
