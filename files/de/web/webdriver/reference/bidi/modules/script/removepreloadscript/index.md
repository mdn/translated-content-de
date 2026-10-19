---
title: Befehl `script.removePreloadScript`
short-title: removePreloadScript
slug: Web/WebDriver/Reference/BiDi/Modules/script/removePreloadScript
l10n:
  sourceCommit: eb950353cc947fb1c00397334b13a5f9457d734a
---

Der [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) `script.removePreloadScript` des Moduls [`script`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script) entfernt das angegebene Preload-Skript.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "script.removePreloadScript",
  "params": {
    "script": "d4b1a0f6-2a3c-4f7d-9e21-5c6b7a8d9e0f"
  }
}
```

### Parameter

Das Feld `params` enthält:

- `script`
  - : Eine Zeichenfolge mit der {{Glossary("UUID", "UUID")}} des zu entfernenden Preload-Skripts.
    Preload-Skript-IDs werden vom Befehl [`script.addPreloadScript`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript) zurückgegeben.

### Rückgabewert

Das Feld `result` in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wird ausgelöst, wenn ein erforderlicher Parameter fehlt oder einen ungültigen Typ hat.
- `no such script`
  - : Wird ausgelöst, wenn kein Preload-Skript mit der angegebenen Skript-ID gefunden wird.

## Beschreibung

Nachdem ein [Preload-Skript](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#preload_scripts) entfernt wurde, führt der Browser es in neuen Dokumenten nicht mehr aus.
Das Entfernen eines Preload-Skripts macht bereits vorgenommene Änderungen nicht rückgängig.

Wenn eine Sitzung endet, entfernt der Browser automatisch alle in dieser Sitzung registrierten Preload-Skripte.

## Beispiele

### Ein Preload-Skript entfernen

Vorausgesetzt, Sie haben eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Angenommen, Sie haben mit [`script.addPreloadScript`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript) ein Preload-Skript registriert, das die URL jedes neuen Dokuments protokolliert.
Der Browser gibt die ID des Preload-Skripts im Feld `script` zurück.

Um die Protokollierung der URLs neuer Dokumente zu beenden, senden Sie die folgende Nachricht, um das Preload-Skript zu entfernen:

```json
{
  "id": 3,
  "method": "script.removePreloadScript",
  "params": {
    "script": "d4b1a0f6-2a3c-4f7d-9e21-5c6b7a8d9e0f"
  }
}
```

Der Browser antwortet mit einem leeren `result`-Objekt:

```json
{
  "id": 3,
  "type": "success",
  "result": {}
}
```

Wenn Sie anschließend einen Kontext zu einem neuen Dokument navigieren, protokolliert das entfernte Preload-Skript die URL des Dokuments nicht mehr.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`script.addPreloadScript`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript)
- Befehl [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate)
- Befehl [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction)
