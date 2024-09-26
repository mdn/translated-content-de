---
title: "Permissions-Policy: usb"
slug: Web/HTTP/Headers/Permissions-Policy/usb
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}} Header `usb` Direktive kontrolliert, ob das aktuelle Dokument die Verwendung der {{domxref("WebUSB API", "WebUSB API", "", "nocode")}} erlaubt.

Insbesondere, wenn eine definierte Richtlinie die Nutzung von WebHID blockiert, wird die {{domxref("Navigator.usb")}} Eigenschaft nicht verfügbar sein.

## Syntax

```http
Permissions-Policy: usb=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die standardmäßige Erlaubnisliste für `usb` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
