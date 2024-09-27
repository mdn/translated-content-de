---
title: ContactAddress
slug: Web/API/ContactAddress
l10n:
  sourceCommit: d03a8d7efa6f5476886c915e2261c85b951e4b16
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Das **`ContactAddress`** Interface der [Contact Picker API](/de/docs/Web/API/Contact_Picker_API) repräsentiert eine physische Adresse. Instanzen dieses Interface werden aus der `address` Eigenschaft der Objekte gewonnen, die von [`ContactsManager.getProperties()`](/de/docs/Web/API/ContactsManager/getProperties) zurückgegeben werden.

Es könnte nützlich sein, auf die Materialien des [Adressierungsstandards S42](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions#addressing-s42-standard) der Universal Postal Union Website zu verweisen, die Informationen zu internationalen Standards für Postadressen bieten.

## Instanz-Eigenschaften

- [`ContactAddress.addressLine`](/de/docs/Web/API/ContactAddress/addressLine) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein Array von Strings, das jede Zeile der Adresse, die nicht unter die anderen Eigenschaften fällt, bereitstellt. Die genaue Größe und der Inhalt variieren je nach Land oder Region und können beispielsweise einen Straßennamen, Hausnummer, Wohnungsnummer, ländliche Lieferroute, beschreibende Anweisungen oder Postfachnummer enthalten.
- [`ContactAddress.country`](/de/docs/Web/API/ContactAddress/country) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der das Land, in dem sich die Adresse befindet, gemäß dem [ISO-3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) Standard spezifiziert. Der String wird immer in seiner kanonischen Großbuchstabenform angegeben. Einige Beispiele für gültige `country` Werte: `"US"`, `"GB"`, `"CN"` oder `"JP"`.
- [`ContactAddress.city`](/de/docs/Web/API/ContactAddress/city) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der den Stadt- oder Ortsbereich der Adresse enthält.
- [`ContactAddress.dependentLocality`](/de/docs/Web/API/ContactAddress/dependentLocality) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der die abhängige Ortschaft oder Sublokalität innerhalb einer Stadt angibt, beispielsweise ein Stadtteil, Bezirk oder eine abhängige Lokalität im Vereinigten Königreich.
- [`ContactAddress.organization`](/de/docs/Web/API/ContactAddress/organization) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der den Namen der Organisation, Firma, des Unternehmens oder der Institution an der Adresse angibt.
- [`ContactAddress.phone`](/de/docs/Web/API/ContactAddress/phone) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der die Telefonnummer des Empfängers oder der Kontaktperson angibt.
- [`ContactAddress.postalCode`](/de/docs/Web/API/ContactAddress/postalCode) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der einen von einer Gerichtsbarkeit für den Postversand verwendeten Code angibt, zum Beispiel die Postleitzahl in den Vereinigten Staaten oder den PIN-Code in Indien.
- [`ContactAddress.recipient`](/de/docs/Web/API/ContactAddress/recipient) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der den Namen des Empfängers, Käufers oder der Kontaktperson an der Adresse angibt.
- [`ContactAddress.region`](/de/docs/Web/API/ContactAddress/region) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der die oberste Verwaltungseinheit des Landes enthält, zum Beispiel einen Staat, eine Provinz, ein Oblast oder eine Präfektur.
- [`ContactAddress.sortingCode`](/de/docs/Web/API/ContactAddress/sortingCode) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der einen Postsortiercode bereitstellt, wie er in Frankreich verwendet wird.

## Instanz-Methoden

- [`ContactAddress.toJSON()`](/de/docs/Web/API/ContactAddress/toJSON) {{experimental_inline}}
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
