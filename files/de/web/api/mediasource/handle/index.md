---
title: "MediaSource: handle-Eigenschaft"
short-title: handle
slug: Web/API/MediaSource/handle
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("Media Source Extensions")}} {{AvailableInWorkers}}

Die **`handle`** schreibgeschützte Eigenschaft der {{domxref("MediaSource")}}-Schnittstelle gibt ein {{domxref("MediaSourceHandle")}}-Objekt zurück, einen Proxy für die `MediaSource`, der von einem dedizierten Worker zurück an den Hauptthread übertragen und über die {{domxref("HTMLMediaElement.srcObject")}}-Eigenschaft einem Media-Element zugewiesen werden kann.

> **Note:** `handle` ist nur bei {{domxref("MediaSource")}}-Instanzen innerhalb dedizierter Worker sichtbar.

Jedes `MediaSource`-Objekt, das innerhalb eines dedizierten Workers erstellt wird, hat sein eigenes distinctes `MediaSourceHandle`. Der `handle`-Getter gibt immer die `MediaSourceHandle`-Instanz zurück, die speziell für die zugehörige dedizierte Worker `MediaSource`-Instanz ist. Wenn das Handle bereits mit {{domxref("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}} an den Hauptthread übertragen wurde, ist die Handle-Instanz im Worker technisch getrennt und kann nicht erneut übertragen werden.

## Wert

Eine {{domxref("MediaSourceHandle")}}-Objektinstanz.

## Beispiele

Die `handle`-Eigenschaft kann innerhalb eines dedizierten Workers abgerufen werden und das resultierende {{domxref("MediaSourceHandle")}}-Objekt wird dann über einen {{domxref("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}}-Aufruf an den Thread übertragen, der den Worker erstellt hat (in diesem Fall der Hauptthread):

```js
// Innerhalb des dedizierten Workers
let mediaSource = new MediaSource();
let handle = mediaSource.handle;
// Übertragen des Handles an den Kontext, der den Worker erstellt hat
postMessage({ arg: handle }, [handle]);

mediaSource.addEventListener("sourceopen", () => {
  // Warten auf sourceopen bei MediaSource, bevor SourceBuffers erstellt
  // und mit abgerufenen Medien befüllt werden — MediaSource akzeptiert
  // keine Erstellung von SourceBuffers, bis es an das
  // HTMLMediaElement angehängt ist und sein readyState "open" ist
});
```

Im Hauptthread empfangen wir das Handle über einen {{domxref("Worker.message_event", "message")}}-Ereignishandler, hängen es über die {{domxref("HTMLMediaElement.srcObject")}}-Eigenschaft an ein {{htmlelement("video")}}, und {{domxref("HTMLMediaElement.play()", "spielen")}} dann das Video:

```js
worker.addEventListener("message", (msg) => {
  let mediaSourceHandle = msg.data.arg;
  video.srcObject = mediaSourceHandle;
  video.play();
});
```

> **Note:** {{domxref("MediaSourceHandle")}}s können nicht erfolgreich in oder über einen geteilten Worker oder Serviceworker übertragen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [MSE-in-Workers Demo von Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html)
- {{domxref("Media Source Extensions API", "Media Source Extensions API", "", "nocode")}}
- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
