---
title: "Navigator: serielle Eigenschaft"
short-title: serial
slug: Web/API/Navigator/serial
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`serial`** schreibgeschützte Eigenschaft des {{domxref("Navigator")}}-Interfaces gibt ein {{domxref("Serial")}}-Objekt zurück, das den Einstiegspunkt in die [Web Serial API](/de/docs/Web/API/Web_Serial_API) darstellt.

Beim Abrufen wird immer dieselbe Instanz des {{domxref("Serial")}}-Objekts zurückgegeben.

## Wert

Ein {{domxref("Serial")}}-Objekt.

## Beispiele

Im folgenden Beispiel wird die Methode `getPorts()` verwendet, um eine Liste der verfügbaren Ports zu initialisieren.

```js
navigator.serial.getPorts().then((ports) => {
  // Initialisieren der Liste der verfügbaren Ports mit `ports` beim Laden der Seite.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Von einem seriellen Port lesen und zu einem seriellen Port schreiben](https://developer.chrome.com/docs/capabilities/serial)
- [Einstieg in die Web Serial API](https://codelabs.developers.google.com/codelabs/web-serial#0)
