---
title: "Serial: Methode getPorts()"
short-title: getPorts()
slug: Web/API/Serial/getPorts
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getPorts()`**-Methode des [`Serial`](/de/docs/Web/API/Serial)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekten aufgelöst wird, die serielle Schnittstellen vertreten, die mit dem Host verbunden sind und auf die der Ursprung Zugriff hat.

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
  - : Das zurückgegebene `Promise` wird mit diesem Fehler abgelehnt in einer der folgenden Situationen:
    - Eine {{httpheader('Permissions-Policy/serial','serial')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert die Nutzung dieser Funktion.
    - Eine Benutzerberechtigungsabfrage wurde abgelehnt.

## Beispiele

Das folgende Beispiel verwendet `getPorts()`, um eine Liste der verfügbaren Schnittstellen zu initialisieren.

```js
navigator.serial.getPorts().then((ports) => {
  // Initialize the list of available ports with `ports` on page load.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
