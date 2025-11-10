---
title: "RTCRtpScriptTransformer: readable-Eigenschaft"
short-title: readable
slug: Web/API/RTCRtpScriptTransformer/readable
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`readable`**-Eigenschaft der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Schnittstelle gibt eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück, die eine Quelle für kodierte Medienframes ist.

Wenn die entsprechende [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) in die WebRTC-Sender- und Empfänger-Pipelines eingefügt ist, kann dieser Stream mit ausgehenden oder eingehenden kodierten Medienframes ([`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) oder [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)) befüllt werden. Ein WebRTC-kodiertes Transform kann die Frames lesen, nach Bedarf ändern und dann durch Schreiben in [`RTCRtpScriptTransformer.writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) zurück in die WebRTC-Pipeline senden. Eine übliche Methode, um diese Operation auszuführen, besteht darin, die Frames durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zu leiten.

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

Der Code implementiert einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis, das beim globalen Worker-Objekt ausgelöst wird, wenn die entsprechende [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) erstellt wird, und wenn neue Frames zur Verarbeitung eingefügt werden. `event.transformer` ist der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), der über die Eigenschaften `readable` und `writable` verfügt.

Ein anderer [`TransformStream`](/de/docs/Web/API/TransformStream) wird erstellt, um ausgehende und eingehende Frames zu verarbeiten, indem entweder `createSenderTransform()` oder `createReceiverTransform()` verwendet wird (Implementierungen nicht gezeigt). Der Ereignishandler wählt den korrekten Transform-Stream basierend auf den Optionen, die über den [Konstruktor von RTCRtpScriptTransform](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) übergeben werden, aus und ordnet ihn `transform` zu.

Der Code ruft [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) für `readable` auf, um kodierte Frames durch den ausgewählten `TransformStream` zu leiten, und dann [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo), um sie zu [`RTCRtpScriptTransformer.writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) zu leiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
