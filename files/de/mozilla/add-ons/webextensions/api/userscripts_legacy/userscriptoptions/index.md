---
title: UserScripts.UserScriptOptions (Legacy)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/UserScriptOptions
l10n:
  sourceCommit: d9e11f88996e97a259d2ec47f47a660062c12c4f
---

{{AddonSidebar}}

> [!WARNING]
> Dies ist die Dokumentation für die veraltete API `userScripts`. Sie ist in Firefox für Manifest V2 verfügbar. Um Funktionen mit Benutzerskripten in Manifest V3 zu verwenden, siehe die neue {{WebExtAPIRef("userScripts")}} API.

Das `UserScriptOptions`-Objekt repräsentiert die zu registrierenden Inhaltsskripte. Es hat eine ähnliche Syntax wie die `contentScript`-Optionen, die von `browser.contentScripts.register` unterstützt werden. Die Unterschiede sind:

- Es unterstützt keine CSS-Eigenschaft (verwenden Sie `browser.contentScripts.register`, um Stylesheets dynamisch zu registrieren/abzumelden)
- Es unterstützt eine optionale `scriptMetadata`-Eigenschaft (als einfaches JSON-Objekt, das einige Metadateneigenschaften enthält, die den registrierten `userScripts` zugeordnet sind)

Das `UserScriptOptions`-Objekt hat die folgenden Eigenschaften:

- `allFrames` {{optional_inline}}
  - : Entspricht `all_frames` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
- `excludeGlobs` {{optional_inline}}
  - : Entspricht `exclude_globs` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
- `excludeMatches` {{optional_inline}}
  - : Entspricht `exclude_matches` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
- `includeGlobs` {{optional_inline}}
  - : Entspricht `include_globs` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
- `js` {{optional_inline}}
  - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, die eine URL ist, die im Manifest.json des Add-ons beginnt und auf eine zu registrierende JavaScript-Datei zeigt, oder eine Eigenschaft namens `code`, die JavaScript-Code zum Registrieren enthält.
- `matchAboutBlank` {{optional_inline}}
  - : Entspricht `match_about_blank` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
- `matches`
  - : Entspricht `matches` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
- `runAt` {{optional_inline}}
  - : Entspricht `run_at` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
- `scriptMetadata` {{optional_inline}}
  - : Ein Benutzerskript-Metadatenwert.

Es hat eine ähnliche Syntax wie die `contentScript`-Optionen, die von `browser.contentScripts.register` unterstützt werden.
