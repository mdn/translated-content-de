---
title: "DataTransfer: types-Eigenschaft"
short-title: types
slug: Web/API/DataTransfer/types
l10n:
  sourceCommit: 565501caace6d4fbcb9c9b3d8cbf7b03145abbf5
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte **`types`**-Eigenschaft des [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Interfaces gibt die verfügbaren Typen zurück, die in den [`items`](/de/docs/Web/API/DataTransfer/items) vorhanden sind.

Während eines Ziehvorgangs kann diese Eigenschaft in jedem Ziehereignis-Handler gelesen werden, selbst wenn der Ziehdaten-Speicher im [geschützten Modus](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#protected_mode) ist. Die verfügbaren Formate bleiben zugänglich, aber die Daten selbst können nur in den Handlern für die [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)- und [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisse gelesen werden. Siehe [Lesen des Ziehdaten-Speichers](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store) für Details.

## Wert

Ein Array der Datenformate. Jedes Format ist ein String, der im Allgemeinen ein MIME-Typ wie `text/plain` oder `text/html` ist. Wenn die Ziehoperation keine Daten einschließt, wird diese Liste leer sein. Wenn irgendwelche Dateien in die Ziehoperation einbezogen sind, wird einer der Typen der String `Files` sein.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `types`- und [`items`](/de/docs/Web/API/DataTransfer/items)-Eigenschaften.

```html
<ul>
  <li id="i1" draggable="true">Drag Item 1 to the Drop Zone</li>
  <li id="i2" draggable="true">Drag Item 2 to the Drop Zone</li>
</ul>
<div id="target">Drop Zone</div>
<pre id="output"></pre>
```

```css
div {
  margin: 0em;
  padding: 2em;
}
#target {
  border: 1px solid black;
}
```

```js
const output = document.getElementById("output");
function log(msg) {
  output.textContent += `${msg}\n`;
}

document.querySelectorAll("li").forEach((item) => {
  item.addEventListener("dragstart", dragstartHandler);
});

function dragstartHandler(ev) {
  log(`dragStart: target.id = ${ev.target.id}`);

  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

const target = document.getElementById("target");

target.addEventListener("drop", (ev) => {
  log(`drop: target.id = ${ev.target.id}`);
  ev.preventDefault();

  // Get the id of the target and add the moved element to the target's DOM
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));

  // Print each format type
  for (let i = 0; i < ev.dataTransfer.types.length; i++) {
    log(`… types[${i}] = ${ev.dataTransfer.types[i]}`);
  }

  // Print each item's "kind" and "type"
  for (let i = 0; i < ev.dataTransfer.items.length; i++) {
    log(
      `… items[${i}].kind = ${ev.dataTransfer.items[i].kind}; type = ${ev.dataTransfer.items[i].type}`,
    );
  }
});

target.addEventListener("dragover", (ev) => {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
});
```

{{EmbedLiveSample("examples", "", 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit dem Ziehdaten-Speicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
