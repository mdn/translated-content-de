---
title: "IDBIndex: unique Eigenschaft"
short-title: unique
slug: Web/API/IDBIndex/unique
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`unique`** gibt einen booleschen Wert zurück, der angibt, ob der Index doppelte Schlüssel erlaubt.

Dies wird beim Erstellen des Indexes entschieden, indem die Methode [`IDBObjectStore.createIndex`](/de/docs/Web/API/IDBObjectStore/createIndex) verwendet wird. Diese Methode akzeptiert einen optionalen Parameter, `unique`, der, wenn er auf `true` gesetzt ist, bedeutet, dass der Index keine doppelten Einträge akzeptieren wird.

## Wert

Ein boolescher Wert:

| Wert    | Effekt                                                                |
| ------- | --------------------------------------------------------------------- |
| `true`  | Der aktuelle Index erlaubt keine doppelten Werte für einen Schlüssel. |
| `false` | Der aktuelle Index erlaubt doppelte Schlüsselwerte.                   |

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objekt-Store und erhalten dann den Index `lName` aus einer einfachen Kontaktdatenbank. Wir öffnen dann einen grundlegenden Cursor im Index, indem wir [`IDBIndex.openCursor`](/de/docs/Web/API/IDBIndex/openCursor) verwenden – dies funktioniert genauso wie das direkte Öffnen eines Cursors auf einem `ObjectStore` unter Verwendung von [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), außer dass die zurückgegebenen Datensätze basierend auf dem Index sortiert sind, nicht auf dem Primärschlüssel.

Der eindeutige Status des Indexes wird in die Konsole protokolliert: Er sollte als `false` zurückgegeben werden.

Schließlich iterieren wir durch jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Für ein vollständiges Arbeitsbeispiel, siehe unser [IndexedDB-examples Demo-Repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

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
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Bereichs von Schlüsseln: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
