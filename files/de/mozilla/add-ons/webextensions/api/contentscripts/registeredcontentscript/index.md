---
title: contentScripts.RegisteredContentScript
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/RegisteredContentScript
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein `RegisteredContentScript` wird durch einen Aufruf von {{WebExtAPIRef("contentScripts.register()")}} zurückgegeben und repräsentiert die in diesem Aufruf registrierten Content-Skripte.

Es definiert eine einzelne Funktion {{WebExtAPIRef("contentScripts.RegisteredContentScript.unregister", "unregister()")}}, die verwendet werden kann, um die Content-Skripte abzuregistrieren.

> [!NOTE]
> Wenn dieses Objekt zerstört wird (zum Beispiel, weil es aus dem Geltungsbereich fällt), werden die Content-Skripte automatisch abgemeldet. Daher sollten Sie eine Referenz zu diesem Objekt behalten, solange Sie möchten, dass die Content-Skripte registriert bleiben.

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
