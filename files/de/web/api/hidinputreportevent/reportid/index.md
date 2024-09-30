---
title: "HIDInputReportEvent: reportId-Eigenschaft"
short-title: reportId
slug: Web/API/HIDInputReportEvent/reportId
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`reportId`**-Eigenschaft der [`HIDInputReportEvent`](/de/docs/Web/API/HIDInputReportEvent)-Schnittstelle gibt das Ein-Byte-Identifikationspräfix für diesen Bericht zurück oder 0, wenn die HID-Schnittstelle keine Bericht-IDs verwendet.

## Wert

Ein Ein-Byte-Identifikationspräfix.

## Beispiele

Im folgenden Beispiel wird die `reportId` eines eingehenden Eingabereports in der Konsole protokolliert.

```js
device.addEventListener("inputreport", (event) => {
  const { data, device, reportId } = event;
  console.log(reportId);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
