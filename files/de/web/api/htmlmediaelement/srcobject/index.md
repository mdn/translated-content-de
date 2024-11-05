---
title: "HTMLMediaElement: srcObject-Eigenschaft"
short-title: srcObject
slug: Web/API/HTMLMediaElement/srcObject
l10n:
  sourceCommit: fc33c3aaff27761d4bdb1f5d8e5b37f80c9f82f2
---

{{APIRef("HTML DOM")}}

Die **`srcObject`**-Eigenschaft der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle legt das Objekt fest oder gibt es zurück, das als Quelle für die mit dem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) verknüpften Medien dient, oder `null`, wenn keines zugewiesen ist.

Das Objekt kann ein [`MediaStream`](/de/docs/Web/API/MediaStream), ein [`MediaSource`](/de/docs/Web/API/MediaSource), ein [`Blob`](/de/docs/Web/API/Blob) oder eine [`File`](/de/docs/Web/API/File) (welche von `Blob` erbt) sein.

> [!NOTE]
> Ab März 2020 unterstützt nur Safari `srcObject` vollständig, d.h. die Verwendung von `MediaSource`-, `MediaStream`-, `Blob`- und `File`-Objekten als Werte. Andere Browser unterstützen `MediaStream`-Objekte; bis sie aufholen, erwägen Sie, eine URL mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) zu erstellen und sie [`HTMLMediaElement.src`](/de/docs/Web/API/HTMLMediaElement/src) zuzuweisen (siehe unten für ein Beispiel). Darüber hinaus unterstützt Chromium ab Version 108 das Anhängen eines dedizierten Worker-`MediaSource`-Objekts, indem die [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Instanz dieses Objekts (die vom Worker übertragen wurde) an `srcObject` zugewiesen wird.

## Wert

Ein [`MediaStream`](/de/docs/Web/API/MediaStream)-, [`MediaSource`](/de/docs/Web/API/MediaSource)-, [`Blob`](/de/docs/Web/API/Blob)- oder [`File`](/de/docs/Web/API/File)-Objekt (siehe jedoch die Kompatibilitätstabelle, um zu erfahren, was tatsächlich unterstützt wird), oder `null`, wenn keines zugewiesen ist.

## Nutzungshinweise

Ältere Versionen der Media Source-Spezifikation erforderten die Verwendung von [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), um eine Objekt-URL zu erstellen und dann [`src`](/de/docs/Web/API/HTMLMediaElement/src) auf diese URL zu setzen. Jetzt können Sie `srcObject` direkt auf den [`MediaStream`](/de/docs/Web/API/MediaStream) setzen.

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel wird ein [`MediaStream`](/de/docs/Web/API/MediaStream) von einer Kamera einem neu erstellten {{HTMLElement("video")}}-Element zugewiesen.

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const video = document.createElement("video");
video.srcObject = mediaStream;
```

In diesem Beispiel wird ein neues [`MediaSource`](/de/docs/Web/API/MediaSource) einem neu erstellten {{HTMLElement("video")}}-Element zugewiesen.

```js
const mediaSource = new MediaSource();
const video = document.createElement("video");
video.srcObject = mediaSource;
```

### Unterstützung des Fallbacks auf die src-Eigenschaft

Die folgenden Beispiele unterstützen ältere Browserversionen, die erfordern, dass Sie eine Objekt-URL erstellen und sie `src` zuweisen, wenn `srcObject` nicht unterstützt wird.

Zunächst wird ein [`MediaStream`](/de/docs/Web/API/MediaStream) von einer Kamera einem neu erstellten {{HTMLElement("video")}}-Element zugewiesen, mit Fallback für ältere Browser.

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const video = document.createElement("video");
if ("srcObject" in video) {
  video.srcObject = mediaStream;
} else {
  // Avoid using this in new browsers, as it is going away.
  video.src = URL.createObjectURL(mediaStream);
}
```

Zweitens wird ein neues [`MediaSource`](/de/docs/Web/API/MediaSource) einem neu erstellten {{HTMLElement("video")}}-Element zugewiesen, mit Fallback für ältere Browser und Browser, die die direkte Zuweisung von [`MediaSource`](/de/docs/Web/API/MediaSource) noch nicht unterstützen.

```js
const mediaSource = new MediaSource();
const video = document.createElement("video");
// Older browsers may not have srcObject
if ("srcObject" in video) {
  try {
    video.srcObject = mediaSource;
  } catch (err) {
    if (err.name !== "TypeError") {
      throw err;
    }
    // Even if they do, they may only support MediaStream
    video.src = URL.createObjectURL(mediaSource);
  }
} else {
  video.src = URL.createObjectURL(mediaSource);
}
```

### Erstellen einer `MediaSource` in einem Worker und Übergabe an den Haupt-Thread zur Wiedergabe

Die [`MediaSource.handle`](/de/docs/Web/API/MediaSource/handle)-Eigenschaft kann in einem dedizierten Worker abgerufen werden und das resultierende [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt wird dann über einen [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)-Aufruf an den Thread übertragen, der den Worker erstellt hat (in diesem Fall der Haupt-Thread):

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

Im Haupt-Thread empfangen wir den Handle über einen [`message`](/de/docs/Web/API/Worker/message_event)-Ereignishandler, hängen ihn an ein {{htmlelement("video")}} über seine `HTMLMediaElement.srcObject`-Eigenschaft an und [`play`](/de/docs/Web/API/HTMLMediaElement/play) das Video:

```js
worker.addEventListener("message", (msg) => {
  let mediaSourceHandle = msg.data.arg;
  video.srcObject = mediaSourceHandle;
  video.play();
});
```

> **Hinweis:** [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)s können nicht erfolgreich in oder über einen Shared Worker oder Service Worker übertragen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
