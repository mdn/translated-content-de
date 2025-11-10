---
title: "RTCIceCandidateStats: address-Eigenschaft"
short-title: address
slug: Web/API/RTCIceCandidateStats/address
l10n:
  sourceCommit: ef82d981d563626248276acbf9516aac7445d4fa
---

{{APIRef("WebRTC")}}

Die **`address`**-Eigenschaft des [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuchs gibt die Adresse des {{Glossary("ICE", "ICE")}}-Kandidaten an.
Obwohl es bevorzugt wird, dass die Adresse als IPv4- oder IPv6-numerische Adresse angegeben wird, kann auch ein vollqualifizierter Domainname verwendet werden.

Wenn ein Domainname angegeben wird, wird die erste IP-Adresse verwendet, die für diese Adresse ausgewählt wird, selbst wenn der Domainname mehreren IP-Adressen zugeordnet ist.

## Wert

Entweder eine IPv4- oder IPv6-Adresse oder ein vollqualifizierter Domainname, der dem Kandidaten entspricht.

- Wenn der Wert von `address` ausschließlich aus Ziffern von 0-9 mit Punkten als Trennzeichen besteht, wird der Wert als IPv4-Adresse interpretiert.
- Wenn der Wert vollständig aus hexadezimalen Ziffern und Doppelpunkten (":") besteht, wird er als IPv6-Adresse interpretiert.
- Andernfalls wird die `address` als vollqualifizierter Domainname angesehen, der zuerst mit einem AAAA-Eintrag (falls IPv6 verfügbar ist) aufgelöst wird und dann mit einem A-Eintrag (falls kein Ergebnis gefunden wird oder das Gerät nur IPv4 unterstützt).
  Wenn als Antwort auf die Abfrage mehrere IP-Adressen zurückgegeben werden, wählt der {{Glossary("user_agent", "User-Agent")}} eine aus, die dann für die Dauer der ICE-Verarbeitung verwendet wird.

## Verwendungshinweise

Die `address`-Eigenschaft war zuvor als `ip` bekannt und erlaubte nur die Verwendung von IPv4- und IPv6-Adressen. Die Erweiterung der Unterstützung für vollqualifizierte Domainnamen führte zur Umbenennung der Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
