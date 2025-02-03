---
title: "MediaSource: isTypeSupported() statische Methode"
short-title: isTypeSupported()
slug: Web/API/MediaSource/isTypeSupported_static
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die statische Methode **`MediaSource.isTypeSupported()`** gibt einen booleschen Wert zurück, der `true` ist, wenn der angegebene MIME-Typ und (optional) der Codec _wahrscheinlich_ vom aktuellen {{Glossary("user_agent", "Benutzeragent")}} unterstützt werden.

Das bedeutet, dass erfolgreich [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte für diesen Medientyp erstellt werden können. Wenn der zurückgegebene Wert `false` ist, ist der Benutzeragent sicher, dass Medien im angegebenen Format nicht zugänglich sind.

## Syntax

```js-nolint
MediaSource.isTypeSupported(type)
```

### Parameter

- `type`
  - : Ein String, der den MIME-Typ der Medien angibt und (optional) einen [`codecs` Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) enthält, der eine durch Kommas getrennte Liste der unterstützten Codecs enthält.

### Rückgabewert

Ein Wert von `false`, wenn Medien des angegebenen Typs _nicht_ abgespielt werden.

Ein Wert von `true` wird zurückgegeben, wenn der Browser Medien des angegebenen Typs _wahrscheinlich_ abspielen kann.
Dies ist _keine_ Garantie, und Ihr Code muss auf die Möglichkeit vorbereitet sein, dass die Medien möglicherweise nicht korrekt oder überhaupt nicht abgespielt werden.

Alle Web-APIs, die mit Mediendateien arbeiten, verwenden bei der Bestimmung, ob ein Medientyp verwendet werden kann, einen "Nein/Vielleicht/Wahrscheinlich"-Ansatz (oder, in diesem Fall, "Nein oder Wahrscheinlich").
Dies liegt daran, dass Mediendateien komplexe, komplizierte Konstrukte mit zu vielen subtilen Variationen sind, um absolut sicher zu sein, bevor Sie tatsächlich den Inhalt der Medien verwenden.

## Beispiele

Der folgende Ausschnitt stammt aus einem Beispiel von Nick Desaulniers ([das vollständige Demo live ansehen](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) oder [den Quellcode herunterladen](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für weitere Untersuchungen). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt ein `MediaSource` zurück.

```js
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
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [Codecs in gängigen Medientypen](/de/docs/Web/Media/Guides/Formats/codecs_parameter)
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
