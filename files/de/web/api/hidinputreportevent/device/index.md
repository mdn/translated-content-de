---
title: "HIDInputReportEvent: device-Eigenschaft"
short-title: device
slug: Web/API/HIDInputReportEvent/device
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`device`**-Eigenschaft des [`HIDInputReportEvent`](/de/docs/Web/API/HIDInputReportEvent)-Interfaces gibt die [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Instanz zurück, die die HID-Schnittstelle repräsentiert, die den Eingabereport gesendet hat.

## Wert

Ein [`HIDDevice`](/de/docs/Web/API/HIDDevice).

## Beispiele

Im folgenden Beispiel ist `device` eine [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Instanz, die das Gerät repräsentiert, das den Report sendet. Der `productName` dieses Geräts wird in die Konsole ausgegeben.

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
