---
title: "ContactsManager: select() Methode"
short-title: select()
slug: Web/API/ContactsManager/select
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die **`select()`** Methode der [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das bei Auflösung dem Benutzer einen Kontaktwahldialog präsentiert, mit dem er Kontakte auswählen kann, die er teilen möchte. Diese Methode erfordert eine Benutzeraktion, damit das {{jsxref('Promise')}} aufgelöst werden kann.

## Syntax

```js-nolint
select(properties)
select(properties, options)
```

### Parameter

- `properties`
  - : Ein Array von {{jsxref('String', 'Strings')}}, das definiert, welche Informationen von einem Kontakt abgerufen werden sollen. Erlaubte Werte sind wie folgt:
    - `'name'`: Der Name des Kontakts.
    - `'tel'`: Die Telefonnummer(n) des Kontakts.
    - `'email'`: Die E-Mail-Adresse des Kontakts.
    - `'address'`: Die Postadresse des Kontakts.
    - `'icon'`: Das Avatar des Kontakts.

- `options` {{optional_inline}}
  - : Optionen sind wie folgt:
    - `multiple`
      - : Ein Boolean, das die Auswahl mehrerer Kontakte erlaubt. Standardwert ist `false`.

### Rückgabewert

Gibt ein {{jsxref('Promise')}} zurück, das mit einem Array von Objekten aufgelöst wird, die Kontaktinformationen enthalten. Jedes Objekt repräsentiert einen einzelnen Kontakt und kann die folgenden Eigenschaften enthalten:

- `address`
  - : Ein {{jsxref("Array")}} von [`ContactAddress`](/de/docs/Web/API/ContactAddress)-Objekten, die jeweils Details einer einzigartigen physischen Adresse enthalten.
- `email`
  - : Ein Array von Strings, das E-Mail-Adressen enthält.
- `icon`
  - : Ein Array von [`Blob`](/de/docs/Web/API/Blob)-Objekten, die Bilder einer Person enthalten.
- `name`
  - : Ein Array von Strings, die jeweils einen einzigartigen Namen einer Person enthalten.
- `tel`
  - : Ein Array von Strings, die jeweils eine einzigartige Telefonnummer einer Person enthalten.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Browsing-Kontext nicht auf oberster Ebene ist, wenn der Kontaktwahldialog einen Hinweis darauf anzeigt, dass bereits ein vorhandener Kontaktwahldialog existiert, da immer nur ein Wahldialog gleichzeitig existieren kann, oder wenn das Starten eines Kontaktwahldialogs fehlgeschlagen ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Methode nicht durch [Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ausgelöst wird.
- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn `properties` leer ist oder wenn irgendeine der angegebenen Eigenschaften nicht unterstützt wird.

## Sicherheit

{{Glossary("Transient_activation", "Transiente Aktivierung")}} ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel setzt ein Array von Eigenschaften, die für jeden Kontakt abgerufen werden sollen, und setzt ein Optionsobjekt, um die Auswahl mehrerer Kontakte zu ermöglichen.

Eine asynchrone Funktion wird dann definiert, die die `select()` Methode verwendet, um dem Benutzer eine Kontaktwahlschnittstelle zu präsentieren und die ausgewählten Ergebnisse zu verarbeiten. `handleResults()` ist eine von Entwicklern definierte Funktion.

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

### Auswahl ausschließlich mit unterstützten Eigenschaften

Das folgende Beispiel verwendet [`getProperties()`](/de/docs/Web/API/ContactsManager/getProperties), um sicherzustellen, dass nur unterstützte Eigenschaften übergeben werden. Andernfalls könnte `select()` einen {{jsxref("TypeError")}} werfen. `handleResults()` ist eine von Entwicklern definierte Funktion.

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
