---
title: "RTCRtpScriptTransformer: writable-Eigenschaft"
short-title: writable
slug: Web/API/RTCRtpScriptTransformer/writable
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`writable`** der {{domxref("RTCRtpScriptTransformer")}}-Schnittstelle gibt eine {{domxref("WritableStream")}}-Instanz zurück, die als Senke für kodierte Medienrahmen verwendet werden kann, die in die entsprechende {{domxref("RTCRtpScriptTransformer.readable")}} eingereiht sind.

Wenn der entsprechende {{domxref("RTCRtpScriptTransform")}} in die WebRTC-Sender- und Empfänger-Pipelines eingefügt wird, können kodierte Medienrahmen ({{domxref("RTCEncodedVideoFrame")}} oder {{domxref("RTCEncodedAudioFrame")}}) in die {{domxref("RTCRtpScriptTransformer.readable")}} eingereiht werden. Eine WebRTC-kodierte Transformation kann die Rahmen aus `readable` lesen, sie bei Bedarf modifizieren und sie dann zurück in die WebRTC-Pipeline senden, indem sie sie an dieses `writable` sendet. Ein gängiger Weg, diese Operation durchzuführen, besteht darin, die Rahmen durch einen {{domxref("TransformStream")}} zu leiten.

## Wert

Ein {{domxref("WritableStream")}}.

## Beispiele

Das folgende Beispiel zeigt, wie {{domxref("RTCRtpScriptTransformer.readable")}} durch einen {{domxref("TransformStream")}} an `RTCRtpScriptTransformer.writable` geleitet wird.

```js
addEventListener("rtctransform", (event) => {
  let transform;
  // Wählen Sie eine Transformation basierend auf übergebenen Optionen
  if (event.transformer.options.name == "senderTransform")
    transform = createSenderTransform(); // Ein TransformStream
  else if (event.transformer.options.name == "receiverTransform")
    transform = createReceiverTransform(); // Ein TransformStream
  else return;

  // Leiten Sie Rahmen von readable durch TransformStream zu writable
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Der Code implementiert einen Handler für das {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}}-Ereignis, das am globalen Worker-Objekt beim Erstellen der entsprechenden {{domxref("RTCRtpScriptTransform")}}-Instanz und wenn neue Rahmen zur Verarbeitung eingereiht werden, ausgelöst wird. `event.transformer` ist der {{domxref("RTCRtpScriptTransformer")}}, der die Eigenschaften `writable` und `readable` hat.

Ein unterschiedlicher {{domxref("TransformStream")}} wird erstellt, um ausgehende und eingehende Rahmen zu verarbeiten, indem `createSenderTransform()` oder `createReceiverTransform()` verwendet wird (Implementierungen nicht gezeigt). Der Ereignishandler wählt den richtigen Transformationsstrom basierend auf den vom [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) übergebenen Optionen aus und weist ihn `transform` zu.

Der Code ruft {{domxref("ReadableStream.pipeThrough()")}} auf dem `readable` auf, um kodierte Rahmen durch den ausgewählten `TransformStream` zu leiten, und dann {{domxref("ReadableStream.pipeTo()")}}, um sie an `RTCRtpScriptTransformer.writable` weiterzuleiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
