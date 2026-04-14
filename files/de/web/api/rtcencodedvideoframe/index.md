---
title: RTCEncodedVideoFrame
slug: Web/API/RTCEncodedVideoFrame
l10n:
  sourceCommit: bbb1d10fbbb06665b9587b6c953e5cafb62ab7dc
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`RTCEncodedVideoFrame`** der [WebRTC API](/de/docs/Web/API/WebRTC_API) repräsentiert einen kodierten Videoframe in der WebRTC-Empfänger- oder Sender-Pipeline, der mithilfe eines [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) modifiziert werden kann.

## Konstruktor

- [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame)
  - : Kopierkonstruktor. Erstellt ein neues und unabhängiges `RTCEncodedVideoFrame`-Objekt aus einem anderen Frame und überschreibt optional einige der kopierten Metadaten.

## Instanz-Eigenschaften

- [`RTCEncodedVideoFrame.type`](/de/docs/Web/API/RTCEncodedVideoFrame/type) {{ReadOnlyInline}}
  - : Gibt zurück, ob der aktuelle Frame ein Key-Frame oder ein Delta-Frame ist.
- [`RTCEncodedVideoFrame.timestamp`](/de/docs/Web/API/RTCEncodedVideoFrame/timestamp) {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt den Zeitstempel zurück, zu dem das Sampling des Frames begann.
- [`RTCEncodedVideoFrame.data`](/de/docs/Web/API/RTCEncodedVideoFrame/data)
  - : Gibt einen Puffer mit den kodierten Frame-Daten zurück.

## Instanz-Methoden

- [`RTCEncodedVideoFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata)
  - : Gibt die mit dem Frame verknüpften Metadaten zurück.

## Beschreibung

Rohvideodaten werden als Folge von Frames erzeugt, wobei jeder Frame ein zweidimensionales Array von Pixelwerten ist.
Videokodierer wandeln diesen Rohinput in eine komprimierte Darstellung des Originals für die Übertragung und Speicherung um.
Ein allgemeiner Ansatz besteht darin, "Key-Frames" zu senden, die genügend Informationen enthalten, um ein ganzes Bild mit relativ niedriger Rate wiederzugeben, und zwischen den Key-Frames viele viel kleinere "Delta-Frames" zu senden, die nur die Änderungen seit dem vorherigen Frame kodieren.

Es gibt viele verschiedene Codecs, wie H.264, VP8 und VP9, die jeweils unterschiedliche Kodierprozesse und Konfigurationen haben, welche unterschiedliche Kompromisse zwischen Kompressionseffizienz und Videoqualität bieten.

Der **`RTCEncodedVideoFrame`** repräsentiert einen einzelnen Frame, der mit einem bestimmten Videokodierer kodiert wurde.
Die [`type`](/de/docs/Web/API/RTCEncodedVideoFrame/type)-Eigenschaft zeigt an, ob der Frame ein "Key" oder "Delta"-Frame ist, und Sie können die [`getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata)-Methode verwenden, um weitere Details über die Kodierungsmethode zu erhalten.
Die [`data`](/de/docs/Web/API/RTCEncodedVideoFrame/data)-Eigenschaft bietet Zugriff auf die kodierten Bilddaten des Frames, die dann modifiziert ("transformiert") werden können, wenn Frames gesendet oder empfangen werden.

## Beispiele

### Transformieren eines kodierten Videoframes

Dieser Codeausschnitt zeigt einen Handler für das `rtctransform`-Ereignis in einem [`Worker`](/de/docs/Web/API/Worker), der einen [`TransformStream`](/de/docs/Web/API/TransformStream) implementiert, und leitet kodierte Frames von `event.transformer.readable` zu `event.transformer.writable` um (`event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Pendant auf der Worker-Seite zu [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)).

Wenn der Transformer in einen Videostream eingefügt wird, wird die `transform()`-Methode mit einem `RTCEncodedVideoFrame` aufgerufen, wann immer ein neuer Frame in `event.transformer.readable` eingereiht wird.
Die `transform()`-Methode zeigt, wie dies gelesen, durch Invertieren der Bits modifiziert und dann im Controller eingereiht werden kann (dies leitet es letztendlich zu `event.transformer.writable` und dann zurück in die WebRTC-Pipeline).

```js
addEventListener("rtctransform", (event) => {
  const transform = new TransformStream({
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

Beachten Sie, dass vollständigere Beispiele in [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
- [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)
