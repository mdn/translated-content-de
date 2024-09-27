---
title: "RTCRemoteOutboundRtpStreamStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCRemoteOutboundRtpStreamStats/id
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Dictionaries ist ein String, der das Objekt, für das dieser Statistik-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistik-Objekt mit anderen korrelieren, um Statistiken über die Zeit für ein gegebenes WebRTC-Objekt wie eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zu überwachen.

## Wert

Ein String, der das Objekt, für das dieses `RTCRemoteOutboundRtpStreamStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format des ID-Strings ist nicht durch die Spezifikation definiert, daher können Sie keine verlässlichen Annahmen über den Inhalt des Strings treffen oder davon ausgehen, dass das Format des Strings für einen gegebenen Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
