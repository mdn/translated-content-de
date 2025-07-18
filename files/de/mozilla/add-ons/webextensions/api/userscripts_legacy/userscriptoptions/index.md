---
title: UserScripts.UserScriptOptions (Legacy)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/UserScriptOptions
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!WARNING]
> Dies ist die Dokumentation für die veraltete `userScripts` API. Sie ist in Firefox für Manifest V2 verfügbar. Für die Funktionalität der Benutzerskripte in Manifest V3 siehe die neue {{WebExtAPIRef("userScripts")}} API.

Das `UserScriptOptions`-Objekt repräsentiert die Content-Skripte, die registriert werden sollen. Es hat eine ähnliche Syntax wie die `contentScript`-Optionen, die von `browser.contentScripts.register` unterstützt werden. Die Unterschiede sind:

- Es unterstützt keine CSS-Eigenschaft (verwenden Sie `browser.contentScripts.register`, um Stylesheets dynamisch zu registrieren/abzumelden).
- Es unterstützt eine optionale `scriptMetadata`-Eigenschaft (als einfaches JSON-Objekt, das einige Metadaten-Eigenschaften enthält, die mit den registrierten `userScripts` verbunden sind).

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
  - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, die eine URL ist, die beim Manifest.json der Erweiterung beginnt und auf eine zu registrierende JavaScript-Datei zeigt, oder eine Eigenschaft namens `code`, die JavaScript-Code zur Registrierung ist.
- `matchAboutBlank` {{optional_inline}}
  - : Entspricht `match_about_blank` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
- `matches`
  - : Entspricht `matches` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
- `runAt` {{optional_inline}}
  - : Entspricht `run_at` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
- `scriptMetadata` {{optional_inline}}
  - : Ein Metadatenwert für Benutzerskripte.

Es hat eine ähnliche Syntax wie die `contentScript`-Optionen, die von `browser.contentScripts.register` unterstützt werden.
