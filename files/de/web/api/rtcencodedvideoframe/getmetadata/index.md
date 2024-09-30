---
title: "RTCEncodedVideoFrame: getMetadata() Methode"
short-title: getMetadata()
slug: Web/API/RTCEncodedVideoFrame/getMetadata
l10n:
  sourceCommit: 7cf04da4f63ea96edfddde0a74ac0d0b1bc4d12e
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getMetadata()`**-Methode der [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)-Schnittstelle gibt ein Objekt zurück, das die mit dem Rahmen verknüpften Metadaten enthält.

Dies umfasst Informationen über den Rahmen, einschließlich seiner Größe, Video-Codierung, anderer Rahmen, die benötigt werden, um ein vollständiges Bild zu erstellen, Zeitstempel und andere Informationen.

## Syntax

```js-nolint
getMetadata()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `frameId`
  - : Ein positiver ganzzahliger Wert, der die ID dieses Rahmens angibt.
- `dependencies`
  - : Ein {{jsxref("Array")}} von positiven ganzen Zahlen, die die `frameIds` der Rahmen angeben, von denen dieser Rahmen abhängt.
    Bei einem Schlüsselbild ist dieses leer, da ein Schlüsselbild alle Informationen enthält, die benötigt werden, um das Bild zu erstellen.
    Bei einem Delta-Bild werden alle Rahmen aufgelistet, die benötigt werden, um diesen Rahmen darzustellen.
    Der Typ des Rahmens kann mit [`RTCEncodedVideoFrame.type`](/de/docs/Web/API/RTCEncodedVideoFrame/type) ermittelt werden.
- `width`
  - : Eine positive ganze Zahl, die die Breite des Rahmens angibt.
    Der Höchstwert beträgt 65535.
- `height`
  - : Eine positive ganze Zahl, die die Höhe des Rahmens angibt.
    Der Höchstwert beträgt 65535.
- `spatialIndex`
  - : Eine positive ganze Zahl, die den räumlichen Index des Rahmens angibt.
    Einige Codecs erlauben die Erstellung von Ebenen von Rahmen mit verschiedenen Auflösungen.
    Rahmen in höheren Ebenen können selektiv weggelassen werden, um die Bitrate zu reduzieren, während eine akzeptable Videoqualität aufrechterhalten wird.
- `temporalIndex`
  - : Eine positive ganze Zahl, die den temporalen Index des Rahmens angibt.
    Einige Codecs gruppieren Rahmen in Ebenen, basierend darauf, ob das Auslassen eines Rahmens verhindert, dass andere dekodiert werden.
    Rahmen in höheren Ebenen können selektiv weggelassen werden, um die Bitrate zu reduzieren, während eine akzeptable Videoqualität aufrechterhalten wird.
- `synchronizationSource`
  - : Ein positiver ganzzahliger Wert, der die Synchronisationsquelle ("ssrc") des Stroms von RTP-Paketen angibt, die durch diesen kodierten Videorahmen beschrieben werden.
    Eine Quelle könnte etwas wie eine Kamera oder ein Mikrofon sein, oder eine Art Mixer-App, die mehrere Quellen kombiniert.
    Alle Pakete von derselben Quelle teilen dieselbe Zeitquelle und Sequenzraum und können so relativ zueinander geordnet werden.
    Beachten Sie, dass zwei Rahmen mit demselben Wert auf dieselbe Quelle verweisen (für weitere Informationen siehe [`RTCRtpStreamStats.ssrc`](/de/docs/Web/API/RTCRtpStreamStats/ssrc)).
- `payloadType`
  - : Ein positiver ganzzahliger Wert im Bereich von 0 bis 127, der das Format der RTP-Nutzlast beschreibt.
    Die Zuordnung der Werte zu Formaten ist in RFC3550 definiert.
- `contributingSources`
  - : Ein {{jsxref("Array")}} von Quellen (ssrc), die zum Rahmen beigetragen haben.
    Betrachten Sie den Fall einer Konferenzanwendung, die Audio und Video mehrerer Benutzer kombiniert.
    Die `synchronizationSource` würde die ssrc der Anwendung enthalten, während `contributingSources` die ssrc-Werte aller einzelnen Video- und Audioquellen enthalten würde.
- `timestamp`
  - : Der [Medien-Präsentationszeitstempel (PTS)](https://en.wikipedia.org/wiki/Presentation_timestamp) in Mikrosekunden des Rohrahmens, der mit dem Zeitstempel für Rohrahmen übereinstimmt, die diesem Rahmen entsprechen.
    Dies wird verwendet, um separate Video-, Audio-, Untertitel- und andere Streams zu synchronisieren, die zur selben Präsentation gehören.

## Beispiele

Dieses Beispiel einer [WebRTC-kodierten Transformation](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) zeigt, wie Sie die Rahmenmetadaten in einer `transform()`-Funktion abrufen und protokollieren können.

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

- [Verwendung von WebRTC-Kodierten Transformationen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
