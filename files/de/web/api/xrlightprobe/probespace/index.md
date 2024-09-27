---
title: "XRLightProbe: probeSpace Eigenschaft"
short-title: probeSpace
slug: Web/API/XRLightProbe/probeSpace
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`probeSpace`**-Eigenschaft des [`XRLightProbe`](/de/docs/Web/API/XRLightProbe)-Interfaces gibt ein [`XRSpace`](/de/docs/Web/API/XRSpace) zurück, welches die Position und Ausrichtung verfolgt, relativ zu der die Lichtschätzungen gemacht werden.

## Wert

Ein [`XRSpace`](/de/docs/Web/API/XRSpace)-Objekt.

## Beispiele

Die `probeSpace`-Eigenschaft gibt die Position und Ausrichtung im Raum zurück, relativ zu der die Lichtschätzung erfolgt. Diese kann sich im Laufe der Zeit aktualisieren, wenn sich der Benutzer bewegt. Verwenden Sie die Methode [`XRFrame.getPose()`](/de/docs/Web/API/XRFrame/getPose), um den aktuellen Lichtzustand mit jedem Frame abzurufen.

```js
const lightProbe = await xrSession.requestLightProbe();
const probePose = xrFrame.getPose(lightProbe.probeSpace, xrReferenceSpace);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRSpace()`](/de/docs/Web/API/XRSpace)
- [`XRFrame.getPose()`](/de/docs/Web/API/XRFrame/getPose)
