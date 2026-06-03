---
title: "`browser.getUserContexts`-Befehl"
short-title: getUserContexts
slug: Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts
l10n:
  sourceCommit: 1db2c61210860e17e452e21122280b76a7dcffb6
---

Der `browser.getUserContexts`-[Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browser`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser)-Moduls gibt eine Liste aller aktuellen [Benutzerkontexte](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) im Browser zurück.

## Syntax

```json-nolint
{
  "method": "browser.getUserContexts",
  "params": {}
}
```

### Parameter

Keine. Sie müssen jedoch das Feld `params` einfügen und auf ein leeres Objekt (`{}`) setzen.

### Rückgabewert

Das folgende Feld im `result`-Objekt der Antwort beschreibt die Benutzerkontexte im Browser:

- `userContexts`
  - : Ein Array von einem oder mehreren Objekten, die jeweils einen Benutzerkontext darstellen.
    Jedes Objekt hat das folgende Feld:
    - `userContext`
      - : Ein String, der die ID enthält, die den Benutzerkontext eindeutig identifiziert.
        Der Standard-Benutzerkontext hat den Wert `"default"`; er existiert immer und kann nicht entfernt werden, sodass das Array niemals leer ist.

## Beispiele

### Abrufen einer Liste von Benutzerkontexten

Mit einer [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) senden Sie die folgende Nachricht, um eine Liste aller Benutzerkontexte zu erhalten:

```json
{
  "id": 1,
  "method": "browser.getUserContexts",
  "params": {}
}
```

Wenn nur der Standard-Benutzerkontext existiert, antwortet der Browser wie folgt:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "userContexts": [
      {
        "userContext": "default"
      }
    ]
  }
}
```

### Abrufen einer Liste von Benutzerkontexten nach dem Erstellen weiterer Kontexte

Nach dem Erstellen einiger Benutzerkontexte mit [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) senden Sie die folgende Nachricht, um alle aufzulisten:

```json
{
  "id": 2,
  "method": "browser.getUserContexts",
  "params": {}
}
```

Der Browser antwortet mit allen Benutzerkontexten, einschließlich der Standardkontext, wie folgt:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "userContexts": [
      {
        "userContext": "default"
      },
      {
        "userContext": "4e4b1f6d-3f1a-4b2e-9f8c-1a2b3c4d5e6f"
      },
      {
        "userContext": "7d9e2a1b-5c3f-4e6d-8a7b-2c1d0e9f8a7b"
      }
    ]
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new)-Befehl
- [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext)-Befehl
- [`browser.removeUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/removeUserContext)-Befehl
