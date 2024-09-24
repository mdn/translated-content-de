---
title: "PaymentRequest: PaymentRequest() Konstruktor"
short-title: PaymentRequest()
slug: Web/API/PaymentRequest/PaymentRequest
l10n:
  sourceCommit: 32f666e453bdb8c93d305075453b6e304cae94de
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Der **`PaymentRequest()`**-Konstruktor erstellt ein neues {{domxref("PaymentRequest")}}-Objekt, das verwendet wird, um den Prozess der Erstellung, Validierung und Übermittlung einer Zahlungsanfrage zu handhaben.

## Syntax

```js-nolint
new PaymentRequest(methodData, details)
new PaymentRequest(methodData, details, options)
```

### Parameter

- `methodData`

  - : Enthält ein Array von Bezeichnern für die Zahlungsmethoden, die die Händler-Website akzeptiert, sowie alle zugehörigen zahlungsmethoden-spezifischen Daten. Jedes Element im Array enthält die folgenden Felder:

    - `supportedMethods`

      - : Ein String, der einen [Zahlungsmethoden-Bezeichner](/de/docs/Web/API/Payment_Request_API/Concepts#payment_method_identifiers) enthält. Dies ist entweder eine URL oder einer der [standardisierten Zahlungsmethoden-Bezeichner](/de/docs/Web/API/Payment_Request_API/Concepts#standardized_payment_method_identifiers). Der Wert und die Struktur des `data`-Felds variieren je nach Wert des `supportedMethods`-Feldes.

    - `data`
      - : Ein JSON-serialisierbares Objekt, das optionale Informationen bereitstellt, die möglicherweise von den unterstützten Zahlungsmethoden benötigt werden. Dies muss dem erwarteten Typ des durch `supportedMethods` angegebenen Zahlungsabwicklers entsprechen. Entwickler müssen sich an den Verantwortlichen für die Zahlungsmethoden wenden, um die erwartete Struktur des Datenobjekts zu erfahren. Wenn `supportedMethods` auf `secure-payment-confirmation` steht, muss `data` dem {{domxref("SecurePaymentConfirmationRequest")}}-Wörterbuch entsprechen.

- `details`

  - : Bietet Informationen zur angeforderten Transaktion. Dieser Parameter enthält die folgenden Felder:

    - `total`
      - : Der Gesamtbetrag der Zahlungsanfrage.
    - `id` {{optional_inline}}
      - : Ein frei wählbarer Bezeichner für diese Zahlungsanfrage. Wenn kein Wert angegeben wird, erstellt der Browser einen.
    - `displayItems`
      - : Ein Array optionaler Einzelposten für die Zahlungsanfrage, die der Benutzeragent anzeigen kann, wie z.B. Produktdetails, Steuern und Versand.
    - `shippingOptions`
      - : Die Versandoptionen, die der Benutzer wählen kann. Wenn diese Sequenz leer ist, zeigt dies an, dass der Händler nicht an die aktuelle Versandadresse liefern kann. Die Standardversandoption kann in dieser Sequenz angegeben werden.
    - `modifiers`

      - : Modifikatoren für spezielle Zahlungsmethoden, z.B. um den Gesamtbetrag basierend auf der Zahlungsmethode anzupassen. Dieser Parameter enthält die folgenden Felder:

        - `additionalDisplayItems`
          - : Ein Array von Elementen, die an die Eigenschaft `details.displayItems` angehängt werden sollen. Diese Eigenschaft wird häufig verwendet, um eine Rabatt- oder Zuschlagsposition hinzuzufügen, die den unterschiedlichen Betrag in `details.modifiers.total` anzeigt.
        - `data`
          - : Ein JSON-serialisierbares Objekt, das optionale Informationen bereitstellt, die möglicherweise von den unterstützten Zahlungsmethoden benötigt werden.
        - `total`
          - : Ein Gesamtbetrag für die Zahlungsanfrage, der den Wert in details.total überschreibt. Dies wird typischerweise verwendet, wenn `details.modifiers.additionalItems` einen Rabatt oder Kauf zu der Anfrage hinzufügt.

- `options` {{optional_inline}}

  - : Ermöglicht es Ihnen, Optionen einzustellen, die das Verhalten des Benutzeragents steuern. Dieser Parameter enthält die folgenden Felder:

    - `requestPayerName`
      - : Ein Boolean, der angibt, ob der Benutzeragent den Namen des Zahlers erfassen und mit der Zahlungsanfrage übermitteln soll. Der Standardwert ist `false`.
    - `requestPayerEmail`
      - : Ein Boolean, der angibt, ob der Benutzeragent die E-Mail-Adresse des Zahlers erfassen und mit der Zahlungsanfrage übermitteln soll. Der Standardwert ist `false`.
    - `requestPayerPhone`
      - : Ein Boolean, der angibt, ob der Benutzeragent die Telefonnummer des Zahlers erfassen und mit der Zahlungsanfrage übermitteln soll. Der Standardwert ist `false`.
    - `requestShipping`
      - : Ein Boolean, der angibt, ob der Benutzeragent die Versandadresse des Zahlers erfassen und mit der Zahlungsanfrage übermitteln soll. Wenn dieser Typ auf true gesetzt ist, sollten Sie einen passenden `shippingType` auswählen. Der Standardwert ist `false`.
    - `shippingType`
      - : Ermöglicht es Ihnen zu spezifizieren, wie die Benutzeroberfläche den Versand bezeichnet, wenn das Wort 'Versand' für Ihren Anwendungsfall nicht angemessen ist. Zum Beispiel würde man in englischsprachigen Ländern "Pizza-Lieferung" und nicht "Pizza-Versand" sagen. Gültige Werte sind `"shipping"`, `"delivery"` und `"pickup"`. Anführungszeichen müssen enthalten sein. Der Standardwert ist `"shipping"`.

### Rückgabewert

Ein neues {{domxref("PaymentRequest")}}-Objekt, das gemäß den Eingabeparametern konfiguriert ist.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Die Nutzung dieses Merkmals wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Beispiele

Das folgende Beispiel zeigt minimale Funktionalität und konzentriert sich stattdessen darauf, den vollständigen Kontext der Instanziierung eines `PaymentRequest`-Objekts zu zeigen.

```js
const supportedInstruments = [
  {
    supportedMethods: "https://example.com/pay",
  },
];

const details = {
  total: { label: "Donation", amount: { currency: "USD", value: "65.00" } },
  displayItems: [
    {
      label: "Original donation amount",
      amount: { currency: "USD", value: "65.00" },
    },
  ],
  shippingOptions: [
    {
      id: "standard",
      label: "Standard shipping",
      amount: { currency: "USD", value: "0.00" },
      selected: true,
    },
  ],
};

const options = { requestShipping: true };

try {
  const request = new PaymentRequest(supportedInstruments, details, options);
  // Fügen Sie hier Event-Listener hinzu.
  // Rufen Sie show() auf, um den Zahlungsablauf des Browsers auszulösen.
  request
    .show()
    .then((instrumentResponse) => {
      // Machen Sie etwas mit der Antwort aus der Benutzeroberfläche.
    })
    .catch((err) => {
      // Machen Sie etwas mit dem Fehler aus request.show().
    });
} catch (e) {
  // Fangen Sie alle anderen Fehler ab.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
