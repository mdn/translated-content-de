---
title: "Permissions-Policy: payment"
slug: Web/HTTP/Headers/Permissions-Policy/payment
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das HTTP-Header-Feld {{HTTPHeader("Permissions-Policy")}} mit der Direktive `payment` steuert, ob das aktuelle Dokument die [Payment Request API](/de/docs/Web/API/Payment_Request_API) verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe des Konstruktors [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` auslösen.

## Syntax

```http
Permissions-Policy: payment=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion gewährt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `payment` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header-Feld
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
