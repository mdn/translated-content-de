---
title: "IDBKeyRange: only() statische Methode"
short-title: only()
slug: Web/API/IDBKeyRange/only_static
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`only()`** statische Methode der {{domxref("IDBKeyRange")}}-Schnittstelle erstellt einen neuen Schlüsselbereich, der nur einen einzigen Wert enthält.

## Syntax

```js-nolint
IDBKeyRange.only(value)
```

### Parameter

- `value`
  - : Der Wert für den neuen Schlüsselbereich.

### Rückgabewert

{{domxref("IDBKeyRange")}}: Der neu erstellte Schlüsselbereich.

### Ausnahmen

- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der `value`-Parameter kein gültiger Schlüssel war.

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen only-Schlüsselbereich verwenden würden. Hier deklarieren wir einen `keyRangeValue = IDBKeyRange.only("A");` — einen Bereich, der nur den Wert "A" enthält. Wir öffnen eine Transaktion (mit {{domxref("IDBTransaction")}}) und einen Objektspeicher und öffnen einen Cursor mit {{domxref("IDBObjectStore.openCursor")}}, indem wir `keyRangeValue` als optionalen Schlüsselbereichswert deklarieren. Dies bedeutet, dass der Cursor nur den Datensatz mit dem Schlüsselwert "A" abruft.

> [!NOTE]
> Für ein vollständigeres Beispiel, das es Ihnen ermöglicht, mit Schlüsselbereichen zu experimentieren, werfen Sie einen Blick auf unser [IDBKeyRange](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange)
> Repository ([sehen Sie sich auch das Live-Beispiel an](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

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
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursorn: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Live-Beispiel ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
