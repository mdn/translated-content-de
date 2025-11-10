---
title: "Permissions-Policy: payment-Direktive"
short-title: payment
slug: Web/HTTP/Reference/Headers/Permissions-Policy/payment
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Das HTTP-{{HTTPHeader("Permissions-Policy")}}-Headerfeld der `payment`-Direktive steuert, ob das aktuelle Dokument die [Payment Request API](/de/docs/Web/API/Payment_Request_API) verwenden darf.

Insbesondere wenn eine festgelegte Richtlinie die Nutzung dieses Features blockiert, werden Aufrufe des Konstruktors [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` auslösen.

## Syntax

```http
Permissions-Policy: payment=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Allowlist für `payment` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Headerfeld
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
