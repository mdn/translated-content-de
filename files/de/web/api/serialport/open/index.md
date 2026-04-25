---
title: "SerialPort: open()-Methode"
short-title: open()
slug: Web/API/SerialPort/open
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`open()`**-Methode der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Port geöffnet ist. Standardmäßig wird der Port mit 8 Datenbits, 1 Stoppbit und ohne Paritätsprüfung geöffnet. Der `baudRate`-Parameter ist erforderlich.

## Syntax

```js-nolint
open(options)
```

### Parameter

- `options`
  - : Ein Objekt mit einem der folgenden Werte:
    - `baudRate`
      - : Ein positiver, nicht-nuller Wert, der die Baudrate angibt, mit der die serielle Kommunikation etabliert werden soll.
    - `bufferSize` {{Optional_Inline}}
      - : Eine positive ganze Zahl, die die Größe der Lese- und Schreibpuffer angibt, die eingerichtet werden sollen. Wenn nicht angegeben, beträgt die Standardgröße 255.
    - `dataBits` {{Optional_Inline}}
      - : Ein Ganzzahlwert von 7 oder 8, der die Anzahl der Datenbits pro Frame angibt. Wenn nicht angegeben, beträgt der Standardwert 8.
    - `flowControl` {{Optional_Inline}}
      - : Der Typ der Flusskontrolle, entweder `"none"` oder `"hardware"`. Der Standardwert ist `"none"`.
    - `parity` {{Optional_Inline}}
      - : Der Paritätsmodus, entweder `"none"`, `"even"` oder `"odd"`. Der Standardwert ist `"none"`.
    - `stopBits` {{Optional_Inline}}
      - : Ein Ganzzahlwert von 1 oder 2, der die Anzahl der Stoppbits am Ende des Frames angibt. Wenn nicht angegeben, beträgt der Standardwert 1.

### Rückgabewert

Ein {{jsxref("Promise")}}.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Port bereits geöffnet ist.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Versuch, den Port zu öffnen, fehlgeschlagen ist.

## Beispiele

Bevor auf einem seriellen Port kommuniziert werden kann, muss dieser geöffnet werden. Das Öffnen des Ports ermöglicht es der Website, die notwendigen Parameter festzulegen, die steuern, wie Daten übertragen und empfangen werden. Entwickler sollten die Dokumentation des Geräts, mit dem sie sich verbinden, auf die entsprechenden Parameter überprüfen.

```js
await port.open({ baudRate: 9600 /* pick your baud rate */ });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
