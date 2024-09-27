---
title: "MediaCapabilities: encodingInfo()-Methode"
short-title: encodingInfo()
slug: Web/API/MediaCapabilities/encodingInfo
l10n:
  sourceCommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{APIRef("Media Capabilities API")}}

Die **`encodingInfo()`**-Methode des [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Interfaces gibt ein Promise zurück, das mit den Fähigkeiten der getesteten Medienkonfiguration zum Kodieren von Medien erfüllt wird. Dies umfasst die drei booleschen Eigenschaften `supported`, `smooth` und `powerefficient`, die beschreiben, wie kompatibel das Gerät mit der Art der Medien ist.

## Syntax

```js-nolint
encodingInfo(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt mit einer Eigenschaft `type` und _entweder_ einer `video`- oder `audio`-Eigenschaft, die eine Konfiguration des entsprechenden Typs enthält: <!-- MediaEncodingConfiguration in der Spezifikation -->

    - `type`

      - : Der Typ des zu testenden Mediums. Dies nimmt einen von zwei Werten an:

        - `record`
          - : Repräsentiert eine Konfiguration für die Aufnahme von Medien, z.B. unter Verwendung von [`MediaRecorder`](/de/docs/Web/API/MediaRecorder).
        - `webrtc`
          - : Repräsentiert eine Konfiguration, die über elektronische Mittel übertragen werden soll (z.B. mit [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)). **Hinweis:** Firefox verwendet `transmission` für diesen Typ, und `webrtc` funktioniert nicht.
        - `transmission` {{non-standard_inline}}
          - : Das Synonym für `webrtc`, das in Firefox verwendet wird.

    - `video`

      - : Konfigurationsobjekt für eine Video-Medienquelle. Dies hat die folgenden Eigenschaften: <!-- VideoConfiguration in der Spezifikation -->

        - `contentType`
          - : String, der einen gültigen Video-MIME-Typ und (optional) einen [`codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) enthält.
        - `width`
          - : Die Breite des Videos.
        - `height`
          - : Die Höhe des Videos.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Videodatei zu kodieren.
        - `framerate`
          - : Die Anzahl der Bilder, die eine Sekunde der Videowiedergabe ausmachen.

    - `audio`

      - : Konfigurationsobjekt für eine Audio-Medienquelle. Dies hat die folgenden Eigenschaften: <!-- AudioConfiguration in der Spezifikation -->

        - `contentType`
          - : String, der einen gültigen Audio-MIME-Typ und (optional) einen [`codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) enthält.
        - `channels`
          - : Die Anzahl der Kanäle, die von der Audiospur verwendet werden.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Audiodatei zu kodieren.
        - `samplerate`
          - : Die Anzahl der Audio-Samples, die eine Sekunde der Audiodatei ausmachen.

### Rückgabewert

Ein {{jsxref('Promise')}} wird mit einem Objekt erfüllt, das drei boolesche Attribute enthält:

- `supported`
  - : `true`, wenn der Medieninhalt überhaupt kodiert werden kann. Ansonsten ist es `false`.
- `smooth`
  - : `true`, wenn die Wiedergabe der Medien reibungslos (von hoher Qualität) sein wird. Ansonsten ist es `false`.
- `powerEfficient`
  - : `true`, wenn die Wiedergabe der Medien energieeffizient sein wird. Ansonsten ist es `false`.

Browser werden eine unterstützte Medienkonfiguration als `smooth` und `powerEfficient` melden, bis Statistiken auf diesem Gerät aufgezeichnet wurden. Alle unterstützten Audio-Codecs werden als energieeffizient gemeldet.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn die an die Methode `encodingInfo()` übergebene `configuration` ungültig ist, was aus einem der folgenden Gründe der Fall sein kann:
    - der Typ ist nicht Video oder Audio,
    - der `contentType` ist kein gültiger Codec-MIME-Typ,
    - es gibt einen anderen Fehler in der an die Methode übergebenen Medienkonfiguration, einschließlich des Weglassens eines der `configuration`-Elemente.

## Beispiele

```js
//Create media configuration to be tested
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
