---
title: "Serial: getPorts()-Methode"
short-title: getPorts()
slug: Web/API/Serial/getPorts
l10n:
  sourceCommit: 2de8605cc697ca93b02f0b7109082b694f8950ec
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getPorts()`**-Methode der {{domxref("Serial")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von {{domxref("SerialPort")}}-Objekten aufgelöst wird, die serielle Anschlüsse repräsentieren, die mit dem Host verbunden sind und auf die der Ursprung zugreifen darf.

## Syntax

```js-nolint
getPorts()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von {{domxref("SerialPort")}}-Objekten aufgelöst wird.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Das zurückgegebene `Promise` wird mit diesem Fehler abgelehnt, wenn eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) die Nutzung dieser Funktion blockiert oder eine Benutzergenehmigungsaufforderung abgelehnt wurde.

## Beispiele

Das folgende Beispiel verwendet `getPorts()`, um eine Liste der verfügbaren Anschlüsse zu initialisieren.

```js
navigator.serial.getPorts().then((ports) => {
  // Initialisieren Sie die Liste der verfügbaren Anschlüsse mit `ports` beim Laden der Seite.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
