---
title: Verwenden der Payment Request API
slug: Web/API/Payment_Request_API/Using_the_Payment_Request_API
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

{{DefaultAPISidebar("Payment Request API")}}

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet eine browserbasierte Methode, um Benutzer und ihre bevorzugten Zahlungssysteme und -plattformen mit Händlern zu verbinden, die sie für Waren und Dienstleistungen bezahlen möchten. Dieser Artikel ist ein Leitfaden zur Nutzung der [Payment Request API](/de/docs/Web/API/Payment_Request_API) mit Beispielen und empfohlenen Best Practices.

## Die Grundlagen einer Zahlung

Dieser Abschnitt beschreibt die Grundlagen der Nutzung der Payment Request API zur Durchführung einer Zahlung.

> [!NOTE]
> Die Codebeispiele in diesem Abschnitt stammen von unserem [Feature-Demonstration zur Unterstützungserkennung](https://github.com/mdn/dom-examples/blob/main/payment-request/feature-detect-support.html).

### Erstellen eines neuen Zahlungsanforderungsobjekts

Eine Zahlungsanforderung beginnt immer mit der Erstellung eines neuen [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekts — unter Verwendung des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktors. Dieser benötigt zwei obligatorische Parameter und einen optionalen Parameter:

- `methodData` — ein Objekt, das Informationen über den Zahlungsanbieter enthält, wie z.B. welche Zahlungsmethoden unterstützt werden, usw.
- `details` — ein Objekt, das Informationen über die spezifische Zahlung enthält, wie z.B. den Gesamtbetrag der Zahlung, Steuern, Versandkosten usw.
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

### Starten des Zahlungsprozesses

Sobald das `PaymentRequest`-Objekt erstellt wurde, rufen Sie die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) auf, um die Zahlungsanforderung zu initiieren. Dies gibt ein Versprechen zurück, das mit einem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt erfüllt wird, wenn die Zahlung erfolgreich ist:

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

Dieses Objekt bietet dem Entwickler Zugriff auf Details, die er nutzen kann, um die logischen Schritte abzuschließen, die nach Abschluss der Zahlung erforderlich sind, wie z.B. eine E-Mail-Adresse, um den Kunden zu kontaktieren, eine Versandadresse für den Versand der Waren usw. Im obigen Code sehen Sie, dass wir die Methode [`PaymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete) aufgerufen haben, um zu signalisieren, dass die Interaktion beendet ist — Sie würden dies verwenden, um abschließende Schritte durchzuführen, wie das Aktualisieren der Benutzeroberfläche, um dem Benutzer mitzuteilen, dass die Transaktion abgeschlossen ist, usw.

### Andere nützliche Methoden der Zahlungsanforderung

Es gibt einige andere nützliche Methoden der Zahlungsanforderung, die es wert sind, bekannt zu sein.

[`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) kann verwendet werden, um zu überprüfen, ob das `PaymentRequest`-Objekt in der Lage ist, eine Zahlung durchzuführen, bevor Sie den Zahlungsprozess starten. Es gibt ein Versprechen zurück, das mit einem Boolean erfüllt wird, der angibt, ob es möglich ist oder nicht, zum Beispiel:

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

## Verfügbarkeit der Payment Request API erkennen

Sie können die Unterstützung der Payment Request API effektiv erkennen, indem Sie prüfen, ob der Browser des Benutzers [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) unterstützt, d.h. `if (window.PaymentRequest)`.

Im folgenden Codebeispiel führt eine Händlerseite diese Überprüfung durch, und wenn sie `true` zurückgibt, aktualisiert sie die Schaltfläche "Kasse", um `PaymentRequest` anstelle von veralteten Webformularen zu verwenden.

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
> Sehen Sie sich unser [Feature-Demonstration zur Unterstützungserkennung](https://mdn.github.io/dom-examples/payment-request/feature-detect-support.html) für den vollständigen Code an.

## Überprüfen, ob Benutzer Zahlungen vornehmen können

Zu überprüfen, ob Benutzer Zahlungen vornehmen können, ist immer nützlich. Hier sind ein paar verwandte Techniken.

### Anpassen der Zahlungsschaltfläche

Eine nützliche Technik ist, die Schaltfläche zur Zahlungsanforderung je nachdem zu gestalten, ob Benutzer Zahlungen vornehmen können.

Im folgenden Codebeispiel tun wir genau dies — je nachdem, ob der Benutzer eine schnelle Zahlung vornehmen kann oder zuerst Zahlungsdaten hinzufügen muss, ändert sich der Titel der Schaltfläche "Kasse" zwischen "Schnellabwicklung mit W3C" und "W3C-Kasse einrichten". In beiden Fällen ruft die Schaltfläche "Kasse" [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) auf.

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
> Sehen Sie sich unsere [Anpassen der Zahlungsschaltfläche-Demo](https://mdn.github.io/dom-examples/payment-request/customize-button-can-make-payment.html) für den vollständigen Code an.

### Überprüfen, bevor alle Preise bekannt sind

Wenn der Checkout-Fluss wissen muss, ob [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) auch dann `true` zurückgibt, bevor alle Positionen und ihre Preise bekannt sind, können Sie `PaymentRequest` mit Dummy-Daten instanziieren und `.canMakePayment()` vorab abfragen. Wenn Sie `.canMakePayment()` mehrmals aufrufen, denken Sie daran, dass der erste Parameter des `PaymentRequest`-Konstruktors die gleichen Methodennamen und Daten enthalten sollte.

```js
// The page has loaded. Should the page use PaymentRequest?
// If PaymentRequest fails, should the page fallback to manual
// web form checkout?
const supportedPaymentMethods = [/* supported methods */];

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
> Sehen Sie sich unser [Überprüfen der Benutzerzahlungsmöglichkeiten, bevor Preise bekannt sind-Demo](https://mdn.github.io/dom-examples/payment-request/check-user-can-make-payment.html) für den vollständigen Code an.

## Empfehlen einer Zahlungs-App, wenn Benutzer keine Apps haben

Wenn Sie sich auf dieser Handelsseite entscheiden, mit dem BobBucks-Demonstrationszahlungsanbieter zu zahlen, versucht es, `PaymentRequest.show()` aufzurufen, während die `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) abgefangen wird. Wenn diese Zahlungsmethode nicht unterstützt wird, wird zur Anmeldeseite für BobBucks umgeleitet.

Der Code sieht in etwa so aus:

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
        window.location.href = "https://bobbucks.dev/#download";
      } else {
        // Other kinds of errors; cancelled or failed payment. For demo purposes:
        introPanel.style.display = "none";
        legacyPanel.style.display = "block";
      }
    });
});
```

> [!NOTE]
> Sehen Sie sich unser [Empfehlen einer Zahlungs-App, wenn Benutzer keine Apps haben-Demo](https://mdn.github.io/dom-examples/payment-request/recommend-payment-app.html) für den vollständigen Code an.

## Zusätzliche Benutzeroberfläche nach erfolgreichen Zahlungen anzeigen

Wenn der Händler zusätzliche Informationen erfassen möchte, die nicht Teil der API sind (z.B. zusätzliche Lieferanweisungen), kann der Händler nach dem Checkout eine Seite mit zusätzlichen `<input type="text">` Feldern anzeigen.

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
> Sehen Sie sich unsere [Zusätzliche Benutzeroberfläche nach erfolgreicher Zahlung-Demo](https://mdn.github.io/dom-examples/payment-request/show-additional-ui-after-payment.html) für den vollständigen Code an.

## Vorautorisierung von Transaktionen

Einige Anwendungsfälle (z.B. das Bezahlen von Kraftstoff an einer Tankstelle) erfordern die Vorautorisierung der Zahlung. Eine Möglichkeit, dies zu tun, ist über einen webbasierten Zahlungshandlers (siehe die [Web-based Payment Handler API](/de/docs/Web/API/Web-Based_Payment_Handler_API)). Zum Zeitpunkt der Abfassung umfasst diese Spezifikation ein `canmakepayment`-Event, das ein webbasiertes Zahlungshandler nutzen könnte, um den Autorisierungsstatus zurückzugeben.

Der Händlrcode würde folgendermaßen aussehen:

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

Der webbasierte Zahlungshandler würde den folgenden Code enthalten:

```js
self.addEventListener("canmakepayment", (evt) => {
  // Pre-authorize here.
  const preAuthSuccess = true;
  evt.respondWith(preAuthSuccess);
});
```

Dieser Zahlungshandler müsste im Service Worker im Bereich `https://example.com/preauth` laufen.

> [!NOTE]
> Sehen Sie sich unsere [Vorautorisierung von Transaktionen-Demo](https://mdn.github.io/dom-examples/payment-request/pre-authorize-transaction.html) für den vollständigen Code an.

## Siehe auch

- [Google PaymentRequest Samples](https://googlechrome.github.io/samples/paymentrequest/)
