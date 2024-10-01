---
title: contentScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/register
l10n:
  sourceCommit: 7b33fd0009f209120a8dbae834d4e179ce667f50
---

{{AddonSidebar}}

Verwenden Sie diese Funktion, um ein oder mehrere Inhalts-Skripte zu registrieren.

Sie akzeptiert einen Parameter, der ein Objekt mit ähnlichen Eigenschaften wie die Objekte in dem [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Manifest-Schlüssel ist (aber beachten Sie, dass `content_scripts` ein Array von Objekten ist, während das Argument für `register()` ein einzelnes Objekt ist).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let registering = browser.contentScripts.register(
  contentScriptOptions       // object
)
```

### Parameter

- `contentScriptOptions`

  - : `object`. Ein `RegisteredContentScriptOptions`-Objekt, das die zu registrierenden Inhalts-Skripte darstellt. Es hat eine ähnliche Syntax wie die Objekte im Array des [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Manifest-Schlüssels. Die Unterschiede sind:

    - Eigenschaftsnamen verwenden das {{Glossary("camel_case", "Camel Case")}}, anstelle von Unterstrichen ({{Glossary("snake_case", "Snake Case")}}) — zum Beispiel `excludeMatches`, nicht `exclude_matches`.
    - Die Eigenschaften `js` und `css` erlauben es Ihnen, sowohl Strings als auch URLs zu registrieren, sodass ihre Syntax diese Typen unterscheiden muss.

    Das `RegisteredContentScriptOptions`-Objekt hat die folgenden Eigenschaften:

    - `allFrames` {{optional_inline}}
      - : Dasselbe wie [`all_frames` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#all_frames)-Schlüssel.
    - `cookieStoreId` {{optional_inline}}
      - : Ein String oder ein Array von Strings. Registriert das Inhalts-Skript in den Tabs, die zu einer oder mehreren Cookie-Store-IDs gehören. Dies ermöglicht es, Skripte für alle Standard- oder nicht-kontextuellen Identitäts-Tabs, Private-Browsing-Tabs (wenn die [Erweiterung im privaten Browsen aktiviert ist](https://support.mozilla.org/en-US/kb/extensions-private-browsing)), die Tabs einer [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) oder eine Kombination dieser zu registrieren. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
    - `css` {{optional_inline}}
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, die eine URL ist, beginnend beim manifest.json der Erweiterung und zu einer zu registrierenden CSS-Datei zeigend, oder eine Eigenschaft namens `code`, die zu registrierender CSS-Code ist.
    - `excludeGlobs` {{optional_inline}}
      - : Dasselbe wie [`exclude_globs` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#exclude_globs)-Schlüssel.
    - `excludeMatches` {{optional_inline}}
      - : Dasselbe wie [`exclude_matches` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#exclude_matches)-Schlüssel.
    - `includeGlobs` {{optional_inline}}
      - : Dasselbe wie [`include_globs` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#include_globs)-Schlüssel.
    - `js` {{optional_inline}}
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, die eine URL ist, beginnend beim manifest.json der Erweiterung und zu einer zu registrierenden JavaScript-Datei zeigend, oder eine Eigenschaft namens `code`, die zu registrierender JavaScript-Code ist.
    - `matchAboutBlank` {{optional_inline}}
      - : Dasselbe wie [`match_about_blank` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_about_blank)-Schlüssel.
    - `matchOriginAsFallback` {{optional_inline}}
      - : Dasselbe wie [`match_origin_as_fallback` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_origin_as_fallback)-Schlüssel.
    - `matches`
      - : Dasselbe wie [`matches` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#matches)-Schlüssel.
    - `runAt` {{optional_inline}}
      - : Dasselbe wie [`run_at` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#run_at)-Schlüssel.
    - `world` {{optional_inline}}
      - : Die Ausführungsumgebung für ein Skript, das in ausgeführt werden soll. Dasselbe wie [`world` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#world)-Schlüssel.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("contentScripts.RegisteredContentScript")}}-Objekt erfüllt wird, das Sie verwenden können, um die Inhalts-Skripte abzumelden.

Derzeit werden Inhalts-Skripte abgemeldet, wenn die zugehörige Erweiterungsseite (von der die Inhalts-Skripte registriert wurden) entladen wird, daher sollten Sie ein Inhalts-Skript von einer Erweiterungsseite registrieren, die zumindest so lange bestehen bleibt, wie Sie möchten, dass die Inhalts-Skripte registriert bleiben.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel registriert das `defaultCode` Inhalts-Skript für alle `.org` URLs:

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
