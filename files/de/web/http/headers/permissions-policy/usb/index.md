---
title: "Permissions-Policy: usb"
slug: Web/HTTP/Headers/Permissions-Policy/usb
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Header-Direktive `usb` steuert, ob das aktuelle Dokument die {{domxref("WebUSB API", "WebUSB API", "", "nocode")}} verwenden darf.

Insbesondere wird, wenn eine definierte Richtlinie die Nutzung von WebHID blockiert, die {{domxref("Navigator.usb")}}-Eigenschaft nicht verfügbar sein.

## Syntax

```http
Permissions-Policy: usb=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die standardmäßige Allowlist für `usb` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}}-Header
- [Berechtigungsrichtlinie (Permissions Policy)](/de/docs/Web/HTTP/Permissions_Policy)
