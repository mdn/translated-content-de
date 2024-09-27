---
title: MediaSource
slug: Web/API/MediaSource
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`MediaSource`**-Interface der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) repräsentiert eine Quelle von Mediendaten für ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt. Ein `MediaSource`-Objekt kann an ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) angehängt werden, um im Benutzeragenten abgespielt zu werden.

{{InheritanceDiagram}}

## Konstruktor

- [`MediaSource()`](/de/docs/Web/API/MediaSource/MediaSource)
  - : Konstruiert und gibt ein neues `MediaSource`-Objekt ohne zugeordnete Quellpuffer zurück.

## Instanz-Eigenschaften

- [`MediaSource.activeSourceBuffers`](/de/docs/Web/API/MediaSource/activeSourceBuffers) {{ReadOnlyInline}}
  - : Gibt ein [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)-Objekt zurück, das eine Untermenge der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte enthält, die innerhalb von [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) enthalten sind — die Liste der Objekte, die die ausgewählte Videospur, aktivierten Audiospuren und angezeigten/ausgeblendeten Textspuren bereitstellen.
- [`MediaSource.duration`](/de/docs/Web/API/MediaSource/duration)
  - : Ruft die Dauer des aktuellen Mediums ab und legt sie fest.
- [`MediaSource.handle`](/de/docs/Web/API/MediaSource/handle) {{ReadOnlyInline}}
  - : Innerhalb eines dedizierten Workers gibt ein [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt zurück, einen Proxy für die `MediaSource`, der vom Worker zurück an den Hauptthread übertragen und über die [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft an ein Medien-Element angehängt werden kann.
- [`MediaSource.readyState`](/de/docs/Web/API/MediaSource/readyState) {{ReadOnlyInline}}
  - : Gibt ein Enum zurück, das den Zustand der aktuellen `MediaSource` darstellt, ob sie nicht aktuell an ein Medien-Element angehängt ist (`closed`), angehängt und bereit ist, [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte zu empfangen (`open`), oder angehängt, aber der Stream wurde über [`MediaSource.endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream) beendet (`ended`).
- [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) {{ReadOnlyInline}}
  - : Gibt ein [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)-Objekt zurück, das die Liste der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte enthält, die mit dieser `MediaSource` verknüpft sind.

## Statische Eigenschaften

- [`MediaSource.canConstructInDedicatedWorker`](/de/docs/Web/API/MediaSource/canConstructInDedicatedWorker_static) {{ReadOnlyInline}}
  - : Ein Boolean; gibt `true` zurück, wenn `MediaSource`-Worker-Unterstützung implementiert ist und so ein Mechanismus zur Erkennung von Funktionen mit geringer Latenz bereitstellt.

## Instanz-Methoden

_Erbt Methoden von seinem Elterninterface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`MediaSource.addSourceBuffer()`](/de/docs/Web/API/MediaSource/addSourceBuffer)
  - : Erstellt einen neuen [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) des angegebenen MIME-Typs und fügt ihn der Liste [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) hinzu.
- [`MediaSource.clearLiveSeekableRange()`](/de/docs/Web/API/MediaSource/clearLiveSeekableRange)
  - : Löscht einen mit einem Aufruf von `setLiveSeekableRange()` zuvor festgelegten Bereich, der suchbar ist.
- [`MediaSource.endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream)
  - : Signalisiert das Ende des Streams.
- [`MediaSource.removeSourceBuffer()`](/de/docs/Web/API/MediaSource/removeSourceBuffer)
  - : Entfernt den angegebenen [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus der Liste [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers).
- [`MediaSource.setLiveSeekableRange()`](/de/docs/Web/API/MediaSource/setLiveSeekableRange)
  - : Legt den Bereich fest, in dem der Benutzer im Medien-Element suchen kann.

## Statische Methoden

- [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static)
  - : Gibt einen booleschen Wert zurück, der angibt, ob der angegebene MIME-Typ vom aktuellen Benutzeragenten unterstützt wird — das heißt, ob erfolgreich [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte für diesen MIME-Typ erstellt werden können.

## Ereignisse

- [`sourceclose`](/de/docs/Web/API/MediaSource/sourceclose_event)
  - : Wird ausgelöst, wenn die `MediaSource`-Instanz nicht mehr an ein Medien-Element angehängt ist.
- [`sourceended`](/de/docs/Web/API/MediaSource/sourceended_event)
  - : Wird ausgelöst, wenn die `MediaSource`-Instanz immer noch an ein Medien-Element angehängt ist, aber [`endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream) aufgerufen wurde.
- [`sourceopen`](/de/docs/Web/API/MediaSource/sourceopen_event)
  - : Wird ausgelöst, wenn die `MediaSource`-Instanz von einem Medien-Element geöffnet wurde und bereit ist, Daten an die [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte in [`sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) anzuhängen.

## Beispiele

### Einfaches vollständiges Beispiel

Im folgenden einfachen Beispiel wird ein Video mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) geladen und so schnell wie möglich abgespielt. Dieses Beispiel wurde von Nick Desaulniers geschrieben und kann [hier live angesehen werden](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) (Sie können auch den [Quellcode herunterladen](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für weitere Untersuchungen). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt eine `MediaSource` zurück.

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

### Konstruktion einer `MediaSource` in einem dedizierten Worker und Übergabe an den Hauptthread

Die [`handle`](/de/docs/Web/API/MediaSource/handle)-Eigenschaft kann innerhalb eines dedizierten Workers aufgerufen werden und das resultierende [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt wird dann über einen [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)-Aufruf an den Thread, der den Worker erstellt hat (in diesem Fall der Hauptthread), übertragen:

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

Im Hauptthread empfangen wir den Handle über einen [`message`](/de/docs/Web/API/Worker/message_event)-Ereignishandler, hängen ihn an ein {{htmlelement("video")}} über seine [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft an und spielen das Video mit [`play`](/de/docs/Web/API/HTMLMediaElement/play) ab:

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

- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
