---
title: "RTCRtpScriptTransformer: readable-Eigenschaft"
short-title: readable
slug: Web/API/RTCRtpScriptTransformer/readable
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("WebRTC")}}

Die **`readable`**-Eigenschaft der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Schnittstelle gibt eine Instanz von [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, die eine Quelle für kodierte Medienrahmen darstellt.

Wenn der entsprechende [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) in die WebRTC-Sender- und -Empfänger-Pipelines eingefügt wird, kann dieser Stream mit ausgehenden oder eingehenden kodierten Medienrahmen ([`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) oder [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)) belegt werden.
Eine WebRTC-enkodierte Transformation kann die Rahmen lesen, nach Bedarf modifizieren und sie dann durch Schreiben in [`RTCRtpScriptTransformer.writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) wieder in die WebRTC-Pipeline zurücksenden.
Eine gängige Methode, um diese Operation auszuführen, besteht darin, die Rahmen durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zu leiten.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Das folgende Beispiel zeigt, wie `readable` durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zu [`RTCRtpScriptTransformer.writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) geleitet wird.

```js
addEventListener("rtctransform", (event) => {
  let transform;
  // Select a transform based on passed options
  if (event.transformer.options.name === "senderTransform")
    transform = createSenderTransform(); // A TransformStream
  else if (event.transformer.options.name === "receiverTransform")
    transform = createReceiverTransform(); // A TransformStream
  else return;

  // Pipe frames from the readable to writeable through TransformStream
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Der Code implementiert einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis, das beim globalen Worker-Objekt beim Erstellen des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) ausgelöst wird und wenn neue Rahmen zur Verarbeitung hinzugefügt werden.
`event.transformer` ist der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), der die Eigenschaften `readable` und `writable` hat.

Ein unterschiedlicher [`TransformStream`](/de/docs/Web/API/TransformStream) wird erstellt, um ausgehende und eingehende Rahmen zu verarbeiten, unter Verwendung von `createSenderTransform()` oder `createReceiverTransform()`, jeweils (Implementierungen nicht gezeigt).
Der Ereignishandler wählt den richtigen Transformationsstrom basierend auf den durch den [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) übermittelten Optionen aus und weist ihn `transform` zu.

Der Code ruft [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) auf `readable` auf, um kodierte Rahmen durch den ausgewählten `TransformStream` zu leiten, und dann [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo), um sie zu [`RTCRtpScriptTransformer.writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) zu leiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC-kodierten Transformationen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
