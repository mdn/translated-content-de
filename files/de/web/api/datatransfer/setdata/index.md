---
title: "DataTransfer: Methode setData()"
short-title: setData()
slug: Web/API/DataTransfer/setData
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransfer.setData()`**-Methode setzt die [drag data](/de/docs/Web/API/DataTransfer) der Drag-Operation auf die angegebene Daten und den Typ. Falls Daten für den angegebenen Typ nicht existieren, werden sie am Ende des Drag-Datenspeichers hinzugefügt, sodass der letzte Eintrag in der {{domxref("DataTransfer.types","types")}}-Liste der neue Typ ist. Wenn bereits Daten für den angegebenen Typ existieren, werden die vorhandenen Daten an derselben Position ersetzt. Das heißt, die Reihenfolge der {{domxref("DataTransfer.types","types")}}-Liste ändert sich nicht, wenn Daten des gleichen Typs ersetzt werden.

Beispieldatentypen sind `text/plain` und `text/uri-list`.

## Syntax

```js-nolint
setData(format, data)
```

### Parameter

- `format`
  - : Ein String, der den Typ der Drag-Daten repräsentiert, die dem {{domxref("DataTransfer")}} hinzugefügt werden sollen.
- `data`
  - : Ein String, der die Daten repräsentiert, die dem {{domxref("DataTransfer")}} hinzugefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Ein Element ziehen

In diesem Beispiel können wir ein {{HTMLElement("p")}}-Element in ein Ziel-{{HTMLElement("div")}}-Element ziehen.

- Im `dragstart`-Handler verwenden wir `setData()`, um die `id` des `<p>`-Elements zum {{domxref("DataTransfer")}}-Objekt hinzuzufügen.

- Im `drop`-Handler rufen wir die `id` ab und verwenden sie, um das `<p>`-Element in das Ziel zu verschieben.

#### HTML

```html
<div>
  <p id="source" draggable="true">
    Wählen Sie dieses Element aus, ziehen Sie es in die Ablagezone und lassen Sie die Auswahl los, um das Element zu verschieben.
  </p>
</div>
<div id="target">Ablagezone</div>

<button id="reset">Beispiel zurücksetzen</button>
```

#### CSS

```css
div {
  margin: 0.5em 0;
  padding: 2em;
}

#target,
#source {
  border: 1px solid black;
  padding: 0.5rem;
}

.dragging {
  background-color: pink;
}
```

#### JavaScript

```js
const source = document.querySelector("#source");
source.addEventListener("dragstart", (ev) => {
  console.log("dragStart");
  // Change the source element's background color
  // to show that drag has started
  ev.currentTarget.classList.add("dragging");
  // Clear the drag data cache (for all formats/types)
  ev.dataTransfer.clearData();
  // Set the drag's format and data.
  // Use the event target's id for the data
  ev.dataTransfer.setData("text/plain", ev.target.id);
});
source.addEventListener("dragend", (ev) =>
  ev.target.classList.remove("dragging"),
);

const target = document.querySelector("#target");
target.addEventListener("dragover", (ev) => {
  console.log("dragOver");
  ev.preventDefault();
});
target.addEventListener("drop", (ev) => {
  console.log("Drop");
  ev.preventDefault();
  // Get the data, which is the id of the source element
  const data = ev.dataTransfer.getData("text");
  const source = document.getElementById(data);
  ev.target.appendChild(source);
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### Ergebnis

{{EmbedLiveSample("Dragging an element", "", 250)}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
