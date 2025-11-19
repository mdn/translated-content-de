---
title: Verwendung der Payment Request API
slug: Web/API/Payment_Request_API/Using_the_Payment_Request_API
l10n:
  sourceCommit: 1de07134cf92ea71ea7bc1d3967665cfdcde409c
---

{{DefaultAPISidebar("Payment Request API")}}

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet eine browserbasierte Methode, um Benutzer und ihre bevorzugten Zahlungssysteme und -plattformen mit Händlern zu verbinden, bei denen sie Waren und Dienstleistungen bezahlen möchten. Dieser Artikel ist ein Leitfaden zur Nutzung der [Payment Request API](/de/docs/Web/API/Payment_Request_API) mit Beispielen und empfohlenen bewährten Verfahren.

## Die Grundlagen der Zahlungsabwicklung

Dieser Abschnitt beschreibt die Grundlagen der Verwendung der Payment Request API, um eine Zahlung zu tätigen.

> [!NOTE]
> Die Codeausschnitte in diesem Abschnitt stammen aus unserem [Feature-Erkennungssupport-Demo](https://github.com/mdn/dom-examples/blob/main/payment-request/feature-detect-support.html).

### Erstellen eines neuen Zahlungsanfrageobjekts

Eine Zahlungsanfrage beginnt immer mit der Erstellung eines neuen [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekts — mit dem [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktor. Dieser benötigt zwei obligatorische Parameter und einen optionalen Parameter:

- `methodData` — ein Objekt, das Informationen über den Zahlungsanbieter enthält, wie z. B. welche Zahlungsmethoden unterstützt werden usw.
- `details` — ein Objekt, das Informationen zur spezifischen Zahlung enthält, wie z. B. den Gesamtzahlungsbetrag, Steuern, Versandkosten usw.
- `options` (optional) — ein Objekt mit zusätzlichen Optionen im Zusammenhang mit der Zahlung.

Zum Beispiel könnten Sie eine neue Instanz von `PaymentRequest` folgendermaßen erstellen:

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

Nachdem das `PaymentRequest`-Objekt erstellt wurde, rufen Sie die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) auf, um die Zahlungsanfrage zu initiieren. Diese gibt ein Versprechen zurück, das mit einem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt erfüllt wird, wenn die Zahlung erfolgreich ist:

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

Dieses Objekt gibt dem Entwickler Zugriff auf Details, die er verwenden kann, um die logischen Schritte abzuschließen, die nach der Zahlung erforderlich sind, wie z. B. eine E-Mail-Adresse, um den Kunden zu kontaktieren, eine Versandadresse für den Versand von Waren usw. In dem obigen Code sehen Sie, dass wir die Methode [`PaymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete) aufgerufen haben, um anzuzeigen, dass die Interaktion abgeschlossen ist — Sie würden dies verwenden, um abschließende Schritte durchzuführen, wie z. B. das Benutzerinterface zu aktualisieren, um dem Benutzer mitzuteilen, dass die Transaktion abgeschlossen ist usw.

### Andere nützliche Methoden für Zahlungsanfragen

Es gibt einige andere nützliche Methoden für Zahlungsanfragen, die es wert sind, bekannt zu sein.

[`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) kann verwendet werden, um zu prüfen, ob das `PaymentRequest`-Objekt in der Lage ist, eine Zahlung durchzuführen, bevor Sie den Zahlungsvorgang starten. Es gibt ein Versprechen zurück, das mit einem boolean erfüllt wird, der angibt, ob es möglich ist oder nicht, zum Beispiel:

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

## Erkennung der Verfügbarkeit der Payment Request API

Sie können den Support für die Payment Request API effektiv erkennen, indem Sie prüfen, ob der Browser des Benutzers [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) unterstützt, d.h. `if (window.PaymentRequest)`.

Im folgenden Ausschnitt überprüft eine Händlerseite diese Unterstützung, und wenn sie `true` zurückgibt, wird der Checkout-Button aktualisiert, um `PaymentRequest` anstelle von veralteten Webformularen zu verwenden.

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
> Sehen Sie unser [Feature-Erkennungssupport-Demo](https://mdn.github.io/dom-examples/payment-request/feature-detect-support.html) für den vollständigen Code.

## Überprüfung, ob Benutzer Zahlungen tätigen können

Die Überprüfung, ob Benutzer Zahlungen tätigen können, ist immer nützlich. Hier sind ein paar verwandte Techniken.

### Anpassen des Zahlungsbuttons

Eine nützliche Technik ist das Anpassen des Zahlungsanfrage-Buttons, abhängig davon, ob Benutzer Zahlungen tätigen können.

Im folgenden Ausschnitt tun wir genau das — je nachdem, ob der Benutzer eine schnelle Zahlung vornehmen kann oder zuerst Zahlungsanmeldedaten hinzufügen muss, ändert sich der Titel des Checkout-Buttons zwischen "Schneller Checkout mit W3C" und "W3C Checkout einrichten". In beiden Fällen ruft der Checkout-Button [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) auf.

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
> Sehen Sie unser [Demo zur Anpassung des Zahlungsbuttons](https://mdn.github.io/dom-examples/payment-request/customize-button-can-make-payment.html) für den vollständigen Code.

### Überprüfen, bevor alle Preise bekannt sind

Wenn der Checkout-Ablauf wissen muss, ob [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) `true` zurückgibt, auch bevor alle Einzelposten und deren Preise bekannt sind, können Sie `PaymentRequest` mit Dummy-Daten instanziieren und `.canMakePayment()` vorab abfragen. Wenn Sie `.canMakePayment()` mehrmals aufrufen, beachten Sie, dass der erste Parameter des `PaymentRequest`-Konstruktors die gleichen Methodennamen und Daten enthalten sollte.

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
> Sehen Sie unser [Demo, ob Benutzer Zahlungen vor dem Bekanntwerden der Preise tätigen können](https://mdn.github.io/dom-examples/payment-request/check-user-can-make-payment.html) für den vollständigen Code.

## Empfehlen einer Zahlungs-App, wenn der Benutzer keine Apps hat

Wenn Sie auf dieser Händlerseite die Zahlung mit dem BobBucks-Demo-Zahlungsanbieter auswählen, versucht sie, `PaymentRequest.show()` aufzurufen, während sie den `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) abfängt. Wenn diese Zahlungsmethode nicht unterstützt wird, leitet sie zur Anmeldeseite für BobBucks weiter.

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
        // Other kinds of errors; cancelled or failed payment. For demo purposes:
        introPanel.style.display = "none";
        legacyPanel.style.display = "block";
      }
    });
});
```

> [!NOTE]
> Sehen Sie unser [Demo zur Empfehlung einer Zahlungs-App, wenn der Benutzer keine Apps hat](https://mdn.github.io/dom-examples/payment-request/recommend-payment-app.html) für den vollständigen Code.

## Zusätzliches Benutzerinterface nach erfolgreichen Zahlungen anzeigen

Wenn der Händler zusätzliche Informationen sammeln möchte, die nicht Teil der API sind (z. B. zusätzliche Lieferanweisungen), kann der Händler eine Seite mit zusätzlichen `<input type="text">`-Feldern nach dem Checkout anzeigen.

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
> Sehen Sie unser [Demo zur Anzeige eines zusätzlichen Benutzerinterface nach erfolgreicher Zahlung](https://mdn.github.io/dom-examples/payment-request/show-additional-ui-after-payment.html) für den vollständigen Code.

## Vorabautorisierung von Transaktionen

Einige Anwendungsfälle (z. B. das Bezahlen von Kraftstoff an einer Tankstelle) beinhalten die Vorabautorisierung einer Zahlung. Eine Möglichkeit, dies zu tun, besteht darin, einen Payment Handler zu verwenden (siehe die [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)). Zum Zeitpunkt des Schreibens umfasst diese Spezifikation ein `canmakepayment`-Ereignis, das ein Payment Handler nutzen könnte, um den Autorisierungsstatus zurückzugeben.

Der Code des Händlers würde folgendermaßen aussehen:

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

Dieser Zahlungshandler müsste sich in einem Service Worker unter dem `https://example.com/preauth`-Scope befinden.

> [!NOTE]
> Sehen Sie unser [Demo zur Vorabautorisierung von Transaktionen](https://mdn.github.io/dom-examples/payment-request/pre-authorize-transaction.html) für den vollständigen Code.

## Siehe auch

- [Google PaymentRequest Samples](https://googlechrome.github.io/samples/paymentrequest/)
