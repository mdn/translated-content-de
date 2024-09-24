---
title: "WorkerNavigator: Eigenschaft mediaCapabilities"
short-title: mediaCapabilities
slug: Web/API/WorkerNavigator/mediaCapabilities
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`mediaCapabilities`**-Eigenschaft der {{domxref("WorkerNavigator")}}-Schnittstelle verweist auf ein {{domxref("MediaCapabilities")}}-Objekt, das Informationen über die Dekodierungs- und Kodierungsfähigkeiten für ein gegebenes Format und die Ausgabemöglichkeiten bereitstellen kann (wie im [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) definiert).

## Wert

Ein {{domxref("MediaCapabilities")}}-Objekt.

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
      `Diese Konfiguration wird ${result.supported ? "" : "nicht "}unterstützt,`,
    );
    console.log(`${result.smooth ? "" : "nicht "}flüssig dargestellt, und`);
    console.log(`${result.powerEfficient ? "" : "nicht "}energieeffizient.`);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
- {{domxref("WorkerNavigator")}}
