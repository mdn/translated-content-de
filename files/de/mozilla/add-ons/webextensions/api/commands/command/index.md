---
title: Befehl
slug: Mozilla/Add-ons/WebExtensions/API/commands/Command
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Informationen zu den Einstellungen für die Befehle, die im [`commands` manifest.json key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) angegeben sind.

Ein Array dieser Objekte wird von {{WebExtAPIRef('commands.getAll()')}} zurückgegeben.

## Typ

Ein Wert dieses Typs ist ein Objekt, das diese Eigenschaften für die Befehle enthält:

- `name`
  - : `string`. Name des Befehls. Dieser wird an den {{WebExtAPIRef('commands.onCommand')}} Ereignis-Listener übergeben.
- `description` {{optional_inline}}
  - : `string`. Beschreibung des Befehls. Diese wird verwendet, um dem Benutzer zu erklären, was dieser Befehl bewirkt.
- `shortcut` {{optional_inline}}
  - : `string`. Tasten, die verwendet werden, um den Befehl auszuführen, angegeben als Zeichenkette. Weitere Details finden Sie im Abschnitt [shortcut values](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#shortcut_values) der Dokumentation des `commands` manifest-Keys.

`description` und `shortcut` spiegeln die Werte wider, die im `commands` manifest.json key angegeben sind, es sei denn, sie wurden mit {{WebExtAPIRef('commands.update()')}} aktualisiert oder, im Fall des Shortcuts, vom Benutzer angepasst.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands).
