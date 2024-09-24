---
title: "RTCEncodedVideoFrame: getMetadata() Methode"
short-title: getMetadata()
slug: Web/API/RTCEncodedVideoFrame/getMetadata
l10n:
  sourceCommit: 7cf04da4f63ea96edfddde0a74ac0d0b1bc4d12e
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getMetadata()`** Methode der {{domxref("RTCEncodedVideoFrame")}} Schnittstelle gibt ein Objekt zurück, das die mit dem Frame verbundenen Metadaten enthält.

Dies umfasst Informationen über den Frame, einschließlich seiner Größe, Video-Encoding, anderer Frames, die benötigt werden, um ein vollständiges Bild zu erzeugen, Zeitstempel und weitere Informationen.

## Syntax

```js-nolint
getMetadata()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `frameId`
  - : Ein positiver Ganzzahlwert, der die ID dieses Frames angibt.
- `dependencies`
  - : Ein {{jsxref("Array")}} positiver Ganzzahlen, der die frameIds der Frames angibt, von denen dieser Frame abhängt.
    Für einen Schlüsselbild-Frame ist dies leer, da ein Schlüsselbild alle Informationen enthält, die es zur Konstruktion des Bildes benötigt.
    Für einen Delta-Frame listet dies alle Frames auf, die benötigt werden, um diesen Frame anzuzeigen.
    Der Frame-Typ kann mit {{domxref("RTCEncodedVideoFrame.type")}} bestimmt werden.
- `width`
  - : Eine positive Ganzzahl, die die Breite des Frames angibt.
    Der Höchstwert ist 65535.
- `height`
  - : Eine positive Ganzzahl, die die Höhe des Frames angibt.
    Der Höchstwert ist 65535.
- `spatialIndex`
  - : Eine positive Ganzzahl, die den räumlichen Index des Frames angibt.
    Einige Codecs ermöglichen die Erzeugung von Ebenen von Frames mit unterschiedlichen Auflösungsebenen.
    Frames in höheren Ebenen können selektiv weggelassen werden, um die Bitrate bei Bedarf zu reduzieren und gleichzeitig eine akzeptable Videoqualität beizubehalten.
- `temporalIndex`
  - : Eine positive Ganzzahl, die den zeitlichen Index des Frames angibt.
    Einige Codecs gruppieren Frames in Ebenen, basierend darauf, ob das Weglassen eines Frames die Dekodierung anderer verhindert.
    Frames in höheren Ebenen können selektiv weggelassen werden, um die Bitrate bei Bedarf zu reduzieren und gleichzeitig eine akzeptable Videoqualität beizubehalten.
- `synchronizationSource`
  - : Ein positiver Ganzzahlwert, der die Synchronisationsquelle ("ssrc") des Stroms von RTP-Paketen angibt, die durch diesen kodierten Videoframe beschrieben werden.
    Eine Quelle könnte eine Kamera oder ein Mikrofon sein oder eine Art von Mischanwendung, die mehrere Quellen kombiniert.
    Alle Pakete derselben Quelle teilen dieselbe Zeitquelle und Sequenzraum und können daher relativ zueinander geordnet werden.
    Beachten Sie, dass sich zwei Frames mit demselben Wert auf dieselbe Quelle beziehen (für weitere Informationen siehe [`RTCRtpStreamStats.ssrc`](/de/docs/Web/API/RTCRtpStreamStats/ssrc)).
- `payloadType`
  - : Ein positiver Ganzzahlwert im Bereich von 0 bis 127, der das Format der RTP-Nutzlast beschreibt.
    Die Zuordnung der Werte zu Formaten wird in RFC3550 definiert.
- `contributingSources`
  - : Ein {{jsxref("Array")}} von Quellen (ssrc), die zum Frame beigetragen haben.
    Betrachten Sie den Fall einer Konferenzanwendung, die Audio und Video mehrerer Benutzer kombiniert.
    Die `synchronizationSource` würde das ssrc der Anwendung umfassen, während `contributingSources` die ssrc-Werte aller individuellen Video- und Audioquellen umfassen würde.
- `timestamp`
  - : Der [Medienpräsentations-Zeitstempel (PTS)](https://en.wikipedia.org/wiki/Presentation_timestamp) in Mikrosekunden des rohen Frames, passend zum Zeitstempel der rohen Frames, die diesem Frame entsprechen.
    Dies wird verwendet, um separate Video-, Audio-, Untertitel- und andere Streams zu synchronisieren, die zur selben Präsentation gehören.

## Beispiele

Dieses Beispiel zur [WebRTC-Encoded-Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) Implementierung zeigt, wie Sie die Frame-Metadaten in einer `transform()`-Funktion abrufen und protokollieren können.

```js
addEventListener("rtctransform", (event) => {
  const async transform = new TransformStream({
    async transform(encodedFrame, controller) {

      // Get the metadata and log
      const frameMetaData = encodedFrame.getMetadata();
      console.log(frameMetaData)

      // Enqueue the frame without modifying
      controller.enqueue(encodedFrame);
    },
  });
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Das resultierende Objekt von einer lokalen Webcam könnte wie das unten gezeigte aussehen.
Beachten Sie, dass es keine beitragenden Quellen gibt, da es nur eine Quelle gibt.

```js
{
  "contributingSources": [],
  "dependencies": [
    405
  ],
  "frameId": 406,
  "height": 480,
  "payloadType": 120,
  "spatialIndex": 0,
  "synchronizationSource": 3956716931,
  "temporalIndex": 0,
  "width": 640
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
