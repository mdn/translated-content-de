---
title: "MediaSource: Methode addSourceBuffer()"
short-title: addSourceBuffer()
slug: Web/API/MediaSource/addSourceBuffer
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("Media Source Extensions")}}

Die **`addSourceBuffer()`**-Methode des {{domxref("MediaSource")}}-Interfaces erstellt einen neuen {{domxref("SourceBuffer")}} des angegebenen {{Glossary("MIME-Typ")}} und fügt ihn der `MediaSource`-{{domxref("MediaSource.sourceBuffers", "sourceBuffers")}}-Liste hinzu. Der neue `SourceBuffer` wird ebenfalls zurückgegeben.

## Syntax

```js-nolint
addSourceBuffer(mimeType)
```

### Parameter

- `mimeType`
  - : Ein String, der den MIME-Typ des zu erstellenden und der {{domxref("MediaSource")}} hinzuzufügenden {{domxref("SourceBuffer")}} angibt.

### Rückgabewert

Ein {{domxref("SourceBuffer")}}-Objekt, das den neuen Quellpuffer repräsentiert, der erstellt und der Medienquelle hinzugefügt wurde.

### Ausnahmen

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der für `mimeType` angegebene Wert ein leerer String ist, anstatt ein gültiger MIME-Typ.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die {{domxref("MediaSource")}} nicht im `"open"` {{domxref("MediaSource.readyState", "readyState")}}-Zustand ist.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene `mimeType` vom {{Glossary("user agent")}} nicht unterstützt wird oder nicht mit den MIME-Typen anderer bereits in der `MediaSource` enthaltenen {{domxref("SourceBuffer")}}-Objekte kompatibel ist.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der User-Agent keine weiteren `SourceBuffer`-Objekte verarbeiten kann oder die Erstellung eines neuen `SourceBuffer` mit dem angegebenen `mimeType` zu einer [nicht unterstützten Konfiguration von `SourceBuffer`-Objekten](https://w3c.github.io/media-source/#sourcebuffer-configuration) führen würde.

## Beispiele

Der folgende Ausschnitt stammt aus einem einfachen Beispiel, das von Nick Desaulniers geschrieben wurde ([sehen Sie sich die vollständige Demo live an](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) oder [laden Sie den Quellcode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für weitere Untersuchungen). Die hier nicht definierte Funktion `getMediaSource()` gibt eine `MediaSource` zurück.

```js
const assetURL = "frag_bunny.mp4";
// Müssen speziell für Blink bezüglich Codecs sein
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
const mediaSource = getMediaSource();

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  console.log(mediaSource.readyState); // closed
  mediaSource.addEventListener("sourceopen", sourceOpen);
  video.src = URL.createObjectURL(mediaSource);
} else {
  console.error("Nicht unterstützter MIME-Typ oder Codec: ", mimeCodec);
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
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
