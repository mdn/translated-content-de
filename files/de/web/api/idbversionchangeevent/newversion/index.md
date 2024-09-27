---
title: "IDBVersionChangeEvent: newVersion-Eigenschaft"
short-title: newVersion
slug: Web/API/IDBVersionChangeEvent/newVersion
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`newVersion`** schreibgeschützte Eigenschaft der [`IDBVersionChangeEvent`](/de/docs/Web/API/IDBVersionChangeEvent) Schnittstelle gibt die neue Versionsnummer der Datenbank zurück.

## Wert

Eine Zahl, die eine 64-Bit-Ganzzahl ist oder null, wenn die Datenbank gelöscht wird.

## Beispiele

Im folgenden Codebeispiel machen wir eine Anfrage zum Öffnen einer Datenbank und fügen Handler für die Erfolgs- und Fehlerszenarien hinzu. Diese Ereignisse werden über die benutzerdefinierte `IDBVersionChangeEvent`-Schnittstelle ausgelöst. Ein vollständiges funktionierendes Beispiel finden Sie in unserer [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const note = document.querySelector("ul");

// Let us open version 4 of our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Error loading database.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // store the result of opening the database in the db variable.
  // This is used a lot later on, for opening transactions and suchlike.
  const db = DBOpenRequest.result;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
