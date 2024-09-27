---
title: contextualIdentities.query()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/query
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ruft Informationen über alle kontextbezogenen Identitäten ab oder über diejenigen kontextbezogenen Identitäten, die einem bestimmten Filterargument entsprechen.

Dies ist eine asynchrone Funktion, die einen [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getContext = browser.contextualIdentities.query(
  details                  // object
)
```

### Parameter

- `details`

  - : `object`. Ein Objekt, das verwendet werden kann, um die zurückgegebenen kontextbezogenen Identitäten zu filtern. Dies kann jede der folgenden Eigenschaften enthalten:

    - `name` {{optional_inline}}
      - : `string`. Nur kontextbezogene Identitäten mit diesem Namen zurückgeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} Objekten erfüllt wird, wobei jedes eine einzelne Identität beschreibt. Wenn die Funktion für kontextbezogene Identitäten nicht aktiviert ist, wird das Promise abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Abrufen aller kontextbezogenen Identitäten und Protokollieren ihrer Namen:

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

Abrufen aller kontextbezogenen Identitäten, deren Namen "my-thing" sind, und Protokollieren ihrer Namen:

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
