---
title: "`input.setFiles`-Befehl"
short-title: setFiles
slug: Web/WebDriver/Reference/BiDi/Modules/input/setFiles
l10n:
  sourceCommit: 1db2c61210860e17e452e21122280b76a7dcffb6
---

Der `input.setFiles` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`input`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input) Moduls simuliert einen Dateiauswahldialog, indem er die Dateiauswahl eines [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Elements in einem gegebenen Kontext auf die angegebenen Dateipfade setzt.

## Syntax

```json-nolint
{
  "method": "input.setFiles",
  "params": {
    "context": "<contextId>",
    "element": "<elementId>",
    "files": ["<filePath>", ...]
  }
}
```

### Parameter

Das `params`-Feld enthält:

- `context`
  - : Ein String, der die ID des Kontexts enthält, zu dem das Ziel-Element [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file) gehört.
    Kontext-IDs werden durch Befehle wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
- `element`
  - : Ein Objekt, das die ID enthält, die das `<input type="file">` DOM-Element eindeutig identifiziert, das für die Dateiauswahl verwendet werden soll.
    Die ID wird vom Browser zurückgegeben, wenn Sie das Element mit [`browsingContext.locateNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes), [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) oder [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) lokalisieren.
- `files`
  - : Ein Array von Strings, wobei jeder String der absolute Dateipfad einer auszuwählenden Datei ist.
    Dieser Befehl überschreibt alle zuvor ausgewählten Dateien. Sie können ein leeres Array übergeben, um die Auswahl zu löschen.
    Wenn das Array mehr als einen Dateipfad enthält, stellen Sie sicher, dass das `<input type="file">`-Element das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input/file#multiple)-Attribut hat.

### Rückgabewert

Das `result`-Feld in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
- `no such element`
  - : Die Elementreferenz kann nicht auf ein gültiges DOM-Element im gegebenen Kontext aufgelöst werden.
- `no such frame`
  - : Es wird kein Kontext mit der gegebenen Kontext-ID gefunden.
- `unable to set file input`
  - : Das Element ist kein `<input>`-Element mit `type="file"`, das Element ist deaktiviert, oder es wird mehr als ein Dateipfad ohne das `multiple`-Attribut bereitgestellt.
- `unsupported operation`
  - : Der Browser ist nicht in der Lage, die ausgewählten Dateien auf die bereitgestellten Pfade zu setzen; zum Beispiel, wenn eine der angegebenen Dateien nicht auf dem Dateisystem existiert.

## Beispiele

### Eine Datei auf einem Datei-Input setzen

Mit einer [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), erhalten Sie zuerst die `sharedId` eines `<input type="file">`-Elements unter Verwendung von [`browsingContext.locateNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes) oder einem [`input.fileDialogOpened`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/fileDialogOpened) Ereignis, und senden dann die folgende Nachricht, um die ausgewählte Datei zu setzen:

```json
{
  "id": 1,
  "method": "input.setFiles",
  "params": {
    "context": "5f07e3ca-ecac-465e-b9ef-49000c196ecf",
    "element": {
      "sharedId": "3be28343-afd3-4dea-a2b6-a863fbbb80e1"
    },
    "files": ["/home/user/documents/test-upload.txt"]
  }
}
```

Der Browser antwortet folgendermaßen:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

### Das Löschen der Dateiauswahl

Um alle zuvor ausgewählten Dateien zu löschen, übergeben Sie ein leeres Array:

```json
{
  "id": 2,
  "method": "input.setFiles",
  "params": {
    "context": "5f07e3ca-ecac-465e-b9ef-49000c196ecf",
    "element": {
      "sharedId": "3be28343-afd3-4dea-a2b6-a863fbbb80e1"
    },
    "files": []
  }
}
```

Der Browser antwortet folgendermaßen:

```json
{
  "id": 2,
  "type": "success",
  "result": {}
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`input.performActions`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/performActions)-Befehl
- [`input.releaseActions`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/releaseActions)-Befehl
- [`input.fileDialogOpened`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/fileDialogOpened)-Ereignis
- [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate)-Befehl
