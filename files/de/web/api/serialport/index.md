---
title: SerialPort
slug: Web/API/SerialPort
l10n:
  sourceCommit: 6fe7a18b80e55d9d25dcc16dfb010eec09460bb8
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Das `SerialPort`-Interface der [Web Serial API](/de/docs/Web/API/Web_Serial_API) ermöglicht den Zugriff auf einen seriellen Port auf dem Host-Gerät.

{{InheritanceDiagram}}

## Konstruktor

Instanzen dieses Interfaces können durch Aufrufe von Methoden des [`Serial`](/de/docs/Web/API/Serial)-Interfaces erhalten werden, daher hat es keinen eigenen Konstruktor.

## Instanzeigenschaften

- [`SerialPort.connected`](/de/docs/Web/API/SerialPort/connected) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Port logisch mit dem Gerät verbunden ist.
- [`SerialPort.readable`](/de/docs/Web/API/SerialPort/readable) {{ReadOnlyInline}}
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, um Daten vom mit dem Port verbundenen Gerät zu empfangen.
- [`SerialPort.writable`](/de/docs/Web/API/SerialPort/writable) {{ReadOnlyInline}}
  - : Gibt einen [`WritableStream`](/de/docs/Web/API/WritableStream) zurück, um Daten an das mit dem Port verbundene Gerät zu senden.

## Instanzmethoden

- [`SerialPort.forget()`](/de/docs/Web/API/SerialPort/forget)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff auf den seriellen Port widerrufen wird. Ein Aufruf dieser Methode "vergisst" das Gerät, setzt alle zuvor gesetzten Berechtigungen zurück, sodass die aufrufende Seite nicht mehr mit dem Port kommunizieren kann.
- [`SerialPort.getInfo()`](/de/docs/Web/API/SerialPort/getInfo)
  - : Gibt ein Objekt zurück, das Identifikationsinformationen für das über den Port verfügbare Gerät enthält.
- [`SerialPort.open()`](/de/docs/Web/API/SerialPort/open)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Port geöffnet wird. Standardmäßig wird der Port mit 8 Datenbits, 1 Stoppbit und ohne Paritätsprüfung geöffnet.
- [`SerialPort.setSignals()`](/de/docs/Web/API/SerialPort/setSignals)
  - : Setzt Steuersignale am Port und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn sie gesetzt sind.
- [`SerialPort.getSignals()`](/de/docs/Web/API/SerialPort/getSignals)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das den aktuellen Zustand der Steuersignale des Ports enthält.
- [`SerialPort.close()`](/de/docs/Web/API/SerialPort/close)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Port geschlossen wird.

## Ereignisse

- [`connect`](/de/docs/Web/API/SerialPort/connect_event)
  - : Wird ausgelöst, wenn der Port mit dem Gerät verbindet.
- [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event)
  - : Wird ausgelöst, wenn der Port vom Gerät trennt.

## Beispiele

### Öffnen eines Ports

Bevor auf einem seriellen Port kommuniziert wird, muss er geöffnet werden. Das Öffnen des Ports ermöglicht es der Seite, die notwendigen Parameter festzulegen, die steuern, wie Daten gesendet und empfangen werden. Entwickler sollten die Dokumentation für das mit dem Port verbundene Gerät konsultieren, um die geeigneten Parameter festzulegen.

```js
await port.open({ baudRate: 9600 /* pick your baud rate */ });
```

Sobald das `Promise`, das von `open()` zurückgegeben wird, aufgelöst ist, können die `readable`- und `writable`-Attribute aufgerufen werden, um die [`ReadableStream`](/de/docs/Web/API/ReadableStream)- und [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanzen zu erhalten, die zum Empfangen von Daten vom und Senden von Daten an das verbundene Gerät verwendet werden.

### Daten von einem Port lesen

Das folgende Beispiel zeigt, wie man Daten von einem Port liest. Die äußere Schleife behandelt nicht-fatale Fehler und erstellt einen neuen Leser, bis ein fataler Fehler auftritt und `readable` zu `null` wird.

```js
while (port.readable) {
  const reader = port.readable.getReader();
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        // |reader| has been canceled.
        break;
      }
      // Do something with |value|…
    }
  } catch (error) {
    // Handle |error|…
  } finally {
    reader.releaseLock();
  }
}
```

### Daten zu einem Port schreiben

Das folgende Beispiel zeigt, wie man einen String zu einem Port schreibt. Ein [`TextEncoder`](/de/docs/Web/API/TextEncoder) konvertiert den String vor der Übertragung in ein `Uint8Array`.

```js
const encoder = new TextEncoder();
const writer = port.writable.getWriter();
await writer.write(encoder.encode("PING"));
writer.releaseLock();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
