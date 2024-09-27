---
title: "RTCTransportStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCTransportStats/id
l10n:
  sourceCommit: be0fee87cb391fb077053fc7ca7640b7e51d1da8
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuchs ist ein String, der das Objekt, für das dieses Objekt Statistiken bereitstellt, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen in Beziehung setzen, um Statistiken über die Zeit für ein bestimmtes WebRTC-Objekt, wie zum Beispiel ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) oder eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), zu überwachen.

## Wert

Ein String, der das Objekt, für das dieses `RTCTransportStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format des ID-Strings ist von der Spezifikation nicht definiert, so dass Sie keine zuverlässigen Annahmen über den Inhalt des Strings machen oder davon ausgehen können, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
