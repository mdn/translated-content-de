---
title: "RTCEncodedVideoFrame: getMetadata() Methode"
short-title: getMetadata()
slug: Web/API/RTCEncodedVideoFrame/getMetadata
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getMetadata()`** Methode der [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) Schnittstelle gibt ein Objekt zurück, das die mit dem Frame verbundenen Metadaten enthält.

Diese Metadaten umfassen Informationen über den Frame, einschließlich seiner Größe, Video-Codierung, anderer benötigter Frames zur Konstruktion eines vollständigen Bildes, Zeitstempel und weiterer Informationen.

## Syntax

```js-nolint
getMetadata()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `frameId`
  - : Ein positiver ganzzahliger Wert, der die ID dieses Frames angibt.
- `dependencies`
  - : Ein {{jsxref("Array")}} von positiven ganzen Zahlen, die die `frameIds` der Frames anzeigen, von denen dieser Frame abhängt.
    Für einen Schlüsselbild-Frame wird dies leer sein, da ein Schlüsselbild alle Informationen enthält, die zur Konstruktion des Bildes benötigt werden.
    Für einen Delta-Frame listet dies alle benötigten Frames auf, um diesen Frame anzuzeigen.
    Der Typ des Frames kann mit [`RTCEncodedVideoFrame.type`](/de/docs/Web/API/RTCEncodedVideoFrame/type) bestimmt werden.
- `width`
  - : Eine positive ganze Zahl, die die Breite des Frames angibt.
    Der Maximalwert ist 65535.
- `height`
  - : Eine positive ganze Zahl, die die Höhe des Frames angibt.
    Der Maximalwert ist 65535.
- `spatialIndex`
  - : Eine positive ganze Zahl, die den räumlichen Index des Frames angibt.
    Einige Codecs ermöglichen die Erzeugung von Schichten von Frames mit unterschiedlichen Auflösungen.
    Frames in höheren Schichten können selektiv fallen gelassen werden, um die Bitrate bei Bedarf zu reduzieren und gleichzeitig eine akzeptable Videoqualität aufrechtzuerhalten.
- `temporalIndex`
  - : Eine positive ganze Zahl, die den zeitlichen Index des Frames angibt.
    Einige Codecs gruppieren Frames in Schichten, basierend darauf, ob das Weglassen eines Frames die Dekodierung anderer verhindern wird.
    Frames in höheren Schichten können selektiv fallen gelassen werden, um die Bitrate bei Bedarf zu reduzieren und gleichzeitig eine akzeptable Videoqualität aufrechtzuerhalten.
- `synchronizationSource`
  - : Ein positiver ganzzahliger Wert, der die Synchronisationsquelle ("ssrc") des Streams von RTP-Paketen angibt, die durch diesen kodierten Videoframe beschrieben werden.
    Eine Quelle könnte etwas wie eine Kamera oder ein Mikrofon sein oder eine Art Mixer-App, die mehrere Quellen kombiniert.
    Alle Pakete aus derselben Quelle teilen sich dieselbe Zeitquelle und Sequenzraum und können daher relativ zueinander geordnet werden.
    Beachten Sie, dass zwei Frames mit demselben Wert auf dieselbe Quelle verweisen (für weitere Informationen siehe [`RTCInboundRtpStreamStats.ssrc`](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc)).
- `payloadType`
  - : Ein positiver ganzzahliger Wert im Bereich von 0 bis 127, der das Format der RTP-Nutzlast beschreibt.
    Die Zuordnung von Werten zu Formaten wird in RFC3550 definiert.
- `contributingSources`
  - : Ein {{jsxref("Array")}} von Quellen (ssrc), die zum Frame beigetragen haben.
    Betrachten Sie den Fall einer Konferenzanwendung, die Audio und Video von mehreren Benutzern kombiniert.
    Die `synchronizationSource` würde die ssrc der Anwendung einschließen, während `contributingSources` die ssrc-Werte aller individuellen Video- und Audioquellen einschließen würde.
- `timestamp`
  - : Der [Media Presentation Timestamp (PTS)](https://en.wikipedia.org/wiki/Presentation_timestamp) in Mikrosekunden des Roh-Frames, der dem Zeitstempel für rohe Frames entspricht, die diesem Frame zugeordnet sind.
    Dies wird verwendet, um separate Video-, Audio-, Untertitel- und andere Streams zu synchronisieren, die zur gleichen Präsentation gehören.

## Beispiele

Dieses Beispiel für die Implementierung einer [WebRTC encoded transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) zeigt, wie man die Frame-Metadaten in einer `transform()` Funktion erhält und protokolliert.

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

Das resultierende Objekt einer lokalen Webcam könnte wie unten gezeigt aussehen.
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

- [Verwendung von WebRTC-kodierten Transformationen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
