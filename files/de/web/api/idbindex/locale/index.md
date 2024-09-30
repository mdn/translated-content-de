---
title: "IDBIndex: locale Eigenschaft"
short-title: locale
slug: Web/API/IDBIndex/locale
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{APIRef("IndexedDB")}}{{deprecated_header}}{{non-standard_header}}

Die schreibgeschützte Eigenschaft **`locale`** der Schnittstelle [`IDBIndex`](/de/docs/Web/API/IDBIndex) gibt den Ländercode des Indexes zurück (z. B. `en-US` oder `pl`), wenn beim Erstellen ein `locale`-Wert angegeben wurde (siehe den [`options`](/de/docs/Web/API/IDBObjectStore/createIndex#options) Parameter in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex)). Beachten Sie, dass diese Eigenschaft immer den aktuell in diesem Index verwendeten Ländercode zurückgibt, mit anderen Worten, sie gibt niemals `"auto"` zurück.

## Wert

Ein String.

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objektspeicher und erhalten dann den Index `lName` aus einer einfachen Kontaktdatenbank. Wir öffnen dann einen einfachen Cursor auf dem Index mit [`IDBIndex.openCursor`](/de/docs/Web/API/IDBIndex/openCursor) — dies funktioniert genauso wie das direkte Öffnen eines Cursors auf einem `ObjectStore` mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), außer dass die zurückgegebenen Datensätze basierend auf dem Index und nicht auf dem Primärschlüssel sortiert sind.

Der `locale`-Wert wird in der Konsole protokolliert.

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

Derzeit nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Ihre Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursors verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
