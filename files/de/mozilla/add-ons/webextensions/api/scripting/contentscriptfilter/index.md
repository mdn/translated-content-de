---
title: scripting.ContentScriptFilter
slug: Mozilla/Add-ons/WebExtensions/API/scripting/ContentScriptFilter
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dieses Objekt enthält eine Liste von Skript-IDs, die mit {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} abgerufen oder mit {{WebExtAPIRef("scripting.unregisterContentScripts()")}} abgemeldet werden können.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `ids`
  - : `array` von `string`. Array von Skript-IDs.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-ContentScriptFilter) API von Chromium.
