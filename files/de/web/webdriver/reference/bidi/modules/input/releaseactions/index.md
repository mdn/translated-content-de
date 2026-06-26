---
title: "`input.releaseActions` Befehl"
short-title: releaseActions
slug: Web/WebDriver/Reference/BiDi/Modules/input/releaseActions
l10n:
  sourceCommit: ef8c3806c33f2b1d9d381f4fe3b643b5af5e3d22
---

Der `input.releaseActions` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`input`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input) Moduls lässt alle gedrückten Tasten oder gedrückten Zeigertasten für einen gegebenen Kontext los und setzt den Eingabestatus für diesen Kontext zurück. Rufen Sie diesen Befehl nach [`input.performActions`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/performActions) auf, um alle Eingaben, die sich in einem Zwischenzustand befinden, aufzuräumen.

## Syntax

```json-nolint
{
  "method": "input.releaseActions",
  "params": {
    "context": "5f07e3ca-ecac-465e-b9ef-49000c196ecf"
  }
}
```

### Parameter

Das Feld `params` enthält:

- `context`
  - : Ein String, der die ID des Kontexts enthält, für den die Eingaben freigegeben werden sollen. Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.

### Rückgabewert

Das `result` Feld in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
- `no such frame`
  - : Kein Kontext mit der angegebenen Kontext-ID gefunden.

## Beispiele

### Freigabe aller aktiven Eingaben

Mit einer [WebDriver BiDi Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), senden Sie die folgende Nachricht nach [`input.performActions`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/performActions), um alle gedrückten Tasten und Zeigertasten freizugeben und den Eingabestatus zurückzusetzen:

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
