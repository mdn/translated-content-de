---
title: "DataTransfer: dropEffect-Eigenschaft"
short-title: dropEffect
slug: Web/API/DataTransfer/dropEffect
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransfer.dropEffect`**-Eigenschaft steuert das Feedback (typischerweise visuell), das dem Benutzer während einer Drag-and-Drop-Operation gegeben wird. Sie beeinflusst, welcher Cursor während des Ziehens angezeigt wird. Zum Beispiel, wenn der Benutzer über ein Ziel-Element schwebt, kann der Browser-Cursor anzeigen, welcher Typ von Operation durchgeführt wird.

Wenn das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt erstellt wird, ist `dropEffect` auf einen String-Wert gesetzt. Beim Abfragen gibt es seinen aktuellen Wert zurück. Beim Setzen, wenn der neue Wert einer der unten aufgeführten Werte ist, wird der aktuelle Wert der Eigenschaft auf den neuen Wert gesetzt und andere Werte werden ignoriert.

Für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse wird `dropEffect` basierend darauf initialisiert, welche Aktion der Benutzer anfordert. Wie dies bestimmt wird, ist plattformspezifisch, aber typischerweise kann der Benutzer Modifikatortasten wie die Alt-Taste drücken, um die gewünschte Aktion anzupassen. Innerhalb von Ereignishandlern für [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse sollte `dropEffect` modifiziert werden, wenn eine andere Aktion als die vom Benutzer angeforderte Aktion gewünscht ist.

Für die [`drop`](/de/docs/Web/API/HTMLElement/drop_event)- und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignisse wird `dropEffect` auf die gewünschte Aktion gesetzt, was der Wert ist, den `dropEffect` nach dem letzten [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis hatte. In einem [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis, zum Beispiel, wenn der gewünschte `dropEffect` "move" ist, dann sollten die zu ziehenden Daten aus der Quelle entfernt werden.

## Wert

Ein String, der den Ziehoperationseffekt darstellt. Die möglichen Werte sind:

- `copy`
  - : Eine Kopie des Quellobjekts wird am neuen Ort erstellt.
- `move`
  - : Ein Objekt wird an einen neuen Ort verschoben.
- `link`
  - : Es wird eine Verbindung zur Quelle am neuen Ort hergestellt.
- `none`
  - : Das Objekt darf nicht abgelegt werden.

Das Zuweisen eines anderen Wertes zu `dropEffect` hat keine Wirkung und der alte Wert bleibt erhalten.

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
