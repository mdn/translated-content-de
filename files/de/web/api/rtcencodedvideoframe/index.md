---
title: RTCEncodedVideoFrame
slug: Web/API/RTCEncodedVideoFrame
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`RTCEncodedVideoFrame`** der [WebRTC API](/de/docs/Web/API/WebRTC_API) repräsentiert einen kodierten Videoframe in der WebRTC-Empfänger- oder Senderpipeline, der mithilfe eines [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) modifiziert werden kann.

## Instanz-Eigenschaften

- [`RTCEncodedVideoFrame.type`](/de/docs/Web/API/RTCEncodedVideoFrame/type) {{ReadOnlyInline}}
  - : Gibt zurück, ob der aktuelle Frame ein Schlüsselbild, Delta-Frame oder ein leerer Frame ist.
- [`RTCEncodedVideoFrame.timestamp`](/de/docs/Web/API/RTCEncodedVideoFrame/timestamp) {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt den Zeitstempel zurück, zu dem die Abtastung des Frames begann.
- [`RTCEncodedVideoFrame.data`](/de/docs/Web/API/RTCEncodedVideoFrame/data)
  - : Liefert einen Puffer, der die kodierten Frame-Daten enthält.

## Instanz-Methoden

- [`RTCEncodedVideoFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata)
  - : Gibt die zum Frame zugehörigen Metadaten zurück.

## Beschreibung

Rohvideodaten werden als Sequenz von Frames generiert, wobei jeder Frame ein zweidimensionales Array von Pixelwerten ist.
Videokodierer wandeln diese Rohdaten in eine komprimierte Darstellung des Originals um, um sie zu übertragen und zu speichern.
Ein übliches Vorgehen ist, "Schlüsselbilder" zu senden, die genügend Informationen enthalten, um ein ganzes Bild in relativ niedriger Rate zu reproduzieren, und zwischen den Schlüsselbildern viele wesentlich kleinere "Delta-Frames" zu senden, die nur die Änderungen seit dem vorherigen Frame kodieren.

Es gibt viele verschiedene Codecs, wie H.264, VP8 und VP9, die alle unterschiedliche Kodierungsprozesse und Konfigurationen haben und verschiedene Kompromisse zwischen Kompressions-Effizienz und Videoqualität bieten.

Das **`RTCEncodedVideoFrame`** stellt einen einzelnen Frame dar, der mit einem bestimmten Videokodierer kodiert wurde.
Die [`type`](/de/docs/Web/API/RTCEncodedVideoFrame/type)-Eigenschaft gibt an, ob der Frame ein "Schlüssel" oder "Delta"-Frame ist, und Sie können die [`getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata)-Methode verwenden, um weitere Details zur Kodierungsmethode zu erhalten.
Die [`data`](/de/docs/Web/API/RTCEncodedVideoFrame/data)-Eigenschaft bietet Zugriff auf die kodierten Bilddaten für den Frame, die dann modifiziert ("transformiert") werden können, wenn Frames gesendet oder empfangen werden.

## Beispiele

Dieses Code-Snippet zeigt einen Handler für das `rtctransform`-Ereignis in einem [`Worker`](/de/docs/Web/API/Worker), der einen [`TransformStream`](/de/docs/Web/API/TransformStream) implementiert und kodierte Frames davon vom `event.transformer.readable` zu `event.transformer.writable` weiterleitet (`event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Pendant auf der Worker-Seite von [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)).

Wenn der Transformator in einen Videostream eingefügt wird, wird die `transform()`-Methode mit einem `RTCEncodedVideoFrame` aufgerufen, wann immer ein neuer Frame in die `event.transformer.readable` eingereiht wird.
Die `transform()`-Methode zeigt, wie dieser gelesen, durch Invertierung der Bits modifiziert und dann auf dem Controller eingereiht werden könnte (dies leitet ihn letztlich durch zur `event.transformer.writable`, und dann zurück in die WebRTC-Pipeline).

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

Beachten Sie, dass ausführlichere Beispiele in [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
- [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)
