---
title: contextualIdentities.remove()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/remove
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Entfernt eine kontextuelle Identität unter Angabe ihrer Cookie-Store-ID.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removeContext = browser.contextualIdentities.remove(
  cookieStoreId                  // string
)
```

### Parameter

- `cookieStoreId`
  - : `string`. Die ID des Cookie-Stores der kontextuellen Identität. Da kontextuelle Identitäten jeweils ihren eigenen Cookie-Store haben, dient dies als Identifikator für die kontextuelle Identität selbst.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} erfüllt wird, die die entfernte Identität beschreibt. Wenn die Identität nicht gefunden werden konnte oder das Feature für kontextuelle Identitäten nicht aktiviert ist, wird das Promise abgelehnt.

## Kompatibilität der Browser

{{Compat}}

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