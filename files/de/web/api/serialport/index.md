---
title: SerialPort
slug: Web/API/SerialPort
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{securecontext_header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die `SerialPort`-Schnittstelle der [Web Serial API](/de/docs/Web/API/Web_Serial_API) bietet Zugriff auf einen seriellen Anschluss des Host-Geräts.

{{InheritanceDiagram}}

## Konstruktor

Instanzen dieser Schnittstelle können durch Aufrufen von Methoden der {{domxref("Serial")}}-Schnittstelle erhalten werden, daher hat sie keinen eigenen Konstruktor.

## Instanz-Eigenschaften

- {{domxref("SerialPort.readable")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{domxref("ReadableStream")}} zurück, um Daten vom Gerät, das mit dem Port verbunden ist, zu empfangen.
- {{domxref("SerialPort.writable")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{domxref("WritableStream")}} zurück, um Daten an das Gerät, das mit dem Port verbunden ist, zu senden.

## Instanz-Methoden

- {{domxref("SerialPort.forget()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Port geschlossen und vergessen wird.
- {{domxref("SerialPort.getInfo()")}} {{Experimental_Inline}}
  - : Gibt ein Objekt zurück, das Eigenschaften des Ports enthält.
- {{domxref("SerialPort.open()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Port geöffnet ist. Standardmäßig wird der Port mit 8 Datenbits, 1 Stoppbit und ohne Paritätsprüfung geöffnet.
- {{domxref("SerialPort.setSignals()")}} {{Experimental_Inline}}
  - : Setzt Steuersignale am Port und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn sie gesetzt sind.
- {{domxref("SerialPort.getSignals()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das den aktuellen Status der Steuersignale des Ports enthält.
- {{domxref("SerialPort.close()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Port geschlossen ist.

## Ereignisse

- {{domxref("SerialPort.connect_event", "connect")}} {{Experimental_Inline}}
  - : Ein Ereignis, das ausgelöst wird, wenn der Port mit dem Gerät verbunden wurde.
- {{domxref("SerialPort.disconnect_event", "disconnect")}} {{Experimental_Inline}}
  - : Ein Ereignis, das ausgelöst wird, wenn der Port vom Gerät getrennt wurde.

## Beispiele

### Öffnen eines Ports

Bevor über einen seriellen Port kommuniziert werden kann, muss dieser geöffnet werden. Das Öffnen des Ports ermöglicht es der Website, die notwendigen Parameter festzulegen, die steuern, wie Daten übertragen und empfangen werden. Entwickler sollten die Dokumentation für das Gerät, zu dem sie eine Verbindung herstellen, überprüfen, um die geeigneten Parameter zu ermitteln.

```js
await port.open({ baudRate: 9600 /* wählen Sie Ihre Baudrate */ });
```

Sobald das von `open()` zurückgegebene `Promise` aufgelöst ist, können auf die Attribute `readable` und `writable` zugegriffen werden, um die {{domxref("ReadableStream")}}- und {{domxref("WritableStream")}}-Instanzen zu erhalten, um Daten vom und zum verbundenen Gerät zu empfangen und zu senden.

### Daten von einem Port lesen

Das folgende Beispiel zeigt, wie man Daten von einem Port liest. Die äußere Schleife behandelt nicht-fatalen Fehler, indem sie einen neuen Leser erstellt, bis ein fataler Fehler auftritt und `readable` `null` wird.

```js
while (port.readable) {
  const reader = port.readable.getReader();
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        // |reader| wurde abgebrochen.
        break;
      }
      // Machen Sie etwas mit |value|…
    }
  } catch (error) {
    // Behandeln Sie |error|…
  } finally {
    reader.releaseLock();
  }
}
```

### Daten an einen Port schreiben

Das folgende Beispiel zeigt, wie man einen String an einen Port schreibt. Ein {{domxref("TextEncoder")}} konvertiert den String vor der Übertragung in ein `Uint8Array`.

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
