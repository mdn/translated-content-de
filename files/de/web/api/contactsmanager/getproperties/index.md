---
title: "ContactsManager: getProperties()-Methode"
short-title: getProperties()
slug: Web/API/ContactsManager/getProperties
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die **`getProperties()`**-Methode der [`ContactsManager`](/de/docs/Web/API/ContactsManager)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, welches mit einem {{jsxref('Array')}} von {{jsxref('String','strings')}} aufgelöst wird, die angeben, welche Kontaktinformationen verfügbar sind.

## Syntax

```js-nolint
getProperties()
```

### Parameter

Keine.

### Rückgabewert

Gibt ein {{jsxref('Promise')}} zurück, das mit einem {{jsxref('Array')}} von {{jsxref('String','strings')}} aufgelöst wird, die die Kontaktinformationen benennen, die vom aktuellen System zurückgegeben werden können.

Eigenschaften können Folgendes umfassen:

- `'name'`: Der Name des Kontakts.
- `'tel'`: Die Telefonnummer(n) des Kontakts.
- `'email'`: Die E-Mail-Adresse des Kontakts.
- `'address'`: Die Postanschrift des Kontakts.
- `'icon'`: Das Avatar des Kontakts.

### Ausnahmen

Es werden keine Ausnahmen ausgelöst.

## Beispiele

### Überprüfung der Unterstützung von Eigenschaften

Die folgende asynchrone Funktion verwendet die `getProperties()`-Methode, um zu überprüfen, ob das aktuelle System die `icon`-Eigenschaft unterstützt.

```js
async function checkProperties() {
  const supportedProperties = await navigator.contacts.getProperties();
  if (!supportedProperties.includes("icon")) {
    console.log("Your system does not support getting icons.");
  }
}
```

### Auswahl nur unterstützter Eigenschaften

Das folgende Beispiel ähnelt einem für die [`select()`](/de/docs/Web/API/ContactsManager/select)-Methode. Anstatt die an `select()` übergebenen Eigenschaften fest zu codieren, verwendet es `getProperties()`, um sicherzustellen, dass nur unterstützte Eigenschaften übergeben werden. Andernfalls könnte `select()` einen {{jsxref("TypeError")}} auslösen. `handleResults()` ist eine vom Entwickler definierte Funktion.

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
