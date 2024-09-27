---
title: IDBIndex
slug: Web/API/IDBIndex
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Das `IDBIndex`-Interface der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) bietet asynchronen Zugriff auf einen [Index](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#index) in einer Datenbank. Ein Index ist eine Art von Objekt-Store zum Nachschlagen von Datensätzen in einem anderen Objekt-Store, dem sogenannten referenzierten Objekt-Store. Dieses Interface wird genutzt, um Daten abzurufen.

Sie können Datensätze in einem Objekt-Store entweder über den Primärschlüssel oder durch die Verwendung eines Index abrufen. Ein Index ermöglicht es Ihnen, Datensätze in einem Objekt-Store anhand von Eigenschaften der Werte in den Datensätzen des Objekt-Stores, die nicht der Primärschlüssel sind, nachzuschlagen.

Der Index ist ein persistenter Schlüssel-Wert-Speicher, wobei der Wertanteil seiner Datensätze der Schlüssselteil eines Datensatzes im referenzierten Objekt-Store ist. Die Datensätze in einem Index werden automatisch gefüllt, wenn Datensätze im referenzierten Objekt-Store eingefügt, aktualisiert oder gelöscht werden. Jeder Datensatz in einem Index kann nur auf einen Datensatz in seinem referenzierten Objekt-Store verweisen, aber mehrere Indizes können denselben Objekt-Store referenzieren. Wenn sich der Objekt-Store ändert, werden alle Indizes, die auf diesen Objekt-Store verweisen, automatisch aktualisiert.

Sie können eine Menge von Schlüsseln innerhalb eines Bereichs erfassen. Weitere Informationen finden Sie unter [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange).

## Instanz-Eigenschaften

- [`IDBIndex.isAutoLocale`](/de/docs/Web/API/IDBIndex/isAutoLocale) {{ReadOnlyInline}} {{ non-standard_inline }} {{deprecated_inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Index bei seiner Erstellung einen `locale`-Wert von `auto` hatte (siehe den [`options`](/de/docs/Web/API/IDBObjectStore/createIndex#options)-Parameter zu [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex).)
- [`IDBIndex.locale`](/de/docs/Web/API/IDBIndex/locale) {{ReadOnlyInline}} {{ non-standard_inline }} {{deprecated_inline}}
  - : Gibt das Gebietsschema des Index zurück (zum Beispiel `en-US` oder `pl`), wenn bei seiner Erstellung ein `locale`-Wert angegeben wurde (siehe den [`options`](/de/docs/Web/API/IDBObjectStore/createIndex#options)-Parameter zu [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex).)
- [`IDBIndex.name`](/de/docs/Web/API/IDBIndex/name)
  - : Der Name dieses Indexes.
- [`IDBIndex.objectStore`](/de/docs/Web/API/IDBIndex/objectStore) {{ReadOnlyInline}}
  - : Der Name des vom Index referenzierten Objekt-Stores.
- [`IDBIndex.keyPath`](/de/docs/Web/API/IDBIndex/keyPath) {{ReadOnlyInline}}
  - : Der [Schlüsselpfad](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) dieses Indexes. Ist dieser null, wird der Index nicht automatisch gefüllt.
- [`IDBIndex.multiEntry`](/de/docs/Web/API/IDBIndex/multiEntry) {{ReadOnlyInline}}
  - : Beeinflusst das Verhalten des Indexes, wenn das Ergebnis der Bewertung des Schlüsselpfads des Indexes ein Array ergibt. Wenn `true`, gibt es einen Datensatz im Index für jedes Element in einem Array von Schlüsseln. Wenn `false`, gibt es einen Datensatz für jeden Schlüssel, der ein Array ist.
- [`IDBIndex.unique`](/de/docs/Web/API/IDBIndex/unique) {{ReadOnlyInline}}
  - : Wenn `true`, erlaubt dieser Index keine doppelten Werte für einen Schlüssel.

## Instanz-Methoden

Erbt von: [EventTarget](/de/docs/Web/API/EventTarget)

- [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex/count)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und liefert in einem separaten Thread die Anzahl der Datensätze innerhalb eines Schlüsselbereichs zurück.
- [`IDBIndex.get()`](/de/docs/Web/API/IDBIndex/get)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und findet in einem separaten Thread entweder den Wert im referenzierten Objekt-Store, der dem angegebenen Schlüssel entspricht, oder den ersten entsprechenden Wert, wenn `key` ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) ist.
- [`IDBIndex.getKey()`](/de/docs/Web/API/IDBIndex/getKey)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und findet in einem separaten Thread entweder den angegebenen Schlüssel oder den Primärschlüssel, wenn `key` ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) ist.
- [`IDBIndex.getAll()`](/de/docs/Web/API/IDBIndex/getAll)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und findet in einem separaten Thread alle übereinstimmenden Werte im referenzierten Objekt-Store, die dem angegebenen Schlüssel entsprechen oder im Bereich liegen, wenn `key` ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) ist.
- [`IDBIndex.getAllKeys()`](/de/docs/Web/API/IDBIndex/getAllKeys)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und findet in einem separaten Thread alle übereinstimmenden Schlüssel im referenzierten Objekt-Store, die dem angegebenen Schlüssel entsprechen oder im Bereich liegen, wenn `key` ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) ist.
- [`IDBIndex.openCursor()`](/de/docs/Web/API/IDBIndex/openCursor)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und erstellt in einem separaten Thread einen [Cursor](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) über den angegebenen Schlüsselbereich.
- [`IDBIndex.openKeyCursor()`](/de/docs/Web/API/IDBIndex/openKeyCursor)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und erstellt in einem separaten Thread einen Cursor über den angegebenen Schlüsselbereich, wie von diesem Index angeordnet.

## Beispiel

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objekt-Store und holen dann den Index `lName` aus einer einfachen Kontaktdatenbank. Anschließend öffnen wir einen grundlegenden Cursor auf dem Index mithilfe von [`IDBIndex.openCursor`](/de/docs/Web/API/IDBIndex/openCursor) — dies funktioniert genauso wie das Öffnen eines Cursors direkt auf einem `ObjectStore` mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), außer dass die zurückgegebenen Datensätze basierend auf dem Index und nicht dem Primärschlüssel sortiert sind.

Schließlich iterieren wir durch jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Für ein vollständiges Arbeitsbeispiel siehe unser [IndexedDB-Beispiele-Demo-Repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/).)

```js
function displayDataByIndex() {
  tableEntry.textContent = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");
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
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
