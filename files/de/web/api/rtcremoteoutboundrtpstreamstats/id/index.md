---
title: "RTCRemoteOutboundRtpStreamStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCRemoteOutboundRtpStreamStats/id
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Wörterbuchs ist eine Zeichenkette, die das Objekt, für das diese Statistik bereitgestellt wird, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen korrelieren, um Statistiken über die Zeit für ein bestimmtes WebRTC-Objekt zu überwachen, wie zum Beispiel eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel).

## Wert

Eine Zeichenkette, die das Objekt, für das dieses `RTCRemoteOutboundRtpStreamStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format der ID-Zeichenkette ist nicht durch die Spezifikation definiert, sodass Sie keine verlässlichen Annahmen über den Inhalt der Zeichenkette treffen oder davon ausgehen können, dass das Format der Zeichenkette für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
