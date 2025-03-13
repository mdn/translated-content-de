---
title: "Permissions-Policy: hid"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/hid
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Headerdirektive `hid` steuert, ob das aktuelle Dokument die Verwendung der [WebHID API](/de/docs/Web/API/WebHID_API) zur Verbindung mit ungewöhnlichen oder exotischen Human Interface Devices wie alternativen Tastaturen oder Gamepads gestattet ist.

Insbesondere wenn eine definierte Richtlinie die Nutzung von WebHID blockiert, wird die Eigenschaft [`Navigator.hid`](/de/docs/Web/API/Navigator/hid) nicht verfügbar sein.

## Syntax

```http
Permissions-Policy: hid=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-`allowlist` für `hid` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
