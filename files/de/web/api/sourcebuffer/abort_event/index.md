---
title: "SourceBuffer: abort-Ereignis"
short-title: abort
slug: Web/API/SourceBuffer/abort_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`abort`**-Ereignis der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle wird ausgelöst, wenn das Anhängen an den Puffer abgebrochen wird, weil die Methode [`SourceBuffer.abort()`](/de/docs/Web/API/SourceBuffer/abort) oder [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove) aufgerufen wird, während der Algorithmus von [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) noch läuft. Die Eigenschaft [`updating`](/de/docs/Web/API/SourceBuffer/updating) wechselt von `true` zu `false`. Dieses Ereignis wird vor dem Ereignis [`updateend`](/de/docs/Web/API/SourceBuffer/updateend_event) ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("abort", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onabort = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Eine Anhängeoperation abbrechen

Dieses Beispiel zeigt, wie Sie eine Anhängeoperation abbrechen und das `abort`-Ereignis behandeln.

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
