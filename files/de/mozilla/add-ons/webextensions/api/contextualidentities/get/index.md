---
title: contextualIdentities.get()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/get
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ruft Informationen über eine Kontext-Identität ab, basierend auf ihrer Cookie-Store-ID.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getContext = browser.contextualIdentities.get(
  cookieStoreId                  // string
)
```

### Parameter

- `cookieStoreId`
  - : `string`. Die ID des Cookie-Stores dieser Kontext-Identität. Da jede Kontext-Identität über ihren eigenen Cookie-Store verfügt, dient dies als Identifier für die Kontext-Identität selbst.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} erfüllt wird, die die Identität beschreibt. Sollte die Identität nicht gefunden werden oder das Feature der Kontext-Identitäten nicht aktiviert sein, wird das Promise abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel versucht, die Kontext-Identität abzurufen, deren ID "firefox-container-1" ist:

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
