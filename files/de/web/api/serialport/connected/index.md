---
title: "SerialPort: connected-Eigenschaft"
short-title: connected
slug: Web/API/SerialPort/connected
l10n:
  sourceCommit: dcef271d72ac6af79454379af98cdb670c417eb5
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte Eigenschaft **`connected`** der Schnittstelle [`SerialPort`](/de/docs/Web/API/SerialPort) gibt einen booleschen Wert zurück, der angibt, ob der Port [logisch mit dem Gerät verbunden](/de/docs/Web/API/SerialPort/connect_event#description) ist.

## Wert

Ein boolescher Wert — `true`, wenn der Port logisch verbunden ist, andernfalls `false`.

## Beschreibung

Wenn ein drahtloses Gerät die Reichweite des Hosts verlässt, wird jeder von einer Web-App geöffnete drahtlose serielle Port automatisch geschlossen, obwohl er logisch verbunden bleibt. In solchen Fällen könnte die Web-App versuchen, den Port mit [`SerialPort.open()`](/de/docs/Web/API/SerialPort/open) erneut zu öffnen.

Wenn die Verbindung zum drahtlosen Gerät jedoch absichtlich getrennt wurde (beispielsweise durch den Benutzer über die Systemsteuerung des Betriebssystems), sollte die Web-App den Port nicht erneut öffnen, um eine erneute Verbindung mit dem drahtlosen Gerät zu vermeiden.

Der folgende Ausschnitt zeigt, wie sich mit der Eigenschaft `connected` zwischen diesen beiden Fällen unterscheiden lässt:

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

## Beispiele

### Protokollieren, wenn ein Port verbunden ist

Der folgende Ausschnitt ruft [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort) auf, wenn der Benutzer auf einen {{htmlelement("button")}} klickt. Daraufhin wird er aufgefordert, einen seriellen Port für die Verbindung auszuwählen. Anschließend wird eine Meldung über den Verbindungsstatus in der Konsole ausgegeben:

```js
requestPortButton.addEventListener("click", async () => {
  const port = await navigator.serial.requestPort();
  console.log(`Requested serial port. Connected: ${port.connected}`);
});
```

### Verbindungsstatus beim Verbinden und Trennen protokollieren

Mit dem folgenden Ausschnitt können Sie den Verbindungsstatus protokollieren, wenn die Ereignisse [`connect`](/de/docs/Web/API/SerialPort/connect_event) und [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event) ausgelöst werden:

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
