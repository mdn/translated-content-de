---
title: "DataTransfer: dropEffect-Eigenschaft"
short-title: dropEffect
slug: Web/API/DataTransfer/dropEffect
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransfer.dropEffect`**-Eigenschaft steuert das Feedback (typischerweise visuell), das dem Benutzer während einer Drag-and-Drop-Operation gegeben wird. Sie beeinflusst, welcher Cursor beim Ziehen angezeigt wird. Wenn der Benutzer beispielsweise über ein Ziel-Element schwebt, kann der Cursor des Browsers anzeigen, welcher Operationstyp ausgeführt wird.

Wenn das {{domxref("DataTransfer")}}-Objekt erstellt wird, wird `dropEffect` auf einen Zeichenfolgenwert gesetzt. Beim Abrufen gibt es den aktuellen Wert zurück. Beim Setzen wird, wenn der neue Wert einer der unten aufgelisteten Werte ist, der aktuelle Wert der Eigenschaft auf den neuen Wert gesetzt und andere Werte werden ignoriert.

Für die {{domxref("HTMLElement/dragenter_event", "dragenter")}}- und {{domxref("HTMLElement/dragover_event", "dragover")}}-Ereignisse wird `dropEffect` basierend auf der Aktion, die der Benutzer anfordert, initialisiert. Wie dies ermittelt wird, hängt von der Plattform ab, aber typischerweise kann der Benutzer Modifier-Tasten wie die Alt-Taste drücken, um die gewünschte Aktion anzupassen. Innerhalb von Ereignishandlern für {{domxref("HTMLElement/dragenter_event", "dragenter")}}- und {{domxref("HTMLElement/dragover_event", "dragover")}}-Ereignisse sollte `dropEffect` geändert werden, wenn eine andere Aktion gewünscht ist als die, die der Benutzer anfordert.

Für die {{domxref("HTMLElement/drop_event", "drop")}}- und {{domxref("HTMLElement/dragend_event", "dragend")}}-Ereignisse wird `dropEffect` auf die gewünschte Aktion gesetzt, die der Wert ist, den `dropEffect` nach dem letzten {{domxref("HTMLElement/dragenter_event", "dragenter")}}- oder {{domxref("HTMLElement/dragover_event", "dragover")}}-Ereignis hatte. In einem {{domxref("HTMLElement/dragend_event", "dragend")}}-Ereignis sollte zum Beispiel, wenn der gewünschte `dropEffect` "move" ist, die Daten, die gezogen werden, aus der Quelle entfernt werden.

## Wert

Ein Zeichen, das die Drag-Operationseffekt darstellt. Die möglichen Werte sind:

- `copy`
  - : Eine Kopie des Quellgegenstands wird am neuen Ort erstellt.
- `move`
  - : Ein Gegenstand wird an einen neuen Ort verschoben.
- `link`
  - : Eine Verknüpfung zur Quelle wird am neuen Ort hergestellt.
- `none`
  - : Der Gegenstand darf nicht fallen gelassen werden.

Das Zuweisen eines anderen Wertes zu `dropEffect` hat keinen Effekt und der alte Wert bleibt erhalten.

## Beispiel

Dieses Beispiel zeigt die Verwendung der `dropEffect`- und {{domxref("DataTransfer.effectAllowed","effectAllowed")}}-Eigenschaften.

### HTML

```html
<div>
  <p id="source" ondragstart="dragstart_handler(event);" draggable="true">
    Wählen Sie dieses Element aus, ziehen Sie es in die Drop Zone und lassen Sie die Auswahl los, um das Element zu verschieben.
  </p>
</div>
<div
  id="target"
  ondrop="drop_handler(event);"
  ondragover="dragover_handler(event);">
  Drop Zone
</div>
```

### CSS

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

### JavaScript

```js
function dragstart_handler(ev) {
  console.log(
    `dragStart: dropEffect = ${ev.dataTransfer.dropEffect} ; effectAllowed = ${ev.dataTransfer.effectAllowed}`,
  );

  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function drop_handler(ev) {
  console.log(
    `drop: dropEffect = ${ev.dataTransfer.dropEffect} ; effectAllowed = ${ev.dataTransfer.effectAllowed}`,
  );
  ev.preventDefault();

  // Get the id of the target and add the moved element to the target's DOM
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function dragover_handler(ev) {
  console.log(
    `dragOver: dropEffect = ${ev.dataTransfer.dropEffect} ; effectAllowed = ${ev.dataTransfer.effectAllowed}`,
  );
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move";
}
```

{{EmbedLiveSample('Example', 300, 250)}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Ziehen und Ablegen](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
