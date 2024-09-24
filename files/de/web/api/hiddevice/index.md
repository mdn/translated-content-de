---
title: HID-Gerät
slug: Web/API/HIDDevice
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Das **`HIDDevice`**-Interface der [WebHID API](/de/docs/Web/API/WebHID_API) repräsentiert ein HID-Gerät. Es bietet Eigenschaften zum Zugriff auf Informationen über das Gerät, Methoden zum Öffnen und Schließen der Verbindung sowie zum Senden und Empfangen von Berichten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface erbt auch Eigenschaften von {{domxref("EventTarget")}}.

- {{domxref("HIDDevice.opened")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{jsxref("boolean")}} zurück, der true ist, wenn das Gerät eine offene Verbindung hat.
- {{domxref("HIDDevice.vendorId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die vendorId des HID-Geräts zurück.
- {{domxref("HIDDevice.productId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die productId des HID-Geräts zurück.
- {{domxref("HIDDevice.productName")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der den Produktnamen des HID-Geräts enthält.
- {{domxref("HIDDevice.collections")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Berichtformaten für das HID-Gerät zurück.

### Ereignisse

- {{domxref("HIDDevice.inputreport_event", "inputreport")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Bericht vom Gerät gesendet wird.

## Instanz-Methoden

Dieses Interface erbt auch Methoden von {{domxref("EventTarget")}}.

- {{domxref("HIDDevice.open()")}} {{Experimental_Inline}}
  - : Öffnet eine Verbindung zu diesem HID-Gerät und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Verbindung erfolgreich hergestellt wurde.
- {{domxref("HIDDevice.close()")}} {{Experimental_Inline}}
  - : Schließt die Verbindung zu diesem HID-Gerät und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Verbindung geschlossen wurde.
- {{domxref("HIDDevice.forget()")}} {{Experimental_Inline}}
  - : Schließt die Verbindung zu diesem HID-Gerät und setzt die Zugriffsberechtigung zurück, und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Berechtigung zurückgesetzt wurde.
- {{domxref("HIDDevice.sendReport()")}} {{Experimental_Inline}}
  - : Sendet einen Ausgangsbericht an dieses HID-Gerät und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Bericht gesendet wurde.
- {{domxref("HIDDevice.sendFeatureReport()")}} {{Experimental_Inline}}
  - : Sendet einen Funktionsbericht an dieses HID-Gerät und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Bericht gesendet wurde.
- {{domxref("HIDDevice.receiveFeatureReport()")}} {{Experimental_Inline}}
  - : Empfängt einen Funktionsbericht von diesem HID-Gerät in Form eines {{jsxref("Promise")}}, das mit einem {{jsxref("DataView")}} aufgelöst wird. Dies ermöglicht den typisierten Zugriff auf den Inhalt dieser Nachricht.

## Beispiele

Das folgende Beispiel zeigt das Lauschen auf ein `inputreport`-Ereignis, das der Anwendung ermöglicht zu erkennen, welcher Knopf auf einem Joy-Con Right-Gerät gedrückt wird.

```js
device.addEventListener("inputreport", (event) => {
  const { data, device, reportId } = event;

  // Handle nur das Joy-Con Right-Gerät und eine spezifische Bericht-ID.
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
  // Ausschalten
  await device.sendFeatureReport(reportId, Uint32Array.from([0, 0]));
  await waitFor(100);
  // Einschalten
  await device.sendFeatureReport(reportId, Uint32Array.from([512, 0]));
  await waitFor(100);
}
```

Sie können weitere Beispiele und Live-Demos im Artikel [Connecting to uncommon HID devices](https://developer.chrome.com/docs/capabilities/hid) sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
