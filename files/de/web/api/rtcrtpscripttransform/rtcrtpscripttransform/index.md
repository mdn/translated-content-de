---
title: "RTCRtpScriptTransform: RTCRtpScriptTransform()-Konstruktor"
short-title: RTCRtpScriptTransform()
slug: Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform
l10n:
  sourceCommit: 4799bed9382147f0b0ff642a130a1c12ed59a28e
---

{{APIRef("WebRTC")}}

Der **`RTCRtpScriptTransform()`**-Konstruktor erstellt ein neues {{domxref("RTCRtpScriptTransform")}}-Objekt.

Durch die Konstruktion des `RTCRtpScriptTransform` wird ein entsprechender {{domxref("RTCRtpScriptTransformer")}} im angegebenen Worker erstellt, zusammen mit übergebenen Optionen (falls vorhanden). Objekte im dritten Parameter des Konstruktors werden übertragen.

Das {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}}-Ereignis wird dann im globalen Worker-Objekt ausgelöst.
Der Worker-Code kann die Eigenschaft `event.transformer` verwenden, um den entsprechenden {{domxref("RTCRtpScriptTransformer")}} zu erhalten, und `event.transformer.options` wird verwendet, um die Optionen abzurufen.

Beachten Sie, dass die Optionen hauptsächlich dazu verwendet werden, den Worker darüber zu informieren, ob der Transformer eingehende oder ausgehende Frames verarbeitet, sodass eine entsprechende Transformation angewendet werden kann.

## Syntax

```js-nolint
new RTCRtpScriptTransform(worker)
new RTCRtpScriptTransform(worker, options)
new RTCRtpScriptTransform(worker, options, transfer)
```

### Parameter

- `worker`
  - : Ein {{domxref("Worker")}}, der den Code für einen oder mehrere WebRTC-Transform-Streams definiert.
- `options` {{optional_inline}}
  - : Ein beliebiges Objekt, das im Worker verfügbar gemacht wird.
    Dies wird am häufigsten verwendet, um den Worker darüber zu informieren, ob er in die WebRTC-Sender- oder -Empfängerpipeline eingebettet ist und daher welche Transformation angewendet werden soll.
    Es kann jedoch auch verwendet werden, um jedes andere Objekt zu senden, wie z. B. ein {{domxref("MessagePort")}}, um dynamisch mit dem Transformer zu kommunizieren.
- `transfer` {{optional_inline}}
  - : Ein optionales [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die an den Worker übertragen werden.
    Nach der Übertragung sind diese Objekte im Hauptthread nicht mehr verwendbar.

### Ausnahmen

- `DataCloneError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein Objekt in `transfer` nicht übertragen werden kann.

## Beispiele

Das erste Beispiel unten zeigt die Konstruktion eines {{domxref("RTCRtpScriptTransform")}}, das dann einem {{domxref("RTCRtpSender.transform")}} zugewiesen wird.
Der Konstruktor nimmt ein optionales Objekt mit den Eigenschaften `name` und `senderTransform`.
Der Worker kann diese Option verwenden, um zu verstehen, wann er codierte Frames vom Encoder (anstatt eingehende Frames vom Packetizer) transformiert.

```js
// Erstellen eines Workers, der einen TransformStream enthält
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Jeder Eigenschaftsname und -wert kann in den Optionen verwendet werden, solange sie serialisierbar sind (und [übertragen](/de/docs/Web/API/Web_Workers_API/Transferable_objects), wenn im letzten Konstruktorparameter angegeben).
Der folgende Code überträgt den zweiten Port eines {{domxref("MessageChannel")}} an den Worker, was wir möglicherweise tun, um den Transformationscode dynamisch mit (beispielsweise) einem neuen Verschlüsselungsschlüssel zu aktualisieren.

```js
// Erstellen eines Workers, der einen TransformStream enthält
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

- [Verwendung von WebRTC-Encoded-Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- {{domxref("RTCRtpSender.transform")}}
- {{domxref("RTCRtpReceiver.transform")}}
