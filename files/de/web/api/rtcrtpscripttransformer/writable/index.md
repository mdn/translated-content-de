---
title: "RTCRtpScriptTransformer: writable-Eigenschaft"
short-title: writable
slug: Web/API/RTCRtpScriptTransformer/writable
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`writable`**-Eigenschaft der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Schnittstelle gibt eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die als Senke für kodierte Medien-Frames verwendet werden kann, die in der entsprechenden [`RTCRtpScriptTransformer.readable`](/de/docs/Web/API/RTCRtpScriptTransformer/readable) eingereiht sind.

Wenn der entsprechende [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) in die WebRTC Sender- und Empfänger-Pipelines eingefügt wird, können kodierte Medien-Frames ([`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) oder [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)) in der [`RTCRtpScriptTransformer.readable`](/de/docs/Web/API/RTCRtpScriptTransformer/readable) eingereiht werden.
Ein WebRTC kodierter Transform kann die Frames aus `readable` lesen, sie nach Bedarf modifizieren und dann zurück in die WebRTC-Pipeline senden, indem sie an dieses `writable` gesendet werden.
Eine gängige Methode, um diese Operation auszuführen, ist das Durchleiten der Frames durch einen [`TransformStream`](/de/docs/Web/API/TransformStream).

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Das folgende Beispiel zeigt, wie [`RTCRtpScriptTransformer.readable`](/de/docs/Web/API/RTCRtpScriptTransformer/readable) durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zu `RTCRtpScriptTransformer.writable` geleitet wird.

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

Der Code implementiert einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis, das beim globalen Worker-Objekt beim Erstellen des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) ausgelöst wird und wenn neue Frames zur Verarbeitung eingereiht werden.
`event.transformer` ist der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), der die Eigenschaften `writable` und `readable` hat.

Ein anderer [`TransformStream`](/de/docs/Web/API/TransformStream) wird erstellt, um ausgehende und eingehende Frames zu verarbeiten, unter Verwendung von `createSenderTransform()` oder `createReceiverTransform()`, jeweils (Implementierungen nicht gezeigt).
Der Ereignishandler wählt den richtigen Transformstream basierend auf Optionen, die vom [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) übermittelt werden, und weist ihn `transform` zu.

Der Code ruft [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) am `readable` auf, um kodierte Frames durch den ausgewählten `TransformStream` zu leiten, und dann [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo), um sie an das `RTCRtpScriptTransformer.writable` zu leiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
