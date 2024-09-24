---
title: "DedicatedWorkerGlobalScope: rtctransform Ereignis"
short-title: rtctransform
slug: Web/API/DedicatedWorkerGlobalScope/rtctransform_event
l10n:
  sourceCommit: 7cf04da4f63ea96edfddde0a74ac0d0b1bc4d12e
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("dedicated")}}

Das **`rtctransform`** Ereignis wird am {{domxref('DedicatedWorkerGlobalScope')}} Objekt eines Workers ausgelöst, wenn ein kodiertes Video- oder Audio-Frame zur Verarbeitung in die Warteschlange gestellt wurde von einem {{domxref("WebRTC API/Using Encoded Transforms", "WebRTC Encoded Transform", "", "nocode")}}.

Die {{domxref("RTCTransformEvent.transformer","transformer")}} Eigenschaft des Ereignisses gibt einen {{domxref("RTCRtpScriptTransformer")}} zurück, der den {{domxref("ReadableStream")}} bereitstellt, auf dem das Frame in die Warteschlange gestellt wird, und einen {{domxref("WritableStream")}}, in den das Frame geschrieben werden kann, um es wieder in die WebRTC-Pipeline einzuspeisen.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js
addEventListener("rtctransform", (event) => {});

onrtctransform = (event) => {};
```

## Ereignistyp

Ein {{domxref("RTCTransformEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("RTCTransformEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternobjekt, {{domxref("Event")}}._

- {{domxref("RTCTransformEvent.transformer")}} {{ReadOnlyInline}}
  - : Gibt den mit dem Ereignis verknüpften {{domxref("RTCRtpScriptTransformer")}} zurück.

## Beispiel

Der folgende Code zeigt einen Handler für das `rtctransform` Ereignis im Worker, der mit `addEventListener()` zum globalen Scope hinzugefügt wird. Das `event.transformer` ist ein {{domxref("RTCRtpScriptTransformer")}}, das Gegenstück auf der Worker-Seite zu {{domxref("RTCRtpScriptTransform")}}.

```js
addEventListener("rtctransform", (event) => {
  let transform;
  // Wählen Sie eine Transformation basierend auf den übergebenen Optionen
  if (event.transformer.options.name == "senderTransform")
    transform = createSenderTransform(); // Ein TransformStream
  else if (event.transformer.options.name == "receiverTransform")
    transform = createReceiverTransform(); // Ein TransformStream
  else return;

  // Leiten Sie Frames vom Readable zum Writeable durch TransformStream
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Das `rtctransform` Ereignis wird ausgelöst, wenn ein kodierter Frame auf den {{domxref("RTCRtpScriptTransformer")}} in die Warteschlange gestellt wird und nur einmal, wenn der entsprechende {{domxref("RTCRtpScriptTransformer")}} des Transformers konstruiert wird. Der Code bestimmt zunächst, welche Transformation anhand des `name`-Wertes angewendet werden soll, der in den Optionen übergeben wird (dies ermöglicht es {{domxref("RTCRtpScriptTransform")}}-Instanzen, die den ein- und ausgehenden WebRTC-Pipelines hinzugefügt werden, einen einzelnen Worker zu teilen). Kodierte Frames werden dann vom Readable über den ausgewählten {{domxref("TransformStream")}} zum Writeable geleitet.
Der eigentliche Transformationscode wird nicht angezeigt.

Beachten Sie, dass dieser Code Teil eines umfassenderen Beispiels ist, das in {{domxref("WebRTC API/Using Encoded Transforms", "Using WebRTC Encoded Transforms", "", "nocode")}} bereitgestellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebRTC API/Using Encoded Transforms", "Using WebRTC Encoded Transforms", "", "nocode")}}
