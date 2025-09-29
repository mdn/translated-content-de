---
title: "SourceBuffer: update-Ereignis"
short-title: update
slug: Web/API/SourceBuffer/update_event
l10n:
  sourceCommit: 42ea605d69523989e468990fcd9e17abe934ec98
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`update`**-Ereignis der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle signalisiert den erfolgreichen Abschluss einer [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)- oder [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove)-Operation. Das [`updating`](/de/docs/Web/API/SourceBuffer/updating)-Attribut wechselt von `true` zu `false`. Dieses Ereignis wird vor dem [`updateend`](/de/docs/Web/API/SourceBuffer/updateend_event)-Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("update", (event) => { })

onupdate = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Umgang mit dem update-Ereignis nach dem Anhängen von Daten

Dieses Beispiel demonstriert, wie Sie das `update`-Ereignis nach einer erfolgreichen `appendBuffer()`-Operation behandeln können.

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
