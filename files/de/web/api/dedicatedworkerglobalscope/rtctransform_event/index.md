---
title: "DedicatedWorkerGlobalScope: rtctransform-Ereignis"
short-title: rtctransform
slug: Web/API/DedicatedWorkerGlobalScope/rtctransform_event
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("dedicated")}}

Das **`rtctransform`**-Ereignis wird am [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt eines Workers ausgelöst, wenn ein kodierter Video- oder Audio-Frame zur Verarbeitung durch einen [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) eingereiht wurde.

Die [`transformer`](/de/docs/Web/API/RTCTransformEvent/transformer)-Eigenschaft des Ereignisses gibt einen [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) zurück, der den [`ReadableStream`](/de/docs/Web/API/ReadableStream) bereitstellt, auf dem der Frame eingereiht ist, und einen [`WritableStream`](/de/docs/Web/API/WritableStream), auf den der Frame geschrieben werden kann, um ihn zurück in die WebRTC-Pipeline zu injizieren.

Dieses Ereignis kann nicht abgebrochen werden und propagiert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("rtctransform", (event) => {});

onrtctransform = (event) => {};
```

## Ereignistyp

Ein [`RTCTransformEvent`](/de/docs/Web/API/RTCTransformEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCTransformEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`RTCTransformEvent.transformer`](/de/docs/Web/API/RTCTransformEvent/transformer) {{ReadOnlyInline}}
  - : Gibt den [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) zurück, der mit dem Ereignis verknüpft ist.

## Beispiel

Das folgende Codebeispiel zeigt einen Handler für das `rtctransform`-Ereignis im Worker, hinzugefügt zum globalen Geltungsbereich mit `addEventListener()`.
Das `event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Gegenstück auf der Workerseite zum [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform).

```js
addEventListener("rtctransform", (event) => {
  let transform;
  // Select a transform based on passed options
  if (event.transformer.options.name == "senderTransform")
    transform = createSenderTransform(); // A TransformStream
  else if (event.transformer.options.name == "receiverTransform")
    transform = createReceiverTransform(); // A TransformStream
  else return;

  // Pipe frames from the readable to writeable through TransformStream
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Das `rtctransform`-Ereignis wird ausgelöst, wenn ein kodierter Frame auf dem [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) eingereiht wird und nur einmal, wenn der dem Transformer entsprechende [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) erstellt wird.
Der Code bestimmt zunächst, welche Transformation angewandt werden soll, indem der `name`-Wert in den Optionen verwendet wird (dies ermöglicht es, dass [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)-Instanzen, die zu den ein- und ausgehenden WebRTC-Pipelines hinzugefügt werden, einen einzelnen Worker gemeinsam nutzen).
Kodierte Frames werden dann von dem lesbaren Stream über den ausgewählten [`TransformStream`](/de/docs/Web/API/TransformStream) transformiert und anschließend in einen schreibbaren Stream geleitet.
Der tatsächliche Transformationscode wird nicht gezeigt.

Beachten Sie, dass dieser Code Teil eines umfassenderen Beispiels ist, das in [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
