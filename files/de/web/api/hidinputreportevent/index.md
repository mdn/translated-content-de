---
title: HIDInputReportEvent
slug: Web/API/HIDInputReportEvent
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`HIDInputReportEvent`**-Schnittstelle der [WebHID API](/de/docs/Web/API/WebHID_API) wird an das {{domxref("HIDDevice.inputreport_event", "inputreport")}}-Ereignis von `HIDDevice` übergeben, wenn ein Eingabereport von einem zugehörigen HID-Gerät empfangen wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von {{domxref("Event")}}._

- {{domxref("HIDInputReportEvent.data")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{jsxref("DataView")}}, das die Daten aus dem Eingabereport enthält, wobei der `reportId` ausgeschlossen wird, wenn die HID-Schnittstelle Report-IDs verwendet.
- {{domxref("HIDInputReportEvent.device")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die {{domxref("HIDDevice")}}-Instanz, die die HID-Schnittstelle repräsentiert, die den Eingabereport gesendet hat.
- {{domxref("HIDInputReportEvent.reportId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das einbyteige Identifikationspräfix für diesen Report oder 0, wenn die HID-Schnittstelle keine Report-IDs verwendet.

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von ihrem Elternteil, {{domxref("Event")}}._

## Beispiele

Das folgende Beispiel zeigt das Lauschen auf ein `inputReport`, das es der Anwendung ermöglicht zu erkennen, welcher Knopf auf einem Joy-Con Right-Gerät gedrückt wird. Weitere Beispiele und Live-Demos finden Sie im Artikel [Verbindung zu ungewöhnlichen HID-Geräten herstellen](https://developer.chrome.com/docs/capabilities/hid).

```js
device.addEventListener("inputreport", (event) => {
  const { data, device, reportId } = event;

  // Handhaben Sie nur das Joy-Con Right-Gerät und eine bestimmte Report-ID.
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
