---
title: SerialPort
slug: Web/API/SerialPort
l10n:
  sourceCommit: 861d367a39f380ac4e6a01ae215fc1beb3e27c31
---

{{securecontext_header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das `SerialPort`-Interface der [Web Serial API](/de/docs/Web/API/Web_Serial_API) ermöglicht Zugriff auf einen seriellen Anschluss des Host-Geräts.

{{InheritanceDiagram}}

## Konstruktor

Instanzen dieses Interfaces können durch Aufrufen von Methoden des [`Serial`](/de/docs/Web/API/Serial) Interfaces erhalten werden, daher besitzt es keinen eigenen Konstruktor.

## Instanzeigenschaften

- [`SerialPort.connected`](/de/docs/Web/API/SerialPort/connected) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Anschluss logisch mit dem Gerät verbunden ist.
- [`SerialPort.readable`](/de/docs/Web/API/SerialPort/readable) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Empfangen von Daten vom Gerät zurück, das mit dem Anschluss verbunden ist.
- [`SerialPort.writable`](/de/docs/Web/API/SerialPort/writable) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Senden von Daten an das Gerät zurück, das mit dem Anschluss verbunden ist.

## Instanzmethoden

- [`SerialPort.forget()`](/de/docs/Web/API/SerialPort/forget) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff auf den seriellen Anschluss widerrufen wird. Ein Aufruf dieser Methode "vergisst" das Gerät, setzt alle zuvor festgelegten Berechtigungen zurück, sodass die aufrufende Site nicht mehr mit dem Anschluss kommunizieren kann.
- [`SerialPort.getInfo()`](/de/docs/Web/API/SerialPort/getInfo) {{Experimental_Inline}}
  - : Gibt ein Objekt zurück, das identifizierende Informationen für das über den Anschluss verfügbare Gerät enthält.
- [`SerialPort.open()`](/de/docs/Web/API/SerialPort/open) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Anschluss geöffnet wird. Standardmäßig wird der Anschluss mit 8 Datenbits, 1 Stoppbit und ohne Paritätsprüfung geöffnet.
- [`SerialPort.setSignals()`](/de/docs/Web/API/SerialPort/setSignals) {{Experimental_Inline}}
  - : Setzt Steuersignale am Anschluss und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn diese gesetzt sind.
- [`SerialPort.getSignals()`](/de/docs/Web/API/SerialPort/getSignals) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das den aktuellen Status der Steuersignale des Anschlusses enthält.
- [`SerialPort.close()`](/de/docs/Web/API/SerialPort/close) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Anschluss geschlossen wird.

## Ereignisse

- [`connect`](/de/docs/Web/API/SerialPort/connect_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn der Anschluss mit dem Gerät verbunden wird.
- [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn der Anschluss vom Gerät getrennt wird.

## Beispiele

### Öffnen eines Anschlusses

Bevor über einen seriellen Anschluss kommuniziert werden kann, muss dieser geöffnet werden. Das Öffnen des Anschlusses ermöglicht es der Site, die erforderlichen Parameter anzugeben, die steuern, wie Daten übertragen und empfangen werden. Entwickler sollten die Dokumentation für das Gerät, mit dem sie sich verbinden, konsultieren, um die geeigneten Parameter zu finden.

```js
await port.open({ baudRate: 9600 /* pick your baud rate */ });
```

Sobald das von `open()` zurückgegebene `Promise` aufgelöst wird, können die Attribute `readable` und `writable` abgerufen werden, um die Instanzen von [`ReadableStream`](/de/docs/Web/API/ReadableStream) und [`WritableStream`](/de/docs/Web/API/WritableStream) zum Empfangen von Daten vom und Senden von Daten an das angeschlossene Gerät zu erhalten.

### Lesen von Daten aus einem Anschluss

Das folgende Beispiel zeigt, wie Daten von einem Anschluss gelesen werden können. Die äußere Schleife behandelt nicht-kritische Fehler und erstellt einen neuen Leser, bis ein kritischer Fehler auftritt und `readable` `null` wird.

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

### Schreiben von Daten in einen Anschluss

Das folgende Beispiel zeigt, wie ein String in einen Anschluss geschrieben wird. Ein [`TextEncoder`](/de/docs/Web/API/TextEncoder) konvertiert den String vor der Übertragung in ein `Uint8Array`.

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
