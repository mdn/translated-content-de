---
title: "SharedStorageSelectURLOperation: run() Methode"
short-title: run()
slug: Web/API/SharedStorageSelectURLOperation/run
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`run()`** Methode der [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation) Schnittstelle definiert die Struktur, der die `run()` Methode innerhalb eines URL-Auswahl-Ausgabegate-Operations entsprechen sollte.

## Syntax

```js-nolint
run(urls, data)
```

### Parameter

- `urls`
  - : Ein Array von Objekten, das die URLs repräsentiert, die von der URL-Auswahl-Operation ausgewählt werden sollen. Jedes Objekt enthält zwei Eigenschaften:
    - `url`
      - : Ein String, der die URL repräsentiert.
    - `reportingMetadata` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften enthält, bei denen die Namen Ereignistypen und die Werte URLs sind, die auf Berichterstattungsziele verweisen, zum Beispiel `"click" : "my-reports/report1.html"`. Die URLs fungieren als Ziele für Berichte, die mit einem Zieltyp `"shared-storage-select-url"` eingereicht werden, typischerweise über einen Aufruf der Methode [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) oder [`Fence.setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons).
- `data`
  - : Ein Objekt, das alle Daten repräsentiert, die für die Ausführung der Operation benötigt werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einer Zahl erfüllt wird, die den Array-Index der URL definiert, die von der Operation ausgewählt wurde.

## Beispiele

Siehe die Hauptseite von [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
