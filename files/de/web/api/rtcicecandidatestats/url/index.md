---
title: "RTCIceCandidateStats: url-Eigenschaft"
short-title: url
slug: Web/API/RTCIceCandidateStats/url
l10n:
  sourceCommit: 7c03abf6c6abaf0013f6606cae9cb97717415cce
---

{{APIRef("WebRTC")}}

Die **`url`**-Eigenschaft des [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuchs gibt die URL des {{Glossary("ICE", "ICE")}}-Servers an, von dem der beschriebene Kandidat abgerufen wurde. Diese Eigenschaft ist _nur_ für lokale Kandidaten verfügbar.

## Wert

Ein String, der die URL des ICE-Servers angibt, von dem der durch `RTCIceCandidateStats` beschriebene Kandidat abgerufen wurde. Dies ist die gleiche URL, die in der [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Veranstaltungseigenschaft [`url`](/de/docs/Web/API/RTCPeerConnectionIceEvent/url) empfangen werden würde.

> [!NOTE]
> Diese Eigenschaft existiert nicht für entfernte Kandidaten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
