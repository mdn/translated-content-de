---
title: "IDBKeyRange: upperOpen-Eigenschaft"
short-title: upperOpen
slug: Web/API/IDBKeyRange/upperOpen
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte **`upperOpen`**-Eigenschaft des [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob der obere Grenzwert im Schlüsselbereich enthalten ist.

## Wert

Ein boolescher Wert:

| Wert    | Bedeutung                                                    |
| ------- | ------------------------------------------------------------ |
| `true`  | Der obere Grenzwert ist nicht im Schlüsselbereich enthalten. |
| `false` | Der obere Grenzwert ist im Schlüsselbereich enthalten.       |

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen Schlüsselbereich verwenden würden. Hier deklarieren wir `keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);` — einen Bereich, der alles zwischen "F" und "W" umfasst, aber diese nicht einschließt — da sowohl die oberen als auch die unteren Grenzen als offen (`true`) deklariert wurden. Wir öffnen eine Transaktion (mithilfe von [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) und einen Objektstore und öffnen einen Cursor mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), wobei wir `keyRangeValue` als optionalen Schlüsselbereichswert deklarieren.

Nachdem der Schlüsselbereich deklariert wurde, loggen wir den Wert seiner `upperOpen`-Eigenschaft in die Konsole, der als "true" erscheinen sollte: Die obere Grenze ist offen und wird daher nicht im Bereich enthalten sein.

> [!NOTE]
> Für ein vollständigeres Beispiel, das Ihnen erlaubt, mit dem Schlüsselbereich zu experimentieren, schauen Sie sich unser [IDBKeyRange-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) Repository an ([sehen Sie sich das Beispiel auch live an](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.bound("F", "W", true, true);
  console.log(keyRangeValue.upperOpen);

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
- Festlegung eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
