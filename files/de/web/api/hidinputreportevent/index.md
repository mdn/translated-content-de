---
title: HIDInputReportEvent
slug: Web/API/HIDInputReportEvent
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Das **`HIDInputReportEvent`**-Interface der [WebHID API](/de/docs/Web/API/WebHID_API) wird an das [`inputreport`](/de/docs/Web/API/HIDDevice/inputreport_event)-Ereignis von `HIDDevice` übergeben, wenn ein Eingabereport von einem zugehörigen HID-Gerät empfangen wird.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von [`Event`](/de/docs/Web/API/Event)._

- [`HIDInputReportEvent.data`](/de/docs/Web/API/HIDInputReportEvent/data) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{jsxref("DataView")}}, das die Daten des Eingabereports enthält, ohne die `reportId`, falls die HID-Schnittstelle Berichts-IDs verwendet.
- [`HIDInputReportEvent.device`](/de/docs/Web/API/HIDInputReportEvent/device) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Instanz, die die HID-Schnittstelle repräsentiert, die den Eingabereport gesendet hat.
- [`HIDInputReportEvent.reportId`](/de/docs/Web/API/HIDInputReportEvent/reportId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Ein-Byte-Identifikationspräfix für diesen Report oder 0, wenn die HID-Schnittstelle keine Berichts-IDs verwendet.

## Instanzmethoden

_Dieses Interface erbt Methoden von seinem Eltern-Interface, [`Event`](/de/docs/Web/API/Event)._

## Beispiele

Das folgende Beispiel zeigt das Lauschen auf ein `inputReport`, das es der Anwendung ermöglicht, zu erkennen, welcher Knopf auf einem Joy-Con Right-Gerät gedrückt wird. Weitere Beispiele und Live-Demos finden Sie im Artikel [Connecting to uncommon HID devices](https://developer.chrome.com/docs/capabilities/hid).

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
