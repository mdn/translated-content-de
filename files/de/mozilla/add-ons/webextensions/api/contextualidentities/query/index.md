---
title: contextualIdentities.query()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/query
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ruft Informationen über alle kontextuellen Identitäten ab oder über solche kontextuellen Identitäten, die dem angegebenen Filterargument entsprechen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getContext = browser.contextualIdentities.query(
  details                  // object
)
```

### Parameter

- `details`
  - : `object`. Ein Objekt, das verwendet werden kann, um die zurückgegebenen kontextuellen Identitäten zu filtern. Dies kann folgende Eigenschaften enthalten:
    - `name` {{optional_inline}}
      - : `string`. Gibt nur kontextuelle Identitäten mit diesem Namen zurück.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} Objekten erfüllt wird, von denen jedes eine einzelne Identität beschreibt. Wenn die Funktion für kontextuelle Identitäten nicht aktiviert ist, wird das Promise abgelehnt.

## Beispiele

Rufen Sie alle kontextuellen Identitäten ab und protokollieren Sie deren Namen:

```js
function onGot(contexts) {
  for (const context of contexts) {
    console.log(`Name: ${context.name}`);
  }
}

function onError(error) {
  console.error(error);
}

browser.contextualIdentities.query({}).then(onGot, onError);
```

Rufen Sie alle kontextuellen Identitäten ab, deren Namen "my-thing" sind, und protokollieren Sie deren Namen:

```js
function onGot(contexts) {
  for (const context of contexts) {
    console.log(`Name: ${context.name}`);
  }
}

function onError(error) {
  console.error(error);
}

browser.contextualIdentities
  .query({
    name: "my-thing",
  })
  .then(onGot, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
