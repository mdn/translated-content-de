---
title: "HIDDevice: inputreport Ereignis"
short-title: inputreport
slug: Web/API/HIDDevice/inputreport_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Das **`inputreport`** Ereignis des [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Interfaces wird ausgelöst, wenn ein neuer Bericht vom HID-Gerät empfangen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("inputreport", (event) => { })

oninputreport = (event) => { }
```

## Ereignistyp

Ein [`HIDInputReportEvent`](/de/docs/Web/API/HIDInputReportEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("HIDInputReportEvent")}}

## Ereigniseigenschaften

_Dieses Interface erbt auch Eigenschaften von [`Event`](/de/docs/Web/API/Event)._

- [`HIDInputReportEvent.data`](/de/docs/Web/API/HIDInputReportEvent/data) {{ReadOnlyInline}}
  - : Ein {{jsxref("DataView")}}, das die Daten des Eingabebereichs enthält, ohne die `reportId`, wenn das HID-Interface Bericht-IDs verwendet.
- [`HIDInputReportEvent.device`](/de/docs/Web/API/HIDInputReportEvent/device) {{ReadOnlyInline}}
  - : Die [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Instanz, die das HID-Interface darstellt, das den Eingabebereich gesendet hat.
- [`HIDInputReportEvent.reportId`](/de/docs/Web/API/HIDInputReportEvent/reportId) {{ReadOnlyInline}}
  - : Das ein Byte lange Identifikationspräfix für diesen Bericht, oder 0, wenn das HID-Interface keine Bericht-IDs verwendet.

## Beispiel

Das folgende Beispiel demonstriert, wie man auf ein `inputreport` Ereignis hört, das es der Anwendung ermöglicht, zu erkennen, welche Taste auf einem Joy-Con Right Gerät gedrückt wird. Weitere Beispiele und Live-Demos finden Sie im Artikel [Verbindung zu ungewöhnlichen HID-Geräten](https://developer.chrome.com/docs/capabilities/hid).

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
