---
title: userScripts.ScriptSource
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/ScriptSource
l10n:
  sourceCommit: 20c11f6af0809fa827413acf968b56bf4650d8d4
---

Der Code oder die Quelldatei für ein Benutzer-Skript. Dies beschreibt die Objektwerte der "js"-Eigenschaft in {{WebExtAPIRef("userScripts.execute()", "execute()")}} und {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}.

## Typ

Werte dieses Typs sind ein Objekt, das diese Eigenschaften enthält:

- `file` {{optional_inline}}
  - : `string`. Der Pfad der Datei, die den Benutzer-Skriptcode enthält. Der Pfad ist relativ zum Stammverzeichnis der Erweiterung.
- `code` {{optional_inline}}
  - : `string`. JavaScript-Code für das Benutzer-Skript.

`file` oder `code` muss angegeben werden, nicht beide.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
