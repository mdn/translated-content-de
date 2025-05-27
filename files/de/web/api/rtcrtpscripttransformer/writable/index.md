---
title: "RTCRtpScriptTransformer: writable Eigenschaft"
short-title: writable
slug: Web/API/RTCRtpScriptTransformer/writable
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`writable`**-Eigenschaft der Schnittstelle [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) gibt eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die als Ziel für kodierte Medienrahmen verwendet werden kann, die in die entsprechende [`RTCRtpScriptTransformer.readable`](/de/docs/Web/API/RTCRtpScriptTransformer/readable) Warteschlange gestellt werden.

Wenn die entsprechende [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) in die WebRTC-Absender- und -Empfänger-Pipelines eingefügt wird, können kodierte Medienrahmen ([`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) oder [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)) in die [`RTCRtpScriptTransformer.readable`](/de/docs/Web/API/RTCRtpScriptTransformer/readable) Warteschlange gestellt werden. Ein WebRTC-kodierter Transform kann die Rahmen aus `readable` lesen, sie nach Bedarf ändern und dann wieder in die WebRTC-Pipeline senden, indem sie an dieses `writable` gesendet werden. Ein üblicher Weg, diese Operation durchzuführen, besteht darin, die Rahmen durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zu leiten.

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

Der Code implementiert einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis, das beim globalen Worker-Objekt bei der Konstruktion des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) ausgelöst wird und wenn neue Rahmen zur Verarbeitung in die Warteschlange gestellt werden. `event.transformer` ist der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), der die `writable` und `readable` Eigenschaften hat.

Ein unterschiedlicher [`TransformStream`](/de/docs/Web/API/TransformStream) wird erstellt, um abgehende und eingehende Rahmen zu verarbeiten, unter Verwendung von `createSenderTransform()` oder `createReceiverTransform()`, je nachdem (Implementierungen nicht gezeigt). Der Ereignishandler wählt den korrekten Transform-Stream, basierend auf Optionen, die durch den [`RTCRtpScriptTransform` Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) übergeben werden, und weist ihn `transform` zu.

Der Code ruft [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) auf dem `readable` auf, um kodierte Rahmen durch den ausgewählten `TransformStream` zu leiten, und dann [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo), um sie zum `RTCRtpScriptTransformer.writable` zu leiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
