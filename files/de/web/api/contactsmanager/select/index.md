---
title: "ContactsManager: Methode select()"
short-title: select()
slug: Web/API/ContactsManager/select
l10n:
  sourceCommit: 72f93ec102520a7fd82aef7ed844fdbca9368565
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die **`select()`**-Methode des
[`ContactsManager`](/de/docs/Web/API/ContactsManager)-Interfaces gibt ein {{jsxref('Promise')}} zurück, das, wenn aufgelöst, dem Benutzer einen Kontaktpicker präsentiert, mit dem er Kontakt(e) auswählen kann, die er teilen möchte. Diese Methode erfordert eine Benutzeraktion, damit das {{jsxref('Promise')}} aufgelöst wird.

## Syntax

```js-nolint
select(properties)
select(properties, options)
```

### Parameter

- `properties`

  - : Ein Array von {{jsxref('String', 'Strings')}}, das definieren, welche Informationen von einem Kontakt abgerufen werden sollen. Zulässige Werte sind wie folgt:

    - `'name'`: Der Name des Kontakts.
    - `'tel'`: Die Telefonnummer(n) des Kontakts.
    - `'email'`: Die E-Mail-Adresse des Kontakts.
    - `'address'`: Die Postadresse des Kontakts.
    - `'icon'`: Das Avatarbild des Kontakts.

- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `multiple`
      - : Ein Boolean, der erlaubt, mehrere Kontakte auszuwählen. Der Standardwert ist `false`.

### Rückgabewert

Gibt ein {{jsxref('Promise')}} zurück, das mit einem Array von Objekten, die Kontaktinformationen enthalten, aufgelöst wird. Jedes Objekt repräsentiert einen einzelnen Kontakt und kann die folgenden Eigenschaften enthalten:

- `address`
  - : Ein {{jsxref("Array")}} von [`ContactAddress`](/de/docs/Web/API/ContactAddress)-Objekten, die jeweils spezifische Details einer einzigartigen physischen Adresse enthalten.
- `email`
  - : Ein Array von Strings, das E-Mail-Adressen enthält.
- `icon`
  - : Ein Array von [`Blob`](/de/docs/Web/API/Blob)-Objekten, das Bilder von Einzelpersonen enthält.
- `name`
  - : Ein Array von Strings, die jeweils einen einzigartigen Namen einer Einzelperson enthalten.
- `tel`
  - : Ein Array von Strings, die jeweils eine einzigartige Telefonnummer einer Einzelperson enthalten.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Browsing-Kontext nicht auf oberster Ebene ist, wenn der Kontaktpicker eine Flagge zeigt, die anzeigt, dass bereits ein bestehender Kontaktpicker vorhanden ist, da immer nur ein Picker existieren kann, oder wenn das Starten eines Kontaktpickers fehlgeschlagen ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Methode nicht durch eine [Benutzeraktivierung](/de/docs/Web/Security/User_activation) ausgelöst wird.
- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn `properties` leer ist oder wenn eine der angegebenen Eigenschaften nicht unterstützt wird.

## Sicherheit

Eine [transiente Aktivierung](/de/docs/Glossary/Transient_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Einfache Beispiel

Das folgende Beispiel setzt ein Array von Eigenschaften, die für jeden Kontakt abgerufen werden sollen, sowie ein Optionsobjekt, das die Auswahl mehrerer Kontakte ermöglicht.

Eine asynchrone Funktion wird dann definiert, die die `select()`-Methode verwendet, um dem Benutzer ein Kontaktpicker-Interface zu präsentieren und die ausgewählten Ergebnisse zu verarbeiten. `handleResults()` ist eine vom Entwickler definierte Funktion.

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

Das folgende Beispiel verwendet [`getProperties()`](/de/docs/Web/API/ContactsManager/getProperties), um sicherzustellen, dass nur unterstützte Eigenschaften übergeben werden. Andernfalls könnte `select()` einen {{jsxref("TypeError")}} werfen. `handleResults()` ist eine vom Entwickler definierte Funktion.

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
