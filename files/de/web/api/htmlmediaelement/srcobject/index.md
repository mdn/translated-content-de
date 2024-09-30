---
title: "HTMLMediaElement: srcObject-Eigenschaft"
short-title: srcObject
slug: Web/API/HTMLMediaElement/srcObject
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`srcObject`**-Eigenschaft des
[`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interfaces legt das Objekt fest oder gibt es zurück, das als Quelle der Medien dient, die mit dem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) verbunden sind.

Das Objekt kann ein [`MediaStream`](/de/docs/Web/API/MediaStream), eine [`MediaSource`](/de/docs/Web/API/MediaSource), ein
[`Blob`](/de/docs/Web/API/Blob) oder eine [`File`](/de/docs/Web/API/File) (die von `Blob` erbt) sein.

> [!NOTE]
> Seit März 2020 hat nur Safari volle Unterstützung für `srcObject`, d.h. die Verwendung von `MediaSource`-, `MediaStream`-, `Blob`- und `File`-Objekten als Werte. Andere Browser unterstützen `MediaStream`-Objekte; bis sie aufholen, ziehen Sie in Betracht, eine URL mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) zu erstellen und diese dem [`HTMLMediaElement.src`](/de/docs/Web/API/HTMLMediaElement/src) zuzuweisen (siehe unten für ein Beispiel). Zusätzlich unterstützt Chromium ab Version 108 das Anhängen eines dedizierten Worker-`MediaSource`-Objekts durch Zuweisung der Instanz [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle) dieses Objekts (übertragen vom Worker) an `srcObject`.

## Wert

Ein [`MediaStream`](/de/docs/Web/API/MediaStream), eine [`MediaSource`](/de/docs/Web/API/MediaSource), ein [`Blob`](/de/docs/Web/API/Blob) oder
ein [`File`](/de/docs/Web/API/File) Objekt (siehe jedoch die Kompatibilitätstabelle, um zu sehen, was tatsächlich unterstützt wird).

## Nutzungshinweise

Ältere Versionen der Media Source-Spezifikation erforderten die Verwendung von
[`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), um eine Objekt-URL zu erstellen und dann
[`src`](/de/docs/Web/API/HTMLMediaElement/src) auf diese URL zu setzen. Jetzt können Sie einfach
`srcObject` direkt auf den [`MediaStream`](/de/docs/Web/API/MediaStream) setzen.

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird einem neu erstellten {{HTMLElement("video")}}-Element ein [`MediaStream`](/de/docs/Web/API/MediaStream) von einer Kamera zugewiesen.

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const video = document.createElement("video");
video.srcObject = mediaStream;
```

In diesem Beispiel wird einem neu erstellten {{HTMLElement("video")}}-Element eine neue [`MediaSource`](/de/docs/Web/API/MediaSource) zugewiesen.

```js
const mediaSource = new MediaSource();
const video = document.createElement("video");
video.srcObject = mediaSource;
```

### Unterstützung für Fallback auf die src-Eigenschaft

Die folgenden Beispiele unterstützen ältere Browserversionen, die erfordern, dass Sie eine Objekt-URL erstellen und sie `src` zuweisen, falls `srcObject` nicht unterstützt wird.

Zuerst wird einem neu erstellten {{HTMLElement("video")}}-Element ein [`MediaStream`](/de/docs/Web/API/MediaStream) von einer Kamera zugewiesen, mit Fallback für ältere Browser.

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

Zweitens wird einem neu erstellten {{HTMLElement("video")}}-Element eine neue [`MediaSource`](/de/docs/Web/API/MediaSource) zugewiesen, mit Fallback für ältere Browser und Browser, die die direkte Zuweisung von [`MediaSource`](/de/docs/Web/API/MediaSource) noch nicht unterstützen.

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

### Erstellen einer `MediaSource` in einem Worker und Übergabe an den Hauptthread zum Abspielen

Die [`MediaSource.handle`](/de/docs/Web/API/MediaSource/handle) Eigenschaft kann innerhalb eines dedizierten Workers zugegriffen werden und das resultierende [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle) Objekt wird dann über einen [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)-Aufruf an den Thread übertragen, der den Worker erstellt hat (in diesem Fall der Hauptthread):

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

Im Hauptthread empfangen wir den Handle über einen [`message`](/de/docs/Web/API/Worker/message_event) Ereignishandler, hängen ihn über seine `HTMLMediaElement.srcObject`-Eigenschaft an ein {{htmlelement("video")}} und [`spielen`](/de/docs/Web/API/HTMLMediaElement/play) das Video ab:

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
