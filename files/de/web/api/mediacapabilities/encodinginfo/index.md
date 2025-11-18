---
title: "MediaCapabilities: encodingInfo() Methode"
short-title: encodingInfo()
slug: Web/API/MediaCapabilities/encodingInfo
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Media Capabilities API")}}{{AvailableInWorkers}}

Die **`encodingInfo()`**-Methode des [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Interfaces liefert ein Promise, das mit den getesteten Medienkonfigurationsmöglichkeiten zur Kodierung von Medien erfüllt wird. Diese enthält die drei booleschen Eigenschaften `supported`, `smooth` und `powerefficient`, die beschreiben, wie kompatibel das Gerät mit der Art von Medien ist.

## Syntax

```js-nolint
encodingInfo(configuration)
```

### Parameter

- `configuration`
  - : Ein Objekt mit einer Eigenschaft `type` und _entweder_ einer `video`- oder `audio`-Eigenschaft, die eine Konfiguration des entsprechenden Typs enthält: <!-- MediaEncodingConfiguration in der Spezifikation -->
    - `type`
      - : Der Typ der getesteten Medien. Dies nimmt einen von zwei Werten an:
        - `record`
          - : Stellt eine Konfiguration für die Aufzeichnung von Medien dar, z.B. mit [`MediaRecorder`](/de/docs/Web/API/MediaRecorder).
        - `webrtc`
          - : Stellt eine Konfiguration dar, die über elektronische Mittel (z.B. mittels [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)) übertragen werden soll. **Hinweis:** Firefox verwendet `transmission` für diesen Typ, und `webrtc` funktioniert nicht.
        - `transmission` {{non-standard_inline}}
          - : Das Synonym zu `webrtc`, das in Firefox verwendet werden soll.

    - `video`
      - : Konfigurationsobjekt für eine Video-Medienquelle.
        Dieses hat folgende Eigenschaften: <!-- VideoConfiguration in der Spezifikation -->
        - `contentType`
          - : Zeichenkette, die einen gültigen Video-MIME-Typ und (optional) einen [`codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) enthält.
        - `width`
          - : Die Breite des Videos.
        - `height`
          - : Die Höhe des Videos.
        - `bitrate`
          - : Die Anzahl der Bits, die zur Kodierung einer Sekunde der Videodatei verwendet werden.
        - `framerate`
          - : Die Anzahl der Bilder, die eine Sekunde Video-Wiedergabe ausmachen.

    - `audio`
      - : Konfigurationsobjekt für eine Audio-Medienquelle.
        Dieses hat folgende Eigenschaften: <!-- AudioConfiguration in der Spezifikation -->
        - `contentType`
          - : Zeichenkette, die einen gültigen Audio-MIME-Typ und (optional) einen [`codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) enthält.
        - `channels`
          - : Die Anzahl der Kanäle, die vom Audiotrack verwendet werden.
        - `bitrate`
          - : Die Anzahl der Bits, die zur Kodierung einer Sekunde der Audiodatei verwendet werden.
        - `samplerate`
          - : Die Anzahl der Audiosamples, die eine Sekunde der Audiodatei ausmachen.

### Rückgabewert

Ein {{jsxref('Promise')}} liefert ein Objekt Fulfillment mit drei booleschen Attributen:

- `supported`
  - : `true`, wenn der Medieninhalt überhaupt kodiert werden kann. Andernfalls ist es `false`.
- `smooth`
  - : `true`, wenn die Wiedergabe des Mediens gleichmäßig (von hoher Qualität) ist. Andernfalls ist es `false`.
- `powerEfficient`
  - : `true`, wenn die Wiedergabe des Mediens energieeffizient ist. Andernfalls ist es `false`.

Browser melden eine unterstützte Medienkonfiguration als `smooth` und `powerEfficient`, bis Statistiken auf diesem Gerät aufgezeichnet wurden. Alle unterstützten Audiocodecs werden als energieeffizient gemeldet.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wirft einen Fehler, wenn die an die `encodingInfo()`-Methode übergebene `configuration` ungültig ist, was aus einem der folgenden Gründe der Fall sein kann:
    - der Typ ist nicht Video oder Audio,
    - der `contentType` ist kein gültiger Codec-MIME-Typ,
    - es liegt ein anderer Fehler in der an die Methode übergebenen Medienkonfiguration vor, einschließlich des Auslassens eines der `configuration`-Elemente.

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
