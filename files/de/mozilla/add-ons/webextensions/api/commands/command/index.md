---
title: Kommando
slug: Mozilla/Add-ons/WebExtensions/API/commands/Command
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Informationen über die Einstellungen für die Befehle, die im [`commands`-Schlüssel der manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) angegeben sind.

Ein Array dieser Objekte wird von {{WebExtAPIRef('commands.getAll()')}} zurückgegeben.

## Typ

Ein Wert dieses Typs ist ein Objekt, das diese Eigenschaften für die Befehle enthält:

- `name`
  - : `string`. Name des Befehls. Dieser wird in den {{WebExtAPIRef('commands.onCommand')}} Ereignis-Listener übergeben.
- `description` {{optional_inline}}
  - : `string`. Beschreibung des Befehls. Diese wird verwendet, um dem Benutzer zu erklären, was dieser Befehl tut.
- `shortcut` {{optional_inline}}
  - : `string`. Tasten, die zur Ausführung des Befehls verwendet werden und als String angegeben sind. Siehe den Abschnitt [Shortcut-Werte](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#shortcut_values) der Dokumentation des `commands`-Schlüssels für weitere Details.

`description` und `shortcut` spiegeln die im `commands`-Schlüssel der manifest.json angegebenen Werte wider, es sei denn, sie wurden mit {{WebExtAPIRef('commands.update()')}} aktualisiert oder im Fall des Shortcuts vom Benutzer angepasst.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands) API.
