---
title: "MediaCapabilities: encodingInfo()-Methode"
short-title: encodingInfo()
slug: Web/API/MediaCapabilities/encodingInfo
l10n:
  sourceCommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{APIRef("Media Capabilities API")}}

Die **`encodingInfo()`**-Methode des {{domxref("MediaCapabilities")}}-Interfaces gibt ein Promise zurück, das sich mit den Fähigkeiten der getesteten Medienkonfiguration zur Codierung von Medien erfüllt. Dies enthält die drei booleschen Eigenschaften `supported`, `smooth` und `powerefficient`, die beschreiben, wie kompatibel das Gerät mit der Art der Medien ist.

## Syntax

```js-nolint
encodingInfo(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt mit einer Eigenschaft `type` und _entweder_ einer `video`- oder `audio`-Eigenschaft, die eine Konfiguration des entsprechenden Typs enthält: <!-- MediaEncodingConfiguration in the spec -->

    - `type`

      - : Der Typ der getesteten Medien. Dies kann einen von zwei Werten annehmen:

        - `record`
          - : Repräsentiert eine Konfiguration für die Aufnahme von Medien, z. B. mit {{domxref("MediaRecorder")}}.
        - `webrtc`
          - : Repräsentiert eine Konfiguration, die über elektronische Mittel übertragen werden soll (z. B. unter Verwendung von {{domxref("RTCPeerConnection")}}). **Hinweis:** Firefox verwendet `transmission` für diesen Typ, und `webrtc` funktioniert nicht.
        - `transmission` {{non-standard_inline}}
          - : Das Synonym von `webrtc`, das in Firefox verwendet werden soll.

    - `video`

      - : Konfigurationsobjekt für eine Video-Medienquelle.
        Dies hat die folgenden Eigenschaften: <!-- VideoConfiguration in the spec -->

        - `contentType`
          - : String, der einen gültigen Video-MIME-Typ und (optional) einen [`codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) enthält.
        - `width`
          - : Die Breite des Videos.
        - `height`
          - : Die Höhe des Videos.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Videodatei zu codieren.
        - `framerate`
          - : Die Anzahl der Frames, die eine Sekunde der Videowiedergabe ausmachen.

    - `audio`

      - : Konfigurationsobjekt für eine Audio-Medienquelle.
        Dies hat die folgenden Eigenschaften: <!-- AudioConfiguration in the spec -->

        - `contentType`
          - : String, der einen gültigen Audio-MIME-Typ und (optional) einen [`codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) enthält.
        - `channels`
          - : Die Anzahl der Kanäle, die von der Audiospur verwendet werden.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Audiodatei zu codieren.
        - `samplerate`
          - : Die Anzahl der Audiosamples, die eine Sekunde der Audiodatei ausmachen.

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich mit einem Objekt erfüllt, das drei boolesche Attribute enthält:

- `supported`
  - : `true`, wenn der Medieninhalt überhaupt codiert werden kann. Andernfalls ist es `false`.
- `smooth`
  - : `true`, wenn die Wiedergabe der Medien reibungslos (von hoher Qualität) sein wird. Andernfalls ist es `false`.
- `powerEfficient`
  - : `true`, wenn die Wiedergabe der Medien energieeffizient sein wird. Andernfalls ist es `false`.

Browser werden eine unterstützte Medienkonfiguration als `smooth` und `powerEfficient` melden, bis Statistiken auf diesem Gerät aufgezeichnet wurden. Alle unterstützten Audio-Codecs werden als energieeffizient gemeldet.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn die an die `encodingInfo()`-Methode übergebene `configuration` ungültig ist, was aus einem der folgenden Gründe der Fall sein kann:
    - der Typ ist weder Video noch Audio,
    - der `contentType` ist kein gültiger Codec-MIME-Typ,
    - es gibt einen anderen Fehler in der an die Methode übergebenen Medienkonfiguration, einschließlich des Auslassens eines der `configuration`-Elemente.

## Beispiele

```js
//Erstellen Sie eine zu testende Medienkonfiguration
const mediaConfig = {
  type: "record", // oder 'transmission'
  video: {
    contentType: "video/webm;codecs=vp8.0", // gültiger Inhaltstyp
    width: 1920, // Breite des Videos
    height: 1080, // Höhe des Videos
    bitrate: 120000, // Anzahl der Bits zur Codierung von 1s Video
    framerate: 48, // Anzahl der Frames, die das 1s ausmachen.
  },
};

// Unterstützung und Leistung prüfen
navigator.mediaCapabilities.encodingInfo(mediaConfig).then((result) => {
  console.log(
    `Diese Konfiguration ist ${result.supported ? "" : "nicht "}unterstützt,`,
  );
  console.log(`${result.smooth ? "" : "nicht "}flüssig, und`);
  console.log(`${result.powerEfficient ? "" : "nicht "}energieeffizient.`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaCapabilities.decodingInfo()")}}
