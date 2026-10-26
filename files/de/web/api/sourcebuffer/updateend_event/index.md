---
title: "SourceBuffer: updateend-Ereignis"
short-title: updateend
slug: Web/API/SourceBuffer/updateend_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`updateend`**-Ereignis der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle signalisiert den Abschluss einer [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)- oder [`remove()`](/de/docs/Web/API/SourceBuffer/remove)-Operation, unabhängig davon, ob sie erfolgreich war. Das Attribut [`updating`](/de/docs/Web/API/SourceBuffer/updating) wechselt von `true` zu `false`. Dieses Ereignis wird nach einem der Ereignisse [`update`](/de/docs/Web/API/SourceBuffer/update_event), [`error`](/de/docs/Web/API/SourceBuffer/error_event) oder [`abort`](/de/docs/Web/API/SourceBuffer/abort_event) ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("updateend", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onupdateend = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Das updateend-Ereignis nach dem Anhängen von Daten verarbeiten

Dieses Beispiel zeigt, wie das `updateend`-Ereignis verarbeitet wird. Beachten Sie, dass jedes Abschlussereignis separat behandelt und `updateend` nur zum Abschließen des Streams verwendet wird.

```js
const sourceBuffer = source.addSourceBuffer(mimeCodec);
sourceBuffer.addEventListener("abort", () => {
  downloadStatus.textContent = "Canceled";
});
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
