---
title: "IDBIndex: objectStore-Eigenschaft"
short-title: objectStore
slug: Web/API/IDBIndex/objectStore
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`objectStore`**-Eigenschaft des [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Interfaces gibt den Objektspeicher zurück, der durch den aktuellen Index referenziert wird.

## Wert

Ein [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore).

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objektspeicher und holen uns dann den Index `lName` aus einer einfachen Kontaktdatenbank. Anschließend öffnen wir einen grundlegenden Cursor auf dem Index mit [`IDBIndex.openCursor`](/de/docs/Web/API/IDBIndex/openCursor). Dies funktioniert genauso wie das direkte Öffnen eines Cursors auf einem `ObjectStore` mittels [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), außer dass die zurückgegebenen Datensätze basierend auf dem Index und nicht auf dem Primärschlüssel sortiert sind.

Der aktuelle Objektspeicher wird in die Konsole protokolliert und sollte etwas zurückgeben wie:

```json
IDBObjectStore { name: "contactsList", keyPath: "id", indexNames: DOMStringList[7], transaction: IDBTransaction, autoIncrement: false }
```

Abschließend iterieren wir durch jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Für ein vollständiges funktionierendes Beispiel, siehe unser [IndexedDB-Beispiel-Demo-Repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Live-Demo anzeigen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

```js
function displayDataByIndex() {
  tableEntry.textContent = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");
  console.log(myIndex.objectStore);

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
- Verwenden von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwenden von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Live-Demo anzeigen](https://mdn.github.io/dom-examples/to-do-notifications/)).
