---
title: "HIDDevice: inputreport-Ereignis"
short-title: inputreport
slug: Web/API/HIDDevice/inputreport_event
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Das **`inputreport`**-Ereignis der [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Schnittstelle wird ausgelöst, wenn ein neuer Bericht vom HID-Gerät empfangen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("inputreport", (event) => {});

oninputreport = (event) => {};
```

## Ereignistyp

Ein [`HIDInputReportEvent`](/de/docs/Web/API/HIDInputReportEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("HIDInputReportEvent")}}

## Eigenschaften des Ereignisses

_Diese Schnittstelle erbt auch Eigenschaften von [`Event`](/de/docs/Web/API/Event)._

- [`HIDInputReportEvent.data`](/de/docs/Web/API/HIDInputReportEvent/data) {{ReadOnlyInline}}
  - : Ein {{jsxref("DataView")}}, der die Daten aus dem Eingabereport enthält, ohne die `reportId`, falls die HID-Schnittstelle Report-IDs verwendet.
- [`HIDInputReportEvent.device`](/de/docs/Web/API/HIDInputReportEvent/device) {{ReadOnlyInline}}
  - : Die [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Instanz, die die HID-Schnittstelle darstellt, die den Eingabereport gesendet hat.
- [`HIDInputReportEvent.reportId`](/de/docs/Web/API/HIDInputReportEvent/reportId) {{ReadOnlyInline}}
  - : Das einbyte-Identifikationspräfix für diesen Bericht oder 0, wenn die HID-Schnittstelle keine Report-IDs verwendet.

## Beispiel

Das folgende Beispiel zeigt, wie Sie ein `inputreport`-Ereignis überwachen, um der Anwendung zu ermöglichen, zu erkennen, welcher Knopf auf einem Joy-Con-Rechts-Gerät gedrückt wird. Weitere Beispiele und Live-Demos finden Sie im Artikel [Connecting to uncommon HID devices](https://developer.chrome.com/docs/capabilities/hid).

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
