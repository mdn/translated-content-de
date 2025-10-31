---
title: "RTCRtpScriptTransformer: writable-Eigenschaft"
short-title: writable
slug: Web/API/RTCRtpScriptTransformer/writable
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebRTC")}}

Die **`writable`**-Schreibgeschützte Eigenschaft der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Schnittstelle gibt eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die als Ziel für kodierte Medienrahmen verwendet werden kann, die in die entsprechende [`RTCRtpScriptTransformer.readable`](/de/docs/Web/API/RTCRtpScriptTransformer/readable) eingereiht sind.

Wenn der entsprechende [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) in die WebRTC-Sender- und Empfänger-Pipelines eingefügt wird, können kodierte Medienrahmen ([`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) oder [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)) in die [`RTCRtpScriptTransformer.readable`](/de/docs/Web/API/RTCRtpScriptTransformer/readable) eingereiht werden. Eine WebRTC-kodierte Transformation kann die Rahmen von `readable` lesen, sie nach Bedarf ändern und dann zurück in die WebRTC-Pipeline senden, indem sie sie in dieses `writable` sendet. Eine übliche Methode, um diese Operation auszuführen, besteht darin, die Rahmen durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zu leiten.

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Das folgende Beispiel zeigt, wie [`RTCRtpScriptTransformer.readable`](/de/docs/Web/API/RTCRtpScriptTransformer/readable) durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zu `RTCRtpScriptTransformer.writable` geleitet wird.

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

Der Code implementiert einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis, das beim globalen Worker-Objekt ausgelöst wird, wenn der entsprechende [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) erstellt wird und wenn neue Rahmen zur Verarbeitung eingereiht werden. `event.transformer` ist der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), der die Eigenschaften `writable` und `readable` hat.

Ein unterschiedlicher [`TransformStream`](/de/docs/Web/API/TransformStream) wird erstellt, um ausgehende und eingehende Rahmen zu verarbeiten, wobei `createSenderTransform()` oder `createReceiverTransform()` verwendet wird (Implementierungen nicht gezeigt). Der Ereignishandler wählt den korrekten Transformationsstrom basierend auf den durch den [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) übergebenen Optionen aus und weist ihn `transform` zu.

Der Code ruft [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) auf dem `readable` auf, um kodierte Rahmen durch den ausgewählten `TransformStream` zu leiten, und dann [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo), um sie zu `RTCRtpScriptTransformer.writable` zu leiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
