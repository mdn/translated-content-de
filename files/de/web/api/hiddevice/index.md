---
title: HIDDevice
slug: Web/API/HIDDevice
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`HIDDevice`**-Schnittstelle der [WebHID API](/de/docs/Web/API/WebHID_API) repräsentiert ein HID-Gerät. Sie stellt Eigenschaften zum Abrufen von Informationen über das Gerät, Methoden zum Öffnen und Schließen der Verbindung sowie zum Senden und Empfangen von Reports bereit.

{{InheritanceDiagram}}

## Instanzeigenschaften

Diese Schnittstelle erbt außerdem Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`HIDDevice.opened`](/de/docs/Web/API/HIDDevice/opened) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{jsxref("Boolean")}} zurück, der angibt, ob eine Verbindung zum Gerät geöffnet ist.
- [`HIDDevice.vendorId`](/de/docs/Web/API/HIDDevice/vendorId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die vendorId des HID-Geräts zurück.
- [`HIDDevice.productId`](/de/docs/Web/API/HIDDevice/productId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die productId des HID-Geräts zurück.
- [`HIDDevice.productName`](/de/docs/Web/API/HIDDevice/productName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String mit dem Produktnamen des HID-Geräts zurück.
- [`HIDDevice.collections`](/de/docs/Web/API/HIDDevice/collections) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array mit Reportformaten für das HID-Gerät zurück.

## Instanzmethoden

Diese Schnittstelle erbt außerdem Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`HIDDevice.open()`](/de/docs/Web/API/HIDDevice/open) {{Experimental_Inline}}
  - : Öffnet eine Verbindung zu diesem HID-Gerät und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Verbindung erfolgreich hergestellt wurde.
- [`HIDDevice.close()`](/de/docs/Web/API/HIDDevice/close) {{Experimental_Inline}}
  - : Schließt die Verbindung zu diesem HID-Gerät und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Verbindung geschlossen wurde.
- [`HIDDevice.forget()`](/de/docs/Web/API/HIDDevice/forget) {{Experimental_Inline}}
  - : Schließt die Verbindung zu diesem HID-Gerät, setzt die Zugriffsberechtigung zurück und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Berechtigung zurückgesetzt wurde.
- [`HIDDevice.sendReport()`](/de/docs/Web/API/HIDDevice/sendReport) {{Experimental_Inline}}
  - : Sendet einen Output-Report an dieses HID-Gerät und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald der Report gesendet wurde.
- [`HIDDevice.sendFeatureReport()`](/de/docs/Web/API/HIDDevice/sendFeatureReport) {{Experimental_Inline}}
  - : Sendet einen Feature-Report an dieses HID-Gerät und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald der Report gesendet wurde.
- [`HIDDevice.receiveFeatureReport()`](/de/docs/Web/API/HIDDevice/receiveFeatureReport) {{Experimental_Inline}}
  - : Empfängt einen Feature-Report von diesem HID-Gerät und gibt ein {{jsxref("Promise")}} zurück, das mit einer {{jsxref("DataView")}} erfüllt wird. Dies ermöglicht typisierten Zugriff auf den Inhalt der Nachricht.

## Ereignisse

- [`inputreport`](/de/docs/Web/API/HIDDevice/inputreport_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn das Gerät einen Report sendet.

## Beispiele

Das folgende Beispiel zeigt, wie Sie auf ein `inputreport`-Ereignis reagieren können, damit die Anwendung erkennt, welche Taste auf einem Joy-Con-Right-Gerät gedrückt wird.

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

Im folgenden Beispiel wird `sendFeatureReport` verwendet, um ein Gerät blinken zu lassen.

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

Weitere Beispiele und interaktive Demos finden Sie im Artikel [Verbindung zu weniger verbreiteten HID-Geräten herstellen](https://developer.chrome.com/docs/capabilities/hid).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
