---
title: Befehl
slug: Mozilla/Add-ons/WebExtensions/API/commands/Command
l10n:
  sourceCommit: 7f4c213138347a46655773421984057df58c0cc0
---

{{AddonSidebar}}

Informationen zu den Einstellungen für die Befehle, die im [`commands` manifest.json-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) angegeben sind.

Ein Array dieser Objekte wird von {{WebExtAPIRef('commands.getAll()')}} zurückgegeben.

## Typ

Ein Wert dieses Typs ist ein Objekt, das diese Eigenschaften für die Befehle enthält:

- `name`
  - : `string`. Name des Befehls. Dieser wird an den {{WebExtAPIRef('commands.onCommand')}} Ereignis-Listener übergeben.
- `description` {{optional_inline}}
  - : `string`. Beschreibung des Befehls. Diese wird verwendet, um dem Benutzer zu erklären, was dieser Befehl tut.
- `shortcut` {{optional_inline}}
  - : `string`. Tasten, die zum Ausführen des Befehls verwendet werden, als String angegeben. Weitere Details finden Sie im Abschnitt [shortcut values](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#shortcut_values) der Dokumentation zum `commands` manifest-Schlüssel.

`description` und `shortcut` spiegeln die im `commands` manifest.json-Schlüssel angegebenen Werte wider, es sei denn, sie wurden mit {{WebExtAPIRef('commands.update()')}} aktualisiert oder im Falle der Tastenkombination vom Benutzer angepasst.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands).
