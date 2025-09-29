---
title: "SourceBuffer: abort-Ereignis"
short-title: abort
slug: Web/API/SourceBuffer/abort_event
l10n:
  sourceCommit: 42ea605d69523989e468990fcd9e17abe934ec98
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`abort`**-Ereignis des [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Interfaces wird ausgelöst, wenn das Auffüllen des Puffers abgebrochen wird, weil die Methoden [`SourceBuffer.abort()`](/de/docs/Web/API/SourceBuffer/abort) oder [`SourceBuffer.removeSourceBuffer()`](/de/docs/Web/API/SourceBuffer/removeSourceBuffer) aufgerufen werden, während der Algorithmus [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) noch läuft. Die [`updating`](/de/docs/Web/API/SourceBuffer/updating)-Eigenschaft wechselt von `true` zu `false`. Dieses Ereignis wird vor dem [`updateend`](/de/docs/Web/API/SourceBuffer/updateend_event)-Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("abort", (event) => { })

onabort = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Abbrechen eines Anhängevorgangs

Dieses Beispiel zeigt, wie ein Anhängevorgang abgebrochen und das `abort`-Ereignis behandelt wird.

```js
const sourceBuffer = source.addSourceBuffer(mimeCodec);
sourceBuffer.addEventListener("abort", () => {
  downloadStatus.textContent = "Canceled";
});
sourceBuffer.addEventListener("update", () => {
  downloadStatus.textContent = "Done";
});
sourceBuffer.addEventListener("updateend", () => {
  source.endOfStream();
});
cancelButton.addEventListener("click", () => {
  if (sourceBuffer.updating) {
    sourceBuffer.abort();
  }
});
downloadStatus.textContent = "Downloading...";
fetch(assetURL)
  .then((response) => response.arrayBuffer())
  .then((data) => {
    downloadStatus.textContent = "Decoding...";
    sourceBuffer.appendBuffer(data);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SourceBuffer.abort()`](/de/docs/Web/API/SourceBuffer/abort)
