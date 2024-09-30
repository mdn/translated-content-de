---
title: "RTCRtpScriptTransformer: readable-Eigenschaft"
short-title: readable
slug: Web/API/RTCRtpScriptTransformer/readable
l10n:
  sourceCommit: 4799bed9382147f0b0ff642a130a1c12ed59a28e
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`readable`** der Schnittstelle [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) gibt eine Instanz des [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, die als Quelle für kodierte Medienrahmen dient.

Wenn die entsprechende [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) in die WebRTC-Sender- und Empfänger-Pipelines eingefügt wird, kann dieser Stream mit ausgehenden oder eingehenden kodierten Medienrahmen ([`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) oder [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)) gefüllt werden.
Eine kodierte WebRTC-Transformation kann die Rahmen lesen, sie bei Bedarf modifizieren und dann zurück in die WebRTC-Pipeline senden, indem sie an [`RTCRtpScriptTransformer.writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) geschrieben werden.
Eine übliche Methode, diese Operation auszuführen, ist das Durchleiten der Rahmen durch einen [`TransformStream`](/de/docs/Web/API/TransformStream).

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Das folgende Beispiel zeigt, wie `readable` durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zu [`RTCRtpScriptTransformer.writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) geleitet wird.

```js
addEventListener("rtctransform", (event) => {
  let transform;
  // Select a transform based on passed options
  if (event.transformer.options.name == "senderTransform")
    transform = createSenderTransform(); // A TransformStream
  else if (event.transformer.options.name == "receiverTransform")
    transform = createReceiverTransform(); // A TransformStream
  else return;

  // Pipe frames from the readable to writeable through TransformStream
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Der Code implementiert einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis, das beim globalen Worker-Objekt beim Erstellen der entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) ausgelöst wird und wenn neue Rahmen zur Verarbeitung eingereiht werden.
`event.transformer` ist der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), der über eine `readable`- und `writable`-Eigenschaft verfügt.

Ein anderer [`TransformStream`](/de/docs/Web/API/TransformStream) wird erstellt, um ausgehende und eingehende Rahmen zu verarbeiten, wobei `createSenderTransform()` oder `createReceiverTransform()` verwendet werden (Implementierungen nicht gezeigt).
Der Ereignishandler wählt den richtigen Transform-Stream basierend auf den übergebenen Optionen aus dem Konstruktor [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) und weist ihn `transform` zu.

Der Code ruft [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) für das `readable` auf, um kodierte Rahmen durch den ausgewählten `TransformStream` zu leiten, und dann [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo), um sie zu [`RTCRtpScriptTransformer.writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) zu leiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
