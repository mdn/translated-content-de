---
title: "IDBKeyRange: untereOffen Eigenschaft"
short-title: lowerOpen
slug: Web/API/IDBKeyRange/lowerOpen
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`lowerOpen`** schreibgeschützte Eigenschaft der
[`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)-Schnittstelle gibt einen Boolean zurück, der angibt, ob der
untere Grenzwert im Schlüsselbereich enthalten ist.

## Wert

Ein Boolean-Wert:

| Wert    | Anzeige                                                    |
| ------- | ---------------------------------------------------------- |
| `true`  | Der untere Grenzwert ist im Schlüsselbereich nicht enthalten. |
| `false` | Der untere Grenzwert ist im Schlüsselbereich enthalten.     |

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen Schlüsselbereich verwenden. Hier
deklarieren wir `keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);` — ein
Bereich, der alles zwischen "F" und "W" umfasst, diese jedoch nicht einschließt — da sowohl
die obere als auch die untere Grenze als offen (`true`) deklariert wurden. Wir öffnen eine
Transaktion (unter Verwendung von [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) und einen Objekt-Store und öffnen einen Cursor
mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), wobei wir `keyRangeValue` als
optionalen Schlüsselbereich-Wert angeben.

Nach der Deklaration des Schlüsselbereichs protokollieren wir seinen `lowerOpen` Eigenschaftswert in der
Konsole, die als "true" erscheinen sollte: die untere Grenze ist offen und wird daher nicht in
den Bereich eingeschlossen.

> [!NOTE]
> Für ein vollständigeres Beispiel, das Ihnen ermöglicht, mit
> dem Schlüsselbereich zu experimentieren, schauen Sie sich unser [IDBKeyRange-example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) Repo an ([sehen Sie sich das Beispiel auch live an](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

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
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwenden von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwenden von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
