---
title: browser.close-Befehl
short-title: browser.close
slug: Web/WebDriver/Reference/BiDi/Modules/browser/close
l10n:
  sourceCommit: c09036bf0ea2f0b6e322dfdeee64b26ab53e2797
---

Der `browser.close` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browser`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser) Moduls schließt den Browser und beendet alle aktiven WebDriver-Sitzungen. Tabs werden geschlossen, ohne dass [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Event-Handler-Funktionen ausgeführt werden. Die Antwort wird gesendet, bevor die WebSocket-Verbindung geschlossen wird.

## Syntax

```json-nolint
{
  "method": "browser.close",
  "params": {}
}
```

### Parameter

Keine. Sie müssen jedoch das `params`-Feld einschließen und auf ein leeres Objekt (`{}`) setzen.

### Rückgabewert

Das `result`-Feld in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- `unable to close browser`
  - : Es gibt andere aktive WebDriver-Sitzungen, die zum Zeitpunkt des Befehls noch geöffnet sind. Browser können diesen Fehler zurückgeben, bevor sie mit dem Schließvorgang fortfahren.

## Beispiele

### Schließen des Browsers

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) senden Sie die folgende Nachricht, um den Browser zu schließen:

```json
{
  "id": 1,
  "method": "browser.close",
  "params": {}
}
```

Vor dem Schließen antwortet der Browser erfolgreich, wie hier gezeigt:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

Nach der Antwort schließt die WebSocket-Verbindung, da der Browser heruntergefahren wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) Befehl
- [`session.end`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/end) Befehl
- [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) Befehl
- [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) Befehl
- [`browser.removeUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/removeUserContext) Befehl
