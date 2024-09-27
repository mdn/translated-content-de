---
title: "IDBKeyRange: upper-Eigenschaft"
short-title: upper
slug: Web/API/IDBKeyRange/upper
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte **`upper`**-Eigenschaft des [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)-Interfaces gibt die obere Grenze des Schlüsselbereichs zurück.

## Wert

Die obere Grenze des Schlüsselbereichs (kann jeden Typ haben).

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen Schlüsselbereich verwenden würden. Hier deklarieren wir `keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);` — einen Bereich, der alles zwischen "F" und "W" umfasst, aber diese nicht einschließt, da sowohl die obere als auch die untere Grenze als offen (`true`) deklariert wurden. Wir eröffnen eine Transaktion (mit [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) und einen Objekt-Store, und öffnen einen Cursor mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), wobei wir `keyRangeValue` als optionalen Schlüsselbereichswert deklarieren.

Nachdem der Schlüsselbereich deklariert wurde, protokollieren wir den Wert seiner `upper`-Eigenschaft in die Konsole, was als "W" erscheinen sollte.

> [!NOTE]
> Für ein vollständigeres Beispiel, das Ihnen erlaubt, mit Schlüsselbereichen zu experimentieren, schauen Sie sich unser [IDBKeyRange-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) Repo an
> ([sehen Sie sich das Beispiel auch live an](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.bound("F", "W", true, true);
  console.log(keyRangeValue.upper);

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

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Bereich von Schlüsseln setzen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
