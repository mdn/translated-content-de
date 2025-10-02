---
title: "DataTransfer: dropEffect-Eigenschaft"
short-title: dropEffect
slug: Web/API/DataTransfer/dropEffect
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransfer.dropEffect`**-Eigenschaft steuert das Feedback (typischerweise visuell), das der Benutzer während einer Drag-and-Drop-Operation erhält. Es wird beeinflussen, welcher Cursor während des Ziehens angezeigt wird. Zum Beispiel kann der Cursor des Browsers anzeigen, welche Art von Operation stattfindet, wenn der Benutzer über ein Ziel-Drop-Element schwebt.

Wenn das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt erstellt wird, wird `dropEffect` auf einen String-Wert gesetzt. Beim Abrufen gibt es seinen aktuellen Wert zurück. Beim Setzen wird der Eigenschaftswert auf den neuen Wert festgelegt, wenn dieser einer der unten aufgeführten Werte ist; andere Werte werden ignoriert.

Für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignisse wird `dropEffect` basierend darauf initialisiert, welche Aktion der Benutzer anfordert. Wie dies bestimmt wird, ist plattformspezifisch, aber typischerweise kann der Benutzer Modifikatortasten wie die Alt-Taste drücken, um die gewünschte Aktion anzupassen. Innerhalb von Ereignishandlern für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignisse sollte `dropEffect` geändert werden, wenn eine andere Aktion als die vom Benutzer angeforderte gewünscht wird.

Für die [`drop`](/de/docs/Web/API/HTMLElement/drop_event) und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) Ereignisse wird `dropEffect` auf die gewünschte Aktion gesetzt, die der Wert war, den `dropEffect` nach dem letzten [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignis hatte. Bei einem [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) Ereignis sollte beispielsweise, wenn der gewünschte `dropEffect` "move" ist, die zu ziehenden Daten aus der Quelle entfernt werden.

## Wert

Ein String, der den Effekt der Ziehoperation darstellt. Die möglichen Werte sind:

- `copy`
  - : Eine Kopie des Quellobjekts wird am neuen Ort erstellt.
- `move`
  - : Ein Objekt wird an einen neuen Ort verschoben.
- `link`
  - : Eine Verknüpfung zum Quellobjekt am neuen Ort wird erstellt.
- `none`
  - : Das Objekt kann nicht fallen gelassen werden.

Das Zuweisen eines anderen Wertes zu `dropEffect` hat keine Wirkung, und der alte Wert bleibt erhalten.

## Beispiel

Dieses Beispiel zeigt die Verwendung der Eigenschaften `dropEffect` und [`effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed).

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

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit dem Drag-Datenspeicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
