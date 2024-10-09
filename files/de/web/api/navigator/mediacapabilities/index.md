---
title: "Navigator: mediaCapabilities-Eigenschaft"
short-title: mediaCapabilities
slug: Web/API/Navigator/mediaCapabilities
l10n:
  sourceCommit: 49f6e40b12be0d6d897d3dab09caafbc093f7677
---

{{APIRef("Media Capabilities API")}}

Die **`mediaCapabilities`** schreibgeschützte Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle verweist auf ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Objekt, das Informationen über die Decodierungs- und Encodierungsfähigkeiten für ein gegebenes Medienformat und Ausgabefähigkeiten bereitstellen kann.

## Wert

Ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Objekt.

## Beispiele

```js
navigator.mediaCapabilities
  .decodingInfo({
    type: "file",
    audio: {
      contentType: "audio/mp3",
      channels: 2,
      bitrate: 132700,
      samplerate: 5200,
    },
  })
  .then((result) => {
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

- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
- [`Navigator`](/de/docs/Web/API/Navigator)
