---
title: "RTCEncodedVideoFrame: getMetadata() Methode"
short-title: getMetadata()
slug: Web/API/RTCEncodedVideoFrame/getMetadata
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getMetadata()`** Methode der [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) Schnittstelle gibt ein Objekt zurück, das die mit dem Frame verknüpften Metadaten enthält.

Dies umfasst Informationen über den Frame, einschließlich seiner Größe, Video-Codierung, anderer Frames, die zur Erstellung eines vollständigen Bildes benötigt werden, Zeitstempel und weitere Informationen.

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
  - : Ein {{jsxref("Array")}} von positiven Ganzzahlen, die die frameIds der Frames angeben, von denen dieser Frame abhängig ist.
    Bei einem Keyframe wird dieses leer sein, da ein Keyframe alle Informationen enthält, die zur Erstellung des Bildes benötigt werden.
    Bei einem Delta-Frame werden alle Frames aufgelistet, die zur Wiedergabe dieses Frames erforderlich sind.
    Der Frame-Typ kann mit [`RTCEncodedVideoFrame.type`](/de/docs/Web/API/RTCEncodedVideoFrame/type) ermittelt werden.
- `width`
  - : Eine positive Ganzzahl, die die Breite des Frames angibt.
    Der maximale Wert ist 65535.
- `height`
  - : Eine positive Ganzzahl, die die Höhe des Frames angibt.
    Der maximale Wert ist 65535.
- `spatialIndex`
  - : Eine positive Ganzzahl, die den räumlichen Index des Frames angibt.
    Einige Codecs erlauben die Erzeugung von Frameschichten mit unterschiedlichen Auflösungsschichten.
    Frames in höheren Schichten können selektiv weggelassen werden, um bei Bedarf die Bitrate zu reduzieren und dennoch eine akzeptable Videoqualität aufrechtzuerhalten.
- `temporalIndex`
  - : Eine positive Ganzzahl, die den temporalen Index des Frames angibt.
    Einige Codecs gruppieren Frames in Schichten, basierend darauf, ob das Weglassen eines Frames verhindert, dass andere dekodiert werden können.
    Frames in höheren Schichten können selektiv weggelassen werden, um bei Bedarf die Bitrate zu reduzieren und dennoch eine akzeptable Videoqualität aufrechtzuerhalten.
- `synchronizationSource`
  - : Eine positive Ganzzahl, die die Synchronisationsquelle („ssrc“) des Streams von RTP-Paketen angibt, die durch diesen kodierten Video-Frame beschrieben werden.
    Eine Quelle könnte beispielsweise eine Kamera oder ein Mikrofon oder eine Art Mixer-App sein, die mehrere Quellen kombiniert.
    Alle Pakete derselben Quelle teilen dieselbe Zeitquelle und Sequenzfläche und können daher relativ zueinander geordnet werden.
    Beachten Sie, dass sich zwei Frames mit demselben Wert auf dieselbe Quelle beziehen (weitere Informationen finden Sie unter [`RTCInboundRtpStreamStats.ssrc`](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc)).
- `payloadType`
  - : Ein positiver Ganzzahlwert im Bereich von 0 bis 127, der das Format der RTP-Payload beschreibt.
    Die Zuordnungen von Werten zu Formaten sind in RFC3550 definiert.
- `contributingSources`
  - : Ein {{jsxref("Array")}} von Quellen (ssrc), die zu dem Frame beigetragen haben.
    Betrachten Sie den Fall einer Konferenzanwendung, die Audio und Video von mehreren Nutzern kombiniert.
    Die `synchronizationSource` würde die ssrc der Anwendung enthalten, während `contributingSources` die ssrc-Werte aller einzelnen Video- und Audioquellen umfassen würde.
- `timestamp`
  - : Der [media presentation timestamp (PTS)](https://en.wikipedia.org/wiki/Presentation_timestamp) in Mikrosekunden des Rohframes, der dem Zeitstempel für Rohframes entspricht, die diesem Frame zugeordnet sind.
    Dies wird verwendet, um separate Video-, Audio-, Untertitel- und andere Streams zu synchronisieren, die derselben Präsentation angehören.

## Beispiele

Diese Beispielimplementierung [WebRTC encoded transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) zeigt, wie Sie die Frame-Metadaten in einer `transform()`-Funktion abrufen und protokollieren könnten.

```js
addEventListener("rtctransform", (event) => {
  const transform = new TransformStream({
    async transform(encodedFrame, controller) {
      // Get the metadata and log
      const frameMetaData = encodedFrame.getMetadata();
      console.log(frameMetaData);

      // Enqueue the frame without modifying
      controller.enqueue(encodedFrame);
    },
  });
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Das resultierende Objekt einer lokalen Webcam könnte wie das unten gezeigte aussehen.
Beachten Sie, dass es keine beitragenden Quellen gibt, da es nur eine Quelle gibt.

```json
{
  "contributingSources": [],
  "dependencies": [405],
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
