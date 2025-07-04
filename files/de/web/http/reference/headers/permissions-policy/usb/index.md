---
title: "Permissions-Policy: usb-Direktive"
short-title: usb
slug: Web/HTTP/Reference/Headers/Permissions-Policy/usb
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `usb` steuert, ob das aktuelle Dokument das [WebUSB-API](/de/docs/Web/API/WebUSB_API) verwenden darf.

Speziell dort, wo eine definierte Richtlinie die Nutzung von WebHID blockiert, wird die Eigenschaft [`Navigator.usb`](/de/docs/Web/API/Navigator/usb) nicht verfügbar sein.

## Syntax

```http
Permissions-Policy: usb=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen (origins), für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Allowlist für `usb` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
