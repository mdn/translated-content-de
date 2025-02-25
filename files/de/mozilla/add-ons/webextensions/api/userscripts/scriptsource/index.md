---
title: userScripts.ScriptSource
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/ScriptSource
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{AddonSidebar}}

Der Code oder die Quelldatei für ein Benutzer-Skript. Dies beschreibt die Objektwerte der Eigenschaft "js" in {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}.

## Typ

Werte dieses Typs sind ein Objekt, das folgende Eigenschaften enthält:

- `file` {{optional_inline}}
  - : `string`. Der Pfad der Datei, die den Benutzer-Skriptcode enthält. Der Pfad ist relativ zum Stammverzeichnis der Erweiterung.
- `allFrames` {{optional_inline}}
  - : `code`. JavaScript-Code für das Benutzer-Skript.

`file` oder `code` muss angegeben werden, nicht beide.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
