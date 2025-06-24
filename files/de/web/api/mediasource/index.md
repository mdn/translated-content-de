---
title: MediaSource
slug: Web/API/MediaSource
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`MediaSource`**-Interface der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) repräsentiert eine Quelle von Mediendaten für ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt. Ein `MediaSource`-Objekt kann an ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) angehängt werden, um im Benutzeragenten abgespielt zu werden.

{{InheritanceDiagram}}

## Konstruktor

- [`MediaSource()`](/de/docs/Web/API/MediaSource/MediaSource)
  - : Erstellt und gibt ein neues `MediaSource`-Objekt zurück, das keine zugeordneten Quellpuffer hat.

## Instanzeigenschaften

- [`MediaSource.activeSourceBuffers`](/de/docs/Web/API/MediaSource/activeSourceBuffers) {{ReadOnlyInline}}
  - : Gibt ein [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)-Objekt zurück, das eine Teilmenge der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte enthält, die innerhalb von [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) enthalten sind – die Liste der Objekte, die den ausgewählten Videotrack, aktivierten Audiotracks und angezeigten/versteckten Texttracks bereitstellen.
- [`MediaSource.duration`](/de/docs/Web/API/MediaSource/duration)
  - : Ruft die Dauer des aktuell präsentierten Mediens ab und setzt sie.
- [`MediaSource.handle`](/de/docs/Web/API/MediaSource/handle) {{ReadOnlyInline}}
  - : Gibt innerhalb eines dedizierten Workers ein [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt zurück, einen Proxy für die `MediaSource`, der vom Worker zurück in den Hauptthread übertragen und über die [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft an ein Media-Element angefügt werden kann.
- [`MediaSource.readyState`](/de/docs/Web/API/MediaSource/readyState) {{ReadOnlyInline}}
  - : Gibt ein Enum zurück, das den Zustand der aktuellen `MediaSource` darstellt, ob sie derzeit nicht an ein Media-Element angeschlossen ist (`closed`), angeschlossen und bereit ist, [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte zu empfangen (`open`), oder angeschlossen, aber der Stream wurde über [`MediaSource.endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream) beendet (`ended`).
- [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) {{ReadOnlyInline}}
  - : Gibt ein [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)-Objekt zurück, das die Liste der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte enthält, die mit dieser `MediaSource` verknüpft sind.

## Statische Eigenschaften

- [`MediaSource.canConstructInDedicatedWorker`](/de/docs/Web/API/MediaSource/canConstructInDedicatedWorker_static) {{ReadOnlyInline}}
  - : Ein Boolean; gibt `true` zurück, wenn `MediaSource`-Worker-Unterstützung implementiert ist, was einen Mechanismus zur Erkennung von Features mit niedriger Latenz bietet.

## Instanzmethoden

_Erbt Methoden von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`MediaSource.addSourceBuffer()`](/de/docs/Web/API/MediaSource/addSourceBuffer)
  - : Erstellt einen neuen [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) des angegebenen MIME-Typs und fügt ihn der Liste [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) hinzu.
- [`MediaSource.clearLiveSeekableRange()`](/de/docs/Web/API/MediaSource/clearLiveSeekableRange)
  - : Löscht einen vorher mit einem Aufruf von `setLiveSeekableRange()` festgelegten suchbaren Bereich.
- [`MediaSource.endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream)
  - : Signalisiert das Ende des Streams.
- [`MediaSource.removeSourceBuffer()`](/de/docs/Web/API/MediaSource/removeSourceBuffer)
  - : Entfernt den angegebenen [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus der Liste [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers).
- [`MediaSource.setLiveSeekableRange()`](/de/docs/Web/API/MediaSource/setLiveSeekableRange)
  - : Legt den Bereich fest, zu dem der Benutzer im Media-Element springen kann.

## Statische Methoden

- [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob der angegebene MIME-Typ vom aktuellen Benutzeragenten unterstützt wird – ob es also mögliche ist, [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte für diesen MIME-Typ erfolgreich zu erstellen.

## Ereignisse

- [`sourceclose`](/de/docs/Web/API/MediaSource/sourceclose_event)
  - : Wird ausgelöst, wenn die `MediaSource`-Instanz nicht mehr an ein Media-Element angeschlossen ist.
- [`sourceended`](/de/docs/Web/API/MediaSource/sourceended_event)
  - : Wird ausgelöst, wenn die `MediaSource`-Instanz immer noch an ein Media-Element angeschlossen ist, aber [`endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream) aufgerufen wurde.
- [`sourceopen`](/de/docs/Web/API/MediaSource/sourceopen_event)
  - : Wird ausgelöst, wenn die `MediaSource`-Instanz von einem Media-Element geöffnet wurde und bereit ist, Daten zu den [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekten in [`sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) hinzuzufügen.

## Beispiele

### Einfaches vollständiges Beispiel

Das folgende einfache Beispiel lädt ein Video mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und spielt es so schnell wie möglich ab. Dieses Beispiel wurde von Nick Desaulniers geschrieben und kann [hier live angesehen werden](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) (Sie können den [Quellcode herunterladen](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html), um ihn weiter zu untersuchen). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt eine `MediaSource` zurück.

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

### Eine `MediaSource` in einem dedizierten Worker erstellen und an den Hauptthread übergeben

Die [`handle`](/de/docs/Web/API/MediaSource/handle)-Eigenschaft kann innerhalb eines dedizierten Workers aufgerufen werden, und das resultierende [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt wird dann über einen [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)-Aufruf an den Thread, der den Worker erstellt hat (in diesem Fall der Hauptthread), übertragen:

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

Im Hauptthread empfangen wir das Handle über einen [`message`](/de/docs/Web/API/Worker/message_event)-Ereignishandler, fügen es einer {{htmlelement("video")}} über seine [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft hinzu und [`play`](/de/docs/Web/API/HTMLMediaElement/play) das Video:

```js
worker.addEventListener("message", (msg) => {
  let mediaSourceHandle = msg.data.arg;
  video.srcObject = mediaSourceHandle;
  video.play();
});
```

> [!NOTE] > [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)s können nicht erfolgreich in einen Shared Worker oder Service Worker übertragen werden oder durch einen solchen hindurch.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
