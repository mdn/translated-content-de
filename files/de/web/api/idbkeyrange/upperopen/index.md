---
title: "IDBKeyRange: upperOpen-Eigenschaft"
short-title: upperOpen
slug: Web/API/IDBKeyRange/upperOpen
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte **`upperOpen`**-Eigenschaft der
{{domxref("IDBKeyRange")}}-Schnittstelle gibt einen booleschen Wert zurück, der anzeigt, ob der
obere Grenzwert im Schlüsselbereich enthalten ist.

## Wert

Ein boolescher Wert:

| Wert    | Anzeige                                                   |
| ------- | --------------------------------------------------------- |
| `true`  | Der obere Grenzwert ist im Schlüsselbereich nicht enthalten. |
| `false` | Der obere Grenzwert ist im Schlüsselbereich enthalten.     |

## Beispiele

Das folgende Beispiel veranschaulicht, wie Sie einen Schlüsselbereich verwenden würden. Hier
deklarieren wir `keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);` — ein
Bereich, der alles zwischen "F" und "W" einschließt, aber diese nicht einschließt, da sowohl
die obere als auch die untere Grenze als offen (`true`) deklariert wurden. Wir öffnen eine
Transaktion (mit {{domxref("IDBTransaction")}}) und einen Objektstore und öffnen einen Cursor
mit {{domxref("IDBObjectStore.openCursor")}}, wobei wir `keyRangeValue` als optionalen Schlüsselbereichswert angeben.

Nachdem wir den Schlüsselbereich deklariert haben, protokollieren wir den Wert seiner `upperOpen`-Eigenschaft auf der Konsole, die als "true" angezeigt werden sollte: Die obere Grenze ist offen und wird daher nicht im Bereich enthalten sein.

> [!NOTE]
> Für ein vollständigeres Beispiel, das Ihnen erlaubt, mit
> Schlüsselbereichen zu experimentieren, schauen Sie sich unser [IDBKeyRange-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) Repository an ([das Beispiel auch live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

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
      console.log("Alle Einträge angezeigt.");
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
- Festlegen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
