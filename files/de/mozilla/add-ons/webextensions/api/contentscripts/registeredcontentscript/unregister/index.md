---
title: contentScripts.RegisteredContentScript.unregister()
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/RegisteredContentScript/unregister
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Hebt die Registrierung der Inhalts-Skripte auf, die durch dieses `RegisteredContentScript`-Objekt dargestellt werden.

## Syntax

```js-nolint
registered.unregister()
```

### Parameter

Keine.

### Rückgabewert

Keiner.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code schaltet ein registriertes Inhalts-Skript beim Klick auf eine Browser-Aktion um:

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
