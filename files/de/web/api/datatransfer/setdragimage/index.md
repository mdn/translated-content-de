---
title: "DataTransfer: setDragImage() Methode"
short-title: setDragImage()
slug: Web/API/DataTransfer/setDragImage
l10n:
  sourceCommit: 462531d8e58edff6a17e9268dbef716b051a4912
---

{{APIRef("HTML Drag and Drop API")}}

Wenn ein Drag-Vorgang stattfindet, wird automatisch ein durchscheinendes Bild aus dem Drag-Ziel (dem Element, bei dem das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis ausgelöst wird) generiert und folgt während des Drag-Vorgangs dem Mauszeiger. Dieses Bild wird automatisch erstellt, sodass Sie es nicht selbst erstellen müssen. Wenn jedoch ein benutzerdefiniertes Bild gewünscht ist, kann die **`DataTransfer.setDragImage()`**-Methode verwendet werden, um das benutzerdefinierte Bild festzulegen, das verwendet werden soll. Das Bild ist in der Regel ein {{HTMLElement("img")}}-Element, es kann aber auch ein {{HTMLElement("canvas")}} oder ein anderes sichtbares Element sein.

Die `x`- und `y`-Koordinaten der Methode definieren, wie das Bild relativ zum Mauszeiger erscheinen soll. Diese Koordinaten definieren den Offset im Bild, an dem sich der Mauszeiger befinden sollte. Um beispielsweise das Bild so anzuzeigen, dass der Zeiger in der Mitte ist, verwenden Sie Werte, die die Hälfte der Breite und Höhe des Bildes darstellen.

Diese Methode muss im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignishandler aufgerufen werden.

## Syntax

```js-nolint
setDragImage(imgElement, xOffset, yOffset)
```

### Parameter

- `imgElement`
  - : Ein Bild-`Element`, das für das Drag-Feedback-Bild verwendet werden soll.

    Wenn [`Element`](/de/docs/Web/API/Element) ein img-Element ist, dann wird der Drag-Daten-Store-Bitmap auf das Bild des Elements (in seiner intrinsischen Größe) gesetzt; andernfalls wird der Drag-Daten-Store-Bitmap auf ein Bild generiert aus dem angegebenen Element gesetzt (der genaue Mechanismus hierfür ist derzeit nicht spezifiziert).

    Hinweis: Wenn das [`Element`](/de/docs/Web/API/Element) ein bestehendes [`HTMLElement`](/de/docs/Web/API/HTMLElement) ist, muss es im Ansichtsfenster sichtbar sein, um als Drag-Feedback-Bild angezeigt zu werden. Alternativ können Sie ein neues DOM-Element erstellen, das speziell für diesen Zweck außerhalb des Bildschirms liegt.

- `xOffset`
  - : Ein `long`, der den horizontalen Offset innerhalb des Bildes angibt.
- `yOffset`
  - : Ein `long`, der den vertikalen Offset innerhalb des Bildes angibt.

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

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
