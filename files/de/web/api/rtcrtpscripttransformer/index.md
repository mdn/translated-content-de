---
title: RTCRtpScriptTransformer
slug: Web/API/RTCRtpScriptTransformer
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`RTCRtpScriptTransformer`**-Schnittstelle der [WebRTC API](/de/docs/Web/API/WebRTC_API) bietet eine Worker-seitige [Stream-API](/de/docs/Web/API/Streams_API)-Schnittstelle, die ein [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) verwenden kann, um kodierte Medienrahmen in den eingehenden und ausgehenden WebRTC-Pipelines zu modifizieren.

> [!NOTE]
> Diese Funktion ist in [_Dedizierten_ Web Workers](/de/docs/Web/API/Web_Workers_API#worker_types) verfügbar.

## Instanz-Eigenschaften

- {{domxref("RTCRtpScriptTransformer.readable")}} {{ReadOnlyInline}}
  - : Ein {{domxref("ReadableStream")}}, auf dem kodierte Rahmen aus den WebRTC-Sender- oder Empfängerpipelines eingereiht werden können.
- {{domxref("RTCRtpScriptTransformer.writable")}} {{ReadOnlyInline}}
  - : Ein {{domxref("WritableStream")}}, an den kodierte Rahmen weitergeleitet werden sollten.
- {{domxref("RTCRtpScriptTransformer.options")}} {{ReadOnlyInline}}
  - : Optionen, die vom [`RTCRtpScriptTransform` Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) übergeben werden, welche zur Konfiguration von Transformationscode basierend darauf verwendet werden, ob eingehende oder ausgehende Rahmen verarbeitet werden.

## Instanz-Methoden

- {{domxref("RTCRtpScriptTransformer.generateKeyFrame()")}}
  - : Fordert einen Video-Encoder an, einen Schlüsselbild zu erzeugen. Kann von einem Transformator in der Sender-Pipeline aufgerufen werden, wenn ausgehende Rahmen verarbeitet werden.
- {{domxref("RTCRtpScriptTransformer.sendKeyFrameRequest()")}}
  - : Fordert den Sender auf, ein Schlüsselbild zu senden. Kann von einem Transformator in der Empfänger-Pipeline aufgerufen werden, wenn eingehende kodierte Videorahmen verarbeitet werden.

## Beschreibung

Eine Instanz von `RTCRtpScriptTransformer` wird als Teil des Baus eines zugehörigen {{DOMxRef("RTCRtpScriptTransform")}} erstellt, das den Worker spezifiziert, in dem der Transformator erstellt wird, sowie die Übertragungsoptionen zu ihm.

Der Transformator wird einem Worker durch das {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}} Ereignis `transformer`-Eigenschaft zur Verfügung gestellt.
Dieses Ereignis wird beim Aufbau des zugehörigen {{DOMxRef("RTCRtpScriptTransform")}} und wenn ein kodierter Rahmen auf dem {{domxref("RTCRtpScriptTransformer.readable")}} von einem Codec (ausgehend) oder von dem Paketierer (eingehend) eingereiht wird, ausgelöst.

Der Transformator stellt einen {{domxref("RTCRtpScriptTransformer.readable","readable")}} und {{domxref("RTCRtpScriptTransformer.writable","writable")}} Stream in den Worker sowie ein {{domxref("RTCRtpScriptTransformer.options", "options")}}-Objekt, das dem {{DOMxRef("RTCRtpScriptTransform")}} beim Aufbau bereitgestellt wird, zur Verfügung.
Wenn das zugehörige `RTCRtpScriptTransform` einem {{DOMxRef("RTCRtpSender")}} oder {{DOMxRef("RTCRtpReceiver")}} zugewiesen ist, werden kodierte Medienrahmen aus den WebRTC-Sender- oder Empfängerpipelines auf den `readable` Stream eingereiht.

Ein WebRTC Encoded Transform muss kodierte Rahmen von `transformer.readable` lesen, sie nach Bedarf modifizieren und sie in der gleichen Reihenfolge, ohne Duplikate, auf `transformer.writable` schreiben.
Die {{domxref("RTCRtpScriptTransformer.options","transformer.options")}} ermöglichen die Verwendung einer geeigneten Transformationsfunktion, basierend darauf, ob die kodierten Medienrahmen eingehend oder ausgehend sind.
Der Transformationsprozess wird normalerweise durch das Piping von Rahmen vom `readable` durch eine oder mehrere {{DOMxRef("TransformStream")}} Instanzen zum `writable` implementiert, wobei sie nach Bedarf transformiert werden.

Die Schnittstelle bietet auch Methoden für einen Sender, einen Video-Encoder zu veranlassen, ein neues Schlüsselbild zu erzeugen, oder für einen Empfänger, ein neues Schlüsselbild vom Encoder des Senders anzufordern (Video-Encoder senden normalerweise ein Schlüsselbild mit allen Informationen zur Konstruktion eines Bildes und senden anschließend Delta-Rahmen mit nur den Informationen, die seit dem vorherigen Rahmen verändert wurden).

Diese Methoden werden in Fällen benötigt, in denen ein Empfänger die eintreffenden Rahmen nicht dekodieren kann, bis er ein neues Schlüsselbild erhält.
Beispielsweise kann ein neuer Empfänger, der einem Konferenzgespräch beitritt, kein Video sehen, bis er ein neues Schlüsselbild erhalten hat, da Delta-Rahmen nur dekodiert werden können, wenn das letzte Schlüsselbild und alle darauffolgenden Delta-Rahmen vorliegen.
Ähnlich ist es, wenn Rahmen für einen Empfänger verschlüsselt sind, dann kann er die Rahmen erst dekodieren, wenn er sein erstes verschlüsseltes Schlüsselbild erhalten hat.

## Beispiele

Dieses Beispiel zeigt den Code für einen WebRTC Encoded Transform, der in einem Worker läuft.

Der Code verwendet `addEventListener()`, um eine Handlerfunktion für das {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}}-Ereignis zu registrieren, wodurch der **`RTCRtpScriptTransformer`** als `event.transformer` verfügbar gemacht wird.

Der Handler erstellt einen {{DOMxRef("TransformStream")}} und leitet die Rahmen vom `event.transformer.readable` durch ihn zu `event.transformer.writable`.
Die Implementierung von `transform()` des Transformationsstreams wird für jeden kodierten Rahmen aufgerufen, der auf dem Stream eingereiht ist: sie kann die Daten aus dem Rahmen lesen und in diesem Fall die Bytes negieren und dann den modifizierbaren Rahmen auf dem Stream einreihen.

```js
addEventListener("rtctransform", (event) => {
  const transform = new TransformStream({
    start() {}, // Wird beim Start aufgerufen.
    flush() {}, // Wird aufgerufen, wenn der Stream geschlossen wird.
    async transform(encodedFrame, controller) {
      // Rekonstruiert den ursprünglichen Rahmen.
      const view = new DataView(encodedFrame.data);

      // Erstellt einen neuen Puffer
      const newData = new ArrayBuffer(encodedFrame.data.byteLength);
      const newView = new DataView(newData);

      // Negiert alle Bits im eingehenden Rahmen
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

Das Besondere an dem {{DOMxRef("TransformStream")}} oben ist, dass er kodierte Medienrahmen ({{domxref("RTCEncodedVideoFrame")}} oder {{domxref("RTCEncodedAudioFrame")}}) anstelle von beliebigen "Stücken" einreiht und dass `writableStrategy` und `readableStrategy`-Eigenschaften nicht definiert sind (da die Einreihstrategie vollständig vom Benutzeragenten verwaltet wird).

Ein Transform kann entweder in den eingehenden oder ausgehenden WebRTC-Pipelines laufen.
Dies spielt im obigen Code keine Rolle, da derselbe Algorithmus sowohl im Sender verwendet werden könnte, um die Rahmen zu negieren, als auch im Empfänger, um sie wieder rückgängig zu machen.
Wenn die Sender- und Empfängerpipelines einen unterschiedlichen Transformationsalgorithmus verwenden müssen, müssen Informationen über die aktuelle Pipeline aus dem Haupt-Thread übergeben werden.
Dies geschieht durch das Festlegen eines `options`-Arguments im entsprechenden [`RTCRtpScriptTransform` Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform#options), das dann dem Worker in {{domxref("RTCRtpScriptTransformer.options")}} zur Verfügung gestellt wird.

Nachfolgend verwenden wir `transformer.options`, um entweder eine Sender- oder eine Empfängertransformation auszuwählen.
Beachten Sie, dass die Eigenschaften des Objekts beliebig sind (vorausgesetzt, die Werte können serialisiert werden) und es auch möglich ist, einen {{domxref("MessageChannel")}} zu übergeben und diesen zu nutzen, um [zur Laufzeit mit einem Transform zu kommunizieren](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms#runtime_communication_with_the_transform), um beispielsweise Verschlüsselungsschlüssel zu teilen.

```js
// Code zum Instanziieren von Transforms und Anhängen an Sender-/Empfänger-Pipelines.
onrtctransform = (event) => {
  let transform;
  if (event.transformer.options.name == "senderTransform")
    transform = createSenderTransform();
  // gibt einen TransformStream zurück (nicht gezeigt)
  else if (event.transformer.options.name == "receiverTransform")
    transform = createReceiverTransform();
  // gibt einen TransformStream zurück (nicht gezeigt)
  else return;
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
};
```

Beachten Sie, dass der obige Code Teil von vollständigeren Beispielen aus [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- {{domxref("TransformStream")}}
