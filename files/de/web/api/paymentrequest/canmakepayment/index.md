---
title: "PaymentRequest: canMakePayment()-Methode"
short-title: canMakePayment()
slug: Web/API/PaymentRequest/canMakePayment
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die Methode **`canMakePayment()`** des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) bestimmt, ob die Anfrage so konfiguriert ist, dass sie mit mindestens einer vom [User-Agent](/de/docs/Glossary/user_agent) unterstützten Zahlungsmethode kompatibel ist.

Sie können dies aufrufen, bevor Sie [`show()`](/de/docs/Web/API/PaymentRequest/show) aufrufen, um ein optimiertes Benutzererlebnis zu bieten, wenn der Browser des Benutzers keine der von Ihnen akzeptierten Zahlungsmethoden verarbeiten kann.

Beispielsweise könnten Sie `canMakePayment()` aufrufen, um zu bestimmen, ob der Browser den Benutzer die Zahlung mittels der Payment Request API durchführen lässt. Falls dies nicht der Fall ist, könnten Sie auf eine andere Zahlungsmethode zurückgreifen oder eine Liste von Methoden anbieten, die nicht von der Payment Request API verarbeitet werden (oder sogar Anweisungen zur Zahlung per Post oder Telefon bereitstellen).

## Syntax

```js-nolint
canMakePayment()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}} für einen booleschen Wert, der auf `true` aufgelöst wird, wenn der User-Agent eine der bei der Instanziierung der Anfrage mit dem [`PaymentRequest`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktor bereitgestellten Zahlungsmethoden unterstützt. Wenn die Zahlung nicht verarbeitet werden kann, erhält das Versprechen den Wert `false`.

> [!NOTE]
> Wenn Sie diese Methode zu oft aufrufen, kann es sein, dass der Browser das zurückgegebene Versprechen mit einem `DOMException` ablehnt.

## Beispiele

Im folgenden Beispiel, das [einem Demo-Auszug](https://rsolomakhin.github.io/samples/paymentrequest/can-make-payment/) entnommen ist, wird ein `PaymentRequest`-Objekt sowohl für Apple Pay als auch für Example Pay asynchron erstellt. Es wird der Aufruf von `canMakePayment()` in eine Feature-Erkennung eingebunden, und ein entsprechender Callback wird entsprechend der Auflösung des `Promise` aufgerufen.

```js
async function initPaymentRequest() {
  const details = {
    total: {
      label: "Total",
      amount: {
        currency: "USD",
        value: "0.00",
      },
    },
  };

  const supportsApplePay = new PaymentRequest(
    [{ supportedMethods: "https://apple.com/apple-pay" }],
    details,
  ).canMakePayment();

  // Supports Apple Pay?
  if (await supportsApplePay) {
    // show Apple Pay logo, for instance
    return;
  }

  // Otherwise, let's see if we can use Example Pay
  const supportsExamplePay = await new PaymentRequest(
    [{ supportedMethods: "https://example.com/pay" }],
    details,
  ).canMakePayment();

  if (supportsExamplePay) {
    // show Example Pay support
    return;
  }

  // Otherwise, make payments using HTML form element
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
