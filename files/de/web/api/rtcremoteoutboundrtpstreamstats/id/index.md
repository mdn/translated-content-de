---
title: "RTCRemoteOutboundRtpStreamStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCRemoteOutboundRtpStreamStats/id
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des {{domxref("RTCRemoteOutboundRtpStreamStats")}}-Wörterbuchs ist ein String, der das Objekt, für das dieses Objekt Statistiken liefert, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen korrelieren, um Statistiken über die Zeit für ein bestimmtes WebRTC-Objekt, wie eine {{domxref("RTCPeerConnection")}} oder einen {{domxref("RTCDataChannel")}}, zu überwachen.

## Wert

Ein String, der das Objekt, für das dieses `RTCRemoteOutboundRtpStreamStats`-Objekt Statistiken liefert, eindeutig identifiziert.

Das Format des ID-Strings ist nicht durch die Spezifikation definiert, daher können Sie keine verlässlichen Annahmen über den Inhalt des Strings treffen oder davon ausgehen, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
