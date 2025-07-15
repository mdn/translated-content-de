---
title: Verwendung der Payment Request API
slug: Web/API/Payment_Request_API/Using_the_Payment_Request_API
l10n:
  sourceCommit: 0d0ccc861fa024fa10836fbf0cc2c3813cd74745
---

{{DefaultAPISidebar("Payment Request API")}}

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet eine browserbasierte Methode, um Benutzer und deren bevorzugte Zahlungssysteme und -plattformen mit Händlern zu verbinden, bei denen sie Waren und Dienstleistungen bezahlen möchten. Dieser Artikel ist ein Leitfaden zur Nutzung der [Payment Request API](/de/docs/Web/API/Payment_Request_API), mit Beispielen und empfohlenen Best Practices.

## Die Grundlagen der Zahlung

Dieser Abschnitt beschreibt die Grundlagen der Verwendung der Payment Request API, um eine Zahlung durchzuführen.

> [!NOTE]
> Die Code-Beispiele in diesem Abschnitt stammen aus unserem [Demonstration zur Erkennung von Funktionsunterstützung](https://github.com/mdn/dom-examples/blob/main/payment-request/feature-detect-support.html).

### Erstellen eines neuen Payment Request Objekts

Eine Zahlungsanforderung beginnt immer mit der Erstellung eines neuen [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekts – unter Verwendung des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktors. Dieser nimmt zwei obligatorische Parameter und einen optionalen Parameter entgegen:

- `methodData` — ein Objekt, das Informationen zum Zahlungsanbieter enthält, z.B. welche Zahlungsmethoden unterstützt werden, etc.
- `details` — ein Objekt, das Informationen zur spezifischen Zahlung enthält, wie z.B. den Gesamtzahlungsbetrag, Steuer, Versandkosten, etc.
- `options` (optional) — ein Objekt, das zusätzliche Optionen im Zusammenhang mit der Zahlung enthält.

So könnten Sie beispielsweise eine neue `PaymentRequest`-Instanz wie folgt erstellen:

```js
const request = new PaymentRequest(
  buildSupportedPaymentMethodData(),
  buildShoppingCartDetails(),
);
```

Die im Konstruktor aufgerufenen Funktionen geben die erforderlichen Objektparameter zurück:

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

### Starten des Zahlungsvorgangs

Sobald das `PaymentRequest`-Objekt erstellt wurde, rufen Sie die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) darauf auf, um die Zahlungsanforderung zu initiieren. Dies gibt ein Versprechen zurück, das mit einem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt erfüllt wird, wenn die Zahlung erfolgreich ist:

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

Dieses Objekt bietet dem Entwickler Zugriff auf Details, die er verwenden kann, um die logischen Schritte abzuschließen, die nach der Zahlung erforderlich sind, wie z.B. eine E-Mail-Adresse zur Kontaktaufnahme mit dem Kunden, eine Versandadresse für den Versand von Waren, etc. Im obigen Code sehen Sie, dass wir die Methode [`PaymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete) aufgerufen haben, um anzuzeigen, dass die Interaktion abgeschlossen ist — Sie würden dies verwenden, um die Abschlussmaßnahmen durchzuführen, wie z.B. das Aktualisieren der Benutzeroberfläche, um den Benutzer über den Abschluss der Transaktion zu informieren, etc.

### Weitere nützliche Methoden der Zahlungsanforderung

Es gibt einige weitere nützliche Methoden der Zahlungsanforderung, die es wert sind, bekannt zu sein.

[`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) kann verwendet werden, um zu überprüfen, ob das `PaymentRequest`-Objekt in der Lage ist, eine Zahlung zu leisten, bevor Sie den Zahlungsvorgang starten. Es gibt ein Versprechen zurück, das mit einem booleschen Wert erfüllt wird, der angibt, ob dies der Fall ist oder nicht, zum Beispiel:

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

[`PaymentRequest.abort()`](/de/docs/Web/API/PaymentRequest/abort) kann verwendet werden, um die Zahlungsanforderung bei Bedarf abzubrechen.

## Erkennen der Verfügbarkeit der Payment Request API

Sie können die Unterstützung für die Payment Request API effektiv erkennen, indem Sie prüfen, ob der Browser des Benutzers [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) unterstützt, d.h. `if (window.PaymentRequest)`.

Im folgenden Codeausschnitt führt eine Händlerseite diese Überprüfung durch, und wenn sie `true` zurückgibt, wird die Checkout-Schaltfläche aktualisiert, um `PaymentRequest` anstelle von klassischen Webformularen zu verwenden.

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
> Siehe unseren [Demonstration zur Erkennung von Funktionsunterstützung](https://mdn.github.io/dom-examples/payment-request/feature-detect-support.html) für den vollständigen Code.

## Überprüfen, ob Benutzer Zahlungen tätigen können

Es ist immer nützlich zu überprüfen, ob Benutzer Zahlungen tätigen können. Hier sind ein paar verwandte Techniken.

### Anpassen der Zahlungsschaltfläche

Eine nützliche Technik besteht darin, die Schaltfläche für die Zahlungsanforderung je nach Zahlungsfähigkeit der Benutzer anzupassen.

Im folgenden Codeausschnitt tun wir genau das — je nachdem, ob der Benutzer eine schnelle Zahlung tätigen kann oder zuerst Zahlungsinformationen hinzufügen muss, ändert sich der Titel der Checkout-Schaltfläche zwischen "Schnelles Bezahlen mit W3C" und "W3C Checkout einrichten". In beiden Fällen ruft die Checkout-Schaltfläche [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) auf.

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
> Siehe unsere [Demonstration zur Anpassung der Zahlungsschaltfläche](https://mdn.github.io/dom-examples/payment-request/customize-button-can-make-payment.html) für den vollständigen Code.

### Überprüfung, bevor alle Preise bekannt sind

Wenn der Checkout-Prozess erkennen muss, ob [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) `true` zurückgeben wird, selbst bevor alle Positionen und deren Preise bekannt sind, können Sie `PaymentRequest` mit Dummy-Daten instanziieren und `.canMakePayment()` vorab abfragen. Wenn Sie `.canMakePayment()` mehrmals aufrufen, denken Sie daran, dass der erste Parameter für den `PaymentRequest`-Konstruktor die gleichen Methodennamen und Daten enthalten sollte.

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
        // Post the results to the server and call `paymentResponse.complete()`.
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
> Siehe unsere [Demonstration zur Überprüfung von Zahlungen vor Bekanntwerden der Preise](https://mdn.github.io/dom-examples/payment-request/check-user-can-make-payment.html) für den vollständigen Code.

## Empfehlen einer Zahlungs-App, wenn der Benutzer keine Apps hat

Wenn Sie sich entscheiden, mit dem Demo-Zahlungsanbieter BobPay auf dieser Händlerseite zu bezahlen, versucht es `PaymentRequest.show()` aufzurufen, während es den `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) abfängt. Wenn diese Zahlungsmethode nicht unterstützt wird, wird auf die Anmeldeseite für BobPay umgeleitet.

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
> Siehe unsere [Demonstration zum Empfehlen einer Zahlungs-App, wenn der Benutzer keine Apps hat](https://mdn.github.io/dom-examples/payment-request/recommend-payment-app.html) für den vollständigen Code.

## Zeigen zusätzlicher Benutzeroberfläche nach erfolgreichen Zahlungen

Wenn der Händler zusätzliche Informationen sammeln möchte, die nicht Teil der API sind (z.B. zusätzliche Lieferanweisungen), kann der Händler nach dem Checkout eine Seite mit zusätzlichen `<input type="text">` Feldern anzeigen.

```js
request
  .show()
  .then((paymentResponse) => paymentResponse.complete("success"))
  .then(() => {
    // Process payment here.
    // Close the UI:
    // Request additional shipping address details.
    const additionalDetailsContainer = document.getElementById(
      "additional-details-container",
    );
    additionalDetailsContainer.style.display = "block";
    window.scrollTo(additionalDetailsContainer.getBoundingClientRect().x, 0);
  })
  .catch((error) => {
    // Handle error.
  });
```

> [!NOTE]
> Siehe unsere [Demonstration zum Zeigen zusätzlicher Benutzeroberfläche nach erfolgreicher Zahlung](https://mdn.github.io/dom-examples/payment-request/show-additional-ui-after-payment.html) für den vollständigen Code.

## Vorautorisierung von Transaktionen

Einige Anwendungsfälle (z.B. das Bezahlen von Treibstoff an einer Tankstelle) beinhalten die Vorautorisierung der Zahlung. Eine Möglichkeit, dies zu tun, besteht in der Verwendung eines Zahlungshandlers (siehe die [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)). Zum Zeitpunkt der Erstellung dieses Textes enthält diese Spezifikation ein `canmakepayment`-Ereignis, das ein Zahlungshandler nutzen könnte, um den Autorisierungsstatus zurückzugeben.

Der Händlercode würde folgendermaßen aussehen:

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

Der Zahlungshandler würde den folgenden Code enthalten:

```js
self.addEventListener("canmakepayment", (evt) => {
  // Pre-authorize here.
  const preAuthSuccess = true;
  evt.respondWith(preAuthSuccess);
});
```

Dieser Zahlungshandler müsste in einem Service Worker im Bereich `https://example.com/preauth` Leben.

> [!NOTE]
> Siehe unsere [Demonstration zur Vorautorisierung von Transaktionen](https://mdn.github.io/dom-examples/payment-request/pre-authorize-transaction.html) für den vollständigen Code.

## Siehe auch

- [Google PaymentRequest Beispiele](https://googlechrome.github.io/samples/paymentrequest/)
