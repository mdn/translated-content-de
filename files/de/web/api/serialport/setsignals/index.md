---
title: "SerialPort: setSignals()-Methode"
short-title: setSignals()
slug: Web/API/SerialPort/setSignals
l10n:
  sourceCommit: 6fe7a18b80e55d9d25dcc16dfb010eec09460bb8
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`setSignals()`**-Methode des [`SerialPort`](/de/docs/Web/API/SerialPort)-Interfaces setzt Steuersignale am Port und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn sie gesetzt sind.

## Syntax

```js-nolint
setSignals()
setSignals(options)
```

### Parameter

- `options` {{Optional_Inline}}
  - : Ein Objekt mit einem der folgenden Werte:
    - `dataTerminalReady`
      - : Ein Boolean, der angibt, ob das Betriebssystem angewiesen werden soll, das "data terminal ready"- oder "DTR"-Signal am seriellen Port entweder zu aktivieren (wenn true) oder zu deaktivieren (wenn false).
    - `requestToSend`
      - : Ein Boolean, der angibt, ob das Betriebssystem angewiesen werden soll, das "request to send"- oder "RTS"-Signal am seriellen Port entweder zu aktivieren (wenn true) oder zu deaktivieren (wenn false).
    - `break`
      - : Ein Boolean, der angibt, ob das Betriebssystem angewiesen werden soll, das "break"-Signal am seriellen Port entweder zu aktivieren (wenn true) oder zu deaktivieren (wenn false).

### Rückgabewert

Ein {{jsxref("Promise")}}.

### Ausnahmen

Das zurückgegebene `Promise` wird mit einer der folgenden Ausnahmen abgelehnt:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wenn `setSignals()` aufgerufen wird, während der Port nicht geöffnet ist. Rufen Sie [`SerialPort.open()`](/de/docs/Web/API/SerialPort/open) auf, um den Port zuerst zu öffnen.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wenn die Signale auf dem Gerät nicht gesetzt werden konnten.

## Beispiele

### Das "data terminal ready"-Signal aktivieren

Das folgende Beispiel aktiviert das DTR-Signal, wenn eine Verbindung hergestellt wird.

```js
await port.open({ baudRate: 9600 });
await port.setSignals({ dataTerminalReady: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
