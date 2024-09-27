---
title: "RTCRtpScriptTransformer: readable Eigenschaft"
short-title: readable
slug: Web/API/RTCRtpScriptTransformer/readable
l10n:
  sourceCommit: 4799bed9382147f0b0ff642a130a1c12ed59a28e
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`readable`** der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Schnittstelle gibt eine [`ReadableStream`](/de/docs/Web/API/ReadableStream) Instanz zurück, die eine Quelle für codierte Medienrahmen ist.

Wenn der entsprechende [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) in die WebRTC-Sender- und -Empfänger-Pipelines eingefügt wird, kann dieser Stream mit ausgehenden oder eingehenden codierten Medienrahmen ([`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) oder [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)) in die Warteschlange gestellt werden. Ein WebRTC-codierter Transformationsprozess kann die Rahmen lesen, sie bei Bedarf modifizieren und sie dann wieder in die WebRTC-Pipeline zurücksenden, indem er sie in [`RTCRtpScriptTransformer.writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) schreibt. Eine häufige Methode zur Durchführung dieser Operation besteht darin, die Rahmen durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zu leiten.

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

Der Code implementiert einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis, das beim globalen Worker-Objekt beim Aufbau des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) ausgelöst wird, und wenn neue Rahmen zur Verarbeitung in die Warteschlange gestellt werden. `event.transformer` ist der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), der eine `readable` und `writable` Eigenschaft hat.

Ein anderer [`TransformStream`](/de/docs/Web/API/TransformStream) wird erstellt, um ausgehende und eingehende Rahmen zu verarbeiten, wobei `createSenderTransform()` oder `createReceiverTransform()` verwendet wird (Implementierungen nicht gezeigt). Der Ereignishandler wählt den richtigen Transformationsstrom basierend auf Optionen aus, die durch den [`RTCRtpScriptTransform` Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) übergeben werden, und weist ihn `transform` zu.

Der Code ruft [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) auf dem `readable` auf, um codierte Rahmen durch den ausgewählten `TransformStream` zu leiten, und dann [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo), um sie an die [`RTCRtpScriptTransformer.writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) zu leiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
