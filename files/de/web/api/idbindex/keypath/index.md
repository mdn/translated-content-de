---
title: "IDBIndex: keyPath-Eigenschaft"
short-title: keyPath
slug: Web/API/IDBIndex/keyPath
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`keyPath`**-Eigenschaft der {{domxref("IDBIndex")}}-Schnittstelle gibt den [Schlüsselpfad](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) des aktuellen Index zurück. Wenn null, wird dieser Index nicht automatisch befüllt.

## Wert

Jeder Datentyp, der als Schlüsselpfad verwendet werden kann.

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objektspeicher und erhalten dann den Index `lName` aus einer einfachen Kontaktdatenbank. Wir öffnen dann einen einfachen Cursor auf dem Index mithilfe von {{domxref("IDBIndex.openCursor")}} — dies funktioniert genauso wie das Öffnen eines Cursors direkt auf einem `ObjectStore` mithilfe von {{domxref("IDBObjectStore.openCursor")}}, außer dass die zurückgegebenen Datensätze nach dem Index und nicht nach dem Primärschlüssel sortiert werden.

Der Schlüsselpfad des aktuellen Index wird in die Konsole protokolliert: Es sollte als `lName` zurückgegeben werden.

Schließlich iterieren wir durch jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Für ein vollständig funktionierendes Beispiel sehen Sie sich unser [IndexedDB-Beispiel-Repositorium](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)) an.

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

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
