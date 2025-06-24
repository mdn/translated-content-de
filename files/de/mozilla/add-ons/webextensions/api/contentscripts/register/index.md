---
title: contentScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/register
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Verwenden Sie diese Funktion, um ein oder mehrere Inhaltsskripte zu registrieren.

Sie akzeptiert einen Parameter, der ein Objekt mit ähnlichen Eigenschaften wie die Objekte im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Manifest-Schlüssel ist (aber beachten Sie, dass `content_scripts` ein Array von Objekten ist, während das Argument für `register()` ein Objekt ist).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let registering = browser.contentScripts.register(
  contentScriptOptions       // object
)
```

### Parameter

- `contentScriptOptions`

  - : `object`. Ein `RegisteredContentScriptOptions`-Objekt, das die zu registrierenden Inhaltsskripte darstellt. Es hat eine ähnliche Syntax wie die Objekte im Array des [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Manifestschlüssels. Die Unterschiede sind:

    - Eigenschaftsnamen verwenden {{Glossary("camel_case", "camel case")}}, anstatt Unterstriche ({{Glossary("snake_case", "snake case")}}) — zum Beispiel `excludeMatches`, nicht `exclude_matches`.
    - Die `js`- und `css`-Eigenschaften ermöglichen es Ihnen, sowohl Zeichenfolgen als auch URLs zu registrieren, daher muss ihre Syntax diese Typen unterscheiden.

    Das `RegisteredContentScriptOptions`-Objekt hat die folgenden Eigenschaften:

    - `allFrames` {{optional_inline}}
      - : Entspricht [`all_frames` im `content_scripts`-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#all_frames).
    - `cookieStoreId` {{optional_inline}}
      - : Ein String oder Array von Strings. Registriert das Inhaltsskript in den Tabs, die zu einer oder mehreren Cookie-Store-IDs gehören. Dies ermöglicht es, Skripte für alle Standard- oder nicht-kontextuellen Identitätstabs, private Browsing-Tabs (wenn die [Erweiterung im privaten Modus aktiviert ist](https://support.mozilla.org/en-US/kb/extensions-private-browsing)), die Tabs einer [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) oder eine Kombination davon zu registrieren. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
    - `css` {{optional_inline}}
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, die eine URL ist, die beim Manifest der Erweiterung beginnt und auf eine zu registrierende CSS-Datei zeigt, oder eine Eigenschaft namens `code`, die einige zu registrierende CSS-Code enthält.
    - `excludeGlobs` {{optional_inline}}
      - : Entspricht [`exclude_globs` im `content_scripts`-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#exclude_globs).
    - `excludeMatches` {{optional_inline}}
      - : Entspricht [`exclude_matches` im `content_scripts`-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#exclude_matches).
    - `includeGlobs` {{optional_inline}}
      - : Entspricht [`include_globs` im `content_scripts`-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#include_globs).
    - `js` {{optional_inline}}
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, die eine URL ist, die beim Manifest der Erweiterung beginnt und auf eine zu registrierende JavaScript-Datei zeigt, oder eine Eigenschaft namens `code`, die einige zu registrierende JavaScript-Code enthält.
    - `matchAboutBlank` {{optional_inline}}
      - : Entspricht [`match_about_blank` im `content_scripts`-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_about_blank).
    - `matchOriginAsFallback` {{optional_inline}}
      - : Entspricht [`match_origin_as_fallback` im `content_scripts`-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_origin_as_fallback).
    - `matches`
      - : Entspricht [`matches` im `content_scripts`-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#matches).
    - `runAt` {{optional_inline}}
      - : Entspricht [`run_at` im `content_scripts`-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#run_at).
    - `world` {{optional_inline}}
      - : Die Ausführungsumgebung, in der ein Skript ausgeführt werden soll. Entspricht [`world` im `content_scripts`-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#world).

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("contentScripts.RegisteredContentScript")}} Objekt erfüllt wird, mit dem Sie die Inhaltsskripte abmelden können.

Derzeit werden Inhaltsskripte abgemeldet, wenn die zugehörige Erweiterungsseite (von der die Inhaltsskripte registriert wurden) entladen wird. Daher sollten Sie ein Inhaltsskript von einer Erweiterungsseite registrieren, die so lange besteht, wie Sie möchten, dass die Inhaltsskripte registriert bleiben.

## Browser-Kompatibilität

{{Compat}}

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

Dieser Code registriert die JS-Datei bei content_scripts/example.js:

```js
const scriptObj = await browser.contentScripts.register({
  js: [{ file: "/content_scripts/example.js" }],
  matches: ["<all_urls>"],
  allFrames: true,
  runAt: "document_start",
});
```

{{WebExtExamples}}
