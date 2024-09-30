---
title: Verwendung der Payment Request API
slug: Web/API/Payment_Request_API/Using_the_Payment_Request_API
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet eine browserbasierte Methode zur Verbindung von Benutzern und ihren bevorzugten Zahlungssystemen und -plattformen mit Händlern, bei denen sie für Waren und Dienstleistungen bezahlen möchten. Dieser Artikel ist ein Leitfaden zur Nutzung der [Payment Request API](/de/docs/Web/API/Payment_Request_API), mit Beispielen und vorgeschlagenen Best Practices.

## Die Grundlagen der Zahlung

Dieser Abschnitt beschreibt die Grundlagen der Verwendung der Payment Request API, um eine Zahlung durchzuführen.

> [!NOTE]
> Die Code-Beispiele in diesem Abschnitt stammen aus unserer [Feature Detect Support-Demo](https://github.com/mdn/dom-examples/blob/main/payment-request/feature-detect-support.html).

### Erstellen eines neuen Zahlungsanforderungsobjekts

Eine Zahlungsanforderung beginnt immer mit der Erstellung eines neuen [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekts — unter Verwendung des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktors. Dieser benötigt zwei obligatorische Parameter und einen optionalen Parameter:

- `methodData` — ein Objekt, das Informationen über den Zahlungsanbieter enthält, wie z.B. welche Zahlungsmethoden unterstützt werden, etc.
- `details` — ein Objekt, das Informationen über die spezifische Zahlung enthält, wie z.B. den Gesamtzahlungsbetrag, Steuern, Versandkosten, etc.
- `options` (optional) — ein Objekt, das zusätzliche Optionen in Bezug auf die Zahlung enthält.

So könnten Sie beispielsweise eine neue `PaymentRequest`-Instanz wie folgt erstellen:

```js
const request = new PaymentRequest(
  buildSupportedPaymentMethodData(),
  buildShoppingCartDetails(),
);
```

Die Funktionen, die innerhalb des Konstruktors aufgerufen werden, geben die erforderlichen Objektparameter zurück:

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

### Beginn des Zahlungsvorgangs

Sobald das `PaymentRequest`-Objekt erstellt wurde, rufen Sie die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) auf, um die Zahlungsanforderung einzuleiten. Dies gibt ein Promise zurück, das bei erfolgreicher Bezahlung mit einem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt erfüllt wird:

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

Dieses Objekt bietet dem Entwickler Zugang zu Informationen, die verwendet werden können, um die logischen Schritte auszuführen, die nach Abschluss der Zahlung erforderlich sind, wie z.B. eine E-Mail-Adresse, um den Kunden zu kontaktieren, oder eine Versandadresse, um Waren an ihn zu versenden. Im obigen Code sehen Sie, dass wir die Methode [`PaymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete) aufgerufen haben, um anzuzeigen, dass die Interaktion beendet ist — Sie würden dies verwenden, um Abschlussmaßnahmen durchzuführen, wie z.B. die Benutzeroberfläche zu aktualisieren, um dem Benutzer mitzuteilen, dass die Transaktion abgeschlossen ist, etc.

### Andere nützliche Zahlungsanforderungsmethoden

Es gibt einige andere nützliche Zahlungsmethoden, die es sich lohnt, zu kennen.

[`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) kann verwendet werden, um zu überprüfen, ob das `PaymentRequest`-Objekt in der Lage ist, eine Zahlung vorzunehmen, bevor Sie den Zahlungsprozess beginnen. Es gibt ein Promise zurück, das mit einem booleschen Wert erfüllt wird, der angibt, ob dies der Fall ist oder nicht, z.B.:

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

[`PaymentRequest.abort()`](/de/docs/Web/API/PaymentRequest/abort) kann verwendet werden, um die Zahlungsaufforderung bei Bedarf abzubrechen.

## Erkennung der Verfügbarkeit der Payment Request API

Sie können die Unterstützung für die Payment Request API effektiv erkennen, indem Sie überprüfen, ob der Browser des Benutzers [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) unterstützt, d.h. `if (window.PaymentRequest)`.

Im folgenden Snippet führt eine Händlerseite diese Überprüfung durch, und wenn sie `true` zurückgibt, wird die Checkout-Schaltfläche aktualisiert, um `PaymentRequest` anstelle von alten Webformularen zu verwenden.

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
> Sehen Sie sich unsere [Feature Detect Support-Demo](https://mdn.github.io/dom-examples/payment-request/feature-detect-support.html) für den vollständigen Code an.

## Überprüfung, ob Benutzer Zahlungen vornehmen können

Es ist immer nützlich zu überprüfen, ob Benutzer Zahlungen vornehmen können. Hier sind einige verwandte Techniken.

### Anpassen der Zahlungsschaltfläche

Eine nützliche Technik ist das Anpassen der Zahlungsschaltfläche, je nachdem, ob Benutzer Zahlungen vornehmen können.

Im folgenden Snippet tun wir genau das — abhängig davon, ob der Benutzer eine schnelle Zahlung vornehmen kann oder zunächst Zahlungsdaten hinzufügen muss, ändert sich der Titel der Checkout-Schaltfläche zwischen "Fast Checkout with W3C" und "Setup W3C Checkout". In beiden Fällen ruft die Checkout-Schaltfläche [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) auf.

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
> Sehen Sie sich unsere [Customize the payment button-Demo](https://mdn.github.io/dom-examples/payment-request/customize-button-can-make-payment.html) für den vollständigen Code an.

### Überprüfung, bevor alle Preise bekannt sind

Wenn der Checkout-Prozess wissen muss, ob [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) `true` zurückgibt, selbst bevor alle Einzelposten und ihre Preise bekannt sind, können Sie `PaymentRequest` mit Dummy-Daten instanziieren und `.canMakePayment()` vorab abfragen. Wenn Sie `.canMakePayment()` mehrmals aufrufen, denken Sie daran, dass der erste Parameter des `PaymentRequest`-Konstruktors dieselben Methodennamen und Daten enthalten sollte.

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
> Siehe unsere [Überprüfung, ob Benutzer Zahlungen vornehmen können, bevor die Preise bekannt sind-Demo](https://mdn.github.io/dom-examples/payment-request/check-user-can-make-payment.html) für den vollständigen Code.

## Empfehlen einer Zahlungs-App, wenn der Benutzer keine Apps hat

Wenn Sie sich auf dieser Händlerseite entscheiden, mit dem BobPay-Demo-Zahlungsanbieter zu bezahlen, versucht er, `PaymentRequest.show()` aufzurufen, während er den `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) abfängt. Wenn diese Zahlungsmethode nicht unterstützt wird, wird zur Anmeldeseite für BobPay weitergeleitet.

Der Code sieht etwa so aus:

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
> Sehen Sie sich unsere [Empfehlen einer Zahlungs-App, wenn der Benutzer keine Apps hat-Demo](https://mdn.github.io/dom-examples/payment-request/recommend-payment-app.html) für den vollständigen Code an.

## Anzeigen einer zusätzlichen Benutzeroberfläche nach erfolgreichen Zahlungen

Wenn der Händler zusätzliche Informationen sammeln möchte, die nicht Teil der API sind (z.B. zusätzliche Lieferhinweise), kann der Händler nach dem Checkout eine Seite mit zusätzlichen `<input type="text">` Feldern anzeigen.

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
> Sehen Sie sich unsere [Anzeigen einer zusätzlichen Benutzeroberfläche nach erfolgreicher Zahlung-Demo](https://mdn.github.io/dom-examples/payment-request/show-additional-ui-after-payment.html) für den vollständigen Code an.

## Vorautorisierung von Transaktionen

Einige Anwendungsfälle (z.B. das Bezahlen an einer Tankstelle) beinhalten die Vorautorisierung von Zahlungen. Eine Möglichkeit, dies zu tun, ist über einen Payment Handler (siehe die [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)). Zum Zeitpunkt der Erstellung dieses Dokuments enthält diese Spezifikation ein `canmakepayment`-Ereignis, das ein Payment Handler verwenden könnte, um den Autorisierungsstatus zurückzugeben.

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

Dieser Payment Handler müsste in einem Service Worker unter dem `https://example.com/preauth`-Bereich leben.

> [!NOTE]
> Sehen Sie sich unsere [Vorautorisierung von Transaktionen-Demo](https://mdn.github.io/dom-examples/payment-request/pre-authorize-transaction.html) für den vollständigen Code an.

## Siehe auch

- [Google PaymentRequest-Beispiele](https://googlechrome.github.io/samples/paymentrequest/)
