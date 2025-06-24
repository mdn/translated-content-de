---
title: "PaymentRequest: PaymentRequest() Konstruktor"
short-title: PaymentRequest()
slug: Web/API/PaymentRequest/PaymentRequest
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Der **`PaymentRequest()`** Konstruktor erstellt ein neues [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekt, das verwendet wird, um den Prozess der Erstellung, Validierung und Einreichung einer Zahlungsanforderung zu handhaben.

## Syntax

```js-nolint
new PaymentRequest(methodData, details)
new PaymentRequest(methodData, details, options)
```

### Parameter

- `methodData`

  - : Enthält ein Array von Identifikatoren für die Zahlungsmethoden, die die Händlerwebsite akzeptiert, sowie alle zugehörigen zahlungsmethodenspezifischen Daten. Jedes Element im Array enthält die folgenden Felder:

    - `supportedMethods`

      - : Ein String, der einen [Zahlungsmethoden-Identifikator](/de/docs/Web/API/Payment_Request_API/Concepts#payment_method_identifiers) enthält. Dies ist entweder eine URL oder einer der [standardisierten Zahlungsmethoden-Identifikatoren](/de/docs/Web/API/Payment_Request_API/Concepts#standardized_payment_method_identifiers). Der Wert und die Struktur des `data` Feldes variieren je nach Wert des `supportedMethods` Feldes.

    - `data`
      - : Ein JSON-serialisierbares Objekt, das optionale Informationen bereitstellt, die von den unterstützten Zahlungsmethoden benötigt werden könnten. Es muss dem von dem durch `supportedMethods` angegebenen Payment-Handler erwarteten Typ entsprechen. Entwickler müssen sich mit den Verantwortlichen der Zahlungsmethoden in Verbindung setzen, um die erwartete Struktur des Datenobjekts zu erfragen. Wenn `supportedMethods` `secure-payment-confirmation` ist, muss `data` dem [`SecurePaymentConfirmationRequest`](/de/docs/Web/API/SecurePaymentConfirmationRequest) Dictionary entsprechen.

- `details`

  - : Bietet Informationen über die angeforderte Transaktion. Dieser Parameter enthält die folgenden Felder:
    - `total`
      - : Der Gesamtbetrag der Zahlungsanforderung.
    - `id` {{optional_inline}}
      - : Ein freiformatiger Identifikator für diese Zahlungsanforderung. Wenn kein Wert angegeben wird, erstellt der Browser einen.
    - `displayItems`
      - : Ein Array optionaler Positionen für die Zahlungsanforderung, die der Benutzeragent anzeigen kann, wie z.B. Produktdetails, Steuern und Versand.
    - `shippingOptions`
      - : Die Versandoptionen, die der Benutzer auswählen kann. Wenn diese Sequenz leer ist, bedeutet dies, dass der Händler nicht an die aktuelle Versandadresse liefern kann. Die Standardversandoption kann in dieser Sequenz angegeben werden.
    - `modifiers`
      - : Modifikatoren für spezifische Zahlungsmethoden; zum Beispiel die Anpassung des Gesamtbetrags basierend auf der Zahlungsmethode. Dieser Parameter enthält die folgenden Felder:
        - `additionalDisplayItems`
          - : Ein Array von Artikeln, die der `details.displayItems` Eigenschaft hinzugefügt werden sollen. Diese Eigenschaft wird häufig verwendet, um einen Rabatt oder einen Zuschlag anzuzeigen, der in `details.modifiers.total` angegeben ist.
        - `data`
          - : Ein JSON-serialisierbares Objekt, das optionale Informationen bereitstellt, die von den unterstützten Zahlungsmethoden benötigt werden könnten.
        - `total`
          - : Ein Gesamtbetrag für die Zahlungsanforderung, der den Wert in `details.total` überschreibt. Dies wird typischerweise verwendet, wenn `details.modifiers.additionalItems` einem Rabatt oder einem Kauf zur Anfrage hinzufügt.

- `options` {{optional_inline}}
  - : Erlaubt Ihnen, Optionen festzulegen, die das Verhalten des Benutzeragents steuern. Dieser Parameter enthält die folgenden Felder:
    - `requestPayerName`
      - : Ein Boolean, der angibt, ob der Benutzeragent den Namen des Zahlers erfassen und mit der Zahlungsanforderung übermitteln soll. Der Standard ist `false`.
    - `requestPayerEmail`
      - : Ein Boolean, der angibt, ob der Benutzeragent die E-Mail-Adresse des Zahlers erfassen und mit der Zahlungsanforderung übermitteln soll. Der Standard ist `false`.
    - `requestPayerPhone`
      - : Ein Boolean, der angibt, ob der Benutzeragent die Telefonnummer des Zahlers erfassen und mit der Zahlungsanforderung übermitteln soll. Der Standard ist `false`.
    - `requestShipping`
      - : Ein Boolean, der angibt, ob der Benutzeragent die Versandadresse des Zahlers erfassen und mit der Zahlungsanforderung übermitteln soll. Wenn Sie diesen Typ auf true setzen, sollten Sie eine geeignete `shippingType` auswählen. Der Standard ist `false`.
    - `shippingType`
      - : Erlaubt es Ihnen zu spezifizieren, wie die Benutzeroberfläche den Versand beschreibt, wenn das Wort 'Versand' für Ihren Anwendungsfall nicht passend ist. Zum Beispiel würde man in englischsprachigen Ländern "pizza delivery" statt "pizza shipping" sagen. Gültige Werte sind `"shipping"`, `"delivery"` und `"pickup"`. Anführungszeichen müssen eingeschlossen sein. Der Standardwert ist `"shipping"`.

### Rückgabewert

Ein neues [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekt, konfiguriert zur Verwendung gemäß den Eingabewerten.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Beispiele

Das folgende Beispiel zeigt minimalen Funktionsumfang und konzentriert sich stattdessen auf die vollständige Kontexteinbettung bei der Instanziierung eines `PaymentRequest` Objekts.

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
