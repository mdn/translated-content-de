---
title: MediaSourceHandle
slug: Web/API/MediaSourceHandle
l10n:
  sourceCommit: 47c461a1ebc95289543ea2962c6dbc8d57ee76d9
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`MediaSourceHandle`** Interface der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) ist ein Proxy für eine [`MediaSource`](/de/docs/Web/API/MediaSource), die von einem dedizierten Worker zurück in den Haupt-Thread übertragen und über die Eigenschaft [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) an ein Medien-Element angehängt werden kann. `MediaSource`-Objekte sind nicht übertragbar, da sie Ereignisziele sind, daher die Notwendigkeit für `MediaSourceHandle`s.

Es kann über die [`MediaSource.handle`](/de/docs/Web/API/MediaSource/handle) Eigenschaft aufgerufen werden.

Jedes `MediaSource`-Objekt, das innerhalb eines dedizierten Workers erstellt wird, hat seine eigene eindeutige `MediaSourceHandle`. Der `MediaSource.handle` Getter wird immer die `MediaSourceHandle` Instanz zurückgeben, die spezifisch für die zugehörige dedizierte Worker `MediaSource` Instanz ist. Wenn der Handle bereits mit [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) an den Haupt-Thread übertragen wurde, ist die Handle-Instanz im Worker technisch getrennt und kann nicht erneut übertragen werden.

`MediaSourceHandle` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

Keine.

## Beispiele

Die [`handle`](/de/docs/Web/API/MediaSource/handle) Eigenschaft kann innerhalb eines dedizierten Workers aufgerufen werden. Das resultierende `MediaSourceHandle`-Objekt wird dann über einen [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) Aufruf an den Thread, der den Worker erstellt hat (in diesem Fall der Haupt-Thread), übertragen:

```js
// Inside dedicated worker
let mediaSource = new MediaSource();
let handle = mediaSource.handle;
// Transfer the handle to the context that created the worker
postMessage({ arg: handle }, [handle]);

mediaSource.addEventListener("sourceopen", () => {
  // Await sourceopen on MediaSource before creating SourceBuffers
  // and populating them with fetched media — MediaSource won't
  // accept creation of SourceBuffers until it is attached to the
  // HTMLMediaElement and its readyState is "open"
});
```

Im Haupt-Thread empfangen wir den Handle über einen [`message`](/de/docs/Web/API/Worker/message_event) Ereignishandler, hängen ihn mittels seiner [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) Eigenschaft an ein {{htmlelement("video")}} an und [`play`](/de/docs/Web/API/HTMLMediaElement/play) das Video:

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
- [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API)
- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
