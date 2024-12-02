---
title: "SerialPort: connected Eigenschaft"
short-title: connected
slug: Web/API/SerialPort/connected
l10n:
  sourceCommit: 861d367a39f380ac4e6a01ae215fc1beb3e27c31
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`connected`**-Eigenschaft der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle gibt einen booleschen Wert zurück, der anzeigt, ob der Port [logisch mit](/de/docs/Web/API/SerialPort/connect_event#description) dem Gerät verbunden ist.

## Beschreibung

Wenn ein drahtloses Gerät außer Reichweite des Hosts gerät, wird jeder von einer Webanwendung geöffnete drahtlose Seriellport automatisch geschlossen, auch wenn er logisch verbunden bleibt. In solchen Fällen könnte die Webanwendung versuchen, den Port mithilfe von [`SerialPort.open()`](/de/docs/Web/API/SerialPort/open) erneut zu öffnen.

Wenn jedoch das drahtlose Gerät absichtlich getrennt wurde (zum Beispiel, wenn der Benutzer sich entschieden hat, es über das Betriebssystem-Kontrollfeld zu trennen), sollte die Webanwendung davon absehen, den Port erneut zu öffnen, um eine Wiederverbindung mit dem drahtlosen Gerät zu vermeiden.

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

Ein boolescher Wert — `true`, wenn der Port logisch verbunden ist, und `false`, wenn nicht.

## Beispiele

### Protokollierung, wenn ein Port verbunden ist

Das folgende Beispiel ruft [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort) auf, wenn der Benutzer eine {{htmlelement("button")}} drückt, und fordert ihn auf, einen seriellen Port auszuwählen, mit dem verbunden werden soll. Anschließend wird eine Meldung in der Konsole protokolliert, die den Verbindungsstatus meldet:

```js
requestPortButton.addEventListener("click", async () => {
  const port = await navigator.serial.requestPort();
  console.log(`Requested serial port. Connected: ${port.connected}`);
});
```

### Protokollierung des Verbindungsstatus bei Verbindung und Trennung

Sie können das folgende Beispiel verwenden, um den Verbindungsstatus zu protokollieren, wenn die [`connect`](/de/docs/Web/API/SerialPort/connect_event) und [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event)-Ereignisse ausgelöst werden:

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
