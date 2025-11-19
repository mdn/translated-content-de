---
title: "RTCRemoteInboundRtpStreamStats: localId-Eigenschaft"
short-title: localId
slug: Web/API/RTCRemoteInboundRtpStreamStats/localId
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("WebRTC")}}

Die **`localId`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs ist ein String, der verwendet werden kann, um das [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Objekt zu identifizieren, dessen [`remoteId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/remoteId) mit diesem Wert übereinstimmt.

Zusammen bieten diese beiden Objekte Statistiken über die eingehenden und ausgehenden Seiten derselben [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc).

## Wert

Ein String, der mit dem Wert der [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats) Eigenschaft [`remoteId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/remoteId) verglichen werden kann, um zu sehen, ob die beiden Statistiken für jede der beiden Seiten desselben Datensatzes repräsentieren, die vom lokalen Peer gesendet wurden.

## Verwendungshinweise

Sie können sich die lokalen und entfernten Ansichten desselben RTP-Streams als Paare vorstellen, von denen jedes einen Verweis auf das andere hat.
Wenn ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) ein `remote-inbound-rtp` Statistikobjekt (vom Typ `RTCRemoteInboundRtpStreamStats`) enthält, sollte es auch ein entsprechendes `outbound-rtp` Objekt haben.

Beide bieten Informationen über denselben Batch von Paketen, die vom lokalen Gerät an den entfernten Peer gesendet werden.
Der Unterschied besteht darin, dass `outbound-rtp` Statistiken über die ausgehenden Daten aus Sicht des lokalen Peers bietet, während `remote-inbound-rtp` Statistiken über dieselben Daten aus der Perspektive des entfernten Peers bietet, wie sie empfangen werden.

## Beispiele

Sehen Sie sich das Beispiel in [`RTCRemoteOutboundRtpStreamStats.localId`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/localId) an.
Dies zeigt, wie man Statistiken über Daten korreliert, die vom entfernten Peer gesendet werden (aus der Perspektive des entfernten Peers), mit den eingehenden Daten aus der Perspektive des lokalen Peers.

Der Code, um gesendete Daten aus der Perspektive des lokalen Peers und empfangene Daten aus der Perspektive des entfernten Peers zu korrelieren, wäre fast derselbe und kann aus diesem Beispiel abgeleitet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
