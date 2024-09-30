---
title: "DataTransfer: dropEffect-Eigenschaft"
short-title: dropEffect
slug: Web/API/DataTransfer/dropEffect
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransfer.dropEffect`**-Eigenschaft steuert das Feedback (typischerweise visuell), das dem Benutzer während eines Drag-and-Drop-Vorgangs gegeben wird. Sie beeinflusst, welcher Cursor während des Ziehens angezeigt wird. Zum Beispiel kann der Browsercursor anzeigen, welche Art von Operation stattfinden wird, wenn der Benutzer über ein Ziel-Element schwebt.

Wenn das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt erstellt wird, ist `dropEffect` auf einen Zeichenkettenwert gesetzt. Beim Abrufen gibt es den aktuellen Wert zurück. Beim Setzen wird, wenn der neue Wert einer der unten aufgelisteten Werte ist, der aktuelle Wert der Eigenschaft auf den neuen Wert gesetzt, und andere Werte werden ignoriert.

Für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse wird `dropEffect` basierend auf der Aktion initialisiert, die der Benutzer anfordert. Wie dies bestimmt wird, ist plattformabhängig, aber typischerweise kann der Benutzer Modifikatortasten wie die Alt-Taste verwenden, um die gewünschte Aktion anzupassen. Innerhalb von Ereignishandlern für [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse sollte `dropEffect` modifiziert werden, wenn eine andere Aktion als die gewünschte Aktion des Benutzers erforderlich ist.

Für die [`drop`](/de/docs/Web/API/HTMLElement/drop_event) und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignisse wird `dropEffect` auf die gewünschte Aktion gesetzt, welches der Wert sein wird, den `dropEffect` nach dem letzten [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis hatte. In einem [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis sollte beispielsweise, wenn der gewünschte `dropEffect` "move" ist, die verschobenen Daten aus der Quelle entfernt werden.

## Wert

Ein Zeichenkette, die den Drag-Operationseffekt darstellt. Mögliche Werte sind:

- `copy`
  - : Eine Kopie des Quellobjekts wird am neuen Ort erstellt.
- `move`
  - : Ein Objekt wird an einen neuen Ort verschoben.
- `link`
  - : Eine Verknüpfung zur Quelle wird am neuen Ort eingerichtet.
- `none`
  - : Das Objekt darf nicht abgelegt werden.

Das Zuweisen eines anderen Werts zu `dropEffect` hat keine Wirkung und der alte Wert wird beibehalten.

## Beispiel

Dieses Beispiel zeigt die Verwendung der `dropEffect`- und [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaften.

### HTML

```html
<div>
  <p id="source" ondragstart="dragstart_handler(event);" draggable="true">
    Select this element, drag it to the Drop Zone and then release the selection
    to move the element.
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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
