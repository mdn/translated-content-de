---
title: "RTCOutboundRtpStreamStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCOutboundRtpStreamStats/id
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein String, der das Objekt, für das dieses Objekt Statistiken bereitstellt, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen korrelieren, um Statistiken über die Zeit für ein bestimmtes WebRTC-Objekt zu überwachen, wie etwa eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel).

## Wert

Ein String, der das Objekt, für das dieses `RTCOutboundRtpStreamStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format des ID-Strings ist von der Spezifikation nicht definiert, daher können Sie keine verlässlichen Annahmen über den Inhalt des Strings treffen oder davon ausgehen, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
