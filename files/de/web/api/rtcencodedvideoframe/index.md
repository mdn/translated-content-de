---
title: RTCEncodedVideoFrame
slug: Web/API/RTCEncodedVideoFrame
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`RTCEncodedVideoFrame`** der [WebRTC API](/de/docs/Web/API/WebRTC_API) repräsentiert einen kodierten Video-Frame in der WebRTC-Empfänger- oder Sender-Pipeline, der mithilfe eines [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) modifiziert werden kann.

> [!NOTE]
> Diese Funktion ist in [_Dedicated_ Web Workers](/de/docs/Web/API/Web_Workers_API#worker_types) verfügbar.

## Instanzeigenschaften

- [`RTCEncodedVideoFrame.type`](/de/docs/Web/API/RTCEncodedVideoFrame/type) {{ReadOnlyInline}}
  - : Gibt zurück, ob der aktuelle Frame ein Schlüsselbild, Delta-Frame oder leerer Frame ist.
- [`RTCEncodedVideoFrame.timestamp`](/de/docs/Web/API/RTCEncodedVideoFrame/timestamp) {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt den Zeitstempel zurück, zu dem die Abtastung des Frames begann.
- [`RTCEncodedVideoFrame.data`](/de/docs/Web/API/RTCEncodedVideoFrame/data)
  - : Gibt einen Puffer zurück, der die kodierten Frame-Daten enthält.

## Instanzmethoden

- [`RTCEncodedVideoFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata)
  - : Gibt die Metadaten zurück, die mit dem Frame verbunden sind.

## Beschreibung

Rohvideodaten werden als Sequenz von Frames erzeugt, wobei jeder Frame ein zweidimensionales Array von Pixelwerten ist.
Video-Encoder wandeln diesen Rohinput in eine komprimierte Darstellung des Originals für die Übertragung und Speicherung um.
Ein gängiger Ansatz besteht darin, "Schlüsselbilder" zu senden, die genügend Informationen enthalten, um ein ganzes Bild mit relativ niedriger Rate wiederzugeben, und zwischen den Schlüsselbildern viele viel kleinere "Delta-Frames" zu senden, die nur die Änderungen seit dem vorherigen Frame kodieren.

Es gibt viele verschiedene Codecs, wie H.264, VP8 und VP9, die unterschiedliche Kodierungsprozesse und Konfigurationen haben und verschiedene Kompromisse zwischen Komprimierungseffizienz und Videobildqualität bieten.

Der **`RTCEncodedVideoFrame`** repräsentiert einen einzelnen Frame, der mit einem bestimmten Video-Encoder kodiert wurde.
Die [`type`](/de/docs/Web/API/RTCEncodedVideoFrame/type)-Eigenschaft zeigt an, ob der Frame ein "Schlüsselbild" oder "Delta-Frame" ist, und Sie können die Methode [`getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata) verwenden, um weitere Details zur Kodierungsmethode zu erhalten.
Die [`data`](/de/docs/Web/API/RTCEncodedVideoFrame/data)-Eigenschaft bietet Zugriff auf die kodierten Bilddaten für den Frame, die dann modifiziert ("transformiert") werden können, wenn Frames gesendet oder empfangen werden.

## Beispiele

Dieses Codebeispiel zeigt einen Handler für das `rtctransform`-Ereignis in einem [`Worker`](/de/docs/Web/API/Worker), das einen [`TransformStream`](/de/docs/Web/API/TransformStream) implementiert und kodierte Frames durch diesen vom `event.transformer.readable` zu `event.transformer.writable` leitet (`event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Gegenstück auf der Worker-Seite zu [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)).

Wenn der Transformer in einen Video-Stream eingefügt wird, wird die `transform()`-Methode mit einem `RTCEncodedVideoFrame` aufgerufen, wann immer ein neuer Frame in `event.transformer.readable` eingereiht wird.
Die `transform()`-Methode zeigt, wie dieser gelesen, durch Invertieren der Bits modifiziert und dann dem Controller eingereiht werden kann (dies leitet ihn letztlich durch zu `event.transformer.writable` und wieder zurück in die WebRTC-Pipeline).

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
