---
title: "DataTransfer: effectAllowed-Eigenschaft"
short-title: effectAllowed
slug: Web/API/DataTransfer/effectAllowed
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransfer.effectAllowed`**-Eigenschaft gibt den Effekt an, der für eine Drag-&-Drop-Operation erlaubt ist. Die _copy_-Operation wird verwendet, um anzuzeigen, dass die Daten, die gezogen werden, von ihrem aktuellen Standort zum Zielort kopiert werden. Die _move_-Operation zeigt an, dass die Daten verschoben werden, und die _link_-Operation zeigt an, dass eine Art Beziehung oder Verbindung zwischen der Quelle und dem Zielort hergestellt wird.

Diese Eigenschaft sollte im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis gesetzt werden, um den gewünschten Drag-Effekt für die Drag-Quelle zu definieren. Innerhalb der [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignishandler wird diese Eigenschaft auf den Wert gesetzt, der während des [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignisses zugewiesen wurde. Daher kann `effectAllowed` verwendet werden, um festzustellen, welcher Effekt erlaubt ist.

Das Zuweisen eines Wertes zu `effectAllowed` in anderen Ereignissen als [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) hat keinen Effekt.

## Wert

Ein String, der die für das Drag-&-Drop erlaubte Operation angibt. Mögliche Werte sind:

- `none`
  - : Der Artikel darf nicht fallen gelassen werden.
- `copy`
  - : Eine Kopie des Ausgangsartikels kann am neuen Standort erstellt werden.
- `copyLink`
  - : Eine Kopier- oder Link-Operation ist erlaubt.
- `copyMove`
  - : Eine Kopier- oder Verschiebe-Operation ist erlaubt.
- `link`
  - : Eine Verknüpfung kann mit der Quelle am neuen Ort hergestellt werden.
- `linkMove`
  - : Eine Link- oder Verschiebe-Operation ist erlaubt.
- `move`
  - : Ein Artikel kann an einen neuen Standort verschoben werden.
- `all`
  - : Alle Operationen sind erlaubt.
- `uninitialized`
  - : Der Standardwert, wenn der Effekt nicht gesetzt wurde, was gleichbedeutend mit "alle" ist.

Das Zuweisen eines beliebigen anderen Wertes zu `effectAllowed` hat keinen Effekt und der alte Wert bleibt erhalten.

## Beispiele

### effectAllowed festlegen

In diesem Beispiel setzen wir `effectAllowed` auf `"move"` im `dragstart`-Handler.

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
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
