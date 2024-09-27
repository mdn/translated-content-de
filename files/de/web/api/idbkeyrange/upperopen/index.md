---
title: "IDBKeyRange: upperOpen-Eigenschaft"
short-title: upperOpen
slug: Web/API/IDBKeyRange/upperOpen
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`upperOpen`** des [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)-Interfaces gibt einen Boolean-Wert zurück, der anzeigt, ob der obere Grenzwert in den Schlüsselbereich einbezogen wird.

## Wert

Ein Boolean-Wert:

| Wert    | Bedeutung                                                    |
| ------- | ------------------------------------------------------------ |
| `true`  | Der obere Grenzwert ist nicht im Schlüsselbereich enthalten. |
| `false` | Der obere Grenzwert ist im Schlüsselbereich enthalten.       |

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen Schlüsselbereich verwenden würden. Hier deklarieren wir `keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);` — ein Bereich, der alles zwischen "F" und "W" umfasst, jedoch diese nicht einschließt — da sowohl die obere als auch die untere Grenze als offen (`true`) erklärt wurden. Wir öffnen eine Transaktion (mit [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) und einen Objektspeicher und öffnen einen Cursor mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), wobei `keyRangeValue` als optionaler Schlüsselbereichswert deklariert wird.

Nachdem der Schlüsselbereich deklariert wurde, protokollieren wir den Wert der `upperOpen`-Eigenschaft in der Konsole, der als "true" erscheinen sollte: Die obere Grenze ist offen und wird daher nicht in den Bereich einbezogen.

> [!NOTE]
> Für ein vollständigeres Beispiel, das Sie mit Schlüsselbereichen experimentieren lässt, sehen Sie sich unser [IDBKeyRange-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange)-Repo an ([sehen Sie sich das Beispiel auch live an](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

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
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
