---
title: "Permissions-Policy: hid"
slug: Web/HTTP/Headers/Permissions-Policy/hid
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `hid` steuert, ob das aktuelle Dokument die {{domxref("WebHID API", "WebHID API", "", "nocode")}} verwenden darf, um sich mit ungewöhnlichen oder exotischen Human Interface Devices wie alternativen Tastaturen oder Gamepads zu verbinden.

Speziell dann, wenn eine definierte Richtlinie die Nutzung von WebHID blockiert, wird die Eigenschaft {{domxref("Navigator.hid")}} nicht verfügbar sein.

## Syntax

```http
Permissions-Policy: hid=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standardliste für `hid` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
