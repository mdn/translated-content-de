---
title: "SourceBuffer: updatestart-Ereignis"
short-title: updatestart
slug: Web/API/SourceBuffer/updatestart_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`updatestart`**-Ereignis der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle signalisiert den Beginn einer [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)- oder [`remove()`](/de/docs/Web/API/SourceBuffer/remove)-Operation. Das [`updating`](/de/docs/Web/API/SourceBuffer/updating)-Attribut wechselt von `false` zu `true`.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("updatestart", (event) => { })
```

Alternativ können Sie ihn der [Ereignisbehandlungseigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onupdatestart = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Auf das updatestart-Ereignis reagieren

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
