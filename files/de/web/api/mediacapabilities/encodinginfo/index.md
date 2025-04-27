---
title: "MediaCapabilities: encodingInfo()-Methode"
short-title: encodingInfo()
slug: Web/API/MediaCapabilities/encodingInfo
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Media Capabilities API")}}{{AvailableInWorkers}}

Die **`encodingInfo()`**-Methode der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Schnittstelle gibt ein Promise zurück, das sich mit den getesteten Medienkonfigurationen für das Encodieren von Medien erfüllt. Dies enthält die drei booleschen Eigenschaften `supported`, `smooth` und `powerefficient`, die beschreiben, wie kompatibel das Gerät mit der Art des Mediums ist.

## Syntax

```js-nolint
encodingInfo(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt mit einer Eigenschaft `type` und _entweder_ einer `video`- oder `audio`-Eigenschaft, die eine Konfiguration des entsprechenden Typs enthält: <!-- MediaEncodingConfiguration in der Spezifikation -->

    - `type`

      - : Der Typ des getesteten Mediums. Dies nimmt einen der beiden Werte an:

        - `record`
          - : Repräsentiert eine Konfiguration für die Aufnahme von Medien, z. B. unter Verwendung von [`MediaRecorder`](/de/docs/Web/API/MediaRecorder).
        - `webrtc`
          - : Repräsentiert eine Konfiguration, die zur elektronischen Übertragung gedacht ist (z. B. unter Verwendung von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)). **Hinweis:** Firefox verwendet `transmission` für diesen Typ und `webrtc` funktioniert nicht.
        - `transmission` {{non-standard_inline}}
          - : Das Synonym für `webrtc`, das in Firefox verwendet werden soll.

    - `video`

      - : Konfigurationsobjekt für eine Videomedienquelle.
        Dieses hat die folgenden Eigenschaften: <!-- VideoConfiguration in der Spezifikation -->

        - `contentType`
          - : Zeichenfolge, die einen gültigen Video-MIME-Typ und (optional) einen [`codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) enthält.
        - `width`
          - : Die Breite des Videos.
        - `height`
          - : Die Höhe des Videos.
        - `bitrate`
          - : Die Anzahl der Bits, die zum Encodieren einer Sekunde der Videodatei verwendet werden.
        - `framerate`
          - : Die Anzahl der Frames, die eine Sekunde der Videowiedergabe ausmachen.

    - `audio`

      - : Konfigurationsobjekt für eine Audiomedienquelle.
        Dieses hat die folgenden Eigenschaften: <!-- AudioConfiguration in der Spezifikation -->

        - `contentType`
          - : Zeichenfolge, die einen gültigen Audio-MIME-Typ und (optional) einen [`codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) enthält.
        - `channels`
          - : Die Anzahl der Kanäle, die von der Audiospur verwendet werden.
        - `bitrate`
          - : Die Anzahl der Bits, die zum Encodieren einer Sekunde der Audiodatei verwendet werden.
        - `samplerate`
          - : Die Anzahl der Audio-Samples, die eine Sekunde der Audiodatei ausmachen.

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich mit einem Objekt erfüllt, das drei boolesche Attribute enthält:

- `supported`
  - : `true`, wenn der Medieninhalt überhaupt encodiert werden kann. Andernfalls ist es `false`.
- `smooth`
  - : `true`, wenn die Wiedergabe des Mediums reibungslos (hoher Qualität) ist. Andernfalls ist es `false`.
- `powerEfficient`
  - : `true`, wenn die Wiedergabe des Mediums energieeffizient ist. Andernfalls ist es `false`.

Browser melden eine unterstützte Medienkonfiguration als `smooth` und `powerEfficient`, bis Statistiken auf diesem Gerät aufgezeichnet wurden. Alle unterstützten Audio-Codecs werden als energieeffizient gemeldet.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn die an die `encodingInfo()`-Methode übergebene `configuration` ungültig ist, was aus einem der folgenden Gründe der Fall sein kann:
    - der Typ ist weder Video noch Audio,
    - der `contentType` ist kein gültiger Codec-MIME-Typ,
    - es gibt einen anderen Fehler in der an die Methode übergebenen Medienkonfiguration, einschließlich des Auslassens eines der `configuration`-Elemente.

## Beispiele

```js
// Create media configuration to be tested
const mediaConfig = {
  type: "record", // or 'transmission'
  video: {
    contentType: "video/webm;codecs=vp8.0", // valid content type
    width: 1920, // width of the video
    height: 1080, // height of the video
    bitrate: 120000, // number of bits used to encode 1s of video
    framerate: 48, // number of frames making up that 1s.
  },
};

// check support and performance
navigator.mediaCapabilities.encodingInfo(mediaConfig).then((result) => {
  console.log(
    `This configuration is ${result.supported ? "" : "not "}supported,`,
  );
  console.log(`${result.smooth ? "" : "not "}smooth, and`);
  console.log(`${result.powerEfficient ? "" : "not "}power efficient.`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo)
