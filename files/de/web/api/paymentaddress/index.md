---
title: PaymentAddress
slug: Web/API/PaymentAddress
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`PaymentAddress`** Interface der [Payment Request API](/de/docs/Web/API/Payment_Request_API) wird verwendet, um Versand- oder Zahlungsadressinformationen zu speichern.

Es kann nützlich sein, auf die Materialien des Universal Postal Union zur [Addressing S42 standard](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions#addressing-s42-standard) zu verweisen, die Informationen über internationale Standards für Postadressen bieten.

## Instanz-Eigenschaften

- [`PaymentAddress.addressLine`](/de/docs/Web/API/PaymentAddress/addressLine) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Array von Zeichenketten, das jede Zeile der Adresse bereitstellt, die nicht zu den anderen Eigenschaften gehört. Die genaue Größe und der Inhalt variieren je nach Land oder Ort und können beispielsweise einen Straßennamen, Hausnummer, Wohnungsnummer, ländliche Lieferroute, beschreibende Anleitungen oder Postfachnummer enthalten.
- [`PaymentAddress.country`](/de/docs/Web/API/PaymentAddress/country) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenkette, die das Land angibt, in dem sich die Adresse befindet, unter Verwendung des [ISO-3166-1 alpha-2](https://de.wikipedia.org/wiki/ISO_3166-1_alpha-2) Standards. Die Zeichenkette wird immer in ihrer kanonischen Großbuchstabenform angegeben. Einige Beispiele für gültige `country` Werte: `"US"`, `"GB"`, `"CN"` oder `"JP"`.
- [`PaymentAddress.city`](/de/docs/Web/API/PaymentAddress/city) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenkette, die den Stadt- oder Ortsteil der Adresse enthält.
- [`PaymentAddress.dependentLocality`](/de/docs/Web/API/PaymentAddress/dependentLocality) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenkette, die die abhängige Örtlichkeit oder Sublokalität innerhalb einer Stadt angibt, zum Beispiel ein Stadtviertel, Bezirk, Stadtbezirk oder eine britische abhängige Örtlichkeit.
- [`PaymentAddress.organization`](/de/docs/Web/API/PaymentAddress/organization) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenkette, die den Namen der Organisation, Firma, des Unternehmens oder der Institution an der Zahlungsadresse angibt.
- [`PaymentAddress.phone`](/de/docs/Web/API/PaymentAddress/phone) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenkette, die die Telefonnummer des Empfängers oder der Kontaktperson angibt.
- [`PaymentAddress.postalCode`](/de/docs/Web/API/PaymentAddress/postalCode) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenkette, die einen Code angibt, der von einer Gerichtsbarkeit für die Postzustellung verwendet wird, wie z.B. die Postleitzahl in den Vereinigten Staaten oder der PIN-Code in Indien.
- [`PaymentAddress.recipient`](/de/docs/Web/API/PaymentAddress/recipient) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenkette, die den Namen des Empfängers, Käufers oder der Kontaktperson an der Zahlungsadresse angibt.
- [`PaymentAddress.region`](/de/docs/Web/API/PaymentAddress/region) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenkette, die die oberste Verwaltungseinheit des Landes enthält, beispielsweise ein Bundesstaat, eine Provinz, ein Gebiet oder eine Präfektur.
- [`PaymentAddress.sortingCode`](/de/docs/Web/API/PaymentAddress/sortingCode) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenkette, die einen Postsortiercode angibt, wie er in Frankreich verwendet wird.

> [!NOTE]
> Eigenschaften, für die keine Werte angegeben wurden, enthalten leere Zeichenketten.

## Instanz-Methoden

- [`PaymentAddress.toJSON()`](/de/docs/Web/API/PaymentAddress/toJSON) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Standard-Serializer, der eine JSON-Darstellung der Eigenschaften des `PaymentAddress`-Objekts zurückgibt.

## Beispiele

Im folgenden Beispiel wird der [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktor verwendet, um eine neue Zahlungsanforderung zu erstellen, die drei Objekte als Parameter annimmt — eines, das Details zu den Zahlungsmethoden enthält, die für die Zahlung verwendet werden können, eines, das Details zur eigentlichen Bestellung enthält (wie gekaufte Artikel und Versandoptionen), und ein optionales Objekt, das weitere Optionen enthält.

Das erste dieser drei (`supportedInstruments` im untenstehenden Beispiel) enthält eine `data` Eigenschaft, die der vom Zahlungsmethoden-Anbieter definierten Struktur entsprechen muss.

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

Sobald der Zahlungsablauf mithilfe von [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) ausgelöst wurde und das Versprechen erfolgreich aufgelöst wurde, enthält das [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) Objekt, das aus dem erfüllten Versprechen (`instrumentResponse` oben) verfügbar ist, eine [`PaymentResponse.details`](/de/docs/Web/API/PaymentResponse/details) Eigenschaft mit Antwortdetails. Diese muss der vom Zahlungsmethoden-Anbieter definierten Struktur entsprechen.

## Browser-Kompatibilität

{{Compat}}
