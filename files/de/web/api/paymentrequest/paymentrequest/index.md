---
title: "PaymentRequest: PaymentRequest() Konstruktor"
short-title: PaymentRequest()
slug: Web/API/PaymentRequest/PaymentRequest
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Der **`PaymentRequest()`** Konstruktor erstellt ein neues [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt, das verwendet wird, um den Prozess der Erstellung, Validierung und Einreichung einer Zahlungsanforderung zu verwalten.

## Syntax

```js-nolint
new PaymentRequest(methodData, details)
new PaymentRequest(methodData, details, options)
```

### Parameter

- `methodData`

  - : Enthält ein Array von Bezeichnern für die Zahlungsmethoden, die die Händlerwebsite akzeptiert, sowie alle zugehörigen, zahlungsmethodenspezifischen Daten. Jedes Element im Array enthält die folgenden Felder:

    - `supportedMethods`

      - : Ein String, der einen [Zahlungsmethoden-Bezeichner](/de/docs/Web/API/Payment_Request_API/Concepts#payment_method_identifiers) enthält. Dies ist entweder eine URL oder einer der [standardisierten Zahlungsmethoden-Bezeichner](/de/docs/Web/API/Payment_Request_API/Concepts#standardized_payment_method_identifiers). Der Wert und die Struktur des `data`-Feldes variieren je nach Wert des `supportedMethods`-Feldes.

    - `data`
      - : Ein JSON-serialisierbares Objekt, das optionale Informationen bereitstellt, die von den unterstützten Zahlungsmethoden benötigt werden könnten. Dieses muss dem vom Zahlungshandler, der durch `supportedMethods` angegeben wird, erwarteten Typ entsprechen. Entwickler müssen sich an die zuständige Stelle der Zahlungsmethoden wenden, um das erwartete Format des Datenobjekts zu erfahren. Wenn `supportedMethods` `secure-payment-confirmation` ist, muss `data` dem [`SecurePaymentConfirmationRequest`](/de/docs/Web/API/SecurePaymentConfirmationRequest)-Wörterbuch entsprechen.

- `details`

  - : Bietet Informationen über die angeforderte Transaktion. Dieser Parameter enthält die folgenden Felder:

    - `total`
      - : Der Gesamtbetrag der Zahlungsanforderung.
    - `id` {{optional_inline}}
      - : Ein frei formulierter Bezeichner für diese Zahlungsanforderung. Wenn kein Wert angegeben wird, erstellt der Browser einen.
    - `displayItems`
      - : Ein Array von optionalen Einzelposten für die Zahlungsanforderung, die der Benutzeragent anzeigen kann, wie z.B. Produktdetails, Steuern und Versand.
    - `shippingOptions`
      - : Die Versandoptionen, die der Benutzer auswählen kann. Wenn diese Sequenz leer ist, bedeutet dies, dass der Händler an die aktuelle Versandadresse nicht liefern kann. Die Standardversandoption kann in dieser Sequenz angegeben werden.
    - `modifiers`

      - : Modifikatoren für spezifische Zahlungsmethoden; zum Beispiel, um den Gesamtbetrag basierend auf der Zahlungsmethode anzupassen. Dieser Parameter enthält die folgenden Felder:

        - `additionalDisplayItems`
          - : Ein Array von Elementen, das an die `details.displayItems`-Eigenschaft angehängt werden soll. Diese Eigenschaft wird häufig verwendet, um einen Rabatt oder eine zusätzliche Kostenlinie hinzuzufügen, die den unterschiedlichen Betrag in `details.modifiers.total` angibt.
        - `data`
          - : Ein JSON-serialisierbares Objekt, das optionale Informationen bereitstellt, die von den unterstützten Zahlungsmethoden benötigt werden könnten.
        - `total`
          - : Ein Gesamtbetrag für die Zahlungsanforderung, der den Wert in `details.total` überschreibt. Dies wird typischerweise verwendet, wenn `details.modifiers.additionalItems` einen Rabatt oder einen Kauf zur Anfrage hinzufügt.

- `options` {{optional_inline}}

  - : Ermöglicht das Festlegen von Optionen, die das Verhalten des Benutzeragenten steuern. Dieser Parameter enthält die folgenden Felder:

    - `requestPayerName`
      - : Ein Boolean, der angibt, ob der Benutzeragent den Namen des Zahlungspflichtigen erfassen und mit der Zahlungsanforderung übermitteln soll. Der Standardwert ist `false`.
    - `requestPayerEmail`
      - : Ein Boolean, der angibt, ob der Benutzeragent die E-Mail-Adresse des Zahlungspflichtigen erfassen und mit der Zahlungsanforderung übermitteln soll. Der Standardwert ist `false`.
    - `requestPayerPhone`
      - : Ein Boolean, der angibt, ob der Benutzeragent die Telefonnummer des Zahlungspflichtigen erfassen und mit der Zahlungsanforderung übermitteln soll. Der Standardwert ist `false`.
    - `requestShipping`
      - : Ein Boolean, der angibt, ob der Benutzeragent die Versandadresse des Zahlungspflichtigen erfassen und mit der Zahlungsanforderung übermitteln soll. Wenn Sie diesen Typ auf true setzen, sollten Sie einen geeigneten `shippingType` auswählen. Der Standardwert ist `false`.
    - `shippingType`
      - : Ermöglicht Ihnen anzugeben, wie die Benutzeroberfläche auf den Versand Bezug nimmt, wenn das Wort 'Versand' für Ihren Anwendungsfall nicht geeignet ist. Beispielsweise würde man in englischsprachigen Ländern "Pizza-Lieferung" statt "Pizza-Versand" sagen. Gültige Werte sind `"shipping"`, `"delivery"` und `"pickup"`. Anführungszeichen müssen enthalten sein. Der Standardwert ist `"shipping"`.

### Rückgabewert

Ein neues [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt, konfiguriert zur Verwendung gemäß den Eingabeparametern.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Beispiele

Das folgende Beispiel zeigt die minimale Funktionalität und konzentriert sich stattdessen darauf, den vollständigen Kontext der Instanziierung eines `PaymentRequest`-Objekts zu zeigen.

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
