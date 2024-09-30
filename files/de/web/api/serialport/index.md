---
title: SerialPort
slug: Web/API/SerialPort
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{securecontext_header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die `SerialPort`-Schnittstelle der [Web Serial API](/de/docs/Web/API/Web_Serial_API) bietet Zugriff auf einen seriellen Port des Host-Geräts.

{{InheritanceDiagram}}

## Konstruktor

Instanzen dieser Schnittstelle können durch Aufrufen von Methoden der [`Serial`](/de/docs/Web/API/Serial)-Schnittstelle erhalten werden, daher besitzt sie keinen eigenen Konstruktor.

## Instanzeigenschaften

- [`SerialPort.readable`](/de/docs/Web/API/SerialPort/readable) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, um Daten vom Gerät zu empfangen, das mit dem Port verbunden ist.
- [`SerialPort.writable`](/de/docs/Web/API/SerialPort/writable) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`WritableStream`](/de/docs/Web/API/WritableStream) zurück, um Daten an das Gerät zu senden, das mit dem Port verbunden ist.

## Instanzmethoden

- [`SerialPort.forget()`](/de/docs/Web/API/SerialPort/forget) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Port geschlossen und vergessen wird.
- [`SerialPort.getInfo()`](/de/docs/Web/API/SerialPort/getInfo) {{Experimental_Inline}}
  - : Gibt ein Objekt zurück, das Eigenschaften des Ports enthält.
- [`SerialPort.open()`](/de/docs/Web/API/SerialPort/open) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Port geöffnet wird. Standardmäßig wird der Port mit 8 Daten-Bits, 1 Stopp-Bit und ohne Paritätsprüfung geöffnet.
- [`SerialPort.setSignals()`](/de/docs/Web/API/SerialPort/setSignals) {{Experimental_Inline}}
  - : Setzt Steuersignale am Port und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn diese gesetzt sind.
- [`SerialPort.getSignals()`](/de/docs/Web/API/SerialPort/getSignals) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das den aktuellen Zustand der Steuersignale des Ports enthält.
- [`SerialPort.close()`](/de/docs/Web/API/SerialPort/close) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Port geschlossen wird.

## Ereignisse

- [`connect`](/de/docs/Web/API/SerialPort/connect_event) {{Experimental_Inline}}
  - : Ein Ereignis, das ausgelöst wird, wenn der Port mit dem Gerät verbunden wurde.
- [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event) {{Experimental_Inline}}
  - : Ein Ereignis, das ausgelöst wird, wenn der Port vom Gerät getrennt wurde.

## Beispiele

### Öffnen eines Ports

Bevor auf einem seriellen Port kommuniziert wird, muss dieser geöffnet werden. Das Öffnen des Ports ermöglicht es der Seite, die notwendigen Parameter anzugeben, die steuern, wie Daten gesendet und empfangen werden. Entwickler sollten die Dokumentation für das Gerät überprüfen, mit dem sie sich verbinden, um die geeigneten Parameter zu finden.

```js
await port.open({ baudRate: 9600 /* pick your baud rate */ });
```

Sobald das von `open()` zurückgegebene `Promise` aufgelöst wird, können die Attribute `readable` und `writable` zugegriffen werden, um die Instanzen von [`ReadableStream`](/de/docs/Web/API/ReadableStream) und [`WritableStream`](/de/docs/Web/API/WritableStream) zu erhalten, um Daten vom verbundenen Gerät zu empfangen und an dieses zu senden.

### Daten von einem Port lesen

Das folgende Beispiel zeigt, wie man Daten von einem Port liest. Die äußere Schleife behandelt nicht-fatale Fehler und erstellt einen neuen Leser, bis ein fataler Fehler auftritt und `readable` `null` wird.

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

### Daten an einen Port schreiben

Das folgende Beispiel zeigt, wie man eine Zeichenkette an einen Port schreibt. Ein [`TextEncoder`](/de/docs/Web/API/TextEncoder) konvertiert die Zeichenkette vor der Übertragung in ein `Uint8Array`.

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
