---
title: "PaymentResponse: details-Eigenschaft"
short-title: details
slug: Web/API/PaymentResponse/details
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die **`details`** schreibgeschützte Eigenschaft der [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) Schnittstelle gibt ein JSON-serialisierbares Objekt zurück, das eine zahlungsmethodenspezifische Nachricht bereitstellt, die vom Händler verwendet wird, um die Transaktion zu verarbeiten und einen erfolgreichen Geldtransfer zu bestimmen.

Diese Daten werden von der Zahlungs-App zurückgegeben, die die Zahlungsanfrage erfüllt. Entwickler müssen mit demjenigen konsultieren, der die URL kontrolliert, um die erwartete Struktur des details-Objekts zu verstehen.

## Wert

## Beispiele

Das folgende Beispiel extrahiert die Details aus dem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) Objekt zum Promise, das von [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) zurückgegeben wird. In einer realen Implementierung würden diese Daten dann an einen Zahlungsserver gesendet werden.

```js
payment.show().then((paymentResponse) => {
  const paymentData = {
    // payment method string
    method: paymentResponse.methodName,
    // payment details as you requested
    details: paymentResponse.details,
    // shipping address information
    address: toDict(paymentResponse.shippingAddress),
  };
  // Send information to the server
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
