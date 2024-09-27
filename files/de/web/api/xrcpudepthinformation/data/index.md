---
title: "XRCPUDepthInformation: data-Eigenschaft"
short-title: data
slug: Web/API/XRCPUDepthInformation/data
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die _schreibgeschützte_ **`data`**-Eigenschaft der [`XRCPUDepthInformation`](/de/docs/Web/API/XRCPUDepthInformation)-Schnittstelle ist ein {{jsxref("ArrayBuffer")}}, der Tiefenpufferinformationen im Rohformat enthält.

Die Daten sind im Zeilen-Major-Format ohne Padding gespeichert, wobei jeder Eintrag der Entfernung von der Nahplane der Ansicht zur Umgebung des Nutzers entspricht, in nicht spezifizierten Einheiten. Die Größe jedes Dateneintrags und der Typ wird durch [`depthDataFormat`](/de/docs/Web/API/XRSession/depthDataFormat) bestimmt. Die Werte können von nicht spezifizierten Einheiten in Meter umgerechnet werden, indem sie mit [`rawValueToMeters`](/de/docs/Web/API/XRDepthInformation/rawValueToMeters) multipliziert werden. Die Eigenschaft [`normDepthBufferFromNormView`](/de/docs/Web/API/XRDepthInformation/normDepthBufferFromNormView) kann verwendet werden, um von normalisierten Ansichtskonfigurationen (ein Ursprung in der oberen linken Ecke der Ansicht, mit der X-Achse nach rechts und der Y-Achse nach unten wachsend) in das Koordinatensystem des Tiefenpuffers zu transformieren.

## Wert

Ein {{jsxref("ArrayBuffer")}}.

## Beispiele

Verwenden Sie [`XRFrame.getDepthInformation()`](/de/docs/Web/API/XRFrame/getDepthInformation), um Tiefeninformationen zu erhalten. Das zurückgegebene `XRCPUDepthInformation`-Objekt enthält den `data`-Puffer.

Für CPU-Tiefeninformationen und einen Puffer mit dem Format "luminance-alpha":

```js
const uint16 = new Uint16Array(depthInfo.data);
const index = column + row * depthInfo.width;
const depthInMeters = uint16[index] * depthInfo.rawValueToMeters;
```

(Verwenden Sie {{jsxref("Float32Array")}} für ein "float32"-Datenformat.)

Beachten Sie, dass die Tiefe in Metern in Tiefenpuffer-Koordinaten angegeben ist. Zusätzliche Schritte sind erforderlich, um sie in normalisierte Ansichtskonfigurationen umzuwandeln, oder die Methode [`XRCPUDepthInformation.getDepthInMeters()`](/de/docs/Web/API/XRCPUDepthInformation/getDepthInMeters) kann verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
