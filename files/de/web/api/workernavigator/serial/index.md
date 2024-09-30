---
title: "WorkerNavigator: serial-Eigenschaft"
short-title: serial
slug: Web/API/WorkerNavigator/serial
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("dedicated")}}

Die **`serial`**-Eigenschaft des [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Interfaces gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt in die [Web Serial API](/de/docs/Web/API/Web_Serial_API) darstellt.

Beim Abrufen wird immer dieselbe Instanz des [`Serial`](/de/docs/Web/API/Serial)-Objekts zurückgegeben.

## Wert

Ein [`Serial`](/de/docs/Web/API/Serial)-Objekt.

## Beispiele

Im folgenden Beispiel wird die Methode `getPorts()` verwendet, um eine Liste der verfügbaren Ports zu initialisieren.

```js
navigator.serial.getPorts().then((ports) => {
  // Initialize the list of available ports.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Von einem seriellen Anschluss lesen und schreiben](https://developer.chrome.com/docs/capabilities/serial)
- [Erste Schritte mit der Web Serial API](https://codelabs.developers.google.com/codelabs/web-serial#0)
