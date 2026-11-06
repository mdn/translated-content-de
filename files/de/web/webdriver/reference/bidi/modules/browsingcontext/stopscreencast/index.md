---
title: Befehl `browsingContext.stopScreencast`
short-title: stopScreencast
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/stopScreencast
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{SeeCompatTable}}

Der [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) `browsingContext.stopScreencast` des Moduls [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) beendet die angegebene Bildschirmaufzeichnung und gibt den Pfad zur Aufzeichnungsdatei zurück.

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
  - : Eine Zeichenfolge mit der ID der Aufzeichnung, die beendet werden soll.
    Aufzeichnungs-IDs werden vom Befehl [`browsingContext.startScreencast`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/startScreencast#return_value) zurückgegeben.

### Rückgabewert

Das Objekt `result` in der Antwort enthält die folgenden Felder:

- `error` {{optional_inline}}
  - : Eine Zeichenfolge, die den Fehler beim Schreiben der aufgezeichneten Daten in eine Datei beschreibt.
    Der Wortlaut der Fehlermeldung hängt vom Browser ab.
    Dieses Feld ist nur enthalten, wenn ein Schreibfehler auftritt.
- `path`
  - : Eine Zeichenfolge mit dem Dateipfad, unter dem der Browser die Aufzeichnung speichert.
    Dies ist derselbe Pfad, den [`browsingContext.startScreencast`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/startScreencast#return_value) zurückgibt.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wird ausgelöst, wenn ein erforderlicher Parameter fehlt oder einen ungültigen Typ hat.
- `no such screencast`
  - : Wird ausgelöst, wenn keine Aufzeichnung mit der angegebenen [Screencast-ID](#screencast) gefunden wird.
    Derselbe Fehler wird ausgelöst, wenn Sie die ID einer Aufzeichnung verwenden, die zuvor mit diesem Befehl beendet wurde.

## Beschreibung

Wenn der Client `browsingContext.stopScreencast` für eine aktive Aufzeichnung sendet, beendet der Browser die Erfassung und schreibt alle verbleibenden codierten Daten in die durch [`path`](#path) angegebene Datei, bevor er die Antwort auf den Befehl sendet.

Wenn der Browser während einer laufenden Aufzeichnung keine Daten in die Datei schreiben kann, beendet er die Aufzeichnung automatisch.
Sendet der Client anschließend `browsingContext.stopScreencast`, gibt der Browser eine erfolgreiche Antwort zurück, die im Objekt [`result`](#rückgabewert) sowohl den Dateipfad `path` als auch eine Fehlerbeschreibung in `error` enthält.

Der Browser löscht die Aufzeichnungsdatei nicht.
Der Client ist dafür verantwortlich, die Datei zu entfernen, wenn sie nicht mehr benötigt wird, sofern er über den erforderlichen Zugriff auf das Dateisystem verfügt.

## Beispiele

### Eine Aufzeichnung beenden

Angenommen, Sie verfügen über eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Nehmen wir an, Sie haben mit dem Befehl [`browsingContext.startScreencast`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/startScreencast#examples) eine Aufzeichnung gestartet.
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
