---
title: RTCTransformEvent
slug: Web/API/RTCTransformEvent
l10n:
  sourceCommit: 32f666e453bdb8c93d305075453b6e304cae94de
---

{{APIRef("WebRTC")}}

Das **`RTCTransformEvent`** der [WebRTC-API](/de/docs/Web/API/WebRTC_API) stellt ein Ereignis dar, das in einem dedizierten Worker ausgelöst wird, wenn ein kodiertes Frame zur Verarbeitung durch einen [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) in die Warteschlange eingereiht wurde.

Die Schnittstelle verfügt über eine {{domxref("RTCTransformEvent.transformer","transformer")}}-Eigenschaft, die einen lesbaren und einen beschreibbaren Stream bereitstellt.
Ein Worker sollte kodierte Frames aus `transformer.readable` lesen, sie bei Bedarf ändern und sie in derselben Reihenfolge und ohne Duplikate in `transformer.writable` schreiben.

Zum Zeitpunkt des Schreibens gibt es nur ein Ereignis, das auf `RTCTransformEvent` basiert: {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}}.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Da `RTCTransformEvent` auf {{domxref("Event")}} basiert, sind auch dessen Eigenschaften verfügbar._

- {{domxref("RTCTransformEvent.transformer")}} {{ReadOnlyInline}}
  - : Gibt den mit dem Ereignis verbundenen {{domxref("RTCRtpScriptTransformer")}} zurück.

## Transformations-Ereignistypen

Es gibt nur einen Typ von Transformations-Ereignis.

### `rtctransform`

Das {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}}-Ereignis wird im Worker-Global-Scope beim Erstellen eines zugehörigen {{domxref("RTCRtpScriptTransform")}} ausgelöst und jedes Mal, wenn ein neues kodiertes Video- oder Audio-Frame zur Verarbeitung in die Warteschlange gestellt wird.

Sie können einen `rtctransform`-Ereignislistener hinzufügen, um benachrichtigt zu werden, wenn das neue Frame verfügbar ist, indem Sie entweder {{domxref("EventTarget.addEventListener", "DedicatedWorkerGlobalScope.addEventListener()")}} oder die `onrtctransform`-Ereignishandler-Eigenschaft verwenden.

## Beispiel

Dieses Beispiel erstellt einen Ereignislistener für das {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}}-Ereignis.

Das Beispiel geht davon aus, dass wir einen {{domxref("TransformStream")}} mit einem `options`-Objekt haben, das aus einem {{domxref("RTCRtpScriptTransform")}}-Konstruktor im Hauptthread übergeben wird.
Der Code am Ende zeigt, wie der Stream über den Transformationsstream vom `readable` zum `writable` geleitet wird.

```js
addEventListener("rtctransform", (event) => {
  let transform;
  // Wählen Sie eine Transformation basierend auf übergebenen Optionen
  if (event.transformer.options.name == "senderTransform") {
    transform = createSenderTransform(); // Ein TransformStream (nicht gezeigt)
  } else if (event.transformer.options.name == "receiverTransform") {
    transform = createReceiverTransform(); // Ein TransformStream (nicht gezeigt)
  }
  // Leiten Sie Frames über TransformStream von readable zu writable
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Beachten Sie, dass dieser Code Teil eines umfassenderen Beispiels ist, das unter [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt wird.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- {{domxref("TransformStream")}}
