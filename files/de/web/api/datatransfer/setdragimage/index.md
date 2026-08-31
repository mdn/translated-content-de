---
title: "DataTransfer: setDragImage() Methode"
short-title: setDragImage()
slug: Web/API/DataTransfer/setDragImage
l10n:
  sourceCommit: 565501caace6d4fbcb9c9b3d8cbf7b03145abbf5
---

{{APIRef("HTML Drag and Drop API")}}

Die **`setDragImage()`**-Methode der [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Schnittstelle setzt ein benutzerdefiniertes Bild, das als Drag-Feedback verwendet werden soll. Das Bild ist typischerweise ein {{HTMLElement("img")}}-Element, kann jedoch auch ein {{HTMLElement("canvas")}} oder jedes andere sichtbare Element sein.

Bei einem Ziehvorgang wird ein durchscheinendes Bild aus dem Ziehziel (dem Element, bei dem das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis ausgelöst wird) erstellt und folgt beim Ziehen dem Mauszeiger. Dieses Bild wird automatisch erstellt, sodass Sie es nicht selbst erstellen müssen. Verwenden Sie `setDragImage()`, um es durch ein benutzerdefiniertes Bild zu ersetzen.

Die `x`- und `y`-Koordinaten der Methode definieren, wie das Bild relativ zum Mauszeiger erscheinen soll. Diese Koordinaten definieren den Versatz innerhalb des Bildes, wo der Mauszeiger sein soll. Um beispielsweise das Bild so anzuzeigen, dass der Zeiger in der Mitte ist, verwenden Sie Werte, die die Hälfte der Breite und Höhe des Bildes ausmachen.

Während eines Ziehvorgangs kann diese Methode nur im Handler für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis verwendet werden, da dies der einzige Zeitpunkt ist, zu dem der Datenspeicher des Ziehvorgangs beschreibbar ist. Ein Aufruf bei jedem anderen Ziehereignis hat keine Wirkung. Siehe [Bearbeiten des Datenspeichers beim Ziehen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#modifying_the_drag_data_store) für Details.

## Syntax

```js-nolint
setDragImage(imgElement, xOffset, yOffset)
```

### Parameter

- `imgElement`
  - : Ein Bild-[`Element`](/de/docs/Web/API/Element), das als Drag-Feedback-Bild verwendet wird.

    Wenn das [`Element`](/de/docs/Web/API/Element) ein img-Element ist, setzen Sie den Bitmap des Drag-Datenspeichers auf das Bild des Elements (in seiner intrinsischen Größe); andernfalls setzen Sie den Bitmap des Drag-Datenspeichers auf ein Bild, das aus dem angegebenen Element generiert wird (der genaue Mechanismus hierfür ist derzeit nicht spezifiziert).

    Hinweis: Wenn das [`Element`](/de/docs/Web/API/Element) ein vorhandenes [`HTMLElement`](/de/docs/Web/API/HTMLElement) ist, muss es im Ansichtsfenster sichtbar sein, um als Drag-Feedback-Bild angezeigt zu werden. Alternativ können Sie ein neues DOM-Element erstellen, das möglicherweise außerhalb des Bildschirms speziell für diesen Zweck ist.

- `xOffset`
  - : Ein `long`, der den horizontalen Versatz innerhalb des Bildes angibt.
- `yOffset`
  - : Ein `long`, der den vertikalen Versatz innerhalb des Bildes angibt.

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

- [Ziehen und Ablegen](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Ziehen-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit dem Drag-Datenspeicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
