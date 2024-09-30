---
title: ContactAddress
slug: Web/API/ContactAddress
l10n:
  sourceCommit: d03a8d7efa6f5476886c915e2261c85b951e4b16
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Das **`ContactAddress`** Interface der [Contact Picker API](/de/docs/Web/API/Contact_Picker_API) repräsentiert eine physische Adresse. Instanzen dieses Interfaces werden aus der `address`-Eigenschaft der Objekte abgerufen, die durch [`ContactsManager.getProperties()`](/de/docs/Web/API/ContactsManager/getProperties) zurückgegeben werden.

Es kann nützlich sein, auf die Materialien des [Addressing S42 Standards](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions#addressing-s42-standard) der Universal Postal Union zu verweisen, die Informationen über internationale Standards für Postadressen bereitstellen.

## Instanz-Eigenschaften

- [`ContactAddress.addressLine`](/de/docs/Web/API/ContactAddress/addressLine) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein Array von Zeichenketten, das jede Zeile der Adresse bereitstellt, die nicht unter die anderen Eigenschaften fällt. Die genaue Größe und der Inhalt variieren je nach Land oder Region und können beispielsweise einen Straßennamen, Hausnummer, Wohnungsnummer, ländliche Lieferroute, beschreibende Anweisungen oder Postfachnummer enthalten.
- [`ContactAddress.country`](/de/docs/Web/API/ContactAddress/country) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenkette, die das Land angibt, in dem sich die Adresse befindet, gemäß dem [ISO-3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) Standard. Die Zeichenkette wird immer in ihrer kanonischen Großschreibweise angegeben. Einige Beispiele für gültige Werte von `country`: `"US"`, `"GB"`, `"CN"` oder `"JP"`.
- [`ContactAddress.city`](/de/docs/Web/API/ContactAddress/city) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenkette, die den Stadt- oder Ortsteil der Adresse enthält.
- [`ContactAddress.dependentLocality`](/de/docs/Web/API/ContactAddress/dependentLocality) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenkette, die die abhängige Ortschaft oder Sublokalität innerhalb einer Stadt angibt, zum Beispiel ein Stadtviertel, Bezirk oder UK-abhängige Ortschaft.
- [`ContactAddress.organization`](/de/docs/Web/API/ContactAddress/organization) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenkette, die den Namen der Organisation, Firma, des Unternehmens oder der Institution an der Adresse angibt.
- [`ContactAddress.phone`](/de/docs/Web/API/ContactAddress/phone) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenkette, die die Telefonnummer des Empfängers oder Ansprechpartners angibt.
- [`ContactAddress.postalCode`](/de/docs/Web/API/ContactAddress/postalCode) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenkette, die einen von einer Gerichtsbarkeit für die Postzustellung verwendeten Code angibt, zum Beispiel die Postleitzahl in den Vereinigten Staaten oder der PIN-Code in Indien.
- [`ContactAddress.recipient`](/de/docs/Web/API/ContactAddress/recipient) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenkette, die den Namen des Empfängers, Käufers oder Ansprechpartners an der Adresse angibt.
- [`ContactAddress.region`](/de/docs/Web/API/ContactAddress/region) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenkette, die die höchste Verwaltungseinheit des Landes enthält, zum Beispiel einen Staat, eine Provinz, ein Oblast oder eine Präfektur.
- [`ContactAddress.sortingCode`](/de/docs/Web/API/ContactAddress/sortingCode) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenkette, die einen Postsortiercode wie in Frankreich verwendet bereitstellt.

## Instanz-Methoden

- [`ContactAddress.toJSON()`](/de/docs/Web/API/ContactAddress/toJSON) {{experimental_inline}}
  - : Ein standardisierter Serializer, der eine JSON-Darstellung der Eigenschaften des `ContactAddress` Objekts zurückgibt.

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
