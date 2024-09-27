---
title: "IDBIndex: name-Eigenschaft"
short-title: name
slug: Web/API/IDBIndex/name
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`name`**-Eigenschaft der [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Schnittstelle enthält eine Zeichenkette, die den Index benennt.

## Wert

Eine Zeichenkette, die einen Namen für den Index angibt.

### Ausnahmen

Es gibt mehrere Ausnahmen, die auftreten können, wenn Sie versuchen, den Namen eines Indexes zu ändern.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Index oder sein Objekt-Store gelöscht wurde oder wenn die aktuelle Transaktion keine Upgrade-Transaktion ist. Sie können Indizes nur während Upgrade-Transaktionen umbenennen, das heißt, wenn der Modus `"versionchange"` ist.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die aktuelle Transaktion nicht aktiv ist.
- `ConstraintError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Index bereits den angegebenen `name` verwendet.

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objekt-Store und holen dann den Index `lName` aus einer einfachen Kontaktdatenbank. Anschließend öffnen wir einen einfachen Cursor auf dem Index mit [`IDBIndex.openCursor()`](/de/docs/Web/API/IDBIndex/openCursor) — dies funktioniert wie das direkte Öffnen eines Cursors auf einem [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) mit [`openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor), außer dass die zurückgegebenen Datensätze nach dem Index und nicht nach dem Primärschlüssel sortiert sind.

Der Name des Indexes wird in die Konsole protokolliert: Er sollte als `lName` zurückgegeben werden.

Abschließend iterieren wir durch jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Für ein vollständig funktionierendes Beispiel siehe unser [IndexedDB-Beispieldemorepository](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

```js
function displayDataByIndex() {
  tableEntry.textContent = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");
  console.log(myIndex.name);

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
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
