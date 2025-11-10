---
title: contextualIdentities.get()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/get
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ermittelt Informationen über eine kontextuelle Identität anhand ihrer Cookie-Store-ID.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getContext = browser.contextualIdentities.get(
  cookieStoreId                  // string
)
```

### Parameter

- `cookieStoreId`
  - : `string`. Die ID des Cookie-Stores dieser kontextuellen Identität. Da kontextuelle Identitäten jeweils ihren eigenen Cookie-Store haben, dient dies als Kennung für die kontextuelle Identität selbst.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} erfüllt wird, die die Identität beschreibt. Wenn die Identität nicht gefunden werden konnte oder das Feature für kontextuelle Identitäten nicht aktiviert ist, wird das Promise abgelehnt.

## Beispiele

Dieses Beispiel versucht, die kontextuelle Identität abzurufen, deren ID "firefox-container-1" ist:

```js
function onGot(context) {
  if (!context) {
    console.error("Context not found");
  } else {
    console.log(`Name: ${context.name}`);
  }
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities.get("firefox-container-1").then(onGot, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
