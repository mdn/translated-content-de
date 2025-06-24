---
title: "MediaSource: handle-Eigenschaft"
short-title: handle
slug: Web/API/MediaSource/handle
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("dedicated")}}

Die schreibgeschützte **`handle`**-Eigenschaft des [`MediaSource`](/de/docs/Web/API/MediaSource)-Interfaces gibt ein [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt zurück, einen Proxy für das `MediaSource`, das von einem Dedicated Worker zurück zum Haupt-Thread übertragen und über seine [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft an ein Medien-Element angehängt werden kann.

> [!NOTE] > `handle` ist nur bei [`MediaSource`](/de/docs/Web/API/MediaSource)-Instanzen innerhalb von Dedicated Workern sichtbar.

Jedes `MediaSource`-Objekt, das innerhalb eines Dedicated Workers erstellt wird, hat sein eigenes, eindeutiges `MediaSourceHandle`. Der `handle`-Getter gibt immer die `MediaSourceHandle`-Instanz zurück, die spezifisch für die zugehörige Dedicated Worker `MediaSource`-Instanz ist. Wenn das Handle bereits unter Verwendung von [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) an den Haupt-Thread übertragen wurde, ist die Handle-Instanz im Worker technisch abgetrennt und kann nicht erneut übertragen werden.

## Wert

Eine [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objektinstanz.

## Beispiele

Die `handle`-Eigenschaft kann innerhalb eines Dedicated Workers abgerufen werden, und das resultierende [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt wird dann über einen [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)-Aufruf an den Thread übertragen, der den Worker erstellt hat (in diesem Fall der Haupt-Thread):

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

Im Haupt-Thread empfangen wir das Handle über einen [`message`](/de/docs/Web/API/Worker/message_event)-Ereignishandler, hängen es über seine [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft an ein {{htmlelement("video")}} und [`play`](/de/docs/Web/API/HTMLMediaElement/play) das Video:

```js
worker.addEventListener("message", (msg) => {
  let mediaSourceHandle = msg.data.arg;
  video.srcObject = mediaSourceHandle;
  video.play();
});
```

> [!NOTE] > [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)s können nicht erfolgreich in oder über einen Shared Worker oder Service Worker übertragen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [MSE-in-Workers-Demo von Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html)
- [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API)
- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
