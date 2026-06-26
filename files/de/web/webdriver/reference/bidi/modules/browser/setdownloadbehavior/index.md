---
title: "`browser.setDownloadBehavior`-Befehl"
short-title: setDownloadBehavior
slug: Web/WebDriver/Reference/BiDi/Modules/browser/setDownloadBehavior
l10n:
  sourceCommit: ef8c3806c33f2b1d9d381f4fe3b643b5af5e3d22
---

Der `browser.setDownloadBehavior` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browser`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser) Moduls ermöglicht Dateidownloads in ein bestimmtes Verzeichnis, blockiert Dateidownloads vollständig oder setzt das Verhalten auf den Standard des Browsers zurück. Das Verhalten kann für alle oder einige [Benutzerkontexte](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) konfiguriert werden.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "browser.setDownloadBehavior",
  "params": {
    "downloadBehavior": {
      "type": "allowed",
      "destinationFolder": "/tmp/downloads"
    }
  }
}

/* With required and optional parameters */
{
  "method": "browser.setDownloadBehavior",
  "params": {
    "downloadBehavior": {
      "type": "allowed",
      "destinationFolder": "/tmp/downloads"
    },
    "userContexts": ["4e4b1f6d-3f1a-4b2e-9f8c-1a2b3c4d5e6f"]
  }
}
```

### Parameter

Das `params`-Feld enthält:

- `downloadBehavior`
  - : Ein Objekt mit den folgenden Feldern oder `null`, um das Standard-Downloadverhalten des Browsers wiederherzustellen:
    - `type`
      - : Ein String, der angibt, ob Downloads erlaubt oder blockiert sind. Gültige Werte sind:
        - `"allowed"`: Zeigt an, dass Downloads erlaubt sind. Wenn dieser Wert gesetzt ist, ist das `destinationFolder`-Feld erforderlich.
        - `"denied"`: Zeigt an, dass Downloads blockiert sind.
    - `destinationFolder`
      - : Ein String, der den Pfad zu dem Ordner angibt, in dem heruntergeladene Dateien gespeichert werden.
        Dieses Feld ist erforderlich, wenn `type` auf `"allowed"` gesetzt ist.
- `userContexts` {{optional_inline}}
  - : Ein Array von Strings, wobei jeder String die ID eines [Benutzerkontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) ist, auf den das Downloadverhalten angewendet werden soll.
    Benutzerkontext-IDs werden von Befehlen wie [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) oder [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) zurückgegeben.
    - Wenn enthalten, wird das angegebene Downloadverhalten auf jeden aufgeführten Benutzerkontext angewendet. Wenn `downloadBehavior` `null` ist, wird die pro-Kontext-Überschreibung für jeden aufgelisteten Benutzerkontext zurückgesetzt.
    - Wenn nicht enthalten, wird das angegebene Downloadverhalten als globaler Standard auf alle Benutzerkontexte angewendet.

### Rückgabewert

Das `result`-Feld in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
- `unsupported operation`
  - : Der Browser unterstützt das angegebene Downloadverhalten nicht.
- `no such user context`
  - : Kein Benutzerkontext mit der angegebenen Benutzerkontext-ID wird gefunden.

## Beispiele

### Downloads in einen bestimmten Ordner zulassen

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

### Downloads in mehreren Benutzerkontexten zulassen

Um Downloads in mehreren Benutzerkontexten zu erlauben, erhalten Sie die Benutzerkontext-IDs unter Verwendung von [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) oder [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts), und senden Sie dann die folgende Nachricht, um Downloads in einen angegebenen Ordner zu leiten:

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

Um Downloads in einem bestimmten Benutzerkontext zu blockieren, erhalten Sie zunächst die Benutzerkontext-ID mithilfe von [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) oder [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts). Senden Sie dann die folgende Nachricht:

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

### Downloadverhalten auf den Standard des Browsers zurücksetzen

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

- [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) Befehl
- [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) Befehl
