---
title: "`input.releaseActions`-Befehl"
short-title: releaseActions
slug: Web/WebDriver/Reference/BiDi/Modules/input/releaseActions
l10n:
  sourceCommit: 1db2c61210860e17e452e21122280b76a7dcffb6
---

Der `input.releaseActions` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`input`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input) Moduls gibt alle gedrückten Tasten oder Zeiger-Knöpfe für einen gegebenen Kontext frei und setzt den Eingabestatus für diesen Kontext zurück. Rufen Sie ihn nach [`input.performActions`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/performActions) auf, um alle Eingaben zu bereinigen, die sich in einem Zwischenzustand befinden.

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

Das `params`-Feld enthält:

- `context`
  - : Ein String, der die ID des Kontexts enthält, für den Eingaben freigegeben werden sollen. Kontext-IDs werden durch Befehle wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.

### Rückgabewert

Das `result`-Feld in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
- `no such frame`
  - : Kein Kontext mit der angegebenen Kontext-ID gefunden.

## Beispiele

### Alle aktiven Eingaben freigeben

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) senden Sie nach [`input.performActions`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/performActions) die folgende Nachricht, um alle gedrückten Tasten und Zeiger-Knöpfe freizugeben und den Eingabestatus zurückzusetzen:

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

- [`input.performActions`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/performActions) Befehl
- [`input.setFiles`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/setFiles) Befehl
- [`input.fileDialogOpened`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/fileDialogOpened) Ereignis
