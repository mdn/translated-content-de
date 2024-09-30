---
title: "XRDepthInformation: rawValueToMeters Eigenschaft"
short-title: rawValueToMeters
slug: Web/API/XRDepthInformation/rawValueToMeters
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`rawValueToMeters`** Eigenschaft des [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation) Schnittstelle enthält den Skalierungsfaktor, mit dem die rohen Tiefenwerte multipliziert werden müssen, um die Tiefen in Metern zu erhalten.

Für CPU-Tiefeninformationen siehe auch die Methode [`XRCPUDepthInformation.getDepthInMeters()`](/de/docs/Web/API/XRCPUDepthInformation/getDepthInMeters).

## Wert

Eine Zahl.

## Beispiele

Verwenden Sie [`XRFrame.getDepthInformation()`](/de/docs/Web/API/XRFrame/getDepthInformation) (CPU) oder [`XRWebGLBinding.getDepthInformation()`](/de/docs/Web/API/XRWebGLBinding/getDepthInformation) (WebGL), um Tiefeninformationen zu erhalten. Die zurückgegebenen Objekte enthalten den `rawValueToMeters` Skalierungsfaktor, der für weitere Berechnungen verwendet werden kann.

Für CPU-Tiefeninformationen und einen Puffer im "luminance-alpha"-Format:

```js
const uint16 = new Uint16Array(depthInfo.data);
const index = column + row * depthInfo.width;
const depthInMeters = uint16[index] * depthInfo.rawValueToMeters;
```

(Verwenden Sie {{jsxref("Float32Array")}} für ein "float32" Datenformat.)

Beachten Sie, dass die Tiefe in Metern in Tiefenpuffer-Koordinaten vorliegt. Zusätzliche Schritte sind erforderlich, um sie in normalisierte Ansichtskoordinaten zu konvertieren, oder es kann die Methode [`XRCPUDepthInformation.getDepthInMeters()`](/de/docs/Web/API/XRCPUDepthInformation/getDepthInMeters) verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
