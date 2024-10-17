---
title: "HIDInputReportEvent: data-Eigenschaft"
short-title: data
slug: Web/API/HIDInputReportEvent/data
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`data`**-Eigenschaft der [`HIDInputReportEvent`](/de/docs/Web/API/HIDInputReportEvent)-Schnittstelle gibt eine {{jsxref("DataView")}} zurück, die die Daten aus dem Eingabebereich ohne `reportId` enthält, falls die HID-Schnittstelle Berichts-IDs verwendet.

## Wert

Ein {{jsxref("DataView")}}.

## Beispiele

Im folgenden Beispiel werden die zurückgegebenen `data` in die Konsole protokolliert.

```js
device.addEventListener("inputreport", (event) => {
  const { data, device, reportId } = event;
  console.log(data);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
