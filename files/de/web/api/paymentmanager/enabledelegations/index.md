---
title: "PaymentManager: enableDelegations() Methode"
short-title: enableDelegations()
slug: Web/API/PaymentManager/enableDelegations
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`enableDelegations()`** Methode des [`PaymentManager`](/de/docs/Web/API/PaymentManager) Interfaces delegiert die Verantwortung für das Bereitstellen verschiedener Teile der erforderlichen Zahlungsinformationen an die Zahlungs-App, anstatt sie vom Browser (zum Beispiel über Autofill) zu sammeln.

Zum Beispiel, wenn die Option `requestShipping` im Optionsobjekt auf `true` gesetzt ist, wenn der [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktor aufgerufen wird, wird eine Lieferadresse zurückgegeben.

- Wenn `enableDelegations()` benutzt wurde, um `shippingAddress` zu delegieren, wird diese Adresse von der Zahlungs-App bereitgestellt.
- Andernfalls wird sie vom Browser-Autofill bereitgestellt.

## Syntax

```js-nolint
enableDelegations(delegations)
```

### Parameter

- `delegations` {{optional_inline}}
  - : Ein Array, das einen oder mehrere aufgezählte Werte enthält, die die Zahlungsinformationen angeben, die Sie an die Zahlungs-App delegieren möchten. Mögliche Werte sind:
    - `payerEmail`
      - : Die Zahlungs-App wird die E-Mail-Adresse des Zahlers bereitstellen, wenn sie benötigt wird.
    - `payerName`
      - : Die Zahlungs-App wird den Namen des Zahlers bereitstellen, wenn er benötigt wird.
    - `payerPhone`
      - : Die Zahlungs-App wird die Telefonnummer des Zahlers bereitstellen, wenn sie benötigt wird.
    - `shippingAddress`
      - : Die Zahlungs-App wird die Lieferadresse bereitstellen, wenn sie benötigt wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem Wert von `undefined` aufgelöst wird.

## Beispiele

```js
navigator.serviceWorker.register("serviceworker.js").then((registration) => {
  registration.paymentManager.userHint = "Card number should be 16 digits";

  registration.paymentManager
    .enableDelegations(["shippingAddress", "payerName"])
    .then(() => {
      // …
    });

  // …
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
- [Überblick über webbasierte Zahlungsanwendungen](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Zahlungsverarbeitungskonzepte](/de/docs/Web/API/Payment_Request_API/Concepts)
