---
title: "IDBIndex: unique-Eigenschaft"
short-title: unique
slug: Web/API/IDBIndex/unique
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`unique`** Schreibgeschützte-Eigenschaft gibt einen booleschen Wert zurück, der angibt, ob der Index doppelte Schlüssel zulässt.

Dies wird beim Erstellen des Indexes mit der Methode [`IDBObjectStore.createIndex`](/de/docs/Web/API/IDBObjectStore/createIndex) festgelegt. Diese Methode nimmt einen optionalen Parameter, `unique`, der, wenn er auf `true` gesetzt wird, bedeutet, dass der Index keine doppelten Einträge akzeptieren kann.

## Wert

Ein boolescher Wert:

| Wert    | Effekt                                                       |
| ------- | ------------------------------------------------------------ |
| `true`  | Der aktuelle Index lässt keine doppelten Werte für einen Schlüssel zu. |
| `false` | Der aktuelle Index erlaubt doppelte Schlüsselwerte.          |

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objektspeicher und greifen dann auf den Index `lName` in einer einfachen Kontaktdatenbank zu. Wir öffnen dann einen einfachen Cursor auf dem Index mit [`IDBIndex.openCursor`](/de/docs/Web/API/IDBIndex/openCursor) — dies funktioniert genauso wie das direkte Öffnen eines Cursors auf einem `ObjectStore` mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), außer dass die zurückgegebenen Datensätze basierend auf dem Index und nicht auf dem Primärschlüssel sortiert werden.

Der einzigartige Status des Indexes wird in der Konsole protokolliert: Es sollte `false` zurückgegeben werden.

Schließlich durchsuchen wir jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Für ein vollständiges Arbeitsbeispiel sehen Sie unser [IndexedDB-Beispiele Demo-Repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

```js
function displayDataByIndex() {
  tableEntry.textContent = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");
  console.log(myIndex.unique);

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
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Bereich von Schlüsseln festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursors verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
