---
title: "HIDInputReportEvent: data-Eigenschaft"
short-title: data
slug: Web/API/HIDInputReportEvent/data
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`data`**-Eigenschaft der [`HIDInputReportEvent`](/de/docs/Web/API/HIDInputReportEvent)-Schnittstelle gibt eine {{jsxref("DataView")}} zurück, die die Daten aus dem Eingaberapport enthält, abzüglich der `reportId`, falls die HID-Schnittstelle Report-IDs verwendet.

## Wert

Eine {{jsxref("DataView")}}.

## Beispiele

Im folgenden Beispiel werden die zurückgegebenen `data` an die Konsole ausgegeben.

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
