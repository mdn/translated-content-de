---
title: Contact Picker API
slug: Web/API/Contact_Picker_API
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{securecontext_header}}{{DefaultAPISidebar("Contact Picker API")}}{{SeeCompatTable}}

Die Contact Picker API ermöglicht es Benutzern, Einträge aus ihrer Kontaktliste auszuwählen und begrenzte Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zugänglich).

## Konzepte und Nutzung der Contact Picker API

Der Zugriff auf Kontakte war schon lange eine Funktion, die in nativen Anwendungen verfügbar ist. Die Contacts Picker API bringt diese Funktionalität zu Webanwendungen.

Anwendungsfälle sind unter anderem das Auswählen von Kontakten zum Versenden von Nachrichten über eine E-Mail- oder Chat-Anwendung, das Auswählen einer Telefonnummer für die Nutzung mit Voice over IP (VOIP) oder das Entdecken von Kontakten, die bereits einer sozialen Plattform beigetreten sind. Benutzeragenten können zudem eine konsistente Erfahrung mit anderen Anwendungen auf dem Gerät des Benutzers bieten.

Wenn die Methode [`select`](/de/docs/Web/API/ContactsManager/select) der Schnittstelle [`ContactsManager`](/de/docs/Web/API/ContactsManager) aufgerufen wird, wird dem Benutzer ein Kontakt-Selektor angezeigt, über den sie dann Kontaktinformationen auswählen können, um sie mit der Webanwendung zu teilen. Eine Benutzerinteraktion ist erforderlich, bevor die Berechtigung zum Anzeigen des Kontaktwählers gewährt wird, und der Zugriff auf Kontakte ist nicht persistent; der Benutzer muss jedes Mal, wenn eine Anfrage von der Anwendung gestellt wird, den Zugriff gewähren.

Diese API ist nur aus einem sicheren, übergeordneten Browsing-Kontext verfügbar und berücksichtigt sehr sorgfältig die Sensibilität und den Datenschutz von Kontaktdaten. Die Verantwortung liegt beim Benutzer, die Daten auszuwählen, die geteilt werden sollen, und es sind nur spezifische Daten für ausgewählte Kontakte zugelassen, ohne Zugriff auf Daten anderer Kontakte.

## Schnittstellen

- [`ContactAddress`](/de/docs/Web/API/ContactAddress)
  - : Repräsentiert eine physische Adresse.
- [`ContactsManager`](/de/docs/Web/API/ContactsManager)
  - : Bietet eine Möglichkeit für Benutzer, begrenzte Kontaktinformationen mit einer Webanwendung auszuwählen und zu teilen.
- [`Navigator.contacts`](/de/docs/Web/API/Navigator/contacts)
  - : Gibt eine Instanz des [`ContactsManager`](/de/docs/Web/API/ContactsManager) Objekts zurück, von der aus alle anderen Funktionen aufgerufen werden können.

## Beispiele

### Funktionsprüfung

Der folgende Code prüft, ob die Contact Picker API unterstützt wird.

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

### Kontakte auswählen

Das folgende Beispiel legt ein Array von Eigenschaften fest, die für jeden Kontakt abgerufen werden sollen, sowie ein Optionsobjekt, das erlaubt, mehrere Kontakte auszuwählen.

Eine asynchrone Funktion wird dann definiert, die die `select()`-Methode verwendet, um dem Benutzer eine Kontaktwähler-Benutzeroberfläche zu präsentieren und die ausgewählten Ergebnisse zu behandeln.

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
