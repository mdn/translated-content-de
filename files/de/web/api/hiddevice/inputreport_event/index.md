---
title: "HIDDevice: inputreport-Ereignis"
short-title: inputreport
slug: Web/API/HIDDevice/inputreport_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Das **`inputreport`**-Ereignis der [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Schnittstelle wird ausgelöst, wenn ein neuer Bericht vom HID-Gerät empfangen wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("inputreport", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oninputreport = (event) => { }
```

## Ereignistyp

Ein [`HIDInputReportEvent`](/de/docs/Web/API/HIDInputReportEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("HIDInputReportEvent")}}

## Beispiel

Das folgende Beispiel zeigt, wie Sie auf ein `inputreport`-Ereignis reagieren, um zu erkennen, welche Taste auf einem Joy-Con Right-Gerät gedrückt wird. Weitere Beispiele und interaktive Demos finden Sie im Artikel [Verbindung mit ungewöhnlichen HID-Geräten herstellen](https://developer.chrome.com/docs/capabilities/hid).

```js
device.addEventListener("inputreport", (event) => {
  const { data, device, reportId } = event;

  // Handle only the Joy-Con Right device and a specific report ID.
  if (device.productId !== 0x2007 && reportId !== 0x3f) return;

  const value = data.getUint8(0);
  if (value === 0) return;

  const someButtons = { 1: "A", 2: "X", 4: "B", 8: "Y" };
  console.log(`User pressed button ${someButtons[value]}.`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
