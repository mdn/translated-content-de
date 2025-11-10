---
title: contextualIdentities.query()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/query
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Erhält Informationen über alle kontextuellen Identitäten oder über diejenigen kontextuellen Identitäten, die einem angegebenen Filterargument entsprechen.

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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}}-Objekten erfüllt wird. Jedes beschreibt eine einzelne Identität. Wenn die Funktion für kontextuelle Identitäten nicht aktiviert ist, wird das Promise abgelehnt.

## Beispiele

Abfrage aller kontextuellen Identitäten und Protokollieren ihrer Namen:

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

Abfrage aller kontextuellen Identitäten, deren Namen "my-thing" sind, und Protokollieren ihrer Namen:

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
