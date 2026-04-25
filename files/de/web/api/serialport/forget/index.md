---
title: "SerialPort: forget() Methode"
short-title: forget()
slug: Web/API/SerialPort/forget
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{securecontext_header}}{{APIRef("Web Serial API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`SerialPort.forget()`** Methode der [`SerialPort`](/de/docs/Web/API/SerialPort) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff auf den Serialport aufgehoben wird.

## Beschreibung

Eine Webseite kann die Berechtigungen zum Zugriff auf einen Serialport, an dem sie nicht mehr interessiert ist, bereinigen, indem sie `SerialPort.forget()` aufruft. Durch diesen Aufruf wird das Gerät "vergessen", was alle zuvor festgelegten Berechtigungen zurücksetzt, sodass die aufrufende Seite nicht mehr mit dem Port kommunizieren kann.

Zum Beispiel erzeugt eine große Anzahl von vom Benutzer generierten Berechtigungen, die sich bei einer Bildungs-Webanwendung auf einem gemeinsam genutzten Computer mit vielen Geräten angesammelt haben, eine schlechte Benutzererfahrung.

## Syntax

```js-nolint
forget()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, sobald die Verbindung aufgehoben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
