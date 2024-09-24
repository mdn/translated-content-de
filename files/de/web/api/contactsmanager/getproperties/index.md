---
title: "ContactsManager: Methode getProperties()"
short-title: getProperties()
slug: Web/API/ContactsManager/getProperties
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die **`getProperties()`**-Methode des {{domxref("ContactsManager")}}-Interfaces gibt ein {{jsxref('Promise')}} zurück, das mit einem {{jsxref('Array')}} von {{jsxref('String','strings')}} aufgelöst wird, die anzeigen, welche Kontaktattribute verfügbar sind.

## Syntax

```js-nolint
getProperties()
```

### Parameter

Keine.

### Rückgabewert

Gibt ein {{jsxref('Promise')}} zurück, das mit einem {{jsxref('Array')}} von {{jsxref('String','strings')}} aufgelöst wird, die die Kontaktattribute benennen, die vom aktuellen System zurückgegeben werden können.

Eigenschaften können Folgendes beinhalten:

- `'name'`: Der Name des Kontakts.
- `'tel'`: Die Telefonnummer(n) des Kontakts.
- `'email'`: Die E-Mail-Adresse des Kontakts.
- `'address'`: Die Postanschrift des Kontakts.
- `'icon'`: Der Avatar des Kontakts.

### Ausnahmen

Es werden keine Ausnahmen ausgelöst.

## Beispiele

### Überprüfen der Unterstützungsmerkmale

Die folgende asynchrone Funktion verwendet die `getProperties()`-Methode, um zu überprüfen, ob das aktuelle System die `icon`-Eigenschaft unterstützt.

```js
async function checkProperties() {
  const supportedProperties = await navigator.contacts.getProperties();
  if (!supportedProperties.includes("icon")) {
    console.log("Ihr System unterstützt keine Avatare.");
  }
}
```

### Auswahl nur unterstützter Eigenschaften

Das folgende Beispiel ähnelt einem für die {{domxref("ContactsManager.select", "select()")}}-Methode. Anstatt die an `select()` übergebenen Eigenschaften fest zu codieren, verwendet es `getProperties()`, um sicherzustellen, dass nur unterstützte Eigenschaften übergeben werden. Andernfalls könnte `select()` einen {{jsxref("TypeError")}} auslösen. `handleResults()` ist eine vom Entwickler definierte Funktion.

```js
const supportedProperties = await navigator.contacts.getProperties();

async function getContacts() {
  try {
    const contacts = await navigator.contacts.select(supportedProperties);
    handleResults(contacts);
  } catch (ex) {
    // Behandle hier alle Fehler.
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
