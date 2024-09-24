---
title: "RTCRemoteInboundRtpStreamStats: Eigenschaft localId"
short-title: localId
slug: Web/API/RTCRemoteInboundRtpStreamStats/localId
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`localId`** Eigenschaft des {{domxref("RTCRemoteInboundRtpStreamStats")}} Dictionaries ist ein String, der verwendet werden kann, um das {{domxref("RTCOutboundRtpStreamStats")}} Objekt zu identifizieren, dessen {{domxref("RTCOutboundRtpStreamStats.remoteId", "remoteId")}} mit diesem Wert übereinstimmt.

Zusammen bieten diese beiden Objekte Statistiken über die eingehende und ausgehende Seite der gleichen [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc).

## Wert

Ein String, der mit dem Wert der {{domxref("RTCOutboundRtpStreamStats")}} Eigenschaft {{domxref("RTCOutboundRtpStreamStats.remoteId", "remoteId")}} verglichen werden kann, um zu sehen, ob beide Statistiken für jede der beiden Seiten des gleichen Satzes von Daten, die vom lokalen Teilnehmer gesendet werden, darstellen.

## Hinweise zur Nutzung

Sie können sich die lokalen und entfernten Ansichten des gleichen RTP-Streams als Paare vorstellen, von denen jedes eine Referenz zurück zu dem anderen hat. Daher sollte, wenn ein {{domxref("RTCStatsReport")}} ein `remote-inbound-rtp` Statistikobjekt (vom Typ `RTCRemoteInboundRtpStreamStats`) enthält, es auch ein entsprechendes `outbound-rtp` Objekt haben.

Beide bieten Informationen über die gleiche Reihe von Paketen, die vom lokalen Gerät an den entfernten Teilnehmer gesendet werden. Der Unterschied besteht darin, dass `outbound-rtp` Statistiken über die ausgehenden Daten aus der Sicht des lokalen Teilnehmers bietet, während `remote-inbound-rtp` Statistiken über die gleichen Daten aus der Sicht des entfernten Teilnehmers bereitstellt, wie sie empfangen werden.

## Beispiele

Sehen Sie sich das Beispiel in {{domxref("RTCRemoteOutboundRtpStreamStats.localId")}} an. Dieses zeigt, wie man Statistiken über Daten, die vom entfernten Teilnehmer gesendet werden (aus der Sicht des entfernten Teilnehmers), mit den eingehenden Daten aus der Sicht des lokalen Teilnehmers korreliert.

Der Code, um gesendete Daten aus der Sicht des lokalen Teilnehmers und empfangene Daten aus der Sicht des entfernten Teilnehmers zu korrelieren, wäre fast derselbe und kann aus diesem Beispiel abgeleitet werden.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
