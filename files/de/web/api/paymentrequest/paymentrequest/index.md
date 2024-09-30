---
title: "PaymentRequest: PaymentRequest() Konstruktor"
short-title: PaymentRequest()
slug: Web/API/PaymentRequest/PaymentRequest
l10n:
  sourceCommit: 32f666e453bdb8c93d305075453b6e304cae94de
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Der **`PaymentRequest()`** Konstruktor erstellt ein neues [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekt, das verwendet wird, um den Prozess zum Erstellen, Validieren und Absenden einer Zahlungsanforderung zu handhaben.

## Syntax

```js-nolint
new PaymentRequest(methodData, details)
new PaymentRequest(methodData, details, options)
```

### Parameter

- `methodData`

  - : Enthält ein Array von Bezeichnern für die Zahlungsmethoden, die die Händler-Website akzeptiert, sowie alle zugehörigen zahlungsmethodenspezifischen Daten. Jedes Element im Array enthält die folgenden Felder:

    - `supportedMethods`

      - : Ein String, der eine [Zahlungsmethoden-Bezeichner](/de/docs/Web/API/Payment_Request_API/Concepts#payment_method_identifiers) enthält. Dies ist entweder eine URL oder einer der [standardisierten Zahlungsmethoden-Bezeichner](/de/docs/Web/API/Payment_Request_API/Concepts#standardized_payment_method_identifiers). Der Wert und die Struktur des `data`-Feldes variieren je nach dem Wert im `supportedMethods`-Feld.

    - `data`
      - : Ein JSON-serialisierbares Objekt, das optionale Informationen bietet, die von den unterstützten Zahlungsmethoden benötigt werden könnten. Dies muss dem vom Zahlungshandler erwarteten Typ entsprechen, der durch `supportedMethods` angegeben wird. Entwickler müssen diejenigen konsultieren, die die Zahlungsmethoden kontrollieren, um die erwartete Struktur des Datenobjekts zu erfahren. Wenn `supportedMethods` `secure-payment-confirmation` ist, muss `data` dem [`SecurePaymentConfirmationRequest`](/de/docs/Web/API/SecurePaymentConfirmationRequest) Wörterbuch entsprechen.

- `details`

  - : Bietet Informationen über die angeforderte Transaktion. Dieser Parameter enthält die folgenden Felder:

    - `total`
      - : Der Gesamtbetrag der Zahlungsanforderung.
    - `id` {{optional_inline}}
      - : Ein frei gestaltbarer Bezeichner für diese Zahlungsanforderung. Wenn kein Wert angegeben wird, wird der Browser einen erstellen.
    - `displayItems`
      - : Ein Array von optionalen Positionen für die Zahlungsanforderung, die vom User-Agent angezeigt werden können, wie Produktdetails, Steuern und Versand.
    - `shippingOptions`
      - : Die Versandoptionen, die der Benutzer auswählen kann. Wenn diese Sequenz leer ist, zeigt dies an, dass der Händler nicht an die aktuelle Versandadresse liefern kann. Die Standardversandoption kann in dieser Sequenz angegeben werden.
    - `modifiers`

      - : Modifikatoren für spezifische Zahlungsmethoden; zum Beispiel, um den Gesamtbetrag basierend auf der Zahlungsmethode anzupassen. Dieser Parameter enthält die folgenden Felder:

        - `additionalDisplayItems`
          - : Ein Array von Elementen, die an die Eigenschaft `details.displayItems` angehängt werden sollen. Diese Eigenschaft wird häufig verwendet, um eine Rabatt- oder Zuschlagposition hinzuzufügen, die den unterschiedlichen Betrag in `details.modifiers.total` anzeigt.
        - `data`
          - : Ein JSON-serialisierbares Objekt, das optionale Informationen bietet, die für die unterstützten Zahlungsmethoden benötigt werden könnten.
        - `total`
          - : Ein Gesamtbetrag für die Zahlungsanforderung, der den Wert in `details.total` überschreibt. Dies wird typischerweise verwendet, wenn `details.modifiers.additionalItems` einen Rabatt oder einen Kauf zur Anforderung hinzufügt.

- `options` {{optional_inline}}

  - : Ermöglicht es Ihnen, Optionen einzustellen, die das Verhalten des User-Agent steuern. Dieser Parameter enthält die folgenden Felder:

    - `requestPayerName`
      - : Ein Boolean, der angibt, ob der User-Agent den Namen des Zahlers sammeln und mit der Zahlungsanforderung einreichen soll. Der Standardwert ist `false`.
    - `requestPayerEmail`
      - : Ein Boolean, der angibt, ob der User-Agent die E-Mail-Adresse des Zahlers sammeln und mit der Zahlungsanforderung einreichen soll. Der Standardwert ist `false`.
    - `requestPayerPhone`
      - : Ein Boolean, der angibt, ob der User-Agent die Telefonnummer des Zahlers sammeln und mit der Zahlungsanforderung einreichen soll. Der Standardwert ist `false`.
    - `requestShipping`
      - : Ein Boolean, der angibt, ob der User-Agent die Versandadresse des Zahlers sammeln und mit der Zahlungsanforderung einreichen soll. Wenn Sie diesen Wert auf `true` setzen, sollten Sie einen geeigneten `shippingType` auswählen. Der Standardwert ist `false`.
    - `shippingType`
      - : Ermöglicht es Ihnen, zu spezifizieren, wie die Benutzeroberfläche auf den Versand Bezug nimmt, wenn das Wort 'Versand' nicht für Ihren Anwendungsfall geeignet ist. Zum Beispiel würde man in englischsprachigen Ländern "pizza delivery" und nicht "pizza shipping" sagen. Gültige Werte sind `"shipping"`, `"delivery"` und `"pickup"`. Anführungszeichen müssen eingeschlossen werden. Der Standardwert ist `"shipping"`.

### Rückgabewert

Ein neues [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekt, das basierend auf den Eingabeparametern konfiguriert ist.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieses Features wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Beispiele

Das folgende Beispiel zeigt die minimale Funktionalität und konzentriert sich stattdessen darauf, den vollständigen Kontext der Instanziierung eines `PaymentRequest` Objekts zu zeigen.

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
