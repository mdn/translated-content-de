---
title: "IDBKeyRange: lower Eigenschaft"
short-title: lower
slug: Web/API/IDBKeyRange/lower
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`lower`** des [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)-Interfaces gibt die untere Grenze des Schlüsselbereichs zurück.

## Wert

Die untere Grenze des Schlüsselbereichs (kann jeden
Typ haben.)

## Beispiele

Das folgende Beispiel veranschaulicht, wie Sie einen Schlüsselbereich verwenden würden. Hier deklarieren wir `keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);` — ein Bereich, der alles zwischen "F" und "W" enthält, jedoch diese nicht einschließt, da sowohl die obere als auch die untere Grenze als offen (`true`) erklärt wurden. Wir öffnen eine Transaktion (mit [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) und einen Objektspeicher und öffnen einen Cursor mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), wobei wir `keyRangeValue` als optionalen Schlüsselbereichswert deklarieren.

Nachdem der Schlüsselbereich deklariert ist, protokollieren wir den Wert seiner `lower`-Eigenschaft in die Konsole, der als "F" erscheinen sollte.

> [!NOTE]
> Für ein vollständigeres Beispiel, das es Ihnen ermöglicht, mit
> dem Schlüsselbereich zu experimentieren, schauen Sie sich unser [IDBKeyRange-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange)-Repo an.
> (Sehen Sie sich das Beispiel auch [live an](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/)).

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.bound("F", "W", true, true);
  console.log(keyRangeValue.lower);

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
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Sehen Sie sich das Beispiel live an](https://mdn.github.io/dom-examples/to-do-notifications/)).
