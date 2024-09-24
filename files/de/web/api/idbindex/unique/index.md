---
title: "IDBIndex: unique Eigenschaft"
short-title: unique
slug: Web/API/IDBIndex/unique
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`unique`** schreibgeschützte Eigenschaft gibt einen booleschen Wert zurück, der angibt, ob der Index doppelte Schlüssel zulässt.

Dies wird entschieden, wenn der Index erstellt wird, indem die Methode {{domxref("IDBObjectStore.createIndex")}} verwendet wird. Diese Methode nimmt einen optionalen Parameter `unique`, der, wenn auf `true` gesetzt, bedeutet, dass der Index keine doppelten Einträge akzeptieren kann.

## Wert

Ein boolescher Wert:

| Wert    | Effekt                                                            |
| ------- | ----------------------------------------------------------------- |
| `true`  | Der aktuelle Index erlaubt keine doppelten Werte für einen Schlüssel. |
| `false` | Der aktuelle Index erlaubt doppelte Schlüsselwerte.              |

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objekt-Store und erhalten dann den Index `lName` aus einer einfachen Kontaktdatenbank. Wir öffnen dann einen einfachen Cursor auf dem Index mit {{domxref("IDBIndex.openCursor")}} — dies funktioniert genauso wie das Öffnen eines Cursors direkt auf einem `ObjectStore` mit {{domxref("IDBObjectStore.openCursor")}}, mit der Ausnahme, dass die zurückgegebenen Datensätze basierend auf dem Index und nicht dem Primärschlüssel sortiert sind.

Der einzigartige Status des Indexes wird in die Konsole protokolliert: Er sollte als `false` zurückgegeben werden.

Schließlich iterieren wir durch jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Für ein vollständiges funktionierendes Beispiel siehe unser [IndexedDB-Beispiel-Repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

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

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Transaktionen verwenden: {{domxref("IDBTransaction")}}
- Einen Schlüsselbereich festlegen: {{domxref("IDBKeyRange")}}
- Ihre Daten abrufen und ändern: {{domxref("IDBObjectStore")}}
- Cursor verwenden: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
