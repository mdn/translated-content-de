---
title: "PaymentResponse: details-Eigenschaft"
short-title: details
slug: Web/API/PaymentResponse/details
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die **`details`**-Schreibgeschützte Eigenschaft des [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Interfaces liefert ein JSON-serialisierbares Objekt, das eine zahlungsmethodenspezifische Nachricht bereitstellt, die vom Händler zur Abwicklung der Transaktion und zur Bestimmung eines erfolgreichen Geldtransfers verwendet wird.

## Wert

Ein Objekt. Diese Daten werden von der Zahlungsanwendung zurückgegeben, die die Zahlungsanforderung erfüllt. Entwickler müssen mit demjenigen Rücksprache halten, der die URL kontrolliert, um die erwartete Struktur des Details-Objekts zu bestimmen.

## Beispiele

Das folgende Beispiel extrahiert die Details aus dem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt zur Verwendung im von [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) zurückgegebenen Promise. In einer realen Implementierung würden diese Daten dann an einen Zahlungsserver gesendet werden.

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
