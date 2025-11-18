---
title: "PaymentRequestEvent: changePaymentMethod() Methode"
short-title: changePaymentMethod()
slug: Web/API/PaymentRequestEvent/changePaymentMethod
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`changePaymentMethod()`**-Methode des [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent)-Interfaces wird von der Zahlungsabwicklung verwendet, um eine aktualisierte Gesamtsumme zu erhalten, basierend auf den Zahlungsdetails wie der Rechnungsadresse.

Wenn diese Methode aufgerufen wird, wird ein [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent) ausgelöst.

## Syntax

```js-nolint
changePaymentMethod(methodName)
changePaymentMethod(methodName, methodDetails)
```

### Parameter

- `methodName`
  - : Der Name der zu verwendenden Zahlungsmethode.
- `methodDetails` {{optional_inline}}
  - : Ein Objekt, das methodenspezifische Details enthält, die aktualisiert werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem `PaymentRequestDetailsUpdate`-Objekt aufgelöst wird. Dieses Objekt enthält die folgenden Eigenschaften:

- `error`
  - : Ein String, der erklärt, warum die vom Benutzer gewählte Zahlungsmethode nicht verwendet werden kann.
- `total`
  - : Eine aktualisierte Gesamtsumme basierend auf der geänderten Zahlungsmethode. Die Gesamtsumme kann sich ändern, zum Beispiel weil die Rechnungsadresse der vom Benutzer gewählten Zahlungsmethode die anwendbare Mehrwertsteuer beeinflusst.
- `modifiers`
  - : Ein {{jsxref("Array")}} von `PaymentDetailsModifier`-Objekten, deren Eigenschaften in [`PaymentRequestEvent.modifiers`](/de/docs/Web/API/PaymentRequestEvent/modifiers) beschrieben sind.

- `paymentMethodErrors`
  - : Ein Objekt, das Validierungsfehler für die Zahlungsmethode enthält, falls vorhanden.

## Beispiele

Das folgende ist ein einfaches Codebeispiel, das in einem Service Worker verwendet werden könnte, um eine Benachrichtigung über eine Änderung der Zahlungsmethode an das Hauptfenster des Zahlungsverarbeiters zu senden. Ein vollständiges Testbeispiel finden Sie unter [Payment handler for testing payment method change event](https://rsolomakhin.github.io/pr/apps/pmc/).

```js
function notifyPaymentMethodChanged(e) {
  e.changePaymentMethod("someMethod")
    .then((paymentMethodChangeResponse) => {
      paymentHandlerWindow.postMessage(paymentMethodChangeResponse);
    })
    .catch((error) => {
      sendMessage({ error: error.message });
    });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über Web-basierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Zahlungsverarbeitungskonzepte](/de/docs/Web/API/Payment_Request_API/Concepts)
