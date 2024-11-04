---
title: HIDDevice
slug: Web/API/HIDDevice
l10n:
  sourceCommit: e4d6e3444fc0f46a2f12de882c5b12c44fb75e02
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`HIDDevice`**-Schnittstelle der [WebHID API](/de/docs/Web/API/WebHID_API) repräsentiert ein HID-Gerät. Sie bietet Eigenschaften zum Zugriff auf Informationen über das Gerät, Methoden zum Öffnen und Schließen der Verbindung sowie zum Senden und Empfangen von Berichten.

{{InheritanceDiagram}}

## Instanzeigenschaften

Diese Schnittstelle erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`HIDDevice.opened`](/de/docs/Web/API/HIDDevice/opened) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{jsxref("boolean")}} zurück, der wahr ist, wenn das Gerät eine offene Verbindung hat.
- [`HIDDevice.vendorId`](/de/docs/Web/API/HIDDevice/vendorId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die vendorId des HID-Geräts zurück.
- [`HIDDevice.productId`](/de/docs/Web/API/HIDDevice/productId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die productId des HID-Geräts zurück.
- [`HIDDevice.productName`](/de/docs/Web/API/HIDDevice/productName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der den Produktnamen des HID-Geräts enthält.
- [`HIDDevice.collections`](/de/docs/Web/API/HIDDevice/collections) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Berichtsformaten für das HID-Gerät zurück.

### Ereignisse

- [`inputreport`](/de/docs/Web/API/HIDDevice/inputreport_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Bericht vom Gerät gesendet wird.

## Instanzmethoden

Diese Schnittstelle erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`HIDDevice.open()`](/de/docs/Web/API/HIDDevice/open) {{Experimental_Inline}}
  - : Öffnet eine Verbindung zu diesem HID-Gerät und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Verbindung erfolgreich hergestellt wurde.
- [`HIDDevice.close()`](/de/docs/Web/API/HIDDevice/close) {{Experimental_Inline}}
  - : Schließt die Verbindung zu diesem HID-Gerät und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Verbindung geschlossen wurde.
- [`HIDDevice.forget()`](/de/docs/Web/API/HIDDevice/forget) {{Experimental_Inline}}
  - : Schließt die Verbindung zu diesem HID-Gerät und setzt die Zugriffsberechtigung zurück. Es gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Berechtigung zurückgesetzt wurde.
- [`HIDDevice.sendReport()`](/de/docs/Web/API/HIDDevice/sendReport) {{Experimental_Inline}}
  - : Sendet einen Ausgabebericht an dieses HID-Gerät und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Bericht gesendet wurde.
- [`HIDDevice.sendFeatureReport()`](/de/docs/Web/API/HIDDevice/sendFeatureReport) {{Experimental_Inline}}
  - : Sendet einen Merkmalsbericht an dieses HID-Gerät und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Bericht gesendet wurde.
- [`HIDDevice.receiveFeatureReport()`](/de/docs/Web/API/HIDDevice/receiveFeatureReport) {{Experimental_Inline}}
  - : Empfängt einen Merkmalsbericht von diesem HID-Gerät in Form eines {{jsxref("Promise")}}, das mit einem {{jsxref("DataView")}} aufgelöst wird. Dies ermöglicht einen typisierten Zugriff auf den Inhalt dieser Nachricht.

## Beispiele

Das folgende Beispiel zeigt, wie ein `inputreport`-Ereignis überwacht wird, um zu erkennen, welcher Knopf auf einem Joy-Con Right-Gerät gedrückt wird.

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

Im folgenden Beispiel wird `sendFeatureReport` verwendet, um ein Gerät zum Blinken zu bringen.

```js
const reportId = 1;
for (let i = 0; i < 10; i++) {
  // Turn off
  await device.sendFeatureReport(reportId, Uint32Array.from([0, 0]));
  await new Promise((resolve) => setTimeout(resolve, 100));
  // Turn on
  await device.sendFeatureReport(reportId, Uint32Array.from([512, 0]));
  await new Promise((resolve) => setTimeout(resolve, 100));
}
```

Weitere Beispiele und Live-Demos finden Sie in dem Artikel [Verbindung zu ungewöhnlichen HID-Geräten herstellen](https://developer.chrome.com/docs/capabilities/hid).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
