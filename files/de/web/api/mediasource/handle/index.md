---
title: "MediaSource: handle-Eigenschaft"
short-title: handle
slug: Web/API/MediaSource/handle
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("dedicated")}}

Die **`handle`**-Eigenschaft des [`MediaSource`](/de/docs/Web/API/MediaSource)-Interfaces ist eine schreibgeschützte Eigenschaft, die ein [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt zurückgibt. Dieses Objekt fungiert als Proxy für den `MediaSource`, der von einem dedizierten Worker zurück in den Haupt-Thread übertragen und über die [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft an ein Media-Element angehängt werden kann.

> **Note:** `handle` ist nur bei [`MediaSource`](/de/docs/Web/API/MediaSource)-Instanzen innerhalb von dedizierten Workern sichtbar.

Jedes innerhalb eines dedizierten Workers erstellte `MediaSource`-Objekt hat sein eigenes, eindeutiges `MediaSourceHandle`. Der `handle`-Getter gibt immer die `MediaSourceHandle`-Instanz zurück, die spezifisch für die zugehörige dedizierte Worker-`MediaSource`-Instanz ist. Wenn der Handle bereits mit [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) an den Haupt-Thread übertragen wurde, ist die Handle-Instanz im Worker technisch getrennt und kann nicht erneut übertragen werden.

## Wert

Eine Instanz des [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekts.

## Beispiele

Die `handle`-Eigenschaft kann innerhalb eines dedizierten Workers aufgerufen werden, und das resultierende [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt wird dann über einen [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)-Aufruf an den Thread übertragen, der den Worker erstellt hat (in diesem Fall der Haupt-Thread):

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

Im Haupt-Thread empfangen wir den Handle über einen [`message`](/de/docs/Web/API/Worker/message_event)-Ereignishandler, hängen ihn an ein {{htmlelement("video")}} über dessen [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft an und [`play`](/de/docs/Web/API/HTMLMediaElement/play) das Video:

```js
worker.addEventListener("message", (msg) => {
  let mediaSourceHandle = msg.data.arg;
  video.srcObject = mediaSourceHandle;
  video.play();
});
```

> **Note:** [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)s können nicht erfolgreich in oder über einen Shared Worker oder Service Worker übertragen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [MSE-in-Workers Demo von Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html)
- [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API)
- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
