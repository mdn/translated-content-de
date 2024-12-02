---
title: "RTCEncodedVideoFrame: getMetadata() Methode"
short-title: getMetadata()
slug: Web/API/RTCEncodedVideoFrame/getMetadata
l10n:
  sourceCommit: 03b4a9d11d37c9d0be0804669467eadf2d72f2a3
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getMetadata()`** Methode der [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) Schnittstelle gibt ein Objekt zurück, das die mit dem Frame verbundenen Metadaten enthält.

Dies umfasst Informationen über den Frame, einschließlich seiner Größe, Video-Codierung, anderer Frames, die benötigt werden, um ein vollständiges Bild zu konstruieren, Zeitstempel und weitere Informationen.

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
  - : Ein {{jsxref("Array")}} von positiven Ganzzahlen, die die `frameIds` der Frames angeben, von denen dieser Frame abhängt.
    Bei einem Schlüsselbild ist dies leer, da ein Schlüsselbild alle Informationen enthält, die es benötigt, um das Bild zu konstruieren.
    Bei einem Delta-Frame listet dies alle Frames auf, die benötigt werden, um diesen Frame zu rendern.
    Der Frame-Typ kann unter Verwendung von [`RTCEncodedVideoFrame.type`](/de/docs/Web/API/RTCEncodedVideoFrame/type) bestimmt werden.
- `width`
  - : Eine positive Ganzzahl, die die Breite des Frames angibt.
    Der Höchstwert ist 65535.
- `height`
  - : Eine positive Ganzzahl, die die Höhe des Frames angibt.
    Der Höchstwert ist 65535.
- `spatialIndex`
  - : Eine positive Ganzzahl, die den räumlichen Index des Frames angibt.
    Einige Codecs ermöglichen die Erzeugung von Frame-Schichten mit unterschiedlichen Auflösungsebenen.
    Frames in höheren Schichten können selektiv fallen gelassen werden, um bei Bedarf die Bitrate zu reduzieren, während eine akzeptable Videoqualität beibehalten wird.
- `temporalIndex`
  - : Eine positive Ganzzahl, die den zeitlichen Index des Frames angibt.
    Einige Codecs gruppieren Frames in Schichten, basierend darauf, ob das Fallenlassen eines Frames verhindern wird, dass andere dekodiert werden können.
    Frames in höheren Schichten können selektiv fallen gelassen werden, um bei Bedarf die Bitrate zu reduzieren, während eine akzeptable Videoqualität beibehalten wird.
- `synchronizationSource`
  - : Ein positiver Ganzzahlwert, der die Synchronisationsquelle ("ssrc") des Stroms von RTP-Paketen angibt, die durch diesen codierten Videoframe beschrieben werden.
    Eine Quelle könnte etwas wie eine Kamera oder ein Mikrofon sein oder eine Art Mixer-Anwendung, die mehrere Quellen kombiniert.
    Alle Pakete derselben Quelle teilen dieselbe Zeitquelle und Sequenzraum und können daher relativ zueinander angeordnet werden.
    Beachten Sie, dass zwei Frames mit demselben Wert auf dieselbe Quelle verweisen (für weitere Informationen siehe [`RTCInboundRtpStreamStats.ssrc`](/de/docs/Web/API/RTCInboundRtpStreamStats#ssrc)).
- `payloadType`
  - : Ein positiver Ganzzahlwert im Bereich von 0 bis 127, der das Format der RTP-Nutzdaten beschreibt.
    Die Zuordnung von Werten zu Formaten ist in RFC3550 definiert.
- `contributingSources`
  - : Ein {{jsxref("Array")}} von Quellen (ssrc), die zu dem Frame beigetragen haben.
    Betrachten Sie den Fall einer Konferenzanwendung, die das Audio und Video von mehreren Benutzern kombiniert.
    Die `synchronizationSource` würde die ssrc der Anwendung einschließen, während `contributingSources` die ssrc-Werte aller individuellen Video- und Audioquellen einschließen würde.
- `timestamp`
  - : Der [Medienpräsentations-Zeitstempel (PTS)](https://en.wikipedia.org/wiki/Presentation_timestamp) in Mikrosekunden des rohen Frames, der dem Zeitstempel für rohe Frames entspricht, die zu diesem Frame gehören.
    Dies wird verwendet, um separate Video-, Audio-, Untertitel- und andere Streams zu synchronisieren, die zur selben Präsentation gehören.

## Beispiele

Diese Beispielimplementierung einer [WebRTC encoded transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) zeigt, wie man die Frame-Metadaten in einer `transform()` Funktion abrufen und protokollieren könnte.

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

Das resultierende Objekt von einer lokalen Webcam könnte etwa so aussehen wie das unten gezeigte.
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
