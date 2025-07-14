---
title: "DataTransfer: types-Eigenschaft"
short-title: types
slug: Web/API/DataTransfer/types
l10n:
  sourceCommit: ade5e1ca5c5c57d5cb53beb994bede7b20181233
---

{{APIRef("HTML Drag and Drop API")}}

Die schreibgeschützte **`DataTransfer.types`**-Eigenschaft gibt die verfügbaren Typen zurück, die in den [`items`](/de/docs/Web/API/DataTransfer/items) vorhanden sind.

## Wert

Ein Array der Datenformate. Jedes Format ist ein String, der in der Regel ein MIME-Typ wie `text/plain` oder `text/html` ist. Wenn der Drag-Vorgang keine Daten enthält, ist diese Liste leer. Wenn Dateien im Drag-Vorgang enthalten sind, wird einer der Typen der String `Files` sein.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `types` und
[`items`](/de/docs/Web/API/DataTransfer/items)-Eigenschaften.

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
  item.addEventListener("dragstart", dragstart_handler);
});

function dragstart_handler(ev) {
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

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Vorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
