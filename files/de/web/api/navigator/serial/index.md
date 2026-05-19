---
title: "Navigator: serial-Eigenschaft"
short-title: serial
slug: Web/API/Navigator/serial
l10n:
  sourceCommit: 6fe7a18b80e55d9d25dcc16dfb010eec09460bb8
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}

Die **`serial`**-Schreibgeschützte Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt in die [Web Serial API](/de/docs/Web/API/Web_Serial_API) darstellt.

Es wird immer dieselbe Instanz des [`Serial`](/de/docs/Web/API/Serial)-Objekts zurückgegeben.

## Wert

Ein [`Serial`](/de/docs/Web/API/Serial)-Objekt.

## Beispiele

### Verfügbare Ports auflisten

Das folgende Beispiel verwendet die Methode `getPorts()`, um eine Liste der verfügbaren Ports zu initialisieren.

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

- [Lesen und Schreiben in einen seriellen Port](https://developer.chrome.com/docs/capabilities/serial)
- [Einstieg in die Web Serial API](https://codelabs.developers.google.com/codelabs/web-serial#0)
