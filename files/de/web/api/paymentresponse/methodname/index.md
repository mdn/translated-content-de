---
title: "PaymentResponse: methodName-Eigenschaft"
short-title: methodName
slug: Web/API/PaymentResponse/methodName
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die schreibgeschützte **`methodName`**-Eigenschaft der [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Schnittstelle gibt einen String zurück, der den vom Benutzer ausgewählten Zahlungsdienstleister eindeutig identifiziert.

Dieser String kann entweder einer der standardisierten Zahlungsarten-Identifikatoren sein oder eine URL, die vom Zahlungsdienstleister zur Abwicklung von Zahlungen verwendet wird.

## Wert

Ein String, der den zur Zahlungsabwicklung verwendeten Zahlungsdienstleister eindeutig identifiziert. Dies kann entweder ein standardisierter Identifikator oder eine URL sein, die vom Zahlungsdienstleister zur Zahlungsabwicklung verwendet wird. Siehe, wie [Händler-Validierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation) funktioniert.

## Beispiele

Das folgende Beispiel extrahiert den Methodennamen aus dem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt in das von [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) zurückgegebene Promise. In einer realen Implementierung würden diese Daten dann an einen Zahlungsserver gesendet werden.

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
