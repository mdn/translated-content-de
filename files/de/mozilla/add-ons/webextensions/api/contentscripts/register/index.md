---
title: contentScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/register
l10n:
  sourceCommit: 05aab3e51dc609cbd66be67516e45d20feeefd0c
---

Verwenden Sie diese Funktion, um ein oder mehrere Content-Skripte zu registrieren.

Es akzeptiert ein Parameter, welcher ein Objekt mit ähnlichen Eigenschaften wie die Objekte im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Manifest-Schlüssel ist (beachten Sie jedoch, dass `content_scripts` ein Array von Objekten ist, während das Argument für `register()` ein Objekt ist).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let registering = browser.contentScripts.register(
  contentScriptOptions       // object
)
```

### Parameter

- `contentScriptOptions`
  - : `object`. Ein `RegisteredContentScriptOptions`-Objekt, das die zu registrierenden Content-Skripte darstellt. Es hat eine ähnliche Syntax wie die Objekte im Array des [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Manifests. Die Unterschiede sind:
    - Eigenschaftsnamen verwenden {{Glossary("camel_case", "camel case")}} anstelle von Unterstrichen ({{Glossary("snake_case", "snake case")}}) — zum Beispiel `excludeMatches`, nicht `exclude_matches`.
    - Die Eigenschaften `js` und `css` erlauben es, sowohl Zeichenfolgen als auch URLs zu registrieren, weshalb ihre Syntax diese Typen unterscheiden muss.

    Das `RegisteredContentScriptOptions`-Objekt hat folgende Eigenschaften:
    - `allFrames` {{optional_inline}}
      - : Gleiche wie [`all_frames` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#all_frames)-Schlüssel.
    - `cookieStoreId` {{optional_inline}}
      - : Eine Zeichenfolge oder ein Array von Zeichenfolgen. Registriert das Content-Skript in den Tabs, die zu einer oder mehreren Cookie-Store-IDs gehören. Dadurch können Skripte für alle Standard- oder nicht-kontextuellen Identitätstabs, private Browsing-Tabs (wenn die [Erweiterung im privaten Browsen aktiviert ist](https://support.mozilla.org/en-US/kb/extensions-private-browsing)), die Tabs einer [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) oder einer Kombination dieser registriert werden. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
    - `css` {{optional_inline}}
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, welche eine URL ist, die vom Manifest der Erweiterung aus zu einer zu registrierenden CSS-Datei führt, oder eine Eigenschaft namens `code`, welche ein zu registrierender CSS-Code ist.
    - `cssOrigin` {{optional_inline}}
      - : `string`. Der Stilursprung für die Injektion, entweder `"user"`, um das CSS als Benutzer-Stylesheet hinzuzufügen, oder `"author"`, um es als Autoren-Stylesheet hinzuzufügen. Standard ist `"author"`. Diese Eigenschaft ist nicht case-sensitiv.
    - `excludeGlobs` {{optional_inline}}
      - : Gleiche wie [`exclude_globs` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#exclude_globs)-Schlüssel.
    - `excludeMatches` {{optional_inline}}
      - : Gleiche wie [`exclude_matches` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#exclude_matches)-Schlüssel.
    - `includeGlobs` {{optional_inline}}
      - : Gleiche wie [`include_globs` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#include_globs)-Schlüssel.
    - `js` {{optional_inline}}
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, welche eine URL ist, die vom Manifest der Erweiterung aus zu einer zu registrierenden JavaScript-Datei führt, oder eine Eigenschaft namens `code`, welche ein zu registrierender JavaScript-Code ist.
    - `matchAboutBlank` {{optional_inline}}
      - : Gleiche wie [`match_about_blank` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_about_blank)-Schlüssel.
    - `matchOriginAsFallback` {{optional_inline}}
      - : Gleiche wie [`match_origin_as_fallback` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_origin_as_fallback)-Schlüssel.
    - `matches`
      - : Gleiche wie [`matches` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#matches)-Schlüssel.
    - `runAt` {{optional_inline}}
      - : Gleiche wie [`run_at` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#run_at)-Schlüssel.
    - `world` {{optional_inline}}
      - : Die Ausführungsumgebung, in der ein Skript ausgeführt werden soll. Gleiche wie [`world` im `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#world)-Schlüssel.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("contentScripts.RegisteredContentScript")}}-Objekt erfüllt wird, das Sie verwenden können, um die Content-Skripte wieder abzumelden.

Derzeit werden Content-Skripte abgemeldet, wenn die zugehörige Erweiterungsseite (von der die Content-Skripte registriert wurden) entladen wird. Daher sollten Sie ein Content-Skript von einer Erweiterungsseite registrieren, die mindestens so lange besteht, wie die Content-Skripte registriert bleiben sollen.

## Beispiele

Dieses Beispiel registriert das `defaultCode`-Content-Skript für alle `.org`-URLs:

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
