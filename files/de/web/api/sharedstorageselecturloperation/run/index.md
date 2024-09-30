---
title: "SharedStorageSelectURLOperation: run()-Methode"
short-title: run()
slug: Web/API/SharedStorageSelectURLOperation/run
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`run()`**-Methode der [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation)-Schnittstelle definiert die Struktur, der die `run()`-Methode innerhalb einer Ausgabeschleuse zur URL-Auswahl entsprechen sollte.

## Syntax

```js-nolint
run(urls, data)
```

### Parameter

- `urls`
  - : Ein Array von Objekten, die die von der URL-Auswahloperation auszuwählenden URLs repräsentieren. Jedes Objekt enthält zwei Eigenschaften:
    - `url`
      - : Ein String, der die URL darstellt.
    - `reportingMetadata` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften enthält, bei denen die Namen Ereignistypen und die Werte URLs sind, die auf Berichtsziele verweisen, z. B. `"click" : "my-reports/report1.html"`. Die URLs dienen als Ziele für Berichte, die mit einem Zieltyp von `"shared-storage-select-url"` eingereicht werden, typischerweise über einen Aufruf der Methode [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) oder [`Fence.setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons).
- `data`
  - : Ein Objekt, das alle für die Ausführung der Operation erforderlichen Daten repräsentiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Zahl erfüllt wird, die den Array-Index der von der Operation ausgewählten URL definiert.

## Beispiele

Siehe die Hauptseite [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
