---
title: "Permissions-Policy: local-network-access Direktive"
short-title: local-network-access
slug: Web/HTTP/Reference/Headers/Permissions-Policy/local-network-access
l10n:
  sourceCommit: 75016e5d37ecff3b11de4c2ef6665178f654797e
---

{{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}}-Header `local-network-access` Direktive steuert, ob das aktuelle Dokument berechtigt ist, Netzwerk-Anfragen an lokale und Loopback-Adressen zu stellen. Diese Richtlinie ist ein Alias für die neueren {{httpheader('Permissions-Policy/local-network','local-network')}} und {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} Direktiven.

- Eine lokale Adresse ist nur im lokalen Netzwerk zugänglich; ihr Ziel unterscheidet sich in verschiedenen Netzwerken. Zum Beispiel `192.168.0.1`.
- Eine Loopback-Adresse ist nur auf dem lokalen Host zugänglich; ihr Ziel unterscheidet sich auf jedem Gerät. Zum Beispiel `127.0.0.1`, allgemein bekannt als `localhost`.

Insbesondere dann, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Anfragen an lokale und Loopback-Adressen immer fehlschlagen. Wenn Sie eine feinere Kontrolle über lokale und Loopback-Adressen wünschen, sollten Sie die oben verlinkten neueren Direktiven verwenden.

Siehe [Lokaler Netzwerkzugriff > Der `local-network-access` Alias](/de/docs/Web/Security/Defenses/Local_network_access#the_local-network-access_alias) für weitere Details.

## Syntax

```http
Permissions-Policy: local-network-access=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Informationen.

## Standardrichtlinie

Die Standard-Whitelist für `local-network-access` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lokaler Netzwerkzugriff](/de/docs/Web/Security/Defenses/Local_network_access)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
