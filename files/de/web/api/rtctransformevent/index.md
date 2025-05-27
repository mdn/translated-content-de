---
title: RTCTransformEvent
slug: Web/API/RTCTransformEvent
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("WebRTC")}}

Der **`RTCTransformEvent`** der [WebRTC API](/de/docs/Web/API/WebRTC_API) repräsentiert ein Ereignis, das in einem dedizierten Worker ausgelöst wird, wenn ein kodiertes Frame zur Verarbeitung durch einen [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) eingereiht wurde.

Die Schnittstelle verfügt über eine [`transformer`](/de/docs/Web/API/RTCTransformEvent/transformer) Eigenschaft, die einen lesbaren und einen beschreibbaren Stream bereitstellt. Ein Worker sollte kodierte Frames von `transformer.readable` lesen, sie bei Bedarf modifizieren und in der gleichen Reihenfolge und ohne Duplikate in `transformer.writable` schreiben.

Zum Zeitpunkt der Erstellung gibt es nur ein Ereignis, das auf `RTCTransformEvent` basiert: [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Da `RTCTransformEvent` auf [`Event`](/de/docs/Web/API/Event) basiert, sind dessen Eigenschaften ebenfalls verfügbar._

- [`RTCTransformEvent.transformer`](/de/docs/Web/API/RTCTransformEvent/transformer) {{ReadOnlyInline}}
  - : Gibt den mit dem Ereignis verbundenen [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) zurück.

## Transform-Ereignistypen

Es gibt nur einen Typ von Transform-Ereignis.

### `rtctransform`

Das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Ereignis wird im Worker-Globalbereich beim Aufbau eines zugehörigen [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) ausgelöst und immer dann, wenn ein neuer kodierter Video- oder Audioblock zur Verarbeitung eingereiht wird.

Sie können einen `rtctransform`-Ereignislistener hinzufügen, um benachrichtigt zu werden, wenn das neue Frame verfügbar ist, entweder mit [`DedicatedWorkerGlobalScope.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder über die `onrtctransform`-Ereignis-Handler-Eigenschaft.

## Beispiel

Dieses Beispiel erstellt einen Ereignislistener für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Ereignis.

Das Beispiel geht davon aus, dass wir einen [`TransformStream`](/de/docs/Web/API/TransformStream) mit einem `options`-Objekt haben, das von einem [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) Konstruktor im Hauptthread übergeben wurde.
Der Code am Ende zeigt, wie der Stream durch den Transformationsstrom von `readable` zu `writable` geleitet wird.

```js
addEventListener("rtctransform", (event) => {
  let transform;
  // Select a transform based on passed options
  if (event.transformer.options.name === "senderTransform") {
    transform = createSenderTransform(); // A TransformStream (not shown)
  } else if (event.transformer.options.name === "receiverTransform") {
    transform = createReceiverTransform(); // A TransformStream (not shown)
  }
  // Pipe frames from the readable to writeable through TransformStream
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Beachten Sie, dass dieser Code Teil eines vollständigeren Beispiels ist, das in [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
