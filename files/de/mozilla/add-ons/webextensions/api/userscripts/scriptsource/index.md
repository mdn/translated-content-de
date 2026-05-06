---
title: userScripts.ScriptSource
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/ScriptSource
l10n:
  sourceCommit: 14e9b0589ba62353a7cc08b2e2371b1c4ef0cac6
---

Der Code oder die Quelldatei für ein Benutzer-Skript. Dies beschreibt die Objektwerte der "js"-Eigenschaft in {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}.

## Typ

Werte dieses Typs sind ein Objekt, das folgende Eigenschaften enthält:

- `file` {{optional_inline}}
  - : `string`. Der Pfad der Datei, die den Code des Benutzer-Skripts enthält. Der Pfad ist relativ zum Stammverzeichnis der Erweiterung.
- `code` {{optional_inline}}
  - : `string`. JavaScript-Code für das Benutzer-Skript.

`file` oder `code` muss angegeben werden, nicht beides.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
