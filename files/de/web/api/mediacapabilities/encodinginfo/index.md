---
title: "MediaCapabilities: encodingInfo() Methode"
short-title: encodingInfo()
slug: Web/API/MediaCapabilities/encodingInfo
l10n:
  sourceCommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{APIRef("Media Capabilities API")}}

Die **`encodingInfo()`** Methode der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Schnittstelle gibt ein Promise zurück, das sich mit den getesteten Medienkonfigurationsfähigkeiten für das Kodieren von Medien erfüllt. Diese beinhalten die drei booleschen Eigenschaften `supported`, `smooth` und `powerefficient`, die beschreiben, wie kompatibel das Gerät mit der Art der Medien ist.

## Syntax

```js-nolint
encodingInfo(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt mit einer Eigenschaft `type` und _entweder_ einer `video` oder `audio` Eigenschaft, die eine Konfiguration des entsprechenden Typs enthält: <!-- MediaEncodingConfiguration in the spec -->

    - `type`

      - : Der Typ der getesteten Medien. Dies nimmt einen von zwei Werten an:

        - `record`
          - : Stellt eine Konfiguration für die Aufnahme von Medien dar, z.B. unter Nutzung von [`MediaRecorder`](/de/docs/Web/API/MediaRecorder).
        - `webrtc`
          - : Stellt eine Konfiguration dar, die zur Übertragung über elektronische Mittel vorgesehen ist (z.B. unter Nutzung von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)). **Hinweis:** Firefox verwendet `transmission` für diesen Typ, und `webrtc` funktioniert nicht.
        - `transmission` {{non-standard_inline}}
          - : Das Synonym von `webrtc`, das in Firefox verwendet werden soll.

    - `video`

      - : Konfigurationsobjekt für eine Videomedienquelle.
        Dieses hat die folgenden Eigenschaften: <!-- VideoConfiguration in the spec -->

        - `contentType`
          - : String, der einen gültigen Video-MIME-Typ und (optional) einen [`codecs` Parameter](/de/docs/Web/Media/Formats/codecs_parameter) enthält.
        - `width`
          - : Die Breite des Videos.
        - `height`
          - : Die Höhe des Videos.
        - `bitrate`
          - : Die Anzahl der Bits, die für die Kodierung einer Sekunde der Videodatei verwendet werden.
        - `framerate`
          - : Die Anzahl der Frames, die eine Sekunde Videowiedergabe ausmachen.

    - `audio`

      - : Konfigurationsobjekt für eine Audiomedienquelle.
        Dieses hat die folgenden Eigenschaften: <!-- AudioConfiguration in the spec -->

        - `contentType`
          - : String, der einen gültigen Audio-MIME-Typ und (optional) einen [`codecs` Parameter](/de/docs/Web/Media/Formats/codecs_parameter) enthält.
        - `channels`
          - : Die Anzahl der Kanäle, die der Audiotrack verwendet.
        - `bitrate`
          - : Die Anzahl der Bits, die für die Kodierung einer Sekunde der Audiodatei verwendet werden.
        - `samplerate`
          - : Die Anzahl der Audio-Samples, die eine Sekunde der Audiodatei ausmachen.

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich mit einem Objekt erfüllt, das drei boolesche Attribute enthält:

- `supported`
  - : `true`, wenn der Medieninhalt überhaupt kodiert werden kann. Andernfalls `false`.
- `smooth`
  - : `true`, wenn die Wiedergabe der Medien reibungslos (von hoher Qualität) ist. Andernfalls `false`.
- `powerEfficient`
  - : `true`, wenn die Wiedergabe der Medien energieeffizient ist. Andernfalls `false`.

Browser werden eine unterstützte Medienkonfiguration als `smooth` und `powerEfficient` melden, bis Statistiken zu diesem Gerät aufgezeichnet wurden. Alle unterstützten Audiocodecs werden als energieeffizient gemeldet.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `configuration`, die an die `encodingInfo()` Methode übergeben wird, ungültig ist, was aus einem der folgenden Gründe der Fall sein kann:
    - der Typ ist weder Video noch Audio,
    - der `contentType` ist kein gültiger Codec-MIME-Typ,
    - es liegt ein anderer Fehler in der an die Methode übergebenen Medienkonfiguration vor, einschließlich des Auslassens eines der `configuration`-Elemente.

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
