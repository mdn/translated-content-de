---
title: "SerialPort: connected-Eigenschaft"
short-title: connected
slug: Web/API/SerialPort/connected
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`connected`**-Eigenschaft des [`SerialPort`](/de/docs/Web/API/SerialPort)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob der Port [logisch verbunden](/de/docs/Web/API/SerialPort/connect_event#description) mit dem Gerät ist.

## Beschreibung

Wenn ein drahtloses Gerät außerhalb der Reichweite des Hosts gerät, schließt jeder drahtlose serielle Port, der von einer Web-App geöffnet wurde, automatisch, obwohl er logisch verbunden bleibt. In solchen Fällen könnte die Web-App versuchen, den Port mit [`SerialPort.open()`](/de/docs/Web/API/SerialPort/open) erneut zu öffnen.

Wenn jedoch das drahtlose Gerät absichtlich getrennt wurde (zum Beispiel, wenn der Benutzer es über das Bedienfeld des Betriebssystems trennt), sollte die Web-App darauf verzichten, den Port erneut zu öffnen, um eine erneute Verbindung mit dem drahtlosen Gerät zu verhindern.

Das folgende Beispiel zeigt, wie die `connected`-Eigenschaft verwendet werden kann, um zwischen diesen beiden Fällen zu unterscheiden:

```js
const ports = await navigator.serial.getPorts();
for (const port of ports) {
  if (port.connected) {
    // The port is logically connected
    // automatically try to reopen the port
    await port.open({ baudRate: 9600 });
  } else {
    // The port is not logically connected; at this point you could
    // prompt the user to make sure the Bluetooth device is available, and
    // Show a "connect" button to allow them to try opening the port if desired
  }
}
```

## Wert

Ein Boolean — `true`, wenn der Port logisch verbunden ist, und `false`, wenn nicht.

## Beispiele

### Protokollierung, wenn ein Port verbunden ist

Das folgende Beispiel ruft [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort) auf, wenn der Benutzer einen {{htmlelement("button")}} drückt, und fordert ihn auf, einen seriellen Port zum Verbinden auszuwählen. Dann protokolliert es eine Nachricht in der Konsole, die den Verbindungsstatus meldet:

```js
requestPortButton.addEventListener("click", async () => {
  const port = await navigator.serial.requestPort();
  console.log(`Requested serial port. Connected: ${port.connected}`);
});
```

### Protokollierung des Verbindungsstatus bei Verbindung und Trennung

Sie können das folgende Beispiel verwenden, um den Verbindungsstatus zu protokollieren, wenn die [`connect`](/de/docs/Web/API/SerialPort/connect_event)- und [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event)-Ereignisse ausgelöst werden:

```js
navigator.serial.addEventListener("connect", ({ target: port }) => {
  console.log(`Connect event fired. Connected: ${port.connected}`);
});

navigator.serial.addEventListener("disconnect", ({ target: port }) => {
  console.log(`Disconnect event fired. Connected: ${port.connected}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
