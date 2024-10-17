---
title: "HIDInputReportEvent: device-Eigenschaft"
short-title: device
slug: Web/API/HIDInputReportEvent/device
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`device`**-Eigenschaft des [`HIDInputReportEvent`](/de/docs/Web/API/HIDInputReportEvent)-Interfaces gibt die [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Instanz zurück, die die HID-Schnittstelle repräsentiert, die den Eingabereport gesendet hat.

## Wert

Ein [`HIDDevice`](/de/docs/Web/API/HIDDevice).

## Beispiele

Im folgenden Beispiel ist `device` eine [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Instanz, die das Gerät darstellt, das den Bericht sendet. Der `productName` dieses Geräts wird in die Konsole protokolliert.

```js
device.addEventListener("inputreport", (event) => {
  const { data, device, reportId } = event;
  console.log(device.productName);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
