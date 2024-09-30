---
title: "RTCIceCandidateStats: url-Eigenschaft"
short-title: url
slug: Web/API/RTCIceCandidateStats/url
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`url`**-Eigenschaft des [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuchs gibt die URL des [ICE](/de/docs/Glossary/ICE)-Servers an, von dem der beschriebene Kandidat abgerufen wurde. Diese Eigenschaft ist _nur_ für lokale Kandidaten verfügbar.

## Wert

Ein String, der die URL des ICE-Servers angibt, von dem der in `RTCIceCandidateStats` beschriebene Kandidat abgerufen wurde. Dies ist die gleiche URL, die in der [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereigniseigenschaft [`url`](/de/docs/Web/API/RTCPeerConnectionIceEvent/url) empfangen wird.

> [!NOTE]
> Diese Eigenschaft existiert nicht für entfernte Kandidaten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
