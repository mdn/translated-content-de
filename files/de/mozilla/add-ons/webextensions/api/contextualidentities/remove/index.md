---
title: contextualIdentities.remove()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/remove
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Entfernt eine kontextuelle Identität anhand ihrer Cookie Store-ID.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removeContext = browser.contextualIdentities.remove(
  cookieStoreId                  // string
)
```

### Parameter

- `cookieStoreId`
  - : `string`. Die ID des Cookie Stores der kontextuellen Identität. Da jede kontextuelle Identität einen eigenen Cookie Store hat, dient dies als Bezeichner für die kontextuelle Identität selbst.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} erfüllt wird, die die entfernte Identität beschreibt. Wenn die Identität nicht gefunden werden konnte oder das Feature für kontextuelle Identitäten nicht aktiviert ist, wird das Versprechen abgelehnt.

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
