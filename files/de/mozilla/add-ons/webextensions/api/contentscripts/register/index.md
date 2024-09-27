---
title: contentScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/register
l10n:
  sourceCommit: 7b33fd0009f209120a8dbae834d4e179ce667f50
---

{{AddonSidebar}}

Verwenden Sie diese Funktion, um einen oder mehrere Content-Skripte zu registrieren.

Sie akzeptiert einen Parameter, bei dem es sich um ein Objekt mit ähnlichen Eigenschaften wie den Objekten handelt, die im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Manifest-Schlüssel angegeben sind (beachten Sie jedoch, dass `content_scripts` ein Array von Objekten ist, während das Argument für `register()` ein einzelnes Objekt ist).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let registering = browser.contentScripts.register(
  contentScriptOptions       // object
)
```

### Parameter

- `contentScriptOptions`

  - : `object`. Ein `RegisteredContentScriptOptions`-Objekt, das die zu registrierenden Content-Skripte repräsentiert. Es weist eine ähnliche Syntax wie die Objekte im Array des [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Manifest-Schlüssels auf. Die Unterschiede sind:

    - Eigenschaftsnamen verwenden [Camel Case](/de/docs/Glossary/camel_case), anstatt Unterstriche ([Snake Case](/de/docs/Glossary/snake_case)) — zum Beispiel `excludeMatches`, nicht `exclude_matches`.
    - Die `js`- und `css`-Eigenschaften ermöglichen die Registrierung von Zeichenketten sowie von URLs, sodass ihre Syntax diese Typen unterscheidet.

    Das `RegisteredContentScriptOptions`-Objekt hat die folgenden Eigenschaften:

    - `allFrames` {{optional_inline}}
      - : Entspricht [`all_frames` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#all_frames) Schlüssel.
    - `cookieStoreId` {{optional_inline}}
      - : Ein String oder Array von Strings. Registriert das Content-Skript in den Tabs, die zu einem oder mehreren Cookie Store IDs gehören. Dies ermöglicht es, Skripte für alle Standard- oder nicht-kontextuellen Identitätstabs, private Browsing-Tabs (wenn die [Erweiterung im privaten Browsing aktiviert ist](https://support.mozilla.org/en-US/kb/extensions-private-browsing)), die Tabs einer [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) oder einer Kombination dieser zu registrieren. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
    - `css` {{optional_inline}}
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft mit dem Namen `file`, bei der es sich um eine URL handelt, die vom Manifest.json der Erweiterung aus begonnen und auf eine CSS-Datei zeigt, die registriert werden soll, oder eine Eigenschaft mit dem Namen `code`, bei der es sich um einige CSS-Codes handelt, die registriert werden sollen.
    - `excludeGlobs` {{optional_inline}}
      - : Entspricht [`exclude_globs` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#exclude_globs) Schlüssel.
    - `excludeMatches` {{optional_inline}}
      - : Entspricht [`exclude_matches` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#exclude_matches) Schlüssel.
    - `includeGlobs` {{optional_inline}}
      - : Entspricht [`include_globs` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#include_globs) Schlüssel.
    - `js` {{optional_inline}}
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft mit dem Namen `file`, bei der es sich um eine URL handelt, die vom Manifest.json der Erweiterung aus begonnen und auf eine JavaScript-Datei zeigt, die registriert werden soll, oder eine Eigenschaft mit dem Namen `code`, bei der es sich um einige JavaScript-Codes handelt, die registriert werden sollen.
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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("contentScripts.RegisteredContentScript")}} Objekt erfüllt wird, das Sie verwenden können, um die Content-Skripte zu deregistrieren.

Derzeit werden Content-Skripte deregistriert, wenn die zugehörige Erweiterungsseite (von der die Content-Skripte registriert wurden) entladen wird. Sie sollten also ein Content-Skript von einer Erweiterungsseite registrieren, die mindestens so lange bestehen bleibt, wie Sie möchten, dass die Content-Skripte registriert bleiben.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel registriert das `defaultCode` Content-Skript für alle `.org` URLs:

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
