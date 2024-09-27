---
title: RTCRtpScriptTransformer
slug: Web/API/RTCRtpScriptTransformer
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`RTCRtpScriptTransformer`**-Schnittstelle der [WebRTC API](/de/docs/Web/API/WebRTC_API) bietet eine Worker-seitige [Stream API](/de/docs/Web/API/Streams_API)-Schnittstelle, die ein [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) verwenden kann, um codierte Medien-Frames in den eingehenden und ausgehenden WebRTC-Pipelines zu modifizieren.

> [!NOTE]
> Diese Funktion ist in [_Dedicated_ Web Workers](/de/docs/Web/API/Web_Workers_API#worker_types) verfügbar.

## Instanz-Eigenschaften

- [`RTCRtpScriptTransformer.readable`](/de/docs/Web/API/RTCRtpScriptTransformer/readable) {{ReadOnlyInline}}
  - : Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), in den codierte Frames aus den WebRTC-Sender- oder Empfänger-Pipelines eingereiht werden können.
- [`RTCRtpScriptTransformer.writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) {{ReadOnlyInline}}
  - : Ein [`WritableStream`](/de/docs/Web/API/WritableStream), zu dem codierte Frames geleitet werden sollten.
- [`RTCRtpScriptTransformer.options`](/de/docs/Web/API/RTCRtpScriptTransformer/options) {{ReadOnlyInline}}
  - : Optionen, die vom [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) übergeben wurden, die zur Konfiguration des Transformationscodes verwendet werden, basierend darauf, ob eingehende oder ausgehende Frames verarbeitet werden.

## Instanz-Methoden

- [`RTCRtpScriptTransformer.generateKeyFrame()`](/de/docs/Web/API/RTCRtpScriptTransformer/generateKeyFrame)
  - : Fordert einen Video-Encoder an, ein Keyframe zu erzeugen. Kann von einem Transformer in der Sender-Pipeline aufgerufen werden, wenn ausgehende Frames verarbeitet werden.
- [`RTCRtpScriptTransformer.sendKeyFrameRequest()`](/de/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest)
  - : Fordert den Sender auf, ein Keyframe zu senden. Kann von einem Transformer in der Empfänger-Pipeline aufgerufen werden, wenn eingehende codierte Video-Frames verarbeitet werden.

## Beschreibung

Eine `RTCRtpScriptTransformer`-Instanz wird als Teil der Konstruktion eines zugehörigen [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) erstellt, das den Worker angibt, in dem der Transformer erstellt wird, sowie die Optionen, die an ihn übergeben werden.

Der Transformer wird dem Worker über die [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis-`transformer`-Eigenschaft zur Verfügung gestellt.
Dieses Ereignis wird beim Erstellen des zugehörigen [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) und wenn ein codierter Frame aus einem Codec (ausgehend) oder vom Paketierer (eingehend) auf den [`RTCRtpScriptTransformer.readable`](/de/docs/Web/API/RTCRtpScriptTransformer/readable) eingereiht wird, ausgelöst.

Der Transformer stellt dem Worker einen [`readable`](/de/docs/Web/API/RTCRtpScriptTransformer/readable) und [`writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) Stream zur Verfügung, zusammen mit einem [`options`](/de/docs/Web/API/RTCRtpScriptTransformer/options)-Objekt, das bei der Konstruktion an den [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) übergeben wird.
Wenn der zugehörige `RTCRtpScriptTransform` einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) oder [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) zugewiesen wird, werden codierte Medien-Frames aus den WebRTC-Sender- oder Empfänger-Pipelines auf den `readable`-Stream eingereiht.

Ein WebRTC Encoded Transform muss codierte Frames von `transformer.readable` lesen, sie bei Bedarf modifizieren und in der gleichen Reihenfolge ohne Duplikate auf `transformer.writable` schreiben.
Die [`transformer.options`](/de/docs/Web/API/RTCRtpScriptTransformer/options) ermöglichen es, eine geeignete Transformationsfunktion zu verwenden, basierend darauf, ob die codierten Medien-Frames eingehend oder ausgehend sind.
Die Transformation wird üblicherweise implementiert, indem Frames vom `readable` durch eine oder mehrere [`TransformStream`](/de/docs/Web/API/TransformStream)-Instanzen zur `writable` geleitet und nach Bedarf transformiert werden.

Die Schnittstelle bietet auch Methoden für einen Sender, um einen Video-Encoder zu veranlassen, ein neues Keyframe zu generieren, oder für einen Empfänger, um ein neues Keyframe vom Encoder des Senders anzufordern (Video-Encoder senden üblicherweise ein Keyframe, das alle nötigen Informationen zur Konstruktion eines Bildes enthält, und senden danach Delta-Frames, die nur die Information enthalten, die sich seit dem vorherigen Frame geändert hat).

Diese Methoden sind in Fällen erforderlich, in denen ein Empfänger die eingehenden Frames nicht dekodieren könnte, bis er ein neues Keyframe erhält.
Zum Beispiel wird ein neuer Empfänger, der einem Konferenzanruf beitritt, das Video nicht sehen können, bis er ein neues Keyframe erhalten hat, da Delta-Frames nur decodiert werden können, wenn Sie das letzte Keyframe und alle nachfolgenden Delta-Frames haben.
Ähnlich verhält es sich, wenn Frames für einen Empfänger verschlüsselt sind; Sie können die Frames nur dekodieren, sobald sie ihr erstes verschlüsseltes Keyframe erhalten haben.

## Beispiele

Dieses Beispiel zeigt den Code für einen WebRTC Encoded Transform, der in einem Worker ausgeführt wird.

Der Code verwendet `addEventListener()`, um eine Handlerfunktion für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis zu registrieren, welches den **`RTCRtpScriptTransformer`** als `event.transformer` verfügbar macht.

Der Handler erstellt einen [`TransformStream`](/de/docs/Web/API/TransformStream) und leitet Frames von `event.transformer.readable` durch ihn zu `event.transformer.writable`.
Die Implementierung der Transformations-Stream-`transform()`-Funktion wird für jeden auf der Warteschlange stehenden codierten Frame aufgerufen: Sie kann die Daten aus dem Frame lesen und negiert in diesem Fall die Bytes, bevor sie den modifizierbaren Frame wieder auf den Stream stellt.

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

Das Besondere am obigen [`TransformStream`](/de/docs/Web/API/TransformStream) ist, dass er codierte Medien-Frames ([`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) oder [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)) anstelle von beliebigen "Chunks" ortet, und dass die Eigenschaften `writableStrategy` und `readableStrategy` nicht definiert sind (weil die Strategien für das Einreihen vollständig von der Benutzeragentur verwaltet werden).

Ein Transform kann entweder in den eingehenden oder ausgehenden WebRTC-Pipelines ausgeführt werden.
Dies spielt im obigen Code keine Rolle, weil derselbe Algorithmus für den Sender verwendet werden könnte, um die Frames zu negieren, und für den Empfänger, um sie zurückzusetzen.
Wenn die Sender- und Empfänger-Pipelines unterschiedliche Transformationsalgorithmen anwenden müssen, müssen Informationen über die aktuelle Pipeline vom Hauptthread übergeben werden.
Dies geschieht durch Einstellen eines `options`-Arguments im entsprechenden [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform#options), das dann im Worker in [`RTCRtpScriptTransformer.options`](/de/docs/Web/API/RTCRtpScriptTransformer/options) verfügbar gemacht wird.

Im Folgenden verwenden wir die `transformer.options`, um entweder eine Sender-Transformation oder eine Empfänger-Transformation auszuwählen.
Beachten Sie, dass die Eigenschaften des Objekts beliebig sind (vorausgesetzt, die Werte können serialisiert werden) und es ebenfalls möglich ist, einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) zu übertragen und diesen zu verwenden, um [zur Laufzeit mit einer Transformation zu kommunizieren](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms#runtime_communication_with_the_transform), um beispielsweise Verschlüsselungsschlüssel zu teilen.

```js
// Code to instantiate transform and attach them to sender/receiver pipelines.
onrtctransform = (event) => {
  let transform;
  if (event.transformer.options.name == "senderTransform")
    transform = createSenderTransform();
  // returns a TransformStream (not shown)
  else if (event.transformer.options.name == "receiverTransform")
    transform = createReceiverTransform();
  // returns a TransformStream (not shown)
  else return;
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
};
```

Beachten Sie, dass der obige Code Teil umfassenderer Beispiele ist, die in [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
