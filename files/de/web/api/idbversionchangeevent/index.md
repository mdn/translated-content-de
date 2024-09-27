---
title: IDBVersionChangeEvent
slug: Web/API/IDBVersionChangeEvent
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`IDBVersionChangeEvent`** Schnittstelle der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) zeigt an, dass sich die Version der Datenbank geändert hat, als Ergebnis einer [`onupgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) Ereignis-Handler-Funktion.

{{InheritanceDiagram}}

## Konstruktor

- [`IDBVersionChangeEvent()`](/de/docs/Web/API/IDBVersionChangeEvent/IDBVersionChangeEvent)
  - : Erstellt und gibt ein neues `IDBVersionChangeEvent` Objekt zurück, welches verwendet wird, um darzustellen, wann sich eine Version der Datenbank geändert hat.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, der [`Event`](/de/docs/Web/API/Event) Schnittstelle._

- [`IDBVersionChangeEvent.oldVersion`](/de/docs/Web/API/IDBVersionChangeEvent/oldVersion) {{ReadOnlyInline}}
  - : Gibt die alte Version der Datenbank zurück.
- [`IDBVersionChangeEvent.newVersion`](/de/docs/Web/API/IDBVersionChangeEvent/newVersion) {{ReadOnlyInline}}
  - : Gibt die neue Version der Datenbank zurück.

## Instanz-Methoden

_Keine spezifische Methode, aber erbt Methoden von seiner Elternschnittstelle, der [`Event`](/de/docs/Web/API/Event) Schnittstelle._

## Beispiel

Im folgenden Code-Snippet stellen wir eine Anfrage zum Öffnen einer Datenbank und fügen Handler für die Erfolgs- und Fehlerfälle hinzu. Bei einer Versionsänderung (nach einem `upgradeneeded` Ereignis) wird das `success` Ereignis die `IDBVersionChangeEvent` Schnittstelle implementieren. Für ein vollständiges Arbeitsbeispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const note = document.querySelector("ul");

// Let us open version 4 of our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened successfully, or not
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Error loading database.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // store the result of opening the database in the db variable. This is used a lot later on, for opening transactions and suchlike.
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
- Einstellen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
