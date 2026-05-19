---
title: "Serial: getPorts()-Methode"
short-title: getPorts()
slug: Web/API/Serial/getPorts
l10n:
  sourceCommit: 6fe7a18b80e55d9d25dcc16dfb010eec09460bb8
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getPorts()`**-Methode des [`Serial`](/de/docs/Web/API/Serial)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekten aufgelöst wird. Diese Objekte repräsentieren serielle Ports, die mit dem Host verbunden sind und auf die der Ursprung Zugriff hat.

## Syntax

```js-nolint
getPorts()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekten aufgelöst wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das zurückgegebene `Promise` wird mit diesem Fehler in einer der folgenden Situationen abgelehnt:
    - Eine {{httpheader('Permissions-Policy/serial','serial')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert die Nutzung dieser Funktion.
    - Eine Benutzerberechtigungsaufforderung wurde abgelehnt.

## Beispiele

### Verfügbare Ports auflisten

Das folgende Beispiel verwendet `getPorts()`, um eine Liste verfügbarer Ports zu initialisieren.

```js
navigator.serial.getPorts().then((ports) => {
  // Initialize the list of available ports with `ports` on page load.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
