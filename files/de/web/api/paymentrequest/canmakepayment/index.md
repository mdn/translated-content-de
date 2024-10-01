---
title: "PaymentRequest: canMakePayment() Methode"
short-title: canMakePayment()
slug: Web/API/PaymentRequest/canMakePayment
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die Methode **`canMakePayment()`** des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) bestimmt, ob die Anfrage so konfiguriert ist, dass sie mit mindestens einer Zahlungsart kompatibel ist, die vom {{Glossary("user_agent", "User-Agent")}} unterstützt wird.

Sie können dies vor dem Aufruf von [`show()`](/de/docs/Web/API/PaymentRequest/show) verwenden, um eine optimierte Benutzererfahrung zu bieten, wenn der Browser des Benutzers keine der von Ihnen akzeptierten Zahlungsmethoden verarbeiten kann.

Zum Beispiel könnten Sie `canMakePayment()` aufrufen, um zu bestimmen, ob der Browser es dem Benutzer erlaubt, die Payment Request API zu nutzen. Falls dies nicht möglich ist, könnten Sie auf eine andere Zahlungsmethode zurückgreifen oder eine Liste von Methoden anbieten, die nicht von der Payment Request API behandelt werden (oder sogar Anweisungen zum Bezahlen per Post oder Telefon bereitstellen).

## Syntax

```js-nolint
canMakePayment()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}} auf einen booleschen Wert, der zu `true` aufgelöst wird, wenn der User-Agent eine der beim Erstellen der Anfrage mit dem [`PaymentRequest`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktor angegebenen Zahlungsmethoden unterstützt. Kann die Zahlung nicht verarbeitet werden, erhält das Promise den Wert `false`.

> [!NOTE]
> Wenn Sie dies zu oft aufrufen, kann der Browser das zurückgegebene Promise mit einem `DOMException` ablehnen.

## Beispiele

Im folgenden Beispiel, [aus einer Demo entnommen](https://rsolomakhin.github.io/samples/paymentrequest/can-make-payment/), wird ein `PaymentRequest`-Objekt sowohl für Apple Pay als auch für Example Pay asynchron erstellt. Der Aufruf von `canMakePayment()` wird in eine Feature-Erkennung eingebunden und abhängig von der Auflösung des `Promise` wird ein geeigneter Rückruf aufgerufen.

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
