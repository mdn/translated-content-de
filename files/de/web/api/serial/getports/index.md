---
title: "Serial: getPorts()-Methode"
short-title: getPorts()
slug: Web/API/Serial/getPorts
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getPorts()`**-Methode der [`Serial`](/de/docs/Web/API/Serial)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekten aufgelöst wird. Diese repräsentieren die mit dem Host verbundenen seriellen Ports, auf die der Ursprung Zugriff hat.

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
  - : Das zurückgegebene `Promise` wird in einer der folgenden Situationen mit diesem Fehler abgelehnt:
    - Eine {{httpheader('Permissions-Policy/serial','serial')}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert die Nutzung dieser Funktion.
    - Eine Benutzerberechtigungsanfrage wurde abgelehnt.

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
