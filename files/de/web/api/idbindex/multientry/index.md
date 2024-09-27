---
title: "IDBIndex: multiEntry-Eigenschaft"
short-title: multiEntry
slug: Web/API/IDBIndex/multiEntry
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`multiEntry`** schreibgeschützte Eigenschaft der
[`IDBIndex`](/de/docs/Web/API/IDBIndex)-Schnittstelle gibt einen booleschen Wert zurück, der beeinflusst, wie sich der Index verhält, wenn die Auswertung des Schlüsselpfads des Index ein Array ergibt.

Dies wird entschieden, wenn der Index erstellt wird, mit der Methode
[`IDBObjectStore.createIndex`](/de/docs/Web/API/IDBObjectStore/createIndex). Diese Methode nimmt ein optionales
`options`-Parameter entgegen, dessen `multiEntry`-Eigenschaft auf `true`/`false` gesetzt wird.

## Wert

Ein boolescher Wert:

| Wert  | Wirkung                                                                    |
| ----- | -------------------------------------------------------------------------- |
| true  | Es gibt einen Eintrag im Index für jedes Element in einem Schlüssel-Array. |
| false | Es gibt einen Eintrag für jeden Schlüssel, der ein Array ist.              |

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objekt-Store und holen dann den Index `lName` aus einer einfachen Kontaktdatenbank. Anschließend öffnen wir einen grundlegenden Cursor auf dem Index mit [`IDBIndex.openCursor`](/de/docs/Web/API/IDBIndex/openCursor) — dies funktioniert genauso wie das Öffnen eines Cursors direkt auf einem `ObjectStore` mithilfe von
[`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), außer dass die zurückgegebenen Einträge basierend auf dem Index sortiert sind, nicht dem Primärschlüssel.

Der Multi-Entry-Status des Indexes wird in der Konsole protokolliert: Er sollte als `false` zurückgegeben werden.

Schließlich iterieren wir durch jeden Eintrag und fügen die Daten in eine HTML-Tabelle ein. Für ein vollständiges funktionierendes Beispiel siehe unser [IndexedDB-Beispiele-Demo-Repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

```js
function displayDataByIndex() {
  tableEntry.textContent = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");
  console.log(myIndex.multiEntry);

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
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegung eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
