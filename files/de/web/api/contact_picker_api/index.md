---
title: Contact Picker API
slug: Web/API/Contact_Picker_API
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{securecontext_header}}{{DefaultAPISidebar("Contact Picker API")}}{{SeeCompatTable}}

Die Contact Picker API ermöglicht es Benutzern, Einträge aus ihrer Kontaktliste auszuwählen und begrenzte Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zugänglich).

## Konzepte und Verwendung der Contact Picker API

Der Zugriff auf Kontakte war lange Zeit eine Funktion, die in nativen Anwendungen verfügbar war. Die Contacts Picker API bringt diese Funktionalität in Webanwendungen.

Anwendungsfälle umfassen das Auswählen von Kontakten, um sie über eine E-Mail- oder Chat-Anwendung zu benachrichtigen, die Auswahl der Telefonnummer eines Kontakts für die Nutzung mit Voice over IP (VOIP) oder das Entdecken von Kontakten, die bereits einer sozialen Plattform beigetreten sind. Benutzeragenten können auch ein konsistentes Erlebnis mit anderen Anwendungen auf dem Gerät eines Benutzers bieten.

Beim Aufruf der Methode [`select`](/de/docs/Web/API/ContactsManager/select) der Schnittstelle [`ContactsManager`](/de/docs/Web/API/ContactsManager) wird dem Benutzer ein Kontakt-Picker präsentiert, wobei er dann Kontaktinformationen auswählen kann, die mit der Webanwendung geteilt werden. Eine Benutzerinteraktion ist erforderlich, bevor die Erlaubnis zum Anzeigen des Kontakt-Pickers erteilt wird, und der Zugriff auf Kontakte ist nicht persistent; der Benutzer muss jedes Mal, wenn die Anwendung eine Anfrage stellt, den Zugriff gewähren.

Diese API ist nur in einem sicheren Top-Level-Browsing-Kontext verfügbar und berücksichtigt sehr genau die Sensibilität und Privatsphäre von Kontaktdaten. Die Verantwortung liegt beim Benutzer, Daten zum Teilen auszuwählen, und es können nur bestimmte Daten für ausgewählte Kontakte freigegeben werden, ohne Zugriff auf Daten anderer Kontakte.

## Schnittstellen

- [`ContactAddress`](/de/docs/Web/API/ContactAddress)
  - : Repräsentiert eine physische Adresse.
- [`ContactsManager`](/de/docs/Web/API/ContactsManager)
  - : Bietet eine Möglichkeit, Benutzern auszuwählen und begrenzte Details von Kontakten mit einer Webanwendung zu teilen.
- [`Navigator.contacts`](/de/docs/Web/API/Navigator/contacts)
  - : Gibt eine Instanz des [`ContactsManager`](/de/docs/Web/API/ContactsManager) Objekts zurück, von der aus alle anderen Funktionen zugänglich sind.

## Beispiele

### Funktionsprüfung

Der folgende Code überprüft, ob die Contact Picker API unterstützt wird.

```js
const supported = "contacts" in navigator;
```

### Überprüfung von unterstützten Eigenschaften

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

Im folgenden Beispiel wird ein Array von Eigenschaften festgelegt, die für jeden Kontakt abgerufen werden sollen, sowie ein Optionsobjekt, um die Auswahl mehrerer Kontakte zu ermöglichen.

Eine asynchrone Funktion wird definiert, die die Methode `select()` verwendet, um dem Benutzer eine Kontakt-Picker-Schnittstelle zu präsentieren und die ausgewählten Ergebnisse zu verarbeiten.

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

- [Ein Kontakt-Picker für das Web](https://developer.chrome.com/docs/capabilities/web-apis/contact-picker)
- [Live-Demo der Contact Picker API](https://mdn.github.io/dom-examples/contact-picker/)
