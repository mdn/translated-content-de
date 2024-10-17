---
title: HIDDevice
slug: Web/API/HIDDevice
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`HIDDevice`**-Schnittstelle der [WebHID API](/de/docs/Web/API/WebHID_API) repräsentiert ein HID-Gerät. Sie bietet Eigenschaften zum Zugriff auf Informationen über das Gerät, Methoden zum Öffnen und Schließen der Verbindung sowie zum Senden und Empfangen von Berichten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

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

## Instanz-Methoden

Diese Schnittstelle erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`HIDDevice.open()`](/de/docs/Web/API/HIDDevice/open) {{Experimental_Inline}}
  - : Öffnet eine Verbindung zu diesem HID-Gerät und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Verbindung erfolgreich war.
- [`HIDDevice.close()`](/de/docs/Web/API/HIDDevice/close) {{Experimental_Inline}}
  - : Schließt die Verbindung zu diesem HID-Gerät und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Verbindung geschlossen wurde.
- [`HIDDevice.forget()`](/de/docs/Web/API/HIDDevice/forget) {{Experimental_Inline}}
  - : Schließt die Verbindung zu diesem HID-Gerät und setzt die Zugriffsberechtigung zurück. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Berechtigung zurückgesetzt wurde.
- [`HIDDevice.sendReport()`](/de/docs/Web/API/HIDDevice/sendReport) {{Experimental_Inline}}
  - : Sendet einen Ausgabebricht an dieses HID-Gerät und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Bericht gesendet wurde.
- [`HIDDevice.sendFeatureReport()`](/de/docs/Web/API/HIDDevice/sendFeatureReport) {{Experimental_Inline}}
  - : Sendet einen Featurebericht an dieses HID-Gerät und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Bericht gesendet wurde.
- [`HIDDevice.receiveFeatureReport()`](/de/docs/Web/API/HIDDevice/receiveFeatureReport) {{Experimental_Inline}}
  - : Empfängt einen Featurebericht von diesem HID-Gerät in Form eines {{jsxref("Promise")}}, das mit einem {{jsxref("DataView")}} aufgelöst wird. Dies ermöglicht den typisierten Zugriff auf den Inhalt dieser Nachricht.

## Beispiele

Das folgende Beispiel demonstriert das Lauschen auf ein `inputreport`-Ereignis, das es der Anwendung ermöglicht zu erkennen, welcher Knopf auf einem Joy-Con-Right-Gerät gedrückt wird.

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
  await waitFor(100);
  // Turn on
  await device.sendFeatureReport(reportId, Uint32Array.from([512, 0]));
  await waitFor(100);
}
```

Weitere Beispiele und Live-Demos finden Sie im Artikel [Connecting to uncommon HID devices](https://developer.chrome.com/docs/capabilities/hid).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
