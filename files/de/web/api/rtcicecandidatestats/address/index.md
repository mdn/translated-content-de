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
[ICE](/de/docs/Glossary/ICE)-Kandidaten an. Es wird bevorzugt, dass die Adresse als numerische IPv4- oder IPv6-Adresse angegeben wird, jedoch kann auch ein vollständig qualifizierter Domänenname verwendet werden.

Wenn ein Domänenname angegeben wird, wird die erste IP-Adresse verwendet, die für diese Adresse ausgewählt wird, auch wenn der Domänenname zu mehreren IP-Adressen führt.

## Wert

Entweder eine IPv4- oder IPv6-Adresse oder ein vollständig qualifizierter Domänenname, der dem Kandidaten entspricht.

- Wenn der Wert der `address` ausschließlich aus Ziffern von 0-9 mit Punkten als Trennzeichen besteht, wird der Wert als IPv4-Adresse interpretiert.
- Wenn der Wert ausschließlich aus hexadezimalen Ziffern und Doppelpunkten (":") besteht, wird er als IPv6-Adresse interpretiert.
- Andernfalls wird `address` als vollständig qualifizierter Domänenname betrachtet, der zuerst mit einem AAAA-Datensatz aufgelöst wird (vorausgesetzt, IPv6 ist verfügbar), dann mit einem A-Datensatz (falls kein Ergebnis gefunden wird oder das Gerät nur IPv4 unterstützt). Wenn als Antwort auf die Abfrage mehrere IP-Adressen zurückgegeben werden, wählt der [User-Agent](/de/docs/Glossary/user_agent) eine aus, die dann für die Dauer der ICE-Verarbeitung verwendet wird.

## Nutzungshinweise

Die `address`-Eigenschaft war zuvor als `ip` bekannt und erlaubte nur die Verwendung von IPv4- und IPv6-Adressen. Die Unterstützung der Verwendung von vollständig qualifizierten Domainnamen für die Adresse führte zur Umbenennung der Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
