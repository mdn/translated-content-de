---
title: HIDInputReportEvent
slug: Web/API/HIDInputReportEvent
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`HIDInputReportEvent`** Schnittstelle der [WebHID API](/de/docs/Web/API/WebHID_API) wird beim [`inputreport`](/de/docs/Web/API/HIDDevice/inputreport_event)-Ereignis von `HIDDevice` übergeben, wenn ein Eingabereport von einem zugehörigen HID-Gerät empfangen wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`Event`](/de/docs/Web/API/Event)._

- [`HIDInputReportEvent.data`](/de/docs/Web/API/HIDInputReportEvent/data) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{jsxref("DataView")}}, das die Daten des Eingabereports ohne die `reportId` enthält, wenn die HID-Schnittstelle Report-IDs verwendet.
- [`HIDInputReportEvent.device`](/de/docs/Web/API/HIDInputReportEvent/device) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Instanz, die die HID-Schnittstelle repräsentiert, die den Eingabereport gesendet hat.
- [`HIDInputReportEvent.reportId`](/de/docs/Web/API/HIDInputReportEvent/reportId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das ein-Byte-Identifikationspräfix für diesen Report oder 0, wenn die HID-Schnittstelle keine Report-IDs verwendet.

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von ihrem übergeordneten Objekt, [`Event`](/de/docs/Web/API/Event)._

## Beispiele

Das folgende Beispiel zeigt, wie auf ein `inputReport` gehört wird, sodass die Anwendung erkennen kann, welcher Knopf auf einem Joy-Con-Rechts-Gerät gedrückt wird. Weitere Beispiele und Live-Demos finden Sie im Artikel [Verbindung zu ungewöhnlichen HID-Geräten herstellen](https://developer.chrome.com/docs/capabilities/hid).

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
