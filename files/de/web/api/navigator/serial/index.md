---
title: "Navigator: serial-Eigenschaft"
short-title: serial
slug: Web/API/Navigator/serial
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`serial`** schreibgeschützte Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt in die [Web Serial API](/de/docs/Web/API/Web_Serial_API) darstellt.

Beim Abrufen wird immer dieselbe Instanz des [`Serial`](/de/docs/Web/API/Serial)-Objekts zurückgegeben.

## Wert

Ein [`Serial`](/de/docs/Web/API/Serial)-Objekt.

## Beispiele

Das folgende Beispiel verwendet die `getPorts()`-Methode, um eine Liste verfügbarer Ports zu initialisieren.

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

- [Von und zu einem seriellen Port lesen und schreiben](https://developer.chrome.com/docs/capabilities/serial)
- [Einführung in die Web Serial API](https://codelabs.developers.google.com/codelabs/web-serial#0)
