---
title: "RTCInboundRtpStreamStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCInboundRtpStreamStats/id
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs ist ein String, der das Objekt, für das dieses Objekt Statistiken bereitstellt, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen korrelieren, um Statistiken über die Zeit für ein bestimmtes WebRTC-Objekt zu überwachen, wie z. B. eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel).

## Wert

Ein String, der das Objekt, für das dieses `RTCInboundRtpStreamStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format des ID-Strings ist von der Spezifikation nicht definiert, daher können Sie keine zuverlässigen Annahmen über den Inhalt des Strings machen oder davon ausgehen, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
