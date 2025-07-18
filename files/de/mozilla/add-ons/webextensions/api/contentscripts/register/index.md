---
title: contentScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/register
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Verwenden Sie diese Funktion, um ein oder mehrere Content-Skripte zu registrieren.

Sie akzeptiert einen Parameter, der ein Objekt mit ähnlichen Eigenschaften wie die Objekte ist, die im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Manifest-Schlüssel angegeben sind (aber beachten Sie, dass `content_scripts` ein Array von Objekten ist, während das Argument von `register()` ein einzelnes Objekt ist).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let registering = browser.contentScripts.register(
  contentScriptOptions       // object
)
```

### Parameter

- `contentScriptOptions`
  - : `object`. Ein `RegisteredContentScriptOptions` Objekt, das die zu registrierenden Content-Skripte repräsentiert. Es hat eine ähnliche Syntax wie die Objekte im Array des [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Manifest-Schlüssels. Die Unterschiede sind:
    - Eigenschaftsnamen verwenden {{Glossary("camel_case", "camel case")}} anstelle von Unterstrichen ({{Glossary("snake_case", "snake case")}}) — zum Beispiel `excludeMatches` statt `exclude_matches`.
    - Die `js` und `css` Eigenschaften erlauben es, sowohl Strings als auch URLs zu registrieren, daher muss ihre Syntax diese Typen unterscheiden.

    Das `RegisteredContentScriptOptions` Objekt hat die folgenden Eigenschaften:
    - `allFrames` {{optional_inline}}
      - : Entspricht [`all_frames` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#all_frames) Schlüssel.
    - `cookieStoreId` {{optional_inline}}
      - : Ein String oder ein Array von Strings. Registriert das Content-Skript in den Tabs, die zu einer oder mehreren Cookie-Store-IDs gehören. Dies ermöglicht die Registrierung von Skripten für alle Standard- oder nicht-kontextbezogenen Identitäts-Tabs, Private-Browsing-Tabs (wenn die [Erweiterung im privaten Modus aktiviert ist](https://support.mozilla.org/en-US/kb/extensions-private-browsing)), die Tabs einer [kontextbezogenen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) oder einer Kombination davon. Siehe [Arbeiten mit kontextbezogenen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
    - `css` {{optional_inline}}
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, die eine URL ist, die beim Manifest der Erweiterung beginnt und auf eine zu registrierende CSS-Datei zeigt, oder eine Eigenschaft namens `code`, die einige zu registrierende CSS-Code enthält.
    - `excludeGlobs` {{optional_inline}}
      - : Entspricht [`exclude_globs` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#exclude_globs) Schlüssel.
    - `excludeMatches` {{optional_inline}}
      - : Entspricht [`exclude_matches` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#exclude_matches) Schlüssel.
    - `includeGlobs` {{optional_inline}}
      - : Entspricht [`include_globs` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#include_globs) Schlüssel.
    - `js` {{optional_inline}}
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, die eine URL ist, die beim Manifest der Erweiterung beginnt und auf eine zu registrierende JavaScript-Datei zeigt, oder eine Eigenschaft namens `code`, die einige zu registrierende JavaScript-Code enthält.
    - `matchAboutBlank` {{optional_inline}}
      - : Entspricht [`match_about_blank` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_about_blank) Schlüssel.
    - `matchOriginAsFallback` {{optional_inline}}
      - : Entspricht [`match_origin_as_fallback` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_origin_as_fallback) Schlüssel.
    - `matches`
      - : Entspricht [`matches` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#matches) Schlüssel.
    - `runAt` {{optional_inline}}
      - : Entspricht [`run_at` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#run_at) Schlüssel.
    - `world` {{optional_inline}}
      - : Die Ausführungsumgebung, in der das Skript ausgeführt wird. Entspricht [`world` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#world) Schlüssel.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("contentScripts.RegisteredContentScript")}} Objekt erfüllt wird, das Sie verwenden können, um die Content-Skripte abzuregistrieren.

Derzeit werden Content-Skripte abgemeldet, wenn die zugehörige Erweiterungsseite (von der die Content-Skripte registriert wurden) entladen wird. Daher sollten Sie ein Content-Skript von einer Erweiterungsseite aus registrieren, die zumindest so lange besteht, wie Sie die Content-Skripte registriert halten wollen.

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

## Browser-Kompatibilität

{{Compat}}
