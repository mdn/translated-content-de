---
title: "PaymentRequest: PaymentRequest() Konstruktor"
short-title: PaymentRequest()
slug: Web/API/PaymentRequest/PaymentRequest
l10n:
  sourceCommit: 32f666e453bdb8c93d305075453b6e304cae94de
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Der **`PaymentRequest()`** Konstruktor
erstellt ein neues [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekt, das verwendet wird, um den
Prozess der Generierung, Validierung und Einreichung einer Zahlungsanfrage zu steuern.

## Syntax

```js-nolint
new PaymentRequest(methodData, details)
new PaymentRequest(methodData, details, options)
```

### Parameter

- `methodData`

  - : Enthält ein Array von Identifikatoren für die Zahlungsmethoden, die die Händler-Website
    akzeptiert, und alle zugehörigen zahlungsmethodenspezifischen Daten. Jedes Element im Array
    enthält die folgenden Felder:

    - `supportedMethods`

      - : Ein String, der einen [Zahlungsmethoden-Identifikator](/de/docs/Web/API/Payment_Request_API/Concepts#payment_method_identifiers) enthält. Dies ist entweder eine URL oder einer der [standardisierten Zahlungsmethoden-Identifikatoren](/de/docs/Web/API/Payment_Request_API/Concepts#standardized_payment_method_identifiers). Der Wert und die Struktur des `data`-Feldes variieren je nach Wert des `supportedMethods`-Feldes.

    - `data`
      - : Ein JSON-serialisierbares Objekt, das optionale Informationen bereitstellt, die von den unterstützten Zahlungsmethoden benötigt werden könnten. Dieses muss dem vom Zahlungshändler erwarteten Typ entsprechen, der durch `supportedMethods` angegeben ist. Entwickler müssen sich mit den Verantwortlichen für die Zahlungsmethoden in Verbindung setzen, um die erwartete Struktur des Datenobjekts zu erfahren. Wenn `supportedMethods` `secure-payment-confirmation` ist, muss `data` dem [`SecurePaymentConfirmationRequest`](/de/docs/Web/API/SecurePaymentConfirmationRequest) Wörterbuch entsprechen.

- `details`

  - : Bietet Informationen über die angeforderte Transaktion. Dieser Parameter enthält die
    folgenden Felder:

    - `total`
      - : Der Gesamtbetrag der Zahlungsanforderung.
    - `id` {{optional_inline}}
      - : Ein freiformatierter Identifikator für diese Zahlungsanforderung. Wird kein Wert angegeben, konstruiert der Browser einen.
    - `displayItems`
      - : Ein Array von optionalen Posten für die Zahlungsanforderung, die der Benutzeragent anzeigen kann, wie z. B. Produktdetails, Steuern und Versand.
    - `shippingOptions`
      - : Die Versandoptionen, die der Nutzer auswählen kann. Ist diese Sequenz leer, zeigt dies an, dass der Händler nicht an die aktuelle Versandadresse liefern kann. Die Standardversandoption kann in dieser Sequenz angegeben werden.
    - `modifiers`

      - : Modifikatoren für spezifische Zahlungsmethoden; z. B. Anpassung des Gesamtbetrags basierend auf der Zahlungsmethode. Dieser Parameter enthält die folgenden Felder:

        - `additionalDisplayItems`
          - : Ein Array von Posten, das an die `details.displayItems`
            Eigenschaft angehängt wird. Diese Eigenschaft wird häufig verwendet, um eine Rabatt- oder Zuschlagszeile zu einer Zahlungsanforderung hinzuzufügen, die den unterschiedlichen Betrag in `details.modifiers.total` anzeigt.
        - `data`
          - : Ein JSON-serialisierbares Objekt, das optionale Informationen bereitstellt, die von den unterstützten Zahlungsmethoden benötigt werden könnten.
        - `total`
          - : Ein Gesamtbetrag für die Zahlungsanforderung, der den Wert in
            details.total überschreibt. Dies wird typischerweise verwendet, wenn
            `details.modifiers.additionalItems` einen Rabatt oder einen Kauf
            zur Anforderung hinzufügt.

- `options` {{optional_inline}}

  - : Ermöglicht Ihnen, Optionen einzustellen, die das Verhalten des Benutzeragents steuern. Dieser Parameter enthält die folgenden Felder:

    - `requestPayerName`
      - : Ein Boolean, der angibt, ob der Benutzeragent den Namen des Zahlers erfassen und mit der Zahlungsanforderung übermitteln soll. Der Standardwert ist `false`.
    - `requestPayerEmail`
      - : Ein Boolean, der angibt, ob der Benutzeragent die E-Mail-Adresse des Zahlers erfassen und mit der Zahlungsanforderung übermitteln soll. Der Standardwert ist `false`.
    - `requestPayerPhone`
      - : Ein Boolean, der angibt, ob der Benutzeragent die Telefonnummer des Zahlers erfassen und mit der Zahlungsanforderung übermitteln soll. Der Standardwert ist `false`.
    - `requestShipping`
      - : Ein Boolean, der angibt, ob der Benutzeragent die Versandadresse des Zahlers erfassen und mit der Zahlungsanforderung übermitteln soll. Wenn Sie diesen Typ auf wahr setzen, sollten Sie einen entsprechenden `shippingType` auswählen. Der Standardwert ist
        `false`.
    - `shippingType`
      - : Ermöglicht Ihnen zu spezifizieren, wie die Benutzeroberfläche auf den Versand verweist, wenn das Wort 'Versand' nicht für Ihren Anwendungsfall geeignet ist. Beispielsweise würde man in englischsprachigen Ländern "pizza delivery" statt "pizza shipping" sagen. Gültige Werte sind
        `"shipping"`, `"delivery"` und `"pickup"`.
        Anführungszeichen müssen eingeschlossen werden. Der Standardwert ist `"shipping"`.

### Rückgabewert

Ein neues [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekt, konfiguriert zur Verwendung, wie es durch die
Eingabeparameter spezifiziert ist.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Verwendung dieser Funktion wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Beispiele

Das folgende Beispiel zeigt eine minimale Funktionalität und konzentriert sich stattdessen darauf, den
kompletten Kontext der Instanziierung eines `PaymentRequest` Objekts zu zeigen.

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
  // Add event listeners here.
  // Call show() to trigger the browser's payment flow.
  request
    .show()
    .then((instrumentResponse) => {
      // Do something with the response from the UI.
    })
    .catch((err) => {
      // Do something with the error from request.show().
    });
} catch (e) {
  // Catch any other errors.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
