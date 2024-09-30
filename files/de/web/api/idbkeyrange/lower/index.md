---
title: "IDBKeyRange: lower-Eigenschaft"
short-title: lower
slug: Web/API/IDBKeyRange/lower
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`lower`** schreibgeschützte Eigenschaft der [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)-Schnittstelle gibt die untere Grenze des Schlüsselspektrums zurück.

## Wert

Die untere Grenze des Schlüsselspektrums (kann jeden Typ haben).

## Beispiele

Das folgende Beispiel veranschaulicht, wie Sie ein Schlüsselspektrum verwenden würden. Hier deklarieren wir `keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);` — ein Spektrum, das alles zwischen "F" und "W" umfasst, aber sie nicht einschließt — da sowohl die obere als auch die untere Grenze als offen (`true`) deklariert wurden. Wir öffnen eine Transaktion (mit [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) und ein Objekt-Store und öffnen einen Cursor mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), wobei `keyRangeValue` als optionaler Schlüsselspektrumswert deklariert wird.

Nachdem das Schlüsselspektrum deklariert wurde, protokollieren wir dessen `lower`-Eigenschaftswert in der Konsole, die als "F" erscheinen sollte.

> [!NOTE]
> Für ein vollständigeres Beispiel, das es Ihnen ermöglicht, mit Schlüsselspektren zu experimentieren, schauen Sie sich unser [IDBKeyRange-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) Repository an.
> (Sie können das Beispiel auch [live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/)).

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
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselspektrums: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abfragen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Live-Beispiel ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
