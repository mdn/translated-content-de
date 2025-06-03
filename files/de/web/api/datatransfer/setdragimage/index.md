---
title: "DataTransfer: setDragImage() Methode"
short-title: setDragImage()
slug: Web/API/DataTransfer/setDragImage
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("HTML Drag and Drop API")}}

Wenn ein Drag-Vorgang erfolgt, wird ein durchscheinendes Bild vom Drag-Ziel (das Element,
bei dem das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis ausgelöst wird) erzeugt, und dieses folgt dem Mauszeiger während des
Vorgangs. Dieses Bild wird automatisch erstellt, sodass Sie es nicht selbst erstellen müssen.
Falls jedoch ein benutzerdefiniertes Bild gewünscht wird, kann die
**`DataTransfer.setDragImage()`** Methode verwendet werden, um das
benutzerdefinierte Bild zu setzen. Das Bild ist in der Regel ein {{HTMLElement("img")}}-Element,
es kann aber auch ein {{HTMLElement("canvas")}} oder ein anderes sichtbares Element sein.

Die `x` und `y` Koordinaten der Methode definieren, wie das Bild relativ zum Mauszeiger
erscheinen soll. Diese Koordinaten definieren den Versatz in das Bild, wo der Mauszeiger
stehen soll. Zum Beispiel, um das Bild so anzuzeigen, dass der Zeiger in der Mitte ist, verwenden
Sie Werte, die der Hälfte der Breite und Höhe des Bildes entsprechen.

Diese Methode muss im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignishandler aufgerufen werden.

## Syntax

```js-nolint
setDragImage(imgElement, xOffset, yOffset)
```

### Parameter

- `imgElement`

  - : Ein Bild [`Element`](/de/docs/Web/API/Element), das als Drag-Feedback-Bild verwendet werden soll.

    Wenn [`Element`](/de/docs/Web/API/Element) ein img-Element ist, dann setzen Sie den Drag-Daten-Speicher-Bitmap
    auf das Bild des Elements (in seiner intrinsischen Größe); andernfalls setzen Sie den Drag-Daten-Speicher-Bitmap
    auf ein Bild, das aus dem angegebenen Element generiert wird (der genaue Mechanismus dafür
    ist derzeit nicht spezifiziert).

    Hinweis: Wenn das [`Element`](/de/docs/Web/API/Element) ein vorhandenes [`HTMLElement`](/de/docs/Web/API/HTMLElement) ist, muss es im Viewport sichtbar sein, um als Drag-Feedback-Bild angezeigt zu werden. Alternativ können Sie ein neues DOM-Element erstellen, das speziell für diesen Zweck außerhalb des Bildschirms ist.

- `xOffset`
  - : Ein `long`, der den horizontalen Versatz innerhalb des Bildes angibt.
- `yOffset`
  - : Ein `long`, der den vertikalen Versatz innerhalb des Bildes angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt, wie die `setDragImage()` Methode verwendet wird. Beachten Sie, dass das Beispiel
auf eine Bilddatei namens `example.gif` verweist. Wenn diese Datei vorhanden ist, wird sie
als Drag-Bild verwendet, und wenn die Datei nicht vorhanden ist, wird der Browser sein
Standard-Drag-Bild verwenden.

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

- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Vorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Draggen](https://codepen.io/tech_query/pen/MqGgap)
