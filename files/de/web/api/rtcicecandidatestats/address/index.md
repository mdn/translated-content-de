---
title: "RTCIceCandidateStats: address-Eigenschaft"
short-title: address
slug: Web/API/RTCIceCandidateStats/address
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`address`**-Eigenschaft des
[`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuchs gibt die Adresse des
{{Glossary("ICE", "ICE")}}-Kandidaten an. Obwohl bevorzugt wird, dass die Adresse als IPv4- oder IPv6-Zahladresse angegeben wird, kann auch ein vollständig qualifizierter Domainname verwendet werden.

Wenn ein Domainname angegeben wird, wird die erste für diese Adresse ausgewählte IP-Adresse verwendet, selbst wenn der Domainname mehreren IP-Adressen zugeordnet ist.

## Wert

Entweder eine IPv4- oder IPv6-Adresse oder ein vollständig qualifizierter Domainname, der dem Kandidaten entspricht.

- Wenn der Wert von `address` vollständig aus Ziffern von 0-9 mit Punkten als Trennzeichen besteht, wird der Wert als IPv4-Adresse interpretiert.
- Wenn der Wert vollständig aus hexadezimalen Ziffern und Doppelpunktzeichen (":") besteht, wird er als IPv6-Adresse interpretiert.
- Andernfalls wird die `address` als vollständig qualifizierter Domainname betrachtet, der zuerst mit einem AAAA-Datensatz (vorausgesetzt, IPv6 ist verfügbar) und dann mit einem A-Datensatz aufgelöst wird (wenn kein Ergebnis gefunden wird oder das Gerät nur IPv4 unterstützt). Wenn mehrere IP-Adressen als Antwort auf die Abfrage zurückgegeben werden, wählt das {{Glossary("user_agent", "User-Agent")}} eine aus, die dann für die Dauer der ICE-Verarbeitung verwendet wird.

## Nutzungshinweise

Die `address`-Eigenschaft war zuvor als `ip` bekannt und erlaubte nur die Verwendung von IPv4- und IPv6-Adressen. Mit der Unterstützung von vollständig qualifizierten Domainnamen für die Adresse wurde die Umbenennung der Eigenschaft vorgenommen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
