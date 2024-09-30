---
title: contextualIdentities.query()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/query
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Liefert Informationen über alle kontextuellen Identitäten oder über die kontextuellen Identitäten, die einem bestimmten Filterargument entsprechen.

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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} Objekten erfüllt wird, wobei jedes eine einzelne Identität beschreibt. Wenn die kontextuelle Identitätsfunktion nicht aktiviert ist, wird das Promise abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Abrufen aller kontextuellen Identitäten und Protokollierung ihrer Namen:

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

Abrufen aller kontextuellen Identitäten, deren Namen "my-thing" sind, und Protokollierung ihrer Namen:

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
