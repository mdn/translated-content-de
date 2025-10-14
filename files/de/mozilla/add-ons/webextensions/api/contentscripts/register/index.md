---
title: contentScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/register
l10n:
  sourceCommit: 425b1e0ef0c91cee5abf780f16452379796c0bd1
---

Verwenden Sie diese Funktion, um ein oder mehrere Inhalte-Skripte zu registrieren.

Es akzeptiert einen Parameter, der ein Objekt mit ähnlichen Eigenschaften wie die Objekte im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Manifest-Schlüssel ist (beachten Sie jedoch, dass `content_scripts` ein Array von Objekten ist, während das Argument für `register()` ein einziges Objekt ist).

Die Erweiterung muss die entsprechenden [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Muster in `contentScriptOptions` besitzen, sonst wird der API-Aufruf abgelehnt.

## Syntax

```js-nolint
let registering = browser.contentScripts.register(
  contentScriptOptions       // object
)
```

### Parameter

- `contentScriptOptions`
  - : `object`. Ein `RegisteredContentScriptOptions` Objekt, das die zu registrierenden Inhaltsskripte darstellt. Es hat eine ähnliche Syntax wie die Objekte im Array des [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Manifests. Die Unterschiede sind:
    - Eigenschaftsnamen verwenden {{Glossary("camel_case", "camel case")}} anstelle von Unterstrichen ({{Glossary("snake_case", "snake case")}}) — zum Beispiel `excludeMatches` statt `exclude_matches`.
    - Die Eigenschaften `js` und `css` erlauben es, Strings ebenso wie URLs zu registrieren, daher muss ihre Syntax diese Typen unterscheiden.

    Das `RegisteredContentScriptOptions` Objekt hat folgende Eigenschaften:
    - `allFrames` {{optional_inline}}
      - : Entspricht [`all_frames` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#all_frames) Schlüssel.
    - `cookieStoreId` {{optional_inline}}
      - : Ein String oder Array von Strings. Registriert das Inhaltsskript in den Tabs, die zu einer oder mehreren Cookie-Store-IDs gehören. Dies ermöglicht es, Skripte für alle Standard- oder nicht-kontextbezogenen Identitäts-Tabs, Tabs im privaten Modus (wenn die [Erweiterung im privaten Modus aktiv ist](https://support.mozilla.org/en-US/kb/extensions-private-browsing)), Tabs einer [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) oder eine Kombination dieser zu registrieren. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für mehr Informationen.
    - `css` {{optional_inline}}
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, die eine URL ist, beginnend beim Manifest.json der Erweiterung und auf eine zu registrierende CSS-Datei zeigend, oder eine Eigenschaft namens `code`, was etwas zu registrierender CSS-Code ist.
    - `cssOrigin` {{optional_inline}}
      - : `string`. Der Stil-Ursprung für die Injektion, entweder `"user"`, um das CSS als Benutzerstilblatt hinzuzufügen, oder `"author"`, um es als Autorenstilblatt hinzuzufügen. Standard ist `"author"`. Diese Eigenschaft ist nicht groß-/kleinschreibungsempfindlich.
    - `excludeGlobs` {{optional_inline}}
      - : Entspricht [`exclude_globs` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#exclude_globs) Schlüssel.
    - `excludeMatches` {{optional_inline}}
      - : Entspricht [`exclude_matches` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#exclude_matches) Schlüssel.
    - `includeGlobs` {{optional_inline}}
      - : Entspricht [`include_globs` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#include_globs) Schlüssel.
    - `js` {{optional_inline}}
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, die eine URL ist, beginnend beim Manifest.json der Erweiterung und auf eine zu registrierende JavaScript-Datei zeigend, oder eine Eigenschaft namens `code`, was etwas zu registrierender JavaScript-Code ist.
    - `matchAboutBlank` {{optional_inline}}
      - : Entspricht [`match_about_blank` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_about_blank) Schlüssel.
    - `matchOriginAsFallback` {{optional_inline}}
      - : Entspricht [`match_origin_as_fallback` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_origin_as_fallback) Schlüssel.
    - `matches`
      - : Entspricht [`matches` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#matches) Schlüssel.
    - `runAt` {{optional_inline}}
      - : Entspricht [`run_at` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#run_at) Schlüssel.
    - `world` {{optional_inline}}
      - : Die Ausführungsumgebung, in der ein Skript ausgeführt werden soll. Entspricht [`world` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#world) Schlüssel.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("contentScripts.RegisteredContentScript")}} Objekt erfüllt wird, das Sie verwenden können, um die Inhaltsskripte abzumelden.

Derzeit werden Inhaltsskripte abgemeldet, wenn die zugehörige Erweiterungsseite (von der die Inhaltsskripte registriert wurden) entladen wird, daher sollten Sie ein Inhaltsskript von einer Erweiterungsseite registrieren, die mindestens so lange bestehen bleibt, wie Sie möchten, dass die Inhaltsskripte registriert bleiben.

## Beispiele

Dieses Beispiel registriert das `defaultCode` Inhaltsskript für alle `.org` URLs:

```js
const defaultHosts = "*://*.org/*";
const defaultCode =
  "document.body.innerHTML = '<h1>This page has been eaten<h1>'";

async function register(hosts, code) {
  return await browser.contentScripts.register({
    matches: [hosts],
    js: [{ code }],
    runAt: "document_idle",
  });
}

let registered = register(defaultHosts, defaultCode);
```

Dieser Code registriert die JS-Datei unter content_scripts/example.js:

```js
const scriptObj = await browser.contentScripts.register({
  js: [{ file: "/content_scripts/example.js" }],
  matches: ["<all_urls>"],
  allFrames: true,
  runAt: "document_start",
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
