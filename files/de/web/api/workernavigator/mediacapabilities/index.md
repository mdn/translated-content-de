---
title: "WorkerNavigator: mediaCapabilities Eigenschaft"
short-title: mediaCapabilities
slug: Web/API/WorkerNavigator/mediaCapabilities
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`mediaCapabilities`**-Eigenschaft des [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Interfaces verweist auf ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Objekt, das Informationen über die Dekodierungs- und Kodierungsfähigkeiten für ein gegebenes Format und die Ausgabefähigkeiten (wie durch die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) definiert) bereitstellen kann.

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
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
