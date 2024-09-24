---
title: "XRSession: preferredReflectionFormat-Eigenschaft"
short-title: preferredReflectionFormat
slug: Web/API/XRSession/preferredReflectionFormat
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`preferredReflectionFormat`**-Eigenschaft der {{DOMxRef("XRSession")}}-Schnittstelle gibt das bevorzugte Reflexionsformat dieser Sitzung zurück, das für Lichtschätzungs-Texturdaten verwendet wird.

## Wert

Ein String, der das Reflexionsformat darstellt. Mögliche Werte:

| XRReflectionFormat | WebGL-Format | WebGL-Internes Format | WebGPU-Format     | HDR |
| ------------------ | ------------ | --------------------- | ----------------- | --- |
| "srgba8"           | RGBA         | SRGB8_ALPHA8          | "rgba8unorm-srgb" |     |
| "rgba16f"          | RGBA         | RGBA16F               | "rgba16float"     | ✓   |

## Beispiele

### Anfordern einer Lichtsonde mit dem bevorzugten Format des Systems

Sie können eine Lichtsonde mit {{domxref("XRSession.requestLightProbe()")}} anfordern und das bevorzugte Format des Systems angeben, indem Sie die `reflectionFormat`-Option auf `XRSession.preferredReflectionFormat` setzen.

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

- {{domxref("XRSession.requestLightProbe()")}}
