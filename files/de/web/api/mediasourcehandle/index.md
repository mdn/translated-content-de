---
title: MediaSourceHandle
slug: Web/API/MediaSourceHandle
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`MediaSourceHandle`**-Interface der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) dient als Proxy für ein [`MediaSource`](/de/docs/Web/API/MediaSource), das von einem dedizierten Worker zurück in den Haupt-Thread übertragen werden kann und über seine [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft an ein Medien-Element angehängt wird. `MediaSource`-Objekte sind nicht übertragbar, da sie Ereignisziele sind, daher sind `MediaSourceHandle`s erforderlich.

Es kann über die [`MediaSource.handle`](/de/docs/Web/API/MediaSource/handle)-Eigenschaft aufgerufen werden.

Jedes `MediaSource`-Objekt, das innerhalb eines dedizierten Workers erstellt wird, hat sein eigenes `MediaSourceHandle`. Der `MediaSource.handle`-Getter gibt immer die `MediaSourceHandle`-Instanz zurück, die speziell mit der zugehörigen dedizierten Worker-`MediaSource`-Instanz verbunden ist. Wenn der Handle bereits mit [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) an den Haupt-Thread übertragen wurde, ist die Handle-Instanz im Worker technisch abgetrennt und kann nicht erneut übertragen werden.

`MediaSourceHandle` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

Keine.

## Beispiele

Die [`handle`](/de/docs/Web/API/MediaSource/handle)-Eigenschaft kann innerhalb eines dedizierten Workers aufgerufen werden, und das resultierende `MediaSourceHandle`-Objekt wird dann über einen [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)-Aufruf an den Thread übertragen, der den Worker erstellt hat (in diesem Fall der Haupt-Thread):

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

Im Haupt-Thread empfangen wir den Handle über einen [`message`](/de/docs/Web/API/Worker/message_event)-Ereignishandler, verknüpfen ihn über seine [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft mit einem {{htmlelement("video")}} und [`play`](/de/docs/Web/API/HTMLMediaElement/play) das Video:

```js
worker.addEventListener("message", (msg) => {
  let mediaSourceHandle = msg.data.arg;
  video.srcObject = mediaSourceHandle;
  video.play();
});
```

> [!NOTE] > `MediaSourceHandle`s können nicht erfolgreich in oder über einen Shared Worker oder Service Worker übertragen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [MSE-in-Workers Demo von Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html)
- [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API)
- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
