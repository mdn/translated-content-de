---
title: PaymentAddress
slug: Web/API/PaymentAddress
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Non-standard_Header}}

Das **`PaymentAddress`**-Interface der [Payment Request API](/de/docs/Web/API/Payment_Request_API) wird verwendet, um Versand- oder Zahlungsadressinformationen zu speichern.

Es kann nützlich sein, die Materialien des Universal Postal Union zur [Addressing S42 standard](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions#addressing-s42-standard) zu konsultieren, die Informationen über internationale Standards für Postadressen bereitstellen.

## Instanzeigenschaften

- [`PaymentAddress.addressLine`](/de/docs/Web/API/PaymentAddress/addressLine) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Array von Zeichenfolgen, das jede Zeile der Adresse bereitstellt, die nicht zu den anderen Eigenschaften gehört. Die genaue Größe und der Inhalt variieren je nach Land oder Ort und können z.B. einen Straßennamen, Hausnummer, Wohnungsnummer, ländliche Lieferroute, beschreibende Anweisungen oder Postfachnummer enthalten.
- [`PaymentAddress.country`](/de/docs/Web/API/PaymentAddress/country) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die das Land angibt, in dem sich die Adresse befindet, unter Verwendung des [ISO-3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) Standards. Die Zeichenfolge wird immer in ihrer kanonischen Großbuchstabenform angegeben. Einige Beispiele für gültige `country`-Werte: `"US"`, `"GB"`, `"CN"`, oder `"JP"`.
- [`PaymentAddress.city`](/de/docs/Web/API/PaymentAddress/city) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die den Stadt- oder Ortsteil der Adresse enthält.
- [`PaymentAddress.dependentLocality`](/de/docs/Web/API/PaymentAddress/dependentLocality) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die die abhängige Örtlichkeit oder Unterlokalität innerhalb einer Stadt angibt, zum Beispiel ein Stadtteil, Bezirk oder eine abhängige Örtlichkeit im Vereinigten Königreich.
- [`PaymentAddress.organization`](/de/docs/Web/API/PaymentAddress/organization) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die den Namen der Organisation, Firma, des Unternehmens oder der Institution an der Zahlungsadresse angibt.
- [`PaymentAddress.phone`](/de/docs/Web/API/PaymentAddress/phone) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die die Telefonnummer des Empfängers oder der Kontaktperson angibt.
- [`PaymentAddress.postalCode`](/de/docs/Web/API/PaymentAddress/postalCode) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die einen von einer Gerichtsbarkeit zur Postrouting verwendeten Code angibt, beispielsweise den Postleitzahl-Code in den Vereinigten Staaten oder den PIN-Code in Indien.
- [`PaymentAddress.recipient`](/de/docs/Web/API/PaymentAddress/recipient) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die den Namen des Empfängers, Käufers oder der Kontaktperson an der Zahlungsadresse angibt.
- [`PaymentAddress.region`](/de/docs/Web/API/PaymentAddress/region) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die die oberste Verwaltungseinheit des Landes enthält, zum Beispiel einen Staat, eine Provinz, ein Oblast oder eine Präfektur.
- [`PaymentAddress.sortingCode`](/de/docs/Web/API/PaymentAddress/sortingCode) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die einen Postsortierungscode angibt, wie er in Frankreich verwendet wird.

> [!NOTE]
> Eigenschaften, für die keine Werte angegeben wurden, enthalten leere Zeichenfolgen.

## Instanzmethoden

- [`PaymentAddress.toJSON()`](/de/docs/Web/API/PaymentAddress/toJSON) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Standard-Serializer, der eine JSON-Darstellung der Eigenschaften des `PaymentAddress`-Objekts zurückgibt.

## Beispiele

Im folgenden Beispiel wird der [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktor verwendet, um eine neue Zahlungsanforderung zu erstellen, die drei Objekte als Parameter entgegennimmt — eines, das Details zu den Zahlungsmethoden enthält, die für die Zahlung verwendet werden können, eines, das Details zur eigentlichen Bestellung enthält (wie gekaufte Artikel und Versandoptionen), und ein optionales Objekt mit weiteren Optionen.

Das erste dieser drei Objekte (`supportedInstruments` im folgenden Beispiel) enthält eine `data`-Eigenschaft, die der von der Zahlungsmethode definierten Struktur entsprechen muss.

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

async function doPaymentRequest() {
  const request = new PaymentRequest(supportedInstruments, details, options);
  // Add event listeners here.
  // Call show() to trigger the browser's payment flow.
  const response = await request.show();
  // Process payment.
  const json = response.toJSON();
  const httpResponse = await fetch("/pay/", { method: "POST", body: json });
  const result = httpResponse.ok ? "success" : "failure";

  await response.complete(result);
}
doPaymentRequest();
```

Sobald der Zahlungsfluss über [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) ausgelöst wurde und das Versprechen erfolgreich erfüllt wurde, wird das [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt, das aus dem erfüllten Versprechen (`instrumentResponse` oben) verfügbar ist, eine [`PaymentResponse.details`](/de/docs/Web/API/PaymentResponse/details)-Eigenschaft enthalten, die Antwortdetails enthält. Diese muss der von dem Zahlungsmethoden-Provider definierten Struktur entsprechen.

## Browser-Kompatibilität

{{Compat}}
