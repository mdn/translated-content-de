---
title: ContactsManager
slug: Web/API/ContactsManager
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Das **`ContactsManager`**-Interface der [Contact Picker API](/de/docs/Web/API/Contact_Picker_API) ermöglicht es Benutzern, Einträge aus ihrer Kontaktliste auszuwählen und begrenzte Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.

Der `ContactsManager` ist über die globale {{domxref('navigator.contacts')}}-Eigenschaft verfügbar.

## Instanzmethoden

- {{domxref('ContactsManager.select','select()')}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das, wenn es aufgelöst wird, dem Benutzer einen Kontaktpicker präsentiert, der es ihm ermöglicht, Kontakte auszuwählen, die er teilen möchte.
- {{domxref('ContactsManager.getProperties()','getProperties()')}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem {{jsxref('Array')}} von {{jsxref('String','strings')}} aufgelöst wird, welche angeben, welche Kontakteigenschaften verfügbar sind.

## Beispiele

### Feature-Erkennung

Der folgende Code prüft, ob die Contact Picker API unterstützt wird.

```js
const supported = "contacts" in navigator && "ContactsManager" in window;
```

### Überprüfung auf unterstützte Eigenschaften

Die folgende asynchrone Funktion verwendet die Methode `getProperties`, um unterstützte Eigenschaften zu überprüfen.

```js
async function checkProperties() {
  const supportedProperties = await navigator.contacts.getProperties();
  if (supportedProperties.includes("name")) {
    // Code für Namensunterstützung ausführen
  }
  if (supportedProperties.includes("email")) {
    // Code für E-Mail-Unterstützung ausführen
  }
  if (supportedProperties.includes("tel")) {
    // Code für Telefonnummernunterstützung ausführen
  }
  if (supportedProperties.includes("address")) {
    // Code für Adressunterstützung ausführen
  }
  if (supportedProperties.includes("icon")) {
    // Code für Avatar-Unterstützung ausführen
  }
}
```

### Kontakte auswählen

Das folgende Beispiel legt ein Array von Eigenschaften fest, die für jeden Kontakt abgerufen werden sollen, sowie ein Optionsobjekt, um die Auswahl mehrerer Kontakte zu ermöglichen.

Eine asynchrone Funktion wird dann definiert, die die Methode `select()` verwendet, um dem Benutzer eine Kontaktpicker-Oberfläche zu präsentieren und die ausgewählten Ergebnisse zu bearbeiten.

```js
const props = ["name", "email", "tel", "address", "icon"];
const opts = { multiple: true };

async function getContacts() {
  try {
    const contacts = await navigator.contacts.select(props, opts);
    handleResults(contacts);
  } catch (ex) {
    // Fehler hier behandeln.
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
- [A Contact Picker demo on glitch](https://contact-picker.glitch.me/)
