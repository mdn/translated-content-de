---
title: "Selection: empty() Methode"
short-title: empty()
slug: Web/API/Selection/empty
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{ ApiRef("DOM") }}

Die **`Selection.empty()`**-Methode entfernt alle Bereiche aus der Auswahl, wodurch die Eigenschaften des {{domxref("Selection.anchorNode", "anchorNode")}} und {{domxref("Selection.focusNode","focusNode")}} auf `null` gesetzt werden und nichts mehr ausgewählt ist. Wenn diese Methode aufgerufen wird, wird ein {{domxref("Document/selectionchange_event", "selectionchange")}}-Ereignis im Dokument ausgelöst.

> [!NOTE]
> Diese Methode ist ein Alias für die {{domxref("Selection.removeAllRanges()")}}-Methode.

## Syntax

```js-nolint
empty()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt eine Nachricht an, ob etwas auf der Seite ausgewählt ist oder nicht. Es tut dies, indem es auf das {{domxref("Document/selectionchange_event", "selectionchange")}}-Ereignis im Dokument hört. Es gibt auch einen Button, der jegliche Auswahl löscht, indem er `Selection.empty()` aufruft. Wenn dies geschieht, wird die Auswahl geändert und die Nachricht aktualisiert.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet
  urna eget sapien venenatis, eget facilisis diam mattis.
</p>
<button>Auswahl löschen</button>
<pre id="log"></pre>
```

```js
const log = document.getElementById("log");

// Das Selektionsobjekt ist ein Singleton, das mit dem Dokument assoziiert ist
const selection = document.getSelection();

// Protokolliert, ob eine Auswahl vorhanden ist oder nicht
function newSelectionHandler() {
  if (selection.rangeCount !== 0) {
    log.textContent = "Einige Texte sind ausgewählt.";
  } else {
    log.textContent = "Keine Auswahl in diesem Dokument.";
  }
}

document.addEventListener("selectionchange", () => {
  newSelectionHandler();
});

newSelectionHandler();

// Der Button löscht alle Auswahlbereiche
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

- {{domxref("Selection.removeAllRanges()")}}
- {{domxref("Document/selectionchange_event", "selectionchange")}}
