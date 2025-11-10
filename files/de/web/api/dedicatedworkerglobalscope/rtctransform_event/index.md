---
title: "DedicatedWorkerGlobalScope: rtctransform-Ereignis"
short-title: rtctransform
slug: Web/API/DedicatedWorkerGlobalScope/rtctransform_event
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("dedicated")}}

Das **`rtctransform`**-Ereignis wird in einem Worker-Objekt des [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) ausgelöst, wenn ein kodierter Video- oder Audio-Frame zur Verarbeitung durch ein [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt wird.

Die [`transformer`](/de/docs/Web/API/RTCTransformEvent/transformer)-Eigenschaft des Ereignisses gibt einen [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) zurück, der den [`ReadableStream`](/de/docs/Web/API/ReadableStream) bereitstellt, auf dem der Frame platziert wird, und einen [`WritableStream`](/de/docs/Web/API/WritableStream), wo der Frame geschrieben werden kann, um ihn wieder in die WebRTC-Pipeline einzuspeisen.

Dieses Ereignis ist nicht abbrechbar und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("rtctransform", (event) => { })

onrtctransform = (event) => { }
```

## Ereignistyp

Ein [`RTCTransformEvent`](/de/docs/Web/API/RTCTransformEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCTransformEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`RTCTransformEvent.transformer`](/de/docs/Web/API/RTCTransformEvent/transformer) {{ReadOnlyInline}}
  - : Gibt den [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) zurück, der mit dem Ereignis verbunden ist.

## Beispiel

Der folgende Codeausschnitt zeigt einen Handler für das `rtctransform`-Ereignis im Worker, der dem globalen Geltungsbereich mit `addEventListener()` hinzugefügt wurde.
Der `event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Gegenstück des Workers zu [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform).

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

Das `rtctransform`-Ereignis wird ausgelöst, wenn ein kodierter Frame in der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) eingereiht wird, und nur einmal, wenn der entsprechende [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) des Transformers konstruiert wird.
Der Code bestimmt zuerst, welche Transformation angewendet werden soll, indem er den `name`-Wert verwendet, der in den Optionen übergeben wird (dies ermöglicht, dass [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)-Instanzen, die den eingehenden und ausgehenden WebRTC-Pipelines hinzugefügt wurden, einen einzigen Worker teilen).
Kodierte Frames werden dann vom lesbaren `ReadableStream` über den ausgewählten [`TransformStream`](/de/docs/Web/API/TransformStream) zu einem beschreibbaren Strom weitergeleitet.
Der eigentliche Transformationscode wird nicht gezeigt.

Beachten Sie, dass dieser Code Teil eines umfassenderen Beispiels ist, das in [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
