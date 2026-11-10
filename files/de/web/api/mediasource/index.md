---
title: MediaSource
slug: Web/API/MediaSource
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`MediaSource`**-Schnittstelle der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) stellt eine Quelle für Mediendaten für ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt dar. Ein `MediaSource`-Objekt kann mit einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) verbunden werden, damit der User Agent die Medien wiedergeben kann.

{{InheritanceDiagram}}

## Konstruktor

- [`MediaSource()`](/de/docs/Web/API/MediaSource/MediaSource)
  - : Erstellt ein neues `MediaSource`-Objekt ohne zugehörige SourceBuffer und gibt es zurück.

## Statische Eigenschaften

- [`MediaSource.canConstructInDedicatedWorker`](/de/docs/Web/API/MediaSource/canConstructInDedicatedWorker_static) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn die Unterstützung für `MediaSource` in Workern implementiert ist. Damit lässt sich diese Funktion mit geringer Latenz erkennen.

## Instanzeigenschaften

- [`MediaSource.activeSourceBuffers`](/de/docs/Web/API/MediaSource/activeSourceBuffers) {{ReadOnlyInline}}
  - : Gibt ein [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)-Objekt zurück, das eine Teilmenge der in [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) enthaltenen [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte umfasst: die Objekte für den ausgewählten Videotrack, die aktivierten Audiotracks und die angezeigten oder ausgeblendeten Texttracks.
- [`MediaSource.duration`](/de/docs/Web/API/MediaSource/duration)
  - : Liest und setzt die Dauer des aktuell wiedergegebenen Mediums.
- [`MediaSource.handle`](/de/docs/Web/API/MediaSource/handle) {{ReadOnlyInline}}
  - : Gibt innerhalb eines Dedicated Workers ein [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt zurück. Dieses dient als Proxy für die `MediaSource`, kann vom Worker zurück an den Hauptthread übertragen und dort über die Eigenschaft [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) mit einem Medienelement verbunden werden.
- [`MediaSource.readyState`](/de/docs/Web/API/MediaSource/readyState) {{ReadOnlyInline}}
  - : Gibt einen Enum-Wert zurück, der den Zustand der aktuellen `MediaSource` beschreibt: ob sie derzeit nicht mit einem Medienelement verbunden ist (`closed`), verbunden und bereit ist, [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte zu empfangen (`open`), oder verbunden ist, der Stream aber durch [`MediaSource.endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream) beendet wurde (`ended`).
- [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) {{ReadOnlyInline}}
  - : Gibt ein [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)-Objekt zurück, das die Liste der dieser `MediaSource` zugeordneten [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte enthält.

## Statische Methoden

- [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static)
  - : Gibt einen booleschen Wert zurück, der angibt, ob der aktuelle User Agent den angegebenen MIME-Typ unterstützt, also ob er für diesen MIME-Typ erfolgreich [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte erstellen kann.

## Instanzmethoden

_Erbt Methoden von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`MediaSource.addSourceBuffer()`](/de/docs/Web/API/MediaSource/addSourceBuffer)
  - : Erstellt einen neuen [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) für den angegebenen MIME-Typ und fügt ihn der Liste [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) hinzu.
- [`MediaSource.clearLiveSeekableRange()`](/de/docs/Web/API/MediaSource/clearLiveSeekableRange)
  - : Löscht einen Suchbereich, der zuvor durch einen Aufruf von `setLiveSeekableRange()` festgelegt wurde.
- [`MediaSource.endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream)
  - : Signalisiert das Ende des Streams.
- [`MediaSource.removeSourceBuffer()`](/de/docs/Web/API/MediaSource/removeSourceBuffer)
  - : Entfernt den angegebenen [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus der Liste [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers).
- [`MediaSource.setLiveSeekableRange()`](/de/docs/Web/API/MediaSource/setLiveSeekableRange)
  - : Legt den Bereich fest, zu dem Benutzer im Medienelement springen können.

## Ereignisse

- [`sourceclose`](/de/docs/Web/API/MediaSource/sourceclose_event)
  - : Wird ausgelöst, wenn die `MediaSource`-Instanz nicht mehr mit einem Medienelement verbunden ist.
- [`sourceended`](/de/docs/Web/API/MediaSource/sourceended_event)
  - : Wird ausgelöst, wenn die `MediaSource`-Instanz noch mit einem Medienelement verbunden ist, aber [`endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream) aufgerufen wurde.
- [`sourceopen`](/de/docs/Web/API/MediaSource/sourceopen_event)
  - : Wird ausgelöst, wenn ein Medienelement die `MediaSource`-Instanz geöffnet hat und Daten an die [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte in [`sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) angehängt werden können.

## Beispiele

### Vollständiges einfaches Beispiel

Das folgende einfache Beispiel lädt ein Video mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und spielt es ab, sobald dies möglich ist. Sie können das Beispiel [hier live ansehen](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) und für eine genauere Untersuchung auch [den Quellcode herunterladen](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html).

```js
const video = document.querySelector("video");

const assetURL = "frag_bunny.mp4";
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
let mediaSource;

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  mediaSource = new MediaSource();
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

### Eine `MediaSource` in einem Dedicated Worker erstellen und an den Hauptthread übergeben

Auf die Eigenschaft [`handle`](/de/docs/Web/API/MediaSource/handle) kann innerhalb eines Dedicated Workers zugegriffen werden. Das zurückgegebene [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekt wird dann über einen Aufruf von [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) an den Thread übertragen, der den Worker erstellt hat (in diesem Fall den Hauptthread):

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

Im Hauptthread empfangen wir das Handle über einen Handler für das Ereignis [`message`](/de/docs/Web/API/Worker/message_event), verbinden es über die Eigenschaft [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) mit einem {{htmlelement("video")}}-Element und geben das Video mit [`play`](/de/docs/Web/API/HTMLMediaElement/play) wieder:

```js
worker.addEventListener("message", (msg) => {
  let mediaSourceHandle = msg.data.arg;
  video.srcObject = mediaSourceHandle;
  video.play();
});
```

> [!NOTE]
> [`MediaSourceHandle`](/de/docs/Web/API/MediaSourceHandle)-Objekte können nicht erfolgreich in einen oder über einen Shared Worker oder Service Worker übertragen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
