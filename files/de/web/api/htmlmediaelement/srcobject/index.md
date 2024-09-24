---
title: "HTMLMediaElement: srcObject-Eigenschaft"
short-title: srcObject
slug: Web/API/HTMLMediaElement/srcObject
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`srcObject`**-Eigenschaft der
{{domxref("HTMLMediaElement")}}-Schnittstelle setzt oder gibt das Objekt zurück, das als
Quelle der Medien dient, die mit dem {{domxref("HTMLMediaElement")}} verbunden sind.

Das Objekt kann ein {{domxref("MediaStream")}}, eine {{domxref("MediaSource")}}, ein
{{domxref("Blob")}} oder eine {{domxref("File")}} (die von `Blob` erbt) sein.

> [!NOTE]
> Stand März 2020 unterstützt nur Safari `srcObject` vollständig, d.h. die Verwendung von `MediaSource`-, `MediaStream`-, `Blob`- und `File`-Objekten als Werte. Andere Browser unterstützen `MediaStream`-Objekte; bis sie aufholen, ziehen Sie es in Betracht, eine URL mit {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} zu erstellen und sie {{domxref("HTMLMediaElement.src")}} zuzuweisen (siehe unten für ein Beispiel). Darüber hinaus unterstützt Chromium ab Version 108 das Anhängen eines dedizierten Worker-`MediaSource`-Objekts, indem die Instanz des {{domxref("MediaSourceHandle")}} dieses Objekts (vom Worker übertragen) `srcObject` zugewiesen wird.

## Wert

Ein {{domxref('MediaStream')}}, eine {{domxref('MediaSource')}}, ein {{domxref('Blob')}} oder
eine {{domxref('File')}} (siehe jedoch die Kompatibilitätstabelle für die tatsächliche
Unterstützung).

## Nutzungshinweise

Ältere Versionen der Media Source-Spezifikation erforderten die Verwendung von
{{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}, um eine Objekt-URL zu erstellen, und
dann das Setzen von {{domxref("HTMLMediaElement.src", "src")}} auf diese URL. Jetzt können Sie
`srcObject` direkt auf den {{domxref("MediaStream")}} setzen.

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel wird ein {{domxref("MediaStream")}} von einer Kamera einem
neu erstellten {{HTMLElement("video")}}-Element zugewiesen.

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const video = document.createElement("video");
video.srcObject = mediaStream;
```

In diesem Beispiel wird eine neue {{domxref('MediaSource')}} einem neu erstellten
{{HTMLElement("video")}}-Element zugewiesen.

```js
const mediaSource = new MediaSource();
const video = document.createElement("video");
video.srcObject = mediaSource;
```

### Unterstützung des Rückfalls auf die src-Eigenschaft

Die untenstehenden Beispiele unterstützen ältere Browserversionen, die erfordern, dass
Sie eine Objekt-URL erstellen und sie `src` zuweisen, wenn `srcObject` nicht
unterstützt wird.

Zuerst wird ein {{domxref("MediaStream")}} von einer Kamera einem neu erstellten
{{HTMLElement("video")}}-Element zugewiesen, mit Rückfall für ältere Browser.

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const video = document.createElement("video");
if ("srcObject" in video) {
  video.srcObject = mediaStream;
} else {
  // Vermeiden Sie dies in neuen Browsern, da es entfernt wird.
  video.src = URL.createObjectURL(mediaStream);
}
```

Zweitens wird eine neue {{domxref('MediaSource')}} einem neu erstellten
{{HTMLElement("video")}}-Element zugewiesen, mit Rückfall für ältere Browser und Browser,
die die direkte Zuordnung von {{domxref('MediaSource')}} noch nicht unterstützen.

```js
const mediaSource = new MediaSource();
const video = document.createElement("video");
// Ältere Browser haben möglicherweise kein srcObject
if ("srcObject" in video) {
  try {
    video.srcObject = mediaSource;
  } catch (err) {
    if (err.name !== "TypeError") {
      throw err;
    }
    // Selbst wenn sie es haben, unterstützen sie möglicherweise nur MediaStream
    video.src = URL.createObjectURL(mediaSource);
  }
} else {
  video.src = URL.createObjectURL(mediaSource);
}
```

### Erstellen eines `MediaSource` in einem Worker und Übertragen an den Haupt-Thread zum Abspielen

Die {{domxref("MediaSource.handle")}}-Eigenschaft kann innerhalb eines dedizierten Workers abgerufen werden und das resultierende {{domxref("MediaSourceHandle")}}-Objekt wird dann über einen {{domxref("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}}-Aufruf an den Thread übertragen, der den Worker erstellt hat (in diesem Fall der Haupt-Thread):

```js
// Innerhalb dedizierter Worker
let mediaSource = new MediaSource();
let handle = mediaSource.handle;
// Übertragen Sie das Handle an den Kontext, der den Worker erstellt hat
postMessage({ arg: handle }, [handle]);

mediaSource.addEventListener("sourceopen", () => {
  // Warten Sie auf sourceopen auf MediaSource, bevor Sie SourceBuffers erstellen
  // und diese mit abgerufenen Medien füllen — MediaSource akzeptiert
  // keine Erstellung von SourceBuffers, bis es an das
  // HTMLMediaElement angehängt ist und sein readyState "open" ist
});
```

Auf dem Haupt-Thread empfangen wir das Handle über einen {{domxref("Worker.message_event", "message")}}-Ereignishandler, befestigen es an ein {{htmlelement("video")}} über seine `HTMLMediaElement.srcObject`-Eigenschaft und {{domxref("HTMLMediaElement.play()", "spielen")}} das Video:

```js
worker.addEventListener("message", (msg) => {
  let mediaSourceHandle = msg.data.arg;
  video.srcObject = mediaSourceHandle;
  video.play();
});
```

> **Hinweis:** {{domxref("MediaSourceHandle")}}s können nicht erfolgreich in oder über einen Shared Worker oder Service Worker übertragen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
