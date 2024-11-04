---
title: "RTCIceCandidatePairStats: consentRequestsSent-Eigenschaft"
short-title: consentRequestsSent
slug: Web/API/RTCIceCandidatePairStats/consentRequestsSent
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}

Die **`consentRequestsSent`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt die Gesamtanzahl der auf diesem Kandidatenpaar gesendeten Zustimmungsanforderungen an.

Wenn entweder oder beide Peers des Paares auf das Internet über [Network Address Translation](/de/docs/Web/API/WebRTC_API/Protocols#nat) (NAT) zugreifen, muss der andere Peer regelmäßig eine [Session Traversal Utilities for NAT (STUN)](/de/docs/Web/API/WebRTC_API/Protocols#stun)-Anforderung an die NAT-Firewall senden, um die Erlaubnis zu erfragen, den Datenverkehr zuzulassen.
Diese Eigenschaft zählt die Anzahl der Anfragen.
{{rfc("7675")}} bietet weitere Informationen zu NAT und Zustimmung.

### Wert

Ein ganzzahliger Wert, der die Gesamtzahl der an die Peers im Kandidatenpaar gesendeten Zustimmungsanfragen angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
