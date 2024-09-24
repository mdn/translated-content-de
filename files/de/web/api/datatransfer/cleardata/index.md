---
title: "DataTransfer: clearData() Methode"
short-title: clearData()
slug: Web/API/DataTransfer/clearData
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransfer.clearData()`** Methode entfernt die [Drag-Daten](/de/docs/Web/API/DataTransfer) für den angegebenen Typ aus der Drag-Operation. Wenn keine Daten für den angegebenen Typ existieren, tut diese Methode nichts.

Wenn diese Methode ohne Argumente oder mit leerem Format aufgerufen wird, werden die Daten aller Typen entfernt.

Diese Methode entfernt _nicht_ die Dateien aus der Drag-Operation. Daher kann es sein, dass immer noch ein Eintrag mit dem Typ `"Files"` in der {{domxref("DataTransfer.types")}} Liste des Objekts verbleibt, wenn Dateien in das Drag eingebunden sind.

> [!NOTE]
> Diese Methode kann nur im Handler für das {{domxref("HTMLElement/dragstart_event", "dragstart")}} Event verwendet werden,
> da dies der einzige Zeitpunkt ist, zu dem der Datenspeicher der Drag-Operation beschreibbar ist.

## Syntax

```js-nolint
clearData()
clearData(format)
```

### Parameter

- `format` {{optional_inline}}
  - : Ein String, der den Typ der zu entfernenden Daten angibt. Wenn dieser Parameter ein leerer String ist oder nicht bereitgestellt wird, werden die Daten für alle Typen entfernt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt die Verwendung der Methoden {{domxref("DataTransfer")}}
{{domxref("DataTransfer.getData()","getData()")}},
{{domxref("DataTransfer.setData()","setData()")}} und `clearData()`.

### HTML

```html
<span class="tweaked" id="source" draggable="true">
  Wählen Sie dieses Element aus, ziehen Sie es zur Drop-Zone und lassen Sie die Auswahl dann los, um das Element zu verschieben.
</span>
<span class="tweaked" id="target">Drop-Zone</span>
<div>Status: <span id="status">Ziehen zum Starten</span></div>
<div>Daten sind: <span id="data">uninitialisiert</span></div>
```

### CSS

```css
span.tweaked {
  display: inline-block;
  margin: 1em 0;
  padding: 1em 2em;
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
window.addEventListener("DOMContentLoaded", () => {
  // HTML-Elemente auswählen
  const draggable = document.getElementById("source");
  const droppable = document.getElementById("target");
  const status = document.getElementById("status");
  const data = document.getElementById("data");
  let dropped = false;

  // Event-Handler registrieren
  draggable.addEventListener("dragstart", dragStartHandler);
  draggable.addEventListener("dragend", dragEndHandler);
  droppable.addEventListener("dragover", dragOverHandler);
  droppable.addEventListener("dragleave", dragLeaveHandler);
  droppable.addEventListener("drop", dropHandler);

  function dragStartHandler(event) {
    status.textContent = "Ziehen im Gange";

    // Ändern Sie die Bordüre des Ziel-Elements, um anzuzeigen, dass das Ziehen begonnen hat
    event.currentTarget.style.border = "1px dashed blue";

    // Beginnen Sie damit, vorhandene Zwischenablagen zu löschen; dies wird alle Typen betreffen, da wir keinen spezifischen Typ angeben.

    event.dataTransfer.clearData();

    // Setzen Sie das Format und die Daten des Zugs (verwenden Sie die ID des Ereignisziels für die Daten)
    event.dataTransfer.setData("text/plain", event.target.id);

    data.textContent = event.dataTransfer.getData("text/plain");
  }

  function dragEndHandler(event) {
    if (!dropped) {
      status.textContent = "Ziehen abgebrochen";
    }

    data.textContent = event.dataTransfer.getData("text/plain") || "leer";

    // Ändern Sie die Bordüre, um anzuzeigen, dass das Ziehen nicht mehr im Gange ist
    event.currentTarget.style.border = "1px solid black";

    if (dropped) {
      // Entfernen Sie alle Event-Listener
      draggable.removeEventListener("dragstart", dragStartHandler);
      draggable.removeEventListener("dragend", dragEndHandler);
      droppable.removeEventListener("dragover", dragOverHandler);
      droppable.removeEventListener("dragleave", dragLeaveHandler);
      droppable.removeEventListener("drop", dropHandler);
    }
  }

  function dragOverHandler(event) {
    status.textContent = "Absetzen möglich";

    event.preventDefault();
  }

  function dragLeaveHandler(event) {
    status.textContent = "Ziehen im Gange (Absetzen war möglich)";

    event.preventDefault();
  }

  function dropHandler(event) {
    dropped = true;

    status.textContent = "Absetzen abgeschlossen";

    event.preventDefault();

    // Holen Sie sich die Daten, die mit dem Ereignisformat „text“ verknüpft sind
    const _data = event.dataTransfer.getData("text/plain");
    const element = document.getElementById(_data);

    // Hängen Sie das Ziehquelle-Element an das Ziel-Element des Ereignisses an
    event.target.appendChild(element);

    // Ändern Sie die CSS-Stile und den angezeigten Text
    element.style.cssText =
      "border: 1px solid black;display: block; color: red";
    element.textContent = "Ich bin in der Drop-Zone!";
  }
});
```

{{EmbedLiveSample('Examples', 300, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
