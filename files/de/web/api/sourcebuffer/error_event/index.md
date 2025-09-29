---
title: "SourceBuffer: error-Ereignis"
short-title: error
slug: Web/API/SourceBuffer/error_event
l10n:
  sourceCommit: 42ea605d69523989e468990fcd9e17abe934ec98
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`error`**-Ereignis des [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Interfaces wird ausgelöst, wenn ein Fehler während der Verarbeitung einer [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)-Operation auftritt. Dies kann zum Beispiel passieren, wenn die hinzuzufügenden Daten nicht im erwarteten Format sind, der `SourceBuffer` in einem ungültigen Zustand ist oder der Benutzeragent die Daten nicht verarbeiten kann. Die [`updating`](/de/docs/Web/API/SourceBuffer/updating)-Eigenschaft wechselt von `true` zu `false`. Dieses Ereignis wird vor dem [`updateend`](/de/docs/Web/API/SourceBuffer/updateend_event)-Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Umgang mit Fehlern während `appendBuffer()`

Dieses Beispiel zeigt, wie Sie mit Fehlern umgehen, die während der `appendBuffer()`-Operation auftreten.

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
