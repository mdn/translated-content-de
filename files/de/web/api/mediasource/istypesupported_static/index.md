---
title: "MediaSource: isTypeSupported() statische Methode"
short-title: isTypeSupported()
slug: Web/API/MediaSource/isTypeSupported_static
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **statische Methode `MediaSource.isTypeSupported()`** gibt einen booleschen Wert zurück, der `true` ist, wenn der gegebene MIME-Typ und (optional) der Codec _wahrscheinlich_ vom aktuellen {{Glossary("user_agent", "User-Agent")}} unterstützt werden.

Das bedeutet, dass erfolgreich [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte für diesen Medientyp erstellt werden können.
Wenn der zurückgegebene Wert `false` ist, dann ist der User-Agent sicher, dass er nicht auf Medien des angegebenen Formats zugreifen kann.

## Syntax

```js-nolint
MediaSource.isTypeSupported(type)
```

### Parameter

- `type`
  - : Ein String, der den MIME-Typ der Medien angibt und (optional) einen [`codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) enthält, der eine durch Kommas getrennte Liste der unterstützten Codecs enthält.

### Rückgabewert

Ein Wert von `false`, wenn Medien des angegebenen Typs _nicht_ abgespielt werden.

Ein Wert von `true` wird zurückgegeben, wenn der Browser Medien des angegebenen Typs _wahrscheinlich_ abspielen kann.
Dies ist _keine_ Garantie, und Ihr Code muss darauf vorbereitet sein, dass die Medien möglicherweise nicht korrekt oder überhaupt nicht abgespielt werden.

Alle Web-APIs, die mit Mediendateien arbeiten, verwenden einen "nein/vielleicht/wahrscheinlich"-Ansatz (oder in diesem Fall "nein oder wahrscheinlich"), wenn sie bestimmen, ob ein Medientyp verwendet werden kann.
Dies liegt daran, dass Mediendateien komplexe, komplizierte Konstrukte mit viel zu vielen subtilen Variationen sind, um mit Sicherheit etwas zu sagen, bis Sie tatsächlich die Inhalte der Medien verwenden.

## Beispiele

Der folgende Ausschnitt stammt aus einem Beispiel, das von Nick Desaulniers geschrieben wurde ([sehen Sie sich die vollständige Demo live an](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) oder [laden Sie den Quellcode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) zur weiteren Untersuchung). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt eine `MediaSource` zurück.

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
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
- [Codecs in gängigen Medientypen](/de/docs/Web/Media/Formats/codecs_parameter)
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
