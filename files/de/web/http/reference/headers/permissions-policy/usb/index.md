---
title: "Permissions-Policy: usb-Direktive"
short-title: usb
slug: Web/HTTP/Reference/Headers/Permissions-Policy/usb
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der `usb`-Direktive steuert, ob das aktuelle Dokument die [WebUSB-API](/de/docs/Web/API/WebUSB_API) verwenden darf.

Speziell wenn eine definierte Richtlinie die Nutzung von WebHID blockiert, wird die Eigenschaft [`Navigator.usb`](/de/docs/Web/API/Navigator/usb) nicht verfügbar sein.

## Syntax

```http
Permissions-Policy: usb=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Listenfreigabe für `usb` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
