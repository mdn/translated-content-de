---
title: Verwenden der Payment Request API
slug: Web/API/Payment_Request_API/Using_the_Payment_Request_API
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet eine browserbasierte Methode, um Benutzer und deren bevorzugte Zahlungssysteme und -plattformen mit Händlern zu verbinden, bei denen sie Waren und Dienstleistungen bezahlen möchten. Dieser Artikel ist ein Leitfaden zur Nutzung der [Payment Request API](/de/docs/Web/API/Payment_Request_API) mit Beispielen und empfohlenen Best Practices.

## Grundlagen zur Durchführung einer Zahlung

Dieser Abschnitt beschreibt die Grundlagen der Nutzung der Payment Request API zur Durchführung einer Zahlung.

> [!NOTE]
> Die Codebeispiele in diesem Abschnitt stammen aus unserem [Feature-Detection-Support-Demo](https://github.com/mdn/dom-examples/blob/main/payment-request/feature-detect-support.html).

### Erstellen eines neuen Payment Request Objekts

Eine Zahlungsanforderung beginnt immer mit der Erstellung eines neuen {{domxref("PaymentRequest")}} Objekts - unter Verwendung des {{domxref("PaymentRequest.PaymentRequest", "PaymentRequest()")}} Konstruktors. Dieser nimmt zwei obligatorische Parameter und einen optionalen Parameter:

- `methodData` — ein Objekt, das Informationen zum Zahlungsanbieter enthält, wie z.B. welche Zahlungsmethoden unterstützt werden usw.
- `details` — ein Objekt, das Informationen zur spezifischen Zahlung enthält, wie z.B. den Gesamtzahlungsbetrag, Steuern, Versandkosten usw.
- `options` (optional) — ein Objekt, das zusätzliche Optionen im Zusammenhang mit der Zahlung enthält.

Zum Beispiel, Sie könnten eine neue `PaymentRequest` Instanz wie folgt erstellen:

```js
const request = new PaymentRequest(
  buildSupportedPaymentMethodData(),
  buildShoppingCartDetails(),
);
```

Die im Konstruktor aufgerufenen Funktionen liefern die erforderlichen Objektparameter:

```js
function buildSupportedPaymentMethodData() {
  // Beispiel unterstützter Zahlungsmethoden:
  return [{ supportedMethods: "https://example.com/pay" }];
}

function buildShoppingCartDetails() {
  // Für Demo-Zwecke fest codiert:
  return {
    id: "order-123",
    displayItems: [
      {
        label: "Beispielprodukt",
        amount: { currency: "USD", value: "1.00" },
      },
    ],
    total: {
      label: "Gesamt",
      amount: { currency: "USD", value: "1.00" },
    },
  };
}
```

### Starten des Zahlungsvorgangs

Sobald das `PaymentRequest` Objekt erstellt wurde, rufen Sie die {{domxref("PaymentRequest.show()")}} Methode auf, um die Zahlungsanforderung zu initiieren. Dies gibt ein Versprechen zurück, das mit einem {{domxref("PaymentResponse")}} Objekt erfüllt wird, wenn die Zahlung erfolgreich ist:

```js
request.show().then((paymentResponse) => {
  // Hier würden wir die Zahlung verarbeiten. Für dieses Demo simulieren wir einen sofortigen Erfolg:
  paymentResponse.complete("success").then(() => {
    // Für Demo-Zwecke:
    introPanel.style.display = "none";
    successPanel.style.display = "block";
  });
});
```

Dieses Objekt bietet dem Entwickler Zugriff auf Details, die sie verwenden können, um die logischen Schritte abzuschließen, die nach Abschluss der Zahlung erforderlich sind, wie z.B. eine E-Mail-Adresse, um den Kunden zu kontaktieren, oder eine Lieferadresse, um Waren an ihn zu versenden. Im obigen Code sehen Sie, dass wir die {{domxref("PaymentResponse.complete()")}} Methode aufgerufen haben, um anzuzeigen, dass die Interaktion beendet ist - Sie würden dies verwenden, um abschließende Schritte auszuführen, wie z.B. die Benutzeroberfläche zu aktualisieren, um dem Benutzer mitzuteilen, dass die Transaktion abgeschlossen ist, usw.

### Andere nützliche Methoden der Zahlungsanforderung

Es gibt einige andere nützliche Methoden der Zahlungsanforderung, die es wert sind, bekannt zu sein.

{{domxref("PaymentRequest.canMakePayment()")}} kann verwendet werden, um zu überprüfen, ob das `PaymentRequest` Objekt in der Lage ist, eine Zahlung zu tätigen, bevor Sie den Zahlungsvorgang starten. Es gibt ein Versprechen zurück, das mit einem Booleschen Wert erfüllt wird, der angibt, ob es in der Lage ist oder nicht, zum Beispiel:

```js
// Dummy-Zahlungsanforderung, um zu überprüfen, ob die Zahlung durchgeführt werden kann
new PaymentRequest(buildSupportedPaymentMethodData(), {
  total: { label: "Stub", amount: { currency: "USD", value: "0.01" } },
})
  .canMakePayment()
  .then((result) => {
    if (result) {
      // Echte Zahlungsanforderung
      const request = new PaymentRequest(
        buildSupportedPaymentMethodData(),
        checkoutObject,
      );
      request.show().then((paymentResponse) => {
        // Hier würden wir die Zahlung verarbeiten.
        paymentResponse.complete("success").then(() => {
          // Zahlungshandhabung abschließen
        });
      });
    }
  });
```

{{domxref("PaymentRequest.abort()")}} kann verwendet werden, um die Zahlungsanforderung bei Bedarf abzubrechen.

## Erkennen der Verfügbarkeit der Payment Request API

Sie können die Unterstützung der Payment Request API effektiv erkennen, indem Sie prüfen, ob der Browser des Benutzers {{domxref("PaymentRequest")}} unterstützt, d.h. `if (window.PaymentRequest)`.

Im folgenden Beispiel führt eine Händlerseite diese Überprüfung durch und aktualisiert, wenn sie `true` zurückgibt, die Checkout-Schaltfläche, um `PaymentRequest` anstelle von Legacy-Webformularen zu verwenden.

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
        // Erfolgreiche Zahlung behandeln
      })
      .catch((error) => {
        // Abgebrochene oder fehlgeschlagene Zahlung behandeln. Zum Beispiel Umleitung
        // zum Legacy-Webformular-Checkout:
        window.location.href = "/legacy-web-form-checkout";
      });

    // Jeder Klick auf die Checkout-Schaltfläche sollte eine neue Instanz des
    // PaymentRequest Objekts verwenden, da PaymentRequest.show()
    // pro Instanz nur einmal aufgerufen werden kann.
    request = new PaymentRequest(
      buildSupportedPaymentMethodNames(),
      buildShoppingCartDetails(),
    );
  });
}
```

> [!NOTE]
> Siehe unser [Feature-Detection-Support-Demo](https://mdn.github.io/dom-examples/payment-request/feature-detect-support.html) für den vollständigen Code.

## Überprüfen, ob Benutzer Zahlungen leisten können

Es ist immer nützlich zu überprüfen, ob Benutzer Zahlungen leisten können. Hier sind ein paar verwandte Techniken.

### Anpassen der Zahlungsschaltfläche

Eine nützliche Technik ist das Anpassen der Zahlungsanforderungsschaltfläche abhängig davon, ob Benutzer Zahlungen vornehmen können.

Im folgenden Beispiel tun wir genau das — abhängig davon, ob der Benutzer eine schnelle Zahlung vornehmen kann oder zunächst Zahlungskredentiale hinzufügen muss, ändert sich der Titel der Checkout-Schaltfläche zwischen "Schneller Checkout mit W3C" und "W3C-Checkout einrichten". In beiden Fällen ruft die Checkout-Schaltfläche {{domxref("PaymentRequest.show()")}} auf.

```js
const checkoutButton = document.getElementById("checkout-button");
checkoutButton.innerText = "Laden…";
if (window.PaymentRequest) {
  const request = new PaymentRequest(
    buildSupportedPaymentMethodNames(),
    buildShoppingCartDetails(),
  );
  request
    .canMakePayment()
    .then((canMakeAFastPayment) => {
      checkoutButton.textContent = canMakeAFastPayment
        ? "Schneller Checkout mit W3C"
        : "W3C-Checkout einrichten";
    })
    .catch((error) => {
      // Der Benutzer hat möglicherweise die Abfragefunktion in seinen
      // Datenschutzeinstellungen deaktiviert. Die Website weiß nicht, ob er eine
      // schnelle Zahlung leisten kann, wählen Sie daher einen generischen Titel.
      checkoutButton.textContent = "Checkout mit W3C";
    });
}
```

> [!NOTE]
> Siehe unser [Customize the payment button demo](https://mdn.github.io/dom-examples/payment-request/customize-button-can-make-payment.html) für den vollständigen Code.

### Überprüfung bevor alle Preise bekannt sind

Wenn der Checkout-Prozess wissen muss, ob {{domxref("PaymentRequest.canMakePayment()")}} `true` zurückgeben wird, noch bevor alle Positionen und deren Preise bekannt sind, können Sie `PaymentRequest` mit Dummy-Daten instanziieren und `.canMakePayment()` vorab abfragen. Wenn Sie `.canMakePayment()` mehrmals aufrufen, beachten Sie, dass der erste Parameter des `PaymentRequest` Konstruktors die gleichen Methodenbezeichnungen und Daten enthalten sollte.

```js
// Die Seite ist geladen. Sollte die Seite PaymentRequest verwenden?
// Wenn PaymentRequest fehlschlägt, sollte die Seite auf manuellen
// Webform-Checkout zurückfallen?
const supportedPaymentMethods = [
  /* unterstützte Methoden */
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

    // Der Benutzer hat möglicherweise die Abfragefähigkeit in seinen Datenschutzeinstellungen deaktiviert.
    // Lassen Sie uns PaymentRequest standardmäßig verwenden und auf Legacy-Webform-basiertes
    // Checkout zurückfallen.
    shouldCallPaymentRequest = true;
    fallbackToLegacyOnPaymentRequestFailure = true;
  });

// Der Benutzer hat auf die Checkout-Schaltfläche geklickt. Wir wissen
// was sich im Warenkorb befindet, aber wir haben kein `Checkout` Objekt.
function onCheckoutButtonClicked(lineItems) {
  callServerToRetrieveCheckoutDetails(lineItems);
}

// Der Server hat das `Checkout` Objekt erstellt. Jetzt wissen wir
// alle Preise und Versandoptionen.
function onServerCheckoutDetailsRetrieved(checkoutObject) {
  if (shouldCallPaymentRequest) {
    const request = new PaymentRequest(supportedPaymentMethods, checkoutObject);
    request
      .show()
      .then((paymentResponse) => {
        // Ergebnisse an den Server senden und `paymeResponse.complete()` aufrufen.
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
> Siehe unser [Prüfen ob der Benutzer Zahlungen leisten kann bevor Preise bekannt sind Demo](https://mdn.github.io/dom-examples/payment-request/check-user-can-make-payment.html) für den vollständigen Code.

## Empfehlen einer Zahlungs-App, wenn der Benutzer keine hat

Wenn Sie sich entscheiden, mit dem BobPay-Demozahlungsanbieter auf dieser Händlerseite zu bezahlen, versucht er, `PaymentRequest.show()` aufzurufen, während er den `NotSupportedError` {{domxref("DOMException")}} abfängt. Wenn diese Zahlungsmethode nicht unterstützt wird, wird zur Registrierungsseite von BobPay weitergeleitet.

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
      // Hier würden wir die Zahlung verarbeiten. Für dieses Demo simulieren wir einen sofortigen Erfolg:
      paymentResponse.complete("success").then(() => {
        // Für Demo-Zwecke:
        introPanel.style.display = "none";
        successPanel.style.display = "block";
      });
    })
    .catch((error) => {
      if (error.name === "NotSupportedError") {
        window.location.href = "https://bobpay.xyz/#download";
      } else {
        // Andere Arten von Fehlern; abgebrochene oder fehlgeschlagene Zahlung. Für Demo-Zwecke:
        introPanel.style.display = "none";
        legacyPanel.style.display = "block";
      }
    });
});
```

> [!NOTE]
> Siehe unser [Recommendation einer Zahlungs-App wenn der Benutzer keine hat Demo](https://mdn.github.io/dom-examples/payment-request/recommend-payment-app.html) für den vollständigen Code.

## Anzeigen zusätzlicher Benutzeroberfläche nach erfolgreichen Zahlungen

Wenn der Händler zusätzliche Informationen sammeln möchte, die nicht Teil der API sind (z.B. zusätzliche Lieferanweisungen), kann der Händler eine Seite mit weiteren `<input type="text">` Feldern nach dem Checkout anzeigen.

```js
request
  .show()
  .then((paymentResponse) => {
    // Zahlung hier verarbeiten.
    // Die Benutzeroberfläche schließen:
    paymentResponse.complete('success').then(() => {
      // Zusätzliche Lieferadressdetails anfordern.
      const additionalDetailsContainer = document.getElementById('additional-details-container');
      additionalDetailsContainer.style.display = 'block';
      window.scrollTo(additionalDetailsContainer.getBoundingClientRect().x, 0);
  })
  .catch((error) => {
    // Fehler behandeln.
  });
```

> [!NOTE]
> Siehe unser [Anzeigen zusätzlicher Benutzeroberfläche nach erfolgreicher Zahlung Demo](https://mdn.github.io/dom-examples/payment-request/show-additional-ui-after-payment.html) für den vollständigen Code.

## Vorautorisierung von Transaktionen

Einige Anwendungsfälle (z.B. das Bezahlen von Kraftstoff an einer Tankstelle) umfassen die Vorautorisierung von Zahlungen. Eine Möglichkeit, dies zu tun, ist über einen Payment Handler (siehe die {{domxref("Payment Handler API", "", "", "nocode")}}). Zum Zeitpunkt des Verfassens dieses Dokuments enthält diese Spezifikation ein `canmakepayment` Ereignis, das ein Payment Handler verwenden könnte, um den Autorisierungsstatus zurückzugeben.

Der Code des Händlers würde so aussehen:

```js
const paymentRequest = new PaymentRequest(
  [{ supportedMethods: "https://example.com/preauth" }],
  details,
);

// `CanMakePayment` Ereignis an den Payment Handler senden.
paymentRequest
  .canMakePayment()
  .then((res) => {
    if (res) {
      // Der Payment Handler hat eine Transaktion
      // mit einem festen Betrag vorab genehmigt, z.B. USD $1.00.
    } else {
      // Vorautorisierung fehlgeschlagen oder Payment Handler nicht installiert.
    }
  })
  .catch((err) => {
    // Unerwarteter Fehler aufgetreten.
  });
```

Der Payment Handler würde den folgenden Code enthalten:

```js
self.addEventListener("canmakepayment", (evt) => {
  // Hier vorautorisieren.
  const preAuthSuccess = true;
  evt.respondWith(preAuthSuccess);
});
```

Dieser Payment Handler müsste in einem Service Worker im Bereich von `https://example.com/preauth` leben.

> [!NOTE]
> Siehe unser [Vorautorisierung von Transaktionen Demo](https://mdn.github.io/dom-examples/payment-request/pre-authorize-transaction.html) für den vollständigen Code.

## Siehe auch

- [Google PaymentRequest Muster](https://googlechrome.github.io/samples/paymentrequest/)
