---
title: "XRLightProbe: probeSpace-Eigenschaft"
short-title: probeSpace
slug: Web/API/XRLightProbe/probeSpace
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`probeSpace`**-Eigenschaft des {{DOMxRef("XRLightProbe")}}-Interfaces gibt ein {{domxref("XRSpace")}} zurück, das die Position und Orientierung verfolgt, relativ zu der die Beleuchtungsschätzungen gemacht werden.

## Wert

Ein {{domxref("XRSpace")}}-Objekt.

## Beispiele

Die `probeSpace`-Eigenschaft gibt die Position und Orientierung im Raum zurück, relativ zu der die Beleuchtungsschätzung gemacht wird. Sie kann sich im Laufe der Zeit aktualisieren, wenn sich der Benutzer bewegt. Verwenden Sie die Methode {{domxref("XRFrame.getPose()")}}, um den aktuellen Beleuchtungszustand mit jedem Frame zu erhalten.

```js
const lightProbe = await xrSession.requestLightProbe();
const probePose = xrFrame.getPose(lightProbe.probeSpace, xrReferenceSpace);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRSpace()")}}
- {{domxref("XRFrame.getPose()")}}
