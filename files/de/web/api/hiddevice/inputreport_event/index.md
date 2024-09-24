---
title: "HIDDevice: inputreport-Ereignis"
short-title: inputreport
slug: Web/API/HIDDevice/inputreport_event
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Das **`inputreport`**-Ereignis der {{domxref("HIDDevice")}}-Schnittstelle wird ausgelöst, wenn ein neuer Bericht vom HID-Gerät empfangen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("inputreport", (event) => {});

oninputreport = (event) => {};
```

## Ereignistyp

Ein {{domxref("HIDInputReportEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("HIDInputReportEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von {{domxref("Event")}}._

- {{domxref("HIDInputReportEvent.data")}} {{ReadOnlyInline}}
  - : Ein {{jsxref("DataView")}}, das die Daten aus dem Eingabereport enthält, ohne die `reportId`, wenn die HID-Schnittstelle Bericht-IDs verwendet.
- {{domxref("HIDInputReportEvent.device")}} {{ReadOnlyInline}}
  - : Die {{domxref("HIDDevice")}}-Instanz, die die HID-Schnittstelle repräsentiert, die den Eingabereport gesendet hat.
- {{domxref("HIDInputReportEvent.reportId")}} {{ReadOnlyInline}}
  - : Das ein Byte große Identifikationspräfix für diesen Bericht oder 0, wenn die HID-Schnittstelle keine Bericht-IDs verwendet.

## Beispiel

Das folgende Beispiel zeigt, wie Sie ein `inputreport`-Ereignis überwachen, das es der Anwendung ermöglicht, zu erkennen, welcher Knopf auf einem Joy-Con-Rechts-Gerät gedrückt wird. Weitere Beispiele und Live-Demos finden Sie im Artikel [Connecting to uncommon HID devices](https://developer.chrome.com/docs/capabilities/hid).

```js
device.addEventListener("inputreport", (event) => {
  const { data, device, reportId } = event;

  // Behandeln Sie nur das Joy-Con-Rechts-Gerät und eine spezifische Bericht-ID.
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
