---
title: contentScripts.RegisteredContentScript.unregister()
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/RegisteredContentScript/unregister
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Hebt die Registrierung der durch dieses `RegisteredContentScript`-Objekt dargestellten Inhaltsskripte auf.

## Syntax

```js-nolint
registered.unregister()
```

### Parameter

Keine.

### Rückgabewert

Keiner.

## Beispiele

Dieser Code wechselt ein registriertes Inhaltsskript bei einem Klick auf eine Browseraktion:

```js
let registered = null;

async function register() {
  registered = await browser.contentScripts.register({
    matches: ["*://*.org/*"],
    js: [
      {
        code: "document.body.innerHTML = '<h1>This page has been eaten<h1>'",
      },
    ],
    runAt: "document_idle",
  });
}

function toggle() {
  if (registered) {
    registered.unregister();
    registered = null;
  } else {
    register();
  }
}

browser.browserAction.onClicked.addListener(toggle);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
