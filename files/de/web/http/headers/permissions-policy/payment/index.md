---
title: "Berechtigungsrichtlinie: payment"
slug: Web/HTTP/Headers/Permissions-Policy/payment
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das HTTP-Headerfeld {{HTTPHeader("Permissions-Policy")}} mit der Direktive `payment` steuert, ob das aktuelle Dokument die [Payment Request API](/de/docs/Web/API/Payment_Request_API) verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Verwendung dieses Features blockiert, werden Aufrufe des {{DOMxRef("PaymentRequest.PaymentRequest", "PaymentRequest()")}}-Konstruktors eine {{domxref("DOMException")}} vom Typ `SecurityError` auslösen.

## Syntax

```http
Permissions-Policy: payment=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Siehe [Berechtigungsrichtlinie > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Anerkennungsliste für `payment` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Headerfeld
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
