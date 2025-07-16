---
title: contentScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/register
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Verwenden Sie diese Funktion, um ein oder mehrere Content-Skripte zu registrieren.

Sie akzeptiert einen Parameter, der ein Objekt mit ähnlichen Eigenschaften wie die Objekte im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Manifest-Schlüssel ist (aber beachten Sie, dass `content_scripts` ein Array von Objekten ist, während das Argument für `register()` ein einzelnes Objekt ist).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let registering = browser.contentScripts.register(
  contentScriptOptions       // object
)
```

### Parameter

- `contentScriptOptions`
  - : `object`. Ein `RegisteredContentScriptOptions` Objekt, das die zu registrierenden Content-Skripte repräsentiert. Es hat eine ähnliche Syntax wie die Objekte im `content_scripts` Manifest-Schlüssel-Array. Die Unterschiede sind:
    - Eigenschaftsnamen verwenden das {{Glossary("camel_case", "camel case")}}, anstatt Unterstriche ({{Glossary("snake_case", "snake case")}}) — zum Beispiel, `excludeMatches`, nicht `exclude_matches`.
    - die Eigenschaften `js` und `css` erlauben es, sowohl Strings als auch URLs zu registrieren, daher muss ihre Syntax diese Typen unterscheiden.

    Das `RegisteredContentScriptOptions` Objekt hat die folgenden Eigenschaften:
    - `allFrames` {{optional_inline}}
      - : Gleich wie [`all_frames` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#all_frames) Schlüssel.
    - `cookieStoreId` {{optional_inline}}
      - : Ein String oder ein Array von Strings. Registriert das Content-Skript in den Tabs, die zu einer oder mehreren Cookie-Store-IDs gehören. Dies ermöglicht die Registrierung von Skripten für alle Standard- oder nicht-kontextuellen Identitäts-Tabs, private Browsing-Tabs (wenn die [Erweiterung im privaten Browsing aktiviert ist](https://support.mozilla.org/en-US/kb/extensions-private-browsing)), die Tabs einer [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) oder einer Kombination dieser. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
    - `css` {{optional_inline}}
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, die eine URL ist, die beim Manifest der Erweiterung beginnt und auf eine zu registrierende CSS-Datei zeigt, oder eine Eigenschaft namens `code`, die einige zu registrierende CSS-Code enthält.
    - `excludeGlobs` {{optional_inline}}
      - : Gleich wie [`exclude_globs` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#exclude_globs) Schlüssel.
    - `excludeMatches` {{optional_inline}}
      - : Gleich wie [`exclude_matches` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#exclude_matches) Schlüssel.
    - `includeGlobs` {{optional_inline}}
      - : Gleich wie [`include_globs` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#include_globs) Schlüssel.
    - `js` {{optional_inline}}
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, die eine URL ist, die beim Manifest der Erweiterung beginnt und auf eine zu registrierende JavaScript-Datei zeigt, oder eine Eigenschaft namens `code`, die einigen zu registrierenden JavaScript-Code enthält.
    - `matchAboutBlank` {{optional_inline}}
      - : Gleich wie [`match_about_blank` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_about_blank) Schlüssel.
    - `matchOriginAsFallback` {{optional_inline}}
      - : Gleich wie [`match_origin_as_fallback` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_origin_as_fallback) Schlüssel.
    - `matches`
      - : Gleich wie [`matches` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#matches) Schlüssel.
    - `runAt` {{optional_inline}}
      - : Gleich wie [`run_at` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#run_at) Schlüssel.
    - `world` {{optional_inline}}
      - : Die Ausführungsumgebung, in der ein Skript ausgeführt werden soll. Gleich wie [`world` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#world) Schlüssel.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("contentScripts.RegisteredContentScript")}} Objekt erfüllt wird, welches Sie verwenden können, um die Content-Skripte abzumelden.

Derzeit werden Content-Skripte abgemeldet, wenn die zugehörige Erweiterungsseite (von der die Content-Skripte registriert wurden) entladen wird. Daher sollten Sie ein Content-Skript von einer Erweiterungsseite registrieren, die mindestens so lange bestehen bleibt, wie Sie die Content-Skripte registriert haben möchten.

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

## Browser-Kompatibilität

{{Compat}}
