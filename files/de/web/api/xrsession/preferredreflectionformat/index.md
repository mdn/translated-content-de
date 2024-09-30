---
title: "XRSession: preferredReflectionFormat-Eigenschaft"
short-title: preferredReflectionFormat
slug: Web/API/XRSession/preferredReflectionFormat
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ Eigenschaft **`preferredReflectionFormat`** des [`XRSession`](/de/docs/Web/API/XRSession)-Interfaces gibt das bevorzugte Reflektionsformat dieser Sitzung zurück, das für Texturdaten zur Beleuchtungsschätzung verwendet wird.

## Wert

Ein String, der das Reflektionsformat darstellt. Mögliche Werte:

| XRReflectionFormat | WebGL-Format | WebGL-Internes Format | WebGPU-Format     | HDR |
| ------------------ | ------------ | --------------------- | ----------------- | --- |
| "srgba8"           | RGBA         | SRGB8_ALPHA8          | "rgba8unorm-srgb" |     |
| "rgba16f"          | RGBA         | RGBA16F               | "rgba16float"     | ✓   |

## Beispiele

### Anfordern einer Lichtsonde mit dem bevorzugten Format des Systems

Sie können eine Lichtsonde mit [`XRSession.requestLightProbe()`](/de/docs/Web/API/XRSession/requestLightProbe) anfordern und das bevorzugte Format des Systems angeben, indem Sie die `reflectionFormat`-Option gleich `XRSession.preferredReflectionFormat` setzen.

```js
const lightProbe = await xrSession.requestLightProbe({
  reflectionFormat: xrSession.preferredReflectionFormat,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRSession.requestLightProbe()`](/de/docs/Web/API/XRSession/requestLightProbe)
