---
title: contextualIdentities.remove()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/remove
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Entfernt eine kontextuelle Identität anhand ihrer Cookie-Store-ID.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removeContext = browser.contextualIdentities.remove(
  cookieStoreId                  // string
)
```

### Parameter

- `cookieStoreId`
  - : `string`. Die ID des Cookie-Stores der kontextuellen Identität. Da kontextuelle Identitäten jeweils ihren eigenen Cookie-Store haben, dient dies als Kennung für die kontextuelle Identität selbst.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} erfüllt wird, die die Identität beschreibt, die entfernt wurde. Wenn die Identität nicht gefunden werden konnte oder die Funktion für kontextuelle Identitäten nicht aktiviert ist, wird das Promise abgelehnt.

## Beispiele

Dieses Beispiel versucht, die kontextuelle Identität zu entfernen, deren ID "firefox-container-1" ist:

```js
function onRemoved(context) {
  if (!context) {
    console.error("Context not found");
  } else {
    console.log(`Removed identity: ${context.cookieStoreId}.`);
  }
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities
  .remove("firefox-container-1")
  .then(onRemoved, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
