---
title: RTCTransformEvent
slug: Web/API/RTCTransformEvent
l10n:
  sourceCommit: 32f666e453bdb8c93d305075453b6e304cae94de
---

{{APIRef("WebRTC")}}

Die **`RTCTransformEvent`** des [WebRTC-API](/de/docs/Web/API/WebRTC_API) stellt ein Ereignis dar, das in einem dedizierten Worker ausgelöst wird, wenn ein kodierter Frame in die Warteschlange für die Verarbeitung durch einen [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) eingereiht wurde.

Die Schnittstelle verfügt über eine [`transformer`](/de/docs/Web/API/RTCTransformEvent/transformer) Eigenschaft, die einen lesbaren und einen beschreibbaren Stream bereitstellt. Ein Worker sollte kodierte Frames aus `transformer.readable` lesen, sie nach Bedarf modifizieren und in der gleichen Reihenfolge und ohne Duplikate in `transformer.writable` schreiben.

Zum Zeitpunkt der Erstellung gibt es nur ein Ereignis basierend auf `RTCTransformEvent`: [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Da `RTCTransformEvent` auf [`Event`](/de/docs/Web/API/Event) basiert, sind dessen Eigenschaften ebenfalls verfügbar._

- [`RTCTransformEvent.transformer`](/de/docs/Web/API/RTCTransformEvent/transformer) {{ReadOnlyInline}}
  - : Gibt den mit dem Ereignis verknüpften [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) zurück.

## Transform-Ereignistypen

Es gibt nur einen Typ von Transform-Ereignis.

### `rtctransform`

Das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Ereignis wird im Worker-Global-Scope bei der Erstellung eines zugehörigen [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) sowie jedes Mal ausgelöst, wenn ein neuer kodierter Video- oder Audio-Frame zur Verarbeitung eingereiht wird.

Sie können einen `rtctransform`-Ereignislistener hinzufügen, um benachrichtigt zu werden, wenn der neue Frame verfügbar ist, indem Sie entweder [`DedicatedWorkerGlobalScope.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder die `onrtctransform`-Ereignis-Handler-Eigenschaft verwenden.

## Beispiel

Dieses Beispiel erstellt einen Ereignislistener für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Ereignis.

Das Beispiel geht davon aus, dass wir einen [`TransformStream`](/de/docs/Web/API/TransformStream) mit einem `options`-Objekt haben, das von einem [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) Konstruktor im Haupt-Thread übergeben wird. Der Code am Ende zeigt, wie der Stream durch den Transform-Stream von `readable` nach `writable` geleitet wird.

```js
addEventListener("rtctransform", (event) => {
  let transform;
  // Select a transform based on passed options
  if (event.transformer.options.name == "senderTransform") {
    transform = createSenderTransform(); // A TransformStream (not shown)
  } else if (event.transformer.options.name == "receiverTransform") {
    transform = createReceiverTransform(); // A TransformStream (not shown)
  }
  // Pipe frames from the readable to writeable through TransformStream
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Beachten Sie, dass dieser Code Teil eines ausführlicheren Beispiels ist, das in [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
