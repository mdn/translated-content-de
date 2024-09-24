---
title: "MediaSource: isTypeSupported() statische Methode"
short-title: isTypeSupported()
slug: Web/API/MediaSource/isTypeSupported_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("Media Source Extensions")}}

Die **statische Methode `MediaSource.isTypeSupported()`** gibt einen booleschen Wert zurück, der `true` ist, wenn der angegebene MIME-Typ und (optional) der Codec _wahrscheinlich_ vom aktuellen {{Glossary("user agent")}} unterstützt werden.

Das bedeutet, dass damit erfolgreich {{domxref("SourceBuffer")}}-Objekte für diesen Medientyp erstellt werden können. Wenn der zurückgegebene Wert `false` ist, dann ist der Benutzeragent sicher, dass er auf Medien des angegebenen Formats _nicht_ zugreifen kann.

## Syntax

```js-nolint
MediaSource.isTypeSupported(type)
```

### Parameter

- `type`
  - : Ein String, der den MIME-Typ der Medien angibt und (optional) ein [`codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) enthält, der eine durch Komma getrennte Liste der unterstützten Codecs enthält.

### Rückgabewert

Ein Wert von `false`, wenn die Medien des angegebenen Typs _nicht_ abgespielt werden.

Ein Wert von `true` wird zurückgegeben, wenn der Browser Medien des angegebenen Typs _wahrscheinlich_ abspielen kann. Dies ist _keine_ Garantie, und Ihr Code muss auf die Möglichkeit vorbereitet sein, dass die Medien möglicherweise nicht korrekt abgespielt werden können, wenn überhaupt.

Alle Web-APIs, die mit Mediendateien arbeiten, verwenden einen "nein/vielleicht/wahrscheinlich" Ansatz (oder, in diesem Fall, "nein oder wahrscheinlich"), um festzustellen, ob ein Medientyp verwendet werden kann. Dies liegt daran, dass Mediendateien komplexe, verzwickte Konstrukte mit viel zu vielen subtilen Variationen sind, um vorab etwas mit Sicherheit sagen zu können, bis Sie tatsächlich den Inhalt der Medien verwenden.

## Beispiele

Der folgende Ausschnitt stammt aus einem Beispiel von Nick Desaulniers ([sehen Sie sich die vollständige Demo live an](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html), oder [laden Sie den Quellcode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für eine weitere Untersuchung). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt eine `MediaSource` zurück.

```js
const assetURL = "frag_bunny.mp4";
// Müssen spezifisch für Blink bezüglich Codecs sein
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
let mediaSource;

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  mediaSource = getMediaSource();
  console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
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

- [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
- [Codecs in gängigen Medientypen](/de/docs/Web/Media/Formats/codecs_parameter)
- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
