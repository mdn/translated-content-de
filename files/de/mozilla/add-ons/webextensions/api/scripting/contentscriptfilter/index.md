---
title: scripting.ContentScriptFilter
slug: Mozilla/Add-ons/WebExtensions/API/scripting/ContentScriptFilter
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Dieses Objekt enthält eine Liste von IDs von Skripten, die mit {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} abgerufen oder mit {{WebExtAPIRef("scripting.unregisterContentScripts()")}} abgemeldet werden können.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `ids`
  - : `array` von `string`. Array von Skript-IDs.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-ContentScriptFilter) API.
