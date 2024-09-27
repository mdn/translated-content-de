---
title: "IDBKeyRange: obere Grenze() statische Methode"
short-title: obere Grenze()
slug: Web/API/IDBKeyRange/upperBound_static
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die statische Methode **`upperBound()`** der [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)-Schnittstelle erstellt einen neuen Schlüsselbereich mit oberer Grenze. Standardmäßig ist der obere Endpunktwert enthalten und geschlossen.

## Syntax

```js-nolint
IDBKeyRange.upperBound(upper)
IDBKeyRange.upperBound(upper, open)
```

### Parameter

- `upper`
  - : Gibt die obere Grenze des neuen Schlüsselbereichs an.
- `open` {{optional_inline}}
  - : Gibt an, ob die obere Grenze den Endpunktwert ausschließt. Der Standardwert ist false.

### Rückgabewert

[`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange): Der neu erstellte Schlüsselbereich.

### Ausnahmen

- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Schlüssel, der mit dem `upper`-Parameter verknüpft ist, kein gültiger Schlüssel ist.

## Beispiele

Das folgende Beispiel veranschaulicht, wie Sie einen Schlüsselbereich mit oberer Grenze verwenden würden. Hier deklarieren wir `keyRangeValue = IDBKeyRange.upperBound("F");` — ein Bereich, der den Wert "F" und alles davor einschließt. Wir öffnen eine Transaktion (mithilfe von [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) und einen Objektspeicher und öffnen einen Cursor mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), wobei wir `keyRangeValue` als optionalen Schlüsselbereichswert deklarieren.

Wenn wir `IDBKeyRange.upperBound("F", true);` verwenden würden, würde der Bereich "F" ausschließen; und stattdessen nur die Werte davor einschließen.

> [!NOTE]
> Für ein vollständigeres Beispiel, das Ihnen erlaubt, mit dem
> Schlüsselbereich zu experimentieren, werfen Sie einen Blick auf unser [IDBKeyRange-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) Repository
> ([sehen Sie sich das Beispiel auch live an](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.upperBound("F");

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

- [Verwenden von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwenden von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwenden von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
