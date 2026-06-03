---
title: "`browser.setDownloadBehavior`-Befehl"
short-title: setDownloadBehavior
slug: Web/WebDriver/Reference/BiDi/Modules/browser/setDownloadBehavior
l10n:
  sourceCommit: 1db2c61210860e17e452e21122280b76a7dcffb6
---

Der `browser.setDownloadBehavior` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browser`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser) Moduls ermöglicht das Herunterladen von Dateien in einen festgelegten Ordner, blockiert das Herunterladen von Dateien vollständig oder setzt das Verhalten auf den Standard des Browsers zurück. Das Verhalten kann für alle oder bestimmte [Benutzerkontexte](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) konfiguriert werden.

## Syntax

```json-nolint
{
  "method": "browser.setDownloadBehavior",
  "params": {
    "downloadBehavior": {}
  }
}
```

### Parameter

Das `params`-Feld enthält:

- `downloadBehavior`
  - : Ein Objekt mit den folgenden Feldern, oder `null`, um auf das Standard-Downloadverhalten des Browsers zurückzusetzen:
    - `type`
      - : Ein String, der angibt, ob Downloads erlaubt oder blockiert sind. Gültige Werte sind:
        - `"allowed"`: Gibt an, dass Downloads erlaubt sind. Wenn dieser Wert gesetzt ist, ist das `destinationFolder`-Feld erforderlich.
        - `"denied"`: Gibt an, dass Downloads blockiert sind.
    - `destinationFolder`
      - : Ein String, der den Pfad zu dem Ordner angibt, in dem heruntergeladene Dateien gespeichert werden.
        Dieses Feld ist erforderlich, wenn `type` auf `"allowed"` gesetzt ist.
- `userContexts` {{optional_inline}}
  - : Ein Array von Strings, wobei jeder String die ID eines [Benutzerkontextes](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) ist, auf den das Downloadverhalten angewendet werden soll.
    Benutzerkontext-IDs werden durch Befehle wie [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) oder [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) zurückgegeben.
    - Wenn enthalten, wird das angegebene Downloadverhalten auf jeden aufgeführten Benutzerkontext angewendet. Wenn `downloadBehavior` `null` ist, wird die spezifische Einstellung für jeden aufgeführten Benutzerkontext zurückgesetzt.
    - Wenn nicht enthalten, wird das angegebene Downloadverhalten als globaler Standard auf alle Benutzerkontexte angewendet.

### Rückgabewert

Das `result`-Feld in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
- `unsupported operation`
  - : Der Browser unterstützt das angegebene Downloadverhalten nicht.
- `no such user context`
  - : Es wird kein Benutzerkontext mit der angegebenen Benutzerkontext-ID gefunden.

## Beispiele

### Erlauben von Downloads in einen bestimmten Ordner

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) senden Sie die folgende Nachricht, um das globale Downloadverhalten festzulegen und Downloads in einen bestimmten Ordner zu leiten:

```json
{
  "id": 1,
  "method": "browser.setDownloadBehavior",
  "params": {
    "downloadBehavior": {
      "type": "allowed",
      "destinationFolder": "/home/user/downloads"
    }
  }
}
```

Der Browser antwortet wie folgt:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

### Erlauben von Downloads in mehreren Benutzerkontexten

Um Downloads in mehreren Benutzerkontexten zu erlauben, holen Sie die Benutzerkontext-IDs mithilfe von [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) oder [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) und senden dann die folgende Nachricht, um Downloads in einen angegebenen Ordner zu leiten:

```json
{
  "id": 2,
  "method": "browser.setDownloadBehavior",
  "params": {
    "downloadBehavior": {
      "type": "allowed",
      "destinationFolder": "/home/user/downloads/user-context"
    },
    "userContexts": [
      "4e4b1f6d-3f1a-4b2e-9f8c-1a2b3c4d5e6f",
      "9c2d8e45-fb12-4a67-bc34-567890abcdef"
    ]
  }
}
```

Der Browser antwortet wie folgt:

```json
{
  "id": 2,
  "type": "success",
  "result": {}
}
```

### Blockieren von Downloads in einem bestimmten Benutzerkontext

Um Downloads in einem bestimmten Benutzerkontext zu blockieren, holen Sie zunächst die Benutzerkontext-ID mithilfe von [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) oder [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts). Senden Sie dann die folgende Nachricht:

```json
{
  "id": 3,
  "method": "browser.setDownloadBehavior",
  "params": {
    "downloadBehavior": {
      "type": "denied"
    },
    "userContexts": ["4e4b1f6d-3f1a-4b2e-9f8c-1a2b3c4d5e6f"]
  }
}
```

Der Browser antwortet wie folgt:

```json
{
  "id": 3,
  "type": "success",
  "result": {}
}
```

### Zurücksetzen des Downloadverhaltens auf den Browserstandard

Senden Sie die folgende Nachricht, um das globale Downloadverhalten auf den Standard des Browsers zurückzusetzen:

```json
{
  "id": 4,
  "method": "browser.setDownloadBehavior",
  "params": {
    "downloadBehavior": null
  }
}
```

Der Browser antwortet wie folgt:

```json
{
  "id": 4,
  "type": "success",
  "result": {}
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext)-Befehl
- [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts)-Befehl
