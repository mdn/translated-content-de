---
title: "HIDInputReportEvent: data-Eigenschaft"
short-title: data
slug: Web/API/HIDInputReportEvent/data
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`data`**-Eigenschaft der {{domxref("HIDInputReportEvent")}}-Schnittstelle gibt ein {{jsxref("DataView")}} zurück, das die Daten aus dem Eingabereport enthält, ohne die `reportId`, falls die HID-Schnittstelle Report-IDs verwendet.

## Wert

Ein {{jsxref("DataView")}}.

## Beispiele

Im folgenden Beispiel wird das zurückgegebene `data` in der Konsole protokolliert.

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
