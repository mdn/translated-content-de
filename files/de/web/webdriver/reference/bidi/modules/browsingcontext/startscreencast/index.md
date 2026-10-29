---
title: Befehl `browsingContext.startScreencast`
short-title: startScreencast
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/startScreencast
l10n:
  sourceCommit: a0ec5a931fb40d9307d096de83c1d4d10f0d6ea6
---

Der [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) `browsingContext.startScreencast` des Moduls [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) startet die Aufzeichnung des Viewports des angegebenen [Top-Level-Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) in eine Datei.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "browsingContext.startScreencast",
  "params": {
    "context": "0b594fd2-e8de-4fd1-bad5-9b3d791bdb3d"
  }
}

/* With required and optional parameters */
{
  "method": "browsingContext.startScreencast",
  "params": {
    "context": "0b594fd2-e8de-4fd1-bad5-9b3d791bdb3d",
    "destinationFolder": "/home/example/recordings",
    "mimeType": "video/webm",
    "video": {
      "frameRate": 15,
      "height": 720,
      "width": 1280
    }
  }
}
```

### Parameter

Das Feld `params` enthält:

- `context`
  - : Eine Zeichenfolge mit der ID des aufzuzeichnenden Top-Level-Kontexts.
    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
- `destinationFolder` {{optional_inline}}
  - : Eine Zeichenfolge mit dem Pfad zu dem Verzeichnis, in dem die Aufzeichnung gespeichert werden soll.
    Das Verzeichnis muss bereits vorhanden sein. Der Pfad wird vom Stammverzeichnis des Dateisystems des Browsers aus aufgelöst.
    Wird der Parameter weggelassen, hängt der Speicherort der Datei vom Browser ab.
- `mimeType` {{optional_inline}}
  - : Eine Zeichenfolge, die den {{Glossary("MIME_type", "MIME-Typ")}} des Aufzeichnungsformats angibt.
    Wird der Parameter weggelassen, wählt der Browser das Format.
- `video` {{optional_inline}}
  - : Ein Objekt, das die Einstellungen für die Videoaufzeichnung angibt.
    Der Browser versucht, diese Werte so genau wie möglich einzuhalten, soweit Hardwaregrenzen und andere Einschränkungen dies zulassen.
    Es kann die folgenden Felder enthalten:
    - `frameRate` {{optional_inline}}
      - : Eine nicht negative Ganzzahl, die die Bildrate der Aufzeichnung in Bildern pro Sekunde angibt.
    - `height` {{optional_inline}}
      - : Eine nicht negative Ganzzahl, die die Höhe des Videos in Pixeln angibt.
    - `width` {{optional_inline}}
      - : Eine nicht negative Ganzzahl, die die Breite des Videos in Pixeln angibt.

### Rückgabewert

Das Objekt `result` in der Antwort enthält die folgenden Felder:

- `path`
  - : Eine Zeichenfolge mit dem Dateipfad, unter dem der Browser die Aufzeichnung speichert.
- `screencast`
  - : Eine Zeichenfolge mit der ID der Aufzeichnung.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
    - Eine Videovorgabe liegt außerhalb des zulässigen Ganzzahlbereichs.
    - Der durch [`destinationFolder`](#destinationfolder) angegebene Pfad kann nicht gefunden werden.
    - Der angegebene [`context`](#context) ist kein Top-Level-Kontext.
- `no such frame`
  - : Wird ausgelöst, wenn kein Kontext mit der angegebenen [Kontext-ID](#context) gefunden wird.
- `unknown error`
  - : Wird ausgelöst, wenn der Browser den Aufzeichnungsstream nicht erstellen kann.
- `unsupported operation`
  - : Wird ausgelöst, wenn der Browser den Viewport des angegebenen Kontexts nicht aufzeichnen kann.

## Beschreibung

Der Befehl `browsingContext.startScreencast` zeichnet den Viewport des Top-Level-Kontexts über einen Zeitraum auf.
Die Aufzeichnung wird fortgesetzt, nachdem der Browser die Antwort gesendet hat. Währenddessen schreibt der Browser die Aufzeichnung in die Datei.
Die Antwort enthält eine Aufzeichnungs-ID und einen Dateipfad.
Verwenden Sie diese ID mit [`browsingContext.stopScreencast`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/stopScreencast), um die Aufzeichnung zu beenden.

Der Browser erstellt und beschreibt die Datei, löscht sie jedoch nicht.
Der Client ist dafür verantwortlich, die Datei zu entfernen, wenn sie nicht mehr benötigt wird, sofern er über den erforderlichen Zugriff auf das Dateisystem verfügt.

Wenn der Browser während der laufenden Aufzeichnung keine Daten in die Datei schreiben kann, beendet er die Aufzeichnung automatisch.
Wenn der Client anschließend `browsingContext.stopScreencast` sendet, gibt der Browser eine Erfolgsantwort zurück, deren Objekt `result` sowohl den Dateipfad [`path`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/stopScreencast#path) als auch eine Fehlerbeschreibung unter [`error`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/stopScreencast#error) enthält.

## Beispiele

### Eine Viewport-Aufzeichnung starten

Angenommen, Sie verfügen über eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Sie haben mit [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) einen Tab erstellt und darin eine Seite aufgerufen.
Der Browser hat im Feld [`context`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create#context) eine Kontext-ID zurückgegeben.
Senden Sie die folgende Nachricht, um die Aufzeichnung des Viewports des Tabs zu starten:

```json
{
  "id": 4,
  "method": "browsingContext.startScreencast",
  "params": {
    "context": "0b594fd2-e8de-4fd1-bad5-9b3d791bdb3d"
  }
}
```

Der Browser startet die Aufzeichnung und antwortet mit dem Dateipfad und der Aufzeichnungs-ID wie folgt:

```json
{
  "id": 4,
  "type": "success",
  "result": {
    "path": "/home/example/Downloads/screencast-d746584f-4744-4cb5-aabd-f059ab65144d.webm",
    "screencast": "d746584f-4744-4cb5-aabd-f059ab65144d"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`browsingContext.stopScreencast`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/stopScreencast)
- Befehl [`browsingContext.captureScreenshot`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/captureScreenshot)
- Befehl [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree)
