---
title: "SourceBuffer: updatestart-Ereignis"
short-title: updatestart
slug: Web/API/SourceBuffer/updatestart_event
l10n:
  sourceCommit: 42ea605d69523989e468990fcd9e17abe934ec98
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`updatestart`**-Ereignis der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle signalisiert den Beginn einer [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)- oder [`remove()`](/de/docs/Web/API/SourceBuffer/remove)-Operation. Das [`updating`](/de/docs/Web/API/SourceBuffer/updating)-Attribut wechselt von `false` zu `true`.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("updatestart", (event) => { })

onupdatestart = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Abhören des updatestart-Ereignisses

```js
const sourceBuffer = source.addSourceBuffer(mimeCodec);
sourceBuffer.addEventListener("updatestart", () => {
  downloadStatus.textContent = "Modifying buffer...";
});
sourceBuffer.addEventListener("updateend", () => {
  downloadStatus.textContent = "Modification complete";
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)
- [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove)
