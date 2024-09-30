---
title: "Navigator: mediaCapabilities-Eigenschaft"
short-title: mediaCapabilities
slug: Web/API/Navigator/mediaCapabilities
l10n:
  sourceCommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{APIRef("HTML DOM")}}

Die **`mediaCapabilities`** schreibgeschützte Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces verweist auf ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Objekt, das Informationen über die Dekodierungs- und Kodierungsfähigkeiten für ein bestimmtes Medienformat und die Ausgabeoptionen bereitstellen kann.

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
