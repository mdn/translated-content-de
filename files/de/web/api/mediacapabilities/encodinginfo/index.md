---
title: "MediaCapabilities: encodingInfo() Methode"
short-title: encodingInfo()
slug: Web/API/MediaCapabilities/encodingInfo
l10n:
  sourceCommit: 49f6e40b12be0d6d897d3dab09caafbc093f7677
---

{{APIRef("Media Capabilities API")}}{{AvailableInWorkers}}

Die **`encodingInfo()`** Methode des [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Interfaces gibt ein Promise zurück, das mit den getesteten Medienkonfigurationsfähigkeiten zur Codierung von Medien erfüllt wird. Diese Methode enthält die drei booleschen Eigenschaften `supported`, `smooth` und `powerefficient`, die beschreiben, wie kompatibel das Gerät mit der Art von Medien ist.

## Syntax

```js-nolint
encodingInfo(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt mit einer Eigenschaft `type` und _entweder_ einer `video` oder `audio` Eigenschaft, die eine Konfiguration des entsprechenden Typs enthält: <!-- MediaEncodingConfiguration in der Spezifikation -->

    - `type`

      - : Der Typ der getesteten Medien. Dies nimmt einen von zwei Werten an:

        - `record`
          - : Repräsentiert eine Konfiguration für die Aufnahme von Medien, z. B. mit [`MediaRecorder`](/de/docs/Web/API/MediaRecorder).
        - `webrtc`
          - : Repräsentiert eine Konfiguration, die über elektronische Mittel übertragen werden soll (z. B. mit [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)). **Hinweis:** Firefox verwendet `transmission` für diesen Typ, und `webrtc` funktioniert nicht.
        - `transmission` {{non-standard_inline}}
          - : Das Synonym für `webrtc`, das in Firefox verwendet werden soll.

    - `video`

      - : Konfigurationsobjekt für eine Video-Medienquelle.
        Es hat die folgenden Eigenschaften: <!-- VideoConfiguration in der Spezifikation -->

        - `contentType`
          - : String, der einen gültigen Video-MIME-Typ enthält und optional einen [`codecs` Parameter](/de/docs/Web/Media/Formats/codecs_parameter).
        - `width`
          - : Die Breite des Videos.
        - `height`
          - : Die Höhe des Videos.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Videodatei zu kodieren.
        - `framerate`
          - : Die Anzahl der Frames, die eine Sekunde der Videowiedergabe bilden.

    - `audio`

      - : Konfigurationsobjekt für eine Audio-Medienquelle.
        Es hat die folgenden Eigenschaften: <!-- AudioConfiguration in der Spezifikation -->

        - `contentType`
          - : String, der einen gültigen Audio-MIME-Typ enthält und optional einen [`codecs` Parameter](/de/docs/Web/Media/Formats/codecs_parameter).
        - `channels`
          - : Die Anzahl der Kanäle, die von der Audiospur verwendet werden.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Audiodatei zu codieren.
        - `samplerate`
          - : Die Anzahl der Audiodaten, die eine Sekunde der Audiodatei ausmachen.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem Objekt mit drei booleschen Attributen erfüllt wird:

- `supported`
  - : `true`, wenn der Medieninhalt überhaupt codiert werden kann. Andernfalls ist es `false`.
- `smooth`
  - : `true`, wenn die Wiedergabe der Medien reibungslos (von hoher Qualität) sein wird. Andernfalls ist es `false`.
- `powerEfficient`
  - : `true`, wenn die Wiedergabe der Medien energieeffizient sein wird. Andernfalls ist es `false`.

Browser melden eine unterstützte Medienkonfiguration als `smooth` und `powerEfficient`, bis auf diesem Gerät Statistiken aufgezeichnet wurden. Alle unterstützten Audiocodecs werden als energieeffizient gemeldet.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die an die `encodingInfo()` Methode übergebene `configuration` ungültig ist, was aus einem der folgenden Gründe sein kann:
    - der Typ ist weder Video noch Audio,
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
