---
title: Befehl
slug: Mozilla/Add-ons/WebExtensions/API/commands/Command
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Informationen über einen Befehl. Dies enthält die im [`commands`-Schlüssel des manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) angegebenen Informationen zum Befehl.

Ein Array dieser Objekte wird von {{WebExtAPIRef('commands.getAll()')}} zurückgegeben.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `name` {{optional_inline}}
  - : `string`. Name dieses Befehls. Dieser wird an den {{WebExtAPIRef('commands.onCommand')}}-Ereignis-Listener übergeben.
- `description` {{optional_inline}}
  - : `string`. Beschreibung dieses Befehls. Dies wird hauptsächlich verwendet, um dem Benutzer zu erklären, was dieser Befehl tut.
- `shortcut` {{optional_inline}}
  - : `string`. Taste(n), die zur Ausführung dieses Befehls verwendet werden, angegeben als ein String wie "Ctrl+Shift+Y".

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands)-API von Chromium.
