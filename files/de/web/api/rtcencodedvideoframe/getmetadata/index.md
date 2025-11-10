---
title: "RTCEncodedVideoFrame: getMetadata()-Methode"
short-title: getMetadata()
slug: Web/API/RTCEncodedVideoFrame/getMetadata
l10n:
  sourceCommit: 23398d025295ad1eaf1663a26fbe738a8fe12883
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getMetadata()`**-Methode der [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)-Schnittstelle gibt ein Objekt zurück, das die mit dem Frame verknüpften Metadaten enthält.

Dies umfasst Informationen über den Frame, wie seine Größe, Video-Codierung, andere Frames, die zur Konstruktion eines vollständigen Bildes benötigt werden, Zeitstempel und weitere Informationen.

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
    Betrachten Sie den Fall einer Konferenzanwendung, die Audio und Video von mehreren Benutzern kombiniert.
    Die `synchronizationSource` würde die ssrc der Anwendung enthalten, während `contributingSources` die ssrc-Werte aller einzelnen Video- und Audioquellen enthalten würde.
- `dependencies`
  - : Ein {{jsxref("Array")}} von positiven ganzen Zahlen, die die frameIds von Frames anzeigen, auf die dieser Frame angewiesen ist.
    Für einen Schlüssel-Frame wird dies leer sein, da ein Schlüssel-Frame alle Informationen enthält, die benötigt werden, um das Bild zu konstruieren.
    Für einen Delta-Frame werden alle Frames aufgeführt, die zur Darstellung dieses Frames benötigt werden.
    Der Typ des Frames kann mit [`RTCEncodedVideoFrame.type`](/de/docs/Web/API/RTCEncodedVideoFrame/type) ermittelt werden.
- `frameId`
  - : Ein positiver Ganzzahlenwert, der die ID dieses Frames angibt.
- `height`
  - : Eine positive Ganzzahl, die die Höhe des Frames angibt.
    Der Maximalwert beträgt 65535.
- `mimeType`
  - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des verwendeten Codecs enthält, wie zum Beispiel "video/VP8".
- `payloadType`
  - : Ein positiver Ganzzahlenwert im Bereich von 0 bis 127, der das Format der RTP-Nutzlast beschreibt.
    Die Zuordnungen von Werten zu Formaten sind in RFC3550 definiert.
- `receiveTime`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitstempel des letzten empfangenen Pakets eines eingehenden Frames (von einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)) angibt, das zur Erzeugung dieses Medien-Frames verwendet wurde, relativ zu [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin).
- `rtpTimestamp`
  - : Eine positive ganze Zahl, die den Abtastzeitpunkt des ersten Oktetts im RTP-Datenpaket widerspiegelt (siehe {{rfc("3550")}}).
- `spatialIndex`
  - : Eine positive ganze Zahl, die den räumlichen Index des Frames angibt.
    Einige Codecs ermöglichen die Erzeugung von Schichten von Frames mit unterschiedlichen Auflösungen.
    Frames in höheren Schichten können selektiv weggelassen werden, um bei Bedarf die Bitrate zu reduzieren und dennoch eine akzeptable Videoqualität beizubehalten.
- `synchronizationSource`
  - : Ein positiver Ganzzahlenwert, der die Synchronisationsquelle ("ssrc") des Stroms von RTP-Paketen angibt, die durch diesen kodierten Video-Frame beschrieben werden.
    Eine Quelle könnte eine Kamera oder ein Mikrofon sein oder eine Art Mixer-App, die mehrere Quellen kombiniert.
    Alle Pakete von derselben Quelle teilen dieselbe Zeitquelle und Sequenzraum und können daher relativ zueinander geordnet werden.
    Beachten Sie, dass zwei Frames mit demselben Wert sich auf dieselbe Quelle beziehen (für weitere Informationen siehe [`RTCInboundRtpStreamStats.ssrc`](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc)).
- `temporalIndex`
  - : Eine positive ganze Zahl, die den zeitlichen Index des Frames angibt.
    Einige Codecs gruppieren Frames in Schichten, basierend darauf, ob das Weglassen eines Frames die Dekodierung anderer verhindert.
    Frames in höheren Schichten können selektiv weggelassen werden, um bei Bedarf die Bitrate zu reduzieren und dennoch eine akzeptable Videoqualität zu gewährleisten.
- `width`
  - : Eine positive Ganzzahl, die die Breite des Frames angibt.
    Der Maximalwert beträgt 65535.

## Beispiele

Diese [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)-Implementierung zeigt, wie Sie die Frame-Metadaten in einer `transform()`-Funktion abrufen und protokollieren können.

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

Das resultierende Objekt von einer lokalen Webcam könnte wie das unten gezeigte aussehen.
Beachten Sie, dass es keine beitragenden Quellen gibt, da nur eine Quelle vorhanden ist.

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

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
