---
title: Nutzung der Payment Request API
slug: Web/API/Payment_Request_API/Using_the_Payment_Request_API
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet eine browserbasierte Methode, um Benutzer und ihre bevorzugten Zahlungssysteme und Plattformen mit Händlern zu verbinden, bei denen sie Waren und Dienstleistungen bezahlen möchten. Dieser Artikel ist ein Leitfaden zur Nutzung der [Payment Request API](/de/docs/Web/API/Payment_Request_API) mit Beispielen und empfohlenen Best Practices.

## Die Grundlagen der Zahlung

Dieser Abschnitt erläutert die Grundlagen der Nutzung der Payment Request API zur Durchführung einer Zahlung.

> [!NOTE]
> Die Codebeispiele in diesem Abschnitt stammen aus unserem [Feature detect support demo](https://github.com/mdn/dom-examples/blob/main/payment-request/feature-detect-support.html).

### Erstellen eines neuen Payment Request Objekts

Ein Zahlungsantrag beginnt immer mit der Erstellung eines neuen [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekts — mithilfe des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktors. Dieser erfordert zwei verpflichtende Parameter und einen optionalen Parameter:

- `methodData` — ein Objekt, das Informationen über den Zahlungsanbieter enthält, z. B. welche Zahlungsmethoden unterstützt werden usw.
- `details` — ein Objekt, das Informationen über die spezifische Zahlung enthält, wie den Gesamtbetrag, Steuern, Versandkosten usw.
- `options` (optional) — ein Objekt, das zusätzliche Optionen im Zusammenhang mit der Zahlung enthält.

Zum Beispiel können Sie eine neue `PaymentRequest` Instanz wie folgt erstellen:

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

Sobald das `PaymentRequest` Objekt erstellt wurde, rufen Sie die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) Methode auf, um den Zahlungsantrag zu starten. Dies gibt ein Promise zurück, das bei erfolgreicher Zahlung mit einem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) Objekt erfüllt wird:

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

Dieses Objekt bietet dem Entwickler Zugriff auf Details, die für die Durchführung der notwendigen Schritte nach Abschluss der Zahlung genutzt werden können, wie z. B. eine E-Mail-Adresse zum Kontakt mit dem Kunden, eine Versandadresse für die Zustellung von Waren usw. Im obigen Code sehen Sie, dass wir die [`PaymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete) Methode aufgerufen haben, um das Ende der Interaktion zu signalisieren — dies würden Sie verwenden, um abschließende Schritte auszuführen, wie die Benutzeroberfläche zu aktualisieren, um dem Benutzer mitzuteilen, dass die Transaktion abgeschlossen ist usw.

### Weitere nützliche Zahlungshinweismethoden

Es gibt einige andere nützliche Zahlungsmethoden, die es wert sind, bekannt zu sein.

[`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) kann verwendet werden, um zu prüfen, ob das `PaymentRequest` Objekt in der Lage ist, eine Zahlung durchzuführen, bevor Sie den Zahlungsprozess starten. Es gibt ein Promise zurück, das mit einem booleschen Wert erfüllt wird, der angibt, ob dies möglich ist oder nicht, zum Beispiel:

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

[`PaymentRequest.abort()`](/de/docs/Web/API/PaymentRequest/abort) kann verwendet werden, um den Zahlungsantrag bei Bedarf abzubrechen.

## Erkennen der Verfügbarkeit der Payment Request API

Sie können die Unterstützung für die Payment Request API effektiv erkennen, indem Sie prüfen, ob der Browser des Benutzers [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) unterstützt, das heißt `if (window.PaymentRequest)`.

Im folgenden Codebeispiel führt eine Händlerseite diese Prüfung durch und aktualisiert, falls sie `true` zurückgibt, die Checkout-Schaltfläche, um `PaymentRequest` anstelle von veralteten Webformularen zu verwenden.

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

## Überprüfung, ob Benutzer Zahlungen durchführen können

Zu überprüfen, ob Benutzer Zahlungen durchführen können, ist immer nützlich. Hier sind ein paar verwandte Techniken.

### Anpassung der Zahlungsschaltfläche

Eine nützliche Technik besteht darin, die Schaltfläche für den Zahlungsantrag je nach Zahlungsfähigkeit der Benutzer anzupassen.

Im folgenden Codebeispiel tun wir genau dies — je nachdem, ob der Benutzer eine schnelle Zahlung durchführen kann oder zuerst Zahlungsdaten hinzufügen muss, ändert sich der Titel der Checkout-Schaltfläche zwischen "Fast Checkout with W3C" und "Setup W3C Checkout". In beiden Fällen ruft die Checkout-Schaltfläche [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) auf.

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
> Sehen Sie sich unser [Customize the payment button demo](https://mdn.github.io/dom-examples/payment-request/customize-button-can-make-payment.html) für den vollständigen Code an.

### Überprüfung, bevor alle Preise bekannt sind

Wenn der Checkout-Prozess wissen muss, ob [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) `true` zurückgeben wird, selbst bevor alle Artikel und deren Preise bekannt sind, können Sie `PaymentRequest` mit Dummy-Daten instanziieren und `.canMakePayment()` vorab abfragen. Wenn Sie `.canMakePayment()` mehrfach aufrufen, beachten Sie, dass der erste Parameter des `PaymentRequest` Konstruktors dieselben Methodennamen und Daten enthalten sollte.

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
> Sehen Sie sich unser [Check user can make payments before prices are known demo](https://mdn.github.io/dom-examples/payment-request/check-user-can-make-payment.html) für den vollständigen Code an.

## Empfehlung einer Zahlungs-App, wenn der Benutzer keine Apps hat

Wenn Sie auf dieser Händlerseite die Zahlung mit dem BobPay-Demozahlungsanbieter auswählen, versucht es, `PaymentRequest.show()` aufzurufen, während es das `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) abfängt. Wenn diese Zahlungsmethode nicht unterstützt wird, wird auf die Registrierungsseite von BobPay weitergeleitet.

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
> Sehen Sie sich unser [Recommend a payment app when user has no apps demo](https://mdn.github.io/dom-examples/payment-request/recommend-payment-app.html) für den vollständigen Code an.

## Anzeige zusätzlicher Benutzeroberflächen nach erfolgreichen Zahlungen

Wenn der Händler zusätzliche Informationen sammeln möchte, die nicht Teil der API sind (z. B. zusätzliche Lieferanweisungen), kann der Händler eine Seite mit zusätzlichen `<input type="text">` Feldern nach dem Checkout anzeigen.

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
> Sehen Sie sich unser [Show additional user interface after successful payment demo](https://mdn.github.io/dom-examples/payment-request/show-additional-ui-after-payment.html) für den vollständigen Code an.

## Vorautorisierung von Transaktionen

Einige Anwendungsfälle (z. B. das Bezahlen von Benzin an einer Tankstelle) beinhalten die Vorautorisierung einer Zahlung. Eine Möglichkeit, dies zu tun, ist über einen Payment Handler (siehe die [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)). Zum Zeitpunkt der Erstellung dieses Artikels umfasst diese Spezifikation ein `canmakepayment` Ereignis, das ein Payment Handler nutzen könnte, um den Autorisierungsstatus zurückzugeben.

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

Der Payment Handler würde den folgenden Code enthalten:

```js
self.addEventListener("canmakepayment", (evt) => {
  // Pre-authorize here.
  const preAuthSuccess = true;
  evt.respondWith(preAuthSuccess);
});
```

Dieser Payment Handler muss in einem Service Worker im `https://example.com/preauth` Bereich leben.

> [!NOTE]
> Sehen Sie sich unser [Pre-authorizing transactions demo](https://mdn.github.io/dom-examples/payment-request/pre-authorize-transaction.html) für den vollständigen Code an.

## Siehe auch

- [Google PaymentRequest Samples](https://googlechrome.github.io/samples/paymentrequest/)
