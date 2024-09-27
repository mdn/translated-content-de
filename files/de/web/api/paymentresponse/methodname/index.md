---
title: "PaymentResponse: methodName-Eigenschaft"
short-title: methodName
slug: Web/API/PaymentResponse/methodName
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die schreibgeschützte **`methodName`**-Eigenschaft des [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Interfaces gibt einen String zurück, der den vom Benutzer ausgewählten Zahlungsanbieter eindeutig identifiziert.

Dieser String kann entweder einer der standardisierten Zahlungsmethoden-Bezeichner oder eine URL sein, die vom Zahlungsanbieter zur Abwicklung von Zahlungen verwendet wird.

## Wert

Ein String, der den Zahlungsanbieter, der zur Abwicklung der Zahlung verwendet wird, eindeutig identifiziert. Dies kann entweder ein standardisierter Bezeichner oder eine URL sein, die vom Zahlungsanbieter zur Zahlungsabwicklung verwendet wird. Siehe, wie [Händlervalidierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation) funktioniert.

## Beispiele

Das folgende Beispiel extrahiert den Methodennamen aus dem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt zum Promise, der von [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) zurückgegeben wird. In einer realen Implementierung würden diese Daten dann an einen Zahlungsserver gesendet.

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
