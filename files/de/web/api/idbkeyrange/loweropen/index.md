---
title: "IDBKeyRange: lowerOpen-Eigenschaft"
short-title: lowerOpen
slug: Web/API/IDBKeyRange/lowerOpen
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte **`lowerOpen`**-Eigenschaft des
[`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob der
untere Grenzwert im Schlüsselbereich enthalten ist.

## Wert

Ein boolescher Wert:

| Wert    | Bedeutung                                                     |
| ------- | ------------------------------------------------------------- |
| `true`  | Der untere Grenzwert ist im Schlüsselbereich nicht enthalten. |
| `false` | Der untere Grenzwert ist im Schlüsselbereich enthalten.       |

## Beispiele

Das folgende Beispiel veranschaulicht, wie Sie einen Schlüsselbereich nutzen würden. Hier
deklarieren wir `keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);` — einen
Bereich, der alles zwischen "F" und "W" enthält, jedoch diese nicht — da sowohl die
oberen als auch die unteren Grenzen als offen (`true`) deklariert wurden. Wir öffnen eine
Transaktion (mit [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) und einen Objektspeicher und öffnen einen Cursor
mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), wobei wir `keyRangeValue` als
seinen optionalen Schlüsselbereichswert deklarieren.

Nach der Deklaration des Schlüsselbereichs protokollieren wir den Wert seiner `lowerOpen`-Eigenschaft
in der Konsole, der als "true" erscheinen sollte: Die untere Grenze ist offen und wird daher nicht im
Bereich enthalten sein.

> [!NOTE]
> Für ein vollständigeres Beispiel, das Ihnen erlaubt, mit dem
> Schlüsselbereich zu experimentieren, werfen Sie einen Blick auf unser [IDBKeyRange-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) Repository ([sehen Sie sich das Beispiel auch live an](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.bound("F", "W", true, true);
  console.log(keyRangeValue.lowerOpen);

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
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
