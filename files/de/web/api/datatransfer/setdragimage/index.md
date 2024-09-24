---
title: "DataTransfer: setDragImage()-Methode"
short-title: setDragImage()
slug: Web/API/DataTransfer/setDragImage
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML Drag and Drop API")}}

Wenn ein Drag-Ereignis auftritt, wird ein transparentes Bild vom Drag-Ziel (das Element, bei dem das {{domxref("HTMLElement/dragstart_event", "dragstart")}}-Ereignis ausgelöst wird) generiert und folgt während des Drags dem Mauszeiger. Dieses Bild wird automatisch erstellt, daher müssen Sie es nicht selbst erstellen. Falls jedoch ein benutzerdefiniertes Bild gewünscht ist, kann die **`DataTransfer.setDragImage()`**-Methode verwendet werden, um das benutzerdefinierte Bild festzulegen. Das Bild ist typischerweise ein {{HTMLElement("img")}}-Element, kann aber auch ein {{HTMLElement("canvas")}} oder ein beliebiges anderes sichtbares Element sein.

Die `x`- und `y`-Koordinaten der Methode definieren, wie das Bild relativ zum Mauszeiger erscheinen soll. Diese Koordinaten definieren den Versatz in das Bild, wo sich der Mauszeiger befinden soll. Um das Bild z.B. so anzuzeigen, dass der Zeiger in der Mitte ist, verwenden Sie Werte, die die Hälfte der Breite und Höhe des Bildes sind.

Diese Methode muss im {{domxref("HTMLElement/dragstart_event", "dragstart")}}-Ereignishandler aufgerufen werden.

## Syntax

```js-nolint
setDragImage(imgElement, xOffset, yOffset)
```

### Parameter

- `imgElement`

  - : Ein Bild-{{domxref("Element")}}-Element, das als Rückmeldungsbild für den Drag verwendet werden soll.

    Wenn das {{domxref("Element")}} ein img-Element ist, setzen Sie den Drag-Daten-Store-Bitmap auf das Bild des Elements (in seiner intrinsischen Größe); andernfalls setzen Sie den Drag-Daten-Store-Bitmap auf ein Bild, das aus dem angegebenen Element generiert wird (der genaue Mechanismus hierzu ist derzeit nicht spezifiziert).

    Hinweis: Wenn das {{domxref("Element")}} ein bestehendes {{domxref("HTMLElement")}} ist, muss es im Ansichtsbereich sichtbar sein, um als Drag-Rückmeldungsbild angezeigt zu werden. Alternativ können Sie ein neues DOM-Element erstellen, das speziell für diesen Zweck außerhalb des Bildschirms sein könnte.

- `xOffset`
  - : Ein `long`, der den horizontalen Offset innerhalb des Bildes angibt.
- `yOffset`
  - : Ein `long`, der den vertikalen Offset innerhalb des Bildes angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt, wie die `setDragImage()`-Methode verwendet wird. Beachten Sie, dass sich das Beispiel auf eine Bilddatei namens `example.gif` bezieht. Wenn diese Datei vorhanden ist, wird sie als Drag-Bild verwendet, und wenn diese Datei nicht vorhanden ist, verwendet der Browser sein Standard-Drag-Bild.

[demo](https://codepen.io/webgeeker/full/KBzrxE/)

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Beispiel von DataTransfer.setDragImage()</title>
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
        // Setzen Sie das Format und die Daten des Drags. Verwenden Sie die ID des Ereignisziels für die Daten
        ev.dataTransfer.setData("text/plain", ev.target.id);
        // Erstellen Sie ein Bild und verwenden Sie es für das Drag-Bild
        // HINWEIS: Ändern Sie "example.gif" in ein vorhandenes Bild oder das Bild wird nicht
        // erstellt und das Standard-Drag-Bild wird verwendet.
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
        // Holen Sie die Daten, die die ID des Zielorts sind
        const data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }
    </script>
  </head>
  <body>
    <h1>Beispiel von <code>DataTransfer.setDragImage()</code></h1>
    <div>
      <p id="source" ondragstart="dragStartHandler(event);" draggable="true">
        Wählen Sie dieses Element aus, ziehen Sie es zur Drop-Zone und lassen Sie dann die Auswahl los, um das Element zu verschieben.
      </p>
    </div>
    <div
      id="target"
      ondrop="dropHandler(event);"
      ondragover="dragOverHandler(event);">
      Drop-Zone
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
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
