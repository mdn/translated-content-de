---
title: "IDBKeyRange: only() statische Methode"
short-title: only()
slug: Web/API/IDBKeyRange/only_static
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`only()`** statische Methode der [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
Schnittstelle erstellt einen neuen Schlüsselbereich, der einen einzelnen Wert enthält.

## Syntax

```js-nolint
IDBKeyRange.only(value)
```

### Parameter

- `value`
  - : Der Wert für den neuen Schlüsselbereich.

### Rückgabewert

[`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange): Der neu erstellte Schlüsselbereich.

### Ausnahmen

- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `value`-Parameter kein gültiger Schlüssel war.

## Beispiele

Das folgende Beispiel veranschaulicht, wie Sie einen only-Schlüsselbereich verwenden würden. Hier deklarieren wir einen `keyRangeValue = IDBKeyRange.only("A");` — einen Bereich, der nur den Wert "A" umfasst. Wir öffnen eine Transaktion (unter Verwendung von [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) und einen Objekt-Store, und öffnen einen Cursor mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), indem wir `keyRangeValue` als optionalen Schlüsselbereichswert deklarieren. Das bedeutet, dass der Cursor nur den Datensatz mit dem Schlüsselwert "A" abruft.

> [!NOTE]
> Für ein vollständigeres Beispiel, das es Ihnen ermöglicht, mit dem Schlüsselbereich zu experimentieren, schauen Sie sich unser [IDBKeyRange](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange)
> Repository an ([sehen Sie sich das Beispiel auch live an](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.only("A");

  const transaction = db.transaction(["fThings"], "readonly");
  const objectStore = transaction.objectStore("fThings");

  objectStore.openCursor(keyRangeValue).onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.fThing}, ${cursor.value.fRating}`;
      list.appendChild(listItem);

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
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
