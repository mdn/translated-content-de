---
title: "PaymentRequestUpdateEvent: PaymentRequestUpdateEvent() Konstruktor"
short-title: PaymentRequestUpdateEvent()
slug: Web/API/PaymentRequestUpdateEvent/PaymentRequestUpdateEvent
l10n:
  sourceCommit: 5239b2990f99352463abbe4eb643dcb4267151c7
---

{{APIRef("Payment Request API")}}{{securecontext_header}}

Der **`PaymentRequestUpdateEvent()`** Konstruktor erstellt ein neues
{{domxref("PaymentRequestUpdateEvent")}} Objekt, das es einer Webseite ermöglicht, die
Details eines {{domxref("PaymentRequest")}} als Reaktion auf eine Benutzeraktion zu aktualisieren. Tatsächliche Updates werden vorgenommen, indem Optionen an die
{{domxref('PaymentRequestUpdateEvent.updateWith','updateWith()')}} Methode übergeben werden.

## Syntax

```js-nolint
new PaymentRequestUpdateEvent()
```

### Parameter

Keine.

### Rückgabewert

Ein neues `PaymentRequestUpdateEvent`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
