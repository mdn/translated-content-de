---
title: "IDBFactory: open() Methode"
short-title: open()
slug: Web/API/IDBFactory/open
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`open()`** Methode der [`IDBFactory`](/de/docs/Web/API/IDBFactory) Schnittstelle fordert das Öffnen einer [Verbindung zu einer Datenbank](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#database_connection) an.

Die Methode gibt sofort ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) Objekt zurück und führt den Öffnungsvorgang asynchron aus. Wenn der Vorgang erfolgreich ist, wird ein `success`-Ereignis für das von dieser Methode zurückgegebene Anforderungsobjekt ausgelöst, dessen `result`-Attribut auf das neue [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) Objekt für die Verbindung gesetzt ist.

Kann `upgradeneeded`, `blocked` oder `versionchange` Ereignisse auslösen.

## Syntax

```js-nolint
open(name)
open(name, version)
```

### Parameter

- `name`
  - : Der Name der Datenbank.
- `version` {{optional_inline}}
  - : Optional. Die Version, mit der die Datenbank geöffnet werden soll. Wenn die Version nicht angegeben wird und die Datenbank existiert, wird eine Verbindung zur Datenbank geöffnet, ohne deren Version zu ändern. Wenn die Version nicht angegeben wird und die Datenbank nicht existiert, wird sie mit Version `1` erstellt.

### Rückgabewert

Ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) Objekt, bei dem nachfolgende Ereignisse im Zusammenhang mit dieser Anforderung ausgelöst werden.

Wenn der Vorgang erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result) Eigenschaft des Anforderung das [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) Objekt, das die Verbindung zur Datenbank darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Wert von `version` keine Zahl größer als Null ist.

## Beispiele

Beispiel für das Aufrufen von `open` mit dem `version` Parameter der aktuellen Spezifikation:

```js
const request = window.indexedDB.open("toDoList", 4);
```

Im folgenden Code-Snippet stellen wir eine Anfrage, um eine Datenbank zu öffnen, und fügen Handler für die Erfolgs- und Fehlerszenarien hinzu. Für ein vollständiges Arbeitsbeispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const note = document.querySelector("ul");

// Let us open version 4 of our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened
// successfully, or not
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Error loading database.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // store the result of opening the database in the db
  // variable. This is used a lot later on, for opening
  // transactions and suchlike.
  db = DBOpenRequest.result;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [Browser-Speicherquoten und -Räumungsrichtlinien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Bereich von Schlüsseln festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursors verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
