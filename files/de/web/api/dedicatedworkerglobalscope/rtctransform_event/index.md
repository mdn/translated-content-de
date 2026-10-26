---
title: "DedicatedWorkerGlobalScope: rtctransform-Ereignis"
short-title: rtctransform
slug: Web/API/DedicatedWorkerGlobalScope/rtctransform_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("dedicated")}}

Das **`rtctransform`**-Ereignis wird am [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt eines Workers ausgelöst, wenn ein codierter Video- oder Audioframe zur Verarbeitung durch eine [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) in die Warteschlange gestellt wurde.

Die [`transformer`](/de/docs/Web/API/RTCTransformEvent/transformer)-Eigenschaft des Ereignisses gibt einen [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) zurück. Dieser stellt den [`ReadableStream`](/de/docs/Web/API/ReadableStream) bereit, in dessen Warteschlange sich der Frame befindet, sowie einen [`WritableStream`](/de/docs/Web/API/WritableStream), in den der Frame geschrieben werden kann, um ihn wieder in die WebRTC-Verarbeitungskette einzuspeisen.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("rtctransform", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onrtctransform = (event) => { }
```

## Ereignistyp

Ein [`RTCTransformEvent`](/de/docs/Web/API/RTCTransformEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCTransformEvent")}}

## Beispiel

Der folgende Codeausschnitt zeigt einen Handler für das `rtctransform`-Ereignis im Worker, der mit `addEventListener()` zum globalen Gültigkeitsbereich hinzugefügt wird.
`event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Gegenstück zu [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) auf Worker-Seite.

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

Das `rtctransform`-Ereignis wird ausgelöst, wenn ein codierter Frame beim [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) in die Warteschlange gestellt wird, und zwar nur einmal, wenn der zum Transformer gehörende [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) erstellt wird.
Der Code bestimmt zunächst anhand des in den Optionen übergebenen Werts `name`, welche Transformation angewendet werden soll. Dadurch können [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)-Instanzen, die zur eingehenden und ausgehenden WebRTC-Verarbeitungskette hinzugefügt wurden, denselben Worker verwenden.
Anschließend werden die codierten Frames vom lesbaren Stream durch den ausgewählten [`TransformStream`](/de/docs/Web/API/TransformStream) zum beschreibbaren Stream geleitet.
Der eigentliche Transformationscode wird nicht gezeigt.

Beachten Sie, dass dieser Code Teil eines ausführlicheren Beispiels unter [WebRTC Encoded Transforms verwenden](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC Encoded Transforms verwenden](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
