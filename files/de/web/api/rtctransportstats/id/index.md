---
title: "RTCTransportStats: id Eigenschaft"
short-title: id
slug: Web/API/RTCTransportStats/id
l10n:
  sourceCommit: be0fee87cb391fb077053fc7ca7640b7e51d1da8
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des {{domxref("RTCTransportStats")}}-Wörterbuchs ist ein String, der das Objekt, für das diese Statistik erstellt wird, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen in Zusammenhang bringen, um die Statistiken über die Zeit für ein bestimmtes WebRTC-Objekt, wie einen {{domxref("RTCDtlsTransport")}} oder eine {{domxref("RTCPeerConnection")}}, zu überwachen.

## Wert

Ein String, der das Objekt, für das dieses `RTCTransportStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format des ID-Strings ist nicht durch die Spezifikation definiert, daher können Sie keine verlässlichen Annahmen über die Inhalte des Strings machen oder davon ausgehen, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
