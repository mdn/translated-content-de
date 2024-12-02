---
title: "SerialPort: forget() Methode"
short-title: forget()
slug: Web/API/SerialPort/forget
l10n:
  sourceCommit: 0e2c698518ac4aaf54975093a139e764cff62670
---

{{securecontext_header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`SerialPort.forget()`** Methode des [`SerialPort`](/de/docs/Web/API/SerialPort) Interfaces gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff auf den seriellen Port widerrufen wird.

## Beschreibung

Eine Webseite kann die Berechtigungen zum Zugriff auf einen seriellen Port, an dem sie nicht mehr interessiert ist, bereinigen, indem sie `SerialPort.forget()` aufruft. Der Aufruf dieser Methode "vergisst" das Gerät, setzt alle zuvor festgelegten Berechtigungen zurück, sodass die aufrufende Seite nicht mehr mit dem Port kommunizieren kann.

Zum Beispiel kann in einer Bildungs-Webanwendung, die auf einem gemeinsam genutzten Computer mit vielen Geräten verwendet wird, eine große Anzahl an gesammelten, benutzergenerierten Berechtigungen zu einem schlechten Benutzererlebnis führen.

## Syntax

```js-nolint
forget()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, sobald die Verbindung widerrufen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
