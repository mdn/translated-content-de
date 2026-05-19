---
title: "WorkerNavigator: serial-Eigenschaft"
short-title: serial
slug: Web/API/WorkerNavigator/serial
l10n:
  sourceCommit: 6fe7a18b80e55d9d25dcc16dfb010eec09460bb8
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("dedicated")}}

Die schreibgeschützte **`serial`**-Eigenschaft des [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Interfaces gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt des Workers in die [Web Serial API](/de/docs/Web/API/Web_Serial_API) darstellt.

Das gleiche [`Serial`](/de/docs/Web/API/Serial)-Objekt wird immer zurückgegeben.

## Wert

Ein [`Serial`](/de/docs/Web/API/Serial)-Objekt.

## Beispiele

### Verfügbare Ports auflisten

Das folgende Beispiel verwendet die `getPorts()`-Methode, um eine Liste der verfügbaren Ports zu initialisieren.

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

- [Lesen von und Schreiben auf einen seriellen Port](https://developer.chrome.com/docs/capabilities/serial)
- [Erste Schritte mit der Web Serial API](https://codelabs.developers.google.com/codelabs/web-serial#0)
