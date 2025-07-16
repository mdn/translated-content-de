---
title: scripting.ContentScriptFilter
slug: Mozilla/Add-ons/WebExtensions/API/scripting/ContentScriptFilter
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Dieses Objekt enthält eine Liste von Skript-IDs, die mit {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} abgerufen oder mit {{WebExtAPIRef("scripting.unregisterContentScripts()")}} abgemeldet werden sollen.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `ids`
  - : `array` von `string`. Array von Skript-IDs.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-ContentScriptFilter) API von Chromium.
