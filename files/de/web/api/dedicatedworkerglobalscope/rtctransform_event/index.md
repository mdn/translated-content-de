---
title: "DedicatedWorkerGlobalScope: rtctransform-Ereignis"
short-title: rtctransform
slug: Web/API/DedicatedWorkerGlobalScope/rtctransform_event
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("dedicated")}}

Das **`rtctransform`**-Ereignis wird im [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt eines Workers ausgelöst, wenn ein kodiertes Video- oder Audio-Frame zur Verarbeitung durch einen [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) in die Warteschlange gestellt wurde.

Die [`transformer`](/de/docs/Web/API/RTCTransformEvent/transformer)-Eigenschaft des Ereignisses gibt einen [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) zurück, der den [`ReadableStream`](/de/docs/Web/API/ReadableStream) bereitstellt, auf dem der Frame in die Warteschlange gestellt wird, und einen [`WritableStream`](/de/docs/Web/API/WritableStream), wo der Frame geschrieben werden kann, um ihn zurück in die WebRTC-Pipeline einzuspeisen.

Dieses Ereignis ist nicht stornierbar und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("rtctransform", (event) => {});

onrtctransform = (event) => {};
```

## Ereignistyp

Ein [`RTCTransformEvent`](/de/docs/Web/API/RTCTransformEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCTransformEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Element, [`Event`](/de/docs/Web/API/Event)._

- [`RTCTransformEvent.transformer`](/de/docs/Web/API/RTCTransformEvent/transformer) {{ReadOnlyInline}}
  - : Gibt den mit dem Ereignis verknüpften [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) zurück.

## Beispiel

Der folgende Codeausschnitt zeigt einen Handler für das `rtctransform`-Ereignis im Worker, der mit `addEventListener()` zum globalen Bereich hinzugefügt wurde.
Der `event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Gegenstück auf der Worker-Seite zu [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform).

```js
addEventListener("rtctransform", (event) => {
  let transform;
  // Select a transform based on passed options
  if (event.transformer.options.name == "senderTransform")
    transform = createSenderTransform(); // A TransformStream
  else if (event.transformer.options.name == "receiverTransform")
    transform = createReceiverTransform(); // A TransformStream
  else return;

  //Pipe frames from the readable to writeable through TransformStream
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Das `rtctransform`-Ereignis wird ausgelöst, wenn ein kodierter Frame in die Warteschlange auf dem [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) gestellt wird, und nur einmal, wenn der entsprechende [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) konstruiert wird.
Der Code bestimmt zuerst, welcher Transform anzuwenden ist, indem der im Optionsparameter übergebene `name`-Wert verwendet wird (dies ermöglicht es, dass [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)-Instanzen, die zu den eingehenden und ausgehenden WebRTC-Pipelines hinzugefügt werden, einen einzelnen Worker gemeinsam nutzen).
Kodierte Frames werden dann vom lesbaren über den ausgewählten `TransformStream` in einen beschreibbaren Strom geleitet.
Der eigentliche Transformationscode wird nicht gezeigt.

Beachten Sie, dass dieser Code Teil eines umfassenderen Beispiels ist, das in [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
