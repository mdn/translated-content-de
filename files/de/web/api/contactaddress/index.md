---
title: ContactAddress
slug: Web/API/ContactAddress
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die **`ContactAddress`**-Schnittstelle der [Contact Picker API](/de/docs/Web/API/Contact_Picker_API) stellt eine physische Adresse dar. Instanzen dieser Schnittstelle werden aus der `address`-Eigenschaft der von [`ContactsManager.select()`](/de/docs/Web/API/ContactsManager/select) zurückgegebenen Objekte abgerufen.

Die Materialien zum [Addressing-S42-Standard](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions#addressing-s42-standard) auf der Website des Weltpostvereins können hilfreich sein. Sie enthalten Informationen zu internationalen Standards für Postanschriften.

## Instanzeigenschaften

- [`ContactAddress.addressLine`](/de/docs/Web/API/ContactAddress/addressLine) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein Array von Zeichenfolgen mit den einzelnen Adresszeilen, die nicht durch die anderen Eigenschaften abgedeckt sind. Die genaue Anzahl und der Inhalt variieren je nach Land oder Ort. Enthalten sein können beispielsweise ein Straßenname, eine Hausnummer, eine Wohnungsnummer, eine ländliche Zustellroute, beschreibende Zustellhinweise oder eine Postfachnummer.
- [`ContactAddress.country`](/de/docs/Web/API/ContactAddress/country) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenfolge, die das Land angibt, in dem sich die Adresse befindet, gemäß dem Standard [ISO 3166-1 Alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Die Zeichenfolge wird immer in ihrer kanonischen Form mit Großbuchstaben angegeben. Beispiele für gültige `country`-Werte sind `"US"`, `"GB"`, `"CN"` und `"JP"`.
- [`ContactAddress.city`](/de/docs/Web/API/ContactAddress/city) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenfolge, die die Stadt oder den Ort der Adresse angibt.
- [`ContactAddress.dependentLocality`](/de/docs/Web/API/ContactAddress/dependentLocality) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenfolge, die einen untergeordneten Ort oder Ortsteil innerhalb einer Stadt angibt, beispielsweise ein Viertel, einen Stadtbezirk, einen Bezirk oder eine „dependent locality“ im Vereinigten Königreich.
- [`ContactAddress.organization`](/de/docs/Web/API/ContactAddress/organization) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenfolge, die den Namen der Organisation, Firma, des Unternehmens oder der Einrichtung an der Adresse angibt.
- [`ContactAddress.phone`](/de/docs/Web/API/ContactAddress/phone) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenfolge, die die Telefonnummer des Empfängers oder der Kontaktperson angibt.
- [`ContactAddress.postalCode`](/de/docs/Web/API/ContactAddress/postalCode) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenfolge, die eine für die Postsortierung verwendete Kennung angibt, beispielsweise den ZIP-Code in den Vereinigten Staaten oder den PIN-Code in Indien.
- [`ContactAddress.recipient`](/de/docs/Web/API/ContactAddress/recipient) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenfolge, die den Namen des Empfängers, Käufers oder der Kontaktperson an der Adresse angibt.
- [`ContactAddress.region`](/de/docs/Web/API/ContactAddress/region) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenfolge, die die oberste Verwaltungseinheit des Landes angibt, beispielsweise einen Bundesstaat, eine Provinz, eine Oblast oder eine Präfektur.
- [`ContactAddress.sortingCode`](/de/docs/Web/API/ContactAddress/sortingCode) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenfolge mit einem Postsortiercode, wie er beispielsweise in Frankreich verwendet wird.

## Instanzmethoden

- [`ContactAddress.toJSON()`](/de/docs/Web/API/ContactAddress/toJSON) {{experimental_inline}}
  - : Gibt ein einfaches, JSON-serialisierbares Objekt zurück, das das `ContactAddress`-Objekt repräsentiert. Wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Beispiele

Das folgende Beispiel fordert die Benutzerin oder den Benutzer auf, Kontakte auszuwählen, und gibt anschließend die erste zurückgegebene Adresse auf der Konsole aus.

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
