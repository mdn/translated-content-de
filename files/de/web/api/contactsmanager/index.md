---
title: ContactsManager
slug: Web/API/ContactsManager
l10n:
  sourceCommit: f84cdbda4f9c642f57083e013341f170774f0973
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Das **`ContactsManager`** Interface der [Contact Picker API](/de/docs/Web/API/Contact_Picker_API) ermöglicht es Nutzern, Einträge aus ihrer Kontaktliste auszuwählen und begrenzte Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.

Der `ContactsManager` ist über die globale [`navigator.contacts`](/de/docs/Web/API/Navigator/contacts) Eigenschaft verfügbar.

## Instanzmethoden

- [`select()`](/de/docs/Web/API/ContactsManager/select) {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das, wenn es aufgelöst wird, dem Benutzer einen Kontaktpicker präsentiert, der es ihm ermöglicht, die Kontakte auszuwählen, die er teilen möchte.
- [`getProperties()`](/de/docs/Web/API/ContactsManager/getProperties) {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, welches sich mit einem {{jsxref('Array')}} von {{jsxref('String','strings')}} auflöst, die anzeigen, welche Kontakt-Eigenschaften verfügbar sind.

## Beispiele

### Funktionsüberprüfung

Der folgende Code überprüft, ob die Contact Picker API unterstützt wird.

```js
const supported = "contacts" in navigator && "ContactsManager" in window;
```

### Überprüfung auf unterstützte Eigenschaften

Die folgende asynchrone Funktion verwendet die Methode `getProperties`, um nach unterstützten Eigenschaften zu suchen.

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

### Kontakte auswählen

Das folgende Beispiel legt ein Array von Eigenschaften fest, die für jeden Kontakt abgerufen werden sollen, sowie ein Optionsobjekt, das die Auswahl mehrerer Kontakte ermöglicht.

Eine asynchrone Funktion wird dann definiert, die die Methode `select()` verwendet, um dem Benutzer eine Kontaktpicker-Schnittstelle zu präsentieren und die ausgewählten Ergebnisse zu verarbeiten.

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
- [Live-Demo der Contact Picker API](https://mdn.github.io/dom-examples/contact-picker/)
