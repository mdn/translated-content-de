---
title: "HIDInputReportEvent: reportId-Eigenschaft"
short-title: reportId
slug: Web/API/HIDInputReportEvent/reportId
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`reportId`**-Eigenschaft der [`HIDInputReportEvent`](/de/docs/Web/API/HIDInputReportEvent)-Schnittstelle gibt das ein Byte große Identifikationspräfix für diesen Bericht zurück, oder 0, wenn die HID-Schnittstelle keine Bericht-IDs verwendet.

## Wert

Ein ein Byte großes Identifikationspräfix.

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
