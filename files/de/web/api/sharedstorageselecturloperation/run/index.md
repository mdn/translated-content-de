---
title: "SharedStorageSelectURLOperation: run()-Methode"
short-title: run()
slug: Web/API/SharedStorageSelectURLOperation/run
l10n:
  sourceCommit: 923adb616baa87402ca965ebd18a73380cc84d27
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`run()`**-Methode der [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation)-Schnittstelle definiert die Struktur, welcher die `run()`-Methode in einer URL-Auswahl-Ausgabegate-Operation entsprechen sollte.

## Syntax

```js-nolint
run(urls, data)
```

### Parameter

- `urls`
  - : Ein Array von Objekten, die die URLs darstellen, die von der URL-Auswahloperation ausgewählt werden sollen. Jedes Objekt enthält zwei Eigenschaften:
    - `url`
      - : Ein String, der die URL darstellt.
    - `reportingMetadata` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften enthält, deren Namen Ereignistypen sind und deren Werte URLs darstellen, die auf Berichterstattungsziele verweisen, zum Beispiel `"click" : "my-reports/report1.html"`. Die URLs dienen als Ziele für Berichte, die mit einem Ziel des Typs `"shared-storage-select-url"` eingereicht werden, typischerweise eingereicht über einen Aufruf der [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) oder [`Fence.setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons)-Methode.
- `data`
  - : Ein Objekt, das alle Daten darstellt, die für die Durchführung der Operation erforderlich sind.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Nummer erfüllt wird, die den Array-Index der von der Operation ausgewählten URL definiert.

## Beispiele

Siehe die Hauptseite [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
