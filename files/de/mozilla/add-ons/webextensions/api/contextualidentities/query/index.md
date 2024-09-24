---
title: contextualIdentities.query()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/query
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ruft Informationen über alle kontextuellen Identitäten ab oder über diejenigen, die mit einem angegebenen Filterargument übereinstimmen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getContext = browser.contextualIdentities.query(
  details                  // object
)
```

### Parameter

- `details`

  - : `object`. Ein Objekt, das verwendet werden kann, um die zurückgegebenen kontextuellen Identitäten zu filtern. Es kann eine der folgenden Eigenschaften enthalten:

    - `name` {{optional_inline}}
      - : `string`. Gibt nur kontextuelle Identitäten mit diesem Namen zurück.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}}-Objekten erfüllt wird, von denen jedes eine einzelne Identität beschreibt. Wenn die Funktion für kontextuelle Identitäten nicht aktiviert ist, wird das Versprechen abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Ruft alle kontextuellen Identitäten ab und protokolliert deren Namen:

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

Ruft alle kontextuellen Identitäten ab, deren Namen "my-thing" sind, und protokolliert deren Namen:

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
