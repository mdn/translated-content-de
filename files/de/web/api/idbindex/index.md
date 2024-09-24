---
title: IDBIndex
slug: Web/API/IDBIndex
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die `IDBIndex`-Schnittstelle der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) bietet asynchronen Zugriff auf einen [Index](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#index) in einer Datenbank. Ein Index ist eine Art Objektspeicher, der zum Nachschlagen von Datensätzen in einem anderen Objektspeicher dient, dem sogenannten referenzierten Objektspeicher. Sie verwenden diese Schnittstelle, um Daten abzurufen.

Sie können Datensätze in einem Objektspeicher über den Primärschlüssel oder durch die Verwendung eines Indexes abrufen. Ein Index ermöglicht es Ihnen, Datensätze in einem Objektspeicher unter Verwendung von Eigenschaften der Werte in den Datensätzen der Objektspeicher, abgesehen vom Primärschlüssel, nachzuschlagen.

Der Index ist ein permanenter Schlüssel-Wert-Speicher, bei dem der Wertteil seiner Datensätze der Schlüsselteil eines Datensatzes im referenzierten Objektspeicher ist. Die Datensätze in einem Index werden automatisch gefüllt, wenn Datensätze im referenzierten Objektspeicher eingefügt, aktualisiert oder gelöscht werden. Jeder Datensatz in einem Index kann nur auf einen Datensatz im referenzierten Objektspeicher verweisen, aber mehrere Indizes können denselben Objektspeicher referenzieren. Wenn sich der Objektspeicher ändert, werden alle Indizes, die auf den Objektspeicher verweisen, automatisch aktualisiert.

Sie können eine Menge von Schlüsseln innerhalb eines Bereichs abrufen. Um mehr zu erfahren, siehe {{domxref("IDBKeyRange")}}.

## Instanz-Eigenschaften

- {{domxref("IDBIndex.isAutoLocale")}} {{ReadOnlyInline}} {{ non-standard_inline }} {{deprecated_inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Index bei seiner Erstellung einen `locale`-Wert von `auto` hatte (siehe den [`options`](/de/docs/Web/API/IDBObjectStore/createIndex#options)-Parameter von [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex).)
- {{domxref("IDBIndex.locale")}} {{ReadOnlyInline}} {{ non-standard_inline }} {{deprecated_inline}}
  - : Gibt die Locale des Indexes zurück (zum Beispiel `en-US` oder `pl`), wenn bei der Erstellung ein `locale`-Wert angegeben wurde (siehe den [`options`](/de/docs/Web/API/IDBObjectStore/createIndex#options)-Parameter von [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex).)
- {{domxref("IDBIndex.name")}}
  - : Der Name dieses Indexes.
- {{domxref("IDBIndex.objectStore")}} {{ReadOnlyInline}}
  - : Der Name des Objektspeichers, auf den dieser Index verweist.
- {{domxref("IDBIndex.keyPath")}} {{ReadOnlyInline}}
  - : Der [Schlüsselpfad](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) dieses Indexes. Ist er null, wird dieser Index nicht automatisch gefüllt.
- {{domxref("IDBIndex.multiEntry")}} {{ReadOnlyInline}}
  - : Beeinflusst, wie sich der Index verhält, wenn das Ergebnis der Auswertung des Schlüsselpfades des Indexes ein Array ergibt. Ist der Wert `true`, existiert ein Datensatz im Index für jedes Element in einem Schlüssel-Array. Ist der Wert `false`, dann existiert ein Datensatz für jeden Schlüssel, der ein Array ist.
- {{domxref("IDBIndex.unique")}} {{ReadOnlyInline}}
  - : Wenn `true`, erlaubt dieser Index keine doppelten Werte für einen Schlüssel.

## Instanz-Methoden

Erbt von: [EventTarget](/de/docs/Web/API/EventTarget)

- {{domxref("IDBIndex.count()")}}
  - : Gibt ein {{domxref("IDBRequest")}}-Objekt zurück und liefert in einem separaten Thread die Anzahl der Datensätze innerhalb eines Schlüsselbereichs.
- {{domxref("IDBIndex.get()")}}
  - : Gibt ein {{domxref("IDBRequest")}}-Objekt zurück und sucht in einem separaten Thread entweder den Wert im referenzierten Objektspeicher, der dem angegebenen Schlüssel entspricht, oder den ersten entsprechenden Wert, wenn `key` ein {{domxref("IDBKeyRange")}} ist.
- {{domxref("IDBIndex.getKey()")}}
  - : Gibt ein {{domxref("IDBRequest")}}-Objekt zurück und sucht in einem separaten Thread entweder den angegebenen Schlüssel oder den Primärschlüssel, wenn `key` ein {{domxref("IDBKeyRange")}} ist.
- {{domxref("IDBIndex.getAll()")}}
  - : Gibt ein {{domxref("IDBRequest")}}-Objekt zurück und findet in einem separaten Thread alle übereinstimmenden Werte im referenzierten Objektspeicher, die dem angegebenen Schlüssel entsprechen oder im Bereich liegen, wenn `key` ein {{domxref("IDBKeyRange")}} ist.
- {{domxref("IDBIndex.getAllKeys()")}}
  - : Gibt ein {{domxref("IDBRequest")}}-Objekt zurück und findet in einem separaten Thread alle übereinstimmenden Schlüssel im referenzierten Objektspeicher, die dem angegebenen Schlüssel entsprechen oder im Bereich liegen, wenn `key` ein {{domxref("IDBKeyRange")}} ist.
- {{domxref("IDBIndex.openCursor()")}}
  - : Gibt ein {{domxref("IDBRequest")}}-Objekt zurück und erstellt in einem separaten Thread einen [Cursor](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) über dem angegebenen Schlüsselbereich.
- {{domxref("IDBIndex.openKeyCursor()")}}
  - : Gibt ein {{domxref("IDBRequest")}}-Objekt zurück und erstellt in einem separaten Thread einen Cursor über dem angegebenen Schlüsselbereich, wie von diesem Index geordnet.

## Beispiel

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objektspeicher und holen dann den Index `lName` aus einer einfachen Kontaktdatenbank. Wir öffnen dann einen einfachen Cursor auf dem Index mit {{domxref("IDBIndex.openCursor")}} — dies funktioniert genauso wie das direkte Öffnen eines Cursors auf einem `ObjectStore` mit {{domxref("IDBObjectStore.openCursor")}}, außer dass die zurückgegebenen Datensätze auf Basis des Indexes und nicht des Primärschlüssels sortiert sind.

Schließlich iterieren wir durch jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Für ein vollständiges funktionierendes Beispiel, siehe unser [IndexedDB-examples Demo-Repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Beispiele live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/).)

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
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiele live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
