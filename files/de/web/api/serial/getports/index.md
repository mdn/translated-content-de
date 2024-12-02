---
title: "Serial: getPorts() Methode"
short-title: getPorts()
slug: Web/API/Serial/getPorts
l10n:
  sourceCommit: 0e2c698518ac4aaf54975093a139e764cff62670
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getPorts()`** Methode des [`Serial`](/de/docs/Web/API/Serial) Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`SerialPort`](/de/docs/Web/API/SerialPort) Objekten aufgelöst wird. Diese Objekte repräsentieren serielle Anschlüsse, die mit dem Host verbunden sind und auf die der Ursprung zugreifen darf.

## Syntax

```js-nolint
getPorts()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von [`SerialPort`](/de/docs/Web/API/SerialPort) Objekten aufgelöst wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das zurückgegebene `Promise` wird in einer der folgenden Situationen mit diesem Fehler abgelehnt:
    - Eine {{httpheader('Permissions-Policy/serial','serial')}} [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert die Nutzung dieser Funktion.
    - Eine Benutzerberechtigungsaufforderung wurde abgelehnt.

## Beispiele

Das folgende Beispiel verwendet `getPorts()`, um eine Liste verfügbarer Anschlüsse zu initialisieren.

```js
navigator.serial.getPorts().then((ports) => {
  // Initialize the list of available ports with `ports` on page load.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
