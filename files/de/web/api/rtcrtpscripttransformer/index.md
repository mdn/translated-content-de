---
title: RTCRtpScriptTransformer
slug: Web/API/RTCRtpScriptTransformer
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("WebRTC")}}

Das **`RTCRtpScriptTransformer`** Interface der [WebRTC API](/de/docs/Web/API/WebRTC_API) bietet eine worker-seitige [Stream API](/de/docs/Web/API/Streams_API) Schnittstelle, die von einem [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) verwendet werden kann, um kodierte Medien-Frames in den eingehenden und ausgehenden WebRTC-Pipelines zu modifizieren.

> [!NOTE]
> Diese Funktion ist in [_dedizierten_ Web Workern](/de/docs/Web/API/Web_Workers_API#worker_types) verfügbar.

## Instanzeigenschaften

- [`RTCRtpScriptTransformer.readable`](/de/docs/Web/API/RTCRtpScriptTransformer/readable) {{ReadOnlyInline}}
  - : Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), auf dem kodierte Frames aus den WebRTC-Sender- oder -Empfänger-Pipelines eingereiht werden können.
- [`RTCRtpScriptTransformer.writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) {{ReadOnlyInline}}
  - : Ein [`WritableStream`](/de/docs/Web/API/WritableStream), auf den kodierte Frames übertragen werden sollen.
- [`RTCRtpScriptTransformer.options`](/de/docs/Web/API/RTCRtpScriptTransformer/options) {{ReadOnlyInline}}
  - : Optionen, die vom [`RTCRtpScriptTransform` constructor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) übergeben werden und verwendet werden, um den Transformationscode basierend darauf zu konfigurieren, ob eingehende oder ausgehende Frames verarbeitet werden.

## Instanzmethoden

- [`RTCRtpScriptTransformer.generateKeyFrame()`](/de/docs/Web/API/RTCRtpScriptTransformer/generateKeyFrame)
  - : Fordert einen Video-Encoder auf, ein Schlüsselbild zu erzeugen. Kann von einem Transformer in der Sender-Pipeline aufgerufen werden, wenn ausgehende Frames verarbeitet werden.
- [`RTCRtpScriptTransformer.sendKeyFrameRequest()`](/de/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest)
  - : Fordert den Sender auf, ein Schlüsselbild zu senden. Kann von einem Transformer in der Empfänger-Pipeline aufgerufen werden, wenn eingehende kodierte Videoframes verarbeitet werden.

## Beschreibung

Eine `RTCRtpScriptTransformer`-Instanz wird als Teil der Konstruktion eines zugehörigen [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) erstellt, der den Worker angibt, in dem der Transformer erstellt wird, und Optionen, die ihm übergeben werden.

Der Transformer wird einem Worker durch die [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Ereignis-`transformer`-Eigenschaft zur Verfügung gestellt. Dieses Ereignis wird bei der Konstruktion des zugehörigen [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) und wenn ein kodierter Frame aus einem Codec (ausgehend) oder vom Paketierer (eingehend) auf der [`RTCRtpScriptTransformer.readable`](/de/docs/Web/API/RTCRtpScriptTransformer/readable) eingereiht wird, ausgelöst.

Der Transformer bietet einen [`readable`](/de/docs/Web/API/RTCRtpScriptTransformer/readable) und [`writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) Stream im Worker an sowie ein [`options`](/de/docs/Web/API/RTCRtpScriptTransformer/options) Objekt, das bei der Konstruktion dem [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) übergeben wurde. Wenn das zugehörige `RTCRtpScriptTransform` einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) oder [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) zugewiesen wird, werden kodierte Medien-Frames aus den WebRTC-Sender- oder -Empfänger-Pipelines auf den `readable` Stream eingereiht.

Ein WebRTC Encoded Transform muss kodierte Frames von `transformer.readable` lesen, sie bei Bedarf modifizieren und in derselben Reihenfolge, ohne jegliche Duplikation, auf `transformer.writable` schreiben. Die [`transformer.options`](/de/docs/Web/API/RTCRtpScriptTransformer/options) erlauben die Verwendung einer geeigneten Transformationsfunktion, basierend darauf, ob die kodierten Medien-Frames eingehend oder ausgehend sind. Die Transformation wird normalerweise implementiert, indem Frames vom `readable` Stream durch eine oder mehrere [`TransformStream`](/de/docs/Web/API/TransformStream) Instanzen auf den `writable` Stream geleitet und dabei bei Bedarf transformiert werden.

Das Interface bietet auch Methoden für einen Sender, ein Video-Encoder zu veranlassen, ein neues Schlüsselbild zu erzeugen, oder für einen Empfänger, ein neues Schlüsselbild vom Encoder des Senders anzufordern (Video-Encoder senden üblicherweise ein Schlüsselbild, das die vollständige Information zum Erstellen eines Bildes enthält, und senden anschließend Delta-Frames, die nur die Informationen enthalten, die sich seit dem vorherigen Frame geändert haben).

Diese Methoden sind in Fällen erforderlich, in denen ein Empfänger nicht in der Lage wäre, eingehende Frames zu dekodieren, bis sie ein neues Schlüsselbild erhalten. Zum Beispiel wird ein neuer Teilnehmer an einem Konferenzgespräch das Video nicht sehen können, bis er ein neues Schlüsselbild erhalten hat, da Delta-Frames nur dekodiert werden können, wenn das letzte Schlüsselbild und alle nachfolgenden Delta-Frames vorhanden sind. Ähnlich ist es, wenn Frames für einen Empfänger verschlüsselt sind, werden sie die Frames erst dekodieren können, sobald sie ihr erstes verschlüsseltes Schlüsselbild erhalten haben.

## Beispiele

Dieses Beispiel zeigt den Code für einen WebRTC Encoded Transform, der in einem Worker läuft.

Der Code verwendet `addEventListener()`, um eine Handlerfunktion für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Ereignis zu registrieren, welches das **`RTCRtpScriptTransformer`** als `event.transformer` verfügbar macht.

Der Handler erstellt einen [`TransformStream`](/de/docs/Web/API/TransformStream) und leitet Frames vom `event.transformer.readable` durch ihn auf `event.transformer.writable`. Die `transform()` Implementierung des Transform-Streams wird für jedes kodierte Frame aufgerufen, das in die Warteschlange des Streams gesetzt wird: sie kann die Daten vom Frame lesen und in diesem Fall die Bytes negieren und dann das modifizierbare Frame in die Warteschlange des Streams einreihen.

```js
addEventListener("rtctransform", (event) => {
  const transform = new TransformStream({
    start() {}, // Called on startup.
    flush() {}, // Called when the stream is about to be closed.
    async transform(encodedFrame, controller) {
      // Reconstruct the original frame.
      const view = new DataView(encodedFrame.data);

      // Construct a new buffer
      const newData = new ArrayBuffer(encodedFrame.data.byteLength);
      const newView = new DataView(newData);

      // Negate all bits in the incoming frame
      for (let i = 0; i < encodedFrame.data.byteLength; ++i) {
        newView.setInt8(i, ~view.getInt8(i));
      }

      encodedFrame.data = newData;
      controller.enqueue(encodedFrame);
    },
  });
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Besonderheiten des oben genannten [`TransformStream`](/de/docs/Web/API/TransformStream) ist, dass er kodierte Medien-Frames ([`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) oder [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)) anstelle von beliebigen "Chunks" in die Warteschlange setzt und dass die `writableStrategy`- und `readableStrategy`-Eigenschaften nicht definiert sind (da die Einreihestrategie vollständig vom Nutzeragenten verwaltet wird).

Eine Transformation kann entweder in den eingehenden oder ausgehenden WebRTC-Pipelines ausgeführt werden. Dies spielt bei dem obigen Code keine Rolle, da derselbe Algorithmus sowohl im Sender verwendet werden kann, um die Frames zu negieren, als auch im Empfänger, um sie zurückzusetzen. Wenn die Sender- und Empfänger-Pipelines einen anderen Transformationsalgorithmus anwenden müssen, müssen Informationen über die aktuelle Pipeline vom Haupt-Thread übergeben werden. Dies geschieht durch Festlegen eines `options`-Arguments im entsprechenden [`RTCRtpScriptTransform` constructor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform#options), welches dann im Worker in [`RTCRtpScriptTransformer.options`](/de/docs/Web/API/RTCRtpScriptTransformer/options) verfügbar gemacht wird.

Unten verwenden wir die `transformer.options`, um entweder eine Sendertransformation oder eine Empfängertransformation auszuwählen. Beachten Sie, dass die Eigenschaften des Objekts beliebig sind (vorausgesetzt, die Werte können serialisiert werden) und es auch möglich ist, einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) zu übertragen und ihn zu verwenden, um [zur Laufzeit mit einer Transformation zu kommunizieren](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms#runtime_communication_with_the_transform), um beispielsweise Verschlüsselungsschlüssel zu teilen.

```js
// Code to instantiate transform and attach them to sender/receiver pipelines.
onrtctransform = (event) => {
  let transform;
  if (event.transformer.options.name === "senderTransform")
    transform = createSenderTransform();
  // returns a TransformStream (not shown)
  else if (event.transformer.options.name === "receiverTransform")
    transform = createReceiverTransform();
  // returns a TransformStream (not shown)
  else return;
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
};
```

Beachten Sie, dass der obige Code Teil von umfassenderen Beispielen ist, die in [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
