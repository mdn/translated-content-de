---
title: "DataTransfer: setDragImage()-Methode"
short-title: setDragImage()
slug: Web/API/DataTransfer/setDragImage
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML Drag and Drop API")}}

Wenn ein Ziehvorgang stattfindet, wird ein durchscheinendes Bild vom Ziehziel (dem Element, bei dem das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis ausgelöst wird) erzeugt und folgt dem Mauszeiger während des Ziehvorgangs. Dieses Bild wird automatisch erstellt, Sie müssen es also nicht selbst erstellen. Wenn jedoch ein benutzerdefiniertes Bild gewünscht wird, kann die **`DataTransfer.setDragImage()`**-Methode verwendet werden, um das benutzerdefinierte Bild festzulegen. Das Bild ist normalerweise ein {{HTMLElement("img")}}-Element, kann aber auch ein {{HTMLElement("canvas")}} oder ein anderes sichtbares Element sein.

Die `x`- und `y`-Koordinaten der Methode definieren, wie das Bild relativ zum Mauszeiger erscheinen soll. Diese Koordinaten definieren den Versatz im Bild, wo sich der Mauszeiger befinden soll. Um das Bild beispielsweise so anzuzeigen, dass der Zeiger in der Mitte ist, verwenden Sie Werte, die die halbe Breite und Höhe des Bildes entsprechen.

Diese Methode muss im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignishandler aufgerufen werden.

## Syntax

```js-nolint
setDragImage(imgElement, xOffset, yOffset)
```

### Parameter

- `imgElement`

  - : Ein Bild-`Element`-Element, das für das Ziehrückmeldungbild verwendet werden soll.

    Wenn `Element` ein img-Element ist, dann setzen Sie die Bitmap des Ziehdatenspeichers auf das Bild des Elements (in seiner intrinsischen Größe); andernfalls setzen Sie die Bitmap des Ziehdatenspeichers auf ein Bild, das aus dem gegebenen Element generiert wurde (der genaue Mechanismus hierfür ist derzeit nicht spezifiziert).

    Hinweis: Wenn das `Element` ein vorhandenes `HTMLElement` ist, muss es im Ansichtsfenster sichtbar sein, um als Ziehrückmeldungbild angezeigt zu werden. Alternativ können Sie ein neues DOM-Element erstellen, das speziell zu diesem Zweck außerhalb des Bildschirms sein kann.

- `xOffset`
  - : Ein `long`, der den horizontalen Versatz im Bild angibt.
- `yOffset`
  - : Ein `long`, der den vertikalen Versatz im Bild angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt, wie die `setDragImage()`-Methode verwendet wird. Beachten Sie, dass sich das Beispiel auf eine Bilddatei namens `example.gif` bezieht. Wenn diese Datei vorhanden ist, wird sie als Ziehbild verwendet, und wenn nicht, verwendet der Browser sein Standard-Ziehbild.

[demo](https://codepen.io/webgeeker/full/KBzrxE/)

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Example of DataTransfer.setDragImage()</title>
    <meta name="viewport" content="width=device-width" />
    <style>
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
    </style>
    <script>
      function dragStartHandler(ev) {
        console.log("dragStart");
        // Set the drag's format and data. Use the event target's id for the data
        ev.dataTransfer.setData("text/plain", ev.target.id);
        // Create an image and use it for the drag image
        // NOTE: change "example.gif" to an existing image or the image will not
        // be created and the default drag image will be used.
        const img = new Image();
        img.src = "example.gif";
        ev.dataTransfer.setDragImage(img, 10, 10);
      }

      function dragOverHandler(ev) {
        console.log("dragOver");
        ev.preventDefault();
      }

      function dropHandler(ev) {
        console.log("Drop");
        ev.preventDefault();
        // Get the data, which is the id of the drop target
        const data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }
    </script>
  </head>
  <body>
    <h1>Example of <code>DataTransfer.setDragImage()</code></h1>
    <div>
      <p id="source" ondragstart="dragStartHandler(event);" draggable="true">
        Select this element, drag it to the Drop Zone and then release the
        selection to move the element.
      </p>
    </div>
    <div
      id="target"
      ondrop="dropHandler(event);"
      ondragover="dragOverHandler(event);">
      Drop Zone
    </div>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Zugvorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Zieh-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
