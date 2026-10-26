---
title: "SourceBuffer: error-Ereignis"
short-title: error
slug: Web/API/SourceBuffer/error_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`error`**-Ereignis der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle wird ausgelöst, wenn bei der Verarbeitung einer [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)-Operation ein Fehler auftritt. Dies kann beispielsweise geschehen, wenn die angehängten Daten nicht das erwartete Format haben, sich der `SourceBuffer` in einem ungültigen Zustand befindet oder der User Agent die Daten nicht verarbeiten kann. Die Eigenschaft [`updating`](/de/docs/Web/API/SourceBuffer/updating) wechselt von `true` zu `false`. Dieses Ereignis wird vor dem Ereignis [`updateend`](/de/docs/Web/API/SourceBuffer/updateend_event) ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("error", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Fehler bei appendBuffer() behandeln

Dieses Beispiel zeigt, wie Sie Fehler behandeln, die während der `appendBuffer()`-Operation auftreten.

```js
const sourceBuffer = source.addSourceBuffer(mimeCodec);
sourceBuffer.addEventListener("error", () => {
  downloadStatus.textContent = "Error occurred during decoding";
});
sourceBuffer.addEventListener("update", () => {
  downloadStatus.textContent = "Done";
});
sourceBuffer.addEventListener("updateend", () => {
  source.endOfStream();
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

- [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)
- [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove)
