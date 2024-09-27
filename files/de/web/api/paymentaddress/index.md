---
title: PaymentAddress
slug: Web/API/PaymentAddress
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`PaymentAddress`** Interface der [Payment Request API](/de/docs/Web/API/Payment_Request_API) wird verwendet, um Versand- oder Zahlungsadressinformationen zu speichern.

Es kann nützlich sein, auf die Materialien des Universal Postal Union Website's [Addressing S42 Standard](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions#addressing-s42-standard) zu verweisen, die Informationen über internationale Standards für Postadressen bieten.

## Instanz-Eigenschaften

- [`PaymentAddress.addressLine`](/de/docs/Web/API/PaymentAddress/addressLine) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Array von Zeichenketten, das jede Adresszeile bereitstellt, die nicht zu den anderen Eigenschaften zählt. Die genaue Größe und der Inhalt variieren je nach Land oder Ort und können beispielsweise einen Straßennamen, Hausnummer, Wohnungsnummer, ländliche Lieferroute, beschreibende Anweisungen oder Postfachnummer enthalten.
- [`PaymentAddress.country`](/de/docs/Web/API/PaymentAddress/country) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenkette, die das Land angibt, in dem sich die Adresse befindet, und zwar unter Verwendung des [ISO-3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) Standards. Die Zeichenkette wird immer in ihrer kanonischen Großbuchstabenform angegeben. Einige Beispiele für gültige `country` Werte: `"US"`, `"GB"`, `"CN"` oder `"JP"`.
- [`PaymentAddress.city`](/de/docs/Web/API/PaymentAddress/city) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenkette, die den Stadt- oder Gemeindeteil der Adresse enthält.
- [`PaymentAddress.dependentLocality`](/de/docs/Web/API/PaymentAddress/dependentLocality) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenkette, die die abhängige Örtlichkeit oder Unterörtlichkeit innerhalb einer Stadt angibt, zum Beispiel ein Viertel, Bezirk, Stadtteil oder eine UK-abhängige Örtlichkeit.
- [`PaymentAddress.organization`](/de/docs/Web/API/PaymentAddress/organization) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenkette, die den Namen der Organisation, Firma, des Unternehmens oder der Institution an der Zahlungsadresse angibt.
- [`PaymentAddress.phone`](/de/docs/Web/API/PaymentAddress/phone) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenkette, die die Telefonnummer des Empfängers oder Ansprechpartners angibt.
- [`PaymentAddress.postalCode`](/de/docs/Web/API/PaymentAddress/postalCode) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenkette, die einen Code angibt, der von einer Gerichtsbarkeit für die Postzustellung verwendet wird, zum Beispiel die Postleitzahl in den Vereinigten Staaten oder der PIN-Code in Indien.
- [`PaymentAddress.recipient`](/de/docs/Web/API/PaymentAddress/recipient) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenkette, die den Namen des Empfängers, Käufers oder Ansprechpartners an der Zahlungsadresse angibt.
- [`PaymentAddress.region`](/de/docs/Web/API/PaymentAddress/region) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenkette, die die höchste Verwaltungseinheit des Landes enthält, zum Beispiel einen Staat, eine Provinz, eine Oblast oder eine Präfektur.
- [`PaymentAddress.sortingCode`](/de/docs/Web/API/PaymentAddress/sortingCode) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenkette, die einen postalischen Sortiercode bereitstellt, wie er in Frankreich verwendet wird.

> [!NOTE]
> Eigenschaften, für die keine Werte angegeben wurden, enthalten leere Zeichenketten.

## Instanz-Methoden

- [`PaymentAddress.toJSON()`](/de/docs/Web/API/PaymentAddress/toJSON) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein standardmäßiger Serializer, der eine JSON-Darstellung der Eigenschaften des `PaymentAddress`-Objekts zurückgibt.

## Beispiele

Im folgenden Beispiel wird der [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktor verwendet, um eine neue Zahlungsanfrage zu erstellen, die drei Objekte als Parameter erfordert - eines, das die Details der Zahlungsmethoden enthält, die für die Zahlung verwendet werden können, eines, das Details der tatsächlichen Bestellung enthält (wie gekaufte Artikel und Versandoptionen), und ein optionales Objekt mit weiteren Optionen.

Das erste dieser drei Objekte (`supportedInstruments` im Beispiel unten) enthält eine `data` Eigenschaft, die der vom Zahlungsmethodenanbieter definierten Struktur entsprechen muss.

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

Sobald der Zahlungsprozess mit [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) ausgelöst und das Versprechen erfolgreich aufgelöst wurde, enthält das [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) Objekt, das vom erfüllten Versprechen zurückgegeben wird (`instrumentResponse` oben), eine [`PaymentResponse.details`](/de/docs/Web/API/PaymentResponse/details) Eigenschaft mit den Antwortdetails. Diese muss der vom Zahlungsmethodenanbieter definierten Struktur entsprechen.

## Browser-Kompatibilität

{{Compat}}
