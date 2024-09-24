---
title: "HIDInputReportEvent: Geräte-Eigenschaft"
short-title: Gerät
slug: Web/API/HIDInputReportEvent/device
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`device`**-Eigenschaft der {{domxref("HIDInputReportEvent")}}-Schnittstelle gibt die {{domxref("HIDDevice")}}-Instanz zurück, die die HID-Schnittstelle repräsentiert, die den Eingaberichtbericht gesendet hat.

## Wert

Ein {{domxref("HIDDevice")}}.

## Beispiele

Im folgenden Beispiel ist `device` eine {{domxref("HIDDevice")}}-Instanz, die das Gerät repräsentiert, das den Bericht sendet. Der `productName` dieses Geräts wird in der Konsole protokolliert.

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
