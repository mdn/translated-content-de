---
title: PaymentAddress
slug: Web/API/PaymentAddress
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Non-standard_Header}}

Die **`PaymentAddress`**-Schnittstelle der [Payment Request API](/de/docs/Web/API/Payment_Request_API) dient zum Speichern von Versand- oder Zahlungsadressinformationen.

Die Materialien zum [Addressing-S42-Standard](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions#addressing-s42-standard) auf der Website des Weltpostvereins können hilfreich sein. Sie enthalten Informationen zu internationalen Standards für Postanschriften.

## Instanzeigenschaften

- [`PaymentAddress.addressLine`](/de/docs/Web/API/PaymentAddress/addressLine) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Array von Strings mit den einzelnen Adresszeilen, die nicht durch andere Eigenschaften abgedeckt sind. Anzahl und Inhalt variieren je nach Land oder Ort. Sie können beispielsweise einen Straßennamen, eine Hausnummer, eine Wohnungsnummer, Angaben zu einer ländlichen Zustellroute, Zustellhinweise oder eine Postfachnummer enthalten.
- [`PaymentAddress.country`](/de/docs/Web/API/PaymentAddress/country) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein String, der das Land angibt, in dem sich die Adresse befindet, gemäß dem Standard [ISO 3166-1 Alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Der String wird immer in seiner kanonischen Form mit Großbuchstaben angegeben. Beispiele für gültige `country`-Werte sind `"US"`, `"GB"`, `"CN"` und `"JP"`.
- [`PaymentAddress.city`](/de/docs/Web/API/PaymentAddress/city) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein String mit dem Stadt- oder Ortsnamen der Adresse.
- [`PaymentAddress.dependentLocality`](/de/docs/Web/API/PaymentAddress/dependentLocality) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein String, der einen untergeordneten Ort oder Ortsteil innerhalb einer Stadt angibt, beispielsweise ein Stadtviertel, einen Stadtbezirk, einen Distrikt oder eine sogenannte „dependent locality“ im Vereinigten Königreich.
- [`PaymentAddress.organization`](/de/docs/Web/API/PaymentAddress/organization) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein String mit dem Namen der Organisation, Firma, des Unternehmens oder der Einrichtung an der Zahlungsadresse.
- [`PaymentAddress.phone`](/de/docs/Web/API/PaymentAddress/phone) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein String mit der Telefonnummer der empfangenden Person oder der Kontaktperson.
- [`PaymentAddress.postalCode`](/de/docs/Web/API/PaymentAddress/postalCode) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein String mit einem Code, der in einem Zuständigkeitsgebiet zur Postzustellung verwendet wird, beispielsweise dem ZIP-Code in den Vereinigten Staaten oder dem PIN-Code in Indien.
- [`PaymentAddress.recipient`](/de/docs/Web/API/PaymentAddress/recipient) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein String mit dem Namen der empfangenden, kaufenden oder an der Zahlungsadresse zuständigen Kontaktperson.
- [`PaymentAddress.region`](/de/docs/Web/API/PaymentAddress/region) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein String mit der obersten Verwaltungseinheit des Landes, beispielsweise einem Bundesstaat, einer Provinz, einer Oblast oder einer Präfektur.
- [`PaymentAddress.sortingCode`](/de/docs/Web/API/PaymentAddress/sortingCode) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein String mit einem Postsortiercode, wie er beispielsweise in Frankreich verwendet wird.

> [!NOTE]
> Eigenschaften, für die keine Werte angegeben wurden, enthalten leere Strings.

## Instanzmethoden

- [`PaymentAddress.toJSON()`](/de/docs/Web/API/PaymentAddress/toJSON) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PaymentAddress`-Objekt repräsentiert. Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beispiele

Im folgenden Beispiel wird der Konstruktor [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) verwendet, um eine neue Zahlungsanfrage zu erstellen. Er erhält drei Objekte als Parameter: eines mit Angaben zu den Zahlungsmethoden, die für die Zahlung verwendet werden können, eines mit Angaben zur eigentlichen Bestellung (etwa gekaufte Artikel und Versandoptionen) und ein optionales Objekt mit weiteren Optionen.

Das erste dieser drei Objekte (`supportedInstruments` im folgenden Beispiel) enthält eine `data`-Eigenschaft, deren Inhalt der von der Zahlungsmethode definierten Struktur entsprechen muss.

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

Nachdem der Zahlungsvorgang mit [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) gestartet wurde und das Promise erfolgreich erfüllt ist, enthält das über das erfüllte Promise verfügbare [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt (`instrumentResponse` oben) eine [`PaymentResponse.details`](/de/docs/Web/API/PaymentResponse/details)-Eigenschaft mit Antwortdetails. Diese müssen der vom Anbieter der Zahlungsmethode definierten Struktur entsprechen.

## Browser-Kompatibilität

{{Compat}}
