---
title: "IDBKeyRange: lowerOpen-Eigenschaft"
short-title: lowerOpen
slug: Web/API/IDBKeyRange/lowerOpen
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`lowerOpen`** des
{{domxref("IDBKeyRange")}}-Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob der
untere Grenzwert im Schlüsselbereich enthalten ist oder nicht.

## Wert

Ein boolescher Wert:

| Wert    | Bedeutung                                              |
| ------- | ------------------------------------------------------ |
| `true`  | Der untere Grenzwert ist nicht im Schlüsselbereich enthalten. |
| `false` | Der untere Grenzwert ist im Schlüsselbereich enthalten.     |

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen Schlüsselbereich verwenden würden. Hier deklarieren wir `keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);` — ein
Bereich, der alles zwischen "F" und "W" umfasst, diese jedoch nicht einschließt — da sowohl die obere als auch die untere Grenze als offen (`true`) deklariert wurden. Wir öffnen eine
Transaktion (mit {{domxref("IDBTransaction")}}) und einen Objektspeicher und öffnen einen Cursor mit {{domxref("IDBObjectStore.openCursor")}}, wobei `keyRangeValue` als
optionaler Schlüsselbereichswert angegeben ist.

Nach der Deklaration des Schlüsselbereichs protokollieren wir den Wert seiner `lowerOpen`-Eigenschaft in der
Konsole, der als "true" erscheinen sollte: Die untere Grenze ist offen und wird daher nicht im
Bereich enthalten sein.

> [!NOTE]
> Für ein umfassenderes Beispiel, das es Ihnen ermöglicht, mit dem
> Schlüsselbereich zu experimentieren, werfen Sie einen Blick auf unser [IDBKeyRange-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) Repo ([sehen Sie das Beispiel auch live an](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).

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

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwenden von Transaktionen: {{domxref("IDBTransaction")}}
- Einstellen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwenden von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
