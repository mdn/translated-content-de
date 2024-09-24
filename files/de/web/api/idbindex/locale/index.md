---
title: "IDBIndex: locale-Eigenschaft"
short-title: locale
slug: Web/API/IDBIndex/locale
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{APIRef("IndexedDB")}}{{deprecated_header}}{{non-standard_header}}

Die **`locale`** schreibgeschützte Eigenschaft der {{domxref("IDBIndex")}} Schnittstelle gibt die Sprache des Index zurück (zum Beispiel `en-US` oder `pl`), wenn bei seiner Erstellung ein `locale`-Wert angegeben wurde (siehe den [`options`](/de/docs/Web/API/IDBObjectStore/createIndex#options) Parameter bei [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex).) Beachten Sie, dass diese Eigenschaft immer die aktuelle Sprache zurückgibt, die in diesem Index verwendet wird; mit anderen Worten, sie gibt niemals `"auto"` zurück.

## Wert

Ein String.

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objekt-Store und holen dann den Index `lName` aus einer einfachen Kontaktdatenbank. Anschließend öffnen wir einen einfachen Cursor auf dem Index mit {{domxref("IDBIndex.openCursor")}} — dies funktioniert genauso wie das direkte Öffnen eines Cursors auf einem `ObjectStore` mit {{domxref("IDBObjectStore.openCursor")}}, außer dass die zurückgegebenen Datensätze basierend auf dem Index und nicht auf dem Primärschlüssel sortiert sind.

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

Derzeit Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwenden von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwenden von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
