---
title: "Permissions-Policy: payment"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/payment
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das HTTP-Headerfeld {{HTTPHeader("Permissions-Policy")}} mit der Direktive `payment` steuert, ob das aktuelle Dokument die [Payment Request API](/de/docs/Web/API/Payment_Request_API) verwenden darf.

Insbesondere wird ein Aufruf des Konstruktors [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` auslösen, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert.

## Syntax

```http
Permissions-Policy: payment=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Verwendung des Features erteilt wird. Siehe [„Permissions-Policy“ > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Berechtigungsliste für `payment` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Headerfeld
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
