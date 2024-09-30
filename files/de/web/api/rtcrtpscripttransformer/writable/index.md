---
title: "RTCRtpScriptTransformer: writable-Eigenschaft"
short-title: writable
slug: Web/API/RTCRtpScriptTransformer/writable
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`writable`** des [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Interfaces gibt eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die als Ziel für kodierte Medien-Frames verwendet werden kann, die in die entsprechende [`RTCRtpScriptTransformer.readable`](/de/docs/Web/API/RTCRtpScriptTransformer/readable) eingereiht wurden.

Wenn der entsprechende [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) in die Sender- und Empfänger-Pipelines von WebRTC eingefügt wird, können kodierte Medien-Frames ([`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) oder [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)) in die [`RTCRtpScriptTransformer.readable`](/de/docs/Web/API/RTCRtpScriptTransformer/readable) eingereiht werden.
Ein WebRTC-Encoded-Transform kann die Frames aus `readable` lesen, sie nach Bedarf modifizieren und sie dann zurück in die WebRTC-Pipeline senden, indem sie an dieses `writable` gesendet werden.
Ein gängiger Weg, diese Operation auszuführen, besteht darin, die Frames durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zu leiten.

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

Der Code implementiert einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis, das im globalen Worker-Objekt beim Erstellen des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) und wenn neue Frames zur Verarbeitung eingereiht werden, ausgelöst wird.
`event.transformer` ist der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), der die `writable`- und `readable`-Eigenschaften hat.

Ein anderer [`TransformStream`](/de/docs/Web/API/TransformStream) wird erstellt, um ausgehende und eingehende Frames zu verarbeiten, mittels `createSenderTransform()` oder `createReceiverTransform()`, jeweils (Implementierungen nicht gezeigt).
Der Ereignis-Handler wählt den richtigen Transform-Stream basierend auf Optionen, die vom [`RTCRtpScriptTransform` Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) übergeben werden, und weist ihn `transform` zu.

Der Code ruft [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) auf dem `readable` auf, um kodierte Frames durch den ausgewählten `TransformStream` zu leiten, und dann [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo), um sie an die `RTCRtpScriptTransformer.writable` zu leiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
