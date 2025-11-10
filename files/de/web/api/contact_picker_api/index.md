---
title: Contact Picker API
slug: Web/API/Contact_Picker_API
l10n:
  sourceCommit: f84cdbda4f9c642f57083e013341f170774f0973
---

{{securecontext_header}}{{DefaultAPISidebar("Contact Picker API")}}{{SeeCompatTable}}

Die Contact Picker API ermöglicht es Benutzern, Einträge aus ihrer Kontaktliste auszuwählen und begrenzte Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht zugänglich via [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)).

## Konzepte und Verwendung der Contact Picker API

Der Zugriff auf Kontakte war lange eine Funktion, die in nativen Anwendungen verfügbar war. Die Contacts Picker API bringt diese Funktionalität in Webanwendungen.

Anwendungsfälle umfassen das Auswählen von Kontakten zum Versenden von Nachrichten über eine E-Mail- oder Chat-Anwendung, das Auswählen einer Telefonnummer eines Kontakts zur Verwendung mit Voice over IP (VOIP) oder das Auffinden von Kontakten, die sich bereits einer sozialen Plattform angeschlossen haben. Benutzeragenten können auch eine konsistente Erfahrung mit anderen Anwendungen auf dem Gerät der Benutzer bieten.

Beim Aufrufen der Methode [`select`](/de/docs/Web/API/ContactsManager/select) der [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Schnittstelle wird dem Benutzer ein Kontaktwähler präsentiert, über den er dann Kontaktinformationen zur weiteren Verwendung mit der Webanwendung auswählen kann. Eine Benutzerinteraktion ist erforderlich, bevor die Erlaubnis erteilt wird, den Kontaktwähler anzuzeigen, und der Zugriff auf Kontakte ist nicht persistent; der Benutzer muss den Zugriff jedes Mal gewähren, wenn die Anwendung eine Anfrage stellt.

Diese API ist nur in einem sicheren Top-Level-Browsing-Kontext verfügbar und berücksichtigt sehr sorgfältig die Empfindlichkeit und den Datenschutz von Kontaktdaten. Die Verantwortung liegt beim Benutzer, die zu teilenden Daten auszuwählen, und es werden nur spezifische Daten für ausgewählte Kontakte zugelassen, ohne Zugriff auf Daten anderer Kontakte.

## Schnittstellen

- [`ContactAddress`](/de/docs/Web/API/ContactAddress)
  - : Stellt eine physische Adresse dar.
- [`ContactsManager`](/de/docs/Web/API/ContactsManager)
  - : Bietet eine Möglichkeit für Benutzer, begrenzte Details von Kontakten mit einer Webanwendung zu teilen.
- [`Navigator.contacts`](/de/docs/Web/API/Navigator/contacts)
  - : Gibt eine Instanz des [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Objekts zurück, von dem aus alle anderen Funktionalitäten zugänglich sind.

## Beispiele

### Funktionsprüfung

Der folgende Code prüft, ob die Contact Picker API unterstützt wird.

```js
const supported = "contacts" in navigator;
```

### Überprüfung der unterstützten Eigenschaften

Die folgende asynchrone Funktion verwendet die Methode `getProperties()`, um unterstützte Eigenschaften zu überprüfen.

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

Das folgende Beispiel legt ein Array von Eigenschaften fest, die für jeden Kontakt abgerufen werden sollen, und setzt ein Optionsobjekt, um die Auswahl mehrerer Kontakte zu ermöglichen.

Eine asynchrone Funktion wird dann definiert, die die Methode `select()` verwendet, um dem Benutzer eine Kontaktwähleroberfläche zu präsentieren und die ausgewählten Ergebnisse zu bearbeiten.

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

- [Ein Contact Picker für das Web](https://developer.chrome.com/docs/capabilities/web-apis/contact-picker)
- [Contact Picker API Live-Demo](https://mdn.github.io/dom-examples/contact-picker/)
