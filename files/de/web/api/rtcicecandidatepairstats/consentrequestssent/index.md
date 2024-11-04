---
title: "RTCIceCandidatePairStats: consentRequestsSent Eigenschaft"
short-title: consentRequestsSent
slug: Web/API/RTCIceCandidatePairStats/consentRequestsSent
l10n:
  sourceCommit: 1ea99c8e68a85aac13ba846bbe95a6f686771221
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`consentRequestsSent`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt die Gesamtzahl der auf diesem Kandidatenpaar gesendeten Zustimmungsanfragen an.

Falls einer oder beide der Peers im Paar über [Network Address Translation](/de/docs/Web/API/WebRTC_API/Protocols#nat) (NAT) auf das Internet zugreifen, muss der andere Peer regelmäßig eine [Session Traversal Utilities for NAT (STUN)](/de/docs/Web/API/WebRTC_API/Protocols#stun)-Anfrage an die NAT-Firewall senden, um um Zustimmung zu bitten, damit der Datenverkehr fließen kann. Diese Eigenschaft zählt die Anzahl der Anfragen. Weitere Informationen zu NAT und Zustimmung finden Sie in {{rfc("7675")}}.

### Wert

Ein ganzzahliger Wert, der die Gesamtzahl der an die Peers im Kandidatenpaar gesendeten Zustimmungsanfragen angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
