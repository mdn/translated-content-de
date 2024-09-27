---
title: "Permissions-Policy: usb"
slug: Web/HTTP/Headers/Permissions-Policy/usb
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `usb`-Direktiv steuert, ob das aktuelle Dokument die [WebUSB-API](/de/docs/Web/API/WebUSB_API) verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung von WebHID blockiert, wird die [`Navigator.usb`](/de/docs/Web/API/Navigator/usb)-Eigenschaft nicht verfügbar sein.

## Syntax

```http
Permissions-Policy: usb=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Das Standardzulassungsverzeichnis für `usb` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
