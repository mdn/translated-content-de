---
title: "SerialPort: Methode open()"
short-title: open()
slug: Web/API/SerialPort/open
l10n:
  sourceCommit: 6fe7a18b80e55d9d25dcc16dfb010eec09460bb8
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`open()`**-Methode der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Port geöffnet wird. Standardmäßig wird der Port mit 8 Datenbits, 1 Stoppbit und ohne Paritätsprüfung geöffnet. Der `baudRate`-Parameter ist erforderlich.

## Syntax

```js-nolint
open(options)
```

### Parameter

- `options`
  - : Ein Objekt mit einem der folgenden Werte:
    - `baudRate`
      - : Ein positiver, nicht null Werte, der die Baudrate angibt, mit der die serielle Kommunikation hergestellt werden soll.
    - `bufferSize` {{Optional_Inline}}
      - : Eine nicht-negative ganze Zahl, die die Größe der Lese- und Schreibpuffer angibt, die eingerichtet werden sollen. Wenn nicht angegeben, ist der Standardwert 255.
    - `dataBits` {{Optional_Inline}}
      - : Ein ganzzahliger Wert von 7 oder 8, der die Anzahl der Datenbits pro Frame angibt. Wenn nicht angegeben, ist der Standardwert 8.
    - `flowControl` {{Optional_Inline}}
      - : Der Flusskontrolltyp, entweder `"none"` oder `"hardware"`. Der Standardwert ist `"none"`.
    - `parity` {{Optional_Inline}}
      - : Der Paritätsmodus, entweder `"none"`, `"even"` oder `"odd"`. Der Standardwert ist `"none"`.
    - `stopBits` {{Optional_Inline}}
      - : Ein ganzzahliger Wert von 1 oder 2, der die Anzahl der Stoppbits am Ende des Frames angibt. Wenn nicht angegeben, ist der Standardwert 1.

### Rückgabewert

Ein {{jsxref("Promise")}}.

### Ausnahmen

Das zurückgegebene `Promise` lehnt mit einer der folgenden Ausnahmen ab:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wenn `open()` aufgerufen wird, während der Port bereits geöffnet ist.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wenn der Versuch, den Port zu öffnen, fehlschlägt.

## Beispiele

Bevor auf einem seriellen Port kommuniziert wird, muss er geöffnet werden. Das Öffnen des Ports ermöglicht es der Website, die erforderlichen Parameter festzulegen, die steuern, wie Daten gesendet und empfangen werden. Entwickler sollten die Dokumentation des Geräts, mit dem sie sich verbinden, auf die entsprechenden Parameter überprüfen.

```js
await port.open({ baudRate: 9600 /* pick your baud rate */ });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
