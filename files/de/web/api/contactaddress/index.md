---
title: ContactAddress
slug: Web/API/ContactAddress
l10n:
  sourceCommit: d03a8d7efa6f5476886c915e2261c85b951e4b16
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Das **`ContactAddress`** Interface der [Contact Picker API](/de/docs/Web/API/Contact_Picker_API) repräsentiert eine physische Adresse. Instanzen dieses Interfaces werden aus der `address` Eigenschaft der Objekte abgerufen, die von {{domxref("ContactsManager.getProperties()")}} zurückgegeben werden.

Es kann nützlich sein, die Materialien zum [Addressing S42 Standard](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions#addressing-s42-standard) auf der Website der Universal Postal Union zu konsultieren, die Informationen zu internationalen Standards für Postadressen bieten.

## Instanz-Eigenschaften

- {{domxref('ContactAddress.addressLine')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein Array von Zeichenfolgen, das jede nicht unter den anderen Eigenschaften enthaltene Zeile der Adresse bereitstellt. Die genaue Größe und der Inhalt variieren je nach Land oder Ort und können beispielsweise einen Straßennamen, Hausnummer, Wohnungsnummer, ländliche Lieferungsroute, beschreibende Anweisungen oder Postfachnummer beinhalten.
- {{domxref('ContactAddress.country')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenfolge, die das Land angibt, in dem sich die Adresse befindet und den [ISO-3166-1 Alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) Standard verwendet. Die Zeichenfolge wird immer in ihrer kanonischen Großschreibform angegeben. Einige Beispiele für gültige `country` Werte: `"US"`, `"GB"`, `"CN"`, oder `"JP"`.
- {{domxref('ContactAddress.city')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenfolge, die den Teil der Adresse enthält, der sich auf die Stadt oder den Ort bezieht.
- {{domxref('ContactAddress.dependentLocality')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenfolge, die die abhängige Lokalität oder Sublokalität innerhalb einer Stadt angibt, zum Beispiel ein Viertel, Stadtteil oder UK abhängige Lokalität.
- {{domxref('ContactAddress.organization')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenfolge, die den Namen der Organisation, Firma, des Unternehmens oder der Institution an der Adresse angibt.
- {{domxref('ContactAddress.phone')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenfolge, die die Telefonnummer des Empfängers oder der Kontaktperson angibt.
- {{domxref('ContactAddress.postalCode')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenfolge, die einen Code angibt, der von einer Gerichtsbarkeit für die Postzustellung verwendet wird, beispielsweise die Postleitzahl in den Vereinigten Staaten oder der PIN-Code in Indien.
- {{domxref('ContactAddress.recipient')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenfolge, die den Namen des Empfängers, Käufers oder der Kontaktperson an der Adresse angibt.
- {{domxref('ContactAddress.region')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenfolge, die die höchste Verwaltungsgliederung des Landes enthält, zum Beispiel ein Staat, eine Provinz, ein Oblast oder eine Präfektur.
- {{domxref('ContactAddress.sortingCode')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenfolge, die einen Postsortiercode bereitstellt, wie er in Frankreich verwendet wird.

## Instanz-Methoden

- {{domxref('ContactAddress.toJSON()')}} {{experimental_inline}}
  - : Ein Standard-Serializer, der eine JSON-Darstellung der Eigenschaften des `ContactAddress` Objekts zurückgibt.

## Beispiele

Das folgende Beispiel fordert den Benutzer auf, Kontakte auszuwählen, und gibt dann die erste zurückgegebene Adresse in der Konsole aus.

```js
const props = ["address"];
const opts = { multiple: true };

async function getContacts() {
  try {
    const contacts = await navigator.contacts.select(props, opts);
    const contactAddress = contacts[0].address[0];
    console.log(contactAddress);
  } catch (ex) {
    // Handle any errors here.
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
