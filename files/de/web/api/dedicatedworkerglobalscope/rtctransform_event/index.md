---
title: "DedicatedWorkerGlobalScope: rtctransform Ereignis"
short-title: rtctransform
slug: Web/API/DedicatedWorkerGlobalScope/rtctransform_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("dedicated")}}

Das **`rtctransform`**-Ereignis wird bei einem [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt eines Workers ausgelöst, wenn ein codiertes Video- oder Audio-Frame zur Verarbeitung in einer [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) in die Warteschlange gestellt wurde.

Die [`transformer`](/de/docs/Web/API/RTCTransformEvent/transformer)-Eigenschaft des Ereignisses gibt einen [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) zurück, welcher den [`ReadableStream`](/de/docs/Web/API/ReadableStream) bereitstellt, auf dem das Frame in die Warteschlange gestellt wird, und einen [`WritableStream`](/de/docs/Web/API/WritableStream), in den das Frame geschrieben werden kann, um es wieder in die WebRTC-Pipeline einzubringen.

Dieses Ereignis kann nicht abgebrochen werden und propagiert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("rtctransform", (event) => { })

onrtctransform = (event) => { }
```

## Ereignistyp

Ein [`RTCTransformEvent`](/de/docs/Web/API/RTCTransformEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCTransformEvent")}}

## Beispiel

Das folgende Code-Snippet zeigt einen Handler für das `rtctransform`-Ereignis im Worker, der dem globalen Scope mit `addEventListener()` hinzugefügt wird. Der `event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Pendant auf der Worker-Seite zu [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform).

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

Das `rtctransform`-Ereignis wird ausgelöst, wenn ein codiertes Frame in die Warteschlange des [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) gestellt wird und einmal, wenn der entsprechende [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) konstruiert wird. Der Code bestimmt zuerst, welche Transformation angewendet werden soll, indem er den in den Optionen übergebenen `name`-Wert verwendet (dies ermöglicht, dass [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)-Instanzen, die zu den eingehenden und ausgehenden WebRTC-Pipelines hinzugefügt werden, einen einzigen Worker teilen können). Codierte Bilder werden dann vom lesbaren Stream durch den ausgewählten Transformations-`TransformStream`](/de/docs/Web/API/TransformStream) zu einem beschreibbaren Stream geleitet. Der eigentliche Transformationscode wird nicht gezeigt.

Beachten Sie, dass dieser Code Teil eines umfassenderen Beispiels ist, das unter [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
