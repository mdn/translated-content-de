---
title: "XRDepthInformation: rawValueToMeters-Eigenschaft"
short-title: rawValueToMeters
slug: Web/API/XRDepthInformation/rawValueToMeters
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`rawValueToMeters`**-Eigenschaft der {{DOMxRef("XRDepthInformation")}}-Schnittstelle enthält den Skalierungsfaktor, mit dem die Rohwert-Tiefenwerte multipliziert werden müssen, um die Tiefen in Metern zu erhalten.

Für CPU-Tiefeninformationen siehe auch die {{domxref("XRCPUDepthInformation.getDepthInMeters()")}}-Methode.

## Wert

Eine Zahl.

## Beispiele

Verwenden Sie {{domxref("XRFrame.getDepthInformation()")}} (CPU) oder {{domxref("XRWebGLBinding.getDepthInformation()")}} (WebGL), um Tiefeninformationen zu erhalten. Die zurückgegebenen Objekte enthalten den `rawValueToMeters`-Skalierungsfaktor, der für weitere Berechnungen genutzt werden kann.

Für CPU-Tiefeninformationen und einen Puffer im "luminance-alpha"-Format:

```js
const uint16 = new Uint16Array(depthInfo.data);
const index = column + row * depthInfo.width;
const depthInMeters = uint16[index] * depthInfo.rawValueToMeters;
```

(Verwenden Sie {{jsxref("Float32Array")}} für ein "float32"-Datenformat.)

Beachten Sie, dass die Tiefe in Metern in Tiefenpuffer-Koordinaten angegeben ist. Zusätzliche Schritte sind erforderlich, um sie in normalisierte Ansichtskoordinaten umzuwandeln, oder die {{domxref("XRCPUDepthInformation.getDepthInMeters()")}}-Methode kann verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
