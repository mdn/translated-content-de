---
title: MediaSource
slug: Web/API/MediaSource
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`MediaSource`**-Interface der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) stellt eine Quelle für Mediendaten für ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt dar. Ein `MediaSource`-Objekt kann an ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) angehängt werden, um im User-Agent abgespielt zu werden.

{{InheritanceDiagram}}

## Konstruktor

- [`MediaSource()`](/de/docs/Web/API/MediaSource/MediaSource)
  - : Konstruiert und gibt ein neues `MediaSource`-Objekt ohne zugehörige Quellpuffer zurück.

## Instanz-Eigenschaften

- [`MediaSource.activeSourceBuffers`](/de/docs/Web/API/MediaSource/activeSourceBuffers) {{ReadOnlyInline}}
  - : Gibt ein [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)-Objekt zurück, das eine Teilmenge der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte enthält, die innerhalb von [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) enthalten sind — die Liste von Objekten, die die ausgewählte Videospur, aktivierte Audiospuren und angezeigte/verdeckte Textspuren bereitstellen.
- [`MediaSource.duration`](/de/docs/Web/API/MediaSource/duration)
  - : Ruft die Dauer des aktuellen Mediainhalts ab oder setzt sie, der präsentiert wird.
- [`MediaSource.handle`](/de/docs/Web/API/MediaSource/handle) {{ReadOnlyInline}}
  - : Innerhalb eines dedizierten Workers gibt es ein [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt zurück, einen Proxy für das `MediaSource`, das aus dem Worker zurück in den Hauptthread übertragen und über seine [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft an ein Medienelement angehängt werden kann.
- [`MediaSource.readyState`](/de/docs/Web/API/MediaSource/readyState) {{ReadOnlyInline}}
  - : Gibt ein Enum zurück, das den Zustand des aktuellen `MediaSource` angibt, ob es nicht derzeit an ein Medienelement angehängt ist (`closed`), angehängt und bereit ist, [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte zu empfangen (`open`), oder angehängt, aber der Stream über [`MediaSource.endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream) beendet wurde (`ended`.
- [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) {{ReadOnlyInline}}
  - : Gibt ein [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)-Objekt zurück, das die Liste von [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekten enthält, die mit dieser `MediaSource` verbunden sind.

## Statische Eigenschaften

- [`MediaSource.canConstructInDedicatedWorker`](/de/docs/Web/API/MediaSource/canConstructInDedicatedWorker_static) {{ReadOnlyInline}}
  - : Ein boolescher Wert; gibt `true` zurück, wenn die `MediaSource`-Worker-Unterstützung implementiert ist, was einen Mechanismus zur Erkennung von Funktionen mit niedriger Latenz bietet.

## Instanz-Methoden

_Erbt Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`MediaSource.addSourceBuffer()`](/de/docs/Web/API/MediaSource/addSourceBuffer)
  - : Erzeugt einen neuen [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) des angegebenen MIME-Typs und fügt ihn der [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers)-Liste hinzu.
- [`MediaSource.clearLiveSeekableRange()`](/de/docs/Web/API/MediaSource/clearLiveSeekableRange)
  - : Löscht einen zuvor mit einem Aufruf an `setLiveSeekableRange()` gesetzten suchbaren Bereich.
- [`MediaSource.endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream)
  - : Signalisiert das Ende des Streams.
- [`MediaSource.removeSourceBuffer()`](/de/docs/Web/API/MediaSource/removeSourceBuffer)
  - : Entfernt den angegebenen [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus der [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers)-Liste.
- [`MediaSource.setLiveSeekableRange()`](/de/docs/Web/API/MediaSource/setLiveSeekableRange)
  - : Legt den Bereich fest, in dem der Benutzer im Medienelement suchen kann.

## Statische Methoden

- [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static)
  - : Gibt einen booleschen Wert zurück, der angibt, ob der gegebene MIME-Typ vom aktuellen User-Agent unterstützt wird — das heißt, ob es möglich ist, erfolgreich [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte für diesen MIME-Typ zu erstellen.

## Ereignisse

- [`sourceclose`](/de/docs/Web/API/MediaSource/sourceclose_event)
  - : Wird ausgelöst, wenn die `MediaSource`-Instanz nicht mehr an ein Medienelement angehängt ist.
- [`sourceended`](/de/docs/Web/API/MediaSource/sourceended_event)
  - : Wird ausgelöst, wenn die `MediaSource`-Instanz noch an ein Medienelement angehängt ist, aber [`endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream) aufgerufen wurde.
- [`sourceopen`](/de/docs/Web/API/MediaSource/sourceopen_event)
  - : Wird ausgelöst, wenn die `MediaSource`-Instanz von einem Medienelement geöffnet wurde und bereit ist, Daten zu den [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekten in [`sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) hinzugefügt zu bekommen.

## Beispiele

### Vollständiges einfaches Beispiel

Das folgende einfache Beispiel lädt ein Video mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und spielt es ab, sobald es kann. Dieses Beispiel wurde von Nick Desaulniers geschrieben und kann [hier live angesehen werden](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) (Sie können auch [den Quellcode herunterladen](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) zur weiteren Untersuchung). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt ein `MediaSource` zurück.

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

Die [`handle`](/de/docs/Web/API/MediaSource/handle)-Eigenschaft kann innerhalb eines dedizierten Workers aufgerufen werden und das resultierende [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt wird dann über einen [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)-Aufruf an den Thread übertragen, der den Worker erstellt hat (in diesem Fall der Hauptthread):

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

Im Hauptthread empfangen wir das Handle über einen [`message`](/de/docs/Web/API/Worker/message_event)-Event-Handler, hängen es an ein {{htmlelement("video")}} via seiner [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft und [`play`](/de/docs/Web/API/HTMLMediaElement/play) das Video:

```js
worker.addEventListener("message", (msg) => {
  let mediaSourceHandle = msg.data.arg;
  video.srcObject = mediaSourceHandle;
  video.play();
});
```

> **Note:** [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)s können nicht erfolgreich in einen gemeinsamen Worker oder einen Service Worker übertragen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
