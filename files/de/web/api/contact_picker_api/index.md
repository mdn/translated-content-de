---
title: Contact Picker API
slug: Web/API/Contact_Picker_API
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{securecontext_header}}{{DefaultAPISidebar("Contact Picker API")}}{{SeeCompatTable}}

Die Contact Picker API ermöglicht es Benutzern, Einträge aus ihrer Kontaktliste auszuwählen und begrenzte Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web-Workers](/de/docs/Web/API/Web_Workers_API) (nicht bereitgestellt über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)).

## Konzepte und Verwendung der Contact Picker API

Der Zugriff auf Kontakte ist seit langem eine Funktion, die in nativen Anwendungen verfügbar ist. Die Contacts Picker API bringt diese Funktionalität in Webanwendungen.

Anwendungsfälle umfassen das Auswählen von Kontakten für Nachrichten über eine E-Mail- oder Chat-Anwendung, die Auswahl einer Telefonnummer eines Kontakts für die Nutzung mit Voice over IP (VOIP) oder das Entdecken von Kontakten, die einer sozialen Plattform bereits beigetreten sind. Benutzeragenten können auch eine konsistente Erfahrung mit anderen Anwendungen auf dem Gerät eines Benutzers bieten.

Beim Aufruf der [`select`](/de/docs/Web/API/ContactsManager/select)-Methode der [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Schnittstelle wird dem Benutzer ein Contact Picker angezeigt, über den sie dann Kontaktinformationen zur Freigabe mit der Webanwendung auswählen können. Eine Benutzerinteraktion ist erforderlich, bevor die Erlaubnis zum Anzeigen des Contact Pickers erteilt wird, und der Zugriff auf Kontakte ist nicht persistent; der Benutzer muss bei jeder Anfrage durch die Anwendung den Zugriff erneut erlauben.

Diese API ist nur aus einem sicheren Top-Level-Browsing-Kontext verfügbar und berücksichtigt sehr sorgfältig die Sensibilität und den Datenschutz von Kontaktdaten. Es liegt in der Verantwortung des Benutzers, welche Daten er teilt. Es werden nur spezifische Daten für ausgewählte Kontakte erlaubt, ohne Zugang zu irgendwelchen Daten anderer Kontakte.

## Schnittstellen

- [`ContactAddress`](/de/docs/Web/API/ContactAddress)
  - : Repräsentiert eine physische Adresse.
- [`ContactsManager`](/de/docs/Web/API/ContactsManager)
  - : Bietet eine Möglichkeit für Benutzer, begrenzte Details von Kontakten mit einer Webanwendung auszuwählen und zu teilen.
- [`Navigator.contacts`](/de/docs/Web/API/Navigator/contacts)
  - : Gibt eine [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Objektinstanz zurück, über die alle anderen Funktionen abgerufen werden können.

## Beispiele

### Feature-Erkennung

Der folgende Code überprüft, ob die Contact Picker API unterstützt wird.

```js
const supported = "contacts" in navigator;
```

### Überprüfen der unterstützten Eigenschaften

Die folgende asynchrone Funktion verwendet die `getProperties()`-Methode, um unterstützte Eigenschaften zu überprüfen.

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

Das folgende Beispiel setzt ein Array von Eigenschaften, die für jeden Kontakt abgerufen werden sollen, und legt ein Optionsobjekt fest, um die Auswahl mehrerer Kontakte zu ermöglichen.

Es wird dann eine asynchrone Funktion definiert, die die `select()`-Methode verwendet, um dem Benutzer eine Contact Picker-Oberfläche zu zeigen und die ausgewählten Ergebnisse zu verarbeiten.

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
- [A Contact Picker demo on glitch](https://contact-picker.glitch.me/)
