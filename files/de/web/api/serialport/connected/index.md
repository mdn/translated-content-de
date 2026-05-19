---
title: "SerialPort: connected Eigenschaft"
short-title: connected
slug: Web/API/SerialPort/connected
l10n:
  sourceCommit: 6fe7a18b80e55d9d25dcc16dfb010eec09460bb8
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`connected`** schreibgeschützte Eigenschaft der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob der Port [logisch verbunden](/de/docs/Web/API/SerialPort/connect_event#description) mit dem Gerät ist.

## Beschreibung

Wenn ein drahtloses Gerät außerhalb der Reichweite des Hosts gerät, wird ein von einer Web-App geöffneter drahtloser serieller Port automatisch geschlossen, auch wenn er logisch verbunden bleibt. In solchen Fällen könnte die Web-App versuchen, den Port mit [`SerialPort.open()`](/de/docs/Web/API/SerialPort/open) erneut zu öffnen.

War das drahtlose Gerät jedoch absichtlich getrennt (zum Beispiel, wenn der Benutzer sich entschied, es über die Systemsteuerung des Betriebssystems zu trennen), sollte die Web-App darauf verzichten, den Port erneut zu öffnen, um eine erneute Verbindung mit dem drahtlosen Gerät zu vermeiden.

Das folgende Code-Snippet zeigt, wie die `connected`-Eigenschaft verwendet werden kann, um zwischen diesen beiden Fällen zu unterscheiden:

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

Ein boolescher Wert — `true`, wenn der Port logisch verbunden ist, und `false`, wenn nicht.

## Beispiele

### Protokollierung, wenn ein Port verbunden ist

Das folgende Snippet ruft [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort) auf, wenn der Benutzer einen {{htmlelement("button")}} drückt, und fordert ihn auf, einen seriellen Port zu wählen, zu dem er eine Verbindung herstellen möchte. Dann wird eine Meldung in die Konsole protokolliert, die den Verbindungsstatus meldet:

```js
requestPortButton.addEventListener("click", async () => {
  const port = await navigator.serial.requestPort();
  console.log(`Requested serial port. Connected: ${port.connected}`);
});
```

### Protokollierung des Verbindungsstatus beim Verbinden und Trennen

Sie können das folgende Snippet verwenden, um den Verbindungsstatus zu protokollieren, wenn die [`connect`](/de/docs/Web/API/SerialPort/connect_event)- und [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event)-Ereignisse ausgelöst werden:

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
