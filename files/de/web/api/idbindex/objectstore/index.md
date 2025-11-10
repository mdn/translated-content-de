---
title: "IDBIndex: objectStore Eigenschaft"
short-title: objectStore
slug: Web/API/IDBIndex/objectStore
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`objectStore`**-Eigenschaft des [`IDBIndex`](/de/docs/Web/API/IDBIndex)
Interfaces gibt den Objektspeicher zurück, auf den der aktuelle Index verweist.

## Wert

Ein [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore).

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objektspeicher und erhalten dann den
Index `lName` aus einer einfachen Kontaktdatenbank. Anschließend öffnen wir einen grundlegenden Cursor auf
dem Index mit [`IDBIndex.openCursor`](/de/docs/Web/API/IDBIndex/openCursor). Dies funktioniert genauso, wie einen
Cursor direkt auf einem `ObjectStore` mit
[`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) zu öffnen, außer dass die zurückgegebenen Datensätze basierend auf dem Index und nicht dem Primärschlüssel sortiert sind.

Der aktuelle Objektspeicher wird in die Konsole protokolliert: Es sollte etwas wie
folgendes zurückgegeben werden:

```plain
IDBObjectStore { name: "contactsList", keyPath: "id", indexNames: DOMStringList[7], transaction: IDBTransaction, autoIncrement: false }
```

Schließlich iterieren wir durch jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Für ein
vollständig funktionierendes Beispiel siehe unser [IndexedDB-Beispiele-Demo-Repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

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
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Beispielreferenz: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
