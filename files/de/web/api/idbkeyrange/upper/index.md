---
title: "IDBKeyRange: obere Eigenschaft"
short-title: obere
slug: Web/API/IDBKeyRange/upper
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`upper`** der {{domxref("IDBKeyRange")}}-Schnittstelle gibt die obere Grenze des Schlüsselbereichs zurück.

## Wert

Die obere Grenze des Schlüsselbereichs (kann jeden Typ haben).

## Beispiele

Das folgende Beispiel veranschaulicht, wie Sie einen Schlüsselbereich verwenden würden. Hier deklarieren wir `keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);` — ein Bereich, der alles zwischen "F" und "W" einschließt, aber nicht diese selbst — da sowohl die obere als auch die untere Grenze als offen (`true`) deklariert wurden. Wir öffnen eine Transaktion (mit {{domxref("IDBTransaction")}}) und einen Objektstore und öffnen einen Cursor mit {{domxref("IDBObjectStore.openCursor")}}, wobei `keyRangeValue` als optionaler Schlüsselbereichswert deklariert wird.

Nach der Deklaration des Schlüsselbereichs protokollieren wir seinen `upper` Eigenschaftswert in der Konsole, was als "W" erscheinen sollte.

> [!NOTE]
> Für ein umfassenderes Beispiel, das Ihnen ermöglicht, mit dem
> Schlüsselbereich zu experimentieren, werfen Sie einen Blick auf unser [IDBKeyRange-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) Repo
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

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Sehen Sie sich das Beispiel live an](https://mdn.github.io/dom-examples/to-do-notifications/)).
