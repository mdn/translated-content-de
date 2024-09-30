---
title: "IDBObjectStore: index() Methode"
short-title: index()
slug: Web/API/IDBObjectStore/index
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`index()`**-Methode der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Schnittstelle öffnet einen benannten Index im aktuellen Objekt-Store. Danach kann der Index beispielsweise dazu genutzt werden, eine Reihe von Datensätzen zu sortieren, die durch einen Cursor zurückgegeben werden.

## Syntax

```js-nolint
index(name)
```

### Parameter

- `name`
  - : Der Name des zu öffnenden Indexes.

### Rückgabewert

Ein [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Objekt für den Zugriff auf den Index.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Quellobjekt-Store gelöscht wurde oder die Transaktion für den Objekt-Store beendet ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn es in der Datenbank keinen Index mit dem angegebenen (groß-/klein-schreibungsempfindlichen) Namen gibt.

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objekt-Store, dann holen wir den Index `lName` aus einer einfachen Kontaktdatenbank. Anschließend öffnen wir einen einfachen Cursor auf dem Index mittels [`IDBIndex.openCursor`](/de/docs/Web/API/IDBIndex/openCursor) — dies funktioniert genauso wie das Öffnen eines Cursors direkt auf einem `ObjectStore` mittels [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), mit dem Unterschied, dass die zurückgegebenen Datensätze basierend auf dem Index und nicht dem Primärschlüssel sortiert sind.

Schließlich iterieren wir durch jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Für ein vollständiges Arbeitsbeispiel siehe unser [IDBIndex-Beispiel im IndexedDB-examples-Demo-Repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/).)

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
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einstellen eines Schlüsselspektrums: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
