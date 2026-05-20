---
title: Befehl `input.releaseActions`
short-title: releaseActions
slug: Web/WebDriver/Reference/BiDi/Modules/input/releaseActions
l10n:
  sourceCommit: 0e3eb297658e3fff3be9bbe2a09cb6721ed1979b
---

Der Befehl `input.releaseActions` des [`input`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input)-Moduls gibt alle gehaltenen Tasten oder gedrückten Zeigerknöpfe für einen bestimmten Kontext frei und setzt den Eingabestatus für diesen Kontext zurück. Rufen Sie diesen Befehl nach [`input.performActions`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/performActions) auf, um Eingaben zu bereinigen, die in einem Zwischenzustand geblieben sind.

## Syntax

```json-nolint
{
  "method": "input.releaseActions",
  "params": {
    "context": "<contextId>"
  }
}
```

### Parameter

Das Feld `params` enthält:

- `context`
  - : Ein String, der die ID ({{Glossary("UUID", "UUID")}}) des Kontexts enthält, für den Eingaben freigegeben werden sollen. Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.

### Rückgabewert

Das `result`-Feld in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
- `no such frame`
  - : Kein Kontext mit der angegebenen Kontext-ID wird gefunden.

## Beispiele

### Freigeben aller aktiven Eingaben

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) senden Sie die folgende Nachricht nach [`input.performActions`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/performActions), um alle gehaltenen Tasten und Zeigerknöpfe freizugeben und den Eingabestatus zurückzusetzen:

```json
{
  "id": 1,
  "method": "input.releaseActions",
  "params": {
    "context": "6B3D5B3A-6571-432B-8E96-E53B5C2ECBB5"
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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`input.performActions`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/performActions)
- Befehl [`input.setFiles`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/setFiles)
- Ereignis [`input.fileDialogOpened`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/fileDialogOpened)
