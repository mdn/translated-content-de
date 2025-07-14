---
title: "DataTransfer: dropEffect-Eigenschaft"
short-title: dropEffect
slug: Web/API/DataTransfer/dropEffect
l10n:
  sourceCommit: ade5e1ca5c5c57d5cb53beb994bede7b20181233
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransfer.dropEffect`**-Eigenschaft steuert das Feedback (typischerweise visuell), das dem Benutzer während einer Drag-and-Drop-Operation gegeben wird. Sie beeinflusst, welcher Cursor während des Ziehens angezeigt wird. Zum Beispiel kann der Browser-Cursor anzeigen, welche Art von Operation stattfinden wird, wenn der Benutzer über ein Ziel-Drop-Element schwebt.

Wenn das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt erstellt wird, wird `dropEffect` auf einen Zeichenkettenwert gesetzt. Beim Abrufen wird der aktuelle Wert zurückgegeben. Beim Setzen, wenn der neue Wert einer der unten aufgeführten Werte ist, wird der aktuelle Wert der Eigenschaft auf den neuen Wert gesetzt und andere Werte werden ignoriert.

Für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse wird `dropEffect` basierend darauf initialisiert, welche Aktion der Benutzer anfordert. Wie dies bestimmt wird, ist plattformspezifisch, aber typischerweise kann der Benutzer Modifier-Tasten wie die Alt-Taste drücken, um die gewünschte Aktion anzupassen. Innerhalb von Ereignis-Handlern für [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse sollte `dropEffect` modifiziert werden, wenn eine andere Aktion als die gewünschte Aktion des Benutzers gewünscht wird.

Für die [`drop`](/de/docs/Web/API/HTMLElement/drop_event)- und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignisse wird `dropEffect` auf die gewünschte Aktion gesetzt, die der Wert sein wird, den `dropEffect` nach dem letzten [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis hatte. In einem [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis sollte zum Beispiel, wenn der gewünschte `dropEffect` "move" ist, die gezogenen Daten aus der Quelle entfernt werden.

## Wert

Ein String, der die Drag-Operationseffekt darstellt. Die möglichen Werte sind:

- `copy`
  - : Eine Kopie des Ursprungsobjekts wird an der neuen Position erstellt.
- `move`
  - : Ein Objekt wird an eine neue Position verschoben.
- `link`
  - : Ein Link zur Quelle wird an der neuen Position erstellt.
- `none`
  - : Das Objekt darf nicht abgelegt werden.

Das Zuweisen eines anderen Wertes zu `dropEffect` hat keine Wirkung und der alte Wert bleibt bestehen.

## Beispiel

Dieses Beispiel zeigt die Verwendung der `dropEffect`- und [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaften.

### HTML

```html
<div>
  <p id="source" draggable="true">
    Select this element, drag it to the Drop Zone and then release the selection
    to move the element.
  </p>
</div>
<div id="target">Drop Zone</div>
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
const source = document.getElementById("source");
const target = document.getElementById("target");

source.addEventListener("dragstart", (ev) => {
  console.log(
    `dragStart: dropEffect = ${ev.dataTransfer.dropEffect} ; effectAllowed = ${ev.dataTransfer.effectAllowed}`,
  );

  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
});

target.addEventListener("drop", (ev) => {
  console.log(
    `drop: dropEffect = ${ev.dataTransfer.dropEffect} ; effectAllowed = ${ev.dataTransfer.effectAllowed}`,
  );
  ev.preventDefault();

  // Get the id of the target and add the moved element to the target's DOM
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
});

target.addEventListener("dragover", (ev) => {
  console.log(
    `dragOver: dropEffect = ${ev.dataTransfer.dropEffect} ; effectAllowed = ${ev.dataTransfer.effectAllowed}`,
  );
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move";
});
```

{{EmbedLiveSample('Example', 300, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
