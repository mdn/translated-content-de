---
title: MediaSource
slug: Web/API/MediaSource
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("Media Source Extensions")}}

Die **`MediaSource`**-Schnittstelle der {{domxref("Media Source Extensions API", "Media Source Extensions API", "", "nocode")}} stellt eine Quelle für Mediendaten für ein {{domxref("HTMLMediaElement")}}-Objekt dar. Ein `MediaSource`-Objekt kann an ein {{domxref("HTMLMediaElement")}} angehängt werden, um im Benutzeragenten abgespielt zu werden.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("MediaSource.MediaSource", "MediaSource()")}}
  - : Konstruiert und gibt ein neues `MediaSource`-Objekt ohne zugehörige Quellpuffer zurück.

## Instanz-Eigenschaften

- {{domxref("MediaSource.activeSourceBuffers")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("SourceBufferList")}}-Objekt zurück, das eine Teilmenge der {{domxref("SourceBuffer")}}-Objekte enthält, die innerhalb von {{domxref("MediaSource.sourceBuffers")}} enthalten sind — die Liste der Objekte, die die ausgewählte Videospur, aktivierte Audiotracks und angezeigte/versteckte Texttracks bereitstellen.
- {{domxref("MediaSource.duration")}}
  - : Ruft die Dauer der aktuell präsentierten Medien ab und legt sie fest.
- {{domxref("MediaSource.handle")}} {{ReadOnlyInline}}
  - : Innerhalb eines dedizierten Workers gibt ein {{domxref("MediaSourceHandle")}}-Objekt zurück, ein Proxy für die `MediaSource`, die vom Worker zurück in den Hauptthread übertragen und über die {{domxref("HTMLMediaElement.srcObject")}}-Eigenschaft an ein Medienelement angehängt werden kann.
- {{domxref("MediaSource.readyState")}} {{ReadOnlyInline}}
  - : Gibt einen Enum-Wert zurück, der den Zustand der aktuellen `MediaSource` repräsentiert, egal ob sie derzeit nicht an ein Medienelement angehängt ist (`closed`), angehängt und bereit, {{domxref("SourceBuffer")}}-Objekte zu empfangen (`open`), oder angehängt, aber der Stream wurde über {{domxref("MediaSource.endOfStream()")}} beendet (`ended`).
- {{domxref("MediaSource.sourceBuffers")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("SourceBufferList")}}-Objekt zurück, das die Liste der {{domxref("SourceBuffer")}}-Objekte enthält, die mit dieser `MediaSource` verknüpft sind.

## Statische Eigenschaften

- {{domxref("MediaSource.canConstructInDedicatedWorker_static", "MediaSource.canConstructInDedicatedWorker")}} {{ReadOnlyInline}}
  - : Ein Boolean-Wert; gibt `true` zurück, wenn `MediaSource`-Worker-Unterstützung implementiert ist, was einen Mechanismus zur Erkennung von Funktionen mit geringer Latenz bereitstellt.

## Instanz-Methoden

_Übernimmt Methoden von der übergeordneten Schnittstelle, {{domxref("EventTarget")}}._

- {{domxref("MediaSource.addSourceBuffer()")}}
  - : Erstellt einen neuen {{domxref("SourceBuffer")}} des angegebenen MIME-Typs und fügt ihn der Liste {{domxref("MediaSource.sourceBuffers")}} hinzu.
- {{domxref("MediaSource.clearLiveSeekableRange()")}}
  - : Löscht einen zuvor mit einem Aufruf von `setLiveSeekableRange()` festgelegten suchbaren Bereich.
- {{domxref("MediaSource.endOfStream()")}}
  - : Signalisiert das Ende des Streams.
- {{domxref("MediaSource.removeSourceBuffer()")}}
  - : Entfernt den angegebenen {{domxref("SourceBuffer")}} aus der Liste {{domxref("MediaSource.sourceBuffers")}}.
- {{domxref("MediaSource.setLiveSeekableRange()")}}
  - : Legt den Bereich fest, in dem der Benutzer im Medienelement suchen kann.

## Statische Methoden

- {{domxref("MediaSource.isTypeSupported_static", "MediaSource.isTypeSupported()")}}
  - : Gibt einen Boolean-Wert zurück, der angibt, ob der gegebene MIME-Typ vom aktuellen Benutzeragenten unterstützt wird — das heißt, ob er erfolgreich {{domxref("SourceBuffer")}}-Objekte für diesen MIME-Typ erstellen kann.

## Ereignisse

- {{domxref("MediaSource.sourceclose_event", "sourceclose")}}
  - : Wird ausgelöst, wenn die `MediaSource`-Instanz nicht mehr an ein Medienelement angehängt ist.
- {{domxref("MediaSource.sourceended_event", "sourceended")}}
  - : Wird ausgelöst, wenn die `MediaSource`-Instanz noch an ein Medienelement angehängt ist, aber {{domxref("MediaSource.endOfStream", "endOfStream()")}} aufgerufen wurde.
- {{domxref("MediaSource.sourceopen_event", "sourceopen")}}
  - : Wird ausgelöst, wenn die `MediaSource`-Instanz von einem Medienelement geöffnet wurde und bereit ist, dass Daten den {{domxref("SourceBuffer")}}-Objekten in {{domxref("MediaSource.sourceBuffers", "sourceBuffers")}} hinzugefügt werden.

## Beispiele

### Komplettes einfaches Beispiel

Das folgende einfache Beispiel lädt ein Video mit {{domxref("XMLHttpRequest")}} und spielt es ab, sobald es möglich ist. Dieses Beispiel wurde von Nick Desaulniers erstellt und kann [hier live angesehen werden](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) (Sie können auch den [Quellcode herunterladen](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für weitere Untersuchungen). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt eine `MediaSource` zurück.

```js
const video = document.querySelector("video");

const assetURL = "frag_bunny.mp4";
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
let mediaSource;

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  mediaSource = getMediaSource();
  console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error("Unsupported MIME type or codec: ", mimeCodec);
}

function sourceOpen() {
  console.log(this.readyState); // open
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, (buf) => {
    sourceBuffer.addEventListener("updateend", () => {
      mediaSource.endOfStream();
      video.play();
      console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}

function fetchAB(url, cb) {
  console.log(url);
  const xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.responseType = "arraybuffer";
  xhr.onload = () => {
    cb(xhr.response);
  };
  xhr.send();
}
```

### Erstellen einer `MediaSource` in einem dedizierten Worker und Übertragung an den Hauptthread

Die Eigenschaft {{domxref("MediaSource.handle", "handle")}} kann in einem dedizierten Worker aufgerufen werden, und das resultierende {{domxref("MediaSourceHandle")}}-Objekt wird dann über einen {{domxref("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}}-Aufruf an den Thread übertragen, der den Worker erstellt hat (in diesem Fall der Hauptthread):

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

Im Hauptthread erhalten wir den Handle über einen {{domxref("Worker.message_event", "message")}}-Ereignishandler, fügen ihn einem {{htmlelement("video")}} über seine {{domxref("HTMLMediaElement.srcObject")}}-Eigenschaft hinzu und {{domxref("HTMLMediaElement.play()", "spielen")}} das Video:

```js
worker.addEventListener("message", (msg) => {
  let mediaSourceHandle = msg.data.arg;
  video.srcObject = mediaSourceHandle;
  video.play();
});
```

> **Note:** {{domxref("MediaSourceHandle")}}s können nicht erfolgreich in oder über einen Shared Worker oder Service Worker übertragen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
