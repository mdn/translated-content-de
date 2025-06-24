---
title: "DataTransfer: setDragImage() Methode"
short-title: setDragImage()
slug: Web/API/DataTransfer/setDragImage
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML Drag and Drop API")}}

Wenn ein Drag-Vorgang stattfindet, wird ein halbtransparentes Bild vom Drag-Ziel (dem Element, bei dem das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis ausgelöst wird) erstellt und folgt während des Drag-Vorgangs dem Mauszeiger. Dieses Bild wird automatisch erstellt, sodass Sie es nicht selbst erstellen müssen. Wenn jedoch ein benutzerdefiniertes Bild gewünscht wird, kann die **`DataTransfer.setDragImage()`**-Methode verwendet werden, um das benutzerdefinierte Bild festzulegen. Das Bild ist in der Regel ein {{HTMLElement("img")}}-Element, es kann aber auch ein {{HTMLElement("canvas")}} oder ein anderes sichtbares Element sein.

Die `x`- und `y`-Koordinaten der Methode definieren, wie das Bild relativ zum Mauszeiger erscheinen soll. Diese Koordinaten definieren den Versatz in das Bild, wo sich der Mauszeiger befinden soll. Um beispielsweise das Bild so anzuzeigen, dass der Zeiger in der Mitte ist, verwenden Sie Werte, die die halbe Breite und Höhe des Bildes sind.

Diese Methode muss im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignishandler aufgerufen werden.

## Syntax

```js-nolint
setDragImage(imgElement, xOffset, yOffset)
```

### Parameter

- `imgElement`

  - : Ein Bild-`Element`-Element, das als Drag-Feedback-Bild verwendet werden soll.

    Wenn [`Element`](/de/docs/Web/API/Element) ein img-Element ist, setzen Sie den Drag-Datenspeicher-Bitmap auf das Bild des Elements (in seiner intrinsischen Größe); andernfalls setzen Sie den Drag-Datenspeicher-Bitmap auf ein aus dem gegebenen Element generiertes Bild (der genaue Mechanismus dafür ist derzeit nicht spezifiziert).

    Hinweis: Wenn das [`Element`](/de/docs/Web/API/Element) ein bestehendes [`HTMLElement`](/de/docs/Web/API/HTMLElement) ist, muss es im Viewport sichtbar sein, um als Drag-Feedback-Bild angezeigt zu werden. Alternativ können Sie ein neues DOM-Element erstellen, das speziell für diesen Zweck außerhalb des Bildschirms liegt.

- `xOffset`
  - : Ein `long`, der den horizontalen Versatz innerhalb des Bildes angibt.
- `yOffset`
  - : Ein `long`, der den vertikalen Versatz innerhalb des Bildes angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt, wie die `setDragImage()`-Methode verwendet wird. Beachten Sie, dass sich das Beispiel auf eine Bilddatei namens `example.gif` bezieht. Wenn diese Datei vorhanden ist, wird sie als Drag-Bild verwendet, und wenn diese Datei nicht vorhanden ist, verwendet der Browser sein Standard-Drag-Bild.

[demo](https://codepen.io/webgeeker/full/KBzrxE/)

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

source.addEventListener("dragstart", (ev) => {
  console.log("dragStart");
  // Set the drag's format and data. Use the event target's id for the data
  ev.dataTransfer.setData("text/plain", ev.target.id);
  // Create an image and use it for the drag image
  // NOTE: change "example.gif" to an existing image or the image will not
  // be created and the default drag image will be used.
  const img = new Image();
  img.src = "example.gif";
  ev.dataTransfer.setDragImage(img, 10, 10);
});

target.addEventListener("dragover", (ev) => {
  console.log("dragOver");
  ev.preventDefault();
});

target.addEventListener("drop", (ev) => {
  console.log("Drop");
  ev.preventDefault();
  // Get the data, which is the id of the drop target
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag und Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
