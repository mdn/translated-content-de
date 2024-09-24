---
title: MediaSourceHandle
slug: Web/API/MediaSourceHandle
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Media Source Extensions")}} {{AvailableInWorkers}}

Das **`MediaSourceHandle`**-Interface der {{domxref("Media Source Extensions API", "Media Source Extensions API", "", "nocode")}} fungiert als Proxy für ein {{domxref("MediaSource")}}, das von einem dedizierten Worker zurück zum Hauptthread übertragen und über die {{domxref("HTMLMediaElement.srcObject")}}-Eigenschaft an ein Medienelement angehängt werden kann. `MediaSource`-Objekte sind nicht übertragbar, da sie Ereignisziele sind, daher die Notwendigkeit für `MediaSourceHandle`s.

Es kann über die {{domxref("MediaSource.handle")}}-Eigenschaft zugegriffen werden.

Jedes `MediaSource`-Objekt, das innerhalb eines dedizierten Workers erstellt wird, hat sein eigenes unverwechselbares `MediaSourceHandle`. Der `MediaSource.handle`-Getter gibt immer die `MediaSourceHandle`-Instanz zurück, die zu der zugehörigen dedizierten Worker-`MediaSource`-Instanz gehört. Wenn der Handle bereits mit {{domxref("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}} an den Hauptthread übertragen wurde, ist die Handle-Instanz im Worker technisch abgetrennt und kann nicht erneut übertragen werden.

## Instanzeigenschaften

Keine.

## Instanzmethoden

Keine.

## Beispiele

Die {{domxref("MediaSource.handle", "handle")}}-Eigenschaft kann innerhalb eines dedizierten Workers abgerufen werden, und das resultierende `MediaSourceHandle`-Objekt wird dann über einen {{domxref("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}}-Aufruf an den Thread übertragen, der den Worker erstellt hat (in diesem Fall der Hauptthread):

```js
// Innerhalb des dedizierten Workers
let mediaSource = new MediaSource();
let handle = mediaSource.handle;
// Übertragen Sie den Handle an den Kontext, der den Worker erstellt hat
postMessage({ arg: handle }, [handle]);

mediaSource.addEventListener("sourceopen", () => {
  // Warten Sie auf sourceopen bei MediaSource, bevor Sie SourceBuffers erstellen
  // und diese mit abgerufenen Medien befüllen — MediaSource akzeptiert die Erstellung von SourceBuffers nicht, bevor es
  // an das HTMLMediaElement angehängt ist und sein readyState "open" ist
});
```

Im Hauptthread erhalten wir den Handle über einen {{domxref("Worker.message_event", "message")}}-Ereignishandler, hängen ihn an ein {{htmlelement("video")}} über seine {{domxref("HTMLMediaElement.srcObject")}}-Eigenschaft an und {{domxref("HTMLMediaElement.play()", "play")}} das Video:

```js
worker.addEventListener("message", (msg) => {
  let mediaSourceHandle = msg.data.arg;
  video.srcObject = mediaSourceHandle;
  video.play();
});
```

> **Note:** `MediaSourceHandle`s können nicht erfolgreich in oder über einen Shared Worker oder Service Worker übertragen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [MSE-in-Workers Demo von Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html)
- {{domxref("Media Source Extensions API", "Media Source Extensions API", "", "nocode")}}
- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
