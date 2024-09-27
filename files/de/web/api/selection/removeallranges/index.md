---
title: "Selection: removeAllRanges()-Methode"
short-title: removeAllRanges()
slug: Web/API/Selection/removeAllRanges
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{ ApiRef("DOM") }}

Die **`Selection.removeAllRanges()`**-Methode entfernt alle Bereiche aus der Auswahl, sodass die Eigenschaften [`anchorNode`](/de/docs/Web/API/Selection/anchorNode) und [`focusNode`](/de/docs/Web/API/Selection/focusNode) gleich `null` sind und nichts ausgewählt ist. Wenn diese Methode aufgerufen wird, wird ein [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event)-Ereignis im Dokument ausgelöst.

> [!NOTE]
> Diese Methode ist ein Alias für die [`Selection.empty()`](/de/docs/Web/API/Selection/empty)-Methode.

## Syntax

```js-nolint
removeAllRanges()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt eine Nachricht an, ob etwas auf der Seite ausgewählt ist oder nicht. Es geschieht, indem auf das [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event)-Ereignis im Dokument gehört wird. Es gibt auch einen Button, der jede Auswahl entfernt, indem `Selection.removeAllRanges()` aufgerufen wird. Wenn dies geschieht, wird die Auswahl geändert und die Nachricht aktualisiert.

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
  selection.removeAllRanges();
});
```

{{EmbedLiveSample("Examples", "100%", "200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection.empty()`](/de/docs/Web/API/Selection/empty)
- [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event)
