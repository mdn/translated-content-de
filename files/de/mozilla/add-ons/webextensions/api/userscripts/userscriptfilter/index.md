---
title: userScripts.UserScriptFilter
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/UserScriptFilter
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{AddonSidebar}}

Eine Liste von Benutzerskripten, die von {{WebExtAPIRef("userScripts.getScripts()")}} oder {{WebExtAPIRef("userScripts.unregister()")}} verarbeitet werden sollen.

## Typ

Werte dieses Typs sind ein Objekt, das diese Eigenschaft enthält:

- `ids` {{optional_inline}}
  - : `array` von `string`. IDs von Benutzerskripten, die von {{WebExtAPIRef("userScripts.getScripts()")}} und {{WebExtAPIRef("userScripts.unregister()")}} verarbeitet werden sollen. Dies entspricht Skripten anhand des `id`-Feldes von {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}. Wenn nicht angegeben, werden alle Benutzerskripte abgeglichen.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
