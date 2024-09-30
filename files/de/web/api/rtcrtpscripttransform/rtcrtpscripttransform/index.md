---
title: "RTCRtpScriptTransform: RTCRtpScriptTransform() Konstruktor"
short-title: RTCRtpScriptTransform()
slug: Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform
l10n:
  sourceCommit: 4799bed9382147f0b0ff642a130a1c12ed59a28e
---

{{APIRef("WebRTC")}}

Der **`RTCRtpScriptTransform()`** Konstruktor erstellt ein neues [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)-Objekt.

Die Konstruktion des `RTCRtpScriptTransform` erzeugt einen entsprechenden [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) im angegebenen Worker, zusammen mit übergebenen Optionen (falls vorhanden). Objekte im dritten Parameter des Konstruktors werden übertragen.

Das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis wird dann im globalen Worker-Objekt ausgelöst. Der Worker-Code kann die `event.transformer`-Eigenschaft verwenden, um den entsprechenden [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) zu erhalten, und `event.transformer.options` wird verwendet, um die Optionen zu erhalten.

Beachten Sie, dass die Optionen hauptsächlich verwendet werden, um den Worker darüber zu informieren, ob der Transformer eingehende oder ausgehende Frames verarbeitet, damit eine geeignete Transformation angewendet werden kann.

## Syntax

```js-nolint
new RTCRtpScriptTransform(worker)
new RTCRtpScriptTransform(worker, options)
new RTCRtpScriptTransform(worker, options, transfer)
```

### Parameter

- `worker`
  - : Ein [`Worker`](/de/docs/Web/API/Worker), der Code für einen oder mehrere WebRTC-Transformations-Streams definiert.
- `options` {{optional_inline}}
  - : Ein beliebiges Objekt, das im Worker verfügbar gemacht wird.
    Dies wird meistens verwendet, um den Worker darüber zu informieren, ob er in die WebRTC-Sender- oder Empfänger-Pipeline eingefügt wurde und daher, welche Transformation angewendet werden sollte. 
    Es kann jedoch auch verwendet werden, um jedes andere Objekt zu senden, wie z. B. einen [`MessagePort`](/de/docs/Web/API/MessagePort) zur dynamischen Kommunikation mit dem Transformer.
- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die an den Worker übertragen werden.
    Nach der Übertragung sind diese Objekte im Haupt-Thread nicht mehr verwendbar.

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Objekt in `transfer` nicht übertragen werden kann.

## Beispiele

Das erste Beispiel unten zeigt die Konstruktion eines [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform), das dann einem [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) zugewiesen wird.
Der Konstruktor nimmt ein optionales Objekt mit der Eigenschaft `name` und `senderTransform`.
Der Worker kann diese Option verwenden, um zu verstehen, wann er codierte Frames vom Encoder transformiert (anstatt eingehende Frames vom Paketierer).

```js
// Create a worker containing a TransformStream
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Jeder Eigenschaftenname und -wert kann in den Optionen verwendet werden, solange sie serialisierbar sind (und [übertragen](/de/docs/Web/API/Web_Workers_API/Transferable_objects), wenn im letzten Konstruktorparameter spezifiziert).
Der unten stehende Code überträgt den zweiten Port eines [`MessageChannel`](/de/docs/Web/API/MessageChannel) an den Worker, was wir tun könnten, um den Transformationscode dynamisch mit (zum Beispiel) einem neuen Verschlüsselungsschlüssel zu aktualisieren.

```js
// Create a worker containing a TransformStream
const worker = new Worker("worker.js");
const channel = new MessageChannel();

const transform = new RTCRtpScriptTransform(
  worker,
  { purpose: "encrypt", port: channel.port2 },
  [channel.port2],
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)
- [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)
