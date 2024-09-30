---
title: "XRCPUDepthInformation: Daten-Eigenschaft"
short-title: data
slug: Web/API/XRCPUDepthInformation/data
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die _schreibgeschützte_ **`data`**-Eigenschaft der Schnittstelle [`XRCPUDepthInformation`](/de/docs/Web/API/XRCPUDepthInformation) ist ein {{jsxref("ArrayBuffer")}}, der Tiefenpufferinformationen im Rohformat enthält.

Die Daten sind im Zeilen-Major-Format ohne Auffüllung gespeichert, wobei jeder Eintrag dem Abstand von der Nah-Ebene der Ansicht zur Umgebung der Benutzer entspricht, in nicht näher angegebenen Einheiten. Die Größe jedes Dateneintrags und der Typ werden durch [`depthDataFormat`](/de/docs/Web/API/XRSession/depthDataFormat) bestimmt. Die Werte können aus nicht näher angegebenen Einheiten in Meter umgewandelt werden, indem sie mit [`rawValueToMeters`](/de/docs/Web/API/XRDepthInformation/rawValueToMeters) multipliziert werden. Die Eigenschaft [`normDepthBufferFromNormView`](/de/docs/Web/API/XRDepthInformation/normDepthBufferFromNormView) kann verwendet werden, um von den normalisierten Ansichtskoordinaten (ein Ursprung in der oberen linken Ecke der Ansicht, mit einer X-Achse, die nach rechts wächst, und einer Y-Achse, die nach unten wächst) in das Koordinatensystem des Tiefenpuffers zu transformieren.

## Wert

Ein {{jsxref("ArrayBuffer")}}.

## Beispiele

Verwenden Sie [`XRFrame.getDepthInformation()`](/de/docs/Web/API/XRFrame/getDepthInformation), um Tiefeninformationen zu erhalten. Das zurückgegebene `XRCPUDepthInformation`-Objekt enthält den `data`-Puffer.

Für CPU-Tiefeninformation und einen Puffer im "Luminance-Alpha"-Format:

```js
const uint16 = new Uint16Array(depthInfo.data);
const index = column + row * depthInfo.width;
const depthInMeters = uint16[index] * depthInfo.rawValueToMeters;
```

(Verwenden Sie {{jsxref("Float32Array")}} für ein "float32"-Datenformat.)

Beachten Sie, dass die Tiefe in Metern in Tiefenpuffer-Koordinaten vorliegt. Zusätzliche Schritte sind erforderlich, um sie in normalisierte Ansichtskoordinaten zu konvertieren, oder die Methode [`XRCPUDepthInformation.getDepthInMeters()`](/de/docs/Web/API/XRCPUDepthInformation/getDepthInMeters) kann verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
