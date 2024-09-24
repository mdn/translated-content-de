---
title: "XRCPUDepthInformation: data-Eigenschaft"
short-title: data
slug: Web/API/XRCPUDepthInformation/data
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die _schreibgeschützte_ **`data`**-Eigenschaft des {{DOMxRef("XRCPUDepthInformation")}}-Interfaces ist ein {{jsxref("ArrayBuffer")}}, der Tiefenpufferinformationen im Rohformat enthält.

Die Daten sind zeilenweise ohne Auffüllung gespeichert, wobei jeder Eintrag der Entfernung von der Nahplane der Ansicht zur Umgebung des Benutzers entspricht, in nicht spezifizierten Einheiten. Die Größe jedes Dateneintrags und der Typ werden durch {{domxref("XRSession.depthDataFormat", "depthDataFormat")}} bestimmt. Die Werte können von nicht spezifizierten Einheiten in Meter umgewandelt werden, indem sie mit {{domxref("XRDepthInformation.rawValueToMeters", "rawValueToMeters")}} multipliziert werden. Die {{domxref("XRDepthInformation.normDepthBufferFromNormView", "normDepthBufferFromNormView")}}-Eigenschaft kann verwendet werden, um von normalisierten Ansichtskoordinaten (ein Ursprung in der oberen linken Ecke der Ansicht, mit der X-Achse nach rechts und der Y-Achse nach unten wachsend) in das Koordinatensystem des Tiefenpuffers zu transformieren.

## Wert

Ein {{jsxref("ArrayBuffer")}}.

## Beispiele

Verwenden Sie {{domxref("XRFrame.getDepthInformation()")}} um Tiefeninformationen zu erhalten. Das zurückgegebene `XRCPUDepthInformation`-Objekt wird den `data`-Puffer enthalten.

Für CPU-Tiefeninformationen und einen Puffer im Format "luminance-alpha":

```js
const uint16 = new Uint16Array(depthInfo.data);
const index = column + row * depthInfo.width;
const depthInMeters = uint16[index] * depthInfo.rawValueToMeters;
```

(Verwenden Sie {{jsxref("Float32Array")}} für ein "float32"-Datenformat.)

Beachten Sie, dass die Tiefe in Metern in Tiefenpufferkoordinaten vorliegt. Zusätzliche Schritte sind erforderlich, um sie in normalisierte Ansichtskoordinaten umzuwandeln, oder die Methode {{domxref("XRCPUDepthInformation.getDepthInMeters()")}} kann verwendet werden.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
