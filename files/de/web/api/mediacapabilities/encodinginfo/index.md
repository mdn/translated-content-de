---
title: "MediaCapabilities: encodingInfo() Methode"
short-title: encodingInfo()
slug: Web/API/MediaCapabilities/encodingInfo
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Media Capabilities API")}}{{AvailableInWorkers}}

Die **`encodingInfo()`** Methode des [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Interfaces gibt ein Promise zurück, das mit den getesteten Medienkonfigurationsfähigkeiten für das Kodieren von Medien erfüllt wird. Dieses enthält die drei booleschen Eigenschaften `supported`, `smooth` und `powerefficient`, die beschreiben, wie kompatibel das Gerät mit der Art des Mediums ist.

## Syntax

```js-nolint
encodingInfo(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt mit einer Eigenschaft `type` und _entweder_ einer `video` oder `audio` Eigenschaft, die eine Konfiguration des entsprechenden Typs enthält: <!-- MediaEncodingConfiguration in der Spezifikation -->

    - `type`

      - : Der Typ des getesteten Mediums. Dies nimmt einen von zwei Werten an:

        - `record`
          - : Repräsentiert eine Konfiguration zur Aufnahme von Medien, z.B. mit [`MediaRecorder`](/de/docs/Web/API/MediaRecorder).
        - `webrtc`
          - : Stellt eine Konfiguration dar, die zur elektronischen Übertragung gedacht ist (z.B. mit [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)). **Hinweis:** Firefox verwendet hierfür `transmission`, und `webrtc` funktioniert nicht.
        - `transmission` {{non-standard_inline}}
          - : Das Synonym von `webrtc`, das in Firefox verwendet werden soll.

    - `video`

      - : Konfigurationsobjekt für eine Video-Medienquelle.
        Dies hat folgende Eigenschaften: <!-- VideoConfiguration in der Spezifikation -->

        - `contentType`
          - : String, der einen gültigen Video-MIME-Typ enthält und (optional) ein [`codecs` Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter).
        - `width`
          - : Die Breite des Videos.
        - `height`
          - : Die Höhe des Videos.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Videodatei zu kodieren.
        - `framerate`
          - : Die Anzahl der Frames, die eine Sekunde der Videowiedergabe ausmachen.

    - `audio`

      - : Konfigurationsobjekt für eine Audio-Medienquelle.
        Dies hat folgende Eigenschaften: <!-- AudioConfiguration in der Spezifikation -->

        - `contentType`
          - : String, der einen gültigen Audio-MIME-Typ enthält und (optional) ein [`codecs` Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter).
        - `channels`
          - : Die Anzahl der Kanäle, die vom Audiotrack verwendet werden.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Audiodatei zu kodieren.
        - `samplerate`
          - : Die Anzahl der Audiosamples, die eine Sekunde der Audiodatei ausmachen.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem Objekt erfüllt wird, welches drei boolesche Attribute enthält:

- `supported`
  - : `true`, wenn der Medieninhalt überhaupt kodiert werden kann. Andernfalls ist es `false`.
- `smooth`
  - : `true`, wenn die Wiedergabe des Mediums flüssig (von hoher Qualität) ist. Andernfalls ist es `false`.
- `powerEfficient`
  - : `true`, wenn die Wiedergabe des Mediums energieeffizient ist. Andernfalls ist es `false`.

Browser melden eine unterstützte Medienkonfiguration als `smooth` und `powerEfficient`, bis Statistiken zu diesem Gerät aufgezeichnet wurden. Alle unterstützten Audiocodecs gelten als energieeffizient.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `configuration`, die an die `encodingInfo()` Methode übergeben wird, ungültig ist, was aus einem der folgenden Gründe der Fall sein kann:
    - der Typ ist nicht Video oder Audio,
    - der `contentType` ist kein gültiger Codec-MIME-Typ,
    - es gibt einen anderen Fehler in der übergebenen Medienkonfiguration, einschließlich des Weglassens eines der `configuration` Elemente.

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
