---
title: "IDBObjectStore: index() Methode"
short-title: index()
slug: Web/API/IDBObjectStore/index
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`index()`** Methode der Schnittstelle {{domxref("IDBObjectStore")}} öffnet einen benannten Index im aktuellen Objektstore. Danach kann sie beispielsweise verwendet werden, um eine Reihe von Datensätzen zurückzugeben, die mit einem Cursor nach diesem Index sortiert sind.

## Syntax

```js-nolint
index(name)
```

### Parameter

- `name`
  - : Der Name des Indexes, der geöffnet werden soll.

### Rückgabewert

Ein {{domxref("IDBIndex")}}-Objekt für den Zugriff auf den Index.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Quellobjektstore gelöscht wurde oder die Transaktion für den Objektstore abgeschlossen ist.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn es in der Datenbank keinen Index mit dem angegebenen Namen (Groß- und Kleinschreibung beachten) gibt.

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objektstore und erhalten dann den Index `lName` aus einer einfachen Kontaktdatenbank. Dann öffnen wir einen einfachen Cursor auf dem Index mit {{domxref("IDBIndex.openCursor")}} — dies funktioniert genauso wie das Öffnen eines Cursors direkt auf einem `ObjectStore` mit {{domxref("IDBObjectStore.openCursor")}}, außer dass die zurückgegebenen Datensätze basierend auf dem Index und nicht dem Primärschlüssel sortiert sind.

Schließlich iterieren wir durch jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Ein vollständiges Arbeitsbeispiel finden Sie in unserem [IDBIndex-Beispiel im IndexedDB-examples Demo-Repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/).)

```js
function displayDataByIndex() {
  tableEntry.textContent = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");
  myIndex.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const tableRow = document.createElement("tr");
      for (const cell of [
        cursor.value.id,
        cursor.value.lName,
        cursor.value.fName,
        cursor.value.jTitle,
        cursor.value.company,
        cursor.value.eMail,
        cursor.value.phone,
        cursor.value.age,
      ]) {
        const tableCell = document.createElement("td");
        tableCell.textContent = cell;
        tableRow.appendChild(tableCell);
      }
      tableEntry.appendChild(tableRow);

      cursor.continue();
    } else {
      console.log("Entries all displayed.");
    }
  };
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
