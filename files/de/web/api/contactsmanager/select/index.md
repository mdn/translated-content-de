---
title: "ContactsManager: select()-Methode"
short-title: select()
slug: Web/API/ContactsManager/select
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die **`select()`**-Methode des [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Interfaces gibt ein {{jsxref('Promise')}} zurück, welches, wenn es aufgelöst wird, dem Nutzer einen Kontaktwähler präsentiert, der es ihm ermöglicht, Kontakt(e) auszuwählen, die er teilen möchte. Diese Methode erfordert eine Nutzeraktion, damit das {{jsxref('Promise')}} aufgelöst werden kann.

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
    - `'icon'`: Das Avatarbild des Kontakts.

- `options` {{optional_inline}}
  - : Optionen sind wie folgt:
    - `multiple`
      - : Ein Boolescher Wert, der die Auswahl mehrerer Kontakte erlaubt. Der Standardwert ist `false`.

### Rückgabewert

Gibt ein {{jsxref('Promise')}} zurück, das mit einem Array von Objekten, die Kontaktinformationen enthalten, aufgelöst wird. Jedes Objekt stellt einen einzelnen Kontakt dar und kann die folgenden Eigenschaften enthalten:

- `address`
  - : Ein {{jsxref("Array")}} von [`ContactAddress`](/de/docs/Web/API/ContactAddress)-Objekten, die jeweils die Details einer eindeutigen physischen Adresse enthalten.
- `email`
  - : Ein Array von Strings, die E-Mail-Adressen enthalten.
- `icon`
  - : Ein Array von [`Blob`](/de/docs/Web/API/Blob)-Objekten, die Bilder einer Person enthalten.
- `name`
  - : Ein Array von Strings, die jeweils einen eindeutigen Namen einer Person enthalten.
- `tel`
  - : Ein Array von Strings, die jeweils eine eindeutige Telefonnummer einer Person enthalten.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Browser-Kontext nicht im obersten Level ist, wenn der Kontaktwähler ein Flag anzeigt, das einen bereits existierenden Kontaktwähler kennzeichnet, da nur ein Wähler gleichzeitig existieren kann, oder wenn das Starten eines Kontaktwählers fehlgeschlagen ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Methode nicht durch [Nutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ausgelöst wird.
- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn `properties` leer ist oder wenn einer der angegebenen Eigenschaften nicht unterstützt wird.

## Sicherheit

{{Glossary("Transient_activation", "Transiente Aktivierung")}} ist erforderlich. Der Nutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Grundlegendes Beispiel

Im folgenden Beispiel wird ein Array von Eigenschaften festgelegt, die für jeden Kontakt abgerufen werden sollen, sowie ein Optionsobjekt, das die Auswahl mehrerer Kontakte erlaubt.

Eine asynchrone Funktion wird dann definiert, die die `select()`-Methode verwendet, um dem Nutzer ein Kontaktwähler-Interface zu präsentieren und die ausgewählten Ergebnisse zu verarbeiten. `handleResults()` ist eine vom Entwickler definierte Funktion.

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

### Auswahl nur unterstützter Eigenschaften

Im folgenden Beispiel wird [`getProperties()`](/de/docs/Web/API/ContactsManager/getProperties) verwendet, um sicherzustellen, dass nur unterstützte Eigenschaften übergeben werden. Andernfalls könnte `select()` einen {{jsxref("TypeError")}} werfen. `handleResults()` ist eine vom Entwickler definierte Funktion.

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
