---
title: Verwenden der Payment Request API
slug: Web/API/Payment_Request_API/Using_the_Payment_Request_API
l10n:
  sourceCommit: 73ca80b86a348f88f51fdb8f9441c114b76e94f1
---

{{DefaultAPISidebar("Payment Request API")}}

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet eine browserbasierte Methode, um Benutzer und deren bevorzugte Zahlungssysteme und -plattformen mit Händlern zu verbinden, bei denen sie Waren und Dienstleistungen bezahlen möchten. Dieser Artikel ist ein Leitfaden zur Nutzung der [Payment Request API](/de/docs/Web/API/Payment_Request_API), mit Beispielen und vorgeschlagenen Best Practices.

## Grundlagen der Zahlungsabwicklung

Dieser Abschnitt beschreibt die Grundlagen der Nutzung der Payment Request API zur Durchführung einer Zahlung.

> [!NOTE]
> Die Code-Snippets in diesem Abschnitt stammen aus unserem [Feature detect support demo](https://github.com/mdn/dom-examples/blob/main/payment-request/feature-detect-support.html).

### Erstellen eines neuen Zahlungsanforderungsobjekts

Eine Zahlungsanforderung beginnt immer mit der Erstellung eines neuen [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekts — unter Verwendung des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktors. Dieser nimmt zwei erforderliche Parameter und einen optionalen Parameter entgegen:

- `methodData` — ein Objekt, das Informationen über den Zahlungsanbieter enthält, wie z.B. welche Zahlungsmethoden unterstützt werden usw.
- `details` — ein Objekt, das Informationen über die spezifische Zahlung enthält, wie z.B. den Gesamtzahlungsbetrag, Steuern, Versandkosten usw.
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

Nachdem das `PaymentRequest`-Objekt erstellt wurde, rufen Sie die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)-Methode auf, um die Zahlungsanforderung zu initiieren. Diese gibt ein Versprechen zurück, das erfüllt wird, wenn die Zahlung erfolgreich ist, mit einem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt:

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

Dieses Objekt bietet dem Entwickler Zugriff auf Details, die er verwenden kann, um die logischen Schritte abzuschließen, die nach Abschluss der Zahlung erforderlich sind, wie z.B. eine E-Mail-Adresse, um den Kunden zu kontaktieren, oder eine Versandadresse, um Waren an ihn zu senden usw. Im obigen Code sehen Sie, dass wir die [`PaymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete)-Methode aufgerufen haben, um zu signalisieren, dass die Interaktion abgeschlossen ist – Sie würden dies verwenden, um abschließende Schritte auszuführen, wie z.B. die Benutzeroberfläche zu aktualisieren, um dem Benutzer mitzuteilen, dass die Transaktion abgeschlossen ist, usw.

### Andere nützliche Zahlungsmethoden

Es gibt einige andere nützliche Zahlungsmethoden, die es sich lohnt, zu kennen.

[`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) kann verwendet werden, um zu überprüfen, ob das `PaymentRequest`-Objekt in der Lage ist, eine Zahlung zu leisten, bevor Sie den Zahlungsprozess starten. Es gibt ein Versprechen zurück, das mit einem booleschen Wert erfüllt wird, der anzeigt, ob dies der Fall ist oder nicht, zum Beispiel:

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

## Verfügbarkeit der Payment Request API prüfen

Sie können die Unterstützung der Payment Request API effektiv erkennen, indem Sie überprüfen, ob der Browser des Benutzers [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) unterstützt, d.h. `if (window.PaymentRequest)`.

Im folgenden Snippet führt eine Händlerseite diese Überprüfung durch und, falls `true` zurückgegeben wird, wird die Checkout-Schaltfläche aktualisiert, um `PaymentRequest` anstelle von Legacy-Webformularen zu verwenden.

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
> Sehen Sie sich unser [Feature detect support demo](https://mdn.github.io/dom-examples/payment-request/feature-detect-support.html) für den vollständigen Code an.

## Prüfen, ob Benutzer Zahlungen leisten können

Es ist immer hilfreich, zu prüfen, ob Benutzer Zahlungen leisten können. Hier sind ein paar verwandte Techniken.

### Anpassen der Zahlungsschaltfläche

Eine nützliche Technik besteht darin, die Schaltfläche der Zahlungsanforderung je nachdem anzupassen, ob Benutzer Zahlungen leisten können.

Im folgenden Snippet tun wir genau das – je nachdem, ob der Benutzer eine schnelle Zahlung vornehmen kann oder zuerst Zahlungsdaten hinzufügen muss, ändert sich der Titel der Checkout-Schaltfläche zwischen "Fast Checkout with W3C" und "Setup W3C Checkout". In beiden Fällen ruft die Checkout-Schaltfläche [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) auf.

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

### Überprüfen, bevor alle Preise bekannt sind

Wenn der Checkout-Prozess wissen muss, ob [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) den Wert `true` zurückgibt, selbst bevor alle Positionen und deren Preise bekannt sind, können Sie `PaymentRequest` mit Dummy-Daten instanziieren und `.canMakePayment()` vorab abfragen. Wenn Sie `.canMakePayment()` mehrmals aufrufen, beachten Sie, dass der erste Parameter des `PaymentRequest`-Konstruktors dieselben Methodenamen und Daten enthalten sollte.

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
> Sehen Sie unser [Checking user can make payments before prices are known demo](https://mdn.github.io/dom-examples/payment-request/check-user-can-make-payment.html) für den vollständigen Code.

## Empfehlen einer Zahlungs-App, wenn der Benutzer keine Apps hat

Wenn Sie sich entscheiden, mit dem BobBucks-Demo-Zahlungsanbieter auf dieser Händlerseite zu bezahlen, versucht es, `PaymentRequest.show()` aufzurufen, während der `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) abgefangen wird. Wenn diese Zahlungsmethode nicht unterstützt wird, wird auf die Anmeldeseite für BobBucks umgeleitet.

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
> Sehen Sie unser [Recommending a payment app when user has no apps demo](https://mdn.github.io/dom-examples/payment-request/recommend-payment-app.html) für den vollständigen Code.

## Zusätzliche Benutzeroberfläche nach erfolgreichen Zahlungen anzeigen

Wenn der Händler weitere Informationen sammeln möchte, die nicht Teil der API sind (z.B. zusätzliche Lieferanweisungen), kann der Händler eine Seite mit zusätzlichen `<input type="text">`-Feldern nach dem Checkout anzeigen.

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
> Sehen Sie unser [Show additional user interface after successful payment demo](https://mdn.github.io/dom-examples/payment-request/show-additional-ui-after-payment.html) für den vollständigen Code.

## Vorautorisierung von Transaktionen

Einige Anwendungsfälle (z.B. das Bezahlen für Kraftstoff an einer Tankstelle) beinhalten die Vorautorisierung der Zahlung. Eine Möglichkeit, dies zu tun, besteht in der Verwendung eines web-basierten Zahlungshandlers (siehe die [Web-based Payment Handler API](/de/docs/Web/API/Web-Based_Payment_Handler_API)). Zum Zeitpunkt des Schreibens enthält diese Spezifikation ein `canmakepayment`-Ereignis, das ein web-basierter Zahlungshandler verwenden könnte, um den Autorisierungsstatus zurückzugeben.

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

Der Web-basierte Zahlungshandler würde den folgenden Code enthalten:

```js
self.addEventListener("canmakepayment", (evt) => {
  // Pre-authorize here.
  const preAuthSuccess = true;
  evt.respondWith(preAuthSuccess);
});
```

Dieser Zahlungshandler müsste in einem Service Worker unter dem Geltungsbereich `https://example.com/preauth` leben.

> [!NOTE]
> Sehen Sie unser [Pre-authorizing transactions demo](https://mdn.github.io/dom-examples/payment-request/pre-authorize-transaction.html) für den vollständigen Code.

## Siehe auch

- [Google PaymentRequest Samples](https://googlechrome.github.io/samples/paymentrequest/)
