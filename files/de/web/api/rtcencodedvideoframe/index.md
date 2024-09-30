---
title: RTCEncodedVideoFrame
slug: Web/API/RTCEncodedVideoFrame
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`RTCEncodedVideoFrame`** der [WebRTC API](/de/docs/Web/API/WebRTC_API) repräsentiert einen kodierten Videorahmen in der WebRTC-Empfangs- oder Sendepipeline, die mit einem [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) modifiziert werden kann.

> [!NOTE]
> Diese Funktion ist in [_dedizierten_ Web-Workern](/de/docs/Web/API/Web_Workers_API#worker_types) verfügbar.

## Instanz-Eigenschaften

- [`RTCEncodedVideoFrame.type`](/de/docs/Web/API/RTCEncodedVideoFrame/type) {{ReadOnlyInline}}
  - : Gibt zurück, ob der aktuelle Rahmen ein Schlüsselrahmen, ein Delta-Rahmen oder ein leerer Rahmen ist.
- [`RTCEncodedVideoFrame.timestamp`](/de/docs/Web/API/RTCEncodedVideoFrame/timestamp) {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt den Zeitstempel zurück, zu dem die Abtastung des Rahmens gestartet wurde.
- [`RTCEncodedVideoFrame.data`](/de/docs/Web/API/RTCEncodedVideoFrame/data)
  - : Gibt einen Puffer zurück, der die kodierten Rahmendaten enthält.

## Instanz-Methoden

- [`RTCEncodedVideoFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata)
  - : Gibt die mit dem Rahmen assoziierten Metadaten zurück.

## Beschreibung

Rohvideodaten werden als Sequenz von Rahmen generiert, wobei jeder Rahmen ein zweidimensionales Array von Pixelwerten ist.
Videokodierer transformieren diesen Rohinput in eine komprimierte Darstellung des Originals zur Übertragung und Speicherung.
Ein übliches Vorgehen ist es, "Schlüsselrahmen" zu senden, die genügend Informationen enthalten, um ein vollständiges Bild in relativ niedrigem Tempo wiederzugeben, und zwischen Schlüsselrahmen viele kleinere "Delta-Rahmen" zu senden, die nur die Änderungen seit dem vorherigen Rahmen kodieren.

Es gibt viele verschiedene Codecs, wie H.264, VP8 und VP9, die unterschiedliche Kodierungsprozesse und Konfigurationen haben und unterschiedliche Kompromisse zwischen Kompressionseffizienz und Videoqualität bieten.

Der **`RTCEncodedVideoFrame`** stellt einen einzelnen Rahmen dar, der mit einem bestimmten Videokodierer kodiert wurde.
Die [`type`](/de/docs/Web/API/RTCEncodedVideoFrame/type)-Eigenschaft gibt an, ob der Rahmen ein "Schlüssel"- oder "Delta"-Rahmen ist, und Sie können die [`getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata)-Methode verwenden, um weitere Details über die Kodierungsmethode zu erhalten.
Die [`data`](/de/docs/Web/API/RTCEncodedVideoFrame/data)-Eigenschaft gewährt Zugang zu den kodierten Bilddaten des Rahmens, die dann ("transformiert") werden können, wenn Rahmen gesendet oder empfangen werden.

## Beispiele

Dieses Codebeispiel zeigt einen Handler für das `rtctransform`-Ereignis in einem [`Worker`](/de/docs/Web/API/Worker), der einen [`TransformStream`](/de/docs/Web/API/TransformStream) implementiert und kodierte Rahmen von `event.transformer.readable` zu `event.transformer.writable` leitet (`event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Pendant auf der Worker-Seite zu [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)).

Wenn der Transformer in einen Videostream eingefügt wird, wird die `transform()`-Methode mit einem `RTCEncodedVideoFrame` aufgerufen, wann immer ein neuer Rahmen in `event.transformer.readable` eingereiht wird.
Die `transform()`-Methode zeigt, wie dies gelesen, durch Invertierung der Bits modifiziert und dann im Controller eingereiht werden könnte (was es letztendlich durch `event.transformer.writable` leitet und dann zurück in die WebRTC-Pipeline).

```js
addEventListener("rtctransform", (event) => {
  const async transform = new TransformStream({
    async transform(encodedFrame, controller) {
      // Reconstruct the original frame.
      const view = new DataView(encodedFrame.data);

      // Construct a new buffer
      const newData = new ArrayBuffer(encodedFrame.data.byteLength);
      const newView = new DataView(newData);

      // Negate all bits in the incoming frame
      for (let i = 0; i < encodedFrame.data.byteLength; ++i) {
        newView.setInt8(i, ~view.getInt8(i));
      }

      encodedFrame.data = newData;
      controller.enqueue(encodedFrame);
    },
  });
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Beachten Sie, dass vollständigere Beispiele in [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
- [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)
