---
title: Verwenden der Payment Request API
slug: Web/API/Payment_Request_API/Using_the_Payment_Request_API
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet eine browserbasierte Methode, um Benutzer und ihre bevorzugten Zahlungssysteme und -plattformen mit Händlern zu verbinden, die sie für Waren und Dienstleistungen bezahlen möchten. Dieser Artikel ist ein Leitfaden zur Nutzung der [Payment Request API](/de/docs/Web/API/Payment_Request_API) mit Beispielen und empfohlenen Best Practices.

## Die Grundlagen der Zahlungsabwicklung

Dieser Abschnitt beschreibt die Grundlagen der Nutzung der Payment Request API zur Durchführung einer Zahlung.

> [!NOTE]
> Die Codebeispiele in diesem Abschnitt stammen aus unserem [Feature-Detection-Demo](https://github.com/mdn/dom-examples/blob/main/payment-request/feature-detect-support.html).

### Erstellen eines neuen Payment Request Objekts

Ein Zahlungsvorgang beginnt immer mit der Erstellung eines neuen [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekts — über den [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktor. Dieser nimmt zwei obligatorische Parameter und einen optionalen Parameter entgegen:

- `methodData` — ein Objekt, das Informationen über den Zahlungsanbieter enthält, z.B. welche Zahlungsmethoden unterstützt werden.
- `details` — ein Objekt, das Informationen über die spezifische Zahlung enthält, wie den Gesamtzahlungsbetrag, Steuern, Versandkosten, etc.
- `options` (optional) — ein Objekt mit zusätzlichen Optionen, die mit der Zahlung in Zusammenhang stehen.

Zum Beispiel könnten Sie eine neue `PaymentRequest` Instanz wie folgt erstellen:

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

### Starten des Zahlungsvorgangs

Sobald das `PaymentRequest` Objekt erstellt wurde, rufen Sie die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) auf, um die Zahlungsanforderung zu initiieren. Diese gibt ein Versprechen zurück, das bei erfolgreicher Zahlung mit einem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) Objekt erfüllt wird:

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

Dieses Objekt bietet dem Entwickler Zugang zu Details, die er verwenden kann, um die logischen Schritte nach Abschluss der Zahlung abzuschließen, wie etwa eine E-Mail-Adresse zur Kontaktaufnahme mit dem Kunden, eine Versandadresse zum Versenden der Waren, etc. Im obigen Code haben wir die Methode [`PaymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete) aufgerufen, um zu signalisieren, dass die Interaktion abgeschlossen ist — Sie würden diese verwenden, um abschließende Schritte durchzuführen, z.B. die Benutzeroberfläche zu aktualisieren, um dem Benutzer mitzuteilen, dass die Transaktion abgeschlossen ist.

### Weitere nützliche Zahlungsmethoden

Es gibt einige weitere nützliche Zahlungsmethoden, die es wert sind, bekannt zu sein.

[`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) kann verwendet werden, um zu überprüfen, ob das `PaymentRequest` Objekt in der Lage ist, eine Zahlung zu tätigen, bevor Sie den Zahlungsvorgang starten. Es gibt ein Versprechen zurück, das mit einem Boolean-Wert, der angibt, ob dies der Fall ist oder nicht, erfüllt wird, zum Beispiel:

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

Sie können die Unterstützung für die Payment Request API effektiv erkennen, indem Sie überprüfen, ob der Browser des Benutzers [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) unterstützt, d.h. `if (window.PaymentRequest)`.

Im folgenden Snippet führt eine Händlerseite diese Überprüfung durch und aktualisiert, wenn sie `true` zurückgibt, die Checkout-Schaltfläche, um `PaymentRequest` anstelle von veralteten Webformularen zu verwenden.

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
> Siehe unser [Feature-Detection-Demo](https://mdn.github.io/dom-examples/payment-request/feature-detect-support.html) für den vollständigen Code.

## Überprüfen, ob Benutzer Zahlungen vornehmen können

Es ist immer nützlich zu prüfen, ob Benutzer Zahlungen vornehmen können. Hier sind einige verwandte Techniken.

### Anpassen der Zahlungsschaltfläche

Eine nützliche Technik besteht darin, die Zahlungsanforderungsschaltfläche abhängig davon anzupassen, ob Benutzer Zahlungen vornehmen können.

Im folgenden Snippet tun wir genau dies — abhängig davon, ob der Benutzer eine schnelle Zahlung vornehmen kann oder zuerst Zahlungsberechtigungen hinzufügen muss, ändert sich der Titel der Checkout-Schaltfläche zwischen "Schneller Checkout mit W3C" und "W3C Checkout einrichten". In beiden Fällen ruft die Checkout-Schaltfläche [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) auf.

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
> Siehe unser [Anpassen der Zahlungsschaltflächen-Demo](https://mdn.github.io/dom-examples/payment-request/customize-button-can-make-payment.html) für den vollständigen Code.

### Überprüfung vor Bekanntgabe aller Preise

Wenn der Checkout-Ablauf wissen muss, ob [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) `true` zurückgeben wird, auch bevor alle Positionen und deren Preise bekannt sind, können Sie `PaymentRequest` mit Dummy-Daten instanziieren und `.canMakePayment()` vorab abfragen. Wenn Sie `.canMakePayment()` mehrmals aufrufen, beachten Sie, dass der erste Parameter des `PaymentRequest` Konstruktors die gleichen Methodennamen und Daten enthalten sollte.

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
> Siehe unser [Überprüfen, ob Benutzer Zahlungen vornehmen können, bevor Preise bekannt sind Demo](https://mdn.github.io/dom-examples/payment-request/check-user-can-make-payment.html) für den vollständigen Code.

## Empfehlen einer Zahlungs-App, wenn der Benutzer keine Apps hat

Wenn Sie sich auf dieser Händlerseite entschließen, mit dem BobPay-Demo-Zahlungsanbieter zu bezahlen, versucht er, `PaymentRequest.show()` aufzurufen, während er den `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) abfängt. Wenn diese Zahlungsmethode nicht unterstützt wird, wird auf die Anmeldeseite von BobPay umgeleitet.

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
> Siehe unser [Empfehlen einer Zahlungs-App, wenn der Benutzer keine Apps hat Demo](https://mdn.github.io/dom-examples/payment-request/recommend-payment-app.html) für den vollständigen Code.

## Zusätzliche Benutzeroberfläche nach erfolgreichen Zahlungen anzeigen

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
> Siehe unser [Zusätzliche Benutzeroberfläche nach erfolgreicher Zahlung anzeigen Demo](https://mdn.github.io/dom-examples/payment-request/show-additional-ui-after-payment.html) für den vollständigen Code.

## Transaktionen vorab genehmigen

Einige Anwendungsfälle (z.B. das Bezahlen von Kraftstoff an einer Tankstelle) erfordern die Vorab-Genehmigung der Zahlung. Eine Möglichkeit, dies zu tun, ist die Verwendung eines Payment Handlers (siehe die [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)). Zum Zeitpunkt des Schreibens enthält diese Spezifikation ein `canmakepayment` Ereignis, das ein Payment Handler verwenden könnte, um den Autorisierungsstatus zurückzugeben.

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

Der Zahlungshandler würde den folgenden Code enthalten:

```js
self.addEventListener("canmakepayment", (evt) => {
  // Pre-authorize here.
  const preAuthSuccess = true;
  evt.respondWith(preAuthSuccess);
});
```

Dieser Zahlungshandler müsste in einem Service Worker unter dem Scope `https://example.com/preauth` leben.

> [!NOTE]
> Siehe unser [Transaktionen vorab genehmigen Demo](https://mdn.github.io/dom-examples/payment-request/pre-authorize-transaction.html) für den vollständigen Code.

## Siehe auch

- [Google PaymentRequest Beispiele](https://googlechrome.github.io/samples/paymentrequest/)
