---
title: "ContactsManager: select()-Methode"
short-title: select()
slug: Web/API/ContactsManager/select
l10n:
  sourceCommit: 72f93ec102520a7fd82aef7ed844fdbca9368565
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die **`select()`**-Methode der
{{domxref("ContactsManager")}}-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das, wenn es aufgelöst wird, dem Benutzer einen Kontaktpicker präsentiert, mit dem er Kontakt(e) auswählen kann, die er teilen möchte. Diese Methode erfordert eine Benutzerinteraktion, damit das {{jsxref('Promise')}} aufgelöst wird.

## Syntax

```js-nolint
select(properties)
select(properties, options)
```

### Parameter

- `properties`

  - : Ein Array von {{jsxref('String', 'Strings')}}, die definieren, welche Informationen von einem Kontakt abgerufen werden sollen. Erlaubte Werte sind wie folgt:

    - `'name'`: Der Name des Kontakts.
    - `'tel'`: Die Telefonnummer(n) des Kontakts.
    - `'email'`: Die E-Mail-Adresse des Kontakts.
    - `'address'`: Die Postadresse des Kontakts.
    - `'icon'`: Das Avatar des Kontakts.

- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `multiple`
      - : Ein Boolean, der die Auswahl mehrerer Kontakte ermöglicht. Standardmäßig ist dies `false`.

### Rückgabewert

Gibt ein {{jsxref('Promise')}} zurück, das mit einem Array von Objekten aufgelöst wird, die Kontaktinformationen enthalten. Jedes Objekt repräsentiert einen einzelnen Kontakt und kann folgende Eigenschaften enthalten:

- `address`
  - : Ein {{jsxref("Array")}} von {{domxref("ContactAddress")}}-Objekten, die jeweils spezifische Details einer eindeutigen physischen Adresse enthalten.
- `email`
  - : Ein Array von Strings, die E-Mail-Adressen enthalten.
- `icon`
  - : Ein Array von {{domxref("Blob")}}-Objekten, die Bilder einer Person enthalten.
- `name`
  - : Ein Array von Strings, die jeweils einen eindeutigen Namen einer Person enthalten.
- `tel`
  - : Ein Array von Strings, die jeweils eine eindeutige Telefonnummer einer Person enthalten.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn der Browsing-Kontext nicht auf oberster Ebene ist, wenn der Kontaktpicker ein Flag zeigt, das einen bereits vorhandenen Kontaktpicker anzeigt, da immer nur ein Picker gleichzeitig existieren kann, oder wenn das Starten eines Kontaktpickers fehlschlug.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn die Methode nicht durch [Benutzeraktivierung](/de/docs/Web/Security/User_activation) ausgelöst wird.
- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn `properties` leer ist oder wenn einer der angegebenen Eigenschaften nicht unterstützt wird.

## Sicherheit

{{Glossary("Transient activation")}} ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel legt ein Array von Eigenschaften fest, die für jeden Kontakt abgerufen werden sollen, sowie ein Optionsobjekt, das die Auswahl mehrerer Kontakte erlaubt.

Eine asynchrone Funktion wird dann definiert, die die `select()`-Methode verwendet, um dem Benutzer ein Kontaktpicker-Interface zu präsentieren und die ausgewählten Ergebnisse zu verarbeiten. `handleResults()` ist eine vom Entwickler definierte Funktion.

```js
const props = ["name", "email", "tel", "address", "icon"];
const opts = { multiple: true };

async function getContacts() {
  try {
    const contacts = await navigator.contacts.select(props, opts);
    handleResults(contacts);
  } catch (ex) {
    // Behandeln Sie hier alle Fehler.
  }
}
```

### Auswahl nur mit unterstützten Eigenschaften

Im folgenden Beispiel wird {{domxref("ContactsManager.getProperties", "getProperties()")}} verwendet, um sicherzustellen, dass nur unterstützte Eigenschaften übergeben werden. Andernfalls könnte `select()` einen {{jsxref("TypeError")}} auslösen. `handleResults()` ist eine vom Entwickler definierte Funktion.

```js
const supportedProperties = await navigator.contacts.getProperties();

async function getContacts() {
  try {
    const contacts = await navigator.contacts.select(supportedProperties);
    handleResults(contacts);
  } catch (ex) {
    // Behandeln Sie hier alle Fehler.
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
