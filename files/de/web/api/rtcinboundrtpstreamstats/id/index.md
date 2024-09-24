---
title: "RTCInboundRtpStreamStats: Eigenschaft id"
short-title: id
slug: Web/API/RTCInboundRtpStreamStats/id
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des {{domxref("RTCInboundRtpStreamStats")}}-Wörterbuchs ist ein String, der das Objekt, für das dieses Objekt Statistiken bereitstellt, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen korrelieren, um Statistiken im Laufe der Zeit für ein bestimmtes WebRTC-Objekt zu überwachen, wie zum Beispiel ein {{domxref("RTCPeerConnection")}} oder ein {{domxref("RTCDataChannel")}}.

## Wert

Ein String, der das Objekt, für das dieses `RTCInboundRtpStreamStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format des ID-Strings ist von der Spezifikation nicht definiert, sodass Sie keine verlässlichen Annahmen über den Inhalt des Strings treffen oder davon ausgehen können, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
