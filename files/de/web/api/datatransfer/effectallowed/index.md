---
title: "DataTransfer: effectAllowed-Eigenschaft"
short-title: effectAllowed
slug: Web/API/DataTransfer/effectAllowed
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransfer.effectAllowed`**-Eigenschaft gibt den
Effekt an, der für einen Drag-Vorgang erlaubt ist. Die _copy_-Operation zeigt an,
dass die Daten, die gezogen werden, von ihrem aktuellen Standort an den Zielort
kopiert werden. Die _move_-Operation zeigt an, dass die Daten, die gezogen
werden, verschoben werden, und die _link_-Operation zeigt an, dass eine Art von
Beziehung oder Verbindung zwischen dem Quell- und dem Zielort hergestellt wird.

Diese Eigenschaft sollte im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis gesetzt werden, um den gewünschten Drag-Effekt für die Drag-Quelle festzulegen. Innerhalb der Ereignis-Handler von [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) wird diese Eigenschaft auf den Wert gesetzt, der während des [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignisses zugewiesen wurde. Daher kann `effectAllowed` verwendet werden, um zu bestimmen, welcher Effekt zulässig ist.

Einem anderen Ereignis als [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) einen Wert für `effectAllowed` zuzuweisen, hat keinen Effekt.

## Wert

Ein String, der die erlaubte Drag-Operation darstellt. Die möglichen Werte sind:

- `none`
  - : Das Element darf nicht fallen gelassen werden.
- `copy`
  - : Eine Kopie des Quellobjekts kann am neuen Ort erstellt werden.
- `copyLink`
  - : Eine Kopier- oder Verbindungsoperation ist erlaubt.
- `copyMove`
  - : Eine Kopier- oder Verschiebeoperation ist erlaubt.
- `link`
  - : Eine Verbindung zum Quellobjekt kann am neuen Ort hergestellt werden.
- `linkMove`
  - : Eine Verbindungs- oder Verschiebeoperation ist erlaubt.
- `move`
  - : Ein Element kann an einen neuen Ort verschoben werden.
- `all`
  - : Alle Operationen sind erlaubt.
- `uninitialized`
  - : Der Standardwert, wenn der Effekt nicht gesetzt wurde, was allen entspricht.

Das Zuweisen eines anderen Wertes zu `effectAllowed` hat keinen Effekt, und der alte Wert bleibt erhalten.

## Beispiele

### effectAllowed setzen

In diesem Beispiel setzen wir `effectAllowed` im `dragstart`-Handler auf `"move"`.

#### HTML

```html
<div>
  <p id="source" draggable="true">
    Select this element, drag it to the Drop Zone and then release the selection
    to move the element.
  </p>
</div>
<div id="target">Drop Zone</div>
<pre id="output"></pre>
<button id="reset">Reset</button>
```

#### CSS

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

#output {
  height: 100px;
  overflow: scroll;
}
```

#### JavaScript

```js
function dragstartHandler(ev) {
  log(`dragstart: effectAllowed = ${ev.dataTransfer.effectAllowed}`);

  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function dropHandler(ev) {
  log(`drop: effectAllowed = ${ev.dataTransfer.effectAllowed}`);

  ev.preventDefault();
  // Get the id of the target and add the element to the target's DOM
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function dragoverHandler(ev) {
  log(`dragover: effectAllowed = ${ev.dataTransfer.effectAllowed}`);
  ev.preventDefault();
}

const source = document.querySelector("#source");
const target = document.querySelector("#target");

source.addEventListener("dragstart", dragstartHandler);
target.addEventListener("dragover", dragoverHandler);
target.addEventListener("drop", dropHandler);

function log(message) {
  const output = document.querySelector("#output");
  output.textContent = `${output.textContent}\n${message}`;
  output.scrollTop = output.scrollHeight;
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### Ergebnis

{{EmbedLiveSample("Setting effectAllowed", 0, 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Vorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
