---
title: Zahlungsadresse
slug: Web/API/PaymentAddress
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`PaymentAddress`**-Schnittstelle der [Payment Request API](/de/docs/Web/API/Payment_Request_API) wird verwendet, um Versand- oder Zahlungsadressinformationen zu speichern.

Es kann nützlich sein, sich auf die Materialien zum [Adressierungsstandard S42](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions#addressing-s42-standard) der Universal Postal Union-Website zu beziehen, die Informationen über internationale Standards für Postadressen liefern.

## Instanzeigenschaften

- {{domxref('PaymentAddress.addressLine')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Array von Zeichenfolgen, das jede Zeile der Adresse bereitstellt, die nicht zu den anderen Eigenschaften gehört. Die genaue Größe und der Inhalt variieren je nach Land oder Standort und können z.B. einen Straßennamen, Hausnummer, Wohnungsnummer, ländlichen Lieferweg, beschreibende Anweisungen oder eine Postfachnummer enthalten.
- {{domxref('PaymentAddress.country')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die das Land angibt, in dem sich die Adresse befindet, gemäß dem [ISO-3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) Standard. Die Zeichenfolge wird immer in ihrer kanonischen Großbuchstabenform angegeben. Einige Beispiele für gültige `country`-Werte: `"US"`, `"GB"`, `"CN"` oder `"JP"`.
- {{domxref('PaymentAddress.city')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die den Stadt- oder Ortsbereich der Adresse enthält.
- {{domxref('PaymentAddress.dependentLocality')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die die abhängige Gemeinde oder Untergemeinde innerhalb einer Stadt angibt, z.B. ein Viertel, Bezirk, Stadtteil oder eine UK-abhängige Gemeinde.
- {{domxref('PaymentAddress.organization')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die den Namen der Organisation, Firma, Gesellschaft oder Institution an der Zahlungsadresse angibt.
- {{domxref('PaymentAddress.phone')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die die Telefonnummer des Empfängers oder Ansprechpartners angibt.
- {{domxref('PaymentAddress.postalCode')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die einen Code angibt, der von einer Jurisdiktion für die Postzustellung verwendet wird, z.B. die Postleitzahl in den USA oder der PIN-Code in Indien.
- {{domxref('PaymentAddress.recipient')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die den Namen des Empfängers, Käufers oder Ansprechpartners an der Zahlungsadresse angibt.
- {{domxref('PaymentAddress.region')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die die höchste Verwaltungseinheit des Landes angibt, z.B. ein Staat, eine Provinz, ein Oblast oder eine Präfektur.
- {{domxref('PaymentAddress.sortingCode')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die einen Postsortiercode angibt, wie er in Frankreich verwendet wird.

> [!NOTE]
> Eigenschaften, für die keine Werte angegeben wurden, enthalten leere Zeichenfolgen.

## Instanzmethoden

- {{domxref('PaymentAddress.toJSON()')}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Standard-Serializer, der eine JSON-Darstellung der Eigenschaften des `PaymentAddress`-Objekts zurückgibt.

## Beispiele

Im folgenden Beispiel wird der {{domxref("PaymentRequest.PaymentRequest","PaymentRequest()")}}-Konstruktor verwendet, um eine neue Zahlungsanfrage zu erstellen, die drei Objekte als Parameter verwendet — eines, das Details der Zahlungsarten enthält, die zur Zahlung verwendet werden können, eines, das Details der eigentlichen Bestellung (wie gekaufte Artikel und Versandoptionen) enthält, und ein optionales Objekt mit weiteren Optionen.

Das erste dieser drei (`supportedInstruments` im folgenden Beispiel) enthält eine `data`-Eigenschaft, die der durch die Zahlungsmethode definierten Struktur entsprechen muss.

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
  // Fügen Sie hier Ereignislistener hinzu.
  // Rufen Sie show() auf, um den Zahlungsprozess des Browsers zu starten.
  const response = await request.show();
  // Zahlung verarbeiten.
  const json = response.toJSON();
  const httpResponse = await fetch("/pay/", { method: "POST", body: json });
  const result = httpResponse.ok ? "success" : "failure";

  await response.complete(result);
}
doPaymentRequest();
```

Sobald der Zahlungsprozess mit {{domxref("PaymentRequest.show()")}} ausgelöst wurde und das Versprechen erfolgreich aufgelöst ist, verfügt das {{domxref("PaymentResponse")}}-Objekt, das aus dem erfüllten Versprechen verfügbar ist (`instrumentResponse` oben), über eine {{domxref("PaymentResponse.details")}}-Eigenschaft, die Antwortdetails enthält. Diese muss der vom Zahlungsdienstleister definierten Struktur entsprechen.

## Browser-Kompatibilität

{{Compat}}
