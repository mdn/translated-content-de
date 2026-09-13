---
title: "IDBIndex: locale-Eigenschaft"
short-title: locale
slug: Web/API/IDBIndex/locale
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("IndexedDB")}}{{non-standard_header}}

Die **`locale`**-Schreibgeschützte Eigenschaft der [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Schnittstelle gibt die Gebietsschemaeinstellung des Indexes zurück (zum Beispiel `en-US` oder `pl`), wenn ein `locale`-Wert bei dessen Erstellung angegeben wurde (siehe das [`options`](/de/docs/Web/API/IDBObjectStore/createIndex#options)-Parameter bei [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex).) Beachten Sie, dass diese Eigenschaft immer das aktuelle in diesem Index verwendete Gebietsschema zurückgibt, mit anderen Worten, sie gibt niemals `"auto"` zurück.

## Wert

Ein String.

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und ein Objekt-Depot und erhalten dann den Index `lName` von einer einfachen Kontaktdatenbank. Dann öffnen wir einen einfachen Cursor auf dem Index mit [`IDBIndex.openCursor`](/de/docs/Web/API/IDBIndex/openCursor) — dies funktioniert genauso wie das Öffnen eines Cursors direkt auf einem `ObjectStore` mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), außer dass die zurückgegebenen Datensätze basierend auf dem Index und nicht dem Primärschlüssel sortiert werden.

Der `locale`-Wert wird in die Konsole protokolliert.

```js
function displayDataByIndex() {
  tableEntry.textContent = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");
  console.log(myIndex.locale);

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

Derzeit kein Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
