---
title: "SerialPort: forget() Methode"
short-title: forget()
slug: Web/API/SerialPort/forget
l10n:
  sourceCommit: 6fe7a18b80e55d9d25dcc16dfb010eec09460bb8
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`forget()`** Methode des [`SerialPort`](/de/docs/Web/API/SerialPort) Interfaces gibt ein {{jsxref("Promise")}} zurück, das gelöst wird, wenn der Zugang zum Seriellen Port widerrufen wird.

## Syntax

```js-nolint
forget()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, sobald die Verbindung widerrufen wird.

## Beschreibung

Eine Website kann die Berechtigungen zum Zugriff auf einen seriellen Port, an dem kein Interesse mehr besteht, aufräumen, indem sie `forget()` aufruft.
Das Aufrufen dieser Methode "vergisst" das Gerät, indem alle zuvor gesetzten Berechtigungen zurückgesetzt werden, sodass die aufrufende Seite nicht mehr mit dem Port kommunizieren kann.

Zum Beispiel, für eine Bildungswebanwendung, die auf einem gemeinsam genutzten Computer mit vielen Geräten verwendet wird, führt eine große Anzahl angesammelter nutzergenerierter Berechtigungen zu einer schlechten Benutzererfahrung.
Die Anwendung sollte `forget()` nach jeder Gerätdesaktivierung aufrufen, um nach jeder Sitzung aufzuräumen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
