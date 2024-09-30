---
title: "DedicatedWorkerGlobalScope: rtctransform-Ereignis"
short-title: rtctransform
slug: Web/API/DedicatedWorkerGlobalScope/rtctransform_event
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("dedicated")}}

Das **`rtctransform`**-Ereignis wird bei einem [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt eines Workers ausgelöst, wenn ein kodierter Video- oder Audio-Frame zur Verarbeitung durch einen [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) in die Warteschlange gestellt wurde.

Die [`transformer`](/de/docs/Web/API/RTCTransformEvent/transformer)-Eigenschaft des Ereignisses gibt einen [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) zurück, der den [`ReadableStream`](/de/docs/Web/API/ReadableStream) bereitstellt, auf dem der Frame in die Warteschlange gestellt ist, und einen [`WritableStream`](/de/docs/Web/API/WritableStream), wohin der Frame geschrieben werden kann, um ihn wieder in die WebRTC-Pipeline einzuschleusen.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Blasenbildung aus.

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

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`RTCTransformEvent.transformer`](/de/docs/Web/API/RTCTransformEvent/transformer) {{ReadOnlyInline}}
  - : Gibt den mit dem Ereignis assoziierten [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) zurück.

## Beispiel

Der folgende Codeausschnitt zeigt einen Handler für das `rtctransform`-Ereignis im Worker, der dem globalen Scope mittels `addEventListener()` hinzugefügt wird.
Der `event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Gegenstück auf der Workerseite zu [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform).

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

Das `rtctransform`-Ereignis wird ausgelöst, wenn ein kodierter Frame in die Warteschlange des [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) gestellt wird und genau einmal, wenn der entsprechende [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) erstellt wird. Der Code bestimmt zunächst, welcher Transform angewendet werden soll, basierend auf dem im Optionsparameter übergebenen `name`-Wert (dies ermöglicht es, dass [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)-Instanzen, die den eingehenden und ausgehenden WebRTC-Pipelines hinzugefügt werden, einen einzelnen Worker gemeinsam nutzen). Kodierte Frames werden dann vom Readable-Stream durch den ausgewählten Transform-[`TransformStream`](/de/docs/Web/API/TransformStream) zu einem Writable-Stream geleitet. Der tatsächliche Transform-Code wird nicht gezeigt.

Beachten Sie, dass dieser Code Teil eines umfassenderen Beispiels ist, das in [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
