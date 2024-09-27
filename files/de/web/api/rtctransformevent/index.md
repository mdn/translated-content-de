---
title: RTCTransformEvent
slug: Web/API/RTCTransformEvent
l10n:
  sourceCommit: 32f666e453bdb8c93d305075453b6e304cae94de
---

{{APIRef("WebRTC")}}

Der **`RTCTransformEvent`** der [WebRTC API](/de/docs/Web/API/WebRTC_API) repräsentiert ein Ereignis, das in einem dedizierten Worker ausgelöst wird, wenn ein codierter Frame für die Verarbeitung durch ein [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) in die Warteschlange gestellt wurde.

Das Interface besitzt eine [`transformer`](/de/docs/Web/API/RTCTransformEvent/transformer) Eigenschaft, die einen lesbaren Stream und einen beschreibbaren Stream bereitstellt.
Ein Worker sollte codierte Frames von `transformer.readable` lesen, sie bei Bedarf ändern und sie in derselben Reihenfolge und ohne Duplikate in `transformer.writable` schreiben.

Zum Zeitpunkt des Schreibens gibt es nur ein Ereignis basierend auf dem `RTCTransformEvent`: [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Da `RTCTransformEvent` auf [`Event`](/de/docs/Web/API/Event) basiert, sind dessen Eigenschaften ebenfalls verfügbar._

- [`RTCTransformEvent.transformer`](/de/docs/Web/API/RTCTransformEvent/transformer) {{ReadOnlyInline}}
  - : Gibt den [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) zurück, der mit dem Ereignis verknüpft ist.

## Transform-Ereignistypen

Es gibt nur einen Typ von Transform-Ereignis.

### `rtctransform`

Das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Ereignis wird im Worker-Global-Scope beim Konstruktion eines assoziierten [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) ausgelöst und immer dann, wenn ein neuer codierter Video- oder Audio-Frame zur Verarbeitung in die Warteschlange gestellt wird.

Sie können einen `rtctransform`-Ereignis-Listener hinzufügen, um benachrichtigt zu werden, wenn der neue Frame verfügbar ist, entweder mit [`DedicatedWorkerGlobalScope.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder der `onrtctransform`-Ereignis-Handler-Eigenschaft.

## Beispiel

Dieses Beispiel erstellt einen Ereignis-Listener für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Ereignis.

Das Beispiel geht davon aus, dass wir einen [`TransformStream`](/de/docs/Web/API/TransformStream) mit einem `options` Objekt haben, das von einem [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) Konstruktor im Haupt-Thread übergeben wird.
Der Code am Ende zeigt, wie der Stream durch den Transform-Stream von `readable` zu `writable` geleitet wird.

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

Beachten Sie, dass dieser Code Teil eines vollständigeren Beispiels ist, das in [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
