---
title: session.end-Befehl
short-title: session.end
slug: Web/WebDriver/Reference/BiDi/Modules/session/end
l10n:
  sourceCommit: fbf733732bf531a1be40a0c646bcbc4b31618476
---

Der `session.end`-[Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`session`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session)-Moduls beendet die aktuelle BiDi-Sitzung des Clients mit dem Browser.

## Syntax

```json-nolint
{
  "method": "session.end",
  "params": {}
}
```

### Parameter

Keine. Sie müssen jedoch das `params`-Feld einschließen und es auf ein leeres Objekt (`{}`) setzen.

### Rückgabewert

Das `result`-Feld in der Antwort ist ein leeres Objekt (`{}`).

## Beispiele

### Beenden einer Automatisierungssitzung mit dem Browser

Mit einer etablierten WebDriver-BiDi-Verbindung senden Sie die folgende Nachricht, um die aktuelle Sitzung zu beenden:

```json
{
  "id": 2,
  "method": "session.end",
  "params": {}
}
```

Der Browser antwortet mit:

```json
{
  "id": 2,
  "type": "success",
  "result": {}
}
```

Die Erfolgsantwort wird empfangen, bevor die WebSocket-Verbindung geschlossen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new)-Befehl
- [`session.status`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/status)-Befehl
