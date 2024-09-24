---
title: "WorkerNavigator: serial-Eigenschaft"
short-title: serial
slug: Web/API/WorkerNavigator/serial
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("dedicated")}}

Die **`serial`** schreibgeschützte Eigenschaft des {{domxref("WorkerNavigator")}}-Interfaces gibt ein {{domxref("Serial")}}-Objekt zurück, das den Einstiegspunkt in die [Web Serial API](/de/docs/Web/API/Web_Serial_API) darstellt.

Beim Abrufen wird immer dieselbe Instanz des {{domxref("Serial")}}-Objekts zurückgegeben.

## Wert

Ein {{domxref("Serial")}}-Objekt.

## Beispiele

Das folgende Beispiel verwendet die Methode `getPorts()`, um eine Liste der verfügbaren Ports zu initialisieren.

```js
navigator.serial.getPorts().then((ports) => {
  // Initialize the list of available ports.
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Von und zu einem seriellen Port lesen und schreiben](https://developer.chrome.com/docs/capabilities/serial)
- [Erste Schritte mit der Web Serial API](https://codelabs.developers.google.com/codelabs/web-serial#0)
