---
title: "ContactsManager: select() Methode"
short-title: select()
slug: Web/API/ContactsManager/select
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die **`select()`** Methode der [`ContactsManager`](/de/docs/Web/API/ContactsManager) Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das, wenn es aufgelöst wird, dem Benutzer einen Kontaktpicker präsentiert, der es ihm ermöglicht, Kontakt(e) auszuwählen, die er teilen möchte. Diese Methode erfordert eine Benutzerinteraktion, damit das {{jsxref('Promise')}} aufgelöst wird.

## Syntax

```js-nolint
select(properties)
select(properties, options)
```

### Parameter

- `properties`
  - : Ein Array von {{jsxref('String', 'Strings')}}, die definieren, welche Informationen aus einem Kontakt abgerufen werden sollen. Erlaubte Werte sind wie folgt:
    - `'name'`: Der Name des Kontakts.
    - `'tel'`: Die Telefonnummer(n) des Kontakts.
    - `'email'`: Die E-Mail-Adresse des Kontakts.
    - `'address'`: Die Postadresse des Kontakts.
    - `'icon'`: Das Avatarbild des Kontakts.

- `options` {{optional_inline}}
  - : Optionen sind wie folgt:
    - `multiple`
      - : Ein Boolean, der es erlaubt, mehrere Kontakte auszuwählen. Der Standardwert ist `false`.

### Rückgabewert

Gibt ein {{jsxref('Promise')}} zurück, das sich mit einem Array von Objekten auflöst, die Kontaktinformationen enthalten. Jedes Objekt repräsentiert einen einzelnen Kontakt und kann die folgenden Eigenschaften enthalten:

- `address`
  - : Ein {{jsxref("Array")}} von [`ContactAddress`](/de/docs/Web/API/ContactAddress) Objekten, von denen jedes die Details einer eindeutigen physischen Adresse enthält.
- `email`
  - : Ein Array von Strings, das E-Mail-Adressen enthält.
- `icon`
  - : Ein Array von [`Blob`](/de/docs/Web/API/Blob) Objekten, die Bilder einer Person enthalten.
- `name`
  - : Ein Array von Strings, von denen jeder einen eindeutigen Namen einer Person enthält.
- `tel`
  - : Ein Array von Strings, von denen jeder eine eindeutige Telefonnummer einer Person enthält.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Browsing-Kontext nicht auf oberster Ebene ist, wenn der Kontaktpicker eine Markierung anzeigt, die einen bereits vorhandenen Kontaktpicker anzeigt, da zu jedem Zeitpunkt nur ein Picker existieren kann, oder wenn das Starten eines Kontaktpickers fehlschlägt.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Methode nicht durch [Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ausgelöst wurde.
- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn `properties` leer ist oder wenn eine der angegebenen Eigenschaften nicht unterstützt wird.

## Sicherheit

{{Glossary("Transient_activation", "Transiente Aktivierung")}} ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel setzt ein Array von Eigenschaften, die für jeden Kontakt abgerufen werden sollen, und setzt ein Optionsobjekt, um die Auswahl mehrerer Kontakte zu ermöglichen.

Eine asynchrone Funktion wird dann definiert, die die `select()` Methode verwendet, um dem Benutzer eine Kontaktpicker-Oberfläche zu präsentieren und die gewählten Ergebnisse zu verarbeiten.
`handleResults()` ist eine vom Entwickler definierte Funktion.

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

### Auswahl nur mit unterstützten Eigenschaften

Das folgende Beispiel verwendet [`getProperties()`](/de/docs/Web/API/ContactsManager/getProperties), um sicherzustellen, dass nur unterstützte Eigenschaften übergeben werden. Andernfalls könnte `select()` einen {{jsxref("TypeError")}} auslösen. `handleResults()` ist eine vom Entwickler definierte Funktion.

```js
const supportedProperties = await navigator.contacts.getProperties();

async function getContacts() {
  try {
    const contacts = await navigator.contacts.select(supportedProperties);
    handleResults(contacts);
  } catch (ex) {
    // Handle any errors here.
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
