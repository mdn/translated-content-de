---
title: "Navigator: mediaCapabilities Eigenschaft"
short-title: mediaCapabilities
slug: Web/API/Navigator/mediaCapabilities
l10n:
  sourceCommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`mediaCapabilities`** der {{domxref("Navigator")}} Schnittstelle verweist auf ein {{domxref("MediaCapabilities")}} Objekt, das Informationen über die Dekodierungs- und Kodierungsfähigkeiten für ein bestimmtes Medienformat und Ausgabeoptionen bereitstellen kann.

## Wert

Ein {{domxref("MediaCapabilities")}} Objekt.

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

- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
- {{domxref("Navigator")}}
