---
title: ContactsManager
slug: Web/API/ContactsManager
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Das **`ContactsManager`**-Interface der [Contact Picker API](/de/docs/Web/API/Contact_Picker_API) ermöglicht es Benutzern, Einträge aus ihrer Kontaktliste auszuwählen und eingeschränkte Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.

Der `ContactsManager` ist über die globale Eigenschaft [`navigator.contacts`](/de/docs/Web/API/Navigator/contacts) verfügbar.

## Instanzmethoden

- [`select()`](/de/docs/Web/API/ContactsManager/select) {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das, wenn es aufgelöst wird, dem Benutzer einen Kontaktpicker präsentiert, mit dem Kontakte ausgewählt werden können, die sie teilen möchten.
- [`getProperties()`](/de/docs/Web/API/ContactsManager/getProperties) {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem {{jsxref('Array')}} von {{jsxref('String','strings')}} aufgelöst wird, die angeben, welche Kontakteigenschaften verfügbar sind.

## Beispiele

### Feature-Erkennung

Der folgende Code überprüft, ob die Contact Picker API unterstützt wird.

```js
const supported = "contacts" in navigator && "ContactsManager" in window;
```

### Überprüfen der unterstützten Eigenschaften

Die folgende asynchrone Funktion verwendet die Methode `getProperties`, um die unterstützten Eigenschaften zu überprüfen.

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

### Auswählen von Kontakten

Das folgende Beispiel legt ein Array von Eigenschaften fest, die für jeden Kontakt abgerufen werden sollen, sowie ein Optionsobjekt, um die Auswahl mehrerer Kontakte zu ermöglichen.

Eine asynchrone Funktion wird dann definiert, die die Methode `select()` verwendet, um dem Benutzer eine Kontaktpicker-Oberfläche zu präsentieren und die gewählten Ergebnisse zu verarbeiten.

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

- [A Contact Picker for the Web](https://developer.chrome.com/docs/capabilities/web-apis/contact-picker)
- [Ein Contact Picker-Demo auf glitch](https://contact-picker.glitch.me/)
