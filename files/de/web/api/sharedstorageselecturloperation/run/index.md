---
title: "SharedStorageSelectURLOperation: run() Methode"
short-title: run()
slug: Web/API/SharedStorageSelectURLOperation/run
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Shared Storage API")}}

Die **`run()`** Methode der [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation) Schnittstelle definiert die Struktur, der die `run()` Methode innerhalb einer URL-Auswahl-Ausgabegatteroperation entsprechen sollte.

## Syntax

```js-nolint
run(urls, data)
```

### Parameter

- `urls`
  - : Ein Array von Objekten, die die URLs repräsentieren, die von der URL-Auswahloperation ausgewählt werden sollen. Jedes Objekt enthält zwei Eigenschaften:
    - `url`
      - : Ein String, der die URL darstellt.
    - `reportingMetadata` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften enthält, bei denen die Namen Ereignistypen sind und die Werte URLs sind, die auf Berichtsdestinationen verweisen, zum Beispiel `"click" : "my-reports/report1.html"`. Die URLs dienen als Ziele für Berichte, die mit einer Destination vom Typ `"shared-storage-select-url"` eingereicht werden, typischerweise eingereicht über einen Aufruf der Methode [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) oder [`Fence.setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons).
- `data`
  - : Ein Objekt, das alle Daten darstellt, die zur Ausführung der Operation erforderlich sind.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Zahl erfüllt wird, die den Array-Index der von der Operation ausgewählten URL definiert.

## Beispiele

Sehen Sie sich die Hauptseite [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation) für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
