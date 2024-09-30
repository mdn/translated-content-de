---
title: "Serial: getPorts()-Methode"
short-title: getPorts()
slug: Web/API/Serial/getPorts
l10n:
  sourceCommit: 2de8605cc697ca93b02f0b7109082b694f8950ec
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

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
  - : Das zurückgegebene `Promise` wird mit diesem Fehler abgelehnt, wenn eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) die Nutzung dieser Funktion blockiert oder eine Benutzerberechtigungsaufforderung abgelehnt wurde.

## Beispiele

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
