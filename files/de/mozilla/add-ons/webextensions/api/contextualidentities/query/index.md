---
title: contextualIdentities.query()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/query
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Erhält Informationen über alle kontextuellen Identitäten oder über jene kontextuellen Identitäten, die einem angegebenen Filterargument entsprechen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getContext = browser.contextualIdentities.query(
  details                  // object
)
```

### Parameter

- `details`
  - : `object`. Ein Objekt, das verwendet werden kann, um die zurückgegebenen kontextuellen Identitäten zu filtern. Es kann die folgenden Eigenschaften enthalten:
    - `name` {{optional_inline}}
      - : `string`. Gibt nur kontextuelle Identitäten mit diesem Namen zurück.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} Objekten erfüllt wird, die jeweils eine einzelne Identität beschreiben. Wenn die Funktion für kontextuelle Identitäten nicht aktiviert ist, wird das Promise abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Rufen Sie alle kontextuellen Identitäten ab und geben Sie ihre Namen aus:

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

Rufen Sie alle kontextuellen Identitäten ab, deren Namen "my-thing" sind, und geben Sie ihre Namen aus:

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
