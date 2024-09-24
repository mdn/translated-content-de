---
title: "PaymentResponse: methodName-Eigenschaft"
short-title: methodName
slug: Web/API/PaymentResponse/methodName
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die schreibgeschützte Eigenschaft **`methodName`** des {{domxref("PaymentResponse")}}-Interfaces gibt einen String zurück, der den vom Benutzer ausgewählten Zahlungsanbieter eindeutig identifiziert.

Dieser String kann entweder einer der standardisierten Zahlungsarten-Identifikatoren oder eine URL sein, die vom Zahlungsanbieter zur Abwicklung von Zahlungen verwendet wird.

## Wert

Ein String, der den verwendeten Zahlungsanbieter zur Abwicklung der Zahlung eindeutig identifiziert. Dies kann entweder ein standardisierter Identifikator oder eine URL sein, die vom Zahlungsprozessor zur Bearbeitung von Zahlungen verwendet wird. Sehen Sie sich an, wie die [Händlervalidierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation) funktioniert.

## Beispiele

Das folgende Beispiel extrahiert den Methodennamen aus dem {{domxref('PaymentResponse')}}
Objekt, das der Promise von {{domxref('PaymentRequest.show()')}} zurückgegeben wird. In einer
praktischen Implementierung würden diese Daten dann an einen Zahlungsserver gesendet werden.

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
