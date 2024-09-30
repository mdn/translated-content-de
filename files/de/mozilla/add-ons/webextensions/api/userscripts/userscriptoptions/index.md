---
title: UserScripts.UserScriptOptions
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/UserScriptOptions
l10n:
  sourceCommit: d6856a051d0ba078ec1d24b80908b1ca174917db
---

{{AddonSidebar}}

Das `UserScriptOptions`-Objekt repräsentiert die Content-Skripte, die registriert werden sollen. Es hat eine ähnliche Syntax wie die `contentScript`-Optionen, die von `browser.contentScripts.register` unterstützt werden. Die Unterschiede sind:

- Es unterstützt keine `CSS`-Eigenschaft (verwenden Sie `browser.contentScripts.register`, um Stylesheets dynamisch zu registrieren/abzumelden)
- Es unterstützt eine optionale `scriptMetadata`-Eigenschaft (als einfaches JSON-Objekt, das einige Metadaten-Eigenschaften enthält, die den registrierten `userScripts` zugeordnet sind)

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
  - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, die eine URL ist, beginnend bei der `extension's manifest.json` und auf eine zu registrierende JavaScript-Datei zeigend, oder eine Eigenschaft namens `code`, die ein zu registrierender JavaScript-Code ist.
- `matchAboutBlank` {{optional_inline}}
  - : Entspricht `match_about_blank` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
- `matches`
  - : Entspricht `matches` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
- `runAt` {{optional_inline}}
  - : Entspricht `run_at` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
- `scriptMetadata` {{optional_inline}}
  - : Ein `user script metadata`-Wert

Es hat eine ähnliche Syntax wie die `contentScript`-Optionen, die von `browser.contentScripts.register` unterstützt werden.
