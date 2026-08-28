---
title: Verwendung der Payment Request API
slug: Web/API/Payment_Request_API/Using_the_Payment_Request_API
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

{{DefaultAPISidebar("Payment Request API")}}

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet eine browserbasierte Methode, um Benutzer und ihre bevorzugten Zahlungssysteme und -plattformen mit Händlern zu verbinden, bei denen sie für Waren und Dienstleistungen bezahlen möchten. Dieser Artikel ist ein Leitfaden zur Nutzung der [Payment Request API](/de/docs/Web/API/Payment_Request_API) mit Beispielen und empfohlenen Best Practices.

## Die Grundlagen des Bezahlens

Dieser Abschnitt beschreibt die Grundlagen der Verwendung der Payment Request API, um eine Zahlung durchzuführen.

> [!NOTE]
> Die Codebeispiele in diesem Abschnitt stammen aus unserem [Feature detect support demo](https://github.com/mdn/dom-examples/blob/main/payment-request/feature-detect-support.html).

### Erstellen eines neuen Zahlungsanforderungsobjekts

Eine Zahlungsanforderung beginnt immer mit der Erstellung eines neuen [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekts — unter Verwendung des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktors. Dieser nimmt zwei obligatorische Parameter und einen optionalen Parameter entgegen:

- `methodData` — ein Objekt, das Informationen über den Zahlungsanbieter enthält, wie z.B. welche Zahlungsmethoden unterstützt werden, usw.
- `details` — ein Objekt, das Informationen zur spezifischen Zahlung enthält, wie z.B. den Gesamtbetrag, Steuern, Versandkosten usw.
- `options` (optional) — ein Objekt, das zusätzliche Optionen im Zusammenhang mit der Zahlung enthält.

Zum Beispiel könnten Sie eine neue `PaymentRequest`-Instanz wie folgt erstellen:

```js
const request = new PaymentRequest(
  buildSupportedPaymentMethodData(),
  buildShoppingCartDetails(),
);
```

Die innerhalb des Konstruktors aufgerufenen Funktionen geben die erforderlichen Objektparameter zurück:

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

Sobald das `PaymentRequest`-Objekt erstellt wurde, rufen Sie die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)-Methode auf, um die Zahlungsanforderung zu starten. Dies gibt ein Promise zurück, das bei erfolgreicher Zahlung mit einem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt erfüllt wird:

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

Dieses Objekt bietet dem Entwickler Zugriff auf Details, die zur Durchführung der logischen Schritte nach Abschluss der Zahlung verwendet werden können, wie z.B. eine E-Mail-Adresse zur Kontaktaufnahme mit dem Kunden, eine Versandadresse zum Versenden von Waren usw. Im obigen Code sehen Sie, dass wir die [`PaymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete)-Methode aufgerufen haben, um anzuzeigen, dass die Interaktion abgeschlossen ist — Sie würden dies verwenden, um abschließende Schritte auszuführen, wie z.B. die Benutzeroberfläche zu aktualisieren, um den Benutzer darüber zu informieren, dass die Transaktion abgeschlossen ist, usw.

### Weitere nützliche Methoden der Zahlungsanforderung

Es gibt einige weitere nützliche Methoden der Zahlungsanforderung, die es wert sind, bekannt zu sein.

[`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) kann verwendet werden, um zu überprüfen, ob das `PaymentRequest`-Objekt in der Lage ist, eine Zahlung zu leisten, bevor Sie den Zahlungsprozess starten. Es gibt ein Promise zurück, das mit einem Boolean erfüllt wird, der angibt, ob dies der Fall ist oder nicht, zum Beispiel:

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

Sie können die Unterstützung der Payment Request API effektiv erkennen, indem Sie prüfen, ob der Browser des Benutzers [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) unterstützt, d.h. `if (window.PaymentRequest)`.

Im folgenden Snippet führt eine Händlerseite diese Prüfung durch, und wenn sie `true` ergibt, wird der Checkout-Button aktualisiert, um `PaymentRequest` anstelle von älteren Webformularen zu verwenden.

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
        // Handle canceled or failed payment. For example, redirect to
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
> Siehe unser [Feature detect support demo](https://mdn.github.io/dom-examples/payment-request/feature-detect-support.html) für den vollständigen Code.

## Überprüfen, ob Benutzer Zahlungen leisten können

Es ist immer nützlich zu überprüfen, ob Benutzer Zahlungen leisten können. Hier sind ein paar verwandte Techniken.

### Anpassen des Zahlungsbuttons

Eine nützliche Technik besteht darin, den Button zur Zahlungsanforderung anzupassen, je nachdem, ob Benutzer Zahlungen leisten können.

Im folgenden Snippet tun wir genau das — je nachdem, ob der Benutzer eine schnelle Zahlung leisten kann oder zuerst Zahlungsdaten hinzufügen muss, ändert sich der Titel des Checkout-Buttons zwischen "Fast Checkout with W3C" und "Setup W3C Checkout". In beiden Fällen ruft der Checkout-Button [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) auf.

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
> Siehe unser [Customizing the payment button demo](https://mdn.github.io/dom-examples/payment-request/customize-button-can-make-payment.html) für den vollständigen Code.

### Überprüfung vor Bekanntwerden aller Preise

Wenn der Checkout-Prozess wissen muss, ob [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) `true` zurückgeben wird, auch bevor alle Einzelposten und deren Preise bekannt sind, können Sie `PaymentRequest` mit Platzhaltern-Daten instanziieren und `.canMakePayment()` vorab abfragen. Wenn Sie `.canMakePayment()` mehrfach aufrufen, beachten Sie bitte, dass der erste Parameter des `PaymentRequest`-Konstruktors die gleichen Methodennamen und Daten enthalten sollte.

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
> Siehe unser [Checking user can make payments before prices are known demo](https://mdn.github.io/dom-examples/payment-request/check-user-can-make-payment.html) für den vollständigen Code.

## Empfehlen einer Zahlungs-App, wenn Benutzer keine Apps haben

Wenn Sie auf dieser Händlerseite auswählen, mit dem BobBucks-Demo-Zahlungsanbieter zu bezahlen, versucht es, `PaymentRequest.show()` aufzurufen, während der `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) abgefangen wird. Wenn diese Zahlungsmethode nicht unterstützt wird, wird zur Anmeldeseite für BobBucks umgeleitet.

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
        window.location.href = "https://bobbucks.dev/#download";
      } else {
        // Other kinds of errors; canceled or failed payment. For demo purposes:
        introPanel.style.display = "none";
        legacyPanel.style.display = "block";
      }
    });
});
```

> [!NOTE]
> Siehe unser [Recommending a payment app when user has no apps demo](https://mdn.github.io/dom-examples/payment-request/recommend-payment-app.html) für den vollständigen Code.

## Zusätzliche Benutzeroberfläche nach erfolgreichen Zahlungen anzeigen

Wenn der Händler zusätzliche Informationen sammeln möchte, die nicht Teil der API sind (z. B. zusätzliche Lieferhinweise), kann der Händler eine Seite mit zusätzlichen `<input type="text">`-Feldern nach dem Checkout anzeigen.

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
> Siehe unser [Show additional user interface after successful payment demo](https://mdn.github.io/dom-examples/payment-request/show-additional-ui-after-payment.html) für den vollständigen Code.

## Vorautorisierung von Transaktionen

Einige Anwendungsfälle (z. B. das Bezahlen von Kraftstoff an einer Tankstelle) beinhalten die Vorautorisierung der Zahlung. Eine Möglichkeit, dies zu tun, ist über einen webbasierten Zahlungshandler (siehe die [Web-based Payment Handler API](/de/docs/Web/API/Web-Based_Payment_Handler_API)). Zum Zeitpunkt des Schreibens enthält diese Spezifikation ein `canmakepayment`-Ereignis, das ein webbasierter Zahlungshandler nutzen könnte, um den Autorisierungsstatus zurückzugeben.

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

Der webbasierte Zahlungshandler würde den folgenden Code enthalten:

```js
self.addEventListener("canmakepayment", (evt) => {
  // Pre-authorize here.
  const preAuthSuccess = true;
  evt.respondWith(preAuthSuccess);
});
```

Dieser Zahlungshandler müsste in einem Service Worker im Bereich `https://example.com/preauth` liegen.

> [!NOTE]
> Siehe unser [Pre-authorizing transactions demo](https://mdn.github.io/dom-examples/payment-request/pre-authorize-transaction.html) für den vollständigen Code.

## Siehe auch

- [Google PaymentRequest Samples](https://googlechrome.github.io/samples/paymentrequest/)
