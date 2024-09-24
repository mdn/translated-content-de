---
title: "RTCIceCandidateStats: url Eigenschaft"
short-title: url
slug: Web/API/RTCIceCandidateStats/url
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`url`**-Eigenschaft des {{domxref("RTCIceCandidateStats")}}-Wörterbuchs gibt die URL des {{Glossary("ICE")}}-Servers an, von dem der beschriebene Kandidat bezogen wurde. Diese Eigenschaft ist _nur_ für lokale Kandidaten verfügbar.

## Wert

Ein String, der die URL des ICE-Servers angibt, von dem der durch `RTCIceCandidateStats` beschriebene Kandidat bezogen wurde. Dies ist dieselbe URL, die auch in der {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}-Ereigniseigenschaft {{domxref("RTCPeerConnectionIceEvent.url", "url")}} empfangen werden würde.

> [!NOTE]
> Diese Eigenschaft existiert nicht für entfernte Kandidaten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
