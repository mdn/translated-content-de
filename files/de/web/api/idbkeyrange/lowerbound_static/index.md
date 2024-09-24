---
title: "IDBKeyRange: lowerBound() statische Methode"
short-title: lowerBound()
slug: Web/API/IDBKeyRange/lowerBound_static
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`lowerBound()`** statische Methode der
{{domxref("IDBKeyRange")}}-Schnittstelle erstellt einen neuen Schlüsselbereich mit nur einer unteren Grenze.
Standardmäßig schließt sie den unteren Endpunktwert ein und ist geschlossen.

## Syntax

```js-nolint
IDBKeyRange.lowerBound(lower)
IDBKeyRange.lowerBound(lower, open)
```

### Parameter

- `lower`
  - : Gibt die untere Grenze des neuen Schlüsselbereichs an.
- `open` {{optional_inline}}
  - : Gibt an, ob die untere Grenze den Endpunktwert ausschließt. Der Standardwert ist
    false.

### Rückgabewert

{{domxref("IDBKeyRange")}}: Der neu erstellte Schlüsselbereich.

### Ausnahmen

- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Schlüssel, der dem `lower`-Parameter zugeordnet ist, kein gültiger Schlüssel ist.

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen Schlüsselbereich mit unterer Grenze verwenden würden. Hier wird `keyRangeValue = IDBKeyRange.lowerBound("F", false);` deklariert — ein Bereich, der den Wert "F" und alles danach enthält. Wir öffnen eine Transaktion (unter Verwendung von
{{domxref("IDBTransaction")}}) und einen Objekt-Store und öffnen einen Cursor mit
{{domxref("IDBObjectStore.openCursor")}}, wobei `keyRangeValue` als optionaler Schlüsselbereichswert angegeben wird. Dies bedeutet, dass der Cursor nur den Datensatz mit dem Schlüsselwert "F" und alle, die danach kommen, abruft. Wenn wir `IDBKeyRange.lowerBound("F", true);` verwenden würden, würde der Bereich "F" nicht einschließen; nur die Werte danach.

> [!NOTE]
> Für ein umfassenderes Beispiel, das Ihnen das Experimentieren mit
> Schlüsselbereichen ermöglicht, schauen Sie sich unser [IDBKeyRange-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) Repository an
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
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live anzeigen](https://mdn.github.io/dom-examples/to-do-notifications/)).
