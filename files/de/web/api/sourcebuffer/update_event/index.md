---
title: "SourceBuffer: update-Ereignis"
short-title: update
slug: Web/API/SourceBuffer/update_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`update`**-Ereignis der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle signalisiert den erfolgreichen Abschluss einer [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)- oder [`remove()`](/de/docs/Web/API/SourceBuffer/remove)-Operation. Das [`updating`](/de/docs/Web/API/SourceBuffer/updating)-Attribut wechselt von `true` zu `false`. Dieses Ereignis wird vor dem [`updateend`](/de/docs/Web/API/SourceBuffer/updateend_event)-Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("update", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onupdate = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Das update-Ereignis nach dem Anhängen von Daten behandeln

Dieses Beispiel zeigt, wie Sie das `update`-Ereignis nach einer erfolgreichen `appendBuffer()`-Operation behandeln.

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
