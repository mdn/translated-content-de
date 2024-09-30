---
title: "Selection: empty() Methode"
short-title: empty()
slug: Web/API/Selection/empty
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{ ApiRef("DOM") }}

Die **`Selection.empty()`** Methode entfernt alle Bereiche aus der Auswahl, wodurch die Eigenschaften [`anchorNode`](/de/docs/Web/API/Selection/anchorNode) und [`focusNode`](/de/docs/Web/API/Selection/focusNode) auf `null` gesetzt werden und nichts ausgewählt ist. Wenn diese Methode aufgerufen wird, wird ein [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) Ereignis im Dokument ausgelöst.

> [!NOTE]
> Diese Methode ist ein Alias für die [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges) Methode.

## Syntax

```js-nolint
empty()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt eine Nachricht an, wenn etwas auf der Seite ausgewählt oder nicht ausgewählt wird. Es erreicht dies, indem es auf das [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) Ereignis im Dokument hört. Es gibt auch einen Knopf, der jegliche Auswahl löscht, indem er `Selection.empty()` aufruft. Wenn dies geschieht, wird die Auswahl geändert und die Nachricht wird aktualisiert.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet
  urna eget sapien venenatis, eget facilisis diam mattis.
</p>
<button>Clear selection</button>
<pre id="log"></pre>
```

```js
const log = document.getElementById("log");

// The selection object is a singleton associated with the document
const selection = document.getSelection();

// Logs if there is a selection or not
function newSelectionHandler() {
  if (selection.rangeCount !== 0) {
    log.textContent = "Some text is selected.";
  } else {
    log.textContent = "No selection on this document.";
  }
}

document.addEventListener("selectionchange", () => {
  newSelectionHandler();
});

newSelectionHandler();

// The button cancel all selection ranges
const button = document.querySelector("button");
button.addEventListener("click", () => {
  selection.empty();
});
```

{{EmbedLiveSample("Examples", "100%", "200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges)
- [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event)
