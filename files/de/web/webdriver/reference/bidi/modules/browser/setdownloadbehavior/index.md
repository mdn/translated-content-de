---
title: "`browser.setDownloadBehavior`-Befehl"
short-title: setDownloadBehavior
slug: Web/WebDriver/Reference/BiDi/Modules/browser/setDownloadBehavior
l10n:
  sourceCommit: 8626312a42264212095783a26ec0fb1f8d80487b
---

Der `browser.setDownloadBehavior`-[Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browser`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser)-Moduls ermöglicht das Herunterladen von Dateien in einen angegebenen Ordner, das vollständige Blockieren von Downloads oder das Zurücksetzen des Verhaltens auf die Standardeinstellungen des Browsers. Das Verhalten kann für alle oder einige [Benutzerkontexte](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) konfiguriert werden.

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
  - : Ein Objekt mit den folgenden Feldern oder `null`, um das Standard-Download-Verhalten des Browsers zurückzusetzen:
    - `type`
      - : Ein String, der angibt, ob Downloads erlaubt oder blockiert sind. Gültige Werte sind:
        - `"allowed"`: Gibt an, dass Downloads erlaubt sind. Wenn dieser Wert gesetzt ist, wird das Feld `destinationFolder` benötigt.
        - `"denied"`: Gibt an, dass Downloads blockiert sind.
    - `destinationFolder`
      - : Ein String, der den Pfad zu dem Ordner angibt, in dem heruntergeladene Dateien gespeichert werden.
        Dieses Feld ist erforderlich, wenn `type` auf `"allowed"` gesetzt ist.
- `userContexts` {{optional_inline}}
  - : Ein Array von Strings, wobei jeder String die ID ({{Glossary("UUID", "UUID")}}) eines [Benutzerkontextes](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) ist, auf den das Download-Verhalten angewendet werden soll.
    Benutzerkontext-IDs werden von Befehlen wie [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) oder [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) zurückgegeben.
    - Wenn enthalten, wird das festgelegte Download-Verhalten auf jeden aufgeführten Benutzerkontext angewendet. Wenn `downloadBehavior` `null` ist, wird die pro Kontext festgelegte Überschreibung für jeden aufgelisteten Benutzerkontext zurückgesetzt.
    - Wenn nicht enthalten, wird das festgelegte Download-Verhalten als globaler Standard auf alle Benutzerkontexte angewendet.

### Rückgabewert

Das `result`-Feld in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
- `unsupported operation`
  - : Der Browser unterstützt das angegebene Download-Verhalten nicht.
- `no such user context`
  - : Kein Benutzerkontext mit der angegebenen Benutzerkontext-ID gefunden.

## Beispiele

### Downloads in einen bestimmten Ordner erlauben

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) senden Sie die folgende Nachricht, um das globale Download-Verhalten festzulegen und Downloads in einen bestimmten Ordner zu leiten:

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

### Downloads in mehreren Benutzerkontexten erlauben

Um Downloads in mehreren Benutzerkontexten zu erlauben, erhalten Sie die Benutzerkontext-IDs mit [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) oder [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) und senden Sie dann die folgende Nachricht, um Downloads an einen angegebenen Ordner zu leiten:

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

### Downloads in einem bestimmten Benutzerkontext blockieren

Um Downloads in einem bestimmten Benutzerkontext zu blockieren, erhalten Sie zunächst die Benutzerkontext-ID mit [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) oder [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts). Dann senden Sie die folgende Nachricht:

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

### Download-Verhalten auf die Standardeinstellungen des Browsers zurücksetzen

Senden Sie die folgende Nachricht, um das globale Download-Verhalten auf die Standardeinstellungen des Browsers zurückzusetzen:

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
