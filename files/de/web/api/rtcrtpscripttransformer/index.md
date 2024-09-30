---
title: RTCRtpScriptTransformer
slug: Web/API/RTCRtpScriptTransformer
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Das **`RTCRtpScriptTransformer`**-Interface der [WebRTC API](/de/docs/Web/API/WebRTC_API) bietet eine Worker-seitige [Stream API](/de/docs/Web/API/Streams_API) Schnittstelle, die ein [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) verwenden kann, um kodierte Medienrahmen in den eingehenden und ausgehenden WebRTC-Pipelines zu modifizieren.

> [!NOTE]
> Diese Funktion ist in [_Dedicated_ Web Workers](/de/docs/Web/API/Web_Workers_API#worker_types) verfügbar.

## Instanz-Eigenschaften

- [`RTCRtpScriptTransformer.readable`](/de/docs/Web/API/RTCRtpScriptTransformer/readable) {{ReadOnlyInline}}
  - : Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), auf dem kodierte Rahmen aus den WebRTC-Sender- oder -Empfängerpipelines eingereiht werden können.
- [`RTCRtpScriptTransformer.writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) {{ReadOnlyInline}}
  - : Ein [`WritableStream`](/de/docs/Web/API/WritableStream), dem kodierte Rahmen zugeführt werden sollen.
- [`RTCRtpScriptTransformer.options`](/de/docs/Web/API/RTCRtpScriptTransformer/options) {{ReadOnlyInline}}
  - : Optionen, die vom [`RTCRtpScriptTransform` Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) übergeben werden, um den Transformationscode basierend darauf zu konfigurieren, ob eingehende oder ausgehende Rahmen verarbeitet werden.

## Instanz-Methoden

- [`RTCRtpScriptTransformer.generateKeyFrame()`](/de/docs/Web/API/RTCRtpScriptTransformer/generateKeyFrame)
  - : Fordert an, dass ein Video-Encoder einen Schlüsselrahmen generiert. Kann von einem Transformator in der Sender-Pipeline aufgerufen werden, wenn ausgehende Rahmen verarbeitet werden.
- [`RTCRtpScriptTransformer.sendKeyFrameRequest()`](/de/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest)
  - : Fordert an, dass der Sender einen Schlüsselrahmen sendet. Kann von einem Transformator in der Empfänger-Pipeline aufgerufen werden, wenn eingehende kodierte Videorahmen verarbeitet werden.

## Beschreibung

Eine `RTCRtpScriptTransformer`-Instanz wird als Teil der Konstruktion eines zugehörigen [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) erstellt, das den Worker bestimmt, in dem der Transformator erstellt wird, und die Optionen, die an ihn übergeben werden.

Der Transformator wird einem Worker durch das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis `transformer`-Eigenschaft zur Verfügung gestellt.
Dieses Ereignis wird bei der Konstruktion des zugehörigen [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) ausgelöst und wenn ein kodierter Rahmen von einem Codec (ausgehend) oder vom Paketierer (eingehend) auf dem [`RTCRtpScriptTransformer.readable`](/de/docs/Web/API/RTCRtpScriptTransformer/readable) eingereiht wird.

Der Transformator stellt dem Worker einen [`readable`](/de/docs/Web/API/RTCRtpScriptTransformer/readable) und einen [`writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) Stream sowie ein [`options`](/de/docs/Web/API/RTCRtpScriptTransformer/options) Objekt zur Verfügung, das bei der Konstruktion an das [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) übergeben wurde.
Wenn das zugehörige `RTCRtpScriptTransform` einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) oder [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) zugewiesen wird, werden kodierte Medienrahmen aus den WebRTC-Sender- oder -Empfängerpipelines auf dem `readable` Stream eingereiht.

Ein WebRTC Encoded Transform muss kodierte Rahmen von `transformer.readable` lesen, sie nach Bedarf modifizieren und sie in derselben Reihenfolge und ohne Duplikation auf `transformer.writable` zurückschreiben.
Die [`transformer.options`](/de/docs/Web/API/RTCRtpScriptTransformer/options) ermöglichen die Verwendung einer geeigneten Transformationsfunktion, basierend darauf, ob die kodierten Medienrahmen eingehend oder ausgehend sind.
Die Transformation wird üblicherweise implementiert, indem Rahmen vom `readable` durch eine oder mehrere [`TransformStream`](/de/docs/Web/API/TransformStream)-Instanzen an den `writable` geleitet und nach Bedarf transformiert werden.

Das Interface bietet auch Methoden für einen Sender, um einen Video-Encoder anzuweisen, einen neuen Schlüsselrahmen zu generieren, oder für einen Empfänger, um einen neuen Schlüsselrahmen vom Encoder des Senders anzufordern (Video-Encoder senden häufig einen Schlüsselrahmen, der alle notwendigen Informationen zur Konstruktion eines Bildes enthält, und senden anschließend Delta-Rahmen, die nur die Informationen enthalten, die sich seit dem vorherigen Rahmen geändert haben).

Diese Methoden sind erforderlich, wenn ein Empfänger die eingehenden Rahmen nicht dekodieren könnte, bis er einen neuen Schlüsselrahmen erhält.
Zum Beispiel wird ein neuer Teilnehmer eines Konferenzgesprächs das Video nicht sehen können, bis er einen neuen Schlüsselrahmen erhalten hat, da Delta-Rahmen nur dekodiert werden können, wenn man den letzten Schlüsselrahmen und alle darauf folgenden Delta-Rahmen hat.
Ähnlich wird ein Empfänger, wenn Rahmen für ihn verschlüsselt sind, die Rahmen erst dekodieren können, wenn er seinen ersten verschlüsselten Schlüsselrahmen erhalten hat.

## Beispiele

Dieses Beispiel zeigt den Code für eine WebRTC Encoded Transform, die in einem Worker läuft.

Der Code verwendet `addEventListener()`, um eine Handler-Funktion für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis zu registrieren, das den **`RTCRtpScriptTransformer`** als `event.transformer` verfügbar macht.

Der Handler erstellt einen [`TransformStream`](/de/docs/Web/API/TransformStream) und leitet die Rahmen von `event.transformer.readable` durch ihn zu `event.transformer.writable`.
Die Implementierung des `transform()` in diesem Transform-Stream wird für jeden kodierten Rahmen aufgerufen, der in die Warteschlange des Streams gestellt wird: Sie kann die Daten aus dem Rahmen lesen und in diesem Fall die Bytes negieren und den modifizierbaren Rahmen in die Warteschlange des Streams einreihen.

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

Die einzigen besonderen Aspekte des oben erwähnten [`TransformStream`](/de/docs/Web/API/TransformStream) sind, dass er kodierte Medienrahmen ([`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) oder [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)) anstelle von beliebigen "Chunks" einreiht, und dass `writableStrategy` und `readableStrategy` Eigenschaften nicht definiert sind (weil die Einreihungsstrategie vollständig vom Benutzer-Agent verwaltet wird).

Eine Transformation kann entweder in den eingehenden oder ausgehenden WebRTC-Pipelines laufen.
Dies spielt im obigen Code keine Rolle, da der gleiche Algorithmus im Sender verwendet werden könnte, um die Rahmen zu negieren, und im Empfänger, um sie wiederherzustellen.
Wenn die Sender- und Empfängerpipelines einen anderen Transformationsalgorithmus anwenden müssen, muss die Information über die aktuelle Pipeline vom Hauptthread übergeben werden.
Dies geschieht durch Setzen eines `options`-Arguments im entsprechenden [`RTCRtpScriptTransform` Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform#options), das dann im Worker in [`RTCRtpScriptTransformer.options`](/de/docs/Web/API/RTCRtpScriptTransformer/options) verfügbar gemacht wird.

Unten verwenden wir die `transformer.options`, um entweder eine Sender- oder Empfängertransformation auszuwählen.
Beachten Sie, dass die Eigenschaften des Objekts beliebig sind (solange die Werte serialisiert werden können), und dass es auch möglich ist, ein [`MessageChannel`](/de/docs/Web/API/MessageChannel) zu übertragen und es zu verwenden, um [zur Laufzeit mit einer Transformation zu kommunizieren](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms#runtime_communication_with_the_transform), um beispielsweise Verschlüsselungsschlüssel zu teilen.

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

Beachten Sie, dass der obige Code Teil komplexerer Beispiele ist, die in [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
