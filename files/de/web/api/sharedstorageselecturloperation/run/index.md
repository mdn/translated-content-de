---
title: "SharedStorageSelectURLOperation: run()-Methode"
short-title: run()
slug: Web/API/SharedStorageSelectURLOperation/run
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`run()`**-Methode der {{domxref("SharedStorageSelectURLOperation")}}-Schnittstelle definiert die Struktur, der die `run()`-Methode innerhalb einer URL-Auswahl-Ausgabegate-Operation entsprechen sollte.

## Syntax

```js-nolint
run(urls, data)
```

### Parameter

- `urls`
  - : Ein Array von Objekten, das die URLs darstellt, die von der URL-Auswahloperation ausgewählt werden sollen. Jedes Objekt enthält zwei Eigenschaften:
    - `url`
      - : Ein String, der die URL darstellt.
    - `reportingMetadata` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften enthält, bei denen die Namen Ereignistypen sind und die Werte URLs, die auf Meldeziele verweisen, zum Beispiel `"click" : "my-reports/report1.html"`. Die URLs fungieren als Ziele für Berichte, die an ein Ziel vom Typ `"shared-storage-select-url"` übermittelt werden, typischerweise eingereicht über einen Aufruf der Methode {{domxref("Fence.reportEvent()")}} oder {{domxref("Fence.setReportEventDataForAutomaticBeacons()")}}.
- `data`
  - : Ein Objekt, das alle benötigten Daten für die Durchführung der Operation darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einer Zahl aufgelöst wird, die den Array-Index der von der Operation ausgewählten URL definiert.

## Beispiele

Ein Beispiel finden Sie auf der Hauptseite von {{domxref("SharedStorageSelectURLOperation")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
