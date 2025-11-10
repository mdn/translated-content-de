---
title: userScripts.UserScriptFilter
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/UserScriptFilter
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Eine Liste von Benutzerskripten, die von {{WebExtAPIRef("userScripts.getScripts()")}} oder {{WebExtAPIRef("userScripts.unregister()")}} verarbeitet werden sollen.

## Typ

Werte dieses Typs sind ein Objekt, das diese Eigenschaft enthält:

- `ids` {{optional_inline}}
  - : Ein `array` von `string`. IDs der Benutzerskripte, die von {{WebExtAPIRef("userScripts.getScripts()")}} und {{WebExtAPIRef("userScripts.unregister()")}} verarbeitet werden sollen. Dies stimmt mit Skripten durch das `id`-Feld des {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}} überein. Wenn nicht angegeben, werden alle Benutzerskripte abgeglichen.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
