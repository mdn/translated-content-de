---
title: "PaymentManager: enableDelegations() Methode"
short-title: enableDelegations()
slug: Web/API/PaymentManager/enableDelegations
l10n:
  sourceCommit: 73ca80b86a348f88f51fdb8f9441c114b76e94f1
---

{{APIRef("Web-Based Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`enableDelegations()`** Methode der [`PaymentManager`](/de/docs/Web/API/PaymentManager) Schnittstelle delegiert die Verantwortung für die Bereitstellung verschiedener Teile der erforderlichen Zahlungsinformationen an die Zahlungs-App, anstatt diese vom Browser zu sammeln (zum Beispiel über die Autoausfüllfunktion).

Beispielsweise wird, wenn die `requestShipping` Option im Optionsobjekt auf `true` gesetzt ist, beim Aufruf des Konstruktors [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) eine Versandadresse zurückgegeben.

- Wenn `enableDelegations()` verwendet wurde, um `shippingAddress` zu delegieren, kommt diese Adresse von der Zahlungs-App.
- Andernfalls wird sie vom Browser-Autoausfüllen bereitgestellt.

## Syntax

```js-nolint
enableDelegations(delegations)
```

### Parameter

- `delegations` {{optional_inline}}
  - : Ein Array, das einen oder mehrere aufgezählte Werte enthält, die die Zahlungsinformationen spezifizieren, die Sie der Zahlungs-App delegieren möchten. Mögliche Werte können sein:
    - `payerEmail`
      - : Die Zahlungs-App stellt die E-Mail des Zahlers bereit, wann immer sie benötigt wird.
    - `payerName`
      - : Die Zahlungs-App stellt den Namen des Zahlers bereit, wann immer er benötigt wird.
    - `payerPhone`
      - : Die Zahlungs-App stellt die Telefonnummer des Zahlers bereit, wann immer sie benötigt wird.
    - `shippingAddress`
      - : Die Zahlungs-App stellt die Versandadresse bereit, wann immer sie benötigt wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Wert von `undefined` aufgelöst wird.

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

- [Web-based Payment Handler API](/de/docs/Web/API/Web-Based_Payment_Handler_API)
- [Übersicht zu web-basierten Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Zahlungsverarbeitungskonzepte](/de/docs/Web/API/Payment_Request_API/Concepts)
