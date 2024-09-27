---
title: Nutzung der Payment Request API
slug: Web/API/Payment_Request_API/Using_the_Payment_Request_API
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet eine browserbasierte Methode, um Benutzer und deren bevorzugte Zahlungssysteme und Plattformen mit Händlern zu verbinden, bei denen sie für Waren und Dienstleistungen bezahlen möchten. Dieser Artikel ist ein Leitfaden zur Nutzung der [Payment Request API](/de/docs/Web/API/Payment_Request_API), mit Beispielen und empfohlenen Best Practices.

## Die Grundlagen der Zahlung

Dieser Abschnitt beschreibt die Grundlagen der Nutzung der Payment Request API zur Durchführung einer Zahlung.

> [!NOTE]
> Die Codebeispiele in diesem Abschnitt stammen aus unserem [Feature-Detect-Support-Demo](https://github.com/mdn/dom-examples/blob/main/payment-request/feature-detect-support.html).

### Erstellen eines neuen Payment Request Objekts

Eine Zahlung beginnt immer mit der Erstellung eines neuen [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekts — unter Verwendung des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktors. Dieser nimmt zwei obligatorische Parameter und einen optionalen Parameter an:

- `methodData` — ein Objekt, das Informationen über den Zahlungsanbieter enthält, wie z.B. unterstützte Zahlungsmethoden usw.
- `details` — ein Objekt, das Informationen über die spezifische Zahlung enthält, wie z.B. den Gesamtbetrag der Zahlung, Steuern, Versandkosten usw.
- `options` (optional) — ein Objekt mit zusätzlichen Optionen im Zusammenhang mit der Zahlung.

So könnten Sie beispielsweise eine neue `PaymentRequest`-Instanz wie folgt erstellen:

```js
const request = new PaymentRequest(
  buildSupportedPaymentMethodData(),
  buildShoppingCartDetails(),
);
```

Die Funktionen, die im Konstruktor aufgerufen werden, geben die erforderlichen Objektparameter zurück:

```js
function buildSupportedPaymentMethodData() {
  // Example supported payment methods:
  return [{ supportedMethods: "https://example.com/pay" }];
}

function buildShoppingCartDetails() {
  // Hardcoded for demo purposes:
  return {
    id: "order-123",
    displayItems: [
      {
        label: "Example item",
        amount: { currency: "USD", value: "1.00" },
      },
    ],
    total: {
      label: "Total",
      amount: { currency: "USD", value: "1.00" },
    },
  };
}
```

### Starten des Zahlungsprozesses

Sobald das `PaymentRequest`-Objekt erstellt wurde, rufen Sie die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) auf, um die Zahlungsanfrage zu initiieren. Dies gibt ein Promise zurück, das mit einem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) Objekt erfüllt wird, wenn die Zahlung erfolgreich ist:

```js
request.show().then((paymentResponse) => {
  // Here we would process the payment. For this demo, simulate immediate success:
  paymentResponse.complete("success").then(() => {
    // For demo purposes:
    introPanel.style.display = "none";
    successPanel.style.display = "block";
  });
});
```

Dieses Objekt bietet den Entwicklern Zugriff auf Details, die sie verwenden können, um die logischen Schritte nach Abschluss der Zahlung abzuschließen, wie z.B. eine E-Mail-Adresse zur Kontaktaufnahme mit dem Kunden, eine Lieferadresse zum Versenden von Waren usw. Im obigen Code sehen Sie, dass wir die Methode [`PaymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete) aufgerufen haben, um das Ende der Interaktion zu signalisieren — Sie würden dies verwenden, um abschließende Schritte durchzuführen, wie z.B. die Benutzeroberfläche zu aktualisieren, um dem Benutzer mitzuteilen, dass die Transaktion abgeschlossen ist usw.

### Weitere nützliche Methoden der Payment Request

Es gibt einige weitere nützliche Methoden der Payment Request, die es wert sind, bekannt zu sein.

[`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) kann verwendet werden, um zu überprüfen, ob das `PaymentRequest`-Objekt in der Lage ist, eine Zahlung zu leisten, bevor Sie den Zahlungsprozess starten. Es gibt ein Promise zurück, das mit einem booleschen Wert erfüllt wird, der angibt, ob es dazu in der Lage ist oder nicht, z.B.:

```js
// Dummy payment request to check whether payment can be made
new PaymentRequest(buildSupportedPaymentMethodData(), {
  total: { label: "Stub", amount: { currency: "USD", value: "0.01" } },
})
  .canMakePayment()
  .then((result) => {
    if (result) {
      // Real payment request
      const request = new PaymentRequest(
        buildSupportedPaymentMethodData(),
        checkoutObject,
      );
      request.show().then((paymentResponse) => {
        // Here we would process the payment.
        paymentResponse.complete("success").then(() => {
          // Finish handling payment
        });
      });
    }
  });
```

[`PaymentRequest.abort()`](/de/docs/Web/API/PaymentRequest/abort) kann verwendet werden, um die Zahlungsanfrage bei Bedarf abzubrechen.

## Verfügbarkeit der Payment Request API erkennen

Sie können die Unterstützung der Payment Request API effektiv erkennen, indem Sie überprüfen, ob der Browser des Benutzers [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) unterstützt, d.h. `if (window.PaymentRequest)`.

Im folgenden Ausschnitt führt eine Händlerseite diese Überprüfung durch und aktualisiert, wenn sie `true` zurückgibt, die Schaltfläche für die Kaufabwicklung so, dass `PaymentRequest` anstelle von älteren Webformularen verwendet wird.

```js
const checkoutButton = document.getElementById("checkout-button");
if (window.PaymentRequest) {
  let request = new PaymentRequest(
    buildSupportedPaymentMethodNames(),
    buildShoppingCartDetails(),
  );
  checkoutButton.addEventListener("click", () => {
    request
      .show()
      .then((paymentResponse) => {
        // Handle successful payment
      })
      .catch((error) => {
        // Handle cancelled or failed payment. For example, redirect to
        // the legacy web form checkout:
        window.location.href = "/legacy-web-form-checkout";
      });

    // Every click on the checkout button should use a new instance of
    // PaymentRequest object, because PaymentRequest.show() can be
    // called only once per instance.
    request = new PaymentRequest(
      buildSupportedPaymentMethodNames(),
      buildShoppingCartDetails(),
    );
  });
}
```

> [!NOTE]
> Siehe unser [Feature-Detect-Support-Demo](https://mdn.github.io/dom-examples/payment-request/feature-detect-support.html) für den vollständigen Code.

## Überprüfen, ob Benutzer Zahlungen leisten können

Es ist immer nützlich zu überprüfen, ob Benutzer Zahlungen leisten können. Hier sind ein paar verwandte Techniken.

### Anpassung der Zahlungsschaltfläche

Eine nützliche Technik besteht darin, die Zahlungsverarbeitungs-Schaltfläche anzupassen, je nachdem, ob Benutzer Zahlungen leisten können.

Im folgenden Ausschnitt tun wir genau das — je nachdem, ob der Benutzer eine schnelle Zahlung leisten kann oder zunächst Zahlungsdaten hinzufügen muss, ändert sich der Titel der Checkout-Schaltfläche zwischen „Schneller Kauf mit W3C“ und „W3C Checkout Einrichten“. In beiden Fällen ruft die Checkout-Schaltfläche [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) auf.

```js
const checkoutButton = document.getElementById("checkout-button");
checkoutButton.innerText = "Loading…";
if (window.PaymentRequest) {
  const request = new PaymentRequest(
    buildSupportedPaymentMethodNames(),
    buildShoppingCartDetails(),
  );
  request
    .canMakePayment()
    .then((canMakeAFastPayment) => {
      checkoutButton.textContent = canMakeAFastPayment
        ? "Fast Checkout with W3C"
        : "Setup W3C Checkout";
    })
    .catch((error) => {
      // The user may have turned off the querying functionality in their
      // privacy settings. The website does not know whether they can make
      // a fast payment, so pick a generic title.
      checkoutButton.textContent = "Checkout with W3C";
    });
}
```

> [!NOTE]
> Siehe unser [Anpassen des Zahlungsschaltflächendemos](https://mdn.github.io/dom-examples/payment-request/customize-button-can-make-payment.html) für den vollständigen Code.

### Überprüfung, bevor alle Preise bekannt sind

Wenn der Checkout-Ablauf wissen muss, ob [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) `true` zurückgeben wird, noch bevor alle Positionen und ihre Preise bekannt sind, können Sie `PaymentRequest` mit fiktiven Daten instanziieren und `.canMakePayment()` vorab abfragen. Wenn Sie `.canMakePayment()` mehrmals aufrufen, beachten Sie, dass der erste Parameter des `PaymentRequest`-Konstruktors die gleichen Methodennamen und Daten enthalten sollte.

```js
// The page has loaded. Should the page use PaymentRequest?
// If PaymentRequest fails, should the page fallback to manual
// web form checkout?
const supportedPaymentMethods = [
  /* supported methods */
];

let shouldCallPaymentRequest = true;
let fallbackToLegacyOnPaymentRequestFailure = false;
new PaymentRequest(supportedPaymentMethods, {
  total: { label: "Stub", amount: { currency: "USD", value: "0.01" } },
})
  .canMakePayment()
  .then((result) => {
    shouldCallPaymentRequest = result;
  })
  .catch((error) => {
    console.error(error);

    // The user may have turned off query ability in their privacy settings.
    // Let's use PaymentRequest by default and fallback to legacy
    // web form based checkout.
    shouldCallPaymentRequest = true;
    fallbackToLegacyOnPaymentRequestFailure = true;
  });

// User has clicked on the checkout button. We know
// what's in the cart, but we don't have a `Checkout` object.
function onCheckoutButtonClicked(lineItems) {
  callServerToRetrieveCheckoutDetails(lineItems);
}

// The server has constructed the `Checkout` object. Now we know
// all of the prices and shipping options.
function onServerCheckoutDetailsRetrieved(checkoutObject) {
  if (shouldCallPaymentRequest) {
    const request = new PaymentRequest(supportedPaymentMethods, checkoutObject);
    request
      .show()
      .then((paymentResponse) => {
        // Post the results to the server and call `paymeResponse.complete()`.
      })
      .catch((error) => {
        console.error(error);
        if (fallbackToLegacyOnPaymentRequestFailure) {
          window.location.href = "/legacy-web-form-checkout";
        } else {
          showCheckoutErrorToUser();
        }
      });
  } else {
    window.location.href = "/legacy-web-form-checkout";
  }
}
```

> [!NOTE]
> Siehe unser [Überprüfung, ob Benutzer Zahlungen leisten können, bevor die Preise bekannt sind](https://mdn.github.io/dom-examples/payment-request/check-user-can-make-payment.html) für den vollständigen Code.

## Empfehlung einer Zahlungs-App, wenn der Benutzer keine Apps hat

Wenn Sie wählen, mit dem BobPay Demo-Zahlungsanbieter auf dieser Händlerseite zu zahlen, versucht es, `PaymentRequest.show()` aufzurufen, während es den `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) abfängt. Wenn diese Zahlungsmethode nicht unterstützt wird, wird auf die Anmeldeseite von BobPay umgeleitet.

Der Code sieht ungefähr so aus:

```js
checkoutButton.addEventListener("click", () => {
  const request = new PaymentRequest(
    buildSupportedPaymentMethodData(),
    buildShoppingCartDetails(),
  );
  request
    .show()
    .then((paymentResponse) => {
      // Here we would process the payment. For this demo, simulate immediate success:
      paymentResponse.complete("success").then(() => {
        // For demo purposes:
        introPanel.style.display = "none";
        successPanel.style.display = "block";
      });
    })
    .catch((error) => {
      if (error.name === "NotSupportedError") {
        window.location.href = "https://bobpay.xyz/#download";
      } else {
        // Other kinds of errors; cancelled or failed payment. For demo purposes:
        introPanel.style.display = "none";
        legacyPanel.style.display = "block";
      }
    });
});
```

> [!NOTE]
> Siehe unser [Empfehlung einer Zahlungs-App, wenn der Benutzer keine Apps hat Demo](https://mdn.github.io/dom-examples/payment-request/recommend-payment-app.html) für den vollständigen Code.

## Anzeigen einer zusätzlichen Benutzeroberfläche nach erfolgreichen Zahlungen

Wenn der Händler zusätzliche Informationen sammeln möchte, die nicht Teil der API sind (z.B. zusätzliche Lieferanweisungen), kann der Händler eine Seite mit zusätzlichen `<input type="text">` Feldern nach dem Checkout anzeigen.

```js
request
  .show()
  .then((paymentResponse) => {
    // Process payment here.
    // Close the UI:
    paymentResponse.complete('success').then(() => {
      // Request additional shipping address details.
      const additionalDetailsContainer = document.getElementById('additional-details-container');
      additionalDetailsContainer.style.display = 'block';
      window.scrollTo(additionalDetailsContainer.getBoundingClientRect().x, 0);
  })
  .catch((error) => {
    // Handle error.
  });
```

> [!NOTE]
> Siehe unser [Zeigen Sie zusätzliche Benutzeroberfläche nach erfolgreicher Zahlung Demo](https://mdn.github.io/dom-examples/payment-request/show-additional-ui-after-payment.html) für den vollständigen Code.

## Vorautorisieren von Transaktionen

Einige Anwendungsfälle (z.B. das Bezahlen von Kraftstoff an einer Tankstelle) umfassen die Vorautorisierung der Zahlung. Eine Möglichkeit dies zu tun, ist über einen Payment Handler (siehe die [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)). Zum Zeitpunkt des Schreibens enthält diese Spezifikation ein `canmakepayment` Ereignis, das ein Payment Handler verwenden könnte, um den Autorisierungsstatus zurückzugeben.

Der Händlercode würde so aussehen:

```js
const paymentRequest = new PaymentRequest(
  [{ supportedMethods: "https://example.com/preauth" }],
  details,
);

// Send `CanMakePayment` event to the payment handler.
paymentRequest
  .canMakePayment()
  .then((res) => {
    if (res) {
      // The payment handler has pre-authorized a transaction
      // with some static amount, e.g., USD $1.00.
    } else {
      // Pre-authorization failed or payment handler not installed.
    }
  })
  .catch((err) => {
    // Unexpected error occurred.
  });
```

Der Payment Handler würde den folgenden Code enthalten:

```js
self.addEventListener("canmakepayment", (evt) => {
  // Pre-authorize here.
  const preAuthSuccess = true;
  evt.respondWith(preAuthSuccess);
});
```

Dieser Payment Handler müsste sich im Service Worker unter `https://example.com/preauth` befinden.

> [!NOTE]
> Siehe unser [Vorautorisieren von Transaktionen Demo](https://mdn.github.io/dom-examples/payment-request/pre-authorize-transaction.html) für den vollständigen Code.

## Siehe auch

- [Google PaymentRequest Beispiele](https://googlechrome.github.io/samples/paymentrequest/)
