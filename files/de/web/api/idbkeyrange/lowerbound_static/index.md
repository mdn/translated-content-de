---
title: "IDBKeyRange: lowerBound()-statische Methode"
short-title: lowerBound()
slug: Web/API/IDBKeyRange/lowerBound_static
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`lowerBound()`**-statische Methode der [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)-Schnittstelle erstellt einen neuen Schlüsselbereich mit nur einer unteren Grenze. Standardmäßig schließt er den unteren Endpunktwert ein und ist geschlossen.

## Syntax

```js-nolint
IDBKeyRange.lowerBound(lower)
IDBKeyRange.lowerBound(lower, open)
```

### Parameter

- `lower`
  - : Gibt die untere Grenze des neuen Schlüsselbereichs an.
- `open` {{optional_inline}}
  - : Gibt an, ob der untere Grenzwert den Endpunktwert ausschließt. Der Standardwert ist false.

### Rückgabewert

[`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange): Der neu erstellte Schlüsselbereich.

### Ausnahmen

- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Schlüssel, der mit dem `lower`-Parameter verbunden ist, kein gültiger Schlüssel ist.

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen Schlüsselbereich mit unterer Grenze verwenden würden. Hier deklarieren wir `keyRangeValue = IDBKeyRange.lowerBound("F", false);` — einen Bereich, der den Wert "F" und alles danach einschließt. Wir öffnen eine Transaktion (mithilfe von [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) und ein Objekt-Store und öffnen einen Cursor mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), wobei `keyRangeValue` als optionaler Schlüsselbereichswert deklariert wird. Dies bedeutet, dass der Cursor nur den Datensatz mit dem Schlüsselwert "F" und allen danach folgenden abrufen wird. Wenn wir `IDBKeyRange.lowerBound("F", true);` verwenden würden, würde der Bereich "F" nicht einschließen, sondern nur die Werte danach.

> [!NOTE]
> Für ein umfassenderes Beispiel, das Ihnen erlaubt, mit dem Schlüsselbereich zu experimentieren, schauen Sie sich unser [IDBKeyRange-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) Repository an
> ([sehen Sie sich das Beispiel auch live an](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.lowerBound("F");

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
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwenden von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwenden von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Sehen Sie sich das Beispiel live an](https://mdn.github.io/dom-examples/to-do-notifications/)).
