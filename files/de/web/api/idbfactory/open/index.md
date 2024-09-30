---
title: "IDBFactory: open() Methode"
short-title: open()
slug: Web/API/IDBFactory/open
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`open()`**-Methode des [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Interfaces fordert das Öffnen einer [Verbindung zu einer Datenbank](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#database_connection) an.

Die Methode gibt sofort ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Objekt zurück und führt die Öffnungsoperation asynchron aus. Wenn die Operation erfolgreich ist, wird ein `success`-Ereignis auf dem von dieser Methode zurückgegebenen Anforderungsobjekt ausgelöst, wobei dessen `result`-Attribut auf das neue [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt für die Verbindung gesetzt wird.

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
  - : Optional. Die Version, mit der die Datenbank geöffnet werden soll. Wenn die Version nicht angegeben wird und die Datenbank existiert, wird eine Verbindung zur Datenbank hergestellt, ohne deren Version zu ändern.
    Wenn die Version nicht angegeben wird und die Datenbank nicht existiert, wird sie mit Version `1` erstellt.

### Rückgabewert

Ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) Objekt, auf dem nachfolgende Ereignisse zu dieser Anfrage ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage ein [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt, das die Verbindung zur Datenbank darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Wert von `version` keine Zahl größer als Null ist.

## Beispiele

Beispiel für den Aufruf von `open` mit dem `version`-Parameter der aktuellen Spezifikation:

```js
const request = window.indexedDB.open("toDoList", 4);
```

Im folgenden Code-Schnipsel stellen wir eine Anfrage zum Öffnen einer Datenbank und fügen Behandlungsroutinen für die Erfolgs- und Fehlerfälle hinzu. Für ein vollständiges Arbeitsbeispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
- [Speicherquoten und Räumungskriterien von Browsern](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselspektrums: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
