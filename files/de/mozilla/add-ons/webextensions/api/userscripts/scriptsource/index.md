---
title: userScripts.ScriptSource
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/ScriptSource
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der Code oder die Quelldatei für ein Benutzerskript. Dies beschreibt die Objektwerte der "js"-Eigenschaft in {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}.

## Typ

Werte dieses Typs sind ein Objekt, das die folgenden Eigenschaften enthält:

- `file` {{optional_inline}}
  - : `string`. Der Pfad der Datei, die den Code des Benutzerskripts enthält. Der Pfad ist relativ zum Stammverzeichnis der Erweiterung.
- `allFrames` {{optional_inline}}
  - : `code`. JavaScript-Code für das Benutzerskript.

`file` oder `code` muss angegeben werden, nicht beides.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
