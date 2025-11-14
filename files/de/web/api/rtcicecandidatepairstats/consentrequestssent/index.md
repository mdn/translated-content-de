---
title: "RTCIceCandidatePairStats: consentRequestsSent-Eigenschaft"
short-title: consentRequestsSent
slug: Web/API/RTCIceCandidatePairStats/consentRequestsSent
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`consentRequestsSent`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Dictionaries gibt die Gesamtanzahl der auf diesem Kandidatenpaar gesendeten Einwilligungsanfragen an.

Wenn einer oder beide Teilnehmer des Paares über [Network Address Translation](/de/docs/Web/API/WebRTC_API/Protocols#nat) (NAT) auf das Internet zugreifen, muss der andere Teilnehmer regelmäßig eine [Session Traversal Utilities for NAT (STUN)](/de/docs/Web/API/WebRTC_API/Protocols#stun)-Anfrage an die NAT-Firewall senden, um um Erlaubnis zu bitten, den Datenverkehr fließen zu lassen. Diese Eigenschaft zählt die Anzahl der Anfragen.
{{rfc("7675")}} enthält weitere Informationen über NAT und Einwilligung.

## Wert

Ein ganzzahliger Wert, der die Gesamtanzahl der an die Teilnehmer im Kandidatenpaar gesendeten Einwilligungsanfragen angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
