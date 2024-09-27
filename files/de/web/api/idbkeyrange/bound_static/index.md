---
title: "IDBKeyRange: bound() statische Methode"
short-title: bound()
slug: Web/API/IDBKeyRange/bound_static
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`bound()`** statische Methode der [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
Schnittstelle erstellt einen neuen Schlüsselbereich mit den angegebenen oberen und unteren Grenzen. Die
Grenzen können offen sein (d. h. die Grenzen schließen die Endpunktwerte aus) oder geschlossen (d. h. die Grenzen schließen die Endpunktwerte ein). Standardmäßig sind die Grenzen geschlossen.

## Syntax

```js-nolint
IDBKeyRange.bound(lower, upper)
IDBKeyRange.bound(lower, upper, lowerOpen)
IDBKeyRange.bound(lower, upper, lowerOpen, upperOpen)
```

### Parameter

- `lower`
  - : Gibt die untere Grenze des neuen Schlüsselbereichs an.
- `upper`
  - : Gibt die obere Grenze des neuen Schlüsselbereichs an.
- `lowerOpen` {{optional_inline}}
  - : Gibt an, ob die untere Grenze den Endpunktwert ausschließt. Der Standardwert ist
    false.
- `upperOpen` {{optional_inline}}
  - : Gibt an, ob die obere Grenze den Endpunktwert ausschließt. Der Standardwert ist
    false.

### Rückgabewert

[`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange): Der neu erstellte Schlüsselbereich.

### Ausnahmen

- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der folgenden Bedingungen erfüllt ist:
    - Die unteren oder oberen Parameter wurden mit einem ungültigen Schlüssel übergeben.
    - Der untere Schlüssel ist größer als der obere Schlüssel.
    - Der untere Schlüssel und der obere Schlüssel stimmen überein und einer der Grenzen ist offen.

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen gebundenen Schlüsselbereich verwenden würden. Hier deklarieren wir
einen `keyRangeValue = IDBKeyRange.bound("A", "F");` — einen Bereich zwischen den Werten
"A" und "F". Wir öffnen eine Transaktion (mit [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) und einen Objektspeicher und öffnen einen Cursor mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor),
wobei wir `keyRangeValue` als optionalen Schlüsselbereichswert angeben. Dies bedeutet, dass
der Cursor nur Datensätze mit Schlüsseln innerhalb dieses Bereichs abruft. Dieser Bereich schließt
die Werte "A" und "F" ein, da wir nicht deklariert haben, dass sie offene Grenzen sein sollten. Wenn wir
`IDBKeyRange.bound("A", "F", true, true);` verwendet hätten, würde der Bereich
nicht `"A"` und `"F"`, sondern nur die Werte dazwischen einschließen.

> [!NOTE]
> Für ein vollständigeres Beispiel, das es Ihnen ermöglicht, mit dem
> Schlüsselbereich zu experimentieren, werfen Sie einen Blick auf das idbkeyrange-Verzeichnis im [indexeddb-examples](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) Repository. (Sehen Sie sich das Beispiel auch [live](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/) an.

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.bound("A", "F");

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
- Einrichten eines Bereichs von Schlüsseln: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenz-Beispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Sehen Sie sich das Beispiel live an](https://mdn.github.io/dom-examples/to-do-notifications/)).
