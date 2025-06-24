---
title: "SerialPort: open() Methode"
short-title: open()
slug: Web/API/SerialPort/open
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`open()`** Methode der [`SerialPort`](/de/docs/Web/API/SerialPort) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Port geöffnet wird. Standardmäßig wird der Port mit 8 Datenbits, 1 Stoppbit und ohne Paritätsprüfung geöffnet. Der `baudRate`-Parameter ist erforderlich.

## Syntax

```js-nolint
open(options)
```

### Parameter

- `options`
  - : Ein Objekt mit einem der folgenden Werte:
    - `baudRate`
      - : Ein positiver, nicht nullwertiger Wert, der die Baudrate angibt, mit der die serielle Kommunikation hergestellt werden soll.
    - `bufferSize` {{Optional_Inline}}
      - : Ein nicht signierter langer Ganzzahlwert, der die Größe der zu etablierenden Lese- und Schreibpuffer angibt. Wenn nicht übergeben, beträgt die Vorgabe 255.
    - `dataBits` {{Optional_Inline}}
      - : Ein Ganzzahlwert von 7 oder 8, der die Anzahl der Datenbits pro Rahmen angibt. Wenn nicht übergeben, beträgt die Vorgabe 8.
    - `flowControl` {{Optional_Inline}}
      - : Der Flusskontrolltyp, entweder `"none"` oder `"hardware"`. Der Standardwert ist `"none"`.
    - `parity` {{Optional_Inline}}
      - : Der Paritätsmodus, entweder `"none"`, `"even"` oder `"odd"`. Der Standardwert ist `"none"`.
    - `stopBits` {{Optional_Inline}}
      - : Ein Ganzzahlwert von 1 oder 2, der die Anzahl der Stoppbits am Ende des Rahmens angibt. Wenn nicht übergeben, beträgt die Vorgabe 1.

### Rückgabewert

Ein {{jsxref("Promise")}}.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Port bereits geöffnet ist.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Versuch, den Port zu öffnen, fehlschlägt.

## Beispiele

Bevor eine Kommunikation über einen seriellen Port erfolgen kann, muss dieser geöffnet werden. Das Öffnen des Ports ermöglicht es der Seite, die notwendigen Parameter festzulegen, die steuern, wie Daten übertragen und empfangen werden. Entwickler sollten die Dokumentation des Geräts, mit dem sie sich verbinden, für die geeigneten Parameter überprüfen.

```js
await port.open({ baudRate: 9600 /* pick your baud rate */ });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
