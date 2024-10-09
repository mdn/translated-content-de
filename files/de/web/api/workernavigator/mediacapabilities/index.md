---
title: "WorkerNavigator: mediaCapabilities-Eigenschaft"
short-title: mediaCapabilities
slug: Web/API/WorkerNavigator/mediaCapabilities
l10n:
  sourceCommit: 49f6e40b12be0d6d897d3dab09caafbc093f7677
---

{{APIRef("Media Capabilities API")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`mediaCapabilities`**-Eigenschaft des [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Interfaces verweist auf ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Objekt, das Informationen über die Decodierungs- und Codierungsfähigkeiten für ein gegebenes Format und die Ausgabefähigkeiten (wie sie durch die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) definiert sind) offenlegen kann.

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
