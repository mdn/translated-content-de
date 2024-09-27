---
title: UserScripts.UserScriptOptions
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/UserScriptOptions
l10n:
  sourceCommit: d6856a051d0ba078ec1d24b80908b1ca174917db
---

{{AddonSidebar}}

Das `UserScriptOptions`-Objekt repräsentiert die zu registrierenden Inhaltsskripte. Es hat eine ähnliche Syntax wie die `contentScript`-Optionen, die von `browser.contentScripts.register` unterstützt werden. Die Unterschiede sind:

- Es unterstützt keine CSS-Eigenschaft (verwenden Sie `browser.contentScripts.register`, um Stylesheets dynamisch zu registrieren/abzumelden).
- Es unterstützt eine optionale `scriptMetadata`-Eigenschaft (als einfaches JSON-Objekt, das einige Metadateneigenschaften enthält, die den registrierten `userScripts` zugeordnet sind).

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
  - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, wobei es sich um eine URL handelt, die im Manifest.json der Erweiterung beginnt und auf eine zu registrierende JavaScript-Datei zeigt, oder eine Eigenschaft namens `code`, die etwas zu registrierenden JavaScript-Code enthält.
- `matchAboutBlank` {{optional_inline}}
  - : Entspricht `match_about_blank` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
- `matches`
  - : Entspricht `matches` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
- `runAt` {{optional_inline}}
  - : Entspricht `run_at` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
- `scriptMetadata` {{optional_inline}}
  - : Ein Benutzerskript-Metadatenwert

Es hat eine ähnliche Syntax wie die `contentScript`-Optionen, die von `browser.contentScripts.register` unterstützt werden.
