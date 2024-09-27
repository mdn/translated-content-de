---
title: "RTCEncodedVideoFrame: getMetadata() Methode"
short-title: getMetadata()
slug: Web/API/RTCEncodedVideoFrame/getMetadata
l10n:
  sourceCommit: 7cf04da4f63ea96edfddde0a74ac0d0b1bc4d12e
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getMetadata()`** Methode der [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)-Schnittstelle gibt ein Objekt zurück, das die mit dem Frame verknüpften Metadaten enthält.

Dazu gehören Informationen über den Frame, einschließlich seiner Größe, Video-Codierung, anderen Frames, die benötigt werden, um ein vollständiges Bild zu erstellen, Zeitstempel und weiteren Informationen.

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
  - : Ein {{jsxref("Array")}} von positiven ganzen Zahlen, die die `frameId`s der Frames angeben, von denen dieser Frame abhängt.
    Bei einem Keyframe ist dies leer, da ein Keyframe alle Informationen enthält, die er benötigt, um das Bild zu erstellen.
    Bei einem Delta-Frame werden hier alle Frames aufgelistet, die benötigt werden, um diesen Frame zu rendern.
    Der Typ des Frames kann mithilfe von [`RTCEncodedVideoFrame.type`](/de/docs/Web/API/RTCEncodedVideoFrame/type) bestimmt werden.
- `width`
  - : Eine positive Ganzzahl, die die Breite des Frames angibt.
    Der maximale Wert ist 65535.
- `height`
  - : Eine positive Ganzzahl, die die Höhe des Frames angibt.
    Der maximale Wert ist 65535.
- `spatialIndex`
  - : Eine positive Ganzzahl, die den räumlichen Index des Frames angibt.
    Einige Codecs erlauben die Erzeugung von Framelagen mit unterschiedlichen Auflösungen.
    Frames in höheren Lagen können bei Bedarf selektiv ausgelassen werden, um die Bitrate zu reduzieren und gleichzeitig eine akzeptable Videoqualität beizubehalten.
- `temporalIndex`
  - : Eine positive Ganzzahl, die den temporalen Index des Frames angibt.
    Einige Codecs gruppieren Frames in Lagen, basierend darauf, ob das Auslassen eines Frames verhindern wird, dass andere decodiert werden können.
    Frames in höheren Lagen können bei Bedarf selektiv ausgelassen werden, um die Bitrate zu reduzieren und gleichzeitig eine akzeptable Videoqualität beizubehalten.
- `synchronizationSource`
  - : Ein positiver ganzzahliger Wert, der die Synchronisationsquelle ("ssrc") des RTP-Paketstroms angibt, der durch diesen codierten Videoframe beschrieben wird.
    Eine Quelle könnte beispielsweise eine Kamera oder ein Mikrofon sein oder eine Art Mixer-App, die mehrere Quellen kombiniert.
    Alle Pakete derselben Quelle teilen dieselbe Zeitquelle und Sequenzraum und können daher relativ zueinander geordnet werden.
    Beachten Sie, dass zwei Frames mit demselben Wert sich auf dieselbe Quelle beziehen (weitere Informationen finden Sie unter [`RTCRtpStreamStats.ssrc`](/de/docs/Web/API/RTCRtpStreamStats/ssrc)).
- `payloadType`
  - : Ein positiver ganzzahliger Wert im Bereich von 0 bis 127, der das Format der RTP-Nutzlast beschreibt.
    Die Zuordnungen von Werten zu Formaten sind in RFC3550 definiert.
- `contributingSources`
  - : Ein {{jsxref("Array")}} von Quellen (ssrc), die zum Frame beigetragen haben.
    Betrachten Sie den Fall einer Konferenzanwendung, die das Audio und Video mehrerer Nutzer kombiniert.
    Die `synchronizationSource` würde das ssrc der Anwendung enthalten, während `contributingSources` die ssrc-Werte aller einzelnen Video- und Audioquellen enthalten würde.
- `timestamp`
  - : Der [Präsentations-Zeitstempel (PTS)](https://en.wikipedia.org/wiki/Presentation_timestamp) in Mikrosekunden des rohen Frames, der dem Zeitstempel für rohe Frames entspricht, die diesem Frame zugeordnet sind.
    Dies wird verwendet, um separate Video-, Audio-, Untertitel- und andere Streams zu synchronisieren, die zur selben Präsentation gehören.

## Beispiele

Dieses Beispiel einer [WebRTC codierten Transformation](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) Implementierung zeigt, wie Sie die Metadaten des Frames in einer `transform()`-Funktion abrufen und protokollieren können.

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

Das resultierende Objekt von einer lokalen Webcam könnte wie unten gezeigt aussehen.
Es gibt keine beitragenden Quellen, da es nur eine Quelle gibt.

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

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
