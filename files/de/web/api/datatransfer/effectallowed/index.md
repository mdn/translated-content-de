---
title: "DataTransfer: effectAllowed Eigenschaft"
short-title: effectAllowed
slug: Web/API/DataTransfer/effectAllowed
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransfer.effectAllowed`**-Eigenschaft legt fest, welcher Effekt für eine Drag-Operation erlaubt ist. Die _copy_-Operation wird verwendet, um anzuzeigen, dass die Daten, die gezogen werden, von ihrem aktuellen Standort an den Zielort kopiert werden. Die _move_-Operation wird verwendet, um anzuzeigen, dass die Daten, die gezogen werden, verschoben werden, und die _link_-Operation wird verwendet, um anzuzeigen, dass eine Form von Beziehung oder Verbindung zwischen dem Quell- und dem Zielort erstellt wird.

Diese Eigenschaft sollte im {{domxref("HTMLElement/dragstart_event", "dragstart")}}-Ereignis gesetzt werden, um den gewünschten Drag-Effekt für die Quelle festzulegen. Innerhalb der Handler für die Ereignisse {{domxref("HTMLElement/dragenter_event", "dragenter")}} und {{domxref("HTMLElement/dragover_event", "dragover")}} wird diese Eigenschaft auf den bei dem {{domxref("HTMLElement/dragstart_event", "dragstart")}}-Ereignis zugewiesenen Wert gesetzt, so dass `effectAllowed` verwendet werden kann, um festzustellen, welcher Effekt erlaubt ist.

Das Zuweisen eines Wertes zu `effectAllowed` in anderen Ereignissen als {{domxref("HTMLElement/dragstart_event", "dragstart")}} hat keine Auswirkung.

## Wert

Ein String, der die erlaubte Drag-Operation darstellt. Die möglichen Werte sind:

- `none`
  - : Das Element darf nicht abgelegt werden.
- `copy`
  - : Eine Kopie des Quellobjekts darf am neuen Standort erstellt werden.
- `copyLink`
  - : Eine Kopier- oder Link-Operation ist zulässig.
- `copyMove`
  - : Eine Kopier- oder Verschiebe-Operation ist zulässig.
- `link`
  - : Eine Verbindung zum Quellobjekt kann am neuen Standort hergestellt werden.
- `linkMove`
  - : Eine Verbindungs- oder Verschiebe-Operation ist zulässig.
- `move`
  - : Ein Element darf an einen neuen Standort verschoben werden.
- `all`
  - : Alle Operationen sind erlaubt.
- `uninitialized`
  - : Der Standardwert, wenn kein Effekt festgelegt wurde, entspricht allen.

Das Zuweisen eines anderen Wertes zu `effectAllowed` hat keine Auswirkungen und der alte Wert bleibt erhalten.

## Beispiele

### effectAllowed festlegen

In diesem Beispiel setzen wir `effectAllowed` im `dragstart`-Handler auf `"move"`.

#### HTML

```html
<div>
  <p id="source" draggable="true">
    Wählen Sie dieses Element aus, ziehen Sie es in die Drop-Zone und lassen Sie dann die Auswahl los, um das Element zu verschieben.
  </p>
</div>
<div id="target">Drop Zone</div>
<pre id="output"></pre>
<button id="reset">Zurücksetzen</button>
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

- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
