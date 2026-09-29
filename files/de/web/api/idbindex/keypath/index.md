---
title: "IDBIndex: keyPath-Eigenschaft"
short-title: keyPath
slug: Web/API/IDBIndex/keyPath
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`keyPath`** der Schnittstelle [`IDBIndex`](/de/docs/Web/API/IDBIndex) gibt den [Schlüsselpfad](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) des aktuellen Index zurück. Ist der Wert null, wird dieser Index nicht automatisch befüllt.

## Wert

Jeder Datentyp, der als Schlüsselpfad verwendet werden kann.

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objektspeicher und rufen dann den Index `lName` aus einer einfachen Kontaktdatenbank ab. Anschließend öffnen wir mit [`IDBIndex.openCursor`](/de/docs/Web/API/IDBIndex/openCursor) einen einfachen Cursor für den Index. Das funktioniert genauso wie das direkte Öffnen eines Cursors für einen `ObjectStore` mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), mit dem Unterschied, dass die zurückgegebenen Datensätze nach dem Index und nicht nach dem Primärschlüssel sortiert sind.

Der Schlüsselpfad des aktuellen Index wird in der Konsole ausgegeben: Als Wert sollte `lName` zurückgegeben werden.

Zum Schluss durchlaufen wir jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Ein vollständiges, funktionsfähiges Beispiel finden Sie in unserem [Repository mit IndexedDB-Beispielen](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

```js
function displayDataByIndex() {
  tableEntry.textContent = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");
  console.log(myIndex.keyPath);

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
