---
title: "WorkerNavigator: serial-Eigenschaft"
short-title: serial
slug: Web/API/WorkerNavigator/serial
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("dedicated")}}

Die schreibgeschützte Eigenschaft **`serial`** der [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Schnittstelle gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt in die [Web Serial API](/de/docs/Web/API/Web_Serial_API) darstellt.

Beim Abrufen wird immer dieselbe Instanz des [`Serial`](/de/docs/Web/API/Serial)-Objekts zurückgegeben.

## Wert

Ein [`Serial`](/de/docs/Web/API/Serial)-Objekt.

## Beispiele

Im folgenden Beispiel wird die `getPorts()`-Methode verwendet, um eine Liste der verfügbaren Ports zu initialisieren.

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

- [Lesen und Schreiben an einen seriellen Port](https://developer.chrome.com/docs/capabilities/serial)
- [Erste Schritte mit der Web Serial API](https://codelabs.developers.google.com/codelabs/web-serial#0)
