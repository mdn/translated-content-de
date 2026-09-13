---
title: ContactAddress
slug: Web/API/ContactAddress
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Das **`ContactAddress`**-Interface der [Contact Picker API](/de/docs/Web/API/Contact_Picker_API) repräsentiert eine physische Adresse. Instanzen dieses Interfaces werden über die `address`-Eigenschaft der Objekte, die von [`ContactsManager.select()`](/de/docs/Web/API/ContactsManager/select) zurückgegeben werden, abgerufen.

Es kann nützlich sein, die Materialien zum [Addressing S42 Standard](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions#addressing-s42-standard) der Universal Postal Union-Website zu konsultieren, die Informationen über internationale Standards für Postadressen bieten.

## Instanz-Eigenschaften

- [`ContactAddress.addressLine`](/de/docs/Web/API/ContactAddress/addressLine) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein Array von Zeichenketten, das jede Zeile der Adresse bereitstellt, die nicht zu den anderen Eigenschaften gehört. Die genaue Größe und der Inhalt variieren je nach Land oder Ort und können beispielsweise einen Straßennamen, Hausnummer, Wohnungsnummer, ländliche Lieferroute, beschreibende Anweisungen oder eine Postfachnummer enthalten.
- [`ContactAddress.country`](/de/docs/Web/API/ContactAddress/country) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenkette, die das Land angibt, in dem sich die Adresse befindet, unter Verwendung des [ISO-3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)-Standards. Die Zeichenkette wird immer in ihrer kanonischen Großbuchstabenschreibweise angegeben. Einige Beispiele für gültige `country`-Werte: `"US"`, `"GB"`, `"CN"` oder `"JP"`.
- [`ContactAddress.city`](/de/docs/Web/API/ContactAddress/city) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenkette, die den Stadt- oder Ortteils der Adresse enthält.
- [`ContactAddress.dependentLocality`](/de/docs/Web/API/ContactAddress/dependentLocality) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenkette, die die abhängige Lokalität oder Unterlokalität innerhalb einer Stadt angibt, zum Beispiel ein Viertel, Bezirk, Distrikt oder UK-abhängige Lokalität.
- [`ContactAddress.organization`](/de/docs/Web/API/ContactAddress/organization) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenkette, die den Namen der Organisation, Firma, des Unternehmens oder der Institution an der Adresse spezifiziert.
- [`ContactAddress.phone`](/de/docs/Web/API/ContactAddress/phone) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenkette, die die Telefonnummer des Empfängers oder der Kontaktperson angibt.
- [`ContactAddress.postalCode`](/de/docs/Web/API/ContactAddress/postalCode) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenkette, die einen von einer Gerichtsbarkeit für die Postzustellung verwendeten Code angibt, zum Beispiel die Postleitzahl in den Vereinigten Staaten oder der PIN-Code in Indien.
- [`ContactAddress.recipient`](/de/docs/Web/API/ContactAddress/recipient) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenkette, die den Namen des Empfängers, Käufers oder der Kontaktperson an der Adresse angibt.
- [`ContactAddress.region`](/de/docs/Web/API/ContactAddress/region) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenkette, die die höchste administrative Unterteilung des Landes enthält, zum Beispiel ein Bundesland, eine Provinz, ein Oblast oder eine Präfektur.
- [`ContactAddress.sortingCode`](/de/docs/Web/API/ContactAddress/sortingCode) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenkette, die einen postalischen Sortiercode bereitstellt, wie er in Frankreich verwendet wird.

## Instanz-Methoden

- [`ContactAddress.toJSON()`](/de/docs/Web/API/ContactAddress/toJSON) {{experimental_inline}}
  - : Ein Standard-Serializer, der eine JSON-Darstellung der Eigenschaften des `ContactAddress`-Objekts zurückgibt.

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
