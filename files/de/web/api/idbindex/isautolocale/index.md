---
title: "IDBIndex: isAutoLocale-Eigenschaft"
short-title: isAutoLocale
slug: Web/API/IDBIndex/isAutoLocale
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{APIRef("IndexedDB")}}{{deprecated_header}}{{non-standard_header}}

Die schreibgeschützte Eigenschaft **`isAutoLocale`** des {{domxref("IDBIndex")}}-Interfaces gibt einen booleschen Wert zurück, der angibt, ob dem Index bei seiner Erstellung ein `locale`-Wert von `auto` zugewiesen wurde (siehe den [`options`](/de/docs/Web/API/IDBObjectStore/createIndex#options)-Parameter zu [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex)).

## Wert

Ein boolescher Wert.

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objekt-Store und erhalten dann den Index `lName` aus einer einfachen Kontaktdatenbank. Dann öffnen wir einen grundlegenden Cursor auf dem Index mit {{domxref("IDBIndex.openCursor")}} — dies funktioniert genauso wie das Öffnen eines Cursors direkt auf einem `ObjectStore` mit {{domxref("IDBObjectStore.openCursor")}}, außer dass die zurückgegebenen Datensätze basierend auf dem Index sortiert sind, nicht nach dem Primärschlüssel.

Der `isAutoLocale`-Wert wird in die Konsole protokolliert.

```js
function displayDataByIndex() {
  tableEntry.textContent = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");
  console.log(myIndex.isAutoLocale);

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

Zurzeit nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern von Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
