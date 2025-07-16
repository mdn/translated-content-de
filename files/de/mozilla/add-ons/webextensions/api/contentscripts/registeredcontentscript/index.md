---
title: contentScripts.RegisteredContentScript
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/RegisteredContentScript
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein `RegisteredContentScript` wird zurückgegeben durch einen Aufruf von {{WebExtAPIRef("contentScripts.register()")}} und repräsentiert die in diesem Aufruf registrierten Content-Skripte.

Es definiert eine einzelne Funktion {{WebExtAPIRef("contentScripts.RegisteredContentScript.unregister", "unregister()")}}, die verwendet werden kann, um die Content-Skripte zu entfernen.

> [!NOTE]
> Wenn dieses Objekt zerstört wird (zum Beispiel, weil es nicht mehr im Gültigkeitsbereich ist), dann werden die Content-Skripte automatisch abgemeldet. Daher sollten Sie eine Referenz auf dieses Objekt behalten, solange Sie möchten, dass die Content-Skripte registriert bleiben.

## Methoden

- {{WebExtAPIRef("contentScripts.RegisteredContentScript.unregister","unregister()")}}
  - : Hebt die Registrierung der durch dieses Objekt repräsentierten Content-Skripte auf.

## Beispiele

Dieser Code schaltet ein registriertes Content-Skript bei einem Klick auf eine Browser-Aktion um:

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
