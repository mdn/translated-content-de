---
title: "Selection: Methode removeAllRanges()"
short-title: removeAllRanges()
slug: Web/API/Selection/removeAllRanges
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{ ApiRef("DOM") }}

Die **`Selection.removeAllRanges()`**-Methode entfernt alle Bereiche aus der Auswahl, wodurch die Eigenschaften {{domxref("Selection.anchorNode", "anchorNode")}} und {{domxref("Selection.focusNode","focusNode")}} auf `null` gesetzt werden und nichts mehr ausgewählt ist. Wenn diese Methode aufgerufen wird, wird ein {{domxref("Document/selectionchange_event", "selectionchange")}}-Ereignis im Dokument ausgelöst.

> [!NOTE]
> Diese Methode ist ein Alias für die Methode {{domxref("Selection.empty()")}}.

## Syntax

```js-nolint
removeAllRanges()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt eine Nachricht an, wenn etwas auf der Seite ausgewählt wurde oder nicht. Dies geschieht, indem das {{domxref("Document/selectionchange_event", "selectionchange")}}-Ereignis im Dokument überwacht wird. Es gibt auch einen Button, der jede Auswahl durch Aufruf von `Selection.removeAllRanges()` löscht. Wenn dies geschieht, wird die Auswahl geändert und die Nachricht aktualisiert.

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

- {{domxref("Selection.empty()")}}
- {{domxref("Document/selectionchange_event", "selectionchange")}}
