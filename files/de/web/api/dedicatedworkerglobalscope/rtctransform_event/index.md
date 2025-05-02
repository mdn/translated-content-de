---
title: "DedicatedWorkerGlobalScope: rtctransform-Ereignis"
short-title: rtctransform
slug: Web/API/DedicatedWorkerGlobalScope/rtctransform_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("dedicated")}}

Das **`rtctransform`**-Ereignis wird am [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt eines Workers ausgelöst, wenn ein kodiertes Video- oder Audio-Frame zur Verarbeitung durch einen [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt wurde.

Die [`transformer`](/de/docs/Web/API/RTCTransformEvent/transformer)-Eigenschaft des Ereignisses gibt einen [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) zurück, der den [`ReadableStream`](/de/docs/Web/API/ReadableStream) bereitstellt, auf dem das Frame in die Queue gestellt wird, sowie einen [`WritableStream`](/de/docs/Web/API/WritableStream), auf den das Frame geschrieben werden kann, um es wieder in die WebRTC-Pipeline zu injizieren.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignisbehandlereigenschaft fest.

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
  - : Gibt den [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) zurück, der mit dem Ereignis verknüpft ist.

## Beispiel

Der folgende Codeausschnitt zeigt einen Handler für das `rtctransform`-Ereignis im Worker, der mithilfe von `addEventListener()` zum globalen Scope hinzugefügt wurde.
Das `event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Gegenstück auf der Worker-Seite zu [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform).

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

Das `rtctransform`-Ereignis wird ausgelöst, wenn ein kodiertes Frame in die Queue des [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) eingestellt wird, und nur einmal, wenn der entsprechende [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) konstruiert wird.
Der Code ermittelt zunächst, welche Transformation angewendet werden soll, basierend auf dem `name`-Wert, der in den Optionen übergeben wird (dies ermöglicht, dass [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)-Instanzen, die zu den eingehenden und ausgehenden WebRTC-Pipelines hinzugefügt wurden, einen einzigen Worker teilen).
Kodierte Frames werden dann von dem lesbaren Stream, durch den ausgewählten Transformations-[`TransformStream`](/de/docs/Web/API/TransformStream), zu einem beschreibbaren Stream geleitet.
Der eigentliche Transformationscode wird nicht gezeigt.

Beachten Sie, dass dieser Code Teil eines umfassenderen Beispiels ist, das in [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
