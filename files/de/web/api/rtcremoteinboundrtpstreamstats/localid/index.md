---
title: "RTCRemoteInboundRtpStreamStats: localId-Eigenschaft"
short-title: localId
slug: Web/API/RTCRemoteInboundRtpStreamStats/localId
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`localId`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs ist eine Zeichenfolge, die dazu verwendet werden kann, das [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Objekt zu identifizieren, dessen [`remoteId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/remoteId) mit diesem Wert übereinstimmt.

Zusammen liefern diese beiden Objekte Statistiken über die eingehende und ausgehende Seite derselben [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc).

## Wert

Eine Zeichenfolge, die mit dem Wert der [`remoteId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/remoteId)-Eigenschaft eines [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Objekts verglichen werden kann, um zu sehen, ob die beiden Statistiken für beide Seiten desselben Datensatzes darstellen, der vom lokalen Teilnehmer gesendet wird.

## Anwendungshinweise

Man kann sich vorstellen, dass die lokalen und entfernten Ansichten desselben RTP-Streams als Paare fungieren, von denen jedes einen Verweis zurück auf das andere hat.
Daher sollte ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), das ein `remote-inbound-rtp`-Statistikobjekt (vom Typ `RTCRemoteInboundRtpStreamStats`) enthält, ein entsprechendes `outbound-rtp`-Objekt haben.

Beide bieten Informationen über denselben Datensatz von Paketen, die von der lokalen Einheit an den entfernten Teilnehmer gesendet werden.
Der Unterschied besteht darin, dass `outbound-rtp` Statistiken über die ausgehenden Daten aus der Sicht des lokalen Teilnehmers bietet, während `remote-inbound-rtp` Statistiken über dieselben Daten aus der Sicht des entfernten Teilnehmers bereitstellt, wie sie empfangen werden.

## Beispiele

Siehe das Beispiel in [`RTCRemoteOutboundRtpStreamStats.localId`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/localId).
Dies zeigt, wie man Statistiken über die vom entfernten Teilnehmer gesendeten Daten (aus der Perspektive des entfernten Teilnehmers) mit den eingehenden Daten aus der Perspektive des lokalen Teilnehmers korreliert.

Der Code, um gesendete Daten aus dem Blickwinkel des lokalen Teilnehmers und empfangene Daten aus der Sicht des entfernten Teilnehmers zu korrelieren, wäre fast derselbe und kann aus diesem Beispiel abgeleitet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
