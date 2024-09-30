---
title: "RTCRemoteInboundRtpStreamStats: localId-Eigenschaft"
short-title: localId
slug: Web/API/RTCRemoteInboundRtpStreamStats/localId
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`localId`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs ist ein String, der verwendet werden kann, um das [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Objekt zu identifizieren, dessen [`remoteId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/remoteId) mit diesem Wert übereinstimmt.

Zusammen liefern diese beiden Objekte Statistiken über die ein- und ausgehenden Seiten derselben [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc).

## Wert

Ein String, der mit dem Wert der [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Objekteigenschaft [`remoteId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/remoteId) verglichen werden kann, um festzustellen, ob die beiden Statistiken für jede der beiden Seiten desselben vom lokalen Teilnehmer gesendeten Datensatzes darstellen.

## Anwendungshinweise

Sie können die lokale und entfernte Ansicht desselben RTP-Streams als Paare betrachten, von denen jedes einen Verweis auf das andere hat.
Daher sollte ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), das ein `remote-inbound-rtp`-Statistikobjekt (vom Typ `RTCRemoteInboundRtpStreamStats`) enthält, ebenfalls ein entsprechendes `outbound-rtp`-Objekt enthalten.

Beide bieten Informationen über dasselbe Paketbündel, das vom lokalen Gerät an den entfernten Teilnehmer gesendet wird.
Der Unterschied besteht darin, dass `outbound-rtp` Statistiken über die ausgehenden Daten aus der Sicht des lokalen Teilnehmers bietet, während `remote-inbound-rtp` Statistiken über dieselben Daten aus der Sicht des entfernten Teilnehmers bietet, wie sie empfangen werden.

## Beispiele

Siehe das Beispiel in [`RTCRemoteOutboundRtpStreamStats.localId`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/localId).
Dies zeigt, wie man Statistiken über Daten korreliert, die vom entfernten Teilnehmer (aus der Sicht des entfernten Teilnehmers) gesendet werden, mit den eingehenden Daten aus der Sicht des lokalen Teilnehmers.

Der Code, um gesendete Daten aus der Sicht des lokalen Teilnehmers und empfangene Daten aus der Sicht des entfernten Teilnehmers zu korrelieren, wäre fast derselbe und kann aus diesem Beispiel abgeleitet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
