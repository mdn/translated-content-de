---
title: "ContactsManager: select() Methode"
short-title: select()
slug: Web/API/ContactsManager/select
l10n:
  sourceCommit: 72f93ec102520a7fd82aef7ed844fdbca9368565
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die **`select()`**-Methode der [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das dem Benutzer, wenn es aufgelöst wird, einen Kontaktwähler präsentiert, mit dem dieser Kontakt(e) auswählen kann, die er teilen möchte. Diese Methode erfordert eine Benutzeraktion, damit das {{jsxref('Promise')}} aufgelöst wird.

## Syntax

```js-nolint
select(properties)
select(properties, options)
```

### Parameter

- `properties`

  - : Ein Array von {{jsxref('String', 'strings')}}, das definiert, welche Informationen von einem Kontakt abgerufen werden sollen. Erlaubte Werte sind wie folgt:

    - `'name'`: Der Name des Kontakts.
    - `'tel'`: Die Telefonnummer(n) des Kontakts.
    - `'email'`: Die E-Mail-Adresse des Kontakts.
    - `'address'`: Die Postadresse des Kontakts.
    - `'icon'`: Der Avatar des Kontakts.

- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `multiple`
      - : Ein Boolean, der die Auswahl mehrerer Kontakte erlaubt. Der Standardwert ist `false`.

### Rückgabewert

Gibt ein {{jsxref('Promise')}} zurück, das mit einem Array von Objekten gelöst wird, die Kontaktinformationen enthalten. Jedes Objekt repräsentiert einen einzelnen Kontakt und kann die folgenden Eigenschaften enthalten:

- `address`
  - : Ein {{jsxref("Array")}} von [`ContactAddress`](/de/docs/Web/API/ContactAddress)-Objekten, die jeweils die Details einer einzigartigen physischen Adresse enthalten.
- `email`
  - : Ein Array von Zeichenketten, die E-Mail-Adressen enthalten.
- `icon`
  - : Ein Array von [`Blob`](/de/docs/Web/API/Blob)-Objekten, die Bilder einer Person enthalten.
- `name`
  - : Ein Array von Zeichenketten, die jeweils einen einzigartigen Namen einer Person enthalten.
- `tel`
  - : Ein Array von Zeichenketten, die jeweils eine einzigartige Telefonnummer einer Person enthalten.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Browsing-Kontext nicht auf der obersten Ebene ist, wenn der Kontaktwähler eine Markierung zeigt, die einen bereits bestehenden Kontaktwähler kennzeichnet, da immer nur ein Wähler existieren kann, oder wenn das Starten eines Kontaktwählers fehlgeschlagen ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Methode nicht durch [Benutzeraktivierung](/de/docs/Web/Security/User_activation) ausgelöst wird.
- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn `properties` leer ist oder wenn eine der angegebenen Eigenschaften nicht unterstützt wird.

## Sicherheit

[Vorübergehende Aktivierung](/de/docs/Glossary/Transient_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit dieses Feature funktioniert.

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel legt ein Array von Eigenschaften fest, die für jeden Kontakt abgerufen werden sollen, und setzt ein Optionsobjekt, um die Auswahl mehrerer Kontakte zu ermöglichen.

Eine asynchrone Funktion wird dann definiert, die die `select()`-Methode verwendet, um dem Benutzer eine Kontaktwähler-Schnittstelle zu präsentieren und die ausgewählten Ergebnisse zu verarbeiten. `handleResults()` ist eine vom Entwickler definierte Funktion.

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

### Auswahl Nur Unterstützter Eigenschaften

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
