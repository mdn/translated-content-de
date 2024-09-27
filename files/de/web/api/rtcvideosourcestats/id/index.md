---
title: "RTCVideoSourceStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCVideoSourceStats/id
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats)-Dictionary ist ein String, der das Objekt, für das dieses Objekt Statistiken bereitstellt, eindeutig identifiziert.

Mithilfe der `id` können Sie dieses Statistikobjekt mit anderen korrelieren, um Statistiken über die Zeit für ein gegebenes WebRTC-Objekt zu überwachen, wie zum Beispiel eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel).

## Wert

Ein String, der das Objekt, für das dieses `RTCVideoSourceStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format des ID-Strings ist in der Spezifikation nicht definiert, daher können Sie keine verlässlichen Annahmen über den Inhalt des Strings machen oder davon ausgehen, dass das Format des Strings für einen gegebenen Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
