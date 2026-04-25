---
title: "Navigator: serial-Eigenschaft"
short-title: serial
slug: Web/API/Navigator/serial
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}

Die schreibgeschützte **`serial`**-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt in die [Web Serial API](/de/docs/Web/API/Web_Serial_API) darstellt.

Beim Abrufen wird immer dieselbe Instanz des [`Serial`](/de/docs/Web/API/Serial)-Objekts zurückgegeben.

## Wert

Ein [`Serial`](/de/docs/Web/API/Serial)-Objekt.

## Beispiele

Das folgende Beispiel verwendet die Methode `getPorts()`, um eine Liste verfügbarer Ports zu initialisieren.

```js
navigator.serial.getPorts().then((ports) => {
  // Initialize the list of available ports with `ports` on page load.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Von einem seriellen Port lesen und schreiben](https://developer.chrome.com/docs/capabilities/serial)
- [Einführung in die Web Serial API](https://codelabs.developers.google.com/codelabs/web-serial#0)
