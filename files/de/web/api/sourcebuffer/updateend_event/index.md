---
title: "SourceBuffer: updateend-Ereignis"
short-title: updateend
slug: Web/API/SourceBuffer/updateend_event
l10n:
  sourceCommit: 42ea605d69523989e468990fcd9e17abe934ec98
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`updateend`**-Ereignis der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle signalisiert den (nicht unbedingt erfolgreichen) Abschluss einer [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)- oder [`remove()`](/de/docs/Web/API/SourceBuffer/remove)-Operation. Das [`updating`](/de/docs/Web/API/SourceBuffer/updating)-Attribut wechselt von `true` zu `false`. Dieses Ereignis wird nach den Ereignissen [`update`](/de/docs/Web/API/SourceBuffer/update_event), [`error`](/de/docs/Web/API/SourceBuffer/error_event) oder [`abort`](/de/docs/Web/API/SourceBuffer/abort_event) ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("updateend", (event) => { })

onupdateend = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Behandlung des updateend-Ereignisses nach dem Hinzufügen von Daten

Dieses Beispiel zeigt, wie das `updateend`-Ereignis behandelt wird. Beachten Sie, dass wir jedes Abschlussereignis separat behandeln und `updateend` nur zur Finalisierung des Streams verwenden.

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
