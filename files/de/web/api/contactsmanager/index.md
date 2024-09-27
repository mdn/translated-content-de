---
title: ContactsManager
slug: Web/API/ContactsManager
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Das **`ContactsManager`**-Interface der [Contact Picker API](/de/docs/Web/API/Contact_Picker_API) ermöglicht es Nutzern, Einträge aus ihrer Kontaktliste auszuwählen und begrenzte Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.

Das `ContactsManager` steht über die globale [`navigator.contacts`](/de/docs/Web/API/Navigator/contacts) Eigenschaft zur Verfügung.

## Instanzmethoden

- [`select()`](/de/docs/Web/API/ContactsManager/select) {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das, wenn es aufgelöst wird, dem Nutzer einen Kontaktpicker präsentiert, der es ihnen erlaubt, die Kontakte auszuwählen, die sie teilen möchten.
- [`getProperties()`](/de/docs/Web/API/ContactsManager/getProperties) {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem {{jsxref('Array')}} von {{jsxref('String','strings')}} aufgelöst wird, die angeben, welche Kontakteigenschaften verfügbar sind.

## Beispiele

### Funktionsüberprüfung

Der folgende Code prüft, ob die Contact Picker API unterstützt wird.

```js
const supported = "contacts" in navigator && "ContactsManager" in window;
```

### Überprüfung auf unterstützte Eigenschaften

Die folgende asynchrone Funktion verwendet die `getProperties`-Methode, um die unterstützten Eigenschaften zu überprüfen.

```js
async function checkProperties() {
  const supportedProperties = await navigator.contacts.getProperties();
  if (supportedProperties.includes("name")) {
    // run code for name support
  }
  if (supportedProperties.includes("email")) {
    // run code for email support
  }
  if (supportedProperties.includes("tel")) {
    // run code for telephone number support
  }
  if (supportedProperties.includes("address")) {
    // run code for address support
  }
  if (supportedProperties.includes("icon")) {
    // run code for avatar support
  }
}
```

### Auswahl von Kontakten

Das folgende Beispiel legt ein Array von Eigenschaften fest, die für jeden Kontakt abgerufen werden sollen, und ein Optionsobjekt, das die Auswahl mehrerer Kontakte erlaubt.

Dann wird eine asynchrone Funktion definiert, die die `select()`-Methode verwendet, um dem Nutzer eine Kontaktpickerschnittstelle zu präsentieren und die ausgewählten Ergebnisse zu bearbeiten.

```js
const props = ["name", "email", "tel", "address", "icon"];
const opts = { multiple: true };

async function getContacts() {
  try {
    const contacts = await navigator.contacts.select(props, opts);
    handleResults(contacts);
  } catch (ex) {
    // Handle any errors here.
  }
}
```

`handleResults()` ist eine vom Entwickler definierte Funktion.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Kontaktpicker für das Web](https://developer.chrome.com/docs/capabilities/web-apis/contact-picker)
- [Eine Contact Picker-Demo auf Glitch](https://contact-picker.glitch.me/)
