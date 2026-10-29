---
title: Befehl `browsingContext.stopScreencast`
short-title: stopScreencast
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/stopScreencast
l10n:
  sourceCommit: a0ec5a931fb40d9307d096de83c1d4d10f0d6ea6
---

Der [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) `browsingContext.stopScreencast` des Moduls [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) beendet die angegebene Screencast-Aufzeichnung und gibt den Pfad zur Aufzeichnungsdatei zurück.

## Syntax

```json-nolint
{
  "method": "browsingContext.stopScreencast",
  "params": {
    "screencast": "d746584f-4744-4cb5-aabd-f059ab65144d"
  }
}
```

### Parameter

Das Feld `params` enthält:

- `screencast`
  - : Ein String mit der ID der Aufzeichnung, die beendet werden soll.
    Aufzeichnungs-IDs werden vom Befehl [`browsingContext.startScreencast`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/startScreencast#return_value) zurückgegeben.

### Rückgabewert

Das Objekt `result` in der Antwort enthält die folgenden Felder:

- `error` {{optional_inline}}
  - : Ein String, der den Fehler beim Schreiben der aufgezeichneten Daten in eine Datei beschreibt.
    Der Wortlaut der Fehlermeldung hängt vom Browser ab.
    Dieses Feld ist nur enthalten, wenn ein Schreibfehler auftritt.
- `path`
  - : Ein String mit dem Dateipfad, unter dem der Browser die Aufzeichnung speichert.
    Dies ist derselbe Pfad, den [`browsingContext.startScreencast`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/startScreencast#return_value) zurückgibt.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wird ausgelöst, wenn ein erforderlicher Parameter fehlt oder einen ungültigen Typ hat.
- `no such screencast`
  - : Wird ausgelöst, wenn keine Aufzeichnung mit der angegebenen [Screencast-ID](#screencast) gefunden wird.
    Auch die Verwendung der ID einer Aufzeichnung, die zuvor mit diesem Befehl beendet wurde, löst diesen Fehler aus.

## Beschreibung

Wenn der Client `browsingContext.stopScreencast` für eine aktive Aufzeichnung sendet, beendet der Browser die Aufnahme und schreibt alle verbleibenden codierten Daten in die durch [`path`](#path) angegebene Datei, bevor er die Antwort auf den Befehl sendet.

Wenn der Browser während der Aufzeichnung keine Daten in die Datei schreiben kann, beendet er die Aufzeichnung automatisch.
Sendet der Client anschließend `browsingContext.stopScreencast`, gibt der Browser eine Erfolgsantwort zurück, die im Objekt [`result`](#rückgabewert) sowohl den Dateipfad `path` als auch eine Fehlerbeschreibung in `error` enthält.

Der Browser löscht die Aufzeichnungsdatei nicht.
Der Client ist dafür verantwortlich, die Datei zu entfernen, sobald sie nicht mehr benötigt wird, sofern er über den erforderlichen Zugriff auf das Dateisystem verfügt.

## Beispiele

### Eine Aufzeichnung beenden

Angenommen, Sie verfügen über eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Sie haben eine Aufzeichnung mit dem Befehl [`browsingContext.startScreencast`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/startScreencast#examples) gestartet.
Der Browser hat im Feld [`screencast`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/startScreencast#screencast) eine Aufzeichnungs-ID zurückgegeben.
Wenn Sie die Aufzeichnung beenden möchten, senden Sie die folgende Nachricht mit der zurückgegebenen Aufzeichnungs-ID:

```json
{
  "id": 6,
  "method": "browsingContext.stopScreencast",
  "params": {
    "screencast": "d746584f-4744-4cb5-aabd-f059ab65144d"
  }
}
```

Der Browser antwortet mit dem Dateipfad der Aufzeichnung wie folgt:

```json
{
  "id": 6,
  "type": "success",
  "result": {
    "path": "/home/example/Downloads/screencast-d746584f-4744-4cb5-aabd-f059ab65144d.webm"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`browsingContext.startScreencast`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/startScreencast)
- Befehl [`browsingContext.captureScreenshot`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/captureScreenshot)
