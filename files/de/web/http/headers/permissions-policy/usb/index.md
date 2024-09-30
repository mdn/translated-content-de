---
title: "Permissions-Policy: usb"
slug: Web/HTTP/Headers/Permissions-Policy/usb
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Header-Direktive `usb` steuert, ob das aktuelle Dokument die [WebUSB API](/de/docs/Web/API/WebUSB_API) verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung von WebHID blockiert, wird die Eigenschaft [`Navigator.usb`](/de/docs/Web/API/Navigator/usb) nicht verfügbar sein.

## Syntax

```http
Permissions-Policy: usb=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-`allowlist` für `usb` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
