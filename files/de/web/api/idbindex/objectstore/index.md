---
title: "IDBIndex: objectStore-Eigenschaft"
short-title: objectStore
slug: Web/API/IDBIndex/objectStore
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`objectStore`** der Schnittstelle [`IDBIndex`](/de/docs/Web/API/IDBIndex) gibt den Object Store zurück, auf den der aktuelle Index verweist.

## Wert

Ein [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore).

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Object Store und rufen dann den Index `lName` aus einer einfachen Kontaktdatenbank ab. Anschließend öffnen wir mit [`IDBIndex.openCursor`](/de/docs/Web/API/IDBIndex/openCursor) einen Cursor auf dem Index. Dies funktioniert genauso wie das direkte Öffnen eines Cursors auf einem `ObjectStore` mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), mit dem Unterschied, dass die zurückgegebenen Datensätze nach dem Index und nicht nach dem Primärschlüssel sortiert sind.

Der aktuelle Object Store wird in der Konsole ausgegeben. Die Ausgabe sollte etwa so aussehen:

```plain
IDBObjectStore { name: "contactsList", keyPath: "id", indexNames: DOMStringList[7], transaction: IDBTransaction, autoIncrement: false }
```

Zum Schluss durchlaufen wir jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Ein vollständiges, funktionsfähiges Beispiel finden Sie in unserem [Demo-Repository mit IndexedDB-Beispielen](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

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

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
