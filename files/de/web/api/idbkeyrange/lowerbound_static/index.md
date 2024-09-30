---
title: "IDBKeyRange: lowerBound() statische Methode"
short-title: lowerBound()
slug: Web/API/IDBKeyRange/lowerBound_static
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`lowerBound()`** statische Methode der
[`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)-Schnittstelle erstellt einen neuen Schlüsselsbereich mit nur einer unteren Grenze.
Standardmäßig schließt es den unteren Endpunkt-Wert ein und ist geschlossen.

## Syntax

```js-nolint
IDBKeyRange.lowerBound(lower)
IDBKeyRange.lowerBound(lower, open)
```

### Parameter

- `lower`
  - : Gibt die untere Grenze des neuen Schlüsselsbereichs an.
- `open` {{optional_inline}}
  - : Gibt an, ob die untere Grenze den Endpunkt-Wert ausschließt. Der Standardwert ist
    false.

### Rückgabewert

[`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange): Der neu erstellte Schlüsselsbereich.

### Ausnahmen

- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Schlüssel, der dem `lower`-Parameter zugeordnet ist, kein gültiger Schlüssel ist.

## Beispiele

Das folgende Beispiel veranschaulicht, wie man einen Schlüsselsbereich mit unterer Grenze verwendet. Hier deklarieren wir `keyRangeValue = IDBKeyRange.lowerBound("F", false);` — ein Bereich, der den Wert "F" und alles danach einschließt. Wir öffnen eine Transaktion (mit
[`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) und ein Objekt-Store und öffnen einen Cursor mit
[`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), wobei `keyRangeValue` als optionaler Schlüsselsbereichswert deklariert wird. Das bedeutet, dass der Cursor nur den Datensatz mit dem Schlüsselwert "F" und alle danach kommende abrufen wird. Wenn wir
`IDBKeyRange.lowerBound("F", true);` verwendet hätten, dann würde der Bereich "F" nicht einschließen;
nur die Werte danach.

> [!NOTE]
> Für ein vollständigeres Beispiel, das Ihnen erlaubt, mit dem
> Schlüsselspektrum zu experimentieren, werfen Sie einen Blick auf unser [IDBKeyRange-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) Repository
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
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselspektrums: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
