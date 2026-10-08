---
title: "RTCEncodedVideoFrame: Methode getMetadata()"
short-title: getMetadata()
slug: Web/API/RTCEncodedVideoFrame/getMetadata
l10n:
  sourceCommit: 8b77a013c518ef1b62534a8446a60732d582a24b
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die Methode **`getMetadata()`** der Schnittstelle [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) gibt ein Objekt zurück, das die dem Frame zugeordneten Metadaten enthält.

Dazu gehören Informationen über den Frame, etwa seine Größe, die Videokodierung, andere Frames, die zum Erzeugen eines vollständigen Bildes benötigt werden, der Zeitstempel und weitere Angaben.

## Syntax

```js-nolint
getMetadata()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `contributingSources`
  - : Ein {{jsxref("Array")}} von Quellen (ssrc), die zum Frame beigetragen haben.
    Betrachten Sie beispielsweise eine Konferenzanwendung, die Audio und Video mehrerer Benutzer zusammenführt.
    `synchronizationSource` würde die ssrc der Anwendung enthalten, während `contributingSources` die ssrc-Werte aller einzelnen Video- und Audioquellen enthalten würde.
- `dependencies`
  - : Ein {{jsxref("Array")}} positiver Ganzzahlen, die die frameIds der Frames angeben, von denen dieser Frame abhängt.
    Bei einem Keyframe ist es leer, da ein Keyframe alle Informationen enthält, die zum Erzeugen des Bildes benötigt werden.
    Bei einem Delta-Frame enthält es alle Frames, die zum Rendern dieses Frames benötigt werden.
    Der Frame-Typ lässt sich mit [`RTCEncodedVideoFrame.type`](/de/docs/Web/API/RTCEncodedVideoFrame/type) bestimmen.
- `frameId`
  - : Eine positive Ganzzahl, die die ID dieses Frames angibt.
- `height`
  - : Eine positive Ganzzahl, die die Höhe des Frames angibt.
    Der Höchstwert beträgt 65535.
- `mimeType`
  - : Ein String mit dem {{Glossary("MIME_type", "MIME-Typ")}} des verwendeten Codecs, beispielsweise „video/VP8“.
- `payloadType`
  - : Eine positive Ganzzahl im Bereich von 0 bis 127, die das Format der RTP-Nutzdaten beschreibt.
    Die Zuordnung der Werte zu den Formaten ist in RFC3550 definiert.
- `receiveTime`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitstempel des zuletzt empfangenen Pakets eines eingehenden Frames (von einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)) angibt, das zur Erzeugung dieses Medienframes verwendet wurde, relativ zu [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin).
- `rtpTimestamp`
  - : Eine positive Ganzzahl, die den Abtastzeitpunkt des ersten Oktetts im RTP-Datenpaket angibt (siehe {{rfc("3550")}}).
- `spatialIndex`
  - : Eine positive Ganzzahl, die den räumlichen Index des Frames angibt.
    Einige Codecs ermöglichen es, Frames in Ebenen mit unterschiedlichen Auflösungen zu erzeugen.
    Frames in höheren Ebenen können bei Bedarf gezielt verworfen werden, um die Bitrate zu senken und gleichzeitig eine akzeptable Videoqualität aufrechtzuerhalten.
- `synchronizationSource`
  - : Eine positive Ganzzahl, die die Synchronisationsquelle („ssrc“) des RTP-Paketstroms angibt, den dieser kodierte Videoframe beschreibt.
    Eine Quelle kann beispielsweise eine Kamera, ein Mikrofon oder eine Mixer-Anwendung sein, die mehrere Quellen zusammenführt.
    Alle Pakete derselben Quelle nutzen dieselbe Zeitbasis und denselben Sequenznummernraum und können daher relativ zueinander geordnet werden.
    Beachten Sie, dass sich zwei Frames mit demselben Wert auf dieselbe Quelle beziehen (weitere Informationen finden Sie unter [`RTCInboundRtpStreamStats.ssrc`](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc)).
- `temporalIndex`
  - : Eine positive Ganzzahl, die den zeitlichen Index des Frames angibt.
    Einige Codecs gruppieren Frames in Ebenen, je nachdem, ob das Verwerfen eines Frames verhindert, dass andere Frames dekodiert werden können.
    Frames in höheren Ebenen können bei Bedarf gezielt verworfen werden, um die Bitrate zu senken und gleichzeitig eine akzeptable Videoqualität aufrechtzuerhalten.
- `width`
  - : Eine positive Ganzzahl, die die Breite des Frames angibt.
    Der Höchstwert beträgt 65535.

## Beispiele

Dieses Implementierungsbeispiel für [WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) zeigt, wie Sie die Metadaten eines Frames in einer `transform()`-Funktion abrufen und protokollieren können.

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
Beachten Sie, dass es keine weiteren beitragenden Quellen gibt, da nur eine Quelle vorhanden ist.

```json
{
  "contributingSources": [],
  "mimeType": "video/VP8",
  "payloadType": 96,
  "rtpTimestamp": 2503280194,
  "synchronizationSource": 1736709460,
  "dependencies": [],
  "frameId": 1,
  "height": 240,
  "spatialIndex": 0,
  "temporalIndex": 0,
  "width": 320
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC Encoded Transforms verwenden](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
