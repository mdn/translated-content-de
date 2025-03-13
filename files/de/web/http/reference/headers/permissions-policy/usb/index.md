---
title: "Permissions-Policy: usb"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/usb
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP-Direktive {{HTTPHeader("Permissions-Policy")}} `usb` steuert, ob das aktuelle Dokument die [WebUSB API](/de/docs/Web/API/WebUSB_API) verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Verwendung von WebHID blockiert, wird die Eigenschaft [`Navigator.usb`](/de/docs/Web/API/Navigator/usb) nicht verfügbar sein.

## Syntax

```http
Permissions-Policy: usb=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Allowlist für `usb` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
