---
title: "`browser.removeUserContext` Befehl"
short-title: removeUserContext
slug: Web/WebDriver/Reference/BiDi/Modules/browser/removeUserContext
l10n:
  sourceCommit: 1db2c61210860e17e452e21122280b76a7dcffb6
---

Der `browser.removeUserContext` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browser`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser) Moduls entfernt den angegebenen [Benutzerkontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) und alle zugehörigen Tabs in allen Fenstern. Tabs werden geschlossen, ohne dass die [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignishandler-Funktionen ausgeführt werden.

> [!WARNING]
> Dieser Befehl ist unwiderruflich, und alle mit dem Benutzerkontext verbundenen Speicherungen werden dauerhaft gelöscht.

## Syntax

```json-nolint
{
  "method": "browser.removeUserContext",
  "params": {
    "userContext": "<userContextId>"
  }
}
```

### Parameter

Das `params` Feld enthält:

- `userContext`
  - : Ein String, der die ID des zu entfernenden Benutzerkontexts enthält.
    Benutzerkontext-IDs werden von Befehlen wie [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) oder [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) zurückgegeben.
    Der Standardbenutzerkontext (`"default"`) kann nicht entfernt werden.

### Rückgabewert

Das `result` Feld in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Das `userContext` Feld ist `"default"`. Der Standardbenutzerkontext kann nicht entfernt werden.
- `no such user context`
  - : Kein Benutzerkontext mit der angegebenen Benutzerkontext-ID gefunden.

## Beispiele

### Entfernen eines Benutzerkontexts

Betrachten Sie ein Szenario, in dem Sie eine [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) haben. Nachdem Sie einen [Benutzerkontext erstellt haben](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) mit `browser.createUserContext`, senden Sie die folgende Nachricht, wenn Sie ihn entfernen möchten:

```json
{
  "id": 1,
  "method": "browser.removeUserContext",
  "params": {
    "userContext": "4e4b1f6d-3f1a-4b2e-9f8c-1a2b3c4d5e6f"
  }
}
```

Der Browser antwortet mit einer erfolgreichen Entfernung wie folgt:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) Befehl
- [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) Befehl
- [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) Befehl
- [`browser.close`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/close) Befehl
- [`session.end`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/end) Befehl
