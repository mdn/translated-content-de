---
title: IDBKeyRange
slug: Web/API/IDBKeyRange
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`IDBKeyRange`**-Schnittstelle der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) repräsentiert ein kontinuierliches Intervall über einen Datentyp, der für Schlüssel verwendet wird. Datensätze können aus [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) und [`IDBIndex`](/de/docs/Web/API/IDBIndex) Objekten unter Verwendung von Schlüsseln oder einem Schlüsselbereich abgerufen werden. Sie können den Bereich mithilfe von unteren und oberen Grenzen festlegen. Zum Beispiel können Sie über alle Werte eines Schlüssels im Wertebereich A–Z iterieren.

Ein Schlüsselbereich kann ein einzelner Wert oder ein Bereich mit oberen und unteren Grenzen oder Endpunkten sein. Wenn der Schlüsselbereich sowohl obere als auch untere Grenzen hat, dann ist er _begrenzt_; hat er keine Grenzen, ist er _unbegrenzt_. Ein begrenzter Schlüsselbereich kann entweder offen (die Endpunkte sind ausgeschlossen) oder geschlossen (die Endpunkte sind eingeschlossen) sein. Um alle Schlüssel innerhalb eines bestimmten Bereichs abzurufen, können Sie die folgenden Codekonstrukte verwenden:

| Bereich                           | Code                                   |
| --------------------------------- | -------------------------------------- |
| Alle Schlüssel ≥ **x**            | `IDBKeyRange.lowerBound(x)`            |
| Alle Schlüssel > **x**            | `IDBKeyRange.lowerBound(x, true)`      |
| Alle Schlüssel ≤ **y**            | `IDBKeyRange.upperBound(y)`            |
| Alle Schlüssel < **y**            | `IDBKeyRange.upperBound(y, true)`      |
| Alle Schlüssel ≥ **x** && ≤ **y** | `IDBKeyRange.bound(x, y)`              |
| Alle Schlüssel > **x** &&< **y**  | `IDBKeyRange.bound(x, y, true, true)`  |
| Alle Schlüssel > **x** && ≤ **y** | `IDBKeyRange.bound(x, y, true, false)` |
| Alle Schlüssel ≥ **x** &&< **y**  | `IDBKeyRange.bound(x, y, false, true)` |
| Der Schlüssel = **z**             | `IDBKeyRange.only(z)`                  |

Ein Schlüssel liegt in einem Schlüsselbereich, wenn die folgenden Bedingungen zutreffen:

- Der untere Wert des Schlüsselbereichs ist einer der folgenden:

  - `undefined`
  - Weniger als der Schlüsselwert
  - Gleich dem Schlüsselwert, wenn `lowerOpen` `false` ist.

- Der obere Wert des Schlüsselbereichs ist einer der folgenden:

  - `undefined`
  - Größer als der Schlüsselwert
  - Gleich dem Schlüsselwert, wenn `upperOpen` `false` ist.

## Instanz-Eigenschaften

- [`IDBKeyRange.lower`](/de/docs/Web/API/IDBKeyRange/lower) {{ReadOnlyInline}}
  - : Untere Grenze des Schlüsselbereichs.
- [`IDBKeyRange.upper`](/de/docs/Web/API/IDBKeyRange/upper) {{ReadOnlyInline}}
  - : Obere Grenze des Schlüsselbereichs.
- [`IDBKeyRange.lowerOpen`](/de/docs/Web/API/IDBKeyRange/lowerOpen) {{ReadOnlyInline}}
  - : Gibt `false` zurück, wenn der Wert der unteren Grenze im Schlüsselbereich eingeschlossen ist.
- [`IDBKeyRange.upperOpen`](/de/docs/Web/API/IDBKeyRange/upperOpen) {{ReadOnlyInline}}
  - : Gibt `false` zurück, wenn der Wert der oberen Grenze im Schlüsselbereich eingeschlossen ist.

## Statische Methoden

- [`IDBKeyRange.bound()`](/de/docs/Web/API/IDBKeyRange/bound_static)
  - : Erstellt einen neuen Schlüsselbereich mit oberen und unteren Grenzen.
- [`IDBKeyRange.only()`](/de/docs/Web/API/IDBKeyRange/only_static)
  - : Erstellt einen neuen Schlüsselbereich, der einen einzigen Wert enthält.
- [`IDBKeyRange.lowerBound()`](/de/docs/Web/API/IDBKeyRange/lowerBound_static)
  - : Erstellt einen neuen Schlüsselbereich mit nur einer unteren Grenze.
- [`IDBKeyRange.upperBound()`](/de/docs/Web/API/IDBKeyRange/upperBound_static)
  - : Erstellt einen neuen oberen Grenz-Schlüsselbereich.

## Instanz-Methoden

- [`IDBKeyRange.includes()`](/de/docs/Web/API/IDBKeyRange/includes)
  - : Gibt einen boolean zurück, der angibt, ob ein bestimmter Schlüssel innerhalb des Schlüsselbereichs liegt.

## Beispiele

Das folgende Beispiel veranschaulicht, wie Sie einen Schlüsselbereich verwenden würden. Hier deklarieren wir `keyRangeValue` als Bereich zwischen den Werten `"A"` und `"F"`. Wir öffnen eine Transaktion (unter Verwendung von [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) und ein Objekt-Store und öffnen einen Cursor mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), wobei wir `keyRangeValue` als optionalen Schlüsselbereichswert angeben. Dies bedeutet, dass der Cursor nur Datensätze mit Schlüsseln innerhalb dieses Bereichs abrufen wird. Dieser Bereich schließt die Werte `"A"` und `"F"` ein, da wir nicht angegeben haben, dass sie offene Grenzen sein sollten. Würden wir `IDBKeyRange.bound("A", "F", true, true);` verwenden, dann würde der Bereich `"A"` und `"F"` nicht einschließen, sondern nur die Werte dazwischen.

> [!NOTE]
> Für ein vollständigeres Beispiel, das Ihnen erlaubt, mit dem Schlüsselbereich zu experimentieren, sehen Sie sich unser [IDBKeyRange-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) Repo an ([sehen Sie das Beispiel auch live](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/)).

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.bound("A", "F");

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
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
