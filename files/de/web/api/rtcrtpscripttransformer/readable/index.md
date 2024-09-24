---
title: "RTCRtpScriptTransformer: readable-Eigenschaft"
short-title: readable
slug: Web/API/RTCRtpScriptTransformer/readable
l10n:
  sourceCommit: 4799bed9382147f0b0ff642a130a1c12ed59a28e
---

{{APIRef("WebRTC")}}

Die **`readable`** schreibgeschützte Eigenschaft des {{domxref("RTCRtpScriptTransformer")}}-Interfaces gibt eine {{domxref("ReadableStream")}}-Instanz zurück, die als Quelle für codierte Medienframes dient.

Wenn der entsprechende {{domxref("RTCRtpScriptTransform")}} in die WebRTC-Sender- und Empfänger-Pipelines eingefügt wird, kann dieser Stream mit ausgehenden oder eingehenden codierten Medienframes ({{domxref("RTCEncodedVideoFrame")}} oder {{domxref("RTCEncodedAudioFrame")}}) befüllt werden. Ein WebRTC-codierter Transform kann die Frames lesen, bei Bedarf ändern und sie dann zurück in die WebRTC-Pipeline senden, indem sie in {{domxref("RTCRtpScriptTransformer.writable")}} geschrieben werden. Eine häufige Methode, um diese Operation auszuführen, besteht darin, die Frames durch einen {{domxref("TransformStream")}} zu leiten.

## Wert

Ein {{domxref("ReadableStream")}}.

## Beispiele

Das folgende Beispiel zeigt, wie `readable` durch einen {{domxref("TransformStream")}} zu {{domxref("RTCRtpScriptTransformer.writable")}} geleitet wird.

```js
addEventListener("rtctransform", (event) => {
  let transform;
  // Wählen Sie eine Transformation basierend auf den übergebenen Optionen aus
  if (event.transformer.options.name == "senderTransform")
    transform = createSenderTransform(); // Ein TransformStream
  else if (event.transformer.options.name == "receiverTransform")
    transform = createReceiverTransform(); // Ein TransformStream
  else return;

  // Leiten Sie Frames durch den TransformStream von readable zu writable
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Der Code implementiert einen Handler für das {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}}-Event, das beim globalen Worker-Objekt bei der Konstruktion des entsprechenden {{domxref("RTCRtpScriptTransform")}} ausgelöst wird, und wenn neue Frames zur Verarbeitung eingereiht werden.
`event.transformer` ist der {{domxref("RTCRtpScriptTransformer")}}, der über eine `readable` und `writable` Eigenschaft verfügt.

Ein anderer {{domxref("TransformStream")}} wird erstellt, um ausgehende und eingehende Frames zu verarbeiten, unter Verwendung von `createSenderTransform()` oder `createReceiverTransform()` (Implementierungen nicht gezeigt). Der Event-Handler wählt den richtigen Transform-Stream basierend auf den aus dem [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) übermittelten Optionen aus und weist ihn `transform` zu.

Der Code ruft {{domxref("ReadableStream.pipeThrough()")}} an, um codierte Frames durch den ausgewählten `TransformStream` zu leiten, und anschließend {{domxref("ReadableStream.pipeTo()")}}, um sie an das {{domxref("RTCRtpScriptTransformer.writable")}} zu leiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
