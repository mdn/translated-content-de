---
title: "IDBKeyRange: lower-Eigenschaft"
short-title: lower
slug: Web/API/IDBKeyRange/lower
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`lower`** schreibgeschützte Eigenschaft der
{{domxref("IDBKeyRange")}}-Schnittstelle gibt die untere Grenze des Schlüsselbereichs zurück.

## Wert

Die untere Grenze des Schlüsselbereichs (kann jeden
Typ haben).

## Beispiele

Das folgende Beispiel veranschaulicht, wie Sie einen Schlüsselbereich verwenden würden. Hier erklären wir `keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);` — ein
Bereich, der alles zwischen "F" und "W" enthält, aber diese nicht einschließt — da sowohl die obere als auch die untere Grenze als offen (`true`) erklärt wurden. Wir öffnen eine
Transaktion (mithilfe von {{domxref("IDBTransaction")}}) und einen Objekt-Speicher und öffnen einen Cursor
mit {{domxref("IDBObjectStore.openCursor")}}, wobei `keyRangeValue` als
optionalem Schlüsselbereichswert deklariert wird.

Nach der Erklärung des Schlüsselbereichs protokollieren wir den Wert seiner `lower`-Eigenschaft in die Konsole, der als "F" erscheinen sollte.

> [!NOTE]
> Für ein vollständigeres Beispiel, das es Ihnen ermöglicht, mit
> dem Schlüsselbereich zu experimentieren, werfen Sie einen Blick auf unser [IDBKeyRange-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) Repo.
> (Sehen Sie sich das Beispiel auch [live](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/) an.

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
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
