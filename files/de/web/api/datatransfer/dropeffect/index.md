---
title: "DataTransfer: dropEffect-Eigenschaft"
short-title: dropEffect
slug: Web/API/DataTransfer/dropEffect
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransfer.dropEffect`**-Eigenschaft steuert das Feedback (typischerweise visuell), das dem Benutzer während einer Drag-and-Drop-Operation gegeben wird. Dies beeinflusst, welcher Cursor beim Ziehen angezeigt wird. Zum Beispiel kann der Browser-Cursor dem Benutzer anzeigen, welche Art von Aktion erfolgen wird, wenn er über ein Zieldrop-Element schwebt.

Wenn das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt erstellt wird, ist `dropEffect` auf einen String-Wert gesetzt. Beim Abfragen wird der aktuelle Wert zurückgegeben. Beim Setzen wird, wenn der neue Wert einer der unten aufgeführten Werte ist, der aktuelle Wert der Eigenschaft auf den neuen Wert gesetzt und andere Werte werden ignoriert.

Für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse wird `dropEffect` basierend auf der vom Benutzer angeforderten Aktion initialisiert. Wie dies bestimmt wird, ist plattformspezifisch, aber typischerweise kann der Benutzer durch Drücken von Modifikatortasten wie der Alt-Taste die gewünschte Aktion anpassen. Innerhalb von Ereignisbehandlern für [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse sollte `dropEffect` modifiziert werden, wenn eine andere Aktion gewünscht wird als die vom Benutzer angeforderte.

Für die [`drop`](/de/docs/Web/API/HTMLElement/drop_event)- und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignisse wird `dropEffect` auf die gewünschte Aktion gesetzt, die den Wert `dropEffect` hatte nach dem letzten [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- oder [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis. In einem [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis sollte beispielsweise, wenn das gewünschte dropEffect "move" ist, die gezogenen Daten aus der Quelle entfernt werden.

## Wert

Ein String, der die Drag-Operationseffekt darstellt. Die möglichen Werte sind:

- `copy`
  - : Eine Kopie des Ausgangselements wird am neuen Ort erstellt.
- `move`
  - : Ein Element wird an einen neuen Ort verschoben.
- `link`
  - : Eine Verknüpfung zur Quelle wird am neuen Ort erstellt.
- `none`
  - : Das Element darf nicht abgelegt werden.

Ein Zuweisen eines anderen Wertes zu `dropEffect` hat keinen Effekt und der alte Wert bleibt erhalten.

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
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
