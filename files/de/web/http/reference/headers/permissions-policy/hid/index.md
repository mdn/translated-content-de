---
title: "Permissions-Policy: hid-Direktive"
short-title: hid
slug: Web/HTTP/Reference/Headers/Permissions-Policy/hid
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `hid` steuert, ob das aktuelle Dokument die Nutzung der [WebHID API](/de/docs/Web/API/WebHID_API) erlaubt ist, um sich mit ungewöhnlichen oder exotischen Human Interface Devices wie alternativen Tastaturen oder Gamepads zu verbinden.

Insbesondere, wenn eine definierte Richtlinie die Nutzung von WebHID blockiert, wird die Eigenschaft [`Navigator.hid`](/de/docs/Web/API/Navigator/hid) nicht verfügbar sein.

## Syntax

```http
Permissions-Policy: hid=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wurde. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-`allowlist` für `hid` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
