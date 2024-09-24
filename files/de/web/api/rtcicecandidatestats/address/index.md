---
title: "RTCIceCandidateStats: address-Eigenschaft"
short-title: address
slug: Web/API/RTCIceCandidateStats/address
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`address`**-Eigenschaft des {{domxref("RTCIceCandidateStats")}}-Wörterbuchs gibt die Adresse des {{Glossary("ICE")}}-Kandidaten an. Es wird bevorzugt, dass die Adresse als IPv4- oder IPv6-Nummer angegeben wird, es kann jedoch auch ein vollständig qualifizierter Domainname verwendet werden.

Wenn ein Domainname angegeben ist, wird die erste IP-Adresse verwendet, die für diese Adresse ausgewählt wird, auch wenn der Domainname auf mehrere IP-Adressen verweist.

## Wert

Entweder eine IPv4- oder IPv6-Adresse oder ein vollständig qualifizierter Domainname, der dem Kandidaten entspricht.

- Wenn der Wert von `address` nur aus den Ziffern 0-9 mit Punkten als Trennzeichen besteht, wird der Wert als IPv4-Adresse interpretiert.
- Wenn der Wert vollständig aus hexadezimalen Ziffern und Doppelpunkten (":") besteht, wird er als IPv6-Adresse interpretiert.
- Andernfalls wird die `address` als vollständig qualifizierter Domainname angenommen, der zunächst über einen AAAA-Eintrag (falls IPv6 verfügbar ist) und dann über einen A-Eintrag (falls kein Ergebnis gefunden wird oder das Gerät nur IPv4 unterstützt) aufgelöst wird. Wenn mehrere IP-Adressen als Antwort auf die Anfrage zurückgegeben werden, wählt der {{Glossary("user agent")}} eine aus, die dann für die Dauer der ICE-Verarbeitung verwendet wird.

## Verwendungsnotizen

Die `address`-Eigenschaft wurde früher als `ip` bezeichnet und erlaubte nur die Verwendung von IPv4- und IPv6-Adressen. Die Erweiterung um die Unterstützung von vollständig qualifizierten Domainnamen für die Adresse führte zur Umbenennung der Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
