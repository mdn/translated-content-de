---
title: contentScripts.RegisteredContentScript
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/RegisteredContentScript
l10n:
  sourceCommit: 34215030993b429f727a2c73ef06eb029f57beeb
---

{{AddonSidebar}}

Ein `RegisteredContentScript` wird durch einen Aufruf von {{WebExtAPIRef("contentScripts.register()")}} zurückgegeben und repräsentiert die in diesem Aufruf registrierten Inhalts-Skripte.

Es definiert eine einzelne Funktion {{WebExtAPIRef("contentScripts.RegisteredContentScript.unregister", "unregister()")}}, die verwendet werden kann, um die Inhalts-Skripte zu deregistrieren.

> [!NOTE]
> Wenn dieses Objekt zerstört wird (zum Beispiel, weil es außerhalb des Gültigkeitsbereichs liegt), werden die Inhalts-Skripte automatisch deregistriert. Sie sollten daher eine Referenz auf dieses Objekt behalten, solange Sie möchten, dass die Inhalts-Skripte registriert bleiben.

## Methoden

- {{WebExtAPIRef("contentScripts.RegisteredContentScript.unregister","unregister()")}}
  - : Deregistriert die durch dieses Objekt repräsentierten Inhalts-Skripte.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code schaltet ein registriertes Inhalts-Skript bei einem Klick auf eine Browser-Aktion um:

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
