---
title: Kontakt-Auswahl-API
slug: Web/API/Contact_Picker_API
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{securecontext_header}}{{DefaultAPISidebar("Contact Picker API")}}{{SeeCompatTable}}

Die Kontakt-Auswahl-API ermöglicht es Benutzerinnen und Benutzern, Einträge aus ihrem Kontaktverzeichnis auszuwählen und begrenzte Details der ausgewählten Einträge mit einer Website oder Anwendung zu teilen.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über {{domxref("WorkerNavigator")}} zugänglich).

## Konzepte und Verwendung der Kontakt-Auswahl-API

Der Zugriff auf Kontakte ist seit langem eine Funktion, die in nativen Anwendungen verfügbar ist. Die Contact Picker API bringt diese Funktionalität in Webanwendungen.

Anwendungsfälle umfassen das Auswählen von Kontakten, um über eine E-Mail oder Chat-Anwendung Nachrichten zu senden, das Auswählen einer Telefonnummer von Kontakten zur Nutzung mit Voice over IP (VOIP) oder zum Entdecken von Kontakten, die bereits einer sozialen Plattform beigetreten sind. Benutzeragenten können auch ein konsistentes Erlebnis mit anderen Anwendungen auf einem Gerät des Benutzers bieten.

Wenn die {{domxref('ContactsManager.select', 'select')}}-Methode der {{domxref('ContactsManager')}}-Schnittstelle aufgerufen wird, wird dem Benutzer ein Kontaktwähler angezeigt, über den er dann Kontaktinformationen auswählen kann, die er mit der Webanwendung teilen möchte. Eine Benutzerinteraktion ist erforderlich, bevor die Erlaubnis zum Anzeigen des Kontaktwählers erteilt wird, und der Zugriff auf Kontakte ist nicht persistent; der Benutzer muss jedes Mal, wenn die Anwendung eine Anfrage stellt, den Zugriff gewähren.

Diese API ist nur aus einem sicheren top-level Browsing-Kontext verfügbar und berücksichtigt sehr genau die Sensibilität und den Datenschutz von Kontaktdaten. Die Verantwortung liegt bei der Benutzerin oder dem Benutzer, Daten zum Teilen auszuwählen, und es sind nur spezifische Daten für ausgewählte Kontakte erlaubt, ohne Zugriff auf Daten anderer Kontakte.

## Schnittstellen

- {{domxref("ContactAddress")}}
  - : Repräsentiert eine physische Adresse.
- {{domxref("ContactsManager")}}
  - : Bietet eine Möglichkeit für Benutzerinnen und Benutzer, ausgewählte Details von Kontakten mit einer Webanwendung zu teilen.
- {{domxref("Navigator.contacts")}}
  - : Gibt eine {{domxref("ContactsManager")}} Objektinstanz zurück, von der aus alle anderen Funktionen zugänglich sind.

## Beispiele

### Funktionsprüfung

Der folgende Code überprüft, ob die Kontakt-Auswahl-API unterstützt wird.

```js
const supported = "contacts" in navigator;
```

### Überprüfung unterstützter Eigenschaften

Die folgende asynchrone Funktion verwendet die Methode `getProperties()`, um unterstützte Eigenschaften zu überprüfen.

```js
async function checkProperties() {
  const supportedProperties = await navigator.contacts.getProperties();
  if (supportedProperties.includes("name")) {
    // Code für die Unterstützung von Namen ausführen
  }
  if (supportedProperties.includes("email")) {
    // Code für die Unterstützung von E-Mails ausführen
  }
  if (supportedProperties.includes("tel")) {
    // Code für die Unterstützung von Telefonnummern ausführen
  }
  if (supportedProperties.includes("address")) {
    // Code für die Unterstützung von Adressen ausführen
  }
  if (supportedProperties.includes("icon")) {
    // Code für die Unterstützung von Avataren ausführen
  }
}
```

### Auswahl von Kontakten

Das folgende Beispiel legt ein Array von Eigenschaften fest, die für jeden Kontakt abgerufen werden sollen, sowie ein Optionsobjekt, um die Auswahl mehrerer Kontakte zu ermöglichen.

Eine asynchrone Funktion wird dann definiert, die die Methode `select()` verwendet, um den Benutzer mit einer Kontaktwähler-Schnittstelle zu konfrontieren und die ausgewählten Ergebnisse zu verarbeiten.

```js
const props = ["name", "email", "tel", "address", "icon"];
const opts = { multiple: true };

async function getContacts() {
  try {
    const contacts = await navigator.contacts.select(props, opts);
    handleResults(contacts);
  } catch (ex) {
    // Hier Fehler behandeln.
  }
}
```

`handleResults()` ist eine von der Entwicklerin oder dem Entwickler definierte Funktion.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [A Contact Picker for the Web](https://developer.chrome.com/docs/capabilities/web-apis/contact-picker)
- [A Contact Picker demo on glitch](https://contact-picker.glitch.me/)
