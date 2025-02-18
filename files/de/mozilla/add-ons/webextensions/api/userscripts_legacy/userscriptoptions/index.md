---
title: UserScripts.UserScriptOptions (Legacy)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/UserScriptOptions
l10n:
  sourceCommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

{{AddonSidebar}}

> [!WARNING]
> Dies ist die Dokumentation für das Legacy-`userScripts`-API. Es ist in Firefox für Manifest V2 verfügbar. Für die Funktionalität von Nutzerskripten in Manifest V3 siehe das neue {{WebExtAPIRef("userScripts")}}-API.

Das `UserScriptOptions`-Objekt stellt die Content Scripts dar, die registriert werden sollen. Es hat eine ähnliche Syntax wie die `contentScript`-Optionen, die von `browser.contentScripts.register` unterstützt werden. Die Unterschiede sind:

- Es unterstützt keine CSS-Eigenschaft (verwenden Sie `browser.contentScripts.register`, um Stylesheets dynamisch zu registrieren/deregistrieren).
- Es unterstützt eine optionale `scriptMetadata`-Eigenschaft (als ein einfaches JSON-Objekt, das einige Metadaten enthält, die mit den registrierten `userScripts` verbunden sind).

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
  - : Ein Array von Objekten. Jedes Objekt besitzt entweder eine Eigenschaft mit dem Namen `file`, die eine URL ist, beginnend beim `manifest.json` der Erweiterung und zu einer zu registrierenden JavaScript-Datei zeigt, oder eine Eigenschaft mit dem Namen `code`, die JavaScript-Code enthält, der registriert werden soll.
- `matchAboutBlank` {{optional_inline}}
  - : Entspricht `match_about_blank` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
- `matches`
  - : Entspricht `matches` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
- `runAt` {{optional_inline}}
  - : Entspricht `run_at` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
- `scriptMetadata` {{optional_inline}}
  - : Ein Metadatenwert für Nutzerskripte.

Es hat eine ähnliche Syntax wie die `contentScript`-Optionen, die von `browser.contentScripts.register` unterstützt werden.
